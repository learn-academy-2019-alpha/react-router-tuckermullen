# Top Ten Favorite Restaurants

Having gained some experience building routable components in React, the next step is to combine state and react-router to prepare us to connect components to data. Eventually, data will be served to our React applications from a Rails JSON API that we will build. For now. we will practice with a store file.

The goal of this challenge is to practice creating components that are dynamic to information it receives from state.

## User Stories

- As a user, I can see a list of links to your top ten favorite restaurants
- When I click on a restaurant link, I am taken to a detail page about that restaurant
- On a detail page, I can see the restaurant's name, location, and most popular menu item

## Stretch

- On a detail page, I can see the restaurant's three most popular menu items


### Mock Data
```Javascript
[
  {
    id: 1,
    name: 'Wendys',
    detail: 'A fast food chain created by Dave Thomas'
  },
  {
    id: 2,
    name: 'Rockin Baja Lobster',
    detail: 'A Southern California Chain for great Seafood'
  },
  {
    id: 3,
    name: 'Bubs',
    detail: 'Best sports bar in San Diego'
  }
]
```
