
'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <i className="ri-play-fill text-white text-lg"></i>
              </div>
              <h3 className="text-xl font-bold">TagCraft</h3>
            </div>
            <p className="text-gray-400 mb-4">
              The ultimate YouTube tag generator for content creators who want to grow their channels and reach more viewers.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-twitter-fill text-gray-400 hover:text-white transition-colors cursor-pointer"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-facebook-fill text-gray-400 hover:text-white transition-colors cursor-pointer"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-instagram-fill text-gray-400 hover:text-white transition-colors cursor-pointer"></i>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Tools</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Tag Generator</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Keyword Research</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Title Optimizer</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Trend Analysis</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">YouTube SEO Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Best Practices</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TagCraft. All rights reserved. Built with ❤️ for YouTube creators.</p>
        </div>
      </div>
    </footer>
  );
}
