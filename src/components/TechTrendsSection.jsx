import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, Brain, Zap, Package, Server, Code } from 'lucide-react';

const TechTrendsSection = () => {
  const [expandedTrend, setExpandedTrend] = useState(null);

  const trends = [
    {
      id: 'gen-ai',
      icon: <Sparkles className="w-8 h-8 text-teal-400" />,
      title: 'Generative AI',
      subtitle: 'LangChain, OpenAI APIs, AI Agents',
      content: `Generative AI is redefining how we interact with software. I've been experimenting with LangChain to build modular pipelines that combine LLMs with tools like vector search and external APIs. Using OpenAI APIs, I'm exploring how agents can reason, plan, and act in multi-step workflows. It's fascinating to see models go beyond text generation and into decision-making — opening the door to autonomous customer support, personal assistants, and data analysis bots.`
    },
    {
      id: 'llm-tools',
      icon: <Brain className="w-8 h-8 text-teal-400" />,
      title: 'LLM-Based Tools',
      subtitle: 'RAG Pipelines & Chatbot Frameworks',
      content: `LLMs are powerful, but combining them with retrieval-based systems like RAG (Retrieval Augmented Generation) boosts both accuracy and relevance. I'm currently learning how to implement RAG pipelines that connect LLMs with real-time or domain-specific knowledge. I'm also testing chatbot frameworks that allow context memory, document embedding, and custom personas. These tools are pushing chatbots from scripted flows into intelligent conversations.`
    },
    {
      id: 'edge-functions',
      icon: <Server className="w-8 h-8 text-teal-400" />,
      title: 'Edge Functions & Serverless',
      subtitle: 'Serverless Architectures',
      content: `The shift toward edge computing is exciting — deploying code closer to users means faster response times and new design patterns. I'm working with Vercel Edge Functions and Cloudflare Workers to build ultra-fast APIs without provisioning servers. Paired with serverless backends (like AWS Lambda or Firebase Functions), this enables scalable, pay-per-use systems ideal for modern SaaS products and microservices.`
    },
    {
      id: 'js-runtimes',
      icon: <Zap className="w-8 h-8 text-teal-400" />,
      title: 'Bun.js & Deno',
      subtitle: 'Next-Gen JavaScript Runtimes',
      content: `JavaScript runtimes are getting a major upgrade. I'm currently exploring Bun.js and Deno — both of which offer better performance, native TypeScript support, and modern dev ergonomics compared to Node.js. Bun's built-in bundler, test runner, and hot reloading are game-changers for developer speed. As these tools mature, they could redefine how we build everything from CLIs to APIs.`
    },
    {
      id: 'build-tools',
      icon: <Package className="w-8 h-8 text-teal-400" />,
      title: 'Turbopack / Vite',
      subtitle: 'Blazing Fast Frontend Build Tools',
      content: `Speed matters, especially in frontend development. Tools like Vite and Turbopack are revolutionizing build performance with instant server starts and on-demand module loading. I'm using Vite in personal projects to speed up React development, and closely following Turbopack as it becomes Next.js's successor. These tools not only save time, but also reshape the DX (developer experience).`
    }
  ];

  return (
    <section id="tech-trends" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-3 text-center text-white">
          Tech <span className="text-teal-400">Trends</span> & Interests
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto text-lg">
          Staying updated with the latest in software engineering and tech innovations is a core part of my routine. 
          Here are some technologies and concepts I'm currently exploring or excited about:
        </p>

        <div className="max-w-4xl mx-auto space-y-6">
          {trends.map((trend) => (
            <div 
              key={trend.id}
              className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setExpandedTrend(expandedTrend === trend.id ? null : trend.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-teal-400">
                    {trend.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-white">{trend.title}</h3>
                    <p className="text-sm text-gray-300">{trend.subtitle}</p>
                  </div>
                </div>
                {expandedTrend === trend.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              {expandedTrend === trend.id && (
                <div className="px-6 py-4 bg-gray-700 border-t border-gray-600">
                  <p className="text-gray-300 leading-relaxed">{trend.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechTrendsSection; 