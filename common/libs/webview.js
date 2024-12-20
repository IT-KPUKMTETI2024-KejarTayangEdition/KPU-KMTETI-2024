const rules = [
  "WebView",
  // iOS webview will be the same as safari but missing "Safari"
  "(iPhone|iPod|iPad)(?!.*Safari)",
  // Android Lollipop and Above: webview will be the same as native but it will contain "wv"
  // Android KitKat to Lollipop webview will put Version/X.X Chrome/{version}.0.0.0
  "Android.*(;\\s+wv|Version/\\d.\\d\\s+Chrome/\\d+(\\.0){3})",
  // old chrome android webview agent
  "Linux; U; Android"
];

const regex = new RegExp("(" + rules.join("|") + ")", "ig");

export default function isWebview(userAgent) {
  return regex.test(userAgent);
}