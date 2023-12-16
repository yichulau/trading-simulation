"use client"
import React, { useState, useEffect, useRef, use } from 'react';
import 'echarts-gl';
import * as echarts from "echarts";
import ChatInterface from "../../app/trading/components/chatInterface";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export default function PromptPage() {
    const [inputValue, setInputValue] = useState('');
    const [enteredPrompt, setEnteredPrompt]= useState("")
    const [streamText, setStreamText] = useState("");
    const streamTimeoutRef : any = useRef(null);
  
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
    
    function returnAnswer(): string {
    
    
    const answer : string = "Answer"
    
    
    return answer ;
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
      

    const handleClick = () => {
        setEnteredPrompt(inputValue)
        if (streamTimeoutRef.current) {
            clearInterval(streamTimeoutRef.current); // Clear any existing streams
    
          }
    
          
          // Start streaming random words
          streamTimeoutRef.current = setInterval(() => {
            // setStreamText((prev) => prev + " " + createForexHackerString());
            setStreamText((returnAnswer()))
          }, 500); // Adjust the interval as needed
    
    
      
          // Stop the stream after 5 seconds
          setTimeout(() => {
            clearInterval(streamTimeoutRef.current);
          }, 5000);
      
   
    }

     
    const handleInputChange = (e : any) => {
        setInputValue(e.target.value);
      };
        

    return (
        <>
            <div className="flex flex-col justify-center p-2 gap-2 w-full mt-2">
                <Card>
                    <div key="1" className="flex">
                        <aside className="w-80 border-r h-[80vh]">
                            <div className="p-4 space-y-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold">Forex Prompts</h2>
                                <Button size="icon" variant="ghost">
                                <PencilIcon className="w-6 h-6" />
                                </Button>
                            </div>
                            <div className="relative">
                                {/* <SearchIcon className="absolute left-2.5 top-3 h-4 w-4 text-zinc-500 dark:text-zinc-400" /> */}
                                <Input className="pl-8" placeholder="Search messages..." type="search" />
                                <Button className="absolute right-2.5 top-3" size="icon" variant="ghost" />
                            </div>
                            <div className="space-y-2">
                                <Card className="p-2">
                                    <CardContent>
                                        <h3 className="font-semibold">How To Trade Forex</h3>
                                        <p className="text-xs text-zinc-500 dark:text-zinc-400">How can i make profitable entry....</p>
                                    </CardContent>
                                </Card>
                            </div>
                            </div>
                        </aside>
                        <section className="flex flex-col w-full">
                            <header className="border-b p-4">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <Avatar className="relative overflow-visible w-10 h-10">
                                <span className="absolute right-0 top-0 flex h-3 w-3 rounded-full bg-green-600" />
                                <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                                <AvatarFallback>U</AvatarFallback>
                                </Avatar>
                                <div>
                                How to Trade Forex
                                {/* <span className="text-xs text-green-600 block">Online</span> */}
                                </div>
                            </h2>
                            </header>
                            <main className="flex-1 overflow-auto p-4">
                            <div className="space-y-4">
                                <div className="flex items-end gap-2">
                                    <div className="rounded-lg bg-zinc-200 dark:bg-gray-700 p-2">
                                        <p className="text-sm">Input your forex request</p>
                                    </div>
                                </div>
                                <div className="flex items-end gap-2 justify-end">
                                    <div className="rounded-lg bg-zinc-700 text-white p-2">
                                        <p className="text-sm">{enteredPrompt}</p>
                                    </div>
                                </div>
                                <div className="flex items-end gap-2 max-w-[300px]">
                                    <div className="rounded-lg bg-zinc-200 dark:bg-gray-700 p-2 ">
                                        <p className="text-sm">{streamText}</p>
                                    </div>
                                </div>
                            </div>
                            </main>
                            <footer className="border-t  p-4">
                            <div className="flex items-center gap-2">
                                <Button size="icon" variant="ghost">
                                <SmileIcon className="w-6 h-6" />
                                </Button>
                                <Input className="flex-1" placeholder="Type a message..." value={inputValue}  onChange={handleInputChange}  />
                                <Button onClick={handleClick}>Send</Button>
                            </div>
                            </footer>
                        </section>
                    </div>
                </Card>
            </div>
        </>
    )

}


function PencilIcon(props : any) {
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
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        <path d="m15 5 4 4" />
      </svg>
    )
  }
  

function SmileIcon(props : any) {
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
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" x2="9.01" y1="9" y2="9" />
        <line x1="15" x2="15.01" y1="9" y2="9" />
      </svg>
    )
  }
  