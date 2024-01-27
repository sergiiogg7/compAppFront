"use client";
import React from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  DatePicker,
  Title,
  TextInput,
  Text,
} from "@tremor/react";

export default function UpdateProfitDialog() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <button
        className="bg-primary text-white font-montserrat font-semibold text-xs px-6 py-2.5 rounded-lg tracking-wide"
        onClick={() => setIsOpen(true)}
      >
        Update Profit
      </button>
      <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
        <DialogPanel>
          <Title className="mb-3">Update profit</Title>
          Update the daily profit of the days you have trade. This is neccessary
          to create the statistics and ranking table.
          <form className="flex mt-3">
            <div>
              <Text>Date</Text>
              <TextInput placeholder="DD/MM/YYYY" />
            </div>
            <div className="ml-3 w-full">
              <Text>Profit</Text>
              <TextInput placeholder="" />
            </div>
          </form>
          <div className="mt-8 flex justify-end">
            <Button
              className="text-primary"
              variant="light"
              onClick={() => setIsOpen(false)}
            >
              Update
            </Button>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
