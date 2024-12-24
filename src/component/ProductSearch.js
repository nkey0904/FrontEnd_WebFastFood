import React, { useState } from 'react';
import toast from 'react-hot-toast';

const ProductSearch = ({ products, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); 
    // console.log(e.target.value);
  };

  const handleSearchSubmit = async () => {
    if (!searchTerm.trim()) {
      toast.error("Please enter your product!");
      return;
    }; 

    setLoading(true); 
    try {
      const response = await fetch(`http://localhost:8080/product/search?name=${encodeURIComponent(searchTerm)}`);
      if (!response.ok) throw new Error('Failed to fetch products');

      const data = await response.json(); 
      // console.log('API Response:', data);
      onSearch(data); 
    } catch (error) {
      console.error('Error searching for products:', error);
      onSearch([]); 
    } finally {
      setLoading(false); 
    }
  };
  return (
    <div className="p-4 flex items-center gap-2">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search for a product..."
        className="border p-2 rounded w-full"
      />
      <button
        onClick={handleSearchSubmit}
        className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={loading}
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
    </div>
  );
};

export default ProductSearch;
