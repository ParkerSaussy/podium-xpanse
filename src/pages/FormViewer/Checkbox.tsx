import { CheckboxField } from "../../lib/interfaces";

import {Checkbox as MUICheckbox} from "@mui/material";
import { FormGroup, FormControlLabel } from "@mui/material";

export default function Checkbox({ field }: { field: CheckboxField}) {
    return (
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
    )
}