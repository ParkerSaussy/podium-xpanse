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
    helperText?: string;
};

export interface TextInputField extends FormField {
    type: 'text';
    defaultValue?: string;
    validator?: object;
    placeholder?: string;
    value?: string;
}

export interface NumberInputField extends FormField {
    type: 'number';
    defaultValue?: number;
    validator?: object;
    placeholder?: string;
    value?: number;
}

export interface CheckboxField extends FormField {
    type: 'checkbox';
    defaultValue?: string[] | null;
    options: SelectorOption[];
    validator?: object;
    value?: string[];
}

export interface SelectInputField extends FormField {
    type: 'select';
    options: SelectorOption[];
    validator?: object;
    value?: string;
}

export interface DateInputField extends FormField {
    type: 'date';
    validator?: object;
    value?: Date;
}

export interface Validator {
    expression: object;
    message: string;
}