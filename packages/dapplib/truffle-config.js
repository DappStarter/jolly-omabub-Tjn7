require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture street repeat machine exchange giraffe light army gesture'; 
let testAccounts = [
"0x2ff35e5d99925a1c172acd95f87d67caaa8bc43aa67508c28267ed6398892255",
"0x077dc861ed7a7cd138b3ed235844b9ec6a3692480870a25b78c3acf6532ac22e",
"0x8941da1be1bff5517660e23c73f9cc22f04e5f493dbddb367a1b03ea57913cc2",
"0xd44eff4de5f17f0ac51b60edbb5de89990bc68faf6e7e43f643a5412a10b3ad2",
"0xc1a74caa36fdbb759c3a2f46cc7284e8d68849869b5f5515f45c180ef1d33bba",
"0x3756d1a550a9233e178d407caeb1017bb1dd20b3fbad37370222b2eef1f870ac",
"0xfbd7ff3947703914eae185725bc60ad9f13e936085cc312ac995043d541d68f8",
"0x15865acc860e551d5dddcb07467eac5efeb3e319b795cfedcc4e2241ce62e214",
"0x18fd53a4325bc1dbaa2828e24ab4527ff209f2d4314acbdaf3b37bc734eb6325",
"0x27ab4b71ee3e6a3ea34bc2ef7a762506100b69072f9c7318d1a59b340ca44174"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


