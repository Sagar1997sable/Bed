import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Plus, Heart, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  rating: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  onBuyNow?: (product: Product) => void;
  isInWishlist: boolean;
  index: number;
}

export function ProductCard({ product, onAddToCart, onToggleWishlist, onBuyNow, isInWishlist, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className="group overflow-hidden border-2 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 bg-white relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden aspect-square">
          {/* Image */}
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />

          {/* Gradient overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent"
          />

          {/* Rating badge */}
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute top-3 right-3 glass-effect px-3 py-1.5 rounded-full text-sm flex items-center gap-1 shadow-lg"
          >
            <span className="text-yellow-500">★</span>
            <span>{product.rating}</span>
          </motion.div>

          {/* Wishlist button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onToggleWishlist(product)}
            className="absolute top-3 left-3 w-10 h-10 glass-effect rounded-full flex items-center justify-center shadow-lg"
          >
            <Heart
              className={`h-5 w-5 transition-colors ${
                isInWishlist ? 'fill-pink-500 text-pink-500' : 'text-gray-600'
              }`}
            />
          </motion.button>

          {/* Quick actions on hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            className="absolute bottom-0 left-0 right-0 p-4 space-y-2"
          >
            {onBuyNow && (
              <Button
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg"
                onClick={() => onBuyNow(product)}
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Buy Now
              </Button>
            )}
            <Button
              className="w-full bg-white text-purple-600 hover:bg-purple-50 shadow-lg"
              onClick={() => onAddToCart(product)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </motion.div>
        </div>

        <CardContent className="p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-xs text-purple-600 mb-1 uppercase tracking-wider">
              {product.category}
            </div>
            <h3 className="text-lg mb-2 line-clamp-1">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {product.description}
            </p>
            <div className="text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              ₹{product.price.toLocaleString('en-IN')}
            </div>
          </motion.div>
        </CardContent>

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
          initial={false}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 shimmer" />
        </motion.div>
      </Card>
    </motion.div>
  );
}
