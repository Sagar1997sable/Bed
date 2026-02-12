import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { motion } from 'motion/react';
import { toast } from 'sonner';

export function Footer() {
  const [email, setEmail] = React.useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Successfully subscribed!', {
        description: `We'll send updates to ${email}`,
      });
      setEmail('');
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-gray-300" id="newsletter">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h3 className="text-3xl md:text-4xl text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Join the LiveSleep Community
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
            Subscribe to get exclusive deals, sleep tips, and be the first to know about new arrivals. 
            Plus, get 10% off your first order!
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 backdrop-blur-sm h-12"
            />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg w-full sm:w-auto h-12"
              >
                <Send className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </motion.div>
          </form>
          <p className="text-xs text-gray-500 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white text-2xl font-serif mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              LiveSleep
            </h3>
            <p className="text-sm mb-6 text-gray-400">
              Transform your sleep, transform your life. Premium mattresses, towels, and bedsheets 
              crafted with science and care.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, color: 'hover:text-blue-400' },
                { Icon: Instagram, color: 'hover:text-pink-400' },
                { Icon: Twitter, color: 'hover:text-blue-300' },
                { Icon: Mail, color: 'hover:text-purple-400' },
              ].map(({ Icon, color }, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className={`transition-colors ${color}`}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Shop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white mb-4">Shop</h4>
            <ul className="space-y-3 text-sm">
              {['Mattresses', 'Towels', 'Bedsheets', 'New Arrivals', 'Sale'].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-purple-400 transition-colors flex items-center group"
                  >
                    <span className="mr-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white mb-4">Customer Service</h4>
            <ul className="space-y-3 text-sm">
              {['Contact Us', 'Shipping Info', 'Returns & Exchanges', 'FAQ', 'Size Guide', 'Warranty'].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors flex items-center group"
                  >
                    <span className="mr-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-white mb-4">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">123 Dream Street, Comfort City, CC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-purple-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <a href="mailto:hello@livesleep.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                  hello@livesleep.com
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <p className="text-xs text-gray-400 mb-2">Customer Support</p>
              <p className="text-sm text-white">Available 24/7</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center text-sm"
        >
          <p className="text-gray-400">
            &copy; 2026 LiveSleep. All rights reserved. Made with{' '}
            <span className="text-pink-500">♥</span> for better sleep
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs">
            <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">Privacy Policy</a>
            <span className="text-gray-700">•</span>
            <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">Terms of Service</a>
            <span className="text-gray-700">•</span>
            <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
