var TxtType = function (el) {
    var toRotate = el.getAttribute('data-type');
    var period = el.getAttribute('data-period');
    var delay = el.getAttribute('data-delay');
    var speed = el.getAttribute('data-speed');
    var next = el.getAttribute('data-next');

    this.toRotate = JSON.parse(toRotate);
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 0;
    this.txt = 'a';
    this.delay = parseInt(delay, 10) || 2000;
    this.speed = parseInt(speed, 10) || 100;
    this.next = $(next);

    var that = this;

    setTimeout(function () { that.tick() }, this.delay);

    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        if (this.next.length > 0) {
            var next = this.next;
            for (var i = 0; i < next.length; i++) {
                new TxtType(next[i]);
            }
        }
        if (this.period > 0) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            return;
        }
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = this.speed - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

var startTypewrite = function () {
    var elements = document.getElementsByClassName('start-typewrite');
    for (var i = 0; i < elements.length; i++) {
        new TxtType(elements[i]);
    }
}

$(function () {

    if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', startTypewrite);
    } else {
        startTypewrite();
    }

    // INJECT CSS
    // var css = document.createElement("style");
    // css.type = "text/css";
    // css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    // document.body.appendChild(css);
})



