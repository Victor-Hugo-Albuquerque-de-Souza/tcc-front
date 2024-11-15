const initialState = {
    product:{
        brands:[],
        categories:[
            {
                id:1,
                label:'Sexshop',
                value:'sexshop'
            },
            {
                id:2,
                label:'Moda Íntima',
                value:'moda íntima'
            },
            {
                id:3,
                label:'Moda Feminina',
                value:'moda feminina'
            },
            {
                id:5,
                label:'Maquiagem',
                value:'maquiagem'
            }
        ],
        subcategories:{
            sexshop:[
                {
                    id:1,
                    label:'Cosméticos',
                    value:'cosméticos'
                },
                {
                    id:2,
                    label:'Vibradores',
                    value:'vibradores'
                },
                {
                    id:3,
                    label:'Pênis de Borracha',
                    value:'pênis de borracha'
                },
                {
                    id:4,
                    label:'Sexo Anal',
                    value:'sexo anal'
                },
                {
                    id:5,
                    label:'Fantasias',
                    value:'fantasias'
                },
                {
                    id:6,
                    label:'Moda Sensual',
                    value:'moda sensual'
                },
                {
                    id:6,
                    label:'Acessórios',
                    value:'acessórios'
                },
                {
                    id:6,
                    label:'Higiene e Banho',
                    value:'higiene e banho'
                },
                {
                    id:6,
                    label:'Sado',
                    value:'sado'
                },
                {
                    id:6,
                    label:'Brincadeiras',
                    value:'brincadeiras'
                },
            ],
            modaIntima:[],
            modaFeminina:[],
            maquiagem:[]
        },
        tags:[],
        // relatedProducts:[
        //     {
        //         id:1,
        //         label:'Langerie bordada',
        //         isSelected:false
        //     },
        //     {
        //         id:2,
        //         label:'Lubrificante caro',
        //         isSelected:false
        //     },
        //     {
        //         id:3,
        //         label:'Prótese peniana',
        //         isSelected:false
        //     },
        //     {
        //         id:4,
        //         label:'Maquiagem íntima',
        //         isSelected:false
        //     },
        //     {
        //         id:5,
        //         label:'Dados eróticos',
        //         isSelected:false
        //     },
        //     {
        //         id:6,
        //         label:'Algemas de pelúcia',
        //         isSelected:false
        //     },
        // ],
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