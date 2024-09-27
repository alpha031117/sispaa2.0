'use client';

import React, { useState } from 'react';

const Chatbot = () => {
    const [renderChatbotPanel, setRenderChatbotPanel] = useState(false);

    return (
        <div className='flex flex-col items-end'>
            {renderChatbotPanel && <ChatbotPanel setRenderChatbotPanel={setRenderChatbotPanel} />}
            {!renderChatbotPanel && (
                <button onClick={() => setRenderChatbotPanel(true)}>
                    <div className='bg-accent_blue lato-bold rounded-t-md py-1 px-12 text-white'>
                        ChatBot
                    </div>
                </button>
            )}
        </div>
    )
}
export default Chatbot;


type conversation = {
    type: string;
    message: string;
}

interface ChatbotPanelProps {
    setRenderChatbotPanel: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatbotPanel: React.FC<ChatbotPanelProps> = ({ setRenderChatbotPanel }) => {
    const [conversation, setConversation] = useState<conversation[]>([]);
    const [userInput, setUserInput] = useState<string>('');
    const [responseIndex, setResponseIndex] = useState<number>(0);

    // Sample response from chatbot
    const chatbotResponse = [
        'Hello, how can I help you today?',
        'I am sorry to hear that. Can you provide me with more details?',
        'I see. I will need some more information to help you with your complaint.',
        'Can you please provide me with your account number?'
    ];

    const handleSend = () => {
        if (userInput.trim() === '') return;  // Skip if input is empty

        // Add user message to conversation
        const newConversation = [...conversation, { type: 'user', message: userInput }];
        setConversation(newConversation);
        setUserInput('');

        // Add chatbot response to conversation
        const botMessage = chatbotResponse[responseIndex % chatbotResponse.length];
        setTimeout(() => {
            setConversation([...newConversation, { type: 'bot', message: botMessage }]);
            setResponseIndex(responseIndex + 1);
        }, 500); // Simulate delay for chatbot response
    };

    return (
        <div className='flex flex-col justify-between bg-white rounded-b-md py-2 w-[21rem] h-[25rem] shadow-xl self-start text-gray-900 border border-gray-300 backdrop-blur-sm p-2 rounded-md'>
            <button onClick={() => setRenderChatbotPanel(false)}>
                <p>Chatbot Panel</p>
            </button>
            <hr className='border-gray-300 my-2' />

            {/* Chat conversation */}
            <div className='flex-1 overflow-y-auto'>
                {conversation.map((msg, index) => (
                    <div key={index} className={`my-2 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                        <div className={`inline-block p-2 rounded-md ${msg.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                            {msg.message}
                        </div>
                    </div>
                ))}
            </div>

            {/* Chat input */}
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
                <div className='flex mt-2'>
                    <input
                        type='text'
                        placeholder='Type your message here'
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        className='border border-gray-300 rounded-md w-full p-2'
                    />
                    <button onClick={handleSend} className='bg-accent_blue text-white rounded-md px-4 ml-2'>Send</button>
                </div>
            </form>
        </div>
    )
}