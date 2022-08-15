//counter project

let counterNumber = 0;
let main = document.getElementsByTagName("main");

//function to create all the needed HTML elements
function createElements (tag, attribute, value, insideText){
    let element = document.createElement(tag);
    element.setAttribute(attribute, value);
    element.innerText = insideText;
    return element;
}

let counterContainer = createElements("div", "id", "counterContainer", "");
let decreaseButton = createElements ( "button", "id", "decreaseButton", "-");
let increaseButton = createElements ( "button", "id", "increaseButton", "+");
let numberBox = createElements ( "div", "id", "counterNumber", "0");
let resetContainer = createElements("div", "id", "resetContainer", "")
let resetButton = createElements("button", "id", "resetButton", "Reset");

/*event listener created on parent node (#countercontainer) in order to handle 2 (or eventually more)
different targets with a single event listener*/
main[0].addEventListener("click", function(e) {
    sum(e)
})

function sum (e) {
    let target = e.target;
    //if event target is increaseButton, the function increases counterNumber variable, otherwise it decreases/reset it
    switch(target) {
        case increaseButton:
            numberBox.innerText = ++counterNumber;
            break;
        case decreaseButton:
            numberBox.innerText = --counterNumber;
            break;
        case resetButton:
            counterNumber = 0
            numberBox.innerText = counterNumber;
    }
}

main[0].appendChild(counterContainer);
main[0].appendChild(resetContainer);
counterContainer.appendChild(decreaseButton);
counterContainer.appendChild(numberBox);
counterContainer.appendChild(increaseButton);
resetContainer.appendChild(resetButton);

