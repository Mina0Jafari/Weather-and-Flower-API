import algosdk from "algosdk";

const algodToken = "a".repeat(64);
const server: string = "http://localhost";
const port: string = "4001";
const mnemonic: string =
"isolate unhappy trim isolate horn remind cousin abstract ride ask sun grid cigar exercise rookie spot hub capable cactus ripple citizen pond report abstract focus";

export function getClient(): algosdk.Algodv2 {
let client = new algosdk.Algodv2(algodToken, server, port);
return client;
}
export function getAccount(): algosdk.Account {
let account = algosdk.mnemonicToSecretKey(mnemonic);
return account;
}
