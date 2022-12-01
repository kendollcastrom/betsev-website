(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function initAcc(elem, option) {
    document.addEventListener('click', function (e) {
        if (!e.target.matches(elem + ' .a-btn')) return;else {
            if (!e.target.parentElement.classList.contains('active')) {
                if (option == true) {
                    var elementList = document.querySelectorAll(elem + ' .a-container');
                    Array.prototype.forEach.call(elementList, function (e) {
                        e.classList.remove('active');
                    });
                }
                e.target.parentElement.classList.add('active');
            } else {
                e.target.parentElement.classList.remove('active');
            }
        }
    });
}
initAcc('.accordion.v1', true);
initAcc('.accordion.v2', false);
exports.default = initAcc();

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var n_of_wagers = 7;
var lines = new Array("", "", "", "", "", "", "", "", "", "", "");
var values = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

var CalcParlay = function CalcParlay(form) {
	for (i = 0; i <= n_of_wagers; i++) {
		lines[i] = parseFloat(form["Line" + i].value);
		values[i] = parseFloat(form["Factor" + i].value);
	}
	Bet = parseFloat(form.Amount.value);
	Payout = Bet;
	for (i = 0; i <= n_of_wagers; i++) {
		lines[i] = parseFloat(form["Line" + i].value);
		values[i] = parseFloat(form["Factor" + i].value);
		if (lines[i] < 0) {
			values[i] = (-lines[i] + 100) / -lines[i];
		} else if (lines[i] > 0) {
			values[i] = (lines[i] + 100) / 100;
		} else {
			values[i] = 0;
		}
		if (values[i] != 0) {
			values[i] = Math.round(values[i] * 10000) / 10000;
			Payout *= values[i];
		}
	}

	for (i = 0; i <= n_of_wagers; i++) {
		form["Factor" + i].value = values[i];
	}
	form.Payout.value = Math.round((Payout - Bet) * 100 / 100);
};

var clearForm = function clearForm(form) {
	for (i = 0; i <= n_of_wagers; i++) {
		form["Line" + i].value = '';
		form["Factor" + i].value = '0';
	}
	form.Amount.value = 100;
	form.Payout.value = 0;
};

var write_line = function write_line(nwager) {

	document.write("<tr>\n");
	document.write("	<td align=\"center\"><b>Wager " + (nwager + 1) + ".</b>\n");
	document.write("	</td>\n");
	document.write("	<td>\n");
	document.write("	<input type=\"text\" size=\"7\" value=\"" + lines[nwager] + "\" name=\"Line" + nwager + "\">\n");
	document.write("	</td>\n");
	document.write("	<td>\n");
	document.write("	<input type=\"text\" size=\"7\" value=\"" + values[nwager] + "\" name=\"Factor" + nwager + "\" readonly disabled>\n");
	document.write("	</td>\n");
	document.write("</tr>\n");
};

var Calc = function Calc() {
	CalcParlay();
	clearForm();
	write_line();
};

exports.Calc = Calc;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var paymentSlider = function paymentSlider() {
	var slider = tns({
		container: "#payment-carousell",
		items: 1,
		slideBy: 1,
		swipeAngle: false,
		speed: 400,
		edgePadding: 16,
		nav: false,
		autoplay: true,
		controls: false,
		mouseDrag: true,
		responsive: {
			320: {
				items: 2
			},
			480: {
				items: 4
			},
			640: {
				items: 5
			},
			800: {
				items: 6
			},
			960: {
				items: 6
			},
			1120: {
				items: 6
			},
			1280: {
				items: 6
			}
		}
	});
};

var paymentSliderCasino = function paymentSliderCasino() {
	var slider = tns({
		container: "#payment-carousell-casino",
		items: 1,
		slideBy: 1,
		swipeAngle: false,
		speed: 400,
		edgePadding: 16,
		nav: false,
		autoplay: true,
		mouseDrag: true,
		controls: false,
		responsive: {
			320: {
				items: 2
			},
			480: {
				items: 4
			},
			640: {
				items: 5
			},
			800: {
				items: 6
			},
			960: {
				items: 6
			},
			1120: {
				items: 6
			},
			1280: {
				items: 6
			}
		}
	});
};

exports.paymentSlider = paymentSlider;
exports.paymentSliderCasino = paymentSliderCasino;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var tabs = function tabs() {
	var hideTable = function hideTable() {
		var tables = document.querySelectorAll('.horse-table__hidden');
		for (var index = 0; index < tables.length; index++) {
			tables[index].style.display = 'none';
		}
	};
	var d = document,
	    tabs = Array.prototype.slice.apply(d.querySelectorAll('.tabs-container__tab'));

	var _loop = function _loop(index) {
		tabs[index].addEventListener('click', function (e) {
			var i = tabs.indexOf(e.target);
			var x = tabs[index];
			hideTable();
			tabs.map(function (tab) {
				return tab.classList.remove('is-active');
			});
			x.classList.add('is-active');
			var table = document.querySelector('.' + x.id);
			table.style.display = 'block';
		});
	};

	for (var index = 0; index < tabs.length; index++) {
		_loop(index);
	}
};

exports.default = tabs;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var tnsCarousell = exports.tnsCarousell = function tnsCarousell() {
	var slider = tns({
		container: "#tnsCarousell",
		items: 1,
		slideBy: 1,
		swipeAngle: false,
		speed: 400,
		edgePadding: 40,
		nav: false,
		mouseDrag: true,
		controlsText: ['<i class="tns-carousell__prev fas fa-chevron-left"></i>', '<i class="tns-carousell__next fas fa-chevron-right"></i>'],
		responsive: {
			480: {
				items: 2
			},
			640: {
				items: 2
			},
			800: {
				items: 4
			},
			960: {
				items: 4
			},
			1120: {
				items: 4
			},
			1280: {
				items: 4
			}
		}
	});
};

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var tnsSingle = exports.tnsSingle = function tnsSingle() {
	var slider = tns({
		container: '#tnsSingle',
		items: 1,
		slideBy: 1,
		autoplay: true,
		speed: 1000,
		mode: 'gallery',
		mouseDrag: true,
		controlsText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
	});
};

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var topNav = exports.topNav = function topNav() {
	var myFunction = function myFunction() {
		document.querySelector('.hamburger').addEventListener('click', function (e) {
			e.preventDefault();
			[].map.call(document.querySelectorAll('.hamburger'), function (el) {
				el.classList.toggle('is-active');
			});
			[].map.call(document.querySelectorAll('.top-nav__menu'), function (el) {
				el.classList.toggle('show-top-nav');
			});
		});
	};
	myFunction();
};

},{}],8:[function(require,module,exports){
'use strict';

var _tnsSlider = require('./components/tns-slider');

var _topNav = require('./components/topNav');

var _tnsCarousell = require('./components/tns-carousell');

var _tabs = require('./components/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _paymentSlider = require('./components/payment-slider');

var _dropdownSports = require('./components/dropdown-sports');

var _parlayCalculator = require('./components/parlay-calculator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
		(0, _topNav.topNav)();
		(0, _tabs2.default)();

		if (document.body.classList.contains('Inicio')) {
				// functions here
				(0, _tnsSlider.tnsSingle)();
				(0, _tnsCarousell.tnsCarousell)();
				(0, _paymentSlider.paymentSlider)();
		} else if (document.body.classList.contains('Casino')) {
				(0, _paymentSlider.paymentSliderCasino)();
		} else if (document.body.classList.contains('Calculadora-parlay')) {
				(0, _parlayCalculator.Calc)();
		} else if (document.body.classList.contains('Reglas de deportes')) {
				(0, _dropdownSports.initAcc)();
		}
})();

},{"./components/dropdown-sports":1,"./components/parlay-calculator":2,"./components/payment-slider":3,"./components/tabs":4,"./components/tns-carousell":5,"./components/tns-slider":6,"./components/topNav":7}]},{},[8]);

//# sourceMappingURL=scripts-min.js.map
