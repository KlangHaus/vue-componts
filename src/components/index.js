import Vue from "vue";
import BaseButton from "./BaseButton.vue";


const Components = {
    BaseButton
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
