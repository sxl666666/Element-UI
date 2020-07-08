import header from './src/header.vue';

header.install = (Vue) => {
  Vue.component(header.name, header);
};

export default header;
