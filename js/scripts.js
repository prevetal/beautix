// Ширина окна для ресайза
WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]
OVERLAY = document.querySelector('.overlay')


document.addEventListener('DOMContentLoaded', function () {
	// История
	const historySliders = [],
		history = document.querySelectorAll('.history .swiper')

	history.forEach(function (el, i) {
		el.classList.add('history_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			spaceBetween: 32,
			breakpoints: {
				0: {
					slidesPerView: 'auto'
				},
				1024: {
					slidesPerView: 3
				},
				1440: {
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.item')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.item')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		historySliders.push(new Swiper('.history_s' + i, options))
	})


	// Категории
	const categoriesSliders = [],
		categories = document.querySelectorAll('.categories .swiper')

	categories.forEach(function (el, i) {
		el.classList.add('categories_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: true,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 24,
					slidesPerView: 'auto',
					grid: {
						rows: 2
					}
				},
				480: {
					spaceBetween: 24,
					slidesPerView: 2,
					grid: {
						rows: 2
					}
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 3,
					grid: {
						rows: 2
					}
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 4,
					grid: {
						rows: 2
					}
				},
				1280: {
					spaceBetween: 24,
					slidesPerView: 5,
					grid: {
						rows: 2
					}
				},
				1440: {
					spaceBetween: 24,
					slidesPerView: 6,
					grid: {
						rows: 2
					}
				},
				1680: {
					spaceBetween: 32,
					slidesPerView: 6,
					grid: {
						rows: 2
					}
				}
			}
		}

		categoriesSliders.push(new Swiper('.categories_s' + i, options))
	})


	// Обучение
	const educationSliders = [],
		education = document.querySelectorAll('.education .swiper')

	education.forEach(function (el, i) {
		el.classList.add('education_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: true,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			slidesPerView: 'auto',
			breakpoints: {
				0: {
					spaceBetween: 12
				},
				480: {
					spaceBetween: 20
				},
				768: {
					spaceBetween: 24
				},
				1440: {
					spaceBetween: 32
				}
			}
		}

		educationSliders.push(new Swiper('.education_s' + i, options))
	})


	// Бренды
	const brandsThumbsSliders = [],
		brandsThumbs = document.querySelectorAll('.brands .brand .swiper')

	brandsThumbs.forEach(function (el, i) {
		el.classList.add('brands_thumbs_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: true,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			slidesPerView: 1,
			spaceBetween: 0,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			}
		}

		brandsThumbsSliders.push(new Swiper('.brands_thumbs_s' + i, options))
	})


	// Преподователи
	const teachersSliders = [],
		teachers = document.querySelectorAll('.teachers .swiper')

	teachers.forEach(function (el, i) {
		el.classList.add('teachers_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: true,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 15,
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1280: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1680: {
					spaceBetween: 32,
					slidesPerView: 3
				}
			}
		}

		teachersSliders.push(new Swiper('.teachers_s' + i, options))
	})


	// Отзывы
	const reviewsSliders = [],
		reviews = document.querySelectorAll('.reviews .swiper')

	reviews.forEach(function (el, i) {
		el.classList.add('reviews_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: true,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 15,
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1600: {
					spaceBetween: 32,
					slidesPerView: 3
				}
			}
		}

		reviewsSliders.push(new Swiper('.reviews_s' + i, options))
	})


	// Коллекции
	const collectionsSliders = [],
		collections = document.querySelectorAll('.collections .swiper')

	collections.forEach(function (el, i) {
		el.classList.add('collections_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: true,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			slidesPerView: 'auto',
			breakpoints: {
				0: {
					spaceBetween: 12
				},
				480: {
					spaceBetween: 20
				},
				768: {
					spaceBetween: 24
				},
				1440: {
					spaceBetween: 32
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.collection')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.collection')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		collectionsSliders.push(new Swiper('.collections_s' + i, options))
	})


	// Товары
	const productsSliders = [],
		products = document.querySelectorAll('.products .swiper')

	products.forEach(function (el, i) {
		el.classList.add('products_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: true,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 24,
					slidesPerView: 4
				},
				1440: {
					spaceBetween: 32,
					slidesPerView: 4
				}
			}
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})


	//Линии
	const kitsSliders = [],
		kits = document.querySelectorAll('.kits .swiper')

	kits.forEach(function (el, i) {
		el.classList.add('kits_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: true,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			slidesPerView: 1,
			breakpoints: {
				0: {
					spaceBetween: 12
				},
				480: {
					spaceBetween: 20
				},
				768: {
					spaceBetween: 24
				},
				1440: {
					spaceBetween: 32
				}
			}
		}

		kitsSliders.push(new Swiper('.kits_s' + i, options))
	})


	// Что содержит?
	const whatContainSliders = [],
		whatContain = document.querySelectorAll('.what_contain .swiper')

	whatContain.forEach(function (el, i) {
		el.classList.add('what_contain_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 32,
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 32,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 32,
					slidesPerView: 3
				},
				1440: {
					spaceBetween: 32,
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.item')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.item')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		whatContainSliders.push(new Swiper('.what_contain_s' + i, options))
	})


	// Страница товара
	if ($('.product_info .images').length) {
		const productThumbs = new Swiper('.product_info .thumbs .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 8,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					slidesPerView: 'auto'
				},
				480: {
					slidesPerView: 2
				},
				1024: {
					slidesPerView: 4
				},
				1280: {
					slidesPerView: 5
				},
				1440: {
					slidesPerView: 6
				}
			}
		})

		const productSlider = new Swiper('.product_info .big .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			thumbs: {
				swiper: productThumbs
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			}
		})
	}


	// Акции
	$('.stock .timer').each(function () {
		let timerDate = $(this).data('date')

		$(this).countdown(timerDate, function (event) {
			// $(this).find('.days').text(event.strftime('%D'))
			$(this).find('.hours').text(event.strftime('%H'))
			$(this).find('.minutes').text(event.strftime('%M'))
			$(this).find('.seconds').text(event.strftime('%S'))
		})
	})


	// Оформление заказа
	$('.form .contact_method label').click(function(e) {
		if (e.target.nodeName == 'LABEL') {
			let method = $(this).data('method'),
				parentForm = $(this).closest('form')

			parentForm.find('.phone, .email').hide()
			parentForm.find('.' + method).fadeIn(300)
		}
	})


	// Видео
	$('.videos .wheelSlider-container').wheelSlider({
		dots: false,
		arrowPrevHtml: '<svg class="icon"><use xlink:href="images/sprite.svg#ic_arr_hor"></use></svg>',
		arrowNextHtml: '<svg class="icon"><use xlink:href="images/sprite.svg#ic_arr_hor"></use></svg>',
	})


	// Комплекты
	$('.kits .head .spoler_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').closest('.head').toggleClass('active')

		$(this).closest('.section').find('.data').slideToggle(300)
	})


	// Аккордион
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		const $item = $(this).closest('.accordion_item'),
			$accordion = $(this).closest('.accordion')

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.data').slideUp(300)
		} else {
			$accordion.find('.accordion_item').removeClass('active')
			$accordion.find('.data').slideUp(300)

			$item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}

	Fancybox.defaults.template = {
		closeButton: '<svg><use xlink:href="images/sprite.svg#ic_close"></use></svg>',
		spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
		main: null
	}


	// Всплывающие окна
	const modalBtns = document.querySelectorAll('.modal_btn')

	if (modalBtns) {
		modalBtns.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				Fancybox.close()

				Fancybox.show([{
					src: document.getElementById(el.getAttribute('data-modal')),
					type: 'inline'
				}])
			})
		})
	}


	$('.modal .close_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()
	})


	// Увеличение картинки
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false,
		},
		Thumbs: {
			autoStart: false,
		}
	})


	// Моб. меню
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').addClass('active')
		$('body').addClass('menu_open')
		$('header').addClass('show')
		$('.overlay').fadeIn(300)
	})

	$('header .mob_close_btn, .overlay').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').removeClass('active')
		$('body').removeClass('menu_open')
		$('header').removeClass('show')
		$('.overlay').fadeOut(300)
	})


	// Маска ввода
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	// Фокус при клике на название поля
	const formLabels = document.querySelectorAll('form .label')

	if (formLabels) {
		formLabels.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				el.closest('.line').querySelector('.input, textarea').focus()
			})
		})
	}


	// Кастомный select
	const selects = document.querySelectorAll('select')

	if (selects) {
		selects.forEach(el => NiceSelect.bind(el, {
			placeholder: el.getAttribute('data-placeholder')
		}))
	}


	if (is_touch_device()) {
		const subMenus = document.querySelectorAll('header .menu .sub_menu')

		// Подменю на тач скрине
		$('header .menu_item > a.sub_link').addClass('touch_link')

		$('header .menu_item > a.sub_link').click(function (e) {
			const $dropdown = $(this).next()

			if ($dropdown.css('visibility') === 'hidden') {
				e.preventDefault()

				subMenus.forEach(el => el.classList.remove('show'))
				$dropdown.addClass('show')

				BODY.style = 'cursor: pointer;'
			}
		})

		// Закрываем под. меню при клике за её пределами
		document.addEventListener('click', e => {
			if ($(e.target).closest('.menu').length === 0) {
				subMenus.forEach(el => el.classList.remove('show'))

				BODY.style = 'cursor: default;'
			}
		})
	}


	// Отправка форм
	$('form').submit(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: '#success_modal',
			type: 'inline'
		}])
	})


	// Обучение
	$('.education .mob_load_more .btn').click(function(e) {
		e.preventDefault()

		$('.education .row > *:nth-child(4) ~ *').fadeIn(300)
		$('.education .mob_load_more').hide()
	})


	// Материалы
	$('.files .mob_load_more .btn').click(function(e) {
		e.preventDefault()

		$('.files .row > *:nth-child(4) ~ *').css('display', 'flex')
		$('.files .mob_load_more').hide()
	})


	// С кем мы работаем
	initWhoWeWorkWithSliders()

	// Статьи
	initArticlesSliders()

	// Как мы работаем
	initStepsSliders()

	// Наши преимущества
	initAdvantagesSliders()


	// Спойлер категорий
	$('.product_info .categories .spoler_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.categories')

		$(this).toggleClass('active')

		$(this).hasClass('active')
			? parent.find('.list > *.hide').fadeIn(300)
			: parent.find('.list > *.hide').fadeOut(200)
	})


	// Выбор цвета товара
	$('.product_info .data .option.color .vals label').click(function(e) {
		let colorName = $(this).data('color')

		$('.product_info .data .option .label .selected').text(colorName)
	})


	// Спойлер описания товара
	$('.product_info .data .full_desc .spoler_btn').click(function(e) {
		$(this).toggleClass('active')
		$('.product_info .data .full_desc .text_block').toggleClass('hide')
	})


	// Как применять?
	let currentHowApplyItem = 0

	$('.how_apply .item').eq(currentHowApplyItem).addClass('active')
	$('.how_apply .image img').eq(currentHowApplyItem).fadeIn(300)

	currentHowApplyItem++

	setInterval(() => {
		if(currentHowApplyItem == $('.how_apply .item').length) {
			currentHowApplyItem = 0
		}

		$('.how_apply .image img').hide()
		$('.how_apply .image img').eq(currentHowApplyItem).fadeIn(300)

		$('.how_apply .item').removeClass('active')
		$('.how_apply .item').eq(currentHowApplyItem).addClass('active')

		currentHowApplyItem++
	}, 4000)


	// Спойлер описания бренда
	$('.brand_info .spoler_btn').click(function(e) {
		$(this).toggleClass('active')
		$('.brand_info .desc').toggleClass('hide')
	})


	// Поиск
	$('.search .input').keyup(function(e) {
		let _self = $(this)

		setTimeout(() => {
			_self.val().length
				? _self.addClass('active')
				: _self.removeClass('active')
		})
	})


	$('.search .reset_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.search')

		parent.find('.input').val('').removeClass('active')
	})


	// Лайк статьи
	$('.likes .btn').click(function(e) {
		e.preventDefault()

		$(this).addClass('active')
	})


	// Акция
	$('.stock .close_btn').click(function(e) {
		e.preventDefault()

		$('.stock').hide()
	})
})



