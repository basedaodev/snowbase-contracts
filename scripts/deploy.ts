import { ethers } from "hardhat";

async function main() {
  
  const weth = await ethers.getContractAt("WETH", "0x4200000000000000000000000000000000000006");
  const 

  // OHM
  // 
  console.log(
    `Lock with ${ethers.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
