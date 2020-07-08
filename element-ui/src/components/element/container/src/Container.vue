<template>
  <div :class="['el-container',{'isvertical':isVertical}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ElContainer",
  props: {
    direction: {
      type: String,
      validator: val => ["horizontal", "vertical"].includes(val)
    }
  },
  computed: {
    isVertical() {
      if (this.direction == "vertical") {
        return true;
      } else if (this.direction == "horizontal") {
        return false;
      }
      return this.$slots && this.$slots.default
        ?  this.$slots.default.some(vNode => {
           const tag = vNode.componentOptions && vNode.componentOptions.tag;
           return tag === "el-header" || tag === "el-footer"? true : false;})
        :  false;
    }
  }
};
</script>
