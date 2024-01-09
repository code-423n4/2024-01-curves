# Winning bot race submission
 This is the top-ranked automated findings report, from LightChaser bot. All findings in this report will be considered known issues for the purposes of your C4 audit.
 
 LightChaser-V3

 ## Summary

 | |Issue|Instances| Gas Savings
 |-|:-|:-:|:-:|
| [[H-01](#h-01)] | Malformed equate statement | 2| 0|
| [[M-01](#m-01)] | Privileged functions can create points of failure | 10| 0|
| [[M-02](#m-02)] | Use call instead of transfer on payable addresses | 2| 0|
| [[M-03](#m-03)] | NFT minting can allow JSON Injection | 1| 0|
| [[L-01](#l-01)] | Sending tokens in a for loop  | 1| 0|
| [[L-02](#l-02)] | Low Level Calls to Custom Addresses | 1| 0|
| [[L-03](#l-03)] | Empty receive functions can cause gas issues | 1| 0|
| [[L-04](#l-04)] | Function calls within for loops | 3| 0|
| [[L-05](#l-05)] | For loops in public or external functions should be avoided due to high gas costs and possible DOS | 3| 0|
| [[L-06](#l-06)] | Missing zero address check in constructor | 2| 0|
| [[L-07](#l-07)] | Use of onlyOwner functions can be lost | 1| 0|
| [[L-08](#l-08)] | Critical functions should be a two step procedure | 6| 0|
| [[L-09](#l-09)] | Constant decimal values | 1| 0|
| [[L-10](#l-10)] | Calculation will revert when totalSupply() returns zero | 1| 0|
| [[L-11](#l-11)] | Critical functions should have a timelock | 6| 0|
| [[L-12](#l-12)] | Unbounded loop may run out of gas | 4| 0|
| [[L-13](#l-13)] | Mapping arrays can grow in size without a way to shrink them | 1| 0|
| [[L-14](#l-14)] | Constructors missing validation | 1| 0|
| [[L-15](#l-15)] | Functions calling contracts/addresses with transfer hooks are missing reentrancy guards | 2| 0|
| [[L-16](#l-16)] | Code injection via token name | 4| 0|
| [[L-17](#l-17)] | Upgradeable contract uses non-upgradeable version of the OpenZeppelin libraries/contracts | 5| 0|
| [[L-18](#l-18)] | Solidity version 0.8.20 won't work on all chains due to PUSH0 | 1| 0|
| [[L-19](#l-19)] | Unsafe use of transfer()/transferFrom() with IERC20 | 4| 0|
| [[G-01](#g-01)] | Lack of unchecked in loops  | 4| 240|
| [[G-02](#g-02)] | Multiple accesses of the same mapping/array key/index should be cached  | 2| 84|
| [[G-03](#g-03)] | Shorten the array rather than copying to a new one  | 1| 0|
| [[G-04](#g-04)] | Using bools for storage incurs overhead  | 1| 70|
| [[G-05](#g-05)] | Low level call can be optimized with assembly | 3| 0|
| [[G-06](#g-06)] | Consider Using Solady's Gas Optimized Lib for Math | 8| 0|
| [[G-07](#g-07)] | Optimize Gas by Splitting if() revert Statements | 3| 0|
| [[G-08](#g-08)] | x + y is more efficient than using += for state variables (likewise for -=) | 1| 5|
| [[G-09](#g-09)] | There are comparisons to boolean literals (true and false), these can be simplified to save gas | 1| 18|
| [[G-10](#g-10)] | Public functions not used internally can be marked as external to save gas | 12| 0|
| [[G-11](#g-11)] | Use != 0 instead of > 0 | 6| 18|
| [[G-12](#g-12)] | Integer increments by one can be unchecked to save on gas fees | 4| 480|
| [[G-13](#g-13)] | Use byte32 in place of string | 3| 0|
| [[G-14](#g-14)] | Default int values are manually reset | 2| 0|
| [[G-15](#g-15)] | <= or >= is more efficient than < or >  | 1| 3|
| [[G-16](#g-16)] | Mappings used within a function more than once should be cached to save gas | 1| 100|
| [[G-17](#g-17)] | Use assembly to check for the zero address | 8| 0|
| [[G-18](#g-18)] | Divisions which do not divide by -X cannot overflow or overflow so such operations can be unchecked to save gas | 6| 0|
| [[G-19](#g-19)] | Struct variables can be packed into fewer storage slots | 2| 5000|
| [[G-20](#g-20)] | Consider activating via-ir for deploying | 1| 250|
| [[G-21](#g-21)] | Add unchecked {} for subtractions where the operands cannot underflow | 4| 340|
| [[G-22](#g-22)] | Use bitmap to save gas | 2| 140|
| [[G-23](#g-23)] | Use assembly hashing | 1| 0|
| [[G-24](#g-24)] | Consider using OZ EnumerateSet in place of nested mappings | 2| 2000|
| [[G-25](#g-25)] | Use assembly to emit events | 6| 228|
| [[G-26](#g-26)] | Use solady library where possible to save gas | 3| 3000|
| [[G-27](#g-27)] | Counting down in for statements is more gas efficient | 4| 0|
| [[G-28](#g-28)] | State variables can be packed into fewer storage slots by truncating timestamp bytes | 1| 2500|
| [[G-29](#g-29)] | Using private rather than public for constants and immutables, saves gas | 2| 0|
| [[G-30](#g-30)] | Identical Deployments Should be Replaced with Clone | 1| 0|
| [[G-31](#g-31)] | Mark Functions That Revert For Normal Users As payable | 9| 225|
| [[G-32](#g-32)] | State variable read in a loop | 2| 6|
| [[G-33](#g-33)] | Function names can be optimized | 5| 640|
| [[G-34](#g-34)] | Use assembly to validate msg.sender | 5| 0|
| [[G-35](#g-35)] | Unnecessary casting as variable is already of the same type | 1| 22|
| [[G-36](#g-36)] | Simple checks for zero uint can be done using assembly to save gas | 8| 48|
| [[G-37](#g-37)] | Trade-offs Between Modifiers and Internal Functions | 10| 105000|
| [[G-38](#g-38)] | Using nested if to save gas | 2| 12|
| [[G-39](#g-39)] | Optimize Deployment Size by Fine-tuning IPFS Hash | 5| 53000|
| [[G-40](#g-40)] | Avoid Unnecessary Public Variables | 7| 154000|
| [[G-41](#g-41)] | Avoid emitting event on every iteration | 1| 375|
| [[G-42](#g-42)] | ++X costs slightly less gas than X++ (same with --) | 3| 15|
| [[G-43](#g-43)] | Solidity versions 0.8.19 and above are more gas efficient | 2| 2000|
| [[G-44](#g-44)] | Variable declared within iteration | 3| 0|
| [[G-45](#g-45)] | The use of a logical AND in place of double if is slightly less gas efficient in instances where there isn't a corresponding else statement for the given if statement | 3| 45|
| [[G-46](#g-46)] | Calling .length in a for loop wastes gas | 3| 291|
| [[G-47](#g-47)] | Constructors can be marked as payable to save deployment gas | 4| 0|
| [[G-48](#g-48)] | Use assembly scratch space to build calldata for external calls | 16| 3520|
| [[G-49](#g-49)] | Use assembly scratch space to build calldata for event emits | 1| 220|
| [[G-50](#g-50)] | Consider using solady's "FixedPointMathLib" | 12| 0|
| [[G-51](#g-51)] | Same cast is done multiple times | 3| 0|
| [[G-52](#g-52)] | Cache address(this) when used more than once | 1| 0|
| [[G-53](#g-53)] | bytes.concat() can be used in place of abi.encodePacked | 1| 0|
| [[N-01](#n-01)] | Events may be emitted out of order due to code not follow the best practice of check-effects-interaction  | 1| 0|
| [[N-02](#n-02)] | Non constant/immutable state variables are missing a setter post deployment  | 1| 0|
| [[N-03](#n-03)] | Functions with array parameters should have length checks in place  | 2| 0|
| [[N-04](#n-04)] | Overly complicated arithmetic  | 1| 0|
| [[N-05](#n-05)] | Empty constructor body without natspec comments  | 1| 0|
| [[N-06](#n-06)] | Inconsistent comment spacing  | 2| 0|
| [[N-07](#n-07)] | Consider adding emergency-stop functionality  | 5| 0|
| [[N-08](#n-08)] | Duplicated revert() checks should be refactored to a modifier or function  | 1| 0|
| [[N-09](#n-09)] | Missing events in sensitive functions  | 8| 0|
| [[N-10](#n-10)] | Consider making private state variables internal to increase flexibility  | 1| 0|
| [[N-11](#n-11)] | File is missing NatSpec  | 4| 0|
| [[N-12](#n-12)] | Using Low-Level Call for Transfers | 3| 0|
| [[N-13](#n-13)] | Consider implementing two-step procedure for updating protocol addresses | 3| 0|
| [[N-14](#n-14)] | Use Unchecked for Divisions on Constant or Immutable Values | 2| 0|
| [[N-15](#n-15)] | Floating pragma should be avoided | 1| 0|
| [[N-16](#n-16)] | Instances should be declared in a separate file | 1| 0|
| [[N-17](#n-17)] | Events regarding state variable changes should emit the previous state variable value | 1| 0|
| [[N-18](#n-18)] | In functions which accept an address as a parameter, there should be a zero address check to prevent bugs | 34| 0|
| [[N-19](#n-19)] | Use safeTransferOwnership instead of transferOwnership | 1| 0|
| [[N-20](#n-20)] | Default int values are manually set | 5| 0|
| [[N-21](#n-21)] | Ownable2Step should be used in place of Ownable | 1| 0|
| [[N-22](#n-22)] | Revert statements within external and public functions can be used to perform DOS attacks | 19| 0|
| [[N-23](#n-23)] | Functions which are either private or internal should have a preceding _ in their name | 1| 0|
| [[N-24](#n-24)] | Contract lines should not be longer than 120 characters for readability | 2| 0|
| [[N-25](#n-25)] | Setters should prevent re-setting of the same value | 5| 4000|
| [[N-26](#n-26)] | Specific imports should be used where possible so only used code is imported | 10| 0|
| [[N-27](#n-27)] | Use newer solidity versions | 2| 0|
| [[N-28](#n-28)] | Not all event definitions are utilizing indexed variables. | 2| 0|
| [[N-29](#n-29)] | Functions within contracts are not ordered according to the solidity style guide | 2| 0|
| [[N-30](#n-30)] | Functions which set address state variables should have zero address checks | 4| 0|
| [[N-31](#n-31)] | Interface imports should be declared first | 1| 0|
| [[N-32](#n-32)] | Use allowlist/denylist rather than whitelist/blacklist | 4| 0|
| [[N-33](#n-33)] | Multiple mappings can be replaced with a single struct mapping | 2| 0|
| [[N-34](#n-34)] | Keccak hashes which never change can be made into a constant state variable | 2| 0|
| [[N-35](#n-35)] | Constants should be on the left side of the  | 3| 0|
| [[N-36](#n-36)] | Interface names should have an I as the first character | 1| 0|
| [[N-37](#n-37)] | Consider using named mappings | 7| 0|
| [[N-38](#n-38)] | Loss of precision | 1| 0|
| [[N-39](#n-39)] | Use a single contract or library for system wide constants | 2| 0|
| [[N-40](#n-40)] | Consider using modifiers for address control | 2| 0|
| [[N-41](#n-41)] | Off-by-one timestamp error | 3| 0|
| [[N-42](#n-42)] | Default address(0) can be returned | 1| 0|
| [[N-43](#n-43)] | Variables should be used in place of magic numbers to improve readability | 2| 0|
| [[N-44](#n-44)] | Custom error has no error variables | 2| 0|
| [[N-45](#n-45)] | Unused structs present | 2| 0|
| [[N-46](#n-46)] | Empty bytes check is missing | 4| 0|
| [[N-47](#n-47)] | Use scopes sparingly | 6| 0|
| [[N-48](#n-48)] | Do not use underscore at the end of variable name | 3| 0|
| [[N-49](#n-49)] | Consider using SMTChecker | 5| 1250|
| [[N-50](#n-50)] | Top level declarations should be separated by two blank lines | 17| 0|
| [[N-51](#n-51)] | Contracts should have full test coverage | 5| 0|
| [[N-52](#n-52)] | Consider using SafeTransferLib.safeTransferETH() or Address.sendValue() for clearer semantic meaning | 1| 0|
| [[N-53](#n-53)] | Whitespace in expressions | 4| 0|
| [[N-54](#n-54)] | Consider using named function calls | 21| 0|
| [[N-55](#n-55)] | Lack of space near the operator | 2| 0|
| [[N-56](#n-56)] | Lack Of Brace Spacing | 4| 0|
| [[N-57](#n-57)] | No access control on receive/payable fallback | 1| 0|
| [[N-58](#n-58)] | If statement control structures do not comply with best practices | 33| 0|
| [[N-59](#n-59)] | Incorrect withdraw declaration | 1| 0|
| [[N-60](#n-60)] | Consider adding formal verification proofs | 5| 0|
| [[N-61](#n-61)] | Use string.concat() on strings instead of abi.encodePacked() for clearer semantic meaning | 3| 0|
| [[N-62](#n-62)] | Consider bounding input array length | 4| 0|
| [[N-63](#n-63)] | Avoid mutating function parameters | 1| 0|
| [[N-64](#n-64)] | It is best practice to use linear inheritance | 2| 0|
| [[N-65](#n-65)] | Contracts with only unimplemented functions can be labeled as abstract | 1| 0|
| [[N-66](#n-66)] | A event should be emitted if a non immutable state variable is set in a constructor | 2| 0|
| [[N-67](#n-67)] | Create methods are suspicious of the reorg attack | 1| 0|
| [[N-68](#n-68)] | Contracts use both += 1 and ++ (-- and -= 1) | 1| 0|
| [[N-69](#n-69)] | Using constants directly, rather than caching the value, saves gas | 2| 0|
| [[N-70](#n-70)] | Public variable declarations should have NatSpec descriptions | 1| 0|
| [[N-71](#n-71)] | Use += for mappings | 1| 0|
| [[N-72](#n-72)] | Use -= for mappings | 1| 0|
| [[N-73](#n-73)] | Use the Modern Upgradeable Contract Paradigm | 5| 0|
| [[N-74](#n-74)] | Upgrade openzeppelin to the Latest Version - 5.0.0 | 5| 0|
| [[N-75](#n-75)] | Use transfer libraries instead of low level calls | 3| 0|
| [[N-76](#n-76)] | Use a struct to encapsulate multiple function parameters | 2| 0|
| [[N-77](#n-77)] | Returning a struct instead of returning many variables is better | 1| 0|
| [[N-78](#n-78)] | Using delete instead of setting mapping to 0 saves gas | 2| 10|
| [[N-79](#n-79)] | Consider using ERC20Capped | 3| 0|
| [[N-80](#n-80)] | Consider using a format prettier or forge fmt | 2| 0|
| [[N-81](#n-81)] | package.json name variable should only consist of lowercase letters and underscores | 1| 0|
| [[N-82](#n-82)] | package.json version should start at 0.1.0 or 1.0.0 not 0.0.1 or 0.0.0 | 1| 0|
| [[N-83](#n-83)] | Avoid declaring variables with the names of defined functions within the project | 1| 0|
| [[N-84](#n-84)] | All verbatim blocks are considered identical by deduplicator and can incorrectly be unified | 2| 0|
| [[N-85](#n-85)] | Public variable declarations should have NatSpec descriptions | 1| 0|
| [[N-86](#n-86)] | Natspec @author is missing from contract | 5| 0|
| [[N-87](#n-87)] | Natspec @notice is missing from contract | 5| 0|
| [[N-88](#n-88)] | Natspec @dev is missing from contract | 5| 0|
| [[N-89](#n-89)] | Natspec @title is missing from contract | 5| 0|
| [[N-90](#n-90)] | Natspec @author is missing from interface | 1| 0|
| [[N-91](#n-91)] | Natspec @title is missing from interface | 1| 0|
| [[N-92](#n-92)] | Natspec @dev is missing from interface | 1| 0|
| [[N-93](#n-93)] | Natspec @notice is missing from interface | 1| 0|
| [[N-94](#n-94)] | Event declarations should have NatSpec descriptions | 2| 0|
| [[N-95](#n-95)] | Event declarations should have @dev NatSpec comments | 2| 0|
| [[N-96](#n-96)] | Event declarations should have @notice NatSpec comments | 2| 0|
| [[N-97](#n-97)] | Event declarations should have @params NatSpec comments | 2| 0|
| [[N-98](#n-98)] | Natspec @params comments are missing from modifier | 1| 0|
| [[N-99](#n-99)] | Natspec @dev comments are missing from modifier | 3| 0|
| [[N-100](#n-100)] | Natspec @notice comments are missing from modifier | 3| 0|
| [[N-101](#n-101)] | Natspec @params comments are missing from struct | 5| 0|
| [[N-102](#n-102)] | Natspec @dev comments are missing from struct | 5| 0|
| [[N-103](#n-103)] | Natspec @notice comments are missing from struct | 5| 0|
| [[N-104](#n-104)] | Natspec @params comments are missing from function | 48| 0|
| [[N-105](#n-105)] | Natspec @dev comments are missing from function | 47| 0|
| [[N-106](#n-106)] | Natspec @notice comments are missing from function | 48| 0|
| [[N-107](#n-107)] | Natspec @dev comments are missing from constructor | 4| 0|
| [[N-108](#n-108)] | Natspec @notice comments are missing from constructor | 4| 0|
| [[N-109](#n-109)] | Natspec @params comments are missing from constructor | 2| 0|
| [[N-110](#n-110)] | Natspec @notice comments are missing from receive function | 1| 0|
| [[N-111](#n-111)] | Natspec @dev comments are missing from receive function | 1| 0|
| [[N-112](#n-112)] | Natspec comments are missing from scope blocks | 6| 0|
| [[D-01](#d-01)] | Subtraction may underflow if multiplication is too large [EXP] | 3| 0|
| [[D-02](#d-02)] | Code does not follow the best practice of check-effects-interaction [EXP] | 2| 0|
| [[D-03](#d-03)] | Avoid updating storage when the value hasn't changed [EXP] | 6| 4800|
| [[D-04](#d-04)] | Using abi.encodePacked can result in hash collision when used in hashing functions [EXP-2] | 4| 0|
| [[D-05](#d-05)] | Overly complicated arithmetic [EXP-2] | 1| 0|
| [[D-06](#d-06)] | No limits when setting fees [EXP-3] | 4| 0|
| [[D-07](#d-07)] | Employ Explicit Casting to Bytes or Bytes32 for Enhanced Code Clarity and Meaning [EXP-3] | 2| 0|
| [[D-08](#d-08)] | Duplicated revert() checks should be refactored to a modifier or function [EXP-3] | 2| 0|
| [[D-09](#d-09)] | Missing events in sensitive functions [EXP-3] | 2| 0|
| [[D-10](#d-10)] | Optimize by Using Assembly for Low-Level Calls' Return Data | 3| 477|
| [[D-11](#d-11)] | External call recipient may consume all transaction gas | 2| 0|
| [[D-12](#d-12)] | Use of abi.encodePacked with dynamic types inside keccak256 | 3| 0|
| [[D-13](#d-13)] | Inconsistent checks of address params against address(0) | 2| 0|
| [[D-14](#d-14)] | Division in comparison | 1| 0|


 LightChaser-V3 ### High Risk Issues


### [H-01]<a name="h-01"></a> Malformed equate statement
Using the provided modifier `onlyOwner` for function access control without a proper enforcement mechanism like `require` or `revert` is a dire mistake because it fails to restrict access as intended. The modifier merely evaluates a condition (`msg.sender == owner`) without any action taken based on the result. This means any user, regardless of whether they are the owner, can execute functions that are supposed to be restricted to the owner, potentially leading to unauthorized actions, such as withdrawing funds or altering critical contract settings.

**Solution:**
To fix this, the modifier should enforce the ownership check using a `require` statement:

```solidity
modifier onlyOwner() {
require(msg.sender == owner, "Caller is not the owner");
_;
}
```

With this correction, the modifier effectively ensures that only the account designated as `owner` can access the function. If a non-owner attempts to call the function, the transaction is reverted, maintaining the intended access control and contract integrity.

*There are 2 instance(s) of this issue:*

```solidity
8:     modifier onlyOwner() { // <= FOUND
9:         msg.sender == owner; // <= FOUND
10:         _;
11:     }

```


*GitHub* : [8](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L8-L9)

```solidity
13:     modifier onlyManager() { // <= FOUND
14:         managers[msg.sender] == true; // <= FOUND
15:         _;
16:     }

```


*GitHub* : [13](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L13-L14)### Medium Risk Issues


### [M-01]<a name="m-01"></a> Privileged functions can create points of failure
Ensure such accounts are protected and consider implementing multi sig to prevent a single point of failure

*There are 10 instance(s) of this issue:*

```solidity
113:     function setFeeRedistributor(address feeRedistributor_) external onlyOwner  // <= FOUND

```


*GitHub* : [113](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L113-L113)

```solidity
128:     function setProtocolFeePercent(uint256 protocolFeePercent_, address protocolFeeDestination_) external onlyOwner  // <= FOUND

```


*GitHub* : [128](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L128-L128)

```solidity
162:     function setERC20Factory(address factory_) external onlyOwner  // <= FOUND

```


*GitHub* : [162](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L162-L162)

```solidity
23:     function setManager(address manager_, bool value) public onlyOwner  // <= FOUND

```


*GitHub* : [23](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L23-L23)

```solidity
12:     function mint(address to, uint256 amount) public onlyOwner  // <= FOUND

```


*GitHub* : [12](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L12-L12)

```solidity
16:     function burn(address from, uint256 amount) public onlyOwner  // <= FOUND

```


*GitHub* : [16](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L16-L16)

```solidity
117:     function setMaxFeePercent(uint256 maxFeePercent_) external onlyManager  // <= FOUND

```


*GitHub* : [117](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L117-L117)

```solidity
141:     function setExternalFeePercent(
142:         uint256 subjectFeePercent_,
143:         uint256 referralFeePercent_,
144:         uint256 holdersFeePercent_
145:     ) external onlyManager  // <= FOUND

```


*GitHub* : [145](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L145-L145)

```solidity
89:     function addFees(address token) public payable onlyManager  // <= FOUND

```


*GitHub* : [89](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L89-L89)

```solidity
96:     function onBalanceChange(address token, address account) public onlyManager  // <= FOUND

```


*GitHub* : [96](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L96-L96)
### [M-02]<a name="m-02"></a> Use call instead of transfer on payable addresses
In Solidity, when transferring Ether, `.transfer()` and `.send()` are commonly used. However, they have a limitation: they forward only a stipend of 2300 gas, which isn't enough to execute any code in the recipient contract beyond a simple event emission. Thus, if the recipient is a contract, the transfer may fail unexpectedly. 

To overcome this, Solidity introduced the `.call{value: _amount}("")` method, which forwards all available gas and can invoke more complex functionality. It's also safer in that it does not revert on failure but instead returns a boolean value to indicate success or failure. Therefore, it is generally a better choice to use `.call` when transferring Ether to a payable address, with the necessary safety checks implemented to handle potential errors.

*There are 2 instance(s) of this issue:*

```solidity
80:     function claimFees(address token) external { // <= FOUND
81:         updateFeeCredit(token, msg.sender);
82:         uint256 claimable = getClaimableFees(token, msg.sender);
83:         if (claimable == 0) revert NoFeesToClaim();
84:         tokensData[token].unclaimedFees[msg.sender] = 0;
85:         payable(msg.sender).transfer(claimable); // <= FOUND
86:         emit FeesClaimed(token, msg.sender, claimable);
87:     }

```


*GitHub* : [80](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L80-L85)

```solidity
103:     function batchClaiming(address[] calldata tokenList) external { // <= FOUND
104:         uint256 totalClaimable = 0;
105:         for (uint256 i = 0; i < tokenList.length; i++) {
106:             address token = tokenList[i];
107:             updateFeeCredit(token, msg.sender);
108:             uint256 claimable = getClaimableFees(token, msg.sender);
109:             if (claimable > 0) {
110:                 tokensData[token].unclaimedFees[msg.sender] = 0;
111:                 totalClaimable += claimable;
112:                 emit FeesClaimed(token, msg.sender, claimable);
113:             }
114:         }
115:         if (totalClaimable == 0) revert NoFeesToClaim();
116:         payable(msg.sender).transfer(totalClaimable); // <= FOUND
117:     }

```


*GitHub* : [103](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L103-L116)
### [M-03]<a name="m-03"></a> NFT minting can allow JSON Injection
Reason: JSON injection in NFT metadata can create various vulnerabilities and manipulation tactics in the NFT ecosystem. The metadata of NFTs, often stored off-chain and referenced by URI, could be manipulated through JSON injection if unsanitized inputs are allowed. This could alter the visual representation of an NFT on platforms and mislead buyers or impact the perceived value of the asset.

Resolution: To protect against JSON injection, the metadata processing system should properly sanitize and validate all inputs. Smart contracts should not handle this task due to their limitations. Instead, robust off-chain server code should manage the processing, using tools designed to prevent JSON injection such as input validation, escaping special characters, and utilizing secure JSON parsing libraries. In addition, implementing strict access control to the metadata storage can further safeguard against unauthorized changes.

*There are 1 instance(s) of this issue:*

```solidity
456:     function _mint( // <= FOUND
457:         address curvesTokenSubject,
458:         string memory name, // <= FOUND
459:         string memory symbol // <= FOUND
460:     ) internal onlyTokenSubject(curvesTokenSubject) {
461:         if (externalCurvesTokens[curvesTokenSubject].token != address(0)) revert ERC20TokenAlreadyMinted();
462:         _deployERC20(curvesTokenSubject, name, symbol);
463:     }

```


*GitHub* : [456](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L456-L459)### Low Risk Issues


### [L-01]<a name="l-01"></a> Sending tokens in a for loop 
Performing token transfers in a loop in a Solidity contract is generally not recommended due to various reasons. One of these reasons is the "Fail-Silently" issue.

In a Solidity loop, if one transfer operation fails, it causes the entire transaction to fail. This issue can be particularly troublesome when you're dealing with multiple transfers in one transaction. For instance, if you're looping through an array of recipients to distribute dividends or rewards, a single failed transfer will prevent all the subsequent recipients from receiving their transfers. This could be due to the recipient contract throwing an exception or due to other issues like a gas limit being exceeded.

Moreover, such a design could also inadvertently lead to a situation where a malicious contract intentionally causes a failure when receiving Ether to prevent other participants from getting their rightful transfers. This could open up avenues for griefing attacks in the system.

Resolution: To mitigate this problem, it's typically recommended to follow the "withdraw pattern" in your contracts instead of pushing payments. In this model, each recipient would be responsible for triggering their own payment. This separates each transfer operation, so a failure in one doesn't impact the others. Additionally, it greatly reduces the chance of malicious interference as the control over fund withdrawal lies with the intended recipient and not with an external loop operation.

*There are 1 instance(s) of this issue:*

```solidity
305:        for (uint256 i = 0; i < subjects.length; i++) {
306:             uint256 amount = curvesTokenBalance[subjects[i]][msg.sender];
307:             if (amount > 0) {
308:                 _transfer(subjects[i], msg.sender, to, amount); // <= FOUND
309:             }
310:         }

```


*GitHub* : [305](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L305-L308)
### [L-02]<a name="l-02"></a> Low Level Calls to Custom Addresses
Low-level calls (such as `.call()`, `.delegatecall()`, or `.callcode()`) in Solidity provide a way to interact with other contracts or addresses. However, when these calls are made to addresses that are provided as parameters or are not well-validated, they pose a significant security risk. Untrusted addresses might contain malicious code leading to unexpected behavior, loss of funds, or vulnerabilities.

**Resolution**: Prefer using high-level Solidity function calls or interface-based interactions with known contracts to ensure security. If low-level calls are necessary, rigorously validate the addresses and test all possible interactions. Implementing additional checks and fail-safes can help mitigate potential risks associated with low-level calls.

*There are 1 instance(s) of this issue:*

```solidity
218:     function _transferFees(
219:         address curvesTokenSubject,
220:         bool isBuy,
221:         uint256 price,
222:         uint256 amount,
223:         uint256 supply
224:     ) internal {
225:         (uint256 protocolFee, uint256 subjectFee, uint256 referralFee, uint256 holderFee, ) = getFees(price);
226:         {
227:             bool referralDefined = referralFeeDestination[curvesTokenSubject] != address(0);
228:             {
229:                 address firstDestination = isBuy ? feesEconomics.protocolFeeDestination : msg.sender;
230:                 uint256 buyValue = referralDefined ? protocolFee : protocolFee + referralFee;
231:                 uint256 sellValue = price - protocolFee - subjectFee - referralFee - holderFee;
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}(""); // <= FOUND
233:                 if (!success1) revert CannotSendFunds();
234:             }
235:             {
236:                 (bool success2, ) = curvesTokenSubject.call{value: subjectFee}(""); // <= FOUND
237:                 if (!success2) revert CannotSendFunds();
238:             }
239:             {
240:                 (bool success3, ) = referralDefined
241:                     ? referralFeeDestination[curvesTokenSubject].call{value: referralFee}("")
242:                     : (true, bytes(""));
243:                 if (!success3) revert CannotSendFunds();
244:             }
245: 
246:             if (feesEconomics.holdersFeePercent > 0 && address(feeRedistributor) != address(0)) {
247:                 feeRedistributor.onBalanceChange(curvesTokenSubject, msg.sender);
248:                 feeRedistributor.addFees{value: holderFee}(curvesTokenSubject);
249:             }
250:         }
251:         emit Trade(
252:             msg.sender,
253:             curvesTokenSubject,
254:             isBuy,
255:             amount,
256:             price,
257:             protocolFee,
258:             subjectFee,
259:             isBuy ? supply + amount : supply - amount
260:         );
261:     }

```


*GitHub* : [218](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L218-L236)
### [L-03]<a name="l-03"></a> Empty receive functions can cause gas issues
In Solidity, functions that receive Ether without corresponding functionality to utilize or withdraw these funds can inadvertently lead to a permanent loss of value. This is because if someone sends Ether to the contract, they may be unable to retrieve it. To avoid this, functions receiving Ether should be accompanied by additional methods that process or allow the withdrawal of these funds. If the intent is to use the received Ether, it should trigger a separate function; if not, it should revert the transaction (for instance, via `require(msg.sender == address(weth))`). Access control checks can also prevent unintended Ether transfers, despite the slight gas cost they entail. If concerns over gas costs persist, at minimum, include a rescue function to recover unused Ether. Missteps in handling Ether in smart contracts can lead to irreversible financial losses, hence these precautions are crucial.

*There are 1 instance(s) of this issue:*

```solidity
119:     receive() external payable {}

```


*GitHub* : [119](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L119-L119)
### [L-04]<a name="l-04"></a> Function calls within for loops
Making function calls or external calls within loops in Solidity can lead to inefficient gas usage, potential bottlenecks, and increased vulnerability to attacks. Each function call or external call consumes gas, and when executed within a loop, the gas cost multiplies, potentially causing the transaction to run out of gas or exceed block gas limits. This can result in transaction failure or unpredictable behavior.

*There are 3 instance(s) of this issue:*

```solidity
305:        for (uint256 i = 0; i < subjects.length; i++) {
306:             uint256 amount = curvesTokenBalance[subjects[i]][msg.sender];
307:             if (amount > 0) {
308:                 _transfer(subjects[i], msg.sender, to, amount); // <= FOUND
309:             }
310:         }

```


*GitHub* : [305](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L305-L308)

```solidity
105:        for (uint256 i = 0; i < tokenList.length; i++) {
106:             address token = tokenList[i];
107:             updateFeeCredit(token, msg.sender); // <= FOUND
108:             uint256 claimable = getClaimableFees(token, msg.sender); // <= FOUND
109:             if (claimable > 0) {
110:                 tokensData[token].unclaimedFees[msg.sender] = 0;
111:                 totalClaimable += claimable;
112:                 emit FeesClaimed(token, msg.sender, claimable);
113:             }
114:         }

```


*GitHub* : [105](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L105-L108)

```solidity
55:        for (uint256 i = 0; i < tokens.length; i++) {
56:             address token = tokens[i];
57:             uint256 claimable = getClaimableFees(token, user); // <= FOUND
58:             result[i] = UserClaimData(claimable, token);
59:         }

```


*GitHub* : [55](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L55-L57)
### [L-05]<a name="l-05"></a> For loops in public or external functions should be avoided due to high gas costs and possible DOS
In Solidity, for loops can potentially cause Denial of Service (DoS) attacks if not handled carefully. DoS attacks can occur when an attacker intentionally exploits the gas cost of a function, causing it to run out of gas or making it too expensive for other users to call. Below are some scenarios where for loops can lead to DoS attacks: Nested for loops can become exceptionally gas expensive and should be used sparingly

*There are 3 instance(s) of this issue:*

```solidity
302:     function transferAllCurvesTokens(address to) external {
303:         if (to == address(this)) revert ContractCannotReceiveTransfer();
304:         address[] storage subjects = ownedCurvesTokenSubjects[msg.sender];
305:         for (uint256 i = 0; i < subjects.length; i++) { // <= FOUND
306:             uint256 amount = curvesTokenBalance[subjects[i]][msg.sender];
307:             if (amount > 0) {
308:                 _transfer(subjects[i], msg.sender, to, amount);
309:             }
310:         }
311:     }

```


*GitHub* : [305](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L305-L305)

```solidity
103:     function batchClaiming(address[] calldata tokenList) external {
104:         uint256 totalClaimable = 0;
105:         for (uint256 i = 0; i < tokenList.length; i++) { // <= FOUND
106:             address token = tokenList[i];
107:             updateFeeCredit(token, msg.sender);
108:             uint256 claimable = getClaimableFees(token, msg.sender);
109:             if (claimable > 0) {
110:                 tokensData[token].unclaimedFees[msg.sender] = 0;
111:                 totalClaimable += claimable;
112:                 emit FeesClaimed(token, msg.sender, claimable);
113:             }
114:         }
115:         if (totalClaimable == 0) revert NoFeesToClaim();
116:         payable(msg.sender).transfer(totalClaimable);
117:     }

```


*GitHub* : [105](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L105-L105)

```solidity
52:     function getUserTokensAndClaimable(address user) public view returns (UserClaimData[] memory) {
53:         address[] memory tokens = getUserTokens(user);
54:         UserClaimData[] memory result = new UserClaimData[](tokens.length);
55:         for (uint256 i = 0; i < tokens.length; i++) { // <= FOUND
56:             address token = tokens[i];
57:             uint256 claimable = getClaimableFees(token, user);
58:             result[i] = UserClaimData(claimable, token);
59:         }
60:         return result;
61:     }

```


*GitHub* : [55](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L55-L55)
### [L-06]<a name="l-06"></a> Missing zero address check in constructor
In Solidity, constructors often take address parameters to initialize important components of a contract, such as owner or linked contracts. However, without a check, there's a risk that an address parameter could be mistakenly set to the zero address (0x0). This could occur due to a mistake or oversight during contract deployment. A zero address in a crucial role can cause serious issues, as it cannot perform actions like a normal address, and any funds sent to it are irretrievable. Therefore, it's crucial to include a zero address check in constructors to prevent such potential problems. If a zero address is detected, the constructor should revert the transaction.

*There are 2 instance(s) of this issue:*

```solidity
108:     constructor(address curvesERC20Factory_, address feeRedistributor_) Security() { // <= FOUND
109:         curvesERC20Factory = curvesERC20Factory_;
110:         feeRedistributor = FeeSplitter(payable(feeRedistributor_));
111:     }

```


*GitHub* : [108](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L108-L108)

```solidity
8:     constructor(string memory name_, string memory symbol_, address owner) ERC20(name_, symbol_) { // <= FOUND
9:         transferOwnership(owner);
10:     }

```


*GitHub* : [8](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L8-L8)
### [L-07]<a name="l-07"></a> Use of onlyOwner functions can be lost
In Solidity, renouncing ownership of a contract essentially transfers ownership to the zero address. This is an irreversible operation and has considerable security implications. If the renounceOwnership function is used, the contract will lose the ability to perform any operations that are limited to the owner. This can be problematic if there are any bugs, flaws, or unexpected events that require owner intervention to resolve. Therefore, in some instances, it is better to disable or omit the renounceOwnership function, and instead implement a secure transferOwnership function. This way, if necessary, ownership can be transferred to a new, trusted party without losing the potential for administrative intervention.

*There are 1 instance(s) of this issue:*

```solidity
7: contract CurvesERC20 is ERC20, Ownable  // <= FOUND

```


*GitHub* : [7](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L7-L7)
### [L-08]<a name="l-08"></a> Critical functions should be a two step procedure
Critical functions in Solidity contracts should follow a two-step procedure to enhance security, minimize human error, and ensure proper access control. By dividing sensitive operations into distinct phases, such as initiation and confirmation, developers can introduce a safeguard against unintended actions or unauthorized access.

*There are 6 instance(s) of this issue:*

```solidity
113:     function setFeeRedistributor(address feeRedistributor_) external onlyOwner  // <= FOUND

```


*GitHub* : [113](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L113-L113)

```solidity
128:     function setProtocolFeePercent(uint256 protocolFeePercent_, address protocolFeeDestination_) external onlyOwner  // <= FOUND

```


*GitHub* : [128](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L128-L128)

```solidity
162:     function setERC20Factory(address factory_) external onlyOwner  // <= FOUND

```


*GitHub* : [162](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L162-L162)

```solidity
23:     function setManager(address manager_, bool value) public onlyOwner  // <= FOUND

```


*GitHub* : [23](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L23-L23)

```solidity
117:     function setMaxFeePercent(uint256 maxFeePercent_) external onlyManager  // <= FOUND

```


*GitHub* : [117](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L117-L117)

```solidity
141:     function setExternalFeePercent( // <= FOUND
142:         uint256 subjectFeePercent_,
143:         uint256 referralFeePercent_,
144:         uint256 holdersFeePercent_
145:     ) external onlyManager 

```


*GitHub* : [141](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L141-L141)
### [L-09]<a name="l-09"></a> Constant decimal values
The use of fixed decimal values such as 1e18 or 1e8 in Solidity contracts can lead to inaccuracies, bugs, and vulnerabilities, particularly when interacting with tokens having different decimal configurations. Not all ERC20 tokens follow the standard 18 decimal places, and assumptions about decimal places can lead to miscalculations.

Resolution: Always retrieve and use the `decimals()` function from the token contract itself when performing calculations involving token amounts. This ensures that your contract correctly handles tokens with any number of decimal places, mitigating the risk of numerical errors or under/overflows that could jeopardize contract integrity and user funds.

*There are 1 instance(s) of this issue:*

```solidity
11:     uint256 constant PRECISION = 1e18; // <= FOUND

```


*GitHub* : [11](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L11-L11)
### [L-10]<a name="l-10"></a> Calculation will revert when totalSupply() returns zero
In the instance where the function totalSupply() returns zero, it will inevitably lead to a division by zero error when used in mathematical operations, causing the transaction to fail and potentially disrupting contract functionality. This situation can inadvertently serve as a blocking mechanism, preventing valid transactions and operations. It's crucial to accommodate this special scenario in your code. One resolution could be implementing condition checks in your function to detect a zero totalSupply() and handle it differently, perhaps by returning a specific value or altering the operational flow, thus ensuring that transactions do not revert and the contract functions smoothly even in this edge case.

*There are 1 instance(s) of this issue:*

```solidity
89:     function addFees(address token) public payable onlyManager { // <= FOUND
90:         uint256 totalSupply_ = totalSupply(token);
91:         if (totalSupply_ == 0) revert NoTokenHolders();
92:         TokenData storage data = tokensData[token];
93:         data.cumulativeFeePerToken += (msg.value * PRECISION) / totalSupply_; // <= FOUND
94:     }

```


*GitHub* : [89](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L89-L93)
### [L-11]<a name="l-11"></a> Critical functions should have a timelock
Critical functions, especially those affecting protocol parameters or user funds, are potential points of failure or exploitation. To mitigate risks, incorporating a timelock on such functions can be beneficial. A timelock requires a waiting period between the time an action is initiated and when it's executed, giving stakeholders time to react, potentially vetoing malicious or erroneous changes. To implement, integrate a smart contract like OpenZeppelin's `TimelockController` or build a custom mechanism. This ensures governance decisions or administrative changes are transparent and allows for community or multi-signature interventions, enhancing protocol security and trustworthiness.

*There are 6 instance(s) of this issue:*

```solidity
113:     function setFeeRedistributor(address feeRedistributor_) external onlyOwner  // <= FOUND

```


*GitHub* : [113](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L113-L113)

```solidity
128:     function setProtocolFeePercent(uint256 protocolFeePercent_, address protocolFeeDestination_) external onlyOwner  // <= FOUND

```


*GitHub* : [128](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L128-L128)

```solidity
162:     function setERC20Factory(address factory_) external onlyOwner  // <= FOUND

```


*GitHub* : [162](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L162-L162)

```solidity
23:     function setManager(address manager_, bool value) public onlyOwner  // <= FOUND

```


*GitHub* : [23](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L23-L23)

```solidity
117:     function setMaxFeePercent(uint256 maxFeePercent_) external onlyManager  // <= FOUND

```


*GitHub* : [117](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L117-L117)

```solidity
141:     function setExternalFeePercent( // <= FOUND
142:         uint256 subjectFeePercent_,
143:         uint256 referralFeePercent_,
144:         uint256 holdersFeePercent_
145:     ) external onlyManager 

```


*GitHub* : [141](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L141-L141)
### [L-12]<a name="l-12"></a> Unbounded loop may run out of gas
Unbounded loops in smart contracts pose a risk because they iterate over an unknown number of elements, potentially consuming all available gas for a transaction. This can result in unintended transaction failures. Gas consumption increases linearly with the number of iterations, and if it surpasses the gas limit, the transaction reverts, wasting the gas spent. To mitigate this, developers should either set a maximum limit on loop iterations.

*There are 4 instance(s) of this issue:*

```solidity
302:     function transferAllCurvesTokens(address to) external { // <= FOUND
303:         if (to == address(this)) revert ContractCannotReceiveTransfer();
304:         address[] storage subjects = ownedCurvesTokenSubjects[msg.sender];
305:         for (uint256 i = 0; i < subjects.length; i++) { // <= FOUND
306:             uint256 amount = curvesTokenBalance[subjects[i]][msg.sender];
307:             if (amount > 0) {
308:                 _transfer(subjects[i], msg.sender, to, amount);
309:             }
310:         }
311:     }

```


*GitHub* : [302](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L302-L305)

```solidity
328:     function _addOwnedCurvesTokenSubject(address owner_, address curvesTokenSubject) internal { // <= FOUND
329:         address[] storage subjects = ownedCurvesTokenSubjects[owner_];
330:         for (uint256 i = 0; i < subjects.length; i++) { // <= FOUND
331:             if (subjects[i] == curvesTokenSubject) {
332:                 return;
333:             }
334:         }
335:         subjects.push(curvesTokenSubject);
336:     }

```


*GitHub* : [328](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L328-L330)

```solidity
52:     function getUserTokensAndClaimable(address user) public view returns (UserClaimData[] memory) { // <= FOUND
53:         address[] memory tokens = getUserTokens(user);
54:         UserClaimData[] memory result = new UserClaimData[](tokens.length);
55:         for (uint256 i = 0; i < tokens.length; i++) { // <= FOUND
56:             address token = tokens[i];
57:             uint256 claimable = getClaimableFees(token, user);
58:             result[i] = UserClaimData(claimable, token);
59:         }
60:         return result;
61:     }

```


*GitHub* : [52](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L52-L55)

```solidity
103:     function batchClaiming(address[] calldata tokenList) external { // <= FOUND
104:         uint256 totalClaimable = 0;
105:         for (uint256 i = 0; i < tokenList.length; i++) { // <= FOUND
106:             address token = tokenList[i];
107:             updateFeeCredit(token, msg.sender);
108:             uint256 claimable = getClaimableFees(token, msg.sender);
109:             if (claimable > 0) {
110:                 tokensData[token].unclaimedFees[msg.sender] = 0;
111:                 totalClaimable += claimable;
112:                 emit FeesClaimed(token, msg.sender, claimable);
113:             }
114:         }
115:         if (totalClaimable == 0) revert NoFeesToClaim();
116:         payable(msg.sender).transfer(totalClaimable);
117:     }

```


*GitHub* : [103](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L103-L105)
### [L-13]<a name="l-13"></a> Mapping arrays can grow in size without a way to shrink them
It's a good practice to maintain control over the size of array mappings in Solidity, especially if they are dynamically updated. If a contract includes a mechanism to push items into an array, it should ideally also provide a mechanism to remove items. This is because Solidity arrays don't automatically shrink when items are deleted - their length needs to be manually adjusted.

Ignoring this can lead to bloated and inefficient contracts. For instance, iterating over a large array can cause your contract to hit the block gas limit. Additionally, if entries are only marked for deletion but never actually removed, you may end up dealing with stale or irrelevant data, which can cause logical errors.

Therefore, implementing a method to 'pop' items from mapping arrays helps manage contract's state, improve efficiency and prevent potential issues related to gas limits or stale data. Always ensure to handle potential underflow conditions when popping elements from the mapping array.

*There are 1 instance(s) of this issue:*

```solidity
29:     mapping(address => address[]) internal userTokens; // <= FOUND

```


*GitHub* : [29](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L29-L29)
### [L-14]<a name="l-14"></a> Constructors missing validation
In Solidity, when values are being assigned in constructors to unsigned or integer variables, it's crucial to ensure the provided values adhere to the protocol's specific operational boundaries as laid out in the project specifications and documentation. If the constructors lack appropriate validation checks, there's a risk of setting state variables with values that could cause unexpected and potentially detrimental behavior within the contract's operations, violating the intended logic of the protocol. This can compromise the contract's security and impact the maintainability and reliability of the system. In order to avoid such issues, it is recommended to incorporate rigorous validation checks in constructors. These checks should align with the project's defined rules and constraints, making use of Solidity's built-in require function to enforce these conditions. If the validation checks fail, the require function will cause the transaction to revert, ensuring the integrity and adherence to the protocol's expected behavior.

*There are 1 instance(s) of this issue:*

```solidity
108:     constructor(address curvesERC20Factory_, address feeRedistributor_) Security() {
109:         curvesERC20Factory = curvesERC20Factory_; // <= FOUND ' = curvesERC20Factory_;'
110:         feeRedistributor = FeeSplitter(payable(feeRedistributor_));
111:     }

```


*GitHub* : [108](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L108-L109)
### [L-15]<a name="l-15"></a> Functions calling contracts/addresses with transfer hooks are missing reentrancy guards
While adherence to the check-effects-interaction pattern is commendable, the absence of a reentrancy guard in functions, especially where transfer hooks might be present, can expose the protocol users to risks of read-only reentrancies. Such reentrancy vulnerabilities can be exploited to execute malicious actions even without altering the contract state. Without a reentrancy guard, the only potential mitigation would be to blocklist the entire protocol - an extreme and disruptive measure. Therefore, incorporating a reentrancy guard into these functions is vital to bolster security, as it helps protect against both traditional reentrancy attacks and read-only reentrancies, ensuring robust and safe protocol operations.

*There are 2 instance(s) of this issue:*

```solidity
465:     function withdraw(address curvesTokenSubject, uint256 amount) public { // <= FOUND
466:         if (amount > curvesTokenBalance[curvesTokenSubject][msg.sender]) revert InsufficientBalance();
467: 
468:         address externalToken = externalCurvesTokens[curvesTokenSubject].token;
469:         if (externalToken == address(0)) {
470:             if (
471:                 keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].name)) ==
472:                 keccak256(abi.encodePacked("")) ||
473:                 keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].symbol)) ==
474:                 keccak256(abi.encodePacked(""))
475:             ) {
476:                 externalCurvesTokens[curvesTokenSubject].name = DEFAULT_NAME;
477:                 externalCurvesTokens[curvesTokenSubject].symbol = DEFAULT_SYMBOL;
478:             }
479:             _deployERC20(
480:                 curvesTokenSubject,
481:                 externalCurvesTokens[curvesTokenSubject].name,
482:                 externalCurvesTokens[curvesTokenSubject].symbol
483:             );
484:             externalToken = externalCurvesTokens[curvesTokenSubject].token;
485:         }
486:         _transfer(curvesTokenSubject, msg.sender, address(this), amount); // <= FOUND
487:         CurvesERC20(externalToken).mint(msg.sender, amount * 1 ether);
488:     }

```


*GitHub* : [465](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L465-L486)

```solidity
490:     function deposit(address curvesTokenSubject, uint256 amount) public { // <= FOUND
491:         if (amount % 1 ether != 0) revert NonIntegerDepositAmount();
492: 
493:         address externalToken = externalCurvesTokens[curvesTokenSubject].token;
494:         uint256 tokenAmount = amount / 1 ether;
495: 
496:         if (externalToken == address(0)) revert TokenAbsentForCurvesTokenSubject();
497:         if (amount > CurvesERC20(externalToken).balanceOf(msg.sender)) revert InsufficientBalance();
498:         if (tokenAmount > curvesTokenBalance[curvesTokenSubject][address(this)]) revert InsufficientBalance();
499: 
500:         CurvesERC20(externalToken).burn(msg.sender, amount);
501:         _transfer(curvesTokenSubject, address(this), msg.sender, tokenAmount); // <= FOUND
502:     }

```


*GitHub* : [490](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L490-L501)
### [L-16]<a name="l-16"></a> Code injection via token name
Code injection via token names primarily poses a threat to frontends interacting with smart contracts, especially in scenarios where these frontends display token information fetched from the blockchain. This vulnerability arises when contracts store or transmit token names, symbols, or other string metadata that a malicious token contract might manipulate. If the frontend fails to sanitize this data properly, it could execute harmful scripts or display misleading information, leading to security breaches like phishing attacks or data theft.

**Resolution:**
To mitigate this risk, frontend applications should always treat token metadata (names, symbols, etc.) obtained from smart contracts as untrusted data. Implementing rigorous sanitization and validation routines on the frontend can prevent the execution of any embedded scripts or malicious code. This includes encoding or escaping strings before rendering them in the browser, using content security policies (CSP), and avoiding direct DOM manipulation with untrusted data. Regularly updating and auditing the frontend code for vulnerabilities related to handling external data is also crucial for maintaining robust security against potential code injection threats.

*There are 4 instance(s) of this issue:*

```solidity
338:     function _deployERC20(
339:         address curvesTokenSubject,
340:         string memory name,
341:         string memory symbol
342:     ) internal returns (address) {
343:         
344:         if (keccak256(bytes(symbol)) == keccak256(bytes(DEFAULT_SYMBOL))) {
345:             _curvesTokenCounter += 1;
346:             name = string(abi.encodePacked(name, " ", Strings.toString(_curvesTokenCounter)));
347:             symbol = string(abi.encodePacked(symbol, Strings.toString(_curvesTokenCounter)));
348:         }
349: 
350:         if (symbolToSubject[symbol] != address(0)) revert InvalidERC20Metadata();
351: 
352:         address tokenContract = CurvesERC20Factory(curvesERC20Factory).deploy(name, symbol, address(this));
353: 
354:         externalCurvesTokens[curvesTokenSubject].token = tokenContract;
355:         externalCurvesTokens[curvesTokenSubject].name = name; // <= FOUND
356:         externalCurvesTokens[curvesTokenSubject].symbol = symbol;
357:         externalCurvesToSubject[tokenContract] = curvesTokenSubject;
358:         symbolToSubject[symbol] = curvesTokenSubject;
359: 
360:         emit TokenDeployed(curvesTokenSubject, tokenContract, name, symbol);
361:         return address(tokenContract);
362:     }

```


*GitHub* : [355](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L355-L355)

```solidity
428:     function setNameAndSymbol(
429:         address curvesTokenSubject,
430:         string memory name,
431:         string memory symbol
432:     ) external onlyTokenSubject(curvesTokenSubject) {
433:         if (externalCurvesTokens[curvesTokenSubject].token != address(0)) revert ERC20TokenAlreadyMinted();
434:         if (symbolToSubject[symbol] != address(0)) revert InvalidERC20Metadata();
435:         externalCurvesTokens[curvesTokenSubject].name = name; // <= FOUND
436:         externalCurvesTokens[curvesTokenSubject].symbol = symbol;
437:     }

```


*GitHub* : [435](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L435-L435)

```solidity
439:     function mint(address curvesTokenSubject) external onlyTokenSubject(curvesTokenSubject) {
440:         if (
441:             keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].name)) == // <= FOUND
442:             keccak256(abi.encodePacked("")) ||
443:             keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].symbol)) ==
444:             keccak256(abi.encodePacked(""))
445:         ) {
446:             externalCurvesTokens[curvesTokenSubject].name = DEFAULT_NAME; // <= FOUND
447:             externalCurvesTokens[curvesTokenSubject].symbol = DEFAULT_SYMBOL;
448:         }
449:         _mint(
450:             curvesTokenSubject,
451:             externalCurvesTokens[curvesTokenSubject].name, // <= FOUND
452:             externalCurvesTokens[curvesTokenSubject].symbol
453:         );
454:     }

```


*GitHub* : [441](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L441-L451)

```solidity
465:     function withdraw(address curvesTokenSubject, uint256 amount) public {
466:         if (amount > curvesTokenBalance[curvesTokenSubject][msg.sender]) revert InsufficientBalance();
467: 
468:         address externalToken = externalCurvesTokens[curvesTokenSubject].token;
469:         if (externalToken == address(0)) {
470:             if (
471:                 keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].name)) == // <= FOUND
472:                 keccak256(abi.encodePacked("")) ||
473:                 keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].symbol)) ==
474:                 keccak256(abi.encodePacked(""))
475:             ) {
476:                 externalCurvesTokens[curvesTokenSubject].name = DEFAULT_NAME; // <= FOUND
477:                 externalCurvesTokens[curvesTokenSubject].symbol = DEFAULT_SYMBOL;
478:             }
479:             _deployERC20(
480:                 curvesTokenSubject,
481:                 externalCurvesTokens[curvesTokenSubject].name, // <= FOUND
482:                 externalCurvesTokens[curvesTokenSubject].symbol
483:             );
484:             externalToken = externalCurvesTokens[curvesTokenSubject].token;
485:         }
486:         _transfer(curvesTokenSubject, msg.sender, address(this), amount);
487:         CurvesERC20(externalToken).mint(msg.sender, amount * 1 ether);
488:     }

```


*GitHub* : [471](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L471-L481)
### [L-17]<a name="l-17"></a> Upgradeable contract uses non-upgradeable version of the OpenZeppelin libraries/contracts
Using the upgradeable counterpart of the OpenZeppelin (OZ) library in Solidity is beneficial for creating contracts that can be updated in the future. OpenZeppelin's upgradeable contracts library is designed with proxy patterns in mind, which allow the logic of contracts to be upgraded while preserving the contract's state and address. This can be crucial for long-lived contracts where future requirements or improvements may not be fully known at the time of deployment. The upgradeable OZ contracts also include protection against a class of vulnerabilities related to initialization of storage variables in upgradeable contracts. Hence, it's a good idea to use them when developing contracts that may need to be upgraded in the future, as they provide a solid foundation for secure and upgradeable smart contracts.

*There are 5 instance(s) of this issue:*

```solidity
7: import "@openzeppelin/contracts/token/ERC20/IERC20.sol"; // <= FOUND 'openzeppelin'

```


*GitHub* : [7](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L7-L7)

```solidity
5: import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol"; // <= FOUND 'openzeppelin'

```


*GitHub* : [5](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L5-L5)

```solidity
5: import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; // <= FOUND 'openzeppelin'

```


*GitHub* : [5](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L5-L5)

```solidity
4: import "@openzeppelin/contracts/access/Ownable.sol"; // <= FOUND 'openzeppelin'

```


*GitHub* : [4](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L4-L4)

```solidity
4: import "@openzeppelin/contracts/utils/Strings.sol"; // <= FOUND 'openzeppelin'

```


*GitHub* : [4](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L4-L4)
### [L-18]<a name="l-18"></a> Solidity version 0.8.20 won't work on all chains due to PUSH0
Solidity version 0.8.20 uses the new Shanghai EVM which introduces the PUSH0 opcode, this may not be implemented on all chains and L2 thus reducing the portability and compatability of the code. Consider using a earlier solidity version.

*There are 1 instance(s) of this issue:*

```solidity
2: pragma solidity ^0.8.7; // <= FOUND

```


*GitHub* : [2](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L2-L2)
### [L-19]<a name="l-19"></a> Unsafe use of transfer()/transferFrom() with IERC20
SafeTransfer should be used in place of Transfer for Solidity contracts to ensure robust security and error handling. Unlike the basic Transfer function, SafeTransfer incorporates safeguards against potential smart contract vulnerabilities, such as reentrancy attacks and unexpected token loss. By automatically validating the recipient's ability to receive tokens and reverting transactions in case of failures,

*There are 4 instance(s) of this issue:*

```solidity
465:     function withdraw(address curvesTokenSubject, uint256 amount) public { // <= FOUND
466:         if (amount > curvesTokenBalance[curvesTokenSubject][msg.sender]) revert InsufficientBalance();
467: 
468:         address externalToken = externalCurvesTokens[curvesTokenSubject].token;
469:         if (externalToken == address(0)) {
470:             if (
471:                 keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].name)) ==
472:                 keccak256(abi.encodePacked("")) ||
473:                 keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].symbol)) ==
474:                 keccak256(abi.encodePacked(""))
475:             ) {
476:                 externalCurvesTokens[curvesTokenSubject].name = DEFAULT_NAME;
477:                 externalCurvesTokens[curvesTokenSubject].symbol = DEFAULT_SYMBOL;
478:             }
479:             _deployERC20(
480:                 curvesTokenSubject,
481:                 externalCurvesTokens[curvesTokenSubject].name,
482:                 externalCurvesTokens[curvesTokenSubject].symbol
483:             );
484:             externalToken = externalCurvesTokens[curvesTokenSubject].token;
485:         }
486:         _transfer(curvesTokenSubject, msg.sender, address(this), amount); // <= FOUND
487:         CurvesERC20(externalToken).mint(msg.sender, amount * 1 ether);
488:     }

```


*GitHub* : [465](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L465-L486)

```solidity
490:     function deposit(address curvesTokenSubject, uint256 amount) public { // <= FOUND
491:         if (amount % 1 ether != 0) revert NonIntegerDepositAmount();
492: 
493:         address externalToken = externalCurvesTokens[curvesTokenSubject].token;
494:         uint256 tokenAmount = amount / 1 ether;
495: 
496:         if (externalToken == address(0)) revert TokenAbsentForCurvesTokenSubject();
497:         if (amount > CurvesERC20(externalToken).balanceOf(msg.sender)) revert InsufficientBalance();
498:         if (tokenAmount > curvesTokenBalance[curvesTokenSubject][address(this)]) revert InsufficientBalance();
499: 
500:         CurvesERC20(externalToken).burn(msg.sender, amount);
501:         _transfer(curvesTokenSubject, address(this), msg.sender, tokenAmount); // <= FOUND
502:     }

```


*GitHub* : [490](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L490-L501)

```solidity
80:     function claimFees(address token) external { // <= FOUND
81:         updateFeeCredit(token, msg.sender);
82:         uint256 claimable = getClaimableFees(token, msg.sender);
83:         if (claimable == 0) revert NoFeesToClaim();
84:         tokensData[token].unclaimedFees[msg.sender] = 0;
85:         payable(msg.sender).transfer(claimable); // <= FOUND
86:         emit FeesClaimed(token, msg.sender, claimable);
87:     }

```


*GitHub* : [80](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L80-L85)

```solidity
103:     function batchClaiming(address[] calldata tokenList) external { // <= FOUND
104:         uint256 totalClaimable = 0;
105:         for (uint256 i = 0; i < tokenList.length; i++) {
106:             address token = tokenList[i];
107:             updateFeeCredit(token, msg.sender);
108:             uint256 claimable = getClaimableFees(token, msg.sender);
109:             if (claimable > 0) {
110:                 tokensData[token].unclaimedFees[msg.sender] = 0;
111:                 totalClaimable += claimable;
112:                 emit FeesClaimed(token, msg.sender, claimable);
113:             }
114:         }
115:         if (totalClaimable == 0) revert NoFeesToClaim();
116:         payable(msg.sender).transfer(totalClaimable); // <= FOUND
117:     }

```


*GitHub* : [103](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L103-L116)### Gas Risk Issues


   ### [G-01]<a name="g-01"></a> Lack of unchecked in loops 
In Solidity, the `unchecked` block allows arithmetic operations to not revert on overflow. Without using `unchecked` in loops, extra gas is consumed due to overflow checks. If it's certain that overflows won't occur within the loop, using `unchecked` can make the loop more gas-efficient by skipping unnecessary checks.

*There are 4 instance(s) of this issue:*

```solidity
305:        for (uint256 i = 0; i < subjects.length; i++) {
306:             uint256 amount = curvesTokenBalance[subjects[i]][msg.sender];
307:             if (amount > 0) {
308:                 _transfer(subjects[i], msg.sender, to, amount);
309:             }
310:         }

```


*GitHub* : [305](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L305-L305)

```solidity
330:        for (uint256 i = 0; i < subjects.length; i++) {
331:             if (subjects[i] == curvesTokenSubject) {
332:                 return;
333:             }
334:         }

```


*GitHub* : [330](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L330-L330)

```solidity
55:        for (uint256 i = 0; i < tokens.length; i++) {
56:             address token = tokens[i];
57:             uint256 claimable = getClaimableFees(token, user);
58:             result[i] = UserClaimData(claimable, token);
59:         }

```


*GitHub* : [55](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L55-L55)

```solidity
105:        for (uint256 i = 0; i < tokenList.length; i++) {
106:             address token = tokenList[i];
107:             updateFeeCredit(token, msg.sender);
108:             uint256 claimable = getClaimableFees(token, msg.sender);
109:             if (claimable > 0) {
110:                 tokensData[token].unclaimedFees[msg.sender] = 0;
111:                 totalClaimable += claimable;
112:                 emit FeesClaimed(token, msg.sender, claimable);
113:             }
114:         }

```


*GitHub* : [105](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L105-L105)
### [G-02]<a name="g-02"></a> Multiple accesses of the same mapping/array key/index should be cached 
Caching repeated accesses to the same mapping or array key/index in smart contracts can lead to significant gas savings. In Solidity, each read operation from storage (like accessing a value in a mapping or array using a key or index) costs gas. By storing the accessed value in a local variable and reusing it within the function, you avoid multiple expensive storage read operations. This practice is particularly beneficial in loops or functions with multiple reads of the same data. Implementing this caching approach enhances efficiency and reduces transaction costs, which is crucial for optimizing smart contract performance and user experience on the blockchain.

*There are 2 instance(s) of this issue:*

```solidity
439:     function mint(address curvesTokenSubject) external onlyTokenSubject(curvesTokenSubject) {
440:         if (
441:             keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].name)) == // <= FOUND
442:             keccak256(abi.encodePacked("")) ||
443:             keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].symbol)) == // <= FOUND
444:             keccak256(abi.encodePacked(""))
445:         ) {
446:             externalCurvesTokens[curvesTokenSubject].name = DEFAULT_NAME; // <= FOUND
447:             externalCurvesTokens[curvesTokenSubject].symbol = DEFAULT_SYMBOL; // <= FOUND
448:         }
449:         _mint(
450:             curvesTokenSubject,
451:             externalCurvesTokens[curvesTokenSubject].name, // <= FOUND
452:             externalCurvesTokens[curvesTokenSubject].symbol // <= FOUND
453:         );
454:     }

```


*GitHub* : [439](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L439-L452)

```solidity
465:     function withdraw(address curvesTokenSubject, uint256 amount) public {
466:         if (amount > curvesTokenBalance[curvesTokenSubject][msg.sender]) revert InsufficientBalance(); // <= FOUND
467: 
468:         address externalToken = externalCurvesTokens[curvesTokenSubject].token; // <= FOUND
469:         if (externalToken == address(0)) {
470:             if (
471:                 keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].name)) == // <= FOUND
472:                 keccak256(abi.encodePacked("")) ||
473:                 keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].symbol)) == // <= FOUND
474:                 keccak256(abi.encodePacked(""))
475:             ) {
476:                 externalCurvesTokens[curvesTokenSubject].name = DEFAULT_NAME; // <= FOUND
477:                 externalCurvesTokens[curvesTokenSubject].symbol = DEFAULT_SYMBOL; // <= FOUND
478:             }
479:             _deployERC20(
480:                 curvesTokenSubject,
481:                 externalCurvesTokens[curvesTokenSubject].name, // <= FOUND
482:                 externalCurvesTokens[curvesTokenSubject].symbol // <= FOUND
483:             );
484:             externalToken = externalCurvesTokens[curvesTokenSubject].token; // <= FOUND
485:         }
486:         _transfer(curvesTokenSubject, msg.sender, address(this), amount);
487:         CurvesERC20(externalToken).mint(msg.sender, amount * 1 ether);
488:     }

```


*GitHub* : [465](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L465-L484)
### [G-03]<a name="g-03"></a> Shorten the array rather than copying to a new one 
Leveraging inline assembly in Solidity provides the ability to directly manipulate the length slot of an array, thereby altering its length without the need to copy the elements to a new array of the desired size. This technique is more gas-efficient as it avoids the computational expense associated with array duplication. However, this method circumvents the type-checking and safety mechanisms of high-level Solidity and should be used judiciously. Always ensure that the array doesn't contain vital data beyond the revised length, as this data will become unreachable yet still consume storage space.

*There are 1 instance(s) of this issue:*

```solidity
54:         UserClaimData[] memory result = new UserClaimData[](tokens.length); // <= FOUND

```


*GitHub* : [54](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L54-L54)
### [G-04]<a name="g-04"></a> Using bools for storage incurs overhead 
Using boolean variables (`bool`) for storage in Solidity can incur overhead due to the way data is packed in Ethereum's storage layout. A `bool` takes a full storage slot, even though it represents only a true or false value. This leads to inefficient usage of storage space and potentially higher gas costs. To resolve this issue, developers can use bit fields or uint8/uint256 to pack multiple boolean values into a single storage slot. By employing such optimization techniques, it's possible to save on storage space and reduce gas costs, making the contract more efficient.

*There are 1 instance(s) of this issue:*

```solidity
227:             bool referralDefined = referralFeeDestination[curvesTokenSubject] != address(0); // <= FOUND

```


*GitHub* : [227](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L227-L227)
### [G-05]<a name="g-05"></a> Low level call can be optimized with assembly
Low-level calls, when optimized with assembly, can save gas by avoiding unnecessary operations related to unused returndata. In a typical `.call`, Solidity automatically allocates memory and handles returndata even if it's not used, incurring extra gas costs. By using assembly, a developer can precisely control the execution, selectively ignoring or handling returndata, thereby optimizing gas usage. This specific control over the EVM allows for more efficient execution of calls by eliminating unnecessary memory operations, providing a more gas-efficient method when unused returndata is a concern. However, such optimization should be handled with care, as improper use of assembly might lead to vulnerabilities.

*There are 3 instance(s) of this issue:*

```solidity
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}(""); // <= FOUND

```


*GitHub* : [232](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L232-L232)

```solidity
236:                 (bool success2, ) = curvesTokenSubject.call{value: subjectFee}(""); // <= FOUND

```


*GitHub* : [236](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L236-L236)

```solidity
240:                 (bool success3, ) = referralDefined
241:                     ? referralFeeDestination[curvesTokenSubject].call{value: referralFee}("") // <= FOUND

```


*GitHub* : [241](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L241-L241)
### [G-06]<a name="g-06"></a> Consider Using Solady's Gas Optimized Lib for Math
In instances where many similar mathematical operations are performed, consider using Solday's math lib to benefit from the gas saving it can introduce.

*There are 8 instance(s) of this issue:*

```solidity
173:         protocolFee = (price * feesEconomics.protocolFeePercent) / 1 ether; // <= FOUND

```


*GitHub* : [173](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L173-L173)

```solidity
174:         subjectFee = (price * feesEconomics.subjectFeePercent) / 1 ether; // <= FOUND

```


*GitHub* : [174](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L174-L174)

```solidity
175:         referralFee = (price * feesEconomics.referralFeePercent) / 1 ether; // <= FOUND

```


*GitHub* : [175](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L175-L175)

```solidity
176:         holdersFee = (price * feesEconomics.holdersFeePercent) / 1 ether; // <= FOUND

```


*GitHub* : [176](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L176-L176)

```solidity
181:         uint256 sum1 = supply == 0 ? 0 : ((supply - 1) * (supply) * (2 * (supply - 1) + 1)) / 6; // <= FOUND

```


*GitHub* : [181](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L181-L181)

```solidity
182:         uint256 sum2 = supply == 0 && amount == 1
183:             ? 0
184:             : ((supply - 1 + amount) * (supply + amount) * (2 * (supply - 1 + amount) + 1)) / 6; // <= FOUND

```


*GitHub* : [182](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L182-L184)

```solidity
186:         return (summation * 1 ether) / 16000; // <= FOUND

```


*GitHub* : [186](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L186-L186)

```solidity
93:         data.cumulativeFeePerToken += (msg.value * PRECISION) / totalSupply_; // <= FOUND

```


*GitHub* : [93](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L93-L93)
### [G-07]<a name="g-07"></a> Optimize Gas by Splitting if() revert Statements
Optimizing gas in smart contracts is crucial for performance and cost-effectiveness. One strategy to achieve this is splitting if() statements accompanied by revert() into separate lines, rather than chaining them with the || (OR) boolean operator. This is because, in Solidity, when conditions are chained using ||, all conditions might get evaluated even if one of them is true, resulting in unnecessary gas consumption. By breaking them into separate if() statements, the contract will exit as soon as one condition is met, saving gas.

*There are 3 instance(s) of this issue:*

```solidity
129:         if ( // <= FOUND
130:             protocolFeePercent_ +
131:                 feesEconomics.subjectFeePercent +
132:                 feesEconomics.referralFeePercent +
133:                 feesEconomics.holdersFeePercent >
134:             feesEconomics.maxFeePercent || // <= FOUND
135:             protocolFeeDestination_ == address(0)
136:         ) revert InvalidFeeDefinition(); // <= FOUND

```


*GitHub* : [129](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L129-L136)

```solidity
265:         if (!(supply > 0 || curvesTokenSubject == msg.sender)) revert UnauthorizedCurvesTokenSubject(); // <= FOUND

```


*GitHub* : [265](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L265-L265)

```solidity
409:         if ( // <= FOUND
410:             presalesMeta[curvesTokenSubject].startTime == 0 || // <= FOUND
411:             presalesMeta[curvesTokenSubject].startTime <= block.timestamp
412:         ) revert PresaleUnavailable(); // <= FOUND

```


*GitHub* : [409](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L409-L412)
### [G-08]<a name="g-08"></a> x + y is more efficient than using += for state variables (likewise for -=)
In instances found where either += or -= are used against state variables use x = x + y instead

*There are 1 instance(s) of this issue:*

```solidity
338:     function _deployERC20(
339:         address curvesTokenSubject,
340:         string memory name,
341:         string memory symbol
342:     ) internal returns (address) {
343:         
344:         if (keccak256(bytes(symbol)) == keccak256(bytes(DEFAULT_SYMBOL))) {
345:             _curvesTokenCounter += 1; // <= FOUND
346:             name = string(abi.encodePacked(name, " ", Strings.toString(_curvesTokenCounter)));
347:             symbol = string(abi.encodePacked(symbol, Strings.toString(_curvesTokenCounter)));
348:         }
349: 
350:         if (symbolToSubject[symbol] != address(0)) revert InvalidERC20Metadata();
351: 
352:         address tokenContract = CurvesERC20Factory(curvesERC20Factory).deploy(name, symbol, address(this));
353: 
354:         externalCurvesTokens[curvesTokenSubject].token = tokenContract;
355:         externalCurvesTokens[curvesTokenSubject].name = name;
356:         externalCurvesTokens[curvesTokenSubject].symbol = symbol;
357:         externalCurvesToSubject[tokenContract] = curvesTokenSubject;
358:         symbolToSubject[symbol] = curvesTokenSubject;
359: 
360:         emit TokenDeployed(curvesTokenSubject, tokenContract, name, symbol);
361:         return address(tokenContract);
362:     }

```


*GitHub* : [345](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L345-L345)
### [G-09]<a name="g-09"></a> There are comparisons to boolean literals (true and false), these can be simplified to save gas
In such instances you can simplify as follows: if (<x> == true) ==> if (<x>) | if (<x> == false) ==> if (!<x>)

*There are 1 instance(s) of this issue:*

```solidity
13:     modifier onlyManager() {
14:         managers[msg.sender] == true; // <= FOUND
15:         _;
16:     }

```


*GitHub* : [14](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L14-L14)
### [G-10]<a name="g-10"></a> Public functions not used internally can be marked as external to save gas
Public functions that aren't used internally in Solidity contracts should be made external to optimize gas usage and improve contract efficiency. External functions can only be called from outside the contract, and their arguments are directly read from the calldata, which is more gas-efficient than loading them into memory, as is the case for public functions. By using external visibility, developers can reduce gas consumption for external calls and ensure that the contract operates more cost-effectively for users. Moreover, setting the appropriate visibility level for functions also enhances code readability and maintainability, promoting a more secure and well-structured contract design.

*There are 12 instance(s) of this issue:*

```solidity
155:     function setReferralFeeDestination(
156:         address curvesTokenSubject,
157:         address referralFeeDestination_
158:     ) public onlyTokenSubject(curvesTokenSubject) 

```


*GitHub* : [155](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L155-L155)

```solidity
197:     function getBuyPriceAfterFee(address curvesTokenSubject, uint256 amount) public view returns (uint256) 

```


*GitHub* : [197](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L197-L197)

```solidity
204:     function getSellPriceAfterFee(address curvesTokenSubject, uint256 amount) public view returns (uint256) 

```


*GitHub* : [204](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L204-L204)

```solidity
364:     function buyCurvesTokenWithName(
365:         address curvesTokenSubject,
366:         uint256 amount,
367:         string memory name,
368:         string memory symbol
369:     ) public payable 

```


*GitHub* : [364](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L364-L364)

```solidity
377:     function buyCurvesTokenForPresale(
378:         address curvesTokenSubject,
379:         uint256 amount,
380:         uint256 startTime,
381:         bytes32 merkleRoot,
382:         uint256 maxBuy
383:     ) public payable onlyTokenSubject(curvesTokenSubject) 

```


*GitHub* : [377](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L377-L377)

```solidity
404:     function buyCurvesTokenWhitelisted(
405:         address curvesTokenSubject,
406:         uint256 amount,
407:         bytes32[] memory proof
408:     ) public payable 

```


*GitHub* : [404](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L404-L404)

```solidity
465:     function withdraw(address curvesTokenSubject, uint256 amount) public 

```


*GitHub* : [465](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L465-L465)

```solidity
504:     function sellExternalCurvesToken(address curvesTokenSubject, uint256 amount) public 

```


*GitHub* : [504](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L504-L504)

```solidity
35:     function setCurves(Curves curves_) public 

```


*GitHub* : [35](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L35-L35)

```solidity
52:     function getUserTokensAndClaimable(address user) public view returns (UserClaimData[] memory) 

```


*GitHub* : [52](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L52-L52)

```solidity
89:     function addFees(address token) public payable onlyManager 

```


*GitHub* : [89](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L89-L89)

```solidity
23:     function setManager(address manager_, bool value) public onlyOwner 

```


*GitHub* : [23](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L23-L23)
### [G-11]<a name="g-11"></a> Use != 0 instead of > 0
Replace spotted instances with != 0 for uints as this uses less gas

*There are 6 instance(s) of this issue:*

```solidity
246: 
247:             if (feesEconomics.holdersFeePercent > 0 && address(feeRedistributor) != address(0)) { // <= FOUND

```


*GitHub* : [247](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L247-L247)

```solidity
265:         if (!(supply > 0 || curvesTokenSubject == msg.sender)) revert UnauthorizedCurvesTokenSubject(); // <= FOUND

```


*GitHub* : [265](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L265-L265)

```solidity
307:             if (amount > 0) { // <= FOUND

```


*GitHub* : [307](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L307-L307)

```solidity
66:         if (balance > 0) { // <= FOUND

```


*GitHub* : [66](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L66-L66)

```solidity
99:         if (balanceOf(token, account) > 0) userTokens[account].push(token); // <= FOUND

```


*GitHub* : [99](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L99-L99)

```solidity
109:             if (claimable > 0) { // <= FOUND

```


*GitHub* : [109](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L109-L109)
### [G-12]<a name="g-12"></a> Integer increments by one can be unchecked to save on gas fees
Using unchecked increments in Solidity can save on gas fees by bypassing built-in overflow checks, thus optimizing gas usage, but requires careful assessment of potential risks and edge cases to avoid unintended consequences.

*There are 4 instance(s) of this issue:*

```solidity
302:     function transferAllCurvesTokens(address to) external {
303:         if (to == address(this)) revert ContractCannotReceiveTransfer();
304:         address[] storage subjects = ownedCurvesTokenSubjects[msg.sender];
305:         for (uint256 i = 0; i < subjects.length; i++) { // <= FOUND
306:             uint256 amount = curvesTokenBalance[subjects[i]][msg.sender];
307:             if (amount > 0) {
308:                 _transfer(subjects[i], msg.sender, to, amount);
309:             }
310:         }
311:     }

```


*GitHub* : [305](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L305-L305)

```solidity
328:     function _addOwnedCurvesTokenSubject(address owner_, address curvesTokenSubject) internal {
329:         address[] storage subjects = ownedCurvesTokenSubjects[owner_];
330:         for (uint256 i = 0; i < subjects.length; i++) { // <= FOUND
331:             if (subjects[i] == curvesTokenSubject) {
332:                 return;
333:             }
334:         }
335:         subjects.push(curvesTokenSubject);
336:     }

```


*GitHub* : [330](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L330-L330)

```solidity
52:     function getUserTokensAndClaimable(address user) public view returns (UserClaimData[] memory) {
53:         address[] memory tokens = getUserTokens(user);
54:         UserClaimData[] memory result = new UserClaimData[](tokens.length);
55:         for (uint256 i = 0; i < tokens.length; i++) { // <= FOUND
56:             address token = tokens[i];
57:             uint256 claimable = getClaimableFees(token, user);
58:             result[i] = UserClaimData(claimable, token);
59:         }
60:         return result;
61:     }

```


*GitHub* : [55](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L55-L55)

```solidity
103:     function batchClaiming(address[] calldata tokenList) external {
104:         uint256 totalClaimable = 0;
105:         for (uint256 i = 0; i < tokenList.length; i++) { // <= FOUND
106:             address token = tokenList[i];
107:             updateFeeCredit(token, msg.sender);
108:             uint256 claimable = getClaimableFees(token, msg.sender);
109:             if (claimable > 0) {
110:                 tokensData[token].unclaimedFees[msg.sender] = 0;
111:                 totalClaimable += claimable;
112:                 emit FeesClaimed(token, msg.sender, claimable);
113:             }
114:         }
115:         if (totalClaimable == 0) revert NoFeesToClaim();
116:         payable(msg.sender).transfer(totalClaimable);
117:     }

```


*GitHub* : [105](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L105-L105)
### [G-13]<a name="g-13"></a> Use byte32 in place of string
For strings of 32 char strings and below you can use bytes32 instead as it's more gas efficient

*There are 3 instance(s) of this issue:*

```solidity
44:     string public constant DEFAULT_NAME = "Curves"; // <= FOUND

```


*GitHub* : [44](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L44-L44)

```solidity
45:     string public constant DEFAULT_SYMBOL = "CURVES"; // <= FOUND

```


*GitHub* : [45](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L45-L45)

```solidity
346:             name = string(abi.encodePacked(name, " ", Strings.toString(_curvesTokenCounter))); // <= FOUND

```


*GitHub* : [346](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L346-L346)
### [G-14]<a name="g-14"></a> Default int values are manually reset
Using .delete is better than resetting a Solidity variable to its default value manually because it frees up storage space on the Ethereum blockchain, resulting in gas cost savings.

*There are 2 instance(s) of this issue:*

```solidity
84:         tokensData[token].unclaimedFees[msg.sender] = 0; // <= FOUND

```


*GitHub* : [84](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L84-L84)

```solidity
110:                 tokensData[token].unclaimedFees[msg.sender] = 0; // <= FOUND

```


*GitHub* : [110](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L110-L110)
### [G-15]<a name="g-15"></a> <= or >= is more efficient than < or > 
Make such found comparisons to the <=/>= equivalent when comparing against integer literals

*There are 1 instance(s) of this issue:*

```solidity
396:         if (supply > 1) revert CurveAlreadyExists(); // <= FOUND

```


*GitHub* : [396](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L396-L396)
### [G-16]<a name="g-16"></a> Mappings used within a function more than once should be cached to save gas
Cache such mappings and perform operations on them, if operations include modifications to the mapping(s) then remember to equate the mapping to it's cached counterpart at the end

*There are 1 instance(s) of this issue:*

```solidity
338:     function _deployERC20( // <= FOUND
339:         address curvesTokenSubject,
340:         string memory name,
341:         string memory symbol
342:     ) internal returns (address) {
343:         
344:         if (keccak256(bytes(symbol)) == keccak256(bytes(DEFAULT_SYMBOL))) {
345:             _curvesTokenCounter += 1;
346:             name = string(abi.encodePacked(name, " ", Strings.toString(_curvesTokenCounter)));
347:             symbol = string(abi.encodePacked(symbol, Strings.toString(_curvesTokenCounter)));
348:         }
349: 
350:         if (symbolToSubject[symbol] != address(0)) revert InvalidERC20Metadata(); // <= FOUND
351: 
352:         address tokenContract = CurvesERC20Factory(curvesERC20Factory).deploy(name, symbol, address(this));
353: 
354:         externalCurvesTokens[curvesTokenSubject].token = tokenContract;
355:         externalCurvesTokens[curvesTokenSubject].name = name;
356:         externalCurvesTokens[curvesTokenSubject].symbol = symbol;
357:         externalCurvesToSubject[tokenContract] = curvesTokenSubject;
358:         symbolToSubject[symbol] = curvesTokenSubject; // <= FOUND
359: 
360:         emit TokenDeployed(curvesTokenSubject, tokenContract, name, symbol);
361:         return address(tokenContract);
362:     }

```


*GitHub* : [338](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L338-L358)
### [G-17]<a name="g-17"></a> Use assembly to check for the zero address

Using assembly for address comparisons in Solidity can save gas because it allows for more direct access to the Ethereum Virtual Machine (EVM), reducing the overhead of higher-level operations. Solidity's high-level abstraction simplifies coding but can introduce additional gas costs. Using assembly for simple operations like address comparisons can be more gas-efficient.

*There are 8 instance(s) of this issue:*

```solidity
128:     function setProtocolFeePercent(uint256 protocolFeePercent_, address protocolFeeDestination_) external onlyOwner {
129:         if (
130:             protocolFeePercent_ +
131:                 feesEconomics.subjectFeePercent +
132:                 feesEconomics.referralFeePercent +
133:                 feesEconomics.holdersFeePercent >
134:             feesEconomics.maxFeePercent ||
135:             protocolFeeDestination_ == address(0) // <= FOUND
136:         ) revert InvalidFeeDefinition();
137:         feesEconomics.protocolFeePercent = protocolFeePercent_;
138:         feesEconomics.protocolFeeDestination = protocolFeeDestination_;
139:     }

```


*GitHub* : [128](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L128-L135)

```solidity
218:     function _transferFees(
219:         address curvesTokenSubject,
220:         bool isBuy,
221:         uint256 price,
222:         uint256 amount,
223:         uint256 supply
224:     ) internal {
225:         (uint256 protocolFee, uint256 subjectFee, uint256 referralFee, uint256 holderFee, ) = getFees(price);
226:         {
227:             bool referralDefined = referralFeeDestination[curvesTokenSubject] != address(0); // <= FOUND
228:             {
229:                 address firstDestination = isBuy ? feesEconomics.protocolFeeDestination : msg.sender;
230:                 uint256 buyValue = referralDefined ? protocolFee : protocolFee + referralFee;
231:                 uint256 sellValue = price - protocolFee - subjectFee - referralFee - holderFee;
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}("");
233:                 if (!success1) revert CannotSendFunds();
234:             }
235:             {
236:                 (bool success2, ) = curvesTokenSubject.call{value: subjectFee}("");
237:                 if (!success2) revert CannotSendFunds();
238:             }
239:             {
240:                 (bool success3, ) = referralDefined
241:                     ? referralFeeDestination[curvesTokenSubject].call{value: referralFee}("")
242:                     : (true, bytes(""));
243:                 if (!success3) revert CannotSendFunds();
244:             }
245: 
246:             if (feesEconomics.holdersFeePercent > 0 && address(feeRedistributor) != address(0)) { // <= FOUND
247:                 feeRedistributor.onBalanceChange(curvesTokenSubject, msg.sender);
248:                 feeRedistributor.addFees{value: holderFee}(curvesTokenSubject);
249:             }
250:         }
251:         emit Trade(
252:             msg.sender,
253:             curvesTokenSubject,
254:             isBuy,
255:             amount,
256:             price,
257:             protocolFee,
258:             subjectFee,
259:             isBuy ? supply + amount : supply - amount
260:         );
261:     }

```


*GitHub* : [218](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L218-L246)

```solidity
338:     function _deployERC20(
339:         address curvesTokenSubject,
340:         string memory name,
341:         string memory symbol
342:     ) internal returns (address) {
343:         
344:         if (keccak256(bytes(symbol)) == keccak256(bytes(DEFAULT_SYMBOL))) {
345:             _curvesTokenCounter += 1;
346:             name = string(abi.encodePacked(name, " ", Strings.toString(_curvesTokenCounter)));
347:             symbol = string(abi.encodePacked(symbol, Strings.toString(_curvesTokenCounter)));
348:         }
349: 
350:         if (symbolToSubject[symbol] != address(0)) revert InvalidERC20Metadata(); // <= FOUND
351: 
352:         address tokenContract = CurvesERC20Factory(curvesERC20Factory).deploy(name, symbol, address(this));
353: 
354:         externalCurvesTokens[curvesTokenSubject].token = tokenContract;
355:         externalCurvesTokens[curvesTokenSubject].name = name;
356:         externalCurvesTokens[curvesTokenSubject].symbol = symbol;
357:         externalCurvesToSubject[tokenContract] = curvesTokenSubject;
358:         symbolToSubject[symbol] = curvesTokenSubject;
359: 
360:         emit TokenDeployed(curvesTokenSubject, tokenContract, name, symbol);
361:         return address(tokenContract);
362:     }

```


*GitHub* : [338](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L338-L350)

```solidity
428:     function setNameAndSymbol(
429:         address curvesTokenSubject,
430:         string memory name,
431:         string memory symbol
432:     ) external onlyTokenSubject(curvesTokenSubject) {
433:         if (externalCurvesTokens[curvesTokenSubject].token != address(0)) revert ERC20TokenAlreadyMinted(); // <= FOUND
434:         if (symbolToSubject[symbol] != address(0)) revert InvalidERC20Metadata(); // <= FOUND
435:         externalCurvesTokens[curvesTokenSubject].name = name;
436:         externalCurvesTokens[curvesTokenSubject].symbol = symbol;
437:     }

```


*GitHub* : [428](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L428-L434)

```solidity
456:     function _mint(
457:         address curvesTokenSubject,
458:         string memory name,
459:         string memory symbol
460:     ) internal onlyTokenSubject(curvesTokenSubject) {
461:         if (externalCurvesTokens[curvesTokenSubject].token != address(0)) revert ERC20TokenAlreadyMinted(); // <= FOUND
462:         _deployERC20(curvesTokenSubject, name, symbol);
463:     }

```


*GitHub* : [456](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L456-L461)

```solidity
465:     function withdraw(address curvesTokenSubject, uint256 amount) public {
466:         if (amount > curvesTokenBalance[curvesTokenSubject][msg.sender]) revert InsufficientBalance();
467: 
468:         address externalToken = externalCurvesTokens[curvesTokenSubject].token;
469:         if (externalToken == address(0)) { // <= FOUND
470:             if (
471:                 keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].name)) ==
472:                 keccak256(abi.encodePacked("")) ||
473:                 keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].symbol)) ==
474:                 keccak256(abi.encodePacked(""))
475:             ) {
476:                 externalCurvesTokens[curvesTokenSubject].name = DEFAULT_NAME;
477:                 externalCurvesTokens[curvesTokenSubject].symbol = DEFAULT_SYMBOL;
478:             }
479:             _deployERC20(
480:                 curvesTokenSubject,
481:                 externalCurvesTokens[curvesTokenSubject].name,
482:                 externalCurvesTokens[curvesTokenSubject].symbol
483:             );
484:             externalToken = externalCurvesTokens[curvesTokenSubject].token;
485:         }
486:         _transfer(curvesTokenSubject, msg.sender, address(this), amount);
487:         CurvesERC20(externalToken).mint(msg.sender, amount * 1 ether);
488:     }

```


*GitHub* : [465](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L465-L469)

```solidity
490:     function deposit(address curvesTokenSubject, uint256 amount) public {
491:         if (amount % 1 ether != 0) revert NonIntegerDepositAmount();
492: 
493:         address externalToken = externalCurvesTokens[curvesTokenSubject].token;
494:         uint256 tokenAmount = amount / 1 ether;
495: 
496:         if (externalToken == address(0)) revert TokenAbsentForCurvesTokenSubject(); // <= FOUND
497:         if (amount > CurvesERC20(externalToken).balanceOf(msg.sender)) revert InsufficientBalance();
498:         if (tokenAmount > curvesTokenBalance[curvesTokenSubject][address(this)]) revert InsufficientBalance();
499: 
500:         CurvesERC20(externalToken).burn(msg.sender, amount);
501:         _transfer(curvesTokenSubject, address(this), msg.sender, tokenAmount);
502:     }

```


*GitHub* : [490](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L490-L496)

```solidity
504:     function sellExternalCurvesToken(address curvesTokenSubject, uint256 amount) public {
505:         if (externalCurvesTokens[curvesTokenSubject].token == address(0)) revert TokenAbsentForCurvesTokenSubject(); // <= FOUND
506: 
507:         deposit(curvesTokenSubject, amount);
508:         sellCurvesToken(curvesTokenSubject, amount / 1 ether);
509:     }

```


*GitHub* : [504](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L504-L505)
### [G-18]<a name="g-18"></a> Divisions which do not divide by -X cannot overflow or overflow so such operations can be unchecked to save gas
Make such found divisions are unchecked when ensured it is safe to do so

*There are 6 instance(s) of this issue:*

```solidity
166:     function getFees(
167:         uint256 price
168:     )
169:         public
170:         view
171:         returns (uint256 protocolFee, uint256 subjectFee, uint256 referralFee, uint256 holdersFee, uint256 totalFee)
172:     {
173:         protocolFee = (price * feesEconomics.protocolFeePercent) / 1 ether; // <= FOUND
174:         subjectFee = (price * feesEconomics.subjectFeePercent) / 1 ether; // <= FOUND
175:         referralFee = (price * feesEconomics.referralFeePercent) / 1 ether; // <= FOUND
176:         holdersFee = (price * feesEconomics.holdersFeePercent) / 1 ether; // <= FOUND
177:         totalFee = protocolFee + subjectFee + referralFee + holdersFee;
178:     }

```


*GitHub* : [173](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L173-L176)

```solidity
180:     function getPrice(uint256 supply, uint256 amount) public pure returns (uint256) {
181:         uint256 sum1 = supply == 0 ? 0 : ((supply - 1) * (supply) * (2 * (supply - 1) + 1)) / 6; // <= FOUND
182:         uint256 sum2 = supply == 0 && amount == 1
183:             ? 0
184:             : ((supply - 1 + amount) * (supply + amount) * (2 * (supply - 1 + amount) + 1)) / 6; // <= FOUND
185:         uint256 summation = sum2 - sum1;
186:         return (summation * 1 ether) / 16000; // <= FOUND
187:     }

```


*GitHub* : [181](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L181-L186)

```solidity
490:     function deposit(address curvesTokenSubject, uint256 amount) public {
491:         if (amount % 1 ether != 0) revert NonIntegerDepositAmount();
492: 
493:         address externalToken = externalCurvesTokens[curvesTokenSubject].token;
494:         uint256 tokenAmount = amount / 1 ether; // <= FOUND
495: 
496:         if (externalToken == address(0)) revert TokenAbsentForCurvesTokenSubject();
497:         if (amount > CurvesERC20(externalToken).balanceOf(msg.sender)) revert InsufficientBalance();
498:         if (tokenAmount > curvesTokenBalance[curvesTokenSubject][address(this)]) revert InsufficientBalance();
499: 
500:         CurvesERC20(externalToken).burn(msg.sender, amount);
501:         _transfer(curvesTokenSubject, address(this), msg.sender, tokenAmount);
502:     }

```


*GitHub* : [494](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L494-L494)

```solidity
504:     function sellExternalCurvesToken(address curvesTokenSubject, uint256 amount) public {
505:         if (externalCurvesTokens[curvesTokenSubject].token == address(0)) revert TokenAbsentForCurvesTokenSubject();
506: 
507:         deposit(curvesTokenSubject, amount);
508:         sellCurvesToken(curvesTokenSubject, amount / 1 ether); // <= FOUND
509:     }

```


*GitHub* : [508](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L508-L508)

```solidity
63:     function updateFeeCredit(address token, address account) internal {
64:         TokenData storage data = tokensData[token];
65:         uint256 balance = balanceOf(token, account);
66:         if (balance > 0) {
67:             uint256 owed = (data.cumulativeFeePerToken - data.userFeeOffset[account]) * balance;
68:             data.unclaimedFees[account] += owed / PRECISION; // <= FOUND
69:             data.userFeeOffset[account] = data.cumulativeFeePerToken;
70:         }
71:     }

```


*GitHub* : [68](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L68-L68)

```solidity
73:     function getClaimableFees(address token, address account) public view returns (uint256) {
74:         TokenData storage data = tokensData[token];
75:         uint256 balance = balanceOf(token, account);
76:         uint256 owed = (data.cumulativeFeePerToken - data.userFeeOffset[account]) * balance;
77:         return (owed / PRECISION) + data.unclaimedFees[account]; // <= FOUND
78:     }

```


*GitHub* : [77](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L77-L77)
### [G-19]<a name="g-19"></a> Struct variables can be packed into fewer storage slots
In Solidity, each storage slot has a size of 32 bytes. If a struct contains multiple uint values, it's efficient to pack these into as few storage slots as possible to optimize gas usage. The EVM (Ethereum Virtual Machine) charges gas for each storage operation, so minimizing the number of slots used can result in substantial gas savings. This can be achieved by ordering struct fields according to their size or by using smaller data types where possible. However, developers must balance these optimizations with the need for code clarity and the precision requirements of their application. Always ensure that data packing does not compromise the functionality or security of the contract.

*There are 2 instance(s) of this issue:*

```solidity
55:     struct PresaleMeta {
56:         uint256 startTime; // <= FOUND
57:         bytes32 merkleRoot;
58:         uint256 maxBuy; // <= FOUND
59:     }

```


*GitHub* : [55](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L55-L58)

```solidity
68:     struct FeesEconomics {
69:         address protocolFeeDestination;
70:         uint256 protocolFeePercent; // <= FOUND
71:         uint256 subjectFeePercent; // <= FOUND
72:         uint256 referralFeePercent; // <= FOUND
73:         uint256 holdersFeePercent; // <= FOUND
74:         uint256 maxFeePercent; // <= FOUND
75:     }

```


*GitHub* : [68](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L68-L74)
### [G-20]<a name="g-20"></a> Consider activating via-ir for deploying
The Solidity compiler's Intermediate Representation (IR) based code generator, which can be activated using --via-ir on the command line or {"viaIR": true} in the options, serves a dual purpose. Firstly, it boosts the transparency and audibility of code generation, which enhances developers' comprehension and control over the contract's final bytecode. Secondly, it enables more sophisticated optimization passes that span multiple functions, thereby potentially leading to more efficient bytecode.

It's important to note that using the IR-based code generator may lengthen compile times due to the extra optimization steps. Therefore, it's advised to test your contract with and without this option enabled to measure the performance and gas cost implications. If the IR-based code generator significantly enhances your contract's performance or reduces gas costs, consider using the --via-ir flag during deployment. This way, you can leverage more advanced compiler optimizations without hindering your development workflow.

*There are 1 instance(s) of this issue:*

```solidity
10: all

```


*GitHub* : [10](https://github.com/code-423n4/2024-01-curves/blob/main/package.json#L10-L10)
### [G-21]<a name="g-21"></a> Add unchecked {} for subtractions where the operands cannot underflow
n Solidity 0.8.x and above, arithmetic operations like subtraction automatically check for underflows and overflows, and revert the transaction if such a condition is met. This built-in safety feature provides a layer of security against potential numerical errors. However, these automatic checks also come with additional gas costs.

In some situations, you may already have a guard condition, like a require() statement or an if statement, that ensures the safety of the arithmetic operation. In such cases, the automatic check becomes redundant and leads to unnecessary gas expenditure.

For example, you may have a function that subtracts a smaller number from a larger one, and you may have already verified that the smaller number is indeed smaller. In this case, you're already sure that the subtraction operation won't underflow, so there's no need for the automatic check.

In these situations, you can use the unchecked { } block around the subtraction operation to skip the automatic check. This will reduce gas costs and make your contract more efficient, without sacrificing security. However, it's critical to use unchecked { } only when you're absolutely sure that the operation is safe.

*There are 4 instance(s) of this issue:*

```solidity
185:         uint256 summation = sum2 - sum1; // <= FOUND

```


*GitHub* : [185](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L185-L185)

```solidity
231:                 uint256 sellValue = price - protocolFee - subjectFee - referralFee - holderFee; // <= FOUND

```


*GitHub* : [231](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L231-L231)

```solidity
290:         curvesTokenSupply[curvesTokenSubject] = supply - amount; // <= FOUND

```


*GitHub* : [290](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L290-L290)

```solidity
321: 
322:         curvesTokenBalance[curvesTokenSubject][from] = curvesTokenBalance[curvesTokenSubject][from] - amount; // <= FOUND

```


*GitHub* : [321](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L321-L322)
### [G-22]<a name="g-22"></a> Use bitmap to save gas
Bitmaps in Solidity are essentially a way of representing a set of boolean values within an integer type variable such as `uint256`. Each bit in the integer represents a true or false value (1 or 0), thus allowing efficient storage of multiple boolean values.

Bitmaps can save gas in the Ethereum network because they condense a lot of information into a small amount of storage. In Ethereum, storage is one of the most significant costs in terms of gas usage. By reducing the amount of storage space needed, you can potentially save on gas fees.

Here's a quick comparison:

If you were to represent 256 different boolean values in the traditional way, you would have to declare 256 different `bool` variables. Given that each `bool` occupies a storage slot and each storage slot costs 20,000 gas to initialize, you would end up paying a considerable amount of gas.

On the other hand, if you were to use a bitmap, you could store these 256 boolean values within a single `uint256` variable. In other words, you'd only pay for a single storage slot, resulting in significant gas savings.

However, it's important to note that while bitmaps can provide gas efficiencies, they do add complexity to the code, making it harder to read and maintain. Also, using bitmaps is efficient only when dealing with a large number of boolean variables that are frequently changed or accessed together. 

In contrast, the straightforward counterpart to bitmaps would be using arrays or mappings to store boolean values, with each `bool` value occupying its own storage slot. This approach is simpler and more readable but could potentially be more expensive in terms of gas usage.

*There are 2 instance(s) of this issue:*

```solidity
14:         managers[msg.sender] == true; // <= FOUND

```


*GitHub* : [14](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L14-L14)

```solidity
20:         managers[msg.sender] = true; // <= FOUND

```


*GitHub* : [20](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L20-L20)
### [G-23]<a name="g-23"></a> Use assembly hashing
From a gas standpoint, the assembly version of the keccak256 hashing function can be more efficient than the high-level Solidity version. This is because Solidity has additional overhead when handling function calls and memory management, which can increase the gas cost.

*There are 1 instance(s) of this issue:*

```solidity
424:         
425:         bytes32 leaf = keccak256(abi.encodePacked(caller)); // <= FOUND

```


*GitHub* : [424](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L424-L425)
### [G-24]<a name="g-24"></a> Consider using OZ EnumerateSet in place of nested mappings
Nested mappings and multi-dimensional arrays in Solidity operate through a process of double hashing, wherein the original storage slot and the first key are concatenated and hashed, and then this hash is again concatenated with the second key and hashed. This process can be quite gas expensive due to the double-hashing operation and subsequent storage operation (sstore).

A possible optimization involves manually concatenating the keys followed by a single hash operation and an sstore. However, this technique introduces the risk of storage collision, especially when there are other nested hash maps in the contract that use the same key types. Because Solidity is unaware of the number and structure of nested hash maps in a contract, it follows a conservative approach in computing the storage slot to avoid possible collisions.

OpenZeppelin's EnumerableSet provides a potential solution to this problem. It creates a data structure that combines the benefits of set operations with the ability to enumerate stored elements, which is not natively available in Solidity. EnumerableSet handles the element uniqueness internally and can therefore provide a more gas-efficient and collision-resistant alternative to nested mappings or multi-dimensional arrays in certain scenarios.

*There are 2 instance(s) of this issue:*

```solidity
66:     mapping(address => mapping(address => uint256)) public presalesBuys; // <= FOUND

```


*GitHub* : [66](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L66-L66)

```solidity
96:     mapping(address => mapping(address => uint256)) public curvesTokenBalance; // <= FOUND

```


*GitHub* : [96](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L96-L96)
### [G-25]<a name="g-25"></a> Use assembly to emit events
With the use of inline assembly in Solidity, we can take advantage of low-level features like scratch space and the free memory pointer, offering more gas-efficient ways of emitting events. The scratch space is a certain area of memory where we can temporarily store data, and the free memory pointer indicates the next available memory slot. Using these, we can efficiently assemble event data without incurring additional memory expansion costs. However, safety is paramount: to avoid overwriting or leakage, we must cache the free memory pointer before use and restore it afterward, ensuring that it points to the correct memory location post-operation.

*There are 6 instance(s) of this issue:*

```solidity
251:         emit Trade( // <= FOUND
252:             msg.sender,
253:             curvesTokenSubject,
254:             isBuy,
255:             amount,
256:             price,
257:             protocolFee,
258:             subjectFee,
259:             isBuy ? supply + amount : supply - amount
260:         );

```


*GitHub* : [251](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L251-L251)

```solidity
324: 
325:         emit Transfer(curvesTokenSubject, from, to, amount); // <= FOUND

```


*GitHub* : [325](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L325-L325)

```solidity
360: 
361:         emit TokenDeployed(curvesTokenSubject, tokenContract, name, symbol); // <= FOUND

```


*GitHub* : [361](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L361-L361)

```solidity
400:             emit WhitelistUpdated(msg.sender, merkleRoot); // <= FOUND

```


*GitHub* : [400](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L400-L400)

```solidity
86:         emit FeesClaimed(token, msg.sender, claimable); // <= FOUND

```


*GitHub* : [86](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L86-L86)

```solidity
112:                 emit FeesClaimed(token, msg.sender, claimable); // <= FOUND

```


*GitHub* : [112](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L112-L112)
### [G-26]<a name="g-26"></a> Use solady library where possible to save gas
The following OpenZeppelin imports have a Solady equivalent, as such they can be used to save GAS as Solady modules have been specifically designed to be as GAS efficient as possible

*There are 3 instance(s) of this issue:*

```solidity
4: import "@openzeppelin/contracts/access/Ownable.sol"; // <= FOUND

```


*GitHub* : [4](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L4-L4)

```solidity
7: import "@openzeppelin/contracts/token/ERC20/IERC20.sol"; // <= FOUND

```


*GitHub* : [7](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L7-L7)

```solidity
5: import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; // <= FOUND

```


*GitHub* : [5](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L5-L5)
### [G-27]<a name="g-27"></a> Counting down in for statements is more gas efficient
Looping downwards in Solidity is more gas efficient due to how the EVM compares variables. In a 'for' loop that counts down, the end condition is usually to compare with zero, which is cheaper than comparing with another number. As such, restructure your loops to count downwards where possible.

*There are 4 instance(s) of this issue:*

```solidity
305:        for (uint256 i = 0; i < subjects.length; i++) { // <= FOUND
306:             uint256 amount = curvesTokenBalance[subjects[i]][msg.sender];
307:             if (amount > 0) {
308:                 _transfer(subjects[i], msg.sender, to, amount);
309:             }
310:         }

```


*GitHub* : [305](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L305-L305)

```solidity
330:        for (uint256 i = 0; i < subjects.length; i++) { // <= FOUND
331:             if (subjects[i] == curvesTokenSubject) {
332:                 return;
333:             }
334:         }

```


*GitHub* : [330](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L330-L330)

```solidity
55:        for (uint256 i = 0; i < tokens.length; i++) { // <= FOUND
56:             address token = tokens[i];
57:             uint256 claimable = getClaimableFees(token, user);
58:             result[i] = UserClaimData(claimable, token);
59:         }

```


*GitHub* : [55](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L55-L55)

```solidity
105:        for (uint256 i = 0; i < tokenList.length; i++) { // <= FOUND
106:             address token = tokenList[i];
107:             updateFeeCredit(token, msg.sender);
108:             uint256 claimable = getClaimableFees(token, msg.sender);
109:             if (claimable > 0) {
110:                 tokensData[token].unclaimedFees[msg.sender] = 0;
111:                 totalClaimable += claimable;
112:                 emit FeesClaimed(token, msg.sender, claimable);
113:             }
114:         }

```


*GitHub* : [105](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L105-L105)
### [G-28]<a name="g-28"></a> State variables can be packed into fewer storage slots by truncating timestamp bytes
State variables in Solidity are typically stored in 32-byte storage slots. When dealing with timestamps, which generally fit into a smaller byte size, it can be beneficial to truncate these bytes and pack them with other variables. This reduces the number of required storage slots, saving both storage space and associated gas costs. For example, a timestamp generally fits into a uint32, so it can be combined with other small variables within a single storage slot. When designing a contract, carefully structuring state variables to utilize truncation and packing can lead to a more efficient and cost-effective implementation.

*There are 1 instance(s) of this issue:*

```solidity
55:     struct PresaleMeta { // <= FOUND
56:         uint256 startTime; // <= FOUND
57:         bytes32 merkleRoot;
58:         uint256 maxBuy;
59:     }

```


*GitHub* : [55](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L55-L56)
### [G-29]<a name="g-29"></a> Using private rather than public for constants and immutables, saves gas
Using private visibility for constants and immutables in Solidity instead of public can save gas. This is because private elements are not included in the contract's ABI, reducing the deployment and interaction costs. To achieve better efficiency, it is recommended to use private visibility when external access is not needed.

*There are 2 instance(s) of this issue:*

```solidity
44: string public constant DEFAULT_NAME = "Curves"; // <= FOUND

```


*GitHub* : [44](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L44-L44)

```solidity
45: string public constant DEFAULT_SYMBOL = "CURVES"; // <= FOUND

```


*GitHub* : [45](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L45-L45)
### [G-30]<a name="g-30"></a> Identical Deployments Should be Replaced with Clone
In the context of smart contracts, deploying multiple identical contracts can lead to inefficient use of gas and unnecessarily duplicate code on the blockchain. A more gas-efficient approach is to use a "clone" pattern. By deploying a master contract and then creating clones of it, only the differences between the instances are stored for each clone. This approach leverages the EIP-1167 standard, which defines a minimal proxy contract that points to the implementation contract. Clones can be far cheaper to deploy compared to full instances. So, the resolution is to replace identical deployments with clones, saving on gas and storage space.

*There are 1 instance(s) of this issue:*

```solidity
352: 
353:         address tokenContract = CurvesERC20Factory(curvesERC20Factory).deploy(name, symbol, address(this)); // <= FOUND

```


*GitHub* : [352](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L352-L353)
### [G-31]<a name="g-31"></a> Mark Functions That Revert For Normal Users As payable
In Solidity, marking functions as `payable` allows them to accept Ether. If a function is known to revert for regular users (non-admin or specific roles) but needs to be accessible to others, marking it as `payable` can be beneficial. This ensures that even if a regular user accidentally sends Ether to the function, the Ether won't be trapped, as the function reverts, returning the funds. This can save gas by avoiding unnecessary failure handling in the function itself. Resolution: Carefully assess the roles and access patterns, and mark functions that should revert for regular users as `payable` to handle accidental Ether transfers.

*There are 9 instance(s) of this issue:*

```solidity
113:     function setFeeRedistributor(address feeRedistributor_) external onlyOwner {
114:         feeRedistributor = FeeSplitter(payable(feeRedistributor_));
115:     }

```


*GitHub* : [113](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L113-L113)

```solidity
128:     function setProtocolFeePercent(uint256 protocolFeePercent_, address protocolFeeDestination_) external onlyOwner {
129:         if (
130:             protocolFeePercent_ +
131:                 feesEconomics.subjectFeePercent +
132:                 feesEconomics.referralFeePercent +
133:                 feesEconomics.holdersFeePercent >
134:             feesEconomics.maxFeePercent ||
135:             protocolFeeDestination_ == address(0)
136:         ) revert InvalidFeeDefinition();
137:         feesEconomics.protocolFeePercent = protocolFeePercent_;
138:         feesEconomics.protocolFeeDestination = protocolFeeDestination_;
139:     }

```


*GitHub* : [128](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L128-L128)

```solidity
162:     function setERC20Factory(address factory_) external onlyOwner {
163:         curvesERC20Factory = factory_;
164:     }

```


*GitHub* : [162](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L162-L162)

```solidity
23:     function setManager(address manager_, bool value) public onlyOwner {
24:         managers[manager_] = value;
25:     }

```


*GitHub* : [23](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L23-L23)

```solidity
12:     function mint(address to, uint256 amount) public onlyOwner {
13:         _mint(to, amount);
14:     }

```


*GitHub* : [12](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L12-L12)

```solidity
16:     function burn(address from, uint256 amount) public onlyOwner {
17:         _burn(from, amount);
18:     }

```


*GitHub* : [16](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L16-L16)

```solidity
117:     function setMaxFeePercent(uint256 maxFeePercent_) external onlyManager {
118:         if (
119:             feesEconomics.protocolFeePercent +
120:                 feesEconomics.subjectFeePercent +
121:                 feesEconomics.referralFeePercent +
122:                 feesEconomics.holdersFeePercent >
123:             maxFeePercent_
124:         ) revert InvalidFeeDefinition();
125:         feesEconomics.maxFeePercent = maxFeePercent_;
126:     }

```


*GitHub* : [117](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L117-L117)

```solidity
141:     function setExternalFeePercent(
142:         uint256 subjectFeePercent_,
143:         uint256 referralFeePercent_,
144:         uint256 holdersFeePercent_
145:     ) external onlyManager {
146:         if (
147:             feesEconomics.protocolFeePercent + subjectFeePercent_ + referralFeePercent_ + holdersFeePercent_ >
148:             feesEconomics.maxFeePercent
149:         ) revert InvalidFeeDefinition();
150:         feesEconomics.subjectFeePercent = subjectFeePercent_;
151:         feesEconomics.referralFeePercent = referralFeePercent_;
152:         feesEconomics.holdersFeePercent = holdersFeePercent_;
153:     }

```


*GitHub* : [141](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L141-L141)

```solidity
96:     function onBalanceChange(address token, address account) public onlyManager {
97:         TokenData storage data = tokensData[token];
98:         data.userFeeOffset[account] = data.cumulativeFeePerToken;
99:         if (balanceOf(token, account) > 0) userTokens[account].push(token);
100:     }

```


*GitHub* : [96](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L96-L96)
### [G-32]<a name="g-32"></a> State variable read in a loop
Reading a state variable inside a loop in Solidity can be gas-inefficient, particularly in older versions of the language. Each read from a state variable in a loop incurs a gas cost, and these costs can accumulate quickly if the loop iterates many times. As a resolution, developers often manually cache the state variable outside the loop, reducing the number of state reads. By reading the variable only once and using the cached value within the loop, the gas costs can be significantly reduced. This approach requires careful consideration of the code's logic but can lead to more efficient contract execution.

*There are 2 instance(s) of this issue:*

```solidity
305:        for (uint256 i = 0; i < subjects.length; i++) {
306:             uint256 amount = curvesTokenBalance[subjects[i]][msg.sender]; // <= FOUND
307:             if (amount > 0) {
308:                 _transfer(subjects[i], msg.sender, to, amount);
309:             }
310:         }

```


*GitHub* : [306](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L306-L306)

```solidity
330:        for (uint256 i = 0; i < subjects.length; i++) {
331:             if (subjects[i] == curvesTokenSubject) { // <= FOUND
332:                 return;
333:             }
334:         }

```


*GitHub* : [331](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L331-L331)
### [G-33]<a name="g-33"></a> Function names can be optimized
Function names in Solidity contracts can be optimized to save gas during both deployment and execution. Method IDs are the first four bytes of the keccak256 hash of the function signature, and having two leading zero bytes can save 128 gas each during deployment. Additionally, renaming functions to have lower method IDs can save 22 gas per call, per sorted position shifted. This optimization leverages the way EVM handles data storage, making the execution more efficient. While these savings might seem minor, they can add up in contracts with numerous calls, contributing to more economical and efficient code.

*There are 5 instance(s) of this issue:*

```solidity
41: contract Curves is CurvesErrors, Security  // <= FOUND

```


*GitHub* : [41](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L41-L41)

```solidity
9: contract FeeSplitter is Security  // <= FOUND

```


*GitHub* : [9](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L9-L9)

```solidity
4: contract Security  // <= FOUND

```


*GitHub* : [4](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L4-L4)

```solidity
7: contract CurvesERC20 is ERC20, Ownable  // <= FOUND

```


*GitHub* : [7](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L7-L7)

```solidity
6: contract CurvesERC20Factory  // <= FOUND

```


*GitHub* : [6](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20Factory.sol#L6-L6)
### [G-34]<a name="g-34"></a> Use assembly to validate msg.sender
Utilizing assembly for validating `msg.sender` can potentially save gas as it allows for more direct and efficient access to Ethereum’s EVM opcodes, bypassing some of the overhead introduced by Solidity’s higher-level abstractions. However, this practice requires deep expertise in EVM, as incorrect implementation can introduce critical vulnerabilities. It is a trade-off between gas efficiency and code safety.

*There are 5 instance(s) of this issue:*

```solidity
104:         if (curvesTokenSubject != msg.sender) revert UnauthorizedCurvesTokenSubject(); // <= FOUND

```


*GitHub* : [104](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L104-L104)

```solidity
265:         if (!(supply > 0 || curvesTokenSubject == msg.sender)) revert UnauthorizedCurvesTokenSubject(); // <= FOUND

```


*GitHub* : [265](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L265-L265)

```solidity
285:         if (curvesTokenBalance[curvesTokenSubject][msg.sender] < amount) revert InsufficientBalance(); // <= FOUND

```


*GitHub* : [285](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L285-L285)

```solidity
466:         if (amount > curvesTokenBalance[curvesTokenSubject][msg.sender]) revert InsufficientBalance(); // <= FOUND

```


*GitHub* : [466](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L466-L466)

```solidity
497:         if (amount > CurvesERC20(externalToken).balanceOf(msg.sender)) revert InsufficientBalance(); // <= FOUND

```


*GitHub* : [497](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L497-L497)
### [G-35]<a name="g-35"></a> Unnecessary casting as variable is already of the same type
Unnecessary casting of a variable to the same type is redundant and can contribute to gas inefficiency and code clutter. This situation commonly arises when developers, perhaps due to oversight or misunderstanding, explicitly cast a variable to its existing type. For example, casting a `uint256` variable to `uint256` again does not change its type or value but adds unnecessary operations to the code.

**Resolution**: Developers should scrutinize their code to identify and remove any unnecessary type casting. Utilizing linters or static analysis tools can aid in detecting such redundancies. Ensuring that the code is clean and efficient not only saves gas but also enhances readability and maintainability.

*There are 1 instance(s) of this issue:*

```solidity
338:     function _deployERC20(
339:         address curvesTokenSubject,
340:         string memory name,
341:         string memory symbol
342:     ) internal returns (address) {
343:         
344:         if (keccak256(bytes(symbol)) == keccak256(bytes(DEFAULT_SYMBOL))) {
345:             _curvesTokenCounter += 1;
346:             name = string(abi.encodePacked(name, " ", Strings.toString(_curvesTokenCounter)));
347:             symbol = string(abi.encodePacked(symbol, Strings.toString(_curvesTokenCounter)));
348:         }
349: 
350:         if (symbolToSubject[symbol] != address(0)) revert InvalidERC20Metadata();
351: 
352:         address tokenContract = CurvesERC20Factory(curvesERC20Factory).deploy(name, symbol, address(this));
353: 
354:         externalCurvesTokens[curvesTokenSubject].token = tokenContract;
355:         externalCurvesTokens[curvesTokenSubject].name = name;
356:         externalCurvesTokens[curvesTokenSubject].symbol = symbol;
357:         externalCurvesToSubject[tokenContract] = curvesTokenSubject;
358:         symbolToSubject[symbol] = curvesTokenSubject;
359: 
360:         emit TokenDeployed(curvesTokenSubject, tokenContract, name, symbol);
361:         return address(tokenContract); // <= FOUND
362:     }

```


*GitHub* : [338](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L338-L361)
### [G-36]<a name="g-36"></a> Simple checks for zero uint can be done using assembly to save gas
Using assembly for simple zero checks on unsigned integers can save gas due to lower-level, optimized operations. 

**Resolution**: Implement inline assembly with Solidity's `assembly` block to perform zero checks. Ensure thorough testing and verification, as assembly lacks the safety checks of high-level Solidity, potentially introducing vulnerabilities if not used carefully.

*There are 8 instance(s) of this issue:*

```solidity
181:         uint256 sum1 = supply == 0 ? 0 : ((supply - 1) * (supply) * (2 * (supply - 1) + 1)) / 6; // <= FOUND

```


*GitHub* : [181](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L181-L181)

```solidity
389:         presalesMeta[curvesTokenSubject].maxBuy = (maxBuy == 0 ? type(uint256).max : maxBuy); // <= FOUND

```


*GitHub* : [389](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L389-L389)

```solidity
83:         if (claimable == 0) revert NoFeesToClaim(); // <= FOUND

```


*GitHub* : [83](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L83-L83)

```solidity
91:         if (totalSupply_ == 0) revert NoTokenHolders(); // <= FOUND

```


*GitHub* : [91](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L91-L91)

```solidity
115:         if (totalClaimable == 0) revert NoFeesToClaim(); // <= FOUND

```


*GitHub* : [115](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L115-L115)

```solidity
371:         if (supply != 0) revert CurveAlreadyExists(); // <= FOUND

```


*GitHub* : [371](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L371-L371)

```solidity
491:         if (amount % 1 ether != 0) revert NonIntegerDepositAmount(); // <= FOUND

```


*GitHub* : [491](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L491-L491)

```solidity
99:         if (balanceOf(token, account) > 0) userTokens[account].push(token); // <= FOUND

```


*GitHub* : [99](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L99-L99)
### [G-37]<a name="g-37"></a> Trade-offs Between Modifiers and Internal Functions
In Solidity, both modifiers and internal functions can be used to modularize and reuse code, but they have different trade-offs.

Modifiers are primarily used to augment the behavior of functions, often for checks or validations. They can access parameters of the function they modify and are integrated into the function’s code at compile time. This makes them syntactically cleaner for repetitive precondition checks. However, modifiers can sometimes lead to less readable code, especially when the logic is complex or when multiple modifiers are used on a single function.

Internal functions, on the other hand, offer more flexibility. They can contain complex logic, return values, and be called from other functions. This makes them more suitable for reusable chunks of business logic. Since internal functions are separate entities, they can be more readable and easier to test in isolation compared to modifiers.

Using internal functions can result in slightly more gas consumption, as it involves an internal function call. However, this cost is usually minimal and can be a worthwhile trade-off for increased code clarity and maintainability.

In summary, while modifiers offer a concise way to include checks and simple logic across multiple functions, internal functions provide more flexibility and are better suited for complex and reusable code. The choice between the two should be based on the specific use case, considering factors like code complexity, readability, and gas efficiency.

*There are 10 instance(s) of this issue:*

```solidity
218:     function _transferFees( // <= FOUND
219:         address curvesTokenSubject, // <= FOUND
220:         bool isBuy, // <= FOUND
221:         uint256 price, // <= FOUND
222:         uint256 amount, // <= FOUND
223:         uint256 supply // <= FOUND
224:     ) internal  // <= FOUND

```


*GitHub* : [218](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L218-L224)

```solidity
263:     function _buyCurvesToken(address curvesTokenSubject, uint256 amount) internal  // <= FOUND

```


*GitHub* : [263](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L263-L263)

```solidity
313:     function _transfer(address curvesTokenSubject, address from, address to, uint256 amount) internal  // <= FOUND

```


*GitHub* : [313](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L313-L313)

```solidity
328:     function _addOwnedCurvesTokenSubject(address owner_, address curvesTokenSubject) internal  // <= FOUND

```


*GitHub* : [328](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L328-L328)

```solidity
338:     function _deployERC20( // <= FOUND
339:         address curvesTokenSubject, // <= FOUND
340:         string memory name, // <= FOUND
341:         string memory symbol // <= FOUND
342:     ) internal returns (address)  // <= FOUND

```


*GitHub* : [338](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L338-L342)

```solidity
456:     function _mint( // <= FOUND
457:         address curvesTokenSubject, // <= FOUND
458:         string memory name, // <= FOUND
459:         string memory symbol // <= FOUND
460:     ) internal onlyTokenSubject(curvesTokenSubject)  // <= FOUND

```


*GitHub* : [456](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L456-L460)

```solidity
63:     function updateFeeCredit(address token, address account) internal  // <= FOUND

```


*GitHub* : [63](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L63-L63)

```solidity
103:     modifier onlyTokenSubject(address curvesTokenSubject)  // <= FOUND

```


*GitHub* : [103](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L103-L103)

```solidity
8:     modifier onlyOwner()  // <= FOUND

```


*GitHub* : [8](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L8-L8)

```solidity
13:     modifier onlyManager()  // <= FOUND

```


*GitHub* : [13](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L13-L13)
### [G-38]<a name="g-38"></a> Using nested if to save gas
Using nested `if` statements instead of logical AND (`&&`) operators can potentially save gas in Solidity contracts. When a series of conditions are connected with `&&`, all conditions must be evaluated even if the first one fails. In contrast, nested `if` statements allow for short-circuiting; if the first condition fails, the rest are skipped, saving gas. This approach is more gas-efficient, especially when dealing with complex or gas-intensive conditions. However, it's crucial to balance gas savings with code readability and maintainability, ensuring that the code remains clear and easy to understand.

*There are 2 instance(s) of this issue:*

```solidity
246:             if (feesEconomics.holdersFeePercent > 0 && address(feeRedistributor) != address(0)) { // <= FOUND
247:                 feeRedistributor.onBalanceChange(curvesTokenSubject, msg.sender);
248:                 feeRedistributor.addFees{value: holderFee}(curvesTokenSubject);
249:             }

```


*GitHub* : [246](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L246-L246)

```solidity
246:             if (feesEconomics.holdersFeePercent > 0 && address(feeRedistributor) != address(0)) { // <= FOUND
247:                 feeRedistributor.onBalanceChange(curvesTokenSubject, msg.sender);
248:                 feeRedistributor.addFees{value: holderFee}

```


*GitHub* : [246](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L246-L246)
### [G-39]<a name="g-39"></a> Optimize Deployment Size by Fine-tuning IPFS Hash
Optimizing the deployment size of a smart contract is vital to minimize gas costs, and one way to achieve this is by fine-tuning the IPFS hash appended by the Solidity compiler as metadata. This metadata, consisting of 53 bytes, increases the gas required for contract deployment by approximately 10,600 gas due to bytecode costs, and additionally, up to 848 gas due to calldata costs, depending on the proportion of zero and non-zero bytes. Utilize the --no-cbor-metadata compiler flag to prevent the compiler from appending metadata. However, this approach has a drawback as it can complicate the contract verification process on block explorers like Etherscan, potentially reducing transparency.

*There are 5 instance(s) of this issue:*

```solidity
41: contract Curves is CurvesErrors, Security  // <= FOUND

```


*GitHub* : [41](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L41-L41)

```solidity
9: contract FeeSplitter is Security  // <= FOUND

```


*GitHub* : [9](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L9-L9)

```solidity
4: contract Security  // <= FOUND

```


*GitHub* : [4](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L4-L4)

```solidity
7: contract CurvesERC20 is ERC20, Ownable  // <= FOUND

```


*GitHub* : [7](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L7-L7)

```solidity
6: contract CurvesERC20Factory  // <= FOUND

```


*GitHub* : [6](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20Factory.sol#L6-L6)
### [G-40]<a name="g-40"></a> Avoid Unnecessary Public Variables
Public state variables in Solidity automatically generate getter functions, increasing contract size and potentially leading to higher deployment and interaction costs. To optimize gas usage and contract efficiency, minimize the use of public variables unless external access is necessary. Instead, use internal or private visibility combined with explicit getter functions when required. This practice not only reduces contract size but also provides better control over data access and manipulation, enhancing security and readability. Prioritize lean, efficient contracts to ensure cost-effectiveness and better performance on the blockchain.

*There are 7 instance(s) of this issue:*

```solidity
42: address public curvesERC20Factory; // <= FOUND

```


*GitHub* : [42](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L42-L42)

```solidity
43: FeeSplitter public feeRedistributor; // <= FOUND

```


*GitHub* : [43](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L43-L43)

```solidity
44: string public constant DEFAULT_NAME = "Curves"; // <= FOUND

```


*GitHub* : [44](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L44-L44)

```solidity
45: string public constant DEFAULT_SYMBOL = "CURVES"; // <= FOUND

```


*GitHub* : [45](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L45-L45)

```solidity
77: FeesEconomics public feesEconomics; // <= FOUND

```


*GitHub* : [77](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L77-L77)

```solidity
10: Curves public curves; // <= FOUND

```


*GitHub* : [10](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L10-L10)

```solidity
5: address public owner; // <= FOUND

```


*GitHub* : [5](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L5-L5)
### [G-41]<a name="g-41"></a> Avoid emitting event on every iteration
Emitting events within a loop can cause significant gas consumption due to repeated I/O operations. Instead, accumulate changes in memory and emit a single event post-loop with aggregated data. This approach improves contract efficiency, reduces gas costs, and simplifies event tracking for event listeners.

*There are 1 instance(s) of this issue:*

```solidity
105:        for (uint256 i = 0; i < tokenList.length; i++) {
106:             address token = tokenList[i];
107:             updateFeeCredit(token, msg.sender);
108:             uint256 claimable = getClaimableFees(token, msg.sender);
109:             if (claimable > 0) {
110:                 tokensData[token].unclaimedFees[msg.sender] = 0;
111:                 totalClaimable += claimable;
112:                 emit FeesClaimed(token, msg.sender, claimable); // <= FOUND
113:             }
114:         }

```


*GitHub* : [112](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L112-L112)
### [G-42]<a name="g-42"></a> ++X costs slightly less gas than X++ (same with --)
Move the ++/-- action to the left of the variable

*There are 3 instance(s) of this issue:*

```solidity
305:         for (uint256 i = 0; i < subjects.length; i++) { // <= FOUND

```


*GitHub* : [305](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L305-L305)

```solidity
55:         for (uint256 i = 0; i < tokens.length; i++) { // <= FOUND

```


*GitHub* : [55](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L55-L55)

```solidity
105:         for (uint256 i = 0; i < tokenList.length; i++) { // <= FOUND

```


*GitHub* : [105](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L105-L105)
### [G-43]<a name="g-43"></a> Solidity versions 0.8.19 and above are more gas efficient
Solidity version 0.8.19 introduced a array of gas optimizations which make contracts which use it more efficient. Provided compatability it may be beneficial to upgrade to this version

*There are 2 instance(s) of this issue:*

```solidity
2: pragma solidity 0.8.7;

```


*GitHub* : [2](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L2-L2)

```solidity
2: pragma solidity ^0.8.7;

```


*GitHub* : [2](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L2-L2)
### [G-44]<a name="g-44"></a> Variable declared within iteration
Please elaborate and generalise the following with detail and  feel free to use your own knowledge and lmit ur words to 100 words please:

*There are 3 instance(s) of this issue:*

```solidity
305:        for (uint256 i = 0; i < subjects.length; i++) { // <= FOUND
306:             uint256 amount = curvesTokenBalance[subjects[i]][msg.sender];
307:             if (amount > 0) {
308:                 _transfer(subjects[i], msg.sender, to, amount);
309:             }
310:         }

```


*GitHub* : [305](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L305-L305)

```solidity
55:        for (uint256 i = 0; i < tokens.length; i++) { // <= FOUND
56:             address token = tokens[i];
57:             uint256 claimable = getClaimableFees(token, user); // <= FOUND
58:             result[i] = UserClaimData(claimable, token);
59:         }

```


*GitHub* : [55](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L55-L57)

```solidity
105:        for (uint256 i = 0; i < tokenList.length; i++) { // <= FOUND
106:             address token = tokenList[i];
107:             updateFeeCredit(token, msg.sender);
108:             uint256 claimable = getClaimableFees(token, msg.sender); // <= FOUND
109:             if (claimable > 0) {
110:                 tokensData[token].unclaimedFees[msg.sender] = 0;
111:                 totalClaimable += claimable;
112:                 emit FeesClaimed(token, msg.sender, claimable);
113:             }
114:         }

```


*GitHub* : [105](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L105-L108)
### [G-45]<a name="g-45"></a> The use of a logical AND in place of double if is slightly less gas efficient in instances where there isn't a corresponding else statement for the given if statement
Using a double if statement instead of logical AND (&&) can provide similar short-circuiting behavior whereas double if is slightly more efficient.

*There are 3 instance(s) of this issue:*

```solidity
182:         uint256 sum2 = supply == 0 && amount == 1 // <= FOUND
183:             ? 0
184:             : ((supply - 1 + amount) * (supply + amount) * (2 * (supply - 1 + amount) + 1)) / 6;

```


*GitHub* : [182](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L182-L182)

```solidity
213:         if (startTime != 0 && startTime >= block.timestamp) revert SaleNotOpen(); // <= FOUND

```


*GitHub* : [213](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L213-L213)

```solidity
246: 
247:             if (feesEconomics.holdersFeePercent > 0 && address(feeRedistributor) != address(0)) { // <= FOUND

```


*GitHub* : [247](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L247-L247)
### [G-46]<a name="g-46"></a> Calling .length in a for loop wastes gas
Rather than calling .length for an array in a for loop declaration, it is far more gas efficient to cache this length before and use that instead. This will prevent the array length from being called every loop iteration

*There are 3 instance(s) of this issue:*

```solidity
305: for (uint256 i = 0; i < subjects.length; i++)  // <= FOUND

```


*GitHub* : [305](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L305-L305)

```solidity
55: for (uint256 i = 0; i < tokens.length; i++)  // <= FOUND

```


*GitHub* : [55](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L55-L55)

```solidity
105: for (uint256 i = 0; i < tokenList.length; i++)  // <= FOUND

```


*GitHub* : [105](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L105-L105)
### [G-47]<a name="g-47"></a> Constructors can be marked as payable to save deployment gas

*There are 4 instance(s) of this issue:*

```solidity
108:     constructor(address curvesERC20Factory_, address feeRedistributor_) Security() {
109:         curvesERC20Factory = curvesERC20Factory_;
110:         feeRedistributor = FeeSplitter(payable(feeRedistributor_));
111:     }

```


*GitHub* : [108](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L108-L108)

```solidity
33:     constructor() Security() {}

```


*GitHub* : [33](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L33-L33)

```solidity
18:     constructor() {
19:         owner = msg.sender;
20:         managers[msg.sender] = true;
21:     }

```


*GitHub* : [18](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L18-L18)

```solidity
8:     constructor(string memory name_, string memory symbol_, address owner) ERC20(name_, symbol_) {
9:         transferOwnership(owner);
10:     }

```


*GitHub* : [8](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L8-L8)
### [G-48]<a name="g-48"></a> Use assembly scratch space to build calldata for external calls
Using Solidity's assembly scratch space for constructing calldata in external calls with one or two arguments can be a gas-efficient approach. This method leverages the designated memory area (the first 64 bytes of memory) for temporary data storage during assembly operations. By directly writing arguments into this scratch space, it eliminates the need for additional memory allocation typically required for calldata preparation. This technique can lead to notable gas savings, especially in high-frequency or gas-sensitive operations. However, it requires careful implementation to avoid data corruption and should be used with a thorough understanding of low-level EVM operations and memory handling. Proper testing and validation are crucial when employing such optimizations.

*There are 16 instance(s) of this issue:*

```solidity
247:                 feeRedistributor.onBalanceChange(curvesTokenSubject, msg.sender); // <= FOUND

```


*GitHub* : [247](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L247-L247)

```solidity
486:         _transfer(curvesTokenSubject, msg.sender, address(this), amount); // <= FOUND

```


*GitHub* : [486](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L486-L486)

```solidity
487:         CurvesERC20(externalToken).mint(msg.sender, amount * 1 ether); // <= FOUND

```


*GitHub* : [487](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L487-L487)

```solidity
500: 
501:         CurvesERC20(externalToken).burn(msg.sender, amount); // <= FOUND

```


*GitHub* : [500](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L500-L501)

```solidity
40:         return curves.curvesTokenBalance(token, account) * PRECISION; // <= FOUND

```


*GitHub* : [40](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L40-L40)

```solidity
45:         
46:         return (curves.curvesTokenSupply(token) - curves.curvesTokenBalance(token, address(curves))) * PRECISION; // <= FOUND

```


*GitHub* : [45](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L45-L46)

```solidity
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}(""); // <= FOUND

```


*GitHub* : [232](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L232-L232)

```solidity
236:                 (bool success2, ) = curvesTokenSubject.call{value: subjectFee}(""); // <= FOUND

```


*GitHub* : [236](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L236-L236)

```solidity
240:                 (bool success3, ) = referralDefined // <= FOUND
241:                     ? referralFeeDestination[curvesTokenSubject].call{value: referralFee}("") // <= FOUND

```


*GitHub* : [240](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L240-L241)

```solidity
248:                 feeRedistributor.addFees{value: holderFee}(curvesTokenSubject); // <= FOUND

```


*GitHub* : [248](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L248-L248)

```solidity
335:         subjects.push(curvesTokenSubject); // <= FOUND

```


*GitHub* : [335](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L335-L335)

```solidity
389:         presalesMeta[curvesTokenSubject].maxBuy = (maxBuy == 0 ? type(uint256).max : maxBuy); // <= FOUND

```


*GitHub* : [389](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L389-L389)

```solidity
85:         payable(msg.sender).transfer(claimable); // <= FOUND

```


*GitHub* : [85](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L85-L85)

```solidity
93:         data.cumulativeFeePerToken += (msg.value * PRECISION) / totalSupply_; // <= FOUND

```


*GitHub* : [93](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L93-L93)

```solidity
99:         if (balanceOf(token, account) > 0) userTokens[account].push(token); // <= FOUND

```


*GitHub* : [99](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L99-L99)

```solidity
116:         payable(msg.sender).transfer(totalClaimable); // <= FOUND

```


*GitHub* : [116](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L116-L116)
### [G-49]<a name="g-49"></a> Use assembly scratch space to build calldata for event emits
Utilizing Solidity's assembly scratch space to build calldata for emitting events with just one or two arguments can optimize gas usage. The scratch space, a designated area in the first 64 bytes of memory, is ideal for temporary storage during assembly-level operations. By directly writing the event arguments into this area, developers can bypass the standard memory allocation process required for event emission. This approach results in gas savings, particularly for contracts where events are frequently emitted. However, such low-level optimization requires a deep understanding of Ethereum Virtual Machine (EVM) mechanics and careful coding to prevent data mishandling. Rigorous testing is essential to ensure the integrity and correct functionality of the contract.

*There are 1 instance(s) of this issue:*

```solidity
400:             emit WhitelistUpdated(msg.sender, merkleRoot); // <= FOUND

```


*GitHub* : [400](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L400-L400)
### [G-50]<a name="g-50"></a> Consider using solady's "FixedPointMathLib"
Using Solady's "FixedPointMathLib" for multiplication or division operations in Solidity can lead to significant gas savings. This library is designed to optimize fixed-point arithmetic operations, which are common in financial calculations involving tokens or currencies. By implementing more efficient algorithms and assembly optimizations, "FixedPointMathLib" minimizes the computational resources required for these operations. For contracts that frequently perform such calculations, integrating this library can reduce transaction costs, thereby enhancing overall performance and cost-effectiveness. However, developers must ensure compatibility with their existing codebase and thoroughly test for accuracy and expected behavior to avoid any unintended consequences.

*There are 12 instance(s) of this issue:*

```solidity
173:         protocolFee = (price * feesEconomics.protocolFeePercent) / 1 ether; // <= FOUND

```


*GitHub* : [173](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L173-L173)

```solidity
174:         subjectFee = (price * feesEconomics.subjectFeePercent) / 1 ether; // <= FOUND

```


*GitHub* : [174](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L174-L174)

```solidity
175:         referralFee = (price * feesEconomics.referralFeePercent) / 1 ether; // <= FOUND

```


*GitHub* : [175](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L175-L175)

```solidity
176:         holdersFee = (price * feesEconomics.holdersFeePercent) / 1 ether; // <= FOUND

```


*GitHub* : [176](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L176-L176)

```solidity
181:         uint256 sum1 = supply == 0 ? 0 : ((supply - 1) * (supply) * (2 * (supply - 1) + 1)) / 6; // <= FOUND

```


*GitHub* : [181](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L181-L181)

```solidity
182:         uint256 sum2 = supply == 0 && amount == 1
183:             ? 0
184:             : ((supply - 1 + amount) * (supply + amount) * (2 * (supply - 1 + amount) + 1)) / 6; // <= FOUND

```


*GitHub* : [184](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L184-L184)

```solidity
186:         return (summation * 1 ether) / 16000; // <= FOUND

```


*GitHub* : [186](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L186-L186)

```solidity
494:         uint256 tokenAmount = amount / 1 ether; // <= FOUND

```


*GitHub* : [494](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L494-L494)

```solidity
508:         sellCurvesToken(curvesTokenSubject, amount / 1 ether); // <= FOUND

```


*GitHub* : [508](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L508-L508)

```solidity
68:             data.unclaimedFees[account] += owed / PRECISION; // <= FOUND

```


*GitHub* : [68](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L68-L68)

```solidity
77:         return (owed / PRECISION) + data.unclaimedFees[account]; // <= FOUND

```


*GitHub* : [77](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L77-L77)

```solidity
93:         data.cumulativeFeePerToken += (msg.value * PRECISION) / totalSupply_; // <= FOUND

```


*GitHub* : [93](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L93-L93)
### [G-51]<a name="g-51"></a> Same cast is done multiple times
Repeatedly casting the same variable to the same type within a function is redundant and can be optimized for better gas efficiency and code readability. Each unnecessary cast operation, while minor, adds to the gas cost and clutters the code. To optimize, the best practice is to perform the cast once and store the result in a temporary variable, which can then be used wherever needed in the function.

*There are 3 instance(s) of this issue:*

```solidity
218:     function _transferFees(
219:         address curvesTokenSubject,
220:         bool isBuy,
221:         uint256 price,
222:         uint256 amount,
223:         uint256 supply
224:     ) internal {
225:         (uint256 protocolFee, uint256 subjectFee, uint256 referralFee, uint256 holderFee, ) = getFees(price);
226:         {
227:             bool referralDefined = referralFeeDestination[curvesTokenSubject] != address(0); // <= FOUND 'address(0)'
228:             {
229:                 address firstDestination = isBuy ? feesEconomics.protocolFeeDestination : msg.sender;
230:                 uint256 buyValue = referralDefined ? protocolFee : protocolFee + referralFee;
231:                 uint256 sellValue = price - protocolFee - subjectFee - referralFee - holderFee;
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}("");
233:                 if (!success1) revert CannotSendFunds();
234:             }
235:             {
236:                 (bool success2, ) = curvesTokenSubject.call{value: subjectFee}("");
237:                 if (!success2) revert CannotSendFunds();
238:             }
239:             {
240:                 (bool success3, ) = referralDefined
241:                     ? referralFeeDestination[curvesTokenSubject].call{value: referralFee}("")
242:                     : (true, bytes(""));
243:                 if (!success3) revert CannotSendFunds();
244:             }
245: 
246:             if (feesEconomics.holdersFeePercent > 0 && address(feeRedistributor) != address(0)) { // <= FOUND 'address(0)'
247:                 feeRedistributor.onBalanceChange(curvesTokenSubject, msg.sender);
248:                 feeRedistributor.addFees{value: holderFee}(curvesTokenSubject);
249:             }
250:         }
251:         emit Trade(
252:             msg.sender,
253:             curvesTokenSubject,
254:             isBuy,
255:             amount,
256:             price,
257:             protocolFee,
258:             subjectFee,
259:             isBuy ? supply + amount : supply - amount
260:         );
261:     }

```


*GitHub* : [218](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L218-L246)

```solidity
428:     function setNameAndSymbol(
429:         address curvesTokenSubject,
430:         string memory name,
431:         string memory symbol
432:     ) external onlyTokenSubject(curvesTokenSubject) {
433:         if (externalCurvesTokens[curvesTokenSubject].token != address(0)) revert ERC20TokenAlreadyMinted(); // <= FOUND 'address(0)'
434:         if (symbolToSubject[symbol] != address(0)) revert InvalidERC20Metadata(); // <= FOUND 'address(0)'
435:         externalCurvesTokens[curvesTokenSubject].name = name;
436:         externalCurvesTokens[curvesTokenSubject].symbol = symbol;
437:     }

```


*GitHub* : [428](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L428-L434)

```solidity
490:     function deposit(address curvesTokenSubject, uint256 amount) public {
491:         if (amount % 1 ether != 0) revert NonIntegerDepositAmount();
492: 
493:         address externalToken = externalCurvesTokens[curvesTokenSubject].token;
494:         uint256 tokenAmount = amount / 1 ether;
495: 
496:         if (externalToken == address(0)) revert TokenAbsentForCurvesTokenSubject(); // <= FOUND 'address(0)'
497:         if (amount > CurvesERC20(externalToken).balanceOf(msg.sender)) revert InsufficientBalance();
498:         if (tokenAmount > curvesTokenBalance[curvesTokenSubject][address(this)]) revert InsufficientBalance(); // <= FOUND 'address(this)'
499: 
500:         CurvesERC20(externalToken).burn(msg.sender, amount);
501:         _transfer(curvesTokenSubject, address(this), msg.sender, tokenAmount); // <= FOUND 'address(this)'
502:     }

```


*GitHub* : [490](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L490-L501)
### [G-52]<a name="g-52"></a> Cache address(this) when used more than once

*There are 1 instance(s) of this issue:*

```solidity
490:     function deposit(address curvesTokenSubject, uint256 amount) public {
491:         if (amount % 1 ether != 0) revert NonIntegerDepositAmount();
492: 
493:         address externalToken = externalCurvesTokens[curvesTokenSubject].token;
494:         uint256 tokenAmount = amount / 1 ether;
495: 
496:         if (externalToken == address(0)) revert TokenAbsentForCurvesTokenSubject();
497:         if (amount > CurvesERC20(externalToken).balanceOf(msg.sender)) revert InsufficientBalance();
498:         if (tokenAmount > curvesTokenBalance[curvesTokenSubject][address(this)]) revert InsufficientBalance(); // <= FOUND
499: 
500:         CurvesERC20(externalToken).burn(msg.sender, amount);
501:         _transfer(curvesTokenSubject, address(this), msg.sender, tokenAmount); // <= FOUND
502:     }

```


*GitHub* : [490](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L490-L501)
### [G-53]<a name="g-53"></a> bytes.concat() can be used in place of abi.encodePacked
Given concatenation is not going to be used for hashing bytes.concat is the preferred method to use as its more gas efficient when used with bytes variables

*There are 1 instance(s) of this issue:*

```solidity
424:         
425:         bytes32 leaf = keccak256(abi.encodePacked(caller)); // <= FOUND

```


*GitHub* : [424](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L424-L425)### NonCritical Risk Issues


### [N-01]<a name="n-01"></a> Events may be emitted out of order due to code not follow the best practice of check-effects-interaction 
The "check-effects-interaction" pattern also impacts event ordering. When a contract doesn't adhere to this pattern, events might be emitted in a sequence that doesn't reflect the actual logical flow of operations. This can cause confusion during event tracking, potentially leading to erroneous off-chain interpretations. To rectify this, always ensure that checks are performed first, state modifications come next, and interactions with external contracts or addresses are done last. This will ensure events are emitted in a logical, consistent manner, providing a clear and accurate chronological record of on-chain actions for off-chain systems and observers.

*There are 1 instance(s) of this issue:*

```solidity
218:     function _transferFees(
219:         address curvesTokenSubject,
220:         bool isBuy,
221:         uint256 price,
222:         uint256 amount,
223:         uint256 supply
224:     ) internal {
225:         (uint256 protocolFee, uint256 subjectFee, uint256 referralFee, uint256 holderFee, ) = getFees(price);
226:         {
227:             bool referralDefined = referralFeeDestination[curvesTokenSubject] != address(0);
228:             {
229:                 address firstDestination = isBuy ? feesEconomics.protocolFeeDestination : msg.sender;
230:                 uint256 buyValue = referralDefined ? protocolFee : protocolFee + referralFee;
231:                 uint256 sellValue = price - protocolFee - subjectFee - referralFee - holderFee;
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}(""); // <= FOUND
233:                 if (!success1) revert CannotSendFunds();
234:             }
235:             {
236:                 (bool success2, ) = curvesTokenSubject.call{value: subjectFee}(""); // <= FOUND
237:                 if (!success2) revert CannotSendFunds();
238:             }
239:             {
240:                 (bool success3, ) = referralDefined
241:                     ? referralFeeDestination[curvesTokenSubject].call{value: referralFee}("")
242:                     : (true, bytes(""));
243:                 if (!success3) revert CannotSendFunds();
244:             }
245: 
246:             if (feesEconomics.holdersFeePercent > 0 && address(feeRedistributor) != address(0)) {
247:                 feeRedistributor.onBalanceChange(curvesTokenSubject, msg.sender);
248:                 feeRedistributor.addFees{value: holderFee}(curvesTokenSubject);
249:             }
250:         }
251:         emit Trade( // <= FOUND
252:             msg.sender,
253:             curvesTokenSubject,
254:             isBuy,
255:             amount,
256:             price,
257:             protocolFee,
258:             subjectFee,
259:             isBuy ? supply + amount : supply - amount
260:         );
261:     }

```


*GitHub* : [218](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L218-L251)
### [N-02]<a name="n-02"></a> Non constant/immutable state variables are missing a setter post deployment 
Non-constant or non-immutable state variables lacking a setter function can create inflexibility in contract operations. If there's no way to update these variables post-deployment, the contract might not adapt to changing conditions or requirements, which can be a significant drawback, especially in upgradable or long-lived contracts. To resolve this, implement setter functions guarded by appropriate access controls, like `onlyOwner` or similar modifiers, so that these variables can be updated as required while maintaining security. This enables smoother contract maintenance and feature upgrades.

*There are 1 instance(s) of this issue:*

```solidity
77: FeesEconomics public feesEconomics;

```


*GitHub* : [77](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L77-L77)
### [N-03]<a name="n-03"></a> Functions with array parameters should have length checks in place 
Functions in Solidity that accept array parameters should incorporate length checks as a security measure. This is to prevent potential overflow errors, unwanted gas consumption, and manipulation attempts. Without length checks, an attacker could pass excessively large arrays as input, causing excessive computation and potentially causing the function to exceed the block gas limit, leading to a denial-of-service. Additionally, unexpected array sizes could lead to logic errors within the function. As a resolution, always validate array length at the start of functions handling array inputs, ensuring it aligns with the expectations of the function logic. This makes the code more robust and predictable.

*There are 2 instance(s) of this issue:*

```solidity
404:     function buyCurvesTokenWhitelisted(
405:         address curvesTokenSubject,
406:         uint256 amount,
407:         bytes32[] memory proof // <= FOUND
408:     ) public payable {
409:         if (
410:             presalesMeta[curvesTokenSubject].startTime == 0 ||
411:             presalesMeta[curvesTokenSubject].startTime <= block.timestamp
412:         ) revert PresaleUnavailable();
413: 
414:         presalesBuys[curvesTokenSubject][msg.sender] += amount;
415:         uint256 tokenBought = presalesBuys[curvesTokenSubject][msg.sender];
416:         if (tokenBought > presalesMeta[curvesTokenSubject].maxBuy) revert ExceededMaxBuyAmount();
417: 
418:         verifyMerkle(curvesTokenSubject, msg.sender, proof);
419:         _buyCurvesToken(curvesTokenSubject, amount);
420:     }

```


*GitHub* : [404](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L404-L407)

```solidity
422:     function verifyMerkle(address curvesTokenSubject, address caller, bytes32[] memory proof) public view { // <= FOUND
423:         
424:         bytes32 leaf = keccak256(abi.encodePacked(caller));
425:         if (!MerkleProof.verify(proof, presalesMeta[curvesTokenSubject].merkleRoot, leaf)) revert UnverifiedProof();
426:     }

```


*GitHub* : [422](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L422-L422)
### [N-04]<a name="n-04"></a> Overly complicated arithmetic 
To maintain readability in code, particularly in Solidity which can involve complex mathematical operations, it is often recommended to limit the number of arithmetic operations to a maximum of 2-3 per line. Too many operations in a single line can make the code difficult to read and understand, increase the likelihood of mistakes, and complicate the process of debugging and reviewing the code. Consider splitting such operations over more than one line, take special care when dealing with division however. Try to limit the number of arithmetic operations to a maximum of 3 per line.

*There are 1 instance(s) of this issue:*

```solidity
180:     function getPrice(uint256 supply, uint256 amount) public pure returns (uint256) {
181:         uint256 sum1 = supply == 0 ? 0 : ((supply - 1) * (supply) * (2 * (supply - 1) + 1)) / 6; // <= FOUND
182:         uint256 sum2 = supply == 0 && amount == 1
183:             ? 0
184:             : ((supply - 1 + amount) * (supply + amount) * (2 * (supply - 1 + amount) + 1)) / 6; // <= FOUND
185:         uint256 summation = sum2 - sum1;
186:         return (summation * 1 ether) / 16000;
187:     }

```


*GitHub* : [181](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L181-L184)
### [N-05]<a name="n-05"></a> Empty constructor body without natspec comments 
A void constructor in Solidity refers to a constructor that has no logic or code within it. It can be redundant and should be avoided because it unnecessarily increases the contract's bytecode, leading to higher deployment and gas costs. In a contract, a constructor is often used to initialize state variables or set specific conditions at the time of deployment. If no such initialization or conditions are required, the empty or void constructor serves no functional purpose. The resolution is simply to omit the constructor if it is not needed, thereby optimizing the contract for efficiency and readability.

*There are 1 instance(s) of this issue:*

```solidity
33:     constructor() Security() {}

```


*GitHub* : [33](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L33-L33)
### [N-06]<a name="n-06"></a> Inconsistent comment spacing 
Some comments use // X and others //X Amend comments to use only use // X or //X consistently

*There are 2 instance(s) of this issue:*

```solidity
44: //@dev: this is the amount of tokens that are not locked in the contract. The locked tokens are in the ERC20 contract

```


*GitHub* : [44](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L44-L44)

```solidity
102: //@dev: this may fail if the the list is long. Get first the list with getUserTokens to estimate and prepare the batch

```


*GitHub* : [102](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L102-L102)
### [N-07]<a name="n-07"></a> Consider adding emergency-stop functionality 
In the event of a security breach or any unforeseen emergency, swiftly suspending all protocol operations becomes crucial. Having a mechanism in place to halt all functions collectively, instead of pausing individual contracts separately, substantially enhances the efficiency of mitigating ongoing attacks or vulnerabilities. This not only quickens the response time to potential threats but also reduces operational stress during these critical periods. Therefore, consider integrating a 'circuit breaker' or 'emergency stop' function into the smart contract system architecture. Such a feature would provide the capability to suspend the entire protocol instantly, which could prove invaluable during a time-sensitive crisis management situation.

*There are 5 instance(s) of this issue:*

```solidity
41: contract Curves is CurvesErrors, Security 

```


*GitHub* : [41](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L41-L41)

```solidity
9: contract FeeSplitter is Security 

```


*GitHub* : [9](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L9-L9)

```solidity
4: contract Security 

```


*GitHub* : [4](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L4-L4)

```solidity
7: contract CurvesERC20 is ERC20, Ownable 

```


*GitHub* : [7](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L7-L7)

```solidity
6: contract CurvesERC20Factory 

```


*GitHub* : [6](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20Factory.sol#L6-L6)
### [N-08]<a name="n-08"></a> Duplicated revert() checks should be refactored to a modifier or function

*There are 1 instance(s) of this issue:*

```solidity
297:         if (to == address(this)) revert ContractCannotReceiveTransfer(); // <= FOUND

```


*GitHub* : [297](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L297-L297)
### [N-09]<a name="n-09"></a> Missing events in sensitive functions 
Sensitive setter functions in smart contracts often alter critical state variables. Without events emitted in these functions, external observers or dApps cannot easily track or react to these state changes. Missing events can obscure contract activity, hampering transparency and making integration more challenging. To resolve this, incorporate appropriate event emissions within these functions. Events offer an efficient way to log crucial changes, aiding in real-time tracking and post-transaction verification.

*There are 8 instance(s) of this issue:*

```solidity
113:     function setFeeRedistributor(address feeRedistributor_) external onlyOwner { // <= FOUND
114:         feeRedistributor = FeeSplitter(payable(feeRedistributor_));
115:     }

```


*GitHub* : [113](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L113-L113)

```solidity
117:     function setMaxFeePercent(uint256 maxFeePercent_) external onlyManager { // <= FOUND
118:         if (
119:             feesEconomics.protocolFeePercent +
120:                 feesEconomics.subjectFeePercent +
121:                 feesEconomics.referralFeePercent +
122:                 feesEconomics.holdersFeePercent >
123:             maxFeePercent_
124:         ) revert InvalidFeeDefinition();
125:         feesEconomics.maxFeePercent = maxFeePercent_;
126:     }

```


*GitHub* : [117](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L117-L117)

```solidity
128:     function setProtocolFeePercent(uint256 protocolFeePercent_, address protocolFeeDestination_) external onlyOwner { // <= FOUND
129:         if (
130:             protocolFeePercent_ +
131:                 feesEconomics.subjectFeePercent +
132:                 feesEconomics.referralFeePercent +
133:                 feesEconomics.holdersFeePercent >
134:             feesEconomics.maxFeePercent ||
135:             protocolFeeDestination_ == address(0)
136:         ) revert InvalidFeeDefinition();
137:         feesEconomics.protocolFeePercent = protocolFeePercent_;
138:         feesEconomics.protocolFeeDestination = protocolFeeDestination_;
139:     }

```


*GitHub* : [128](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L128-L128)

```solidity
141:     function setExternalFeePercent( // <= FOUND
142:         uint256 subjectFeePercent_,
143:         uint256 referralFeePercent_,
144:         uint256 holdersFeePercent_
145:     ) external onlyManager {
146:         if (
147:             feesEconomics.protocolFeePercent + subjectFeePercent_ + referralFeePercent_ + holdersFeePercent_ >
148:             feesEconomics.maxFeePercent
149:         ) revert InvalidFeeDefinition();
150:         feesEconomics.subjectFeePercent = subjectFeePercent_;
151:         feesEconomics.referralFeePercent = referralFeePercent_;
152:         feesEconomics.holdersFeePercent = holdersFeePercent_;
153:     }

```


*GitHub* : [141](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L141-L141)

```solidity
155:     function setReferralFeeDestination( // <= FOUND
156:         address curvesTokenSubject,
157:         address referralFeeDestination_
158:     ) public onlyTokenSubject(curvesTokenSubject) {
159:         referralFeeDestination[curvesTokenSubject] = referralFeeDestination_;
160:     }

```


*GitHub* : [155](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L155-L155)

```solidity
162:     function setERC20Factory(address factory_) external onlyOwner { // <= FOUND
163:         curvesERC20Factory = factory_;
164:     }

```


*GitHub* : [162](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L162-L162)

```solidity
428:     function setNameAndSymbol( // <= FOUND
429:         address curvesTokenSubject,
430:         string memory name,
431:         string memory symbol
432:     ) external onlyTokenSubject(curvesTokenSubject) {
433:         if (externalCurvesTokens[curvesTokenSubject].token != address(0)) revert ERC20TokenAlreadyMinted();
434:         if (symbolToSubject[symbol] != address(0)) revert InvalidERC20Metadata();
435:         externalCurvesTokens[curvesTokenSubject].name = name;
436:         externalCurvesTokens[curvesTokenSubject].symbol = symbol;
437:     }

```


*GitHub* : [428](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L428-L428)

```solidity
23:     function setManager(address manager_, bool value) public onlyOwner { // <= FOUND
24:         managers[manager_] = value;
25:     }

```


*GitHub* : [23](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L23-L23)
### [N-10]<a name="n-10"></a> Consider making private state variables internal to increase flexibility 
In Solidity, `private` state variables are strictly confined to the contract they are defined in and can't be accessed or modified by its derived contracts. While this offers strong encapsulation, it can limit contract extensibility and modification in inheritance chains. On the other hand, `internal` variables can be accessed and potentially overridden by child contracts, granting more flexibility in contract development and upgrades. Therefore, it's recommended to use `private` only when you explicitly want to prevent child contract access. Otherwise, prefer `internal` to maintain a balance between encapsulation and the flexibility offered by inheritance patterns in Solidity.

*There are 1 instance(s) of this issue:*

```solidity
47: uint256 private _curvesTokenCounter = 0; // <= FOUND

```


*GitHub* : [47](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L47-L47)
### [N-11]<a name="n-11"></a> File is missing NatSpec

*There are 4 instance(s) of this issue:*

```solidity
1: // SPDX-License-Identifier: MIT
2: pragma solidity ^0.8.7;
3: 
4: contract Security {
5:     address public owner;
6:     mapping(address => bool) public managers;
7: 
8:     modifier onlyOwner() {
9:         msg.sender == owner;
10:         _;
11:     }
12: 
13:     modifier onlyManager() {
14:         managers[msg.sender] == true;
15:         _;
16:     }
17: 
18:     constructor() {
19:         owner = msg.sender;
20:         managers[msg.sender] = true;
21:     }
22: 
23:     function setManager(address manager_, bool value) public onlyOwner {
24:         managers[manager_] = value;
25:     }
26: 
27:     function transferOwnership(address owner_) public onlyOwner {
28:         owner = owner_;
29:     }
30: }
31: 

```


*GitHub* : [1](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L1-L1)

```solidity
1: // SPDX-License-Identifier: MIT
2: pragma solidity 0.8.7;
3: 
4: import "@openzeppelin/contracts/utils/Strings.sol";
5: import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
6: 
7: import "./CurvesERC20.sol";
8: import "./CurvesERC20Factory.sol";
9: 
10: import "./FeeSplitter.sol";
11: import "./Security.sol";
12: 
13: interface CurvesErrors {
14:     // Access-related
15:     error UnauthorizedCurvesTokenSubject();
16:     // Balance-related
17:     error InsufficientPayment();
18:     error CannotSendFunds();
19:     error InsufficientBalance();
20:     // ERC20-related
21:     error InvalidERC20Metadata();
22:     error ERC20TokenAlreadyMinted();
23:     // State-related
24:     error TokenAbsentForCurvesTokenSubject();
25:     error CurveAlreadyExists();
26:     // Transaction-related
27:     error LastTokenCannotBeSold();
28:     error ContractCannotReceiveTransfer();
29:     error ExceededMaxBuyAmount();
30:     error NonIntegerDepositAmount();
31:     // Proof-related
32:     error UnverifiedProof();
33:     // Presale-related
34:     error PresaleUnavailable();
35:     error InvalidPresaleStartTime();
36:     error SaleNotOpen();
37:     // Fee related
38:     error InvalidFeeDefinition();
39: }
40: 
41: contract Curves is CurvesErrors, Security {
42:     address public curvesERC20Factory;
43:     FeeSplitter public feeRedistributor;
44:     string public constant DEFAULT_NAME = "Curves";
45:     string public constant DEFAULT_SYMBOL = "CURVES";
46:     // Counter for CURVES tokens minted
47:     uint256 private _curvesTokenCounter = 0;
48: 
49:     struct ExternalTokenMeta {
50:         string name;
51:         string symbol;
52:         address token;
53:     }
54: 
55:     struct PresaleMeta {
56:         uint256 startTime;
57:         bytes32 merkleRoot;
58:         uint256 maxBuy;
59:     }
60: 
61:     mapping(address => ExternalTokenMeta) public externalCurvesTokens;
62:     mapping(address => address) public externalCurvesToSubject;
63:     mapping(string => address) public symbolToSubject;
64: 
65:     mapping(address => PresaleMeta) public presalesMeta;
66:     mapping(address => mapping(address => uint256)) public presalesBuys;
67: 
68:     struct FeesEconomics {
69:         address protocolFeeDestination;
70:         uint256 protocolFeePercent;
71:         uint256 subjectFeePercent;
72:         uint256 referralFeePercent;
73:         uint256 holdersFeePercent;
74:         uint256 maxFeePercent;
75:     }
76: 
77:     FeesEconomics public feesEconomics;
78:     mapping(address => address) public referralFeeDestination;
79: 
80:     event Trade(
81:         address trader,
82:         address subject,
83:         bool isBuy,
84:         uint256 tokenAmount,
85:         uint256 ethAmount,
86:         uint256 protocolEthAmount,
87:         uint256 subjectEthAmount,
88:         uint256 supply
89:     );
90: 
91:     event Transfer(address indexed curvesTokenSubject, address indexed from, address indexed to, uint256 value);
92:     event WhitelistUpdated(address indexed presale, bytes32 indexed root);
93:     event TokenDeployed(address indexed curvesTokenSubject, address indexed erc20token, string name, string symbol);
94: 
95:     // TokenSubject => (Holder => Balance)
96:     mapping(address => mapping(address => uint256)) public curvesTokenBalance;
97: 
98:     // TokenSubject => Supply
99:     mapping(address => uint256) public curvesTokenSupply;
100: 
101:     mapping(address => address[]) private ownedCurvesTokenSubjects;
102: 
103:     modifier onlyTokenSubject(address curvesTokenSubject) {
104:         if (curvesTokenSubject != msg.sender) revert UnauthorizedCurvesTokenSubject();
105:         _;
106:     }
107: 
108:     constructor(address curvesERC20Factory_, address feeRedistributor_) Security() {
109:         curvesERC20Factory = curvesERC20Factory_;
110:         feeRedistributor = FeeSplitter(payable(feeRedistributor_));
111:     }
112: 
113:     function setFeeRedistributor(address feeRedistributor_) external onlyOwner {
114:         feeRedistributor = FeeSplitter(payable(feeRedistributor_));
115:     }
116: 
117:     function setMaxFeePercent(uint256 maxFeePercent_) external onlyManager {
118:         if (
119:             feesEconomics.protocolFeePercent +
120:                 feesEconomics.subjectFeePercent +
121:                 feesEconomics.referralFeePercent +
122:                 feesEconomics.holdersFeePercent >
123:             maxFeePercent_
124:         ) revert InvalidFeeDefinition();
125:         feesEconomics.maxFeePercent = maxFeePercent_;
126:     }
127: 
128:     function setProtocolFeePercent(uint256 protocolFeePercent_, address protocolFeeDestination_) external onlyOwner {
129:         if (
130:             protocolFeePercent_ +
131:                 feesEconomics.subjectFeePercent +
132:                 feesEconomics.referralFeePercent +
133:                 feesEconomics.holdersFeePercent >
134:             feesEconomics.maxFeePercent ||
135:             protocolFeeDestination_ == address(0)
136:         ) revert InvalidFeeDefinition();
137:         feesEconomics.protocolFeePercent = protocolFeePercent_;
138:         feesEconomics.protocolFeeDestination = protocolFeeDestination_;
139:     }
140: 
141:     function setExternalFeePercent(
142:         uint256 subjectFeePercent_,
143:         uint256 referralFeePercent_,
144:         uint256 holdersFeePercent_
145:     ) external onlyManager {
146:         if (
147:             feesEconomics.protocolFeePercent + subjectFeePercent_ + referralFeePercent_ + holdersFeePercent_ >
148:             feesEconomics.maxFeePercent
149:         ) revert InvalidFeeDefinition();
150:         feesEconomics.subjectFeePercent = subjectFeePercent_;
151:         feesEconomics.referralFeePercent = referralFeePercent_;
152:         feesEconomics.holdersFeePercent = holdersFeePercent_;
153:     }
154: 
155:     function setReferralFeeDestination(
156:         address curvesTokenSubject,
157:         address referralFeeDestination_
158:     ) public onlyTokenSubject(curvesTokenSubject) {
159:         referralFeeDestination[curvesTokenSubject] = referralFeeDestination_;
160:     }
161: 
162:     function setERC20Factory(address factory_) external onlyOwner {
163:         curvesERC20Factory = factory_;
164:     }
165: 
166:     function getFees(
167:         uint256 price
168:     )
169:         public
170:         view
171:         returns (uint256 protocolFee, uint256 subjectFee, uint256 referralFee, uint256 holdersFee, uint256 totalFee)
172:     {
173:         protocolFee = (price * feesEconomics.protocolFeePercent) / 1 ether;
174:         subjectFee = (price * feesEconomics.subjectFeePercent) / 1 ether;
175:         referralFee = (price * feesEconomics.referralFeePercent) / 1 ether;
176:         holdersFee = (price * feesEconomics.holdersFeePercent) / 1 ether;
177:         totalFee = protocolFee + subjectFee + referralFee + holdersFee;
178:     }
179: 
180:     function getPrice(uint256 supply, uint256 amount) public pure returns (uint256) {
181:         uint256 sum1 = supply == 0 ? 0 : ((supply - 1) * (supply) * (2 * (supply - 1) + 1)) / 6;
182:         uint256 sum2 = supply == 0 && amount == 1
183:             ? 0
184:             : ((supply - 1 + amount) * (supply + amount) * (2 * (supply - 1 + amount) + 1)) / 6;
185:         uint256 summation = sum2 - sum1;
186:         return (summation * 1 ether) / 16000;
187:     }
188: 
189:     function getBuyPrice(address curvesTokenSubject, uint256 amount) public view returns (uint256) {
190:         return getPrice(curvesTokenSupply[curvesTokenSubject], amount);
191:     }
192: 
193:     function getSellPrice(address curvesTokenSubject, uint256 amount) public view returns (uint256) {
194:         return getPrice(curvesTokenSupply[curvesTokenSubject] - amount, amount);
195:     }
196: 
197:     function getBuyPriceAfterFee(address curvesTokenSubject, uint256 amount) public view returns (uint256) {
198:         uint256 price = getBuyPrice(curvesTokenSubject, amount);
199:         (, , , , uint256 totalFee) = getFees(price);
200: 
201:         return price + totalFee;
202:     }
203: 
204:     function getSellPriceAfterFee(address curvesTokenSubject, uint256 amount) public view returns (uint256) {
205:         uint256 price = getSellPrice(curvesTokenSubject, amount);
206:         (, , , , uint256 totalFee) = getFees(price);
207: 
208:         return price - totalFee;
209:     }
210: 
211:     function buyCurvesToken(address curvesTokenSubject, uint256 amount) public payable {
212:         uint256 startTime = presalesMeta[curvesTokenSubject].startTime;
213:         if (startTime != 0 && startTime >= block.timestamp) revert SaleNotOpen();
214: 
215:         _buyCurvesToken(curvesTokenSubject, amount);
216:     }
217: 
218:     function _transferFees(
219:         address curvesTokenSubject,
220:         bool isBuy,
221:         uint256 price,
222:         uint256 amount,
223:         uint256 supply
224:     ) internal {
225:         (uint256 protocolFee, uint256 subjectFee, uint256 referralFee, uint256 holderFee, ) = getFees(price);
226:         {
227:             bool referralDefined = referralFeeDestination[curvesTokenSubject] != address(0);
228:             {
229:                 address firstDestination = isBuy ? feesEconomics.protocolFeeDestination : msg.sender;
230:                 uint256 buyValue = referralDefined ? protocolFee : protocolFee + referralFee;
231:                 uint256 sellValue = price - protocolFee - subjectFee - referralFee - holderFee;
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}("");
233:                 if (!success1) revert CannotSendFunds();
234:             }
235:             {
236:                 (bool success2, ) = curvesTokenSubject.call{value: subjectFee}("");
237:                 if (!success2) revert CannotSendFunds();
238:             }
239:             {
240:                 (bool success3, ) = referralDefined
241:                     ? referralFeeDestination[curvesTokenSubject].call{value: referralFee}("")
242:                     : (true, bytes(""));
243:                 if (!success3) revert CannotSendFunds();
244:             }
245: 
246:             if (feesEconomics.holdersFeePercent > 0 && address(feeRedistributor) != address(0)) {
247:                 feeRedistributor.onBalanceChange(curvesTokenSubject, msg.sender);
248:                 feeRedistributor.addFees{value: holderFee}(curvesTokenSubject);
249:             }
250:         }
251:         emit Trade(
252:             msg.sender,
253:             curvesTokenSubject,
254:             isBuy,
255:             amount,
256:             price,
257:             protocolFee,
258:             subjectFee,
259:             isBuy ? supply + amount : supply - amount
260:         );
261:     }
262: 
263:     function _buyCurvesToken(address curvesTokenSubject, uint256 amount) internal {
264:         uint256 supply = curvesTokenSupply[curvesTokenSubject];
265:         if (!(supply > 0 || curvesTokenSubject == msg.sender)) revert UnauthorizedCurvesTokenSubject();
266: 
267:         uint256 price = getPrice(supply, amount);
268:         (, , , , uint256 totalFee) = getFees(price);
269: 
270:         if (msg.value < price + totalFee) revert InsufficientPayment();
271: 
272:         curvesTokenBalance[curvesTokenSubject][msg.sender] += amount;
273:         curvesTokenSupply[curvesTokenSubject] = supply + amount;
274:         _transferFees(curvesTokenSubject, true, price, amount, supply);
275: 
276:         // If is the first token bought, add to the list of owned tokens
277:         if (curvesTokenBalance[curvesTokenSubject][msg.sender] - amount == 0) {
278:             _addOwnedCurvesTokenSubject(msg.sender, curvesTokenSubject);
279:         }
280:     }
281: 
282:     function sellCurvesToken(address curvesTokenSubject, uint256 amount) public {
283:         uint256 supply = curvesTokenSupply[curvesTokenSubject];
284:         if (supply <= amount) revert LastTokenCannotBeSold();
285:         if (curvesTokenBalance[curvesTokenSubject][msg.sender] < amount) revert InsufficientBalance();
286: 
287:         uint256 price = getPrice(supply - amount, amount);
288: 
289:         curvesTokenBalance[curvesTokenSubject][msg.sender] -= amount;
290:         curvesTokenSupply[curvesTokenSubject] = supply - amount;
291: 
292:         _transferFees(curvesTokenSubject, false, price, amount, supply);
293:     }
294: 
295:     // Transfers tokens from current owner to receiver. Can be used for gifting or distributing tokens.
296:     function transferCurvesToken(address curvesTokenSubject, address to, uint256 amount) external {
297:         if (to == address(this)) revert ContractCannotReceiveTransfer();
298:         _transfer(curvesTokenSubject, msg.sender, to, amount);
299:     }
300: 
301:     // Transfer the total balance of all my tokens to another address. Can be used for migrating tokens.
302:     function transferAllCurvesTokens(address to) external {
303:         if (to == address(this)) revert ContractCannotReceiveTransfer();
304:         address[] storage subjects = ownedCurvesTokenSubjects[msg.sender];
305:         for (uint256 i = 0; i < subjects.length; i++) {
306:             uint256 amount = curvesTokenBalance[subjects[i]][msg.sender];
307:             if (amount > 0) {
308:                 _transfer(subjects[i], msg.sender, to, amount);
309:             }
310:         }
311:     }
312: 
313:     function _transfer(address curvesTokenSubject, address from, address to, uint256 amount) internal {
314:         if (amount > curvesTokenBalance[curvesTokenSubject][from]) revert InsufficientBalance();
315: 
316:         // If transferring from oneself, skip adding to the list
317:         if (from != to) {
318:             _addOwnedCurvesTokenSubject(to, curvesTokenSubject);
319:         }
320: 
321:         curvesTokenBalance[curvesTokenSubject][from] = curvesTokenBalance[curvesTokenSubject][from] - amount;
322:         curvesTokenBalance[curvesTokenSubject][to] = curvesTokenBalance[curvesTokenSubject][to] + amount;
323: 
324:         emit Transfer(curvesTokenSubject, from, to, amount);
325:     }
326: 
327:     // Internal function to add a curvesTokenSubject to the list if not already present
328:     function _addOwnedCurvesTokenSubject(address owner_, address curvesTokenSubject) internal {
329:         address[] storage subjects = ownedCurvesTokenSubjects[owner_];
330:         for (uint256 i = 0; i < subjects.length; i++) {
331:             if (subjects[i] == curvesTokenSubject) {
332:                 return;
333:             }
334:         }
335:         subjects.push(curvesTokenSubject);
336:     }
337: 
338:     function _deployERC20(
339:         address curvesTokenSubject,
340:         string memory name,
341:         string memory symbol
342:     ) internal returns (address) {
343:         // If the token's symbol is CURVES, append a counter value
344:         if (keccak256(bytes(symbol)) == keccak256(bytes(DEFAULT_SYMBOL))) {
345:             _curvesTokenCounter += 1;
346:             name = string(abi.encodePacked(name, " ", Strings.toString(_curvesTokenCounter)));
347:             symbol = string(abi.encodePacked(symbol, Strings.toString(_curvesTokenCounter)));
348:         }
349: 
350:         if (symbolToSubject[symbol] != address(0)) revert InvalidERC20Metadata();
351: 
352:         address tokenContract = CurvesERC20Factory(curvesERC20Factory).deploy(name, symbol, address(this));
353: 
354:         externalCurvesTokens[curvesTokenSubject].token = tokenContract;
355:         externalCurvesTokens[curvesTokenSubject].name = name;
356:         externalCurvesTokens[curvesTokenSubject].symbol = symbol;
357:         externalCurvesToSubject[tokenContract] = curvesTokenSubject;
358:         symbolToSubject[symbol] = curvesTokenSubject;
359: 
360:         emit TokenDeployed(curvesTokenSubject, tokenContract, name, symbol);
361:         return address(tokenContract);
362:     }
363: 
364:     function buyCurvesTokenWithName(
365:         address curvesTokenSubject,
366:         uint256 amount,
367:         string memory name,
368:         string memory symbol
369:     ) public payable {
370:         uint256 supply = curvesTokenSupply[curvesTokenSubject];
371:         if (supply != 0) revert CurveAlreadyExists();
372: 
373:         _buyCurvesToken(curvesTokenSubject, amount);
374:         _mint(curvesTokenSubject, name, symbol);
375:     }
376: 
377:     function buyCurvesTokenForPresale(
378:         address curvesTokenSubject,
379:         uint256 amount,
380:         uint256 startTime,
381:         bytes32 merkleRoot,
382:         uint256 maxBuy
383:     ) public payable onlyTokenSubject(curvesTokenSubject) {
384:         if (startTime <= block.timestamp) revert InvalidPresaleStartTime();
385:         uint256 supply = curvesTokenSupply[curvesTokenSubject];
386:         if (supply != 0) revert CurveAlreadyExists();
387:         presalesMeta[curvesTokenSubject].startTime = startTime;
388:         presalesMeta[curvesTokenSubject].merkleRoot = merkleRoot;
389:         presalesMeta[curvesTokenSubject].maxBuy = (maxBuy == 0 ? type(uint256).max : maxBuy);
390: 
391:         _buyCurvesToken(curvesTokenSubject, amount);
392:     }
393: 
394:     function setWhitelist(bytes32 merkleRoot) external {
395:         uint256 supply = curvesTokenSupply[msg.sender];
396:         if (supply > 1) revert CurveAlreadyExists();
397: 
398:         if (presalesMeta[msg.sender].merkleRoot != merkleRoot) {
399:             presalesMeta[msg.sender].merkleRoot = merkleRoot;
400:             emit WhitelistUpdated(msg.sender, merkleRoot);
401:         }
402:     }
403: 
404:     function buyCurvesTokenWhitelisted(
405:         address curvesTokenSubject,
406:         uint256 amount,
407:         bytes32[] memory proof
408:     ) public payable {
409:         if (
410:             presalesMeta[curvesTokenSubject].startTime == 0 ||
411:             presalesMeta[curvesTokenSubject].startTime <= block.timestamp
412:         ) revert PresaleUnavailable();
413: 
414:         presalesBuys[curvesTokenSubject][msg.sender] += amount;
415:         uint256 tokenBought = presalesBuys[curvesTokenSubject][msg.sender];
416:         if (tokenBought > presalesMeta[curvesTokenSubject].maxBuy) revert ExceededMaxBuyAmount();
417: 
418:         verifyMerkle(curvesTokenSubject, msg.sender, proof);
419:         _buyCurvesToken(curvesTokenSubject, amount);
420:     }
421: 
422:     function verifyMerkle(address curvesTokenSubject, address caller, bytes32[] memory proof) public view {
423:         // Verify merkle proof
424:         bytes32 leaf = keccak256(abi.encodePacked(caller));
425:         if (!MerkleProof.verify(proof, presalesMeta[curvesTokenSubject].merkleRoot, leaf)) revert UnverifiedProof();
426:     }
427: 
428:     function setNameAndSymbol(
429:         address curvesTokenSubject,
430:         string memory name,
431:         string memory symbol
432:     ) external onlyTokenSubject(curvesTokenSubject) {
433:         if (externalCurvesTokens[curvesTokenSubject].token != address(0)) revert ERC20TokenAlreadyMinted();
434:         if (symbolToSubject[symbol] != address(0)) revert InvalidERC20Metadata();
435:         externalCurvesTokens[curvesTokenSubject].name = name;
436:         externalCurvesTokens[curvesTokenSubject].symbol = symbol;
437:     }
438: 
439:     function mint(address curvesTokenSubject) external onlyTokenSubject(curvesTokenSubject) {
440:         if (
441:             keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].name)) ==
442:             keccak256(abi.encodePacked("")) ||
443:             keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].symbol)) ==
444:             keccak256(abi.encodePacked(""))
445:         ) {
446:             externalCurvesTokens[curvesTokenSubject].name = DEFAULT_NAME;
447:             externalCurvesTokens[curvesTokenSubject].symbol = DEFAULT_SYMBOL;
448:         }
449:         _mint(
450:             curvesTokenSubject,
451:             externalCurvesTokens[curvesTokenSubject].name,
452:             externalCurvesTokens[curvesTokenSubject].symbol
453:         );
454:     }
455: 
456:     function _mint(
457:         address curvesTokenSubject,
458:         string memory name,
459:         string memory symbol
460:     ) internal onlyTokenSubject(curvesTokenSubject) {
461:         if (externalCurvesTokens[curvesTokenSubject].token != address(0)) revert ERC20TokenAlreadyMinted();
462:         _deployERC20(curvesTokenSubject, name, symbol);
463:     }
464: 
465:     function withdraw(address curvesTokenSubject, uint256 amount) public {
466:         if (amount > curvesTokenBalance[curvesTokenSubject][msg.sender]) revert InsufficientBalance();
467: 
468:         address externalToken = externalCurvesTokens[curvesTokenSubject].token;
469:         if (externalToken == address(0)) {
470:             if (
471:                 keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].name)) ==
472:                 keccak256(abi.encodePacked("")) ||
473:                 keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].symbol)) ==
474:                 keccak256(abi.encodePacked(""))
475:             ) {
476:                 externalCurvesTokens[curvesTokenSubject].name = DEFAULT_NAME;
477:                 externalCurvesTokens[curvesTokenSubject].symbol = DEFAULT_SYMBOL;
478:             }
479:             _deployERC20(
480:                 curvesTokenSubject,
481:                 externalCurvesTokens[curvesTokenSubject].name,
482:                 externalCurvesTokens[curvesTokenSubject].symbol
483:             );
484:             externalToken = externalCurvesTokens[curvesTokenSubject].token;
485:         }
486:         _transfer(curvesTokenSubject, msg.sender, address(this), amount);
487:         CurvesERC20(externalToken).mint(msg.sender, amount * 1 ether);
488:     }
489: 
490:     function deposit(address curvesTokenSubject, uint256 amount) public {
491:         if (amount % 1 ether != 0) revert NonIntegerDepositAmount();
492: 
493:         address externalToken = externalCurvesTokens[curvesTokenSubject].token;
494:         uint256 tokenAmount = amount / 1 ether;
495: 
496:         if (externalToken == address(0)) revert TokenAbsentForCurvesTokenSubject();
497:         if (amount > CurvesERC20(externalToken).balanceOf(msg.sender)) revert InsufficientBalance();
498:         if (tokenAmount > curvesTokenBalance[curvesTokenSubject][address(this)]) revert InsufficientBalance();
499: 
500:         CurvesERC20(externalToken).burn(msg.sender, amount);
501:         _transfer(curvesTokenSubject, address(this), msg.sender, tokenAmount);
502:     }
503: 
504:     function sellExternalCurvesToken(address curvesTokenSubject, uint256 amount) public {
505:         if (externalCurvesTokens[curvesTokenSubject].token == address(0)) revert TokenAbsentForCurvesTokenSubject();
506: 
507:         deposit(curvesTokenSubject, amount);
508:         sellCurvesToken(curvesTokenSubject, amount / 1 ether);
509:     }
510: }
511: 

```


*GitHub* : [1](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L1-L1)

```solidity
1: // SPDX-License-Identifier: MIT
2: pragma solidity 0.8.7;
3: 
4: import "./CurvesERC20.sol";
5: 
6: contract CurvesERC20Factory {
7:     function deploy(string memory name, string memory symbol, address owner) public returns (address) {
8:         CurvesERC20 tokenContract = new CurvesERC20(name, symbol, owner);
9:         return address(tokenContract);
10:     }
11: }
12: 

```


*GitHub* : [1](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20Factory.sol#L1-L1)

```solidity
1: // SPDX-License-Identifier: MIT
2: pragma solidity 0.8.7;
3: 
4: import "@openzeppelin/contracts/access/Ownable.sol";
5: import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
6: 
7: contract CurvesERC20 is ERC20, Ownable {
8:     constructor(string memory name_, string memory symbol_, address owner) ERC20(name_, symbol_) {
9:         transferOwnership(owner);
10:     }
11: 
12:     function mint(address to, uint256 amount) public onlyOwner {
13:         _mint(to, amount);
14:     }
15: 
16:     function burn(address from, uint256 amount) public onlyOwner {
17:         _burn(from, amount);
18:     }
19: }
20: 

```


*GitHub* : [1](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L1-L1)
### [N-12]<a name="n-12"></a> Using Low-Level Call for Transfers
Utilizing low-level calls like `.call{value: value}` for Ether transfers in Ethereum can be risky, as it can inadvertently allow malicious contract executions through fallback functions. To mitigate these risks and ensure safer Ether transfers, it is recommended to adopt more secure and explicit methods provided by reputable libraries such as OpenZeppelin. Functions like `Address.sendValue()` from OpenZeppelin provide a clearer and safer alternative for sending Ether, as they encapsulate necessary checks and error handling, ensuring that Ether is transferred securely and any errors are appropriately dealt with. This not only enhances the security of your smart contract but also improves code readability and maintainability, aligning with modern Solidity development practices.

*There are 3 instance(s) of this issue:*

```solidity
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}(""); // <= FOUND

```


*GitHub* : [232](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L232-L232)

```solidity
236:                 (bool success2, ) = curvesTokenSubject.call{value: subjectFee}(""); // <= FOUND

```


*GitHub* : [236](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L236-L236)

```solidity
240:                 (bool success3, ) = referralDefined
241:                     ? referralFeeDestination[curvesTokenSubject].call{value: referralFee}("") // <= FOUND

```


*GitHub* : [240](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L240-L241)
### [N-13]<a name="n-13"></a> Consider implementing two-step procedure for updating protocol addresses
Implementing a two-step procedure for updating protocol addresses adds an extra layer of security. In such a system, the first step initiates the change, and the second step, after a predefined delay, confirms and finalizes it. This delay allows stakeholders or monitoring tools to observe and react to unintended or malicious changes. If an unauthorized change is detected, corrective actions can be taken before the change is finalized. To achieve this, introduce a "proposed address" state variable and a "delay period". Upon an update request, set the "proposed address". After the delay, if not contested, the main protocol address can be updated.

*There are 3 instance(s) of this issue:*

```solidity
113:     function setFeeRedistributor(address feeRedistributor_) external onlyOwner { // <= FOUND
114:         feeRedistributor = FeeSplitter(payable(feeRedistributor_));
115:     }

```


*GitHub* : [113](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L113-L113)

```solidity
162:     function setERC20Factory(address factory_) external onlyOwner { // <= FOUND
163:         curvesERC20Factory = factory_;
164:     }

```


*GitHub* : [162](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L162-L162)

```solidity
23:     function setManager(address manager_, bool value) public onlyOwner { // <= FOUND
24:         managers[manager_] = value;
25:     }

```


*GitHub* : [23](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L23-L23)
### [N-14]<a name="n-14"></a> Use Unchecked for Divisions on Constant or Immutable Values
When performing divisions in Solidity, the operation costs gas and includes a check for division by zero. However, if you are dividing by a constant or an immutable value that is guaranteed to be non-zero, this check becomes unnecessary, consuming extra gas without adding safety.

**Resolution**: Utilize the `unchecked` block for divisions involving constant or immutable values that are assuredly non-zero. This bypasses the additional safety checks, optimizing gas usage. Ensure thorough testing and code reviews are conducted to verify the non-zero condition of the denominator, preventing any potential division by zero errors and maintaining contract safety.

*There are 2 instance(s) of this issue:*

```solidity
68:             data.unclaimedFees[account] += owed / PRECISION; // <= FOUND

```


*GitHub* : [68](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L68-L68)

```solidity
77:         return (owed / PRECISION) + data.unclaimedFees[account]; // <= FOUND

```


*GitHub* : [77](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L77-L77)
### [N-15]<a name="n-15"></a> Floating pragma should be avoided

*There are 1 instance(s) of this issue:*

```solidity
2: pragma solidity ^0.8.7; // <= FOUND

```


*GitHub* : [2](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L2-L2)
### [N-16]<a name="n-16"></a> Instances should be declared in a separate file
It is general standard to declare interfaces on files separate from regular contract declarations

*There are 1 instance(s) of this issue:*

```solidity
13: interface CurvesErrors  // <= FOUND

```


*GitHub* : [13](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L13-L13)
### [N-17]<a name="n-17"></a> Events regarding state variable changes should emit the previous state variable value
Modify such events to contain the previous value of the state variable as demonstrated in the example below

*There are 1 instance(s) of this issue:*

```solidity
92: event WhitelistUpdated(address indexed presale, bytes32 indexed root);

```


*GitHub* : [92](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L92-L92)
### [N-18]<a name="n-18"></a> In functions which accept an address as a parameter, there should be a zero address check to prevent bugs
In smart contract development, especially with Solidity, it's crucial to validate inputs to functions. When a function accepts an Ethereum address as a parameter, implementing a zero address check (i.e., ensuring the address is not `0x0`) is a best practice to prevent potential bugs and vulnerabilities. The zero address (`0x0`) is a default value and generally indicates an uninitialized or invalid state. Passing the zero address to certain functions can lead to unintended behaviors, like funds getting locked permanently or transactions failing silently. By checking for and rejecting the zero address, developers can ensure that the function operates as intended and interacts only with valid Ethereum addresses. This check enhances the contract's robustness and security.

*There are 34 instance(s) of this issue:*

```solidity
113:     function setFeeRedistributor(address feeRedistributor_) external onlyOwner 

```


*GitHub* : [113](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L113-L113)

```solidity
155:     function setReferralFeeDestination(
156:         address curvesTokenSubject,
157:         address referralFeeDestination_
158:     ) public onlyTokenSubject(curvesTokenSubject) 

```


*GitHub* : [155](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L155-L155)

```solidity
162:     function setERC20Factory(address factory_) external onlyOwner 

```


*GitHub* : [162](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L162-L162)

```solidity
189:     function getBuyPrice(address curvesTokenSubject, uint256 amount) public view returns (uint256) 

```


*GitHub* : [189](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L189-L189)

```solidity
193:     function getSellPrice(address curvesTokenSubject, uint256 amount) public view returns (uint256) 

```


*GitHub* : [193](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L193-L193)

```solidity
197:     function getBuyPriceAfterFee(address curvesTokenSubject, uint256 amount) public view returns (uint256) 

```


*GitHub* : [197](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L197-L197)

```solidity
204:     function getSellPriceAfterFee(address curvesTokenSubject, uint256 amount) public view returns (uint256) 

```


*GitHub* : [204](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L204-L204)

```solidity
211:     function buyCurvesToken(address curvesTokenSubject, uint256 amount) public payable 

```


*GitHub* : [211](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L211-L211)

```solidity
263:     function _buyCurvesToken(address curvesTokenSubject, uint256 amount) internal 

```


*GitHub* : [263](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L263-L263)

```solidity
282:     function sellCurvesToken(address curvesTokenSubject, uint256 amount) public 

```


*GitHub* : [282](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L282-L282)

```solidity
296:     function transferCurvesToken(address curvesTokenSubject, address to, uint256 amount) external 

```


*GitHub* : [296](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L296-L296)

```solidity
302:     function transferAllCurvesTokens(address to) external 

```


*GitHub* : [302](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L302-L302)

```solidity
313:     function _transfer(address curvesTokenSubject, address from, address to, uint256 amount) internal 

```


*GitHub* : [313](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L313-L313)

```solidity
328:     function _addOwnedCurvesTokenSubject(address owner_, address curvesTokenSubject) internal 

```


*GitHub* : [328](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L328-L328)

```solidity
364:     function buyCurvesTokenWithName(
365:         address curvesTokenSubject,
366:         uint256 amount,
367:         string memory name,
368:         string memory symbol
369:     ) public payable 

```


*GitHub* : [364](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L364-L364)

```solidity
377:     function buyCurvesTokenForPresale(
378:         address curvesTokenSubject,
379:         uint256 amount,
380:         uint256 startTime,
381:         bytes32 merkleRoot,
382:         uint256 maxBuy
383:     ) public payable onlyTokenSubject(curvesTokenSubject) 

```


*GitHub* : [377](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L377-L377)

```solidity
404:     function buyCurvesTokenWhitelisted(
405:         address curvesTokenSubject,
406:         uint256 amount,
407:         bytes32[] memory proof
408:     ) public payable 

```


*GitHub* : [404](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L404-L404)

```solidity
422:     function verifyMerkle(address curvesTokenSubject, address caller, bytes32[] memory proof) public view 

```


*GitHub* : [422](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L422-L422)

```solidity
439:     function mint(address curvesTokenSubject) external onlyTokenSubject(curvesTokenSubject) 

```


*GitHub* : [439](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L439-L439)

```solidity
39:     function balanceOf(address token, address account) public view returns (uint256) 

```


*GitHub* : [39](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L39-L39)

```solidity
43:     function totalSupply(address token) public view returns (uint256) 

```


*GitHub* : [43](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L43-L43)

```solidity
48:     function getUserTokens(address user) public view returns (address[] memory) 

```


*GitHub* : [48](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L48-L48)

```solidity
52:     function getUserTokensAndClaimable(address user) public view returns (UserClaimData[] memory) 

```


*GitHub* : [52](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L52-L52)

```solidity
63:     function updateFeeCredit(address token, address account) internal 

```


*GitHub* : [63](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L63-L63)

```solidity
73:     function getClaimableFees(address token, address account) public view returns (uint256) 

```


*GitHub* : [73](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L73-L73)

```solidity
80:     function claimFees(address token) external 

```


*GitHub* : [80](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L80-L80)

```solidity
89:     function addFees(address token) public payable onlyManager 

```


*GitHub* : [89](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L89-L89)

```solidity
96:     function onBalanceChange(address token, address account) public onlyManager 

```


*GitHub* : [96](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L96-L96)

```solidity
103:     function batchClaiming(address[] calldata tokenList) external 

```


*GitHub* : [103](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L103-L103)

```solidity
23:     function setManager(address manager_, bool value) public onlyOwner 

```


*GitHub* : [23](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L23-L23)

```solidity
27:     function transferOwnership(address owner_) public onlyOwner 

```


*GitHub* : [27](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L27-L27)

```solidity
12:     function mint(address to, uint256 amount) public onlyOwner 

```


*GitHub* : [12](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L12-L12)

```solidity
16:     function burn(address from, uint256 amount) public onlyOwner 

```


*GitHub* : [16](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L16-L16)

```solidity
7:     function deploy(string memory name, string memory symbol, address owner) public returns (address) 

```


*GitHub* : [7](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20Factory.sol#L7-L7)
### [N-19]<a name="n-19"></a> Use safeTransferOwnership instead of transferOwnership
SafeTransferOwnership should be used in place of transferOwner in Solidity contracts to enhance security and error handling. Unlike the basic transferOwner function, SafeTransferOwnership incorporates checks to validate the new owner's address and ensures that the transfer is executed only after receiving the new owner's confirmation. This additional layer of protection prevents accidental ownership transfers and mitigates the risk of locking a contract due to an invalid or unintended address assignment.

*There are 1 instance(s) of this issue:*

```solidity
27:     function transferOwnership(address owner_) public onlyOwner  // <= FOUND

```


*GitHub* : [27](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L27-L27)
### [N-20]<a name="n-20"></a> Default int values are manually set
In instances where a new variable is defined, there is no need to set it to it's default value.

*There are 5 instance(s) of this issue:*

```solidity
47:     
48:     uint256 private _curvesTokenCounter = 0; // <= FOUND

```


*GitHub* : [47](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L47-L48)

```solidity
104:         uint256 totalClaimable = 0; // <= FOUND

```


*GitHub* : [104](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L104-L104)

```solidity
305:         for (uint256 i = 0; i < subjects.length; i++) { // <= FOUND

```


*GitHub* : [305](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L305-L305)

```solidity
55:         for (uint256 i = 0; i < tokens.length; i++) { // <= FOUND

```


*GitHub* : [55](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L55-L55)

```solidity
105:         for (uint256 i = 0; i < tokenList.length; i++) { // <= FOUND

```


*GitHub* : [105](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L105-L105)
### [N-21]<a name="n-21"></a> Ownable2Step should be used in place of Ownable
Ownable2Step further prevents risks posed by centralised privileges as there is a smaller likelihood of the owner being wrongfully changed

*There are 1 instance(s) of this issue:*

```solidity
7: contract CurvesERC20 is ERC20, Ownable  // <= FOUND

```


*GitHub* : [7](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L7-L7)
### [N-22]<a name="n-22"></a> Revert statements within external and public functions can be used to perform DOS attacks
In Solidity, 'revert' statements are used to undo changes and throw an exception when certain conditions are not met. However, in public and external functions, improper use of `revert` can be exploited for Denial of Service (DoS) attacks. An attacker can intentionally trigger these 'revert' conditions, causing legitimate transactions to consistently fail. For example, if a function relies on specific conditions from user input or contract state, an attacker could manipulate these to continually force reverts, blocking the function's execution. Therefore, it's crucial to design contract logic to handle exceptions properly and avoid scenarios where `revert` can be predictably triggered by malicious actors. This includes careful input validation and considering alternative design patterns that are less susceptible to such abuses.

*There are 19 instance(s) of this issue:*

```solidity
117:     function setMaxFeePercent(uint256 maxFeePercent_) external onlyManager {
118:         if (
119:             feesEconomics.protocolFeePercent +
120:                 feesEconomics.subjectFeePercent +
121:                 feesEconomics.referralFeePercent +
122:                 feesEconomics.holdersFeePercent >
123:             maxFeePercent_
124:         ) revert InvalidFeeDefinition(); // <= FOUND
125:         feesEconomics.maxFeePercent = maxFeePercent_;
126:     }

```


*GitHub* : [124](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L124-L124)

```solidity
128:     function setProtocolFeePercent(uint256 protocolFeePercent_, address protocolFeeDestination_) external onlyOwner {
129:         if (
130:             protocolFeePercent_ +
131:                 feesEconomics.subjectFeePercent +
132:                 feesEconomics.referralFeePercent +
133:                 feesEconomics.holdersFeePercent >
134:             feesEconomics.maxFeePercent ||
135:             protocolFeeDestination_ == address(0)
136:         ) revert InvalidFeeDefinition(); // <= FOUND
137:         feesEconomics.protocolFeePercent = protocolFeePercent_;
138:         feesEconomics.protocolFeeDestination = protocolFeeDestination_;
139:     }

```


*GitHub* : [136](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L136-L136)

```solidity
141:     function setExternalFeePercent(
142:         uint256 subjectFeePercent_,
143:         uint256 referralFeePercent_,
144:         uint256 holdersFeePercent_
145:     ) external onlyManager {
146:         if (
147:             feesEconomics.protocolFeePercent + subjectFeePercent_ + referralFeePercent_ + holdersFeePercent_ >
148:             feesEconomics.maxFeePercent
149:         ) revert InvalidFeeDefinition(); // <= FOUND
150:         feesEconomics.subjectFeePercent = subjectFeePercent_;
151:         feesEconomics.referralFeePercent = referralFeePercent_;
152:         feesEconomics.holdersFeePercent = holdersFeePercent_;
153:     }

```


*GitHub* : [149](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L149-L149)

```solidity
296:     function transferCurvesToken(address curvesTokenSubject, address to, uint256 amount) external {
297:         if (to == address(this)) revert ContractCannotReceiveTransfer(); // <= FOUND
298:         _transfer(curvesTokenSubject, msg.sender, to, amount);
299:     }

```


*GitHub* : [297](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L297-L297)

```solidity
302:     function transferAllCurvesTokens(address to) external {
303:         if (to == address(this)) revert ContractCannotReceiveTransfer(); // <= FOUND
304:         address[] storage subjects = ownedCurvesTokenSubjects[msg.sender];
305:         for (uint256 i = 0; i < subjects.length; i++) {
306:             uint256 amount = curvesTokenBalance[subjects[i]][msg.sender];
307:             if (amount > 0) {
308:                 _transfer(subjects[i], msg.sender, to, amount);
309:             }
310:         }
311:     }

```


*GitHub* : [303](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L303-L303)

```solidity
394:     function setWhitelist(bytes32 merkleRoot) external {
395:         uint256 supply = curvesTokenSupply[msg.sender];
396:         if (supply > 1) revert CurveAlreadyExists(); // <= FOUND
397: 
398:         if (presalesMeta[msg.sender].merkleRoot != merkleRoot) {
399:             presalesMeta[msg.sender].merkleRoot = merkleRoot;
400:             emit WhitelistUpdated(msg.sender, merkleRoot);
401:         }
402:     }

```


*GitHub* : [396](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L396-L396)

```solidity
428:     function setNameAndSymbol(
429:         address curvesTokenSubject,
430:         string memory name,
431:         string memory symbol
432:     ) external onlyTokenSubject(curvesTokenSubject) {
433:         if (externalCurvesTokens[curvesTokenSubject].token != address(0)) revert ERC20TokenAlreadyMinted(); // <= FOUND
434:         if (symbolToSubject[symbol] != address(0)) revert InvalidERC20Metadata(); // <= FOUND
435:         externalCurvesTokens[curvesTokenSubject].name = name;
436:         externalCurvesTokens[curvesTokenSubject].symbol = symbol;
437:     }

```


*GitHub* : [433](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L433-L434)

```solidity
80:     function claimFees(address token) external {
81:         updateFeeCredit(token, msg.sender);
82:         uint256 claimable = getClaimableFees(token, msg.sender);
83:         if (claimable == 0) revert NoFeesToClaim(); // <= FOUND
84:         tokensData[token].unclaimedFees[msg.sender] = 0;
85:         payable(msg.sender).transfer(claimable);
86:         emit FeesClaimed(token, msg.sender, claimable);
87:     }

```


*GitHub* : [83](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L83-L83)

```solidity
103:     function batchClaiming(address[] calldata tokenList) external {
104:         uint256 totalClaimable = 0;
105:         for (uint256 i = 0; i < tokenList.length; i++) {
106:             address token = tokenList[i];
107:             updateFeeCredit(token, msg.sender);
108:             uint256 claimable = getClaimableFees(token, msg.sender);
109:             if (claimable > 0) {
110:                 tokensData[token].unclaimedFees[msg.sender] = 0;
111:                 totalClaimable += claimable;
112:                 emit FeesClaimed(token, msg.sender, claimable);
113:             }
114:         }
115:         if (totalClaimable == 0) revert NoFeesToClaim(); // <= FOUND
116:         payable(msg.sender).transfer(totalClaimable);
117:     }

```


*GitHub* : [115](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L115-L115)

```solidity
211:     function buyCurvesToken(address curvesTokenSubject, uint256 amount) public payable {
212:         uint256 startTime = presalesMeta[curvesTokenSubject].startTime;
213:         if (startTime != 0 && startTime >= block.timestamp) revert SaleNotOpen(); // <= FOUND
214: 
215:         _buyCurvesToken(curvesTokenSubject, amount);
216:     }

```


*GitHub* : [213](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L213-L213)

```solidity
282:     function sellCurvesToken(address curvesTokenSubject, uint256 amount) public {
283:         uint256 supply = curvesTokenSupply[curvesTokenSubject];
284:         if (supply <= amount) revert LastTokenCannotBeSold(); // <= FOUND
285:         if (curvesTokenBalance[curvesTokenSubject][msg.sender] < amount) revert InsufficientBalance(); // <= FOUND
286: 
287:         uint256 price = getPrice(supply - amount, amount);
288: 
289:         curvesTokenBalance[curvesTokenSubject][msg.sender] -= amount;
290:         curvesTokenSupply[curvesTokenSubject] = supply - amount;
291: 
292:         _transferFees(curvesTokenSubject, false, price, amount, supply);
293:     }

```


*GitHub* : [284](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L284-L285)

```solidity
364:     function buyCurvesTokenWithName(
365:         address curvesTokenSubject,
366:         uint256 amount,
367:         string memory name,
368:         string memory symbol
369:     ) public payable {
370:         uint256 supply = curvesTokenSupply[curvesTokenSubject];
371:         if (supply != 0) revert CurveAlreadyExists(); // <= FOUND
372: 
373:         _buyCurvesToken(curvesTokenSubject, amount);
374:         _mint(curvesTokenSubject, name, symbol);
375:     }

```


*GitHub* : [371](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L371-L371)

```solidity
377:     function buyCurvesTokenForPresale(
378:         address curvesTokenSubject,
379:         uint256 amount,
380:         uint256 startTime,
381:         bytes32 merkleRoot,
382:         uint256 maxBuy
383:     ) public payable onlyTokenSubject(curvesTokenSubject) {
384:         if (startTime <= block.timestamp) revert InvalidPresaleStartTime(); // <= FOUND
385:         uint256 supply = curvesTokenSupply[curvesTokenSubject];
386:         if (supply != 0) revert CurveAlreadyExists(); // <= FOUND
387:         presalesMeta[curvesTokenSubject].startTime = startTime;
388:         presalesMeta[curvesTokenSubject].merkleRoot = merkleRoot;
389:         presalesMeta[curvesTokenSubject].maxBuy = (maxBuy == 0 ? type(uint256).max : maxBuy);
390: 
391:         _buyCurvesToken(curvesTokenSubject, amount);
392:     }

```


*GitHub* : [384](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L384-L386)

```solidity
404:     function buyCurvesTokenWhitelisted(
405:         address curvesTokenSubject,
406:         uint256 amount,
407:         bytes32[] memory proof
408:     ) public payable {
409:         if (
410:             presalesMeta[curvesTokenSubject].startTime == 0 ||
411:             presalesMeta[curvesTokenSubject].startTime <= block.timestamp
412:         ) revert PresaleUnavailable(); // <= FOUND
413: 
414:         presalesBuys[curvesTokenSubject][msg.sender] += amount;
415:         uint256 tokenBought = presalesBuys[curvesTokenSubject][msg.sender];
416:         if (tokenBought > presalesMeta[curvesTokenSubject].maxBuy) revert ExceededMaxBuyAmount(); // <= FOUND
417: 
418:         verifyMerkle(curvesTokenSubject, msg.sender, proof);
419:         _buyCurvesToken(curvesTokenSubject, amount);
420:     }

```


*GitHub* : [412](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L412-L416)

```solidity
422:     function verifyMerkle(address curvesTokenSubject, address caller, bytes32[] memory proof) public view {
423:         
424:         bytes32 leaf = keccak256(abi.encodePacked(caller));
425:         if (!MerkleProof.verify(proof, presalesMeta[curvesTokenSubject].merkleRoot, leaf)) revert UnverifiedProof(); // <= FOUND
426:     }

```


*GitHub* : [425](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L425-L425)

```solidity
465:     function withdraw(address curvesTokenSubject, uint256 amount) public {
466:         if (amount > curvesTokenBalance[curvesTokenSubject][msg.sender]) revert InsufficientBalance(); // <= FOUND
467: 
468:         address externalToken = externalCurvesTokens[curvesTokenSubject].token;
469:         if (externalToken == address(0)) {
470:             if (
471:                 keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].name)) ==
472:                 keccak256(abi.encodePacked("")) ||
473:                 keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].symbol)) ==
474:                 keccak256(abi.encodePacked(""))
475:             ) {
476:                 externalCurvesTokens[curvesTokenSubject].name = DEFAULT_NAME;
477:                 externalCurvesTokens[curvesTokenSubject].symbol = DEFAULT_SYMBOL;
478:             }
479:             _deployERC20(
480:                 curvesTokenSubject,
481:                 externalCurvesTokens[curvesTokenSubject].name,
482:                 externalCurvesTokens[curvesTokenSubject].symbol
483:             );
484:             externalToken = externalCurvesTokens[curvesTokenSubject].token;
485:         }
486:         _transfer(curvesTokenSubject, msg.sender, address(this), amount);
487:         CurvesERC20(externalToken).mint(msg.sender, amount * 1 ether);
488:     }

```


*GitHub* : [466](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L466-L466)

```solidity
490:     function deposit(address curvesTokenSubject, uint256 amount) public {
491:         if (amount % 1 ether != 0) revert NonIntegerDepositAmount(); // <= FOUND
492: 
493:         address externalToken = externalCurvesTokens[curvesTokenSubject].token;
494:         uint256 tokenAmount = amount / 1 ether;
495: 
496:         if (externalToken == address(0)) revert TokenAbsentForCurvesTokenSubject(); // <= FOUND
497:         if (amount > CurvesERC20(externalToken).balanceOf(msg.sender)) revert InsufficientBalance(); // <= FOUND
498:         if (tokenAmount > curvesTokenBalance[curvesTokenSubject][address(this)]) revert InsufficientBalance(); // <= FOUND
499: 
500:         CurvesERC20(externalToken).burn(msg.sender, amount);
501:         _transfer(curvesTokenSubject, address(this), msg.sender, tokenAmount);
502:     }

```


*GitHub* : [491](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L491-L498)

```solidity
504:     function sellExternalCurvesToken(address curvesTokenSubject, uint256 amount) public {
505:         if (externalCurvesTokens[curvesTokenSubject].token == address(0)) revert TokenAbsentForCurvesTokenSubject(); // <= FOUND
506: 
507:         deposit(curvesTokenSubject, amount);
508:         sellCurvesToken(curvesTokenSubject, amount / 1 ether);
509:     }

```


*GitHub* : [505](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L505-L505)

```solidity
89:     function addFees(address token) public payable onlyManager {
90:         uint256 totalSupply_ = totalSupply(token);
91:         if (totalSupply_ == 0) revert NoTokenHolders(); // <= FOUND
92:         TokenData storage data = tokensData[token];
93:         data.cumulativeFeePerToken += (msg.value * PRECISION) / totalSupply_;
94:     }

```


*GitHub* : [91](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L91-L91)
### [N-23]<a name="n-23"></a> Functions which are either private or internal should have a preceding _ in their name
Add a preceding underscore to the function name, take care to refactor where there functions are called

*There are 1 instance(s) of this issue:*

```solidity
63:     function updateFeeCredit(address token, address account) internal 

```


*GitHub* : [63](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L63-L63)
### [N-24]<a name="n-24"></a> Contract lines should not be longer than 120 characters for readability
Consider spreading these lines over multiple lines to aid in readability and the support of VIM users everywhere.

*There are 2 instance(s) of this issue:*

```solidity
44:         //@dev: this is the amount of tokens that are not locked in the contract. The locked tokens are in the ERC20 contract // <= FOUND

```


*GitHub* : [44](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L44-L44)

```solidity
102:     //@dev: this may fail if the the list is long. Get first the list with getUserTokens to estimate and prepare the batch // <= FOUND

```


*GitHub* : [102](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L102-L102)
### [N-25]<a name="n-25"></a> Setters should prevent re-setting of the same value
In Solidity, manipulating contract storage comes with significant gas costs. One can optimize gas usage by preventing unnecessary storage updates when the new value is the same as the existing one. If an existing value is the same as the new one, not reassigning it to the storage could potentially save substantial amounts of gas, notably 2900 gas for a 'Gsreset'. This saving may come at the expense of a cold storage load operation ('Gcoldsload'), which costs 2100 gas, or a warm storage access operation ('Gwarmaccess'), which costs 100 gas. Therefore, the gas efficiency of your contract can be significantly improved by adding a check that compares the new value with the current one before any storage update operation. If the values are the same, you can bypass the storage operation, thereby saving gas.

*There are 5 instance(s) of this issue:*

```solidity
113:     function setFeeRedistributor(address feeRedistributor_) external onlyOwner {
114:         feeRedistributor = FeeSplitter(payable(feeRedistributor_));
115:     }

```


*GitHub* : [113](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L113-L113)

```solidity
162:     function setERC20Factory(address factory_) external onlyOwner {
163:         curvesERC20Factory = factory_;
164:     }

```


*GitHub* : [162](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L162-L162)

```solidity
23:     function setManager(address manager_, bool value) public onlyOwner {
24:         managers[manager_] = value;
25:     }

```


*GitHub* : [23](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L23-L23)

```solidity
117:     function setMaxFeePercent(uint256 maxFeePercent_) external onlyManager {
118:         if (
119:             feesEconomics.protocolFeePercent +
120:                 feesEconomics.subjectFeePercent +
121:                 feesEconomics.referralFeePercent +
122:                 feesEconomics.holdersFeePercent >
123:             maxFeePercent_
124:         ) revert InvalidFeeDefinition();
125:         feesEconomics.maxFeePercent = maxFeePercent_;
126:     }

```


*GitHub* : [117](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L117-L117)

```solidity
141:     function setExternalFeePercent(
142:         uint256 subjectFeePercent_,
143:         uint256 referralFeePercent_,
144:         uint256 holdersFeePercent_
145:     ) external onlyManager {
146:         if (
147:             feesEconomics.protocolFeePercent + subjectFeePercent_ + referralFeePercent_ + holdersFeePercent_ >
148:             feesEconomics.maxFeePercent
149:         ) revert InvalidFeeDefinition();
150:         feesEconomics.subjectFeePercent = subjectFeePercent_;
151:         feesEconomics.referralFeePercent = referralFeePercent_;
152:         feesEconomics.holdersFeePercent = holdersFeePercent_;
153:     }

```


*GitHub* : [141](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L141-L141)
### [N-26]<a name="n-26"></a> Specific imports should be used where possible so only used code is imported
In many cases only some functionality is used from an import. In such cases it makes more sense to use {} to specify what to import and thus save gas whilst improving readability

*There are 10 instance(s) of this issue:*

```solidity
4: import "@openzeppelin/contracts/utils/Strings.sol";

```


*GitHub* : [4](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L4-L4)

```solidity
5: import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

```


*GitHub* : [5](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L5-L5)

```solidity
7: import "./CurvesERC20.sol";

```


*GitHub* : [7](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L7-L7)

```solidity
8: import "./CurvesERC20Factory.sol";

```


*GitHub* : [8](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L8-L8)

```solidity
10: import "./FeeSplitter.sol";

```


*GitHub* : [10](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L10-L10)

```solidity
11: import "./Security.sol";

```


*GitHub* : [11](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L11-L11)

```solidity
4: import "./Curves.sol";

```


*GitHub* : [4](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L4-L4)

```solidity
7: import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

```


*GitHub* : [7](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L7-L7)

```solidity
4: import "@openzeppelin/contracts/access/Ownable.sol";

```


*GitHub* : [4](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L4-L4)

```solidity
5: import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

```


*GitHub* : [5](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L5-L5)
### [N-27]<a name="n-27"></a> Use newer solidity versions
Newer solidity versions have new functionality and are generally more gas efficient too (0.8.19) as such it makes sense to use them provided it is safe to do so

*There are 2 instance(s) of this issue:*

```solidity
2: pragma solidity 0.8.7;

```


*GitHub* :

```solidity
2: pragma solidity ^0.8.7;

```


*GitHub* :
### [N-28]<a name="n-28"></a> Not all event definitions are utilizing indexed variables.
Try to index as much as three variables in event declarations as this is more gas efficient when done on value type variables (uint, address etc) however not for bytes and string variables

*There are 2 instance(s) of this issue:*

```solidity
80: event Trade( // <= FOUND
81:         address trader,
82:         address subject,
83:         bool isBuy,
84:         uint256 tokenAmount,
85:         uint256 ethAmount,
86:         uint256 protocolEthAmount,
87:         uint256 subjectEthAmount,
88:         uint256 supply
89:     );

```


*GitHub* : [80](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L80-L80)

```solidity
31: event FeesClaimed(address indexed token, address indexed user, uint256 amount); // <= FOUND

```


*GitHub* : [31](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L31-L31)
### [N-29]<a name="n-29"></a> Functions within contracts are not ordered according to the solidity style guide
The following order should be used within contracts

constructor

receive function (if exists)

fallback function (if exists)

external

public

internal

private

Rearrange the contract functions and contructors to fit this ordering

*There are 2 instance(s) of this issue:*

```solidity
41: contract Curves is CurvesErrors, Security  // <= FOUND

```


*GitHub* : [41](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L41-L41)

```solidity
9: contract FeeSplitter is Security  // <= FOUND

```


*GitHub* : [9](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L9-L9)
### [N-30]<a name="n-30"></a> Functions which set address state variables should have zero address checks

*There are 4 instance(s) of this issue:*

```solidity
113:     function setFeeRedistributor(address feeRedistributor_) external onlyOwner {
114:         feeRedistributor = FeeSplitter(payable(feeRedistributor_));
115:     }

```


*GitHub* : [113](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L113-L113)

```solidity
155:     function setReferralFeeDestination(
156:         address curvesTokenSubject,
157:         address referralFeeDestination_
158:     ) public onlyTokenSubject(curvesTokenSubject) {
159:         referralFeeDestination[curvesTokenSubject] = referralFeeDestination_;
160:     }

```


*GitHub* : [155](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L155-L155)

```solidity
162:     function setERC20Factory(address factory_) external onlyOwner {
163:         curvesERC20Factory = factory_;
164:     }

```


*GitHub* : [162](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L162-L162)

```solidity
23:     function setManager(address manager_, bool value) public onlyOwner {
24:         managers[manager_] = value;
25:     }

```


*GitHub* : [23](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L23-L23)
### [N-31]<a name="n-31"></a> Interface imports should be declared first
Amend the ordering of imports to import interfaces first followed by other imports

*There are 1 instance(s) of this issue:*

```solidity
2: 
3: pragma solidity ^0.8.7;
4: 
5: import "./Curves.sol"; // <= FOUND
6: import "./Security.sol"; // <= FOUND
7: 
8: import "@openzeppelin/contracts/token/ERC20/IERC20.sol"; // <= FOUND
9: 
10: contract FeeSplitter is Security {
11:     Curves public curves;
12:     uint256 constant PRECISION = 1e18;
13: 
15:     error NoFeesToClaim();
16:     error NoTokenHolders();
17: 
18:     struct TokenData {
19:         uint256 cumulativeFeePerToken;
20:         mapping(address => uint256) userFeeOffset;
21:         mapping(address => uint256) unclaimedFees;
22:     }
23: 
24:     struct UserClaimData {
25:         uint256 claimableFees;
26:         address token;
27:     }
28: 
29:     mapping(address => TokenData) internal tokensData;
30:     mapping(address => address[]) internal userTokens;
31: 
32:     event FeesClaimed(address indexed token, address indexed user, uint256 amount);
33: 
34:     constructor() Security() {}
35: 
36:     function setCurves(Curves curves_) public {
37:         curves = curves_;
38:     }
39: 
40:     function balanceOf(address token, address account) public view returns (uint256) {
41:         return curves.curvesTokenBalance(token, account) * PRECISION;
42:     }
43: 
44:     function totalSupply(address token) public view returns (uint256) {
45:         
46:         return (curves.curvesTokenSupply(token) - curves.curvesTokenBalance(token, address(curves))) * PRECISION;
47:     }
48: 
49:     function getUserTokens(address user) public view returns (address[] memory) {
50:         return userTokens[user];
51:     }
52: 
53:     function getUserTokensAndClaimable(address user) public view returns (UserClaimData[] memory) {
54:         address[] memory tokens = getUserTokens(user);
55:         UserClaimData[] memory result = new UserClaimData[](tokens.length);
56:         for (uint256 i = 0; i < tokens.length; i++) {
57:             address token = tokens[i];
58:             uint256 claimable = getClaimableFees(token, user);

```


*GitHub* : [5](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L5-L8)
### [N-32]<a name="n-32"></a> Use allowlist/denylist rather than whitelist/blacklist

*There are 4 instance(s) of this issue:*

```solidity
92:     event WhitelistUpdated(address indexed presale, bytes32 indexed root); // <= FOUND

```


*GitHub* : [92](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L92-L92)

```solidity
394: 
395:     function setWhitelist(bytes32 merkleRoot) external { // <= FOUND

```


*GitHub* : [395](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L395-L395)

```solidity
400:             emit WhitelistUpdated(msg.sender, merkleRoot); // <= FOUND

```


*GitHub* : [400](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L400-L400)

```solidity
404: 
405:     function buyCurvesTokenWhitelisted( // <= FOUND
406:         address curvesTokenSubject,
407:         uint256 amount,
408:         bytes32[] memory proof
409:     ) public payable {

```


*GitHub* : [405](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L405-L405)
### [N-33]<a name="n-33"></a> Multiple mappings can be replaced with a single struct mapping
Using a single struct mapping in place of multiple defined mappings in a Solidity contract can lead to improved code organization, better readability, and easier maintainability. By consolidating related data into a single struct, developers can create a more cohesive data structure that logically groups together relevant pieces of information, thus reducing redundancy and clutter. This approach simplifies the codebase, making it easier to understand, navigate, and modify. Additionally, it can result in more efficient gas usage when accessing or updating multiple related data points simultaneously.

*There are 2 instance(s) of this issue:*

```solidity
41: contract Curves is CurvesErrors, Security {
42:     address public curvesERC20Factory;
43:     FeeSplitter public feeRedistributor;
44:     string public constant DEFAULT_NAME = "Curves";
45:     string public constant DEFAULT_SYMBOL = "CURVES";
46:     
47:     uint256 private _curvesTokenCounter = 0;
48: 
53:     mapping(address => ExternalTokenMeta) public externalCurvesTokens; // <= FOUND
54:     mapping(address => address) public externalCurvesToSubject; // <= FOUND
55:     mapping(string => address) public symbolToSubject; // <= FOUND
56: 
57:     mapping(address => PresaleMeta) public presalesMeta; // <= FOUND
58:     mapping(address => mapping(address => uint256)) public presalesBuys; // <= FOUND
59: 
62:     FeesEconomics public feesEconomics;
63:     mapping(address => address) public referralFeeDestination; // <= FOUND
64: 
72:     mapping(address => mapping(address => uint256)) public curvesTokenBalance; // <= FOUND
73: 
75:     mapping(address => uint256) public curvesTokenSupply; // <= FOUND
76: 
77:     mapping(address => address[]) private ownedCurvesTokenSubjects; // <= FOUND
78: 
149: }

```


*GitHub* : [53](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L53-L77)

```solidity
9: contract FeeSplitter is Security {
10:     Curves public curves;
11:     uint256 constant PRECISION = 1e18;
12: 
21:     mapping(address => TokenData) internal tokensData; // <= FOUND
22:     mapping(address => address[]) internal userTokens; // <= FOUND
23: 
52: }

```


*GitHub* : [21](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L21-L22)
### [N-34]<a name="n-34"></a> Keccak hashes which never change can be made into a constant state variable
There is no point in using GAS to calculate a kaccak hash which never changes

*There are 2 instance(s) of this issue:*

```solidity
439:     function mint(address curvesTokenSubject) external onlyTokenSubject(curvesTokenSubject) { // <= FOUND
440:         if (
441:             keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].name)) ==
442:             keccak256(abi.encodePacked("")) ||
443:             keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].symbol)) ==
444:             keccak256(abi.encodePacked(""))
445:         ) {
446:             externalCurvesTokens[curvesTokenSubject].name = DEFAULT_NAME;
447:             externalCurvesTokens[curvesTokenSubject].symbol = DEFAULT_SYMBOL;
448:         }
449:         _mint(
450:             curvesTokenSubject,
451:             externalCurvesTokens[curvesTokenSubject].name,
452:             externalCurvesTokens[curvesTokenSubject].symbol
453:         );
454:     }

```


*GitHub* : [439](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L439-L439)

```solidity
465:     function withdraw(address curvesTokenSubject, uint256 amount) public { // <= FOUND
466:         if (amount > curvesTokenBalance[curvesTokenSubject][msg.sender]) revert InsufficientBalance();
467: 
468:         address externalToken = externalCurvesTokens[curvesTokenSubject].token;
469:         if (externalToken == address(0)) {
470:             if (
471:                 keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].name)) ==
472:                 keccak256(abi.encodePacked("")) ||
473:                 keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].symbol)) ==
474:                 keccak256(abi.encodePacked(""))
475:             ) {
476:                 externalCurvesTokens[curvesTokenSubject].name = DEFAULT_NAME;
477:                 externalCurvesTokens[curvesTokenSubject].symbol = DEFAULT_SYMBOL;
478:             }
479:             _deployERC20(
480:                 curvesTokenSubject,
481:                 externalCurvesTokens[curvesTokenSubject].name,
482:                 externalCurvesTokens[curvesTokenSubject].symbol
483:             );
484:             externalToken = externalCurvesTokens[curvesTokenSubject].token;
485:         }
486:         _transfer(curvesTokenSubject, msg.sender, address(this), amount);
487:         CurvesERC20(externalToken).mint(msg.sender, amount * 1 ether);
488:     }

```


*GitHub* : [465](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L465-L465)
### [N-35]<a name="n-35"></a> Constants should be on the left side of the 
Putting constants on the left side of a comparison operator like `==` or `<` is a best practice known as "Yoda conditions", which can help prevent accidental assignment instead of comparison. In some programming languages, if a variable is mistakenly put on the left with a single `=` instead of `==`, it assigns the constant's value to the variable without any compiler error. However, doing this with the constant on the left would generate an error, as constants cannot be assigned values. Although Solidity's static typing system prevents accidental assignments within conditionals, adopting this practice enhances code readability and consistency, especially when developers are working across multiple languages that support this convention.

*There are 3 instance(s) of this issue:*

```solidity
277:         if (curvesTokenBalance[curvesTokenSubject][msg.sender] - amount == 0)  // <= FOUND

```


*GitHub* : [277](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L277-L277)

```solidity
66:         if (balance > 0)  // <= FOUND

```


*GitHub* : [66](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L66-L66)

```solidity
246:             if (feesEconomics.holdersFeePercent > 0 && address(feeRedistributor) != address(0))  // <= FOUND

```


*GitHub* : [246](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L246-L246)
### [N-36]<a name="n-36"></a> Interface names should have an I as the first character
Modify such instances to include a capital I as the first character in the name to signify it is an interface. This improved readability during in

*There are 1 instance(s) of this issue:*

```solidity
13: interface CurvesErrors 

```


*GitHub* : [13](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L13-L13)
### [N-37]<a name="n-37"></a> Consider using named mappings
In Solidity version 0.8.18 and beyond mapping parameters can be named. This makes the purpose and function of a given mapping far clearer which in turn improves readability.

*There are 7 instance(s) of this issue:*

```solidity
6:     mapping(address => bool) public managers; // <= FOUND

```


*GitHub* : [6](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L6-L6)

```solidity
62:     mapping(address => address) public externalCurvesToSubject; // <= FOUND

```


*GitHub* : [62](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L62-L62)

```solidity
63:     mapping(string => address) public symbolToSubject; // <= FOUND

```


*GitHub* : [63](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L63-L63)

```solidity
78:     mapping(address => address) public referralFeeDestination; // <= FOUND

```


*GitHub* : [78](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L78-L78)

```solidity
66:     mapping(address => mapping(address => uint256)) public presalesBuys; // <= FOUND

```


*GitHub* : [66](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L66-L66)

```solidity
96:     mapping(address => mapping(address => uint256)) public curvesTokenBalance; // <= FOUND

```


*GitHub* : [96](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L96-L96)

```solidity
99:     mapping(address => uint256) public curvesTokenSupply; // <= FOUND

```


*GitHub* : [99](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L99-L99)
### [N-38]<a name="n-38"></a> Loss of precision
Dividing by large numbers in Solidity can cause a loss of precision due to the language's inherent integer division behavior. Solidity does not support floating-point arithmetic, and as a result, division between integers yields an integer result, truncating any fractional part. When dividing by a large number, the resulting value may become significantly smaller, leading to a loss of precision, as the fractional part is discarded.

*There are 1 instance(s) of this issue:*

```solidity
73:     function getClaimableFees(address token, address account) public view returns (uint256) { // <= FOUND
74:         TokenData storage data = tokensData[token];
75:         uint256 balance = balanceOf(token, account);
76:         uint256 owed = (data.cumulativeFeePerToken - data.userFeeOffset[account]) * balance;
77:         return (owed / PRECISION) + data.unclaimedFees[account]; // <= FOUND
78:     }

```


*GitHub* : [73](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L73-L77)
### [N-39]<a name="n-39"></a> Use a single contract or library for system wide constants

*There are 2 instance(s) of this issue:*

```solidity
41: contract Curves is CurvesErrors, Security {
42:     address public curvesERC20Factory;
43:     FeeSplitter public feeRedistributor;
44:     string public constant DEFAULT_NAME = "Curves"; // <= FOUND
45:     string public constant DEFAULT_SYMBOL = "CURVES"; // <= FOUND
46:     
47:     uint256 private _curvesTokenCounter = 0;
48: 
53:     mapping(address => ExternalTokenMeta) public externalCurvesTokens;
54:     mapping(address => address) public externalCurvesToSubject;
55:     mapping(string => address) public symbolToSubject;
56: 
57:     mapping(address => PresaleMeta) public presalesMeta;
58:     mapping(address => mapping(address => uint256)) public presalesBuys;
59: 
62:     FeesEconomics public feesEconomics;
63:     mapping(address => address) public referralFeeDestination;
64: 
72:     mapping(address => mapping(address => uint256)) public curvesTokenBalance;
73: 
75:     mapping(address => uint256) public curvesTokenSupply;
76: 
77:     mapping(address => address[]) private ownedCurvesTokenSubjects;
78: 
149: }

```


*GitHub* : [44](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L44-L45)

```solidity
9: contract FeeSplitter is Security {
10:     Curves public curves;
11:     uint256 constant PRECISION = 1e18; // <= FOUND
12: 
21:     mapping(address => TokenData) internal tokensData;
22:     mapping(address => address[]) internal userTokens;
23: 
52: }

```


*GitHub* : [11](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L11-L11)
### [N-40]<a name="n-40"></a> Consider using modifiers for address control
Modifiers in Solidity can improve code readability and modularity by encapsulating repetitive checks, such as address validity checks, into a reusable construct. For example, an `onlyOwner` modifier can be used to replace repetitive `require(msg.sender == owner)` checks across several functions, reducing code redundancy and enhancing maintainability. To implement, define a modifier with the check, then apply the modifier to relevant functions.

*There are 2 instance(s) of this issue:*

```solidity
9:         msg.sender == owner; // <= FOUND

```


*GitHub* : [9](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L9-L9)

```solidity
265:         if (!(supply > 0 || curvesTokenSubject == msg.sender)) revert UnauthorizedCurvesTokenSubject(); // <= FOUND

```


*GitHub* : [265](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L265-L265)
### [N-41]<a name="n-41"></a> Off-by-one timestamp error
In Solidity, using `>=` or `<=` to compare against `block.timestamp` (alias `now`) may introduce off-by-one errors due to the fact that `block.timestamp` is only updated once per block and its value remains constant throughout the block's execution. If an operation happens at the exact second when `block.timestamp` changes, it could result in unexpected behavior. To avoid this, it's safer to use strict inequality operators (`>` or `<`). For instance, if a condition should only be met after a certain time, use `block.timestamp > time` rather than `block.timestamp >= time`. This way, potential off-by-one errors due to the exact timing of block mining are mitigated, leading to safer, more predictable contract behavior.

*There are 3 instance(s) of this issue:*

```solidity
211:     function buyCurvesToken(address curvesTokenSubject, uint256 amount) public payable { // <= FOUND
212:         uint256 startTime = presalesMeta[curvesTokenSubject].startTime;
213:         if (startTime != 0 && startTime >= block.timestamp) revert SaleNotOpen(); // <= FOUND
214: 
215:         _buyCurvesToken(curvesTokenSubject, amount);
216:     }

```


*GitHub* : [211](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L211-L213)

```solidity
377:     function buyCurvesTokenForPresale(
378:         address curvesTokenSubject,
379:         uint256 amount,
380:         uint256 startTime,
381:         bytes32 merkleRoot,
382:         uint256 maxBuy
383:     ) public payable onlyTokenSubject(curvesTokenSubject) {
384:         if (startTime <= block.timestamp) revert InvalidPresaleStartTime();
385:         uint256 supply = curvesTokenSupply[curvesTokenSubject];
386:         if (supply != 0) revert CurveAlreadyExists();
387:         presalesMeta[curvesTokenSubject].startTime = startTime;
388:         presalesMeta[curvesTokenSubject].merkleRoot = merkleRoot;
389:         presalesMeta[curvesTokenSubject].maxBuy = (maxBuy == 0 ? type(uint256).max : maxBuy);
390: 
391:         _buyCurvesToken(curvesTokenSubject, amount);
392:     }

```


*GitHub* : [377](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L377-L377)

```solidity
404:     function buyCurvesTokenWhitelisted(
405:         address curvesTokenSubject,
406:         uint256 amount,
407:         bytes32[] memory proof
408:     ) public payable {
409:         if (
410:             presalesMeta[curvesTokenSubject].startTime == 0 ||
411:             presalesMeta[curvesTokenSubject].startTime <= block.timestamp
412:         ) revert PresaleUnavailable();
413: 
414:         presalesBuys[curvesTokenSubject][msg.sender] += amount;
415:         uint256 tokenBought = presalesBuys[curvesTokenSubject][msg.sender];
416:         if (tokenBought > presalesMeta[curvesTokenSubject].maxBuy) revert ExceededMaxBuyAmount();
417: 
418:         verifyMerkle(curvesTokenSubject, msg.sender, proof);
419:         _buyCurvesToken(curvesTokenSubject, amount);
420:     }

```


*GitHub* : [404](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L404-L404)
### [N-42]<a name="n-42"></a> Default address(0) can be returned
Allowing a function in Solidity to return the default address (address(0)) can be problematic as it can represent uninitialized or invalid addresses. If such an address is utilized in transfer operations or other sensitive actions, it could lead to loss of funds or unpredicted behavior. It's prudent to include checks in your functions to prevent the return of the zero address, enhancing contract security.

*There are 1 instance(s) of this issue:*

```solidity
7:     function deploy(string memory name, string memory symbol, address owner) public returns (address) {
8:         CurvesERC20 tokenContract = new CurvesERC20(name, symbol, owner);
9:         return address(tokenContract);
10:     }

```


*GitHub* : [7](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20Factory.sol#L7-L7)
### [N-43]<a name="n-43"></a> Variables should be used in place of magic numbers to improve readability
Magic numbers should be avoided in Solidity code to enhance readability, maintainability, and reduce the likelihood of errors. Magic numbers are hard-coded values with no clear meaning or context, which can create confusion and make the code harder to understand for developers. Using well-defined constants or variables with descriptive names instead of magic numbers not only clarifies the purpose and significance of the value but also simplifies code updates and modifications.

*There are 2 instance(s) of this issue:*

```solidity
181:         uint256 sum1 = supply == 0 ? 0 : ((supply - 1) * (supply) * (2 * (supply - 1) + 1)) / 6; // <= FOUND

```


*GitHub* : [181](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L181-L181)

```solidity
182:         uint256 sum2 = supply == 0 && amount == 1 // <= FOUND
183:             ? 0
184:             : ((supply - 1 + amount) * (supply + amount) * (2 * (supply - 1 + amount) + 1)) / 6; // <= FOUND

```


*GitHub* : [182](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L182-L184)
### [N-44]<a name="n-44"></a> Custom error has no error variables
In Solidity, the use of custom error messages provides a valuable method of conveying meaningful information about failures during execution. In the current implementation, the custom errors lack specifics, making it challenging to understand the root cause of a failure. It's advisable to incorporate parameters into your error messages to indicate which user action or specific value caused the exception. This not only enhances error transparency but also aids debugging and fosters a more robust and maintainable codebase. Providing such precise error context greatly helps developers identify and resolve issues faster.

*There are 2 instance(s) of this issue:*

```solidity
14: error NoFeesToClaim(); // <= FOUND

```


*GitHub* : [14](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L14-L14)

```solidity
15: error NoTokenHolders(); // <= FOUND

```


*GitHub* : [15](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L15-L15)
### [N-45]<a name="n-45"></a> Unused structs present
If these serve no purpose, they should be safely removed

*There are 2 instance(s) of this issue:*

```solidity
49:     struct ExternalTokenMeta { // <= FOUND
50:         string name;
51:         string symbol;
52:         address token;
53:     }

```


*GitHub* : [49](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L49-L49)

```solidity
55:     struct PresaleMeta { // <= FOUND
56:         uint256 startTime;
57:         bytes32 merkleRoot;
58:         uint256 maxBuy;
59:     }

```


*GitHub* : [55](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L55-L55)
### [N-46]<a name="n-46"></a> Empty bytes check is missing
When developing smart contracts in Solidity, it's crucial to validate the inputs of your functions. This includes ensuring that the bytes parameters are not empty, especially when they represent crucial data such as addresses, identifiers, or raw data that the contract needs to process.

Missing empty bytes checks can lead to unexpected behaviour in your contract. For instance, certain operations might fail, produce incorrect results, or consume unnecessary gas when performed with empty bytes. Moreover, missing input validation can potentially expose your contract to malicious activity, including exploitation of unhandled edge cases.

To mitigate these issues, always validate that bytes parameters are not empty when the logic of your contract requires it.

*There are 4 instance(s) of this issue:*

```solidity
377:     function buyCurvesTokenForPresale(
378:         address curvesTokenSubject,
379:         uint256 amount,
380:         uint256 startTime,
381:         bytes32 merkleRoot,
382:         uint256 maxBuy
383:     ) public payable onlyTokenSubject(curvesTokenSubject) {
384:         if (startTime <= block.timestamp) revert InvalidPresaleStartTime();
385:         uint256 supply = curvesTokenSupply[curvesTokenSubject];
386:         if (supply != 0) revert CurveAlreadyExists();
387:         presalesMeta[curvesTokenSubject].startTime = startTime;
388:         presalesMeta[curvesTokenSubject].merkleRoot = merkleRoot;
389:         presalesMeta[curvesTokenSubject].maxBuy = (maxBuy == 0 ? type(uint256).max : maxBuy);
390: 
391:         _buyCurvesToken(curvesTokenSubject, amount);
392:     }

```


*GitHub* : [377](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L377-L377)

```solidity
394:     function setWhitelist(bytes32 merkleRoot) external {
395:         uint256 supply = curvesTokenSupply[msg.sender];
396:         if (supply > 1) revert CurveAlreadyExists();
397: 
398:         if (presalesMeta[msg.sender].merkleRoot != merkleRoot) {
399:             presalesMeta[msg.sender].merkleRoot = merkleRoot;
400:             emit WhitelistUpdated(msg.sender, merkleRoot);
401:         }
402:     }

```


*GitHub* : [394](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L394-L394)

```solidity
404:     function buyCurvesTokenWhitelisted(
405:         address curvesTokenSubject,
406:         uint256 amount,
407:         bytes32[] memory proof
408:     ) public payable {
409:         if (
410:             presalesMeta[curvesTokenSubject].startTime == 0 ||
411:             presalesMeta[curvesTokenSubject].startTime <= block.timestamp
412:         ) revert PresaleUnavailable();
413: 
414:         presalesBuys[curvesTokenSubject][msg.sender] += amount;
415:         uint256 tokenBought = presalesBuys[curvesTokenSubject][msg.sender];
416:         if (tokenBought > presalesMeta[curvesTokenSubject].maxBuy) revert ExceededMaxBuyAmount();
417: 
418:         verifyMerkle(curvesTokenSubject, msg.sender, proof);
419:         _buyCurvesToken(curvesTokenSubject, amount);
420:     }

```


*GitHub* : [404](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L404-L404)

```solidity
422:     function verifyMerkle(address curvesTokenSubject, address caller, bytes32[] memory proof) public view {
423:         
424:         bytes32 leaf = keccak256(abi.encodePacked(caller));
425:         if (!MerkleProof.verify(proof, presalesMeta[curvesTokenSubject].merkleRoot, leaf)) revert UnverifiedProof();
426:     }

```


*GitHub* : [422](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L422-L422)
### [N-47]<a name="n-47"></a> Use scopes sparingly
In Solidity programming, the use of scoped blocks, denoted by `{}` without a preceding control structure like `if`, `for`, etc., allows for the creation of isolated scopes within a function. While this can be useful for managing memory and preventing naming conflicts, it should be used sparingly. Excessive use of these scope blocks can obscure the code's logic flow and make it more difficult to understand, impeding code maintainability. As a best practice, only employ scoped blocks when necessary for memory management or to avoid clear naming conflicts. Otherwise, aim for clarity and simplicity in your code structure for optimal readability and maintainability.

*There are 6 instance(s) of this issue:*

```solidity
226:         { // <= FOUND
227:             bool referralDefined = referralFeeDestination[curvesTokenSubject] != address(0);
228:             { // <= FOUND
229:                 address firstDestination = isBuy ? feesEconomics.protocolFeeDestination : msg.sender;
230:                 uint256 buyValue = referralDefined ? protocolFee : protocolFee + referralFee;
231:                 uint256 sellValue = price - protocolFee - subjectFee - referralFee - holderFee;
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}(""); // <= FOUND
233:                 if (!success1) revert CannotSendFunds();
234:             }
235:             { // <= FOUND
236:                 (bool success2, ) = curvesTokenSubject.call{value: subjectFee}(""); // <= FOUND
237:                 if (!success2) revert CannotSendFunds();
238:             }
239:             { // <= FOUND
240:                 (bool success3, ) = referralDefined
241:                     ? referralFeeDestination[curvesTokenSubject].call{value: referralFee}("") // <= FOUND
242:                     : (true, bytes(""));
243:                 if (!success3) revert CannotSendFunds();
244:             }
245: 
246:             if (feesEconomics.holdersFeePercent > 0 && address(feeRedistributor) != address(0)) { // <= FOUND
247:                 feeRedistributor.onBalanceChange(curvesTokenSubject, msg.sender);
248:                 feeRedistributor.addFees{value: holderFee}(curvesTokenSubject); // <= FOUND
249:             }
250:         }

```


*GitHub* : [226](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L226-L248)

```solidity
228:            { // <= FOUND
229:                 address firstDestination = isBuy ? feesEconomics.protocolFeeDestination : msg.sender;
230:                 uint256 buyValue = referralDefined ? protocolFee : protocolFee + referralFee;
231:                 uint256 sellValue = price - protocolFee - subjectFee - referralFee - holderFee;
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}(""); // <= FOUND
233:                 if (!success1) revert CannotSendFunds();
234:             }

```


*GitHub* : [228](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L228-L232)

```solidity
235:             { // <= FOUND
236:                 (bool success2, ) = curvesTokenSubject.call{value: subjectFee}(""); // <= FOUND
237:                 if (!success2) revert CannotSendFunds();
238:             }

```


*GitHub* : [235](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L235-L236)

```solidity
239:             { // <= FOUND
240:                 (bool success3, ) = referralDefined
241:                     ? referralFeeDestination[curvesTokenSubject].call{value: referralFee}("") // <= FOUND
242:                     : (true, bytes(""));
243:                 if (!success3) revert CannotSendFunds();
244:             }

```


*GitHub* : [239](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L239-L241)

```solidity
228:             { // <= FOUND
229:                 (bool success2, ) = curvesTokenSubject.call{value: subjectFee} // <= FOUND

```


*GitHub* : [228](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L228-L229)

```solidity
239:             { // <= FOUND
240:                 (bool success3, ) = referralDefined
241:                     ? referralFeeDestination[curvesTokenSubject].call{value: referralFee} // <= FOUND

```


*GitHub* : [239](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L239-L241)
### [N-48]<a name="n-48"></a> Do not use underscore at the end of variable name
Adopting a consistent and clear naming convention enhances code readability and maintainability. In Solidity, appending an underscore at the end of a variable name is unconventional and can lead to confusion. It is generally advisable to stick to accepted naming practices to promote ease of understanding and use.

*There are 3 instance(s) of this issue:*

```solidity
129:         if (
130:             protocolFeePercent_ +
131:                 feesEconomics.subjectFeePercent +
132:                 feesEconomics.referralFeePercent +
133:                 feesEconomics.holdersFeePercent >
134:             feesEconomics.maxFeePercent ||
135:             protocolFeeDestination_ == address(0) // <= FOUND
136:         ) revert InvalidFeeDefinition();

```


*GitHub* : [135](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L135-L135)

```solidity
90:         uint256 totalSupply_ = totalSupply(token); // <= FOUND

```


*GitHub* : [90](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L90-L90)

```solidity
91:         if (totalSupply_ == 0) revert NoTokenHolders(); // <= FOUND

```


*GitHub* : [91](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L91-L91)
### [N-49]<a name="n-49"></a> Consider using SMTChecker
The SMTChecker is a valuable tool for Solidity developers as it helps detect potential vulnerabilities and logical errors in the contract's code. By utilizing Satisfiability Modulo Theories (SMT) solvers, it can reason about the potential states a contract can be in, and therefore, identify conditions that could lead to undesirable behavior. This automatic formal verification can catch issues that might otherwise be missed in manual code reviews or standard testing, enhancing the overall contract's security and reliability.

*There are 5 instance(s) of this issue:*

```solidity
1: // SPDX-License-Identifier: MIT
2: pragma solidity ^0.8.7;
3: 
4: contract Security {
5:     address public owner;
6:     mapping(address => bool) public managers;
7: 
8:     modifier onlyOwner() {
9:         msg.sender == owner;
10:         _;
11:     }
12: 
13:     modifier onlyManager() {
14:         managers[msg.sender] == true;
15:         _;
16:     }
17: 
18:     constructor() {
19:         owner = msg.sender;
20:         managers[msg.sender] = true;
21:     }
22: 
23:     function setManager(address manager_, bool value) public onlyOwner {
24:         managers[manager_] = value;
25:     }
26: 
27:     function transferOwnership(address owner_) public onlyOwner {
28:         owner = owner_;
29:     }
30: }
31: 

```


*GitHub* : [1](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L1-L1)

```solidity
1: // SPDX-License-Identifier: MIT
2: pragma solidity 0.8.7;
3: 
4: import "@openzeppelin/contracts/utils/Strings.sol";
5: import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
6: 
7: import "./CurvesERC20.sol";
8: import "./CurvesERC20Factory.sol";
9: 
10: import "./FeeSplitter.sol";
11: import "./Security.sol";
12: 
13: interface CurvesErrors {
14:     // Access-related
15:     error UnauthorizedCurvesTokenSubject();
16:     // Balance-related
17:     error InsufficientPayment();
18:     error CannotSendFunds();
19:     error InsufficientBalance();
20:     // ERC20-related
21:     error InvalidERC20Metadata();
22:     error ERC20TokenAlreadyMinted();
23:     // State-related
24:     error TokenAbsentForCurvesTokenSubject();
25:     error CurveAlreadyExists();
26:     // Transaction-related
27:     error LastTokenCannotBeSold();
28:     error ContractCannotReceiveTransfer();
29:     error ExceededMaxBuyAmount();
30:     error NonIntegerDepositAmount();
31:     // Proof-related
32:     error UnverifiedProof();
33:     // Presale-related
34:     error PresaleUnavailable();
35:     error InvalidPresaleStartTime();
36:     error SaleNotOpen();
37:     // Fee related
38:     error InvalidFeeDefinition();
39: }
40: 
41: contract Curves is CurvesErrors, Security {
42:     address public curvesERC20Factory;
43:     FeeSplitter public feeRedistributor;
44:     string public constant DEFAULT_NAME = "Curves";
45:     string public constant DEFAULT_SYMBOL = "CURVES";
46:     // Counter for CURVES tokens minted
47:     uint256 private _curvesTokenCounter = 0;
48: 
49:     struct ExternalTokenMeta {
50:         string name;
51:         string symbol;
52:         address token;
53:     }
54: 
55:     struct PresaleMeta {
56:         uint256 startTime;
57:         bytes32 merkleRoot;
58:         uint256 maxBuy;
59:     }
60: 
61:     mapping(address => ExternalTokenMeta) public externalCurvesTokens;
62:     mapping(address => address) public externalCurvesToSubject;
63:     mapping(string => address) public symbolToSubject;
64: 
65:     mapping(address => PresaleMeta) public presalesMeta;
66:     mapping(address => mapping(address => uint256)) public presalesBuys;
67: 
68:     struct FeesEconomics {
69:         address protocolFeeDestination;
70:         uint256 protocolFeePercent;
71:         uint256 subjectFeePercent;
72:         uint256 referralFeePercent;
73:         uint256 holdersFeePercent;
74:         uint256 maxFeePercent;
75:     }
76: 
77:     FeesEconomics public feesEconomics;
78:     mapping(address => address) public referralFeeDestination;
79: 
80:     event Trade(
81:         address trader,
82:         address subject,
83:         bool isBuy,
84:         uint256 tokenAmount,
85:         uint256 ethAmount,
86:         uint256 protocolEthAmount,
87:         uint256 subjectEthAmount,
88:         uint256 supply
89:     );
90: 
91:     event Transfer(address indexed curvesTokenSubject, address indexed from, address indexed to, uint256 value);
92:     event WhitelistUpdated(address indexed presale, bytes32 indexed root);
93:     event TokenDeployed(address indexed curvesTokenSubject, address indexed erc20token, string name, string symbol);
94: 
95:     // TokenSubject => (Holder => Balance)
96:     mapping(address => mapping(address => uint256)) public curvesTokenBalance;
97: 
98:     // TokenSubject => Supply
99:     mapping(address => uint256) public curvesTokenSupply;
100: 
101:     mapping(address => address[]) private ownedCurvesTokenSubjects;
102: 
103:     modifier onlyTokenSubject(address curvesTokenSubject) {
104:         if (curvesTokenSubject != msg.sender) revert UnauthorizedCurvesTokenSubject();
105:         _;
106:     }
107: 
108:     constructor(address curvesERC20Factory_, address feeRedistributor_) Security() {
109:         curvesERC20Factory = curvesERC20Factory_;
110:         feeRedistributor = FeeSplitter(payable(feeRedistributor_));
111:     }
112: 
113:     function setFeeRedistributor(address feeRedistributor_) external onlyOwner {
114:         feeRedistributor = FeeSplitter(payable(feeRedistributor_));
115:     }
116: 
117:     function setMaxFeePercent(uint256 maxFeePercent_) external onlyManager {
118:         if (
119:             feesEconomics.protocolFeePercent +
120:                 feesEconomics.subjectFeePercent +
121:                 feesEconomics.referralFeePercent +
122:                 feesEconomics.holdersFeePercent >
123:             maxFeePercent_
124:         ) revert InvalidFeeDefinition();
125:         feesEconomics.maxFeePercent = maxFeePercent_;
126:     }
127: 
128:     function setProtocolFeePercent(uint256 protocolFeePercent_, address protocolFeeDestination_) external onlyOwner {
129:         if (
130:             protocolFeePercent_ +
131:                 feesEconomics.subjectFeePercent +
132:                 feesEconomics.referralFeePercent +
133:                 feesEconomics.holdersFeePercent >
134:             feesEconomics.maxFeePercent ||
135:             protocolFeeDestination_ == address(0)
136:         ) revert InvalidFeeDefinition();
137:         feesEconomics.protocolFeePercent = protocolFeePercent_;
138:         feesEconomics.protocolFeeDestination = protocolFeeDestination_;
139:     }
140: 
141:     function setExternalFeePercent(
142:         uint256 subjectFeePercent_,
143:         uint256 referralFeePercent_,
144:         uint256 holdersFeePercent_
145:     ) external onlyManager {
146:         if (
147:             feesEconomics.protocolFeePercent + subjectFeePercent_ + referralFeePercent_ + holdersFeePercent_ >
148:             feesEconomics.maxFeePercent
149:         ) revert InvalidFeeDefinition();
150:         feesEconomics.subjectFeePercent = subjectFeePercent_;
151:         feesEconomics.referralFeePercent = referralFeePercent_;
152:         feesEconomics.holdersFeePercent = holdersFeePercent_;
153:     }
154: 
155:     function setReferralFeeDestination(
156:         address curvesTokenSubject,
157:         address referralFeeDestination_
158:     ) public onlyTokenSubject(curvesTokenSubject) {
159:         referralFeeDestination[curvesTokenSubject] = referralFeeDestination_;
160:     }
161: 
162:     function setERC20Factory(address factory_) external onlyOwner {
163:         curvesERC20Factory = factory_;
164:     }
165: 
166:     function getFees(
167:         uint256 price
168:     )
169:         public
170:         view
171:         returns (uint256 protocolFee, uint256 subjectFee, uint256 referralFee, uint256 holdersFee, uint256 totalFee)
172:     {
173:         protocolFee = (price * feesEconomics.protocolFeePercent) / 1 ether;
174:         subjectFee = (price * feesEconomics.subjectFeePercent) / 1 ether;
175:         referralFee = (price * feesEconomics.referralFeePercent) / 1 ether;
176:         holdersFee = (price * feesEconomics.holdersFeePercent) / 1 ether;
177:         totalFee = protocolFee + subjectFee + referralFee + holdersFee;
178:     }
179: 
180:     function getPrice(uint256 supply, uint256 amount) public pure returns (uint256) {
181:         uint256 sum1 = supply == 0 ? 0 : ((supply - 1) * (supply) * (2 * (supply - 1) + 1)) / 6;
182:         uint256 sum2 = supply == 0 && amount == 1
183:             ? 0
184:             : ((supply - 1 + amount) * (supply + amount) * (2 * (supply - 1 + amount) + 1)) / 6;
185:         uint256 summation = sum2 - sum1;
186:         return (summation * 1 ether) / 16000;
187:     }
188: 
189:     function getBuyPrice(address curvesTokenSubject, uint256 amount) public view returns (uint256) {
190:         return getPrice(curvesTokenSupply[curvesTokenSubject], amount);
191:     }
192: 
193:     function getSellPrice(address curvesTokenSubject, uint256 amount) public view returns (uint256) {
194:         return getPrice(curvesTokenSupply[curvesTokenSubject] - amount, amount);
195:     }
196: 
197:     function getBuyPriceAfterFee(address curvesTokenSubject, uint256 amount) public view returns (uint256) {
198:         uint256 price = getBuyPrice(curvesTokenSubject, amount);
199:         (, , , , uint256 totalFee) = getFees(price);
200: 
201:         return price + totalFee;
202:     }
203: 
204:     function getSellPriceAfterFee(address curvesTokenSubject, uint256 amount) public view returns (uint256) {
205:         uint256 price = getSellPrice(curvesTokenSubject, amount);
206:         (, , , , uint256 totalFee) = getFees(price);
207: 
208:         return price - totalFee;
209:     }
210: 
211:     function buyCurvesToken(address curvesTokenSubject, uint256 amount) public payable {
212:         uint256 startTime = presalesMeta[curvesTokenSubject].startTime;
213:         if (startTime != 0 && startTime >= block.timestamp) revert SaleNotOpen();
214: 
215:         _buyCurvesToken(curvesTokenSubject, amount);
216:     }
217: 
218:     function _transferFees(
219:         address curvesTokenSubject,
220:         bool isBuy,
221:         uint256 price,
222:         uint256 amount,
223:         uint256 supply
224:     ) internal {
225:         (uint256 protocolFee, uint256 subjectFee, uint256 referralFee, uint256 holderFee, ) = getFees(price);
226:         {
227:             bool referralDefined = referralFeeDestination[curvesTokenSubject] != address(0);
228:             {
229:                 address firstDestination = isBuy ? feesEconomics.protocolFeeDestination : msg.sender;
230:                 uint256 buyValue = referralDefined ? protocolFee : protocolFee + referralFee;
231:                 uint256 sellValue = price - protocolFee - subjectFee - referralFee - holderFee;
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}("");
233:                 if (!success1) revert CannotSendFunds();
234:             }
235:             {
236:                 (bool success2, ) = curvesTokenSubject.call{value: subjectFee}("");
237:                 if (!success2) revert CannotSendFunds();
238:             }
239:             {
240:                 (bool success3, ) = referralDefined
241:                     ? referralFeeDestination[curvesTokenSubject].call{value: referralFee}("")
242:                     : (true, bytes(""));
243:                 if (!success3) revert CannotSendFunds();
244:             }
245: 
246:             if (feesEconomics.holdersFeePercent > 0 && address(feeRedistributor) != address(0)) {
247:                 feeRedistributor.onBalanceChange(curvesTokenSubject, msg.sender);
248:                 feeRedistributor.addFees{value: holderFee}(curvesTokenSubject);
249:             }
250:         }
251:         emit Trade(
252:             msg.sender,
253:             curvesTokenSubject,
254:             isBuy,
255:             amount,
256:             price,
257:             protocolFee,
258:             subjectFee,
259:             isBuy ? supply + amount : supply - amount
260:         );
261:     }
262: 
263:     function _buyCurvesToken(address curvesTokenSubject, uint256 amount) internal {
264:         uint256 supply = curvesTokenSupply[curvesTokenSubject];
265:         if (!(supply > 0 || curvesTokenSubject == msg.sender)) revert UnauthorizedCurvesTokenSubject();
266: 
267:         uint256 price = getPrice(supply, amount);
268:         (, , , , uint256 totalFee) = getFees(price);
269: 
270:         if (msg.value < price + totalFee) revert InsufficientPayment();
271: 
272:         curvesTokenBalance[curvesTokenSubject][msg.sender] += amount;
273:         curvesTokenSupply[curvesTokenSubject] = supply + amount;
274:         _transferFees(curvesTokenSubject, true, price, amount, supply);
275: 
276:         // If is the first token bought, add to the list of owned tokens
277:         if (curvesTokenBalance[curvesTokenSubject][msg.sender] - amount == 0) {
278:             _addOwnedCurvesTokenSubject(msg.sender, curvesTokenSubject);
279:         }
280:     }
281: 
282:     function sellCurvesToken(address curvesTokenSubject, uint256 amount) public {
283:         uint256 supply = curvesTokenSupply[curvesTokenSubject];
284:         if (supply <= amount) revert LastTokenCannotBeSold();
285:         if (curvesTokenBalance[curvesTokenSubject][msg.sender] < amount) revert InsufficientBalance();
286: 
287:         uint256 price = getPrice(supply - amount, amount);
288: 
289:         curvesTokenBalance[curvesTokenSubject][msg.sender] -= amount;
290:         curvesTokenSupply[curvesTokenSubject] = supply - amount;
291: 
292:         _transferFees(curvesTokenSubject, false, price, amount, supply);
293:     }
294: 
295:     // Transfers tokens from current owner to receiver. Can be used for gifting or distributing tokens.
296:     function transferCurvesToken(address curvesTokenSubject, address to, uint256 amount) external {
297:         if (to == address(this)) revert ContractCannotReceiveTransfer();
298:         _transfer(curvesTokenSubject, msg.sender, to, amount);
299:     }
300: 
301:     // Transfer the total balance of all my tokens to another address. Can be used for migrating tokens.
302:     function transferAllCurvesTokens(address to) external {
303:         if (to == address(this)) revert ContractCannotReceiveTransfer();
304:         address[] storage subjects = ownedCurvesTokenSubjects[msg.sender];
305:         for (uint256 i = 0; i < subjects.length; i++) {
306:             uint256 amount = curvesTokenBalance[subjects[i]][msg.sender];
307:             if (amount > 0) {
308:                 _transfer(subjects[i], msg.sender, to, amount);
309:             }
310:         }
311:     }
312: 
313:     function _transfer(address curvesTokenSubject, address from, address to, uint256 amount) internal {
314:         if (amount > curvesTokenBalance[curvesTokenSubject][from]) revert InsufficientBalance();
315: 
316:         // If transferring from oneself, skip adding to the list
317:         if (from != to) {
318:             _addOwnedCurvesTokenSubject(to, curvesTokenSubject);
319:         }
320: 
321:         curvesTokenBalance[curvesTokenSubject][from] = curvesTokenBalance[curvesTokenSubject][from] - amount;
322:         curvesTokenBalance[curvesTokenSubject][to] = curvesTokenBalance[curvesTokenSubject][to] + amount;
323: 
324:         emit Transfer(curvesTokenSubject, from, to, amount);
325:     }
326: 
327:     // Internal function to add a curvesTokenSubject to the list if not already present
328:     function _addOwnedCurvesTokenSubject(address owner_, address curvesTokenSubject) internal {
329:         address[] storage subjects = ownedCurvesTokenSubjects[owner_];
330:         for (uint256 i = 0; i < subjects.length; i++) {
331:             if (subjects[i] == curvesTokenSubject) {
332:                 return;
333:             }
334:         }
335:         subjects.push(curvesTokenSubject);
336:     }
337: 
338:     function _deployERC20(
339:         address curvesTokenSubject,
340:         string memory name,
341:         string memory symbol
342:     ) internal returns (address) {
343:         // If the token's symbol is CURVES, append a counter value
344:         if (keccak256(bytes(symbol)) == keccak256(bytes(DEFAULT_SYMBOL))) {
345:             _curvesTokenCounter += 1;
346:             name = string(abi.encodePacked(name, " ", Strings.toString(_curvesTokenCounter)));
347:             symbol = string(abi.encodePacked(symbol, Strings.toString(_curvesTokenCounter)));
348:         }
349: 
350:         if (symbolToSubject[symbol] != address(0)) revert InvalidERC20Metadata();
351: 
352:         address tokenContract = CurvesERC20Factory(curvesERC20Factory).deploy(name, symbol, address(this));
353: 
354:         externalCurvesTokens[curvesTokenSubject].token = tokenContract;
355:         externalCurvesTokens[curvesTokenSubject].name = name;
356:         externalCurvesTokens[curvesTokenSubject].symbol = symbol;
357:         externalCurvesToSubject[tokenContract] = curvesTokenSubject;
358:         symbolToSubject[symbol] = curvesTokenSubject;
359: 
360:         emit TokenDeployed(curvesTokenSubject, tokenContract, name, symbol);
361:         return address(tokenContract);
362:     }
363: 
364:     function buyCurvesTokenWithName(
365:         address curvesTokenSubject,
366:         uint256 amount,
367:         string memory name,
368:         string memory symbol
369:     ) public payable {
370:         uint256 supply = curvesTokenSupply[curvesTokenSubject];
371:         if (supply != 0) revert CurveAlreadyExists();
372: 
373:         _buyCurvesToken(curvesTokenSubject, amount);
374:         _mint(curvesTokenSubject, name, symbol);
375:     }
376: 
377:     function buyCurvesTokenForPresale(
378:         address curvesTokenSubject,
379:         uint256 amount,
380:         uint256 startTime,
381:         bytes32 merkleRoot,
382:         uint256 maxBuy
383:     ) public payable onlyTokenSubject(curvesTokenSubject) {
384:         if (startTime <= block.timestamp) revert InvalidPresaleStartTime();
385:         uint256 supply = curvesTokenSupply[curvesTokenSubject];
386:         if (supply != 0) revert CurveAlreadyExists();
387:         presalesMeta[curvesTokenSubject].startTime = startTime;
388:         presalesMeta[curvesTokenSubject].merkleRoot = merkleRoot;
389:         presalesMeta[curvesTokenSubject].maxBuy = (maxBuy == 0 ? type(uint256).max : maxBuy);
390: 
391:         _buyCurvesToken(curvesTokenSubject, amount);
392:     }
393: 
394:     function setWhitelist(bytes32 merkleRoot) external {
395:         uint256 supply = curvesTokenSupply[msg.sender];
396:         if (supply > 1) revert CurveAlreadyExists();
397: 
398:         if (presalesMeta[msg.sender].merkleRoot != merkleRoot) {
399:             presalesMeta[msg.sender].merkleRoot = merkleRoot;
400:             emit WhitelistUpdated(msg.sender, merkleRoot);
401:         }
402:     }
403: 
404:     function buyCurvesTokenWhitelisted(
405:         address curvesTokenSubject,
406:         uint256 amount,
407:         bytes32[] memory proof
408:     ) public payable {
409:         if (
410:             presalesMeta[curvesTokenSubject].startTime == 0 ||
411:             presalesMeta[curvesTokenSubject].startTime <= block.timestamp
412:         ) revert PresaleUnavailable();
413: 
414:         presalesBuys[curvesTokenSubject][msg.sender] += amount;
415:         uint256 tokenBought = presalesBuys[curvesTokenSubject][msg.sender];
416:         if (tokenBought > presalesMeta[curvesTokenSubject].maxBuy) revert ExceededMaxBuyAmount();
417: 
418:         verifyMerkle(curvesTokenSubject, msg.sender, proof);
419:         _buyCurvesToken(curvesTokenSubject, amount);
420:     }
421: 
422:     function verifyMerkle(address curvesTokenSubject, address caller, bytes32[] memory proof) public view {
423:         // Verify merkle proof
424:         bytes32 leaf = keccak256(abi.encodePacked(caller));
425:         if (!MerkleProof.verify(proof, presalesMeta[curvesTokenSubject].merkleRoot, leaf)) revert UnverifiedProof();
426:     }
427: 
428:     function setNameAndSymbol(
429:         address curvesTokenSubject,
430:         string memory name,
431:         string memory symbol
432:     ) external onlyTokenSubject(curvesTokenSubject) {
433:         if (externalCurvesTokens[curvesTokenSubject].token != address(0)) revert ERC20TokenAlreadyMinted();
434:         if (symbolToSubject[symbol] != address(0)) revert InvalidERC20Metadata();
435:         externalCurvesTokens[curvesTokenSubject].name = name;
436:         externalCurvesTokens[curvesTokenSubject].symbol = symbol;
437:     }
438: 
439:     function mint(address curvesTokenSubject) external onlyTokenSubject(curvesTokenSubject) {
440:         if (
441:             keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].name)) ==
442:             keccak256(abi.encodePacked("")) ||
443:             keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].symbol)) ==
444:             keccak256(abi.encodePacked(""))
445:         ) {
446:             externalCurvesTokens[curvesTokenSubject].name = DEFAULT_NAME;
447:             externalCurvesTokens[curvesTokenSubject].symbol = DEFAULT_SYMBOL;
448:         }
449:         _mint(
450:             curvesTokenSubject,
451:             externalCurvesTokens[curvesTokenSubject].name,
452:             externalCurvesTokens[curvesTokenSubject].symbol
453:         );
454:     }
455: 
456:     function _mint(
457:         address curvesTokenSubject,
458:         string memory name,
459:         string memory symbol
460:     ) internal onlyTokenSubject(curvesTokenSubject) {
461:         if (externalCurvesTokens[curvesTokenSubject].token != address(0)) revert ERC20TokenAlreadyMinted();
462:         _deployERC20(curvesTokenSubject, name, symbol);
463:     }
464: 
465:     function withdraw(address curvesTokenSubject, uint256 amount) public {
466:         if (amount > curvesTokenBalance[curvesTokenSubject][msg.sender]) revert InsufficientBalance();
467: 
468:         address externalToken = externalCurvesTokens[curvesTokenSubject].token;
469:         if (externalToken == address(0)) {
470:             if (
471:                 keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].name)) ==
472:                 keccak256(abi.encodePacked("")) ||
473:                 keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].symbol)) ==
474:                 keccak256(abi.encodePacked(""))
475:             ) {
476:                 externalCurvesTokens[curvesTokenSubject].name = DEFAULT_NAME;
477:                 externalCurvesTokens[curvesTokenSubject].symbol = DEFAULT_SYMBOL;
478:             }
479:             _deployERC20(
480:                 curvesTokenSubject,
481:                 externalCurvesTokens[curvesTokenSubject].name,
482:                 externalCurvesTokens[curvesTokenSubject].symbol
483:             );
484:             externalToken = externalCurvesTokens[curvesTokenSubject].token;
485:         }
486:         _transfer(curvesTokenSubject, msg.sender, address(this), amount);
487:         CurvesERC20(externalToken).mint(msg.sender, amount * 1 ether);
488:     }
489: 
490:     function deposit(address curvesTokenSubject, uint256 amount) public {
491:         if (amount % 1 ether != 0) revert NonIntegerDepositAmount();
492: 
493:         address externalToken = externalCurvesTokens[curvesTokenSubject].token;
494:         uint256 tokenAmount = amount / 1 ether;
495: 
496:         if (externalToken == address(0)) revert TokenAbsentForCurvesTokenSubject();
497:         if (amount > CurvesERC20(externalToken).balanceOf(msg.sender)) revert InsufficientBalance();
498:         if (tokenAmount > curvesTokenBalance[curvesTokenSubject][address(this)]) revert InsufficientBalance();
499: 
500:         CurvesERC20(externalToken).burn(msg.sender, amount);
501:         _transfer(curvesTokenSubject, address(this), msg.sender, tokenAmount);
502:     }
503: 
504:     function sellExternalCurvesToken(address curvesTokenSubject, uint256 amount) public {
505:         if (externalCurvesTokens[curvesTokenSubject].token == address(0)) revert TokenAbsentForCurvesTokenSubject();
506: 
507:         deposit(curvesTokenSubject, amount);
508:         sellCurvesToken(curvesTokenSubject, amount / 1 ether);
509:     }
510: }
511: 

```


*GitHub* : [1](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L1-L1)

```solidity
1: // SPDX-License-Identifier: MIT
2: pragma solidity 0.8.7;
3: 
4: import "./CurvesERC20.sol";
5: 
6: contract CurvesERC20Factory {
7:     function deploy(string memory name, string memory symbol, address owner) public returns (address) {
8:         CurvesERC20 tokenContract = new CurvesERC20(name, symbol, owner);
9:         return address(tokenContract);
10:     }
11: }
12: 

```


*GitHub* : [1](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20Factory.sol#L1-L1)

```solidity
1: // SPDX-License-Identifier: MIT
2: pragma solidity ^0.8.7;
3: 
4: import "./Curves.sol";
5: import "./Security.sol";
6: 
7: import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
8: 
9: contract FeeSplitter is Security {
10:     Curves public curves;
11:     uint256 constant PRECISION = 1e18;
12: 
13:     // Custom errors
14:     error NoFeesToClaim();
15:     error NoTokenHolders();
16: 
17:     struct TokenData {
18:         uint256 cumulativeFeePerToken;
19:         mapping(address => uint256) userFeeOffset;
20:         mapping(address => uint256) unclaimedFees;
21:     }
22: 
23:     struct UserClaimData {
24:         uint256 claimableFees;
25:         address token;
26:     }
27: 
28:     mapping(address => TokenData) internal tokensData;
29:     mapping(address => address[]) internal userTokens;
30: 
31:     event FeesClaimed(address indexed token, address indexed user, uint256 amount);
32: 
33:     constructor() Security() {}
34: 
35:     function setCurves(Curves curves_) public {
36:         curves = curves_;
37:     }
38: 
39:     function balanceOf(address token, address account) public view returns (uint256) {
40:         return curves.curvesTokenBalance(token, account) * PRECISION;
41:     }
42: 
43:     function totalSupply(address token) public view returns (uint256) {
44:         //@dev: this is the amount of tokens that are not locked in the contract. The locked tokens are in the ERC20 contract
45:         return (curves.curvesTokenSupply(token) - curves.curvesTokenBalance(token, address(curves))) * PRECISION;
46:     }
47: 
48:     function getUserTokens(address user) public view returns (address[] memory) {
49:         return userTokens[user];
50:     }
51: 
52:     function getUserTokensAndClaimable(address user) public view returns (UserClaimData[] memory) {
53:         address[] memory tokens = getUserTokens(user);
54:         UserClaimData[] memory result = new UserClaimData[](tokens.length);
55:         for (uint256 i = 0; i < tokens.length; i++) {
56:             address token = tokens[i];
57:             uint256 claimable = getClaimableFees(token, user);
58:             result[i] = UserClaimData(claimable, token);
59:         }
60:         return result;
61:     }
62: 
63:     function updateFeeCredit(address token, address account) internal {
64:         TokenData storage data = tokensData[token];
65:         uint256 balance = balanceOf(token, account);
66:         if (balance > 0) {
67:             uint256 owed = (data.cumulativeFeePerToken - data.userFeeOffset[account]) * balance;
68:             data.unclaimedFees[account] += owed / PRECISION;
69:             data.userFeeOffset[account] = data.cumulativeFeePerToken;
70:         }
71:     }
72: 
73:     function getClaimableFees(address token, address account) public view returns (uint256) {
74:         TokenData storage data = tokensData[token];
75:         uint256 balance = balanceOf(token, account);
76:         uint256 owed = (data.cumulativeFeePerToken - data.userFeeOffset[account]) * balance;
77:         return (owed / PRECISION) + data.unclaimedFees[account];
78:     }
79: 
80:     function claimFees(address token) external {
81:         updateFeeCredit(token, msg.sender);
82:         uint256 claimable = getClaimableFees(token, msg.sender);
83:         if (claimable == 0) revert NoFeesToClaim();
84:         tokensData[token].unclaimedFees[msg.sender] = 0;
85:         payable(msg.sender).transfer(claimable);
86:         emit FeesClaimed(token, msg.sender, claimable);
87:     }
88: 
89:     function addFees(address token) public payable onlyManager {
90:         uint256 totalSupply_ = totalSupply(token);
91:         if (totalSupply_ == 0) revert NoTokenHolders();
92:         TokenData storage data = tokensData[token];
93:         data.cumulativeFeePerToken += (msg.value * PRECISION) / totalSupply_;
94:     }
95: 
96:     function onBalanceChange(address token, address account) public onlyManager {
97:         TokenData storage data = tokensData[token];
98:         data.userFeeOffset[account] = data.cumulativeFeePerToken;
99:         if (balanceOf(token, account) > 0) userTokens[account].push(token);
100:     }
101: 
102:     //@dev: this may fail if the the list is long. Get first the list with getUserTokens to estimate and prepare the batch
103:     function batchClaiming(address[] calldata tokenList) external {
104:         uint256 totalClaimable = 0;
105:         for (uint256 i = 0; i < tokenList.length; i++) {
106:             address token = tokenList[i];
107:             updateFeeCredit(token, msg.sender);
108:             uint256 claimable = getClaimableFees(token, msg.sender);
109:             if (claimable > 0) {
110:                 tokensData[token].unclaimedFees[msg.sender] = 0;
111:                 totalClaimable += claimable;
112:                 emit FeesClaimed(token, msg.sender, claimable);
113:             }
114:         }
115:         if (totalClaimable == 0) revert NoFeesToClaim();
116:         payable(msg.sender).transfer(totalClaimable);
117:     }
118: 
119:     receive() external payable {}
120: }
121: 

```


*GitHub* : [1](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L1-L1)

```solidity
1: // SPDX-License-Identifier: MIT
2: pragma solidity 0.8.7;
3: 
4: import "@openzeppelin/contracts/access/Ownable.sol";
5: import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
6: 
7: contract CurvesERC20 is ERC20, Ownable {
8:     constructor(string memory name_, string memory symbol_, address owner) ERC20(name_, symbol_) {
9:         transferOwnership(owner);
10:     }
11: 
12:     function mint(address to, uint256 amount) public onlyOwner {
13:         _mint(to, amount);
14:     }
15: 
16:     function burn(address from, uint256 amount) public onlyOwner {
17:         _burn(from, amount);
18:     }
19: }
20: 

```


*GitHub* : [1](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L1-L1)
### [N-50]<a name="n-50"></a> Top level declarations should be separated by two blank lines

*There are 17 instance(s) of this issue:*

```solidity
25:     } // <= FOUND
26: 
27:     function transferOwnership(address owner_) public onlyOwner { // <= FOUND

```


*GitHub* : [25](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L25-L27)

```solidity
111:     } // <= FOUND
112: 
113:     function setFeeRedistributor(address feeRedistributor_) external onlyOwner { // <= FOUND

```


*GitHub* : [111](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L111-L113)

```solidity
126:     } // <= FOUND
127: 
128:     function setProtocolFeePercent(uint256 protocolFeePercent_, address protocolFeeDestination_) external onlyOwner { // <= FOUND

```


*GitHub* : [126](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L126-L128)

```solidity
153:     } // <= FOUND
154: 
155:     function setReferralFeeDestination( // <= FOUND

```


*GitHub* : [153](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L153-L155)

```solidity
195:     } // <= FOUND
196: 
197:     function getBuyPriceAfterFee(address curvesTokenSubject, uint256 amount) public view returns (uint256) { // <= FOUND

```


*GitHub* : [195](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L195-L197)

```solidity
216:     } // <= FOUND
217: 
218:     function _transferFees( // <= FOUND

```


*GitHub* : [216](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L216-L218)

```solidity
261:     } // <= FOUND
262: 
263:     function _buyCurvesToken(address curvesTokenSubject, uint256 amount) internal { // <= FOUND

```


*GitHub* : [261](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L261-L263)

```solidity
336:     } // <= FOUND
337: 
338:     function _deployERC20( // <= FOUND

```


*GitHub* : [336](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L336-L338)

```solidity
375:     } // <= FOUND
376: 
377:     function buyCurvesTokenForPresale( // <= FOUND

```


*GitHub* : [375](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L375-L377)

```solidity
402:     } // <= FOUND
403: 
404:     function buyCurvesTokenWhitelisted( // <= FOUND

```


*GitHub* : [402](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L402-L404)

```solidity
420:     } // <= FOUND
421: 
422:     function verifyMerkle(address curvesTokenSubject, address caller, bytes32[] memory proof) public view { // <= FOUND

```


*GitHub* : [420](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L420-L422)

```solidity
426:     } // <= FOUND
427: 
428:     function setNameAndSymbol( // <= FOUND

```


*GitHub* : [426](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L426-L428)

```solidity
41:     } // <= FOUND
42: 
43:     function totalSupply(address token) public view returns (uint256) { // <= FOUND

```


*GitHub* : [41](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L41-L43)

```solidity
50:     } // <= FOUND
51: 
52:     function getUserTokensAndClaimable(address user) public view returns (UserClaimData[] memory) { // <= FOUND

```


*GitHub* : [50](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L50-L52)

```solidity
71:     } // <= FOUND
72: 
73:     function getClaimableFees(address token, address account) public view returns (uint256) { // <= FOUND

```


*GitHub* : [71](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L71-L73)

```solidity
10:     } // <= FOUND
11: 
12:     function mint(address to, uint256 amount) public onlyOwner { // <= FOUND

```


*GitHub* : [10](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L10-L12)

```solidity
16:     } // <= FOUND
17: 
18:     constructor() { // <= FOUND

```


*GitHub* : [16](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L16-L18)
### [N-51]<a name="n-51"></a> Contracts should have full test coverage
Attaining 100% code coverage is not an assurance of a bug-free codebase, but it significantly improves the likelihood of identifying simple bugs and aids in maintaining a stable codebase by preventing regressions during code modifications. Additionally, to achieve complete coverage, code writers usually have to structure their code more modularly, which implies testing each component independently. This reduces the complex interdependencies between modules and layers, creating a more understandable and auditable codebase. Consequently, this practice aids in enhancing code maintainability and reduces the risk of introducing bugs during future changes.

*There are 5 instance(s) of this issue:*

```solidity
41: contract Curves is CurvesErrors, Security  // <= FOUND

```


*GitHub* : [41](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L41-L41)

```solidity
9: contract FeeSplitter is Security  // <= FOUND

```


*GitHub* : [9](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L9-L9)

```solidity
4: contract Security  // <= FOUND

```


*GitHub* : [4](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L4-L4)

```solidity
7: contract CurvesERC20 is ERC20, Ownable  // <= FOUND

```


*GitHub* : [7](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L7-L7)

```solidity
6: contract CurvesERC20Factory  // <= FOUND

```


*GitHub* : [6](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20Factory.sol#L6-L6)
### [N-52]<a name="n-52"></a> Consider using SafeTransferLib.safeTransferETH() or Address.sendValue() for clearer semantic meaning
For improved code readability and better semantic understanding, it's recommended to use OpenZeppelin's SafeTransferLib.safeTransferETH() or Address.sendValue(). These functions explicitly describe their operation with their naming convention, increasing the comprehensibility of the code. Their usage over lower-level calls enhances the maintainability of your smart contract code by clearly indicating the purpose of the function.

*There are 1 instance(s) of this issue:*

```solidity
218:     function _transferFees(
219:         address curvesTokenSubject,
220:         bool isBuy,
221:         uint256 price,
222:         uint256 amount,
223:         uint256 supply
224:     ) internal {
225:         (uint256 protocolFee, uint256 subjectFee, uint256 referralFee, uint256 holderFee, ) = getFees(price);
226:         {
227:             bool referralDefined = referralFeeDestination[curvesTokenSubject] != address(0);
228:             {
229:                 address firstDestination = isBuy ? feesEconomics.protocolFeeDestination : msg.sender;
230:                 uint256 buyValue = referralDefined ? protocolFee : protocolFee + referralFee;
231:                 uint256 sellValue = price - protocolFee - subjectFee - referralFee - holderFee;
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}(""); // <= FOUND
233:                 if (!success1) revert CannotSendFunds();
234:             }
235:             {
236:                 (bool success2, ) = curvesTokenSubject.call{value: subjectFee}(""); // <= FOUND
237:                 if (!success2) revert CannotSendFunds();
238:             }
239:             {
240:                 (bool success3, ) = referralDefined
241:                     ? referralFeeDestination[curvesTokenSubject].call{value: referralFee}("")
242:                     : (true, bytes(""));
243:                 if (!success3) revert CannotSendFunds();
244:             }
245: 
246:             if (feesEconomics.holdersFeePercent > 0 && address(feeRedistributor) != address(0)) {
247:                 feeRedistributor.onBalanceChange(curvesTokenSubject, msg.sender);
248:                 feeRedistributor.addFees{value: holderFee}(curvesTokenSubject);
249:             }
250:         }
251:         emit Trade(
252:             msg.sender,
253:             curvesTokenSubject,
254:             isBuy,
255:             amount,
256:             price,
257:             protocolFee,
258:             subjectFee,
259:             isBuy ? supply + amount : supply - amount
260:         );
261:     }

```


*GitHub* : [218](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L218-L236)
### [N-53]<a name="n-53"></a> Whitespace in expressions
Avoid unnecessary whitespace in contract lines such as ' ;' and ', )'

*There are 4 instance(s) of this issue:*

```solidity
225:         (uint256 protocolFee, uint256 subjectFee, uint256 referralFee, uint256 holderFee, ) = getFees(price); // <= FOUND

```


*GitHub* : [225](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L225-L225)

```solidity
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}(""); // <= FOUND

```


*GitHub* : [232](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L232-L232)

```solidity
236:                 (bool success2, ) = curvesTokenSubject.call{value: subjectFee}(""); // <= FOUND

```


*GitHub* : [236](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L236-L236)

```solidity
240:                 (bool success3, ) = referralDefined // <= FOUND
241:                     ? referralFeeDestination[curvesTokenSubject].call{value: referralFee}("")

```


*GitHub* : [240](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L240-L240)
### [N-54]<a name="n-54"></a> Consider using named function calls
Named function calls in Solidity greatly improve code readability by explicitly mapping arguments to their respective parameter names. This clarity becomes critical when dealing with functions that have numerous or complex parameters, reducing potential errors due to misordered arguments. Therefore, adopting named function calls contributes to more maintainable and less error-prone code.

*There are 21 instance(s) of this issue:*

```solidity
199:         (, , , , uint256 totalFee) = getFees(price); // <= FOUND

```


*GitHub* : [199](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L199-L199)

```solidity
225:         (uint256 protocolFee, uint256 subjectFee, uint256 referralFee, uint256 holderFee, ) = getFees(price); // <= FOUND

```


*GitHub* : [225](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L225-L225)

```solidity
190:         return getPrice(curvesTokenSupply[curvesTokenSubject], amount); // <= FOUND

```


*GitHub* : [190](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L190-L190)

```solidity
194:         return getPrice(curvesTokenSupply[curvesTokenSubject] - amount, amount); // <= FOUND

```


*GitHub* : [194](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L194-L194)

```solidity
267: 
268:         uint256 price = getPrice(supply, amount); // <= FOUND

```


*GitHub* : [267](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L267-L268)

```solidity
287: 
288:         uint256 price = getPrice(supply - amount, amount); // <= FOUND

```


*GitHub* : [287](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L287-L288)

```solidity
198:         uint256 price = getBuyPrice(curvesTokenSubject, amount); // <= FOUND

```


*GitHub* : [198](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L198-L198)

```solidity
205:         uint256 price = getSellPrice(curvesTokenSubject, amount); // <= FOUND

```


*GitHub* : [205](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L205-L205)

```solidity
215: 
216:         _buyCurvesToken(curvesTokenSubject, amount); // <= FOUND

```


*GitHub* : [215](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L215-L216)

```solidity
215:         _buyCurvesToken(curvesTokenSubject, amount); // <= FOUND

```


*GitHub* : [215](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L215-L215)

```solidity
274:         _transferFees(curvesTokenSubject, true, price, amount, supply); // <= FOUND

```


*GitHub* : [274](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L274-L274)

```solidity
292: 
293:         _transferFees(curvesTokenSubject, false, price, amount, supply); // <= FOUND

```


*GitHub* : [292](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L292-L293)

```solidity
508:         sellCurvesToken(curvesTokenSubject, amount / 1 ether); // <= FOUND

```


*GitHub* : [508](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L508-L508)

```solidity
318:             _addOwnedCurvesTokenSubject(to, curvesTokenSubject); // <= FOUND

```


*GitHub* : [318](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L318-L318)

```solidity
462:         _deployERC20(curvesTokenSubject, name, symbol); // <= FOUND

```


*GitHub* : [462](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L462-L462)

```solidity
374:         _mint(curvesTokenSubject, name, symbol); // <= FOUND

```


*GitHub* : [374](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L374-L374)

```solidity
13:         _mint(to, amount); // <= FOUND

```


*GitHub* : [13](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L13-L13)

```solidity
507: 
508:         deposit(curvesTokenSubject, amount); // <= FOUND

```


*GitHub* : [507](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L507-L508)

```solidity
65:         uint256 balance = balanceOf(token, account); // <= FOUND

```


*GitHub* : [65](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L65-L65)

```solidity
57:             uint256 claimable = getClaimableFees(token, user); // <= FOUND

```


*GitHub* : [57](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L57-L57)

```solidity
17:         _burn(from, amount); // <= FOUND

```


*GitHub* : [17](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L17-L17)
### [N-55]<a name="n-55"></a> Lack of space near the operator
Lack of space near operators in code can lead to reduced readability, making it more challenging to distinguish between different elements and understand the logic quickly. As a resolution, always include spaces around operators to ensure a clear visual separation, which promotes better maintainability and comprehension of the code.

*There are 2 instance(s) of this issue:*

```solidity
118:         if (
119:             feesEconomics.protocolFeePercent + // <= FOUND
120:                 feesEconomics.subjectFeePercent + // <= FOUND
121:                 feesEconomics.referralFeePercent + // <= FOUND
122:                 feesEconomics.holdersFeePercent >
123:             maxFeePercent_
124:         ) revert InvalidFeeDefinition(); // <= FOUND

```


*GitHub* : [118](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L118-L124)

```solidity
129:         if (
130:             protocolFeePercent_ + // <= FOUND
131:                 feesEconomics.subjectFeePercent + // <= FOUND
132:                 feesEconomics.referralFeePercent + // <= FOUND
133:                 feesEconomics.holdersFeePercent >
134:             feesEconomics.maxFeePercent ||
135:             protocolFeeDestination_ == address(0)
136:         ) revert InvalidFeeDefinition(); // <= FOUND

```


*GitHub* : [129](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L129-L136)
### [N-56]<a name="n-56"></a> Lack Of Brace Spacing
Lack of brace spacing in coding refers to the absence of spaces around braces, which can hinder code readability. In Solidity, as in many programming languages, spacing can enhance the visual distinction between different parts of the code, making it easier to follow. A lack of spacing can lead to a dense, confusing appearance. The resolution to this issue is to follow a consistent style guide that defines rules for brace spacing. By including spaces around braces, such as `{ statement }` instead of `{statement}`, developers can ensure that the code is more legible and maintainable, especially in larger codebases.

*There are 4 instance(s) of this issue:*

```solidity
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}(""); // <= FOUND

```


*GitHub* : [232](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L232-L232)

```solidity
236:                 (bool success2, ) = curvesTokenSubject.call{value: subjectFee}(""); // <= FOUND

```


*GitHub* : [236](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L236-L236)

```solidity
240:                 (bool success3, ) = referralDefined
241:                     ? referralFeeDestination[curvesTokenSubject].call{value: referralFee}("") // <= FOUND

```


*GitHub* : [240](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L240-L241)

```solidity
248:                 feeRedistributor.addFees{value: holderFee}(curvesTokenSubject); // <= FOUND

```


*GitHub* : [248](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L248-L248)
### [N-57]<a name="n-57"></a> No access control on receive/payable fallback
Without access control on receive/payable fallback functions in a contract, anyone can send Ether (ETH) to the contract's address. If there's no way to withdraw those funds defined within the contract, any Ether sent, whether intentionally or by mistake, will be permanently stuck. This could lead to unintended loss of funds. Implementing proper access control ensures that only authorized addresses can interact with these functions. Resolution could involve adding access control mechanisms, like Ownable or specific permission requirements, or creating a withdrawal function accessible only to the contract's owner, thus preventing unintentional loss of funds.

*There are 1 instance(s) of this issue:*

```solidity
119:     receive() external payable {} // <= FOUND

```


*GitHub* : [119](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L119-L119)
### [N-58]<a name="n-58"></a> If statement control structures do not comply with best practices
If statements which include a single line do not need to have curly brackets, however according to the Solidiity style guide the line of code executed upon the if statement condition being met should still be on the next line, not on the same line as the if statement declaration.

*There are 33 instance(s) of this issue:*

```solidity
104:         if (curvesTokenSubject != msg.sender) revert UnauthorizedCurvesTokenSubject(); // <= FOUND

```


*GitHub* : [104](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L104-L104)

```solidity
118:         if ( // <= FOUND
119:             feesEconomics.protocolFeePercent +
120:                 feesEconomics.subjectFeePercent +
121:                 feesEconomics.referralFeePercent +
122:                 feesEconomics.holdersFeePercent >
123:             maxFeePercent_
124:         ) revert InvalidFeeDefinition(); // <= FOUND

```


*GitHub* : [118](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L118-L124)

```solidity
129:         if ( // <= FOUND
130:             protocolFeePercent_ +
131:                 feesEconomics.subjectFeePercent +
132:                 feesEconomics.referralFeePercent +
133:                 feesEconomics.holdersFeePercent >
134:             feesEconomics.maxFeePercent ||
135:             protocolFeeDestination_ == address(0)
136:         ) revert InvalidFeeDefinition(); // <= FOUND

```


*GitHub* : [129](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L129-L136)

```solidity
146:         if ( // <= FOUND
147:             feesEconomics.protocolFeePercent + subjectFeePercent_ + referralFeePercent_ + holdersFeePercent_ >
148:             feesEconomics.maxFeePercent
149:         ) revert InvalidFeeDefinition(); // <= FOUND

```


*GitHub* : [146](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L146-L149)

```solidity
213:         if (startTime != 0 && startTime >= block.timestamp) revert SaleNotOpen(); // <= FOUND

```


*GitHub* : [213](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L213-L213)

```solidity
233:                 if (!success1) revert CannotSendFunds(); // <= FOUND

```


*GitHub* : [233](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L233-L233)

```solidity
237:                 if (!success2) revert CannotSendFunds(); // <= FOUND

```


*GitHub* : [237](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L237-L237)

```solidity
243:                 if (!success3) revert CannotSendFunds(); // <= FOUND

```


*GitHub* : [243](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L243-L243)

```solidity
265:         if (!(supply > 0 || curvesTokenSubject == msg.sender)) revert UnauthorizedCurvesTokenSubject(); // <= FOUND

```


*GitHub* : [265](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L265-L265)

```solidity
270: 
271:         if (msg.value < price + totalFee) revert InsufficientPayment(); // <= FOUND

```


*GitHub* : [270](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L270-L271)

```solidity
284:         if (supply <= amount) revert LastTokenCannotBeSold(); // <= FOUND

```


*GitHub* : [284](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L284-L284)

```solidity
285:         if (curvesTokenBalance[curvesTokenSubject][msg.sender] < amount) revert InsufficientBalance(); // <= FOUND

```


*GitHub* : [285](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L285-L285)

```solidity
297:         if (to == address(this)) revert ContractCannotReceiveTransfer(); // <= FOUND

```


*GitHub* : [297](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L297-L297)

```solidity
314:         if (amount > curvesTokenBalance[curvesTokenSubject][from]) revert InsufficientBalance(); // <= FOUND

```


*GitHub* : [314](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L314-L314)

```solidity
350: 
351:         if (symbolToSubject[symbol] != address(0)) revert InvalidERC20Metadata(); // <= FOUND

```


*GitHub* : [350](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L350-L351)

```solidity
371:         if (supply != 0) revert CurveAlreadyExists(); // <= FOUND

```


*GitHub* : [371](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L371-L371)

```solidity
384:         if (startTime <= block.timestamp) revert InvalidPresaleStartTime(); // <= FOUND

```


*GitHub* : [384](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L384-L384)

```solidity
396:         if (supply > 1) revert CurveAlreadyExists(); // <= FOUND

```


*GitHub* : [396](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L396-L396)

```solidity
409:         if ( // <= FOUND
410:             presalesMeta[curvesTokenSubject].startTime == 0 ||
411:             presalesMeta[curvesTokenSubject].startTime <= block.timestamp
412:         ) revert PresaleUnavailable(); // <= FOUND

```


*GitHub* : [409](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L409-L412)

```solidity
416:         if (tokenBought > presalesMeta[curvesTokenSubject].maxBuy) revert ExceededMaxBuyAmount(); // <= FOUND

```


*GitHub* : [416](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L416-L416)

```solidity
425:         if (!MerkleProof.verify(proof, presalesMeta[curvesTokenSubject].merkleRoot, leaf)) revert UnverifiedProof(); // <= FOUND

```


*GitHub* : [425](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L425-L425)

```solidity
433:         if (externalCurvesTokens[curvesTokenSubject].token != address(0)) revert ERC20TokenAlreadyMinted(); // <= FOUND

```


*GitHub* : [433](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L433-L433)

```solidity
350:         if (symbolToSubject[symbol] != address(0)) revert InvalidERC20Metadata(); // <= FOUND

```


*GitHub* : [350](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L350-L350)

```solidity
466:         if (amount > curvesTokenBalance[curvesTokenSubject][msg.sender]) revert InsufficientBalance(); // <= FOUND

```


*GitHub* : [466](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L466-L466)

```solidity
491:         if (amount % 1 ether != 0) revert NonIntegerDepositAmount(); // <= FOUND

```


*GitHub* : [491](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L491-L491)

```solidity
496: 
497:         if (externalToken == address(0)) revert TokenAbsentForCurvesTokenSubject(); // <= FOUND

```


*GitHub* : [496](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L496-L497)

```solidity
497:         if (amount > CurvesERC20(externalToken).balanceOf(msg.sender)) revert InsufficientBalance(); // <= FOUND

```


*GitHub* : [497](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L497-L497)

```solidity
498:         if (tokenAmount > curvesTokenBalance[curvesTokenSubject][address(this)]) revert InsufficientBalance(); // <= FOUND

```


*GitHub* : [498](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L498-L498)

```solidity
505:         if (externalCurvesTokens[curvesTokenSubject].token == address(0)) revert TokenAbsentForCurvesTokenSubject(); // <= FOUND

```


*GitHub* : [505](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L505-L505)

```solidity
83:         if (claimable == 0) revert NoFeesToClaim(); // <= FOUND

```


*GitHub* : [83](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L83-L83)

```solidity
91:         if (totalSupply_ == 0) revert NoTokenHolders(); // <= FOUND

```


*GitHub* : [91](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L91-L91)

```solidity
99:         if (balanceOf(token, account) > 0) userTokens[account].push(token); // <= FOUND

```


*GitHub* : [99](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L99-L99)

```solidity
115:         if (totalClaimable == 0) revert NoFeesToClaim(); // <= FOUND

```


*GitHub* : [115](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L115-L115)
### [N-59]<a name="n-59"></a> Incorrect withdraw declaration
In Solidity, it's essential for clarity and interoperability to correctly specify return types in function declarations. If the `withdraw` function is expected to return a `bool` to indicate success or failure, its omission could lead to ambiguity or unexpected behavior when interacting with or calling this function from other contracts or off-chain systems. Missing return values can mislead developers and potentially lead to contract integrations built on incorrect assumptions. To resolve this, the function declaration for `withdraw` should be modified to explicitly include the `bool` return type, ensuring clarity and correctness in contract interactions.

*There are 1 instance(s) of this issue:*

```solidity
465:     function withdraw(address curvesTokenSubject, uint256 amount) public  // <= FOUND

```


*GitHub* : [465](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L465-L465)
### [N-60]<a name="n-60"></a> Consider adding formal verification proofs

*There are 5 instance(s) of this issue:*

```solidity
41: contract Curves is CurvesErrors, Security  // <= FOUND

```


*GitHub* : [41](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L41-L41)

```solidity
9: contract FeeSplitter is Security  // <= FOUND

```


*GitHub* : [9](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L9-L9)

```solidity
4: contract Security  // <= FOUND

```


*GitHub* : [4](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L4-L4)

```solidity
7: contract CurvesERC20 is ERC20, Ownable  // <= FOUND

```


*GitHub* : [7](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L7-L7)

```solidity
6: contract CurvesERC20Factory  // <= FOUND

```


*GitHub* : [6](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20Factory.sol#L6-L6)
### [N-61]<a name="n-61"></a> Use string.concat() on strings instead of abi.encodePacked() for clearer semantic meaning
From Solidity 0.8.12 onwards, developers can utilize `string.concat()` to concatenate strings without additional padding. Opting for `string.concat()` over `abi.encodePacked()` offers clearer semantic interpretation of the code's intent, enhancing readability. This shift minimizes ambiguity, reducing the potential for misinterpretation by reviewers or future developers. Thus, for string concatenation tasks, it's recommended to transition to `string.concat()` for transparent, straightforward code that communicates its purpose distinctly.

*There are 3 instance(s) of this issue:*

```solidity
338:     function _deployERC20(
339:         address curvesTokenSubject,
340:         string memory name,
341:         string memory symbol
342:     ) internal returns (address) {
343:         
344:         if (keccak256(bytes(symbol)) == keccak256(bytes(DEFAULT_SYMBOL))) {
345:             _curvesTokenCounter += 1;
346:             name = string(abi.encodePacked(name, " ", Strings.toString(_curvesTokenCounter))); // <= FOUND
347:             symbol = string(abi.encodePacked(symbol, Strings.toString(_curvesTokenCounter))); // <= FOUND
348:         }
349: 
350:         if (symbolToSubject[symbol] != address(0)) revert InvalidERC20Metadata();
351: 
352:         address tokenContract = CurvesERC20Factory(curvesERC20Factory).deploy(name, symbol, address(this));
353: 
354:         externalCurvesTokens[curvesTokenSubject].token = tokenContract;
355:         externalCurvesTokens[curvesTokenSubject].name = name;
356:         externalCurvesTokens[curvesTokenSubject].symbol = symbol;
357:         externalCurvesToSubject[tokenContract] = curvesTokenSubject;
358:         symbolToSubject[symbol] = curvesTokenSubject;
359: 
360:         emit TokenDeployed(curvesTokenSubject, tokenContract, name, symbol);
361:         return address(tokenContract);
362:     }

```


*GitHub* : [338](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L338-L347)

```solidity
439:     function mint(address curvesTokenSubject) external onlyTokenSubject(curvesTokenSubject) { // <= FOUND
440:         if (
441:             keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].name)) ==
442:             keccak256(abi.encodePacked("")) ||
443:             keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].symbol)) ==
444:             keccak256(abi.encodePacked(""))
445:         ) {
446:             externalCurvesTokens[curvesTokenSubject].name = DEFAULT_NAME;
447:             externalCurvesTokens[curvesTokenSubject].symbol = DEFAULT_SYMBOL;
448:         }
449:         _mint(
450:             curvesTokenSubject,
451:             externalCurvesTokens[curvesTokenSubject].name,
452:             externalCurvesTokens[curvesTokenSubject].symbol
453:         );
454:     }

```


*GitHub* : [439](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L439-L439)

```solidity
465:     function withdraw(address curvesTokenSubject, uint256 amount) public { // <= FOUND
466:         if (amount > curvesTokenBalance[curvesTokenSubject][msg.sender]) revert InsufficientBalance();
467: 
468:         address externalToken = externalCurvesTokens[curvesTokenSubject].token;
469:         if (externalToken == address(0)) {
470:             if (
471:                 keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].name)) ==
472:                 keccak256(abi.encodePacked("")) ||
473:                 keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].symbol)) ==
474:                 keccak256(abi.encodePacked(""))
475:             ) {
476:                 externalCurvesTokens[curvesTokenSubject].name = DEFAULT_NAME;
477:                 externalCurvesTokens[curvesTokenSubject].symbol = DEFAULT_SYMBOL;
478:             }
479:             _deployERC20(
480:                 curvesTokenSubject,
481:                 externalCurvesTokens[curvesTokenSubject].name,
482:                 externalCurvesTokens[curvesTokenSubject].symbol
483:             );
484:             externalToken = externalCurvesTokens[curvesTokenSubject].token;
485:         }
486:         _transfer(curvesTokenSubject, msg.sender, address(this), amount);
487:         CurvesERC20(externalToken).mint(msg.sender, amount * 1 ether);
488:     }

```


*GitHub* : [465](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L465-L465)
### [N-62]<a name="n-62"></a> Consider bounding input array length
Unbounded array inputs in functions can lead to unintentional excessive gas consumption, potentially causing a transaction to revert after expending substantial gas. To enhance user experience and prevent such scenarios, consider implementing a `require()` statement that limits the array length to a defined maximum. This constraint ensures that transactions won't proceed if they're likely to hit gas limits due to array size, saving users from unnecessary gas costs and offering a more predictable interaction with the contract.

*There are 4 instance(s) of this issue:*

```solidity
305:        for (uint256 i = 0; i < subjects.length; i++) { // <= FOUND
306:             uint256 amount = curvesTokenBalance[subjects[i]][msg.sender];
307:             if (amount > 0) {
308:                 _transfer(subjects[i], msg.sender, to, amount);
309:             }
310:         }

```


*GitHub* : [305](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L305-L305)

```solidity
330:        for (uint256 i = 0; i < subjects.length; i++) { // <= FOUND
331:             if (subjects[i] == curvesTokenSubject) {
332:                 return;
333:             }
334:         }

```


*GitHub* : [330](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L330-L330)

```solidity
55:        for (uint256 i = 0; i < tokens.length; i++) { // <= FOUND
56:             address token = tokens[i];
57:             uint256 claimable = getClaimableFees(token, user);
58:             result[i] = UserClaimData(claimable, token);
59:         }

```


*GitHub* : [55](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L55-L55)

```solidity
105:        for (uint256 i = 0; i < tokenList.length; i++) { // <= FOUND
106:             address token = tokenList[i];
107:             updateFeeCredit(token, msg.sender);
108:             uint256 claimable = getClaimableFees(token, msg.sender);
109:             if (claimable > 0) {
110:                 tokensData[token].unclaimedFees[msg.sender] = 0;
111:                 totalClaimable += claimable;
112:                 emit FeesClaimed(token, msg.sender, claimable);
113:             }
114:         }

```


*GitHub* : [105](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L105-L105)
### [N-63]<a name="n-63"></a> Avoid mutating function parameters
Function parameters in Solidity are passed by value, meaning they are essentially local copies. Mutating them can lead to confusion and errors because the changes don't persist outside the function. By keeping function parameters immutable, you ensure clarity in code behavior, preventing unintended side-effects. If you need to modify a value based on a parameter, use a local variable inside the function, leaving the original parameter unaltered. By adhering to this practice, you maintain a clear distinction between input data and the internal processing logic, improving code readability and reducing the potential for bugs.

*There are 1 instance(s) of this issue:*

```solidity
338:     function _deployERC20(
339:         address curvesTokenSubject,
340:         string memory name,
341:         string memory symbol
342:     ) internal returns (address) {
343:         
344:         if (keccak256(bytes(symbol)) == keccak256(bytes(DEFAULT_SYMBOL))) {
345:             _curvesTokenCounter += 1;
346:             name = string(abi.encodePacked(name, " ", Strings.toString(_curvesTokenCounter))); // <= FOUND
347:             symbol = string(abi.encodePacked(symbol, Strings.toString(_curvesTokenCounter))); // <= FOUND
348:         }
349: 
350:         if (symbolToSubject[symbol] != address(0)) revert InvalidERC20Metadata();
351: 
352:         address tokenContract = CurvesERC20Factory(curvesERC20Factory).deploy(name, symbol, address(this));
353: 
354:         externalCurvesTokens[curvesTokenSubject].token = tokenContract;
355:         externalCurvesTokens[curvesTokenSubject].name = name;
356:         externalCurvesTokens[curvesTokenSubject].symbol = symbol;
357:         externalCurvesToSubject[tokenContract] = curvesTokenSubject;
358:         symbolToSubject[symbol] = curvesTokenSubject;
359: 
360:         emit TokenDeployed(curvesTokenSubject, tokenContract, name, symbol);
361:         return address(tokenContract);
362:     }

```


*GitHub* : [338](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L338-L347)
### [N-64]<a name="n-64"></a> It is best practice to use linear inheritance
In Solidity, complex inheritance structures can obfuscate code understanding, introducing potential security risks. Multiple inheritance, especially with overlapping function names or state variables, can cause unintentional overrides or ambiguous behavior. Resolution: Strive for linear and simple inheritance chains. Avoid diamond or circular inheritance patterns. Clearly document the purpose and relationships of base contracts, ensuring that overrides are intentional. Tools like Remix or Hardhat can visualize inheritance chains, assisting in verification. Keeping inheritance streamlined aids in better code readability, reduces potential errors, and ensures smoother audits and upgrades.

*There are 2 instance(s) of this issue:*

```solidity
41: contract Curves is CurvesErrors, Security  // <= FOUND

```


*GitHub* : [41](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L41-L41)

```solidity
7: contract CurvesERC20 is ERC20, Ownable  // <= FOUND

```


*GitHub* : [7](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L7-L7)
### [N-65]<a name="n-65"></a> Contracts with only unimplemented functions can be labeled as abstract
In Solidity, a contract that's not meant to be deployed on its own but is intended to be inherited by other contracts should be marked `abstract`. This ensures that developers recognize the contract's incomplete or intended-to-be-extended nature. If a contract has unimplemented functions or is designed with the intention that another contract should extend its functionality, it should be explicitly labeled as `abstract`. This helps prevent inadvertent deployments and clearly communicates the contract's purpose to other developers. Resolution: Review the contract, and if it's not supposed to function standalone, mark it as `abstract` to make the intention clear.

*There are 1 instance(s) of this issue:*

```solidity
6: contract CurvesERC20Factory 

```


*GitHub* : [6](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20Factory.sol#L6-L6)
### [N-66]<a name="n-66"></a> A event should be emitted if a non immutable state variable is set in a constructor

*There are 2 instance(s) of this issue:*

```solidity
108:     constructor(address curvesERC20Factory_, address feeRedistributor_) Security() {
109:         curvesERC20Factory = curvesERC20Factory_; // <= FOUND
110:         feeRedistributor = FeeSplitter(payable(feeRedistributor_)); // <= FOUND
111:     }

```


*GitHub* : [108](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L108-L110)

```solidity
18:     constructor() {
19:         owner = msg.sender; // <= FOUND
20:         managers[msg.sender] = true;
21:     }

```


*GitHub* : [18](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L18-L19)
### [N-67]<a name="n-67"></a> Create methods are suspicious of the reorg attack
"Create" methods, which deploy contracts via " = new <contract>", are at risk from re-org attacks since the derived contract address is solely based on the Factory's nonce. Re-orgs, chain reorganizations, can occur across all EVM chains. The vulnerability amplifies when deploying contracts on EVM-compatible L2 solutions like Arbitrum and Polygon, which are notably susceptible to re-org attacks. Ethereum, a primary deployment target, has already experienced re-org events.

To bolster security against re-org threats, developers are advised to use the `create2` method for contract deployments instead of the basic `create`. By using `create2` with a salt that includes `msg.sender`, the contract's address derivation becomes more predictable and less prone to unexpected changes due to re-orgs. This strategy not only provides a more consistent deployment pattern but also minimizes risks associated with potential blockchain reorganizations.

*There are 1 instance(s) of this issue:*

```solidity
7:     function deploy(string memory name, string memory symbol, address owner) public returns (address) {
8:         CurvesERC20 tokenContract = new CurvesERC20(name, symbol, owner); // <= FOUND
9:         return address(tokenContract);
10:     }

```


*GitHub* : [8](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20Factory.sol#L8-L8)
### [N-68]<a name="n-68"></a> Contracts use both += 1 and ++ (-- and -= 1)
For consistency consider only using one of these incrementing methods.

*There are 1 instance(s) of this issue:*

```solidity
41: contract Curves is CurvesErrors, Security {
42:     address public curvesERC20Factory;
43:     FeeSplitter public feeRedistributor;
44:     string public constant DEFAULT_NAME = "Curves";
45:     string public constant DEFAULT_SYMBOL = "CURVES";
46:     
47:     uint256 private _curvesTokenCounter = 0;
48: 
49:     struct ExternalTokenMeta {
50:         string name;
51:         string symbol;
52:         address token;
53:     }
54: 
55:     struct PresaleMeta {
56:         uint256 startTime;
57:         bytes32 merkleRoot;
58:         uint256 maxBuy;
59:     }
60: 
61:     mapping(address => ExternalTokenMeta) public externalCurvesTokens;
62:     mapping(address => address) public externalCurvesToSubject;
63:     mapping(string => address) public symbolToSubject;
64: 
65:     mapping(address => PresaleMeta) public presalesMeta;
66:     mapping(address => mapping(address => uint256)) public presalesBuys;
67: 
68:     struct FeesEconomics {
69:         address protocolFeeDestination;
70:         uint256 protocolFeePercent;
71:         uint256 subjectFeePercent;
72:         uint256 referralFeePercent;
73:         uint256 holdersFeePercent;
74:         uint256 maxFeePercent;
75:     }
76: 
77:     FeesEconomics public feesEconomics;
78:     mapping(address => address) public referralFeeDestination;
79: 
80:     event Trade(
81:         address trader,
82:         address subject,
83:         bool isBuy,
84:         uint256 tokenAmount,
85:         uint256 ethAmount,
86:         uint256 protocolEthAmount,
87:         uint256 subjectEthAmount,
88:         uint256 supply
89:     );
90: 
91:     event Transfer(address indexed curvesTokenSubject, address indexed from, address indexed to, uint256 value);
92:     event WhitelistUpdated(address indexed presale, bytes32 indexed root);
93:     event TokenDeployed(address indexed curvesTokenSubject, address indexed erc20token, string name, string symbol);
94: 
96:     mapping(address => mapping(address => uint256)) public curvesTokenBalance;
97: 
99:     mapping(address => uint256) public curvesTokenSupply;
100: 
101:     mapping(address => address[]) private ownedCurvesTokenSubjects;
102: 
103:     modifier onlyTokenSubject(address curvesTokenSubject) {
104:         if (curvesTokenSubject != msg.sender) revert UnauthorizedCurvesTokenSubject();
105:         _;
106:     }
107: 
108:     constructor(address curvesERC20Factory_, address feeRedistributor_) Security() {
109:         curvesERC20Factory = curvesERC20Factory_;
110:         feeRedistributor = FeeSplitter(payable(feeRedistributor_));
111:     }
112: 
113:     function setFeeRedistributor(address feeRedistributor_) external onlyOwner {
114:         feeRedistributor = FeeSplitter(payable(feeRedistributor_));
115:     }
116: 
117:     function setMaxFeePercent(uint256 maxFeePercent_) external onlyManager {
118:         if (
119:             feesEconomics.protocolFeePercent +
120:                 feesEconomics.subjectFeePercent +
121:                 feesEconomics.referralFeePercent +
122:                 feesEconomics.holdersFeePercent >
123:             maxFeePercent_
124:         ) revert InvalidFeeDefinition();
125:         feesEconomics.maxFeePercent = maxFeePercent_;
126:     }
127: 
128:     function setProtocolFeePercent(uint256 protocolFeePercent_, address protocolFeeDestination_) external onlyOwner {
129:         if (
130:             protocolFeePercent_ +
131:                 feesEconomics.subjectFeePercent +
132:                 feesEconomics.referralFeePercent +
133:                 feesEconomics.holdersFeePercent >
134:             feesEconomics.maxFeePercent ||
135:             protocolFeeDestination_ == address(0)
136:         ) revert InvalidFeeDefinition();
137:         feesEconomics.protocolFeePercent = protocolFeePercent_;
138:         feesEconomics.protocolFeeDestination = protocolFeeDestination_;
139:     }
140: 
141:     function setExternalFeePercent(
142:         uint256 subjectFeePercent_,
143:         uint256 referralFeePercent_,
144:         uint256 holdersFeePercent_
145:     ) external onlyManager {
146:         if (
147:             feesEconomics.protocolFeePercent + subjectFeePercent_ + referralFeePercent_ + holdersFeePercent_ >
148:             feesEconomics.maxFeePercent
149:         ) revert InvalidFeeDefinition();
150:         feesEconomics.subjectFeePercent = subjectFeePercent_;
151:         feesEconomics.referralFeePercent = referralFeePercent_;
152:         feesEconomics.holdersFeePercent = holdersFeePercent_;
153:     }
154: 
155:     function setReferralFeeDestination(
156:         address curvesTokenSubject,
157:         address referralFeeDestination_
158:     ) public onlyTokenSubject(curvesTokenSubject) {
159:         referralFeeDestination[curvesTokenSubject] = referralFeeDestination_;
160:     }
161: 
162:     function setERC20Factory(address factory_) external onlyOwner {
163:         curvesERC20Factory = factory_;
164:     }
165: 
166:     function getFees(
167:         uint256 price
168:     )
169:         public
170:         view
171:         returns (uint256 protocolFee, uint256 subjectFee, uint256 referralFee, uint256 holdersFee, uint256 totalFee)
172:     {
173:         protocolFee = (price * feesEconomics.protocolFeePercent) / 1 ether;
174:         subjectFee = (price * feesEconomics.subjectFeePercent) / 1 ether;
175:         referralFee = (price * feesEconomics.referralFeePercent) / 1 ether;
176:         holdersFee = (price * feesEconomics.holdersFeePercent) / 1 ether;
177:         totalFee = protocolFee + subjectFee + referralFee + holdersFee;
178:     }
179: 
180:     function getPrice(uint256 supply, uint256 amount) public pure returns (uint256) {
181:         uint256 sum1 = supply == 0 ? 0 : ((supply - 1) * (supply) * (2 * (supply - 1) + 1)) / 6;
182:         uint256 sum2 = supply == 0 && amount == 1
183:             ? 0
184:             : ((supply - 1 + amount) * (supply + amount) * (2 * (supply - 1 + amount) + 1)) / 6;
185:         uint256 summation = sum2 - sum1;
186:         return (summation * 1 ether) / 16000;
187:     }
188: 
189:     function getBuyPrice(address curvesTokenSubject, uint256 amount) public view returns (uint256) {
190:         return getPrice(curvesTokenSupply[curvesTokenSubject], amount);
191:     }
192: 
193:     function getSellPrice(address curvesTokenSubject, uint256 amount) public view returns (uint256) {
194:         return getPrice(curvesTokenSupply[curvesTokenSubject] - amount, amount);
195:     }
196: 
197:     function getBuyPriceAfterFee(address curvesTokenSubject, uint256 amount) public view returns (uint256) {
198:         uint256 price = getBuyPrice(curvesTokenSubject, amount);
199:         (, , , , uint256 totalFee) = getFees(price);
200: 
201:         return price + totalFee;
202:     }
203: 
204:     function getSellPriceAfterFee(address curvesTokenSubject, uint256 amount) public view returns (uint256) {
205:         uint256 price = getSellPrice(curvesTokenSubject, amount);
206:         (, , , , uint256 totalFee) = getFees(price);
207: 
208:         return price - totalFee;
209:     }
210: 
211:     function buyCurvesToken(address curvesTokenSubject, uint256 amount) public payable {
212:         uint256 startTime = presalesMeta[curvesTokenSubject].startTime;
213:         if (startTime != 0 && startTime >= block.timestamp) revert SaleNotOpen();
214: 
215:         _buyCurvesToken(curvesTokenSubject, amount);
216:     }
217: 
218:     function _transferFees(
219:         address curvesTokenSubject,
220:         bool isBuy,
221:         uint256 price,
222:         uint256 amount,
223:         uint256 supply
224:     ) internal {
225:         (uint256 protocolFee, uint256 subjectFee, uint256 referralFee, uint256 holderFee, ) = getFees(price);
226:         {
227:             bool referralDefined = referralFeeDestination[curvesTokenSubject] != address(0);
228:             {
229:                 address firstDestination = isBuy ? feesEconomics.protocolFeeDestination : msg.sender;
230:                 uint256 buyValue = referralDefined ? protocolFee : protocolFee + referralFee;
231:                 uint256 sellValue = price - protocolFee - subjectFee - referralFee - holderFee;
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}("");
233:                 if (!success1) revert CannotSendFunds();
234:             }
235:             {
236:                 (bool success2, ) = curvesTokenSubject.call{value: subjectFee}("");
237:                 if (!success2) revert CannotSendFunds();
238:             }
239:             {
240:                 (bool success3, ) = referralDefined
241:                     ? referralFeeDestination[curvesTokenSubject].call{value: referralFee}("")
242:                     : (true, bytes(""));
243:                 if (!success3) revert CannotSendFunds();
244:             }
245: 
246:             if (feesEconomics.holdersFeePercent > 0 && address(feeRedistributor) != address(0)) {
247:                 feeRedistributor.onBalanceChange(curvesTokenSubject, msg.sender);
248:                 feeRedistributor.addFees{value: holderFee}(curvesTokenSubject);
249:             }
250:         }
251:         emit Trade(
252:             msg.sender,
253:             curvesTokenSubject,
254:             isBuy,
255:             amount,
256:             price,
257:             protocolFee,
258:             subjectFee,
259:             isBuy ? supply + amount : supply - amount
260:         );
261:     }
262: 
263:     function _buyCurvesToken(address curvesTokenSubject, uint256 amount) internal {
264:         uint256 supply = curvesTokenSupply[curvesTokenSubject];
265:         if (!(supply > 0 || curvesTokenSubject == msg.sender)) revert UnauthorizedCurvesTokenSubject();
266: 
267:         uint256 price = getPrice(supply, amount);
268:         (, , , , uint256 totalFee) = getFees(price);
269: 
270:         if (msg.value < price + totalFee) revert InsufficientPayment();
271: 
272:         curvesTokenBalance[curvesTokenSubject][msg.sender] += amount;
273:         curvesTokenSupply[curvesTokenSubject] = supply + amount;
274:         _transferFees(curvesTokenSubject, true, price, amount, supply);
275: 
276:         
277:         if (curvesTokenBalance[curvesTokenSubject][msg.sender] - amount == 0) {
278:             _addOwnedCurvesTokenSubject(msg.sender, curvesTokenSubject);
279:         }
280:     }
281: 
282:     function sellCurvesToken(address curvesTokenSubject, uint256 amount) public {
283:         uint256 supply = curvesTokenSupply[curvesTokenSubject];
284:         if (supply <= amount) revert LastTokenCannotBeSold();
285:         if (curvesTokenBalance[curvesTokenSubject][msg.sender] < amount) revert InsufficientBalance();
286: 
287:         uint256 price = getPrice(supply - amount, amount);
288: 
289:         curvesTokenBalance[curvesTokenSubject][msg.sender] -= amount;
290:         curvesTokenSupply[curvesTokenSubject] = supply - amount;
291: 
292:         _transferFees(curvesTokenSubject, false, price, amount, supply);
293:     }
294: 
296:     function transferCurvesToken(address curvesTokenSubject, address to, uint256 amount) external {
297:         if (to == address(this)) revert ContractCannotReceiveTransfer();
298:         _transfer(curvesTokenSubject, msg.sender, to, amount);
299:     }
300: 
302:     function transferAllCurvesTokens(address to) external {
303:         if (to == address(this)) revert ContractCannotReceiveTransfer();
304:         address[] storage subjects = ownedCurvesTokenSubjects[msg.sender];
305:         for (uint256 i = 0; i < subjects.length; i++) { // <= FOUND
306:             uint256 amount = curvesTokenBalance[subjects[i]][msg.sender];
307:             if (amount > 0) {
308:                 _transfer(subjects[i], msg.sender, to, amount);
309:             }
310:         }
311:     }
312: 
313:     function _transfer(address curvesTokenSubject, address from, address to, uint256 amount) internal {
314:         if (amount > curvesTokenBalance[curvesTokenSubject][from]) revert InsufficientBalance();
315: 
316:         
317:         if (from != to) {
318:             _addOwnedCurvesTokenSubject(to, curvesTokenSubject);
319:         }
320: 
321:         curvesTokenBalance[curvesTokenSubject][from] = curvesTokenBalance[curvesTokenSubject][from] - amount;
322:         curvesTokenBalance[curvesTokenSubject][to] = curvesTokenBalance[curvesTokenSubject][to] + amount;
323: 
324:         emit Transfer(curvesTokenSubject, from, to, amount);
325:     }
326: 
328:     function _addOwnedCurvesTokenSubject(address owner_, address curvesTokenSubject) internal {
329:         address[] storage subjects = ownedCurvesTokenSubjects[owner_];
330:         for (uint256 i = 0; i < subjects.length; i++) { // <= FOUND
331:             if (subjects[i] == curvesTokenSubject) {
332:                 return;
333:             }
334:         }
335:         subjects.push(curvesTokenSubject);
336:     }
337: 
338:     function _deployERC20(
339:         address curvesTokenSubject,
340:         string memory name,
341:         string memory symbol
342:     ) internal returns (address) {
343:         
344:         if (keccak256(bytes(symbol)) == keccak256(bytes(DEFAULT_SYMBOL))) {
345:             _curvesTokenCounter += 1; // <= FOUND
346:             name = string(abi.encodePacked(name, " ", Strings.toString(_curvesTokenCounter)));
347:             symbol = string(abi.encodePacked(symbol, Strings.toString(_curvesTokenCounter)));
348:         }
349: 
350:         if (symbolToSubject[symbol] != address(0)) revert InvalidERC20Metadata();
351: 
352:         address tokenContract = CurvesERC20Factory(curvesERC20Factory).deploy(name, symbol, address(this));
353: 
354:         externalCurvesTokens[curvesTokenSubject].token = tokenContract;
355:         externalCurvesTokens[curvesTokenSubject].name = name;
356:         externalCurvesTokens[curvesTokenSubject].symbol = symbol;
357:         externalCurvesToSubject[tokenContract] = curvesTokenSubject;
358:         symbolToSubject[symbol] = curvesTokenSubject;
359: 
360:         emit TokenDeployed(curvesTokenSubject, tokenContract, name, symbol);
361:         return address(tokenContract);
362:     }
363: 
364:     function buyCurvesTokenWithName(
365:         address curvesTokenSubject,
366:         uint256 amount,
367:         string memory name,
368:         string memory symbol
369:     ) public payable {
370:         uint256 supply = curvesTokenSupply[curvesTokenSubject];
371:         if (supply != 0) revert CurveAlreadyExists();
372: 
373:         _buyCurvesToken(curvesTokenSubject, amount);
374:         _mint(curvesTokenSubject, name, symbol);
375:     }
376: 
377:     function buyCurvesTokenForPresale(
378:         address curvesTokenSubject,
379:         uint256 amount,
380:         uint256 startTime,
381:         bytes32 merkleRoot,
382:         uint256 maxBuy
383:     ) public payable onlyTokenSubject(curvesTokenSubject) {
384:         if (startTime <= block.timestamp) revert InvalidPresaleStartTime();
385:         uint256 supply = curvesTokenSupply[curvesTokenSubject];
386:         if (supply != 0) revert CurveAlreadyExists();
387:         presalesMeta[curvesTokenSubject].startTime = startTime;
388:         presalesMeta[curvesTokenSubject].merkleRoot = merkleRoot;
389:         presalesMeta[curvesTokenSubject].maxBuy = (maxBuy == 0 ? type(uint256).max : maxBuy);
390: 
391:         _buyCurvesToken(curvesTokenSubject, amount);
392:     }
393: 
394:     function setWhitelist(bytes32 merkleRoot) external {
395:         uint256 supply = curvesTokenSupply[msg.sender];
396:         if (supply > 1) revert CurveAlreadyExists();
397: 
398:         if (presalesMeta[msg.sender].merkleRoot != merkleRoot) {
399:             presalesMeta[msg.sender].merkleRoot = merkleRoot;

```


*GitHub* : [41](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L41-L345)
### [N-69]<a name="n-69"></a> Using constants directly, rather than caching the value, saves gas
In smart contract development, especially within Ethereum, gas optimization is crucial. Utilizing constants directly, instead of assigning them to a variable (caching) before use, can save gas as reading from a constant is cheaper than reading from storage or a variable. Constants in Solidity are replaced by their actual value in the EVM bytecode, eliminating the need for a SLOAD operation, which costs more gas. Hence, if a value will not change throughout the contract's life, defining it as a constant and using it directly in expressions/functions can be a gas-efficient practice.

*There are 2 instance(s) of this issue:*

```solidity
439:     function mint(address curvesTokenSubject) external onlyTokenSubject(curvesTokenSubject) {
440:         if (
441:             keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].name)) ==
442:             keccak256(abi.encodePacked("")) ||
443:             keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].symbol)) ==
444:             keccak256(abi.encodePacked(""))
445:         ) {
446:             externalCurvesTokens[curvesTokenSubject].name = DEFAULT_NAME; // <= FOUND
447:             externalCurvesTokens[curvesTokenSubject].symbol = DEFAULT_SYMBOL; // <= FOUND
448:         }
449:         _mint(
450:             curvesTokenSubject,
451:             externalCurvesTokens[curvesTokenSubject].name,
452:             externalCurvesTokens[curvesTokenSubject].symbol
453:         );
454:     }

```


*GitHub* : [439](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L439-L447)

```solidity
465:     function withdraw(address curvesTokenSubject, uint256 amount) public {
466:         if (amount > curvesTokenBalance[curvesTokenSubject][msg.sender]) revert InsufficientBalance();
467: 
468:         address externalToken = externalCurvesTokens[curvesTokenSubject].token;
469:         if (externalToken == address(0)) {
470:             if (
471:                 keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].name)) ==
472:                 keccak256(abi.encodePacked("")) ||
473:                 keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].symbol)) ==
474:                 keccak256(abi.encodePacked(""))
475:             ) {
476:                 externalCurvesTokens[curvesTokenSubject].name = DEFAULT_NAME; // <= FOUND
477:                 externalCurvesTokens[curvesTokenSubject].symbol = DEFAULT_SYMBOL; // <= FOUND
478:             }
479:             _deployERC20(
480:                 curvesTokenSubject,
481:                 externalCurvesTokens[curvesTokenSubject].name,
482:                 externalCurvesTokens[curvesTokenSubject].symbol
483:             );
484:             externalToken = externalCurvesTokens[curvesTokenSubject].token;
485:         }
486:         _transfer(curvesTokenSubject, msg.sender, address(this), amount);
487:         CurvesERC20(externalToken).mint(msg.sender, amount * 1 ether);
488:     }

```


*GitHub* : [465](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L465-L477)
### [N-70]<a name="n-70"></a> Public variable declarations should have NatSpec descriptions
Public variable declarations in smart contracts should ideally be accompanied by NatSpec comments to enhance code readability and provide clear documentation. NatSpec (Natural Language Specification) is a standard for writing comments in Ethereum smart contracts that can generate user-friendly documentation, improving the transparency of the contract's functionality. This is particularly crucial for public variables, as they are accessible externally, and understanding their role and impact is vital for both developers and users interacting with the contract

*There are 1 instance(s) of this issue:*

```solidity
42:     address public curvesERC20Factory; // <= FOUND
43:     FeeSplitter public feeRedistributor; // <= FOUND
44:     string public constant DEFAULT_NAME = "Curves"; // <= FOUND

```


*GitHub* : [42](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L42-L44)
### [N-71]<a name="n-71"></a> Use += for mappings
Using `+=` for mappings simplifies code and can potentially save gas. When you need to increment a value within a mapping, writing `mappingA[xyz] = mappingA[xyz] + 1;` can be made more concise with `mappingA[xyz] += 1;`.

**Resolution**: To enhance code clarity and potentially reduce gas costs, replace explicit addition assignments with the `+=` operator when dealing with mappings. This not only shortens the code but also makes it easier to read and understand. Employ tools like linters or static analysis to systematically identify and correct such instances, ensuring optimized and cleaner code throughout your smart contract.

*There are 1 instance(s) of this issue:*

```solidity
322:         curvesTokenBalance[curvesTokenSubject][to] = curvesTokenBalance[curvesTokenSubject][to] + amount; // <= FOUND

```


*GitHub* : [322](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L322-L322)
### [N-72]<a name="n-72"></a> Use -= for mappings
Using -= for mappings instead of explicitly subtracting a value ensures cleaner code and potential gas savings. When manipulating numerical values within a mapping, it's more gas-efficient and clearer to use compound assignment operators like -=. For instance, instead of writing mappingA[xyz] = mappingA[xyz] - 1;, you can simply use mappingA[xyz] -= 1;.

Resolution: Replace explicit subtraction assignments with the -= operator for mappings. This not only makes the code more concise and readable but also potentially reduces gas costs. Utilize linters or static analysis tools to identify instances where the code can be optimized in this manner, ensuring consistency and efficiency across the codebase.

*There are 1 instance(s) of this issue:*

```solidity
321: 
322:         curvesTokenBalance[curvesTokenSubject][from] = curvesTokenBalance[curvesTokenSubject][from] - amount; // <= FOUND

```


*GitHub* : [321](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L321-L322)
### [N-73]<a name="n-73"></a> Use the Modern Upgradeable Contract Paradigm
Modern smart contract development often employs upgradeable contract structures, utilizing proxy patterns like OpenZeppelin’s Upgradeable Contracts. This paradigm separates logic and state, allowing developers to amend and enhance the contract's functionality without altering its state or the deployed contract address. Transitioning to this approach enhances long-term maintainability.

**Resolution**: Adopt a well-established proxy pattern for upgradeability, ensuring proper initialization and employing transparent proxies to mitigate potential risks. Embrace comprehensive testing and audit practices, particularly when updating contract logic, to ensure state consistency and security are preserved across upgrades. This ensures your contract remains robust and adaptable to future requirements.

*There are 5 instance(s) of this issue:*

```solidity
41: contract Curves is CurvesErrors, Security 

```


*GitHub* : [41](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L41-L41)

```solidity
9: contract FeeSplitter is Security 

```


*GitHub* : [9](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L9-L9)

```solidity
4: contract Security 

```


*GitHub* : [4](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L4-L4)

```solidity
7: contract CurvesERC20 is ERC20, Ownable 

```


*GitHub* : [7](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L7-L7)

```solidity
6: contract CurvesERC20Factory 

```


*GitHub* : [6](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20Factory.sol#L6-L6)
### [N-74]<a name="n-74"></a> Upgrade openzeppelin to the Latest Version - 5.0.0

*There are 5 instance(s) of this issue:*

```solidity
4: import "@openzeppelin/contracts/utils/Strings.sol"; // <= FOUND

```


*GitHub* : [4](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L4-L4)

```solidity
5: import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol"; // <= FOUND

```


*GitHub* : [5](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L5-L5)

```solidity
7: import "@openzeppelin/contracts/token/ERC20/IERC20.sol"; // <= FOUND

```


*GitHub* : [7](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L7-L7)

```solidity
4: import "@openzeppelin/contracts/access/Ownable.sol"; // <= FOUND

```


*GitHub* : [4](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L4-L4)

```solidity
5: import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; // <= FOUND

```


*GitHub* : [5](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L5-L5)
### [N-75]<a name="n-75"></a> Use transfer libraries instead of low level calls
Using transfer libraries like OpenZeppelin's Address.sendValue is preferred over low-level calls for transferring Ether in Solidity. These libraries provide clearer, more semantically meaningful methods compared to low-level call() functions. They encapsulate best practices for error handling and gas management, enhancing the security and readability of your code. Low-level calls lack these built-in safety checks and can be more error-prone, especially when dealing with Ether transfers.

*There are 3 instance(s) of this issue:*

```solidity
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}(""); // <= FOUND

```


*GitHub* : [232](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L232-L232)

```solidity
236:                 (bool success2, ) = curvesTokenSubject.call{value: subjectFee}(""); // <= FOUND

```


*GitHub* : [236](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L236-L236)

```solidity
240:                 (bool success3, ) = referralDefined
241:                     ? referralFeeDestination[curvesTokenSubject].call{value: referralFee}("") // <= FOUND

```


*GitHub* : [240](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L240-L241)
### [N-76]<a name="n-76"></a> Use a struct to encapsulate multiple function parameters
Using a struct to encapsulate multiple parameters in Solidity functions can significantly enhance code readability and maintainability. Instead of passing a long list of arguments, which can be error-prone and hard to manage, a struct allows grouping related data into a single, coherent entity. This approach simplifies function signatures and makes the code more organized. It also enhances code clarity, as developers can easily understand the relationship between the parameters. Moreover, it aids in future code modifications and expansions, as adding or modifying a parameter only requires changes in the struct definition, rather than in every function that uses these parameters.

*There are 2 instance(s) of this issue:*

```solidity
218:     function _transferFees(
219:         address curvesTokenSubject, // <= FOUND
220:         bool isBuy, // <= FOUND
221:         uint256 price, // <= FOUND
222:         uint256 amount, // <= FOUND
223:         uint256 supply
224:     ) internal 

```


*GitHub* : [219](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L219-L222)

```solidity
377:     function buyCurvesTokenForPresale(
378:         address curvesTokenSubject, // <= FOUND
379:         uint256 amount, // <= FOUND
380:         uint256 startTime, // <= FOUND
381:         bytes32 merkleRoot, // <= FOUND
382:         uint256 maxBuy
383:     ) public payable onlyTokenSubject(curvesTokenSubject) 

```


*GitHub* : [378](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L378-L381)
### [N-77]<a name="n-77"></a> Returning a struct instead of returning many variables is better
Returning a struct from a Solidity function instead of multiple variables offers several benefits, enhancing code clarity and efficiency. Structs allow for the grouping of related data into a single entity, making the function's return values more organized and easier to manage. This approach significantly improves readability, as it encapsulates the data logically, helping developers quickly understand the returned information's structure. Additionally, it simplifies function interfaces, reducing the potential for errors when handling multiple return values. By using structs, you can also easily extend or modify the returned data without altering the function signature, facilitating smoother updates and maintenance of your smart contract code.

*There are 1 instance(s) of this issue:*

```solidity
166:     function getFees(
167:         uint256 price
168:     )
169:         public
170:         view
171:         returns (uint256 protocolFee, uint256 subjectFee, uint256 referralFee, uint256 holdersFee, uint256 totalFee) // <= FOUND
172:     

```


*GitHub* : [171](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L171-L171)
### [N-78]<a name="n-78"></a> Using delete instead of setting mapping to 0 saves gas

*There are 2 instance(s) of this issue:*

```solidity
84:         tokensData[token].unclaimedFees[msg.sender] = 0; // <= FOUND

```


*GitHub* : [84](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L84-L84)

```solidity
110:                 tokensData[token].unclaimedFees[msg.sender] = 0; // <= FOUND

```


*GitHub* : [110](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L110-L110)
### [N-79]<a name="n-79"></a> Consider using ERC20Capped

*There are 3 instance(s) of this issue:*

```solidity
439:     function mint(address curvesTokenSubject) external onlyTokenSubject(curvesTokenSubject) { // <= FOUND
440:         if (
441:             keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].name)) ==
442:             keccak256(abi.encodePacked("")) ||
443:             keccak256(abi.encodePacked(externalCurvesTokens[curvesTokenSubject].symbol)) ==
444:             keccak256(abi.encodePacked(""))
445:         ) {
446:             externalCurvesTokens[curvesTokenSubject].name = DEFAULT_NAME;
447:             externalCurvesTokens[curvesTokenSubject].symbol = DEFAULT_SYMBOL;
448:         }
449:         _mint( // <= FOUND
450:             curvesTokenSubject,
451:             externalCurvesTokens[curvesTokenSubject].name,
452:             externalCurvesTokens[curvesTokenSubject].symbol
453:         );
454:     }

```


*GitHub* : [439](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L439-L449)

```solidity
456:     function _mint( // <= FOUND
457:         address curvesTokenSubject,
458:         string memory name,
459:         string memory symbol
460:     ) internal onlyTokenSubject(curvesTokenSubject) {
461:         if (externalCurvesTokens[curvesTokenSubject].token != address(0)) revert ERC20TokenAlreadyMinted();
462:         _deployERC20(curvesTokenSubject, name, symbol);
463:     }

```


*GitHub* : [456](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L456-L456)

```solidity
12:     function mint(address to, uint256 amount) public onlyOwner { // <= FOUND
13:         _mint(to, amount); // <= FOUND
14:     }

```


*GitHub* : [12](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L12-L13)
### [N-80]<a name="n-80"></a> Consider using a format prettier or forge fmt
Some comments use // X and others //X Amend comments to use only use // X or //X consistently such style inconsistencies can be resolved by running the project through a format prettier or by using forge fmt.

*There are 2 instance(s) of this issue:*

```solidity
44: //@dev: this is the amount of tokens that are not locked in the contract. The locked tokens are in the ERC20 contract

```


*GitHub* : [44](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L44-L44)

```solidity
102: //@dev: this may fail if the the list is long. Get first the list with getUserTokens to estimate and prepare the batch

```


*GitHub* : [102](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L102-L102)
### [N-81]<a name="n-81"></a> package.json name variable should only consist of lowercase letters and underscores

*There are 1 instance(s) of this issue:*

```solidity
1: {
2:   "name": "@curves/contracts", // <= FOUND
3:   "private": true,
4:   "packageManager": "yarn@4.0.0-rc.51",
5:   "version": "0.0.0",
6:   "scripts": {
7:     "compile": "npx hardhat compile",
8:     "deploy:local": "npx cross-env EXECUTE_PROGRAMMATICALLY=true yarn hardhat run scripts/deploy-local.ts --network localhost",
9:     "dev": "npx hardhat node",
10:     "entr-warning": "echo You need to install `entr` to run this command",
11:     "generate:abi": "rm -fr ./contracts/abi/* && cp -R ./artifacts/contracts/**/*.json ./contracts/abi/ && cp -R ./artifacts/contracts/**/**/*.json ./contracts/abi/ && rm ./contracts/abi/*dbg*",
12:     "generate:typechain": "rm -rf ./contracts/types && typechain --target ethers-v5 --out-dir ./contracts/types ./contracts/abi/**/*.json",
13:     "lint": "npx eslint . --ext .js,.ts",
14:     "lint:fix": "npx eslint . --ext .js,.ts,.json --fix",
15:     "test": "npx hardhat test",
16:     "test:coverage": "npx hardhat coverage",
17:     "test:watch": "yarn entr-warning && find contracts test -iname '*.sol' -o -iname '*.spec.*' -o -iname '*.test.*' | entr -cnr npx hardhat test",
18:     "tsc:watch": "tsc --watch"
19:   },
20:   "devDependencies": {
21:     "@ethereumjs/vm": "^5.5.2",
22:     "@ethersproject/abi": "^5.4.3",
23:     "@ethersproject/bytes": "^5.4.3",
24:     "@ethersproject/contracts": "^5.4.3",
25:     "@ethersproject/providers": "^5.4.3",
26:     "@ethersproject/strings": "^5.4.3",
27:     "@ethersproject/units": "^5.4.3",
28:     "@nomiclabs/hardhat-ethers": "^2.0.2",
29:     "@nomiclabs/hardhat-etherscan": "3.1.7",
30:     "@nomiclabs/hardhat-waffle": "2.0.1",
31:     "@openzeppelin/contracts": "4.9.3",
32:     "@openzeppelin/hardhat-upgrades": "^1.7.0-rc.0",
33:     "@typechain/ethers-v5": "9.0.0",
34:     "@typechain/hardhat": "4.0.0",
35:     "@types/chai": "4.3.0",
36:     "@types/mocha": "9.0.0",
37:     "@types/node": "17.0.8",
38:     "@typescript-eslint/eslint-plugin": "^5.33.1",
39:     "@typescript-eslint/parser": "^5.33.1",
40:     "chai": "^4.3.6",
41:     "chai-bignumber": "^3.0.0",
42:     "dotenv": "12.0.3",
43:     "eslint": "^8.13.0",
44:     "eslint-config-prettier": "^8.5.0",
45:     "eslint-config-standard": "^17.0.0",
46:     "eslint-import-resolver-typescript": "^3.5.0",
47:     "eslint-plugin-import": "^2.26.0",
48:     "eslint-plugin-node": "^11.1.0",
49:     "eslint-plugin-prettier": "^5.0.0",
50:     "eslint-plugin-promise": "^6.0.0",
51:     "eslint-plugin-simple-import-sort": "7.0.0",

```


*GitHub* : [1](https://github.com/code-423n4/2024-01-curves/blob/main/package.json#L1-L2)
### [N-82]<a name="n-82"></a> package.json version should start at 0.1.0 or 1.0.0 not 0.0.1 or 0.0.0

*There are 1 instance(s) of this issue:*

```solidity
1: {
2:   "name": "@curves/contracts",
3:   "private": true,
4:   "packageManager": "yarn@4.0.0-rc.51",
5:   "version": "0.0.0", // <= FOUND
6:   "scripts": {
7:     "compile": "npx hardhat compile",
8:     "deploy:local": "npx cross-env EXECUTE_PROGRAMMATICALLY=true yarn hardhat run scripts/deploy-local.ts --network localhost",
9:     "dev": "npx hardhat node",
10:     "entr-warning": "echo You need to install `entr` to run this command",
11:     "generate:abi": "rm -fr ./contracts/abi/* && cp -R ./artifacts/contracts/**/*.json ./contracts/abi/ && cp -R ./artifacts/contracts/**/**/*.json ./contracts/abi/ && rm ./contracts/abi/*dbg*",
12:     "generate:typechain": "rm -rf ./contracts/types && typechain --target ethers-v5 --out-dir ./contracts/types ./contracts/abi/**/*.json",
13:     "lint": "npx eslint . --ext .js,.ts",
14:     "lint:fix": "npx eslint . --ext .js,.ts,.json --fix",
15:     "test": "npx hardhat test",
16:     "test:coverage": "npx hardhat coverage",
17:     "test:watch": "yarn entr-warning && find contracts test -iname '*.sol' -o -iname '*.spec.*' -o -iname '*.test.*' | entr -cnr npx hardhat test",
18:     "tsc:watch": "tsc --watch"
19:   },
20:   "devDependencies": {
21:     "@ethereumjs/vm": "^5.5.2",
22:     "@ethersproject/abi": "^5.4.3",
23:     "@ethersproject/bytes": "^5.4.3",
24:     "@ethersproject/contracts": "^5.4.3",
25:     "@ethersproject/providers": "^5.4.3",
26:     "@ethersproject/strings": "^5.4.3",
27:     "@ethersproject/units": "^5.4.3",
28:     "@nomiclabs/hardhat-ethers": "^2.0.2",
29:     "@nomiclabs/hardhat-etherscan": "3.1.7",
30:     "@nomiclabs/hardhat-waffle": "2.0.1",
31:     "@openzeppelin/contracts": "4.9.3",
32:     "@openzeppelin/hardhat-upgrades": "^1.7.0-rc.0",
33:     "@typechain/ethers-v5": "9.0.0",
34:     "@typechain/hardhat": "4.0.0",
35:     "@types/chai": "4.3.0",
36:     "@types/mocha": "9.0.0",
37:     "@types/node": "17.0.8",
38:     "@typescript-eslint/eslint-plugin": "^5.33.1",
39:     "@typescript-eslint/parser": "^5.33.1",
40:     "chai": "^4.3.6",
41:     "chai-bignumber": "^3.0.0",
42:     "dotenv": "12.0.3",
43:     "eslint": "^8.13.0",
44:     "eslint-config-prettier": "^8.5.0",
45:     "eslint-config-standard": "^17.0.0",
46:     "eslint-import-resolver-typescript": "^3.5.0",
47:     "eslint-plugin-import": "^2.26.0",
48:     "eslint-plugin-node": "^11.1.0",
49:     "eslint-plugin-prettier": "^5.0.0",
50:     "eslint-plugin-promise": "^6.0.0",
51:     "eslint-plugin-simple-import-sort": "7.0.0",
52:     "eslint-plugin-sort-keys-fix": "1.1.2",
53:     "eslint-plugin-typescript-sort-keys": "2.1.0",
54:     "ethereum-waffle": "^3.4.4",

```


*GitHub* : [1](https://github.com/code-423n4/2024-01-curves/blob/main/package.json#L1-L5)
### [N-83]<a name="n-83"></a> Avoid declaring variables with the names of defined functions within the project
Having such variables can create confusion in both developers and in users of the project. Consider renaming these variables to improve code clarity.

*There are 1 instance(s) of this issue:*

```solidity
90:         uint256 totalSupply_ = totalSupply(token); // <= FOUND

```


*GitHub* : [90](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L90-L90)
### [N-84]<a name="n-84"></a> All verbatim blocks are considered identical by deduplicator and can incorrectly be unified
The Solidity Team reported a bug on October 24, 2023, affecting Yul code using the verbatim builtin, specifically in the Block Deduplicator optimizer step. This bug, present since Solidity version 0.8.5, caused incorrect deduplication of verbatim assembly items surrounded by identical opcodes, considering them identical regardless of their data. The bug was confined to pure Yul compilation with optimization enabled and was unlikely to be exploited as an attack vector. The conditions triggering the bug were very specific, and its occurrence was deemed to have a low likelihood. The bug was rated with an overall low score due to these factors.

*There are 2 instance(s) of this issue:*

```solidity
2: pragma solidity 0.8.7; // <= FOUND

```


*GitHub* : [2](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L2-L2)

```solidity
2: pragma solidity ^0.8.7; // <= FOUND

```


*GitHub* : [2](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L2-L2)
### [N-85]<a name="n-85"></a> Public variable declarations should have NatSpec descriptions
Public variable declarations in smart contracts should ideally be accompanied by NatSpec comments to enhance code readability and provide clear documentation. NatSpec (Natural Language Specification) is a standard for writing comments in Ethereum smart contracts that can generate user-friendly documentation, improving the transparency of the contract's functionality. This is particularly crucial for public variables, as they are accessible externally, and understanding their role and impact is vital for both developers and users interacting with the contract

*There are 1 instance(s) of this issue:*

```solidity
42:     address public curvesERC20Factory; // <= FOUND
43:     FeeSplitter public feeRedistributor; // <= FOUND
44:     string public constant DEFAULT_NAME = "Curves"; // <= FOUND

```


*GitHub* : [42](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L42-L44)
### [N-86]<a name="n-86"></a> Natspec @author is missing from contract

*There are 5 instance(s) of this issue:*

```solidity
41: contract Curves is CurvesErrors, Security 

```


*GitHub* : [41](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L41-L41)

```solidity
9: contract FeeSplitter is Security 

```


*GitHub* : [9](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L9-L9)

```solidity
4: contract Security 

```


*GitHub* : [4](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L4-L4)

```solidity
7: contract CurvesERC20 is ERC20, Ownable 

```


*GitHub* : [7](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L7-L7)

```solidity
6: contract CurvesERC20Factory 

```


*GitHub* : [6](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20Factory.sol#L6-L6)
### [N-87]<a name="n-87"></a> Natspec @notice is missing from contract

*There are 5 instance(s) of this issue:*

```solidity
41: contract Curves is CurvesErrors, Security 

```


*GitHub* : [41](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L41-L41)

```solidity
9: contract FeeSplitter is Security 

```


*GitHub* : [9](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L9-L9)

```solidity
4: contract Security 

```


*GitHub* : [4](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L4-L4)

```solidity
7: contract CurvesERC20 is ERC20, Ownable 

```


*GitHub* : [7](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L7-L7)

```solidity
6: contract CurvesERC20Factory 

```


*GitHub* : [6](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20Factory.sol#L6-L6)
### [N-88]<a name="n-88"></a> Natspec @dev is missing from contract

*There are 5 instance(s) of this issue:*

```solidity
41: contract Curves is CurvesErrors, Security 

```


*GitHub* : [41](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L41-L41)

```solidity
9: contract FeeSplitter is Security 

```


*GitHub* : [9](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L9-L9)

```solidity
4: contract Security 

```


*GitHub* : [4](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L4-L4)

```solidity
7: contract CurvesERC20 is ERC20, Ownable 

```


*GitHub* : [7](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L7-L7)

```solidity
6: contract CurvesERC20Factory 

```


*GitHub* : [6](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20Factory.sol#L6-L6)
### [N-89]<a name="n-89"></a> Natspec @title is missing from contract

*There are 5 instance(s) of this issue:*

```solidity
41: contract Curves is CurvesErrors, Security 

```


*GitHub* : [41](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L41-L41)

```solidity
9: contract FeeSplitter is Security 

```


*GitHub* : [9](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L9-L9)

```solidity
4: contract Security 

```


*GitHub* : [4](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L4-L4)

```solidity
7: contract CurvesERC20 is ERC20, Ownable 

```


*GitHub* : [7](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L7-L7)

```solidity
6: contract CurvesERC20Factory 

```


*GitHub* : [6](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20Factory.sol#L6-L6)
### [N-90]<a name="n-90"></a> Natspec @author is missing from interface

*There are 1 instance(s) of this issue:*

```solidity
13: interface CurvesErrors 

```


*GitHub* : [13](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L13-L13)
### [N-91]<a name="n-91"></a> Natspec @title is missing from interface

*There are 1 instance(s) of this issue:*

```solidity
13: interface CurvesErrors 

```


*GitHub* : [13](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L13-L13)
### [N-92]<a name="n-92"></a> Natspec @dev is missing from interface

*There are 1 instance(s) of this issue:*

```solidity
13: interface CurvesErrors 

```


*GitHub* : [13](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L13-L13)
### [N-93]<a name="n-93"></a> Natspec @notice is missing from interface

*There are 1 instance(s) of this issue:*

```solidity
13: interface CurvesErrors 

```


*GitHub* : [13](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L13-L13)
### [N-94]<a name="n-94"></a> Event declarations should have NatSpec descriptions

*There are 2 instance(s) of this issue:*

```solidity
80:     event Trade( // <= FOUND
81:         address trader,
82:         address subject,
83:         bool isBuy,
84:         uint256 tokenAmount,

```


*GitHub* : [80](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L80-L80)

```solidity
91: 
92:     event Transfer(address indexed curvesTokenSubject, address indexed from, address indexed to, uint256 value); // <= FOUND
93:     event WhitelistUpdated(address indexed presale, bytes32 indexed root); // <= FOUND
94:     event TokenDeployed(address indexed curvesTokenSubject, address indexed erc20token, string name, string symbol); // <= FOUND
95: 

```


*GitHub* : [91](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L91-L94)
### [N-95]<a name="n-95"></a> Event declarations should have @dev NatSpec comments

*There are 2 instance(s) of this issue:*

```solidity
80:     event Trade( // <= FOUND
81:         address trader,
82:         address subject,
83:         bool isBuy,
84:         uint256 tokenAmount,

```


*GitHub* : [80](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L80-L80)

```solidity
91: 
92:     event Transfer(address indexed curvesTokenSubject, address indexed from, address indexed to, uint256 value); // <= FOUND
93:     event WhitelistUpdated(address indexed presale, bytes32 indexed root); // <= FOUND
94:     event TokenDeployed(address indexed curvesTokenSubject, address indexed erc20token, string name, string symbol); // <= FOUND
95: 

```


*GitHub* : [91](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L91-L94)
### [N-96]<a name="n-96"></a> Event declarations should have @notice NatSpec comments

*There are 2 instance(s) of this issue:*

```solidity
80:     event Trade( // <= FOUND
81:         address trader,
82:         address subject,
83:         bool isBuy,
84:         uint256 tokenAmount,

```


*GitHub* : [80](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L80-L80)

```solidity
91: 
92:     event Transfer(address indexed curvesTokenSubject, address indexed from, address indexed to, uint256 value); // <= FOUND
93:     event WhitelistUpdated(address indexed presale, bytes32 indexed root); // <= FOUND
94:     event TokenDeployed(address indexed curvesTokenSubject, address indexed erc20token, string name, string symbol); // <= FOUND
95: 

```


*GitHub* : [91](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L91-L94)
### [N-97]<a name="n-97"></a> Event declarations should have @params NatSpec comments

*There are 2 instance(s) of this issue:*

```solidity
80:     event Trade( // <= FOUND
81:         address trader,
82:         address subject,
83:         bool isBuy,
84:         uint256 tokenAmount,

```


*GitHub* : [80](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L80-L80)

```solidity
91: 
92:     event Transfer(address indexed curvesTokenSubject, address indexed from, address indexed to, uint256 value); // <= FOUND
93:     event WhitelistUpdated(address indexed presale, bytes32 indexed root); // <= FOUND
94:     event TokenDeployed(address indexed curvesTokenSubject, address indexed erc20token, string name, string symbol); // <= FOUND
95: 

```


*GitHub* : [91](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L91-L94)
### [N-98]<a name="n-98"></a> Natspec @params comments are missing from modifier

*There are 1 instance(s) of this issue:*

```solidity
103:     modifier onlyTokenSubject(address curvesTokenSubject) 

```


*GitHub* : [103](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L103-L103)
### [N-99]<a name="n-99"></a> Natspec @dev comments are missing from modifier

*There are 3 instance(s) of this issue:*

```solidity
103:     modifier onlyTokenSubject(address curvesTokenSubject) 

```


*GitHub* : [103](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L103-L103)

```solidity
8:     modifier onlyOwner() 

```


*GitHub* : [8](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L8-L8)

```solidity
13:     modifier onlyManager() 

```


*GitHub* : [13](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L13-L13)
### [N-100]<a name="n-100"></a> Natspec @notice comments are missing from modifier

*There are 3 instance(s) of this issue:*

```solidity
103:     modifier onlyTokenSubject(address curvesTokenSubject) 

```


*GitHub* : [103](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L103-L103)

```solidity
8:     modifier onlyOwner() 

```


*GitHub* : [8](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L8-L8)

```solidity
13:     modifier onlyManager() 

```


*GitHub* : [13](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L13-L13)
### [N-101]<a name="n-101"></a> Natspec @params comments are missing from struct

*There are 5 instance(s) of this issue:*

```solidity
49:     struct ExternalTokenMeta {
50:         string name;
51:         string symbol;
52:         address token;
53:     }

```


*GitHub* : [49](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L49-L49)

```solidity
55:     struct PresaleMeta {
56:         uint256 startTime;
57:         bytes32 merkleRoot;
58:         uint256 maxBuy;
59:     }

```


*GitHub* : [55](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L55-L55)

```solidity
68:     struct FeesEconomics {
69:         address protocolFeeDestination;
70:         uint256 protocolFeePercent;
71:         uint256 subjectFeePercent;
72:         uint256 referralFeePercent;
73:         uint256 holdersFeePercent;
74:         uint256 maxFeePercent;
75:     }

```


*GitHub* : [68](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L68-L68)

```solidity
17:     struct TokenData {
18:         uint256 cumulativeFeePerToken;
19:         mapping(address => uint256) userFeeOffset;
20:         mapping(address => uint256) unclaimedFees;
21:     }

```


*GitHub* : [17](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L17-L17)

```solidity
23:     struct UserClaimData {
24:         uint256 claimableFees;
25:         address token;
26:     }

```


*GitHub* : [23](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L23-L23)
### [N-102]<a name="n-102"></a> Natspec @dev comments are missing from struct

*There are 5 instance(s) of this issue:*

```solidity
49:     struct ExternalTokenMeta {
50:         string name;
51:         string symbol;
52:         address token;
53:     }

```


*GitHub* : [49](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L49-L49)

```solidity
55:     struct PresaleMeta {
56:         uint256 startTime;
57:         bytes32 merkleRoot;
58:         uint256 maxBuy;
59:     }

```


*GitHub* : [55](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L55-L55)

```solidity
68:     struct FeesEconomics {
69:         address protocolFeeDestination;
70:         uint256 protocolFeePercent;
71:         uint256 subjectFeePercent;
72:         uint256 referralFeePercent;
73:         uint256 holdersFeePercent;
74:         uint256 maxFeePercent;
75:     }

```


*GitHub* : [68](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L68-L68)

```solidity
17:     struct TokenData {
18:         uint256 cumulativeFeePerToken;
19:         mapping(address => uint256) userFeeOffset;
20:         mapping(address => uint256) unclaimedFees;
21:     }

```


*GitHub* : [17](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L17-L17)

```solidity
23:     struct UserClaimData {
24:         uint256 claimableFees;
25:         address token;
26:     }

```


*GitHub* : [23](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L23-L23)
### [N-103]<a name="n-103"></a> Natspec @notice comments are missing from struct

*There are 5 instance(s) of this issue:*

```solidity
49:     struct ExternalTokenMeta {
50:         string name;
51:         string symbol;
52:         address token;
53:     }

```


*GitHub* : [49](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L49-L49)

```solidity
55:     struct PresaleMeta {
56:         uint256 startTime;
57:         bytes32 merkleRoot;
58:         uint256 maxBuy;
59:     }

```


*GitHub* : [55](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L55-L55)

```solidity
68:     struct FeesEconomics {
69:         address protocolFeeDestination;
70:         uint256 protocolFeePercent;
71:         uint256 subjectFeePercent;
72:         uint256 referralFeePercent;
73:         uint256 holdersFeePercent;
74:         uint256 maxFeePercent;
75:     }

```


*GitHub* : [68](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L68-L68)

```solidity
17:     struct TokenData {
18:         uint256 cumulativeFeePerToken;
19:         mapping(address => uint256) userFeeOffset;
20:         mapping(address => uint256) unclaimedFees;
21:     }

```


*GitHub* : [17](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L17-L17)

```solidity
23:     struct UserClaimData {
24:         uint256 claimableFees;
25:         address token;
26:     }

```


*GitHub* : [23](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L23-L23)
### [N-104]<a name="n-104"></a> Natspec @params comments are missing from function

*There are 48 instance(s) of this issue:*

```solidity
113:     function setFeeRedistributor(address feeRedistributor_) external onlyOwner 

```


*GitHub* : [113](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L113-L113)

```solidity
117:     function setMaxFeePercent(uint256 maxFeePercent_) external onlyManager 

```


*GitHub* : [117](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L117-L117)

```solidity
128:     function setProtocolFeePercent(uint256 protocolFeePercent_, address protocolFeeDestination_) external onlyOwner 

```


*GitHub* : [128](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L128-L128)

```solidity
141:     function setExternalFeePercent(
142:         uint256 subjectFeePercent_,
143:         uint256 referralFeePercent_,
144:         uint256 holdersFeePercent_
145:     ) external onlyManager 

```


*GitHub* : [141](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L141-L141)

```solidity
155:     function setReferralFeeDestination(
156:         address curvesTokenSubject,
157:         address referralFeeDestination_
158:     ) public onlyTokenSubject(curvesTokenSubject) 

```


*GitHub* : [155](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L155-L155)

```solidity
162:     function setERC20Factory(address factory_) external onlyOwner 

```


*GitHub* : [162](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L162-L162)

```solidity
166:     function getFees(
167:         uint256 price
168:     )
169:         public
170:         view
171:         returns (uint256 protocolFee, uint256 subjectFee, uint256 referralFee, uint256 holdersFee, uint256 totalFee)
172:     

```


*GitHub* : [166](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L166-L166)

```solidity
180:     function getPrice(uint256 supply, uint256 amount) public pure returns (uint256) 

```


*GitHub* : [180](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L180-L180)

```solidity
189:     function getBuyPrice(address curvesTokenSubject, uint256 amount) public view returns (uint256) 

```


*GitHub* : [189](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L189-L189)

```solidity
193:     function getSellPrice(address curvesTokenSubject, uint256 amount) public view returns (uint256) 

```


*GitHub* : [193](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L193-L193)

```solidity
197:     function getBuyPriceAfterFee(address curvesTokenSubject, uint256 amount) public view returns (uint256) 

```


*GitHub* : [197](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L197-L197)

```solidity
204:     function getSellPriceAfterFee(address curvesTokenSubject, uint256 amount) public view returns (uint256) 

```


*GitHub* : [204](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L204-L204)

```solidity
211:     function buyCurvesToken(address curvesTokenSubject, uint256 amount) public payable 

```


*GitHub* : [211](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L211-L211)

```solidity
218:     function _transferFees(
219:         address curvesTokenSubject,
220:         bool isBuy,
221:         uint256 price,
222:         uint256 amount,
223:         uint256 supply
224:     ) internal 

```


*GitHub* : [218](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L218-L218)

```solidity
263:     function _buyCurvesToken(address curvesTokenSubject, uint256 amount) internal 

```


*GitHub* : [263](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L263-L263)

```solidity
282:     function sellCurvesToken(address curvesTokenSubject, uint256 amount) public 

```


*GitHub* : [282](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L282-L282)

```solidity
296:     function transferCurvesToken(address curvesTokenSubject, address to, uint256 amount) external 

```


*GitHub* : [296](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L296-L296)

```solidity
302:     function transferAllCurvesTokens(address to) external 

```


*GitHub* : [302](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L302-L302)

```solidity
313:     function _transfer(address curvesTokenSubject, address from, address to, uint256 amount) internal 

```


*GitHub* : [313](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L313-L313)

```solidity
328:     function _addOwnedCurvesTokenSubject(address owner_, address curvesTokenSubject) internal 

```


*GitHub* : [328](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L328-L328)

```solidity
338:     function _deployERC20(
339:         address curvesTokenSubject,
340:         string memory name,
341:         string memory symbol
342:     ) internal returns (address) 

```


*GitHub* : [338](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L338-L338)

```solidity
364:     function buyCurvesTokenWithName(
365:         address curvesTokenSubject,
366:         uint256 amount,
367:         string memory name,
368:         string memory symbol
369:     ) public payable 

```


*GitHub* : [364](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L364-L364)

```solidity
377:     function buyCurvesTokenForPresale(
378:         address curvesTokenSubject,
379:         uint256 amount,
380:         uint256 startTime,
381:         bytes32 merkleRoot,
382:         uint256 maxBuy
383:     ) public payable onlyTokenSubject(curvesTokenSubject) 

```


*GitHub* : [377](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L377-L377)

```solidity
394:     function setWhitelist(bytes32 merkleRoot) external 

```


*GitHub* : [394](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L394-L394)

```solidity
404:     function buyCurvesTokenWhitelisted(
405:         address curvesTokenSubject,
406:         uint256 amount,
407:         bytes32[] memory proof
408:     ) public payable 

```


*GitHub* : [404](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L404-L404)

```solidity
422:     function verifyMerkle(address curvesTokenSubject, address caller, bytes32[] memory proof) public view 

```


*GitHub* : [422](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L422-L422)

```solidity
428:     function setNameAndSymbol(
429:         address curvesTokenSubject,
430:         string memory name,
431:         string memory symbol
432:     ) external onlyTokenSubject(curvesTokenSubject) 

```


*GitHub* : [428](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L428-L428)

```solidity
439:     function mint(address curvesTokenSubject) external onlyTokenSubject(curvesTokenSubject) 

```


*GitHub* : [439](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L439-L439)

```solidity
456:     function _mint(
457:         address curvesTokenSubject,
458:         string memory name,
459:         string memory symbol
460:     ) internal onlyTokenSubject(curvesTokenSubject) 

```


*GitHub* : [456](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L456-L456)

```solidity
465:     function withdraw(address curvesTokenSubject, uint256 amount) public 

```


*GitHub* : [465](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L465-L465)

```solidity
490:     function deposit(address curvesTokenSubject, uint256 amount) public 

```


*GitHub* : [490](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L490-L490)

```solidity
504:     function sellExternalCurvesToken(address curvesTokenSubject, uint256 amount) public 

```


*GitHub* : [504](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L504-L504)

```solidity
35:     function setCurves(Curves curves_) public 

```


*GitHub* : [35](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L35-L35)

```solidity
39:     function balanceOf(address token, address account) public view returns (uint256) 

```


*GitHub* : [39](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L39-L39)

```solidity
43:     function totalSupply(address token) public view returns (uint256) 

```


*GitHub* : [43](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L43-L43)

```solidity
48:     function getUserTokens(address user) public view returns (address[] memory) 

```


*GitHub* : [48](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L48-L48)

```solidity
52:     function getUserTokensAndClaimable(address user) public view returns (UserClaimData[] memory) 

```


*GitHub* : [52](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L52-L52)

```solidity
63:     function updateFeeCredit(address token, address account) internal 

```


*GitHub* : [63](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L63-L63)

```solidity
73:     function getClaimableFees(address token, address account) public view returns (uint256) 

```


*GitHub* : [73](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L73-L73)

```solidity
80:     function claimFees(address token) external 

```


*GitHub* : [80](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L80-L80)

```solidity
89:     function addFees(address token) public payable onlyManager 

```


*GitHub* : [89](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L89-L89)

```solidity
96:     function onBalanceChange(address token, address account) public onlyManager 

```


*GitHub* : [96](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L96-L96)

```solidity
103:     function batchClaiming(address[] calldata tokenList) external 

```


*GitHub* : [103](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L103-L103)

```solidity
23:     function setManager(address manager_, bool value) public onlyOwner 

```


*GitHub* : [23](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L23-L23)

```solidity
27:     function transferOwnership(address owner_) public onlyOwner 

```


*GitHub* : [27](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L27-L27)

```solidity
12:     function mint(address to, uint256 amount) public onlyOwner 

```


*GitHub* : [12](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L12-L12)

```solidity
16:     function burn(address from, uint256 amount) public onlyOwner 

```


*GitHub* : [16](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L16-L16)

```solidity
7:     function deploy(string memory name, string memory symbol, address owner) public returns (address) 

```


*GitHub* : [7](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20Factory.sol#L7-L7)
### [N-105]<a name="n-105"></a> Natspec @dev comments are missing from function

*There are 47 instance(s) of this issue:*

```solidity
113:     function setFeeRedistributor(address feeRedistributor_) external onlyOwner 

```


*GitHub* : [113](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L113-L113)

```solidity
117:     function setMaxFeePercent(uint256 maxFeePercent_) external onlyManager 

```


*GitHub* : [117](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L117-L117)

```solidity
128:     function setProtocolFeePercent(uint256 protocolFeePercent_, address protocolFeeDestination_) external onlyOwner 

```


*GitHub* : [128](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L128-L128)

```solidity
141:     function setExternalFeePercent(
142:         uint256 subjectFeePercent_,
143:         uint256 referralFeePercent_,
144:         uint256 holdersFeePercent_
145:     ) external onlyManager 

```


*GitHub* : [141](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L141-L141)

```solidity
155:     function setReferralFeeDestination(
156:         address curvesTokenSubject,
157:         address referralFeeDestination_
158:     ) public onlyTokenSubject(curvesTokenSubject) 

```


*GitHub* : [155](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L155-L155)

```solidity
162:     function setERC20Factory(address factory_) external onlyOwner 

```


*GitHub* : [162](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L162-L162)

```solidity
166:     function getFees(
167:         uint256 price
168:     )
169:         public
170:         view
171:         returns (uint256 protocolFee, uint256 subjectFee, uint256 referralFee, uint256 holdersFee, uint256 totalFee)
172:     

```


*GitHub* : [166](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L166-L166)

```solidity
180:     function getPrice(uint256 supply, uint256 amount) public pure returns (uint256) 

```


*GitHub* : [180](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L180-L180)

```solidity
189:     function getBuyPrice(address curvesTokenSubject, uint256 amount) public view returns (uint256) 

```


*GitHub* : [189](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L189-L189)

```solidity
193:     function getSellPrice(address curvesTokenSubject, uint256 amount) public view returns (uint256) 

```


*GitHub* : [193](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L193-L193)

```solidity
197:     function getBuyPriceAfterFee(address curvesTokenSubject, uint256 amount) public view returns (uint256) 

```


*GitHub* : [197](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L197-L197)

```solidity
204:     function getSellPriceAfterFee(address curvesTokenSubject, uint256 amount) public view returns (uint256) 

```


*GitHub* : [204](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L204-L204)

```solidity
211:     function buyCurvesToken(address curvesTokenSubject, uint256 amount) public payable 

```


*GitHub* : [211](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L211-L211)

```solidity
218:     function _transferFees(
219:         address curvesTokenSubject,
220:         bool isBuy,
221:         uint256 price,
222:         uint256 amount,
223:         uint256 supply
224:     ) internal 

```


*GitHub* : [218](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L218-L218)

```solidity
263:     function _buyCurvesToken(address curvesTokenSubject, uint256 amount) internal 

```


*GitHub* : [263](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L263-L263)

```solidity
282:     function sellCurvesToken(address curvesTokenSubject, uint256 amount) public 

```


*GitHub* : [282](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L282-L282)

```solidity
296:     function transferCurvesToken(address curvesTokenSubject, address to, uint256 amount) external 

```


*GitHub* : [296](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L296-L296)

```solidity
302:     function transferAllCurvesTokens(address to) external 

```


*GitHub* : [302](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L302-L302)

```solidity
313:     function _transfer(address curvesTokenSubject, address from, address to, uint256 amount) internal 

```


*GitHub* : [313](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L313-L313)

```solidity
328:     function _addOwnedCurvesTokenSubject(address owner_, address curvesTokenSubject) internal 

```


*GitHub* : [328](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L328-L328)

```solidity
338:     function _deployERC20(
339:         address curvesTokenSubject,
340:         string memory name,
341:         string memory symbol
342:     ) internal returns (address) 

```


*GitHub* : [338](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L338-L338)

```solidity
364:     function buyCurvesTokenWithName(
365:         address curvesTokenSubject,
366:         uint256 amount,
367:         string memory name,
368:         string memory symbol
369:     ) public payable 

```


*GitHub* : [364](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L364-L364)

```solidity
377:     function buyCurvesTokenForPresale(
378:         address curvesTokenSubject,
379:         uint256 amount,
380:         uint256 startTime,
381:         bytes32 merkleRoot,
382:         uint256 maxBuy
383:     ) public payable onlyTokenSubject(curvesTokenSubject) 

```


*GitHub* : [377](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L377-L377)

```solidity
394:     function setWhitelist(bytes32 merkleRoot) external 

```


*GitHub* : [394](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L394-L394)

```solidity
404:     function buyCurvesTokenWhitelisted(
405:         address curvesTokenSubject,
406:         uint256 amount,
407:         bytes32[] memory proof
408:     ) public payable 

```


*GitHub* : [404](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L404-L404)

```solidity
422:     function verifyMerkle(address curvesTokenSubject, address caller, bytes32[] memory proof) public view 

```


*GitHub* : [422](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L422-L422)

```solidity
428:     function setNameAndSymbol(
429:         address curvesTokenSubject,
430:         string memory name,
431:         string memory symbol
432:     ) external onlyTokenSubject(curvesTokenSubject) 

```


*GitHub* : [428](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L428-L428)

```solidity
439:     function mint(address curvesTokenSubject) external onlyTokenSubject(curvesTokenSubject) 

```


*GitHub* : [439](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L439-L439)

```solidity
456:     function _mint(
457:         address curvesTokenSubject,
458:         string memory name,
459:         string memory symbol
460:     ) internal onlyTokenSubject(curvesTokenSubject) 

```


*GitHub* : [456](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L456-L456)

```solidity
465:     function withdraw(address curvesTokenSubject, uint256 amount) public 

```


*GitHub* : [465](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L465-L465)

```solidity
490:     function deposit(address curvesTokenSubject, uint256 amount) public 

```


*GitHub* : [490](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L490-L490)

```solidity
504:     function sellExternalCurvesToken(address curvesTokenSubject, uint256 amount) public 

```


*GitHub* : [504](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L504-L504)

```solidity
35:     function setCurves(Curves curves_) public 

```


*GitHub* : [35](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L35-L35)

```solidity
39:     function balanceOf(address token, address account) public view returns (uint256) 

```


*GitHub* : [39](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L39-L39)

```solidity
43:     function totalSupply(address token) public view returns (uint256) 

```


*GitHub* : [43](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L43-L43)

```solidity
48:     function getUserTokens(address user) public view returns (address[] memory) 

```


*GitHub* : [48](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L48-L48)

```solidity
52:     function getUserTokensAndClaimable(address user) public view returns (UserClaimData[] memory) 

```


*GitHub* : [52](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L52-L52)

```solidity
63:     function updateFeeCredit(address token, address account) internal 

```


*GitHub* : [63](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L63-L63)

```solidity
73:     function getClaimableFees(address token, address account) public view returns (uint256) 

```


*GitHub* : [73](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L73-L73)

```solidity
80:     function claimFees(address token) external 

```


*GitHub* : [80](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L80-L80)

```solidity
89:     function addFees(address token) public payable onlyManager 

```


*GitHub* : [89](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L89-L89)

```solidity
96:     function onBalanceChange(address token, address account) public onlyManager 

```


*GitHub* : [96](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L96-L96)

```solidity
23:     function setManager(address manager_, bool value) public onlyOwner 

```


*GitHub* : [23](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L23-L23)

```solidity
27:     function transferOwnership(address owner_) public onlyOwner 

```


*GitHub* : [27](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L27-L27)

```solidity
12:     function mint(address to, uint256 amount) public onlyOwner 

```


*GitHub* : [12](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L12-L12)

```solidity
16:     function burn(address from, uint256 amount) public onlyOwner 

```


*GitHub* : [16](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L16-L16)

```solidity
7:     function deploy(string memory name, string memory symbol, address owner) public returns (address) 

```


*GitHub* : [7](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20Factory.sol#L7-L7)
### [N-106]<a name="n-106"></a> Natspec @notice comments are missing from function

*There are 48 instance(s) of this issue:*

```solidity
113:     function setFeeRedistributor(address feeRedistributor_) external onlyOwner 

```


*GitHub* : [113](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L113-L113)

```solidity
117:     function setMaxFeePercent(uint256 maxFeePercent_) external onlyManager 

```


*GitHub* : [117](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L117-L117)

```solidity
128:     function setProtocolFeePercent(uint256 protocolFeePercent_, address protocolFeeDestination_) external onlyOwner 

```


*GitHub* : [128](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L128-L128)

```solidity
141:     function setExternalFeePercent(
142:         uint256 subjectFeePercent_,
143:         uint256 referralFeePercent_,
144:         uint256 holdersFeePercent_
145:     ) external onlyManager 

```


*GitHub* : [141](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L141-L141)

```solidity
155:     function setReferralFeeDestination(
156:         address curvesTokenSubject,
157:         address referralFeeDestination_
158:     ) public onlyTokenSubject(curvesTokenSubject) 

```


*GitHub* : [155](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L155-L155)

```solidity
162:     function setERC20Factory(address factory_) external onlyOwner 

```


*GitHub* : [162](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L162-L162)

```solidity
166:     function getFees(
167:         uint256 price
168:     )
169:         public
170:         view
171:         returns (uint256 protocolFee, uint256 subjectFee, uint256 referralFee, uint256 holdersFee, uint256 totalFee)
172:     

```


*GitHub* : [166](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L166-L166)

```solidity
180:     function getPrice(uint256 supply, uint256 amount) public pure returns (uint256) 

```


*GitHub* : [180](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L180-L180)

```solidity
189:     function getBuyPrice(address curvesTokenSubject, uint256 amount) public view returns (uint256) 

```


*GitHub* : [189](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L189-L189)

```solidity
193:     function getSellPrice(address curvesTokenSubject, uint256 amount) public view returns (uint256) 

```


*GitHub* : [193](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L193-L193)

```solidity
197:     function getBuyPriceAfterFee(address curvesTokenSubject, uint256 amount) public view returns (uint256) 

```


*GitHub* : [197](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L197-L197)

```solidity
204:     function getSellPriceAfterFee(address curvesTokenSubject, uint256 amount) public view returns (uint256) 

```


*GitHub* : [204](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L204-L204)

```solidity
211:     function buyCurvesToken(address curvesTokenSubject, uint256 amount) public payable 

```


*GitHub* : [211](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L211-L211)

```solidity
218:     function _transferFees(
219:         address curvesTokenSubject,
220:         bool isBuy,
221:         uint256 price,
222:         uint256 amount,
223:         uint256 supply
224:     ) internal 

```


*GitHub* : [218](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L218-L218)

```solidity
263:     function _buyCurvesToken(address curvesTokenSubject, uint256 amount) internal 

```


*GitHub* : [263](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L263-L263)

```solidity
282:     function sellCurvesToken(address curvesTokenSubject, uint256 amount) public 

```


*GitHub* : [282](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L282-L282)

```solidity
296:     function transferCurvesToken(address curvesTokenSubject, address to, uint256 amount) external 

```


*GitHub* : [296](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L296-L296)

```solidity
302:     function transferAllCurvesTokens(address to) external 

```


*GitHub* : [302](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L302-L302)

```solidity
313:     function _transfer(address curvesTokenSubject, address from, address to, uint256 amount) internal 

```


*GitHub* : [313](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L313-L313)

```solidity
328:     function _addOwnedCurvesTokenSubject(address owner_, address curvesTokenSubject) internal 

```


*GitHub* : [328](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L328-L328)

```solidity
338:     function _deployERC20(
339:         address curvesTokenSubject,
340:         string memory name,
341:         string memory symbol
342:     ) internal returns (address) 

```


*GitHub* : [338](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L338-L338)

```solidity
364:     function buyCurvesTokenWithName(
365:         address curvesTokenSubject,
366:         uint256 amount,
367:         string memory name,
368:         string memory symbol
369:     ) public payable 

```


*GitHub* : [364](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L364-L364)

```solidity
377:     function buyCurvesTokenForPresale(
378:         address curvesTokenSubject,
379:         uint256 amount,
380:         uint256 startTime,
381:         bytes32 merkleRoot,
382:         uint256 maxBuy
383:     ) public payable onlyTokenSubject(curvesTokenSubject) 

```


*GitHub* : [377](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L377-L377)

```solidity
394:     function setWhitelist(bytes32 merkleRoot) external 

```


*GitHub* : [394](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L394-L394)

```solidity
404:     function buyCurvesTokenWhitelisted(
405:         address curvesTokenSubject,
406:         uint256 amount,
407:         bytes32[] memory proof
408:     ) public payable 

```


*GitHub* : [404](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L404-L404)

```solidity
422:     function verifyMerkle(address curvesTokenSubject, address caller, bytes32[] memory proof) public view 

```


*GitHub* : [422](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L422-L422)

```solidity
428:     function setNameAndSymbol(
429:         address curvesTokenSubject,
430:         string memory name,
431:         string memory symbol
432:     ) external onlyTokenSubject(curvesTokenSubject) 

```


*GitHub* : [428](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L428-L428)

```solidity
439:     function mint(address curvesTokenSubject) external onlyTokenSubject(curvesTokenSubject) 

```


*GitHub* : [439](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L439-L439)

```solidity
456:     function _mint(
457:         address curvesTokenSubject,
458:         string memory name,
459:         string memory symbol
460:     ) internal onlyTokenSubject(curvesTokenSubject) 

```


*GitHub* : [456](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L456-L456)

```solidity
465:     function withdraw(address curvesTokenSubject, uint256 amount) public 

```


*GitHub* : [465](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L465-L465)

```solidity
490:     function deposit(address curvesTokenSubject, uint256 amount) public 

```


*GitHub* : [490](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L490-L490)

```solidity
504:     function sellExternalCurvesToken(address curvesTokenSubject, uint256 amount) public 

```


*GitHub* : [504](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L504-L504)

```solidity
35:     function setCurves(Curves curves_) public 

```


*GitHub* : [35](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L35-L35)

```solidity
39:     function balanceOf(address token, address account) public view returns (uint256) 

```


*GitHub* : [39](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L39-L39)

```solidity
43:     function totalSupply(address token) public view returns (uint256) 

```


*GitHub* : [43](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L43-L43)

```solidity
48:     function getUserTokens(address user) public view returns (address[] memory) 

```


*GitHub* : [48](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L48-L48)

```solidity
52:     function getUserTokensAndClaimable(address user) public view returns (UserClaimData[] memory) 

```


*GitHub* : [52](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L52-L52)

```solidity
63:     function updateFeeCredit(address token, address account) internal 

```


*GitHub* : [63](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L63-L63)

```solidity
73:     function getClaimableFees(address token, address account) public view returns (uint256) 

```


*GitHub* : [73](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L73-L73)

```solidity
80:     function claimFees(address token) external 

```


*GitHub* : [80](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L80-L80)

```solidity
89:     function addFees(address token) public payable onlyManager 

```


*GitHub* : [89](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L89-L89)

```solidity
96:     function onBalanceChange(address token, address account) public onlyManager 

```


*GitHub* : [96](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L96-L96)

```solidity
103:     function batchClaiming(address[] calldata tokenList) external 

```


*GitHub* : [103](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L103-L103)

```solidity
23:     function setManager(address manager_, bool value) public onlyOwner 

```


*GitHub* : [23](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L23-L23)

```solidity
27:     function transferOwnership(address owner_) public onlyOwner 

```


*GitHub* : [27](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L27-L27)

```solidity
12:     function mint(address to, uint256 amount) public onlyOwner 

```


*GitHub* : [12](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L12-L12)

```solidity
16:     function burn(address from, uint256 amount) public onlyOwner 

```


*GitHub* : [16](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L16-L16)

```solidity
7:     function deploy(string memory name, string memory symbol, address owner) public returns (address) 

```


*GitHub* : [7](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20Factory.sol#L7-L7)
### [N-107]<a name="n-107"></a> Natspec @dev comments are missing from constructor

*There are 4 instance(s) of this issue:*

```solidity
108:     constructor(address curvesERC20Factory_, address feeRedistributor_) Security() 

```


*GitHub* : [108](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L108-L108)

```solidity
33:     constructor() Security() 

```


*GitHub* : [33](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L33-L33)

```solidity
18:     constructor() 

```


*GitHub* : [18](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L18-L18)

```solidity
8:     constructor(string memory name_, string memory symbol_, address owner) ERC20(name_, symbol_) 

```


*GitHub* : [8](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L8-L8)
### [N-108]<a name="n-108"></a> Natspec @notice comments are missing from constructor

*There are 4 instance(s) of this issue:*

```solidity
108:     constructor(address curvesERC20Factory_, address feeRedistributor_) Security() 

```


*GitHub* : [108](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L108-L108)

```solidity
33:     constructor() Security() 

```


*GitHub* : [33](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L33-L33)

```solidity
18:     constructor() 

```


*GitHub* : [18](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L18-L18)

```solidity
8:     constructor(string memory name_, string memory symbol_, address owner) ERC20(name_, symbol_) 

```


*GitHub* : [8](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L8-L8)
### [N-109]<a name="n-109"></a> Natspec @params comments are missing from constructor

*There are 2 instance(s) of this issue:*

```solidity
108:     constructor(address curvesERC20Factory_, address feeRedistributor_) Security() 

```


*GitHub* : [108](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L108-L108)

```solidity
8:     constructor(string memory name_, string memory symbol_, address owner) ERC20(name_, symbol_) 

```


*GitHub* : [8](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/CurvesERC20.sol#L8-L8)
### [N-110]<a name="n-110"></a> Natspec @notice comments are missing from receive function

*There are 1 instance(s) of this issue:*

```solidity
119:     receive() external payable 

```


*GitHub* : [119](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L119-L119)
### [N-111]<a name="n-111"></a> Natspec @dev comments are missing from receive function

*There are 1 instance(s) of this issue:*

```solidity
119:     receive() external payable 

```


*GitHub* : [119](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L119-L119)
### [N-112]<a name="n-112"></a> Natspec comments are missing from scope blocks

*There are 6 instance(s) of this issue:*

```solidity
226:         {
227:             bool referralDefined = referralFeeDestination[curvesTokenSubject] != address(0);
228:             {
229:                 address firstDestination = isBuy ? feesEconomics.protocolFeeDestination : msg.sender;
230:                 uint256 buyValue = referralDefined ? protocolFee : protocolFee + referralFee;
231:                 uint256 sellValue = price - protocolFee - subjectFee - referralFee - holderFee;
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}("");
233:                 if (!success1) revert CannotSendFunds();
234:             }
235:             {
236:                 (bool success2, ) = curvesTokenSubject.call{value: subjectFee}("");
237:                 if (!success2) revert CannotSendFunds();
238:             }
239:             {
240:                 (bool success3, ) = referralDefined
241:                     ? referralFeeDestination[curvesTokenSubject].call{value: referralFee}("")
242:                     : (true, bytes(""));
243:                 if (!success3) revert CannotSendFunds();
244:             }
245: 
246:             if (feesEconomics.holdersFeePercent > 0 && address(feeRedistributor) != address(0)) {
247:                 feeRedistributor.onBalanceChange(curvesTokenSubject, msg.sender);
248:                 feeRedistributor.addFees{value: holderFee}(curvesTokenSubject);
249:             }
250:         }

```


*GitHub* : [226](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L226-L226)

```solidity
228:            {
229:                 address firstDestination = isBuy ? feesEconomics.protocolFeeDestination : msg.sender;
230:                 uint256 buyValue = referralDefined ? protocolFee : protocolFee + referralFee;
231:                 uint256 sellValue = price - protocolFee - subjectFee - referralFee - holderFee;
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}("");
233:                 if (!success1) revert CannotSendFunds();
234:             }

```


*GitHub* : [228](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L228-L228)

```solidity
235:             {
236:                 (bool success2, ) = curvesTokenSubject.call{value: subjectFee}("");
237:                 if (!success2) revert CannotSendFunds();
238:             }

```


*GitHub* : [235](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L235-L235)

```solidity
239:             {
240:                 (bool success3, ) = referralDefined
241:                     ? referralFeeDestination[curvesTokenSubject].call{value: referralFee}("")
242:                     : (true, bytes(""));
243:                 if (!success3) revert CannotSendFunds();
244:             }

```


*GitHub* : [239](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L239-L239)

```solidity
228:             {
229:                 (bool success2, ) = curvesTokenSubject.call{value: subjectFee}

```


*GitHub* : [228](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L228-L228)

```solidity
239:             {
240:                 (bool success3, ) = referralDefined
241:                     ? referralFeeDestination[curvesTokenSubject].call{value: referralFee}

```


*GitHub* : [239](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L239-L239)### Disputed Risk Issues


### [D-01]<a name="d-01"></a> Subtraction may underflow if multiplication is too large [EXP]
In arithmetic operations involving subtraction and multiplication, an underflow may occur if a subtraction result is negative, or if a multiplication result exceeds the maximum value representable in the data type. For instance, if a large multiplication precedes a subtraction, it may create a value too large to subtract from, causing an underflow. This could lead to unexpected and incorrect results in the calculation.

*There are 3 instance(s) of this issue:*

```solidity
180:     function getPrice(uint256 supply, uint256 amount) public pure returns (uint256) { // <= FOUND
181:         uint256 sum1 = supply == 0 ? 0 : ((supply - 1) * (supply) * (2 * (supply - 1) + 1)) / 6; // <= FOUND
182:         uint256 sum2 = supply == 0 && amount == 1
183:             ? 0
184:             : ((supply - 1 + amount) * (supply + amount) * (2 * (supply - 1 + amount) + 1)) / 6;
185:         uint256 summation = sum2 - sum1;
186:         return (summation * 1 ether) / 16000;
187:     }

```


*GitHub* : [180](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L180-L181)

```solidity
180:     function getPrice(uint256 supply, uint256 amount) public pure returns (uint256) { // <= FOUND
181:         uint256 sum1 = supply == 0 ? 0 : ((supply - 1) * (supply) * (2 * (supply - 1) + 1)) / 6; // <= FOUND
182:         uint256 sum2 = supply == 0 && amount == 1
183:             ? 0
184:             : ((supply - 1 + amount) * (supply + amount) * (2 * (supply - 1 + amount) + 1)) / 6;
185:         uint256 summation = sum2 - sum1;
186:         return (summation * 1 ether) / 16000;
187:     }

```


*GitHub* : [180](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L180-L181)

```solidity
180:     function getPrice(uint256 supply, uint256 amount) public pure returns (uint256) { // <= FOUND
181:         uint256 sum1 = supply == 0 ? 0 : ((supply - 1) * (supply) * (2 * (supply - 1) + 1)) / 6; // <= FOUND
182:         uint256 sum2 = supply == 0 && amount == 1
183:             ? 0
184:             : ((supply - 1 + amount) * (supply + amount) * (2 * (supply - 1 + amount) + 1)) / 6;
185:         uint256 summation = sum2 - sum1;
186:         return (summation * 1 ether) / 16000;
187:     }

```


*GitHub* : [180](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L180-L181)
### [D-02]<a name="d-02"></a> Code does not follow the best practice of check-effects-interaction [EXP]
The "check-effects-interaction" pattern is a best practice in smart contract development, emphasizing the order of operations in functions to prevent reentrancy attacks. Violations arise when a function interacts with external contracts before settling internal state changes or checks. This misordering can expose the contract to potential threats. To adhere to this pattern, first ensure all conditions or checks are satisfied, then update any internal states, and only after these steps, interact with external contracts or addresses. Rearranging operations to this recommended sequence bolsters contract security and aligns with established best practices in the Ethereum community.

*There are 2 instance(s) of this issue:*

```solidity
218:     function _transferFees(
219:         address curvesTokenSubject,
220:         bool isBuy,
221:         uint256 price,
222:         uint256 amount,
223:         uint256 supply
224:     ) internal {
225:         (uint256 protocolFee, uint256 subjectFee, uint256 referralFee, uint256 holderFee, ) = getFees(price);
226:         {
227:             bool referralDefined = referralFeeDestination[curvesTokenSubject] != address(0);
228:             {
229:                 address firstDestination = isBuy ? feesEconomics.protocolFeeDestination : msg.sender;
230:                 uint256 buyValue = referralDefined ? protocolFee : protocolFee + referralFee;
231:                 uint256 sellValue = price - protocolFee - subjectFee - referralFee - holderFee;
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}(""); // <= FOUND
233:                 if (!success1) revert CannotSendFunds();
234:             }
235:             {
236:                 (bool success2, ) = curvesTokenSubject.call{value: subjectFee}(""); // <= FOUND
237:                 if (!success2) revert CannotSendFunds();
238:             }
239:             {
240:                 (bool success3, ) = referralDefined
241:                     ? referralFeeDestination[curvesTokenSubject].call{value: referralFee}("")
242:                     : (true, bytes(""));
243:                 if (!success3) revert CannotSendFunds();
244:             }
245: 
246:             if (feesEconomics.holdersFeePercent > 0 && address(feeRedistributor) != address(0)) {
247:                 feeRedistributor.onBalanceChange(curvesTokenSubject, msg.sender);
248:                 feeRedistributor.addFees{value: holderFee}(curvesTokenSubject);
249:             }
250:         }
251:         emit Trade(
252:             msg.sender,
253:             curvesTokenSubject,
254:             isBuy,
255:             amount,
256:             price,
257:             protocolFee,
258:             subjectFee,
259:             isBuy ? supply + amount : supply - amount
260:         );
261:     }

```


*GitHub* : [218](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L218-L236)

```solidity
218:     function _transferFees(
219:         address curvesTokenSubject,
220:         bool isBuy,
221:         uint256 price,
222:         uint256 amount,
223:         uint256 supply
224:     ) internal {
225:         (uint256 protocolFee, uint256 subjectFee, uint256 referralFee, uint256 holderFee, ) = getFees(price);
226:         {
227:             bool referralDefined = referralFeeDestination[curvesTokenSubject] != address(0);
228:             {
229:                 address firstDestination = isBuy ? feesEconomics.protocolFeeDestination : msg.sender;
230:                 uint256 buyValue = referralDefined ? protocolFee : protocolFee + referralFee;
231:                 uint256 sellValue = price - protocolFee - subjectFee - referralFee - holderFee;
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}(""); // <= FOUND
233:                 if (!success1) revert CannotSendFunds();
234:             }
235:             {
236:                 (bool success2, ) = curvesTokenSubject.call{value: subjectFee}(""); // <= FOUND
237:                 if (!success2) revert CannotSendFunds();
238:             }
239:             {
240:                 (bool success3, ) = referralDefined
241:                     ? referralFeeDestination[curvesTokenSubject].call{value: referralFee}("")
242:                     : (true, bytes(""));
243:                 if (!success3) revert CannotSendFunds();
244:             }
245: 
246:             if (feesEconomics.holdersFeePercent > 0 && address(feeRedistributor) != address(0)) {
247:                 feeRedistributor.onBalanceChange(curvesTokenSubject, msg.sender);
248:                 feeRedistributor.addFees{value: holderFee}(curvesTokenSubject);
249:             }
250:         }
251:         emit Trade(
252:             msg.sender,
253:             curvesTokenSubject,
254:             isBuy,
255:             amount,
256:             price,
257:             protocolFee,
258:             subjectFee,
259:             isBuy ? supply + amount : supply - amount
260:         );
261:     }

```


*GitHub* : [218](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L218-L236)
### [D-03]<a name="d-03"></a> Avoid updating storage when the value hasn't changed [EXP]

*There are 6 instance(s) of this issue:*

```solidity
302:     function transferAllCurvesTokens(address to) external { // <= FOUND
303:         if (to == address(this)) revert ContractCannotReceiveTransfer();
304:         address[] storage subjects = ownedCurvesTokenSubjects[msg.sender]; // <= FOUND
305:         for (uint256 i = 0; i < subjects.length; i++) { // <= FOUND
306:             uint256 amount = curvesTokenBalance[subjects[i]][msg.sender]; // <= FOUND
307:             if (amount > 0) {
308:                 _transfer(subjects[i], msg.sender, to, amount);
309:             }
310:         }
311:     }

```


*GitHub* : [302](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L302-L306)

```solidity
302:     function transferAllCurvesTokens(address to) external { // <= FOUND
303:         if (to == address(this)) revert ContractCannotReceiveTransfer();
304:         address[] storage subjects = ownedCurvesTokenSubjects[msg.sender]; // <= FOUND
305:         for (uint256 i = 0; i < subjects.length; i++) { // <= FOUND
306:             uint256 amount = curvesTokenBalance[subjects[i]][msg.sender]; // <= FOUND
307:             if (amount > 0) {
308:                 _transfer(subjects[i], msg.sender, to, amount);
309:             }
310:         }
311:     }

```


*GitHub* : [302](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L302-L306)

```solidity
302:     function transferAllCurvesTokens(address to) external { // <= FOUND
303:         if (to == address(this)) revert ContractCannotReceiveTransfer();
304:         address[] storage subjects = ownedCurvesTokenSubjects[msg.sender]; // <= FOUND
305:         for (uint256 i = 0; i < subjects.length; i++) { // <= FOUND
306:             uint256 amount = curvesTokenBalance[subjects[i]][msg.sender]; // <= FOUND
307:             if (amount > 0) {
308:                 _transfer(subjects[i], msg.sender, to, amount);
309:             }
310:         }
311:     }

```


*GitHub* : [302](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L302-L306)

```solidity
302:     function transferAllCurvesTokens(address to) external { // <= FOUND
303:         if (to == address(this)) revert ContractCannotReceiveTransfer();
304:         address[] storage subjects = ownedCurvesTokenSubjects[msg.sender]; // <= FOUND
305:         for (uint256 i = 0; i < subjects.length; i++) { // <= FOUND
306:             uint256 amount = curvesTokenBalance[subjects[i]][msg.sender]; // <= FOUND
307:             if (amount > 0) {
308:                 _transfer(subjects[i], msg.sender, to, amount);
309:             }
310:         }
311:     }

```


*GitHub* : [302](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L302-L306)

```solidity
302:     function transferAllCurvesTokens(address to) external { // <= FOUND
303:         if (to == address(this)) revert ContractCannotReceiveTransfer();
304:         address[] storage subjects = ownedCurvesTokenSubjects[msg.sender]; // <= FOUND
305:         for (uint256 i = 0; i < subjects.length; i++) { // <= FOUND
306:             uint256 amount = curvesTokenBalance[subjects[i]][msg.sender]; // <= FOUND
307:             if (amount > 0) {
308:                 _transfer(subjects[i], msg.sender, to, amount);
309:             }
310:         }
311:     }

```


*GitHub* : [302](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L302-L306)

```solidity
302:     function transferAllCurvesTokens(address to) external { // <= FOUND
303:         if (to == address(this)) revert ContractCannotReceiveTransfer();
304:         address[] storage subjects = ownedCurvesTokenSubjects[msg.sender]; // <= FOUND
305:         for (uint256 i = 0; i < subjects.length; i++) { // <= FOUND
306:             uint256 amount = curvesTokenBalance[subjects[i]][msg.sender]; // <= FOUND
307:             if (amount > 0) {
308:                 _transfer(subjects[i], msg.sender, to, amount);
309:             }
310:         }
311:     }

```


*GitHub* : [302](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L302-L306)
### [D-04]<a name="d-04"></a> Using abi.encodePacked can result in hash collision when used in hashing functions [EXP-2]
Consider using abi.encode as this pads data to 32 byte segments

*There are 4 instance(s) of this issue:*

```solidity
338:     function _deployERC20(
339:         address curvesTokenSubject,
340:         string memory name,
341:         string memory symbol
342:     ) internal returns (address) {
343:         
344:         if (keccak256(bytes(symbol)) == keccak256(bytes(DEFAULT_SYMBOL))) {
345:             _curvesTokenCounter += 1;
346:             name = string(abi.encodePacked(name, " ", Strings.toString(_curvesTokenCounter))); // <= FOUND
347:             symbol = string(abi.encodePacked(symbol, Strings.toString(_curvesTokenCounter))); // <= FOUND
348:         }
349: 
350:         if (symbolToSubject[symbol] != address(0)) revert InvalidERC20Metadata();
351: 
352:         address tokenContract = CurvesERC20Factory(curvesERC20Factory).deploy(name, symbol, address(this));
353: 
354:         externalCurvesTokens[curvesTokenSubject].token = tokenContract;
355:         externalCurvesTokens[curvesTokenSubject].name = name;
356:         externalCurvesTokens[curvesTokenSubject].symbol = symbol;
357:         externalCurvesToSubject[tokenContract] = curvesTokenSubject;
358:         symbolToSubject[symbol] = curvesTokenSubject;
359: 
360:         emit TokenDeployed(curvesTokenSubject, tokenContract, name, symbol);
361:         return address(tokenContract);
362:     }

```


*GitHub* : [346](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L346-L347)

```solidity
338:     function _deployERC20(
339:         address curvesTokenSubject,
340:         string memory name,
341:         string memory symbol
342:     ) internal returns (address) {
343:         
344:         if (keccak256(bytes(symbol)) == keccak256(bytes(DEFAULT_SYMBOL))) {
345:             _curvesTokenCounter += 1;
346:             name = string(abi.encodePacked(name, " ", Strings.toString(_curvesTokenCounter))); // <= FOUND
347:             symbol = string(abi.encodePacked(symbol, Strings.toString(_curvesTokenCounter))); // <= FOUND
348:         }
349: 
350:         if (symbolToSubject[symbol] != address(0)) revert InvalidERC20Metadata();
351: 
352:         address tokenContract = CurvesERC20Factory(curvesERC20Factory).deploy(name, symbol, address(this));
353: 
354:         externalCurvesTokens[curvesTokenSubject].token = tokenContract;
355:         externalCurvesTokens[curvesTokenSubject].name = name;
356:         externalCurvesTokens[curvesTokenSubject].symbol = symbol;
357:         externalCurvesToSubject[tokenContract] = curvesTokenSubject;
358:         symbolToSubject[symbol] = curvesTokenSubject;
359: 
360:         emit TokenDeployed(curvesTokenSubject, tokenContract, name, symbol);
361:         return address(tokenContract);
362:     }

```


*GitHub* : [346](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L346-L347)

```solidity
338:     function _deployERC20(
339:         address curvesTokenSubject,
340:         string memory name,
341:         string memory symbol
342:     ) internal returns (address) {
343:         
344:         if (keccak256(bytes(symbol)) == keccak256(bytes(DEFAULT_SYMBOL))) {
345:             _curvesTokenCounter += 1;
346:             name = string(abi.encodePacked(name, " ", Strings.toString(_curvesTokenCounter))); // <= FOUND
347:             symbol = string(abi.encodePacked(symbol, Strings.toString(_curvesTokenCounter))); // <= FOUND
348:         }
349: 
350:         if (symbolToSubject[symbol] != address(0)) revert InvalidERC20Metadata();
351: 
352:         address tokenContract = CurvesERC20Factory(curvesERC20Factory).deploy(name, symbol, address(this));
353: 
354:         externalCurvesTokens[curvesTokenSubject].token = tokenContract;
355:         externalCurvesTokens[curvesTokenSubject].name = name;
356:         externalCurvesTokens[curvesTokenSubject].symbol = symbol;
357:         externalCurvesToSubject[tokenContract] = curvesTokenSubject;
358:         symbolToSubject[symbol] = curvesTokenSubject;
359: 
360:         emit TokenDeployed(curvesTokenSubject, tokenContract, name, symbol);
361:         return address(tokenContract);
362:     }

```


*GitHub* : [346](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L346-L347)

```solidity
338:     function _deployERC20(
339:         address curvesTokenSubject,
340:         string memory name,
341:         string memory symbol
342:     ) internal returns (address) {
343:         
344:         if (keccak256(bytes(symbol)) == keccak256(bytes(DEFAULT_SYMBOL))) {
345:             _curvesTokenCounter += 1;
346:             name = string(abi.encodePacked(name, " ", Strings.toString(_curvesTokenCounter))); // <= FOUND
347:             symbol = string(abi.encodePacked(symbol, Strings.toString(_curvesTokenCounter))); // <= FOUND
348:         }
349: 
350:         if (symbolToSubject[symbol] != address(0)) revert InvalidERC20Metadata();
351: 
352:         address tokenContract = CurvesERC20Factory(curvesERC20Factory).deploy(name, symbol, address(this));
353: 
354:         externalCurvesTokens[curvesTokenSubject].token = tokenContract;
355:         externalCurvesTokens[curvesTokenSubject].name = name;
356:         externalCurvesTokens[curvesTokenSubject].symbol = symbol;
357:         externalCurvesToSubject[tokenContract] = curvesTokenSubject;
358:         symbolToSubject[symbol] = curvesTokenSubject;
359: 
360:         emit TokenDeployed(curvesTokenSubject, tokenContract, name, symbol);
361:         return address(tokenContract);
362:     }

```


*GitHub* : [346](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L346-L347)
### [D-05]<a name="d-05"></a> Overly complicated arithmetic [EXP-2]
To maintain readability in code, particularly in Solidity which can involve complex mathematical operations, it is often recommended to limit the number of arithmetic operations to a maximum of 2-3 per line. Too many operations in a single line can make the code difficult to read and understand, increase the likelihood of mistakes, and complicate the process of debugging and reviewing the code. Consider splitting such operations over more than one line, take special care when dealing with division however. Try to limit the number of arithmetic operations to a maximum of 3 per line.

*There are 1 instance(s) of this issue:*

```solidity
218:     function _transferFees(
219:         address curvesTokenSubject,
220:         bool isBuy,
221:         uint256 price,
222:         uint256 amount,
223:         uint256 supply
224:     ) internal {
225:         (uint256 protocolFee, uint256 subjectFee, uint256 referralFee, uint256 holderFee, ) = getFees(price);
226:         {
227:             bool referralDefined = referralFeeDestination[curvesTokenSubject] != address(0);
228:             {
229:                 address firstDestination = isBuy ? feesEconomics.protocolFeeDestination : msg.sender;
230:                 uint256 buyValue = referralDefined ? protocolFee : protocolFee + referralFee;
231:                 uint256 sellValue = price - protocolFee - subjectFee - referralFee - holderFee; // <= FOUND
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}("");
233:                 if (!success1) revert CannotSendFunds();
234:             }
235:             {
236:                 (bool success2, ) = curvesTokenSubject.call{value: subjectFee}("");
237:                 if (!success2) revert CannotSendFunds();
238:             }
239:             {
240:                 (bool success3, ) = referralDefined
241:                     ? referralFeeDestination[curvesTokenSubject].call{value: referralFee}("")
242:                     : (true, bytes(""));
243:                 if (!success3) revert CannotSendFunds();
244:             }
245: 
246:             if (feesEconomics.holdersFeePercent > 0 && address(feeRedistributor) != address(0)) {
247:                 feeRedistributor.onBalanceChange(curvesTokenSubject, msg.sender);
248:                 feeRedistributor.addFees{value: holderFee}(curvesTokenSubject);
249:             }
250:         }
251:         emit Trade(
252:             msg.sender,
253:             curvesTokenSubject,
254:             isBuy,
255:             amount,
256:             price,
257:             protocolFee,
258:             subjectFee,
259:             isBuy ? supply + amount : supply - amount
260:         );
261:     }

```


*GitHub* : [231](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L231-L231)
### [D-06]<a name="d-06"></a> No limits when setting fees [EXP-3]
When settings fees state variables, ensure there a require checks in place to prevent incorrect values from being set. This is particularly important when dealing with fee values as without checks fees can be set to 100%

*There are 4 instance(s) of this issue:*

```solidity
113:     function setFeeRedistributor(address feeRedistributor_) external onlyOwner {
114:         feeRedistributor = FeeSplitter(payable(feeRedistributor_));
115:     }

```


*GitHub* : [113](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L113-L113)

```solidity
113:     function setFeeRedistributor(address feeRedistributor_) external onlyOwner {
114:         feeRedistributor = FeeSplitter(payable(feeRedistributor_));
115:     }

```


*GitHub* : [113](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L113-L113)

```solidity
113:     function setFeeRedistributor(address feeRedistributor_) external onlyOwner {
114:         feeRedistributor = FeeSplitter(payable(feeRedistributor_));
115:     }

```


*GitHub* : [113](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L113-L113)

```solidity
113:     function setFeeRedistributor(address feeRedistributor_) external onlyOwner {
114:         feeRedistributor = FeeSplitter(payable(feeRedistributor_));
115:     }

```


*GitHub* : [113](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L113-L113)
### [D-07]<a name="d-07"></a> Employ Explicit Casting to Bytes or Bytes32 for Enhanced Code Clarity and Meaning [EXP-3]
Smart contracts are complex entities, and clarity in their operations is fundamental to ensure that they function as intended. Casting a single argument instead of utilizing 'abi.encodePacked()' improves the transparency of the operation. It elucidates the intent of the code, reducing ambiguity and making it easier for auditors and developers to understand the code’s purpose. Such practices promote readability and maintainability, thus reducing the likelihood of errors and misunderstandings. Therefore, it's recommended to employ explicit casts for single arguments where possible, to increase the contract's comprehensibility and ensure a smoother review process.

*There are 2 instance(s) of this issue:*

```solidity
338:     function _deployERC20(
339:         address curvesTokenSubject,
340:         string memory name,
341:         string memory symbol
342:     ) internal returns (address) {
343:         
344:         if (keccak256(bytes(symbol)) == keccak256(bytes(DEFAULT_SYMBOL))) {
345:             _curvesTokenCounter += 1;
346:             name = string(abi.encodePacked(name, " ", Strings.toString(_curvesTokenCounter))); // <= FOUND
347:             symbol = string(abi.encodePacked(symbol, Strings.toString(_curvesTokenCounter))); // <= FOUND
348:         }
349: 
350:         if (symbolToSubject[symbol] != address(0)) revert InvalidERC20Metadata();
351: 
352:         address tokenContract = CurvesERC20Factory(curvesERC20Factory).deploy(name, symbol, address(this));
353: 
354:         externalCurvesTokens[curvesTokenSubject].token = tokenContract;
355:         externalCurvesTokens[curvesTokenSubject].name = name;
356:         externalCurvesTokens[curvesTokenSubject].symbol = symbol;
357:         externalCurvesToSubject[tokenContract] = curvesTokenSubject;
358:         symbolToSubject[symbol] = curvesTokenSubject;
359: 
360:         emit TokenDeployed(curvesTokenSubject, tokenContract, name, symbol);
361:         return address(tokenContract);
362:     }

```


*GitHub* : [346](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L346-L347)

```solidity
338:     function _deployERC20(
339:         address curvesTokenSubject,
340:         string memory name,
341:         string memory symbol
342:     ) internal returns (address) {
343:         
344:         if (keccak256(bytes(symbol)) == keccak256(bytes(DEFAULT_SYMBOL))) {
345:             _curvesTokenCounter += 1;
346:             name = string(abi.encodePacked(name, " ", Strings.toString(_curvesTokenCounter))); // <= FOUND
347:             symbol = string(abi.encodePacked(symbol, Strings.toString(_curvesTokenCounter))); // <= FOUND
348:         }
349: 
350:         if (symbolToSubject[symbol] != address(0)) revert InvalidERC20Metadata();
351: 
352:         address tokenContract = CurvesERC20Factory(curvesERC20Factory).deploy(name, symbol, address(this));
353: 
354:         externalCurvesTokens[curvesTokenSubject].token = tokenContract;
355:         externalCurvesTokens[curvesTokenSubject].name = name;
356:         externalCurvesTokens[curvesTokenSubject].symbol = symbol;
357:         externalCurvesToSubject[tokenContract] = curvesTokenSubject;
358:         symbolToSubject[symbol] = curvesTokenSubject;
359: 
360:         emit TokenDeployed(curvesTokenSubject, tokenContract, name, symbol);
361:         return address(tokenContract);
362:     }

```


*GitHub* : [346](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L346-L347)
### [D-08]<a name="d-08"></a> Duplicated revert() checks should be refactored to a modifier or function [EXP-3]

*There are 2 instance(s) of this issue:*

```solidity
371:         if (supply != 0) revert CurveAlreadyExists(); // <= FOUND

```


*GitHub* : [371](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L371-L371)

```solidity
371:         if (supply != 0) revert CurveAlreadyExists(); // <= FOUND

```


*GitHub* : [371](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L371-L371)
### [D-09]<a name="d-09"></a> Missing events in sensitive functions [EXP-3]
Sensitive setter functions in smart contracts often alter critical state variables. Without events emitted in these functions, external observers or dApps cannot easily track or react to these state changes. Missing events can obscure contract activity, hampering transparency and making integration more challenging. To resolve this, incorporate appropriate event emissions within these functions. Events offer an efficient way to log crucial changes, aiding in real-time tracking and post-transaction verification.

*There are 2 instance(s) of this issue:*

```solidity
35:     function setCurves(Curves curves_) public { // <= FOUND
36:         curves = curves_;
37:     }

```


*GitHub* : [35](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/FeeSplitter.sol#L35-L35)

```solidity
23:     function setManager(address manager_, bool value) public onlyOwner { // <= FOUND
24:         managers[manager_] = value;
25:     }

```


*GitHub* : [23](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Security.sol#L23-L23)
### [D-10]<a name="d-10"></a> Optimize by Using Assembly for Low-Level Calls' Return Data
Using assembly for low-level calls in Solidity can provide gas savings, especially when dealing with return data. High-level Solidity calls include overhead for decoding return data, which can be bypassed with assembly. By directly accessing return data in assembly, you can eliminate unnecessary memory allocation and data copying, leading to a more gas-efficient execution. However, this approach requires a deep understanding of the Ethereum Virtual Machine (EVM) and is prone to errors. It’s crucial to ensure security and correctness in the implementation. This technique is best suited for advanced users aiming to optimize contract performance in specific, gas-critical scenarios.

*There are 3 instance(s) of this issue:*

```solidity
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}(""); // <= FOUND

```


*GitHub* : [232](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L232-L232)

```solidity
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}(""); // <= FOUND

```


*GitHub* : [232](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L232-L232)

```solidity
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}(""); // <= FOUND

```


*GitHub* : [232](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L232-L232)
### [D-11]<a name="d-11"></a> External call recipient may consume all transaction gas
When making external calls, the called contract can intentionally or unintentionally consume all provided gas, leading to unintended transaction reversion. To mitigate this risk, it's crucial to specify a gas limit when making the call. By using `addr.call{gas: <amount>}("")`, you allocate a specific amount of gas to the external call, ensuring the parent transaction has gas left for post-call operations. This approach safeguards against malevolent contracts aiming to exhaust gas and provides greater control over transaction execution.

*There are 2 instance(s) of this issue:*

```solidity
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}(""); // <= FOUND

```


*GitHub* : [232](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L232-L232)

```solidity
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}(""); // <= FOUND

```


*GitHub* : [232](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L232-L232)
### [D-12]<a name="d-12"></a> Use of abi.encodePacked with dynamic types inside keccak256
Using abi.encodePacked with dynamic types for hashing functions like keccak256 can be risky due to the potential for hash collisions. This function concatenates arguments tightly, without padding, which might lead to different inputs producing the same hash. This is especially problematic with dynamic types, where the boundaries between inputs can blur. To mitigate this, use abi.encode instead. abi.encode pads its arguments to 32 bytes, creating clear distinctions between different inputs and significantly reducing the chance of hash collisions. This approach ensures more reliable and collision-resistant hashing, crucial for maintaining data integrity and security in smart contracts.

*There are 3 instance(s) of this issue:*

```solidity
424:         
425:         bytes32 leaf = keccak256(abi.encodePacked(caller)); // <= FOUND

```


*GitHub* : [425](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L425-L425)

```solidity
424:         
425:         bytes32 leaf = keccak256(abi.encodePacked(caller)); // <= FOUND

```


*GitHub* : [425](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L425-L425)

```solidity
424:         
425:         bytes32 leaf = keccak256(abi.encodePacked(caller)); // <= FOUND

```


*GitHub* : [425](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L425-L425)
### [D-13]<a name="d-13"></a> Inconsistent checks of address params against address(0)
Only some address parameters are checked against address(0), to ensure consistency ensure all address parameters are checked.

*There are 2 instance(s) of this issue:*

```solidity
218:     function _transferFees(
219:         address curvesTokenSubject, // <= FOUND 'address curvesTokenSubject'
220:         bool isBuy,
221:         uint256 price,
222:         uint256 amount,
223:         uint256 supply
224:     ) internal {
225:         (uint256 protocolFee, uint256 subjectFee, uint256 referralFee, uint256 holderFee, ) = getFees(price);
226:         {
227:             bool referralDefined = referralFeeDestination[curvesTokenSubject] != address(0);
228:             {
229:                 address firstDestination = isBuy ? feesEconomics.protocolFeeDestination : msg.sender;
230:                 uint256 buyValue = referralDefined ? protocolFee : protocolFee + referralFee;
231:                 uint256 sellValue = price - protocolFee - subjectFee - referralFee - holderFee;
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}("");
233:                 if (!success1) revert CannotSendFunds();
234:             }
235:             {
236:                 (bool success2, ) = curvesTokenSubject.call{value: subjectFee}("");
237:                 if (!success2) revert CannotSendFunds();
238:             }
239:             {
240:                 (bool success3, ) = referralDefined
241:                     ? referralFeeDestination[curvesTokenSubject].call{value: referralFee}("")
242:                     : (true, bytes(""));
243:                 if (!success3) revert CannotSendFunds();
244:             }
245: 
246:             if (feesEconomics.holdersFeePercent > 0 && address(feeRedistributor) != address(0)) {
247:                 feeRedistributor.onBalanceChange(curvesTokenSubject, msg.sender);
248:                 feeRedistributor.addFees{value: holderFee}(curvesTokenSubject);
249:             }
250:         }
251:         emit Trade(
252:             msg.sender,
253:             curvesTokenSubject,
254:             isBuy,
255:             amount,
256:             price,
257:             protocolFee,
258:             subjectFee,
259:             isBuy ? supply + amount : supply - amount
260:         );
261:     }

```


*GitHub* : [218](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L218-L219)

```solidity
218:     function _transferFees(
219:         address curvesTokenSubject, // <= FOUND 'address curvesTokenSubject'
220:         bool isBuy,
221:         uint256 price,
222:         uint256 amount,
223:         uint256 supply
224:     ) internal {
225:         (uint256 protocolFee, uint256 subjectFee, uint256 referralFee, uint256 holderFee, ) = getFees(price);
226:         {
227:             bool referralDefined = referralFeeDestination[curvesTokenSubject] != address(0);
228:             {
229:                 address firstDestination = isBuy ? feesEconomics.protocolFeeDestination : msg.sender;
230:                 uint256 buyValue = referralDefined ? protocolFee : protocolFee + referralFee;
231:                 uint256 sellValue = price - protocolFee - subjectFee - referralFee - holderFee;
232:                 (bool success1, ) = firstDestination.call{value: isBuy ? buyValue : sellValue}("");
233:                 if (!success1) revert CannotSendFunds();
234:             }
235:             {
236:                 (bool success2, ) = curvesTokenSubject.call{value: subjectFee}("");
237:                 if (!success2) revert CannotSendFunds();
238:             }
239:             {
240:                 (bool success3, ) = referralDefined
241:                     ? referralFeeDestination[curvesTokenSubject].call{value: referralFee}("")
242:                     : (true, bytes(""));
243:                 if (!success3) revert CannotSendFunds();
244:             }
245: 
246:             if (feesEconomics.holdersFeePercent > 0 && address(feeRedistributor) != address(0)) {
247:                 feeRedistributor.onBalanceChange(curvesTokenSubject, msg.sender);
248:                 feeRedistributor.addFees{value: holderFee}(curvesTokenSubject);
249:             }
250:         }
251:         emit Trade(
252:             msg.sender,
253:             curvesTokenSubject,
254:             isBuy,
255:             amount,
256:             price,
257:             protocolFee,
258:             subjectFee,
259:             isBuy ? supply + amount : supply - amount
260:         );
261:     }

```


*GitHub* : [218](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L218-L219)
### [D-14]<a name="d-14"></a> Division in comparison
To ensure accuracy in comparisons within programming, especially when dealing with integers, it's often more efficient to use multiplication rather than division. This approach stems from the fact that division operations are generally slower and more complex than multiplication. And in the context of solidity they can cause precision errors.

Suppose you want to compare if a/b is greater than c/d (where a, b, c, and d are integers). Instead of performing division, which is prone to precision errors, you can cross-multiply to avoid division. The comparison a/b > c/d is equivalent to a*d > b*c. This way, you only use multiplication, which is faster and avoids potential inaccuracies or complexities associated with division.

*There are 1 instance(s) of this issue:*

```solidity
181:         uint256 sum1 = supply == 0 ? 0 : ((supply - 1) * (supply) * (2 * (supply - 1) + 1)) / 6; // <= FOUND

```


*GitHub* : [181](https://github.com/code-423n4/2024-01-curves/blob/main/contracts/Curves.sol#L181-L181) V4 wen?