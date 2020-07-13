    (function () {
        let arr;

        function maxZIndex() {
            arr = Array.from(document.querySelectorAll('body *'));
            return arr.map(a => parseFloat(window.getComputedStyle(a).zIndex))
                .filter(a => !isNaN(a))
                .sort((a, b) => a - b)
                .pop();
        }

        function hideDialog() {
            const maxIndex = maxZIndex();
            const element = (arr.find(a => parseFloat(window.getComputedStyle(a).zIndex) === maxIndex));
            if (Array.from(element).filter(a => a.textContent.includes("cookie"))) {
                element.setAttribute("style", "display:none");
            }
        }
        hideDialog();
    })();