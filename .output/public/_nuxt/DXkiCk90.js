import {
    D as b,
    I as B,
    L as T,
    J as x,
    o as c,
    c as m,
    t as V,
    j as f,
    a as o,
    z as v,
    A as g,
    b as _,
    d as w,
    K as C,
    w as D,
    y as N,
    C as n,
    B as F,
} from './BSiOiLzB.js';
import { _ as I } from './DXNVRMz3.js';
import { a as L } from './COR29gkO.js';
const P = { key: 0, class: 'lpSuccess' },
    j = { class: 'lpFields' },
    J = { class: 'lpButtons' },
    O = { class: 'lpButton' },
    z = Object.assign(
        { name: 'SigninForm' },
        {
            __name: 'SigninForm',
            props: { message: { type: String, default: null } },
            setup(p) {
                const r = b(),
                    y = B(),
                    l = n(!1),
                    s = n([]),
                    u = n(''),
                    t = n(''),
                    d = n(null);
                function h() {
                    ((s.value = []),
                        u.value || s.value.push({ field: 'username', message: 'Please enter a username.' }),
                        t.value || s.value.push({ field: 'password', message: 'Please enter a password.' }),
                        !s.value.length &&
                            ((l.value = !0),
                            F('/api/auth/signin', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                credentials: 'same-origin',
                                body: JSON.stringify({ username: u.value, password: t.value }),
                            })
                                .then((a) => {
                                    (r.setSyncToken(a.syncToken),
                                        r.loadLibraryData(a.library),
                                        r.setSaveType('remote'),
                                        r.setLoggedIn(a.username),
                                        y.push('/'),
                                        (l.value = !1));
                                })
                                .catch((a) => {
                                    ((s.value = a), d.value.focus(), (t.value = ''), (l.value = !1));
                                })));
                }
                return (a, e) => {
                    const S = T('router-link'),
                        k = x('focus-on-create');
                    return (
                        c(),
                        m(
                            'form',
                            { class: 'signin', onSubmit: N(h, ['prevent']) },
                            [
                                p.message ? (c(), m('p', P, V(p.message), 1)) : f('', !0),
                                o('div', j, [
                                    v(
                                        o(
                                            'input',
                                            {
                                                'onUpdate:modelValue': e[0] || (e[0] = (i) => (u.value = i)),
                                                type: 'text',
                                                placeholder: 'Username',
                                                name: 'username',
                                                class: 'username',
                                            },
                                            null,
                                            512,
                                        ),
                                        [[g, u.value], [k]],
                                    ),
                                    v(
                                        o(
                                            'input',
                                            {
                                                ref_key: 'passwordInput',
                                                ref: d,
                                                'onUpdate:modelValue': e[1] || (e[1] = (i) => (t.value = i)),
                                                type: 'password',
                                                placeholder: 'Password',
                                                name: 'password',
                                                class: 'password',
                                            },
                                            null,
                                            512,
                                        ),
                                        [[g, t.value]],
                                    ),
                                ]),
                                _(I, { errors: s.value }, null, 8, ['errors']),
                                o('div', J, [
                                    o('button', O, [
                                        e[2] || (e[2] = w(' Sign in ', -1)),
                                        l.value ? (c(), C(L, { key: 0 })) : f('', !0),
                                    ]),
                                    _(
                                        S,
                                        { to: '/forgot-password', class: 'lpHref signin-forgot-password' },
                                        {
                                            default: D(() => [
                                                ...(e[3] || (e[3] = [w(' Forgot username/password? ', -1)])),
                                            ]),
                                            _: 1,
                                        },
                                    ),
                                ]),
                            ],
                            32,
                        )
                    );
                };
            },
        },
    );
export { z as _ };
