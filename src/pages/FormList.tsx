import { useEffect, useState } from 'react';
import { FormConfig } from '../lib/types';
import axios from 'axios';

import styles from './FormList.module.css';
import { Button } from '@mui/material';

export default function FormListPage() {
    const [forms, setForms] = useState<FormConfig[]>([])

    // Only have this to print the forms object out after it's pulled
    useEffect(() => {
        console.log(forms);
    }, [forms])

    useEffect(() => {
        const getData = async () => {
            /* 
            Using FakeAPI here to simulate a call for stored forms.
            All this ultimately is is a single object w/ Field data.
            In the wild, naturally, this would be a real API call.
            */
            const response = await axios.get('https://663c49b117145c4d8c35b024.mockapi.io/forms')
            if (response.data) setForms(response.data)
        }
        getData();
    }, [])

    return (
        <div className="page-centered">
            {/* Banner Section */}
            <section className={`${styles['forms-list-banner-section']}`}>
                <h1>My Forms:</h1>
                
            </section>
            {/* Forms Display Section */}
            <section className={`${styles['forms-list-display-section']}`}>
                
            </section>
            {/* Add New Forms Section */}
            <section className={`${styles['forms-list-new-forms-section']}`}>
                <Button variant="contained" href="/form-builder">Create New Form</Button>
            </section>
        </div>
    );
}