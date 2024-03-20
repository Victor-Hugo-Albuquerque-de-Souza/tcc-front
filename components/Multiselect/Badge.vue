<template>
    <div class="d-flex h-20 mr-4 my-4 py-3 px-3 rounded justify-content-center text-white align-items-center" :class="getRandomColor"> 
        {{ label }}
        <div class="w-19 rounded-circle ml-2 d-flex justify-content-center align-items-center border border-secondary hover-pointer">x</div>
    </div>
</template>

<script>
export default{
    name:'badge',
    props:{
        label:{
            type:String,
            default:""
        }
    },
    data(){
        return {
            colorType:1
        }
    },
    created() {
        this.colorType = Math.floor(Math.random() * 4) + 1;
    },
    computed:{
        getRandomColor(){
            switch (this.colorType) {
                case 1:{
                    return 'bg-pink-primary'
                }
                case 2:{
                    return 'bg-green-primary'
                }
                case 3:{
                    return 'bg-blue-primary'
                }
                case 4:{
                    return 'bg-turquoise-primary'
                }
                default:
                    break;
            }
        }
    }
}
</script>