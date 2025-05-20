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

const skillData = [40, 40, 25, 45, 20];

function loadImage(src) {
    return new Promise(resolve => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
    });
}

Promise.all(skillIcons.map(loadImage)).then(loadedIcons => {
    const canvas = document.getElementById('graficoSkills');
    const ctx = canvas.getContext('2d');

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['HTML', 'CSS', 'JAVASCRIPT', 'PYTHON', 'VUE.JS'],
            datasets: [{
                label: 'Nível',
                data: skillData,
                backgroundColor: 'white',
                borderRadius: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            scales: {
                y: {
                    ticks: {
                        callback: () => '',
                        font: { size: 16 }
                    }
                },
                x: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: (value) => {
                            if ([0, 50, 100].includes(value)) {
                                return value === 0 ? 'BÁSICO' :
                                    value === 50 ? 'INTERMEDIÁRIO' : 'AVANÇADO';
                            }
                            return '';
                        },
                        font: {
                            size: 16,
                            family: 'Terminal',
                            weight: 'bold'
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
                const ctx = chart.ctx;
                const yAxis = chart.scales.y;

                loadedIcons.forEach((img, i) => {
                    const barHeight = yAxis._length / skillData.length;
                    const iconSize = Math.min(barHeight * 0.8, 40); // Responsivo

                    ctx.drawImage(
                        img,
                        yAxis.left - 10,
                        yAxis.getPixelForValue(i) - iconSize / 2,
                        iconSize,
                        iconSize
                    );
                });
            }
        }]
    });

    // Re-renderiza ao redimensionar janela
    window.addEventListener('resize', () => {
        chart.update();
    });
});


function myFunction() {
  alert("Mensagem enviada com sucesso!");
    window.location.href = "#Home";
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}
