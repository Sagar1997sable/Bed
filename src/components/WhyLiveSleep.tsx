import React from 'react';
import { motion } from 'motion/react';
import { Moon, Sparkles, Shield, Heart, Award, Users } from 'lucide-react';

export function WhyLiveSleep() {
  const features = [
    {
      icon: Moon,
      title: 'Science-Backed Sleep',
      description: 'Our products are designed with sleep scientists to optimize your rest and recovery.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Sparkles,
      title: 'Premium Materials',
      description: 'Only the finest materials – from organic cotton to memory foam that adapts to you.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Shield,
      title: '100-Night Trial',
      description: 'Try it risk-free. If you don\'t love it, we\'ll pick it up and refund you fully.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Heart,
      title: 'Eco-Friendly',
      description: 'Sustainable practices from production to packaging. Good for you, good for Earth.',
      color: 'from-teal-500 to-emerald-500',
    },
    {
      icon: Award,
      title: '10-Year Warranty',
      description: 'We stand behind our quality with industry-leading warranties on all mattresses.',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Our sleep experts are available 24/7 to help you find the perfect products.',
      color: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30" id="why-livesleep">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 right-10 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 left-10 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm uppercase tracking-wider">
              The LiveSleep Difference
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Why Choose LiveSleep?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We're not just selling products – we're transforming lives through better sleep. 
            Every detail is crafted with your comfort and well-being in mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-200">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">Ready to experience the difference?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full shadow-lg shadow-purple-500/30 transition-all"
          >
            Explore Our Collection
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
