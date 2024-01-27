import * as React from "react";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function HorizontalMenu() {
  return (
    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
      <a className="border-primary text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
        Upcoming
      </a>
      <a className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
        Ongoing
      </a>
      <a className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
        End
      </a>
      <a className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
        Participated
      </a>
    </div>
  );
}
