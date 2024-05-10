import { useState } from "react";
import { SelectInputField } from "../../lib/interfaces";

import { 
    FormControl, 
    MenuItem, 
    Select, 
    InputLabel, 
    FormHelperText, 
    SelectChangeEvent
} from "@mui/material";

export default function SelectInput({ field, updateResults }: { field: SelectInputField, updateResults: (id: string, value: any) => void }) {
    const [value, setValue] = useState('');

    const onSelectOption = (e: SelectChangeEvent) => {
        const value = e.target.value;
        // First update the results in the parent component, then update the local state
        updateResults(field.id, field.options.find(option => option.id === value));
        setValue(value);
    }

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
                onChange={(e: SelectChangeEvent) => onSelectOption(e)}
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