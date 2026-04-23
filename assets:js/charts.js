document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('skillsBarChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Python', 'GenAI', 'LangChain', 'SQL'],
            datasets: [{
                label: 'Market Demand (%)',
                data: [92, 85, 78, 70],
                backgroundColor: '#2b6777'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});