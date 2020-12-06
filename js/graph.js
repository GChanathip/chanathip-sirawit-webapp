let sum = parseInt(sessionStorage.getItem("summ"));
let v = parseInt(sessionStorage.getItem("vv"));
console.log(sum);
console.log(v);
var ctx = document.getElementById("myChart");
var data = {
    labels: [300, 350, 400, 450, 500, 550, 600, 650, 700],
    datasets: [
        {
            label: "",
            function: function (x) { return ((sum + v) / x) },
            borderColor: "rgba(153, 102, 255, 1)",
            data: [],
            fill: false
        }
    ]
};

Chart.pluginService.register({
    beforeInit: function (chart) {
        var data = chart.config.data;
        for (var i = 0; i < data.datasets.length; i++) {
            for (var j = 0; j < data.labels.length; j++) {
                var fct = data.datasets[i].function,
                    x = data.labels[j],
                    y = fct(x);
                data.datasets[i].data.push(y);
            }
        }
    }
});

var myBarChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'วิเคราะห์จุดคุ้มทุน',
            fontSize: 25
        },
        legend: {
            display: false
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'อัตราค่าจ้างรับจ้างเกี่ยวนวดข้าว(บาท/ไร่)'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'พื้นที่รับจ้างเกี่ยวนวดข้าวที่คุ้มทุน (ไร่)'
                }
            }]
        }
    }
});

