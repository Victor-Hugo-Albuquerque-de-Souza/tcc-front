const initialState = {
    entities:{
        products:[]
    },
    dataTable:{
        dashboard:[]
    },
    product:{
        brands:[],
        categories:[
            {
                id:1,
                label:'Moda Íntima',
                value:'moda íntima'
            },
            {
                id:2,
                label:'Moda Feminina',
                value:'moda feminina'
            },
            {
                id:3,
                label:'Maquiagem',
                value:'maquiagem'
            },
            {
                id:4,
                label:'Sexshop',
                value:'sexshop'
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
                    label:'Fantasias',
                    value:'fantasias'
                },
                {
                    id:3,
                    label:'Moda Sensual',
                    value:'moda sensual'
                },
                {
                    id:4,
                    label:'Acessórios',
                    value:'acessórios'
                },
                {
                    id:5,
                    label:'Higiene e Banho',
                    value:'higiene e banho'
                },
                {
                    id:6,
                    label:'Sado',
                    value:'sado'
                },
                {
                    id:7,
                    label:'Brincadeiras',
                    value:'brincadeiras'
                },
                {
                    id:8,
                    label:'Sutiãs',
                    value:'sutiãs'
                },
                {
                    id:9,
                    label:'Calcinhas',
                    value:'calcinhas'
                },
                {
                    id:10,
                    label:'Corpetes',
                    value:'corpetes'
                },
                {
                    id:11,
                    label:'Vestidos',
                    value:'vestidos'
                },
                {
                    id:12,
                    label:'Blusas',
                    value:'blusas'
                },
                {
                    id:13,
                    label:'Saia e Calças',
                    value:'saia e calças'
                },
            ],
            modaIntima:[
                {
                    id: 1,
                    label: 'Sutiãs',
                    value: 'sutiãs',
                },
                {
                    id: 2,
                    label: 'Calcinhas',
                    value: 'calcinhas',
                },
                {
                    id: 3,
                    label: 'Corpetes',
                    value: 'corpetes',
                },
            ],
            modaFeminina:[
                {
                    id: 1,
                    label: 'Vestidos',
                    value: 'vestidos',
                },
                {
                    id: 2,
                    label: 'Blusas',
                    value: 'blusas',
                },
                {
                    id: 3,
                    label: 'Saia e Calças',
                    value: 'saia-e-calças',
                },
            ],
            maquiagem:[
                {
                    id: 1,
                    label: 'Base e Corretivo',
                    value: 'base-e-corretivo',
                },
                {
                    id: 2,
                    label: 'Batom',
                    value: 'batom',
                },
                {
                    id: 3,
                    label: 'Sombras',
                    value: 'sombras',
                },
            ]
        },
        tags:[],
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