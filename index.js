import {renderWidgetItems} from './components/widgetList.js';

const data = [
    {"pair":"USD CHF", "buy":0.99143, "sell":0.99043},
    {"pair":"GBP USD", "buy":1.28495, "sell":1.2836},
    {"pair":"GBP CHF", "buy":1.27378, "sell":1.27147},
    {"pair":"EUR SEK", "buy":9.632, "sell":9.6055},
    {"pair":"USD JPY", "buy":110.467, "sell":110.417},
    {"pair":"EUR JPY", "buy":120.589, "sell":120.491}
  ];

  let setIntervalId = "";
document.querySelector('#main').innerHTML = renderWidgetItems(data);
//.insertAdjacentHTML('afterend', renderWidgetItems());

let testButton = document.querySelector("#test-button");

function startTesting() {
    const testContainer = document.querySelector("#test-container");

    if (testButton.innerHTML.indexOf("Start") > -1) {
        testButton.innerHTML = "Stop testing";
        setIntervalId = setInterval(function() {
            testContainer.innerHTML = renderWidgetItems(alternateData(data));
        }, 1000);
    } else {
        testButton.innerHTML = "Start testing";
        clearInterval(setIntervalId);
    }
    
}

function alternateData (dataTOAlternate) {
    return dataTOAlternate.map((dataItem) => {
        if (parseInt(Math.random() * 100) % 2 == 1) {
             dataItem.buy = parseFloat(dataItem.buy + getNewValue(dataItem.buy)).toFixed(5); 
             dataItem.sell = parseFloat(dataItem.sell + getNewValue(dataItem.sell)).toFixed(5); 
             dataItem.rise = true;
        } else {
            dataItem.buy = parseFloat(dataItem.buy - getNewValue(dataItem.buy)).toFixed(5); 
            dataItem.sell = parseFloat(dataItem.sell - getNewValue(dataItem.sell)).toFixed(5); 
            dataItem.rise = false;
        }
        return dataItem;
    });
}

function getNewValue (value) {
    return 0.1 * Math.random() * value; 
}


document.addEventListener('DOMContentLoaded', function() {
    testButton.onclick = function() {startTesting()};
 });


