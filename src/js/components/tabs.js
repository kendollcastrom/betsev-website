const tabs = () => {
	const hideTable = () => {
		let tables = document.querySelectorAll('.horse-table__hidden')
		for (let index = 0; index < tables.length; index++) {
			tables[index].style.display = 'none'
		}
	}
    const 
        d = document,
        tabs = Array.prototype.slice.apply(d.querySelectorAll('.tabs-container__tab'))
		for (let index = 0; index < tabs.length; index++) {
			tabs[index].addEventListener('click', e => {
				let i = tabs.indexOf(e.target);
				let x = tabs[index];
				hideTable();
				tabs.map(tab => tab.classList.remove('is-active'));
				x.classList.add('is-active');
				let table = document.querySelector(`.${x.id}`);
				table.style.display = 'block';
			})
		}
};

export default tabs
