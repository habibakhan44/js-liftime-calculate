function calculateSupply() {
    
    var favoriteSnack = prompt("What is your favorite snack?");
    var currentAge = parseInt(prompt("How old are you?"), 10);
    
    
    var maxAge = 65;
    var amountPerDay = parseInt(prompt("How many " + favoriteSnack + " do you eat per day?"), 10);
    
    if (isNaN(currentAge) || isNaN(amountPerDay) || currentAge >= maxAge || amountPerDay <= 0) {
      alert("Invalid data. Please check your inputs.");
      return;
    }
  
    var totalSnacksNeeded = (maxAge - currentAge) * amountPerDay * 365; 
  
    document.getElementById("totalSnacksNeeded").textContent = totalSnacksNeeded + " " + favoriteSnack;
    document.getElementById("maxAgeDisplay").textContent = maxAge;
  }
  