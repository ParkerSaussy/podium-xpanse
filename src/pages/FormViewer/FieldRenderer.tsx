import { 
    FormField,
    TextInputField, 
    NumberInputField, 
    CheckboxField, 
    SelectInputField, 
    DateInputField 
} from "../../lib/interfaces"
import styles from './FormViewerFields.module.css'

// Fields to be Rendered
import TextInput from "./TextInput";
import NumberInput from "./NumberInput";
import Checkbox from "./Checkbox";
import SelectInput from "./SelectInput";
import DatePicker from "./DatePicker";

export default function FieldRenderer({field}: {field: FormField }) {
    const getFieldComponent = (type: string) => {
        /* 
        It's safe to do these so long as the types match, which they always should unless somebody corrupts the DB 

        Will add a checker function later on, time permitting.
        */
        switch (type) {
            case 'text':
                return <TextInput field={field as TextInputField} />
            case 'number':
                return <NumberInput field={field as NumberInputField} />
            case 'checkbox':
                return <Checkbox field={field as CheckboxField} />
            case 'select':
                return <SelectInput field={field as SelectInputField} />
            case 'date':
                return <DatePicker field={field as DateInputField} />
            default:
                console.error(`Field type ${type} not found`);
                return <></>
        };
    }

    return (
        <div className={`${styles['field-renderer']}`}>
            {getFieldComponent(field.type)}
        </div>
    )
}