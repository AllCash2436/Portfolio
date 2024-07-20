const userRequestForm = document.querySelectorAll(".user-request-form");
const orderForm = document.querySelectorAll(".order-form");
const allButtons = document.querySelectorAll("button");
const allTextarea = document.querySelectorAll("textarea");
const paymentButtons = document.querySelectorAll(".payment_button");
const paymentCloseButtons = document.querySelectorAll(".button_close");
const legalItems = document.querySelectorAll(".legal_item a");
const legalCloseItems = document.querySelectorAll(".legal_modal_close");
const paymentNotConnectedWrapper = document.querySelectorAll(
  ".payment_not_connected_wrapper"
);

const styleModalWrap =
  "background-color: rgba(0,0,0,.2);display: flex;justify-content: center;align-items: center;position: fixed;left: 0;top: 0;width: 100%;height: 100%;";

const removeModal = () => {
  let node = document.getElementById("modal");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
};

const appendHtml = (element, html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  while (div.children.length > 0) {
    element.appendChild(div.children[0]);
  }
};

const successModal = ({ title = "", text = "", buttonText = "" }) =>
  '<div id="modal" style="' +
  styleModalWrap +
  '">' +
  '<div style="background-color: #fff;color: #191D3A;border-radius: 24px;padding: 32px;text-align: center;width: 360px;">' +
  '<div style="font-weight: 600;font-size: 24px;line-height: 36px;margin-top: 16px;margin-bottom: 8px;">' +
  '<svg width="134" height="134" viewBox="0 0 134 134" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
  '<path fill-rule="evenodd" clip-rule="evenodd" d="M67.0003 11.1665C36.1644 11.1665 11.167 36.1639 11.167 66.9998C11.167 97.8357 36.1644 122.833 67.0003 122.833C97.8362 122.833 122.834 97.8357 122.834 66.9998C122.834 52.1919 116.951 37.9905 106.48 27.5197C96.0097 17.0489 81.8083 11.1665 67.0003 11.1665ZM67.0003 111.666C42.3316 111.666 22.3337 91.6686 22.3337 66.9998C22.3337 42.3311 42.3316 22.3332 67.0003 22.3332C91.669 22.3332 111.667 42.3311 111.667 66.9998C111.667 78.8462 106.961 90.2073 98.5844 98.5839C90.2078 106.961 78.8467 111.666 67.0003 111.666ZM84.4203 47.4023C85.5058 46.3383 87.2431 46.3383 88.3287 47.4023L91.1203 50.3615C91.6488 50.8857 91.9461 51.5992 91.9461 52.3436C91.9461 53.088 91.6488 53.8015 91.1203 54.3257L59.742 85.704C59.2354 86.2438 58.5281 86.55 57.7878 86.55C57.0476 86.55 56.3403 86.2438 55.8337 85.704L42.7128 72.4715C42.1843 71.9473 41.8871 71.2338 41.8871 70.4894C41.8871 69.7451 42.1843 69.0315 42.7128 68.5073L45.672 65.5482C46.1786 65.0084 46.8859 64.7022 47.6262 64.7022C48.3664 64.7022 49.0737 65.0084 49.5803 65.5482L57.9553 73.8673L84.4203 47.4023Z" fill="#1DB7AD"/>\n' +
  '<path d="M106.48 27.5197L104.713 29.2875L106.48 27.5197ZM88.3287 47.4023L90.1471 45.6868L90.1136 45.6512L90.0787 45.617L88.3287 47.4023ZM84.4203 47.4023L82.6703 45.617L82.6614 45.6257L82.6525 45.6346L84.4203 47.4023ZM91.1203 50.3615L89.3018 52.0771L89.3303 52.1073L89.3598 52.1365L91.1203 50.3615ZM91.1203 54.3257L89.3598 52.5507L89.3526 52.5579L91.1203 54.3257ZM59.742 85.704L57.9742 83.9362L57.9462 83.9643L57.9191 83.9932L59.742 85.704ZM55.8337 85.704L57.6566 83.9932L57.6331 83.9681L57.6089 83.9437L55.8337 85.704ZM42.7128 72.4715L44.4881 70.7112L44.4807 70.7038L44.4733 70.6965L42.7128 72.4715ZM42.7128 68.5073L44.4733 70.2824L44.4806 70.2751L42.7128 68.5073ZM45.672 65.5482L47.4398 67.3159L47.4678 67.2879L47.4949 67.259L45.672 65.5482ZM49.5803 65.5482L47.7574 67.259L47.7874 67.291L47.8185 67.3218L49.5803 65.5482ZM57.9553 73.8673L56.1935 75.641L57.9612 77.397L59.7231 75.6351L57.9553 73.8673ZM13.667 66.9998C13.667 37.5447 37.5451 13.6665 67.0003 13.6665V8.6665C34.7837 8.6665 8.66699 34.7832 8.66699 66.9998H13.667ZM67.0003 120.333C37.5451 120.333 13.667 96.455 13.667 66.9998H8.66699C8.66699 99.2165 34.7837 125.333 67.0003 125.333V120.333ZM120.334 66.9998C120.334 96.455 96.4555 120.333 67.0003 120.333V125.333C99.2169 125.333 125.334 99.2165 125.334 66.9998H120.334ZM104.713 29.2875C114.715 39.2894 120.334 52.855 120.334 66.9998H125.334C125.334 51.5289 119.188 36.6916 108.248 25.7519L104.713 29.2875ZM67.0003 13.6665C81.1452 13.6665 94.7107 19.2855 104.713 29.2875L108.248 25.7519C97.3086 14.8123 82.4713 8.6665 67.0003 8.6665V13.6665ZM19.8337 66.9998C19.8337 93.0493 40.9509 114.166 67.0003 114.166V109.166C43.7123 109.166 24.8337 90.2878 24.8337 66.9998H19.8337ZM67.0003 19.8332C40.9509 19.8332 19.8337 40.9504 19.8337 66.9998H24.8337C24.8337 43.7118 43.7123 24.8332 67.0003 24.8332V19.8332ZM114.167 66.9998C114.167 40.9504 93.0498 19.8332 67.0003 19.8332V24.8332C90.2883 24.8332 109.167 43.7118 109.167 66.9998H114.167ZM100.352 100.352C109.198 91.5062 114.167 79.5092 114.167 66.9998H109.167C109.167 78.1831 104.724 88.9084 96.8167 96.8162L100.352 100.352ZM67.0003 114.166C79.5097 114.166 91.5067 109.197 100.352 100.352L96.8167 96.8162C88.9089 104.724 78.1836 109.166 67.0003 109.166V114.166ZM90.0787 45.617C88.021 43.6001 84.728 43.6001 82.6703 45.617L86.1703 49.1877C86.2837 49.0765 86.4652 49.0765 86.5786 49.1877L90.0787 45.617ZM92.9388 48.646L90.1471 45.6868L86.5102 49.1179L89.3018 52.0771L92.9388 48.646ZM94.4461 52.3436C94.4461 50.9326 93.8826 49.5801 92.8808 48.5865L89.3598 52.1365C89.415 52.1913 89.4461 52.2658 89.4461 52.3436H94.4461ZM92.8808 56.1007C93.8826 55.1071 94.4461 53.7545 94.4461 52.3436H89.4461C89.4461 52.4214 89.415 52.4959 89.3598 52.5507L92.8808 56.1007ZM61.5098 87.4718L92.8881 56.0934L89.3526 52.5579L57.9742 83.9362L61.5098 87.4718ZM57.7878 89.05C59.2186 89.05 60.5857 88.4582 61.5649 87.4148L57.9191 83.9932C57.8851 84.0294 57.8375 84.05 57.7878 84.05V89.05ZM54.0107 87.4149C54.9899 88.4582 56.357 89.05 57.7878 89.05V84.05C57.7381 84.05 57.6906 84.0294 57.6566 83.9932L54.0107 87.4149ZM40.9376 74.2318L54.0584 87.4643L57.6089 83.9437L44.4881 70.7112L40.9376 74.2318ZM39.3871 70.4894C39.3871 71.9004 39.9505 73.2529 40.9523 74.2465L44.4733 70.6965C44.4181 70.6417 44.3871 70.5672 44.3871 70.4894H39.3871ZM40.9523 66.7323C39.9505 67.7259 39.3871 69.0785 39.3871 70.4894H44.3871C44.3871 70.4117 44.4181 70.3371 44.4733 70.2823L40.9523 66.7323ZM43.9042 63.7804L40.9451 66.7396L44.4806 70.2751L47.4398 67.3159L43.9042 63.7804ZM47.6262 62.2022C46.1953 62.2022 44.8282 62.794 43.8491 63.8373L47.4949 67.259C47.5289 67.2228 47.5764 67.2022 47.6262 67.2022V62.2022ZM51.4032 63.8373C50.4241 62.794 49.057 62.2022 47.6262 62.2022V67.2022C47.6759 67.2022 47.7234 67.2228 47.7574 67.259L51.4032 63.8373ZM59.7172 72.0937L51.3422 63.7745L47.8185 67.3218L56.1935 75.641L59.7172 72.0937ZM82.6525 45.6346L56.1876 72.0996L59.7231 75.6351L86.1881 49.1701L82.6525 45.6346Z" fill="white"/>\n' +
  "</svg>\n" +
  "</div>" +
  '<div data-test="successModalTitle" style="font-weight: 600;font-size: 24px;line-height: 36px;margin-top: 16px;margin-bottom: 8px;">' +
  title +
  "</div>" +
  '<div data-test="successModalText" style="font-size: 16px;line-height: 24px;">' +
  text +
  "</div>" +
  '<button onclick="removeModal()" data-test="successModalButton" style="background: #191D3A;border: 0;border-radius: 12px;color: #FFFFFF;cursor: pointer;font-size: 16px;line-height: 24px;margin-top: 24px;padding: 8px 0;width: 100%;">' +
  buttonText +
  "</button>" +
  "</div>" +
  "</div>";

