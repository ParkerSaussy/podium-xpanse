import { CheckboxField } from "../../lib/interfaces";

import {Checkbox as MUICheckbox} from "@mui/material";
import { FormGroup, FormControl, FormControlLabel, FormLabel } from "@mui/material";

export default function Checkbox({ field }: { field: CheckboxField}) {
    return (
        <FormControl sx={{ textAlign: 'left' }}>
            <FormLabel>{field.label}</FormLabel>
            <FormGroup>
                {field.options.map((option, index) => (
                    <FormControlLabel
                        key={index}
                        control={
                            <MUICheckbox color="primary" />
                        }
                        label={option.label}
                    />
                ))}
            </FormGroup>
        </FormControl>
    )
}