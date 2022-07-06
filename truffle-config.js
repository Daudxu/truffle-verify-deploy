const HDWalletProvider = require("@truffle/hdwallet-provider");
// const Web3 = require("web3");
const mnemonicPhrase = 'absorb cave cart day treat tattoo state napkin meat jealous hurt stadium'
module.exports = {
  compilers: {
    solc: {
        version: "^0.8.2", 
      }
    },
    plugins: [
      'truffle-plugin-verify'
    ],
    api_keys: {
      etherscan: ""
    },
    networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    test: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    rinkeby: {
      // must be a thunk, otherwise truffle commands may hang in CI
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: mnemonicPhrase
          },
          providerOrUrl: "https://rinkeby.infura.io/v3/fe4b3cd922484bd084c50da206d64cb6",
          numberOfAddresses: 1,
          shareNonce: true,
          derivationPath: "m/44'/60'/0'/0/"
          // derivationPath: "m/44'/1'/0'/0/"
        }),
      network_id: '4',
    },
    ropsten: {
      // must be a thunk, otherwise truffle commands may hang in CI
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: mnemonicPhrase
          },
          providerOrUrl: "https://ropsten.infura.io/v3/fe4b3cd922484bd084c50da206d64cb6",
          numberOfAddresses: 1,
          shareNonce: true,
          derivationPath: "m/44'/60'/0'/0/"
          // derivationPath: "m/44'/1'/0'/0/"
        }),
      network_id: '3',
    },
},
  //
  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows:
  // $ truffle migrate --reset --compile-all
  //
  // db: {
    // enabled: false,
    // host: "127.0.0.1",
    // adapter: {
    //   name: "sqlite",
    //   settings: {
    //     directory: ".db"
    //   }
    // }
  // }
};
