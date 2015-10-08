import {App, events, register, routing} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';
import RegisterViewControl from '../viewcontrols/register/register.vc';
import LoginViewControl from '../viewcontrols/register/register.vc';

export default class MyApp extends App {
    constructor(router: routing.Router) {
        super();

       router.configure([
    { pattern: '', view: HomeViewControl },
    { pattern: 'login', view: LoginViewControl},
    { pattern: 'register', view: RegisterViewControl }
]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
}

register.app('app', MyApp, [
    routing.Router
]);
