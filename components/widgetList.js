import {renderWidgetItem} from './widgetItem.js';

export function renderWidgetItems(dataTORender) {

  return (
    `<div class="widget-list">
      ${dataTORender.map((dataElement) => {
          return renderWidgetItem(dataElement);
      }).join("")}
    </div>`
  );
}