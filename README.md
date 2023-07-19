# Project SRV
#### Instruções executadas:
*  Instalando nextjs versão 13
```
npx create-next-app --use-yarn sistema_reserva_viagens
``` 
![Alt text](image.png)

* Instalando Prisma como dev dependencia
OBS: Navegar até a pasta do projeto: cd sistema ```cd sistema_reserva_viagens```

Instalando Prisma:
```
yarn add -D prisma
```

* Inicializando o prisma como postgre (datasource)
```
npx prisma init --datasource-provider postgresql
```
* Adicionando prettier
```
yarn add -d prettier
```
* Fazendo a Migration no banco:
```
npx prisma migrate dev --name init
```

Erro ao encontrar o prismaclient execute
```
yarn add @prisma/client
```
Instalando next-auth
```
yarn add next-auth 
```
Instalando dependencia que adapta o next auth ao prisma:
```
yarn add @auth/prisma-adapter
```
Instalando icones react:
```
 yarn add react-icon
```