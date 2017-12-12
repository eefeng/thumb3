import PraiseButton from './index.es';

const f = new PraiseButton();
xtag.register('x-praise', {
    content: '<div class="hand" id="thumb">' +
    '<div class="finger"></div>' +
    '<div class="finger"></div>' +
    '<div class="finger"></div>' +
    '<div class="finger"></div>' +
    '<div class="finger thumb"></div>' +
    '<div class="arm"></div>\n' +
    '</div>',

    methods: {
       praise: function () {
           let _this = this;
           f.clickAction();

           let animationEle = _this.querySelector('#animation');
           animationEle.className = "hide num";
           setTimeout(function () {
               animationEle.className = "hide";
           }, 800)
       }
    },

    events: {
       click: function (e) {
           let _this = this;
           if(e.target.id === 'thumb') {
               let t = '';
               if(t) {
                   clearTimeout(t);
               }

               t = setTimeout(() => {
                   this.praise();
               }, 500);
               
           }
       }
    }
});