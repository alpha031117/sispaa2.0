'use client';

import React, { useState } from 'react';

type conversation = {
    type: string;
    message: string;
}


const chatbotResponse = [
    'Hello! How can I help you?',
    'I am a chatbot. I can help you with your queries.',
    'Please provide me with more information.',
    'Thank you for your information. I will get back to you soon.',
];

const FloatingChatbot = () => {
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);
    const [userInput, setUserInput] = useState<string>('');
    const [conversation, setConversation] = useState<conversation[]>([]);
    const [responseIndex, setResponseIndex] = useState<number>(0);

    const handleSend = (event: any) => {
        event.preventDefault();
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
        <div className='z-30'>
            {isChatbotOpen? (
                <div>
                    <div className='fixed bottom-4 right-8 bg-white rounded-lg shadow-lg w-96 h-96'>
                        <div className='p-4'>
                            <div className='flex flex-row justify-between'>
                                <div className='text-xl lato-semibold'>Chatbot</div>
                                <button onClick={() => {setIsChatbotOpen(false)}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className='h-72 overflow-y-auto'>
                            {conversation.map((msg, index) => (
                                <div key={index} className={`my-2 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                                    <div className={`inline-block p-2 rounded-md ${msg.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                                        {msg.message}
                                    </div>
                                </div>
                            ))}
                            </div>
                            <form onSubmit={handleSend} className='flex flex-row gap-12'>
                                <input type='text' className='w-full border border-gray-300 rounded-md p-2' value={userInput} onChange={(e) => setUserInput(e.target.value)} />
                                <button type='submit' className='bg-accent_blue text-white rounded-md p-2'>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            )
            : (
                <button className='rounded-full p-4 fixed bottom-4 right-8 bg-accent_blue' onClick={() => {setIsChatbotOpen(true)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>
                </button>
            )}
        </div>
    )
}
export default FloatingChatbot;