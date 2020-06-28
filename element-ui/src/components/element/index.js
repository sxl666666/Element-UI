import Row from '@element/Row';
import Col from '@element/Col';

const components = [
  Row,
  Col,
];

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  Row,
  Col,
  install,
};

export {
  Row,
  Col,
};
