import { G as f, P as p, o as t, c as n, b as s, w as d, Q as y, j as i, W as r, n as h } from './BSiOiLzB.js';
const k = { class: 'lpModalContainer' },
    w = ['id'],
    M = Object.assign(
        { name: 'Modal' },
        {
            __name: 'Modal',
            props: {
                id: { type: String, default: null },
                shown: { type: Boolean, required: !0 },
                blackout: { type: Boolean, default: !1 },
                transparentOverlay: { type: Boolean, default: !1 },
            },
            emits: ['hide'],
            setup(e, { emit: c }) {
                const u = e,
                    m = c;
                function o() {
                    m('hide');
                }
                function l(a) {
                    u.shown && a.keyCode === 27 && o();
                }
                return (
                    f(() => window.addEventListener('keyup', l)),
                    p(() => window.removeEventListener('keyup', l)),
                    (a, v) => (
                        t(),
                        n('div', k, [
                            s(
                                r,
                                { name: 'lpModal' },
                                {
                                    default: d(() => [
                                        e.shown
                                            ? (t(),
                                              n(
                                                  'div',
                                                  { key: 0, id: e.id, class: 'lpModal' },
                                                  [y(a.$slots, 'default')],
                                                  8,
                                                  w,
                                              ))
                                            : i('', !0),
                                    ]),
                                    _: 3,
                                },
                            ),
                            s(
                                r,
                                { name: 'lpModal' },
                                {
                                    default: d(() => [
                                        e.shown
                                            ? (t(),
                                              n(
                                                  'div',
                                                  {
                                                      key: 0,
                                                      class: h({
                                                          lpModalOverlay: !0,
                                                          lpBlackout: e.blackout,
                                                          lpTransparent: e.transparentOverlay,
                                                      }),
                                                      onClick: o,
                                                  },
                                                  null,
                                                  2,
                                              ))
                                            : i('', !0),
                                    ]),
                                    _: 1,
                                },
                            ),
                        ])
                    )
                );
            },
        },
    );
export { M as _ };
