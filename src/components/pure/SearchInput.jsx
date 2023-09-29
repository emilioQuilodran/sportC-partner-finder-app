import React, { useState, useEffect } from 'react';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Chip from '@mui/material/Chip';

const SearchInput = ({ onSearch, getAllFilter, getGBAFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState("default");

  const handleSearch = (e) => {
    if(e.key === "Enter"){
      onSearch(searchTerm, selectedLocation);
    }
  };

  const handleLocationChange = (val) => {
    setSelectedLocation(val);
    getGBAFilter(val)
  };

  const handleResetFilters = () => {
    setSearchTerm('')
    setSelectedLocation("default")
    getAllFilter();
  };

  return (
    <>
      <Divider variant="middle" />
      <div align="center">
        <h2>Filtrar por localidad</h2>
        <Chip
          label="GBA"
          variant={selectedLocation === 'GBA' ? 'filled' : 'outlined'}
          onClick={() => handleLocationChange("GBA")}
          style={{ marginRight: '0.5em' }}
        />
        <Chip
          label="No GBA"
          variant={selectedLocation === 'No GBA' ? 'filled' : 'outlined'}
          onClick={() => handleLocationChange("No GBA")}
          style={{ marginRight: '0.5em' }}
        />
        <Chip
          label="Todos"
          variant={selectedLocation === 'default' ? 'filled' : 'outlined'}
          onClick={handleResetFilters}
        />
      </div>
      <div className="search-container" style={{ padding: '1.5em 0', display: 'flex', alignItems: 'center' }}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-searchbox">Buscar por apellido</InputLabel>
          <OutlinedInput
            id="outlined-adornment-searchbox"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyUp={handleSearch}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle searchbox visibility"
                  edge="end"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Buscar"
          />
        </FormControl>
      </div>
      <Divider variant="middle" />
    </>
  );
};

export default SearchInput;