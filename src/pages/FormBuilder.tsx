import styles from './FormBuilder.module.css';

import BackButton from '../components/BackButton';

const backButtonStyles = {
    position: 'fixed',
    top: '10px',
    left: '10px',
};


export default function FormBuilderPage() {
    return (
        <div className="page-centered">
            <BackButton styles={backButtonStyles} href={'/'} />
            <h1>Form Builder:</h1>
            <div>

            </div>
        </div>
    );
}