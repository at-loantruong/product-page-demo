var shoppingCartItems = [];
$( document ).ready(function() { 
  if (sessionStorage["shopping­cart­items"] != null) {
    shoppingCartItems = JSON.parse(sessionStorage["shopping­cart­items"].toString());  
  }
  displayShoppingCartItems();
}); 
$(".add-to-cart").click(function () {
  var cart = $('.num-items-in-cart');
  var imgtodrag = $(this).parent('.product-item-wrapper').find("img").eq(0);
  if (imgtodrag) {
    var imgclone = imgtodrag.clone()
    .offset({
      top: imgtodrag.offset().top,
      left: imgtodrag.offset().left
    })
    .css({
      'opacity': '0.5',
      'position': 'absolute',
      'height': '150px',
      'width': '150px',
      'z-index': '100'
    })
    .appendTo($('body'))
    .animate({
      'top': cart.offset().top + 10,
      'left': cart.offset().left + 10,
      'width': 75,
      'height': 75
    }, 1000, 'easeInOutExpo');
      
    setTimeout(function () {
      cart.effect("shake", {
        times: 2
      }, 200);
    }, 1500);

    imgclone.animate({
      'width': 0,
      'height': 0
    }, function () {
      $(this).detach()
    });
  }
  var button = $(this);
  var id = button.attr("id");
  var name = button.attr("data-name");
  var price = button.attr("data-price"); 
  var image = button.attr("data-image");
  var quantity = 1;  
  var item = { 
    id: id, 
    name: name,  
    price: price,  
    image: image,
    quantity: quantity
  };
  var exists = false;
  if (shoppingCartItems.length > 0) {             
    $.each(shoppingCartItems, function (index, value) { 
     if (value.id == item.id) { 
      value.quantity++;     
      exists = true;   
      return false;
      }   
    });
  }   
  if (!exists) {   
    shoppingCartItems.push(item); 
  } 
  sessionStorage.setItem("shopping­cart­items", JSON.stringify(shoppingCartItems)); 
  displayShoppingCartItems();     
});

function removeItem(buttonId){
  var retVal = confirm("Do you want to delete ?");
  if( retVal == true ){
  var id = $(buttonId).attr("id");
  for(var i = 0; i < shoppingCartItems.length; i++) {
    if(shoppingCartItems[i].id == id) {
      shoppingCartItems.splice(i, 1);
    }
  }
  sessionStorage["shopping­cart­items"] = JSON.stringify(shoppingCartItems);
  displayShoppingCartItems();
  return true;
  }else{
    return false;
  }
}
function displayShoppingCartItems() {  
  if (sessionStorage["shopping­cart­items"] != null) {
   shoppingItems = JSON.parse(sessionStorage["shopping­cart­items"].toString());  
   $("#table-products > tbody").html("");
   $("#topActionCartNumber").html("");
   var count = 0;
   var total = 0;
   $.each(shoppingItems, function (index, item) {   
      var htmlString = ""; 
      htmlString += "<tr>";  
      htmlString += "<td>" + ++index + "</td>";  
      htmlString += "<td class='image'><img src='"+ item.image +"' alt='Image'>" + item.name + "</td>";
      htmlString += "<td>" +'$ ' + item.price + "</td>"; 
      htmlString += "<td>" + item.quantity + "</ td>"; 
      htmlString += "<td>" +'$ ' + item.price *  item.quantity + "</td>"; 
      htmlString += "<td class='text-center'><button class='cart' id='"+item.id+"' onClick='removeItem(this)'><i class='fa fa-trash'></i></button></td>"; 
      htmlString += "</tr>";  
      count = count + item.quantity;
      total = total + item.price *  item.quantity;
      $("#table-products > tbody:last").append(htmlString);            
    });
    var htmlString = ""; 
    htmlString += "<tr>";
    htmlString += "<td colspan='2' class='total-text'>" + 'Total' +  "</td>";
    htmlString += "<td colspan='4'>" +'$ '+ total +  "</td>";
    htmlString += "</tr>"; 
    $("#table-products > tbody").append(htmlString);
    $("#topActionCartNumber").append(count);
  }
  if(shoppingItems.length == 0){
    $("#table-products").css("display", "none");
    $(".group-bottom").css("display", "none");
    var htmlString = "Your cart is currently empty.";
    $("#empty-cart").append(htmlString);
  }
}
