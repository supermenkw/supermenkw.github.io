const Portfolio = function () {
	function makeWords() {
		var words = [
			{
				text: "ReactJS",
				weight: 12.3
			}, {
				text: "NodeJS",
				weight: 8
			}, {
				text: "Javascript",
				weight: 14
			}, {
				text: "Bootstrap",
				weight: 10
			}, {
				text: "MongoDB",
				weight: 7
			}, {
				text: "",
				weight: 3
			}, {
				text: "UI/UX",
				weight: 9
			}, {
				text: "@supermenkw",
				weight: 15
			}, {
				text: "ExpressJS",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, { delay: 120 });
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function () {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 3000; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"I'am a Full-Stack Web Developer.", "love everything about design.", "also do back-end things.", "happy coding!."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 0.5,
			contentType: 'text',
			callback: function () {
				$("#writing-text").css({ "color": "#fff", "background-color": "#C8412B" });
			},
			preStringTyped: function () { },
			onStringTyped: function () { }
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
