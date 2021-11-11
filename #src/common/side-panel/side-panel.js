let sidePanel = document.querySelector('.side-panel');
if(sidePanel) {
    let items = document.querySelectorAll('.side-panel__item');
    let thumb = document.querySelector('.side-panel__line .thumb');
    let menu = document.querySelector('.menu');
    const setLinePosition = (item) => {
        let top = (item.getBoundingClientRect().top - sidePanel.getBoundingClientRect().top) + (item.clientHeight / 2);
        thumb.style.top = top + 'px';
    }

    const setActiveItem = (id) => {
        items.forEach(item => {
            if(item.dataset.id === id) {
                item.classList.add('active');
                setLinePosition(item);
            } else {
                item.classList.remove('active');
            }
        })
    }

    items.forEach(item => {
        let id = item.dataset.id;

        item.addEventListener('click', () => {
            let el = document.querySelector(`section[data-id="${id}"`);
            if(el) {

                if(document.documentElement.clientWidth < 992) {

                    window.scrollTo({
                        top: el.offsetTop - 100,
                        behavior: 'smooth',
                    })
    

                    menu.classList.remove('open');
                    document.body.classList.remove('lock');

                } else {
                    window.scrollTo({
                        top: el.offsetTop - 40,
                        behavior: 'smooth',
                    })
    
                }
            }
        })
    })

    let mainSections = document.querySelectorAll('main > section');
	if (mainSections.length) {
		let header = document.querySelector('.header')

        const defineVisibleSection = () => {
            mainSections.forEach(section => {
				let top = section.getBoundingClientRect().top;
				let bottom = section.getBoundingClientRect().bottom;
				let halfHeightOfWindow = (document.documentElement.clientHeight - header.clientHeight) / 2;

				if (top < halfHeightOfWindow && bottom >= halfHeightOfWindow) {
					if(section.dataset.id) {
						setActiveItem(section.dataset.id);
					}
				}

			})
        }
        defineVisibleSection();

		window.addEventListener('scroll', defineVisibleSection);
	}

}