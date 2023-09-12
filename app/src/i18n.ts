import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      end: ".", // end of sentence
      "not-found": "Page not found",
      home: "Home",
      login: "Login",
      logout: "Logout",
      quota: "Quota",
      "try-again": "Try again",
      "invalid-token": "Invalid token",
      "invalid-token-prompt": "Please try again.",
      "login-failed": "Login failed",
      "login-failed-prompt":
        "Login failed! Please check your token expiration and try again.",
      "login-success": "Login successful",
      "login-success-prompt": "You have been logged in successfully.",
      "server-error": "Server error",
      "server-error-prompt":
        "There was an error logging you in. Please try again.",
      "request-failed":
        "Request failed. Please check your network and try again.",
      conversation: {
        title: "Conversation",
        "refresh-failed": "Refresh failed",
        "refresh-failed-prompt":
          "There was an error during your request. Please try again.",
        "remove-title": "Are you absolutely sure?",
        "remove-description":
          "This action cannot be undone. This will permanently delete the conversation ",
        cancel: "Cancel",
        delete: "Delete",
        "delete-success": "Conversation deleted",
        "delete-success-prompt": "Conversation has been deleted.",
        "delete-failed": "Delete failed",
        "delete-failed-prompt":
          "Failed to delete conversation. Please check your network and try again.",
      },
      chat: {
        web: "web searching feature",
        "web-aria": "Toggle web searching feature",
        placeholder: "Write something (/image to generate image)",
      },
      message: {
        copy: "Copy",
        save: "Save as File",
        use: "Use Message",
      },
      "quota-description": "spending quota for the message",
      buy: {
        choose: "Choose an amount",
        other: "Other",
        "other-desc": "How many points?",
        buy: "Buy {{amount}} points",
        dalle: "DALL·E Image Generator",
        "dalle-free": "5 free quotas per day",
        gpt4: "GPT-4",
        flex: "Flexible Billing",
        input: "Input",
        output: "Output",
        tip: "Prices have been aligned (or lower) to OpenAI models",
        "learn-more": "Learn more",
        "dialog-title": "Buy Points",
        "dialog-desc": "Are you sure you want to buy {{amount}} points?",
        "dialog-cancel": "Cancel",
        "dialog-buy": "Buy",
        success: "Purchase successful",
        "success-prompt": "You have successfully purchased {{amount}} points.",
        failed: "Purchase failed",
        "failed-prompt":
          "Failed to purchase points. Please make sure you have enough balance, you will soon jump to deeptrain wallet to pay balance.",
        "gpt4-tip": "Tip: web searching feature may consume more input points",
      },
      pkg: {
        title: "Packages",
        go: "Go to Verify",
        cert: "Certification Package",
        "cert-desc":
          "After real-name certification, you can get 50 points (worth 5 CNY)",
        teen: "Teenager Package",
        "teen-desc":
          "After real-name certification, teenagers (18 years old and below) can get an additional 150 points (worth 15 CNY)",
        close: "Close",
        state: {
          true: "Received",
          false: "Not Received",
        },
      },
      sub: {
        title: "Subscription",
        "dialog-title": "Subscription Plan",
        free: "Free",
        "free-price": "Free Forever",
        pro: "Pro",
        "pro-price": "8 CNY/Month",
        "free-gpt3": "GPT-3.5 Free Forever",
        "free-dalle": "5 free quotas per day",
        "free-web": "web searching feature",
        "free-conversation": "conversation storage",
        "free-api": "API calls",
        "pro-gpt4": "GPT-4 10 requests per day",
        "pro-dalle": "50 quotas per day",
        "pro-service": "Priority Service Support",
        "pro-thread": "Concurrency Increase",
        current: "Current Plan",
        upgrade: "Upgrade",
        renew: "Renew",
        "cannot-select": "Cannot Select",
        "select-time": "Select Subscription Time",
        price: "Price {{price}} CNY",
        expired: "Your Pro subscription will expire in {{expired}} days",
        time: {
          1: "1 Month",
          3: "3 Months",
          6: "6 Months",
          12: "1 Year",
        },
        success: "Subscribe success",
        "success-prompt":
          "You have successfully subscribed to {{month}} months of Pro.",
        failed: "Subscribe failed",
        "failed-prompt":
          "Failed to subscribe, please make sure you have enough balance, you will soon jump to deeptrain wallet to pay balance.",
      },
      cancel: "Cancel",
      confirm: "Confirm",
      percent: "{{cent}}0%",
    },
  },
  cn: {
    translation: {
      end: "",
      "not-found": "页面未找到",
      home: "首页",
      login: "登录",
      logout: "登出",
      quota: "配额",
      "try-again": "重试",
      "invalid-token": "无效的令牌",
      "invalid-token-prompt": "请重试。",
      "login-failed": "登录失败",
      "login-failed-prompt": "登录失败！请检查您的令牌过期时间并重试。",
      "login-success": "登录成功",
      "login-success-prompt": "您已成功登录。",
      "server-error": "服务器错误",
      "server-error-prompt": "登录出错，请重试。",
      "request-failed": "请求失败，请检查您的网络并重试。",
      conversation: {
        title: "会话",
        "refresh-failed": "刷新失败",
        "refresh-failed-prompt": "请求出错，请重试。",
        "remove-title": "是否确定？",
        "remove-description": "此操作无法撤消。这将永久删除会话 ",
        cancel: "取消",
        delete: "删除",
        "delete-success": "会话已删除",
        "delete-success-prompt": "会话已删除。",
        "delete-failed": "删除失败",
        "delete-failed-prompt": "删除会话失败，请检查您的网络并重试。",
      },
      chat: {
        web: "联网搜索功能",
        "web-aria": "切换网络搜索功能",
        placeholder: "写点什么 (/image 生成图片)",
      },
      message: {
        copy: "复制",
        save: "保存为文件",
        use: "使用消息",
      },
      "quota-description": "消息的配额支出",
      buy: {
        choose: "选择一个金额",
        other: "其他",
        "other-desc": "多少点数？",
        buy: "购买 {{amount}} 点数",
        dalle: "DALL·E AI 绘图",
        "dalle-free": "每天 5 次免费绘图配额",
        gpt4: "GPT-4",
        flex: "灵活计费",
        input: "输入",
        output: "输出",
        tip: "价格已对齐OpenAI模型或低于官方价格",
        "learn-more": "了解更多",
        "dialog-title": "购买点数",
        "dialog-desc": "您确定要购买 {{amount}} 点数吗？",
        "dialog-cancel": "取消",
        "dialog-buy": "购买",
        success: "购买成功",
        "success-prompt": "您已成功购买 {{amount}} 点数。",
        failed: "购买失败",
        "failed-prompt":
          "购买点数失败。请确保您有足够的余额，您即将跳转到 deeptrain 钱包支付余额。",
        "gpt4-tip": "提示：web 联网版功能可能会带来更多的输入点数消耗",
      },
      pkg: {
        title: "礼包",
        go: "前往实名认证",
        cert: "实名认证礼包",
        "cert-desc": "实名认证后可获得 50 点数 （价值 5 元）",
        teen: "未成年人福利",
        "teen-desc":
          "实名认证后未成年人（18 周岁及以下）可额外获得 150 点数 （价值 15 元）",
        close: "关闭",
        state: {
          true: "已领取",
          false: "无法领取",
        },
      },
      sub: {
        title: "订阅",
        "dialog-title": "订阅计划",
        free: "免费版",
        "free-price": "永久免费",
        pro: "专业版",
        "pro-price": "8 元/月",
        "free-gpt3": "GPT-3.5 永久免费",
        "free-dalle": "每日 5 次免费绘图",
        "free-web": "联网搜索功能",
        "free-conversation": "对话存储记录",
        "free-api": "API 调用",
        "pro-gpt4": "GPT-4 每日请求 10 次",
        "pro-dalle": "每日 50 次绘图",
        "pro-service": "优先服务支持",
        "pro-thread": "并发数提升",
        current: "当前计划",
        upgrade: "升级",
        renew: "续费",
        "cannot-select": "无法选择",
        "select-time": "选择订阅时间",
        price: "价格 {{price}} 元",
        expired: "您的专业版订阅还有 {{expired}} 天到期",
        time: {
          1: "1个月",
          3: "3个月",
          6: "半年",
          12: "1年",
        },
        success: "订阅成功",
        "success-prompt": "您已成功订阅 {{month}} 月专业版。",
        failed: "订阅失败",
        "failed-prompt":
          "订阅失败，请确保您有足够的余额，您即将跳转到 deeptrain 钱包支付余额。",
      },
      cancel: "取消",
      confirm: "确认",
      percent: "{{cent}}折",
    },
  },
};

export const supportedLanguages = ["en", "cn"];

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getStorage(),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })
  .then(() => console.debug(`[i18n] initialized (language: ${i18n.language})`));

export default i18n;

export function getStorage(): string {
  const storage = localStorage.getItem("language");
  if (storage && supportedLanguages.includes(storage)) {
    return storage;
  }
  return "cn";
}
export function setLanguage(i18n: any, lang: string): void {
  if (supportedLanguages.includes(lang)) {
    i18n
      .changeLanguage(lang)
      .then(() =>
        console.debug(`[i18n] language changed (language: ${i18n.language})`),
      );
    localStorage.setItem("language", lang);
    return;
  }
  console.warn(`[i18n] language ${lang} is not supported`);
}
