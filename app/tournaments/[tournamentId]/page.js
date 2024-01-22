"use client";
import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/app/ui/navbar";
import Chart from "@/app/ui/Tournaments/Chart";
import StatsCard from "@/app/ui/Tournaments/TournamentOverview/StatsCard";
import RankingTable from "@/app/ui/Tournaments/RankingTable";
import competitorsData from "@/app/data/competitorsData";
import cardData from "@/app/data/cardData";
export default function TournamentOverviewPage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.replace("/tournaments");
  };
  return (
    <>
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 mb-4">
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
        <RankingTable className="mb-4" competitors={competitorsData} />
        <div className="flex justify-end">
          <button
            type="submit"
            variant="contained"
            onClick={handleGoBack}
            className="bg-secundary-black text-white font-montserrat font-semibold text-xs mt-5 px-12 py-2.5 rounded-lg tracking-wide"
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
}
