"use client"

import Update from '@/components/chart/Update';
import OrderBook from "./components/orderbook"

import MarketInfo from "./components/marketInfo"
import ChatInterface from "./components/chatInterface"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"

  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import React, { useState, useEffect, useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import 'echarts-gl';
import * as echarts from "echarts";
import { options , options24H} from './data.helpers';
import { chinaMapConfig, resData } from './map.helpers';
import { geoJson } from './assets/chinaMap';
import LiquidationCard from './components/liquidationCard';

export default function TradingPage() {

    const [timeValue, setTimeValue] = useState('1h');

    const handleSelectChange = (value : string) => {
        setTimeValue(value);
    };

    const mapInput = {
        geoJSON: geoJson,
    };
    
      
    const mapoptions = chinaMapConfig({
        data: resData.data,
        max: resData.max,
        min: 0,
    });
    
      
      // Register the map if needed (check documentation for details)
    echarts.registerMap("china", { geoJSON: mapInput as any, specialAreas: {} });


    return (
        <>
            <div className="flex flex-col justify-center p-2 gap-2 w-full mt-2 mb-4">
                <div className='flex flex-grow w-full gap-4'>
                    <div className='flex flex-col w-full md:w-1/2'>
                        <div className='flex justify-between w-full'>           
                            <h2 className="text-lg font-bold">Liquidation Heat Map</h2>
                            <div className="flex flex-row ml-auto">
                                <Select onValueChange={handleSelectChange} value={timeValue} >
                                        <SelectTrigger className="w-[100px]">
                                            <SelectValue placeholder="Select a Time" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="1h">1 Hour</SelectItem>
                                                <SelectItem value="24h">24 Hour</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                            </div>   
                        </div>
                        <div className='flex w-full'>
                            <ReactECharts 
                                option={timeValue === '1h' ? options : options24H} 
                                style={{ height: '400px', width: '100%' }} 
                            />
                        </div>
                    </div>

                    <div className='flex flex-col w-full md:w-1/2'>
                        <h2 className="text-lg font-bold mb-4">Liqduidation Stats</h2>
                        <LiquidationCard />
                    </div>    
                </div>

                <div className='flex w-full'>
                    <div className='flex flex-col w-full md:w-[1000px]'>
                        <h2 className="text-lg font-bold mb-4">Futures Transaction Map</h2>
                        <ReactECharts option={mapoptions} style={{ height: '400px', width: '100%' }} />
                    </div>
                </div>


                {/* <div className="flex w-full">
                    <MarketInfo />
                </div> */}
                {/* <div className="flex flex-row w-full gap-4">
                    <div className="flex flex-col">
                        <div className="flex flex-col text-white text-xs rounded-lg overflow-hidden" style={{backgroundColor: 'rgb(24,24,27)' }}>
                            <div className='text-center font-bold mt-4'>
                                <h2>Real Time</h2>
                            </div>
                            <Update/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <OrderBook/>
                    </div>
                    <div className="flex flex-col">
                        <div className="md:order-1">
                            <div className="flex h-full flex-col space-y-4 w-full">
                               <ChatInterface />
                        
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )

}