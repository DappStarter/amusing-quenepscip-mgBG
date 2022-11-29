require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh spot toy note shift protect hover clog broom shuffle'; 
let testAccounts = [
"0xf3ffee82bf1b305cf5f71b1b64122eafedf7196b8cded59debc6c563a4601af5",
"0xbbc74c5ce9c393c144e85eeea1857a85d1ed5ecd0f82195a743eedf27d0efb23",
"0xe2969afc0e5c251ba86ac4eb79a99accd1139fe33a6ba4386b9c2d5f31755b56",
"0xd2ef637b627b2e4b85e57bf3f29ff472040c4428bfb5b51eaa0f5ac66a2d427f",
"0x910ff1dbcd913730d82f1226d4e2580f263b9e4afa3deb5f2f5d4e20b533f8c3",
"0xfaf8ba400ed55f009bcf624858e277232548a95ad1da022506fa40706a5151df",
"0xb8a2dff81f8026ed96bcd50491800e31659f2b2e7cf334ab1aa0e0e35f9721d1",
"0xd433edce3634dbfac381b5d27d30eb6fcdf0029b6e6a1befac2f4714041bf225",
"0xad649f7158f176aa66b9b58f0678d7e2b54c4ee25840f8119d9b7b20ff4b0fa9",
"0x5c6316289d696b2e0796e11b73e85bd3c37477962dc84adb4bd23d1d91957896"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

