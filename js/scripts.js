/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


const chartOptions = {
    responsive: false,
    maintainAspectRatio: true,
    scales: {
        r: {
            min: 10,
            max: 100,
            ticks: {
                display: true,
                stepSize: 20,
                color: 'rgba(150, 150, 150, 0.3)'
            },
            grid: {
                color: 'rgba(200, 200, 200, 0.2)',
                circular: false
            },
            pointLabels: {
                font: {
                    size: 11
                },
                padding: 4
            },
            angleLines: {
                color: 'rgba(200, 200, 200, 0.3)'
            }
        }
    },
    elements: {
        line: {
            tension: 0
        }
    },
    plugins: {
        legend: {
            position: 'top'
        }
    },
    layout: {
        padding: 0
    }
};

["chart1", "chart2", "chart3", "chart4"].forEach(id => {
    const canvas = document.getElementById(id);
    canvas.width = 280;
    canvas.height = 280;
});

// フロントエンド言語・技術
const data1 = {
    labels: ["HTML", "CSS", "JavaScript", "TypeScript", "Vue.js"],
    datasets: [{
        label: "フロントエンド",
        data: [80, 80, 70, 60, 30],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1
    }]
};

// フロントエンドフレームワーク
const data2 = {
    labels: ["React", "Next.js", "Bootstrap", "Tailwind", "Nuxt.js"],
    datasets: [{
        label: "フレームワーク",
        data: [60, 55, 70, 70,30],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1
    }]
};

// バックエンド言語・技術
const data3 = {
    labels: ["Java", "Python", "PHP", "Node.js", "SQL"],
    datasets: [{
        label: "バックエンド",
        data: [60, 60, 30, 35, 65],
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1
    }]
};

// その他ツール
const data4 = {
    labels: ["Shopify", "WP","SketchUp", "InDesign", "Acrobat"],
    datasets: [{
        label: "その他ツール",
        data: [85, 85, 70, 65, 65],
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1
    }]
};

// チャートの描画
new Chart(document.getElementById("chart1"), { type: "radar", data: data1, options: chartOptions });
new Chart(document.getElementById("chart2"), { type: "radar", data: data2, options: chartOptions });
new Chart(document.getElementById("chart3"), { type: "radar", data: data3, options: chartOptions });
new Chart(document.getElementById("chart4"), { type: "radar", data: data4, options: chartOptions });


document.addEventListener("DOMContentLoaded", function () {
    const codeText = [
      "function introduce() {",
        "  const strengths = ['Problem-Solving', 'Curiosity', 'Planning', 'Fast Learning'];",
        "  console.log('My Core Strengths');",
        "  strengths.forEach(skill => console.log(` ${skill}`));",
        "  console.log('Always learning, always improving.');",
        "}",
        "introduce();"
    ];
  
    const container = document.getElementById("code-lines");
    let totalDelay = 0;
  
    codeText.forEach(line => {
      const lineElement = document.createElement("div");
      container.appendChild(lineElement);
  
      line.split("").forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        lineElement.appendChild(span);
  
        // タイピング風に1文字ずつ表示
        setTimeout(() => {
          span.classList.add("visible");
        }, totalDelay + index * 50);
      });
  
      // 各行の遅延を少し長めにする
      totalDelay += line.length * 50 + 300;
    });
  });
  
  