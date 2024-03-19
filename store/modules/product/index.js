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
            colors:"",
            size:"",
            manufacturingDate:"",
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