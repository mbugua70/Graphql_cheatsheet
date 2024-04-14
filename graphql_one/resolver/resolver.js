import db from '../data/_data.js';

export const resolvers =  {
    Query:  {
        reviews() {
         return db.reviews
        },
        games() {
            return db.games
        },
        authors() {
            return db.authors
        },
        // single data
        review(_, args){
         return db.reviews.find((single) => single.id === args.id)
        },
        game(_, args) {
            return db.games.find((single) => single.id === args.id)
        },
        author(_, args) {
            return db.authors.find((single) => single.id === args.id)
        }
    },
    Game: {
      reviews(parent) {
        return db.reviews.filter((r) => r.game_id  === parent.id)
      }
    },
    Author: {
        reviews(parent) {
         return db.reviews.filter((a) => a.author_id === parent.id)
        }
    },
    Review: {
       author(parent) {
         return db.authors.find((single) => single.id === parent.author_id)
       },
       game(parent){
        return db.games.find((single) => single.id === parent.game_id)
       }
    },
    Mutation: {
    deleteGame(_, args){
        db.games = db.games.filter((g) => g.id !== args.id )
        return db.games
    },
    addGame(_, args) {
    let game = {
        ...args.game,
        id: Math.floor(Math.random() * 1000).toString()
    }
    db.games.push(game)
    return game
    }
    }
}