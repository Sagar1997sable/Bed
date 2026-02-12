import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Package, Truck, Home } from 'lucide-react';
import { Button } from './ui/button';

interface CheckoutPageProps {
  cartTotal: number;
  itemCount: number;
  onBackToShopping: () => void;
}

export function CheckoutPage({ cartTotal, itemCount, onBackToShopping }: CheckoutPageProps) {
  const [orderPlaced, setOrderPlaced] = React.useState(false);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    // In a real app, this would process the payment and create the order
  };

  if (orderPlaced) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="container max-w-2xl mx-auto px-4"
        >
          <div className="bg-white rounded-3xl p-12 shadow-2xl border-2 border-purple-100 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="h-12 w-12 text-white" />
            </motion.div>

            <h2 className="text-4xl mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Order Placed Successfully! 🎉
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Thank you for shopping with LiveSleep. Your order has been confirmed and will be delivered soon.
            </p>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-8">
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { icon: Package, label: 'Order Confirmed' },
                  { icon: Package, label: 'Processing' },
                  { icon: Truck, label: 'Shipped' },
                  { icon: Home, label: 'Delivered' },
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${
                      index === 0 ? 'bg-gradient-to-br from-purple-500 to-pink-500' : 'bg-gray-200'
                    }`}>
                      <step.icon className={`h-6 w-6 ${index === 0 ? 'text-white' : 'text-gray-400'}`} />
                    </div>
                    <p className="text-xs text-gray-600">{step.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                Order ID: <span className="text-purple-600">#LS{Math.floor(Math.random() * 1000000)}</span>
              </p>
            </div>

            <div className="space-y-3">
              <Button
                onClick={onBackToShopping}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg"
                size="lg"
              >
                Continue Shopping
              </Button>
              <Button
                variant="outline"
                className="w-full border-2 border-purple-200"
                size="lg"
              >
                Track Order
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Checkout
          </h1>
          <p className="text-gray-600">Complete your order in just a few steps</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Address */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-100"
            >
              <h3 className="text-xl mb-4 text-gray-900">Delivery Address</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="md:col-span-2 px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 outline-none"
                />
                <input
                  type="text"
                  placeholder="Address Line 1"
                  className="md:col-span-2 px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 outline-none"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 outline-none"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 outline-none"
                />
                <input
                  type="text"
                  placeholder="PIN Code"
                  className="px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 outline-none"
                />
              </div>
            </motion.div>

            {/* Payment Method */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-100"
            >
              <h3 className="text-xl mb-4 text-gray-900">Payment Method</h3>
              <div className="space-y-3">
                {[
                  { label: 'Cash on Delivery (COD)', value: 'cod' },
                  { label: 'UPI Payment', value: 'upi' },
                  { label: 'Credit/Debit Card', value: 'card' },
                  { label: 'Net Banking', value: 'netbanking' },
                ].map((method) => (
                  <label
                    key={method.value}
                    className="flex items-center p-4 border-2 border-purple-200 rounded-lg hover:bg-purple-50 cursor-pointer transition-all"
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.value}
                      defaultChecked={method.value === 'cod'}
                      className="mr-3"
                    />
                    <span>{method.label}</span>
                  </label>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-100 sticky top-24">
              <h3 className="text-xl mb-6 text-gray-900">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Items ({itemCount})</span>
                  <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className={cartTotal > 5000 ? 'text-green-600' : ''}>
                    {cartTotal > 5000 ? 'FREE' : '₹500'}
                  </span>
                </div>
                <div className="border-t-2 border-purple-100 pt-3 flex justify-between">
                  <span className="text-lg">Total</span>
                  <span className="text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    ₹{(cartTotal + (cartTotal > 5000 ? 0 : 500)).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={handlePlaceOrder}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg shadow-green-500/30 h-12"
                  size="lg"
                >
                  Place Order
                </Button>
              </motion.div>

              <p className="text-xs text-gray-500 text-center mt-4">
                By placing this order, you agree to our Terms & Conditions
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
