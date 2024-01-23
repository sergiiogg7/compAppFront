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
  Text,
  Subtitle,
  TextInput,
  Textarea,
  DatePicker,
  Button,
} from "@tremor/react";
import RequestAccess from "./RequestAccess";
import requestAccessData from "@/app/data/requestAccessData";
export default function RequestAccessList() {
  //   IDEA PUEDE QUEDAR MEJOR CON TABLA
  return (
    <>
      <Card className="flex flex-col lg:w-1/3 w-full space-y-4">
        {requestAccessData.map((requestData, index) => (
          <RequestAccess requestData={requestData} key={index}></RequestAccess>
        ))}
      </Card>
    </>
  );
}
