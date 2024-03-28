<template>
    <div class="photo-container form-control overflow-visible">
        <div v-if="!imageUrl" class="d-flex w-100 h-100 flex-column justify-content-center align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-15 h-15">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <label class="custom-file-upload"> Escolher arquivo </label>
            <input ref="fileInput" type="file" @change="handleFileChange" class="w-100 h-100 hover-pointer" />
        </div>
        <div class="w-100 h-100" v-else >
            <div class="w-100 h-0 d-flex justify-content-end">
                <svg @click="clearFileInput" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="position-relative w-6 h-6 hover-pointer smooth-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
            <div class="img-picure-input smooth-2 bg-image d-flex justify-content-center align-items-center" :style="'background-image:url(' + imageUrl + ')'">
            </div>
        </div>
    </div>
</template>
<script>
export default {
name:'base-picture',
data() {
    return {
        hasImage: false,
        imageUid:"",
        imageUrl:null
    };
},
methods: {
    handleFileChange(event) {
        const file = event.target.files[0]
        if(file && file.type.startsWith('image/')){
            this.$store.commit('HANDLE_PRODUCT_IMAGES', new Object({
                type:1,
                file:file,
                uid:this.imageUid
            }))
            this.imageUrl = URL.createObjectURL(file)
        } else {
            this.imageUrl = null
        }
    },
    clearFileInput() {
        this.imageUrl = false
        this.$store.commit('HANDLE_PRODUCT_IMAGES', new Object({
            type:0,
            uid:this.imageUid
        }))
        setTimeout(() => {
            this.$refs.fileInput.value = null
        }, 250);
    },
    generateNewUID() {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let uid = '';
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            uid += chars[randomIndex];
        }
        return uid;
    }
},
mounted(){
    this.imageUid = this.generateNewUID()
}
};
</script>
<style scoped>
.photo-container {
    width:100%;
    height:100%;
    position: relative;
    overflow: hidden;
}

.photo-container input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
}

svg{
    width:25px;
    height:25px;
    top:-20px;
    left:24px;
}

svg:hover{
    width:27px;
    height:27px;
}

div{
    background-image: url(/static/img/picture-icon.xml);
}

/* div:hover{
    cursor: pointer;
} */

.img-picure-input{
    width:100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}

.img-picure-input:hover{
    opacity:0.4;
}

@media (max-width: 1200px) {
    .photo-container{
        height: 175px;
    }
}
</style>