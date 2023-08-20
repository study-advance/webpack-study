// 定义有依赖的处理数据模块

import {getName} from "./dataSource.mjs";

const msg = 'handleMsg.js';

export const showMsg = () => {
    console.log(msg, getName());
};
