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
        <slot name="addonLeft">
            <span v-if="addonLeftIcon" class="input-group-prepend">
            <div class="input-group-text"><i :class="addonLeftIcon"></i></div>
            </span>
        </slot>
        <!-- CONTAINER FOR SHOWING THE OPTIONS BADGES: -->
        <slot>
            <div @click="openDropDown" class="form-control hover-pointer h-fit min-h-82 d-flex justify-content-center align-items-center p-0 min-h-200px h-fit flex-wrap">
                <badge v-for="(badge, index) in badges" :key="index" :label="badge.label"></badge>
            </div>
        </slot>
        <!-- CONTAINER FOR RENDERING THE DROPDOWN: -->
        <div v-if="hasDropdown" class="w-100 h-0">
            <div class="w-100 h-200px overflow-auto rounded-bottom shadow bg-light.bg-gradient position-relative top-0 end-0 bg-white z-index-2 hover-pointer">
                <span @click="handleSelection(item, index)" v-for="(item, index) in items" :key="index" :class="item.isSelected ? 'text-white bg-green' : 'text-black hover-text-white hover-bg-dark'" class="d-flex w-100 px-1 py-1 text-capitalize">{{ item.label }}</span>
            </div>
        </div>
        <!-- OVERLAY TO CLOSE THE DROPDOWN: -->
        <div v-if="hasDropdown" class="w-100 h-0">
            <div @click="closeDropDown" class="position-fixed top-0 left-0 w-100 h-100 z-index-1"></div>
        </div>
        <slot name="addonRight">
            <span v-if="addonRightIcon" class="input-group-append">
            <div class="input-group-text"><i :class="addonRightIcon"></i></div>
            </span>
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
    name: 'multiselect',
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
        initialCollection:{
            type:Array,
            default:()=>{
                return []
            }
        }
    },
    model: {
        prop: 'value',
        event: 'input'
    },
    data() {
        return {
        focused: false,
        touched: false,
        hasDropdown:false,
        items:[],
        selectedItems:[],
        badges:[]
        };
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
                ...this.$listeners,
                input: this.onInput,
                blur: this.onBlur,
                focus: this.onFocus
            };
        }
    },
    methods: {
        onInput(evt) {
            if (!this.touched) {
                this.touched = true;
            }
            this.$emit('input', evt.target.value);
        },
        onFocus(evt) {
            this.focused = true;
            this.$emit('focus', evt)
        },
        onBlur(evt) {
        this.focused = false;
        this.$emit('blur', evt)
        },
        openDropDown(){
            this.hasDropdown = true;
        },
        closeDropDown(){
            this.hasDropdown = false;
        },
        handleSelection(item, index){
            this.items[index].isSelected = !item.isSelected
            this.selectedItems = this.items.filter(item => item.isSelected)
            this.badges = this.selectedItems.map((item, index) => ({
                id: index,
                label: item.label
            }))
            this.$emit('sendNewValue', this.selectedItems)
        }
    },
    watch:{
        initialCollection:{
            immediate:true,
            handler(){
                this.items = this.initialCollection
            }
        }
    }
};
</script>
<style></style>