const failModal = ({ title = "", text = "", buttonText = "" }) =>
  '<div id="modal" style="' +
  styleModalWrap +
  '">' +
  '<div style="background-color: #fff;color: #191D3A;border-radius: 24px;padding: 32px;text-align: center;width: 360px;">' +
  '<div style="font-weight: 600;font-size: 24px;line-height: 36px;margin-top: 16px;margin-bottom: 8px;">' +
  '<svg width="134" height="134" viewBox="0 0 134 134" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
  '<path fill-rule="evenodd" clip-rule="evenodd" d="M67.0003 11.1665C36.1644 11.1665 11.167 36.1639 11.167 66.9998C11.167 97.8357 36.1644 122.833 67.0003 122.833C97.8362 122.833 122.834 97.8357 122.834 66.9998C122.834 52.1919 116.951 37.9905 106.48 27.5197C96.0097 17.0489 81.8083 11.1665 67.0003 11.1665ZM111.667 66.9998C111.679 76.9195 108.356 86.5552 102.231 94.3582L39.642 31.769C47.445 25.6442 57.0807 22.3208 67.0003 22.3332C78.8467 22.3332 90.2078 27.0391 98.5844 35.4157C106.961 43.7924 111.667 55.1535 111.667 66.9998ZM31.7695 39.6415C25.6447 47.4445 22.3213 57.0802 22.3337 66.9998C22.3337 78.8462 27.0396 90.2073 35.4162 98.5839C43.7928 106.961 55.154 111.667 67.0003 111.667C76.92 111.679 86.5557 108.356 94.3587 102.231L31.7695 39.6415Z" fill="#FF695B"/>\n' +
  '<path d="M106.48 27.5197L104.713 29.2875L106.48 27.5197ZM102.231 94.3582L100.463 96.1259L102.457 98.1195L104.198 95.9018L102.231 94.3582ZM111.667 66.9998H109.167V67.0029L111.667 66.9998ZM39.642 31.769L38.0984 29.8025L35.8807 31.5432L37.8742 33.5368L39.642 31.769ZM67.0003 22.3332L66.9972 24.8332H67.0003V22.3332ZM98.5844 35.4157L96.8167 37.1835L98.5844 35.4157ZM22.3337 66.9998H24.8337L24.8337 66.9967L22.3337 66.9998ZM31.7695 39.6415L33.5373 37.8737L31.5437 35.8802L29.8029 38.0979L31.7695 39.6415ZM35.4162 98.5839L37.184 96.8162L35.4162 98.5839ZM67.0003 111.667L67.0034 109.167H67.0003V111.667ZM94.3587 102.231L95.9023 104.197L98.12 102.456L96.1264 100.463L94.3587 102.231ZM13.667 66.9998C13.667 37.5447 37.5451 13.6665 67.0003 13.6665V8.6665C34.7837 8.6665 8.66699 34.7832 8.66699 66.9998H13.667ZM67.0003 120.333C37.5451 120.333 13.667 96.455 13.667 66.9998H8.66699C8.66699 99.2165 34.7837 125.333 67.0003 125.333V120.333ZM120.334 66.9998C120.334 96.455 96.4555 120.333 67.0003 120.333V125.333C99.2169 125.333 125.334 99.2165 125.334 66.9998H120.334ZM104.713 29.2875C114.715 39.2894 120.334 52.855 120.334 66.9998H125.334C125.334 51.5289 119.188 36.6916 108.248 25.7519L104.713 29.2875ZM67.0003 13.6665C81.1452 13.6665 94.7107 19.2855 104.713 29.2875L108.248 25.7519C97.3086 14.8123 82.4713 8.6665 67.0003 8.6665V13.6665ZM104.198 95.9018C110.669 87.6577 114.18 77.4772 114.167 66.9967L109.167 67.0029C109.179 76.3618 106.043 85.4527 100.265 92.8146L104.198 95.9018ZM37.8742 33.5368L100.463 96.1259L103.999 92.5904L41.4098 30.0012L37.8742 33.5368ZM67.0034 19.8332C56.523 19.8201 46.3425 23.3314 38.0984 29.8025L41.1856 33.7355C48.5474 27.957 57.6384 24.8215 66.9972 24.8332L67.0034 19.8332ZM100.352 33.648C91.5067 24.8025 79.5097 19.8332 67.0003 19.8332V24.8332C78.1836 24.8332 88.9089 29.2757 96.8167 37.1835L100.352 33.648ZM114.167 66.9998C114.167 54.4905 109.198 42.4934 100.352 33.648L96.8167 37.1835C104.724 45.0913 109.167 55.8165 109.167 66.9998H114.167ZM24.8337 66.9967C24.822 57.6379 27.9575 48.5469 33.736 41.1851L29.8029 38.0979C23.3319 46.342 19.8206 56.5225 19.8337 67.0029L24.8337 66.9967ZM37.184 96.8162C29.2762 88.9084 24.8337 78.1831 24.8337 66.9998H19.8337C19.8337 79.5092 24.803 91.5062 33.6485 100.352L37.184 96.8162ZM67.0003 109.167C55.817 109.167 45.0918 104.724 37.184 96.8162L33.6485 100.352C42.4939 109.197 54.4909 114.167 67.0003 114.167V109.167ZM92.815 100.264C85.4532 106.043 76.3623 109.178 67.0034 109.167L66.9972 114.167C77.4777 114.18 87.6582 110.668 95.9023 104.197L92.815 100.264ZM30.0017 41.4093L92.5909 103.998L96.1264 100.463L33.5373 37.8737L30.0017 41.4093Z" fill="white"/>\n' +
  "</svg>" +
  "</div>" +
  '<div data-test="failModalTitle" style="font-weight: 600;font-size: 24px;line-height: 36px;margin-top: 16px;margin-bottom: 8px;">' +
  title +
  "</div>" +
  '<div data-test="failModalText" style="font-size: 16px;line-height: 24px;">' +
  text +
  "</div>" +
  '<button onclick="removeModal()" data-test="failModalButton" style="background: #191D3A;border: 0;border-radius: 12px;color: #FFFFFF;cursor: pointer;font-size: 16px;line-height: 24px;margin-top: 24px;padding: 8px 0;width: 100%;">' +
  buttonText +
  "</button>" +
  "</div>" +
  "</div>";

