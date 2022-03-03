const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFTMARKET", function () {
  it("Should create market Item", async function () {

  const Market = await hre.ethers.getContractFactory("NFTMarket");
  const market =await Market.deploy();
  await market.deployed();   

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft =await NFT.deploy(market.address);
  await nft.deployed(); 
  const nftContractAddress = nft.address;
  
  const auctionPrice = ethers.utils.parseUnits("1", "ether");

  await nft.createToken("https://www.mytokenlocation.com")
  await nft.createToken("https://www.mytokenlocation2.com") 
  await nft.createToken("https://gateway.pinata.cloud/ipfs/QmcT8VmrFw9scDqZKYCGnz9kQ9CBYed3JfWFt1qDHRr66w")
  await nft.createToken("https://gateway.pinata.cloud/ipfs/QmcT8VmrFw9scDqZKYCGnz9kQ9CBYed3JfWFt1qDHRr66w")

  await market.createMarketItem(nftContractAddress, 1, auctionPrice)
  await market.createMarketItem(nftContractAddress, 2, auctionPrice) 
  await market.createMarketItem(nftContractAddress, 3, auctionPrice) 
  await market.createMarketItem(nftContractAddress, 4, auctionPrice) 

  const [_, buyerAddress, thirdAddress] = await ethers.getSigners()
  console.log(buyerAddress)
  await market.connect(buyerAddress).buyNft(nftContractAddress, 1, { value: auctionPrice})
  await market.connect(buyerAddress).buyNft(nftContractAddress, 2, { value: auctionPrice})
 
  let items = await market.fetchMarketItems();
  let myItem = await market.fetchMyNFTs(buyerAddress.address)
  console.log("items", myItem)
  let gifttx = await market.connect(buyerAddress).giftNft(nftContractAddress, thirdAddress.address,2);
  
  });
});