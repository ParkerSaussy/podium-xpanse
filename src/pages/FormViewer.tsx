import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { FormConfig } from '../lib/types';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
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
            Thought about passing the form as a prop but wanted to minimize data being passed around thru props.
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

    return (
        <>
            <BackButton href={'/'} />
            <div className="page-centered">
                {/* Loading, no form or error yet */}
                {(!form && !formError) && <Spinner size='large' />}
                {/* Form failed to load */}
                {formError && <div>{formError}</div>}
                {/* Form loaded */}

            </div>
        </>
    );
}