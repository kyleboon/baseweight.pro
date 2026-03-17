import { _ as h } from './DXNVRMz3.js';
import { _ as x } from './T9tIK9NT.js';
import { _ as j } from './D-Mmche4.js';
import { _ as U } from './CHnPISrF.js';
import {
    x as S,
    c as E,
    b as r,
    w as p,
    o as B,
    a as s,
    y as f,
    z as c,
    A as g,
    d as F,
    B as _,
    C as t,
} from './BSiOiLzB.js';
const N = { id: 'forgotPasswordContainer' },
    T = { class: 'columns' },
    k = { class: 'lpHalf' },
    C = { class: 'lpFields' },
    O = { class: 'lpHalf' },
    V = { class: 'lpFields' },
    Y = Object.assign(
        { name: 'ForgotPassword' },
        {
            __name: 'forgot-password',
            setup(A) {
                const m = S(),
                    n = t(''),
                    a = t([]),
                    l = t(''),
                    i = t([]);
                function v() {
                    return (
                        (a.value = []),
                        _('/api/auth/forgot-password', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            credentials: 'same-origin',
                            body: JSON.stringify({ username: n.value }),
                        })
                            .then((e) => {
                                m.push('/signin/reset-password');
                            })
                            .catch((e) => {
                                let o = [{ message: 'An error occurred, please try again later.' }];
                                (e.json && e.json.errors && (o = e.json.errors), (a.value = o));
                            })
                    );
                }
                function w() {
                    return (
                        (i.value = []),
                        _('/api/auth/forgot-username', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            credentials: 'same-origin',
                            body: JSON.stringify({ email: l.value }),
                        })
                            .then((e) => {
                                m.push('/signin/forgot-username');
                            })
                            .catch((e) => {
                                let o = [{ message: 'An error occurred, please try again later.' }];
                                (e.json && e.json.errors && (o = e.json.errors), (i.value = o));
                            })
                    );
                }
                return (e, o) => {
                    const d = h,
                        y = x,
                        b = j,
                        P = U;
                    return (
                        B(),
                        E('div', N, [
                            r(
                                b,
                                { id: 'forgotPassword', shown: !0, blackout: !0 },
                                {
                                    default: p(() => [
                                        s('div', T, [
                                            s('div', k, [
                                                o[3] || (o[3] = s('h3', null, 'Forgot Your Password?', -1)),
                                                o[4] || (o[4] = s('p', null, 'Please enter your username.', -1)),
                                                s(
                                                    'form',
                                                    { class: 'forgotPassword', onSubmit: f(v, ['prevent']) },
                                                    [
                                                        s('div', C, [
                                                            c(
                                                                s(
                                                                    'input',
                                                                    {
                                                                        'onUpdate:modelValue':
                                                                            o[0] || (o[0] = (u) => (n.value = u)),
                                                                        type: 'text',
                                                                        placeholder: 'Username',
                                                                        name: 'username',
                                                                        class: 'username',
                                                                    },
                                                                    null,
                                                                    512,
                                                                ),
                                                                [[g, n.value]],
                                                            ),
                                                            o[2] ||
                                                                (o[2] = s(
                                                                    'input',
                                                                    {
                                                                        type: 'submit',
                                                                        value: 'Submit',
                                                                        class: 'lpButton',
                                                                    },
                                                                    null,
                                                                    -1,
                                                                )),
                                                        ]),
                                                        r(d, { errors: a.value }, null, 8, ['errors']),
                                                    ],
                                                    32,
                                                ),
                                            ]),
                                            s('div', O, [
                                                o[6] || (o[6] = s('h3', null, 'Forgot Your Username?', -1)),
                                                o[7] || (o[7] = s('p', null, 'Please enter your email address.', -1)),
                                                s(
                                                    'form',
                                                    { class: 'forgotUsername', onSubmit: f(w, ['prevent']) },
                                                    [
                                                        s('div', V, [
                                                            c(
                                                                s(
                                                                    'input',
                                                                    {
                                                                        'onUpdate:modelValue':
                                                                            o[1] || (o[1] = (u) => (l.value = u)),
                                                                        type: 'text',
                                                                        placeholder: 'Email Address',
                                                                        name: 'email',
                                                                        class: 'email',
                                                                    },
                                                                    null,
                                                                    512,
                                                                ),
                                                                [[g, l.value]],
                                                            ),
                                                            o[5] ||
                                                                (o[5] = s(
                                                                    'input',
                                                                    {
                                                                        type: 'submit',
                                                                        value: 'Submit',
                                                                        class: 'lpButton',
                                                                    },
                                                                    null,
                                                                    -1,
                                                                )),
                                                        ]),
                                                        r(d, { errors: i.value }, null, 8, ['errors']),
                                                    ],
                                                    32,
                                                ),
                                            ]),
                                            r(
                                                y,
                                                { to: '/signin', class: 'lpHref' },
                                                {
                                                    default: p(() => [
                                                        ...(o[8] || (o[8] = [F(' ← Return to sign in ', -1)])),
                                                    ]),
                                                    _: 1,
                                                },
                                            ),
                                        ]),
                                    ]),
                                    _: 1,
                                },
                            ),
                            r(P),
                        ])
                    );
                };
            },
        },
    );
export { Y as default };
