const initialState = {
    name:"",
    description:"",
    category:{
        id:"",
        label:"",
        value:""
    },
    subcategory:{
        id:"",
        label:"",
        value:""
    },
    price:0,
    finalPrice:0,
    profit:0,
    wheight:0,
    availability:false,
    featured:false,
    stock:0,
    customAttributes:{
        color:"",
        size:"",
        expirationDate:"",
        lotNumber:"",
        volts:""
    },
    dimensions:{
        height:"",
        width:"",
        depth:"",
        weight:""
    },
    brand:{
        id:"",
        label:""
    },
    tags:[],
    images:[]
}

export default {
namespaced: true,
state: ()=>{
    return initialState
}
}