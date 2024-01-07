# Curves

Smart contracts built for Curves

# Scoping detail

The audit will encompass the following files, each integral to the functioning of the protocol:

1. **Curves.sol**: This is the primary file of the Curves protocol. It contains the core logic and functions that define the overall behavior and rules of the system. This file started as a fork of friend.tech FriendtechSharesV1.sol

2. **CurvesERC20.sol**: This file defines the ERC20 token that will be created upon exporting a Curve token. It outlines the token's properties and behaviors consistent with the ERC20 standard.

3. **CurvesERC20Factory.sol**: Serving as an ERC20 factory, this file abstracts the logic for ERC20 token creation. Its primary purpose is to streamline the token creation process and reduce the overall footprint of the protocol, ensuring efficiency and scalability.

4. **FeeSplitter.sol**: This script manages the distribution of fees. It is responsible for the fair and accurate division of transaction fees amongst token holders, in line with the protocol's incentive structure.

5. **Security.sol**: This file standardizes the security criteria for the protocol. It includes protocols and measures designed to safeguard the system against vulnerabilities and ensure compliance with established security standards.

Each of these files plays a crucial role in the protocol’s architecture and functionality. The audit will methodically evaluate them for security, efficiency, and adherence to best practices in smart contract development.

# Summary

The Curves protocol, an extension of friend.tech, introduces several innovative features. For context on friend.tech, consider this insightful article: [Friend Tech Smart Contract Breakdown](https://medium.com/valixconsulting/friend-tech-smart-contract-breakdown-c5588ae3a1cf). Key enhancements in the Curves protocol include:

1. Token Export to ERC20: This pivotal feature allows users to transfer their tokens from the Curves protocol to the ERC20 format. Such interoperability significantly expands usability across various platforms. Within Curves, tokens lack decimal places, but when converted to ERC20, they adopt a standard 18-decimal format. Importantly, users can seamlessly reintegrate their ERC20 tokens into the Curves ecosystem, albeit only as whole, integer units.

2. Referral Fee Implementation: Curves empowers protocols built upon its framework by enabling them to earn a percentage of all user transaction fees. This incentive mechanism benefits both the base protocol and its derivative platforms.

3. Presale Feature: Learning from the pitfalls of friend.tech, particularly issues with frontrunners during token launches, Curves incorporates a presale phase. This allows creators to manage and stabilize their tokens prior to public trading, ensuring a more controlled and equitable distribution.

4. Token Holder Fee: To encourage long-term holding over short-term trading, Curves introduces a fee distribution model that rewards token holders. This fee is proportionally divided among all token holders, incentivizing sustained investment in the ecosystem.

These additions by Curves not only enhance functionality but also foster a more robust and inclusive financial ecosystem.

# Documentation
There's no official friend.tech documentation but there's a lot of great articles. Here you can find some of them:

[Friend Tech Smart Contracts](https://basescan.org/address/0xcf205808ed36593aa40a44f10c7f7c2f67d4a4d4#code). 

[Friend Tech Smart Contract Breakdown](https://medium.com/valixconsulting/friend-tech-smart-contract-breakdown-c5588ae3a1cf). 

[Understanding Friend Tech through Smart Contracts](https://ada-d.medium.com/understanding-friend-tech-through-smart-contracts-edac5d98cd49). 

# Instalation

`yarn`

### VSCode

VSCode is not familiar with the solidity language, so [`solidity support`](https://marketplace.visualstudio.com/items?itemName=NomicFoundation.hardhat-solidity) needs to be installed.

Having done that you should proceed to install [`prettier-vscode`](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

```Bash
code --install-extension esbenp.prettier-vscode
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

