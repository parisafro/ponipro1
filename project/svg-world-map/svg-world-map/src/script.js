window.onload = function() {
    var mapLength = document.getElementsByTagName('circle').length - 1;
    var currentCircle = "";
    var previousCircle = "";

    function rnd(a, z) {
        return Math.floor(Math.random() * (z - a) + a);
    }


    var randomCircle = rnd(0, mapLength);
    currentCircle = randomCircle;
    var a = document.getElementsByTagName('circle')[currentCircle];
    previousCircle = currentCircle;

    var circleCloneFirst = a.cloneNode(true);
    var circleCloneSecond = a.cloneNode(true);
    var circleCloneThird = a.cloneNode(true);
    a.classList.add("active");
    circleCloneFirst.classList.add("active-first");
    circleCloneSecond.classList.add("active-second");
    circleCloneThird.classList.add("active-third");
    circleCloneFirst.classList.remove("active");
    circleCloneSecond.classList.remove("active");
    circleCloneThird.classList.remove("active");
    circleCloneFirst.setAttribute('r', 10);
    circleCloneSecond.setAttribute('r', 14);
    circleCloneThird.setAttribute('r', 18);
    document.getElementsByClassName('b-header__map')[0].appendChild(circleCloneFirst);
    document.getElementsByClassName('b-header__map')[0].appendChild(circleCloneSecond);
    document.getElementsByClassName('b-header__map')[0].appendChild(circleCloneThird);


    (function(){

        if (previousCircle!="") {
            document.getElementsByTagName('circle')[previousCircle].classList.remove("active");
        }
        var randomCircle = rnd(0, mapLength);
        currentCircle = randomCircle;
        var a = document.getElementsByTagName('circle')[currentCircle];
        a.classList.add("active");

        circleCloneFirst.setAttribute('cx', a.getAttribute('cx'));
        circleCloneSecond.setAttribute('cx', a.getAttribute('cx'));
        circleCloneThird.setAttribute('cx', a.getAttribute('cx'));
        circleCloneFirst.setAttribute('cy', a.getAttribute('cy'));
        circleCloneSecond.setAttribute('cy', a.getAttribute('cy'));
        circleCloneThird.setAttribute('cy', a.getAttribute('cy'));

        previousCircle = currentCircle;
        setTimeout(arguments.callee, 3000);
    })();
}
