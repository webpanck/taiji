let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/* 你好，我是PCK
 * 下面我来展示一下我的前端基本功
 * 首先我要准备一个 div
 **/
#div1 {
  border: 1px solid red;
  width: 400px;
  height: 400px;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/
#div1 {
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1 {
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加俩神秘的小球 */
#div1::before {
  width: 200px;
  height: 200px;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  background: #000;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after {
  width: 200px;
  height: 200px;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  background: #fff;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`;
let string2 = "";
let n = 0;
let step = ()=>{
    setTimeout(()=>{
        if (string[n] === "\n") string2 += "<br>";
        else if (string[n] === " ") string2 += "&nbsp;";
        else string2 += string[n];
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        if (n < string.length - 1) {
            n += 1;
            step();
        }
    }, 50);
};
step();

//# sourceMappingURL=index.9f55260c.js.map
