const moviesArr = [
    {
        "title": "The Shawshank Redemption",
        "year": 1994,
        "genres": ["Drama"],
        "rating": 9.2
    },
    {
        "title": "The Godfather",
        "year": 1972,
        "genres": ["Crime", "Drama"],
        "rating": 9.2
    },
    {
        "title": "The Dark Knight",
        "year": 2008,
        "genres": ["Action", "Crime", "Drama"],
        "rating": 9.0
    },
    {
        "title": "The Godfather: Part II",
        "year": 1974,
        "genres": ["Crime", "Drama"],
        "rating": 9.0
    },
    {
        "title": "The Lord of the Rings: The Return of the King",
        "year": 2003,
        "genres": ["Action", "Adventure", "Fantasy"],
        "rating": 9.0
    }
]
const animalsArr = [
    {
        "name": "Lion",
        "class": "Mammal",
        "diet": "Carnivore",
        "habitat": "Savannas and grasslands"
    },
    {
        "name": "Elephant",
        "class": "Mammal",
        "diet": "Herbivore",
        "habitat": "Savannas, forests, and deserts"
    },
    {
        "name": "Gorilla",
        "class": "Mammal",
        "diet": "Herbivore",
        "habitat": "Forests"
    },
    {
        "name": "Tiger",
        "class": "Mammal",
        "diet": "Carnivore",
        "habitat": "Forests, grasslands, and swamps"
    },
    {
        "name": "Kangaroo",
        "class": "Mammal",
        "diet": "Herbivore",
        "habitat": "Savannas and grasslands"
    }
]

const resolvers = {
    Query: {
        getMovies: () => moviesArr,
        getAnimals: () => animalsArr,
        getSecret: () => `🔐 SECRET: ${process.env.SECRET}`
    },
};


export { resolvers }