import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { X, MapPin, Users, Clock, Award, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface ArtisanStory {
  id: number;
  name: string;
  craft: string;
  location: string;
  story: string;
  image: string;
  process: string[];
  heritage: string;
  materials: string[];
  videoUrl?: string;
}

interface ArtisanStoryScreenProps {
  story: ArtisanStory | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ArtisanStoryScreen({ story, isOpen, onClose }: ArtisanStoryScreenProps) {
  const [activeSection, setActiveSection] = useState<'story' | 'heritage' | 'materials' | 'process'>('story');

  if (!story) return null;

  const toEmbedUrl = (url: string) => {
    try {
      const u = new URL(url);
      if (u.hostname.includes('youtube.com')) {
        const vid = u.searchParams.get('v');
        return vid ? `https://www.youtube.com/embed/${vid}` : url.replace('/watch/', '/embed/');
      }
      if (u.hostname.includes('youtu.be')) {
        return `https://www.youtube.com/embed${u.pathname}`;
      }
      return url;
    } catch {
      return url;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 bg-[#fffef5] overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative h-screen overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="fixed top-6 right-6 z-50 p-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <X size={24} className="text-[#222222]" />
            </button>

            <div className="relative h-[50vh] overflow-hidden">
              <ImageWithFallback
                src={story.image}
                alt={`${story.name} - ${story.craft} artisan`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute bottom-8 left-8 right-8 text-white"
              >
                <h1 className="font-['Playfair_Display:SemiBold',_sans-serif] text-5xl mb-4">
                  {story.name}
                </h1>
                <div className="flex items-center gap-6 text-xl">
                  <div className="flex items-center gap-2">
                    <Users size={20} />
                    <span>{story.craft}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={20} />
                    <span>{story.location}</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-white/70"
                >
                  <ChevronDown size={24} />
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="sticky top-0 bg-[#fffef5]/95 backdrop-blur-md border-b border-[#c9a44c]/20 z-40"
            >
              <div className="max-w-4xl mx-auto px-8 py-4">
                <div className="flex space-x-6 overflow-x-auto">
                  {[
                    { key: 'story', label: 'The Story', icon: Award },
                    { key: 'heritage', label: 'Heritage', icon: Clock },
                    { key: 'materials', label: 'Materials', icon: Users },
                    { key: 'process', label: 'Making Process', icon: Users }
                  ].map(({ key, label, icon: Icon }) => (
                    <button
                      key={key}
                      onClick={() => setActiveSection(key as any)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                        activeSection === key
                          ? 'bg-[#c9a44c] text-white'
                          : 'text-[#222222] hover:bg-[#c9a44c]/10'
                      }`}
                    >
                      <Icon size={16} />
                      <span className="font-medium">{label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="max-w-4xl mx-auto px-8 py-12">
              <AnimatePresence mode="wait">
                {activeSection === 'story' && (
                  <motion.div
                    key="story"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-8"
                  >
                    <div className="text-center mb-12">
                      <h2 className="font-['Playfair_Display:SemiBold',_sans-serif] text-4xl text-[#222222] mb-4">
                        The Artisan's Journey
                      </h2>
                      <div className="w-24 h-1 bg-[#c9a44c] mx-auto"></div>
                    </div>
                    
                    <div className="prose prose-lg max-w-none">
                      <p className="text-xl leading-relaxed text-[#222222] first-letter:text-6xl first-letter:font-['Playfair_Display:SemiBold',_sans-serif] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#c9a44c]">
                        {story.story}
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeSection === 'heritage' && (
                  <motion.div
                    key="heritage"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-8"
                  >
                    <div className="text-center mb-12">
                      <h2 className="font-['Playfair_Display:SemiBold',_sans-serif] text-4xl text-[#222222] mb-4">
                        Heritage & Tradition
                      </h2>
                      <div className="w-24 h-1 bg-[#c9a44c] mx-auto"></div>
                    </div>
                    
                    <div className="bg-white/50 rounded-3xl p-8 border border-[#c9a44c]/20">
                      <p className="text-xl leading-relaxed text-[#222222]">
                        {story.heritage}
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeSection === 'materials' && (
                  <motion.div
                    key="materials"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-8"
                  >
                    <div className="text-center mb-12">
                      <h2 className="font-['Playfair_Display:SemiBold',_sans-serif] text-4xl text-[#222222] mb-4">
                        Essential Materials
                      </h2>
                      <div className="w-24 h-1 bg-[#c9a44c] mx-auto"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {story.materials.map((material, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index, duration: 0.5 }}
                          className="bg-gradient-to-br from-white to-[#c9a44c]/5 rounded-xl p-6 border border-[#c9a44c]/20 shadow-sm"
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-[#c9a44c] rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-sm">{index + 1}</span>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-[#222222] text-lg">
                                {material}
                              </h3>
                            </div>
                          </div>
                          <p className="text-[#666] leading-relaxed">
                            Each material is carefully sourced and prepared according to traditional methods, ensuring authenticity and quality in every creation.
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeSection === 'process' && (
                  <motion.div
                    key="process"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-8"
                  >
                    <div className="text-center mb-12">
                      <h2 className="font-['Playfair_Display:SemiBold',_sans-serif] text-4xl text-[#222222] mb-4">
                        The Making Process
                      </h2>
                      <div className="w-24 h-1 bg-[#c9a44c] mx-auto"></div>
                    </div>

                    {story.videoUrl && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                      >
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#c9a44c]/20">
                          <h3 className="font-['Playfair_Display:SemiBold',_sans-serif] text-2xl text-[#222222] mb-4 text-center">
                            Watch the Master at Work
                          </h3>
                          <div className="aspect-video rounded-xl overflow-hidden border border-[#c9a44c]/30">
                            <iframe
                              src={toEmbedUrl(story.videoUrl)}
                              title={`${story.name} - ${story.craft}`}
                              className="w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            />
                          </div>
                          <p className="text-center text-sm text-[#666] mt-3">
                            Video: {story.craft} Making Process
                          </p>
                        </div>
                      </motion.div>
                    )}
                    
                    <div className="relative">
                      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c9a44c] to-[#aab9a3]"></div>
                      
                      <div className="space-y-8">
                        {story.process.map((step, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                            className="relative flex items-start gap-6"
                          >
                            <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-[#c9a44c] rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-lg">
                                {index + 1}
                              </span>
                            </div>
                            
                            <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-[#c9a44c]/10">
                              <div className="flex items-center gap-2 mb-3">
                                <Clock size={16} className="text-[#c9a44c]" />
                                <span className="text-sm font-medium text-[#c9a44c]">
                                  Step {index + 1}
                                </span>
                              </div>
                              <p className="text-lg leading-relaxed text-[#222222]">
                                {step}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-[#c9a44c]/5 py-12 mt-16"
            >
              <div className="max-w-4xl mx-auto px-8 text-center">
                <h3 className="font-['Playfair_Display:SemiBold',_sans-serif] text-2xl text-[#222222] mb-4">
                  Supporting Traditional Crafts
                </h3>
                <p className="text-lg text-[#666] mb-6">
                  Every purchase helps preserve these ancient traditions and supports artisan communities.
                </p>
                <button
                  onClick={onClose}
                  className="bg-[#c9a44c] text-white px-8 py-3 rounded-full hover:bg-[#9c5841] transition-colors duration-300"
                >
                  Explore More Stories
                </button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


