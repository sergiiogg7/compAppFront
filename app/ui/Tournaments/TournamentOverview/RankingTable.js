import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Card,
} from "@tremor/react";
import Search from "../Search";

export default function RankingTable({ competitors }) {
  return (
    <Card className="mt-8">
      <Title>Ranking</Title>
      <Text>Comparison between the participants of the tournament.</Text>

      <Search />

      <Table className="mt-4">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Number Account</TableHeaderCell>
            <TableHeaderCell>Starting Balance</TableHeaderCell>
            <TableHeaderCell>Profit</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {competitors.map((competitor) => (
            <TableRow key={competitor.id}>
              <TableCell>{competitor.name}</TableCell>
              <TableCell>
                <Text>{competitor.numberAccount}</Text>
              </TableCell>
              <TableCell>
                <Text>{competitor.startingBalance}</Text>
              </TableCell>
              <TableCell>
                <Text>{competitor.profit}</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
