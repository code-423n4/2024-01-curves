import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

import { type Curves } from "../contracts/types";

export const buyToken = async (contract: Curves, token: SignerWithAddress, user: SignerWithAddress, amount: number) => {
  const price = await contract.getBuyPrice(token.address, amount);
  await contract.connect(user).buyCurvesToken(token.address, amount, { value: price });
};
