# Ngx Erp
- Lazy loading feature modules


## Init
```
ng new ngx-erp --style=scss --package-manager=yarn --routing --defaults
```

## Yarn 2 Migration
```shell
yarn set version berry
```

.gitignore
```text
# Yarn 2 not Zero installs
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
```

```shell
yarn install
```

## Run
```shell
yarn run start
```

## Angular Material
```shell
ng add @angular/material
```

## Add new feature module
```
ng generate module <module>
```

## Add new component
```
ng generate component <module>/components/<component>
```
