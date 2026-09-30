"use strict";

function createMeal(
  name,
  category,
  emoji,
  time,
  servings,
  description,
  ingredients,
  instructions
) {
  return {
    name,
    category,
    emoji,
    time,
    servings,
    description,
    ingredients,
    instructions
  };
}

const meals = [
  createMeal(
    "Paneer Butter Masala",
    "Vegetarian",
    "🧀",
    "40 minutes",
    "4 servings",
    "Soft paneer cooked in a creamy tomato and butter gravy.",
    [
      "250g paneer cubes",
      "2 tablespoons butter",
      "1 large onion, chopped",
      "3 tomatoes, chopped",
      "1 tablespoon ginger-garlic paste",
      "1 teaspoon chili powder",
      "1 teaspoon garam masala",
      "1/2 cup cream",
      "Salt to taste"
    ],
    [
      "Lightly fry the paneer cubes until golden.",
      "Cook onion, ginger-garlic paste, and tomatoes until soft.",
      "Blend the cooked mixture into a smooth gravy.",
      "Add butter, spices, cream, and salt.",
      "Add paneer and simmer for 5 minutes.",
      "Serve with naan, roti, or rice."
    ]
  ),

  createMeal(
    "Palak Paneer",
    "Vegetarian",
    "🥬",
    "35 minutes",
    "4 servings",
    "Paneer cubes simmered in a smooth spinach gravy.",
    [
      "250g paneer cubes",
      "500g fresh spinach",
      "1 onion, chopped",
      "2 tomatoes, chopped",
      "1 tablespoon ginger-garlic paste",
      "1 green chili",
      "1/2 teaspoon garam masala",
      "2 tablespoons cream",
      "Salt to taste"
    ],
    [
      "Blanch spinach in boiling water for 2 minutes.",
      "Blend the spinach with green chili.",
      "Cook onion, ginger-garlic paste, and tomatoes.",
      "Add spinach puree, salt, and garam masala.",
      "Add paneer and simmer for 5 minutes.",
      "Finish with cream and serve hot."
    ]
  ),

  createMeal(
    "Chole Masala",
    "Vegetarian",
    "🍲",
    "45 minutes",
    "4 servings",
    "Chickpeas cooked in a spicy onion and tomato masala.",
    [
      "2 cups boiled chickpeas",
      "1 large onion, chopped",
      "2 tomatoes, chopped",
      "1 tablespoon ginger-garlic paste",
      "2 teaspoons chole masala",
      "1/2 teaspoon turmeric",
      "1 teaspoon chili powder",
      "2 tablespoons oil",
      "Salt to taste"
    ],
    [
      "Heat oil and cook the onion until golden.",
      "Add ginger-garlic paste and cook for one minute.",
      "Add tomatoes, turmeric, chili powder, and salt.",
      "Cook until the oil separates.",
      "Add chole masala and chickpeas.",
      "Add water and simmer for 15 minutes.",
      "Serve with bhatura, roti, or rice."
    ]
  ),

  createMeal(
    "Rajma Masala",
    "Vegetarian",
    "🍛",
    "50 minutes",
    "4 servings",
    "Red kidney beans cooked in a rich tomato gravy.",
    [
      "2 cups boiled kidney beans",
      "2 onions, chopped",
      "3 tomatoes, pureed",
      "1 tablespoon ginger-garlic paste",
      "1 teaspoon cumin seeds",
      "1/2 teaspoon turmeric",
      "1 teaspoon chili powder",
      "1 teaspoon garam masala",
      "Salt to taste"
    ],
    [
      "Heat oil and add cumin seeds.",
      "Cook onions until golden brown.",
      "Add ginger-garlic paste and tomato puree.",
      "Add turmeric, chili powder, and salt.",
      "Cook until the oil separates.",
      "Add kidney beans and water.",
      "Simmer for 20 minutes and finish with garam masala."
    ]
  ),

  createMeal(
    "Dal Tadka",
    "Vegetarian",
    "🥣",
    "30 minutes",
    "4 servings",
    "Yellow lentils finished with garlic, cumin, and chili tempering.",
    [
      "1 cup yellow lentils",
      "3 cups water",
      "1/2 teaspoon turmeric",
      "1 onion, chopped",
      "2 tomatoes, chopped",
      "4 garlic cloves, sliced",
      "1 teaspoon cumin seeds",
      "2 tablespoons ghee or oil",
      "Salt to taste"
    ],
    [
      "Cook lentils with water, turmeric, and salt until soft.",
      "Mash the cooked lentils lightly.",
      "Heat ghee and fry cumin seeds and garlic.",
      "Add onion and cook until soft.",
      "Add tomatoes and cook until tender.",
      "Pour the tempering over the dal.",
      "Garnish with coriander and serve with rice."
    ]
  ),

  createMeal(
    "Aloo Gobi",
    "Vegetarian",
    "🥔",
    "35 minutes",
    "4 servings",
    "Potatoes and cauliflower cooked with Indian spices.",
    [
      "2 potatoes, cubed",
      "1 small cauliflower",
      "1 onion, sliced",
      "2 tomatoes, chopped",
      "1 teaspoon cumin seeds",
      "1/2 teaspoon turmeric",
      "1 teaspoon coriander powder",
      "2 tablespoons oil",
      "Salt to taste"
    ],
    [
      "Heat oil and add cumin seeds.",
      "Add potatoes and cauliflower.",
      "Add onion and cook until soft.",
      "Add tomatoes, turmeric, coriander powder, and salt.",
      "Cover and cook until the vegetables are tender.",
      "Garnish with coriander and serve with roti."
    ]
  ),

  createMeal(
    "Vegetable Biryani",
    "Vegetarian",
    "🍚",
    "60 minutes",
    "5 servings",
    "Fragrant basmati rice layered with vegetables and spices.",
    [
      "2 cups basmati rice",
      "2 cups mixed vegetables",
      "1 large onion, sliced",
      "1 cup yogurt",
      "1 tablespoon ginger-garlic paste",
      "2 teaspoons biryani masala",
      "Mint leaves",
      "Fresh coriander",
      "Salt to taste"
    ],
    [
      "Soak the rice for 20 minutes.",
      "Boil the rice until it is 70% cooked.",
      "Cook onion, ginger-garlic paste, vegetables, yogurt, and spices.",
      "Layer the vegetable masala with the rice.",
      "Add mint, coriander, and fried onions.",
      "Cover and cook on low heat for 20 minutes."
    ]
  ),

  createMeal(
    "Malai Kofta",
    "Vegetarian",
    "🍡",
    "50 minutes",
    "4 servings",
    "Paneer and potato dumplings served in creamy gravy.",
    [
      "200g grated paneer",
      "2 boiled potatoes",
      "2 tablespoons corn flour",
      "2 tablespoons chopped nuts",
      "3 tomatoes",
      "1 onion",
      "1/2 cup cream",
      "1 teaspoon garam masala",
      "Oil for frying"
    ],
    [
      "Mix paneer, potato, corn flour, nuts, and salt.",
      "Shape the mixture into small balls.",
      "Deep-fry the balls until golden.",
      "Cook onion and tomatoes, then blend into a gravy.",
      "Add cream and garam masala.",
      "Add koftas just before serving."
    ]
  ),

  createMeal(
    "Kadai Paneer",
    "Vegetarian",
    "🧀",
    "35 minutes",
    "4 servings",
    "Paneer cooked with capsicum and freshly ground spices.",
    [
      "250g paneer cubes",
      "1 capsicum, sliced",
      "1 onion, sliced",
      "3 tomatoes, chopped",
      "1 tablespoon ginger-garlic paste",
      "1 teaspoon coriander seeds",
      "1 teaspoon cumin seeds",
      "2 tablespoons oil",
      "Salt to taste"
    ],
    [
      "Dry roast coriander and cumin seeds, then crush them.",
      "Cook onion and capsicum in oil.",
      "Add ginger-garlic paste and tomatoes.",
      "Add the crushed spices and salt.",
      "Add paneer and cook for 5 minutes.",
      "Garnish with fresh coriander."
    ]
  ),

  createMeal(
    "Veg Fried Rice",
    "Vegetarian",
    "🍚",
    "25 minutes",
    "4 servings",
    "Rice stir-fried with vegetables and soy sauce.",
    [
      "3 cups cooked rice",
      "1 carrot, chopped",
      "1/2 cup cabbage",
      "1/2 cup capsicum",
      "2 garlic cloves",
      "1 tablespoon soy sauce",
      "1 teaspoon vinegar",
      "2 tablespoons oil",
      "Salt and pepper"
    ],
    [
      "Heat oil and fry the garlic.",
      "Add vegetables and stir-fry on high heat.",
      "Add cooked rice, soy sauce, vinegar, salt, and pepper.",
      "Toss everything together.",
      "Garnish with spring onion and serve hot."
    ]
  ),

  createMeal(
    "Chicken Biryani",
    "Non-Vegetarian",
    "🍗",
    "70 minutes",
    "5 servings",
    "Spiced chicken layered with fragrant basmati rice.",
    [
      "750g chicken",
      "2 cups basmati rice",
      "1 cup yogurt",
      "2 onions, sliced",
      "1 tablespoon ginger-garlic paste",
      "2 teaspoons biryani masala",
      "Mint leaves",
      "Fresh coriander",
      "Salt to taste"
    ],
    [
      "Marinate chicken with yogurt, ginger-garlic paste, spices, and salt.",
      "Cook the chicken until almost tender.",
      "Boil rice until it is 70% cooked.",
      "Layer chicken with rice, mint, coriander, and fried onion.",
      "Cover and cook on low heat for 25 minutes.",
      "Rest for 10 minutes before serving."
    ]
  ),

  createMeal(
    "Butter Chicken",
    "Non-Vegetarian",
    "🍛",
    "50 minutes",
    "4 servings",
    "Tender chicken cooked in a buttery tomato gravy.",
    [
      "600g boneless chicken",
      "2 tablespoons butter",
      "3 tomatoes, pureed",
      "1 onion, chopped",
      "1 tablespoon ginger-garlic paste",
      "1 teaspoon chili powder",
      "1 teaspoon garam masala",
      "1/2 cup cream",
      "Salt to taste"
    ],
    [
      "Cook the chicken with salt and chili powder.",
      "Cook onion, ginger-garlic paste, and tomato puree in butter.",
      "Add garam masala, cream, and salt.",
      "Add the cooked chicken.",
      "Simmer for 15 minutes.",
      "Serve with naan, rice, or roti."
    ]
  ),

  createMeal(
    "Chicken Tikka",
    "Non-Vegetarian",
    "🍢",
    "45 minutes",
    "4 servings",
    "Yogurt-marinated chicken roasted with spices.",
    [
      "500g boneless chicken",
      "1 cup yogurt",
      "1 tablespoon ginger-garlic paste",
      "1 teaspoon chili powder",
      "1 teaspoon garam masala",
      "1 tablespoon lemon juice",
      "Capsicum pieces",
      "Onion pieces",
      "Salt to taste"
    ],
    [
      "Mix yogurt, spices, lemon juice, and salt.",
      "Add chicken, capsicum, and onion.",
      "Marinate for at least 30 minutes.",
      "Thread the pieces onto skewers.",
      "Grill or bake at 200°C until cooked and lightly charred.",
      "Serve with mint chutney."
    ]
  ),

  createMeal(
    "Chicken Curry",
    "Non-Vegetarian",
    "🍲",
    "50 minutes",
    "5 servings",
    "Chicken simmered in traditional onion and tomato curry.",
    [
      "750g chicken",
      "2 onions, chopped",
      "3 tomatoes, chopped",
      "1 tablespoon ginger-garlic paste",
      "1 teaspoon cumin seeds",
      "1/2 teaspoon turmeric",
      "1 teaspoon coriander powder",
      "2 tablespoons oil",
      "Salt to taste"
    ],
    [
      "Heat oil and add cumin seeds.",
      "Cook onions until golden.",
      "Add ginger-garlic paste and tomatoes.",
      "Add turmeric, coriander powder, and salt.",
      "Add chicken and coat with the masala.",
      "Add water, cover, and simmer until tender.",
      "Garnish with coriander."
    ]
  ),

  createMeal(
    "Chicken Fried Rice",
    "Non-Vegetarian",
    "🍚",
    "30 minutes",
    "4 servings",
    "Fried rice with chicken, egg, vegetables, and soy sauce.",
    [
      "3 cups cooked rice",
      "250g cooked chicken",
      "1 carrot, chopped",
      "1/2 cup cabbage",
      "2 eggs",
      "2 garlic cloves",
      "1 tablespoon soy sauce",
      "1 teaspoon vinegar",
      "2 tablespoons oil"
    ],
    [
      "Scramble the eggs in oil and keep them aside.",
      "Stir-fry garlic, chicken, and vegetables.",
      "Add rice, soy sauce, vinegar, salt, and pepper.",
      "Return the eggs to the pan.",
      "Toss well and serve hot."
    ]
  ),

  createMeal(
    "Chicken Noodles",
    "Non-Vegetarian",
    "🍜",
    "30 minutes",
    "4 servings",
    "Chicken and vegetables tossed with noodles and savory sauces.",
    [
      "250g noodles",
      "250g chicken strips",
      "1 carrot",
      "1 capsicum",
      "1/2 cup cabbage",
      "2 garlic cloves",
      "2 tablespoons soy sauce",
      "1 teaspoon chili sauce",
      "2 tablespoons oil"
    ],
    [
      "Boil the noodles and drain them.",
      "Cook garlic and chicken in oil.",
      "Add vegetables and stir-fry on high heat.",
      "Add noodles, soy sauce, chili sauce, salt, and pepper.",
      "Toss well and serve immediately."
    ]
  ),

  createMeal(
    "Mutton Rogan Josh",
    "Non-Vegetarian",
    "🍖",
    "90 minutes",
    "5 servings",
    "Slow-cooked mutton in a rich Kashmiri-style gravy.",
    [
      "750g mutton",
      "1 cup yogurt",
      "2 onions, sliced",
      "1 tablespoon ginger-garlic paste",
      "2 teaspoons Kashmiri chili powder",
      "1 teaspoon fennel powder",
      "3 tablespoons oil",
      "Cardamom and cinnamon",
      "Salt to taste"
    ],
    [
      "Brown the mutton with cardamom and cinnamon.",
      "Add onions and cook until golden.",
      "Add ginger-garlic paste.",
      "Lower the heat and add yogurt slowly.",
      "Add spices and salt.",
      "Add water, cover, and cook until tender.",
      "Serve with rice or naan."
    ]
  ),

  createMeal(
    "Mutton Biryani",
    "Non-Vegetarian",
    "🍛",
    "100 minutes",
    "6 servings",
    "Tender mutton layered with aromatic basmati rice.",
    [
      "750g mutton",
      "2 cups basmati rice",
      "1 cup yogurt",
      "2 onions, sliced",
      "1 tablespoon ginger-garlic paste",
      "2 teaspoons biryani masala",
      "Mint and coriander",
      "Saffron milk",
      "Salt to taste"
    ],
    [
      "Marinate the mutton with yogurt and spices.",
      "Cook the mutton until almost tender.",
      "Boil rice until 70% cooked.",
      "Layer mutton with rice, mint, coriander, and saffron milk.",
      "Cover and cook on low heat for 25 minutes.",
      "Rest before serving."
    ]
  ),

  createMeal(
    "Fish Curry",
    "Non-Vegetarian",
    "🐟",
    "40 minutes",
    "4 servings",
    "Fish cooked in a spicy and tangy curry.",
    [
      "500g fish pieces",
      "2 tomatoes",
      "1 onion",
      "1 tablespoon ginger-garlic paste",
      "1 teaspoon turmeric",
      "1 teaspoon chili powder",
      "1 cup coconut milk",
      "2 tablespoons oil",
      "Salt to taste"
    ],
    [
      "Rub fish with turmeric and salt.",
      "Lightly fry the fish and keep it aside.",
      "Cook onion, ginger-garlic paste, and tomatoes.",
      "Add chili powder and salt.",
      "Add coconut milk and simmer gently.",
      "Add fish and cook for 8 minutes.",
      "Serve with rice."
    ]
  ),

  createMeal(
    "Fish Fry",
    "Non-Vegetarian",
    "🐟",
    "30 minutes",
    "4 servings",
    "Crispy spicy fish fillets shallow-fried until golden.",
    [
      "500g fish fillets",
      "1 tablespoon lemon juice",
      "1 teaspoon ginger-garlic paste",
      "1 teaspoon chili powder",
      "1/2 teaspoon turmeric",
      "2 tablespoons rice flour",
      "2 tablespoons oil",
      "Salt to taste"
    ],
    [
      "Mix lemon juice, ginger-garlic paste, spices, rice flour, and salt.",
      "Coat the fish with the marinade.",
      "Rest for 20 minutes.",
      "Shallow-fry on both sides until golden and cooked.",
      "Serve with lemon wedges."
    ]
  ),

  createMeal(
    "Prawn Masala",
    "Non-Vegetarian",
    "🍤",
    "30 minutes",
    "4 servings",
    "Prawns cooked in a spicy onion and tomato masala.",
    [
      "500g cleaned prawns",
      "1 onion, chopped",
      "2 tomatoes, chopped",
      "1 tablespoon ginger-garlic paste",
      "1/2 teaspoon turmeric",
      "1 teaspoon chili powder",
      "1 teaspoon coriander powder",
      "2 tablespoons oil",
      "Salt to taste"
    ],
    [
      "Marinate prawns with turmeric and salt.",
      "Cook onion, ginger-garlic paste, and tomatoes.",
      "Add chili powder, coriander powder, and salt.",
      "Cook until the masala thickens.",
      "Add prawns and cook for 5 to 7 minutes.",
      "Garnish with coriander."
    ]
  ),

  createMeal(
    "Egg Curry",
    "Non-Vegetarian",
    "🥚",
    "35 minutes",
    "4 servings",
    "Boiled eggs simmered in tomato and onion gravy.",
    [
      "6 boiled eggs",
      "2 onions, chopped",
      "3 tomatoes, chopped",
      "1 tablespoon ginger-garlic paste",
      "1 teaspoon cumin seeds",
      "1 teaspoon chili powder",
      "1 teaspoon garam masala",
      "2 tablespoons oil",
      "Salt to taste"
    ],
    [
      "Make small cuts in the boiled eggs.",
      "Lightly fry the eggs and keep them aside.",
      "Cook cumin, onions, ginger-garlic paste, and tomatoes.",
      "Add chili powder, salt, and water.",
      "Add eggs and garam masala.",
      "Simmer for 5 minutes and serve."
    ]
  ),

  createMeal(
    "Egg Fried Rice",
    "Non-Vegetarian",
    "🍳",
    "25 minutes",
    "4 servings",
    "Fried rice tossed with scrambled egg and vegetables.",
    [
      "3 cups cooked rice",
      "3 eggs",
      "1 carrot",
      "1/2 cup cabbage",
      "2 garlic cloves",
      "1 tablespoon soy sauce",
      "1 teaspoon vinegar",
      "2 tablespoons oil",
      "Salt and pepper"
    ],
    [
      "Scramble the eggs and keep them aside.",
      "Stir-fry garlic and vegetables.",
      "Add rice, soy sauce, vinegar, salt, and pepper.",
      "Return the eggs to the pan.",
      "Toss together and serve hot."
    ]
  ),

  createMeal(
    "Chicken Kebab",
    "Non-Vegetarian",
    "🍢",
    "45 minutes",
    "4 servings",
    "Spiced minced chicken kebabs cooked until golden.",
    [
      "500g minced chicken",
      "1 small onion, chopped",
      "1 tablespoon ginger-garlic paste",
      "1 green chili",
      "1 teaspoon garam masala",
      "2 tablespoons breadcrumbs",
      "1 egg",
      "Fresh coriander",
      "Salt to taste"
    ],
    [
      "Mix all ingredients in a bowl.",
      "Rest the mixture for 20 minutes.",
      "Shape the mixture into kebabs.",
      "Cook in a lightly oiled pan.",
      "Turn regularly until golden and fully cooked.",
      "Serve with mint chutney."
    ]
  ),

  createMeal(
    "Chicken Tandoori",
    "Non-Vegetarian",
    "🍗",
    "60 minutes",
    "4 servings",
    "Chicken marinated in yogurt and roasted until smoky.",
    [
      "800g chicken pieces",
      "1 cup yogurt",
      "1 tablespoon ginger-garlic paste",
      "1 teaspoon turmeric",
      "2 teaspoons chili powder",
      "1 teaspoon garam masala",
      "1 tablespoon lemon juice",
      "1 tablespoon oil",
      "Salt to taste"
    ],
    [
      "Make deep cuts in the chicken.",
      "Mix yogurt, spices, lemon juice, oil, and salt.",
      "Coat chicken and marinate for at least 2 hours.",
      "Bake at 200°C for 35 to 45 minutes.",
      "Grill briefly for a smoky finish.",
      "Serve with lemon and onion."
    ]
  ),

  createMeal(
    "Masala Dosa",
    "Breakfast",
    "🥞",
    "40 minutes",
    "4 servings",
    "Crispy dosa filled with spiced potato masala.",
    [
      "3 cups dosa batter",
      "4 boiled potatoes",
      "1 onion, sliced",
      "1 teaspoon mustard seeds",
      "1 teaspoon urad dal",
      "8 curry leaves",
      "1/2 teaspoon turmeric",
      "2 tablespoons oil",
      "Salt to taste"
    ],
    [
      "Mash the potatoes.",
      "Fry mustard seeds, urad dal, curry leaves, and onion.",
      "Add turmeric, salt, and potatoes.",
      "Spread dosa batter thinly on a hot pan.",
      "Add potato masala and fold the dosa.",
      "Serve with chutney and sambar."
    ]
  ),

  createMeal(
    "Idli Sambar",
    "Breakfast",
    "🥣",
    "45 minutes",
    "4 servings",
    "Soft steamed idlis served with vegetable sambar.",
    [
      "4 cups idli batter",
      "1 cup toor dal",
      "1 carrot",
      "1 potato",
      "1 tomato",
      "2 tablespoons sambar powder",
      "1 teaspoon mustard seeds",
      "Curry leaves",
      "Salt to taste"
    ],
    [
      "Steam the idli batter in greased molds.",
      "Cook dal until soft.",
      "Cook vegetables with tomato, sambar powder, and salt.",
      "Add dal and simmer for 10 minutes.",
      "Add a mustard seed and curry leaf tempering.",
      "Serve sambar with hot idlis."
    ]
  ),

  createMeal(
    "Aloo Paratha",
    "Breakfast",
    "🫓",
    "35 minutes",
    "4 servings",
    "Wheat flatbread stuffed with seasoned mashed potatoes.",
    [
      "2 cups wheat flour",
      "4 boiled potatoes",
      "1 onion, chopped",
      "2 green chilies",
      "1 teaspoon cumin seeds",
      "Fresh coriander",
      "Oil or ghee",
      "Salt to taste"
    ],
    [
      "Make a soft dough with wheat flour.",
      "Mix mashed potatoes with onion, chilies, cumin, coriander, and salt.",
      "Stuff the dough with the potato mixture.",
      "Roll each paratha flat.",
      "Cook with oil or ghee until golden on both sides.",
      "Serve with yogurt or pickle."
    ]
  ),

  createMeal(
    "Poha",
    "Breakfast",
    "🍚",
    "20 minutes",
    "4 servings",
    "Flattened rice cooked with onion, potato, peanuts, and spices.",
    [
      "2 cups flattened rice",
      "1 onion",
      "1 potato",
      "1/4 cup peanuts",
      "1 teaspoon mustard seeds",
      "1/2 teaspoon turmeric",
      "Curry leaves",
      "1 tablespoon lemon juice",
      "Salt to taste"
    ],
    [
      "Rinse and drain the flattened rice.",
      "Fry peanuts and keep them aside.",
      "Cook mustard seeds, curry leaves, onion, and potato.",
      "Add turmeric, salt, and poha.",
      "Mix gently and cook for 3 minutes.",
      "Finish with lemon juice and coriander."
    ]
  ),

  createMeal(
    "Upma",
    "Breakfast",
    "🥣",
    "25 minutes",
    "4 servings",
    "Savory semolina cooked with vegetables and spices.",
    [
      "1 cup semolina",
      "1 onion",
      "1 carrot",
      "1 green chili",
      "1 teaspoon mustard seeds",
      "Curry leaves",
      "3 cups water",
      "2 tablespoons oil",
      "Salt to taste"
    ],
    [
      "Dry roast semolina until lightly golden.",
      "Cook mustard seeds, curry leaves, onion, and carrot.",
      "Add water and salt and bring to a boil.",
      "Slowly add semolina while stirring.",
      "Cover and cook until thick.",
      "Serve hot with chutney."
    ]
  ),

  createMeal(
    "Chole Bhature",
    "Breakfast",
    "🍛",
    "60 minutes",
    "4 servings",
    "Spicy chickpea curry served with fluffy fried bread.",
    [
      "2 cups boiled chickpeas",
      "2 cups flour",
      "1/2 cup yogurt",
      "2 onions",
      "2 tomatoes",
      "1 tablespoon ginger-garlic paste",
      "2 teaspoons chole masala",
      "Oil for frying",
      "Salt to taste"
    ],
    [
      "Make a soft bhatura dough with flour and yogurt.",
      "Prepare chole using onion, tomato, ginger-garlic paste, spices, and chickpeas.",
      "Rest the dough for 30 minutes.",
      "Roll and deep-fry the bhatura until puffed.",
      "Serve hot with chole."
    ]
  ),

  createMeal(
    "Uttapam",
    "Breakfast",
    "🥞",
    "25 minutes",
    "4 servings",
    "Soft thick dosa topped with onions and vegetables.",
    [
      "3 cups dosa batter",
      "1 onion, chopped",
      "1 tomato, chopped",
      "1 capsicum, chopped",
      "2 green chilies",
      "Fresh coriander",
      "Oil",
      "Salt to taste"
    ],
    [
      "Mix the vegetables, chilies, coriander, and salt.",
      "Pour thick dosa batter onto a hot pan.",
      "Add the vegetable mixture on top.",
      "Cook both sides with a little oil.",
      "Serve with chutney and sambar."
    ]
  ),

  createMeal(
    "Poori Bhaji",
    "Breakfast",
    "🫓",
    "40 minutes",
    "4 servings",
    "Puffed fried bread served with spiced potato bhaji.",
    [
      "2 cups wheat flour",
      "5 boiled potatoes",
      "1 onion",
      "1 teaspoon mustard seeds",
      "1/2 teaspoon turmeric",
      "Curry leaves",
      "Oil for frying",
      "Salt to taste"
    ],
    [
      "Make a firm dough with wheat flour and water.",
      "Prepare potato bhaji with mustard seeds, onion, turmeric, and potatoes.",
      "Roll small dough balls into circles.",
      "Deep-fry until puffed and golden.",
      "Serve with the hot bhaji."
    ]
  ),

  createMeal(
    "Masala Omelette",
    "Breakfast",
    "🍳",
    "15 minutes",
    "2 servings",
    "Fluffy omelette filled with vegetables and herbs.",
    [
      "4 eggs",
      "1 onion, chopped",
      "1 tomato, chopped",
      "1 green chili",
      "Fresh coriander",
      "1/2 teaspoon chili powder",
      "1 tablespoon oil",
      "Salt to taste"
    ],
    [
      "Beat the eggs with vegetables, spices, and salt.",
      "Heat oil in a pan.",
      "Pour in the egg mixture.",
      "Cook until the bottom is set.",
      "Fold or flip and cook until done.",
      "Serve with toast."
    ]
  ),

  createMeal(
    "French Toast",
    "Breakfast",
    "🍞",
    "15 minutes",
    "2 servings",
    "Golden bread slices dipped in sweet egg and milk mixture.",
    [
      "4 bread slices",
      "2 eggs",
      "1/2 cup milk",
      "2 tablespoons sugar",
      "1/2 teaspoon cinnamon",
      "1 teaspoon vanilla",
      "Butter",
      "Honey or syrup"
    ],
    [
      "Whisk eggs, milk, sugar, cinnamon, and vanilla.",
      "Dip each bread slice into the mixture.",
      "Cook in butter until golden on both sides.",
      "Serve with honey, syrup, or fresh fruit."
    ]
  ),

  createMeal(
    "Samosa",
    "Snacks & Fast Food",
    "🥟",
    "50 minutes",
    "12 samosas",
    "Crispy pastry filled with spiced potato and peas.",
    [
      "2 cups flour",
      "4 boiled potatoes",
      "1/2 cup peas",
      "1 teaspoon cumin seeds",
      "1 teaspoon coriander powder",
      "1/2 teaspoon chili powder",
      "Oil for frying",
      "Salt to taste"
    ],
    [
      "Make a firm dough with flour, oil, salt, and water.",
      "Cook potatoes and peas with cumin and spices.",
      "Shape dough into cones.",
      "Fill with potato mixture and seal.",
      "Deep-fry until crisp and golden.",
      "Serve with chutney."
    ]
  ),

  createMeal(
    "Aloo Tikki",
    "Snacks & Fast Food",
    "🥔",
    "30 minutes",
    "4 servings",
    "Crispy spiced potato patties served with chutney.",
    [
      "5 boiled potatoes",
      "1/2 cup peas",
      "2 green chilies",
      "1 teaspoon cumin powder",
      "2 tablespoons breadcrumbs",
      "Fresh coriander",
      "Oil for frying",
      "Salt to taste"
    ],
    [
      "Mash potatoes and peas together.",
      "Add chilies, spices, breadcrumbs, coriander, and salt.",
      "Shape into flat patties.",
      "Shallow-fry until crisp and golden.",
      "Serve with mint and tamarind chutney."
    ]
  ),

  createMeal(
    "Pakora",
    "Snacks & Fast Food",
    "🍘",
    "25 minutes",
    "4 servings",
    "Crispy gram-flour fritters made with vegetables.",
    [
      "1 cup gram flour",
      "1 onion, sliced",
      "1 potato, sliced",
      "1 green chili",
      "1/2 teaspoon chili powder",
      "Fresh coriander",
      "Water",
      "Oil for frying",
      "Salt to taste"
    ],
    [
      "Mix gram flour, spices, coriander, salt, and water.",
      "Add onion, potato, and chili.",
      "Drop small portions into hot oil.",
      "Fry until crisp and golden.",
      "Drain and serve with chutney."
    ]
  ),

  createMeal(
    "Spring Rolls",
    "Snacks & Fast Food",
    "🥢",
    "35 minutes",
    "10 rolls",
    "Crispy rolls filled with stir-fried vegetables.",
    [
      "10 spring roll wrappers",
      "1 cup cabbage",
      "1 carrot",
      "1 capsicum",
      "1/2 cup noodles",
      "2 garlic cloves",
      "1 tablespoon soy sauce",
      "Oil for frying"
    ],
    [
      "Stir-fry garlic and vegetables.",
      "Add cooked noodles and soy sauce.",
      "Place the filling in wrappers.",
      "Roll and seal the edges.",
      "Deep-fry until crisp and golden.",
      "Serve with chili sauce."
    ]
  ),

  createMeal(
    "Veg Sandwich",
    "Snacks & Fast Food",
    "🥪",
    "15 minutes",
    "2 sandwiches",
    "Fresh vegetable sandwich with cheese and creamy spread.",
    [
      "4 bread slices",
      "1 tomato",
      "1 cucumber",
      "1 onion",
      "Lettuce",
      "2 cheese slices",
      "Mayonnaise",
      "Butter",
      "Salt and pepper"
    ],
    [
      "Spread butter and mayonnaise on the bread.",
      "Layer lettuce, cucumber, tomato, onion, and cheese.",
      "Season with salt and pepper.",
      "Close and toast the sandwich.",
      "Cut into triangles and serve."
    ]
  ),

  createMeal(
    "Pizza",
    "Snacks & Fast Food",
    "🍕",
    "45 minutes",
    "2 small pizzas",
    "Cheesy pizza topped with vegetables and Italian herbs.",
    [
      "2 pizza bases",
      "1/2 cup pizza sauce",
      "1 cup mozzarella cheese",
      "1 capsicum",
      "1 onion",
      "1 tomato",
      "Oregano",
      "Chili flakes"
    ],
    [
      "Spread pizza sauce over the pizza bases.",
      "Add cheese and sliced vegetables.",
      "Sprinkle oregano and chili flakes.",
      "Bake at 200°C for 12 to 15 minutes.",
      "Slice and serve hot."
    ]
  ),

  createMeal(
    "Burger",
    "Snacks & Fast Food",
    "🍔",
    "30 minutes",
    "4 burgers",
    "Classic burger with patty, salad, cheese, and sauces.",
    [
      "4 burger buns",
      "4 burger patties",
      "4 lettuce leaves",
      "1 tomato",
      "1 onion",
      "4 cheese slices",
      "Mayonnaise",
      "Ketchup"
    ],
    [
      "Cook the patties until golden and fully done.",
      "Toast the burger buns.",
      "Spread mayonnaise and ketchup.",
      "Add lettuce, tomato, onion, cheese, and patty.",
      "Close the burger and serve."
    ]
  ),

  createMeal(
    "Pasta",
    "Snacks & Fast Food",
    "🍝",
    "30 minutes",
    "4 servings",
    "Pasta tossed in a creamy tomato and herb sauce.",
    [
      "250g pasta",
      "2 cups tomato puree",
      "1 onion",
      "3 garlic cloves",
      "1/2 cup cream",
      "1 teaspoon oregano",
      "2 tablespoons olive oil",
      "Salt and pepper"
    ],
    [
      "Boil pasta in salted water.",
      "Cook onion and garlic in olive oil.",
      "Add tomato puree, oregano, salt, and pepper.",
      "Simmer for 10 minutes.",
      "Add cream and cooked pasta.",
      "Mix well and serve hot."
    ]
  ),

  createMeal(
    "Veg Noodles",
    "Snacks & Fast Food",
    "🍜",
    "25 minutes",
    "4 servings",
    "Stir-fried noodles with crunchy vegetables.",
    [
      "250g noodles",
      "1 carrot",
      "1 capsicum",
      "1 cup cabbage",
      "2 garlic cloves",
      "2 tablespoons soy sauce",
      "1 teaspoon chili sauce",
      "2 tablespoons oil"
    ],
    [
      "Boil and drain the noodles.",
      "Stir-fry garlic and vegetables.",
      "Add soy sauce, chili sauce, salt, and pepper.",
      "Add noodles and toss on high heat.",
      "Serve immediately."
    ]
  ),

  createMeal(
    "Garlic Bread",
    "Snacks & Fast Food",
    "🥖",
    "20 minutes",
    "4 servings",
    "Crispy bread spread with garlic butter and herbs.",
    [
      "1 baguette",
      "4 tablespoons butter",
      "4 garlic cloves",
      "Fresh coriander",
      "1 teaspoon oregano",
      "1/2 cup grated cheese",
      "Chili flakes"
    ],
    [
      "Mix butter, garlic, coriander, oregano, and chili flakes.",
      "Spread the mixture over the bread.",
      "Add cheese if desired.",
      "Bake at 180°C for 10 to 12 minutes.",
      "Serve warm."
    ]
  ),

  createMeal(
    "Gulab Jamun",
    "Desserts",
    "🍩",
    "45 minutes",
    "20 pieces",
    "Soft milk dumplings soaked in sweet cardamom syrup.",
    [
      "1 cup milk powder",
      "2 tablespoons flour",
      "1/2 teaspoon baking powder",
      "2 tablespoons yogurt",
      "1 cup sugar",
      "1 cup water",
      "Cardamom",
      "Oil or ghee for frying"
    ],
    [
      "Prepare syrup by boiling sugar, water, and cardamom.",
      "Mix milk powder, flour, baking powder, yogurt, and milk.",
      "Shape the dough into small balls.",
      "Deep-fry on low heat until golden.",
      "Soak the warm balls in syrup for 30 minutes."
    ]
  ),

  createMeal(
    "Rasmalai",
    "Desserts",
    "🍮",
    "60 minutes",
    "6 servings",
    "Soft cheese dumplings soaked in sweet saffron milk.",
    [
      "1 liter full-fat milk",
      "2 tablespoons lemon juice",
      "1 cup sugar",
      "Saffron strands",
      "Cardamom powder",
      "Chopped pistachios"
    ],
    [
      "Boil milk and curdle it with lemon juice.",
      "Strain and knead the chenna until smooth.",
      "Shape it into small flat balls.",
      "Cook the balls in sugar syrup.",
      "Reduce milk with sugar, saffron, and cardamom.",
      "Add the cooked balls and chill before serving."
    ]
  ),

  createMeal(
    "Chocolate Cake",
    "Desserts",
    "🍰",
    "50 minutes",
    "8 servings",
    "Soft and moist chocolate cake with rich cocoa flavor.",
    [
      "1 1/2 cups flour",
      "1 cup sugar",
      "1/2 cup cocoa powder",
      "2 eggs",
      "1/2 cup milk",
      "1/2 cup oil",
      "1 teaspoon baking powder",
      "1 teaspoon vanilla"
    ],
    [
      "Preheat the oven to 180°C.",
      "Mix flour, cocoa powder, and baking powder.",
      "Whisk eggs, sugar, milk, oil, and vanilla.",
      "Combine wet and dry ingredients.",
      "Pour into a greased cake pan.",
      "Bake for 30 to 35 minutes.",
      "Cool before slicing."
    ]
  ),

  createMeal(
    "Brownie",
    "Desserts",
    "🍫",
    "40 minutes",
    "12 pieces",
    "Rich chocolate brownies with a soft center.",
    [
      "1/2 cup melted butter",
      "1 cup sugar",
      "2 eggs",
      "1 teaspoon vanilla",
      "3/4 cup flour",
      "1/2 cup cocoa powder",
      "1/2 cup chocolate chips",
      "A pinch of salt"
    ],
    [
      "Whisk melted butter and sugar.",
      "Add eggs and vanilla.",
      "Mix flour, cocoa powder, and salt.",
      "Combine wet and dry ingredients.",
      "Fold in chocolate chips.",
      "Bake at 180°C for 20 to 25 minutes.",
      "Cool before cutting."
    ]
  ),

  createMeal(
    "Fruit Custard",
    "Desserts",
    "🍓",
    "30 minutes",
    "4 servings",
    "Creamy vanilla custard mixed with fresh fruit.",
    [
      "500ml milk",
      "3 tablespoons custard powder",
      "4 tablespoons sugar",
      "1 apple",
      "1 banana",
      "1/2 cup grapes",
      "1/2 cup mango",
      "Chopped nuts"
    ],
    [
      "Mix custard powder with a little cold milk.",
      "Heat the remaining milk with sugar.",
      "Add the custard mixture while stirring.",
      "Cook until thick.",
      "Cool the custard completely.",
      "Add chopped fruit and nuts.",
      "Chill before serving."
    ]
  )
];

