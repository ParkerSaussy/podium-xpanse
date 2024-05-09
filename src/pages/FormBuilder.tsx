import styles from './FormBuilder.module.css';

import BackButton from '../components/BackButton';

export default function FormBuilderPage() {
    return (
        <div className="page-centered">
            <BackButton href={'/'} />
            <h1>Form Builder:</h1>
            <div>

            </div>
        </div>
    );
}