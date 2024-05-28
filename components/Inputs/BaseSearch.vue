<template>
    <div
        class="form-group"
        :class="{
            'input-group-focus': focused,
            'has-danger': error,
            'has-success': !error && touched,
            'has-label': label,
            'has-icon': hasIcon,
        }"
    >
    <slot name="label">
        <label v-if="label"> {{ label }} {{ required ? '*' : '' }} </label>
    </slot>
    <div class="mb-0" :class="{'input-group': hasIcon}">
        <slot>
            <input
                :list="dataList"
                @input="updateValue($event.target.value)"
                v-bind="$attrs"
                name="ice-cream-choice"
                class="form-control w-full pl-13px h-40px !border-1px !border-solid !rounded-xl !text-13px text-black-215 mont"
                v-model="inputValue.label"
                v-on="listeners"
                :disabled="disabled"
                aria-describedby="addon-right addon-left"
            />
            <datalist
                :id="dataList"
            >
                <div
                    v-for="(item, index) in list"
                    :key="index"
                >
                    <option
                        :value="item.label"
                    />
                </div>
                
            </datalist>
        </slot>
    </div>
    <slot name="error" v-if="error || $slots.error">
        <label class="error">{{ error }}</label>
    </slot>
    <slot name="helperText"></slot>
    </div>
</template>
<script>
export default {
    inheritAttrs: false,
    name: 'base-search',
    props: {
        required: Boolean,
        label: {
            type: String,
            description: 'Input label'
        },
        error: {
            type: String,
            description: 'Input error',
            default: ''
        },
        value: {
            type: [String, Number],
            description: 'Input value'
        },
        addonRightIcon: {
            type: String,
            description: 'Input icon on the right'
        },
        addonLeftIcon: {
            type: String,
            description: 'Input icon on the left'
        },
        dataList:{
            type:String,
            default:""
        },
        list:{
            type:Array,
            default: ()=>{
                return [
                    {
                        id:0,
                        customDomain:"Teste"
                    }
                ]
            }
        },
        verificationState:{
            type:[String, Number, Boolean],
            default:""
        },
        disabled:{
            type:Boolean,
            default:false
        }
    },
    model: {
        prop: "input",
        event: "change"
    },
    data() {
        return {
            focused: false,
            touched: false,
            inputValue:{
                id:"",
                label:""
            }
        };
    },
    watch:{
        verificationState(){
            if(this.verificationState == ''){
                this.touched = false
            }
        }
    },
    computed: {
        hasIcon() {
            return this.hasLeftAddon || this.hasRightAddon
        },
        hasLeftAddon() {
            const { addonLeft } = this.$slots;
            return (
            addonLeft !== undefined ||
            this.addonLeftIcon !== undefined
            );
        },
        hasRightAddon() {
            const { addonRight } = this.$slots;
            return (
            addonRight !== undefined ||
            this.addonRightIcon !== undefined
            );
        },
        listeners() {
            return {
            // ...this.$listeners,
            input: this.onInput,
            blur: this.onBlur,
            focus: this.onFocus
            };
        }
    },
    methods: {
        onInput(evt) {
            if (this.verificationState !== '') {
                this.touched = true;
            } else {
                this.touched = false
            }
            this.$emit('input', evt.target.value);
        },
        onFocus(evt) {
            this.focused = true;
            this.$emit('focus', evt)
        },
        onBlur(evt) {
            this.focused = false;
            if(this.verificationState !== ''){
                this.touched = true
            } else {
                this.touched = false
            }
            this.$emit('blur', evt)
        },
        updateValue(value) {
            const matchingItem = this.list.find(item => item.label === value)
            if (matchingItem) {
                this.$emit('change', new Object({
                    id: matchingItem.id,
                    label: matchingItem.label,
                    value:matchingItem.value
                }))
            } else {
                this.$emit('clearState')
            }
        },
    },
    watch:{
        verificationState(){
            if (this.verificationState !== '') {
                this.touched = true;
            } else {
                this.touched = false
            }
        }
    }
};
</script>
<style>
</style>