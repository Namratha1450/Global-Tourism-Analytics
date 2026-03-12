"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

const tourismResponses: Record<string, string> = {
  "highest tourism revenue": "Based on our data, the United States, Spain, and France consistently rank among the countries with the highest tourism revenue. The US leads with annual tourism receipts exceeding $200 billion, followed by Spain and France with revenues around $70-80 billion each. These figures are influenced by factors like international arrivals, average spending per tourist, and the diversity of tourism offerings.",
  
  "sustainability impact": "Sustainability has a significant positive impact on tourism satisfaction. Our analysis shows that countries with higher sustainability scores tend to have 15-20% higher tourism satisfaction rates. Sustainable practices like eco-friendly accommodations, responsible tourism initiatives, and environmental conservation efforts attract environmentally conscious travelers and enhance overall visitor experience.",
  
  "airport traffic": "Airport traffic is a strong indicator of tourism demand. Our data shows a correlation coefficient of 0.85 between airport traffic and tourism arrivals. Countries with major hub airports like the UAE (Dubai), Singapore, and the Netherlands see disproportionately higher tourism numbers. Increased airport capacity and connectivity directly translate to higher tourist arrivals and spending.",
  
  "tourism growth factors": "Key factors affecting tourism growth include: 1) Infrastructure development (roads, airports, hotels) - accounts for 25% of growth variance, 2) Visa policies - easier visa access can increase tourism by 15-25%, 3) Safety and stability - political stability strongly correlates with tourism growth, 4) Marketing and destination branding, 5) Economic conditions in source markets, and 6) Exchange rates affecting travel affordability.",
  
  "gdp contribution": "Tourism contributes significantly to global GDP, averaging 10.4% worldwide. In some countries like Maldives, Seychelles, and Caribbean nations, tourism accounts for over 25% of GDP. Our economic dashboard tracks how tourism revenue translates to GDP contribution across different economies.",
  
  "visa approvals": "Visa approval rates significantly influence tourism flow. Countries with visa-on-arrival or visa-free policies see 30-40% higher tourist arrivals compared to those requiring pre-approved visas. The Schengen zone in Europe demonstrates how unified visa policies can boost regional tourism.",
  
  "carbon emissions": "Tourism accounts for approximately 8% of global carbon emissions. Air travel contributes about 2.5% of global CO2 emissions, with accommodation and activities adding to the footprint. Our environmental impact dashboard tracks carbon intensity per tourist across destinations, helping identify opportunities for sustainable tourism development.",
  
  "infrastructure development": "Infrastructure development index strongly correlates with tourism attractiveness. Our analysis shows that a 10% improvement in infrastructure scoring leads to approximately 8% increase in tourist arrivals. Key infrastructure factors include transportation networks, digital connectivity, healthcare facilities, and tourism-specific amenities.",
}

function getResponse(question: string): string {
  const lowerQuestion = question.toLowerCase()
  
  if (lowerQuestion.includes("revenue") || lowerQuestion.includes("highest")) {
    return tourismResponses["highest tourism revenue"]
  }
  if (lowerQuestion.includes("sustainability") || lowerQuestion.includes("satisfaction")) {
    return tourismResponses["sustainability impact"]
  }
  if (lowerQuestion.includes("airport") || lowerQuestion.includes("traffic")) {
    return tourismResponses["airport traffic"]
  }
  if (lowerQuestion.includes("growth") || lowerQuestion.includes("factors") || lowerQuestion.includes("affect")) {
    return tourismResponses["tourism growth factors"]
  }
  if (lowerQuestion.includes("gdp") || lowerQuestion.includes("contribution")) {
    return tourismResponses["gdp contribution"]
  }
  if (lowerQuestion.includes("visa")) {
    return tourismResponses["visa approvals"]
  }
  if (lowerQuestion.includes("carbon") || lowerQuestion.includes("emission")) {
    return tourismResponses["carbon emissions"]
  }
  if (lowerQuestion.includes("infrastructure")) {
    return tourismResponses["infrastructure development"]
  }
  
  return "Thank you for your question about tourism analytics. Our platform provides insights on tourism revenue, sustainability metrics, travel behavior, and economic indicators. You can explore our dashboards for detailed data on specific countries and metrics. Try asking about tourism revenue, sustainability impact, airport traffic, or factors affecting tourism growth."
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm your Tourism Analytics Assistant. Ask me questions about tourism data, such as:\n\n• Which country has the highest tourism revenue?\n• How does sustainability impact tourism satisfaction?\n• How does airport traffic influence tourism demand?\n• What factors affect tourism growth?",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate typing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const response = getResponse(input)
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: response,
    }

    setIsTyping(false)
    setMessages((prev) => [...prev, assistantMessage])
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "chatbot-bubble h-14 w-14 rounded-full neon-button flex items-center justify-center shadow-lg",
          isOpen && "hidden"
        )}
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-md">
          <div className="glass-card rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]">
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-blue-600/20 to-purple-600/20">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Tourism Assistant</h3>
                  <p className="text-xs text-gray-400">Ask me about tourism analytics</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex gap-3",
                    message.role === "user" && "flex-row-reverse"
                  )}
                >
                  <div
                    className={cn(
                      "h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0",
                      message.role === "user"
                        ? "bg-purple-500"
                        : "bg-gradient-to-br from-blue-500 to-cyan-500"
                    )}
                  >
                    {message.role === "user" ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div
                    className={cn(
                      "rounded-2xl px-4 py-3 max-w-[80%]",
                      message.role === "user"
                        ? "bg-purple-600/30 text-white"
                        : "bg-white/10 text-gray-200"
                    )}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-white/10 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about tourism analytics..."
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="p-2 neon-button rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5 text-white" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
