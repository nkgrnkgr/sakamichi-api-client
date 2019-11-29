# sakamichi-api-client for Node.js

[Sakamichi46Api](https://github.com/kikutaro/Sakamichi46Api/blob/master/README.md) client library for Node.js.

![](https://github.com/nkgrnkgr/sakamichi-api-client/workflows/CI/badge.svg)

## Installation

```bash
$ npm i sakamichi-api-client
```

## Usage

```ts
import SakamichiApiClient from 'sakamichi-api-client';

const run = () => {
    const client = new SakamichiApiClient();
    client.getMemberProfile(
        {
            grounpName: 'nogizaka46',
            memberName: 'shiraishimai'
        })
        .then(response => {
            console.log(response.data);
        })
}

run();
```

```json
{
    "name": "白石麻衣",
    "birthday": "1992-08-20",
    "bloodType": "A",
    "constellation": "しし座",
    "profilePhotoUri": "http://img.nogizaka46.com/www/member/img/shiraishimai_prof.jpg",
    "blogUri": "http://blog.nogizaka46.com/mai.shiraishi/smph/",
    "goodsUri": "http://www.nogizaka46shop.com/msp/store/list.cgi?cno=4&cmno=45",
    "matomeUri": [
        "http://nogizaka46democracy.blog.jp/archives/cat_51850.html"
    ]
}
```

## Type definition

See [here](https://github.com/nkgrnkgr/sakamichi-api-client/blob/master/src/types.ts).

## LICENCE

MIT
