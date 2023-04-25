// PRELOADER
$(window).on("load", function() {
	$(".site_preloader").fadeOut(1000);
});
$(document).ready(function() {
	// AOS EFFECTS
	AOS.init({
		once: false,
	});
	// MODAL
	let modalButton = $('#modal_btn');
	let modalForm = $('.modal');
	let overlay = $('.overlay');
	let modalCloseBtn = $('.modal .close_action');
	$(modalButton).on('click', function(e) {
		$('body').addClass('overflow_hidden');
		$(modalForm).addClass('active');
		$(overlay).addClass('active');
	})
	$(overlay).on("click", function(e) {
		$(this).removeClass('active');
		$(modalForm).removeClass('active');
		$(popUp).removeClass('active');
		$('body').removeClass('overflow_hidden');
	})
	$(modalCloseBtn).on('click', function(e) {
		$(modalForm).removeClass('active');
		$(overlay).removeClass('active');
		$('body').removeClass('overflow_hidden');
	});

	// POP-UP 30 SEC
	let popUpCloseBtn = $('.pop_up .close_action');
	let popUp = $('.pop_up');
	setTimeout(function() {
		$(modalForm).removeClass('active');
		$(popUp).addClass('active');
		$(overlay).addClass('active');
	}, 30000);
	$(popUpCloseBtn).on('click', function(e) {
		$(popUp).removeClass('active');
		$(overlay).removeClass('active');
	});
	// PROJECTS
	const tabs = document.querySelectorAll('[data-tab-target]')
	const tabContents = document.querySelectorAll('[data-tab-content]')

	tabs.forEach(tab => {
		tab.addEventListener('click', () => {
			const target = document.querySelector(tab.dataset.tabTarget)
			tabContents.forEach(tabContent => {
				tabContent.classList.remove('active')
			})
			tabs.forEach(tab => {
				tab.classList.remove('active')
			})
			tab.classList.add('active')
			target.classList.add('active')
		})
	});
	// PROJECTS SWIPER
	if ($('.project_swiper_container .swiper-container').length > 0) {
		let swiperInstances = [];
		$(".project_swiper_container .swiper-container").each(function(index, element) {
			const $this = $(this);
			$this.addClass("instance-" + index);
			$this.parent().find(".swiper-pagination").addClass("pagination-" + index);

			$this.parent().find(".slide_prev").addClass("prev-" + index);
			$this.parent().find(".slide_next").addClass("next-" + index);
			swiperInstances[index] = new Swiper(".instance-" + index, {
				slidesPerView: 1,
				loop: true,
				speed: 600,
				spaceBetween: 30,
				navigation: {
					prevEl: ".prev-" + index,
					nextEl: ".next-" + index,
				},
				autoplay: {
				    delay: 10000,
				    disableOnInteraction: false,
				},
				pagination: {
					el: '.pagination-' + index,
					type: 'fraction',
					formatFractionCurrent: function(number) {
						return '' + number
					}
				},
			});
		});
	}
	// SMOOTH SCROLLING
	var $root = $('html, body');
	$('.sticky_menu .anchors_list a').click(function() {
		event.preventDefault();
		$root.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
		return false;
	});
	// LIGHTGALLERY
	lightGallery(document.querySelector('.modal_gallery .gallery'), {
		licenseKey: 'your_license_key',
		speed: 500,
		thumbnail: true,
		selector: 'a'
	});
	// MODAL SWIPER
	var swiper = new Swiper(".modal_content_container .swiper-container", {
		slidesPerView: 1,
		spaceBetween: 20,
		pagination: {
			el: ".pagination",
			type: 'fraction',
		},
		navigation: {
			prevEl: ".slide_prev",
			nextEl: ".slide_next",
		},
	});

	$('.projects .slide_item .order_btn').on('click', function() {
		$('.project_modal').addClass('active');
		$('body').addClass('overflow_hidden');
	})
	$('.project_modal .modal_header .close_btn').on('click', function() {
		$('.project_modal').removeClass('active');
		$('body').removeClass('overflow_hidden');
	})
	// FOOTER
	$("footer .phone_show").on("click", function() {
		$('footer .phone_number').text($('footer .phone_number').data("tel"));
	});
})