
export interface FormConfig {
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
};

export interface TextInputField extends FormField {
    type: 'text';
    defaultValue?: string;
    validator?: object;
    value?: string;
}

export interface NumberInputField extends FormField {
    type: 'number';
    defaultValue?: number;
    validator?: object;
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