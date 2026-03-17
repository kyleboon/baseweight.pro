import { o as s, c as t, D as o, k as a, F as c, r as _, t as p, j as i } from './BSiOiLzB.js';
const m = { class: 'lpSpinner' },
    A = Object.assign(
        { name: 'Spinner' },
        {
            __name: 'Spinner',
            setup(l) {
                return (e, n) => (s(), t('div', m));
            },
        },
    ),
    u = { key: 0, class: 'lpGlobalAlerts' },
    h = Object.assign(
        { name: 'GlobalAlerts' },
        {
            __name: 'GlobalAlerts',
            setup(l) {
                const e = o();
                return (n, g) =>
                    a(e).globalAlerts && a(e).globalAlerts.length
                        ? (s(),
                          t('ul', u, [
                              (s(!0),
                              t(
                                  c,
                                  null,
                                  _(
                                      a(e).globalAlerts,
                                      (r) => (
                                          s(),
                                          t('li', { key: r.message, class: 'lpGlobalAlert' }, p(r.message), 1)
                                      ),
                                  ),
                                  128,
                              )),
                          ]))
                        : i('', !0);
            },
        },
    );
export { h as _, A as a };
