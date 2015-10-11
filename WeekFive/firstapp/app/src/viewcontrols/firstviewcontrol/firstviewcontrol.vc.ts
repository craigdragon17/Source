import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class FirstViewControlViewControl extends BaseViewControl {
    templateString: string = require('./firstviewcontrol.vc.html');

    context: any = {
        name: 'Bob Fairweather',
        customer: {
            id: 0,
            name:""
        },
        customers: [
            { id: 1,
            name: 'First American Bank'},
            { id: 2,
            name: 'United Mississippi'}
        ]
    };
    loaded(){
        this.context.name=""
    }
    navigatedTo(parameters:any, query: any){
        var customerId = parameters.id;
        this.context.customer.id = customerId;
        if(customerId <= 2){
            this.context.customer = this.context.customers[customerId -1];
        
        }
    }
}

register.viewControl('firstviewcontrol-vc', FirstViewControlViewControl);
