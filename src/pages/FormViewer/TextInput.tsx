import styles from './FormViewerFields.module.css';
import { TextInputField } from "../../lib/interfaces";

import TextField from "@mui/material/TextField";

export default function TextInput({ field }: { field: TextInputField }) {
    return (
        <TextField 
            label={field.label} 
            variant="outlined"
            placeholder={field.placeholder || 'Enter text...'}
            className={styles['mui-input']}
            fullWidth
            required={field.required} 
            defaultValue={field.defaultValue} 
        />
    )
}