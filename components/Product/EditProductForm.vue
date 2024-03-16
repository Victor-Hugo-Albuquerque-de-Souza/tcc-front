<template>
<card>
    <!-- TITLE: -->
    <h5 slot="header" class="title">{{ getTitle }}</h5>
    <!-- FORM: -->
    <form @submit.prevent="updateProduct">
        <!-- 1ST ROW: NAME -->
        <div class="row">
            <div class="col-md-7">
                <base-input
                    type="text"
                    label="Nome:"
                    placeholder="ex: Modelo asadelta"
                    v-model="name"
                >
                </base-input>
            </div>
            <div class="col-md-5">
                <base-input
                    type="text"
                    label="Fabricante:"
                    placeholder=""
                    v-model="name"
                >
                </base-input>
            </div>
        </div>
        <!-- 2ND ROW: PRICE, PROFIT AND FINAL PRICE -->
        <div class="row">
            <div class="col-md-4">
                <base-input
                    type="number"
                    label="Preço de custo:"
                    placeholder="R$"
                    v-model="price"
                >
                </base-input>
            </div>
            <div class="col-md-4">
                <base-input
                    type="number"
                    label="Margem de lucro:"
                    placeholder="%"
                    v-model="profit"
                >
                </base-input>
            </div>
            <div class="col-md-4">
                <base-input
                    type="number"
                    label="Preço final:"
                    placeholder="R$"
                    v-model="finalPrice"
                >
                </base-input>
            </div>
        </div>
        <!-- 3RD ROW: DESCRIPTION -->
        <div class="row">
            <div class="col-md-12">
                <base-text-area
                    type="text"
                    label="Descrição"
                    placeholder="Descreva seu produto aqui"
                    v-model="description"
                >
                </base-text-area>
            </div>
        </div>
        <!-- 4TH ROW:HAS CUSTOM ATTRIBUTES CONTROLLER -->
        <div class="row py-3">
            <div class="row col-md-12">
                <span class="col-md-12"> Tem atributos personalizáveis?</span>
            </div>
            <div class="row col-md-12">
                <div class="col-md-6">
                    <base-radio
                        groupName="hasCustomAttributes"
                        name="Sim"
                        value="hasCustomAttributes"
                    >
                    </base-radio>
                </div>
                <div class="col-md-6">
                    <base-radio
                        groupName="hasCustomAttributes"
                        name="Não"
                        value="hasCustomAttributes"
                    >
                    </base-radio>
                </div>
            </div>
        </div>
        <!-- 5TH ROW: CUSTOM ATTRIBUTES -->
        <div class="row">
            
        </div>
        <!-- <div class="row">
            <div class="col-md-12">
            <base-input
                type="text"
                label="Address"
                placeholder="Home Address"
                v-model="user.address"
            >
            </base-input>
            </div>
        </div> -->
        <!-- <div class="row">
            <div class="col-md-4">
            <base-input
                type="text"
                label="City"
                placeholder="City"
                v-model="user.city"
            >
            </base-input>
            </div>
            <div class="col-md-4">
            <base-input
                type="text"
                label="Country"
                placeholder="Country"
                v-model="user.country"
            >
            </base-input>
            </div>
            <div class="col-md-4">
            <base-input
                label="Postal Code"
                placeholder="ZIP Code"
                v-model="user.postalCode"
            >
            </base-input>
            </div>
        </div> -->
        <!-- <div class="row">
            <div class="col-md-12">
            <base-input label="About Me">
                <textarea
                class="form-control"
                placeholder="ZIP Code"
                v-model="user.aboutMe"
                >
                </textarea>
            </base-input>
            </div>
        </div> -->
        <base-button native-type="submit" type="primary" class="btn-fill">
            Save
        </base-button>
    </form>
</card>
</template>
<script>
export default {
data() {
    return {
        repository:{
            brands:[],
            tags:[]
        }
    };
},
props:{
    type:{
        type:String,
        default:"create"
    }
},
methods: {
    updateProfile() {
    // alert('Your data: ' + JSON.stringify(this.user));
    }
},
computed:{
    getTitle(){
        if(this.type === 'create'){
            return 'Novo produto'
        } else {
            return 'Produto em edição..'
        }
    },
    name:{
        get(){

        },
        set(){

        }
    },
    description:{
        get(){

        },
        set(){

        }
    },
    price:{
        get(){

        },
        set(){

        }
    },
    profit:{
        get(){

        },
        set(){

        }
    },
    finalPrice:{
        get(){

        },
        set(){

        }
    },
    weight:{
        get(){

        },
        set(){

        }
    },
    availability:{
        get(){

        },
        set(){

        }
    },
    featured:{
        get(){

        },
        set(){

        }
    },
    color:{
        get(){

        },
        set(){

        }
    },
    size:{
        get(){

        },
        set(){

        }
    },
    manufacturingDate:{
        get(){

        },
        set(){

        }
    },
    lotNumber:{
        get(){

        },
        set(){

        }
    },
    volts:{
        get(){

        },
        set(){

        }
    },
    height:{
        get(){

        },
        set(){

        }
    },
    width:{
        get(){

        },
        set(){

        }
    },
    depth:{
        get(){

        },
        set(){

        }
    },
    brandName:{
        get(){

        },
        set(){

        }
    },
    brandUuid:{
        get(){

        },
        set(){

        }
    },
    tags:{
        get(){

        },
        set(){

        }
    }
    
}
};
</script>
<style></style>
