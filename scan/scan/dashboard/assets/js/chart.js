var ctx = document.getElementById('myPChart');
var myPolarChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Urea', 'Microbial Quality', 'Ph', 'Water'],
        datasets: [{
            label: 'Overall Content',
            data: [15, 16, 8, 11],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)'
            ]
        }]
    },
    options: {}
});


var ctx = document.getElementById('myChart');
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Microbial Quality', 'Urea', 'Water', 'Ph'],
        datasets: [{
            label: 'Batch Result',
            data: [19, 4, 10, 7.5,],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});