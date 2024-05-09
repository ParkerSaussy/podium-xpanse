import { Button } from "@mui/material";

export default function BackButton({ href, styles }: { href: string, styles?: object }) {
    return (
        <div style={styles ? styles:{}}>
            <Button variant="text" size="large" href={href}>{`<< Back`}</Button>
        </div>
    );
}