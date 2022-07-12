import {
  Button,
  Tabbar,
  TabbarItem,
  Icon,
  Search,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  NavBar,
  IndexBar,
  IndexAnchor,
  Form,
  Field,
  Picker,
  DropdownMenu,
  DropdownItem,
  Popup,
  List,
  Card,
  Overlay,
  Popover,
  Tab,
  Tabs,
  Area,
} from "vant";
import Vue from "vue";

const elements = [
  Button,
  Tabbar,
  TabbarItem,
  Icon,
  Search,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  NavBar,
  IndexBar,
  IndexAnchor,
  Form,
  Field,
  Picker,
  DropdownMenu,
  DropdownItem,
  Popup,
  List,
  Card,
  Overlay,
  Popover,
  Tab,
  Tabs,
  Area,
];

export default function () {
  elements.forEach((item) => {
    Vue.use(item);
  });
}
