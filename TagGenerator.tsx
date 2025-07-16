
'use client';

import { useState } from 'react';

export default function TagGenerator() {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

  const generateTags = () => {
    if (!title.trim()) return;
    
    setIsGenerating(true);
    
    setTimeout(() => {
      const baseTags = title.toLowerCase().split(' ').filter(word => word.length > 2);
      const additionalTags = [
        'trending', 'viral', 'popular', 'best', 'top', 'new', 'latest', 'guide', 
        'tutorial', 'tips', 'tricks', 'how to', 'review', 'unboxing', 'reaction',
        '2024', '2025', 'entertainment', 'funny', 'amazing', 'awesome', 'epic'
      ];
      
      const generatedTags = [
        ...baseTags,
        ...baseTags.map(tag => `${tag} tutorial`),
        ...baseTags.map(tag => `${tag} guide`),
        ...baseTags.map(tag => `${tag} tips`),
        ...additionalTags.slice(0, 10),
        ...baseTags.map(tag => `best ${tag}`),
        ...baseTags.map(tag => `${tag} review`),
        ...baseTags.map(tag => `${tag} 2024`),
        ...baseTags.map(tag => `how to ${tag}`),
        ...baseTags.map(tag => `${tag} explained`),
        ...baseTags.map(tag => `${tag} for beginners`)
      ].filter((tag, index, self) => self.indexOf(tag) === index).slice(0, 30);
      
      setTags(generatedTags);
      setIsGenerating(false);
    }, 1500);
  };

  const toggleTag = (tag: string) => {
    const newSelectedTags = new Set(selectedTags);
    if (newSelectedTags.has(tag)) {
      newSelectedTags.delete(tag);
    } else {
      newSelectedTags.add(tag);
    }
    setSelectedTags(newSelectedTags);
  };

  const copySelectedTags = () => {
    const tagList = Array.from(selectedTags).join(', ');
    navigator.clipboard.writeText(tagList);
  };

  return (
    <section id="generator" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">YouTube Tag Generator</h2>
            <p className="text-xl text-gray-600">Enter your video title and get optimized tags instantly</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Video Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter your YouTube video title..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                />
              </div>
              
              <button
                onClick={generateTags}
                disabled={!title.trim() || isGenerating}
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
              >
                {isGenerating ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Generating Tags...
                  </span>
                ) : (
                  'Generate Tags'
                )}
              </button>
            </div>
          </div>

          {tags.length > 0 && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Generated Tags</h3>
                <div className="flex gap-3">
                  <span className="text-sm text-gray-600">
                    {selectedTags.size} selected
                  </span>
                  <button
                    onClick={copySelectedTags}
                    disabled={selectedTags.size === 0}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-clipboard-line mr-1"></i>
                    Copy Selected
                  </button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, index) => (
                  <button
                    key={index}
                    onClick={() => toggleTag(tag)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      selectedTags.has(tag)
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-lightbulb-line text-blue-600 text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Pro Tip</h4>
                    <p className="text-blue-700 text-sm">
                      Select 10-15 relevant tags for optimal performance. Mix broad and specific terms to maximize reach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
