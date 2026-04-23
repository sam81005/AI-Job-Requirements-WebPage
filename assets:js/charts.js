document.addEventListener('DOMContentLoaded', () => {
    // 1. Bar Chart Logic
    const barCtx = document.getElementById('skillsBarChart');
    if (barCtx) {
        new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: ['Python', 'GenAI', 'LangChain', 'SQL', 'Cloud'],
                datasets: [{
                    label: '% Frequency',
                    data: [92, 85, 78, 70, 60],
                    backgroundColor: '#2b6777',
                    borderRadius: 4
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                scales: { x: { beginAtZero: true, max: 100 } }
            }
        });
    }

    // 2. Donut Chart Logic
    const donutCtx = document.getElementById('rolesDonutChart');
    if (donutCtx) {
        new Chart(donutCtx, {
            type: 'doughnut',
            data: {
                labels: ['AI Engineer', 'ML Ops', 'Data Scientist', 'Data Eng'],
                datasets: [{
                    data: [40, 25, 20, 15],
                    backgroundColor: ['#2b6777', '#52ab98', '#c8d8e4', '#333333']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom' } }
            }
        });
    }
});