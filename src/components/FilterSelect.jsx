import Select from 'react-select';
import { fetchProducts } from "../hooks/useHttps";
import { useEffect, useState } from "react";

const options = [
    { value: "", label: "All Products" },
    { value: "electronics", label: "Electronics" },
    { value: "jewelery", label: "Jewelery" },
    { value: "men's clothing", label: "Men's Clothing" },
    { value: "women's clothing", label: "Women's Clothing" },
];

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "#0f3460",
        color: "white",
        borderRadius: "5px",
        border: "none",
        boxShadow: "none",
        width: "200px",
        height: "40px",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#0f3460" : "white",
        color: state.isSelected ? "white" : "#0f3460",
        "&:hover": {
        backgroundColor: "#0f3460",
        color: "white",
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "white",
    }),
};

const FilterSelect = ({setFilterList}) => {
    const [products, setProducts] = useState([]);
    // console.log(products)

  useEffect(() => {

    async function fetchAvailableProducts() {

      const fetchedProducts = await fetchProducts();

      setProducts(fetchedProducts);
    }
    
    fetchAvailableProducts();

  }, []);

    const handleChange = (selectedOption)=> {

        if (selectedOption.value === "") {
            setFilterList(products)
        } else {
            setFilterList(products.filter(item => item.category === selectedOption.value))
        }
    }

    return (
    <Select
    options={options}
    defaultValue={{ value: "", label: "Filter By Category" }}
    styles={customStyles}
    onChange={handleChange}
    />
    );
};

export default FilterSelect;