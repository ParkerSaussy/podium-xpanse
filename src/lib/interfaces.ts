/* 
Extract all types and set them up as interfaces to allow extension.
We can use these throughout the app to control inputs, parameters, and validation.
*/

export interface FormConfig {
    id: string;
    name: string;
    fields: Array<
        TextInputField | 
        NumberInputField | 
        CheckboxField | 
        SelectInputField | 
        DateInputField
    >;
}

export interface SelectorOption {
    id: string;
    label: string;
}

export interface FormField {
    id: string;
    label: string;
    required: boolean;
    type: string;
    placeholder?: string;
    errorMsg?: string;
};

export interface TextInputField extends FormField {
    type: 'text';
    defaultValue?: string;
    validator?: Validator;
}

export interface NumberInputField extends FormField {
    type: 'number';
    defaultValue?: number;
    validator?: Validator;
}

export interface CheckboxField extends FormField {
    type: 'checkbox';
    defaultValue?: string[] | null;
    options: SelectorOption[];
    validator?: Validator;
}

export interface SelectInputField extends FormField {
    type: 'select';
    defaultValue?: string;
    options: SelectorOption[];
    validator?: Validator;
}

export interface DateInputField extends FormField {
    type: 'date';
    defaultValue?: string;
    validator?: Validator;
}

// This will just never be used - was planning on it but never got to it.
export interface FieldArrayInput extends FormField {
    type: 'fieldArray';
    defaultValue?: Array<string>;
    validator?: Validator;
}

/* Other Types */

// For Validators, I'm using the same general structure I used at Heali.
// The idea here is to nest several language-agnostic expressions that can be used to generate a boolean response.
export interface Validator {
    expression: Array<object>;
}