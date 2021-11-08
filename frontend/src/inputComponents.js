import Text from '@/components/InputTypes/Text.vue';
import Number from '@/components/InputTypes/Number.vue';
import Email from '@/components/InputTypes/Email.vue';
import Telephone from '@/components/InputTypes/Telephone.vue';

import Vue from 'vue';
//import Vuex from 'vuex';

 export const comText= Vue.extend(Text);
 export const comNumber= Vue.extend(Number);
 export const comEmail= Vue.extend(Email);
 export const comTelephone= Vue.extend(Telephone);


//export default= {comShortText ,comNumber,comEmail,comTelephone};
