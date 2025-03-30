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
    responsive: true,
    maintainAspectRatio: false,
    resizeDelay: 200, 
    layout: {
        padding: 22 // 余白を統一してサイズ調整
    },
    scales: {
        r: {
            min: 0,
            max: 100,
            ticks: {
                display: false,
                stepSize: 20
            },
            pointLabels: {
                font: {
                    size: 12
                },
                maxWidth: 80 // ラベルの幅を制限
            },
            angleLines: {
                display: false
            }
        }
    },
    elements: {
        line: {
            tension: 0
        }
    }
};

// データセット
const data1 = {
    labels: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TailwindCSS"],
    datasets: [{
        label: "フロントエンド技術",
        data: [70, 70, 50, 40, 40, 40],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1
    }]
};

const data2 = {
    labels: ["Java", "Python", "Node.js", "Git", "Firebase", "PHP"],
    datasets: [{
        label: "バックエンド技術",
        data: [50, 35, 20, 60, 50, 25],
        backgroundColor: "rgba(153, 102, 255, 0.2)",
            borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1
    }]
};

const data3 = {
    labels: ["Shopify", "WordPress", "SketchUp", "InDesign", "Acrobat", "ChatGPT"],
    datasets: [{
        label: "デザイン・他",
        data: [80, 80, 70, 65, 60, 75],
        backgroundColor: "rgba(255, 159, 64, 0.2)",
            borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1
    }]
};

// チャートの描画
new Chart(document.getElementById("chart1"), { type: "radar", data: data1, options: chartOptions });
new Chart(document.getElementById("chart2"), { type: "radar", data: data2, options: chartOptions });
new Chart(document.getElementById("chart3"), { type: "radar", data: data3, options: chartOptions });

  


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
  
  
