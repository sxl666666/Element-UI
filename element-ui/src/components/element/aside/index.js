import aside from './src/aside.vue';

aside.install = (Vue) => {
  Vue.component(aside.name, aside);
};

export default aside;
