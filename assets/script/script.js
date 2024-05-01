var font = document.getElementsByClassName("loop");
		setInterval(function () {
			font[0].style.color = "#FAEEE7";
			setTimeout(function () {
				font[0].style.color = "#D96098";
			}, 1000)
		}, 1500)