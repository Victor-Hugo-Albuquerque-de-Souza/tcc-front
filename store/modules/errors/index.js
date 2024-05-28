const initialState = {
    product:{
        name:"",
        brand:"",
        category:"",
        subcategory:"",
        stock:"",
        price:"",
        profit:"",
        finalPrice:"",
        description:"",
        color:"",
        size:"",
        expirationDate:"",
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