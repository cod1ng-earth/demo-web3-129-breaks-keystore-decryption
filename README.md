### Web3 1.2.9

breaks the wallet.keystore decryption because of some effect after switching from `@web3-js/scrypt-shim` to `scrypt-js`: https://github.com/ethereum/web3.js/compare/v1.2.8...v1.2.9#diff-7bb2a20126193b9ecfe4723f83429c49L33

error message is  
`TypeError: "list" argument must be an Array of Buffers`

### try it

```
yarn
yarn run start
```

### see it works on 1.2.8

change web3 dependency to 1.2.8 in package.json and run again
