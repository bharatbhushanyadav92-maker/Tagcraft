
'use client';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <i className="ri-play-fill text-white text-lg"></i>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">TagCraft</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#generator" className="text-gray-600 hover:text-red-600 transition-colors cursor-pointer">Generator</a>
            <a href="#features" className="text-gray-600 hover:text-red-600 transition-colors cursor-pointer">Features</a>
            <a href="#about" className="text-gray-600 hover:text-red-600 transition-colors cursor-pointer">About</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
