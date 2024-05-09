import styles from './FormBuilder.module.css';

import BackButton from '../components/BackButton';

export default function FormBuilderPage() {
    return (
        <>
            <BackButton href={'/'} />
            <div className="page-centered">
                <h1>Form Builder:</h1>
                <div>

                </div>
            </div>
        </>
    );
}