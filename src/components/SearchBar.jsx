
const SearchBar = ({ onSearch }) => {
//     const [searchWord, setSearchWord] = useState(null);
//     const [products, setProducts] = useState([]);
//   useEffect(() => {
//     async function fetchAvailableProducts() {
//       try {
//         const fetchedProducts = await fetchProducts();

//         setProducts(fetchedProducts)
        
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     fetchAvailableProducts();
//   }, []);

  const handelChange = (input) => {
    // setSearchWord(input.target.value);
    onSearch(input.target.value);
   
  };
  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." onChange={handelChange} />
      <ion-icon name="search-outline" className="search-icon"></ion-icon>
    </div>
  );
};

export default SearchBar;