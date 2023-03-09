// Client facing scripts here

///Function to create html of summary
const createOrderElement = function(orderItem) {

  let $order = `
  <div class="order-list-item">
    <span class="order-item">
     <i class="bi bi-${orderItem.quantity
    }-circle-fill item-count" id="item-name"></i> ${orderItem.title}
    </span>
    <span class="order-price">
     <span>$${parseFloat(orderItem.price).toFixed(2)}
     </span>
    </span>
</div>`;
  return $order;
};

////Function to render the orderlist html on the order summary
 const renderSummary = function(orderList) {
   let total = 0;
  const $summaryContainer = $("#summary-container");

   for (const order of orderList) {
     total += order.price * order.quantity;
    const $summaryHtml = createOrderElement(order);
    $summaryContainer.prepend($summaryHtml);
   }
   console.log(total);
   $("#order-total").text(total);
};

$(document).ready(function() {
  $.get("/order-summary/get-all-orders", function(data) {

    const { clientId, dishes } = data;
    // console.log(dishes);
    renderSummary(dishes);
  });

});
