export async function fetchAvailablePlaces() {
    const response = await fetch('https://fakestoreapi.com/products');
    const resData = await response.json();
  
    if (!response.ok) {
      throw new Error('Failed to fetch places');
    }
  
    return resData.places;
  }