export const getStore = (
  key: string,
  json: boolean = true
): string | object => {
  let value = localStorage.getItem(key) || "{}";
  return json ? JSON.parse(value) : value;
};

export const dateTimeFormat = (date: string) => {
  //  auto 0
  const autoZero = (n: string) => (String(n).length === 1 ? "0" : "") + n;
  // string to timestamp
  const strToTimestamp = (str: String) => Date.parse(str.replace(/-/gi, "/"));
  let oriSecond: number = strToTimestamp(date) / 1000;
  let curSecond: number = parseInt((new Date().getTime() / 1000).toString());
  let diffSecond: number = curSecond - oriSecond;

  let curDate: Date = new Date(curSecond * 1000);
  let oriDate: Date = new Date(oriSecond * 1000);

  let Y: number = oriDate.getFullYear();
  let m: number = oriDate.getMonth() + 1;
  let d: number = oriDate.getDate();
  let H: number = oriDate.getHours();
  let i: number = oriDate.getMinutes();

  // just
  if (diffSecond < 60) {
    // within a minute
    return "刚刚";
  } else if (diffSecond < 3600) {
    // within an hour
    return `${Math.floor(diffSecond / 60)}分钟前`;
  } else if (
    curDate.getFullYear() === Y &&
    curDate.getMonth() + 1 === m &&
    curDate.getDate() === d
  ) {
    return `今天${autoZero(H.toString())}:${autoZero(H.toString())}`;
  }
  // yesterday
  let mewDate = new Date((curSecond - 86400) * 1000);
  if (
    mewDate.getFullYear() === Y &&
    mewDate.getMonth() + 1 === m &&
    mewDate.getDate() === d
  ) {
    return `昨天${autoZero(H.toString())}:${autoZero(i.toString())}`;
  } else if (curDate.getFullYear() === Y) {
    return `${autoZero(m.toString())}月${autoZero(d.toString())}日`;
  }
  return `${Y}年${autoZero(m.toString())}月${autoZero(d.toString())}日`;
};
