/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { useEffect } from 'react';

const useScript = (url: string) => {
    useEffect(() => {
        const script = document.createElement('script');
        const body = document.body;
        if (body.querySelector(`script[src="${url}"]`)) {
            return;
        }

        script.src = url;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [url]);
};

export default useScript;
