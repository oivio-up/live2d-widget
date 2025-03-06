// 全局变量
let currentPanel = null;
let dropdownTimer = null;

// 切换聊天面板
function toggleChat() {
    const chatContainer = document.getElementById("chat-container");
    const configContainer = document.getElementById("config-container");
    
    if (currentPanel === "chat") {
        chatContainer.style.display = "none";
        chatContainer.classList.remove("active");
        currentPanel = null;
    } else {
        chatContainer.style.display = "flex";
        configContainer.style.display = "none";
        configContainer.classList.remove("active");
        setTimeout(() => chatContainer.classList.add("active"), 10);
        currentPanel = "chat";
    }
}

// 切换配置面板
function toggleConfig() {
    const chatContainer = document.getElementById("chat-container");
    const configContainer = document.getElementById("config-container");
    
    if (currentPanel === "config") {
        configContainer.style.display = "none";
        configContainer.classList.remove("active");
        currentPanel = null;
    } else {
        configContainer.style.display = "flex"; // 使用flex布局
        chatContainer.style.display = "none";
        chatContainer.classList.remove("active");
        setTimeout(() => configContainer.classList.add("active"), 10);
        currentPanel = "config";
    }
}

// 切换设置区块
function toggleSection(sectionId) {
    const section = document.getElementById(`${sectionId}-section`);
    const arrow = section.previousElementSibling.querySelector('.arrow');
    section.classList.toggle('active');
    arrow.classList.toggle('active');
}

// 切换下拉提示
function toggleDropdownHint() {
    const hint = document.querySelector('.dropdown-hint');
    if (hint.classList.contains('active') && dropdownTimer) {
        clearTimeout(dropdownTimer);
        hint.classList.remove('active');
        dropdownTimer = null;
        return;
    }
    hint.classList.add('active');
    dropdownTimer = setTimeout(() => {
        hint.classList.remove('active');
        dropdownTimer = null;
    }, 2500);
}

// Live2D 消息显示
function showLive2DMessage(text, timeout = 8000) {
    if (typeof window.showMessage === "function") {
        window.showMessage(text, timeout);
    }
}

// 初始化函数
document.addEventListener("DOMContentLoaded", function () {
    // 设置初始位置
    const waifu = document.querySelector("#waifu");
    if (waifu) {
        waifu.style.bottom = "0";
        waifu.style.right = "30px";
    }
    
    // 添加点击事件
    waifu?.addEventListener("click", () => {
        document.getElementById("user-input").focus();
    });
    
    // 加载配置
    loadConfig();
});

// 导出全局函数
window.toggleChat = toggleChat;
window.toggleConfig = toggleConfig;
window.toggleSection = toggleSection;
window.toggleDropdownHint = toggleDropdownHint;
window.showLive2DMessage = showLive2DMessage;