const initLoadUserRequestForm = () => {
  const processForm = (e, form) => {
    if (e.preventDefault) e.preventDefault();
    if (form.isLoading) return false;

    return submitUserRequestForm(e, form);
  };

  const submitUserRequestForm = async (e, form) => {
    form.isLoading = true;

    const formData = new FormData(form);
    const apiUrl = form.action;
    const data = [];

    formData.forEach((value, name) => {
      const field = form.querySelector(`[name="${name}"]`);
      const fieldId = field.id;
      const labelBlock = form.querySelector(`label[for=${fieldId}]`);
      let label = labelBlock.innerHTML;

      if (field.type === "checkbox" || field.type === "radio") {
        const parent = field.closest("div");
        const labelBlock = parent.querySelector("label");

        label = labelBlock.innerHTML;
      }

      if (name === "submit") return;

      return data.push({
        name,
        value,
        label,
      });
    });

    let response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ data }),
    });

    let result = await response.json();

    form.isLoading = false;

    if (result.success) {
      appendHtml(
        document.body,
        successModal({
          title: "Спасибо!",
          text: "Мы получили вашу заявку",
          buttonText: "Вернуться на сайт",
        })
      );
    } else {
      appendHtml(
        document.body,
        failModal({
          title: "Что-то пошло не так",
          text: "Попробуйте отправить заявку ещё раз",
          buttonText: "Вернуться на сайт",
        })
      );
    }
  };

  userRequestForm.forEach((form) => {
    if (form.attachEvent) {
      form.attachEvent("submit", (e) => processForm(e, form));
    } else {
      form.addEventListener("submit", (e) => processForm(e, form));
    }
  });
};

