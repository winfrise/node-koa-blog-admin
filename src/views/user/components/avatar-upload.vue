<template>
  <div class="components-container">
    <aside>
      <!--基于 vue-image-crop-upload vue@1 实现 -->
      <!-- github.com/dai-siki/vue-image-crop-upload -->
      <el-row justify="center" type="flex">
        <el-col style="width: 200px;">
          <pan-thumb :image="avatar" style="display: block; margin: 0 auto;" />
          <br>
          <el-button style="display: block; margin: 0 auto;" type="primary" icon="el-icon-upload" @click="imagecropperShow=true">
            Change Avatar
          </el-button>
        </el-col>
      </el-row>

      <image-cropper
        v-show="imagecropperShow"
        :key="imagecropperKey"
        :width="300"
        :height="300"
        :url="uploadSingleFile"
        lang-type="en"
        @close="close"
        @crop-upload-success="cropSuccess"
      />
    </aside></div>
</template>

<script>
import { uploadSingleFile } from '@/config'
console.log(uploadSingleFile)
import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'

export default {
  name: 'AvatarUploadDemo',
  components: { ImageCropper, PanThumb },
  props: {
    avatar: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      uploadSingleFile,
      imagecropperShow: false,
      imagecropperKey: 0
    }
  },
  methods: {
    cropSuccess(resData) {
      this.imagecropperShow = false
      this.imagecropperKey = this.imagecropperKey + 1
      // this.image = resData.files.avatar
      this.$emit('uploadComplete', resData)
    },
    close() {
      this.imagecropperShow = false
    }
  }
}
</script>

<style scoped>
  .avatar{
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
</style>

