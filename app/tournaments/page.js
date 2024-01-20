"use client";
import AuthContext from "../contexts/AuthContext";
import HorizontalTabs from "../ui/TournamentsList/HorizontalTabs";
import TournamentCard from "../ui/TournamentsList/TournamentCard";
import React, { useEffect, useState, useContext } from "react";

export default function Home() {
  const { login, loading, user, isAuthenticated } = useContext(AuthContext);
  const tabs = ["Upcoming", "Ongoing", "End", "Participated"];
  useEffect(() => {
    console.log(isAuthenticated);
    console.log(user);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center bg-basicwhite w-full h-full">
        <div className="flex flex-row mt-3 w-full bg-basicwhite">
          <div>
            <HorizontalTabs
              backgroundColor="#FFFFFF"
              highlightColor="#246EDE"
              tabs={tabs}
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              className="h-8 w-8 rounded-full mr-2"
              src="https://ui-avatars.com/api?name=Sergio+Garcia"
              alt="Sergio Garcia"
            />
            <p className="text-base font-normal">Sergio Garcia Gasco</p>
          </div>
        </div>
        <div className="bg-basicwhite mt-8 ml-8 flex flex-row flex-wrap">
          <TournamentCard
            name="Alpha Tournament"
            startDate="2024-01-25"
            endDate="2024-02-05"
            timeRemaining="10 days"
            totalCompetitors="100"
            prizes="1st Prize: $1000"
          />
          <TournamentCard
            name="Alpha Tournament"
            startDate="2024-01-25"
            endDate="2024-02-05"
            timeRemaining="10 days"
            totalCompetitors="100"
            prizes="1st Prize: $1000"
          />
          <TournamentCard
            name="Alpha Tournament"
            startDate="2024-01-25"
            endDate="2024-02-05"
            timeRemaining="10 days"
            totalCompetitors="100"
            prizes="1st Prize: $1000"
          />
          <TournamentCard
            name="Alpha Tournament"
            startDate="2024-01-25"
            endDate="2024-02-05"
            timeRemaining="10 days"
            totalCompetitors="100"
            prizes="1st Prize: $1000"
          />
          <TournamentCard
            name="Alpha Tournament"
            startDate="2024-01-25"
            endDate="2024-02-05"
            timeRemaining="10 days"
            totalCompetitors="100"
            prizes="1st Prize: $1000"
          />
          <TournamentCard
            name="Alpha Tournament"
            startDate="2024-01-25"
            endDate="2024-02-05"
            timeRemaining="10 days"
            totalCompetitors="100"
            prizes="1st Prize: $1000"
          />
        </div>
      </div>
    </>
  );
}
