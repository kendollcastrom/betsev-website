const paymentSlider = () => {
	let slider = tns({
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
				items: 2,
			},
			480: {
				items: 4,
			},
			640: {
				items: 5,
			},
			800: {
				items: 6,
			},
			960: {
				items: 6,
			},
			1120: {
				items: 6,
			},
			1280: {
				items: 6,
			},
		},
	});
};

const paymentSliderCasino = () => {
	let slider = tns({
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
				items: 2,
			},
			480: {
				items: 4,
			},
			640: {
				items: 5,
			},
			800: {
				items: 6,
			},
			960: {
				items: 6,
			},
			1120: {
				items: 6,
			},
			1280: {
				items: 6,
			},
		},
	});
};

export {
	paymentSlider,
	paymentSliderCasino
}
