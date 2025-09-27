import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';

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

interface ProductCardProps {
  product: Product;
  onViewProduct?: (product: Product) => void;
}

export function ProductCard({ product, onViewProduct }: ProductCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#c9a44c]/10 group cursor-pointer"
      onClick={() => onViewProduct?.(product)}
    >
      {/* Image Section */}
      <div className="relative aspect-square overflow-hidden">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isLimited && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Limited Edition
            </span>
          )}
        </div>
        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorited(!isFavorited);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-300 ${
            isFavorited ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-600 hover:bg-white'
          }`}
        >
          <Heart size={16} fill={isFavorited ? 'currentColor' : 'none'} />
        </button>
        {/* Quick Action Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-x-3 bottom-3"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Add to cart functionality placeholder
            }}
            className="w-full bg-[#c9a44c] text-white py-2 px-4 rounded-full hover:bg-[#9c5841] transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingCart size={16} />
            <span className="font-medium">Add to Cart</span>
          </button>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Craft Category */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-[#c9a44c] bg-[#c9a44c]/10 px-2 py-1 rounded-full font-medium">
            {product.craft}
          </span>
        </div>
        {/* Product Name */}
        <h3 className="font-['Playfair_Display:SemiBold',_sans-serif] text-lg text-[#222222] mb-1 line-clamp-2">
          {product.name}
        </h3>
        {/* Artisan */}
        <p className="text-sm text-[#666] mb-2">by {product.artisan}</p>
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-xs text-[#666] ml-1">
            {product.rating} ({product.reviewCount})
          </span>
        </div>
        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl font-bold text-[#222222]">₹{product.price.toLocaleString()}</span>
        </div>
        {/* Description */}
        <p className="text-sm text-[#666] line-clamp-2 leading-relaxed">{product.description}</p>
      </div>
    </motion.div>
  );
}


