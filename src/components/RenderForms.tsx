import styles from './RenderForms.module.css';
import { FormConfig } from "../lib/interfaces";
import { Button } from '@mui/material';

export default function RenderForms({ forms }: { forms: FormConfig[] }) {
    /* 
    3 cases:
        1. Forms is null (i.e. the response failed or hasn't loaded)
        2. Forms is an empty array (i.e. no forms to display)
        3. Forms is an array with FormConfig objects (i.e. forms to display)
    */
    return forms.length === 0 ? (
        <div className={styles['rendered-forms-subspace']}>
            <p className={styles['no-forms-msg']}>No forms to display.</p>
        </div>
    ):(
        <div className={styles['rendered-forms-subspace']}>
            {forms.map((form, index) => {
                return (
                    <div key={`${index}-${form.name}`} className={styles['form-rendered-item']}>
                        <span className={styles['form-name']}>{form.name}</span>
                        <Button variant="outlined" href={`/form-viewer/${form.id}`}>View</Button>
                    </div>
                )
            })}
        </div>
    );
}