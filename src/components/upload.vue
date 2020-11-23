<template>
  <div>
    <el-upload action="#"
               class="custom-upload"
               @before-upload="beforeUpload"
               @on-success="uploadSuccess"
               :limit="5"
               :file-list="fileList"
               list-type="picture-card"
               :auto-upload="false">
      <div class="upload-icon-wrap">
        <i class="upload-icon"></i>
        <p>点击上传</p>
      </div>
      <div slot="file"
           slot-scope="{file}">
        <img class="el-upload-list__item-thumbnail"
             :src="file.url"
             alt="">
        <span class="el-upload-list__item-actions">
          <span class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)">
            <i class="el-icon-zoom-in"></i>
          </span>
          <span class="el-upload-list__item-delete"
                @click="handleRemove(file)">
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%"
           :src="dialogImageUrl"
           alt="">
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      fileList: [],
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false
    }
  },
  watch: {
    fileList () {
      console.log(this.fileList)
    }
  },
  methods: {
    beforeUpload (file) {
      debugger
    },
    uploadSuccess (response, file, fileList) {

    },
    handleRemove (file) {
      console.log(file)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload (file) {
      console.log(file)
    }
  }
}
</script>
<style lang="less" scoped>
.custom-upload {
  display: flex;
  align-content: center;
  height: 67px;
}
/deep/.el-upload-list__item {
  width: 100px;
  height: 69px;
  border-radius: 2px;
  border-color: #b3b3b3;
  div {
    width: 100%;
    height: 100%;
  }
}
/deep/.el-upload-list__item:focus {
  border-color: #b3b3b3;
}
/deep/.el-upload--picture-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 69px;
}
.upload-icon-wrap {
  text-align: center;
  .upload-icon {
    display: block;
    margin: 0 auto;
    width: 25px;
    height: 25px;
    background: url("../assets/img/icons/upload.png") center center no-repeat;
  }
  p {
    margin-top: 6px;
    color: #333;
    line-height: 1;
    font-size: 12px;
  }
}
/deep/.el-upload--picture-card {
  border-radius: 2px;
}
</style>
