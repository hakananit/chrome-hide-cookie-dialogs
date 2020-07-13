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
            let maxIndex = maxZIndex();
            (arr.find(a => parseFloat(window.getComputedStyle(a).zIndex) === maxIndex)).setAttribute("style", "display:none");
        }
        hideDialog();
    })();