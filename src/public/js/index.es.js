
import css from '../css/index.css';

class PraiseButton {

    constructor() {

    }

    clickAction() {
        axios.get('/index/update').then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
}

export  default PraiseButton;