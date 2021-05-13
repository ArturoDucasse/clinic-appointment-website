import React, { useState, useEffect } from "react";
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
  const [
    {
      target: { value: vorname },
    },
    setvorname,
  ] = useState({ target: { value: "" } });

  const [
    {
      target: { value: nachname },
    },
    setnachname,
  ] = useState({ target: { value: "" } });
  const [
    {
      target: { value: emailAdresse },
    },
    setemailAdresse,
  ] = useState({ target: { value: "" } });
  const [
    {
      target: { value: geburtsdatum },
    },
    setgeburtsdatum,
  ] = useState({ target: { value: "" } });
  const [
    {
      target: { value: krankenkasse },
    },
    setkrankenkasse,
  ] = useState({ target: { value: "" } });
  const [
    {
      target: { value: krankenkasseNummer },
    },
    setkrankenkasseNummer,
  ] = useState({ target: { value: "" } });
  const [
    {
      target: { value: strabe_Hausnummer },
    },
    setstrabe_Hausnummer,
  ] = useState({ target: { value: "" } });
  const [
    {
      target: { value: postleitzahl },
    },
    setpostleitzahl,
  ] = useState({ target: { value: "" } });

  const [data, setdata] = useState({});

  const submitInfo = async () => {
    setdata({
      vorname,
      nachname,
      emailAdresse,
      geburtsdatum,
      krankenkasse,
      krankenkasseNummer,
      strabe_Hausnummer,
      postleitzahl,
    });
  };

  useEffect(() => {
    //Todo: Submit data to database here
    console.log(data);
  }, [data]);

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
              <TextField
                id="input-with-icon-grid"
                label="Vorname"
                onChange={setvorname}
              />
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
              <TextField
                id="input-with-icon-grid"
                label="Nachname"
                onChange={setnachname}
              />
            </Grid>
          </Grid>
        </div>
        <div style={{ display: "flex" }}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <Email />
            </Grid>
            <Grid item>
              <TextField
                id="input-with-icon-grid"
                label="Email Adresse"
                onChange={setemailAdresse}
              />
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
              <TextField
                id="input-with-icon-grid"
                label="Geburtsdatum"
                onChange={setgeburtsdatum}
              />
            </Grid>
          </Grid>
        </div>

        <div style={{ display: "flex" }}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <LocalHospital />
            </Grid>
            <Grid item>
              <TextField
                id="input-with-icon-grid"
                label="Krankenkasse"
                onChange={setkrankenkasse}
              />
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
                onChange={setkrankenkasseNummer}
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
            <TextField
              id="input-with-icon-grid"
              label="Strabe + Hausnummer"
              onChange={setstrabe_Hausnummer}
            />
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
            <TextField
              id="input-with-icon-grid"
              label="Postleitzahl"
              onChange={setpostleitzahl}
            />
          </Grid>
        </Grid>
      </div>
      <div className="legal_button">
        <Button positive size="large" onClick={submitInfo}>
          Termin Buchen
        </Button>
      </div>
    </div>
  );
}
