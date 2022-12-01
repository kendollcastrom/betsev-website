export const tnsCarousell = () => {
	let slider = tns({
		container: "#tnsCarousell",
		items: 1,
		slideBy: 1,
		swipeAngle: false,
		speed: 400,
		edgePadding: 40,
		nav: false,
		mouseDrag: true,
		controlsText: [
			'<i class="tns-carousell__prev fas fa-chevron-left"></i>',
			'<i class="tns-carousell__next fas fa-chevron-right"></i>',
		],
		responsive: {
			480: {
				items: 2,
			},
			640: {
				items: 2,
			},
			800: {
				items: 4,
			},
			960: {
				items: 4,
			},
			1120: {
				items: 4,
			},
			1280: {
				items: 4,
			},
		},
	});
};
