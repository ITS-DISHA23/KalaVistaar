import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'framer-motion';

interface ArtisanStory {
  id: number;
  name: string;
  craft: string;
  location: string;
  story: string;
  image: string;
  process: string[];
  heritage: string;
}

interface ArtisanStoryCardProps {
  story: ArtisanStory;
  isActive: boolean;
  onClick: () => void;
}

export function ArtisanStoryCard({ story, isActive, onClick }: ArtisanStoryCardProps) {
  return (
    <motion.div
      className="relative cursor-pointer transition-all duration-500 col-span-1"
      onClick={onClick}
      whileHover={{ scale: isActive ? 1 : 1.05 }}
      layout
    >
      <div className="relative h-[420px] rounded-3xl overflow-hidden group">
        <ImageWithFallback
          src={story.image}
          alt={`${story.name} - ${story.craft} artisan`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <motion.div
            initial={false}
            animate={{ opacity: isActive ? 1 : 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className={`font-['Playfair_Display:SemiBold',_sans-serif] ${
              isActive ? 'text-3xl mb-2' : 'text-xl mb-1'
            } transition-all duration-500`}>
              {story.name}
            </h3>
            <p className={`text-[#c9a44c] ${isActive ? 'text-lg mb-2' : 'text-sm mb-1'} transition-all duration-500`}>
              {story.craft} • {story.location}
            </p>
            
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-4"
              >
                <p className="text-sm leading-relaxed mb-4 line-clamp-3">
                  {story.story}
                </p>
                <div className="text-xs text-[#aab9a3] bg-black/30 px-3 py-1 rounded-full inline-block">
                  Click to explore full story
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}


