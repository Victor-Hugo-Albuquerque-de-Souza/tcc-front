import Vue from 'vue'
import BaseInput from '@/components/Inputs/BaseInput.vue';
import BaseTextArea from '@/components/Inputs/BaseTextArea';
import BaseRadio from '~/components/Inputs/BaseRadio.vue';
import BaseDropdown from '@/components/BaseDropdown.vue';
import Card from '@/components/Cards/Card.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseCheckbox from '@/components/Inputs/BaseCheckbox.vue';
import BaseSelect from '@/components/inputs/BaseSelect.vue';
import Multiselect from '@/components/Multiselect/Multiselect.vue';
import { Input, InputNumber, Tooltip, Popover } from 'element-ui';
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

Vue.component(BaseInput.name, BaseInput);
Vue.component(BaseDropdown.name, BaseDropdown);
Vue.component(Card.name, Card);
Vue.component(BaseCheckbox.name, BaseCheckbox);
Vue.component(BaseButton.name, BaseButton);
Vue.component(Input.name, Input);
Vue.component(InputNumber.name, InputNumber);
Vue.component(BaseTextArea.name, BaseTextArea);
Vue.component(BaseRadio.name, BaseRadio);
Vue.component(BaseSelect.name, BaseSelect);
Vue.component(Multiselect.name, Multiselect);
Vue.use(Tooltip);
Vue.use(Popover);
