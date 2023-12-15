

// Generate mock data
export const data = [
    { name: 'BTC', value: 34.05 },
    { name: 'ETH', value: 54.98 },
    { name: 'ADA', value: 23.18 },
    { name: 'DOT', value: 45.98 },
    { name: 'BONK', value: 36.18 },
    { name: 'COOL', value: 47.98 },
    { name: 'SOL', value: 38.18 },
    { name: 'AVAX', value: 7.98 },
    { name: 'INJ', value: 3.18 },
    { name: 'MUBI', value: 7.98 },
    { name: 'LINK', value: 3.18 },
    { name: 'XRP', value: 7.98 },
    { name: 'UNI', value: 3.18 },
    { name: 'DOGE', value: 7.98 },
    { name: 'WIF', value: 3.18 },
   
];

export const data24 = [
    { name: 'BTC', value: 24.05 },
    { name: 'ETH', value: 24.98 },
    { name: 'ADA', value: 23.18 },
    { name: 'DOT', value: 25.98 },
    { name: 'BONK', value: 36.18 },
    { name: 'COOL', value: 47.98 },
    { name: 'SOL', value: 38.18 },
    { name: 'AVAX', value: 7.98 },
    { name: 'INJ', value: 3.18 },
    { name: 'MUBI', value: 17.98 },
    { name: 'LINK', value: 3.18 },
    { name: 'XRP', value: 37.98 },
    { name: 'UNI', value: 3.18 },
    { name: 'DOGE', value: 57.98 },
    { name: 'WIF', value: 3.18 },
   
];

function calculateFontSize(value : any, maxValue : any, minFontSize : any, maxFontSize : any) {
    // Normalize the value between 0 and 1
    const normalizedValue = value / maxValue;
    // Calculate font size based on value
    const fontSize = normalizedValue * (maxFontSize - minFontSize) + minFontSize;
    // Ensure the font size is within the bounds
    return Math.max(minFontSize, Math.min(maxFontSize, fontSize));
  }

function getColorByValue(value : any, threshold : any) {
    return value > threshold ? '#16a34a' : '#dc2626';
}

export const options = {
    tooltip: {
      formatter: function (info : any) {
        const value = info.value;
        const name = info.name;
        return `${name}: $${value.toFixed(2)}M`;
      }
    },
    series: [{
        name: 'Liquidation',
        type: 'treemap',
        roam: false,
        nodeClick: false,
        breadcrumb: {
          show: false
        },
        label: {
          normal: {
            show: true,
            position: 'inside',
            formatter: function (params : any) {
              const valueInMillions = `$${(params.value).toFixed(2)}M`;
              // Use the calculated font size for each label
              const fontSize = calculateFontSize(params.value, 200, 10, 20);
              return `{b|${params.name}}\n{c|${valueInMillions}}`;
            },
            rich: {
              b: {
                align: 'center',
                verticalAlign: 'middle',
                // lineHeight: 30,
              },
              c: {
                align: 'center',
                verticalAlign: 'middle',
              }
            }
          }
        },
        itemStyle: {
          normal: {
            borderColor: '#fff',
            borderWidth: 1,
            gapWidth: 1
          }
        },
        size: ['100%', '100%'], 
        leafDepth: 1, 
        data: data.map(item => {
          // Set font size and color for each item
          const fontSize = calculateFontSize(item.value, 200, 10, 20);
          const color = getColorByValue(item.value, 30);
          return {
            name: item.name,
            value: item.value,
            itemStyle: {
              color: color, // Set color based on the value
              borderColor: '#fff',
              borderWidth: 1,
            },
            label: {
              normal: {
                rich: {
                  b: {
                    fontSize: fontSize,
                    color: '#fff', // Set text color for readability
                  },
                  c: {
                    fontSize: fontSize,
                    color: '#fff',
                  }
                }
              }
            }
          };
        })
      }],
        grid: {
            show: false, // This line is not usually needed for treemap, but added just in case
            containLabel: false,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }
  };
  
  export const options24H = {
    tooltip: {
      formatter: function (info : any) {
        const value = info.value;
        const name = info.name;
        return `${name}: $${value.toFixed(2)}M`;
      }
    },
    series: [{
        name: 'Liquidation',
        type: 'treemap',
        roam: false,
        nodeClick: false,
        breadcrumb: {
          show: false
        },
        label: {
          normal: {
            show: true,
            position: 'inside',
            formatter: function (params : any) {
              const valueInMillions = `$${(params.value).toFixed(2)}M`;
              // Use the calculated font size for each label
              const fontSize = calculateFontSize(params.value, 200, 10, 20);
              return `{b|${params.name}}\n{c|${valueInMillions}}`;
            },
            rich: {
              b: {
                align: 'center',
                verticalAlign: 'middle',
                // lineHeight: 30,
              },
              c: {
                align: 'center',
                verticalAlign: 'middle',
              }
            }
          }
        },
        itemStyle: {
          normal: {
            borderColor: '#fff',
            borderWidth: 1,
            gapWidth: 1
          }
        },
        data: data24.map(item => {
          // Set font size and color for each item
          const fontSize = calculateFontSize(item.value, 200, 10, 20);
          const color = getColorByValue(item.value, 30);
          return {
            name: item.name,
            value: item.value,
            itemStyle: {
              color: color, // Set color based on the value
              borderColor: '#fff',
              borderWidth: 1,
            },
            label: {
              normal: {
                rich: {
                  b: {
                    fontSize: fontSize,
                    color: '#fff', // Set text color for readability
                  },
                  c: {
                    fontSize: fontSize,
                    color: '#fff',
                  }
                }
              }
            }
          };
        })
      }]
  };
  