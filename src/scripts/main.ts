// myFunc.tsをインポートする
import { myFunc } from "./myFunc";

// 今日の天気用文字列を生成する
const todayWeather = myFunc(27);
// #weather要素のテキストとして今日の天気を設定する
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
document.querySelector("#weather")!.textContent = todayWeather;
