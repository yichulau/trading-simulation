"use client"

import Update from '@/components/chart/Update';
import OrderBook from "./components/orderbook"

import MarketInfo from "./components/marketInfo"
import ChatInterface from "./components/chatInterface"


export default function TradingPage() {

    

    return (
        <>
            <div className="flex flex-col justify-center p-2 gap-2 w-full mt-2">
                <div className="flex w-full">
                    <MarketInfo />
                </div>
                <div className="flex flex-row w-full gap-4">
                    <div className="flex flex-col">
                        <div className="flex flex-col text-white text-xs rounded-lg overflow-hidden" style={{backgroundColor: 'rgb(24,24,27)' }}>
                            <div className='text-center font-bold mt-4'>
                                <h2>Real Time</h2>
                            </div>
                            <Update/>
                        </div>
                        {/* <Card style={{ backgroundColor: 'rgb(24,24,27)' }}>
                            <CardHeader>
                                <CardTitle>Real-time</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Update/>
                            </CardContent>
                        </Card> */}
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
                </div>
            </div>
        </>
    )

}