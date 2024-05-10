import styles from './FormViewerFields.module.css'

// Types/Interfaces
import { 
    FormField,
    TextInputField, 
    NumberInputField, 
    CheckboxField, 
    SelectInputField, 
    DateInputField 
} from "../../lib/interfaces"

// Fields to be Rendered
import TextInput from "./TextInput";
import NumberInput from "./NumberInput";
import Checkbox from "./Checkbox";
import SelectInput from "./SelectInput";
import DatePicker from "./DatePicker";

// MUI
import { Box } from "@mui/material";

export default function FieldRenderer({ field, updateResults }: { field: FormField, updateResults: (id: string, value: any) => void }) {
    const getFieldComponent = (type: string) => {
        /* 
        It's safe to do these so long as the types match, which they always should unless somebody corrupts the DB 

        Will add a checker function later on, time permitting.
        */
        switch (type) {
            /* TEXT ENTRY - TextInput */
            case 'text': 
                return (<TextInput field={field as TextInputField} updateResults={(id: string, value: any) => updateResults(id, value)} />)
            /* NUMBER ENTRY - NumberInput */
            case 'number':
                return (<NumberInput field={field as NumberInputField} updateResults={(id: string, value: any) => updateResults(id, value)} />)
            /* CHECKBOXES (0+) - Checkbox */
            case 'checkbox':
                return (<Checkbox field={field as CheckboxField} updateResults={(id: string, value: any) => updateResults(id, value)} />)
            /* SELECT (1 of many) - SelectInput */
            case 'select':
                return (<SelectInput field={field as SelectInputField} updateResults={(id: string, value: any) => updateResults(id, value)} />)
            /* DATE - DatePicker */
            case 'date':
                return (<DatePicker field={field as DateInputField} updateResults={(id: string, value: any) => updateResults(id, value)} />)
            default:
                console.error(`Field type ${type} not found`);
                return <></>
        };
    }

    return (
        <Box className={`${styles['field-renderer']}`}>
            {getFieldComponent(field.type)}
        </Box>
    )
}