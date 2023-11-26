import React, { useEffect, useState } from 'react';
import { Separator } from "@/components/ui/separator"

// Generate mock data
const generateMockData = () => {
    const data : any = { bids: [], asks: [] };
    for (let i = 0; i < 20; i++) {
      data.bids.push({ price: (37500 + i * 10).toFixed(1), size: (Math.random() * 5).toFixed(3), cumulative: (18 + i).toFixed(3) });
      data.asks.push({ price: (37600 + i * 10).toFixed(1), size: (Math.random() * 5).toFixed(3), cumulative: (1 + i).toFixed(3) });
    }
    return data;
  };
  
const mockOrderBookData = generateMockData();
  
const OrderBook = () => {
    const [data, setData] = useState(mockOrderBookData);

    useEffect(() => {
      const interval = setInterval(() => {
        setData((prevData : any) => ({
          bids: [...prevData.bids.slice(1), prevData.bids[0]],
          asks: [...prevData.asks.slice(1), prevData.asks[0]],
        }));
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
    
     // Assuming each row is 20px high, calculate how many rows can fit in the parent container.
    // This is a simplistic approach, you might need to adjust this for padding/margins/borders etc.
    const parentHeight = 250; // Replace with the actual height of the parent container
    const rowHeight = 20;
    const numberOfRows = Math.floor(parentHeight / (rowHeight * 2)); // Times 2 for bids and asks

    // Function to calculate the gradient based on size and cumulative
    const calculateGradientWidth = (size : any, cumulative : any) => {
        const percentage = (parseFloat(size) / parseFloat(cumulative)) * 100;
        return `${percentage}%`;
    };


    return  (
    <div className="flex flex-col text-white text-xs rounded-lg overflow-hidden" style={{height: '100%', width: '300px',  backgroundColor: 'rgb(24,24,27)' }}>
       <div className='text-center p-2 font-bold'>
            <h3>Order book</h3>
       </div>
        <Separator />
        <div className="text-center text-gray-200 font-semibold py-2 sticky top-0 grid grid-cols-3">
            <span>Price</span>
            <span>Size(USD)</span>
            <span>Cumulative</span>
        </div>
        <Separator />
        <div className="flex-grow overflow-y-auto overflow-x-hidden">
            <div className="grid grid-cols-3 text-center">
            {data.bids.slice(0, numberOfRows).map((order : any, index : any) => (
                <div key={index} className="contents">
                <div className="px-4 py-1 text-green-400 hover:bg-slate-800">{order.price}</div>
                <div className="px-4 py-1 text-green-400 hover:bg-slate-800 ">{order.size}</div>
                <div className="px-4 py-1 text-green-400 hover:bg-slate-800  relative">
                    <div className="absolute inset-0 bg-green-600" style={{ width: calculateGradientWidth(order.size, order.cumulative) }}></div>
                    <div className="relative">{order.cumulative}</div>
                </div>
                </div>
            ))}
            </div>
            <div className='grid text-center'>
                <h6 className='text-green-600 py-2 ' style={{backgroundColor: 'rgb(24, 24, 30)'}}>$37,222.47</h6>
            </div>
            <div className="grid grid-cols-3 text-center">
            {data.asks.slice(0, numberOfRows).map((order : any, index : any) => (
                <div key={index} className="contents">
                <div className="px-4 py-1 text-red-400 hover:bg-slate-800">{order.price}</div>
                <div className="px-4 py-1 text-red-400 hover:bg-slate-800">{order.size}</div>
                <div className="px-4 py-1 text-red-400 hover:bg-slate-800 relative">
                    <div className="absolute inset-0 bg-red-500" style={{ width: calculateGradientWidth(order.size, order.cumulative) }}></div>
                    <div className="relative">{order.cumulative}</div>
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    );
  };
  
export default OrderBook;