const initLoadOrderForm = () => {
  if (paymentNotConnectedWrapper.length) {
    return paymentButtons.forEach((button) => {
      button.onclick = () => {
        appendHtml(
          document.body,
          failModal({
            title: "Не удалось купить",
            text: "Сервис еще не настроен",
            buttonText: "Хорошо",
          })
        );
      };
    });
  }

  const yookassaScript = document.createElement("script");
  yookassaScript.setAttribute(
    "src",
    "https://yookassa.ru/checkout-widget/v1/checkout-widget.js"
  );
  document.head.appendChild(yookassaScript);

  const urlParams = new URLSearchParams(window.location.search);
  const successOrderForm = urlParams.get("successOrderForm");

  if (successOrderForm === "yes") {
    appendHtml(
      document.body,
      successModal({
        title: "Оплата принята",
        text: "Спасибо за заказ!",
        buttonText: "Вернуться на сайт",
      })
    );
    window.history.replaceState(null, null, window.location.pathname);
  }

  const processOrderForm = (e, form) => {
    if (e.preventDefault) e.preventDefault();
    if (form.isLoading) return false;

    return submitOrderForm(e, form);
  };

  const submitOrderForm = async (e, form) => {
    form.isLoading = true;

    const formData = new FormData(form);
    const apiUrl = form.action;
    const data = {
      paymentSystem: "youkassa",
    };

    formData.forEach((value, name) => {
      if (name === "productId") return (data[name] = +value);

      return (data[name] = value);
    });

    let response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    let result = await response.json();

    if (result.success) {
      const {
        result: {
          paymentData: { confirmationToken },
        },
      } = result;

      form.style.display = "none";
      const paymentForm = document.getElementById("payment-form");
      if (paymentForm) paymentForm.style.display = "block";

      const checkout = new window.YooMoneyCheckoutWidget({
        confirmation_token: confirmationToken,
        return_url: `${window.location.href}?successOrderForm=yes`,
        error_callback: (error) => {
          console.error(error);
        },
      });

      checkout.render("payment-form");
    }

    form.isLoading = false;
  };

  paymentButtons.forEach((button) => {
    button.onclick = () => {
      const parentBlock = button.closest(".product_container");
      const modalBlock = parentBlock.querySelector(".product_modal");
      modalBlock.style = styleModalWrap;

      modalBlock.insertAdjacentHTML(
        "beforeend",
        '<div id="payment-form" style="display: none; position: relative;background-color: #ffffff;border:2px solid #E0E2E9;border-radius:24px;padding:24px 32px;color:#191D3A;font-size:14px;line-height:20px;width:400px;">' +
          '<button id="payment-form-close" style="background-color: rgb(255, 255, 255); border: 0px; padding: 0px; position: absolute; right: 10px; top: 10px; cursor: pointer;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M17.8479 16.4379C17.9426 16.5318 17.9958 16.6596 17.9958 16.7929C17.9958 16.9262 17.9426 17.054 17.8479 17.1479L17.1479 17.8479C17.054 17.9426 16.9262 17.9958 16.7929 17.9958C16.6596 17.9958 16.5318 17.9426 16.4379 17.8479L11.9979 13.4079L7.5579 17.8479C7.46402 17.9426 7.33622 17.9958 7.2029 17.9958C7.06958 17.9958 6.94178 17.9426 6.8479 17.8479L6.1479 17.1479C6.05324 17.054 6 16.9262 6 16.7929C6 16.6596 6.05324 16.5318 6.1479 16.4379L10.5879 11.9979L6.1479 7.5579C6.05324 7.46402 6 7.33622 6 7.2029C6 7.06958 6.05324 6.94178 6.1479 6.8479L6.8479 6.1479C6.94178 6.05324 7.06958 6 7.2029 6C7.33622 6 7.46402 6.05324 7.5579 6.1479L11.9979 10.5879L16.4379 6.1479C16.5318 6.05324 16.6596 6 16.7929 6C16.9262 6 17.054 6.05324 17.1479 6.1479L17.8479 6.8479C17.9426 6.94178 17.9958 7.06958 17.9958 7.2029C17.9958 7.33622 17.9426 7.46402 17.8479 7.5579L13.4079 11.9979L17.8479 16.4379Z" fill="#191D3A"></path></svg>' +
          "</button>" +
          "</div>"
      );

      const paymentFormClose = document.getElementById("payment-form-close");

      paymentFormClose.addEventListener("click", function (e) {
        onClosePaymentModal(button);
      });
    };
  });

  const onClosePaymentModal = (button) => {
    const parentBlock = button.closest(".product_container");
    const modalBlock = parentBlock.querySelector(".product_modal");
    const form = parentBlock.querySelector(".order-form");
    modalBlock.style.display = "none";
    form.style.display = "block";
    form.reset();
    const paymentForm = document.getElementById("payment-form");
    paymentForm.parentNode.removeChild(paymentForm);
  };

  paymentCloseButtons.forEach((button) => {
    button.onclick = () => {
      onClosePaymentModal(button);
    };
  });

  orderForm.forEach((form) => {
    if (form.attachEvent) {
      form.attachEvent("submit", (e) => processOrderForm(e, form));
    } else {
      form.addEventListener("submit", (e) => processOrderForm(e, form));
    }
  });
};

