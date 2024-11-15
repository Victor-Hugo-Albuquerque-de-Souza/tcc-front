import Vue from 'vue'
import BaseInput from '@/components/Inputs/BaseInput.vue';
import BaseTextArea from '@/components/Inputs/BaseTextArea';
import BaseRadio from '~/components/Inputs/BaseRadio.vue';
import BaseDropdown from '@/components/BaseDropdown.vue';
import Card from '@/components/Cards/Card.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseCheckbox from '@/components/Inputs/BaseCheckbox.vue';
import BaseSelect from '@/components/Inputs/BaseSelect.vue';
import Badge from '~/components/Multiselect/Badge.vue';
import BasePicture from '@/components/Inputs/BasePicture.vue';
import Multiselect from '@/components/Multiselect/Multiselect.vue';
import BaseAlert from '~/components/BaseAlert.vue';
import BaseSearch from '@/components/Inputs/BaseSearch';
import { Input, InputNumber, Tooltip, Popover } from 'element-ui';


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
Vue.component(BasePicture.name, BasePicture);
Vue.component(Multiselect.name, Multiselect);
Vue.component(Badge.name, Badge)
Vue.component(BaseAlert.name, BaseAlert)
Vue.component(BaseSearch.name, BaseSearch)
Vue.use(Tooltip);
Vue.use(Popover);
