import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { useState } from 'react';
import { Grid, List } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  artisan: string;
  craft: string;
  image: string;
  rating: number;
  reviewCount: number;
  description: string;
  isLimited?: boolean;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Sacred Elephant Terracotta Sculpture",
    price: 2500,
    artisan: "Badal Kumar Pradhan",
    craft: "Terracotta Craft",
    image: "https://images.unsplash.com/photo-1650065962232-e4b7f95ebf1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    rating: 4.8,
    reviewCount: 32,
    description: "Handcrafted terracotta elephant sculpture with intricate details, representing prosperity and wisdom in traditional Odishan art.",
    isLimited: true
  },
  {
    id: 2,
    name: "Traditional Sabai Grass Storage Basket",
    price: 850,
    artisan: "Jharna Lodha",
    craft: "Sabai Grass Craft",
    image: "https://images.unsplash.com/photo-1645640494706-1dffa5df230c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    rating: 4.6,
    reviewCount: 28,
    description: "Eco-friendly storage basket woven from sustainable Sabai grass, showcasing the Lodha tribe's traditional craftsmanship."
  },
  {
    id: 3,
    name: "Flexible Brass Fish Sculpture",
    price: 4200,
    artisan: "Raman Vishwakarma",
    craft: "Flexible Brass Fish Craft",
    image: "https://images.unsplash.com/photo-1758444829832-c247afd25d08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    rating: 4.9,
    reviewCount: 15,
    description: "Masterfully crafted brass fish with articulated joints that moves like a living creature, a true engineering marvel.",
    isLimited: true
  },
  {
    id: 4,
    name: "Dongria Kandha Embroidered Shawl",
    price: 3200,
    artisan: "Sita Majhi",
    craft: "Dongria Kandha Embroidery",
    image: "https://images.unsplash.com/photo-1758264839086-2bdecc06d9a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    rating: 4.7,
    reviewCount: 22,
    description: "Beautifully embroidered shawl featuring traditional Dongria Kandha motifs representing nature spirits and tribal cosmology."
  },
  {
    id: 5,
    name: "Terracotta Ritual Water Vessels Set",
    price: 1800,
    artisan: "Badal Kumar Pradhan",
    craft: "Terracotta Craft",
    image: "https://images.unsplash.com/photo-1739430170523-29f7a6c7093f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    rating: 4.5,
    reviewCount: 18,
    description: "Set of three ceremonial water vessels used in traditional rituals, crafted with ancient Odishan techniques."
  },
  {
    id: 6,
    name: "Sabai Grass Table Runner Set",
    price: 650,
    artisan: "Jharna Lodha",
    craft: "Sabai Grass Craft",
    image: "https://images.unsplash.com/photo-1623950755952-ff3871094def?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    rating: 4.4,
    reviewCount: 25,
    description: "Elegant table runner and placemat set woven from natural Sabai grass, perfect for eco-conscious dining."
  }
];

const craftFilters = [
  'All Crafts',
  'Terracotta Craft',
  'Sabai Grass Craft',
  'Flexible Brass Fish Craft',
  'Dongria Kandha Embroidery'
];

export function ProductShowcase() {
  const [selectedFilter, setSelectedFilter] = useState('All Crafts');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = selectedFilter === 'All Crafts' 
    ? featuredProducts 
    : featuredProducts.filter(product => product.craft === selectedFilter);

  const handleViewProduct = (product: Product) => {
    console.log('View product:', product);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#fffef5] to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-['Playfair_Display:SemiBold',_sans-serif] text-5xl text-[#222222] mb-6">
            Handcrafted Treasures
          </h2>
          <p className="text-lg text-[#666] max-w-3xl mx-auto leading-relaxed mb-8">
            Discover authentic handcrafted products from our featured artisans. Each piece carries 
            the soul of traditional craftsmanship and supports rural communities.
          </p>
          {/* Craft Stats */}
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-[#c9a44c]">100+</div>
              <div className="text-sm text-[#666]">Unique Products</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#c9a44c]">15+</div>
              <div className="text-sm text-[#666]">Master Artisans</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#c9a44c]">4.7</div>
              <div className="text-sm text-[#666]">Average Rating</div>
            </div>
          </div>
        </motion.div>

        {/* Filters and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6"
        >
          {/* Craft Filters */}
          <div className="flex flex-wrap gap-3">
            {craftFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-[#c9a44c] text-white'
                    : 'bg-white text-[#666] border border-[#c9a44c]/20 hover:bg-[#c9a44c]/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* View Controls */}
          <div className="flex items-center gap-4">
            <div className="flex bg-white rounded-lg border border-[#c9a44c]/20 p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'grid' ? 'bg-[#c9a44c] text-white' : 'text-[#666]'
                }`}
              >
                <Grid size={16} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'list' ? 'bg-[#c9a44c] text-white' : 'text-[#666]'
                }`}
              >
                <List size={16} />
              </button>
            </div>
            <span className="text-sm text-[#666]">{filteredProducts.length} products</span>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} onViewProduct={handleViewProduct} />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#c9a44c]/10 to-[#aab9a3]/10 rounded-2xl p-8 border border-[#c9a44c]/20">
            <h3 className="font-['Playfair_Display:SemiBold',_sans-serif] text-2xl text-[#222222] mb-4">
              Support Traditional Craftsmanship
            </h3>
            <p className="text-[#666] mb-6 max-w-2xl mx-auto">
              Every purchase directly supports rural artisans and helps preserve centuries-old traditions 
              for future generations.
            </p>
            <a href="#" className="inline-block bg-[#c9a44c] text-white px-8 py-3 rounded-full hover:bg-[#9c5841] transition-colors duration-300 font-medium">
              Browse All Products
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProductShowcase;


