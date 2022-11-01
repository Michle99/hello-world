const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

const signer = new ethers.Wallet(PRIVATE_KEY, provider);

const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main () {
    const message = await helloWorldContract.message();
    console.log("The message is: " + message);
}
main();

// console.log(JSON.stringify(contract.abi));