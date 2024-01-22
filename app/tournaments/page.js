"use client";
import React, { useEffect, useState, useContext } from "react";

import AuthContext from "../contexts/AuthContext";
import NavBar from "../ui/navbar";
import TournamentCard from "../ui/Tournaments/TournamentsList/TournamentCard";
import Search from "../ui/Tournaments/Search";

export default function TournamentList() {
  const { login, loading, user, isAuthenticated } = useContext(AuthContext);

  const tabs = ["Upcoming", "Ongoing", "End", "Participated"];

  useEffect(() => {
    console.log(isAuthenticated);
    console.log(user);
  }, []);

  const createTournament = () => {};

  return (
    <>
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <NavBar></NavBar>
        <div className="flex justify-between">
          <Search />
          <button
            onClick={createTournament}
            className="bg-primary text-white font-montserrat font-semibold text-xs mt-5 px-8 py-2.5 mr-3 rounded-lg tracking-wide"
          >
            Create
          </button>
        </div>
        <div className="flex flex-wrap mt-4 md:mt-8 gap-3 md:gap-4 lg:gap-6">
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
