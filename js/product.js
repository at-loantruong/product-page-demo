var products = [
  { id: 1, name: 'Lacks side table fashion shop FS01', price: 75.88, image: "images/product-1.jpg" },
  { id: 2, name: 'Lacks side table fashion shop FS02', price: 85.8, image: "images/product-2.jpg" },
  { id: 3, name: 'Lacks side table fashion shop FS03', price: 95.5, image: "images/product-3.jpg" },
  { id: 4, name: 'Lacks side table fashion shop FS04', price: 65.99, image: "images/product-4.jpg" },
  { id: 5, name: 'Lacks side table fashion shop FS05', price: 75.88, image: "images/product-5.jpg" },
  { id: 6, name: 'Lacks side table fashion shop FS06', price: 85.8, image: "images/product-6.jpg" },
  { id: 7, name: 'Lacks side table fashion shop FS07', price: 95.5, image: "images/product-7.jpg" },
  { id: 8, name: 'Lacks side table fashion shop FS08', price: 65.99, image: "images/product-8.jpg" },
  { id: 9, name: 'Lacks side table fashion shop FS09', price: 75.88, image: "images/product-9.jpg" },
  { id: 10, name: 'Lacks side table fashion shop FS010', price: 85.8, image: "images/product-10.jpg" },
  { id: 11, name: 'Lacks side table fashion shop FS011', price: 95.5, image: "images/product-11.jpg" },
  { id: 12, name: 'Lacks side table fashion shop FS012', price: 65.99, image: "images/product-12.jpg" }
];
for(var i=0;i<products.length;i++){
  document.getElementById("list-products").innerHTML += '<article class="col-sm-3 col-xs-6"><div class="product-item-wrapper"><img src=' + products[i].image + ' alt=""><div class="product-top"><a class="product-img" href="#"><img src=' + products[i].image + ' alt=""></a><div class="display-hover"><ul><li><a href="#" ><i class="fa fa-eye"></i></a></li><li><a href="#" ><i class="fa fa-heart"></i></a></li><li><a href="#"><i class="fa fa-exchange"></i></a></li><li><a href="#"><i class="fa fa-search"></i></a></li></ul></div></div><div class="product-item-details"><div class="product-item-name"><a class="product-item-link" href="#"> '+products[i].name+'</a></div><div class="price-container"><span class="price">$ '+products[i].price+'</span></div></div><button id="'+products[i].id+'" class="add-to-cart btn btn--primary" data-name="'+products[i].name+'" data-price="'+products[i].price+'" data-image="'+products[i].image+'"><i class="fa fa-shopping-cart"></i>  Add to cart</button></div></article>'; 
}
