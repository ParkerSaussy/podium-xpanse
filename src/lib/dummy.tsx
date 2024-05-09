import { FormConfig } from "./types"

/* Dummy File to help w/ Type Testing and Debugging */
export const DummyFile: FormConfig = {
    fields: [
        {
            id: 'title',
            label: 'Title',
            required: true,
            type: 'text'
        },
        {
            id: 'year',
            label: 'Year',
            required: false,
            type: 'number'
        },
        {
            id: 'age',
            label: 'Age',
            required: true,
            type: 'checkbox',
            options: [
                {id: '1', label: 'Option 1'},
                {id: '2', label: 'Option 2'},
                {id: '3', label: 'Option 3'},
            ]
        },
    ]
}