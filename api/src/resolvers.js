/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets(_, { input }, { models }) {
      const pets = models.Pet.findMany(input);
      return pets;
    },
    pet(_, { input }, { models }) {
      const pet = models.Pet.findOne(input);
      return pet;
    },
    users(_, __, { models }) {
      const users = models.User.findMany();
      return users;
    },
  },
  Mutation: {
    createPet(_, { input }, { models }) {
      const createPet = models.Pet.create(input);
      return createPet;
    },
  },
  Pet: {
    // img(pet) {
    //   return pet.type === "DOG" ? "https://placedog.net/300/300" : "http://placekitten.com/300/300";
    // },
    owner(pet, { input }, { models }) {
      const user = models.User.findOne(pet.owner);
      return user;
    },
  },
  User: {
    pets(user, _, { models }) {
      return models.Pet.findMany({ user: user.id });
    },
  },
};
