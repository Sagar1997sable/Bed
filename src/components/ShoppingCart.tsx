import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from './ui/sheet';
import { Button } from './ui/button';
import { Minus, Plus, X, ShoppingBag, CreditCard } from 'lucide-react';
import { Product } from './ProductCard';
import { motion, AnimatePresence } from 'motion/react';

export interface CartItem extends Product {
  quantity: number;
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

export function ShoppingCart({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}: ShoppingCartProps) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? (subtotal > 5000 ? 0 : 500) : 0;
  const total = subtotal + shipping;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col bg-gradient-to-br from-white to-purple-50/30">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-2xl">
            <ShoppingBag className="h-6 w-6 text-purple-600" />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Shopping Cart
            </span>
          </SheetTitle>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 flex items-center justify-center"
          >
            <div className="text-center space-y-4">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="text-6xl"
              >
                🛒
              </motion.div>
              <p className="text-gray-500 text-lg">Your cart is empty</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={onClose}
                  variant="outline"
                  className="border-2 border-purple-300 hover:bg-purple-50"
                >
                  Continue Shopping
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-6">
              <AnimatePresence mode="popLayout">
                <div className="space-y-4">
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      layout
                      className="flex gap-4 bg-white rounded-xl p-4 border-2 border-purple-100 hover:border-purple-300 transition-all shadow-sm hover:shadow-md"
                    >
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1 min-w-0 pr-2">
                            <h4 className="text-sm truncate">{item.name}</h4>
                            <p className="text-xs text-purple-600">{item.category}</p>
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
                          <div className="flex items-center border-2 border-purple-200 rounded-lg overflow-hidden">
                            <motion.button
                              whileHover={{ backgroundColor: 'rgb(243 232 255)' }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-purple-100 transition-colors"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3 w-3 text-purple-600" />
                            </motion.button>
                            <span className="px-4 text-sm min-w-[3rem] text-center">
                              {item.quantity}
                            </span>
                            <motion.button
                              whileHover={{ backgroundColor: 'rgb(243 232 255)' }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-purple-100 transition-colors"
                            >
                              <Plus className="h-3 w-3 text-purple-600" />
                            </motion.button>
                          </div>
                          <span className="text-sm bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>
            </div>

            <SheetFooter className="border-t-2 border-purple-100 pt-6">
              <div className="w-full space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-3 text-sm"
                >
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className={shipping === 0 ? 'text-green-600' : ''}>
                      {shipping === 0 ? 'FREE' : `₹${shipping.toLocaleString('en-IN')}`}
                    </span>
                  </div>
                  {subtotal > 0 && subtotal < 5000 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs text-purple-600 bg-purple-50 rounded-lg p-2"
                    >
                      Add ₹{(5000 - subtotal).toLocaleString('en-IN')} more for FREE shipping! 🎉
                    </motion.div>
                  )}
                  <div className="flex justify-between border-t-2 border-purple-100 pt-3">
                    <span className="text-lg">Total</span>
                    <span className="text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      ₹{total.toLocaleString('en-IN')}
                    </span>
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-purple-500/30 h-12 text-base"
                    size="lg"
                    onClick={onCheckout}
                  >
                    <CreditCard className="mr-2 h-5 w-5" />
                    Proceed to Checkout
                  </Button>
                </motion.div>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
