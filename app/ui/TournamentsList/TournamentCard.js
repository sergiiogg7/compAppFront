import { Button } from "@mui/material";
import styles from "./TournamentCard.module.css";

const TournamentCard = ({
  name,
  startDate,
  endDate,
  timeRemaining,
  totalCompetitors,
  prizes,
}) => {
  return (
    <div className="m-4 w-1/4 p-5 rounded-lg bg-basicblack">
      <h1 className="my-4">{name}</h1>
      <div className="rounded-lg p-3 mb-4 ">
        <div className="mb-2">
          {startDate} - {endDate}{" "}
        </div>
        <div className="mb-2">Tiempo restante: {timeRemaining}</div>
        <div className="mb-2">Total participantes: {totalCompetitors}</div>

        <div className="mt-4">
          <strong>Top 3 winners get:</strong>
          <p>{prizes}</p>
          <p>{prizes}</p>
          <p>{prizes}</p>
        </div>
      </div>
      <button className="w-full h-10 rounded-lg">Inscribirse</button>
    </div>
  );
};

export default TournamentCard;
