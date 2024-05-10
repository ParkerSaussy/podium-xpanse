import { FormEvent, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import axios from 'axios';
import JSONPretty from 'react-json-pretty';

import { FormConfig } from '../lib/interfaces';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import FieldRenderer from './FormViewer/FieldRenderer';
import styles from './FormViewer.module.css';

import { validateFields } from '../lib/validation';

export default function FormViewerPage() {
    const results = useRef<{ [key: string]: any }>({}); // Wish we didn't have to use any here but as of making this I haven't confirmed the returned types yet
    const [fieldErrors, setFieldErrors] = useState<{ [key: string]: boolean }>({});
    const [form, setForm] = useState<FormConfig | null>(null);
    const [formError, setFormError] = useState<string | null>(null);
    const [showJson, setShowJson] = useState<boolean>(false);

    // Retrieve our formId from the 
    const params = useParams();
    const formId = params?.formId;

    // Initialize the results & errors objects with default values - ONCE
    useEffect(() => {
        if (form) {
            let newResults = results.current;
            let newErrors:{ [key: string]: boolean } = {};
            form.fields.forEach(field => {
                newResults[field.id] = field.defaultValue || null;
                newErrors[field.id] = false;
            })
            results.current = newResults;
            setFieldErrors(newErrors);
        }
    }, [form]);
    
    // Retrieve the form object from the API
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
                    // Use this for testing!
                    console.log('FORM:', response.data) 
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
    Single master function to update a results object based on data AS it is entered across every component 

    Handy since now we can use a single function to update the results object across all components.
    */
    const updateResults = (fieldId: string, value: any) => {
        let newResults = results.current;
        results.current = { ...newResults, [fieldId]: value }
    }

    /* 
    Elected to handle all validation in this one function when the user hits submit
    Using zero of the html form validation tools.
    */
    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (!form || !results) return

        // Validation Phase
        let validation = validateFields(results.current, form)
        setFieldErrors(validation);
        let success = !Object.values(validation).includes(true);

        // return
        if (success) {
            setShowJson(true);
        } else {
            return
        }
    }

    return (
        <>
            <BackButton href={'/'} />
            <Box className={`page-centered ${styles['form-viewer-fullpage']}`}>
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
                        {form.fields.map((field, index) => (
                            <FieldRenderer 
                                key={index} 
                                field={field} 
                                fieldErrors={fieldErrors}
                                updateResults={(id: string, value: any) => updateResults(id, value)}
                            />) )}
                        {/* Submit Button */}
                        <Button type='submit' variant="contained" size="large" color="primary">Submit Form</Button>
                    </Box>
                )}
            </Box>
            {/* JSON Display Space */}
            {showJson && (
                <Box className={styles['json-space']}>
                    <JSONPretty id="json-pretty" data={results.current}></JSONPretty>
                </Box>)
            }
        </>
    );
}