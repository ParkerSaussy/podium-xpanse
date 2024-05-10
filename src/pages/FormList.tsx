import { useEffect, useState } from 'react';
import { FormConfig } from '../lib/interfaces';
import axios from 'axios';

import styles from './FormList.module.css';
import { Button } from '@mui/material';
import RenderForms from '../components/RenderForms';
import Spinner from '../components/Spinner';

export default function FormListPage() {
    const [forms, setForms] = useState<FormConfig[] | null>(null)
    const [formsError, setFormsError] = useState<string | null>(null)

    // Only have this to print the forms object out after it's pulled
    useEffect(() => {
        console.log(forms);
    }, [forms])

    useEffect(() => {
        const getData = async () => {
            /* 
            Using MockAPI.io here to simulate a call for stored forms.
            All this ultimately is is a single object w/ Field data.
            In the wild, naturally, this would be a real API call.
            */
            try {
                const response = await axios.get('https://663c49b117145c4d8c35b024.mockapi.io/forms')
                if (response.data && response.status === 200) {
                    setForms(response.data)
                } else {
                    setFormsError('Failed to load forms.')
                }
            } catch {
                setFormsError('Failed to load forms.')
            }
        }
        getData();
    }, [])

    return (
        <div className={`page-centered ${styles['forms-list-fullpage']}`}>
            {/* Banner Section */}
            <section className={styles['forms-list-banner-section']}>
                <h1>My Forms:</h1>
            </section>
            {/* Forms Display Section */}
            <section className={styles['forms-list-display-section']}>
                {!forms ? <Spinner />:<RenderForms forms={forms} />}
                {formsError && <div>{formsError}</div>}
            </section>
            {/* Add New Forms Section */}
            <hr className={styles['divider']} />
            <section className={styles['forms-list-new-forms-section']}>
                <Button disabled variant="contained" href="/form-builder">Create New Form</Button>
            </section>
        </div>
    );
}