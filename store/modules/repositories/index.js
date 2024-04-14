const initialState = {
    product:{
        brands:[
            {
                id:1,
                label:'Marca 1',
                value:'Marca 1'
            },
            {
                id:2,
                label:'Marca 2',
                value:'Marca 2'
            },
            {
                id:3,
                label:'Marca 3',
                value:'Marca 3'
            },
            {
                id:4,
                label:'Marca 4',
                value:'Marca 4' 
            },
            {
                id:5,
                label:'Marca 5',
                value:'Marca 5'
            },
            {
                id:6,
                label:'Marca 6',
                value:'Marca 6'
            },
        ],
        categories:[
            {
                id:1,
                label:'Langeries',
                value:'Langeries'
            },
            {
                id:2,
                label:'Óleos de massagem',
                value:'Óleos de massagem'
            },
            {
                id:3,
                label:'Próteses',
                value:'Próteses'
            },
            {
                id:4,
                label:'Bdsm',
                value:'Bdsm'
            },
            {
                id:5,
                label:'Cosméticos',
                value:'Cosméticos'
            },
            {
                id:6,
                label:'Jogos',
                value:'Jogos'
            },
        ],
        tags:[
            {
                id:1,
                label:'Langeries',
                isSelected:false
            },
            {
                id:2,
                label:'Óleos de massagem',
                isSelected:false
            },
            {
                id:3,
                label:'Próteses',
                isSelected:false
            },
            {
                id:4,
                label:'Bdsm',
                isSelected:false
            },
            {
                id:5,
                label:'Cosméticos',
                isSelected:false
            },
            {
                id:6,
                label:'Jogos',
                isSelected:false
            },
        ],
        relatedProducts:[
            {
                id:1,
                label:'Langerie bordada',
                isSelected:false
            },
            {
                id:2,
                label:'Lubrificante caro',
                isSelected:false
            },
            {
                id:3,
                label:'Prótese peniana',
                isSelected:false
            },
            {
                id:4,
                label:'Maquiagem íntima',
                isSelected:false
            },
            {
                id:5,
                label:'Dados eróticos',
                isSelected:false
            },
            {
                id:6,
                label:'Algemas de pelúcia',
                isSelected:false
            },
        ],
        colors:[
            {
                id:1,
                label:'Branco',
                isSelected:false
            },
            {
                id:2,
                label:'Preto',
                isSelected:false
            },
            {
                id:3,
                label:'Amarelo',
                isSelected:false
            },
            {
                id:4,
                label:'Verde',
                isSelected:false
            },
            {
                id:5,
                label:'Vermelho',
                isSelected:false
            },
            {
                id:6,
                label:'Roxo',
                isSelected:false
            }
        ],
        sizes:[
            {
                id:1,
                label:'PP',
                isSelected:false
            },
            {
                id:2,
                label:'P',
                isSelected:false
            },
            {
                id:3,
                label:'M',
                isSelected:false
            },
            {
                id:4,
                label:'G',
                isSelected:false
            },
            {
                id:5,
                label:'GG',
                isSelected:false
            },
            {
                id:6,
                label:'XG',
                isSelected:false
            }
        ],
        volts:[
            {
                id:1,
                label:'110v',
                isSelected:false
            },
            {
                id:2,
                label:'220v',
                isSelected:false
            },
        ]
    }
}

export default {
namespaced: true,
state: ()=>{
    return initialState
}
}