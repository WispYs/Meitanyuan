<template>
  <div class="page-container upload-page">
    <div class="upload-button">
      <el-button type="primary" size="medium"><i class="el-icon-plus el-icon--left" />新建文件</el-button>
      <el-button type="success" size="medium" plain @click="uploadDialogVisible = true"><i class="el-icon-upload el-icon--left" />上传</el-button>
      <el-button type="danger" size="medium" plain @click="deleteBatches"><i class="el-icon-delete el-icon--left" />批量删除</el-button>
    </div>
    <el-table
      ref="multipleTable"
      :data="list"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
      />
      <el-table-column label="项目文件">
        <template slot-scope="scope">
          <div class="upload-item">
            <img src="@/assets/images/file.png" alt="">
            <div class="upload-info">
              <h4>{{ scope.row.title }}</h4>
              <span>{{ scope.row.updateTime }}</span>
              <span>{{ scope.row.uploader }}</span>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="150" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>
          <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
          <el-button type="text" size="small" style="color: red" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.size"
      @pagination="__fetchData"
    />
    <upload-file
      :dialog-visible="uploadDialogVisible"
      :multiple="false"
      @close-dialog="uploadDialogVisible = false"
      @upload-submit="uploadSubmit"
    />
  </div>
</template>
<script>
import Pagination from '@/components/Pagination'
import UploadFile from '@/components/UploadFile'
import { getUploadList } from '@/api/table'
export default {
  components: { Pagination, UploadFile },
  data() {
    return {
      list: null,
      listLoading: true,
      total: 0,
      listQuery: {
        page: 1,
        size: 10
      },
      multipleSelection: [],
      uploadDialogVisible: false
    }
  },
  mounted() {
    this.__fetchData()
  },
  methods: {
    __fetchData() {
      this.listLoading = true
      getUploadList().then(response => {
        this.listLoading = false
        this.list = response.data.items
        this.total = response.data.total
      })
    },
    // 改变所选项
    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    },
    handleClick(row) {
      console.log(row)
    },

    // 上传文件控件成功回调
    uploadSubmit(fileList) {
      console.log(fileList)
      this.uploadDialogVisible = false
    },

    del(id) {
      this.$confirm('确定删除该项目文件?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(id)
        this.$message.success('删除成功')
      })
    },
    // 批量删除
    deleteBatches() {
      const selectId = []
      this.multipleSelection.forEach(it => selectId.push(it.id))
      if (selectId.length === 0) {
        this.$message.warning('请选择所删除的文件')
        return false
      }
      this.$confirm('确定删除所选中文件?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(selectId)
        this.$message.success('删除成功')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .upload-page {
    .upload-button {
      padding: 10px 0;
      border-bottom: 1px solid #ededed;
    }
    .upload-item {
      img {
        display: inline-block;
        width: 32px;
        height: 32px;
        margin-right: 15px;
      }
      .upload-info {
        display: inline-block;
        h4 {
          font-weight: normal;
          line-height: 20px;
          font-size: 14px;
          margin: 0;
        }
        span {
          font-size: 13px;
          color: #999;
          margin-right: 20px;
        }
      }
    }
  }
</style>
