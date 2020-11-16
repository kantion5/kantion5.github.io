var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl : "./home.html",
        controller: "shopController"
    })
    .when('/productDetail', {
        templateUrl : "./productDetail.html",
        controller : "productController"
    })
    .when('/account', {
        templateUrl: "./accounts.html"
    })
    .when('/cart', {
        templateUrl: "./cart.html",
        controller: "cartController"
    })
    .when('/checkout', {
        templateUrl: "./checkout.html",
        controller: "checkoutController"
    })
    .otherwise({
        redirectTo: "/"
    });
});

app.factory('itemHandler', function(){
    var fact = {};
    var item = {};
    var cart = [];
    fact.generate = function(){
      return item;
    };
    fact.setItem = function(i){
      item = i;
      //console.log(item);
    }
    fact.setCart = function(i){
        //console.log(i);
        cart.push(i);
        //console.log(cart[0]);
    }
    fact.getCart = function(){
        console.log(cart);
        return cart;
    }
    fact.clear = function(){
        cart = [];
    }
    return fact;
  });

app.controller('shopController', ['$scope', 'itemHandler', function($scope, itemHandler){
    $scope.images = [
        {img1 : "./Assets/images/1.jpg", rating: "Rating: 3.6", price: 10.50, tag:"Gaming", name: "Playstation Store Gift Card", alt: "Playstation store gift card"},
        {img1 : "./Assets/images/2.jpg", rating: "Rating: 4.1", price: 9.25, tag:"Home and Decoration", name: "Spotted Sewing Fabric", alt: "A collection of different colored spotted fabric for sewing"},
        {img1 : "./Assets/images/3.jpg", rating: "Rating: 4.2", price: 9.25, tag:"Home and Decoration", name: "Floral Sewing Fabric", alt: "a collection of fabrics in a floral pattern"},
        {img1 : "./Assets/images/4.jpg", rating: "Rating: 4.1", price: 59.99, tag:"Home and Decoration", name: "Sewing Machine", alt: "A sewing machine"},
        {img1 : "./Assets/images/5.jpg", rating: "Rating: 4.1", price: 59.99, tag:"Gaming", name: "Tomb Raider", alt: "Shadow of the Romb Raider: Definitive Edition"},
        {img1 : "./Assets/images/6.jpg", rating: "Rating: 3.7", price: 59.99, tag:"Gaming", name: "BattleField V", alt: "Battlefield V for pc"},
        {img1 : "./Assets/images/7.jpg", rating: "Rating: 3.8", price: 59.99, tag:"Gaming", name: "God of War", alt: "God of war for PS4"},
        {img1 : "./Assets/images/8.jpg", rating: "Rating: 3.1", price: 42.99, tag:"Gaming", name: "Far Cry 5", alt: "Far Cry 5 for PC"},
        {img1 : "./Assets/images/9.jpg", rating: "Rating: 5.0", price: 35.99, tag:"Gaming", name: "Star Wars: Battlefront II", alt: ""},
        {img1 : "./Assets/images/10.jpg", rating: "Rating: 4.2", price: 12.50, tag:"Gaming", name: "XBOX Gift Card", alt: "25 dollar XBOX gift card"},
        {img1 : "./Assets/images/11.jpg", rating: "Rating: 4.1", price: 30.99, tag:"Gaming", name: "Animal Crossing", alt: "Animal Crossing New Orizions game code for Nintendo Switch"},
        {img1 : "./Assets/images/12.jpg", rating: "Rating: 4.7", price: 30.99, tag:"Gaming", name: "Trails of Mana", alt: "Trails of Mana game for Nintendo Switch"},
        {img1 : "./Assets/images/13.jpg", rating: "Rating: 3.9", price: 30.99, tag:"Gaming", name: "The Legend Of Zelda: Expansion pass", alt: ""},
        {img1 : "./Assets/images/14.jpg", rating: "Rating: 4.1", price: 59.99, tag:"Gaming", name: "The Legend of Zelda: Breath of the Wild", alt: "The legend of zelda breath of the wild for Nintendo switch"},
        {img1 : "./Assets/images/15.jpg", rating: "Rating: 3.9", price: 12.50, tag:"Home and Decoration", name: "Elastic Band for Sewing", alt: "an elastic band for sewing face masks"},
        {img1 : "./Assets/images/16.jpg", rating: "Rating: 4.7", price: 12.50, tag:"Home and Decoration", name: "Sewing Pins", alt: "Pins for sewing"},
        {img1 : "./Assets/images/17.jpg", rating: "Rating: 3.5", price: 12.50, tag:"Home and Decoration", name: "Sewing Scissors", alt: "Scissors for sewing"},
        {img1 : "./Assets/images/19.jpg", rating: "Rating: 5.0", price: 25.00, tag:"Apparel", name: "Light blue Crocks", alt: "Crocs footware in light blue color"},
        {img1 : "./Assets/images/18.jpg", rating: "Rating: 4.6", price: 20.00, tag:"Apparel", name: "Black Leggings", alt: "one pair of black leggings"},
        {img1 : "./Assets/images/20.jpg", rating: "Rating: 3.6", price: 42.99, tag:"Kitchen", name: "Utopia Kitchen Knife", alt: "A Kitchen knife made by Utopia"},
        {img1 : "./Assets/images/21.jpg", rating: "Rating: 4.1", price: 52.00, tag:"Kitchen", name: "Saken German Steel Knife", alt: "German steel knife by saken"},
        {img1 : "./Assets/images/22.jpg", rating: "Rating: 4.2", price: 60.00, tag:"Kitchen", name: "Master Raccoon Knife set", alt: "A knife set made by Master Raccoon, includes three knives"},
        {img1 : "./Assets/images/23.jpg", rating: "Rating: 4.1", price: 40.00, tag:"Kitchen", name: "All Clad Pan Set", alt: ""},
        {img1 : "./Assets/images/24.jpg", rating: "Rating: 4.1", price: 35.99, tag:"Kitchen", name: "Stainless Steel Frying Pan", alt: "Stainless Steel Frying Pan"},
        {img1 : "./Assets/images/25.jpg", rating: "Rating: 3.7", price: 120.00, tag:"Kitchen", name: "Deep Pan", alt: "A Deep Pan with Big Sides"},
        {img1 : "./Assets/images/26.jpg", rating: "Rating: 3.8", price: 42.99, tag:"Apparel", name: "Mens Dress Shoes", alt: "Brown mens dress shoes"},
        {img1 : "./Assets/images/27.jpg", rating: "Rating: 3.1", price: 90.00, tag:"Apparel", name: "White Longsleeve", alt: "Womens white longsleeve"},
        {img1 : "./Assets/images/28.jpg", rating: "Rating: 5.0", price: 100.00, tag:"Apparel", name: "Red Hoodie", alt: "womens red hoodie"},
        {img1 : "./Assets/images/29.jpg", rating: "Rating: 4.2", price: 120.00, tag:"Apparel", name: "Orange Longsleeve", alt: "womans orange longsleeve"},
        {img1 : "./Assets/images/30.jpg", rating: "Rating: 4.1", price: 45.00, tag:"Apparel", name: "Short Longsleeve", alt: "womens longsleeve short on belly"},
        {img1 : "./Assets/images/31.jpg", rating: "Rating: 4.7", price: 55.00, tag:"Apparel", name: "TurtleNeck Sweater", alt: "womens lightblue turtle neck sweater"},
        {img1 : "./Assets/images/32.jpg", rating: "Rating: 3.9", price: 70.00, tag:"Apparel", name: "Buttoned Longsleeve", alt: "womens longsleeve with a button connecting the middle"},
        {img1 : "./Assets/images/33.jpg", rating: "Rating: 4.1", price: 60.50, tag:"Apparel", name: "Striped Longsleeve", alt: "womens  black longsleeve with white horizontal stripes"},
        {img1 : "./Assets/images/34.jpg", rating: "Rating: 3.9", price: 36.00, tag:"Apparel", name: "Buttoned Shortsleeve", alt: "a shortsleeve shirt with buttons in the middle"},
        {img1 : "./Assets/images/35.jpg", rating: "Rating: 4.7", price: 42.99, tag:"Apparel", name: "Summer Set", alt: ""},
        {img1 : "./Assets/images/36.jpg", rating: "Rating: 3.5", price: 70.99, tag:"Apparel", name: "Black And White Skirt Set", alt: ""},
        {img1 : "./Assets/images/37.jpg", rating: "Rating: 4.6", price: 50.99, tag:"Apparel", name: "All Black Skirt Set", alt: ""},
        {img1 : "./Assets/images/38.jpg", rating: "Rating: 5.0", price: 110.00, tag:"Kitchen", name: "Dark Blue Tableware", alt: ""},
        {img1 : "./Assets/images/39.jpg", rating: "Rating: 4.2", price: 103.00, tag:"Kitchen", name: "Dark Tableware", alt: ""},
        {img1 : "./Assets/images/40.jpg", rating: "Rating: 4.5", price: 12.99, tag:"Kitchen", name: "Silverware Set", alt: ""},
        {img1 : "./Assets/images/41.jpg", rating: "Rating: 4.3", price: 12.99, tag:"Home and Decoration", name: "Gray Fabric", alt: ""},
        {img1 : "./Assets/images/42.jpg", rating: "Rating: 4.1", price: 15.99, tag:"Home and Decoration", name: "Purple Fabric", alt: ""},
        {img1 : "./Assets/images/43.jpg", rating: "Rating: 4.5", price: 12.99, tag:"Home and Decoration", name: "Sewing Traveling Set", alt: ""},
        {img1 : "./Assets/images/44.jpg", rating: "Rating: 4.6", price: 16.99, tag:"Home and Decoration", name: "Sewing Set With Black String", alt: ""},
        {img1 : "./Assets/images/45.jpg", rating: "Rating: 4.2", price: 160.00, tag:"Kitchen", name: "Stainless Steel Cooking Set", alt: ""},
        {img1 : "./Assets/images/46.jpg", rating: "Rating: 4.2", price: 45.00, tag:"Kitchen", name: "Cast Iron Dutch Oven", alt: ""},
        {img1 : "./Assets/images/47.jpg", rating: "Rating: 3.0", price: 30.00, tag:"Kitchen", name: "Cast Iron Griddle Pan", alt: ""},
        {img1 : "./Assets/images/48.jpg", rating: "Rating: 3.6", price: 75.00, tag:"Kitchen", name: "Stailess Steel Pressure Cooker", alt: ""},
        {img1 : "./Assets/images/49.jpg", rating: "Rating: 4.1", price: 50.00, tag:"Kitchen", name: "Non-Stick Pan", alt: ""},
        {img1 : "./Assets/images/50.jpg", rating: "Rating: 4.6", price: 12.99, tag:"Kitchen", name: "Knife Sharpening Steel", alt: ""}
    ];

    $scope.setItem = function(item){
        itemHandler.setItem(item);
    };
}]);

app.controller('productController', ['$scope', 'itemHandler', function($scope, itemHandler){
    
    $scope.init = function(){
        $scope.item = itemHandler.generate();
        //console.log(this.item);
    };
    $scope.addCart = function(item){
        itemHandler.setCart(item);
    }
}]);

app.controller('cartController', ['$scope', 'itemHandler', function($scope, itemHandler){
    $scope.init = function(){
        console.log("init");
        $scope.cartItems = itemHandler.getCart();
        $scope.subtotal = 0;
        for(var i = 0; i < this.cartItems.length; i++){
            $scope.subtotal += this.cartItems[i].price;
            console.log(this.cartItems.length);
            console.log(this.cartItems[i].price);
        }
        console.log($scope.subtotal);
    };
    $scope.init();
}]);

app.controller('checkoutController', ['$scope', 'itemHandler', function($scope, itemHandler){
    $scope.clearCart = function(){
        itemHandler.clear();
    }
}])
