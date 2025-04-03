import React, { useState } from 'react';
import { Upload, Copy, Download } from 'lucide-react';

interface TranslationToolProps {
  onTranslate: (text: string) => Promise<string>;
  onUpload: (file: File) => Promise<string>;
  onReview: (text: string, language: string) => Promise<void>;
}

export const TranslationTool: React.FC<TranslationToolProps> = ({
  onTranslate,
  onUpload,
  onReview,
}) => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);

  const handleTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const text = await onUpload(file);
      setInputText(text);
    }
  };

  const handleTranslate = async () => {
    if (!inputText || !selectedLanguage) return;
    
    setIsTranslating(true);
    try {
      const result = await onTranslate(inputText);
      setTranslatedText(result);
    } catch (error) {
      console.error('Translation failed:', error);
    } finally {
      setIsTranslating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(translatedText);
  };

  const handleDownload = () => {
    const blob = new Blob([translatedText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'translation.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleReview = async () => {
    if (!translatedText || !selectedLanguage) return;
    await onReview(translatedText, selectedLanguage);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Translate text</h1>
          <h2 className="text-xl text-gray-600">to another language</h2>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Initial text</h3>
              <div className="flex gap-2">
                <label className="cursor-pointer px-4 py-2 bg-white rounded border border-gray-200 hover:bg-gray-50">
                  <input
                    type="file"
                    className="hidden"
                    accept=".txt,.doc,.docx"
                    onChange={handleFileUpload}
                  />
                  <Upload size={20} className="inline-block mr-2" />
                  Upload document
                </label>
              </div>
            </div>
            <textarea
              value={inputText}
              onChange={handleTextInput}
              placeholder="Copy and paste your text for translation here ..."
              className="w-full h-[400px] p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Translated text</h3>
              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  className="p-2 bg-gray-100 rounded hover:bg-gray-200"
                  title="Copy to clipboard"
                >
                  <Copy size={20} />
                </button>
                <button
                  onClick={handleDownload}
                  className="p-2 bg-gray-100 rounded hover:bg-gray-200"
                  title="Download translation"
                >
                  <Download size={20} />
                </button>
              </div>
            </div>
            <div className="relative">
              <textarea
                value={translatedText}
                readOnly
                className="w-full h-[400px] p-4 bg-gray-50 border border-gray-200 rounded-lg resize-none"
                placeholder="Translation will appear here..."
              />
              {isTranslating && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-medium mb-4">Send this text to a language review</h3>
          <div className="flex gap-4">
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Choose an english language review</option>
              <option value="en-us">English (US)</option>
              <option value="en-gb">English (UK)</option>
              <option value="en-au">English (Australia)</option>
            </select>
            <button
              onClick={handleReview}
              disabled={!selectedLanguage || !translatedText}
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Get review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 