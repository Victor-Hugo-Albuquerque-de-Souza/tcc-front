<template>
    <div class="photo-container form-control hover-pointer">
        <div v-if="!imageUrl" class="d-flex w-100 h-100 flex-column justify-content-center align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-15 h-15">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <label class="custom-file-upload"> Escolher arquivo </label>
            <input type="file" @change="handleFileChange" class="w-100 h-100" />
        </div>
        <div  class="img-picure-input bg-image" :style="'background-image:url(' + imageUrl + ')'"></div>
        <!-- <img v-else :src="imageUrl" alt="Photo" class="w-100 h-100" /> -->
    </div>
</template>

<script>
export default {
name:'base-picture',
data() {
    return {
    imageUrl: null
    };
},
methods: {
    handleFileChange(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        this.imageUrl = URL.createObjectURL(file);
    } else {
        this.imageUrl = null;
    }
    }
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
    width:30px;
    height:30px;
}

div{
    background-image: url(/static/img/picture-icon.xml);
}

div:hover{
    cursor: pointer;
}

.img-picure-input{
    width:100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}

@media (max-width: 1200px) {
    .photo-container{
        height: 175px;
    }
}
</style>