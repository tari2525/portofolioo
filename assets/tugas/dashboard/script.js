// Data untuk grafik
const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
const dataViews = [500, 1000, 1200, 1500, 1800, 2200];
const dataComments = [50, 80, 100, 120, 150, 180];
const dataEarnings = [100, 200, 300, 400, 500, 600];

// Konfigurasi untuk Line Chart (Diagram Garis)
const lineConfig = {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Views',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                data: dataViews,
                fill: false,
            },
            {
                label: 'Comments',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                data: dataComments,
                fill: false,
            },
            {
                label: 'Earnings',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                data: dataEarnings,
                fill: false,
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly Blog Statistics (Line Chart)'
            }
        }
    }
};

// Konfigurasi untuk Bar Chart (Diagram Batang)
const barConfig = {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Views',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                data: dataViews,
                borderWidth: 1
            },
            {
                label: 'Comments',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                data: dataComments,
                borderWidth: 1
            },
            {
                label: 'Earnings',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                data: dataEarnings,
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly Blog Statistics (Bar Chart)'
            }
        }
    }
};

// Inisialisasi Chart.js untuk Line Chart
const lineChart = new Chart(
    document.getElementById('lineChart'),
    lineConfig
);

// Inisialisasi Chart.js untuk Bar Chart
const barChart = new Chart(
    document.getElementById('barChart'),
    barConfig
);
