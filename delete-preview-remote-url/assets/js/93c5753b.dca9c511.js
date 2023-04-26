"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6142],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>h});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),l=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},p=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=l(r),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(h,c(c({ref:e},p),{},{components:r})):a.createElement(h,c({ref:e},p))}));function h(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[d]="string"==typeof t?t:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3005:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={description:"Enable your dapp to interact with smart contracts."},c="Interact with smart contracts",i={unversionedId:"how-to/interact-with-smart-contracts",id:"how-to/interact-with-smart-contracts",title:"Interact with smart contracts",description:"Enable your dapp to interact with smart contracts.",source:"@site/wallet/how-to/interact-with-smart-contracts.md",sourceDirName:"how-to",slug:"/how-to/interact-with-smart-contracts",permalink:"/delete-preview-remote-url/wallet/how-to/interact-with-smart-contracts",draft:!1,tags:[],version:"current",frontMatter:{description:"Enable your dapp to interact with smart contracts."},sidebar:"walletSidebar",previous:{title:"Use MetaMask Mobile",permalink:"/delete-preview-remote-url/wallet/how-to/use-mobile"},next:{title:"Send transactions",permalink:"/delete-preview-remote-url/wallet/how-to/send-transactions"}},s={},l=[{value:"Contract network",id:"contract-network",level:2},{value:"Contract address",id:"contract-address",level:2},{value:"Contract ABI",id:"contract-abi",level:2},{value:"Contract bytecode",id:"contract-bytecode",level:2},{value:"Contract source code",id:"contract-source-code",level:2}],p={toc:l};function d(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"interact-with-smart-contracts"},"Interact with smart contracts"),(0,n.kt)("p",null,"To interact with a smart contract, your dapp needs the contract's:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#contract-network"},"Network"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#contract-address"},"Address"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#contract-abi"},"ABI"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#contract-bytecode"},"Bytecode"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#contract-source-code"},"Source code"),".")),(0,n.kt)("h2",{id:"contract-network"},"Contract network"),(0,n.kt)("p",null,"If you're not connected to the right network, you can't send transactions to your contract.\nMany dapp developers deploy their contract to a testnet first, in order to avoid potentially\ndisastrous fees if something goes wrong during development and testing on Mainnet."),(0,n.kt)("p",null,"Regardless of which network you deploy your final dapp on, your users must be able to access it.\nUse the ",(0,n.kt)("a",{parentName:"p",href:"/delete-preview-remote-url/wallet/reference/rpc-api#wallet_switchethereumchain"},(0,n.kt)("inlineCode",{parentName:"a"},"wallet_switchEthereumChain"))," and\n",(0,n.kt)("a",{parentName:"p",href:"/delete-preview-remote-url/wallet/reference/rpc-api#wallet_addethereumchain"},(0,n.kt)("inlineCode",{parentName:"a"},"wallet_addEthereumChain"))," RPC methods to prompt\nthe user to add a chain that you suggest, and switch to it using a confirmation dialogue."),(0,n.kt)("h2",{id:"contract-address"},"Contract address"),(0,n.kt)("p",null,"Every account in Ethereum has an address, whether it's an external key-pair account or a smart contract.\nFor any smart contract library to communicate with your contracts, a smart contract  must know the exact address."),(0,n.kt)("p",null,"Read about\n",(0,n.kt)("a",{parentName:"p",href:"https://metamask.zendesk.com/hc/en-us/articles/360059683451-How-to-view-or-add-custom-token-contract-address"},"how to find a token contact address"),"."),(0,n.kt)("h2",{id:"contract-abi"},"Contract ABI"),(0,n.kt)("p",null,"In Ethereum, the ",(0,n.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/develop/abi-spec.html"},"ABI specification")," is a\nway to encode the interface of a smart contract that's comprehensible to your user interface.\nThe ABI is an array of method-describing objects, and when you feed this and the address into a\ncontract-abstraction library, the ABI tells those libraries about what methods to provide, and\nhow to compose transactions to call those methods."),(0,n.kt)("p",null,"Example libraries include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ethers"},"Ethers"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/web3"},"web3.js"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://framework.embarklabs.io/"},"Embark"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ethjs"},"ethjs"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.trufflesuite.com/"},"Truffle"),".")),(0,n.kt)("h2",{id:"contract-bytecode"},"Contract bytecode"),(0,n.kt)("p",null,"If your dapp publishes a new pre-compiled smart contract, it might need to include some bytecode.\nYou don't know the contract address in advance; you must publish the contract, watch for the\ntransaction to be processed, and then extract the final contract's address from the completed transaction."),(0,n.kt)("p",null,"If you publish a contract from bytecode, you still need an ",(0,n.kt)("a",{parentName:"p",href:"#contract-abi"},"ABI")," to interact with it.\nThe bytecode doesn't describe how to interact with the final contract."),(0,n.kt)("h2",{id:"contract-source-code"},"Contract source code"),(0,n.kt)("p",null,"If your dapp allows users to edit smart contract source code and compile it, similar to\n",(0,n.kt)("a",{parentName:"p",href:"http://remix.ethereum.org/"},"Remix"),", you can import a whole compiler.\nYou derive your bytecode and ABI from that source code, and eventually derive the contract's address\nfrom the completed transaction, where that bytecode is published."))}d.isMDXComponent=!0}}]);