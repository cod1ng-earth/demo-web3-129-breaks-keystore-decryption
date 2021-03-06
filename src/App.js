import React, { useState } from 'react';
import Web3 from 'web3';
const KEYSTORE = `
[
  {
    "version": 3,
    "id": "cd3f55c7-b84d-4708-956a-23725971c7e3",
    "address": "cc9967fa5b8185354492da1ac2d40da092366a8f",
    "crypto": {
      "ciphertext": "6c8b5a914daaa840ae4589fdc970946bd588f339e3c7d947fc074ad0bf2cc06f",
      "cipherparams": {
        "iv": "7403a6cb6d5685d92e536efd324d40f2"
      },
      "cipher": "aes-128-ctr",
      "kdf": "scrypt",
      "kdfparams": {
        "dklen": 32,
        "salt": "68b700715a3e4fe85c5aae7b62094cf2856b2f4b5546f0c2b0e7f1124f7c7162",
        "n": 8192,
        "r": 8,
        "p": 1
      },
      "mac": "d89c36cbe31f3046688fc3b97f77129edd6766b57b2f49457a1ff445c54bdd7f"
    }
  }
]`

function App() {

  const [pk,setPk] =  useState("")

  function testBuffers() {
    const buf1 = new Uint8Array([1,2,3,4]);
    const buf2 = new Uint8Array([5,6,7,8]);
    
    //won't work in react like this.
    //const res = Buffer.concat([buf1, buf2]);

    const ciphertext = Buffer.from("1234567890", 'hex');

    //this works: 
    const res2 = Uint8Array.from([...buf1, ...ciphertext]);
    console.log (Buffer.from(res2));
  }

  function decryptWallet() {
    const web3 = new Web3();
    const jsonKeystore = JSON.parse(KEYSTORE);
    const res = web3.eth.accounts.wallet.decrypt(jsonKeystore, "test");
    setPk(res[0].privateKey);
  }

  return (
    <div className="App">
      <button onClick={decryptWallet}>decrypt it</button>
      <button onClick={testBuffers}>test buffers</button>
      <p>{pk}</p>
    </div>
  );
}

export default App;
