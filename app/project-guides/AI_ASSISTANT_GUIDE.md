# 🤖 AI Assistant Integration Guide - Mukhbitah

Panduan lengkap untuk mengintegrasikan AI Assistant yang dapat memberikan rekomendasi hijab berdasarkan berbagai kriteria.

## 🎯 Fitur AI Assistant

### 1. Rekomendasi Berdasarkan Warna Kulit
```
User: "Hijab warna apa yang cocok untuk kulit sawo matang?"
AI: "Untuk kulit sawo matang, saya rekomendasikan warna-warna hangat seperti..."
```

### 2. Rekomendasi Berdasarkan Outfit
```
User: "Saya pakai baju hitam, hijab warna apa yang cocok?"
AI: "Untuk outfit hitam, Anda bisa pilih..."
```

### 3. Rekomendasi Berdasarkan Acara
```
User: "Hijab untuk acara formal?"
AI: "Untuk acara formal, saya rekomendasikan Pashmina Silk Premium..."
```

### 4. Rekomendasi Berdasarkan Bentuk Wajah
```
User: "Hijab yang cocok untuk wajah bulat?"
AI: "Untuk wajah bulat, style yang cocok adalah..."
```

## 🛠️ Implementation Options

### Option 1: OpenAI GPT (Recommended)

#### Setup
```bash
npm install openai
```

#### Implementation
```typescript
// lib/ai-assistant.ts
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function getHijabRecommendation(query: string) {
  const systemPrompt = `
    Anda adalah AI assistant untuk Mukhbitah, brand hijab premium.
    Berikan rekomendasi hijab yang sesuai berdasarkan:
    - Warna kulit pelanggan
    - Outfit yang dipakai
    - Acara/occasion
    - Bentuk wajah
    
    Produk yang tersedia:
    1. Pashmina Silk Premium - Rp 189.000
    2. Segi Empat Voal Luxury - Rp 149.000
    3. Instan Ceruti Elegant - Rp 129.000
    
    Berikan rekomendasi yang spesifik, ramah, dan membantu.
  `;

  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: query }
    ],
    temperature: 0.7,
    max_tokens: 500,
  });

  return response.choices[0].message.content;
}
```

#### API Route
```typescript
// app/api/ai-assistant/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getHijabRecommendation } from '@/lib/ai-assistant';

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();
    const recommendation = await getHijabRecommendation(query);
    
    return NextResponse.json({ recommendation });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to get recommendation' },
      { status: 500 }
    );
  }
}
```

#### Component
```typescript
// components/AIAssistant.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{
    role: 'user' | 'assistant';
    content: string;
  }>>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: input }),
      });

      const data = await response.json();
      const assistantMessage = {
        role: 'assistant' as const,
        content: data.recommendation
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full shadow-soft-lg flex items-center justify-center z-50"
        >
          <MessageCircle className="w-7 h-7" />
        </motion.button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 right-6 w-96 h-[600px] glass-card rounded-3xl shadow-soft-lg z-50 flex flex-col"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-4 rounded-t-3xl flex justify-between items-center">
            <div>
              <h3 className="font-semibold">AI Assistant</h3>
              <p className="text-xs text-primary-100">
                Tanya saya tentang hijab!
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 mt-8">
                <p className="mb-4">👋 Halo! Saya siap membantu Anda.</p>
                <p className="text-sm">Contoh pertanyaan:</p>
                <div className="mt-2 space-y-2 text-xs">
                  <div className="bg-primary-50 p-2 rounded">
                    "Hijab untuk kulit putih?"
                  </div>
                  <div className="bg-primary-50 p-2 rounded">
                    "Cocok untuk baju merah?"
                  </div>
                </div>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-2xl">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Tanya sesuatu..."
                className="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
```

### Option 2: Custom ML Model

#### Using TensorFlow.js
```typescript
// lib/ml-model.ts
import * as tf from '@tensorflow/tfjs';

export async function loadModel() {
  const model = await tf.loadLayersModel('/models/hijab-recommender/model.json');
  return model;
}

export function predictRecommendation(
  skinTone: number,
  occasion: number,
  faceShape: number
) {
  // Model prediction logic
}
```

### Option 3: Rule-Based System (Simple)

