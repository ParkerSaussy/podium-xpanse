import { useState } from "react";
import { SelectInputField } from "../../lib/interfaces";

import { 
    FormControl, 
    MenuItem, 
    Select, 
    InputLabel, 
    FormHelperText 
} from "@mui/material";

export default function SelectInput({ field }: { field: SelectInputField }) {
    const [value, setValue] = useState('')

    return (
        <FormControl>
            <InputLabel shrink id="demo-simple-select-label">{field.label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                required={field.required}
                displayEmpty
                label={field.label}
                onChange={(e) => setValue(e.target.value)}
                fullWidth
            >
                <MenuItem value="" disabled>{field.placeholder || 'Select an option...'}</MenuItem>
                {field.options.map((option, index) => (
                    <MenuItem key={index} value={option.id}>{option.label}</MenuItem>
                ))}
            </Select>
            {field.errorMsg && <FormHelperText>{field.errorMsg}</FormHelperText>}
        </FormControl>
    )
}