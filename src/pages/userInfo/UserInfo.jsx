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
import createUser from "../../utils/createUser";

export default function UserInfo() {
  const [
    {
      target: { value: username },
    },
    setFirstname,
  ] = useState({ target: { value: "" } });

  const [
    {
      target: { value: lastname },
    },
    setlastname,
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
      target: { value: zipcode },
    },
    setzipcode,
  ] = useState({ target: { value: "" } });

  const [data, setdata] = useState({});

  const submitInfo = () => {
    setdata({
      username,
      lastname,
      email,
      birthday,
      healthInsurance,
      healthInsuranceNumber,
      street,
      zipcode,
    });
  };

  useEffect(() => {
    if (Object.keys(data).length !== 0) createUser(data);
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
                id="input-firstName"
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
                id="input-lastname"
                label="Nachname"
                onChange={setlastname}
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
                id="input-Email"
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
                id="input-birthday"
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
                id="input-healthInsurance"
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
                id="input-healthInsuranceNumber"
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
              id="input-street"
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
              id="input-zipcode"
              label="Postleitzahl"
              onChange={setzipcode}
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
