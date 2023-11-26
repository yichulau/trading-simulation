import React from 'react';
import { cn } from "@/lib/utils"

import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

function DemoContainer({
    className,
    ...props
  }: React.HTMLAttributes<HTMLDivElement>) {
    return (
      <div
        className={cn(
          "flex items-center justify-center w-full text-xs rounded-lg",
          className
        )}
        {...props}
      />
    )
  }

const MarketInfo = () => {
    const data = {
        indexPrice: '$37,222.47',
        markPrice: '$37,231.61',
        change: '-1.45%',
        fundingRate: '+0.009%',
        countdown: '42m 54s',
        volumeBTC: '61.806',
        volumeUSD: '$2,318,849.59',
        buySellRatio: '56% Buy / 44% Sell'
      };

  return (
    <>
        <DemoContainer>
        <div style={{ backgroundColor: 'rgb(24,24,27)' }} className="p-4 flex items-center w-full justify-between text-xs text-white rounded-lg">
            <div className="flex flex-col items-center">
                <span className="text-green-400">Index Price</span>
                <span>$37,222.47</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-green-400">Mark Price</span>
                <span>$37,231.61</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-red-500">24h Change</span>
                <span>-1.45% (-$546.6)</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-green-400">1h Funding Rate</span>
                <span>+0.009%</span>
            </div>
            <div className="flex flex-col items-center">
                <span>Funding Rate Countdown</span>
                <span>42m 54s</span>
            </div>
            <div className="flex flex-col items-center">
                <span>24h Volume (BTC)</span>
                <span>61.806</span>
            </div>
            <div className="flex flex-col items-center">
                <span>24h Volume</span>
                <span>$2,318,849.59</span>
            </div>
            {/* <div className="flex items-center">
                <span className="text-green-400 mr-2">56% Buy</span>
                <div className="w-20 bg-green-500 h-2 rounded-full mr-1"></div>
                <div className="w-16 bg-red-500 h-2 rounded-full mr-2"></div>
                <span className="text-red-500">44% Sell</span>
            </div> */}
        </div>
    



        </DemoContainer>

    </>
  );
};

export default MarketInfo;


