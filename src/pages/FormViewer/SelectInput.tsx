import { useState } from "react";
import { SelectInputField } from "../../lib/interfaces";

import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";

export default function SelectInput({ field }: { field: SelectInputField }) {
    const [value, setValue] = useState('1')

    return (
        <FormControl>
            <InputLabel id="demo-simple-select-label">{field.label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label={field.label}
                onChange={(e) => setValue(e.target.value)}
                fullWidth
            >
                {field.options.map((option, index) => (
                    <MenuItem key={index} value={option.id}>{option.label}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}