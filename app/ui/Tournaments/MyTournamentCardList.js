import React from "react";
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
  Badge,
  Text,
  Subtitle,
  TextInput,
  Textarea,
  DatePicker,
  Button,
} from "@tremor/react";
import MyTournamentCard from "./MyTournamentCard.js";
import tournaments from "@/app/data/myTournamentsCardData";

export default function MyTournamentCardList() {
  return (
    <Card className="flex flex-col space-y-4 w-full lg:w-2/3 h-full">
      {tournaments.map((room, index) => (
        <MyTournamentCard key={index} room={room} />
      ))}
    </Card>
  );
}
