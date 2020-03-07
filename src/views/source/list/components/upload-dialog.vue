<template>
  <el-dialog :visible="isShow" @update:visible="handleVisible">
    <el-upload
      action
      :multiple="true"
      :file-list="fileList"
      :show-file-list="true"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
      :before-upload="beforeUpload"
      class="editor-slide-upload"
      list-type="picture"
      :http-request="handleUploadFile"
    >
      <el-button size="small" type="primary">
        Click upload
      </el-button>
    </el-upload>
  </el-dialog>
</template>

<script>
import { uploadFile } from '@/api/upload'
export default {
  name: 'SourceUpload',
  props: {
    isShow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      dialogVisible: false,
      listObj: {},
      fileList: []
    }
  },
  methods: {
    handleVisible(val) {
      this.$emit('update:isShow', val)
    },
    handleUploadFile(param) {
      const formData = new FormData()
      formData.append('uid', param.uid) // 额外参数
      formData.append('file', param.file)
      uploadFile(formData)
    },
    checkAllSuccess() {
      // return Object.keys(this.listObj).every(item => this.listObj[item].hasSuccess)
    },
    handleSuccess(response, file) {
      // const uid = file.uid
      // const objKeyArr = Object.keys(this.listObj)
      // for (let i = 0, len = objKeyArr.length; i < len; i++) {
      //   if (this.listObj[objKeyArr[i]].uid === uid) {
      //     this.listObj[objKeyArr[i]].url = response.files.file
      //     this.listObj[objKeyArr[i]].hasSuccess = true
      //     return
      //   }
      // }
    },
    handleRemove(file) {
      const uid = file.uid
      const objKeyArr = Object.keys(this.listObj)
      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          delete this.listObj[objKeyArr[i]]
          return
        }
      }
    },
    beforeUpload(file) {
      // const _self = this
      // const _URL = window.URL || window.webkitURL
      // const fileName = file.uid
      // this.listObj[fileName] = {}
      // return new Promise((resolve, reject) => {
      //   const img = new Image()
      //   img.src = _URL.createObjectURL(file)
      //   img.onload = function() {
      //     _self.listObj[fileName] = {
      //       hasSuccess: false,
      //       uid: file.uid,
      //       width: this.width,
      //       height: this.height
      //     }
      //   }
      //   resolve(true)
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
.editor-slide-upload {
  margin-bottom: 20px;
  /deep/ .el-upload--picture-card {
    width: 100%;
  }
}
</style>
