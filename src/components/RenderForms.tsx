import { FormConfig } from "../lib/types";

export default function RenderForms({ forms }: { forms: FormConfig[] | null }) {
    /* 
    3 cases:
        1. Forms is null (i.e. the response failed or hasn't loaded)
        2. Forms is an empty array (i.e. no forms to display)
        3. Forms is an array with FormConfig objects (i.e. forms to display)
    */
    return !forms ? (
        <div>
            {'Forms could not load.'}
        </div>
    ):(
        <div>
            
        </div>
    );
}