const searchInput = document.querySelector("#searchInput");
const categoryButtons =
  document.querySelectorAll(".category-button");
const recipeContainer =
  document.querySelector("#recipeContainer");
const recipeCount = document.querySelector("#recipeCount");
const emptyState = document.querySelector("#emptyState");

const recipeModal = document.querySelector("#recipeModal");
const modalBody = document.querySelector("#modalBody");
const closeModal = document.querySelector("#closeModal");

let selectedCategory = "All";

function getVideoSearchUrl(meal) {
  const searchText = encodeURIComponent(
    `${meal.name} recipe cooking`
  );

  return `https://www.youtube.com/results?search_query=${searchText}`;
}

function getMealTypeLabel(meal) {
  if (meal.category === "Non-Vegetarian") {
    return "🍗 Non-Veg";
  }

  if (meal.category === "Desserts") {
    return "🍰 Sweet";
  }

  return "🌱 Veg";
}

function getFilteredMeals() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  return meals.filter(function (meal) {
    const matchesCategory =
      selectedCategory === "All" ||
      meal.category === selectedCategory;

    const searchableText = [
      meal.name,
      meal.category,
      meal.description,
      meal.ingredients.join(" "),
      meal.instructions.join(" ")
    ]
      .join(" ")
      .toLowerCase();

    return (
      matchesCategory &&
      searchableText.includes(searchTerm)
    );
  });
}