const initOnlineScheduleWidget = () => {
  const onlineScheduleButtons = document.querySelectorAll(
    ".online_schedule_button"
  );
  const widgetModal = document.getElementById(
    "onlineScheduleWidgetContainerWrapper"
  );
  const widgetContainer = document.getElementById(
    "onlineScheduleWidgetContainer"
  );

  if (!widgetContainer) {
    return onlineScheduleButtons.forEach((button) => {
      button.onclick = () => {
        appendHtml(
          document.body,
          failModal({
            title: "Не удалось записаться",
            text: "Сервис еще не настроен",
            buttonText: "Хорошо",
          })
        );
      };
    });
  }

  const styleModalWrap =
    "background-color: rgba(0,0,0,.2);display: block;position: fixed;left: 0;top: 0;width: 100%;height: 100%; overflow: auto;";
  const styleContainer =
    "background-color: rgba(255,255,255, 1);display:block;position:relative;top:40px;left:50%;transform:translate(-50%,0);border-radius:24px;max-width: 80%;padding: 10px 30px;";
  const styleHeaderOnlineScheduleSeparator =
    "border-bottom: 2px solid #dee2e6;width: 100%;margin-top:40px;";
  Cabinet.init({
    container: "#onlineScheduleWidgetContainer",
    domain: widgetContainer.dataset.domain,
  })
    .then(() => {
      onlineScheduleButtons.forEach((button) => {
        button.onclick = () => {
          widgetModal.style = styleModalWrap;
          widgetContainer.style = styleContainer;
          const headerSeparator = document.createElement("div");
          headerSeparator.id = "onlineScheduleSeparator";
          headerSeparator.style = styleHeaderOnlineScheduleSeparator;
          widgetContainer.insertAdjacentHTML(
            "beforeend",
            '<button id="online_schedule_icon_close" style="background-color: rgb(255, 255, 255); color:rgb(149 149 149); border: 0px; padding: 0px; position: absolute; right: 20px; top: 14px; cursor: pointer;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
              '<path d="M17.8479 16.4379C17.9426 16.5318 17.9958 16.6596 17.9958 16.7929C17.9958 16.9262 17.9426 17.054 17.8479 17.1479L17.1479 17.8479C17.054 17.9426 16.9262 17.9958 16.7929 17.9958C16.6596 17.9958 16.5318 17.9426 16.4379 17.8479L11.9979 13.4079L7.5579 17.8479C7.46402 17.9426 7.33622 17.9958 7.2029 17.9958C7.06958 17.9958 6.94178 17.9426 6.8479 17.8479L6.1479 17.1479C6.05324 17.054 6 16.9262 6 16.7929C6 16.6596 6.05324 16.5318 6.1479 16.4379L10.5879 11.9979L6.1479 7.5579C6.05324 7.46402 6 7.33622 6 7.2029C6 7.06958 6.05324 6.94178 6.1479 6.8479L6.8479 6.1479C6.94178 6.05324 7.06958 6 7.2029 6C7.33622 6 7.46402 6.05324 7.5579 6.1479L11.9979 10.5879L16.4379 6.1479C16.5318 6.05324 16.6596 6 16.7929 6C16.9262 6 17.054 6.05324 17.1479 6.1479L17.8479 6.8479C17.9426 6.94178 17.9958 7.06958 17.9958 7.2029C17.9958 7.33622 17.9426 7.46402 17.8479 7.5579L13.4079 11.9979L17.8479 16.4379Z" fill="currentColor"></path></svg>' +
              "</button>"
          );
          widgetContainer.prepend(headerSeparator);
          const onlineScheduleIconClose = widgetModal.querySelector(
            "#online_schedule_icon_close"
          );
          onlineScheduleIconClose.addEventListener("click", function () {
            onCloseScheduleModal(button);
          });
        };
      });
    })
    .catch(() => {
      appendHtml(
        document.body,
        failModal({
          title: "Не удалось записаться",
          text: "Попробуйте ещё раз",
          buttonText: "Вернуться на сайт",
        })
      );
    });
};

