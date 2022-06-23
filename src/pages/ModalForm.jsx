import { Autocomplete, Box, Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
const city = [
  { label: "Dhaka" },
  { label: "Comilla" },
  { label: "Fani" },
  
];
const state = [{ label: "Varella" }, { label: "Sotna" }, { label: "Chandina" }];
const role = [{ label: "1" }, { label: "2" }, { label: "3" }];
const userLevel = [
  { label: "Level 1" },
  { label: "Level 2" },
  { label: "Level 3" },
];
function ModalForm() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    axios.post("http://localhost:5000/form", data).then((res) => {
      if (res.data.insertedId) {
        alert("Your From successfully");
        reset();
      }
    });
  };
  return (
    <div>
      <Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField
                {...register("name")}
                placeholder="Enter Full Name"
                label="Full Name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                {...register("email")}
                placeholder="Enter email"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                {...register("address")}
                placeholder="Enter Address"
                label="Address"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                {...register("location")}
                placeholder="Enter Location"
                label="Location"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <Autocomplete
                options={city}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                  <Box component="li" {...props}>
                    {option.label}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...register("city")}
                    {...params}
                    label="City"
                    inputProps={{
                      ...params.inputProps,
                    }}
                  />
                )}
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <Autocomplete
                options={state}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                  <Box component="li" {...props}>
                    {option.label}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...register("state")}
                    {...params}
                    label="State Name"
                    inputProps={{
                      ...params.inputProps,
                    }}
                  />
                )}
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <Autocomplete
                options={role}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                  <Box component="li" {...props}>
                    {option.label}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...register("role")}
                    {...params}
                    label="Role"
                    inputProps={{
                      ...params.inputProps,
                    }}
                  />
                )}
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <Autocomplete
                options={userLevel}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                  <Box component="li" {...props}>
                    {option.label}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...register("userLevel")}
                    {...params}
                    label="User Level"
                    inputProps={{
                      ...params.inputProps,
                    }}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </div>
  );
}

export default ModalForm;
