declare interface ResType<T> {
  code: number;
  data?: T;
  msg: string;
  err?: string;
}

export {ResType}
