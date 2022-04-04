# pokedex

## Tecnologías
Para este proyecto se han utilizado las siguientes tecnologías:

- Vue.js
  - Framwork para desarrollo Front End requerido para este desarrollo.
- Vuex
  - Para el tratamiento de los datos, y los estados de la aplicación, se ha optado por trabajar con este gestor. Considerando que se ha limitado el número de datos llamados para efectos de esta applicación (a los 151 pokemon originales), está pensado para el trabajo en grandes volúmenes de datos. Junto a esto, para la persistencia de los datos se ha trabajado con este mismo gestor, guardando en localStore el listado de pokemon favoritos.
- Vuetifyjs
  - Se ha optado por esta librería UI para Vue.js con componentes predefinidos y customizables para facilitar el desarrollo de las interfaces y sus estilos.

## Componentes
Para evitar la reutilización innecesaria de código, se han implementado componentes reutilizables, modificables a través de props, en el caso de los componentes que más se utilizaron, tales como botones y listas con cards, en base a la librería Vuetify mencionada anteriormente.

## DEMO
LIVE DEMO: https://pokedex-dev-app.herokuapp.com

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
