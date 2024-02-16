const texts = ['ChatGPT 4', 'Netflix', 'OnlyFans', '任何平台'];
let currentIndex = 0; // 当前文字索引
let charIndex = 0; // 当前字符索引
let currentText = ''; // 当前完整文字
let isDeleting = false; // 是否正在删除文字

function type() {
  if (isDeleting) {
    // 如果正在删除，则减少字符
    currentText = texts[currentIndex].substring(0, currentText.length - 1);
  } else {
    // 如果正在打字，则增加字符
    currentText = texts[currentIndex].substring(0, charIndex + 1);
    charIndex++;
  }

  // 更新DOM
  document.getElementById('dynamic-text').innerHTML = currentText;

  let typingSpeed = 200; // 打字速度
  if (isDeleting) {
    typingSpeed /= 2; // 删除速度是打字速度的一半
  }

  if (!isDeleting && currentText === texts[currentIndex]) {
    // 如果文字完整且不在删除中，暂停一会儿
    typingSpeed = 1000; // 暂停时间
    isDeleting = true; // 开始删除
  } else if (isDeleting && currentText === '') {
    isDeleting = false; // 停止删除
    currentIndex = (currentIndex + 1) % texts.length; // 切换到下一个文字
    charIndex = 0; // 重置字符索引
    typingSpeed = 200; // 重置打字速度
  }

  setTimeout(type, typingSpeed); // 循环执行
}

// 启动打字效果
document.addEventListener('DOMContentLoaded', function() {
  type();
});