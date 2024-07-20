document.addEventListener('DOMContentLoaded', function() {
    fetch('/order-history')
        .then(response => response.json())
        .then(data => {
            const orderList = document.getElementById('order-list');
            const table = document.createElement('table');
            table.classList.add('order-table'); // Добавляем класс для стилизации таблицы
            data.forEach(order => {
                const row = table.insertRow();
                row.innerHTML = `
                    <td>${order.id}</td>
                    <td>${order.дата}</td>
                    <td>${order.статус}</td>
                    <td>${order.общая_стоимость}</td>
                    <td>${order.название}</td>
                    <td>${order.количество}</td>
                    <td>${order.цена}</td>
                `;
            });
            orderList.appendChild(table);
        })
        .catch(error => {
            console.error('Ошибка загрузки истории заказов:', error);
        });
});
