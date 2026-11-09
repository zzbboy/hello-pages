const greetings = ['你好！', 'Hello!', 'こんにちは！'];
let index = 0;

const greeting = document.getElementById('greeting');
const clock = document.getElementById('clock');

function updateClock() {
    clock.textContent = new Date().toLocaleString('zh-CN');
}

document.getElementById('switchBtn').addEventListener('click', () => {
    index = (index + 1) % greetings.length;
    greeting.textContent = greetings[index];
});

updateClock();
setInterval(updateClock, 1000);
console.log('页面加载成功');