window.addEventListener('load', function () {
	// Фикс. шапка
	headerInit   = true,
	headerHeight = $('header').outerHeight()

	$('header').wrap('<div class="header_wrap"></div>')
	$('.header_wrap').height(headerHeight)

	if($('header').hasClass('no_margin')) {
		$('.header_wrap').addClass('no_margin')
	}

	headerInit && $(window).scrollTop() > 0
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')
})



window.addEventListener('scroll', function () {
	// Фикс. шапка
	typeof headerInit !== 'undefined' && headerInit && $(window).scrollTop() > 0
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Перезапись ширины окна
		WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth


		// Фикс. шапка
		headerInit = false
		$('.header_wrap').height('auto')

		setTimeout(() => {
			headerInit   = true
			headerHeight = $('header').outerHeight()

			$('.header_wrap').height(headerHeight)

			headerInit && $(window).scrollTop() > 0
				? $('header').addClass('fixed')
				: $('header').removeClass('fixed')
		}, 100)


		// С кем мы работаем
		initWhoWeWorkWithSliders()

		// Статьи
		initArticlesSliders()

		// Как мы работаем
		initStepsSliders()

		// Наши преимущества
		initAdvantagesSliders()


		// Моб. версия
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})



// С кем мы работаем
whoWeWorkWithSliders = []

