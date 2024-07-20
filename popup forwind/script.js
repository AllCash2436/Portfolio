document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('popup__form')
	const popup = document.getElementById('popup')
	const popupSubscribe = document.getElementById('popup__subscribe')
	const consentCheckbox = document.getElementById('consent')
	const submitButton = document.querySelector('.popup__btn')

	const email = document.getElementById('email')
	const emailError = document.getElementById('emailError')
	const consentError = document.getElementById('consentError')

	form.addEventListener('submit', function (event) {
		event.preventDefault()

		let valid = true

		if (!email.value) {
			emailError.style.color = 'red'
			valid = false
		} else {
			emailError.style.color = '#fff'
		}

		if (!consentCheckbox.checked) {
			consentError.style.color = 'red'
			valid = false
		} else {
			consentError.style.color = '#fff'
		}

		if (valid) {
			// Отправка данных в Битрикс
			sendToBitrix()

			if (consentCheckbox.checked) {
				// Отправка данных в Юнисендер
				sendToUniSender()

				// Показать поп-ап с подпиской
				popupSubscribe.style.opacity = '1'
				popupSubscribe.style.visibility = 'visible'
				window.location.href = '#popup__subscribe'
			}
		}
	})

	function sendToBitrix() {
		// Здесь должна быть реализация отправки данных в Битрикс
		// Пример:
		// fetch('https://your-bitrix24-url', {
		//     method: 'POST',
		//     body: new FormData(form)
		// })
		// .then(response => {
		//     if (response.ok) {
		//         console.log('Данные успешно отправлены в Битрикс');
		//     } else {
		//         console.error('Ошибка отправки данных в Битрикс');
		//     }
		// })
		// .catch(error => console.error('Ошибка отправки данных:', error));
	}

	function sendToUniSender() {
		// Здесь должна быть реализация отправки данных в Юнисендер
		// Пример:
		// fetch('https://your-unisender-url', {
		//     method: 'POST',
		//     body: new FormData(form)
		// })
		// .then(response => {
		//     if (response.ok) {
		//         console.log('Данные успешно отправлены в Юнисендер');
		//     } else {
		//         console.error('Ошибка отправки данных в Юнисендер');
		//     }
		// })
		// .catch(error => console.error('Ошибка отправки данных:', error));
	}

	function resetForm() {
		form.reset()
		submitButton.classList.add('disabled')
		submitButton.disabled = true
	}

	function closePopup(popupElement) {
		popupElement.style.opacity = '0'
		popupElement.style.visibility = 'hidden'
		window.location.href = '#'
		resetForm()
	}

	document.querySelectorAll('.popup__close').forEach(function (closeLink) {
		closeLink.addEventListener('click', function (event) {
			event.preventDefault()
			closePopup(popupSubscribe)
			closePopup(popupNoSubscribe)
		})
	})

	document.querySelectorAll('.popup__area').forEach(function (area) {
		area.addEventListener('click', function (event) {
			closePopup(popupSubscribe)
			closePopup(popupNoSubscribe)
		})
	})

	document.querySelectorAll('.popup__sub__btn').forEach(function (button) {
		button.addEventListener('click', function (event) {
			closePopup(popupSubscribe)
			closePopup(popupNoSubscribe)
		})
	})

	// Показать первый поп-ап при загрузке страницы
	window.location.href = '#popup'
})
