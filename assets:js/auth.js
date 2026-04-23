const MOCK_USER = { username: "samarth", password: "123" };

function showLogin() {
    const username = prompt("Username (samarth):");
    const password = prompt("Password (123):");

    if (username === MOCK_USER.username && password === MOCK_USER.password) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", "Samarth");
        renderAuthUI();
    } else {
        alert("Invalid credentials!");
    }
}

function renderAuthUI() {
    const authUI = document.getElementById('auth-ui');
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const user = localStorage.getItem("user");

    if (isLoggedIn === "true" && authUI) {
        authUI.innerHTML = `
            <div class="flex items-center gap-4">
                <span class="text-sm font-medium">Hello, ${user} 👋</span>
                <button onclick="logout()" class="text-red-500 text-xs hover:underline">Logout</button>
            </div>
        `;
    }
}

function logout() {
    localStorage.clear();
    location.reload();
}

// Initial UI check
document.addEventListener('DOMContentLoaded', renderAuthUI);