const onCloseScheduleModal = (button) => {
  const widgetModal = document.getElementById(
    "onlineScheduleWidgetContainerWrapper"
  );
  const onlineScheduleIconClose = widgetModal.querySelector(
    "#online_schedule_icon_close"
  );
  const onlineScheduleHeaderSeparator = widgetModal.querySelector(
    "#onlineScheduleSeparator"
  );
  onlineScheduleIconClose.remove();
  onlineScheduleHeaderSeparator.remove();
  widgetModal.style.display = "none";
};

const initLegal = () => {
  legalItems.forEach((button) => {
    button.onclick = (e) => {
      e.preventDefault();
      legalActionModal(button);
    };
  });
  legalCloseItems.forEach((button) => {
    button.onclick = () => {
      legalActionModal(button, true);
    };
  });

  const legalActionModal = (button, close) => {
    const parentBlock = button.closest(".legal_item");
    const modalBlock = parentBlock.querySelector(".legal_modal_wrap");
    modalBlock.style = "display: flex";
    if (close) {
      modalBlock.removeAttribute("style");
    }
  };
};

initLoadOrderForm();
initLoadUserRequestForm();
initLegal();
initOnlineScheduleWidget();

allButtons.forEach((button) => {
  if (!button.disabled) return (button.style.cursor = "pointer");
});

allTextarea.forEach((button) => {
  return (button.style.fontFamily = "inherit");
});
