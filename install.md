# Curves

Smart contracts built for Curves

# Instalation

`yarn`

### VSCode

VSCode is not familiar with the solidity language, so [`solidity support`](https://marketplace.visualstudio.com/items?itemName=NomicFoundation.hardhat-solidity) needs to be installed.

Having done that you should proceed to install [`prettier-vscode`](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

```Bash
code --install-extension esbenp.prettier-vscode
```

# Update generated code

```Bash
npx hardhat compile
yarn generate:abi
yarn generate:typechain
```

# Test

Run test:

```
npx hardhat test
```

# Run localhost

To run on localhost you should first start local node and then deploy to it

```
npx hardhat node
npx hardhat run deployment/deploy-dev.ts --network localhost
```

# Run console

ex: get addr balance

```
npx hardhat console --network localhost
const value = await ethers.provider.getBalance("0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9")
value.toString()
```

# Deploy

Deploy to any network is the same. After each deploy you can find the Json file with the Abi and address information.
Be sure you set the right values on .env

```
npx hardhat run deployment/deploy-dev.ts --network goerli
```

or

```
npx hardhat run deployment/deploy-prod.ts --network mainnet
```

# Verify on chain

Run this command with the address and the argument used when created

```
npx hardhat verify --network mainnet DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1"
```

More info: https://hardhat.org/plugins/nomiclabs-hardhat-etherscan.html

[//]: <> (npx hardhat verify --network mainnet 0xa7C098E26cbd9aAA515dF140d7020fB46a98be37 "Constructor argument 1"
npx hardhat verify --network mainnet --constructor-args arguments.js 0xa7C098E26cbd9aAA515dF140d7020fB46a98be37)

# Count lines

First install cloc

```Bash
brew install cloc
```

Then count the lines

```
echo Contract lines

cloc ./contracts --by-file --exclude-ext="ts","json" --not-match-d="test" node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol node_modules/@openzeppelin/contracts/security/ReentrancyGuard.sol node_modules/@openzeppelin/contracts/utils/cryptography/MerkleProof.sol node_modules/@openzeppelin/contracts/access/AccessControl.sol node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol node_modules/@openzeppelin/contracts/utils/Strings.sol node_modules/@openzeppelin/contracts/utils/Context.sol node_modules/@openzeppelin/contracts/access/IAccessControl.sol
```

# Static validation

This code was testing using slither.

```
slither . --filter-paths "contracts/test/|node_modules/" --exclude naming-convention
```

# Test coverage

For test coverage we use `solidity-coverage` and it's already included in package.json.
To run test coverage you should execute

```
npx hardhat coverage
```

# Local node
## How to run it
Create the docker image with `docker build -t hardhat-node .`
Run the image `docker run --env-file .env -p 8545:8545 hardhat-node`

## Relevant addresses
Deployer wallet: 0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1
Deployer wallet pk: 0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d
CurvesERC20Factory: 0xe78a0f7e598cc8b0bb87894b0f60dd2a88d6a8ab
Curves: 0x5b1869d9a4c187f2eaa108f3062412ecf0526b24


## Wallets info
Account #0: 0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1 (100 ETH)
Private key: 0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d

Account #1: 0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0 (110 ETH)
Private key: 0x6cbed15c793ce57650b9877cf6fa156fbef513c4e6134f022a85b1ffdd59b2a1

Account #2: 0x22d491Bde2303f2f43325b2108D26f1eAbA1e32b (120 ETH)
Private key: 0x6370fd033278c143179d81c5526140625662b8daa446c22ee2d73db3707e620c

Account #3: 0xE11BA2b4D45Eaed5996Cd0823791E0C93114882d (130 ETH)
Private key: 0x646f1ce2fdad0e6deeeb5c7e8e5543bdde65e86029e2fd9fc169899c440a7913

Account #4: 0xd03ea8624C8C5987235048901fB614fDcA89b117 (140 ETH)
Private key: 0xadd53f9a7e588d003326d1cbf9e4a43c061aadd9bc938c843a79e7b4fd2ad743

Account #5: 0x95cED938F7991cd0dFcb48F0a06a40FA1aF46EBC (150 ETH)
Private key: 0x395df67f0c2d2d9fe1ad08d1bc8b6627011959b79c53d7dd6a3536a33ab8a4fd

## Block Explorer
The docker is connected to Ethernal (https://app.tryethernal.com/). You can sigup for free and under settings you can generate an api key. Then write it down in the config file:
```
ETHERNAL_EMAIL=xxx@xxx.com
ETHERNAL_API_TOKEN=xxx
```

## Metamask
To connect metamask to use the explorer you should setup the local chain.
Go to Settings -> Network -> Add Network -> Add a network manually
And then use this config:
Network name: Local
New RPC URL: http://127.0.0.1:8545
Chain ID: 1337
Currency symbol: ETH
Block explorer URL: This can be empty

## How to interact
To interact with the contract you should follow this link
https://app.tryethernal.com/contract/0xe78a0f7e598cc8b0bb87894b0f60dd2a88d6a8ab?tab=interactions