function renderMeals() {
  const filteredMeals = getFilteredMeals();

  recipeContainer.innerHTML = "";

  const mealWord =
    filteredMeals.length === 1 ? "meal" : "meals";

  recipeCount.textContent =
    `${filteredMeals.length} ${mealWord}`;

  if (filteredMeals.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  filteredMeals.forEach(function (meal) {
    const card = document.createElement("article");

    card.className = "recipe-card";

    card.innerHTML = `
      <div class="recipe-image">${meal.emoji}</div>

      <div class="recipe-info">
        <p class="recipe-category">${meal.category}</p>

        <h3>${meal.name}</h3>

        <p class="recipe-description">
          ${meal.description}
        </p>

        <div class="recipe-meta">
          <span>⏱️ ${meal.time}</span>
          <span>${getMealTypeLabel(meal)}</span>
        </div>

        <button class="view-button" type="button">
          View Recipe
        </button>
      </div>
    `;

    card
      .querySelector(".view-button")
      .addEventListener("click", function () {
        openMeal(meal);
      });

    recipeContainer.appendChild(card);
  });
}

function openMeal(meal) {
  const videoUrl = getVideoSearchUrl(meal);

  modalBody.innerHTML = `
    <div class="recipe-image">${meal.emoji}</div>

    <h2 class="modal-title">${meal.name}</h2>

    <p class="modal-subtitle">
      ${meal.category} • ${meal.time} • ${meal.servings}
    </p>

    <p class="modal-description">
      ${meal.description}
    </p>

    <section class="video-section">
      <h3>🎥 Watch the Recipe</h3>

      <p>
        Watch a step-by-step cooking video for ${meal.name}.
      </p>

      <a
        class="video-button"
        href="${videoUrl}"
        target="_blank"
        rel="noopener noreferrer">
        ▶️ Watch on YouTube
      </a>

      <p class="video-note">
        YouTube will show cooking videos for this recipe.
      </p>
    </section>

    <h3 class="ingredients-title">Ingredients</h3>

    <ul class="ingredients-list">
      ${meal.ingredients
        .map(function (ingredient) {
          return `<li>${ingredient}</li>`;
        })
        .join("")}
    </ul>

    <h3 class="instructions-title">Cooking Instructions</h3>

    <ol class="instructions-list">
      ${meal.instructions
        .map(function (step) {
          return `<li>${step}</li>`;
        })
        .join("")}
    </ol>
  `;

  recipeModal.classList.remove("hidden");
}

function closeMealModal() {
  recipeModal.classList.add("hidden");
}

searchInput.addEventListener("input", renderMeals);

categoryButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    categoryButtons.forEach(function (item) {
      item.classList.remove("active");
    });

    button.classList.add("active");
    selectedCategory = button.dataset.category;

    renderMeals();
  });
});

closeModal.addEventListener("click", closeMealModal);

recipeModal.addEventListener("click", function (event) {
  if (event.target === recipeModal) {
    closeMealModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeMealModal();
  }
});

renderMeals();