```typescript
// lib/recommendation-engine.ts
export function getRecommendation(criteria: {
  skinTone?: 'fair' | 'medium' | 'dark';
  outfit?: string;
  occasion?: 'formal' | 'casual' | 'party';
  faceShape?: 'round' | 'oval' | 'square';
}) {
  const recommendations = [];

  // Skin tone recommendations
  if (criteria.skinTone === 'fair') {
    recommendations.push({
      reason: 'Cocok untuk kulit cerah',
      products: ['Pashmina Silk Premium', 'Segi Empat Voal Luxury'],
      colors: ['Pastel', 'Soft Pink', 'Beige'],
    });
  }

  // Outfit recommendations
  if (criteria.outfit?.includes('hitam')) {
    recommendations.push({
      reason: 'Kontras dengan outfit hitam',
      products: ['Pashmina Cotton Premium'],
      colors: ['Cream', 'Gold', 'Beige'],
    });
  }

  // Occasion recommendations
  if (criteria.occasion === 'formal') {
    recommendations.push({
      reason: 'Elegan untuk acara formal',
      products: ['Pashmina Silk Premium'],
      colors: ['Gold', 'Beige'],
    });
  }

  return recommendations;
}
```

## 📊 Data Structure

### Product Data with AI Metadata
```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  colors: string[];
  
  // AI Metadata
  aiMetadata: {
    suitableFor: {
      skinTones: ('fair' | 'medium' | 'dark')[];
      occasions: ('formal' | 'casual' | 'party')[];
      faceShapes: ('round' | 'oval' | 'square')[];
    };
    colorPairings: {
      outfit: string;
      recommended: boolean;
    }[];
    tags: string[];
  };
}
```

## 🎨 UI/UX Considerations

### 1. Chat Interface
- Floating button di bottom-right
- Smooth animations
- Clear message bubbles
- Typing indicator
- Quick reply suggestions

### 2. Product Cards in Chat
```typescript
<div className="product-recommendation">
  <img src={product.image} />
  <h4>{product.name}</h4>
  <p>{product.price}</p>
  <button>Lihat Produk</button>
</div>
```

### 3. Feedback System
```typescript
<div className="feedback">
  <p>Apakah rekomendasi ini membantu?</p>
  <button>👍 Ya</button>
  <button>👎 Tidak</button>
</div>
```

## 💰 Cost Estimation

### OpenAI GPT-4
- $0.03 per 1K tokens (input)
- $0.06 per 1K tokens (output)
- Average query: ~500 tokens = $0.045
- 1000 queries/month = ~$45

### Alternatives
- **GPT-3.5 Turbo**: ~10x cheaper
- **Claude**: Similar pricing
- **Custom Model**: One-time training cost
- **Rule-Based**: Free (no API costs)

## 🔒 Privacy & Security

### Data Handling
- Don't store personal information
- Anonymize user queries
- Clear chat history option
- GDPR compliance

### Rate Limiting
```typescript
// Limit to 10 queries per user per hour
const rateLimit = {
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10,
};
```

## 📈 Analytics

### Track Metrics
- Number of queries
- Most common questions
- Recommendation acceptance rate
- User satisfaction scores
- Conversion rate from AI recommendations

## 🧪 Testing

### Test Cases
```typescript
describe('AI Assistant', () => {
  it('should recommend light colors for dark skin', async () => {
    const result = await getRecommendation({
      skinTone: 'dark'
    });
    expect(result.colors).toContain('Cream');
  });

  it('should recommend formal hijabs for formal occasions', async () => {
    const result = await getRecommendation({
      occasion: 'formal'
    });
    expect(result.products).toContain('Pashmina Silk Premium');
  });
});
```

## 🚀 Deployment

### Environment Variables
```env
OPENAI_API_KEY=sk-...
AI_MODEL_VERSION=gpt-4
AI_MAX_TOKENS=500
AI_TEMPERATURE=0.7
```

### Monitoring
- Track API usage
- Monitor response times
- Log errors
- User feedback

## 📚 Resources

- [OpenAI API Documentation](https://platform.openai.com/docs)
- [TensorFlow.js](https://www.tensorflow.org/js)
- [Chatbot Best Practices](https://www.nngroup.com/articles/chatbots/)

---

**Ready to implement AI Assistant!** 🤖✨
