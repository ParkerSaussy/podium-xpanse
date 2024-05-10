import { TextInputField } from "../../lib/interfaces";

import TextField from "@mui/material/TextField";

export default function TextInput({ field }: { field: TextInputField }) {
    return (
        <TextField 
            label={field.label} 
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            placeholder={field.placeholder || 'Enter text...'}
            fullWidth
            color="error"
            required={field.required} 
            defaultValue={field.defaultValue}
            helperText={field.errorMsg || null}
        />
    )
}