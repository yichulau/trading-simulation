"use client"
import React, { useState, useEffect, useRef } from 'react';
import 'echarts-gl';
import * as echarts from "echarts";
import ChatInterface from "../../app/trading/components/chatInterface";
import { CardHeader, CardContent, Card } from "@/components/ui/card"

export default function NewsPage() {

    const [forexHackerString, setForexHackerString] = useState([]);
    const messagesEndRef = useRef(null);
    const generateRandomHexString = (minLength, maxLength) => {
        const characters = '0123456789ABCDEF';
        const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };

    const getRandomLength = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const createForexHackerString = () => {
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

        
          // Generate parts with more varied lengths
          const hexString1: string = generateRandomHexString(getRandomLength(8, 16), getRandomLength(20, 32));
          
          // Assemble the parts into one string with variable lengths
          const shuffledElements: string[] = [
            ...prefixes, ...forexTerms, ...commands, ...targets, ...actions, ...outcomes, hexString1
          ].sort(() => Math.random() - 0.5);
        
          const randomElements: string[] = shuffledElements.slice(0, 7); // Select 6 random elements
        
          // Join the selected elements to form the string
          return randomElements.join('_');
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };


    useEffect(() => {
        const interval = setInterval(() => {
            setForexHackerString(prevStrings => [...prevStrings, createForexHackerString()]);
        }, 500); 

        scrollToBottom(); // Scroll to the bottom whenever a new string is added

        return () => clearInterval(interval); // Clear the interval on component unmount
    }, [forexHackerString]);


    return (
        <>
           <div className="flex flex-col justify-center p-2 gap-2 w-full mt-2">
                <div className="bg-slate-900 text-gray-200 font-mono rounded-lg">
                    <div className="flex items-center justify-between p-2 bg-slate-800 rounded-t-lg">
                        <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                        </div>
                        <div className="text-xs">
                        <span className="text-gray-400">News Analyser Terminal (zsh)</span>
                        </div>
                        <div className="flex space-x-1">
                        <div className="flex items-center justify-center w-5 h-5 bg-gray-500 rounded-full text-xs">1</div>
                        <div className="flex items-center justify-center w-5 h-5 bg-gray-500 rounded-full text-xs">2</div>
                        <button className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center text-xs">
                            <PlusIcon className="text-gray-400" />
                        </button>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex items-center space-x-2">
                        <TriangleIcon className="text-green-400" />
                        <span className="text-green-400">➜</span>
                        <span className="text-blue-400">News Analyser Terminal</span>
                        </div>
                        <div className="grid grid-cols-6 gap-1 mt-2">
                        <span className="text-green-400">####</span>
                        <span className="text-red-400">####</span>
                        <span className="text-yellow-400">####</span>
                        <span className="text-blue-400">####</span>
                        <span className="text-indigo-400">####</span>
                        <span className="text-purple-400">####</span>
                        </div>
                        <div className="mt-4 space-y-1 overflow-y-auto max-h-[1000px]">
                            <p><span className="text-green-400">$ </span>Analysing Text....</p>
                            {forexHackerString.map((string, index) => (
                                <p key={index}>{string}</p>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>
                        <div className="mt-4 relative">
                        {/* <input
                            className="w-full bg-slate-700 text-gray-200 py-1 px-2 rounded outline-none"
                            placeholder="Type here..."
                            type="text"
                        />
                        <div className="absolute right-2 top-2 w-1 h-4 bg-white blink" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}



function PlusIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    )
  }
  
  
  function TriangleIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      </svg>
    )
  }
  