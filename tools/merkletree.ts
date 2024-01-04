import { utils } from "ethers";
import { MerkleTree } from "merkletreejs";

export const createMerkleTree = (addresses: string[]) => {
  const leaves = addresses.map((x) => utils.keccak256(x));
  return new MerkleTree(leaves, utils.keccak256, { sortPairs: true });
};

export const getProof = (tree: any, address: string) => {
  const leaf = utils.keccak256(address);
  //@ts-ignore
  return tree.getProof(leaf).map((m) => m.data);
};

export const getRoot = (tree: any) => {
  return "0x" + tree.getRoot().toString("hex");
};
