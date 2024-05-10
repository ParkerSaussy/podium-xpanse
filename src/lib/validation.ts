import { FormConfig, FormField } from "./interfaces";

/* 
Ignore this - using it to think through the validation process

TEXT INPUT 
- Not empty
- longer than X characters
- Shorter than X characters

NUMBER INPUT
- Not empty
- Greater than X
- Less than X
- Equal to X

CHECKBOX
- At least x selected

SELECT INPUT
- Not empty/unselected

DATE INPUT
- Not empty
- in future
*/

/* 
Similar expression schema to what I used at Heali 
Idea here is that each statement resolves to true or false
Every validation object contains an array of these expressions

NOTE: this is entirely for reference and is not all implemented
*/
const expressions = {
    'notEmpty': ['notEmpty'], // One statement, needs to not be null, undefined, or an empty string
    'longerXchar': ['longerXchar', 10], // statement, value it needs to be longer than
    'shorterXchar': ['shorterXchar', 10], // statement, value it needs to be shorter than
    'moreXnum': ['moreXnum', 10], // statement, value it needs to be more than
    'lessXnum': ['lessXnum', 10], // statement, value it needs to be less than
    'equalXnum': ['equalXnum', 10], // statement, value it needs to be equal to
    'xSelected': ['xSelected', 1], // statement, min number which need to be selected
    'inFuture': ['inFuture'], // statement, date needs to be in the future from dayjs() aka right now at this very second
}

export function validateFieldEntry(field: FormField) {
    return true;
}

export function validateFields(entries: any, form: FormConfig) {
    let validation = Object.assign({}, entries);

    // Returning True here indicates an error; False indicates no error
    Object.keys(entries).forEach(key => {
        // Extract field metadata
        const fieldData = form.fields.find(field => field.id === key);
        const validator = fieldData?.validator || null;
        const value = entries[key];

        // Return false if no validator is present (this means no validation is needed for this field)
        if (!validator) { validation[key] = false; return; }

        // Now, iterate every statement within the validator to return true or false
        let results: boolean[] = [];
        validator.expression.forEach((statement: any) => {
            // Extract the statement and param if present
            let [type, param] = statement;

            // Handle the statement
            switch (type) {
                case 'notEmpty':
                    if (!value || value === '') {
                        results.push(true);
                    } else { 
                        results.push(false) 
                    }
                    break;
                case 'moreXnum':
                    if (value <= param) {
                        results.push(true);
                    } else {
                        results.push(false);
                    }
                    break;
                case 'lessXnum':
                    if (value >= param) {
                        results.push(true);
                    } else {
                        results.push(false);
                    }
                    break;
                case 'xSelected':
                    if (!value || value.length < param) {
                        results.push(true);
                    } else {
                        results.push(false);
                    }
                    break;
                default:
                    validation[key] = true;
                    break;
            }
        });
        results.includes(true) ? validation[key] = true:validation[key] = false;
    });
    
    return validation;
}