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
      target: { value: firstname },
    },
    setFirstname,
  ] = useState({ target: { value: "" } });

  const [
    {
      target: { value: lastName },
    },
    setLastname,
  ] = useState({ target: { value: "" } });
  const [
    {
      target: { value: email },
    },
    setEmail,
  ] = useState({ target: { value: "" } });
  const [
    {
      target: { value: birthday },
    },
    setBirthday,
  ] = useState({ target: { value: "" } });
  const [
    {
      target: { value: healthInsurance },
    },
    setHealthInsurance,
  ] = useState({ target: { value: "" } });
  const [
    {
      target: { value: healthInsuranceNumber },
    },
    setHealthInsuranceNumber,
  ] = useState({ target: { value: "" } });
  const [
    {
      target: { value: street },
    },
    setStreet,
  ] = useState({ target: { value: "" } });
  const [
    {
      target: { value: postCode },
    },
    setPostCode,
  ] = useState({ target: { value: "" } });

  const [data, setdata] = useState({});

  const submitInfo = async () => {
    setdata({
      firstname,
      lastName,
      email,
      birthday,
      healthInsurance,
      healthInsuranceNumber,
      street,
      postCode,
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
                onChange={setFirstname}
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
                onChange={setLastname}
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
                onChange={setEmail}
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
                onChange={setBirthday}
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
                onChange={setHealthInsurance}
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
                onChange={setHealthInsuranceNumber}
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
              onChange={setStreet}
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
              onChange={setPostCode}
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
