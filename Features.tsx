
'use client';

export default function Features() {
  const features = [
    {
      icon: 'ri-search-line',
      title: 'SEO Optimized',
      description: 'Generate tags that improve your video searchability and ranking on YouTube algorithm.'
    },
    {
      icon: 'ri-trending-up-line',
      title: 'Trending Analysis',
      description: 'Our AI analyzes current trends to suggest tags that are currently popular and searched.'
    },
    {
      icon: 'ri-target-line',
      title: 'Targeted Keywords',
      description: 'Get specific, relevant keywords that match your content and target audience perfectly.'
    },
    {
      icon: 'ri-speed-line',
      title: 'Instant Results',
      description: 'Generate comprehensive tag lists in seconds, saving you hours of manual research.'
    },
    {
      icon: 'ri-bar-chart-line',
      title: 'Performance Boost',
      description: 'Increase your video views and engagement with strategically chosen tags.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Best Practices',
      description: 'Follow YouTube best practices with tags that comply with platform guidelines.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose TagCraft?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced AI technology helps you create the perfect tags for maximum YouTube visibility
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                <i className={`${feature.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Boost Your YouTube Success?</h3>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already using TagCraft to grow their channels
          </p>
          <button className="bg-yellow-400 text-red-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer">
            Start Generating Tags Now
          </button>
        </div>
      </div>
    </section>
  );
}
