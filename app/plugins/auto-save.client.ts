import { useLighterpackStore } from '~/store/store.js';
import { fetchJson } from '~/utils/utils.js';

const saveInterval = 10000;

function debounce(fn: (...args: any[]) => void, wait: number, { maxWait }: { maxWait?: number } = {}) {
    let timer: ReturnType<typeof setTimeout> | null = null;
    let lastInvokeTime: number | null = null;
    return function (...args: any[]) {
        const now = Date.now();
        if (lastInvokeTime === null) lastInvokeTime = now;
        clearTimeout(timer!);
        const elapsed = now - lastInvokeTime;
        if (maxWait && elapsed >= maxWait) {
            lastInvokeTime = now;
            fn(...args);
        } else {
            timer = setTimeout(() => {
                lastInvokeTime = null;
                timer = null;
                fn(...args);
            }, wait);
        }
    };
}

export default defineNuxtPlugin(() => {
    const store = useLighterpackStore();

    const debouncedSave = debounce(
        (state: any) => {
            if (!state.library) return;

            const saveData = JSON.stringify(state.library.save());

            if (saveData === state.lastSaveData) return;

            const saveRemotely = function () {
                if (state.isSaving) {
                    setTimeout(() => store.setIsSaving(false), saveInterval + 1);
                    return;
                }

                const currentSaveData = JSON.stringify(state.library.save());
                store.setIsSaving(true);
                store.setLastSaveData(currentSaveData);

                fetchJson('/api/library/save', {
                    method: 'POST',
                    body: JSON.stringify({
                        syncToken: state.syncToken,
                        username: state.loggedIn,
                        data: currentSaveData,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'same-origin',
                })
                    .then((response: any) => {
                        store.setSyncToken(response.syncToken);
                        store.setIsSaving(false);
                    })
                    .catch((response: any) => {
                        store.setIsSaving(false);
                        let error = 'An error occurred while attempting to save your data.';
                        if (response.json && response.json.status) {
                            error = response.json.status;
                        }
                        if (response.status == 401) {
                            navigateTo('/signin');
                        } else {
                            alert(error); // TODO
                        }
                    });
            };

            if (state.saveType === 'remote') {
                saveRemotely();
            } else if (state.saveType === 'local') {
                localStorage.library = saveData;
            }
        },
        saveInterval,
        { maxWait: saveInterval * 3 },
    );

    store.$subscribe((mutation, state) => {
        const ignore = [
            'setIsSaving',
            'setSaveType',
            'setSyncToken',
            'setLastSaveData',
            'signout',
            'setLoggedIn',
            'loadLibraryData',
            'clearLibraryData',
        ];
        if (!state.library || ignore.indexOf(mutation.type.replace('lighterpack/', '')) > -1) {
            return;
        }
        debouncedSave(state);
    });
});
