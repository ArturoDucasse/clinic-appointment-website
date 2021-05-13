import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import {
  AccountCircle,
  Email,
  Cake,
  LocalHospital,
  Healing,
  LocationOn,
  MarkunreadMailbox,
} from "@material-ui/icons";
import { Button } from "semantic-ui-react";

import "./style.css";

export default function UserInfo() {
  //Todo: Send this info to database
  const [vorname, setvorname] = useState("");
  const [nachname, setnachname] = useState("");
  const [emailAdresse, setemailAdresse] = useState("");
  const [geburtsdatum, setgeburtsdatum] = useState("");
  const [krankenkasse, setkrankenkasse] = useState("");
  const [krankenkasseNummer, setkrankenkasseNummer] = useState("");
  const [strabe_Hausnummer, setstrabe_Hausnummer] = useState("");
  const [postleitzahl, setpostleitzahl] = useState("");

  return (
    <div className="container">
      <h2>Daten zur Person</h2>
      <p>Bitte fullen Sie ALLE unten angefuhrten Felder aus!</p>
      <div className="User_info_container">
        <div style={{ display: "flex" }}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="Vorname" />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            alignItems="flex-end"
            style={{ marginLeft: "110px" }}
          >
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="Nachname" />
            </Grid>
          </Grid>
        </div>
        <div style={{ display: "flex" }}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <Email />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="Email Adresse" />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            alignItems="flex-end"
            style={{ marginLeft: "110px" }}
          >
            <Grid item>
              <Cake />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="Geburtsdatum" />
            </Grid>
          </Grid>
        </div>

        <div style={{ display: "flex" }}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <LocalHospital />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="Krankenkasse" />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            alignItems="flex-end"
            style={{ marginLeft: "110px" }}
          >
            <Grid item>
              <Healing />
            </Grid>
            <Grid item>
              <TextField
                id="input-with-icon-grid"
                label="Krankenkasse Nummer"
              />
            </Grid>
          </Grid>
        </div>
      </div>
      <h2>Adressdaten</h2>
      <div />
      <div style={{ display: "flex" }}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <LocationOn />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Strabe + Hausnummer" />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          alignItems="flex-end"
          style={{ marginLeft: "50px" }}
        >
          <Grid item>
            <MarkunreadMailbox />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Postleitzahl" />
          </Grid>
        </Grid>
      </div>
      <div className="legal_button">
        <Button positive size="large">
          Termin Buchen
        </Button>
      </div>
    </div>
  );
}
