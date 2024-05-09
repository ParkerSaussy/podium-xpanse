import styles from './FormViewerFields.module.css';
import { NumberInputField } from "../../lib/interfaces";

import TextField from "@mui/material/TextField";

export default function NumberInput({ field }: { field: NumberInputField}) {
    return (
        <TextField 
            label={field.label} 
            variant="outlined"
            placeholder={field.placeholder || 'Enter a number...'}
            className={styles['mui-input']}
            fullWidth
            required={field.required} 
            defaultValue={field.defaultValue} 
            inputProps={{
                type: 'number'
            }}
        />
    )
}