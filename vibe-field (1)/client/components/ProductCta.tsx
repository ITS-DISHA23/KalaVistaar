export default function ProductCta() {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-[#fffef5] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#c9a44c]/10 to-[#aab9a3]/10 rounded-2xl p-8 border border-[#c9a44c]/20 text-center">
          <h3 className="font-['Playfair_Display:SemiBold',_sans-serif] text-3xl text-[#222222] mb-4">
            Support Traditional Craftsmanship
          </h3>
          <p className="text-[#666] mb-6 max-w-2xl mx-auto">
            Every purchase directly supports rural artisans and helps preserve centuries-old traditions for future generations.
          </p>
          <a href="/discover" className="inline-block bg-[#c9a44c] text-white px-8 py-3 rounded-full hover:bg-[#9c5841] transition-colors duration-300 font-medium">
            Browse All Products
          </a>
        </div>
      </div>
    </section>
  );
}


