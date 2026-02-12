import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Ruler, Palette, Check } from 'lucide-react';
import { Button } from './ui/button';

export function TailorExclusive() {
  const customizations = [
    {
      icon: Ruler,
      title: 'Custom Sizes',
      description: 'Any dimension you need',
      features: ['Custom mattress sizes', 'Non-standard dimensions', 'RV & boat sizes'],
    },
    {
      icon: Palette,
      title: 'Color Selection',
      description: 'Match your style perfectly',
      features: ['20+ color options', 'Custom dye matching', 'Pattern variations'],
    },
    {
      icon: Sparkles,
      title: 'Personalization',
      description: 'Make it uniquely yours',
      features: ['Monogram embroidery', 'Custom firmness levels', 'Special materials'],
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm uppercase tracking-wider border border-white/30">
                Exclusive Service
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl mb-6">
              Tailor-Made for You
            </h2>
            <p className="text-lg text-purple-100 mb-8 leading-relaxed">
              Your home is unique, and your sleep solutions should be too. Our Tailor Exclusive 
              service lets you customize every aspect of your purchase – from dimensions to colors, 
              firmness to finishes.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'White-glove delivery & setup included',
                'Personal sleep consultant assigned',
                'Premium materials & craftsmanship',
                'Lifetime customization adjustments',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-purple-100">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white text-purple-900 hover:bg-purple-50 shadow-2xl"
              >
                Start Your Custom Order
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Customization Options */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {customizations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-1">{item.title}</h3>
                    <p className="text-purple-200 text-sm mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-sm text-purple-100">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
