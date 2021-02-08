# @dazzed/ng-store

The ng-store mixes the Vuex approach to application state management and the rxjs Observables in angular modules, as store modules.

Here you have the final architecture of a ng-store module:

```
app
|
|-- store
    |
    |-- store.module.ts
    |-- {entityName}
        |
        |-- actions.service.ts
        |-- getters.service.ts
        |-- mutations.service.ts
        |-- news.module.ts
        |-- {EntityName}.ts
```

Here's a quick definition of what each of that services are menat to do:

**actions**: Makes calls to the HTTP services and sends the data in the response to the associated mutation.

**mutations**: Updates or makes mutations to the current state of the entity.

**getters**: Gives you access to the entity data in the store through a rxjs _BehaviorSubject_.

## Install

Run `npm i @dazzed/ng-store`

## Setup Store

Run `ng generate @dazzed/ng-store:store`

Now you should have the main store folder structure in your app root, where you can generate the ng-store modules for all entities in your app:

```
app
|
|-- store
    |
    |-- store.module.ts
```

## Generate Store Modules

Run `ng generate @dazzed/ng-store:module --name {entityName}`

An now you should have the new entity module in the store:

```
app
|
|-- store
    |
    |-- store.module.ts
    |-- {entityName}
        |
        |-- actions.service.ts
        |-- getters.service.ts
        |-- mutations.service.ts
        |-- news.module.ts
        |-- {EntityName}.ts
```

## Update Model

Update the entity model and initial state by going to the new module folder inside the store, to the file {entityName}.ts and in this Class define the properties of this entity and the initial value of each one of them.

## Setup HTTP requests service

Go to the `actions.service.ts` inside your new store module, import the service in your app that makes the http requests and call it in the loadMethod inside this actions service.

Now you can create more actions (update, delete, create) for your entity and by calling the respective mutation you'll ahve the app state always updated.

You can also, in the `getters.service`, create more specific or filtered getters with rxjs operators from the main state of your entity and use it to have your templates always updated by interpolating the getter observable with the async pipe in your components template:

In your component's `.ts` file:

```typescript
getter$ = getters.service.getter$;
```

In your component's template:

```html
{{ getter$ | async }}
```
