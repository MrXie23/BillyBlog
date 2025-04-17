'use client'

import React, { useState } from 'react'

const SimpleChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: '您好！有什么可以帮助您的吗？', isUser: false },
  ])
  const [inputValue, setInputValue] = useState('')

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    // 添加用户消息
    const newMessages = [...messages, { text: inputValue, isUser: true }]
    setMessages(newMessages)
    setInputValue('')

    // 模拟回复
    setTimeout(() => {
      setMessages([
        ...newMessages,
        {
          text: `您发送了: ${inputValue}。我是自动回复消息，您可以在此处接入真实的聊天API。`,
          isUser: false,
        },
      ])
    }, 1000)
  }

  return (
    <>
      {/* 聊天按钮 */}
      <div className="fixed right-4 bottom-4 z-50">
        <button
          onClick={toggleChat}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg hover:from-indigo-600 hover:to-purple-600 focus:outline-none"
          aria-label="打开聊天窗口"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      </div>

      {/* 聊天窗口 */}
      {isOpen && (
        <div className="fixed right-4 bottom-20 z-50 flex w-80 flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-800">
          {/* 聊天标题 */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 text-white">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">客服助手</h3>
              <button onClick={toggleChat} className="text-white hover:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="text-sm opacity-80">有问题随时咨询</div>
          </div>

          {/* 聊天消息 */}
          <div className="flex max-h-80 flex-1 flex-col gap-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.isUser
                      ? 'bg-indigo-500 text-white'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* 聊天输入 */}
          <form
            onSubmit={handleSendMessage}
            className="border-t border-gray-200 p-2 dark:border-gray-700"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="请输入消息..."
                className="flex-1 rounded-md border border-gray-300 p-2 text-sm focus:ring focus:ring-indigo-300 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-indigo-700"
              />
              <button
                type="submit"
                className="rounded-md bg-indigo-500 px-4 text-white hover:bg-indigo-600"
              >
                发送
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default SimpleChatWidget
