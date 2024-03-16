const initialState = {
    name:"",
        description:"",
        category:"",
        price:0,
        profit:0,
        wheight:0,
        availability:false,
        featured:false,
        customAttributes:{
            cores:"",
            size:"",
            manufacturingDate:"",
            lotNumber:"",
            volts:""
        },
        dimensions:{
            height:"",
            width:"",
            depth:""
        },
        brand:{
            name:"",
            uuid:""
        },
        tags:[]
}

export default {
namespaced: true,
state: ()=>{
    return initialState
}
}