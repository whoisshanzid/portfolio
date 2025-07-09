
document.addEventListener("DOMContentLoaded", () => {
  const text = "Hi, I'm Md. Shanzid Hasan";
  const el = document.querySelector(".typing-text");
  let i = 0;
  function type() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }
  type();
});
