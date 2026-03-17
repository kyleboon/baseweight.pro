import { o as n, c as a, F as i, r as u, t as f, j as l, m } from './BSiOiLzB.js';
const p = { key: 0, class: 'lpError' },
    y = Object.assign(
        { name: 'Errors' },
        {
            __name: 'Errors',
            props: { errors: { type: [Array, Object, String], default: null } },
            setup(o) {
                const c = o,
                    t = m(() => {
                        let e = c.errors;
                        if (!e) return [];
                        if (typeof e == 'string') return [{ message: e }];
                        if (typeof e == 'object' && !(e instanceof Array) && e.message) return [e];
                        if (
                            (typeof e == 'object' && e.errors && e.errors instanceof Array && (e = e.errors),
                            typeof e == 'object' && e instanceof Array)
                        ) {
                            if (e.length === 0) return e;
                            const s = e
                                .map((r) =>
                                    typeof r == 'string' ? { message: r } : typeof r == 'object' && r.message ? r : !1,
                                )
                                .filter((r) => !!r.message);
                            if (s.length) return s;
                        }
                        return [{ message: 'An unknown error occurred.' }];
                    });
                return (e, s) =>
                    t.value && t.value.length
                        ? (n(),
                          a('ul', p, [
                              (n(!0),
                              a(
                                  i,
                                  null,
                                  u(t.value, (r) => (n(), a('li', { key: r.message }, f(r.message), 1))),
                                  128,
                              )),
                          ]))
                        : l('', !0);
            },
        },
    );
export { y as _ };
