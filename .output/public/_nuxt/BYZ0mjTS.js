import {
    S as L,
    o as c,
    c as u,
    F as E,
    r as T,
    y as N,
    n as V,
    a as v,
    t as d,
    b as X,
    w as F,
    j as W,
    W as z,
    C as P,
    m as U,
    U as p,
    s as S,
} from './BSiOiLzB.js';
const Y = ['d', 'fill', 'onMouseenter', 'onClick'],
    Z = { key: 0 },
    G = ['d', 'fill', 'onMouseenter'],
    H = { key: 0, class: 'lp-center-label' },
    J = { x: '130', y: '123', 'text-anchor': 'middle', class: 'lp-center-name' },
    K = { x: '130', y: '140', 'text-anchor': 'middle', class: 'lp-center-weight' },
    M = 130,
    _ = 130,
    Q = 70,
    R = 120,
    tt = 25,
    et = 65,
    ot = 70,
    nt = 120,
    lt = Object.assign(
        { name: 'DonutChart' },
        {
            __name: 'DonutChart',
            props: {
                categories: { type: Array, default: null },
                totalWeight: { type: Number, default: 0 },
                library: { type: Object, default: null },
            },
            emits: ['category-hover'],
            setup(B, { emit: D }) {
                const s = B,
                    b = D;
                function w(e, o, t, n) {
                    const a = n - t >= Math.PI * 2 ? t + Math.PI * 2 - 1e-4 : n,
                        h = M + o * Math.cos(t),
                        i = _ + o * Math.sin(t),
                        r = M + o * Math.cos(a),
                        g = _ + o * Math.sin(a),
                        m = M + e * Math.cos(a),
                        y = _ + e * Math.sin(a),
                        $ = M + e * Math.cos(t),
                        C = _ + e * Math.sin(t),
                        k = a - t > Math.PI ? 1 : 0;
                    return `M ${h} ${i} A ${o} ${o} 0 ${k} 1 ${r} ${g} L ${m} ${y} A ${e} ${e} 0 ${k} 0 ${$} ${C} Z`;
                }
                const l = P(null),
                    f = P(null),
                    O = U(() => {
                        if (!s.totalWeight) return [];
                        const e = l.value ? tt : Q,
                            o = l.value ? et : R;
                        let t = -Math.PI / 2;
                        return s.categories
                            .filter((n) => n.subtotalWeight > 0)
                            .map((n, a) => {
                                const h = n.color || p.getColor(a),
                                    i = p.rgbToString(h),
                                    r = (n.subtotalWeight / s.totalWeight) * 2 * Math.PI,
                                    g = w(e, o, t, t + r),
                                    m = `${S.MgToWeight(n.subtotalWeight, s.library.totalUnit)} ${s.library.totalUnit}`,
                                    y = { id: n.id, fill: i, path: g, name: n.name, weight: m, catColor: h };
                                return ((t += r), y);
                            });
                    }),
                    I = U(() => {
                        if (!l.value) return [];
                        const e = s.categories.findIndex((a) => a.id === l.value),
                            o = s.library.getCategoryById(l.value);
                        if (!o || !o.subtotalWeight) return [];
                        const t = o.color || p.getColor(e);
                        let n = -Math.PI / 2;
                        return o.categoryItems
                            .map((a, h) => {
                                const i = s.library.getItemById(a.itemId);
                                if (!i || !i.weight) return null;
                                const r = i.weight * a.qty,
                                    g = (r / o.subtotalWeight) * 2 * Math.PI,
                                    m = p.rgbToString(p.getColor(h, t)),
                                    y = w(ot, nt, n, n + g),
                                    $ = a.qty > 1 ? `${i.name} ×${a.qty}` : i.name,
                                    C = `${S.MgToWeight(r, s.library.totalUnit)} ${s.library.totalUnit}`;
                                return ((n += g), { fill: m, path: y, name: $, weight: C });
                            })
                            .filter(Boolean);
                    });
                L(
                    () => s.categories,
                    (e) => {
                        l.value && !e.find((o) => o.id === l.value) && (l.value = null);
                    },
                );
                function x(e) {
                    ((f.value = e), b('category-hover', e.id ?? null));
                }
                function A() {
                    ((f.value = null), b('category-hover', null));
                }
                function j(e) {
                    l.value = l.value === e.id ? null : e.id;
                }
                function q(e, o = 18) {
                    return e.length > o ? `${e.slice(0, o - 1)}…` : e;
                }
                return (e, o) => (
                    c(),
                    u(
                        'svg',
                        {
                            class: 'lp-chart',
                            viewBox: '0 0 260 260',
                            width: '260',
                            height: '260',
                            onMouseleave: A,
                            onClick: o[0] || (o[0] = N((t) => (l.value = null), ['self'])),
                        },
                        [
                            (c(!0),
                            u(
                                E,
                                null,
                                T(
                                    O.value,
                                    (t) => (
                                        c(),
                                        u(
                                            'path',
                                            {
                                                key: t.id,
                                                d: t.path,
                                                fill: t.fill,
                                                stroke: '#f5f5f5',
                                                'stroke-width': '2',
                                                class: V(['lp-donut-slice', { 'is-expanded': l.value === t.id }]),
                                                onMouseenter: (n) => x(t),
                                                onClick: N((n) => j(t), ['stop']),
                                            },
                                            [v('title', null, d(t.name) + ': ' + d(t.weight), 1)],
                                            42,
                                            Y,
                                        )
                                    ),
                                ),
                                128,
                            )),
                            X(
                                z,
                                { name: 'lp-ring' },
                                {
                                    default: F(() => [
                                        l.value && I.value.length
                                            ? (c(),
                                              u('g', Z, [
                                                  (c(!0),
                                                  u(
                                                      E,
                                                      null,
                                                      T(
                                                          I.value,
                                                          (t, n) => (
                                                              c(),
                                                              u(
                                                                  'path',
                                                                  {
                                                                      key: `item-${n}`,
                                                                      d: t.path,
                                                                      fill: t.fill,
                                                                      stroke: '#f5f5f5',
                                                                      'stroke-width': '1',
                                                                      class: 'lp-donut-slice',
                                                                      onMouseenter: (a) => x(t),
                                                                  },
                                                                  [v('title', null, d(t.name) + ': ' + d(t.weight), 1)],
                                                                  40,
                                                                  G,
                                                              )
                                                          ),
                                                      ),
                                                      128,
                                                  )),
                                              ]))
                                            : W('', !0),
                                    ]),
                                    _: 1,
                                },
                            ),
                            f.value
                                ? (c(),
                                  u('g', H, [v('text', J, d(q(f.value.name)), 1), v('text', K, d(f.value.weight), 1)]))
                                : W('', !0),
                        ],
                        32,
                    )
                );
            },
        },
    );
export { lt as _ };
