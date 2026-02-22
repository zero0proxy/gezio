AOS.init({
	duration: 800,
	easing: 'slide'
});

(function ($) {

	"use strict";

	var isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});


	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function () {
		setTimeout(function () {
			if ($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
	$.Scrollax();

	var carousel = function () {
		$('.carousel-car').owlCarousel({
			center: true,
			loop: true,
			autoplay: true,
			items: 1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items: 1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function () {
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function () {
		var $this = $(this);
		// timer;
		// timer = setTimeout(function(){
		$this.removeClass('show');
		$this.find('> a').attr('aria-expanded', false);
		// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
		console.log('show');
	});

	// scroll
	var scrollWindow = function () {
		$(window).scroll(function () {
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.ftco_navbar'),
				sd = $('.js-scroll-wrap');

			if (st > 150) {
				if (!navbar.hasClass('scrolled')) {
					navbar.addClass('scrolled');
				}
			}
			if (st < 150) {
				if (navbar.hasClass('scrolled')) {
					navbar.removeClass('scrolled sleep');
				}
			}
			if (st > 350) {
				if (!navbar.hasClass('awake')) {
					navbar.addClass('awake');
				}

				if (sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if (st < 350) {
				if (navbar.hasClass('awake')) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if (sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var counter = function () {

		$('#section-counter, .hero-wrap, .ftco-counter').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function () {
					var $this = $(this),
						num = $this.data('number');
					console.log(num);
					$this.animateNumber(
						{
							number: num,
							numberStep: comma_separator_number_step
						}, 7000
					);
				});

			}

		}, { offset: '95%' });

	}
	counter();


	var contentWayPoint = function () {
		var i = 0;
		$('.ftco-animate').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .ftco-animate.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '95%' });
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function () {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function (e) {
			e.preventDefault();

			var hash = this.hash,
				navToggler = $('.navbar-toggler');
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, 'easeInOutExpo', function () {
				window.location.hash = hash;
			});


			if (navToggler.is(':visible')) {
				navToggler.click();
			}
		});
		$('body').on('activate.bs.scrollspy', function () {
			console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});


	$('#book_pick_date,#book_off_date').datepicker({
		'format': 'm/d/yyyy',
		'autoclose': true
	});
	$('#time_pick').timepicker();



})(jQuery);

// === ЛОГИКА ФОРМЫ БРОНИРОВАНИЯ И КАТАЛОГА ===
$(document).ready(function () {

	// 1. Активируем всплывающий календарь
	if ($('.date-picker').length) {
		$('.date-picker').datepicker({
			format: 'mm/dd/yyyy',
			autoclose: true,
			todayHighlight: true,
			startDate: new Date()
		});
	}

	// 2. Восстанавливаем данные, если клиент вернулся из каталога
	if (sessionStorage.getItem('bookingData')) {
		const savedData = JSON.parse(sessionStorage.getItem('bookingData'));
		$('#client-name').val(savedData.name);
		$('#client-phone').val(savedData.phone);
		$('#client-email').val(savedData.email);
		$('#pickup-loc').val(savedData.pickupLoc);
		$('#dropoff-loc').val(savedData.dropoffLoc);
		$('#pickup-date').val(savedData.pickupDate);
		$('#dropoff-date').val(savedData.dropoffDate);
	}

	// 3. Отображаем выбранный автомобиль (если он есть)
	const selectedCar = sessionStorage.getItem('selectedCar');
	if (selectedCar) {
		$('#selected-car-label').text('Выбран: ' + selectedCar).css('color', '#f1b8c4');
		$('#btn-select-car').text('Изменить автомобиль');
	}

	// 4. Переход в каталог (Сохраняем данные перед уходом)
	$('#btn-select-car').on('click', function () {
		const bookingData = {
			name: $('#client-name').val(),
			phone: $('#client-phone').val(),
			email: $('#client-email').val(),
			pickupLoc: $('#pickup-loc').val(),
			dropoffLoc: $('#dropoff-loc').val(),
			pickupDate: $('#pickup-date').val(),
			dropoffDate: $('#dropoff-date').val()
		};
		sessionStorage.setItem('bookingData', JSON.stringify(bookingData));
		window.location.href = window.location.pathname.includes('-ru.html') ? 'car-ru.html' : 'car.html';
	});

	// 5. Отправка заявки с РЕАЛЬНЫМИ данными
	$('#booking-form').on('submit', function (e) {
		e.preventDefault();

		// Проверка: выбрал ли клиент машину
		if (!sessionStorage.getItem('selectedCar')) {
			alert("Пожалуйста, сначала выберите автомобиль из каталога!");
			return;
		}

		const submitBtn = $('#submit-btn');
		const originalBtnText = submitBtn.val();
		submitBtn.val('Отправка...').prop('disabled', true);

		const pickupDateStr = $('#pickup-date').val();
		const dropoffDateStr = $('#dropoff-date').val();
		let rentalDays = 1;

		if (pickupDateStr && dropoffDateStr) {
			const start = new Date(pickupDateStr);
			const end = new Date(dropoffDateStr);
			const diffTime = Math.abs(end - start);
			const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
			rentalDays = diffDays > 0 ? diffDays : 1;
		}

		// Собираем РЕАЛЬНЫЕ данные из полей ввода
		const templateParams = {
			subject_type: "ЗАЯВКА НА АРЕНДУ",
			mode_label: "Аренда авто",
			name: $('#client-name').val(),
			phone: $('#client-phone').val(),
			email: $('#client-email').val(),
			pickup_date: pickupDateStr,
			return_date: dropoffDateStr,
			rental_days: rentalDays,
			route_details: `Подача: ${$('#pickup-loc').val()} | Возврат: ${$('#dropoff-loc').val()}`,
			tariff: sessionStorage.getItem('selectedCar'),
			price: "Рассчитать с менеджером"
		};

		// ВНИМАНИЕ: Проверь первый аргумент, это должен быть Service ID (начинается с service_)
		emailjs.send('template_oraxls7', 'template_j6uib56', templateParams)
			.then(function () {
				submitBtn.val('Успешно!').removeClass('btn-secondary').addClass('btn-success');
				sessionStorage.removeItem('bookingData');
				sessionStorage.removeItem('selectedCar');
				$('#booking-form')[0].reset();
				$('#selected-car-label').text('Автомобиль не выбран').css('color', '#fff');
				$('#btn-select-car').text('Выбрать автомобиль');

				setTimeout(() => { submitBtn.val(originalBtnText).removeClass('btn-success').addClass('btn-secondary').prop('disabled', false); }, 3000);
			}, function (error) {
				console.log(error);
				submitBtn.val('Ошибка').removeClass('btn-secondary').addClass('btn-danger');
				setTimeout(() => { submitBtn.val(originalBtnText).removeClass('btn-danger').addClass('btn-secondary').prop('disabled', false); }, 3000);
			});
	});
});

// === ЛОГИКА ВЫБОРА МАШИНЫ В КАТАЛОГЕ ===
$(document).ready(function () {
	$('.btn-book-car').on('click', function (e) {
		e.preventDefault();
		let carName = $(this).closest('.car-wrap').find('h2 a').text();
		if (!carName) {
			carName = $(this).closest('.car-wrap').find('h2').text();
		}
		sessionStorage.setItem('selectedCar', carName);
		window.location.href = window.location.pathname.includes('-ru.html') ? 'index-ru.html' : 'index.html';
	});
});