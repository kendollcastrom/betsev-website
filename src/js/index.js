import {tnsSingle} from './components/tns-slider';
import {topNav} from './components/topNav';
import {tnsCarousell} from './components/tns-carousell';
import tabs from './components/tabs'
import {paymentSlider, paymentSliderCasino} from './components/payment-slider';
import {initAcc} from './components/dropdown-sports';

(()=>{
    topNav();
	tabs();
	
    if (document.body.classList.contains('Inicio')) {
		tnsSingle();
		tnsCarousell();
		paymentSlider();
    }else if (document.body.classList.contains('Casino')) {
		paymentSliderCasino();
    }else if (document.body.classList.contains('Reglas de deportes')) {
		initAcc();
    }
})();

