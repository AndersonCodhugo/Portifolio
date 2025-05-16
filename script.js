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

const skillData = [40, 40, 25, 50, 40];

// Função para carregar uma imagem com Promise
function loadImage(src) {
    return new Promise(resolve => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
    });
}

// Carrega todas as imagens e só então cria o gráfico
Promise.all(skillIcons.map(loadImage)).then(loadedIcons => {
    const ctx = document.getElementById('graficoSkills').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['HTML', 'CSS', 'JAVASCRIPT', 'PYTHON', 'VUE.JS'],
            datasets: [{
                label: ['Nível'],
                data: skillData,
                backgroundColor: ['white'],
                borderRadius: 10,
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                y: {
                    ticks: {
                        callback: function () { return ''; },
                        font: { size: 22 }
                    }
                },
                x: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function (value) {
                            if ([0, 50, 100].includes(value)) {
                                return value === 0 ? 'BÁSICO' :
                                    value === 50 ? 'INTERMEDIÁRIO' :
                                    'AVANÇADO';
                            }
                            return '';
                        },
                        font: {
                            size: 20,
                            family: 'Terminal',
                            weight: 'bold',
                        },
                        color: 'white'
                    }
                }

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
                    ctx.drawImage(
                        img,
                        yAxis.left - 15,
                        yAxis.getPixelForValue(i) - 16,
                        25, 25
                    );
                });
            }
        }]
    });
});

