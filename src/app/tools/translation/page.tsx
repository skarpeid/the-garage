"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PageWrapper } from "@/components/PageWrapper";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { Textarea } from "@/components/ui/Textarea";
import { Check } from "lucide-react";

const languages = [
  { name: "All", region: "Global", flag: "🌐" },
  { name: "English", region: "Global", flag: "🇬🇧" },
  { name: "Arabic", region: "Middle East", flag: "🇸🇦" },
  { name: "Spanish", region: "Global", flag: "🇪🇸" },
  { name: "French", region: "Global", flag: "🇫🇷" },
  { name: "German", region: "Europe", flag: "🇩🇪" },
  { name: "Chinese", region: "Asia", flag: "🇨🇳" },
  { name: "Japanese", region: "Asia", flag: "🇯🇵" },
  { name: "Korean", region: "Asia", flag: "🇰🇷" },
  { name: "Russian", region: "Europe", flag: "🇷🇺" },
] as const;

type Language = typeof languages[number];

export default function TranslationPage() {
  const [text, setText] = useState("");
  const [targetLanguages, setTargetLanguages] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleTextTranslate = async () => {
    // TODO: Implement translation logic
    console.log("Translating text to", targetLanguages);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleLanguageSelect = (value: string) => {
    if (!value) return;
    
    setTargetLanguages(prev => {
      if (prev.includes(value)) {
        return prev.filter(lang => lang !== value);
      }
      return [...prev, value];
    });
  };

  return (
    <PageWrapper>
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Translate text to another language
          </h1>
          <p className="text-gray-400 text-lg mb-2">
            Upload your text or document for translation and expert review.
          </p>
          <p className="text-gray-400 text-lg">
            Choose your desired languages, and once translated, the content will be reviewed 
            to ensure language accuracy, brand tone of voice, and contextual relevance.
          </p>
        </div>

        <Tabs defaultValue="text" className="w-full">
          <TabsList className="mb-6 bg-transparent border-b border-gray-800">
            <TabsTrigger 
              value="text" 
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none px-6 py-3"
            >
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </svg>
                Insert text
              </div>
            </TabsTrigger>
            <TabsTrigger 
              value="document"
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none px-6 py-3"
            >
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <line x1="10" y1="9" x2="8" y2="9" />
                </svg>
                Upload document
              </div>
            </TabsTrigger>
          </TabsList>

          <Card className="bg-[#151922] border-gray-800 rounded-xl shadow-2xl">
            <div className="p-8">
              <TabsContent value="text" className="mt-0">
                <Textarea
                  placeholder="Copy and paste your text for translation here..."
                  className="min-h-[300px] mb-6 bg-[#0A0A0A] border-gray-800 rounded-lg text-gray-300 placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </TabsContent>

              <TabsContent value="document" className="mt-0">
                <div className="border-2 border-dashed border-gray-800 rounded-lg p-12 text-center min-h-[300px] mb-6 flex flex-col items-center justify-center bg-[#0A0A0A]">
                  <div className="mb-4">
                    <svg
                      className="mx-auto h-16 w-16 text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M24 32V16m0 0l-8 8m8-8l8 8M6 40h36a2 2 0 002-2V10a2 2 0 00-2-2H6a2 2 0 00-2 2v28a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">Choose a file</h3>
                  <p className="text-sm text-gray-500 mb-6">
                    Supported file types: .docx, .pdf, .pptx, .xlsx
                  </p>
                  <Button
                    variant="outline"
                    className="border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 text-gray-300"
                    onClick={() => document.getElementById("file-upload")?.click()}
                  >
                    Browse your files
                  </Button>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    accept=".docx,.pdf,.pptx,.xlsx"
                    onChange={handleFileUpload}
                  />
                  {file && (
                    <p className="mt-4 text-sm text-gray-400">
                      Selected file: {file.name}
                    </p>
                  )}
                </div>
              </TabsContent>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Which languages do you want to translate this text into?
                </label>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Select
                      value={targetLanguages[0] || ""}
                      onValueChange={handleLanguageSelect}
                      open={isOpen}
                      onOpenChange={setIsOpen}
                    >
                      <SelectTrigger className="h-[52px]" onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(true);
                      }}>
                        {targetLanguages.length > 0 ? (
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                              {targetLanguages.map((lang) => (
                                <span key={lang} className="text-xl leading-none">
                                  {languages.find(l => l.name.toLowerCase() === lang)?.flag || "🌐"}
                                </span>
                              ))}
                            </div>
                            <span className="text-gray-400">
                              {targetLanguages.length} selected
                            </span>
                          </div>
                        ) : (
                          <SelectValue placeholder="Select target languages" />
                        )}
                      </SelectTrigger>
                      <SelectContent>
                        <div className="grid grid-cols-2 gap-0 min-w-[600px]">
                          {languages.map((lang) => (
                            <SelectItem
                              key={lang.name}
                              value={lang.name.toLowerCase()}
                              className="px-4 py-3 m-0 border-b border-r border-gray-800/50 data-[state=checked]:bg-transparent"
                            >
                              <div className="flex items-center justify-between w-full">
                                <div className="flex items-center">
                                  <span className="text-xl leading-none mr-3">
                                    {lang.flag}
                                  </span>
                                  <div className="flex flex-col min-w-0">
                                    <span className="font-medium text-gray-200">
                                      {lang.name}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                      {lang.region}
                                    </span>
                                  </div>
                                </div>
                                {targetLanguages.includes(lang.name.toLowerCase()) && (
                                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 ml-2">
                                    <Check className="h-3 w-3 text-blue-500" />
                                  </div>
                                )}
                              </div>
                            </SelectItem>
                          ))}
                        </div>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium h-[52px] px-8"
                    disabled={targetLanguages.length === 0 || (!text && !file)}
                    onClick={handleTextTranslate}
                  >
                    Translate
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Tabs>
      </div>
    </PageWrapper>
  );
} 