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
        <div className="flex h-full flex-col space-y-4 p-2 bg-gradient-to-br from-green-800 to-black rounded-lg w-full">
        <div className='text-center font-bold mt-4 text-green-300'>
          <h2>Prompt Engineering</h2>
        </div>
        <div className="flex flex-col-reverse overflow-y-auto">
          <div className="bg-black text-green-300 p-2 my-2 rounded-lg whitespace-pre-wrap border border-gray-600 min-h-[270px]">
            {streamText}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="flex-1 p-2 bg-black text-green-300 border border-green-600 rounded-md"
            placeholder="Type something..."
          />
          <button
            onClick={handleButtonClick}
            className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <ArrowRightIcon className="h-5 w-5 text-green-300"/>
          </button>
        </div>
      </div>
    </>
  );
}

export default ChatInterface;
