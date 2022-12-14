import { Tabbar, TabbarItem, Icon, Elevator, Badge } from "./nutui";
import {
  ChatNavbar,
  ChatItem,
  ChatCell,
  ChatBadge,
  Cell,
  CellIcon,
} from "./chatui";

const components: any = [
  Tabbar,
  TabbarItem,
  Icon,
  Elevator,
  Badge,
  { name: "chat-nav-bar", component: ChatNavbar },
  { name: "chat-item", component: ChatItem },
  { name: "chat-cell", component: ChatCell },
  { name: "chat-badge", component: ChatBadge },
  { name: "chat-simple-cell", component: Cell },
  { name: "cell-icon", component: CellIcon },
];

export default function install(Vue: any) {
  components.forEach((component: any) => {
    if (component.component) {
      Vue.component(component.name, component.component);
    } else {
      Vue.use(component);
    }
  });
}
