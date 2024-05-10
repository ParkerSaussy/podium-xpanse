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

    Object.keys(entries).forEach(key => {
        validation[key] = true;
    });
    
    return validation;
}