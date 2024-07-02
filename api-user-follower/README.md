
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## documentation 

Api em nest para registrar e deletar seguidores, alem de buscar seguidores e seguindo na base de dados, a utilizada foi mongo.

# create user
    <host>/user/create
    body:
      {
        "name": string,
        "email": string,
        "user": string,
        "description": string
      }

# register follow
    <host>/<user>/follow/<user>

# delete follow
    <host>/<user>/unfollow/<user>

# get followers
    <host>/followers/user/<user>

# get following
    <host>/following/user/<user>

