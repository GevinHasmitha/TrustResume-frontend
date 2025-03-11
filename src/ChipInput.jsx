import React, { useState } from "react";
import { TextField, Autocomplete, Chip, Box } from "@mui/material";
import PropTypes from "prop-types";
import { commonStyles } from "./commonStyles";

const ChipInput = ({ label, onChange, fieldId }) => {
  const [chipValues, setChipValues] = useState([]);

  const handleChipChange = (event, newValue) => {
    setChipValues(newValue);
    onChange(fieldId, newValue);
  };

  return (
    <Box
      sx={{
        ...commonStyles,
      }}
    >
      <Autocomplete
        multiple
        freeSolo
        options={[]}
        value={chipValues}
        onChange={handleChipChange}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => {
            // Extract the key from getTagProps and pass it directly
            const { key, ...otherProps } = getTagProps({ index });
            return (
              <Chip
                key={key} // Pass key directly
                label={option}
                {...otherProps} // Spread the remaining props
              />
            );
          })
        }
        renderInput={(params) => (
          <TextField
            sx={{ my: 1 }}
            {...params}
            label={label}
            placeholder="Type and press enter"
            size="small"
          />
        )}
      />
    </Box>
  );
};

ChipInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  fieldId: PropTypes.string.isRequired,
};

export default ChipInput;
