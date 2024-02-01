import { getUrlApi, postUrlApi, deleteUrlApi, patchUrlApi } from "./index.js";

// 检查 api 命名是否有重复
if (window.location.hostname === "localhost") {
  console.log("开发环境---开启检查是否在不同对象中定义重复api");
  checkDuplicateProperties([getUrlApi, postUrlApi, deleteUrlApi, patchUrlApi]);
}

const apiMap = (apiKey: string) => {
  let url = "";
  let type = "";

  if (getUrlApi.hasOwnProperty(apiKey)) {
    url = getUrlApi[apiKey];
    type = "get";
  } else if (postUrlApi.hasOwnProperty(apiKey)) {
    url = postUrlApi[apiKey];
    type = "post";
  } else if (deleteUrlApi.hasOwnProperty(apiKey)) {
    url = deleteUrlApi[apiKey];
    type = "delete";
  } else if (patchUrlApi.hasOwnProperty(apiKey)) {
    url = patchUrlApi[apiKey];
    type = "patch";
  } else {
    throw new Error(`未找到: ${apiKey} 的配置后端地址`);
  }

  return { url, type };
};

export default apiMap;
interface apiType {
  [key: string]: string;
}
// 异步函数，用于检查对象中的重复属性
async function checkDuplicateProperties(objects: apiType[]) {
  // 创建一个Map，用于存储键
  let keys = new Map();
  // 使用异步函数并行处理对象
  await Promise.all(
    objects.map(async (obj: apiType) => {
      for (let key in obj) {
        if (!keys.has(key)) {
          keys.set(key, true);
        } else {
          throw new Error(`发现重复的api: ${key}`);
        }
      }
    })
  );
}
