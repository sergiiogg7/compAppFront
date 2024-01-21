import { Title, Card, Flex, Text, Subtitle } from "@tremor/react";
import React, { useState } from "react";

const StatsCard = ({ title, svgCode, value }) => {
  return (
    <>
      <Card className="flex flex-col min-w-52 max-w-52">
        <Flex className="flex items-center justify-start space-x-1 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
            dangerouslySetInnerHTML={{ __html: svgCode }}
          />
          <Title>{title}</Title>
        </Flex>
        <Subtitle className="text-center">{value}</Subtitle>
      </Card>
    </>
  );
};

export default StatsCard;
