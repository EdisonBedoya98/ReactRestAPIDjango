import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    margin: theme.spacing(2),
  },
  placeholder: {
    height: 40,
  },
}));

export default function DelayingAppearance() {
  const classes = useStyles();
  const [query, setQuery] = React.useState("idle");
  const timerRef = React.useRef();

  React.useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    []
  );

  const handleClickQuery = () => {
    clearTimeout(timerRef.current);

    if (query !== "idle") {
      setQuery("idle");
      return;
    }

    setQuery("progress");
    timerRef.current = setTimeout(() => {
      setQuery("success");
    }, 2000);
  };

  return (
    <div className={classes.root}>
      <div className={classes.placeholder}>
        {" "}
        {query === "success" ? (
          <Typography> Texto analizado! </Typography>
        ) : (
          <Fade
            in={query === "progress"}
            style={{
              transitionDelay: query === "progress" ? "800ms" : "0ms",
            }}
            unmountOnExit
          >
            <CircularProgress disableShrink="true"/>
          </Fade>
        )}{" "}
      </div>
      <Button onClick={handleClickQuery} className={classes.button}>
        <div className="p-3 mb-2 bg-primary text-white">
          {" "}
          {query !== "idle" ? "Analizar Nuevo texto" : "Analizar"}{" "}
        </div>{" "}
      </Button>{" "}
    </div>
  );
}
