import { CheckboxField } from "../../lib/interfaces";

import { 
    Checkbox as MUICheckbox, 
    FormGroup, 
    FormControl, 
    FormControlLabel, 
    FormLabel, 
    FormHelperText
} from "@mui/material";

export default function Checkbox({ field }: { field: CheckboxField}) {
    return (
        <FormControl sx={{ textAlign: 'left' }}>
            <FormLabel>{field.label}</FormLabel>
            <FormGroup>
                {field.options.map((option, index) => (
                    <FormControlLabel
                        key={index}
                        control={
                            <MUICheckbox color="primary"/>
                        }
                        label={option.label}
                    />
                ))}
            </FormGroup>
            {field.errorMsg && <FormHelperText>{field.errorMsg}</FormHelperText>}
        </FormControl>
    )
}