import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import useBuyerContext from "../hooks/useBuyerContext";
import useTruckerContext from "../hooks/useTruckerContext";
import useTruckContext from "../hooks/useTruckContext";
import useDriverContext from "../hooks/useDriverContext";
import useTankContext from "../hooks/useTankContext";
const Transactions = () => {
  const buyers = useBuyerContext();
  const truckers = useTruckerContext();
  const trucks = useTruckContext();
  const drivers = useDriverContext();
  const tanks = useTankContext();
  const customersData = {
    atw: "",
    buyer: "",
    trucker: "",
    loadCap: "",
    plateNumber: "",
    driver: "",
    source: "",
    dr: "",
    seal: "",
    remarks: "",
  };
  const [data, setData] = useState(customersData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:5000/api/v1/project-lauqui/transactions",
        data,
        { withCredentials: true }
      );
      setData(customersData);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Box component={"form"} onSubmit={handleSubmit} autoComplete="off">
      <Stack direction={"row-reverse"} mb={2}>
        <TextField
          label="ATW"
          name="atw"
          id="atw"
          required={true}
          value={data.atw}
          onChange={handleChange}
        />
      </Stack>
      <Stack spacing={2} direction={"row"} mb={2}>
        <FormControl fullWidth>
          <InputLabel id="buyer">Buyer *</InputLabel>
          <Select
            label="Buyer *"
            labelId="buyer"
            name="buyer"
            id="buyer"
            value={data.buyer}
            onChange={handleChange}
            required={true}
          >
            {buyers?.map((buyer) => {
              return (
                <MenuItem value={buyer.customerName} key={buyer._id}>
                  {buyer.customerCode} - {buyer.customerName}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="trucker">Trucker *</InputLabel>
          <Select
            label="Trucker *"
            labelId="trucker"
            name="trucker"
            id="trucker"
            value={data.trucker}
            onChange={handleChange}
            required={true}
          >
            {truckers?.map((trucker) => {
              return (
                <MenuItem value={trucker.company} key={trucker._id}>
                  {trucker.truckingCode} - {trucker.company}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Stack>

      <Stack spacing={2} direction={"row"} mb={2}>
        <TextField
          label="EST. Quantity (in Kg.)"
          name="loadCap"
          id="loadCap"
          value={data.loadCap}
          onChange={handleChange}
          required={true}
          fullWidth
        />

        <FormControl fullWidth>
          <InputLabel id="plateNumber">Plate Number *</InputLabel>
          <Select
            label="Plate Number *"
            labelId="plateNumber"
            name="plateNumber"
            id="plateNumber"
            value={data.plateNumber}
            onChange={handleChange}
            required={true}
          >
            {trucks?.map((truck) => {
              return (
                <MenuItem value={truck.plateNo} key={truck._id}>
                  {truck.plateNo}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="driver">Driver *</InputLabel>
          <Select
            label="Driver *"
            labelId="driver"
            name="driver"
            id="driver"
            value={data.driver}
            onChange={handleChange}
            required={true}
          >
            {drivers?.map((driver) => {
              return (
                <MenuItem value={driver.fullname} key={driver._id}>
                  {driver.fullname}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Stack>

      <Stack spacing={2} direction={"row"} mb={2}>
        <FormControl fullWidth>
          <InputLabel id="source">Tank Source *</InputLabel>
          <Select
            label="Tank Source *"
            labelId="source"
            name="source"
            id="source"
            value={data.source}
            onChange={handleChange}
            required={true}
          >
            {tanks?.map((tank) => {
              return (
                <MenuItem value={tank.tankName} key={tank._id}>
                  {tank.tankLocation} - {tank.tankName}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <TextField
          label="DR"
          name="dr"
          id="dr"
          value={data.dr}
          onChange={handleChange}
          required={true}
          fullWidth
        />
        <TextField
          label="Seal"
          name="seal"
          id="seal"
          value={data.seal}
          onChange={handleChange}
          required={true}
          fullWidth
        />
      </Stack>

      <Stack mb={2}>
        <TextField
          label="Remarks"
          name="remarks"
          id="remarks"
          value={data.remarks}
          onChange={handleChange}
          multiline
          rows={5}
        />
      </Stack>

      <Stack direction={"row-reverse"}>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default Transactions;
