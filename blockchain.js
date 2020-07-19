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
module.exports = Blockchain;