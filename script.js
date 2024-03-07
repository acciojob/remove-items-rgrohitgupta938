//your JS code here. If required.
function removeColor() {
            var selectElement = document.getElementById("colorSelect");
            var selectedOption = selectElement.options[selectElement.selectedIndex];
            selectElement.removeChild(selectedOption);
        }