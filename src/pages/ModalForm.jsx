import { Autocomplete, Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
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
  return (
    <div>
      <Grid>
        <form>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField
                placeholder="Enter Full Name"
                label="Full Name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
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
                placeholder="Enter Address"
                label="Address"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
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
