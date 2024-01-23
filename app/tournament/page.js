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

export default function CreateTournamentPage() {
  const data = [
    {
      id: "1",
      position: "1",
      trophy: "100K Account + 10K Cash",
    },
    {
      id: "2",
      position: "2",
      trophy: "100K Account + 1K Cash",
    },
    {
      id: "3",
      position: "3",
      trophy: "100K Account",
    },
  ];

  const router = useRouter();

  const goBack = () => {
    router.replace("/tournaments");
  };
  const createTournament = () => {};

  return (
    <>
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <NavBar></NavBar>
        <Title className="mt-6 mb-3">Create Tournament</Title>
        <Card className="flex flex-col">
          <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-6 lg:space-y-0">
            {/* LEFT SIDE */}
            <div className="flex flex-col w-full lg:w-2/3 space-y-4">
              <div className="flex flex-row space-x-6">
                <div className="flex flex-col w-full">
                  <Text className="mb-2 ml-1">Name</Text>
                  <TextInput placeholder="" />
                </div>
                <div className="flex flex-col w-full">
                  <Text className="mb-2 ml-1">End Date</Text>
                  <DatePicker />
                </div>
              </div>
              <div>
                <Text className="mb-2 ml-1">Description</Text>
                <Textarea className="min-h-48" placeholder=""></Textarea>
              </div>
            </div>
            {/* RIGHT SIDE */}
            <div className="w-full lg:w-1/3 space-y-3">
              <div className="flex flex-row">
                <div className="w-full">
                  <Text className="mb-2 ml-1">Enter trophy</Text>
                  <div className="w-full flex flex-row space-x-3">
                    <TextInput placeholder=""></TextInput>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <Table className="">
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>Position</TableHeaderCell>
                    <TableHeaderCell>Trophy</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.position}</TableCell>
                      <TableCell>
                        <Text>{item.trophy}</Text>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </Card>

        <div className="flex justify-end space-x-3">
          <button
            onClick={goBack}
            className="bg-secundary-black text-white font-montserrat font-semibold text-xs mt-5 px-6 py-2.5 rounded-lg tracking-wide"
          >
            Back
          </button>
          <button
            onClick={createTournament}
            className="bg-primary text-white font-montserrat font-semibold text-xs mt-5 px-8 py-2.5 mr-3 rounded-lg tracking-wide"
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
}
