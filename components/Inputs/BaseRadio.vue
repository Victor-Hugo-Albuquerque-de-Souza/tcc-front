<template>
  <div
    class="form-check form-check-radio"
    :class="[inlineClass, { disabled: disabled }]"
  >
    <label :for="cbId" class="form-check-label">
      <input
        :id="cbId"
        class="form-check-input"
        type="radio"
        :name="groupName"
        :disabled="disabled"
        :value="value"
        v-model="model"
      />
      <span class="form-check-sign"> {{ label }}</span>
    </label>
  </div>
</template>
<script>
export default {
  name: 'base-radio',
  props: {
    name: {
      type: [String, Number],
      description: 'Radio label'
    },
    disabled: {
      type: Boolean,
      description: 'Whether radio is disabled'
    },
    value: {
      type: [String, Boolean],
      description: 'Radio value'
    },
    label:{
      type: String,
      default:""
    },
    inline: {
      type: Boolean,
      description: 'Whether radio is inline'
    },
    groupName: {
      type: String,
      description: 'GroupName'
    }
  },
  data() {
    return {
      cbId: ''
    };
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        console.log('aui')
        this.$emit('input', value);
      }
    },
    inlineClass() {
      if (this.inline) {
        return `form-check-inline`;
      }
      return '';
    }
  },
  mounted() {
    this.cbId = Math.random()
      .toString(16)
      .slice(2);
  }
};
</script>
