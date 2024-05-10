import { CheckboxField } from "../../lib/interfaces";
import { ChangeEvent, useRef } from "react";

import { 
    Checkbox as MUICheckbox, 
    FormGroup, 
    FormControl, 
    FormControlLabel, 
    FormLabel, 
    FormHelperText
} from "@mui/material";

export default function Checkbox({ field, updateResults }: { field: CheckboxField, updateResults: (id: string, value: any) => void }) {
    const boxesSelected = useRef<any>({});

    /* 
    This could really do with some improvement. Too much filtering and mapping
    Ultimately it just depends what we want the results JSON to look like
    Entire goal here is just to get an array of the selected Checkbox options
    */
    const onSelected = (e: ChangeEvent<HTMLInputElement>, id: string) => {
        const value = e.target.checked;
        boxesSelected.current = {
            ...boxesSelected.current,
            [id]: value
        }
        let checkedResults = Object.entries(boxesSelected.current)
                                    .filter(([key, value]) => value)
                                     .map(([key, value]) => field.options
                                      .find(option => option.id === key));
        updateResults(field.id, checkedResults)
    }

    return (
        <FormControl sx={{ textAlign: 'left' }}>
            <FormLabel>{field.label}</FormLabel>
            <FormGroup>
                {field.options.map((option, index) => (
                    <FormControlLabel
                        key={index}
                        control={
                            <MUICheckbox 
                                color="primary" 
                                onChange={(e: ChangeEvent<HTMLInputElement>) => onSelected(e, option.id)} 
                            />
                        }
                        label={option.label}
                    />
                ))}
            </FormGroup>
            {field.errorMsg && <FormHelperText>{field.errorMsg}</FormHelperText>}
        </FormControl>
    )
}