// import * as React from "react";
// import PropTypes from "prop-types";
// import { useAutocomplete } from "@mui/base/useAutocomplete";
// import CheckIcon from "@mui/icons-material/Check";
// import CloseIcon from "@mui/icons-material/Close";
// import { styled } from "@mui/material/styles";
// import { autocompleteClasses } from "@mui/material/Autocomplete";
// import Products from "./Products";

// const Root = styled("div")(
//   ({ theme }) => `
//   color: ${
//     theme.palette.mode === "dark" ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,.85)"
//   };
//   font-size: 18px;
//   margin: 10px
// `
// );

// const Label = styled("label")`
//   padding: 10px;

//   line-height: 1.5;
//   display: block;
// `;

// const InputWrapper = styled("div")(
//   ({ theme }) => `
//   width: 300px;
//   border: 1px solid ${theme.palette.mode === "dark" ? "#434343" : "#d9d9d9"};
//   background-color: ${theme.palette.mode === "dark" ? "#141414" : "#f5f5f5"};
//   border-radius: 4px;
//   padding: 5px;
//   display: flex;
//   flex-wrap: wrap;

//   &:hover {
//     border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
//   }

//   &.focused {
//     border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
//     box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
//   }

//   & input {
//     background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
//     color: ${
//       theme.palette.mode === "dark"
//         ? "rgba(255,255,255,0.65)"
//         : "rgba(0,0,0,.85)"
//     };
//     height: 30px;
//     box-sizing: border-box;
//     padding: 4px 6px;
//     width: 0;
//     min-width: 30px;
//     flex-grow: 1;
//     border: 0;
//     margin: 0;
//     outline: 0;
//   }
// `
// );

// function Tag(props) {
//   const { label, onDelete, ...other } = props;
//   return (
//     <div {...other}>
//       <span>{label}</span>
//       <CloseIcon onClick={onDelete} />
//     </div>
//   );
// }

// Tag.propTypes = {
//   onDelete: PropTypes.func.isRequired,
// };

// const StyledTag = styled(Tag)(
//   ({ theme }) => `
//   display: flex;
//   align-items: center;
//   height: 24px;
//   margin: 2px;
//   line-height: 22px;
//   background-color: ${
//     theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "#fafafa"
//   };
//   border: 1px solid ${theme.palette.mode === "dark" ? "#303030" : "#e8e8e8"};
//   border-radius: 2px;
//   box-sizing: content-box;
//   padding: 0 4px 0 10px;
//   outline: 0;
//   overflow: hidden;

//   &:focus {
//     border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
//     background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
//   }

//   & span {
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//   }

//   & svg {
//     font-size: 12px;
//     cursor: pointer;
//     padding: 4px;
//   }
// `
// );

// const Listbox = styled("ul")(
//   ({ theme }) => `
//   width: 300px;
//   margin: 2px 0 0;
//   padding: 0;
//   position: absolute;
//   list-style: none;
//   background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
//   overflow: auto;
//   max-height: 250px;
//   border-radius: 4px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
//   z-index: 1;

//   & li {
//     padding: 5px 12px;
//     display: flex;

//     & span {
//       flex-grow: 1;
//     }

//     & svg {
//       color: transparent;
//     }
//   }

//   & li[aria-selected='true'] {
//     background-color: ${theme.palette.mode === "dark" ? "#2b2b2b" : "#fafafa"};
//     font-weight: 600;

//     & svg {
//       color: #1890ff;
//     }
//   }

//   & li.${autocompleteClasses.focused} {
//     background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
//     cursor: pointer;

//     & svg {
//       color: currentColor;
//     }
//   }
// `
// );

// //

// const [selectedCategory, setSelectedCategory] = useState("");
// const [filteredProdList, setFilteredProdList] = useState("");

// function getFilteredCategory() {
//   let filteredProdList = products;
//   if (selectedCategory) {
//     filteredProdList = products.filter(
//       (products) => products.category_name === selectedCategory
//     );
//   }
// }

// function handleCategoryChange(categories) {
//   setSelectedCategory(categories);
// }

// export default function ViewByCategory() {
//   const {
//     getRootProps,
//     getInputLabelProps,
//     getInputProps,
//     getTagProps,
//     getListboxProps,
//     getOptionProps,
//     groupedOptions,
//     value,
//     focused,
//     setAnchorEl,
//   } = useAutocomplete({
//     id: "customized-hook-demo",
//     defaultValue: [categories[0]],
//     multiple: true,
//     options: categories,
//   });

//   return (
//     <Root>
//       <div {...getRootProps()}>
//         <Label {...getInputLabelProps()}></Label>
//         <InputWrapper ref={setAnchorEl} className={focused ? "focused" : ""}>
//           {value.map((categories, index) => (
//             <StyledTag label={categories} {...getTagProps({ index })} />
//           ))}
//           <input {...getInputProps()} />
//         </InputWrapper>
//       </div>
//       {groupedOptions.length > 0
//         ? ((
//             <Listbox {...getListboxProps()}>
//               {groupedOptions.map((categories, index) => (
//                 <li {...getOptionProps({ categories, index })}>
//                   <span>{categories}</span>
//                   <CheckIcon fontSize="small" />
//                   <input
//                     type="checkbox"
//                     checked={selectedCategory === ""}
//                     onChange={() => setSelectedCategory({ categories })}
//                   ></input>
//                 </li>
//               ))}
//             </Listbox>
//           ),
//           (<Products />))
//         : null}
//     </Root>
//   );
// }

// const categories = [
//   "All",
//   "Books",
//   "Decor",
//   "Electronics",
//   "Games & Toys",
//   "Housewares",
//   "Jewelry & Accessories",
//   "Miscellaneous",
// ];
