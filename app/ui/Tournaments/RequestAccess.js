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

export default function RequestAccess({ requestData }) {
  return (
    <>
      <Card className="flex flex-row justify-between items-center p-4">
        <Text>
          Access request from <strong>{requestData.userName}</strong> to
          <strong> {requestData.roomName} </strong> room
        </Text>
        <div className="flex flex-row ml-2 justify-center items-center space-x-1">
          <button className="bg-success-light text-white px-2 py-1.5 rounded-lg tracking-wide">
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
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          </button>
          <button className="bg-error-light text-white px-2 py-1.5 rounded-lg tracking-wide">
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </Card>
    </>
  );
}
