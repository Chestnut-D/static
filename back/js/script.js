// Data for line charts  曲线图
var data = {
    labels: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    datasets: [{
            label: "大佬",
            fill: false,
            lineTension: 0.5, //线条平滑度
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [65, 59, 60, 51, 56, 55, 40],
            spanGaps: false,
        },
        {
            label: "萌新",
            fill: false,
            lineTension: 0.5, //线条平滑度
            backgroundColor: "rgba(230,  0, 18)",
            borderColor: "rgba(230,  0, 18)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(230,  0, 18)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(230,  0, 18)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [153, 110, 130, 111, 126, 165, 140],
            spanGaps: false,
        },
        {
            label: "肝帝",
            fill: false,
            lineTension: 0.5, //线条平滑度
            backgroundColor: "rgba(30, 23, 18)",
            borderColor: "rgba(30, 23, 18)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(30, 23, 18)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(30, 23, 18)",
            pointHoverBorderColor: "rgba(225,225,225,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [33, 17, 30, 21, 26, 35, 27],
            spanGaps: false,
        }
    ]
};
$(function () {
    var ctx = $("canvas").get(0).getContext("2d");
    var charObject = Chart.Line(ctx, {
        data: data,
        option: "option"
    });
});


/* 示例代码，要用，自己修改*/

/*
//Bar Charts 柱状图
var barChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
        label: "My First dataset",
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40],
    }]
};

var ctx = document.getElementById("bars-graph").getContext("2d");
var BarChart = new Chart(ctx, {
    type: 'bar',
    data: barChartData,
    responsive: true
});

// Data for pie chart  扇形图
var pieData = {
    labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
        ],
        hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
        ]
    }]
};

var ctx = document.getElementById("pie-graph").getContext("2d");
var PieChart = new Chart(ctx, {
    type: 'pie',
    data: pieData
});


// Data for doughnut chart  环形图
var doughnutData = {
    labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
        ],
        hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
        ]
    }]
};
var ctx = document.getElementById("doughnut-graph").getContext("2d");
    var DoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: doughnutData,
        responsive : true
    });  
*/