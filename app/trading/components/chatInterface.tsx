"use client"

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import React, { useRef, useState } from 'react';
import { ArrowRightIcon } from "@radix-ui/react-icons"

const getRandomText = () => {
    // This function would return a random string. For now, it returns a placeholder text.
    // You can replace this logic with actual random text generation.
    return "This is a randomly generated text.";
  };
  
function generateRandomWord() {
    // This function would generate a random word. Replace this with your own logic or an API call.
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let text = "";
    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

function ChatInterface() {
    const [inputValue, setInputValue] = useState('');
    const [streamText, setStreamText] = useState('');
    const streamTimeoutRef : any = useRef(null);
  
    const handleInputChange = (e : any) => {
      setInputValue(e.target.value);
    };
  
    const handleButtonClick = () => {
      if (streamTimeoutRef.current) {
        clearInterval(streamTimeoutRef.current); // Clear any existing streams
      }
      
      // Start streaming random words
      streamTimeoutRef.current = setInterval(() => {
        setStreamText((prev) => prev + " " + generateRandomWord());
      }, 100); // Adjust the interval as needed
  
      // Stop the stream after 5 seconds
      setTimeout(() => {
        clearInterval(streamTimeoutRef.current);
      }, 5000);
  
      setInputValue(''); // Clear the input field
    };
    

  return (
    <>
        <div className="flex h-full flex-col space-y-4 p-2 bg-[rgb(24,24,27)] rounded-lg w-full">
            <div className='text-center font-bold mt-4'>
                <h2>Prompt Engineering</h2>
            </div>
            <div className="flex flex-col-reverse overflow-y-auto">
                <div className="bg-black text-white p-2 my-2 rounded-lg whitespace-pre-wrap border-gray-600 min-h-[270px]">
                {streamText}
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="flex-1 p-2 bg-black text-white border border-gray-600 rounded-md"
                placeholder="Type something..."
                />
                <button
                onClick={handleButtonClick}
                className="p-2  text-white rounded-full focus:outline-none focus:ring-2"
                >
                <ArrowRightIcon className="h-5 w-5 "/>
                </button>
            </div>
        </div>
    </>
  );
}

export default ChatInterface;
