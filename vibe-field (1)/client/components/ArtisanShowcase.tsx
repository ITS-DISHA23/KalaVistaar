import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArtisanStoryCard } from './ArtisanStoryCard';
import { ArtisanStoryScreen } from './ArtisanStoryScreen';

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

const artisanStories: ArtisanStory[] = [
  {
    id: 1,
    name: "Badal Kumar Pradhan",
    craft: "Terracotta Craft",
    location: "Odisha",
    story: "In the heart of Odisha, where the earth holds ancient secrets, Badal shapes clay into magnificent terracotta sculptures that breathe life into mythology. His hands, stained with the sacred soil of his homeland, create horses, elephants, and deities that have adorned temples and homes for over 2,000 years. Each piece emerges from the kiln not just as art, but as a prayer molded in clay, carrying forward the spiritual traditions of his ancestors who believed that working with earth was a form of divine communion.",
    image: "https://images.unsplash.com/photo-1526461591544-198d2190f270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXJyYWNvdHRhJTIwcG90dGVyeSUyMG9kaXNoYSUyMGluZGlhfGVufDF8fHx8MTc1ODc5MDY4MHww&ixlib=rb-4.1.0&q=80&w=1080",
    process: [
      "Sourcing special clay from riverbanks near Chilika Lake",
      "Mixing clay with rice husk and sand for perfect consistency",
      "Hand-modeling figures using traditional coiling techniques",
      "Creating intricate details with bamboo tools and fingers",
      "Sun-drying sculptures for 3-7 days depending on size",
      "Firing in traditional kilns using rice husk as fuel",
      "Natural cooling process that takes 24-48 hours",
      "Final detailing and traditional color application"
    ],
    heritage: "Odisha's terracotta tradition dates back to the 3rd century BCE, deeply rooted in temple culture and folk traditions. The craft flourishes in villages like Keulpur and Delanga, where entire communities dedicate their lives to this sacred art. These sculptures are not mere decorations but embodiments of spiritual beliefs, used in religious ceremonies and festivals like Durga Puja, where terracotta horses carry devotees' prayers to the heavens.",
    materials: [
      "Alluvial clay from Mahanadi river basin",
      "Rice husk (organic binder)",
      "Fine river sand",
      "Natural mineral pigments",
      "Bamboo sculpting tools",
      "Traditional brushes made from hair"
    ],
    videoUrl: "https://youtu.be/7cNsvZl6IFk"
  },
  {
    id: 2,
    name: "Jharna Lodha",
    craft: "Sabai Grass Craft",
    location: "Mayurbhanj, Odisha",
    story: "Deep in the forests of Mayurbhanj, where the Lodha tribe has lived in harmony with nature for centuries, Jharna weaves magic with Sabai grass. Her fingers dance through the golden strands like a musician playing an ancient instrument, creating baskets, mats, and decorative items that embody the wisdom of sustainable living. Each piece tells the story of a community that has never taken more from nature than what it freely gives, turning humble grass into objects of beauty and utility that last for generations.",
    image: "https://images.unsplash.com/photo-1661932908422-aeb3c162bd51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFzcyUyMHdlYXZpbmclMjBzYWJhaSUyMGNyYWZ0JTIwaW5kaWF8ZW58MXx8fHwxNzU4NzkwNjg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    process: [
      "Harvesting Sabai grass during post-monsoon season",
      "Sun-drying grass for 10-15 days until golden",
      "Soaking dried grass in water to make it pliable",
      "Sorting and grading grass by length and quality",
      "Creating the foundation coil with tightly wound grass",
      "Weaving spirally outward using traditional binding techniques",
      "Shaping and forming desired patterns and structures",
      "Final trimming and finishing touches"
    ],
    heritage: "The Lodha tribe, one of Odisha's indigenous communities, has practiced Sabai grass craft for over 500 years. This eco-friendly craft represents their deep understanding of forest ecology and sustainable resource management. Sabai grass grows wild in their forest homeland, and the tribe's harvesting methods actually help the grass regenerate, making this one of the most environmentally conscious crafts in India.",
    materials: [
      "Sabai grass (Eulaliopsis binata)",
      "Natural plant dyes from forest flowers",
      "Bamboo needles for weaving",
      "Cotton thread for binding",
      "Mud paste for strengthening",
      "Lac for water-resistant coating"
    ],
    videoUrl: "https://youtu.be/ag8dV808WE4?si=c2dsl05qleSEq9Lk"
  },
  {
    id: 3,
    name: "Raman Vishwakarma",
    craft: "Flexible Brass Fish Craft",
    location: "Pembarthi, Telangana",
    story: "In the ancient village of Pembarthi, where the Vishwakarma community has been blessed with divine craftsmanship skills, Raman creates brass fish that seem to swim through air. These aren't ordinary sculptures but engineering marvels - articulated brass fish with flexible joints that move like living creatures. Each scale is individually crafted, each joint precisely calibrated to create fluid movement that has mesmerized audiences for generations. Raman's fish carry the spirit of the rivers and the ingenuity of artisans who see no boundary between art and science.",
    image: "https://images.unsplash.com/photo-1652960018678-1f19799996c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFzcyUyMG1ldGFsd29yayUyMGNyYWZ0JTIwaW5kaWF8ZW58MXx8fHwxNzU4NzkwNjg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    process: [
      "Drawing detailed fish anatomy blueprints",
      "Creating brass sheet segments for body parts",
      "Hammering and shaping individual scales and fins",
      "Crafting precision joints using traditional techniques",
      "Assembling segments with moveable connections",
      "Fine-tuning joint tensions for smooth movement",
      "Detailed engraving of scale patterns and features",
      "Final polishing and protective coating application"
    ],
    heritage: "Pembarthi's brass craft tradition spans over 400 years, evolving from simple utility items to complex mechanical sculptures. The flexible fish represents the pinnacle of Vishwakarma craftsmanship, combining metallurgy, engineering, and artistry. These pieces were originally created as gifts for royalty and are now recognized as masterpieces of Indian handicraft engineering.",
    materials: [
      "High-quality brass sheets",
      "Copper wire for internal mechanisms",
      "Silver solder for joints",
      "Traditional engraving tools",
      "Acid solutions for etching",
      "Natural polishing compounds",
      "Protective lacquer coating"
    ],
    videoUrl: "https://youtu.be/g7UVPDqZ5B4?si=0CFQuuXgWvZ-D1Ej"
  },
  {
    id: 4,
    name: "Sita Majhi",
    craft: "Dongria Kandha Embroidery",
    location: "Niyamgiri Hills, Odisha",
    story: "High in the sacred Niyamgiri Hills, where the Dongria Kandha tribe guards their ancestral lands, Sita embroiders stories of mountains, spirits, and ancient wisdom. Her needlework captures the essence of a people who consider themselves the guardians of the sacred mountain Niyam Raja. Each thread carries the colors of peacock feathers, forest flowers, and mineral-rich streams. Her embroidery isn't just decoration but a sacred text written in silk, preserving oral traditions and spiritual beliefs that have survived centuries of change.",
    image: "https://images.unsplash.com/photo-1603703985186-bec0cad49fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWJyb2lkZXJ5JTIwdHJpYmFsJTIwY3JhZnQlMjBpbmRpYXxlbnwxfHx8fDE3NTg3OTA2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    process: [
      "Preparing handwoven cotton fabric on traditional looms",
      "Creating natural dyes from turmeric, indigo, and forest plants",
      "Sketching traditional motifs representing nature spirits",
      "Starting embroidery with sacred center point",
      "Building patterns outward using cross-stitch techniques",
      "Adding three-dimensional elements with raised work",
      "Incorporating cowrie shells and metal threads",
      "Blessing the finished piece in tribal ceremonies"
    ],
    heritage: "The Dongria Kandha tribe, residing in the Niyamgiri Hills for over 1,000 years, has developed a unique embroidery style that reflects their animistic beliefs and deep connection to nature. Their patterns represent the tribe's cosmology, with each motif having spiritual significance. This embroidery tradition is not just art but a form of cultural resistance, maintaining tribal identity in a rapidly changing world.",
    materials: [
      "Hand-spun cotton thread",
      "Natural dyes from turmeric and indigo",
      "Silk threads for special occasions",
      "Cowrie shells from ancient trade routes",
      "Metal threads made from brass",
      "Traditional needles carved from bone",
      "Beeswax for thread strengthening"
    ],
    videoUrl: "https://youtu.be/CRgGLdfEy6s?si=SUQWRNXiUd3ip_5T"
  }
];

