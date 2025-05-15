function myFunction1() {
    var dots = document.getElementById('dots')
    var moreText = document.getElementById('more1')
    var btnText = document.getElementById('myBtn1')

    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        btnText.innerHTML = '+';
        moreText.style.display = 'none';
    }
    else {
        dots.style.display = 'none';
        btnText.innerHTML = '-';
        moreText.style.display = 'inline';
    }
}

function myFunction2() {
    var dots = document.getElementById('dots')
    var moreText = document.getElementById('more2')
    var btnText = document.getElementById('myBtn2')

    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        btnText.innerHTML = '+';
        moreText.style.display = 'none';
    }
    else {
        dots.style.display = 'none';
        btnText.innerHTML = '-';
        moreText.style.display = 'inline';
    }
}

function myFunction3() {
    var dots = document.getElementById('dots')
    var moreText = document.getElementById('more3')
    var btnText = document.getElementById('myBtn3')

    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        btnText.innerHTML = '+';
        moreText.style.display = 'none';
    }
    else {
        dots.style.display = 'none';
        btnText.innerHTML = '-';
        moreText.style.display = 'inline';
    }
}

const skillIcons = [
    'assets/images/html-5.png',
    'assets/images/css-3.png',
    'assets/images/js.png',
    'assets/images/python.png',
    'assets/images/vue-js.svg'
];

const skillData = [90, 80, 70, 60, 50];

// Pré-carrega as imagens
const loadedIcons = skillIcons.map(src => {
    const img = new Image();
    img.src = src;
    return img;
});

const ctx = document.getElementById('graficoSkills').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['', '', '', '', ''],
        datasets: [{
            label: 'Nível',
            data: skillData,
            backgroundColor: ['#e44d26', '#264de4', '#f7df1e', '#3572A5', '#42b883'],
            borderRadius: 10,
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            y: {
                ticks: {
                    callback: function() { return ''; },
                    font: { size: 24 }
                }
            },
            x: { beginAtZero: true, max: 100 }
        },
        plugins: {
            legend: { display: false }
        },
        animation: false
    },
    plugins: [{
        afterDraw: chart => {
            const yAxis = chart.scales.y;
            const ctx = chart.ctx;
            loadedIcons.forEach((img, i) => {
                // Só desenha se a imagem já estiver carregada
                if (img.complete) {
                    ctx.drawImage(
                        img,
                        yAxis.left - 40,
                        yAxis.getPixelForValue(i) - 16,
                        32, 32
                    );
                }
            });
        }
    }]
});