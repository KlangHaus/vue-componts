import Vue from "vue";
import BaseButton from "./BaseButton.vue";
import BaseBanner from "./BaseBanner.vue";
import BaseInput from "./BaseInput.vue";


const Components = {
    BaseButton,
    BaseBanner, 
    BaseInput,

};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
