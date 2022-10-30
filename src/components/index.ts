import { Tabbar, TabbarItem, Icon } from "./nutui";
import { ChatNavbar, ChatItem } from "./chatui";

const components: any = [
  Tabbar,
  TabbarItem,
  Icon,
  { name: "chat-nav-bar", component: ChatNavbar },
  { name: "chat-item", component: ChatItem },
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
