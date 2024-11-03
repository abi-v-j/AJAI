import React, { useState } from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, Send } from '@mui/icons-material';

const InputCustom = ({
  label = 'Input',
  type = 'text',
  value,
  onChange,
  endAdornmentIcon = null,
  showPasswordToggle = false,
  sx,
  name,
  onClick,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel htmlFor={`outlined-adornment-${label}`}>{label}</InputLabel>
      <OutlinedInput
        id={`outlined-adornment-${label}`}
        type={showPasswordToggle && showPassword ? 'text' : type}
        value={value}
        onChange={onChange}
        name={name}
        sx={sx}
        endAdornment={
          <InputAdornment position="end">
            {showPasswordToggle ? (
              <IconButton
                aria-label={showPassword ? 'hide the password' : 'display the password'}
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ) : onClick ? (
              <IconButton onClick={onClick} edge="end">
                <Send />
              </IconButton>
            ) : (
              endAdornmentIcon
            )}
          </InputAdornment>
        }
        label={label}
        {...props}
      />
    </FormControl>
  );
};

export default InputCustom;
