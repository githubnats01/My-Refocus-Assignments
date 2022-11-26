const restaurantMenu = {
    restaurantName : "Jollido Resto",
    dishes : [
        {dishName : "hotsilog", dishPrice : 99, ingredients : "hotdog, sinangag, itlog"},
        {dishName : "bulalo", dishPrice : 450, ingredients : "baka, mais, patatas, repolyo"},
        {dishName : "sinigang na bangus", dishPrice : 250, ingredients : "bangus, mustasa, kamatis"},
        ],
    displayRestaurantName : function (){
        console.log(this.restaurantName)
        console.log()
    },
    displayMenu : function (){
        for(menuDsply of this.dishes){
            console.log(`${menuDsply.dishName},${menuDsply.dishPrice}
${menuDsply.ingredients}`)
            console.log()
        }
    }
}
restaurantMenu.displayRestaurantName()
restaurantMenu.displayMenu()
