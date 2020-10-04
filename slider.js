function Slider() {
    this.btnPrev = document.querySelector('.slider__prev');
    this.btnNext = document.querySelector('.slider__next');
    this.sliderImg = document.querySelector('.slider__img');
    this.sliderIndex = 0;
    this.imageUrl = [];
    this.start = function(elId) {
        this.showNextBtn = this.showNextBtn.bind(this);
        this.showPrevBtn = this.showPrevBtn.bind(this);

        const elSelector = '#' + elId;
        const el = document.querySelector(elSelector);

        this.btnPrev = el.querySelector('.slider__prev');
        this.btnNext = el.querySelector('.slider__next');
        this.sliderImg = el.querySelector('.slider__img');

        this.btnPrev.addEventListener('click', this.showPrevBtn);
        this.btnNext.addEventListener('click', this.showNextBtn);

        this.imageUrl.push('https://img.drive.ru/i/0/5ece3803ec05c4fb58000291.jpg');
        this.imageUrl.push('https://cdn.motor1.com/images/mgl/mpLVr/s1/bmw-m3-touring-and-sedan-renderings.jpg');
        this.imageUrl.push('https://cdn.motor1.com/images/mgl/VmK9R/s4/2020-bmw-concept-i4.jpg');
        this.imageUrl.push('https://cdnimg.rg.ru/img/content/189/56/35/P90390034_highRes_bmw-m440i-xdrive-arc_d_850.jpg');

        this.sliderImg.src = this.imageUrl[this.sliderIndex];
        this.btnPrev.disabled = true;
    };
    this.showPrevBtn = function() {
        this.sliderIndex--;
        this.sliderImg.src = this.imageUrl[this.sliderIndex];
        this.btnNext.disabled = false;
        if(this.sliderIndex === 0){
            this.btnPrev.disabled = true;
        }
    };
    this.showNextBtn = function() {
        this.sliderIndex++;
        this.sliderImg.src = this.imageUrl[this.sliderIndex];
        this.btnPrev.disabled = false;
        if(this.sliderIndex === (this.imageUrl.length - 1)){
            this.btnNext.disabled = true;
        }
    };
};



const newSlider = new Slider();


