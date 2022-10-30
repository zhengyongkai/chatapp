const press = {
  mounted: function (el: any, binding: any, vNode: any) {
    // el就是dom
    if (typeof binding.value !== "function") {
      throw "callback must be a function";
    }
    // 定义变量
    let pressTimer: any = null;
    // 创建计时器（ 2秒后执行函数 ）
    let start = (e: any) => {
      if (e.type === "click" && e.button !== 0) {
        return;
      }
      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          handler(e);
        }, 1000);
      }
    };
    // 取消计时器
    let cancel = (e: any) => {
      if (pressTimer !== null) {
        clearTimeout(pressTimer);
        pressTimer = null;
      }
    };
    // 运行函数
    const handler = (e: any) => {
      binding.value(e);
    };
    // 添加事件监听器
    el.addEventListener("mousedown", start);
    el.addEventListener("touchstart", start);
    // 取消计时器
    el.addEventListener("click", cancel);
    el.addEventListener("mouseout", cancel);
    el.addEventListener("touchend", cancel);
    el.addEventListener("touchcancel", cancel);
  },
  // 当传进来的值更新的时候触发
  updated(el: any, binding: any) {
    el.$value = binding.value;
  },
  // 指令与元素解绑的时候，移除事件绑定
  unmounted: function (el: any) {
    el.removeEventListener("click", el.handler);
  },
};

export default function install(Vue: any) {
  Vue.directive("press", press);
}
