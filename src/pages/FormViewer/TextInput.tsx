import { TextInputField } from "../../lib/interfaces";

import TextField from "@mui/material/TextField";

export default function TextInput({ field, updateResults }: { field: TextInputField, updateResults: (id: string, value: any) => void }) {
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
            onChange={(e) => { console.log(e.target.value) }}
        />
    )
}