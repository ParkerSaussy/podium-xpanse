import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import axios from 'axios';

import { FormConfig } from '../lib/interfaces';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import FieldRenderer from './FormViewer/FieldRenderer';
import styles from './FormViewer.module.css';

export default function FormViewerPage() {
    const [form, setForm] = useState<FormConfig | null>(null);
    const [formError, setFormError] = useState<string | null>(null);

    // Retrieve our formId from the 
    const params = useParams();
    const formId = params?.formId;
    
    useEffect(() => {
        const getData = async () => {
            /* 
            MockAPI.io yet again...
            We take the formId and retrieve a single form from the DB
            Thought about passing the form as a prop but wanted to minimize that.
            */
            try {
                const response = await axios.get(`https://663c49b117145c4d8c35b024.mockapi.io/forms/${formId}`);
                if (response.data && response.status === 200) {
                    setForm(response.data)
                } else {
                    setFormError('Failed to load form.')
                }
            } catch (err) {
                setFormError('Error - Failed to load form.')
            }
        }
        getData();
    }, [formId]);

    /* 
    Elected to handle all validation in this function.
    Using zero of the html form validation tools.
    */
    const onSubmit = (event: FormEvent) => {
        event.preventDefault();

        console.log('Form submitted!');
    }

    return (
        <>
            <BackButton href={'/'} />
            <div className={`page-centered ${styles['form-viewer-fullpage']}`}>
                {/* Loading, no form or error yet */}
                {(!form && !formError) && <Spinner size='large' />}
                {/* Form failed to load */}
                {formError && <div>{formError}</div>}
                {/* Form loaded */}
                {form && !formError && (
                    <Box component="form" noValidate onSubmit={onSubmit} className={styles['form-container']}>
                        {/* Form Header */}
                        <h1>{`${form.name}:`}</h1>
                        {/* Form Field data is passed field-by-field to the FieldRenderer component, whereafter it is past based on type. */}
                        {form.fields.map((field, index) => <FieldRenderer key={index} field={field} /> )}
                        {/* Submit Button */}
                        <Button type='submit' variant="contained" size="large" color="primary">Submit Form</Button>
                    </Box>
                )}
            </div>
        </>
    );
}