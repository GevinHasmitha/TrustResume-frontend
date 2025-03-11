// Desc: Common styles for upload page textareas
export const commonStyles = {
  width: "40%",
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#00A388", // Red border on focus
    },
  },
  "& .MuiInputLabel-outlined": {
    "&.Mui-focused": {
      color: "#00A388", // Change label color on focus
    },
  },
};
