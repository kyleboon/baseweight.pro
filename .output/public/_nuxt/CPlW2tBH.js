import {
    D as S,
    I as _,
    J as L,
    o as f,
    c as T,
    a as r,
    z as m,
    A as c,
    b as k,
    d as C,
    K as P,
    j as V,
    y as B,
    C as i,
    p as D,
    B as N,
    m as x,
} from './BSiOiLzB.js';
import { _ as R } from './DXNVRMz3.js';
import { a as U } from './COR29gkO.js';
const F = { class: 'lpFields' },
    J = { class: 'lpButtons' },
    O = { class: 'lpButton' },
    $ = Object.assign(
        { name: 'RegisterForm' },
        {
            __name: 'RegisterForm',
            setup(j) {
                const g = D.Library,
                    l = S(),
                    v = _(),
                    t = i(''),
                    d = i(''),
                    s = i(''),
                    u = i(''),
                    p = i(!1),
                    a = i([]),
                    y = x(() => l.saveType === 'local');
                function h() {
                    if (y.value) {
                        v.push('/');
                        return;
                    }
                    const n = new g();
                    (l.loadLibraryData(JSON.stringify(n.save())),
                        l.setSaveType('local'),
                        l.setLoggedIn(!1),
                        v.push('/'));
                }
                function w() {
                    if (
                        ((a.value = []),
                        t.value || a.value.push({ field: 'username', message: 'Please enter a username.' }),
                        t.value &&
                            (t.value.length < 3 || t.value.length > 32) &&
                            a.value.push({
                                field: 'username',
                                message: 'Please enter a username between 3 and 32 characters.',
                            }),
                        d.value || a.value.push({ field: 'email', message: 'Please enter an email.' }),
                        s.value || a.value.push({ field: 'password', message: 'Please enter a password.' }),
                        u.value ||
                            a.value.push({
                                field: 'passwordConfirm',
                                message: 'Please enter a password confirmation.',
                            }),
                        s.value &&
                            u.value &&
                            s.value !== u.value &&
                            a.value.push({ field: 'password', message: "Your passwords don't match." }),
                        s.value &&
                            (s.value.length < 5 || s.value.length > 60) &&
                            a.value.push({
                                field: 'password',
                                message: 'Please enter a password between 5 and 60 characters.',
                            }),
                        a.value.length)
                    )
                        return;
                    const n = { username: t.value, email: d.value, password: s.value };
                    (localStorage.library && (n.library = localStorage.library),
                        (p.value = !0),
                        N('/api/auth/register', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            credentials: 'same-origin',
                            body: JSON.stringify(n),
                        })
                            .then((e) => {
                                (l.setSyncToken(e.syncToken),
                                    l.loadLibraryData(e.library),
                                    l.setSaveType('remote'),
                                    l.setLoggedIn(e.username),
                                    n.library &&
                                        ((localStorage.registeredLibrary = localStorage.library),
                                        delete localStorage.library),
                                    (p.value = !1),
                                    v.push('/'));
                            })
                            .catch((e) => {
                                ((p.value = !1), (a.value = e));
                            }));
                }
                return (n, e) => {
                    const b = L('focus-on-create');
                    return (
                        f(),
                        T(
                            'form',
                            { class: 'lpRegister lpFields', onSubmit: B(w, ['prevent']) },
                            [
                                r('div', F, [
                                    m(
                                        r(
                                            'input',
                                            {
                                                'onUpdate:modelValue': e[0] || (e[0] = (o) => (t.value = o)),
                                                type: 'text',
                                                placeholder: 'Username',
                                                name: 'username',
                                            },
                                            null,
                                            512,
                                        ),
                                        [[c, t.value], [b]],
                                    ),
                                    m(
                                        r(
                                            'input',
                                            {
                                                'onUpdate:modelValue': e[1] || (e[1] = (o) => (d.value = o)),
                                                type: 'email',
                                                placeholder: 'Email',
                                                name: 'email',
                                            },
                                            null,
                                            512,
                                        ),
                                        [[c, d.value]],
                                    ),
                                    m(
                                        r(
                                            'input',
                                            {
                                                'onUpdate:modelValue': e[2] || (e[2] = (o) => (s.value = o)),
                                                type: 'password',
                                                placeholder: 'Password',
                                                name: 'password',
                                            },
                                            null,
                                            512,
                                        ),
                                        [[c, s.value]],
                                    ),
                                    m(
                                        r(
                                            'input',
                                            {
                                                'onUpdate:modelValue': e[3] || (e[3] = (o) => (u.value = o)),
                                                type: 'password',
                                                placeholder: 'Confirm password',
                                                name: 'passwordConfirm',
                                            },
                                            null,
                                            512,
                                        ),
                                        [[c, u.value]],
                                    ),
                                ]),
                                k(R, { errors: a.value }, null, 8, ['errors']),
                                r('div', J, [
                                    r('button', O, [
                                        e[4] || (e[4] = C(' Register ', -1)),
                                        p.value ? (f(), P(U, { key: 0 })) : V('', !0),
                                    ]),
                                    r('a', { class: 'lpHref lpGetStarted', onClick: h }, 'Skip registration'),
                                ]),
                            ],
                            32,
                        )
                    );
                };
            },
        },
    );
export { $ as _ };
