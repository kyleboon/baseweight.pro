import { _ as d } from './T9tIK9NT.js';
import { _ as g } from './CPlW2tBH.js';
import { _ as f } from './D-Mmche4.js';
import { _ as k } from './CHnPISrF.js';
import { _ as x } from './COR29gkO.js';
import { D as b, c as n, b as t, w as r, o as a, a as e, d as s, j as v, m as N } from './BSiOiLzB.js';
import './DXNVRMz3.js';
const w = { id: 'registerContainer' },
    y = { class: 'lpModalHeader' },
    V = { key: 0, class: 'lpWarning' },
    R = Object.assign(
        { name: 'Register' },
        {
            __name: 'register',
            setup($) {
                const i = b(),
                    _ = N(() => i.saveType === 'local');
                return (B, o) => {
                    const c = d,
                        m = g,
                        l = f,
                        p = k,
                        u = x;
                    return (
                        a(),
                        n('div', w, [
                            t(
                                l,
                                { id: 'register', shown: !0, blackout: !0 },
                                {
                                    default: r(() => [
                                        e('div', y, [
                                            o[1] || (o[1] = e('h2', null, 'Register an account', -1)),
                                            t(
                                                c,
                                                { to: '/signin', class: 'lpHref' },
                                                {
                                                    default: r(() => [
                                                        ...(o[0] || (o[0] = [s(' Already registered? ', -1)])),
                                                    ]),
                                                    _: 1,
                                                },
                                            ),
                                        ]),
                                        _.value
                                            ? (a(),
                                              n('p', V, [
                                                  ...(o[2] ||
                                                      (o[2] = [
                                                          e('strong', null, 'Note:', -1),
                                                          s(' Your existing data on your computer ', -1),
                                                          e('strong', null, 'will', -1),
                                                          s(' be saved to your new account. ', -1),
                                                      ])),
                                              ]))
                                            : v('', !0),
                                        t(m),
                                    ]),
                                    _: 1,
                                },
                            ),
                            t(p),
                            t(u),
                        ])
                    );
                };
            },
        },
    );
export { R as default };
