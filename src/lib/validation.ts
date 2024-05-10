import { FormConfig, FormField } from "./interfaces";

/* 

TEXT INPUT 
- Not empty

NUMBER INPUT
- Not empty

CHECKBOX
- At least one selected

SELECT INPUT
- Not empty/unselected

DATE INPUT
- Not empty


*/

export function validateFieldEntry(field: FormField) {
    return true;
}

export function validateFields(entries: any, form: FormConfig) {
    return true;
}