import { Button } from "@mui/material";

const backButtonStyles = {
    position: 'fixed',
    top: '10px',
    left: '10px',
};

export default function BackButton({ href, styles }: { href: string, styles?: object }) {
    return (
        <div style={styles ? styles:backButtonStyles}>
            <Button variant="text" size="large" href={href}>{`<< Back`}</Button>
        </div>
    );
}