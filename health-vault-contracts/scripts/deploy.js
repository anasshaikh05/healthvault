require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {},
  },
};
async function main() {
  const HealthVault = await ethers.getContractFactory("HealthVault");
  const healthVault = await HealthVault.deploy();

  await healthVault.deployed();

  console.log("HealthVault deployed to:", healthVault.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
