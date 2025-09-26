"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { formatChatResponse, isValidVietnameseResponse } from "../lib/text";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatContextType {
  messages: ChatMessage[];
  isLoading: boolean;
  isOpen: boolean;
  error: string | null;
  sendMessage: (content: string) => Promise<void>;
  toggleChat: () => void;
  clearChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "📚 Xin chào! Tôi là trợ lý ảo môn MLN131 - Lý luận Chính trị. Tôi chuyên hỗ trợ học tập về chủ đề 'LIÊN MINH GIAI CẤP, TẦNG LỚP TRONG THỜI KỲ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI'. \n\nTôi sẵn sàng giúp bạn học tập hiệu quả! 🎯",
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(
    async (content: string) => {
      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        role: "user",
        content,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: [...messages, userMessage].map((msg) => ({
              role: msg.role,
              content: msg.content,
            })),
          }),
        });

        if (!response.ok) {
          throw new Error("Không thể nhận phản hồi từ AI. Vui lòng thử lại.");
        }

        const data = await response.json();

        // Sanitize and format the response text
        let sanitizedContent = data.message || "";

        // Format and clean the response
        sanitizedContent = formatChatResponse(sanitizedContent);

        // Validate the response quality
        if (!isValidVietnameseResponse(sanitizedContent)) {
          sanitizedContent =
            "Xin lỗi, tôi không thể tạo phản hồi phù hợp. Vui lòng thử lại với câu hỏi khác.";
        }

        const assistantMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: sanitizedContent,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, assistantMessage]);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Đã xảy ra lỗi. Vui lòng thử lại."
        );
      } finally {
        setIsLoading(false);
      }
    },
    [messages]
  );

  const toggleChat = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const clearChat = useCallback(() => {
    setMessages([
      {
        id: "1",
        role: "assistant",
        content:
          "📚 Xin chào! Tôi là trợ lý ảo môn MLN131 - Lý luận Chính trị. Tôi chuyên hỗ trợ học tập về chủ đề 'LIÊN MINH GIAI CẤP, TẦNG LỚP TRONG THỜI KỲ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI'.\nTôi sẵn sàng giúp bạn học tập hiệu quả! 🎯",
        timestamp: new Date(),
      },
    ]);
    setError(null);
  }, []);

  return (
    <ChatContext.Provider
      value={{
        messages,
        isLoading,
        isOpen,
        error,
        sendMessage,
        toggleChat,
        clearChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
}
