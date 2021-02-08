# @dazzed/ng-store

The ng-store mixes the Vuex approach to application state management and the rxjs Observables in angular modules, as store modules.

## Install

Run `@dazzed/ng-store`

## Setup Store

Run `ng generate @dazzed/ng-store:store`

## Generate Store Modules

Run `ng generate @dazzed/ng-store:module --name {entityName}`

## Update Model

Update the entity model and initial state by going tothe new module folder inside the store and to the file {entityName}.ts and on this class define properties of this entity and the initial value of each oone of them.

## Setup HTTP requests service

Go to the `actions.service.ts` inside your new store module, import the service in your app that makes the http requests and call it in the loadMethod inside this actions service.

Now you can create more actions (update, delete, create) for your entity and by calling the respective mutation you'll ahve the app state always updated.

You can also, in the `getters.service`, create more specific or filtered getters with rxjs operators from the main state of your entity and use it to have your templates always updated by interpolating the getter observable with the async pipe in your components template:

In your component's `.ts` file:

> getter$ = getters.service.getter$

In your component's template:

> {{ getter$ | async }}
