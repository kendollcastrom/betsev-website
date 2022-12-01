import {tnsSingle} from './components/tns-slider';
import {topNav} from './components/topNav';
import {tnsCarousell} from './components/tns-carousell';
import tabs from './components/tabs'
import {paymentSlider, paymentSliderCasino} from './components/payment-slider';
import {initAcc} from './components/dropdown-sports';
import {Calc} from './components/parlay-calculator';

(()=>{
    topNav();
	tabs();
	
    if (document.body.classList.contains('Inicio')) {
        // functions here
		tnsSingle();
		tnsCarousell();
		paymentSlider();
    }else if (document.body.classList.contains('Casino')) {
		paymentSliderCasino();
    }else if (document.body.classList.contains('Calculadora-parlay')) {
		Calc();
    }else if (document.body.classList.contains('Reglas de deportes')) {
		initAcc();
    }
})();

