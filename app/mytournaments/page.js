"use client";
import React, { useState } from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableHeaderCell,
  TableCell,
  TableBody,
  Title,
  Card,
  Flex,
  Text,
  Subtitle,
  TextInput,
  Textarea,
  DatePicker,
  Button,
} from "@tremor/react";
import { useRouter } from "next/navigation";
import NavBar from "../ui/navbar";
import MyTournamentCard from "../ui/Tournaments/MyTournamentCard";
import RequestAccessList from "../ui/Tournaments/RequestAccessList";
import MyTournamentCardList from "../ui/Tournaments/MyTournamentCardList";

export default function MyTournamentsPage() {
  return (
    <>
      <div className="mx-auto max-w-8xl min-h-full px-4 sm:px-6 lg:px-8">
        <NavBar></NavBar>
        <Title className="mt-6 mb-3">My Tournaments and Room Requests</Title>
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-6 lg:space-y-0">
          <MyTournamentCardList />
          <RequestAccessList />
        </div>
      </div>
    </>
  );
}
