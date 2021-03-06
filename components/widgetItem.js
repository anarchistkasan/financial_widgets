export function renderWidgetItem(dataElement) {

  let {pair, buy,sell} = dataElement;
  sell = sell.toString();
  buy = buy.toString();


  return (
    `<div class="widget">
      <div class="header">
          ${pair}
      </div>
      <div class="content">
          <div class="left-side-content white-arrow">
          <p class="title">
            ${getOperationCurrencyString("Sell", pair.substring(0, 3))}
          </p>  
          ${getValueElement(sell)}
          </div>
          <div class=${dataElement.rise ? "triangle-up" : "triangle-down"}></div>
          <div class="right-side-content white-arrow">
              <p class="title">
                ${getOperationCurrencyString("Buy", pair.substring(4, 7))}
              </p>
              ${getValueElement(buy)}
          </div>
      </div>
           
    </div>`
  );
}

function getOperationCurrencyString(operationName, currency) {
  return operationName + " " + currency;
}

function getValueElement (sumString) {
  const sumStringStart = sumString.slice(0, -3);
  const sumStringBold = sumString.slice(-3, -1);
  const sumStringEnd = sumString.slice(-1);

  return (
    `<div>
        <span class="value">
            ${sumStringStart}<b>${sumStringBold}</b><span>${sumStringEnd}</span>
        </span>
    </div>`
  );
}

