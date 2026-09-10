import { useState } from "react";
import { Html5QrcodePlugin } from "Html5QrcodePlugin";
import { Button } from "@/components/ui/button.jsx";

const Html5QrcodeWrapper = () => {
    const [scan, setScan] = useState(false);

    const test = () => {};

    return (
        <>
            <section className="text-center items-center max-w-lg">
                <Button variant="outline" onClick={() => setScan(!scan)}>Scan QR</Button>
                {scan && <Html5QrcodePlugin {...{
                    fps: 10,
                    qrbox: 260,
                    disableFlip: false,
                    qrCodeSuccessCallback: test,
                    scan
                }} />}
            </section>
        </>
    );
};

export { Html5QrcodeWrapper };
