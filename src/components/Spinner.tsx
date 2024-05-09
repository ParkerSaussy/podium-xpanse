import styles from './Spinner.module.css';

// We can apply styles dynamically with a single component
let smallSpinner = {
    width: '48px', height: '48px', borderWidth: '5px'
}

let largeSpinner = {
    width: '100px', height: '100px', borderWidth: '15px'
}

export default function Spinner({ size }: { size?: 'small' | 'large' }) {
    return (
        <div style={size === 'large' ? largeSpinner:smallSpinner} className={styles['spinner']} />
    );
}