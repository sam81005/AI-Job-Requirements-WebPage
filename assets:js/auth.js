const MOCK_USER = { username: "samarth", password: "123" };

function showLogin() {
    const username = prompt("Enter Username (Try: samarth)");
    const password = prompt("Enter Password (Try: 123)");

    if (username === MOCK_USER.username && password === MOCK_USER.password) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", "Samarth");
        renderAuthUI();
    } else {
        alert("Login Failed!");
    }
}

function renderAuthUI() {
    const authUI = document.getElementById('auth-ui');
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const user = localStorage.getItem("user");

    if (isLoggedIn === "true") {
        authUI.innerHTML = `
            <div class="flex items-center gap-4">
                <span class="text-sm font-medium">Hello, ${user} 👋</span>
                <button onclick="logout()" class="text-red-500 text-sm">Logout</button>
            </div>
        `;
    }
}

function logout() {
    localStorage.clear();
    location.reload();
}

// Check status on load
document.addEventListener('DOMContentLoaded', renderAuthUI);