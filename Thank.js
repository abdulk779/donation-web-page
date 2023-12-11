const heading = document.querySelector(".payment-success");
const discription = document.querySelector(".payment-discription");
const redirect = document.querySelector(".redirecting");
const container = document.querySelector(".form");
const timeline = new TimelineMax({ delay: 0.3 });

window.onload = () => {
    if (window.innerWidth < 620) {
        timeline.fromTo(container, 0.5, { width: "0%", opacity: 0 }, { width: "82%", opacity: 1 });
    } else {
        timeline.fromTo(container, 0.5, { width: "0%", opacity: 0 }, { width: "53%", opacity: 1 });
    }
    timeline.fromTo(heading, 0.5, { y: -50, opacity: 0 }, { y: 0, opacity: 1 });
    timeline.fromTo(discription, 0.5, { opacity: 0 }, { opacity: 1 });
    timeline.fromTo(redirect, 0.5, { opacity: 0 }, { opacity: 1 }, 2);

    setInterval(function() {
        window.location.replace("index.html")
    }, 8000)
}