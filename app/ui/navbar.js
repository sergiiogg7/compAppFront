import { Card, Title, Flex, Text } from "@tremor/react";
import DropDownMenu from "./DropDownMenu";

export default function NavBar() {
  return (
    <>
      <div className="flex h-16 justify-between">
        <div className="flex">
          <div className="flex flex-shrink-0 items-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="text-gray-100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="100%" height="100%" rx="16" fill="currentColor" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="black"
              />
            </svg>
          </div>
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
        </div>
        <div className="ml-6 flex items-center">
          <DropDownMenu />
        </div>
      </div>
    </>
  );
}
