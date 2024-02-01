import { log } from "console";

//判断是否移动端的函数
const isMobileFunc = (): boolean => {
  let flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );

  return flag !== null;
};

// 手机端
function setRem() {
  var whdef = 10 / 750; // 表示750的设计图,使用10PX的默认值
  var htmlWidth =
    document.documentElement.clientWidth || document.body.clientWidth; // 当前窗口的宽度
  var rem = htmlWidth * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
  document.getElementsByTagName("html")[0].style.fontSize = rem + "px";
}
//pc端
function setRemPC() {
  var whdef = 10 / 1920; // 表示1920的设计图,使用10PX的默认值
  var htmlWidth =
    document.documentElement.clientWidth || document.body.clientWidth; // 当前窗口的宽度
  var rem = htmlWidth * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值

  document.getElementsByTagName("html")[0].style.fontSize = rem + "px";
  console.log(rem, "rem");
}

const setHtmlFontSize = () => {
  const isMobile = isMobileFunc();
  return isMobile ? setRem() : setRemPC();
};

export const AdaptiveAdaptation = () => {
  setHtmlFontSize();
  window.addEventListener("resize", setHtmlFontSize);
};
