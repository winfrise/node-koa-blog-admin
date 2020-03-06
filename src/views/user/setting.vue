<template>
  <div class="app-container">
    <el-row :gutter="32">
      <el-col :span="16">
        <div>个人信息：</div>
        <el-table
          :show-header="false"
          :data="list"
          style="width: 100%"
        >
          <el-table-column
            width="180"
          >
            <template slot-scope="{row}">
              <span>{{ row.label }}</span>
            </template>
          </el-table-column>

          <el-table-column min-width="300px">
            <template slot-scope="{row}">
              <template v-if="row.isEdit">
                <el-input v-model="row.value" class="edit-input" size="small" />
                <el-button
                  class="cancel-btn"
                  size="small"
                  icon="el-icon-refresh"
                  type="warning"
                  @click="cancelEdit(row)"
                >
                  cancel
                </el-button>
              </template>
              <span v-else>{{ row.value }}</span>
            </template>
          </el-table-column>

          <el-table-column align="center" width="120">
            <template slot-scope="{row}">
              <el-button
                v-if="row.isEdit"
                type="success"
                size="small"
                icon="el-icon-circle-check-outline"
                @click="confirmEdit(row)"
              >
                Ok
              </el-button>
              <el-button
                v-else
                type="primary"
                size="small"
                icon="el-icon-edit"
                @click="row.isEdit=!row.isEdit"
              >
                Edit
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="8">
        <AvatorUpload :avatar="userInfo.avator" @uploadComplete="uploadComplete" />
      </el-col>
    </el-row>

  </div>
</template>

<script>
import AvatorUpload from './components/avatar-upload'
import { fetchUserInfo, updateUserInfo } from '@/api/user'

export default {
  name: 'InlineEditTable',
  components: {
    AvatorUpload
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      userInfo: {},
      list: [
        {
          label: '名字',
          key: 'name',
          value: '',
          isEdit: false
        },
        {
          label: '邮箱',
          key: 'email',
          value: '',
          isEdit: false
        },
        {
          label: '手机号',
          key: 'mobile',
          value: '',
          isEdit: false
        }
      ],
      listLoading: true
    }
  },
  created() {
    this.fetchUserInfo()
  },
  methods: {
    uploadComplete(data) {
      updateUserInfo({ avator: data.path })
        .then(res => {
          this.userInfo.avator = data.path
          this.$message({
            message: 'The avator has been edited',
            type: 'success'
          })
        })
        .catch(err => {
          this.$message({
            message: err.message,
            type: 'warning'
          })
        })
    },
    async fetchUserInfo() {
      this.listLoading = true
      await fetchUserInfo(this.listQuery)
        .then(res => {
          const { userInfo } = res.data
          console.log(userInfo)
          this.list.map(item => {
            console.log(item.key)
            console.log(userInfo[item.key])
            item.value = userInfo[item.key]
          })
          this.userInfo = userInfo
          this.listLoading = false
        })
        .catch(err => {
          console.log(err.message)
          this.listLoading = false
        })
    },
    cancelEdit(row) {
      row.isEdit = false
      this.$message({
        message: 'The title has been restored to the original value',
        type: 'warning'
      })
    },
    async confirmEdit(row) {
      row.edit = false
      this.listLoading = true
      const { key, value } = row
      updateUserInfo({ [key]: value })
        .then(res => {
          this.$message({
            message: 'The title has been edited',
            type: 'success'
          })
          row.isEdit = false
        })
        .catch(err => {
          this.$message({
            message: err.message,
            type: 'warning'
          })
        })
    }
  }
}
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
