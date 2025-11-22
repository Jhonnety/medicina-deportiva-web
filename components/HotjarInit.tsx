'use client';

import { useEffect } from 'react';
import { injectContentsquareScript } from '@contentsquare/tag-sdk';

export default function HotjarInit() {
    useEffect(() => {
        injectContentsquareScript({
            siteId: '6583186',
        });
    }, []);

    return null;
}
