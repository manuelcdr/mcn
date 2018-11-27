var TxtType = function (el) {
    var toRotate = el.getAttribute('data-type');
    var period = el.getAttribute('data-period');
    var delay = el.getAttribute('data-delay');

    this.toRotate = JSON.parse(toRotate);
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = 'a';
    this.delay = parseInt(delay, 10) || 2000;
    var that = this;

    setTimeout(function() {that.tick()}, this.delay);

    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        // var child = $(this.el).children('.wrap');
        // this.el.removeChild(child[0]);
        return;
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 130 - Math.random() * 100;

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

$(function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        new TxtType(elements[i]);
    }
    // INJECT CSS
    // var css = document.createElement("style");
    // css.type = "text/css";
    // css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    // document.body.appendChild(css);
})