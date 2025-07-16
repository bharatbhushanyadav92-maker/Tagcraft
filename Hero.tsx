
'use client';

export default function Hero() {
  return (
    <section 
      className="relative bg-gradient-to-br from-red-600 to-red-800 text-white py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.9), rgba(153, 27, 27, 0.9)), url('https://readdy.ai/api/search-image?query=Modern%20digital%20marketing%20workspace%20with%20YouTube%20interface%20on%20computer%20screen%2C%20creative%20content%20creator%20setup%20with%20professional%20lighting%2C%20red%20and%20white%20color%20scheme%2C%20clean%20minimalist%20background%2C%20high-tech%20atmosphere%2C%20digital%20marketing%20tools%20and%20analytics%20dashboard%20visible&width=1200&height=600&seq=hero-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Generate Powerful
            <span className="block text-yellow-300">YouTube Tags</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
            Boost your video rankings with AI-powered tag suggestions. Get discovered by millions of viewers with optimized, searchable tags.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-red-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer">
              Start Generating Tags
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-red-800 transition-colors whitespace-nowrap cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
