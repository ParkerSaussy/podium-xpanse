/* 
Extract all types and set them up as interfaces to allow extension.
We can use these throughout the app to control inputs, parameters, and validation.
*/

export interface FormConfig {
    id: string;
    name: string;
    instructions?: string;
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
    validator?: object;
}

export interface NumberInputField extends FormField {
    type: 'number';
    defaultValue?: number;
    validator?: object;
}

export interface CheckboxField extends FormField {
    type: 'checkbox';
    defaultValue?: string[] | null;
    options: SelectorOption[];
    validator?: object;
}

export interface SelectInputField extends FormField {
    type: 'select';
    defaultValue?: string;
    options: SelectorOption[];
    validator?: object;
}

export interface DateInputField extends FormField {
    type: 'date';
    defaultValue?: string;
    validator?: object;
}

export interface FieldArrayInput extends FormField {
    type: 'fieldArray';
    defaultValue?: Array<string>;
    validator?: object;
}

/* Other Types */

export interface Validator {
    expression: object;
    message: string;
}