function initWhoWeWorkWithSliders() {
	if ($(window).width() < 1024) {
		if ($('.who_we_work_with .row').length) {
			$('.who_we_work_with .row > *').addClass('swiper-slide')
			$('.who_we_work_with .row').addClass('swiper-wrapper').removeClass('row')

			$('.who_we_work_with .swiper').each(function (i) {
				$(this).addClass('who_we_work_with_s' + i)

				let options = {
					loop: false,
					speed: 500,
					watchSlidesProgress: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					slidesPerView: 'auto',
					spaceBetween: 24
				}

				whoWeWorkWithSliders.push(new Swiper('.who_we_work_with_s' + i, options))
			})
		}
	} else {
		whoWeWorkWithSliders.forEach(element => element.destroy(true, true))

		whoWeWorkWithSliders = []

		$('.who_we_work_with .swiper-wrapper').addClass('row').removeClass('swiper-wrapper')
		$('.who_we_work_with .row > *').removeClass('swiper-slide')
	}
}



// С кем мы работаем
articlesSliders = []

function initArticlesSliders() {
	if ($(window).width() < 1024) {
		if ($('.articles .mob_slider .row').length) {
			$('.articles .mob_slider .row > *').addClass('swiper-slide')
			$('.articles .mob_slider .row').addClass('swiper-wrapper').removeClass('row')

			$('.articles .swiper.mob_slider').each(function (i) {
				$(this).addClass('articles_s' + i)

				let options = {
					loop: false,
					speed: 500,
					watchSlidesProgress: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					slidesPerView: 'auto',
					spaceBetween: 15
				}

				articlesSliders.push(new Swiper('.articles_s' + i, options))
			})
		}
	} else {
		articlesSliders.forEach(element => element.destroy(true, true))

		articlesSliders = []

		$('.articles .swiper-wrapper').addClass('row').removeClass('swiper-wrapper')
		$('.articles .mob_slider .row > *').removeClass('swiper-slide')
	}
}



