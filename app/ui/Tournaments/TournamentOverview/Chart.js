"use client";

import { Card, AreaChart, Title, Text } from "@tremor/react";

const data = [
  {
    Month: "Jan 01",
    Equity: 1200,
  },
  {
    Month: "Jan 02",
    Equity: 1500,
  },
  {
    Month: "Jan 03",
    Equity: 3000,
  },
  {
    Month: "Jan 04",
    Equity: 2500,
  },
  {
    Month: "Jan 05",
    Equity: 3780,
  },
  {
    Month: "Jan 06",
    Equity: 4500,
  },
  {
    Month: "Jan 07",
    Equity: 4000,
  },
  {
    Month: "Jan 08",
    Equity: 7000,
  },
];

export default function Chart() {
  return (
    <Card className="mt-8">
      <Title>Performance</Title>
      <Text>Comparison between Sales and Profit.</Text>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        categories={["Equity"]}
        index="Day"
        colors={["blue"]}
        valueFormatter={(number) =>
          `$ ${Intl.NumberFormat("us").format(number).toString()}`
        }
        yAxisWidth={60}
      />
    </Card>
  );
}
