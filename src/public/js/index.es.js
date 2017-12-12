
import css from '../css/index.css';

class PraiseButton {

    constructor($ele, option) {



        this.init();

        this.$ele = $ele;
        this.clickNum = option.clickNum || this.DEFAULT.clickNum;

        this.maxClickNum = options.maxClickNum || this.DEFAULT.maxClickNum;

        this.bindEvents();
    }

    init() {
        this.setDefault();
    }

    setDefault() {
        this.DEFAULT = {
            clickNum: 0,
            maxClickNum: 10,
        }
    }


    bindEvents() {
        this.$ele.click(() => {

            if(this.clickNum < this.maxClickNum) {
                this.$ele.css('-webkit-filter', 'grayscale(0)');
                $('#animation').addClass('num');
                this.clickNum = window.add(this.clickNum);

                setTimeout(() => {
                    $('#animation').removeClass('num');
                }, 1000);


                axios.get('/index/update').then(res => {
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })



            } else {
                this.$ele.css('-webkit-filter', 'grayscale(1)');
                this.clickNum = 0;
            }
        });
    }


}

class Thumb extends PraiseButton {

    constructor($ele, options) {
        super($ele, options);

    }






}

export  default {PraiseButton, Thumb};