const initialState = {
    product:{
        name:"",
        brand:"",
        category:"",
        stock:"",
        price:"",
        profit:"",
        finalPrice:"",
        description:"",
        color:"",
        size:"",
        manufacturingDate:"",
        lotNumber:"",
        voltz:"",
        width:"",
        height:"",
        depth:"",
        weight:""
    }
}

export default {
namespaced: true,
state: ()=>{
    return initialState
}
}