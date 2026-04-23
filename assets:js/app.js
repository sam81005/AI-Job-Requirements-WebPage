function switchTab(tabId) {
    console.log("Switching to:", tabId);
    // Logic to hide/show sections
    document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
    document.getElementById(`${tabId}-section`).classList.remove('hidden');
}

// Add event listeners for your "Impact Viewer" here