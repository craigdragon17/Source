import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
        name: 'Bob Fairweather',
        customers: [
            { id: 1,
            name: 'First American Bank'},
            { id: 2,
            name: 'United Mississippi'}
        ]
    };
    doSomething(){
        this.navigator.navigate('firstviewcontrol-vc', {parameters:{id:100}});
    }
}

register.viewControl('home-vc', HomeViewControl);
