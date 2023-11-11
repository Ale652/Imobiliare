import { Place } from "@mui/icons-material";
import { useState } from "react";
import { IconButton, InputAdornment, MenuItem, TextField } from "@mui/material";
import {
  ActionsContainer,
  Divider,
  MainContainer,
  Button,
  ResidenceSelect,
  ContractSelect,
  DistanceSelect,
  InnerContainer,
  LocationInput,
  HyphenWrapper,
  Pre,
  Sup,
  EuroSymbolIcon,
  Input,
} from "./styles";

function SearchActions() {
  const [residence, setResidence] = useState("Apartamente");
  const [contract, setContract] = useState("De vanzare");
  const [location, setLocation] = useState("");
  const [distance, setDistance] = useState("5 km");

  const handleChangeResidence = (event) => {
    console.log(event.target.value);
    setResidence(event.target.value);
  };

  const handleChangeContract = (event) => {
    console.log(event.target.value);
    setContract(event.target.value);
  };

  const handleChangeLocation = (event) => {
    console.log(event.target.value);
    setLocation(event.target.value);
  };

  const handleChangeDistance = (event) => {
    console.log(event.target.value);
    setDistance(event.target.value);
  };

  return (
    <MainContainer>
      <ActionsContainer>
        <ResidenceSelect
          size="small"
          value={residence}
          onChange={handleChangeResidence}
        >
          <MenuItem value={"Apartamente"}>Apartamente</MenuItem>
          <MenuItem value={"Garsoniere"}>Garsoniere</MenuItem>
          <MenuItem value={"Case"}>Case</MenuItem>
        </ResidenceSelect>
        <ContractSelect
          size="small"
          value={contract}
          onChange={handleChangeContract}
        >
          <MenuItem value={"De vanzare"}>De vanzare</MenuItem>
          <MenuItem value={"De inchiriat"}>De inchiriat</MenuItem>
        </ContractSelect>
        <InnerContainer>
          <LocationInput
            size="small"
            value={location}
            onChange={handleChangeLocation}
            placeholder="Introdu locatia"
            type="text"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Place />
                </InputAdornment>
              ),
            }}
          />
          <DistanceSelect
            size="small"
            value={distance}
            onChange={handleChangeDistance}
          >
            <MenuItem value={"5 km"}>5 km</MenuItem>
            <MenuItem value={"10 km"}>10 km</MenuItem>
            <MenuItem value={"25 km"}>25 km</MenuItem>
            <MenuItem value={"50 km"}>50 km</MenuItem>
            <MenuItem value={"100 km"}>100 km</MenuItem>
          </DistanceSelect>
        </InnerContainer>
        <Button>Cauta</Button>
      </ActionsContainer>
      <Divider />
      <ActionsContainer>
        <Input
          size="small"
          type="text"
          placeholder="Pret de la"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <EuroSymbolIcon />
              </InputAdornment>
            ),
          }}
        ></Input>
        <HyphenWrapper>-</HyphenWrapper>
        <Input
          size="small"
          type="text"
          placeholder="Pret pana la"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <EuroSymbolIcon />
              </InputAdornment>
            ),
          }}
        ></Input>
        <Divider orientation="vertical" />
        <Input
          size="small"
          type="text"
          placeholder="Suprafata de la"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Pre>
                  m<Sup>2</Sup>
                </Pre>
              </InputAdornment>
            ),
          }}
        ></Input>
        <HyphenWrapper>-</HyphenWrapper>
        <Input
          size="small"
          type="text"
          placeholder="Suprafata pana la"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Pre>
                  m<Sup>2</Sup>
                </Pre>
              </InputAdornment>
            ),
          }}
        ></Input>
      </ActionsContainer>
    </MainContainer>
  );
}

export default SearchActions;
