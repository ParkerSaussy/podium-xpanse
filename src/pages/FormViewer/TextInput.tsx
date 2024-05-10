import { ChangeEvent } from "react";
import { TextInputField } from "../../lib/interfaces";

import TextField from "@mui/material/TextField";

export default function TextInput({ field, updateResults }: { field: TextInputField, updateResults: (id: string, value: any) => void }) {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateResults(field.id, e.target.value)
    }

    return (
        <TextField 
            label={field.label} 
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            placeholder={field.placeholder || 'Enter text...'}
            fullWidth
            color="primary"
            required={field.required} 
            defaultValue={field.defaultValue}
            helperText={field.errorMsg || null}
            onChange={ (e: ChangeEvent<HTMLInputElement>) => onChange(e) }
        />
    )
}