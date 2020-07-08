import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./card.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading..";
  }
  let latestDateUpdate = new Date(lastUpdate).toDateString();
  const cardData = [
    {
      title: "Infected",
      confirmedValues: confirmed.value,
      date: lastUpdate,
      description: "Number of active cases of COVID-19",
      status: "primary",
    },
    {
      title: "Recovered",
      confirmedValues: recovered.value,
      date: lastUpdate,
      description: "Number of recoveries cases from COVID-19",
      status: "succes",
    },
    {
      title: "Deaths",
      confirmedValues: deaths.value,
      date: lastUpdate,
      description: "Number of deaths caused by COVID-19",
      status: "danger",
    },
  ];

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {cardData.map((item, i) => (
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={item.confirmedValues}
                  duration={1.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">{item.date}</Typography>
              <Typography variant="body2">{item.description}</Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
