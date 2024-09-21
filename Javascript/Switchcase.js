
function getDayOfWeek(num) {
    switch (num) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";   
  
      case 6:
      case 7:
        return "Weekend";
      default:
        return "Invalid day number";   
  
    }
  }

  console.log(getDayOfWeek(num));


  function classifyAnimal(animal) {
    switch (animal) {
      case "dog":
      case "cat":
      case "elephant":
      case "whale":
        return "mammal";
      case "eagle":
      case "parrot":
      case "penguin":
        return "bird";
      case "snake":
      case "lizard":
      case "turtle":
        return "reptile";
      case "frog":
      case "toad":
      case "salamander":
        return "amphibian";
      case "fish":
        return "fish";
      default:
        return "unknown";
    }
  }
  
  
  console.log(classifyAnimal("dog")); 
  console.log(classifyAnimal("eagle")); 
  console.log(classifyAnimal("snake")); 
  console.log(classifyAnimal("frog")); 
  console.log(classifyAnimal("fish")); 
  console.log(classifyAnimal("unicorn"));