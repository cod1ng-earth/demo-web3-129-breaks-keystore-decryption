### Web3 1.2.9

breaks the wallet.keystore decryption **in React** because of some effect after switching from `@web3-js/scrypt-shim` to `scrypt-js`: https://github.com/ethereum/web3.js/compare/v1.2.8...v1.2.9#diff-7bb2a20126193b9ecfe4723f83429c49L33

that seems to be a side effect of `node_modules/node-libs-browser/node_modules/buffer/index.js:399` that explicity checks that a `Buffer` is a Buffer and not an

error message is  
`TypeError: "list" argument must be an Array of Buffers`

### try it

```
yarn
yarn remove web3
yarn add web3@1.2.8
yarn run start #works;
yarn remove web3
yarn add web3@1.2.9
yarn run start #breaks;
yarn remove web3
(npm i -g lerna)
yarn add web3@https://github.com/ethereum/web3.js.git#1.x
yarn run start #works

```

### see it works on 1.2.8

change web3 dependency to 1.2.8 in package.json and run again

### doesn't happen in plain JS:

```
cp node_modules/web3/dist/web3.min.js public/web3.min.js
yarn build
serve -s build
http://localhost:3000/plain.html #works

```

### fixed in web3.js

https://github.com/ethereum/web3.js/commit/d6bdafd73be901bd280d17d4126d25ffa23da556
https://github.com/ethereum/web3.js/issues/3580
