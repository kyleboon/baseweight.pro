import {
    c as a,
    a as s,
    z as y,
    A as f,
    y as C,
    F as h,
    r as T,
    j as m,
    t as p,
    d as N,
    C as r,
    m as x,
    B as v,
    o as l,
} from './BSiOiLzB.js';
const O = { id: 'lp-moderation' },
    P = { key: 0, class: 'lp-moderation-search-results' },
    j = ['onClick'],
    V = { key: 1, class: 'lp-moderation-user-to-inspect' },
    $ = Object.assign(
        { name: 'Admin' },
        {
            __name: 'moderation',
            setup(B) {
                const u = r(''),
                    d = r(null),
                    t = r(null),
                    c = r(null),
                    i = r(null),
                    g = x(() => !!d.value);
                function b() {
                    v(`/api/moderation/search?q=${u.value}`, { method: 'GET', credentials: 'same-origin' })
                        .then((n) => {
                            d.value = n.results;
                        })
                        .catch((n) => {
                            console.log(n);
                        });
                }
                function w(n) {
                    ((t.value = n), (c.value = JSON.stringify(t.value.library)), (i.value = null));
                }
                function k(n) {
                    v('/api/moderation/clear-session', {
                        method: 'POST',
                        credentials: 'same-origin',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ username: n.username }),
                    })
                        .then((e) => {
                            console.log('clear session success');
                        })
                        .catch((e) => {
                            console.log(e);
                        });
                }
                function S(n) {
                    v('/api/moderation/reset-password', {
                        method: 'POST',
                        credentials: 'same-origin',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ username: n.username }),
                    })
                        .then((e) => {
                            i.value = e.newPassword;
                        })
                        .catch((e) => {
                            console.log(e);
                        });
                }
                return (n, e) => (
                    l(),
                    a('div', O, [
                        e[6] || (e[6] = s('h1', null, 'Admin panel', -1)),
                        s(
                            'form',
                            { onSubmit: C(b, ['prevent']) },
                            [
                                y(
                                    s(
                                        'input',
                                        {
                                            'onUpdate:modelValue': e[0] || (e[0] = (o) => (u.value = o)),
                                            type: 'text',
                                            placeholder: 'Search for a user...',
                                        },
                                        null,
                                        512,
                                    ),
                                    [[f, u.value]],
                                ),
                                e[4] || (e[4] = s('button', null, 'Search', -1)),
                            ],
                            32,
                        ),
                        g.value
                            ? (l(),
                              a('ul', P, [
                                  (l(!0),
                                  a(
                                      h,
                                      null,
                                      T(
                                          d.value,
                                          (o) => (
                                              l(),
                                              a('li', { key: o.username, onClick: (J) => w(o) }, p(o.username), 9, j)
                                          ),
                                      ),
                                      128,
                                  )),
                              ]))
                            : m('', !0),
                        t.value
                            ? (l(),
                              a('div', V, [
                                  s('h2', null, p(t.value.username), 1),
                                  s('section', null, [
                                      s('button', { onClick: e[1] || (e[1] = (o) => k(t.value)) }, 'Clear session'),
                                      s('button', { onClick: e[2] || (e[2] = (o) => S(t.value)) }, 'Reset password'),
                                      i.value
                                          ? (l(),
                                            a(
                                                h,
                                                { key: 0 },
                                                [
                                                    e[5] || (e[5] = s('strong', null, 'New Password:', -1)),
                                                    N(' ' + p(i.value), 1),
                                                ],
                                                64,
                                            ))
                                          : m('', !0),
                                  ]),
                                  s('section', null, [
                                      y(
                                          s(
                                              'textarea',
                                              {
                                                  id: 'lp-moderation-user-library-json',
                                                  'onUpdate:modelValue': e[3] || (e[3] = (o) => (c.value = o)),
                                              },
                                              null,
                                              512,
                                          ),
                                          [[f, c.value]],
                                      ),
                                  ]),
                              ]))
                            : m('', !0),
                    ])
                );
            },
        },
    );
export { $ as default };
