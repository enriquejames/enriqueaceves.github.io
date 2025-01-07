document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector(".switch");
    var switchSlider = toggle.querySelector(".switch-slider");
    var switchLabel = toggle.querySelector(".switch-label");

    toggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            switchSlider.classList.add("switch-slider-right");
            switchLabel.innerHTML = "Dark Mode";
        } else {
            switchSlider.classList.remove("switch-slider-right");
            switchLabel.innerHTML = "Light Mode";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var modal = document.querySelector(".modal");
    var btn = document.querySelector(".contact-me-button");
    var span = document.querySelector(".close");

    btn.onclick = function () {
        modal.style.display = "block";
    };

    span.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
