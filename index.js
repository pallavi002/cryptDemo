const sha256 = require('sha256');

function Blockchain() {
  this.chain = [];
  this.newTransactions = [];
}

Blockchain.prototype.createNewBlock = function (hashOfBlock, previousHash, nonceOfBlock) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.newTransactions,
    hash: hashOfBlock,
    previousBlockHash: previousHash,
    nonce: nonceOfBlock
  };
  this.chain.push(newBlock);
  return newBlock;
}


Blockchain.prototype.createNewTransaction = function (amount, sender, recipient) {
  const newTransaction = {
    amount: amount,
    sender: sender,
    recipient: recipient
  }
  this.chain.push(newTransaction);
  return newTransaction;
}

Blockchain.prototype.hashBlock = function (previousBlockHash, currentBlockData, nonce) {
  const dataAsString = previousBlockHash + nonce.toString()+JSON.stringify(currentBlockData);
  const hash=sha256(dataAsString);
  return hash;
}

const bitcoin = new Blockchain();

const previousHash = '23986yasjdasudyr326gyajs123244'

var currentBlockData = [
  {
    "sender": "Ravi",
    "recipient": "Revanth",
    "amount": 15000,
  },
  {
    "sender": "Shyam",
    "recipient": "Ram",
    "amount": 34500
  }
];

const nonce = 7890;
console.log(bitcoin.hashBlock(previousHash,currentBlockData,nonce));
var newBlock = bitcoin.createNewBlock('asdhujg677rsdmsdadb', '23986yasjdasudyr326gyajsd', 7890);

var newTransaction = bitcoin.createNewTransaction(345666, 'Ravi', 'Revanth');
var newTransaction = bitcoin.createNewTransaction(34123, 'Shyam', 'Ram');
console.log(bitcoin);