// Как мы работаем
stepsSliders = []

function initStepsSliders() {
	if ($(window).width() < 1024) {
		if ($('.steps .row').length) {
			$('.steps .row > *').addClass('swiper-slide')
			$('.steps .row').addClass('swiper-wrapper').removeClass('row')

			$('.steps .swiper').each(function (i) {
				$(this).addClass('steps_s' + i)

				let options = {
					loop: false,
					speed: 500,
					watchSlidesProgress: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					slidesPerView: 'auto',
					spaceBetween: 32,
					on: {
						init: swiper => setHeight(swiper.el.querySelectorAll('.item')),
						resize: swiper => {
							let items = swiper.el.querySelectorAll('.item')

							items.forEach(el => el.style.height = 'auto')

							setHeight(items)
						}
					}
				}

				stepsSliders.push(new Swiper('.steps_s' + i, options))
			})
		}
	} else {
		stepsSliders.forEach(element => element.destroy(true, true))

		stepsSliders = []

		$('.steps .swiper-wrapper').addClass('row').removeClass('swiper-wrapper')
		$('.steps .row > *').removeClass('swiper-slide')
	}
}



// Наши преимущества
advantagesSliders = []

function initAdvantagesSliders() {
	if ($(window).width() < 1024) {
		if ($('.advantages .row').length) {
			$('.advantages .row > *').addClass('swiper-slide')
			$('.advantages .row').addClass('swiper-wrapper').removeClass('row')

			$('.advantages .swiper').each(function (i) {
				$(this).addClass('advantages_s' + i)

				let options = {
					loop: false,
					speed: 500,
					watchSlidesProgress: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					slidesPerView: 'auto',
					spaceBetween: 32,
					on: {
						init: swiper => setHeight(swiper.el.querySelectorAll('.item')),
						resize: swiper => {
							let items = swiper.el.querySelectorAll('.item')

							items.forEach(el => el.style.height = 'auto')

							setHeight(items)
						}
					}
				}

				advantagesSliders.push(new Swiper('.advantages_s' + i, options))
			})
		}
	} else {
		advantagesSliders.forEach(element => element.destroy(true, true))

		advantagesSliders = []

		$('.advantages .swiper-wrapper').addClass('row').removeClass('swiper-wrapper')
		$('.advantages .row > *').removeClass('swiper-slide')
	}
}