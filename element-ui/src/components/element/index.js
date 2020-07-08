import Row from '@element/Row';
import Col from '@element/Col';
import Container from '@element/container';
import aside from '@element/aside';
import main from '@element/main';
import header from '@element/header';
import footer from '@element/footer';

const components = [
  Row,
  Col,
  aside,
  Container,
  header,
  main,
  footer,
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
  aside,
  Container,
  header,
  main,
  footer,
};

export {
  Row,
  Col,
  aside,
  Container,
  header,
  main,
  footer,
};
