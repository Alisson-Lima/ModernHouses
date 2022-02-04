(function(){

    slideHouses();
    window.addEventListener('resize', resizeWindow);
    function resizeWindow(){
        window.location.reload()
    }
    function slideHouses(){
        let screenWidth = verifyScreen()
        slideOn();
        function slideOn(){

            if(screenWidth === 'Mobile'){
                ativeNextImage(250)

            }else if(screenWidth === 'Tablet'){
                ativeNextImage(350)
            }else{
                ativeNextImagePc()
            }


            function ativeNextImage(Screen){
                let i = 0;
                let W = Screen;
                setInterval(nextImage, 5000);
                function nextImage(){
                    ++i;
                    let container = document.querySelector(".houses-container")
                    let imgs = document.querySelectorAll(".houses-container .houses")
                    if(i > imgs.length - 1){
                        i = 0
                    }
                    container.style.transform = `translateX(${-i * W}px)`;
                    container.style.transition = 1+'s';

                }
            }
            function ativeNextImagePc(){
                let i = 0;
                setInterval(nextImage, 5000);
                function nextImage(){
                    ++i;
                    let container = document.querySelector(".houses-container")
                    let imgs = document.querySelectorAll(".houses-container .houses")
                    if(i > imgs.length - 1){
                        i = 0
                    }
                    container.style.transform = `translateY(${-i * 410}px)`;
                    container.style.transition = 1+'s';

                }
            }
        }

        function verifyScreen(){
            let width = document.querySelector(".container");
            if(width.offsetWidth <= 600){
                return 'Mobile';
            }else if(width.offsetWidth <= 1024){
                return 'Tablet';
            }else{
                return 'Computer'
            }
        }

    }

})()