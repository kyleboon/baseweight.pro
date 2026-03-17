import { _ as l } from './T9tIK9NT.js';
import { _ as d } from './DXkiCk90.js';
import { _ as u } from './D-Mmche4.js';
import { _ as p } from './CHnPISrF.js';
import { _ as f } from './COR29gkO.js';
import { c as g, b as e, w as s, q as h, o as b, a as n, d as x, m as k } from './BSiOiLzB.js';
import './DXNVRMz3.js';
const N = { id: 'signinContainer' },
    w = { class: 'lpModalHeader' },
    F = Object.assign(
        { name: 'Signin' },
        {
            __name: 'signin',
            setup(y) {
                const t = h(),
                    a = k(() =>
                        t.path.indexOf('/reset-password') > -1 || t.path.indexOf('/forgot-username') > -1
                            ? 'An email has been sent to the address associated with your account. Note: emails to yahoo.com addresses are currently being blocked. Please reach out to info@lighterpack.com for assistance if you do not receive your email.'
                            : '',
                    );
                return (v, o) => {
                    const r = l,
                        i = d,
                        c = u,
                        m = p,
                        _ = f;
                    return (
                        b(),
                        g('div', N, [
                            e(
                                c,
                                { id: 'signin', shown: !0, blackout: !0 },
                                {
                                    default: s(() => [
                                        n('div', w, [
                                            o[1] || (o[1] = n('h2', null, 'Sign in', -1)),
                                            e(
                                                r,
                                                { to: '/register', class: 'lpHref' },
                                                {
                                                    default: s(() => [
                                                        ...(o[0] || (o[0] = [x(' Need to register? ', -1)])),
                                                    ]),
                                                    _: 1,
                                                },
                                            ),
                                        ]),
                                        e(i, { message: a.value }, null, 8, ['message']),
                                    ]),
                                    _: 1,
                                },
                            ),
                            e(m),
                            e(_),
                        ])
                    );
                };
            },
        },
    );
export { F as default };
