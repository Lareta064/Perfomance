document.addEventListener("DOMContentLoaded", function () {
	// smouth scroll 
	$(".header, #backtop").on("click", "a", function (event) {
		
		event.preventDefault();
		let id = $(this).attr('href'),
			top = $(id).offset().top;
		
		$('body,html').animate({ scrollTop: top }, 600);
	}); 
	const backtopBtn = document.querySelector('#backtop');

	backtopBtn.style.opacity = 0;

	document.addEventListener('scroll', function () {
		if (window.pageYOffset > 300) {
			backtopBtn.style.opacity = 1;
		} else {
			backtopBtn.style.opacity = 0;
		}
	});
	/*============= open/close mob menu ===============*/
	const menuToggle = document.querySelector('#menu-toggle');

	const mobileMenu = document.querySelector('#header-menu');


	const bodyEl = document.body;
	if (menuToggle) {
		menuToggle.addEventListener('click', function (e) {
			e.stopPropagation();

			if (this.classList.contains('active')) {

				this.classList.remove('active');
				mobileMenu.classList.remove('active');
				bodyEl.classList.remove('lock');
			} else {
				this.classList.add('active');
				mobileMenu.classList.add('active');
				bodyEl.classList.add('lock');
			}
		});
		mobileMenu.addEventListener('click', function(){
			this.classList.remove('active');
			menuToggle.classList.remove('active');
			bodyEl.classList.remove('lock');
		})
		/*======== закрывать моб меню при ресайзе экрана ====== */
		window.addEventListener('resize', function () {
			if (this.innerWidth > 767) {
				if (mobileMenu.classList.contains('active')) {
					menuToggle.classList.remove('active');
					mobileMenu.classList.remove('active');
					bodyEl.classList.remove('lock');
				}
			}
		});
	}
    // slider partners logo
	const owlConfig = {
		items:1,
		margin:12,
		stagePadding:40,
		autoplay: true,
		smartSpeed:600,
		dots:true,
		loop: true,
		slideBy: 2,
		responsive:{
			424:{
				items: 2,
			}
		}
	}
	
	if(window.innerWidth < 768){
		$('.partners-slider').owlCarousel(owlConfig);
	}else{
		$('.partners-slider').removeClass('owl-carousel');
	}

	window.addEventListener('resize', function(){
		if (window.innerWidth > 767){
			$('.partners-slider').trigger('destroy.owl.carousel');
			$('.partners-slider').removeClass('owl-carousel');
		}
		else{
			$('.partners-slider').owlCarousel(owlConfig);
			$('.partners-slider').addClass('owl-carousel');
		}
	});
})    