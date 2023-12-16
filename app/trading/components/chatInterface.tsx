"use client"

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import React, { useRef, useState, useEffect } from 'react';
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
    const [streamText, setStreamText] = useState("");
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
        setStreamText((prev) => prev + " " + createForexHackerString());
      }, 500); // Adjust the interval as needed


  
      // Stop the stream after 5 seconds
      setTimeout(() => {
        clearInterval(streamTimeoutRef.current);
      }, 5000);
  
      setInputValue(''); // Clear the input field
    };

    function generateRandomHexString(minLength: number, maxLength: number): string {
      const characters: string = '0123456789ABCDEF';
      const length: number = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
      let result: string = '';
      const charactersLength: number = characters.length;
      for (let i: number = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
    
    function getRandomLength(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function createForexHackerString(): string {
      const prefixes: string[] = [
        'FXCrunch_', 'TradeBot_', 'ForexSession_', 'MarketAnalyser_', 
        'CurrencyPulse_', 'TradeMaster_', 'ForexInsight_', 'PipNavigator_',
        'ChartWise_', 'MarketProbe_'
      ];
      
      const forexTerms: string[] = [
        'EURUSD', 'GBPUSD', 'USDJPY', 'AUDNZD', 'USDCAD', 'XAUUSD', 'Oil', 
        'Yield', 'Pip', 'Lot', 'Fibonacci', 'Margin', 'Bearish', 'Bullish', 
        'Resistance', 'Support', 'Leverage', 'Indicator', 'MACD', 'Rollover'
      ];
      
      const commands: string[] = [
        'analyze', 
        'report', 
        'compare', 
        'correlation', 
        'fetch', 
        'backtest', 
        'extract', 
        'plot', 
        'evaluate', 
        'optimize', 
        'identify'
      ];
      
      const targets: string[] = [
        '/analysis', '/data', '/archive', 
        '/comparison', '/archives',
        '/market', '/extraction', '/comparison', 
        '/charts', '/performance'
      ];
      
      const actions: string[] = [
        'compiling', 'building', 'running', 'installing', 'configuring', 'cleaning',
        'deploying', 'committing', 'executing', 'testing', 'removing', 'updating'
      ];
      
      
      const outcomes: string[] = [
        'successful execution', 'improved performance', 'optimized workflow', 
        'enhanced security', 'streamlined process'
      ];
    
      // const prefix: string = prefixes[Math.floor(Math.random() * prefixes.length)];
      // const forexTerm: string = forexTerms[Math.floor(Math.random() * forexTerms.length)];
      // const command: string = commands[Math.floor(Math.random() * commands.length)];
      // const target: string = targets[Math.floor(Math.random() * targets.length)];
      // const action: string = actions[Math.floor(Math.random() * actions.length)];
      // const outcome: string = outcomes[Math.floor(Math.random() * outcomes.length)];
    
      // Generate parts with more varied lengths
      const hexString1: string = generateRandomHexString(getRandomLength(8, 16), getRandomLength(20, 32));
      
      // Assemble the parts into one string with variable lengths
      const shuffledElements: string[] = [
        ...prefixes, ...forexTerms, ...commands, ...targets, ...actions, ...outcomes, hexString1
      ].sort(() => Math.random() - 0.5);
    
      const randomElements: string[] = shuffledElements.slice(0, 7); // Select 6 random elements
    
      // Join the selected elements to form the string
      return randomElements.join('_');
    }

    
    

  return (
    <>
        <div className="flex h-full flex-col space-y-4 p-2 bg-gradient-to-br from-green-800 to-black  w-full">
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
