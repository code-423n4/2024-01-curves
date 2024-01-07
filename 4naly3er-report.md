# Report


## Gas Optimizations


| |Issue|Instances|
|-|:-|:-:|
| [GAS-1](#GAS-1) | Using bools for storage incurs overhead | 1 |
| [GAS-2](#GAS-2) | Cache array length outside of loop | 4 |
| [GAS-3](#GAS-3) | For Operations that will not overflow, you could use unchecked | 112 |
| [GAS-4](#GAS-4) | Don't initialize variables with default value | 6 |
| [GAS-5](#GAS-5) | Functions guaranteed to revert when called by normal users can be marked `payable` | 10 |
| [GAS-6](#GAS-6) | `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too) | 4 |
| [GAS-7](#GAS-7) | Using `private` rather than `public` for constants, saves gas | 2 |
| [GAS-8](#GAS-8) | Use != 0 instead of > 0 for unsigned integer comparison | 6 |
### <a name="GAS-1"></a>[GAS-1] Using bools for storage incurs overhead
Use uint256(1) and uint256(2) for true/false to avoid a Gwarmaccess (100 gas), and to avoid Gsset (20000 gas) when changing from ‘false’ to ‘true’, after having been ‘true’ in the past. See [source](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/58f635312aa21f947cae5f8578638a85aa2519f5/contracts/security/ReentrancyGuard.sol#L23-L27).

*Instances (1)*:
```solidity
File: contracts/Security.sol

6:     mapping(address => bool) public managers;

```

### <a name="GAS-2"></a>[GAS-2] Cache array length outside of loop
If not cached, the solidity compiler will always read the length of the array during each iteration. That is, if it is a storage array, this is an extra sload operation (100 additional extra gas for each iteration except for the first) and if it is a memory array, this is an extra mload operation (3 additional gas for each iteration except for the first).

*Instances (4)*:
```solidity
File: contracts/Curves.sol

305:         for (uint256 i = 0; i < subjects.length; i++) {

330:         for (uint256 i = 0; i < subjects.length; i++) {

```

```solidity
File: contracts/FeeSplitter.sol

55:         for (uint256 i = 0; i < tokens.length; i++) {

105:         for (uint256 i = 0; i < tokenList.length; i++) {

```

### <a name="GAS-3"></a>[GAS-3] For Operations that will not overflow, you could use unchecked

*Instances (112)*:
```solidity
File: contracts/Curves.sol

4: import "@openzeppelin/contracts/utils/Strings.sol";

4: import "@openzeppelin/contracts/utils/Strings.sol";

4: import "@openzeppelin/contracts/utils/Strings.sol";

5: import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

5: import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

5: import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

5: import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

7: import "./CurvesERC20.sol";

8: import "./CurvesERC20Factory.sol";

10: import "./FeeSplitter.sol";

11: import "./Security.sol";

119:             feesEconomics.protocolFeePercent +

120:                 feesEconomics.subjectFeePercent +

121:                 feesEconomics.referralFeePercent +

130:             protocolFeePercent_ +

131:                 feesEconomics.subjectFeePercent +

132:                 feesEconomics.referralFeePercent +

147:             feesEconomics.protocolFeePercent + subjectFeePercent_ + referralFeePercent_ + holdersFeePercent_ >

147:             feesEconomics.protocolFeePercent + subjectFeePercent_ + referralFeePercent_ + holdersFeePercent_ >

147:             feesEconomics.protocolFeePercent + subjectFeePercent_ + referralFeePercent_ + holdersFeePercent_ >

173:         protocolFee = (price * feesEconomics.protocolFeePercent) / 1 ether;

173:         protocolFee = (price * feesEconomics.protocolFeePercent) / 1 ether;

174:         subjectFee = (price * feesEconomics.subjectFeePercent) / 1 ether;

174:         subjectFee = (price * feesEconomics.subjectFeePercent) / 1 ether;

175:         referralFee = (price * feesEconomics.referralFeePercent) / 1 ether;

175:         referralFee = (price * feesEconomics.referralFeePercent) / 1 ether;

176:         holdersFee = (price * feesEconomics.holdersFeePercent) / 1 ether;

176:         holdersFee = (price * feesEconomics.holdersFeePercent) / 1 ether;

177:         totalFee = protocolFee + subjectFee + referralFee + holdersFee;

177:         totalFee = protocolFee + subjectFee + referralFee + holdersFee;

177:         totalFee = protocolFee + subjectFee + referralFee + holdersFee;

181:         uint256 sum1 = supply == 0 ? 0 : ((supply - 1) * (supply) * (2 * (supply - 1) + 1)) / 6;

181:         uint256 sum1 = supply == 0 ? 0 : ((supply - 1) * (supply) * (2 * (supply - 1) + 1)) / 6;

181:         uint256 sum1 = supply == 0 ? 0 : ((supply - 1) * (supply) * (2 * (supply - 1) + 1)) / 6;

181:         uint256 sum1 = supply == 0 ? 0 : ((supply - 1) * (supply) * (2 * (supply - 1) + 1)) / 6;

181:         uint256 sum1 = supply == 0 ? 0 : ((supply - 1) * (supply) * (2 * (supply - 1) + 1)) / 6;

181:         uint256 sum1 = supply == 0 ? 0 : ((supply - 1) * (supply) * (2 * (supply - 1) + 1)) / 6;

181:         uint256 sum1 = supply == 0 ? 0 : ((supply - 1) * (supply) * (2 * (supply - 1) + 1)) / 6;

184:             : ((supply - 1 + amount) * (supply + amount) * (2 * (supply - 1 + amount) + 1)) / 6;

184:             : ((supply - 1 + amount) * (supply + amount) * (2 * (supply - 1 + amount) + 1)) / 6;

184:             : ((supply - 1 + amount) * (supply + amount) * (2 * (supply - 1 + amount) + 1)) / 6;

184:             : ((supply - 1 + amount) * (supply + amount) * (2 * (supply - 1 + amount) + 1)) / 6;

184:             : ((supply - 1 + amount) * (supply + amount) * (2 * (supply - 1 + amount) + 1)) / 6;

184:             : ((supply - 1 + amount) * (supply + amount) * (2 * (supply - 1 + amount) + 1)) / 6;

184:             : ((supply - 1 + amount) * (supply + amount) * (2 * (supply - 1 + amount) + 1)) / 6;

184:             : ((supply - 1 + amount) * (supply + amount) * (2 * (supply - 1 + amount) + 1)) / 6;

184:             : ((supply - 1 + amount) * (supply + amount) * (2 * (supply - 1 + amount) + 1)) / 6;

184:             : ((supply - 1 + amount) * (supply + amount) * (2 * (supply - 1 + amount) + 1)) / 6;

185:         uint256 summation = sum2 - sum1;

186:         return (summation * 1 ether) / 16000;

186:         return (summation * 1 ether) / 16000;

194:         return getPrice(curvesTokenSupply[curvesTokenSubject] - amount, amount);

201:         return price + totalFee;

208:         return price - totalFee;

230:                 uint256 buyValue = referralDefined ? protocolFee : protocolFee + referralFee;

231:                 uint256 sellValue = price - protocolFee - subjectFee - referralFee - holderFee;

231:                 uint256 sellValue = price - protocolFee - subjectFee - referralFee - holderFee;

231:                 uint256 sellValue = price - protocolFee - subjectFee - referralFee - holderFee;

231:                 uint256 sellValue = price - protocolFee - subjectFee - referralFee - holderFee;

259:             isBuy ? supply + amount : supply - amount

259:             isBuy ? supply + amount : supply - amount

270:         if (msg.value < price + totalFee) revert InsufficientPayment();

272:         curvesTokenBalance[curvesTokenSubject][msg.sender] += amount;

273:         curvesTokenSupply[curvesTokenSubject] = supply + amount;

277:         if (curvesTokenBalance[curvesTokenSubject][msg.sender] - amount == 0) {

287:         uint256 price = getPrice(supply - amount, amount);

289:         curvesTokenBalance[curvesTokenSubject][msg.sender] -= amount;

290:         curvesTokenSupply[curvesTokenSubject] = supply - amount;

305:         for (uint256 i = 0; i < subjects.length; i++) {

305:         for (uint256 i = 0; i < subjects.length; i++) {

321:         curvesTokenBalance[curvesTokenSubject][from] = curvesTokenBalance[curvesTokenSubject][from] - amount;

322:         curvesTokenBalance[curvesTokenSubject][to] = curvesTokenBalance[curvesTokenSubject][to] + amount;

330:         for (uint256 i = 0; i < subjects.length; i++) {

330:         for (uint256 i = 0; i < subjects.length; i++) {

345:             _curvesTokenCounter += 1;

414:         presalesBuys[curvesTokenSubject][msg.sender] += amount;

487:         CurvesERC20(externalToken).mint(msg.sender, amount * 1 ether);

494:         uint256 tokenAmount = amount / 1 ether;

508:         sellCurvesToken(curvesTokenSubject, amount / 1 ether);

```

```solidity
File: contracts/CurvesERC20.sol

4: import "@openzeppelin/contracts/access/Ownable.sol";

4: import "@openzeppelin/contracts/access/Ownable.sol";

4: import "@openzeppelin/contracts/access/Ownable.sol";

5: import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

5: import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

5: import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

5: import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

```

```solidity
File: contracts/CurvesERC20Factory.sol

4: import "./CurvesERC20.sol";

```

```solidity
File: contracts/FeeSplitter.sol

4: import "./Curves.sol";

5: import "./Security.sol";

7: import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

7: import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

7: import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

7: import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

40:         return curves.curvesTokenBalance(token, account) * PRECISION;

45:         return (curves.curvesTokenSupply(token) - curves.curvesTokenBalance(token, address(curves))) * PRECISION;

45:         return (curves.curvesTokenSupply(token) - curves.curvesTokenBalance(token, address(curves))) * PRECISION;

55:         for (uint256 i = 0; i < tokens.length; i++) {

55:         for (uint256 i = 0; i < tokens.length; i++) {

67:             uint256 owed = (data.cumulativeFeePerToken - data.userFeeOffset[account]) * balance;

67:             uint256 owed = (data.cumulativeFeePerToken - data.userFeeOffset[account]) * balance;

68:             data.unclaimedFees[account] += owed / PRECISION;

68:             data.unclaimedFees[account] += owed / PRECISION;

76:         uint256 owed = (data.cumulativeFeePerToken - data.userFeeOffset[account]) * balance;

76:         uint256 owed = (data.cumulativeFeePerToken - data.userFeeOffset[account]) * balance;

77:         return (owed / PRECISION) + data.unclaimedFees[account];

77:         return (owed / PRECISION) + data.unclaimedFees[account];

93:         data.cumulativeFeePerToken += (msg.value * PRECISION) / totalSupply_;

93:         data.cumulativeFeePerToken += (msg.value * PRECISION) / totalSupply_;

93:         data.cumulativeFeePerToken += (msg.value * PRECISION) / totalSupply_;

105:         for (uint256 i = 0; i < tokenList.length; i++) {

105:         for (uint256 i = 0; i < tokenList.length; i++) {

111:                 totalClaimable += claimable;

```

### <a name="GAS-4"></a>[GAS-4] Don't initialize variables with default value

*Instances (6)*:
```solidity
File: contracts/Curves.sol

47:     uint256 private _curvesTokenCounter = 0;

305:         for (uint256 i = 0; i < subjects.length; i++) {

330:         for (uint256 i = 0; i < subjects.length; i++) {

```

```solidity
File: contracts/FeeSplitter.sol

55:         for (uint256 i = 0; i < tokens.length; i++) {

104:         uint256 totalClaimable = 0;

105:         for (uint256 i = 0; i < tokenList.length; i++) {

```

### <a name="GAS-5"></a>[GAS-5] Functions guaranteed to revert when called by normal users can be marked `payable`
If a function modifier such as `onlyOwner` is used, the function will revert if a normal user tries to pay the function. Marking the function as `payable` will lower the gas cost for legitimate callers because the compiler will not include checks for whether a payment was provided.

*Instances (10)*:
```solidity
File: contracts/Curves.sol

113:     function setFeeRedistributor(address feeRedistributor_) external onlyOwner {

117:     function setMaxFeePercent(uint256 maxFeePercent_) external onlyManager {

128:     function setProtocolFeePercent(uint256 protocolFeePercent_, address protocolFeeDestination_) external onlyOwner {

162:     function setERC20Factory(address factory_) external onlyOwner {

439:     function mint(address curvesTokenSubject) external onlyTokenSubject(curvesTokenSubject) {

```

```solidity
File: contracts/CurvesERC20.sol

12:     function mint(address to, uint256 amount) public onlyOwner {

16:     function burn(address from, uint256 amount) public onlyOwner {

```

```solidity
File: contracts/FeeSplitter.sol

96:     function onBalanceChange(address token, address account) public onlyManager {

```

```solidity
File: contracts/Security.sol

23:     function setManager(address manager_, bool value) public onlyOwner {

27:     function transferOwnership(address owner_) public onlyOwner {

```

### <a name="GAS-6"></a>[GAS-6] `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too)
*Saves 5 gas per loop*

*Instances (4)*:
```solidity
File: contracts/Curves.sol

305:         for (uint256 i = 0; i < subjects.length; i++) {

330:         for (uint256 i = 0; i < subjects.length; i++) {

```

```solidity
File: contracts/FeeSplitter.sol

55:         for (uint256 i = 0; i < tokens.length; i++) {

105:         for (uint256 i = 0; i < tokenList.length; i++) {

```

### <a name="GAS-7"></a>[GAS-7] Using `private` rather than `public` for constants, saves gas
If needed, the values can be read from the verified contract source code, or if there are multiple values there can be a single getter function that [returns a tuple](https://github.com/code-423n4/2022-08-frax/blob/90f55a9ce4e25bceed3a74290b854341d8de6afa/src/contracts/FraxlendPair.sol#L156-L178) of the values of all currently-public constants. Saves **3406-3606 gas** in deployment gas due to the compiler not having to create non-payable getter functions for deployment calldata, not having to store the bytes of the value outside of where it's used, and not adding another entry to the method ID table

*Instances (2)*:
```solidity
File: contracts/Curves.sol

44:     string public constant DEFAULT_NAME = "Curves";

45:     string public constant DEFAULT_SYMBOL = "CURVES";

```

### <a name="GAS-8"></a>[GAS-8] Use != 0 instead of > 0 for unsigned integer comparison

*Instances (6)*:
```solidity
File: contracts/Curves.sol

246:             if (feesEconomics.holdersFeePercent > 0 && address(feeRedistributor) != address(0)) {

265:         if (!(supply > 0 || curvesTokenSubject == msg.sender)) revert UnauthorizedCurvesTokenSubject();

307:             if (amount > 0) {

```

```solidity
File: contracts/FeeSplitter.sol

66:         if (balance > 0) {

99:         if (balanceOf(token, account) > 0) userTokens[account].push(token);

109:             if (claimable > 0) {

```


## Low Issues


| |Issue|Instances|
|-|:-|:-:|
| [L-1](#L-1) |  `abi.encodePacked()` should not be used with dynamic types when passing the result to a hash function such as `keccak256()` | 9 |
| [L-2](#L-2) | Empty Function Body - Consider commenting why | 2 |
| [L-3](#L-3) | Unsafe ERC20 operation(s) | 2 |
### <a name="L-1"></a>[L-1]  `abi.encodePacked()` should not be used with dynamic types when passing the result to a hash function such as `keccak256()`
Use `abi.encode()` instead which will pad items to 32 bytes, which will [prevent hash collisions](https://docs.soliditylang.org/en/v0.8.13/abi-spec.html#non-standard-packed-mode) (e.g. `abi.encodePacked(0x123,0x456)` => `0x123456` => `abi.encodePacked(0x1,0x23456)`, but `abi.encode(0x123,0x456)` => `0x0...1230...456`). "Unless there is a compelling reason, `abi.encode` should be preferred". If there is only one argument to `abi.encodePacked()` it can often be cast to `bytes()` or `bytes32()` [instead](https://ethereum.stackexchange.com/questions/30912/how-to-compare-strings-in-solidity#answer-82739).
If all arguments are strings and or bytes, `bytes.concat()` should be used instead

*Instances (9)*:
```solidity
File: contracts/Curves.sol

424:         bytes32 leaf = keccak256(abi.encodePacked(caller));

441:             keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].name)) ==

442:             keccak256(abi.encodePacked("")) ||

443:             keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].symbol)) ==

444:             keccak256(abi.encodePacked(""))

471:                 keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].name)) ==

472:                 keccak256(abi.encodePacked("")) ||

473:                 keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].symbol)) ==

474:                 keccak256(abi.encodePacked(""))

```

### <a name="L-2"></a>[L-2] Empty Function Body - Consider commenting why

*Instances (2)*:
```solidity
File: contracts/FeeSplitter.sol

33:     constructor() Security() {}

119:     receive() external payable {}

```

### <a name="L-3"></a>[L-3] Unsafe ERC20 operation(s)

*Instances (2)*:
```solidity
File: contracts/FeeSplitter.sol

85:         payable(msg.sender).transfer(claimable);

116:         payable(msg.sender).transfer(totalClaimable);

```


## Medium Issues


| |Issue|Instances|
|-|:-|:-:|
| [M-1](#M-1) | Centralization Risk for trusted owners | 8 |
### <a name="M-1"></a>[M-1] Centralization Risk for trusted owners

#### Impact:
Contracts have owners with privileged rights to perform admin tasks and need to be trusted to not perform malicious updates or drain funds.

*Instances (8)*:
```solidity
File: contracts/Curves.sol

113:     function setFeeRedistributor(address feeRedistributor_) external onlyOwner {

128:     function setProtocolFeePercent(uint256 protocolFeePercent_, address protocolFeeDestination_) external onlyOwner {

162:     function setERC20Factory(address factory_) external onlyOwner {

```

```solidity
File: contracts/CurvesERC20.sol

7: contract CurvesERC20 is ERC20, Ownable {

12:     function mint(address to, uint256 amount) public onlyOwner {

16:     function burn(address from, uint256 amount) public onlyOwner {

```

```solidity
File: contracts/Security.sol

23:     function setManager(address manager_, bool value) public onlyOwner {

27:     function transferOwnership(address owner_) public onlyOwner {

```

