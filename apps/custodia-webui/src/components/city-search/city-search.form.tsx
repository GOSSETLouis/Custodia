import { Autocomplete, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getCities } from "../../queries/cities.query";

export function CitySearchForm() {
  const [inputValue, setInputValue] = useState<string>("");
  const { isLoading, data, isError, refetch } = useQuery(
    ["cities"],
    async () => await getCities(inputValue)
  );

  if (isError || isLoading) {
    return null;
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setInputValue(event.target.value);
    void refetch({ queryKey: ["cities"] });
  }
  return (
    <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      autoSelect={false}
      disableClearable
      loading={true}
      loadingText="Loading..."
      options={data.map((value) => value.nom)}
      renderInput={(parameters) => (
        <TextField
          {...parameters}
          size="small"
          label="Search input"
          InputProps={{
            ...parameters.InputProps,
            type: "search",
          }}
          sx={{ width: "150px" }}
          onChange={handleInputChange}
          variant="standard"
        />
      )}
    />
  );
}
