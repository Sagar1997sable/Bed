import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { Button } from './ui/button';
import { Heart, X, ShoppingCart } from 'lucide-react';
import { Product } from './ProductCard';
import { motion, AnimatePresence } from 'motion/react';

interface WishlistProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistItems: Product[];
  onRemoveItem: (productId: string) => void;
  onAddToCart: (product: Product) => void;
}

export function Wishlist({
  isOpen,
  onClose,
  wishlistItems,
  onRemoveItem,
  onAddToCart
}: WishlistProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col bg-gradient-to-br from-white to-pink-50/30">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-2xl">
            <Heart className="h-6 w-6 text-pink-600 fill-pink-600" />
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              My Wishlist
            </span>
          </SheetTitle>
        </SheetHeader>

        {wishlistItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 flex items-center justify-center"
          >
            <div className="text-center space-y-4">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="text-6xl"
              >
                💝
              </motion.div>
              <p className="text-gray-500 text-lg">Your wishlist is empty</p>
              <p className="text-sm text-gray-400">Start adding items you love!</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={onClose}
                  variant="outline"
                  className="border-2 border-pink-300 hover:bg-pink-50"
                >
                  Continue Shopping
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <div className="flex-1 overflow-y-auto py-6">
            <AnimatePresence mode="popLayout">
              <div className="space-y-4">
                {wishlistItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    layout
                    className="flex gap-4 bg-white rounded-xl p-4 border-2 border-pink-100 hover:border-pink-300 transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-lg" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1 min-w-0 pr-2">
                          <h4 className="text-sm truncate">{item.name}</h4>
                          <p className="text-xs text-pink-600">{item.category}</p>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.2, rotate: 90 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => onRemoveItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                        >
                          <X className="h-4 w-4" />
                        </motion.button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-lg bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                          ${item.price.toFixed(2)}
                        </span>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white"
                            onClick={() => {
                              onAddToCart(item);
                              onRemoveItem(item.id);
                            }}
                          >
                            <ShoppingCart className="h-3 w-3 mr-1" />
                            Add to Cart
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
