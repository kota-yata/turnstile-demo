window.onloadTurnstileCallback = () => {
  const opt = {
    sitekey: "<YOUR_SITE_KEY>",
    theme: "light",
    callback: (token) => {
      console.log(`Challenge Success ${token}`);
    }
  }
  turnstile.render("#test-container", opt);
}
