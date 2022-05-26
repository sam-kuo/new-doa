"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2335],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,f=p["".concat(d,".").concat(h)]||p[h]||u[h]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2628:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],o={id:"nft-extension",title:"NFT"},d=void 0,l={unversionedId:"contracts/extensions/nft-extension",id:"contracts/extensions/nft-extension",isDocsHomePage:!1,title:"NFT",description:"An IERC721Receiver contract safely manages the collection of standard NFTs (ERC721) collected by the DAO.",source:"@site/docs/contracts/extensions/NFT.md",sourceDirName:"contracts/extensions",slug:"/contracts/extensions/nft-extension",permalink:"/docs/contracts/extensions/nft-extension",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/contracts/extensions/NFT.md",tags:[],version:"current",frontMatter:{id:"nft-extension",title:"NFT"},sidebar:"docs",previous:{title:"ERC20",permalink:"/docs/contracts/extensions/erc20-extension"},next:{title:"Executor",permalink:"/docs/contracts/extensions/executor-extension"}},c=[{value:"Access Flags",id:"access-flags",children:[]},{value:"Storage",id:"storage",children:[]},{value:"Functions",id:"functions",children:[{value:"initialize",id:"initialize",children:[]},{value:"collect",id:"collect",children:[]},{value:"withdrawNFT",id:"withdrawnft",children:[]},{value:"internalTransfer",id:"internaltransfer",children:[]},{value:"getNFTId",id:"getnftid",children:[]},{value:"nbNFTs",id:"nbnfts",children:[]},{value:"getNFT",id:"getnft",children:[]},{value:"nbNFTAddresses",id:"nbnftaddresses",children:[]},{value:"getNFTAddress",id:"getnftaddress",children:[]},{value:"getNFTOwner",id:"getnftowner",children:[]},{value:"onERC721Received",id:"onerc721received",children:[]},{value:"_saveNft",id:"_savenft",children:[]}]},{value:"Events",id:"events",children:[{value:"CollectedNFT",id:"collectednft",children:[]},{value:"WithdrawnNFT",id:"withdrawnnft",children:[]},{value:"TransferredNFT",id:"transferrednft",children:[]}]}],u={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An ",(0,i.kt)("a",{parentName:"p",href:"https://docs.openzeppelin.com/contracts/3.x/api/token/erc721#IERC721Receiver"},"IERC721Receiver")," contract safely manages the collection of standard NFTs (ERC721) collected by the DAO."),(0,i.kt)("p",null,"The extension adds to the DAO the capability of managing and curating a collection of standard NFTs. Applicants can join the DAO offering NFTs as tributes, and if their proposal is approved their tributes get stored in the guild NFT collection - which supports tokens in ERC721 standard."),(0,i.kt)("p",null,"In order to join the DAO using a NFT as tribute, the DAO must have the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/contracts/adapters/onboarding/tribute-nft-adapter"},"TributeNFT Adapter"))," pre-configured with the correct access flags."),(0,i.kt)("h2",{id:"access-flags"},"Access Flags"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"COLLECT_NFT"),": Allows the caller adapter to transfer the NFT to the GUILD collection."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WITHDRAW_NFT"),": Allows the caller to remove the NFT from the GUILD collection and return it to a new owner."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"INTERNAL_TRANSFER"),": Allows the caller to update the internal ownership of the NFT within the GUILD collection.")),(0,i.kt)("h2",{id:"storage"},"Storage"),(0,i.kt)("h4",{id:"public-initialized"},"public initialized"),(0,i.kt)("p",null,"Internally tracks deployment under eip-1167 proxy pattern."),(0,i.kt)("h4",{id:"public-dao"},"public dao"),(0,i.kt)("p",null,"Keeps track of each DAO instance the current contract belongs to."),(0,i.kt)("h4",{id:"private-_nfts"},"private ","_","nfts"),(0,i.kt)("p",null,"Tracks all the Token IDs that belong to an NFT address stored in the GUILD collection."),(0,i.kt)("h4",{id:"private-_ownership"},"private ","_","ownership"),(0,i.kt)("p",null,"Tracks the internal owner of record of an NFT that has been transferred to the extension."),(0,i.kt)("h4",{id:"private-_nftaddresses"},"private ","_","nftAddresses"),(0,i.kt)("p",null,"Tracks all the NFTs addresses collected and stored in the GUILD collection."),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"initialize"},"initialize"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @notice Initializes the extension with the DAO address that it belongs to.\n  * @param _dao The address of the DAO that owns the extension.\n  * @param creator The owner of the DAO and Extension that is also a member of the DAO.\n  */\nfunction initialize(DaoRegistry _dao, address creator) external\n")),(0,i.kt)("h3",{id:"collect"},"collect"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solitidy"},"/**\n  * @notice Collects the NFT from the owner and moves it to the NFT extension.\n  * @notice It must be have been allowed to move this token by either {approve} or {setApprovalForAll}.\n  * @notice The caller must have the ACL Flag: COLLECT_NFT\n  * @dev Reverts if the NFT is not in ERC721 standard.\n  * @param nftAddr The NFT contract address.\n  * @param nftTokenId The NFT token id.\n  */\nfunction collect(\n    address nftAddr,\n    uint256 nftTokenId\n) external\n")),(0,i.kt)("h3",{id:"withdrawnft"},"withdrawNFT"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @notice Ttransfers the NFT token from the extension address to the new owner.\n  * @notice It also updates the internal state to keep track of the all the NFTs collected by the extension.\n  * @notice The caller must have the ACL Flag: WITHDRAW_NFT\n  * @dev Reverts if the NFT is not in ERC721 standard.\n  * @param newOwner The address of the new owner.\n  * @param nftAddr The NFT address that must be in ERC721 standard.\n  * @param nftTokenId The NFT token id.\n  */\nfunction withdrawNFT(\n    address newOwner,\n    address nftAddr,\n    uint256 nftTokenId\n) public hasExtensionAccess(this, AclFlag.WITHDRAW_NFT)\n")),(0,i.kt)("h3",{id:"internaltransfer"},"internalTransfer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @notice Updates internally the ownership of the NFT.\n  * @notice The caller must have the ACL Flag: INTERNAL_TRANSFER\n  * @dev Reverts if the NFT is not already internally owned in the extension.\n  * @param nftAddr The NFT address.\n  * @param nftTokenId The NFT token id.\n  * @param newOwner The address of the new owner.\n  */\nfunction transferFrom(\n    address escrowAddr,\n    address nftAddr,\n    address newOwner\n) public hasExtensionAccess(this, AclFlag.INTERNAL_TRANSFER)\n")),(0,i.kt)("h3",{id:"getnftid"},"getNFTId"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @notice Gets ID generated from an NFT address and token id (used internally to map ownership).\n  * @param nftAddress The NFT address.\n  * @param tokenId The NFT token id.\n  */\nfunction getNFTId(address nftAddress, uint256 tokenId)\n    public\n    pure\n    returns (bytes32)\n")),(0,i.kt)("h3",{id:"nbnfts"},"nbNFTs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @notice Returns the total amount of token ids collected for an NFT address.\n  */\nfunction nbNFTs(address tokenAddr) public view returns (uint256)\n")),(0,i.kt)("h3",{id:"getnft"},"getNFT"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @notice Returns token id associated with an NFT address stored in the GUILD collection at the specified index.\n  * @param tokenAddr The NFT address.\n  * @param index The index to get the token id if it exists.\n  */\nfunction getNFT(address tokenAddr, uint256 index)\n    public\n    view\n    returns (uint256)\n")),(0,i.kt)("h3",{id:"nbnftaddresses"},"nbNFTAddresses"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @notice Returns the total amount of NFT addresses collected.\n  */\nfunction nbNFTAddresses() external view returns (uint256)\n")),(0,i.kt)("h3",{id:"getnftaddress"},"getNFTAddress"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @notice Returns NFT address stored in the GUILD collection at the specified index.\n  * @param index The index to get the NFT address if it exists.\n  */\nfunction getNFTAddress(uint256 index) external view returns (address)\n")),(0,i.kt)("h3",{id:"getnftowner"},"getNFTOwner"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @notice Returns owner of NFT that has been transferred to the extension.\n  * @param nftAddress The NFT address.\n  * @param tokenId The NFT token id.\n  */\nfunction getNFTOwner(address nftAddress, uint256 tokenId)\n    public\n    view\n    returns (address)\n")),(0,i.kt)("h3",{id:"onerc721received"},"onERC721Received"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @notice Required function from IERC721 standard to be able to receive assets to this contract address.\n  */\nfunction onERC721Received(\n    address,\n    address,\n    uint256,\n    bytes calldata\n) external pure override returns (bytes4)\n")),(0,i.kt)("h3",{id:"_savenft"},"_","saveNft"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @notice Helper function to update the extension states for an NFT collected by the extension.\n  * @param nftAddr The NFT address.\n  * @param nftTokenId The token id.\n  * @param owner The address of the owner.\n  */\nfunction _saveNft(\n    address nftAddr,\n    uint256 nftTokenId,\n    address owner\n) private\n")),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"collectednft"},"CollectedNFT"),(0,i.kt)("p",null,"When a NFT is collected/stored into the NFT collection."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event CollectedNFT(address nftAddr, uint256 nftTokenId);"))),(0,i.kt)("h3",{id:"withdrawnnft"},"WithdrawnNFT"),(0,i.kt)("p",null,"When a NFT is transferred from the extension to another owner."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event WithdrawnNFT(address nftAddr, uint256 nftTokenId, address toAddress);"))),(0,i.kt)("h3",{id:"transferrednft"},"TransferredNFT"),(0,i.kt)("p",null,"When a NFT is transferred from the escrow adapter to the NFT collection in the extension."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event TransferredNFT( address nftAddr, uint256 nftTokenId, address oldOwner, address newOwner );"))))}p.isMDXComponent=!0}}]);