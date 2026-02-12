import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Leaf, Trophy } from 'lucide-react';

export function AboutLiveSleep() {
  const stats = [
    { value: '2015', label: 'Founded' },
    { value: '50K+', label: 'Happy Customers' },
    { value: '100+', label: 'Team Members' },
    { value: '4.9★', label: 'Average Rating' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To help millions of people achieve better sleep and healthier lives through innovative, sustainable products.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Every decision we make starts with one question: How does this improve our customer\'s sleep experience?',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We\'re committed to eco-friendly practices, from sourcing to packaging, because a healthy planet means better sleep for all.',
    },
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'We never settle for good enough. Every product is crafted to exceed industry standards and your expectations.',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white" id="about">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-l from-purple-200 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-r from-indigo-200 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
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
              Our Story
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            About LiveSleep
          </h2>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 border-2 border-purple-200">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Founded in 2015, LiveSleep began with a simple observation: people deserve better sleep. 
              Our founders, sleep scientists and design experts, noticed that the mattress industry was 
              stuck in the past – overpriced products, pushy salespeople, and outdated technology.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We set out to change that. By combining cutting-edge sleep science with sustainable 
              materials and honest pricing, we created products that actually help people sleep better. 
              No gimmicks, no compromises – just exceptional quality at fair prices.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, LiveSleep has helped over 50,000 customers transform their sleep. But we're just 
              getting started. Every product we create, every innovation we pursue, is driven by our 
              commitment to your better night's sleep.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-purple-100"
            >
              <div className="text-4xl md:text-5xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Our Values
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="flex gap-6 p-6 bg-gradient-to-br from-white to-purple-50 rounded-2xl border-2 border-purple-100 hover:border-purple-300 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl mb-2 text-gray-900">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
