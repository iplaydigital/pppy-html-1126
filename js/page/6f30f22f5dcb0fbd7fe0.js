
        $(document).ready(function () {
            $(window).scroll(function () {

                var scroll_top = $(this).scrollTop();
                if (scroll_top > 66) { //height of header
                    $('.navbar-no-shadow').addClass('sticky');
                } else {
                    $('.navbar-no-shadow').removeClass('sticky');
                }
            });
        });

        const button = document.querySelector(".showButton");
        let num = 1;

        if (button) button.addEventListener('click', () => {
            // create the box element with a class of .box
            const box = document.createElement("div");
            box.textContent = `Hello! I am box $!`;
            box.classList.add("box");

            // append the new element box to the DOM
            document.querySelector("body").appendChild(box);

            box.animate({
                transform: 'translateY(0)'
            }, {
                duration: 500,
                fill: 'forwards'
            });

        });
    