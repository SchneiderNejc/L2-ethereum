const hre = require("hardhat");

// Parameters setup
async function main() {
  const greeter = await hre.ethers.deployContract("Greeter");
  await greeter.waitForDeployment();
  console.log(`greeter deployed to ${greeter.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
