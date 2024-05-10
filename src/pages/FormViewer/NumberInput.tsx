import { ChangeEvent } from "react";
import { NumberInputField } from "../../lib/interfaces";

import TextField from "@mui/material/TextField";

export default function NumberInput({ field, error, updateResults }: { 
    field: NumberInputField, 
    error?: boolean, 
    updateResults: (id: string, value: any) => void 
}) {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateResults(field.id, parseFloat(e.target.value))
    }

    return (
        <TextField 
            label={field.label} 
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            placeholder={field.placeholder || 'Enter a number...'}
            fullWidth
            color={error ? "error":"primary"}
            required={field.required} 
            defaultValue={field.defaultValue} 
            inputProps={{ type: 'number' }}
            helperText={error ? (field.errorMsg || null): null}
            onChange={ (e: ChangeEvent<HTMLInputElement>) => onChange(e) }
        />
    )
}