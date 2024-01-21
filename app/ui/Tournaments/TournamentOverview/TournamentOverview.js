"use client";
import { Card, Title, Flex, Text } from "@tremor/react";
import StatsCard from "./StatsCard";
import NavBar from "../../navbar";
import cardData from "@/app/data/cardData";
import Chart from "../Chart";
import RankingTable from "../RankingTable";

import competitorsData from "../../../data/competitorsData";
const TournamentOverview = ({}) => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Stats Card */}
        <NavBar></NavBar>
        <div className="flex flex-wrap items-center justify-between mt-8 max-w-7xl gap-3 md:gap-4 lg:gap-6">
          {cardData.map((card, index) => (
            <StatsCard
              key={index}
              title={card.title}
              value={card.value}
              svgCode={card.svgCode}
            />
          ))}
        </div>
        {/* Equity chart */}
        <Chart />
        {/* Ranking Table */}
        <RankingTable competitors={competitorsData} />
      </div>
    </>
  );
};

export default TournamentOverview;
