import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

interface CryptoData {
  time: number;
  price: number;
}

const CryptoChart = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("bitcoin");
  const [chartData, setChartData] = useState<CryptoData[]>([]);
  const [yDomain, setYDomain] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${selectedCrypto}/market_chart`, {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        });
        const data: CryptoData[] = response.data.prices.map((priceData: any) => {
          return { time: priceData[0], price: priceData[1] };
        });
        setChartData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedCrypto]);

  useEffect(() => {
    const calculateYDomain = () => {
      const prices = chartData.map(data => data.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      setYDomain([Math.floor(minPrice / 100) * 100, Math.ceil(maxPrice / 100) * 100]);
    };

    calculateYDomain();
  }, [chartData]);

  const handleCryptoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCrypto(event.target.value);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const formatTime = (time: number) => {
    const date = new Date(time);
    return moment(date).format("LT");
  };

  const calculateChangePercentage = () => {
    if (chartData.length >= 2) {
      const firstPrice = chartData[0].price;
      const lastPrice = chartData[chartData.length - 1].price;
      const change = ((lastPrice - firstPrice) / firstPrice) * 100;
      return change.toFixed(2);
    }
    return "N/A";
  };

  return (
    <div className="container mx-auto pt-32">
      <div className="flex justify-between my-4">
        <select
          className="p-2 border-none text-white font-bold bg-transparent rounded"
          value={selectedCrypto}
          onChange={handleCryptoChange}
        >
          <option value="bitcoin">Bitcoin (BTC)</option>
          <option value="ethereum">Ethereum (ETH)</option>
          <option value="tether">TerraUSD (UST)</option>
        </select>
        <div>
          <span className="text-xl font-medium">{formatPrice(chartData[0]?.price)}</span>{" "}
          <span className="bg-[#38BD6B] p-2 rounded ml-4">{calculateChangePercentage()}%</span>
        </div>
      </div>
      <div className="mx-auto">
        <AreaChart width={1200} height={400} data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="#94949424" strokeWidth={2} horizontal={true} />
          <XAxis dataKey="time" hide interval={10} />
          <YAxis domain={yDomain} />
          <Tooltip
            contentStyle={{ backgroundColor: "#000116", border: "1.5px solid #636363", borderRadius: "5px" }}
            itemStyle={{ color: "#636363" }}
            labelStyle={{ color: "#000" }}
            formatter={(value: number, name: string, props: any) => [value, formatTime(props.payload.time)]}
          />

          <Legend />
          <Area type="monotone" dataKey="price" stroke="#FA7E0C" fill="#FA7E0C3D" />
        </AreaChart>
      </div>
    </div>
  );
};

export default CryptoChart;
