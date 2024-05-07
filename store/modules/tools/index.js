const initialState = {
    alert:{
        hasAlert:false,
        type:'success',
        header:"",
        text:""
    }
}

export default {
namespaced: true,
state: ()=>{
    return initialState
}
}