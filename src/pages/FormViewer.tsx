import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from './FormViewer.module.css';

export default function FormViewerPage() {
    const params = useParams();
    const formId = params?.formId;
    
    useEffect(() => {
        console.log(`Form ID: ${formId}`);
    }, [formId]);

    return (
        <div className="page-centered">
            <h1>Form Display</h1>
        </div>
    );
}