export function ArtisanShowcase() {
  const [activeStory, setActiveStory] = useState<number>(1);
  const [screenStory, setScreenStory] = useState<ArtisanStory | null>(null);

  const handleCardClick = (story: ArtisanStory) => {
    if (activeStory === story.id) {
      setScreenStory(story);
    } else {
      setActiveStory(story.id);
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-[#fffef5]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-['Playfair_Display:SemiBold',_sans-serif] text-5xl text-[#222222] mb-6">
            Stories of Tradition
          </h2>
          <p className="text-lg text-[#666] max-w-3xl mx-auto leading-relaxed">
            Discover the remarkable journeys of rural artisans who preserve centuries-old crafts, 
            transforming raw materials into works of art with techniques passed down through generations.
          </p>
        </motion.div>
        
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr min-h-[600px]"
        >
          {artisanStories.map((story) => (
            <ArtisanStoryCard
              key={story.id}
              story={story}
              isActive={activeStory === story.id}
              onClick={() => handleCardClick(story)}
            />
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[#c9a44c] font-medium">
            Click on any story to explore the full artisan journey
          </p>
        </motion.div>
      </div>
      
      <ArtisanStoryScreen
        story={screenStory}
        isOpen={!!screenStory}
        onClose={() => setScreenStory(null)}
      />
    </section>
  );
}


