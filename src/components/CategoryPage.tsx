import React from 'react';
import { ProductCard, Product } from './ProductCard';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { SlidersHorizontal, X } from 'lucide-react';
import { Slider } from './ui/slider';

interface CategoryPageProps {
  category: string;
  products: Product[];
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  onBuyNow: (product: Product) => void;
  wishlistItems: Product[];
}

export function CategoryPage({ 
  category, 
  products, 
  onAddToCart, 
  onToggleWishlist, 
  onBuyNow,
  wishlistItems 
}: CategoryPageProps) {
  const [showFilters, setShowFilters] = React.useState(false);
  const [priceRange, setPriceRange] = React.useState([0, 150000]);
  const [sortBy, setSortBy] = React.useState('featured');
  const [selectedRating, setSelectedRating] = React.useState(0);

  const categoryProducts = products.filter(p => 
    p.category.toLowerCase() === category.toLowerCase()
  );

  // Apply filters
  let filteredProducts = categoryProducts.filter(p => 
    p.price >= priceRange[0] && p.price <= priceRange[1] &&
    (selectedRating === 0 || p.rating >= selectedRating)
  );

  // Apply sorting
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const maxPrice = Math.max(...categoryProducts.map(p => p.price));

  return (
    <section className="py-12 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent capitalize">
            {category}
          </h1>
          <p className="text-gray-600 text-lg">
            {filteredProducts.length} products available
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="w-full border-2 border-purple-200"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>

          {/* Filters Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className={`lg:block ${showFilters ? 'block' : 'hidden'} lg:w-64 flex-shrink-0`}
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-100 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Filters
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setPriceRange([0, maxPrice]);
                    setSelectedRating(0);
                    setSortBy('featured');
                  }}
                  className="text-xs"
                >
                  Reset
                </Button>
              </div>

              {/* Sort By */}
              <div className="mb-6">
                <label className="text-sm text-gray-700 mb-2 block">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-purple-200 rounded-lg focus:border-purple-400 outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="text-sm text-gray-700 mb-3 block">
                  Price Range: ₹{priceRange[0].toLocaleString('en-IN')} - ₹{priceRange[1].toLocaleString('en-IN')}
                </label>
                <Slider
                  min={0}
                  max={maxPrice}
                  step={1000}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mb-2"
                />
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <label className="text-sm text-gray-700 mb-3 block">Minimum Rating</label>
                <div className="space-y-2">
                  {[4.5, 4.0, 3.5, 0].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setSelectedRating(rating)}
                      className={`w-full px-3 py-2 rounded-lg text-sm transition-all ${
                        selectedRating === rating
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                          : 'bg-purple-50 text-gray-700 hover:bg-purple-100'
                      }`}
                    >
                      {rating === 0 ? 'All Ratings' : `${rating}★ & above`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Categories Quick Links */}
              <div>
                <label className="text-sm text-gray-700 mb-3 block">Quick Links</label>
                <div className="space-y-2">
                  <a href="#why-livesleep" className="block text-sm text-purple-600 hover:text-purple-700">
                    Why LiveSleep?
                  </a>
                  <a href="#about" className="block text-sm text-purple-600 hover:text-purple-700">
                    About Us
                  </a>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">😔</div>
                <p className="text-gray-500 text-lg mb-4">No products match your filters</p>
                <Button
                  onClick={() => {
                    setPriceRange([0, maxPrice]);
                    setSelectedRating(0);
                  }}
                  variant="outline"
                  className="border-2 border-purple-200"
                >
                  Reset Filters
                </Button>
              </motion.div>
            ) : (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                    onToggleWishlist={onToggleWishlist}
                    onBuyNow={onBuyNow}
                    isInWishlist={wishlistItems.some(item => item.id === product.id)}
                    index={index}
                  />
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
