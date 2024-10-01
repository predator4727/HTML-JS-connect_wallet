import { abi } from "abi/abi.js";
const { ethers } = require("ethers");

async function connect() {
    if (typeof window.ethereum !== "undefined") {
        try {
            await ethereum.request({ method: "eth_requestAccounts" });
        } catch (error) {
            console.error("User denied account access");
        }
        document.getElementById("connectButton").innerHTML = "Connected";
        const accounts = await ethereum.request({ method: "eth_accounts" });
        console.log(accounts);
    } else {
        document.getElementById("connectButton").innerHTML = "Please, install Metamask";
    }
}

async function execute() {
    // address
    // contract ABI
    // function
    // node connection
    if (typeof window.ethereum !== "undefined") {
        console.log('MetaMask is installed!');
        const contractAddress = "0x7Cf73595c831d14cD49B3785d295b78Bf83295e6";
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        try {
            await contract.setNumber(42);
        } catch (error) {
            console.error("Transaction error", error);
        }
    } else {
        console.error("Please, install Metamask");
    }



}

module.exports = {
    connect,
    execute,
};


