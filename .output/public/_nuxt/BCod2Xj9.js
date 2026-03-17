import {
    D as Y,
    N as et,
    O as Mt,
    o as v,
    c as y,
    a as i,
    z as B,
    A as Z,
    F as me,
    r as ye,
    t as D,
    j as x,
    C as E,
    s as _e,
    m as C,
    G as Ht,
    P as wn,
    J as Re,
    Q as pt,
    n as Q,
    K as ee,
    w as W,
    b as L,
    d as U,
    B as bt,
    R as ft,
    I as Wt,
    S as Be,
    T as Le,
    v as _n,
    U as Ye,
    V as Cn,
    y as wt,
    H as Sn,
} from './BSiOiLzB.js';
import { _ as In } from './T9tIK9NT.js';
import { _ as Dn } from './BYZ0mjTS.js';
import { a as En, _ as kn } from './COR29gkO.js';
import { _ as Ie } from './D-Mmche4.js';
import { _ as tn } from './DXNVRMz3.js';
function Tn(o, e, n) {
    return (
        (e = On(e)) in o
            ? Object.defineProperty(o, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (o[e] = n),
        o
    );
}
function Se() {
    return (
        (Se = Object.assign
            ? Object.assign.bind()
            : function (o) {
                  for (var e = 1; e < arguments.length; e++) {
                      var n = arguments[e];
                      for (var t in n) ({}).hasOwnProperty.call(n, t) && (o[t] = n[t]);
                  }
                  return o;
              }),
        Se.apply(null, arguments)
    );
}
function Xt(o, e) {
    var n = Object.keys(o);
    if (Object.getOwnPropertySymbols) {
        var t = Object.getOwnPropertySymbols(o);
        (e &&
            (t = t.filter(function (l) {
                return Object.getOwnPropertyDescriptor(o, l).enumerable;
            })),
            n.push.apply(n, t));
    }
    return n;
}
function be(o) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e] != null ? arguments[e] : {};
        e % 2
            ? Xt(Object(n), !0).forEach(function (t) {
                  Tn(o, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(n))
              : Xt(Object(n)).forEach(function (t) {
                    Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return o;
}
function $n(o, e) {
    if (o == null) return {};
    var n,
        t,
        l = xn(o, e);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(o);
        for (t = 0; t < s.length; t++)
            ((n = s[t]), e.indexOf(n) === -1 && {}.propertyIsEnumerable.call(o, n) && (l[n] = o[n]));
    }
    return l;
}
function xn(o, e) {
    if (o == null) return {};
    var n = {};
    for (var t in o)
        if ({}.hasOwnProperty.call(o, t)) {
            if (e.indexOf(t) !== -1) continue;
            n[t] = o[t];
        }
    return n;
}
function Pn(o, e) {
    if (typeof o != 'object' || !o) return o;
    var n = o[Symbol.toPrimitive];
    if (n !== void 0) {
        var t = n.call(o, e);
        if (typeof t != 'object') return t;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (e === 'string' ? String : Number)(o);
}
function On(o) {
    var e = Pn(o, 'string');
    return typeof e == 'symbol' ? e : e + '';
}
function Nt(o) {
    '@babel/helpers - typeof';
    return (
        (Nt =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (e) {
                      return typeof e;
                  }
                : function (e) {
                      return e && typeof Symbol == 'function' && e.constructor === Symbol && e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                  }),
        Nt(o)
    );
}
var Nn = '1.15.7';
function Ce(o) {
    if (typeof window < 'u' && window.navigator) return !!navigator.userAgent.match(o);
}
var De = Ce(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
    tt = Ce(/Edge/i),
    zt = Ce(/firefox/i),
    qe = Ce(/safari/i) && !Ce(/chrome/i) && !Ce(/android/i),
    Rt = Ce(/iP(ad|od|hone)/i),
    nn = Ce(/chrome/i) && Ce(/android/i),
    on = { capture: !1, passive: !1 };
function $(o, e, n) {
    o.addEventListener(e, n, !De && on);
}
function T(o, e, n) {
    o.removeEventListener(e, n, !De && on);
}
function mt(o, e) {
    if (e) {
        if ((e[0] === '>' && (e = e.substring(1)), o))
            try {
                if (o.matches) return o.matches(e);
                if (o.msMatchesSelector) return o.msMatchesSelector(e);
                if (o.webkitMatchesSelector) return o.webkitMatchesSelector(e);
            } catch {
                return !1;
            }
        return !1;
    }
}
function ln(o) {
    return o.host && o !== document && o.host.nodeType && o.host !== o ? o.host : o.parentNode;
}
function fe(o, e, n, t) {
    if (o) {
        n = n || document;
        do {
            if ((e != null && (e[0] === '>' ? o.parentNode === n && mt(o, e) : mt(o, e))) || (t && o === n)) return o;
            if (o === n) break;
        } while ((o = ln(o)));
    }
    return null;
}
var Gt = /\s+/g;
function ae(o, e, n) {
    if (o && e)
        if (o.classList) o.classList[n ? 'add' : 'remove'](e);
        else {
            var t = (' ' + o.className + ' ').replace(Gt, ' ').replace(' ' + e + ' ', ' ');
            o.className = (t + (n ? ' ' + e : '')).replace(Gt, ' ');
        }
}
function _(o, e, n) {
    var t = o && o.style;
    if (t) {
        if (n === void 0)
            return (
                document.defaultView && document.defaultView.getComputedStyle
                    ? (n = document.defaultView.getComputedStyle(o, ''))
                    : o.currentStyle && (n = o.currentStyle),
                e === void 0 ? n : n[e]
            );
        (!(e in t) && e.indexOf('webkit') === -1 && (e = '-webkit-' + e),
            (t[e] = n + (typeof n == 'string' ? '' : 'px')));
    }
}
function We(o, e) {
    var n = '';
    if (typeof o == 'string') n = o;
    else
        do {
            var t = _(o, 'transform');
            t && t !== 'none' && (n = t + ' ' + n);
        } while (!e && (o = o.parentNode));
    var l = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    return l && new l(n);
}
function an(o, e, n) {
    if (o) {
        var t = o.getElementsByTagName(e),
            l = 0,
            s = t.length;
        if (n) for (; l < s; l++) n(t[l], l);
        return t;
    }
    return [];
}
function ve() {
    var o = document.scrollingElement;
    return o || document.documentElement;
}
function V(o, e, n, t, l) {
    if (!(!o.getBoundingClientRect && o !== window)) {
        var s, a, r, u, f, m, c;
        if (
            (o !== window && o.parentNode && o !== ve()
                ? ((s = o.getBoundingClientRect()),
                  (a = s.top),
                  (r = s.left),
                  (u = s.bottom),
                  (f = s.right),
                  (m = s.height),
                  (c = s.width))
                : ((a = 0),
                  (r = 0),
                  (u = window.innerHeight),
                  (f = window.innerWidth),
                  (m = window.innerHeight),
                  (c = window.innerWidth)),
            (e || n) && o !== window && ((l = l || o.parentNode), !De))
        )
            do
                if (
                    l &&
                    l.getBoundingClientRect &&
                    (_(l, 'transform') !== 'none' || (n && _(l, 'position') !== 'static'))
                ) {
                    var p = l.getBoundingClientRect();
                    ((a -= p.top + parseInt(_(l, 'border-top-width'))),
                        (r -= p.left + parseInt(_(l, 'border-left-width'))),
                        (u = a + s.height),
                        (f = r + s.width));
                    break;
                }
            while ((l = l.parentNode));
        if (t && o !== window) {
            var d = We(l || o),
                g = d && d.a,
                w = d && d.d;
            d && ((a /= w), (r /= g), (c /= g), (m /= w), (u = a + m), (f = r + c));
        }
        return { top: a, left: r, bottom: u, right: f, width: c, height: m };
    }
}
function qt(o, e, n) {
    for (var t = Pe(o, !0), l = V(o)[e]; t; ) {
        var s = V(t)[n],
            a = void 0;
        if (((a = l >= s), !a)) return t;
        if (t === ve()) break;
        t = Pe(t, !1);
    }
    return !1;
}
function je(o, e, n, t) {
    for (var l = 0, s = 0, a = o.children; s < a.length; ) {
        if (
            a[s].style.display !== 'none' &&
            a[s] !== b.ghost &&
            (t || a[s] !== b.dragged) &&
            fe(a[s], n.draggable, o, !1)
        ) {
            if (l === e) return a[s];
            l++;
        }
        s++;
    }
    return null;
}
function Bt(o, e) {
    for (var n = o.lastElementChild; n && (n === b.ghost || _(n, 'display') === 'none' || (e && !mt(n, e))); )
        n = n.previousElementSibling;
    return n || null;
}
function ue(o, e) {
    var n = 0;
    if (!o || !o.parentNode) return -1;
    for (; (o = o.previousElementSibling); )
        o.nodeName.toUpperCase() !== 'TEMPLATE' && o !== b.clone && (!e || mt(o, e)) && n++;
    return n;
}
function Qt(o) {
    var e = 0,
        n = 0,
        t = ve();
    if (o)
        do {
            var l = We(o),
                s = l.a,
                a = l.d;
            ((e += o.scrollLeft * s), (n += o.scrollTop * a));
        } while (o !== t && (o = o.parentNode));
    return [e, n];
}
function An(o, e) {
    for (var n in o)
        if (o.hasOwnProperty(n)) {
            for (var t in e) if (e.hasOwnProperty(t) && e[t] === o[n][t]) return Number(n);
        }
    return -1;
}
function Pe(o, e) {
    if (!o || !o.getBoundingClientRect) return ve();
    var n = o,
        t = !1;
    do
        if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
            var l = _(n);
            if (
                (n.clientWidth < n.scrollWidth && (l.overflowX == 'auto' || l.overflowX == 'scroll')) ||
                (n.clientHeight < n.scrollHeight && (l.overflowY == 'auto' || l.overflowY == 'scroll'))
            ) {
                if (!n.getBoundingClientRect || n === document.body) return ve();
                if (t || e) return n;
                t = !0;
            }
        }
    while ((n = n.parentNode));
    return ve();
}
function Ln(o, e) {
    if (o && e) for (var n in e) e.hasOwnProperty(n) && (o[n] = e[n]);
    return o;
}
function It(o, e) {
    return (
        Math.round(o.top) === Math.round(e.top) &&
        Math.round(o.left) === Math.round(e.left) &&
        Math.round(o.height) === Math.round(e.height) &&
        Math.round(o.width) === Math.round(e.width)
    );
}
var Qe;
function sn(o, e) {
    return function () {
        if (!Qe) {
            var n = arguments,
                t = this;
            (n.length === 1 ? o.call(t, n[0]) : o.apply(t, n),
                (Qe = setTimeout(function () {
                    Qe = void 0;
                }, e)));
        }
    };
}
function Un() {
    (clearTimeout(Qe), (Qe = void 0));
}
function rn(o, e, n) {
    ((o.scrollLeft += e), (o.scrollTop += n));
}
function un(o) {
    var e = window.Polymer,
        n = window.jQuery || window.Zepto;
    return e && e.dom ? e.dom(o).cloneNode(!0) : n ? n(o).clone(!0)[0] : o.cloneNode(!0);
}
function dn(o, e, n) {
    var t = {};
    return (
        Array.from(o.children).forEach(function (l) {
            var s, a, r, u;
            if (!(!fe(l, e.draggable, o, !1) || l.animated || l === n)) {
                var f = V(l);
                ((t.left = Math.min((s = t.left) !== null && s !== void 0 ? s : 1 / 0, f.left)),
                    (t.top = Math.min((a = t.top) !== null && a !== void 0 ? a : 1 / 0, f.top)),
                    (t.right = Math.max((r = t.right) !== null && r !== void 0 ? r : -1 / 0, f.right)),
                    (t.bottom = Math.max((u = t.bottom) !== null && u !== void 0 ? u : -1 / 0, f.bottom)));
            }
        }),
        (t.width = t.right - t.left),
        (t.height = t.bottom - t.top),
        (t.x = t.left),
        (t.y = t.top),
        t
    );
}
var ne = 'Sortable' + new Date().getTime();
function Fn() {
    var o = [],
        e;
    return {
        captureAnimationState: function () {
            if (((o = []), !!this.options.animation)) {
                var t = [].slice.call(this.el.children);
                t.forEach(function (l) {
                    if (!(_(l, 'display') === 'none' || l === b.ghost)) {
                        o.push({ target: l, rect: V(l) });
                        var s = be({}, o[o.length - 1].rect);
                        if (l.thisAnimationDuration) {
                            var a = We(l, !0);
                            a && ((s.top -= a.f), (s.left -= a.e));
                        }
                        l.fromRect = s;
                    }
                });
            }
        },
        addAnimationState: function (t) {
            o.push(t);
        },
        removeAnimationState: function (t) {
            o.splice(An(o, { target: t }), 1);
        },
        animateAll: function (t) {
            var l = this;
            if (!this.options.animation) {
                (clearTimeout(e), typeof t == 'function' && t());
                return;
            }
            var s = !1,
                a = 0;
            (o.forEach(function (r) {
                var u = 0,
                    f = r.target,
                    m = f.fromRect,
                    c = V(f),
                    p = f.prevFromRect,
                    d = f.prevToRect,
                    g = r.rect,
                    w = We(f, !0);
                (w && ((c.top -= w.f), (c.left -= w.e)),
                    (f.toRect = c),
                    f.thisAnimationDuration &&
                        It(p, c) &&
                        !It(m, c) &&
                        (g.top - c.top) / (g.left - c.left) === (m.top - c.top) / (m.left - c.left) &&
                        (u = Hn(g, p, d, l.options)),
                    It(c, m) ||
                        ((f.prevFromRect = m),
                        (f.prevToRect = c),
                        u || (u = l.options.animation),
                        l.animate(f, g, c, u)),
                    u &&
                        ((s = !0),
                        (a = Math.max(a, u)),
                        clearTimeout(f.animationResetTimer),
                        (f.animationResetTimer = setTimeout(function () {
                            ((f.animationTime = 0),
                                (f.prevFromRect = null),
                                (f.fromRect = null),
                                (f.prevToRect = null),
                                (f.thisAnimationDuration = null));
                        }, u)),
                        (f.thisAnimationDuration = u)));
            }),
                clearTimeout(e),
                s
                    ? (e = setTimeout(function () {
                          typeof t == 'function' && t();
                      }, a))
                    : typeof t == 'function' && t(),
                (o = []));
        },
        animate: function (t, l, s, a) {
            if (a) {
                (_(t, 'transition', ''), _(t, 'transform', ''));
                var r = We(this.el),
                    u = r && r.a,
                    f = r && r.d,
                    m = (l.left - s.left) / (u || 1),
                    c = (l.top - s.top) / (f || 1);
                ((t.animatingX = !!m),
                    (t.animatingY = !!c),
                    _(t, 'transform', 'translate3d(' + m + 'px,' + c + 'px,0)'),
                    (this.forRepaintDummy = Mn(t)),
                    _(
                        t,
                        'transition',
                        'transform ' + a + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''),
                    ),
                    _(t, 'transform', 'translate3d(0,0,0)'),
                    typeof t.animated == 'number' && clearTimeout(t.animated),
                    (t.animated = setTimeout(function () {
                        (_(t, 'transition', ''),
                            _(t, 'transform', ''),
                            (t.animated = !1),
                            (t.animatingX = !1),
                            (t.animatingY = !1));
                    }, a)));
            }
        },
    };
}
function Mn(o) {
    return o.offsetWidth;
}
function Hn(o, e, n, t) {
    return (
        (Math.sqrt(Math.pow(e.top - o.top, 2) + Math.pow(e.left - o.left, 2)) /
            Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2))) *
        t.animation
    );
}
var Ue = [],
    Dt = { initializeByDefault: !0 },
    nt = {
        mount: function (e) {
            for (var n in Dt) Dt.hasOwnProperty(n) && !(n in e) && (e[n] = Dt[n]);
            (Ue.forEach(function (t) {
                if (t.pluginName === e.pluginName)
                    throw 'Sortable: Cannot mount plugin '.concat(e.pluginName, ' more than once');
            }),
                Ue.push(e));
        },
        pluginEvent: function (e, n, t) {
            var l = this;
            ((this.eventCanceled = !1),
                (t.cancel = function () {
                    l.eventCanceled = !0;
                }));
            var s = e + 'Global';
            Ue.forEach(function (a) {
                n[a.pluginName] &&
                    (n[a.pluginName][s] && n[a.pluginName][s](be({ sortable: n }, t)),
                    n.options[a.pluginName] && n[a.pluginName][e] && n[a.pluginName][e](be({ sortable: n }, t)));
            });
        },
        initializePlugins: function (e, n, t, l) {
            Ue.forEach(function (r) {
                var u = r.pluginName;
                if (!(!e.options[u] && !r.initializeByDefault)) {
                    var f = new r(e, n, e.options);
                    ((f.sortable = e), (f.options = e.options), (e[u] = f), Se(t, f.defaults));
                }
            });
            for (var s in e.options)
                if (e.options.hasOwnProperty(s)) {
                    var a = this.modifyOption(e, s, e.options[s]);
                    typeof a < 'u' && (e.options[s] = a);
                }
        },
        getEventProperties: function (e, n) {
            var t = {};
            return (
                Ue.forEach(function (l) {
                    typeof l.eventProperties == 'function' && Se(t, l.eventProperties.call(n[l.pluginName], e));
                }),
                t
            );
        },
        modifyOption: function (e, n, t) {
            var l;
            return (
                Ue.forEach(function (s) {
                    e[s.pluginName] &&
                        s.optionListeners &&
                        typeof s.optionListeners[n] == 'function' &&
                        (l = s.optionListeners[n].call(e[s.pluginName], t));
                }),
                l
            );
        },
    };
function Wn(o) {
    var e = o.sortable,
        n = o.rootEl,
        t = o.name,
        l = o.targetEl,
        s = o.cloneEl,
        a = o.toEl,
        r = o.fromEl,
        u = o.oldIndex,
        f = o.newIndex,
        m = o.oldDraggableIndex,
        c = o.newDraggableIndex,
        p = o.originalEvent,
        d = o.putSortable,
        g = o.extraEventProperties;
    if (((e = e || (n && n[ne])), !!e)) {
        var w,
            I = e.options,
            P = 'on' + t.charAt(0).toUpperCase() + t.substr(1);
        (window.CustomEvent && !De && !tt
            ? (w = new CustomEvent(t, { bubbles: !0, cancelable: !0 }))
            : ((w = document.createEvent('Event')), w.initEvent(t, !0, !0)),
            (w.to = a || n),
            (w.from = r || n),
            (w.item = l || n),
            (w.clone = s),
            (w.oldIndex = u),
            (w.newIndex = f),
            (w.oldDraggableIndex = m),
            (w.newDraggableIndex = c),
            (w.originalEvent = p),
            (w.pullMode = d ? d.lastPutMode : void 0));
        var O = be(be({}, g), nt.getEventProperties(t, e));
        for (var A in O) w[A] = O[A];
        (n && n.dispatchEvent(w), I[P] && I[P].call(e, w));
    }
}
var Rn = ['evt'],
    te = function (e, n) {
        var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            l = t.evt,
            s = $n(t, Rn);
        nt.pluginEvent.bind(b)(
            e,
            n,
            be(
                {
                    dragEl: h,
                    parentEl: R,
                    ghostEl: S,
                    rootEl: M,
                    nextEl: Ae,
                    lastDownEl: rt,
                    cloneEl: H,
                    cloneHidden: xe,
                    dragStarted: Xe,
                    putSortable: q,
                    activeSortable: b.active,
                    originalEvent: l,
                    oldIndex: He,
                    oldDraggableIndex: Ke,
                    newIndex: se,
                    newDraggableIndex: $e,
                    hideGhostForTarget: mn,
                    unhideGhostForTarget: gn,
                    cloneNowHidden: function () {
                        xe = !0;
                    },
                    cloneNowShown: function () {
                        xe = !1;
                    },
                    dispatchSortableEvent: function (r) {
                        J({ sortable: n, name: r, originalEvent: l });
                    },
                },
                s,
            ),
        );
    };
function J(o) {
    Wn(
        be(
            {
                putSortable: q,
                cloneEl: H,
                targetEl: h,
                rootEl: M,
                oldIndex: He,
                oldDraggableIndex: Ke,
                newIndex: se,
                newDraggableIndex: $e,
            },
            o,
        ),
    );
}
var h,
    R,
    S,
    M,
    Ae,
    rt,
    H,
    xe,
    He,
    se,
    Ke,
    $e,
    lt,
    q,
    Me = !1,
    gt = !1,
    ht = [],
    Oe,
    pe,
    Et,
    kt,
    Kt,
    Jt,
    Xe,
    Fe,
    Je,
    Ze = !1,
    it = !1,
    ut,
    K,
    Tt = [],
    At = !1,
    vt = [],
    _t = typeof document < 'u',
    at = Rt,
    Zt = tt || De ? 'cssFloat' : 'float',
    Bn = _t && !nn && !Rt && 'draggable' in document.createElement('div'),
    cn = (function () {
        if (_t) {
            if (De) return !1;
            var o = document.createElement('x');
            return ((o.style.cssText = 'pointer-events:auto'), o.style.pointerEvents === 'auto');
        }
    })(),
    pn = function (e, n) {
        var t = _(e),
            l =
                parseInt(t.width) -
                parseInt(t.paddingLeft) -
                parseInt(t.paddingRight) -
                parseInt(t.borderLeftWidth) -
                parseInt(t.borderRightWidth),
            s = je(e, 0, n),
            a = je(e, 1, n),
            r = s && _(s),
            u = a && _(a),
            f = r && parseInt(r.marginLeft) + parseInt(r.marginRight) + V(s).width,
            m = u && parseInt(u.marginLeft) + parseInt(u.marginRight) + V(a).width;
        if (t.display === 'flex')
            return t.flexDirection === 'column' || t.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
        if (t.display === 'grid') return t.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
        if (s && r.float && r.float !== 'none') {
            var c = r.float === 'left' ? 'left' : 'right';
            return a && (u.clear === 'both' || u.clear === c) ? 'vertical' : 'horizontal';
        }
        return s &&
            (r.display === 'block' ||
                r.display === 'flex' ||
                r.display === 'table' ||
                r.display === 'grid' ||
                (f >= l && t[Zt] === 'none') ||
                (a && t[Zt] === 'none' && f + m > l))
            ? 'vertical'
            : 'horizontal';
    },
    jn = function (e, n, t) {
        var l = t ? e.left : e.top,
            s = t ? e.right : e.bottom,
            a = t ? e.width : e.height,
            r = t ? n.left : n.top,
            u = t ? n.right : n.bottom,
            f = t ? n.width : n.height;
        return l === r || s === u || l + a / 2 === r + f / 2;
    },
    Vn = function (e, n) {
        var t;
        return (
            ht.some(function (l) {
                var s = l[ne].options.emptyInsertThreshold;
                if (!(!s || Bt(l))) {
                    var a = V(l),
                        r = e >= a.left - s && e <= a.right + s,
                        u = n >= a.top - s && n <= a.bottom + s;
                    if (r && u) return (t = l);
                }
            }),
            t
        );
    },
    fn = function (e) {
        function n(s, a) {
            return function (r, u, f, m) {
                var c = r.options.group.name && u.options.group.name && r.options.group.name === u.options.group.name;
                if (s == null && (a || c)) return !0;
                if (s == null || s === !1) return !1;
                if (a && s === 'clone') return s;
                if (typeof s == 'function') return n(s(r, u, f, m), a)(r, u, f, m);
                var p = (a ? r : u).options.group.name;
                return s === !0 || (typeof s == 'string' && s === p) || (s.join && s.indexOf(p) > -1);
            };
        }
        var t = {},
            l = e.group;
        ((!l || Nt(l) != 'object') && (l = { name: l }),
            (t.name = l.name),
            (t.checkPull = n(l.pull, !0)),
            (t.checkPut = n(l.put)),
            (t.revertClone = l.revertClone),
            (e.group = t));
    },
    mn = function () {
        !cn && S && _(S, 'display', 'none');
    },
    gn = function () {
        !cn && S && _(S, 'display', '');
    };
_t &&
    !nn &&
    document.addEventListener(
        'click',
        function (o) {
            if (gt)
                return (
                    o.preventDefault(),
                    o.stopPropagation && o.stopPropagation(),
                    o.stopImmediatePropagation && o.stopImmediatePropagation(),
                    (gt = !1),
                    !1
                );
        },
        !0,
    );
var Ne = function (e) {
        if (h) {
            e = e.touches ? e.touches[0] : e;
            var n = Vn(e.clientX, e.clientY);
            if (n) {
                var t = {};
                for (var l in e) e.hasOwnProperty(l) && (t[l] = e[l]);
                ((t.target = t.rootEl = n),
                    (t.preventDefault = void 0),
                    (t.stopPropagation = void 0),
                    n[ne]._onDragOver(t));
            }
        }
    },
    Yn = function (e) {
        h && h.parentNode[ne]._isOutsideThisEl(e.target);
    };
function b(o, e) {
    if (!(o && o.nodeType && o.nodeType === 1))
        throw 'Sortable: `el` must be an HTMLElement, not '.concat({}.toString.call(o));
    ((this.el = o), (this.options = e = Se({}, e)), (o[ne] = this));
    var n = {
        group: null,
        sort: !0,
        disabled: !1,
        store: null,
        handle: null,
        draggable: /^[uo]l$/i.test(o.nodeName) ? '>li' : '>*',
        swapThreshold: 1,
        invertSwap: !1,
        invertedSwapThreshold: null,
        removeCloneOnHide: !0,
        direction: function () {
            return pn(o, this.options);
        },
        ghostClass: 'sortable-ghost',
        chosenClass: 'sortable-chosen',
        dragClass: 'sortable-drag',
        ignore: 'a, img',
        filter: null,
        preventOnFilter: !0,
        animation: 0,
        easing: null,
        setData: function (a, r) {
            a.setData('Text', r.textContent);
        },
        dropBubble: !1,
        dragoverBubble: !1,
        dataIdAttr: 'data-id',
        delay: 0,
        delayOnTouchOnly: !1,
        touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
        forceFallback: !1,
        fallbackClass: 'sortable-fallback',
        fallbackOnBody: !1,
        fallbackTolerance: 0,
        fallbackOffset: { x: 0, y: 0 },
        supportPointer: b.supportPointer !== !1 && 'PointerEvent' in window && (!qe || Rt),
        emptyInsertThreshold: 5,
    };
    nt.initializePlugins(this, o, n);
    for (var t in n) !(t in e) && (e[t] = n[t]);
    fn(e);
    for (var l in this) l.charAt(0) === '_' && typeof this[l] == 'function' && (this[l] = this[l].bind(this));
    ((this.nativeDraggable = e.forceFallback ? !1 : Bn),
        this.nativeDraggable && (this.options.touchStartThreshold = 1),
        e.supportPointer
            ? $(o, 'pointerdown', this._onTapStart)
            : ($(o, 'mousedown', this._onTapStart), $(o, 'touchstart', this._onTapStart)),
        this.nativeDraggable && ($(o, 'dragover', this), $(o, 'dragenter', this)),
        ht.push(this.el),
        e.store && e.store.get && this.sort(e.store.get(this) || []),
        Se(this, Fn()));
}
b.prototype = {
    constructor: b,
    _isOutsideThisEl: function (e) {
        !this.el.contains(e) && e !== this.el && (Fe = null);
    },
    _getDirection: function (e, n) {
        return typeof this.options.direction == 'function'
            ? this.options.direction.call(this, e, n, h)
            : this.options.direction;
    },
    _onTapStart: function (e) {
        if (e.cancelable) {
            var n = this,
                t = this.el,
                l = this.options,
                s = l.preventOnFilter,
                a = e.type,
                r = (e.touches && e.touches[0]) || (e.pointerType && e.pointerType === 'touch' && e),
                u = (r || e).target,
                f = (e.target.shadowRoot && ((e.path && e.path[0]) || (e.composedPath && e.composedPath()[0]))) || u,
                m = l.filter;
            if (
                (Zn(t),
                !h &&
                    !((/mousedown|pointerdown/.test(a) && e.button !== 0) || l.disabled) &&
                    !f.isContentEditable &&
                    !(!this.nativeDraggable && qe && u && u.tagName.toUpperCase() === 'SELECT') &&
                    ((u = fe(u, l.draggable, t, !1)), !(u && u.animated) && rt !== u))
            ) {
                if (((He = ue(u)), (Ke = ue(u, l.draggable)), typeof m == 'function')) {
                    if (m.call(this, e, u, this)) {
                        (J({ sortable: n, rootEl: f, name: 'filter', targetEl: u, toEl: t, fromEl: t }),
                            te('filter', n, { evt: e }),
                            s && e.preventDefault());
                        return;
                    }
                } else if (
                    m &&
                    ((m = m.split(',').some(function (c) {
                        if (((c = fe(f, c.trim(), t, !1)), c))
                            return (
                                J({ sortable: n, rootEl: c, name: 'filter', targetEl: u, fromEl: t, toEl: t }),
                                te('filter', n, { evt: e }),
                                !0
                            );
                    })),
                    m)
                ) {
                    s && e.preventDefault();
                    return;
                }
                (l.handle && !fe(f, l.handle, t, !1)) || this._prepareDragStart(e, r, u);
            }
        }
    },
    _prepareDragStart: function (e, n, t) {
        var l = this,
            s = l.el,
            a = l.options,
            r = s.ownerDocument,
            u;
        if (t && !h && t.parentNode === s) {
            var f = V(t);
            if (
                ((M = s),
                (h = t),
                (R = h.parentNode),
                (Ae = h.nextSibling),
                (rt = t),
                (lt = a.group),
                (b.dragged = h),
                (Oe = { target: h, clientX: (n || e).clientX, clientY: (n || e).clientY }),
                (Kt = Oe.clientX - f.left),
                (Jt = Oe.clientY - f.top),
                (this._lastX = (n || e).clientX),
                (this._lastY = (n || e).clientY),
                (h.style['will-change'] = 'all'),
                (u = function () {
                    if ((te('delayEnded', l, { evt: e }), b.eventCanceled)) {
                        l._onDrop();
                        return;
                    }
                    (l._disableDelayedDragEvents(),
                        !zt && l.nativeDraggable && (h.draggable = !0),
                        l._triggerDragStart(e, n),
                        J({ sortable: l, name: 'choose', originalEvent: e }),
                        ae(h, a.chosenClass, !0));
                }),
                a.ignore.split(',').forEach(function (m) {
                    an(h, m.trim(), $t);
                }),
                $(r, 'dragover', Ne),
                $(r, 'mousemove', Ne),
                $(r, 'touchmove', Ne),
                a.supportPointer
                    ? ($(r, 'pointerup', l._onDrop), !this.nativeDraggable && $(r, 'pointercancel', l._onDrop))
                    : ($(r, 'mouseup', l._onDrop), $(r, 'touchend', l._onDrop), $(r, 'touchcancel', l._onDrop)),
                zt && this.nativeDraggable && ((this.options.touchStartThreshold = 4), (h.draggable = !0)),
                te('delayStart', this, { evt: e }),
                a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(tt || De)))
            ) {
                if (b.eventCanceled) {
                    this._onDrop();
                    return;
                }
                (a.supportPointer
                    ? ($(r, 'pointerup', l._disableDelayedDrag), $(r, 'pointercancel', l._disableDelayedDrag))
                    : ($(r, 'mouseup', l._disableDelayedDrag),
                      $(r, 'touchend', l._disableDelayedDrag),
                      $(r, 'touchcancel', l._disableDelayedDrag)),
                    $(r, 'mousemove', l._delayedDragTouchMoveHandler),
                    $(r, 'touchmove', l._delayedDragTouchMoveHandler),
                    a.supportPointer && $(r, 'pointermove', l._delayedDragTouchMoveHandler),
                    (l._dragStartTimer = setTimeout(u, a.delay)));
            } else u();
        }
    },
    _delayedDragTouchMoveHandler: function (e) {
        var n = e.touches ? e.touches[0] : e;
        Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >=
            Math.floor(this.options.touchStartThreshold / ((this.nativeDraggable && window.devicePixelRatio) || 1)) &&
            this._disableDelayedDrag();
    },
    _disableDelayedDrag: function () {
        (h && $t(h), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents());
    },
    _disableDelayedDragEvents: function () {
        var e = this.el.ownerDocument;
        (T(e, 'mouseup', this._disableDelayedDrag),
            T(e, 'touchend', this._disableDelayedDrag),
            T(e, 'touchcancel', this._disableDelayedDrag),
            T(e, 'pointerup', this._disableDelayedDrag),
            T(e, 'pointercancel', this._disableDelayedDrag),
            T(e, 'mousemove', this._delayedDragTouchMoveHandler),
            T(e, 'touchmove', this._delayedDragTouchMoveHandler),
            T(e, 'pointermove', this._delayedDragTouchMoveHandler));
    },
    _triggerDragStart: function (e, n) {
        ((n = n || (e.pointerType == 'touch' && e)),
            !this.nativeDraggable || n
                ? this.options.supportPointer
                    ? $(document, 'pointermove', this._onTouchMove)
                    : n
                      ? $(document, 'touchmove', this._onTouchMove)
                      : $(document, 'mousemove', this._onTouchMove)
                : ($(h, 'dragend', this), $(M, 'dragstart', this._onDragStart)));
        try {
            document.selection
                ? dt(function () {
                      document.selection.empty();
                  })
                : window.getSelection().removeAllRanges();
        } catch {}
    },
    _dragStarted: function (e, n) {
        if (((Me = !1), M && h)) {
            (te('dragStarted', this, { evt: n }), this.nativeDraggable && $(document, 'dragover', Yn));
            var t = this.options;
            (!e && ae(h, t.dragClass, !1),
                ae(h, t.ghostClass, !0),
                (b.active = this),
                e && this._appendGhost(),
                J({ sortable: this, name: 'start', originalEvent: n }));
        } else this._nulling();
    },
    _emulateDragOver: function () {
        if (pe) {
            ((this._lastX = pe.clientX), (this._lastY = pe.clientY), mn());
            for (
                var e = document.elementFromPoint(pe.clientX, pe.clientY), n = e;
                e && e.shadowRoot && ((e = e.shadowRoot.elementFromPoint(pe.clientX, pe.clientY)), e !== n);
            )
                n = e;
            if ((h.parentNode[ne]._isOutsideThisEl(e), n))
                do {
                    if (n[ne]) {
                        var t = void 0;
                        if (
                            ((t = n[ne]._onDragOver({
                                clientX: pe.clientX,
                                clientY: pe.clientY,
                                target: e,
                                rootEl: n,
                            })),
                            t && !this.options.dragoverBubble)
                        )
                            break;
                    }
                    e = n;
                } while ((n = ln(n)));
            gn();
        }
    },
    _onTouchMove: function (e) {
        if (Oe) {
            var n = this.options,
                t = n.fallbackTolerance,
                l = n.fallbackOffset,
                s = e.touches ? e.touches[0] : e,
                a = S && We(S, !0),
                r = S && a && a.a,
                u = S && a && a.d,
                f = at && K && Qt(K),
                m = (s.clientX - Oe.clientX + l.x) / (r || 1) + (f ? f[0] - Tt[0] : 0) / (r || 1),
                c = (s.clientY - Oe.clientY + l.y) / (u || 1) + (f ? f[1] - Tt[1] : 0) / (u || 1);
            if (!b.active && !Me) {
                if (t && Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) < t) return;
                this._onDragStart(e, !0);
            }
            if (S) {
                a ? ((a.e += m - (Et || 0)), (a.f += c - (kt || 0))) : (a = { a: 1, b: 0, c: 0, d: 1, e: m, f: c });
                var p = 'matrix('
                    .concat(a.a, ',')
                    .concat(a.b, ',')
                    .concat(a.c, ',')
                    .concat(a.d, ',')
                    .concat(a.e, ',')
                    .concat(a.f, ')');
                (_(S, 'webkitTransform', p),
                    _(S, 'mozTransform', p),
                    _(S, 'msTransform', p),
                    _(S, 'transform', p),
                    (Et = m),
                    (kt = c),
                    (pe = s));
            }
            e.cancelable && e.preventDefault();
        }
    },
    _appendGhost: function () {
        if (!S) {
            var e = this.options.fallbackOnBody ? document.body : M,
                n = V(h, !0, at, !0, e),
                t = this.options;
            if (at) {
                for (K = e; _(K, 'position') === 'static' && _(K, 'transform') === 'none' && K !== document; )
                    K = K.parentNode;
                (K !== document.body && K !== document.documentElement
                    ? (K === document && (K = ve()), (n.top += K.scrollTop), (n.left += K.scrollLeft))
                    : (K = ve()),
                    (Tt = Qt(K)));
            }
            ((S = h.cloneNode(!0)),
                ae(S, t.ghostClass, !1),
                ae(S, t.fallbackClass, !0),
                ae(S, t.dragClass, !0),
                _(S, 'transition', ''),
                _(S, 'transform', ''),
                _(S, 'box-sizing', 'border-box'),
                _(S, 'margin', 0),
                _(S, 'top', n.top),
                _(S, 'left', n.left),
                _(S, 'width', n.width),
                _(S, 'height', n.height),
                _(S, 'opacity', '0.8'),
                _(S, 'position', at ? 'absolute' : 'fixed'),
                _(S, 'zIndex', '100000'),
                _(S, 'pointerEvents', 'none'),
                (b.ghost = S),
                e.appendChild(S),
                _(
                    S,
                    'transform-origin',
                    (Kt / parseInt(S.style.width)) * 100 + '% ' + (Jt / parseInt(S.style.height)) * 100 + '%',
                ));
        }
    },
    _onDragStart: function (e, n) {
        var t = this,
            l = e.dataTransfer,
            s = t.options;
        if ((te('dragStart', this, { evt: e }), b.eventCanceled)) {
            this._onDrop();
            return;
        }
        (te('setupClone', this),
            b.eventCanceled ||
                ((H = un(h)),
                H.removeAttribute('id'),
                (H.draggable = !1),
                (H.style['will-change'] = ''),
                this._hideClone(),
                ae(H, this.options.chosenClass, !1),
                (b.clone = H)),
            (t.cloneId = dt(function () {
                (te('clone', t),
                    !b.eventCanceled &&
                        (t.options.removeCloneOnHide || M.insertBefore(H, h),
                        t._hideClone(),
                        J({ sortable: t, name: 'clone' })));
            })),
            !n && ae(h, s.dragClass, !0),
            n
                ? ((gt = !0), (t._loopId = setInterval(t._emulateDragOver, 50)))
                : (T(document, 'mouseup', t._onDrop),
                  T(document, 'touchend', t._onDrop),
                  T(document, 'touchcancel', t._onDrop),
                  l && ((l.effectAllowed = 'move'), s.setData && s.setData.call(t, l, h)),
                  $(document, 'drop', t),
                  _(h, 'transform', 'translateZ(0)')),
            (Me = !0),
            (t._dragStartId = dt(t._dragStarted.bind(t, n, e))),
            $(document, 'selectstart', t),
            (Xe = !0),
            window.getSelection().removeAllRanges(),
            qe && _(document.body, 'user-select', 'none'));
    },
    _onDragOver: function (e) {
        var n = this.el,
            t = e.target,
            l,
            s,
            a,
            r = this.options,
            u = r.group,
            f = b.active,
            m = lt === u,
            c = r.sort,
            p = q || f,
            d,
            g = this,
            w = !1;
        if (At) return;
        function I(we, ot) {
            te(
                we,
                g,
                be(
                    {
                        evt: e,
                        isOwner: m,
                        axis: d ? 'vertical' : 'horizontal',
                        revert: a,
                        dragRect: l,
                        targetRect: s,
                        canSort: c,
                        fromSortable: p,
                        target: t,
                        completed: O,
                        onMove: function (Ve, N) {
                            return st(M, n, h, l, Ve, V(Ve), e, N);
                        },
                        changed: A,
                    },
                    ot,
                ),
            );
        }
        function P() {
            (I('dragOverAnimationCapture'), g.captureAnimationState(), g !== p && p.captureAnimationState());
        }
        function O(we) {
            return (
                I('dragOverCompleted', { insertion: we }),
                we &&
                    (m ? f._hideClone() : f._showClone(g),
                    g !== p && (ae(h, q ? q.options.ghostClass : f.options.ghostClass, !1), ae(h, r.ghostClass, !0)),
                    q !== g && g !== b.active ? (q = g) : g === b.active && q && (q = null),
                    p === g && (g._ignoreWhileAnimating = t),
                    g.animateAll(function () {
                        (I('dragOverAnimationComplete'), (g._ignoreWhileAnimating = null));
                    }),
                    g !== p && (p.animateAll(), (p._ignoreWhileAnimating = null))),
                ((t === h && !h.animated) || (t === n && !t.animated)) && (Fe = null),
                !r.dragoverBubble &&
                    !e.rootEl &&
                    t !== document &&
                    (h.parentNode[ne]._isOutsideThisEl(e.target), !we && Ne(e)),
                !r.dragoverBubble && e.stopPropagation && e.stopPropagation(),
                (w = !0)
            );
        }
        function A() {
            ((se = ue(h)),
                ($e = ue(h, r.draggable)),
                J({ sortable: g, name: 'change', toEl: n, newIndex: se, newDraggableIndex: $e, originalEvent: e }));
        }
        if (
            (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(),
            (t = fe(t, r.draggable, n, !0)),
            I('dragOver'),
            b.eventCanceled)
        )
            return w;
        if (h.contains(e.target) || (t.animated && t.animatingX && t.animatingY) || g._ignoreWhileAnimating === t)
            return O(!1);
        if (
            ((gt = !1),
            f &&
                !r.disabled &&
                (m
                    ? c || (a = R !== M)
                    : q === this || ((this.lastPutMode = lt.checkPull(this, f, h, e)) && u.checkPut(this, f, h, e))))
        ) {
            if (((d = this._getDirection(e, t) === 'vertical'), (l = V(h)), I('dragOverValid'), b.eventCanceled))
                return w;
            if (a)
                return (
                    (R = M),
                    P(),
                    this._hideClone(),
                    I('revert'),
                    b.eventCanceled || (Ae ? M.insertBefore(h, Ae) : M.appendChild(h)),
                    O(!0)
                );
            var X = Bt(n, r.draggable);
            if (!X || (qn(e, d, this) && !X.animated)) {
                if (X === h) return O(!1);
                if ((X && n === e.target && (t = X), t && (s = V(t)), st(M, n, h, l, t, s, e, !!t) !== !1))
                    return (
                        P(),
                        X && X.nextSibling ? n.insertBefore(h, X.nextSibling) : n.appendChild(h),
                        (R = n),
                        A(),
                        O(!0)
                    );
            } else if (X && Gn(e, d, this)) {
                var oe = je(n, 0, r, !0);
                if (oe === h) return O(!1);
                if (((t = oe), (s = V(t)), st(M, n, h, l, t, s, e, !1) !== !1))
                    return (P(), n.insertBefore(h, oe), (R = n), A(), O(!0));
            } else if (t.parentNode === n) {
                s = V(t);
                var z = 0,
                    le,
                    de = h.parentNode !== n,
                    G = !jn((h.animated && h.toRect) || l, (t.animated && t.toRect) || s, d),
                    ge = d ? 'top' : 'left',
                    ie = qt(t, 'top', 'top') || qt(h, 'top', 'top'),
                    Ee = ie ? ie.scrollTop : void 0;
                (Fe !== t && ((le = s[ge]), (Ze = !1), (it = (!G && r.invertSwap) || de)),
                    (z = Qn(
                        e,
                        t,
                        s,
                        d,
                        G ? 1 : r.swapThreshold,
                        r.invertedSwapThreshold == null ? r.swapThreshold : r.invertedSwapThreshold,
                        it,
                        Fe === t,
                    )));
                var re;
                if (z !== 0) {
                    var he = ue(h);
                    do ((he -= z), (re = R.children[he]));
                    while (re && (_(re, 'display') === 'none' || re === S));
                }
                if (z === 0 || re === t) return O(!1);
                ((Fe = t), (Je = z));
                var ke = t.nextElementSibling,
                    ce = !1;
                ce = z === 1;
                var Te = st(M, n, h, l, t, s, e, ce);
                if (Te !== !1)
                    return (
                        (Te === 1 || Te === -1) && (ce = Te === 1),
                        (At = !0),
                        setTimeout(zn, 30),
                        P(),
                        ce && !ke ? n.appendChild(h) : t.parentNode.insertBefore(h, ce ? ke : t),
                        ie && rn(ie, 0, Ee - ie.scrollTop),
                        (R = h.parentNode),
                        le !== void 0 && !it && (ut = Math.abs(le - V(t)[ge])),
                        A(),
                        O(!0)
                    );
            }
            if (n.contains(h)) return O(!1);
        }
        return !1;
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function () {
        (T(document, 'mousemove', this._onTouchMove),
            T(document, 'touchmove', this._onTouchMove),
            T(document, 'pointermove', this._onTouchMove),
            T(document, 'dragover', Ne),
            T(document, 'mousemove', Ne),
            T(document, 'touchmove', Ne));
    },
    _offUpEvents: function () {
        var e = this.el.ownerDocument;
        (T(e, 'mouseup', this._onDrop),
            T(e, 'touchend', this._onDrop),
            T(e, 'pointerup', this._onDrop),
            T(e, 'pointercancel', this._onDrop),
            T(e, 'touchcancel', this._onDrop),
            T(document, 'selectstart', this));
    },
    _onDrop: function (e) {
        var n = this.el,
            t = this.options;
        if (
            ((se = ue(h)),
            ($e = ue(h, t.draggable)),
            te('drop', this, { evt: e }),
            (R = h && h.parentNode),
            (se = ue(h)),
            ($e = ue(h, t.draggable)),
            b.eventCanceled)
        ) {
            this._nulling();
            return;
        }
        ((Me = !1),
            (it = !1),
            (Ze = !1),
            clearInterval(this._loopId),
            clearTimeout(this._dragStartTimer),
            Lt(this.cloneId),
            Lt(this._dragStartId),
            this.nativeDraggable && (T(document, 'drop', this), T(n, 'dragstart', this._onDragStart)),
            this._offMoveEvents(),
            this._offUpEvents(),
            qe && _(document.body, 'user-select', ''),
            _(h, 'transform', ''),
            e &&
                (Xe && (e.cancelable && e.preventDefault(), !t.dropBubble && e.stopPropagation()),
                S && S.parentNode && S.parentNode.removeChild(S),
                (M === R || (q && q.lastPutMode !== 'clone')) && H && H.parentNode && H.parentNode.removeChild(H),
                h &&
                    (this.nativeDraggable && T(h, 'dragend', this),
                    $t(h),
                    (h.style['will-change'] = ''),
                    Xe && !Me && ae(h, q ? q.options.ghostClass : this.options.ghostClass, !1),
                    ae(h, this.options.chosenClass, !1),
                    J({
                        sortable: this,
                        name: 'unchoose',
                        toEl: R,
                        newIndex: null,
                        newDraggableIndex: null,
                        originalEvent: e,
                    }),
                    M !== R
                        ? (se >= 0 &&
                              (J({ rootEl: R, name: 'add', toEl: R, fromEl: M, originalEvent: e }),
                              J({ sortable: this, name: 'remove', toEl: R, originalEvent: e }),
                              J({ rootEl: R, name: 'sort', toEl: R, fromEl: M, originalEvent: e }),
                              J({ sortable: this, name: 'sort', toEl: R, originalEvent: e })),
                          q && q.save())
                        : se !== He &&
                          se >= 0 &&
                          (J({ sortable: this, name: 'update', toEl: R, originalEvent: e }),
                          J({ sortable: this, name: 'sort', toEl: R, originalEvent: e })),
                    b.active &&
                        ((se == null || se === -1) && ((se = He), ($e = Ke)),
                        J({ sortable: this, name: 'end', toEl: R, originalEvent: e }),
                        this.save()))),
            this._nulling());
    },
    _nulling: function () {
        (te('nulling', this),
            (M =
                h =
                R =
                S =
                Ae =
                H =
                rt =
                xe =
                Oe =
                pe =
                Xe =
                se =
                $e =
                He =
                Ke =
                Fe =
                Je =
                q =
                lt =
                b.dragged =
                b.ghost =
                b.clone =
                b.active =
                    null));
        var e = this.el;
        (vt.forEach(function (n) {
            e.contains(n) && (n.checked = !0);
        }),
            (vt.length = Et = kt = 0));
    },
    handleEvent: function (e) {
        switch (e.type) {
            case 'drop':
            case 'dragend':
                this._onDrop(e);
                break;
            case 'dragenter':
            case 'dragover':
                h && (this._onDragOver(e), Xn(e));
                break;
            case 'selectstart':
                e.preventDefault();
                break;
        }
    },
    toArray: function () {
        for (var e = [], n, t = this.el.children, l = 0, s = t.length, a = this.options; l < s; l++)
            ((n = t[l]), fe(n, a.draggable, this.el, !1) && e.push(n.getAttribute(a.dataIdAttr) || Jn(n)));
        return e;
    },
    sort: function (e, n) {
        var t = {},
            l = this.el;
        (this.toArray().forEach(function (s, a) {
            var r = l.children[a];
            fe(r, this.options.draggable, l, !1) && (t[s] = r);
        }, this),
            n && this.captureAnimationState(),
            e.forEach(function (s) {
                t[s] && (l.removeChild(t[s]), l.appendChild(t[s]));
            }),
            n && this.animateAll());
    },
    save: function () {
        var e = this.options.store;
        e && e.set && e.set(this);
    },
    closest: function (e, n) {
        return fe(e, n || this.options.draggable, this.el, !1);
    },
    option: function (e, n) {
        var t = this.options;
        if (n === void 0) return t[e];
        var l = nt.modifyOption(this, e, n);
        (typeof l < 'u' ? (t[e] = l) : (t[e] = n), e === 'group' && fn(t));
    },
    destroy: function () {
        te('destroy', this);
        var e = this.el;
        ((e[ne] = null),
            T(e, 'mousedown', this._onTapStart),
            T(e, 'touchstart', this._onTapStart),
            T(e, 'pointerdown', this._onTapStart),
            this.nativeDraggable && (T(e, 'dragover', this), T(e, 'dragenter', this)),
            Array.prototype.forEach.call(e.querySelectorAll('[draggable]'), function (n) {
                n.removeAttribute('draggable');
            }),
            this._onDrop(),
            this._disableDelayedDragEvents(),
            ht.splice(ht.indexOf(this.el), 1),
            (this.el = e = null));
    },
    _hideClone: function () {
        if (!xe) {
            if ((te('hideClone', this), b.eventCanceled)) return;
            (_(H, 'display', 'none'),
                this.options.removeCloneOnHide && H.parentNode && H.parentNode.removeChild(H),
                (xe = !0));
        }
    },
    _showClone: function (e) {
        if (e.lastPutMode !== 'clone') {
            this._hideClone();
            return;
        }
        if (xe) {
            if ((te('showClone', this), b.eventCanceled)) return;
            (h.parentNode == M && !this.options.group.revertClone
                ? M.insertBefore(H, h)
                : Ae
                  ? M.insertBefore(H, Ae)
                  : M.appendChild(H),
                this.options.group.revertClone && this.animate(h, H),
                _(H, 'display', ''),
                (xe = !1));
        }
    },
};
function Xn(o) {
    (o.dataTransfer && (o.dataTransfer.dropEffect = 'move'), o.cancelable && o.preventDefault());
}
function st(o, e, n, t, l, s, a, r) {
    var u,
        f = o[ne],
        m = f.options.onMove,
        c;
    return (
        window.CustomEvent && !De && !tt
            ? (u = new CustomEvent('move', { bubbles: !0, cancelable: !0 }))
            : ((u = document.createEvent('Event')), u.initEvent('move', !0, !0)),
        (u.to = e),
        (u.from = o),
        (u.dragged = n),
        (u.draggedRect = t),
        (u.related = l || e),
        (u.relatedRect = s || V(e)),
        (u.willInsertAfter = r),
        (u.originalEvent = a),
        o.dispatchEvent(u),
        m && (c = m.call(f, u, a)),
        c
    );
}
function $t(o) {
    o.draggable = !1;
}
function zn() {
    At = !1;
}
function Gn(o, e, n) {
    var t = V(je(n.el, 0, n.options, !0)),
        l = dn(n.el, n.options, S),
        s = 10;
    return e
        ? o.clientX < l.left - s || (o.clientY < t.top && o.clientX < t.right)
        : o.clientY < l.top - s || (o.clientY < t.bottom && o.clientX < t.left);
}
function qn(o, e, n) {
    var t = V(Bt(n.el, n.options.draggable)),
        l = dn(n.el, n.options, S),
        s = 10;
    return e
        ? o.clientX > l.right + s || (o.clientY > t.bottom && o.clientX > t.left)
        : o.clientY > l.bottom + s || (o.clientX > t.right && o.clientY > t.top);
}
function Qn(o, e, n, t, l, s, a, r) {
    var u = t ? o.clientY : o.clientX,
        f = t ? n.height : n.width,
        m = t ? n.top : n.left,
        c = t ? n.bottom : n.right,
        p = !1;
    if (!a) {
        if (r && ut < f * l) {
            if ((!Ze && (Je === 1 ? u > m + (f * s) / 2 : u < c - (f * s) / 2) && (Ze = !0), Ze)) p = !0;
            else if (Je === 1 ? u < m + ut : u > c - ut) return -Je;
        } else if (u > m + (f * (1 - l)) / 2 && u < c - (f * (1 - l)) / 2) return Kn(e);
    }
    return ((p = p || a), p && (u < m + (f * s) / 2 || u > c - (f * s) / 2) ? (u > m + f / 2 ? 1 : -1) : 0);
}
function Kn(o) {
    return ue(h) < ue(o) ? 1 : -1;
}
function Jn(o) {
    for (var e = o.tagName + o.className + o.src + o.href + o.textContent, n = e.length, t = 0; n--; )
        t += e.charCodeAt(n);
    return t.toString(36);
}
function Zn(o) {
    vt.length = 0;
    for (var e = o.getElementsByTagName('input'), n = e.length; n--; ) {
        var t = e[n];
        t.checked && vt.push(t);
    }
}
function dt(o) {
    return setTimeout(o, 0);
}
function Lt(o) {
    return clearTimeout(o);
}
_t &&
    $(document, 'touchmove', function (o) {
        (b.active || Me) && o.cancelable && o.preventDefault();
    });
b.utils = {
    on: $,
    off: T,
    css: _,
    find: an,
    is: function (e, n) {
        return !!fe(e, n, e, !1);
    },
    extend: Ln,
    throttle: sn,
    closest: fe,
    toggleClass: ae,
    clone: un,
    index: ue,
    nextTick: dt,
    cancelNextTick: Lt,
    detectDirection: pn,
    getChild: je,
    expando: ne,
};
b.get = function (o) {
    return o[ne];
};
b.mount = function () {
    for (var o = arguments.length, e = new Array(o), n = 0; n < o; n++) e[n] = arguments[n];
    (e[0].constructor === Array && (e = e[0]),
        e.forEach(function (t) {
            if (!t.prototype || !t.prototype.constructor)
                throw 'Sortable: Mounted plugin must be a constructor function, not '.concat({}.toString.call(t));
            (t.utils && (b.utils = be(be({}, b.utils), t.utils)), nt.mount(t));
        }));
};
b.create = function (o, e) {
    return new b(o, e);
};
b.version = Nn;
var j = [],
    ze,
    Ut,
    Ft = !1,
    xt,
    Pt,
    yt,
    Ge;
function eo() {
    function o() {
        this.defaults = {
            scroll: !0,
            forceAutoScrollFallback: !1,
            scrollSensitivity: 30,
            scrollSpeed: 10,
            bubbleScroll: !0,
        };
        for (var e in this) e.charAt(0) === '_' && typeof this[e] == 'function' && (this[e] = this[e].bind(this));
    }
    return (
        (o.prototype = {
            dragStarted: function (n) {
                var t = n.originalEvent;
                this.sortable.nativeDraggable
                    ? $(document, 'dragover', this._handleAutoScroll)
                    : this.options.supportPointer
                      ? $(document, 'pointermove', this._handleFallbackAutoScroll)
                      : t.touches
                        ? $(document, 'touchmove', this._handleFallbackAutoScroll)
                        : $(document, 'mousemove', this._handleFallbackAutoScroll);
            },
            dragOverCompleted: function (n) {
                var t = n.originalEvent;
                !this.options.dragOverBubble && !t.rootEl && this._handleAutoScroll(t);
            },
            drop: function () {
                (this.sortable.nativeDraggable
                    ? T(document, 'dragover', this._handleAutoScroll)
                    : (T(document, 'pointermove', this._handleFallbackAutoScroll),
                      T(document, 'touchmove', this._handleFallbackAutoScroll),
                      T(document, 'mousemove', this._handleFallbackAutoScroll)),
                    en(),
                    ct(),
                    Un());
            },
            nulling: function () {
                ((yt = Ut = ze = Ft = Ge = xt = Pt = null), (j.length = 0));
            },
            _handleFallbackAutoScroll: function (n) {
                this._handleAutoScroll(n, !0);
            },
            _handleAutoScroll: function (n, t) {
                var l = this,
                    s = (n.touches ? n.touches[0] : n).clientX,
                    a = (n.touches ? n.touches[0] : n).clientY,
                    r = document.elementFromPoint(s, a);
                if (((yt = n), t || this.options.forceAutoScrollFallback || tt || De || qe)) {
                    Ot(n, this.options, r, t);
                    var u = Pe(r, !0);
                    Ft &&
                        (!Ge || s !== xt || a !== Pt) &&
                        (Ge && en(),
                        (Ge = setInterval(function () {
                            var f = Pe(document.elementFromPoint(s, a), !0);
                            (f !== u && ((u = f), ct()), Ot(n, l.options, f, t));
                        }, 10)),
                        (xt = s),
                        (Pt = a));
                } else {
                    if (!this.options.bubbleScroll || Pe(r, !0) === ve()) {
                        ct();
                        return;
                    }
                    Ot(n, this.options, Pe(r, !1), !1);
                }
            },
        }),
        Se(o, { pluginName: 'scroll', initializeByDefault: !0 })
    );
}
function ct() {
    (j.forEach(function (o) {
        clearInterval(o.pid);
    }),
        (j = []));
}
function en() {
    clearInterval(Ge);
}
var Ot = sn(function (o, e, n, t) {
        if (e.scroll) {
            var l = (o.touches ? o.touches[0] : o).clientX,
                s = (o.touches ? o.touches[0] : o).clientY,
                a = e.scrollSensitivity,
                r = e.scrollSpeed,
                u = ve(),
                f = !1,
                m;
            Ut !== n && ((Ut = n), ct(), (ze = e.scroll), (m = e.scrollFn), ze === !0 && (ze = Pe(n, !0)));
            var c = 0,
                p = ze;
            do {
                var d = p,
                    g = V(d),
                    w = g.top,
                    I = g.bottom,
                    P = g.left,
                    O = g.right,
                    A = g.width,
                    X = g.height,
                    oe = void 0,
                    z = void 0,
                    le = d.scrollWidth,
                    de = d.scrollHeight,
                    G = _(d),
                    ge = d.scrollLeft,
                    ie = d.scrollTop;
                d === u
                    ? ((oe =
                          A < le && (G.overflowX === 'auto' || G.overflowX === 'scroll' || G.overflowX === 'visible')),
                      (z = X < de && (G.overflowY === 'auto' || G.overflowY === 'scroll' || G.overflowY === 'visible')))
                    : ((oe = A < le && (G.overflowX === 'auto' || G.overflowX === 'scroll')),
                      (z = X < de && (G.overflowY === 'auto' || G.overflowY === 'scroll')));
                var Ee = oe && (Math.abs(O - l) <= a && ge + A < le) - (Math.abs(P - l) <= a && !!ge),
                    re = z && (Math.abs(I - s) <= a && ie + X < de) - (Math.abs(w - s) <= a && !!ie);
                if (!j[c]) for (var he = 0; he <= c; he++) j[he] || (j[he] = {});
                ((j[c].vx != Ee || j[c].vy != re || j[c].el !== d) &&
                    ((j[c].el = d),
                    (j[c].vx = Ee),
                    (j[c].vy = re),
                    clearInterval(j[c].pid),
                    (Ee != 0 || re != 0) &&
                        ((f = !0),
                        (j[c].pid = setInterval(
                            function () {
                                t && this.layer === 0 && b.active._onTouchMove(yt);
                                var ke = j[this.layer].vy ? j[this.layer].vy * r : 0,
                                    ce = j[this.layer].vx ? j[this.layer].vx * r : 0;
                                (typeof m == 'function' &&
                                    m.call(b.dragged.parentNode[ne], ce, ke, o, yt, j[this.layer].el) !== 'continue') ||
                                    rn(j[this.layer].el, ce, ke);
                            }.bind({ layer: c }),
                            24,
                        )))),
                    c++);
            } while (e.bubbleScroll && p !== u && (p = Pe(p, !1)));
            Ft = f;
        }
    }, 30),
    hn = function (e) {
        var n = e.originalEvent,
            t = e.putSortable,
            l = e.dragEl,
            s = e.activeSortable,
            a = e.dispatchSortableEvent,
            r = e.hideGhostForTarget,
            u = e.unhideGhostForTarget;
        if (n) {
            var f = t || s;
            r();
            var m = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n,
                c = document.elementFromPoint(m.clientX, m.clientY);
            (u(), f && !f.el.contains(c) && (a('spill'), this.onSpill({ dragEl: l, putSortable: t })));
        }
    };
function jt() {}
jt.prototype = {
    startIndex: null,
    dragStart: function (e) {
        var n = e.oldDraggableIndex;
        this.startIndex = n;
    },
    onSpill: function (e) {
        var n = e.dragEl,
            t = e.putSortable;
        (this.sortable.captureAnimationState(), t && t.captureAnimationState());
        var l = je(this.sortable.el, this.startIndex, this.options);
        (l ? this.sortable.el.insertBefore(n, l) : this.sortable.el.appendChild(n),
            this.sortable.animateAll(),
            t && t.animateAll());
    },
    drop: hn,
};
Se(jt, { pluginName: 'revertOnSpill' });
function Vt() {}
Vt.prototype = {
    onSpill: function (e) {
        var n = e.dragEl,
            t = e.putSortable,
            l = t || this.sortable;
        (l.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), l.animateAll());
    },
    drop: hn,
};
Se(Vt, { pluginName: 'removeOnSpill' });
b.mount(new eo());
b.mount(Vt, jt);
const to = { id: 'libraryContainer' },
    no = { id: 'library' },
    oo = ['data-item-id'],
    lo = ['href'],
    io = { key: 1, class: 'lpName' },
    ao = { class: 'lpWeight' },
    so = { class: 'lpDescription' },
    ro = ['onClick'],
    uo = { key: 2, class: 'lpHandle lpLibraryItemHandle', title: 'Reorder this item' },
    co = Object.assign(
        { name: 'LibraryItem' },
        {
            __name: 'LibraryItems',
            props: { item: { type: Object, default: null } },
            setup(o) {
                const e = Y(),
                    n = E(''),
                    t = C(() => e.library),
                    l = C(() => {
                        let u = [];
                        if (!n.value) u = t.value.items.map((m) => Object.assign({}, m));
                        else {
                            const m = n.value.toLowerCase();
                            for (let c = 0; c < t.value.items.length; c++) {
                                const p = t.value.items[c];
                                (p.name.toLowerCase().indexOf(m) > -1 || p.description.toLowerCase().indexOf(m) > -1) &&
                                    u.push(Object.assign({}, p));
                            }
                        }
                        const f = t.value.getItemsInCurrentList();
                        for (let m = 0; m < u.length; m++) f.indexOf(u[m].id) > -1 && (u[m].inCurrentList = !0);
                        return u;
                    }),
                    s = E(null);
                (et(() => {
                    const u = document.getElementById('library');
                    s.value = b.create(u, {
                        group: { name: 'items', pull: 'clone', put: !1 },
                        handle: '.lpLibraryItemHandle',
                        filter(f, m) {
                            return e.library.getItemsInCurrentList().indexOf(parseInt(m.dataset.itemId)) > -1;
                        },
                        preventOnFilter: !1,
                        animation: 150,
                    });
                }),
                    Mt(() => {
                        s.value && s.value.destroy();
                    }));
                function a(u, f) {
                    return _e.MgToWeight(u, f) || 0;
                }
                function r(u) {
                    const f = () => {
                            e.removeItem(u);
                        },
                        m = { body: 'Are you sure you want to delete this item? This cannot be undone.' };
                    e.initSpeedbump(f, m);
                }
                return (u, f) => (
                    v(),
                    y('section', to, [
                        f[2] || (f[2] = i('h2', null, 'Gear', -1)),
                        B(
                            i(
                                'input',
                                {
                                    id: 'librarySearch',
                                    'onUpdate:modelValue': f[0] || (f[0] = (m) => (n.value = m)),
                                    type: 'text',
                                    placeholder: 'search items',
                                },
                                null,
                                512,
                            ),
                            [[Z, n.value]],
                        ),
                        i('ul', no, [
                            (v(!0),
                            y(
                                me,
                                null,
                                ye(
                                    l.value,
                                    (m) => (
                                        v(),
                                        y(
                                            'li',
                                            { key: m.id, class: 'lpLibraryItem', 'data-item-id': m.id },
                                            [
                                                m.url
                                                    ? (v(),
                                                      y(
                                                          'a',
                                                          {
                                                              key: 0,
                                                              href: m.url,
                                                              target: '_blank',
                                                              class: 'lpName lpHref',
                                                          },
                                                          D(m.name),
                                                          9,
                                                          lo,
                                                      ))
                                                    : x('', !0),
                                                m.url ? x('', !0) : (v(), y('span', io, D(m.name), 1)),
                                                i('span', ao, D(a(m.weight, m.authorUnit)) + ' ' + D(m.authorUnit), 1),
                                                i('span', so, D(m.description), 1),
                                                i(
                                                    'a',
                                                    {
                                                        class: 'lpRemove lpRemoveLibraryItem speedbump',
                                                        title: 'Delete this item permanently',
                                                        onClick: (c) => r(m),
                                                    },
                                                    [
                                                        ...(f[1] ||
                                                            (f[1] = [
                                                                i('i', { class: 'lpSprite lpSpriteRemove' }, null, -1),
                                                            ])),
                                                    ],
                                                    8,
                                                    ro,
                                                ),
                                                m.inCurrentList ? x('', !0) : (v(), y('div', uo)),
                                            ],
                                            8,
                                            oo,
                                        )
                                    ),
                                ),
                                128,
                            )),
                        ]),
                    ])
                );
            },
        },
    ),
    po = { class: 'lpTarget' },
    fo = { class: 'lpContent' },
    vn = Object.assign(
        { name: 'Popover' },
        {
            __name: 'Popover',
            props: { id: { type: String, default: null }, shown: { type: Boolean, required: !0 } },
            emits: ['hide'],
            setup(o, { emit: e }) {
                const n = o,
                    t = e;
                function l() {
                    t('hide');
                }
                function s(a) {
                    n.shown && a.keyCode === 27 && l();
                }
                return (
                    Ht(() => window.addEventListener('keyup', s)),
                    wn(() => window.removeEventListener('keyup', s)),
                    (a, r) => {
                        const u = Re('click-outside');
                        return B(
                            (v(),
                            y(
                                'div',
                                { class: Q({ lpPopover: !0, lpPopoverShown: o.shown }) },
                                [i('div', po, [pt(a.$slots, 'target')]), i('div', fo, [pt(a.$slots, 'content')])],
                                2,
                            )),
                            [[u, l]],
                        );
                    }
                );
            },
        },
    ),
    Ct = Object.assign(
        { name: 'PopoverHover' },
        {
            __name: 'PopoverHover',
            emits: ['shown', 'hidden'],
            setup(o, { expose: e, emit: n }) {
                const t = n,
                    l = E(!1);
                let s = null;
                function a() {
                    (s && (clearTimeout(s), (s = null)), (l.value = !0), t('shown'));
                }
                function r() {
                    ((l.value = !1), t('hidden'));
                }
                function u() {
                    s = setTimeout(r, 50);
                }
                return (
                    e({ shown: l, show: a, hide: r, startHideTimeout: u }),
                    (f, m) => (
                        v(),
                        ee(
                            vn,
                            { shown: l.value, onMouseenter: a, onMouseleave: u },
                            {
                                target: W(() => [pt(f.$slots, 'target')]),
                                content: W(() => [pt(f.$slots, 'content')]),
                                _: 3,
                            },
                            8,
                            ['shown'],
                        )
                    )
                );
            },
        },
    ),
    mo = { id: 'listContainer' },
    go = { class: 'listContainerHeader' },
    ho = { id: 'lists' },
    vo = ['onClick'],
    yo = ['onClick'],
    bo = Object.assign(
        { name: 'LibraryList' },
        {
            __name: 'LibraryLists',
            props: { list: { type: Object, default: null } },
            setup(o) {
                const e = Y(),
                    n = C(() => e.library);
                let t = null;
                (et(() => {
                    const m = document.getElementById('lists');
                    t = b.create(m, {
                        handle: '.lpHandle',
                        animation: 150,
                        onEnd(c) {
                            const { item: p, from: d, oldIndex: g, newIndex: w } = c;
                            (w < g
                                ? d.insertBefore(p, d.children[g + 1] ?? null)
                                : d.insertBefore(p, d.children[g] ?? null),
                                e.reorderList({ before: g, after: w }));
                        },
                    });
                }),
                    Mt(() => {
                        t && t.destroy();
                    }));
                function l(m) {
                    return m.name || 'New list';
                }
                function s(m) {
                    e.setDefaultList(m);
                }
                function a() {
                    e.newList();
                }
                function r() {
                    e.showModal('copyList');
                }
                function u() {
                    e.triggerImportCSV();
                }
                function f(m) {
                    const c = () => {
                            e.removeList(m);
                        },
                        p = { body: 'Are you sure you want to delete this list? This cannot be undone.' };
                    e.initSpeedbump(c, p);
                }
                return (m, c) => (
                    v(),
                    y('section', mo, [
                        i('div', go, [
                            c[4] || (c[4] = i('h2', null, 'Lists', -1)),
                            L(
                                Ct,
                                { id: 'addListFlyout' },
                                {
                                    target: W(() => [
                                        i('a', { class: 'lpAdd', onClick: a }, [
                                            ...(c[0] ||
                                                (c[0] = [
                                                    i('i', { class: 'lpSprite lpSpriteAdd' }, null, -1),
                                                    U('Add new list', -1),
                                                ])),
                                        ]),
                                    ]),
                                    content: W(() => [
                                        i('a', { class: 'lpAdd', onClick: a }, [
                                            ...(c[1] ||
                                                (c[1] = [
                                                    i('i', { class: 'lpSprite lpSpriteAdd' }, null, -1),
                                                    U('Add new list', -1),
                                                ])),
                                        ]),
                                        i('a', { class: 'lpAdd', onClick: u }, [
                                            ...(c[2] ||
                                                (c[2] = [
                                                    i('i', { class: 'lpSprite lpSpriteUpload' }, null, -1),
                                                    U('Import CSV', -1),
                                                ])),
                                        ]),
                                        i('a', { class: 'lpCopy', onClick: r }, [
                                            ...(c[3] ||
                                                (c[3] = [
                                                    i('i', { class: 'lpSprite lpSpriteCopy' }, null, -1),
                                                    U('Copy a list', -1),
                                                ])),
                                        ]),
                                    ]),
                                    _: 1,
                                },
                            ),
                        ]),
                        i('ul', ho, [
                            (v(!0),
                            y(
                                me,
                                null,
                                ye(
                                    n.value.lists,
                                    (p) => (
                                        v(),
                                        y(
                                            'li',
                                            {
                                                key: p.id,
                                                class: Q([
                                                    'lpLibraryList',
                                                    { lpActive: n.value.defaultListId == p.id },
                                                ]),
                                            },
                                            [
                                                c[6] ||
                                                    (c[6] = i(
                                                        'div',
                                                        { class: 'lpHandle', title: 'Reorder this item' },
                                                        null,
                                                        -1,
                                                    )),
                                                i(
                                                    'span',
                                                    { class: 'lpLibraryListSwitch lpListName', onClick: (d) => s(p) },
                                                    D(l(p)),
                                                    9,
                                                    vo,
                                                ),
                                                i(
                                                    'a',
                                                    {
                                                        class: 'lpRemove',
                                                        title: 'Remove this list',
                                                        onClick: (d) => f(p),
                                                    },
                                                    [
                                                        ...(c[5] ||
                                                            (c[5] = [
                                                                i('i', { class: 'lpSprite lpSpriteRemove' }, null, -1),
                                                            ])),
                                                    ],
                                                    8,
                                                    yo,
                                                ),
                                            ],
                                            2,
                                        )
                                    ),
                                ),
                                128,
                            )),
                        ]),
                    ])
                );
            },
        },
    ),
    wo = { id: 'sidebar' },
    _o = { id: 'scrollable' },
    Co = Object.assign(
        { name: 'Sidebar' },
        {
            __name: 'Sidebar',
            setup(o) {
                return (e, n) => (
                    v(),
                    y('div', wo, [
                        i('div', _o, [
                            n[0] || (n[0] = i('h1', null, [U('LighterPack '), i('span', null, '(beta)')], -1)),
                            L(bo),
                            L(co),
                        ]),
                    ])
                );
            },
        },
    ),
    So = { key: 0, class: 'headerItem hasPopover' },
    Io = { class: 'lpFields' },
    Do = { class: 'lpField' },
    Eo = ['value'],
    ko = { class: 'lpField' },
    To = ['value'],
    $o = ['href'],
    xo = Object.assign(
        { name: 'Share' },
        {
            __name: 'Share',
            setup(o) {
                const e = Y(),
                    n = E(null),
                    t = C(() => e.library),
                    l = C(() => t.value.getListById(t.value.defaultListId)),
                    s = C(() => e.loggedIn),
                    a = C(() => l.value.externalId || ''),
                    r = C(() => {
                        const p = window.location;
                        return p.origin ? p.origin : `${p.protocol}//${p.hostname}`;
                    }),
                    u = C(() => (a.value ? `${r.value}/r/${a.value}` : '')),
                    f = C(() => (a.value ? `${r.value}/csv/${a.value}` : '')),
                    m = C(() => `<script src="${r.value}/e/${a.value}"><\/script><div id="${a.value}"></div>`);
                function c(p) {
                    l.value.externalId
                        ? ft(() => {
                              n.value && n.value.select();
                          })
                        : bt('/api/external-id', {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              credentials: 'same-origin',
                          })
                              .then((d) => {
                                  (e.setExternalId({ externalId: d.externalId, list: l.value }),
                                      ft(() => {
                                          n.value && n.value.select();
                                      }));
                              })
                              .catch((d) => {
                                  alert(
                                      'An error occurred while attempting to get an ID for your list. Please try again later.',
                                  );
                              });
                }
                return (p, d) => {
                    const g = Re('select-on-focus');
                    return s.value
                        ? (v(),
                          y('span', So, [
                              L(
                                  Ct,
                                  { id: 'share', onShown: c },
                                  {
                                      target: W(() => [
                                          ...(d[0] ||
                                              (d[0] = [
                                                  i('i', { class: 'lpSprite lpLink' }, null, -1),
                                                  U(' Share', -1),
                                              ])),
                                      ]),
                                      content: W(() => [
                                          i('div', Io, [
                                              i('div', Do, [
                                                  d[1] ||
                                                      (d[1] = i('label', { for: 'shareUrl' }, 'Share your list', -1)),
                                                  B(
                                                      i(
                                                          'input',
                                                          {
                                                              id: 'shareUrl',
                                                              ref_key: 'shareUrlInput',
                                                              ref: n,
                                                              type: 'text',
                                                              value: u.value,
                                                          },
                                                          null,
                                                          8,
                                                          Eo,
                                                      ),
                                                      [[g]],
                                                  ),
                                              ]),
                                              i('div', ko, [
                                                  d[2] ||
                                                      (d[2] = i('label', { for: 'embedUrl' }, 'Embed your list', -1)),
                                                  B(
                                                      i(
                                                          'textarea',
                                                          { id: 'embedUrl', value: m.value, readonly: '' },
                                                          null,
                                                          8,
                                                          To,
                                                      ),
                                                      [[g]],
                                                  ),
                                              ]),
                                              i(
                                                  'a',
                                                  { id: 'csvUrl', href: f.value, target: '_blank', class: 'lpHref' },
                                                  [
                                                      ...(d[3] ||
                                                          (d[3] = [
                                                              i('i', { class: 'lpSprite lpSpriteDownload' }, null, -1),
                                                              U('Export to CSV', -1),
                                                          ])),
                                                  ],
                                                  8,
                                                  $o,
                                              ),
                                          ]),
                                      ]),
                                      _: 1,
                                  },
                              ),
                          ]))
                        : x('', !0);
                };
            },
        },
    ),
    Po = { key: 0, id: 'settings', class: 'headerItem hasPopover' },
    Oo = { id: 'lpOptionalFields' },
    No = ['checked', 'onChange'],
    Ao = { key: 0, id: 'lpPriceSettings' },
    Lo = ['value'],
    Uo = Object.assign(
        { name: 'ListSettings' },
        {
            __name: 'ListSettings',
            setup(o) {
                const e = Y(),
                    n = C(() => e.library),
                    t = C(() => e.loggedIn),
                    l = C(() =>
                        [
                            { name: 'images', displayName: 'Item images', cssClass: 'lpShowImages' },
                            { name: 'price', displayName: 'Item prices', cssClass: 'lpShowPrices' },
                            { name: 'worn', displayName: 'Worn items', cssClass: 'lpShowWorn' },
                            { name: 'consumable', displayName: 'Consumable items', cssClass: 'lpShowConsumable' },
                            {
                                name: 'listDescription',
                                displayName: 'List descriptions',
                                cssClass: 'lpShowListDescription',
                            },
                        ].map((u) => ({ ...u, value: n.value.optionalFields[u.name] })),
                    );
                function s(r, u) {
                    e.toggleOptionalField(u);
                }
                function a(r) {
                    e.updateCurrencySymbol(r.target.value);
                }
                return (r, u) =>
                    t.value
                        ? (v(),
                          y('span', Po, [
                              L(Ct, null, {
                                  target: W(() => [
                                      ...(u[1] ||
                                          (u[1] = [
                                              i('i', { class: 'lpSprite lpSettings' }, null, -1),
                                              U(' Settings', -1),
                                          ])),
                                  ]),
                                  content: W(() => [
                                      i('ul', Oo, [
                                          (v(!0),
                                          y(
                                              me,
                                              null,
                                              ye(
                                                  l.value,
                                                  (f) => (
                                                      v(),
                                                      y('li', { key: f.name, class: 'lpOptionalField' }, [
                                                          i('label', null, [
                                                              i(
                                                                  'input',
                                                                  {
                                                                      checked: f.value,
                                                                      type: 'checkbox',
                                                                      onChange: (m) => s(m, f.name),
                                                                  },
                                                                  null,
                                                                  40,
                                                                  No,
                                                              ),
                                                              U(' ' + D(f.displayName), 1),
                                                          ]),
                                                      ])
                                                  ),
                                              ),
                                              128,
                                          )),
                                      ]),
                                      n.value.optionalFields.price
                                          ? (v(),
                                            y('div', Ao, [
                                                u[3] || (u[3] = i('hr', null, null, -1)),
                                                i('label', null, [
                                                    u[2] || (u[2] = U(' Currency: ', -1)),
                                                    i(
                                                        'input',
                                                        {
                                                            id: 'currencySymbol',
                                                            type: 'text',
                                                            maxlength: '4',
                                                            value: n.value.currencySymbol,
                                                            onInput: u[0] || (u[0] = (f) => a(f)),
                                                        },
                                                        null,
                                                        40,
                                                        Lo,
                                                    ),
                                                ]),
                                            ]))
                                          : x('', !0),
                                  ]),
                                  _: 1,
                              }),
                          ]))
                        : x('', !0);
            },
        },
    ),
    Fo = { class: 'headerItem hasPopover' },
    Mo = { class: 'username' },
    Ho = Object.assign(
        { name: 'AccountDropdown' },
        {
            __name: 'AccountDropdown',
            setup(o) {
                const e = Y(),
                    n = Wt(),
                    t = C(() => e.loggedIn);
                function l() {
                    e.showModal('account');
                }
                function s() {
                    e.showModal('help');
                }
                function a() {
                    (e.signout(), n.push('/signin'));
                }
                return (r, u) => (
                    v(),
                    y('span', Fo, [
                        L(
                            Ct,
                            { id: 'headerPopover' },
                            {
                                target: W(() => [
                                    u[0] || (u[0] = U('Signed in as ', -1)),
                                    i('span', Mo, D(t.value), 1),
                                    u[1] || (u[1] = U()),
                                    u[2] || (u[2] = i('i', { class: 'lpSprite lpExpand' }, null, -1)),
                                ]),
                                content: W(() => [
                                    i('a', { class: 'lpHref accountSettings', onClick: l }, 'Account Settings'),
                                    u[3] || (u[3] = i('br', null, null, -1)),
                                    i('a', { class: 'lpHref', onClick: s }, 'Help'),
                                    u[4] || (u[4] = i('br', null, null, -1)),
                                    i('a', { class: 'lpHref signout', onClick: a }, 'Sign Out'),
                                ]),
                                _: 1,
                            },
                        ),
                    ])
                );
            },
        },
    );
function Wo(o, e, n, t) {
    t < n ? e.insertBefore(o, e.children[n + 1] ?? null) : e.insertBefore(o, e.children[n] ?? null);
}
function Ro() {
    const o = Y();
    let e = [];
    function n(l) {
        (t(),
            (e = Array.from(document.getElementsByClassName('lpItems')).map((a) =>
                b.create(a, {
                    group: { name: 'items', pull: !0, put: !0 },
                    handle: '.lpItemHandle',
                    draggable: '.lpItem',
                    animation: 150,
                    onEnd(r) {
                        if (r.from !== r.to) return;
                        const u = r.oldIndex ?? 0,
                            f = r.newIndex ?? 0;
                        (Wo(r.item, r.from, u, f),
                            o.reorderItem({
                                list: l.value,
                                itemId: parseInt(r.item.id),
                                categoryId: parseInt(r.to.parentElement.id),
                                dropIndex: r.newDraggableIndex ?? f,
                            }));
                    },
                    onAdd(r) {
                        const { item: u, to: f, newDraggableIndex: m, newIndex: c } = r,
                            p = parseInt(f.parentElement.id),
                            d = m ?? c ?? 0;
                        (u.parentNode.removeChild(u),
                            u.dataset.itemId
                                ? o.addItemToCategory({
                                      itemId: parseInt(u.dataset.itemId),
                                      categoryId: p,
                                      dropIndex: d,
                                  })
                                : o.reorderItem({
                                      list: l.value,
                                      itemId: parseInt(u.id),
                                      categoryId: p,
                                      dropIndex: d,
                                  }));
                    },
                }),
            )));
    }
    function t() {
        (e.forEach((l) => l.destroy()), (e = []));
    }
    return { setup: n, destroy: t };
}
const Bo = ['value'],
    jo = ['value'],
    Vo = { class: 'lpDisplay' },
    Yo = ['onClick'],
    yn = Object.assign(
        { name: 'UnitSelect' },
        {
            __name: 'UnitSelect',
            props: {
                weight: { type: Number, default: 0 },
                unit: { type: String, default: null },
                onChange: { type: Function, default: null },
            },
            setup(o, { expose: e }) {
                const n = o,
                    t = ['oz', 'lb', 'g', 'kg'],
                    l = E(!1),
                    s = E(!1);
                function a(P) {
                    P.keyCode === 27 && c();
                }
                function r() {
                    c();
                }
                function u() {
                    (window.addEventListener('keyup', a), window.addEventListener('click', r));
                }
                function f() {
                    (window.removeEventListener('keyup', a), window.removeEventListener('click', r));
                }
                function m() {
                    ((l.value = !0), u());
                }
                function c() {
                    ((l.value = !1), f());
                }
                function p(P) {
                    (P.stopPropagation(), l.value ? c() : m());
                }
                function d(P) {
                    typeof n.onChange == 'function' && n.onChange(P);
                }
                function g(P) {
                    typeof n.onChange == 'function' && n.onChange(P.target.value);
                }
                function w() {
                    s.value = !0;
                }
                function I() {
                    s.value = !1;
                }
                return (
                    e({ isOpen: l, isFocused: s, select: d, close: c, open: m }),
                    (P, O) => (
                        v(),
                        y(
                            'div',
                            {
                                class: Q(['lpUnitSelect', { lpOpen: l.value, lpHover: s.value }]),
                                onClick: O[1] || (O[1] = (A) => p(A)),
                            },
                            [
                                i(
                                    'select',
                                    {
                                        class: 'lpUnit lpInvisible',
                                        value: o.unit,
                                        onKeyup: O[0] || (O[0] = (A) => g(A)),
                                        onFocus: w,
                                        onBlur: I,
                                    },
                                    [
                                        (v(),
                                        y(
                                            me,
                                            null,
                                            ye(t, (A) => i('option', { key: A, value: A }, D(A), 9, jo)),
                                            64,
                                        )),
                                    ],
                                    40,
                                    Bo,
                                ),
                                i('span', Vo, D(o.unit), 1),
                                O[2] || (O[2] = i('i', { class: 'lpSprite lpExpand' }, null, -1)),
                                i(
                                    'ul',
                                    { class: Q('lpUnitDropdown ' + o.unit) },
                                    [
                                        (v(),
                                        y(
                                            me,
                                            null,
                                            ye(t, (A) =>
                                                i('li', { key: A, class: Q(A), onClick: (X) => d(A) }, D(A), 11, Yo),
                                            ),
                                            64,
                                        )),
                                    ],
                                    2,
                                ),
                            ],
                            2,
                        )
                    )
                );
            },
        },
    ),
    Xo = ['id'],
    zo = { key: 0, class: 'lpImageCell' },
    Go = ['src'],
    qo = { class: 'lpActionsCell' },
    Qo = { key: 1, class: 'lpPriceCell' },
    Ko = { class: 'lpWeightCell lpNumber' },
    Jo = { class: 'lpQtyCell' },
    Zo = { class: 'lpArrows' },
    el = Object.assign(
        { name: 'Item' },
        {
            __name: 'Item',
            props: { category: { type: Object, default: null }, itemContainer: { type: Object, default: null } },
            setup(o, { expose: e }) {
                const n = o,
                    t = Y(),
                    l = E(0),
                    s = E(0),
                    a = E(0),
                    r = E(!1),
                    u = E(!1),
                    f = E(!1),
                    m = E(4),
                    c = C(() => t.library),
                    p = E({ ...n.itemContainer.item }),
                    d = E({ ...n.itemContainer.categoryItem }),
                    g = C(() =>
                        p.value.image
                            ? `https://i.imgur.com/${p.value.image}s.jpg`
                            : p.value.imageUrl
                              ? p.value.imageUrl
                              : '',
                    ),
                    w = C(() =>
                        p.value.image
                            ? `https://i.imgur.com/${p.value.image}l.jpg`
                            : p.value.imageUrl
                              ? p.value.imageUrl
                              : '',
                    );
                (Be(
                    () => n.itemContainer.item,
                    (N) => {
                        ((p.value = { ...N }), de());
                    },
                    { deep: !0 },
                ),
                    Be(
                        () => n.itemContainer.categoryItem,
                        (N) => {
                            ((d.value = { ...N }), le());
                        },
                        { deep: !0 },
                    ),
                    Ht(() => {
                        (de(), z(), le());
                    }));
                function I() {
                    t.updateItem(p.value);
                }
                function P() {
                    t.updateCategoryItem({ category: n.category, categoryItem: d.value });
                }
                function O(N) {
                    ((p.value.authorUnit = N), t.updateItemUnit(N), oe());
                }
                function A() {
                    const N = parseFloat(s.value, 10);
                    isNaN(N) ? (u.value = !0) : ((p.value.price = Math.round(N * 100) / 100), I(), (u.value = !1));
                }
                function X() {
                    const N = parseFloat(a.value, 10);
                    isNaN(N) ? (f.value = !0) : ((d.value.qty = N), P(), (f.value = !1));
                }
                function oe() {
                    const N = parseFloat(l.value, 10);
                    isNaN(N)
                        ? (r.value = !0)
                        : ((p.value.weight = _e.WeightToMg(N, p.value.authorUnit)), I(), (r.value = !1));
                }
                function z() {
                    u.value || (s.value = p.value.price.toFixed(2));
                }
                function le() {
                    f.value || (a.value = d.value.qty);
                }
                function de() {
                    l.value = _e.MgToWeight(p.value.weight, p.value.authorUnit);
                }
                function G() {
                    t.openItemLinkDialog(p.value);
                }
                function ge() {
                    t.openItemImageDialog(p.value);
                }
                function ie() {
                    t.openViewImageDialog(w.value);
                }
                function Ee() {
                    d.value.consumable || ((d.value.worn = !d.value.worn), P());
                }
                function re() {
                    d.value.worn || ((d.value.consumable = !d.value.consumable), P());
                }
                function he() {
                    (d.value.star || (d.value.star = 0), (d.value.star = (d.value.star + 1) % m.value), P());
                }
                function ke(N) {
                    (N.stopImmediatePropagation(), !u.value && ((p.value.price = p.value.price + 1), I(), z()));
                }
                function ce(N) {
                    (N.stopImmediatePropagation(),
                        !u.value &&
                            ((p.value.price = p.value.price - 1), p.value.price < 0 && (p.value.price = 0), I(), z()));
                }
                function Te(N) {
                    (N.stopImmediatePropagation(), !f.value && ((d.value.qty = d.value.qty + 1), P()));
                }
                function we(N) {
                    (N.stopImmediatePropagation(),
                        !f.value && ((d.value.qty = d.value.qty - 1), d.value.qty < 0 && (d.value.qty = 0), P()));
                }
                function ot(N) {
                    if ((N.stopImmediatePropagation(), r.value)) return;
                    const k = _e.MgToWeight(p.value.weight, p.value.authorUnit) + 1;
                    ((p.value.weight = _e.WeightToMg(k, p.value.authorUnit)), I());
                }
                function St(N) {
                    if ((N.stopImmediatePropagation(), r.value)) return;
                    const k = _e.MgToWeight(p.value.weight, p.value.authorUnit) - 1;
                    ((p.value.weight = _e.WeightToMg(k, p.value.authorUnit)),
                        p.value.weight < 0 && (p.value.weight = 0),
                        I());
                }
                function Ve() {
                    t.removeItemFromCategory({ itemId: p.value.id, category: n.category });
                }
                return (
                    e({
                        displayWeight: l,
                        displayPrice: s,
                        displayQty: a,
                        weightError: r,
                        priceError: u,
                        qtyError: f,
                        numStars: m,
                        library: c,
                        item: p,
                        categoryItem: d,
                        thumbnailImage: g,
                        fullImage: w,
                        saveItem: I,
                        saveCategoryItem: P,
                        setUnit: O,
                        savePrice: A,
                        saveQty: X,
                        saveWeight: oe,
                        setDisplayPrice: z,
                        setDisplayQty: le,
                        setDisplayWeight: de,
                        updateItemLink: G,
                        updateItemImage: ge,
                        viewItemImage: ie,
                        toggleWorn: Ee,
                        toggleConsumable: re,
                        cycleStar: he,
                        incrementPrice: ke,
                        decrementPrice: ce,
                        incrementQty: Te,
                        decrementQty: we,
                        incrementWeight: ot,
                        decrementWeight: St,
                        removeItem: Ve,
                    }),
                    (N, k) => {
                        const bn = Re('focus-on-create'),
                            Yt = Re('empty-if-zero');
                        return (
                            v(),
                            y(
                                'li',
                                { id: p.value.id, class: Q('lpItem ' + p.value.classes) },
                                [
                                    k[15] ||
                                        (k[15] = i(
                                            'span',
                                            { class: 'lpHandleCell' },
                                            [i('div', { class: 'lpItemHandle lpHandle', title: 'Reorder this item' })],
                                            -1,
                                        )),
                                    c.value.optionalFields.images
                                        ? (v(),
                                          y('span', zo, [
                                              g.value
                                                  ? (v(),
                                                    y(
                                                        'img',
                                                        {
                                                            key: 0,
                                                            class: 'lpItemImage',
                                                            src: g.value,
                                                            onClick: k[0] || (k[0] = (F) => ie()),
                                                        },
                                                        null,
                                                        8,
                                                        Go,
                                                    ))
                                                  : x('', !0),
                                          ]))
                                        : x('', !0),
                                    B(
                                        i(
                                            'input',
                                            {
                                                'onUpdate:modelValue': k[1] || (k[1] = (F) => (p.value.name = F)),
                                                type: 'text',
                                                class: 'lpName lpSilent',
                                                placeholder: 'Name',
                                                onInput: I,
                                            },
                                            null,
                                            544,
                                        ),
                                        [
                                            [Z, p.value.name],
                                            [bn, d.value._isNew],
                                        ],
                                    ),
                                    B(
                                        i(
                                            'input',
                                            {
                                                'onUpdate:modelValue':
                                                    k[2] || (k[2] = (F) => (p.value.description = F)),
                                                type: 'text',
                                                class: 'lpDescription lpSilent',
                                                placeholder: 'Description',
                                                onInput: I,
                                            },
                                            null,
                                            544,
                                        ),
                                        [[Z, p.value.description]],
                                    ),
                                    i('span', qo, [
                                        i('i', {
                                            class: 'lpSprite lpCamera',
                                            title: 'Upload a photo or use a photo from the web',
                                            onClick: ge,
                                        }),
                                        i(
                                            'i',
                                            {
                                                class: Q(['lpSprite lpLink', { lpActive: p.value.url }]),
                                                title: 'Add a link for this item',
                                                onClick: G,
                                            },
                                            null,
                                            2,
                                        ),
                                        c.value.optionalFields.worn
                                            ? (v(),
                                              y(
                                                  'i',
                                                  {
                                                      key: 0,
                                                      class: Q(['lpSprite lpWorn', { lpActive: d.value.worn }]),
                                                      title: 'Mark this item as worn',
                                                      onClick: Ee,
                                                  },
                                                  null,
                                                  2,
                                              ))
                                            : x('', !0),
                                        c.value.optionalFields.consumable
                                            ? (v(),
                                              y(
                                                  'i',
                                                  {
                                                      key: 1,
                                                      class: Q([
                                                          'lpSprite lpConsumable',
                                                          { lpActive: d.value.consumable },
                                                      ]),
                                                      title: 'Mark this item as a consumable',
                                                      onClick: re,
                                                  },
                                                  null,
                                                  2,
                                              ))
                                            : x('', !0),
                                        i(
                                            'i',
                                            {
                                                class: Q('lpSprite lpStar lpStar' + d.value.star),
                                                title: 'Star this item',
                                                onClick: he,
                                            },
                                            null,
                                            2,
                                        ),
                                    ]),
                                    c.value.optionalFields.price
                                        ? (v(),
                                          y('span', Qo, [
                                              B(
                                                  i(
                                                      'input',
                                                      {
                                                          'onUpdate:modelValue': k[3] || (k[3] = (F) => (s.value = F)),
                                                          type: 'text',
                                                          class: Q({
                                                              lpPrice: !0,
                                                              lpNumber: !0,
                                                              lpSilent: !0,
                                                              lpSilentError: u.value,
                                                          }),
                                                          onInput: A,
                                                          onKeydown: [
                                                              k[4] || (k[4] = Le((F) => ke(F), ['up'])),
                                                              k[5] || (k[5] = Le((F) => ce(F), ['down'])),
                                                          ],
                                                          onBlur: z,
                                                      },
                                                      null,
                                                      34,
                                                  ),
                                                  [[Z, s.value], [Yt]],
                                              ),
                                          ]))
                                        : x('', !0),
                                    i('span', Ko, [
                                        B(
                                            i(
                                                'input',
                                                {
                                                    'onUpdate:modelValue': k[6] || (k[6] = (F) => (l.value = F)),
                                                    type: 'text',
                                                    class: Q({
                                                        lpWeight: !0,
                                                        lpNumber: !0,
                                                        lpSilent: !0,
                                                        lpSilentError: r.value,
                                                    }),
                                                    onInput: oe,
                                                    onKeydown: [
                                                        k[7] || (k[7] = Le((F) => ot(F), ['up'])),
                                                        k[8] || (k[8] = Le((F) => St(F), ['down'])),
                                                    ],
                                                },
                                                null,
                                                34,
                                            ),
                                            [[Z, l.value], [Yt]],
                                        ),
                                        L(yn, { unit: p.value.authorUnit, 'on-change': O }, null, 8, ['unit']),
                                    ]),
                                    i('span', Jo, [
                                        B(
                                            i(
                                                'input',
                                                {
                                                    'onUpdate:modelValue': k[9] || (k[9] = (F) => (a.value = F)),
                                                    type: 'text',
                                                    class: Q({
                                                        lpQty: !0,
                                                        lpNumber: !0,
                                                        lpSilent: !0,
                                                        lpSilentError: f.value,
                                                    }),
                                                    onInput: X,
                                                    onKeydown: [
                                                        k[10] || (k[10] = Le((F) => Te(F), ['up'])),
                                                        k[11] || (k[11] = Le((F) => we(F), ['down'])),
                                                    ],
                                                },
                                                null,
                                                34,
                                            ),
                                            [[Z, a.value]],
                                        ),
                                        i('span', Zo, [
                                            i('span', {
                                                class: 'lpSprite lpUp',
                                                onClick: k[12] || (k[12] = (F) => Te(F)),
                                            }),
                                            i('span', {
                                                class: 'lpSprite lpDown',
                                                onClick: k[13] || (k[13] = (F) => we(F)),
                                            }),
                                        ]),
                                    ]),
                                    i('span', { class: 'lpRemoveCell' }, [
                                        i(
                                            'a',
                                            { class: 'lpRemove lpRemoveItem', title: 'Remove this item', onClick: Ve },
                                            [
                                                ...(k[14] ||
                                                    (k[14] = [i('i', { class: 'lpSprite lpSpriteRemove' }, null, -1)])),
                                            ],
                                        ),
                                    ]),
                                ],
                                10,
                                Xo,
                            )
                        );
                    }
                );
            },
        },
    ),
    tl = ['id'],
    nl = { class: 'lpItems lpDataTable' },
    ol = { class: 'lpHeader lpItemsHeader' },
    ll = ['value'],
    il = { key: 0, class: 'lpPriceCell' },
    al = { class: 'lpRemoveCell' },
    sl = { class: 'lpFooter lpItemsFooter' },
    rl = { key: 0, class: 'lpPriceCell lpNumber lpSubtotal' },
    ul = { class: 'lpWeightCell lpNumber lpSubtotal' },
    dl = { class: 'lpDisplaySubtotal' },
    cl = { class: 'lpSubtotalUnit' },
    pl = { class: 'lpQtyCell lpSubtotal' },
    fl = { class: 'lpQtySubtotal' },
    ml = Object.assign(
        { name: 'Category' },
        {
            __name: 'Category',
            props: { category: { type: Object, default: null } },
            setup(o) {
                const e = o,
                    n = Y(),
                    t = C(() => n.library),
                    l = C(() =>
                        e.category.categoryItems.map((m) => ({ categoryItem: m, item: t.value.getItemById(m.itemId) })),
                    );
                function s(m, c) {
                    return _e.MgToWeight(m, c) || 0;
                }
                function a(m, c) {
                    const p = typeof m == 'number' ? m.toFixed(2) : '0.00';
                    return c + p;
                }
                function r() {
                    n.newItem({ category: e.category, _isNew: !0 });
                }
                function u(m) {
                    n.updateCategoryName({ id: e.category.id, name: m.target.value });
                }
                function f(m) {
                    n.initSpeedbump(() => n.removeCategory(m), {
                        body: 'Are you sure you want to delete this category? This cannot be undone.',
                    });
                }
                return (m, c) => {
                    const p = Re('focus-on-create');
                    return (
                        v(),
                        y(
                            'li',
                            { id: o.category.id, class: 'lpCategory' },
                            [
                                i('ul', nl, [
                                    i('li', ol, [
                                        c[2] ||
                                            (c[2] = i(
                                                'span',
                                                { class: 'lpHandleCell' },
                                                [
                                                    i('div', {
                                                        class: 'lpHandle lpCategoryHandle',
                                                        title: 'Reorder this category',
                                                    }),
                                                ],
                                                -1,
                                            )),
                                        B(
                                            i(
                                                'input',
                                                {
                                                    type: 'text',
                                                    value: o.category.name,
                                                    placeholder: 'Category Name',
                                                    class: 'lpCategoryName lpSilent',
                                                    onInput: u,
                                                },
                                                null,
                                                40,
                                                ll,
                                            ),
                                            [[p, o.category._isNew]],
                                        ),
                                        t.value.optionalFields.price ? (v(), y('span', il, 'Price')) : x('', !0),
                                        c[3] || (c[3] = i('span', { class: 'lpWeightCell' }, 'Weight', -1)),
                                        c[4] || (c[4] = i('span', { class: 'lpQtyCell' }, 'qty', -1)),
                                        i('span', al, [
                                            i(
                                                'a',
                                                {
                                                    class: 'lpRemove lpRemoveCategory',
                                                    title: 'Remove this category',
                                                    onClick: c[0] || (c[0] = (d) => f(o.category)),
                                                },
                                                [
                                                    ...(c[1] ||
                                                        (c[1] = [
                                                            i('i', { class: 'lpSprite lpSpriteRemove' }, null, -1),
                                                        ])),
                                                ],
                                            ),
                                        ]),
                                    ]),
                                    (v(!0),
                                    y(
                                        me,
                                        null,
                                        ye(
                                            l.value,
                                            (d) => (
                                                v(),
                                                ee(
                                                    el,
                                                    { key: d.item.id, 'item-container': d, category: o.category },
                                                    null,
                                                    8,
                                                    ['item-container', 'category'],
                                                )
                                            ),
                                        ),
                                        128,
                                    )),
                                    i('li', sl, [
                                        i('span', { class: 'lpAddItemCell' }, [
                                            i('a', { class: 'lpAdd lpAddItem', onClick: r }, [
                                                ...(c[5] ||
                                                    (c[5] = [
                                                        i('i', { class: 'lpSprite lpSpriteAdd' }, null, -1),
                                                        U('Add new item', -1),
                                                    ])),
                                            ]),
                                        ]),
                                        t.value.optionalFields.price
                                            ? (v(),
                                              y('span', rl, D(a(o.category.subtotalPrice, t.value.currencySymbol)), 1))
                                            : x('', !0),
                                        i('span', ul, [
                                            i('span', dl, D(s(o.category.subtotalWeight, t.value.totalUnit)), 1),
                                            i('span', cl, D(t.value.totalUnit), 1),
                                        ]),
                                        i('span', pl, [i('span', fl, D(o.category.subtotalQty), 1)]),
                                        c[6] || (c[6] = i('span', { class: 'lpRemoveCell' }, null, -1)),
                                    ]),
                                ]),
                            ],
                            8,
                            tl,
                        )
                    );
                };
            },
        },
    ),
    gl = ['value'],
    hl = Object.assign(
        { name: 'ColorPicker' },
        {
            __name: 'Colorpicker',
            props: { color: { type: String, default: null } },
            emits: ['colorChange'],
            setup(o, { expose: e, emit: n }) {
                const t = n,
                    l = E(!1);
                function s(a) {
                    t('colorChange', a.target.value);
                }
                return (
                    e({ shown: l, onColorChange: s }),
                    (a, r) => (
                        v(),
                        ee(
                            vn,
                            { id: 'lpPickerContainer', shown: l.value, onHide: r[1] || (r[1] = (u) => (l.value = !1)) },
                            {
                                target: W(() => [
                                    i(
                                        'span',
                                        {
                                            class: 'lpLegend',
                                            style: _n({ 'background-color': o.color }),
                                            onClick: r[0] || (r[0] = (u) => (l.value = !0)),
                                        },
                                        null,
                                        4,
                                    ),
                                ]),
                                content: W(() => [
                                    i('input', { type: 'color', value: o.color, onInput: s }, null, 40, gl),
                                ]),
                                _: 1,
                            },
                            8,
                            ['shown'],
                        )
                    )
                );
            },
        },
    ),
    vl = { class: 'lpListSummary' },
    yl = { class: 'lpChartContainer' },
    bl = { class: 'lpTotalsContainer' },
    wl = { class: 'lpTotals lpTable lpDataTable' },
    _l = { class: 'lpRow lpHeader' },
    Cl = { key: 0, class: 'lpCell' },
    Sl = { class: 'lpCell lpLegendCell' },
    Il = { class: 'lpCell' },
    Dl = { key: 0, class: 'lpCell lpNumber' },
    El = { class: 'lpCell lpNumber' },
    kl = ['mg'],
    Tl = { class: 'lpSubtotalUnit' },
    $l = { class: 'lpRow lpFooter lpTotal' },
    xl = ['title'],
    Pl = ['title'],
    Ol = { class: 'lpCell lpNumber lpSubtotal' },
    Nl = ['title'],
    Al = { class: 'lpTotalUnit' },
    Ll = { key: 0, 'data-weight-type': 'consumable', class: 'lpRow lpFooter lpBreakdown lpConsumableWeight' },
    Ul = { key: 0, class: 'lpCell lpNumber lpSubtotal' },
    Fl = { class: 'lpCell lpNumber lpSubtotal' },
    Ml = ['mg'],
    Hl = { class: 'lpSubtotalUnit' },
    Wl = { key: 1, 'data-weight-type': 'worn', class: 'lpRow lpFooter lpBreakdown lpWornWeight' },
    Rl = { key: 0, class: 'lpCell lpNumber' },
    Bl = { class: 'lpCell lpNumber lpSubtotal' },
    jl = ['mg'],
    Vl = { class: 'lpSubtotalUnit' },
    Yl = { key: 2, 'data-weight-type': 'base', class: 'lpRow lpFooter lpBreakdown lpBaseWeight' },
    Xl = ['title'],
    zl = { key: 0, class: 'lpCell lpNumber' },
    Gl = { class: 'lpCell lpNumber lpSubtotal' },
    ql = ['mg', 'title'],
    Ql = { class: 'lpSubtotalUnit' },
    Kl = Object.assign(
        { name: 'ListSummary' },
        {
            __name: 'ListSummary',
            props: { list: { type: Object, default: null } },
            setup(o) {
                const e = o,
                    n = Y(),
                    t = E(null),
                    l = C(() => n.library),
                    s = C(() =>
                        e.list.categoryIds.map((c, p) => {
                            const d = l.value.getCategoryById(c);
                            return {
                                ...d,
                                activeHover: t.value === d.id,
                                displayColor: Ye.rgbToString(d.color || Ye.getColor(p)),
                            };
                        }),
                    );
                function a(c, p) {
                    return _e.MgToWeight(c, p) || 0;
                }
                function r(c, p) {
                    const d = typeof c == 'number' ? c.toFixed(2) : '0.00';
                    return p + d;
                }
                function u(c) {
                    n.setTotalUnit(c);
                }
                function f(c, p) {
                    n.updateCategoryColor({ id: c.id, color: Ye.hexToRgb(p) });
                }
                function m(c) {
                    return Ye.rgbToHex(Ye.stringToRgb(c));
                }
                return (c, p) => (
                    v(),
                    y('div', vl, [
                        i('div', yl, [
                            L(
                                Dn,
                                {
                                    categories: s.value,
                                    'total-weight': o.list.totalWeight,
                                    library: l.value,
                                    onCategoryHover: p[0] || (p[0] = (d) => (t.value = d)),
                                },
                                null,
                                8,
                                ['categories', 'total-weight', 'library'],
                            ),
                        ]),
                        i('div', bl, [
                            i('ul', wl, [
                                i('li', _l, [
                                    p[1] || (p[1] = i('span', { class: 'lpCell' }, ' ', -1)),
                                    p[2] || (p[2] = i('span', { class: 'lpCell' }, ' Category ', -1)),
                                    l.value.optionalFields.price ? (v(), y('span', Cl, ' Price ')) : x('', !0),
                                    p[3] || (p[3] = i('span', { class: 'lpCell' }, ' Weight ', -1)),
                                ]),
                                (v(!0),
                                y(
                                    me,
                                    null,
                                    ye(
                                        s.value,
                                        (d) => (
                                            v(),
                                            y(
                                                'li',
                                                {
                                                    key: d.id,
                                                    class: Q({ hover: d.activeHover, 'lpTotalCategory lpRow': !0 }),
                                                },
                                                [
                                                    i('span', Sl, [
                                                        d.displayColor
                                                            ? (v(),
                                                              ee(
                                                                  hl,
                                                                  {
                                                                      key: 0,
                                                                      color: m(d.displayColor),
                                                                      onColorChange: (g) => f(d, g),
                                                                  },
                                                                  null,
                                                                  8,
                                                                  ['color', 'onColorChange'],
                                                              ))
                                                            : x('', !0),
                                                    ]),
                                                    i('span', Il, D(d.name), 1),
                                                    l.value.optionalFields.price
                                                        ? (v(),
                                                          y(
                                                              'span',
                                                              Dl,
                                                              D(r(d.subtotalPrice, l.value.currencySymbol)),
                                                              1,
                                                          ))
                                                        : x('', !0),
                                                    i('span', El, [
                                                        i(
                                                            'span',
                                                            { class: 'lpDisplaySubtotal', mg: d.subtotalWeight },
                                                            D(a(d.subtotalWeight, l.value.totalUnit)),
                                                            9,
                                                            kl,
                                                        ),
                                                        i('span', Tl, D(l.value.totalUnit), 1),
                                                    ]),
                                                ],
                                                2,
                                            )
                                        ),
                                    ),
                                    128,
                                )),
                                i('li', $l, [
                                    p[4] || (p[4] = i('span', { class: 'lpCell' }, null, -1)),
                                    i(
                                        'span',
                                        { class: 'lpCell lpSubtotal', title: o.list.totalQty + ' items' },
                                        ' Total ',
                                        8,
                                        xl,
                                    ),
                                    l.value.optionalFields.price
                                        ? (v(),
                                          y(
                                              'span',
                                              {
                                                  key: 0,
                                                  class: 'lpCell lpNumber lpSubtotal',
                                                  title: o.list.totalQty + ' items',
                                              },
                                              D(r(o.list.totalPrice, l.value.currencySymbol)),
                                              9,
                                              Pl,
                                          ))
                                        : x('', !0),
                                    i('span', Ol, [
                                        i(
                                            'span',
                                            { class: 'lpTotalValue', title: o.list.totalQty + ' items' },
                                            D(a(o.list.totalWeight, l.value.totalUnit)),
                                            9,
                                            Nl,
                                        ),
                                        i('span', Al, [
                                            L(yn, { unit: l.value.totalUnit, 'on-change': u }, null, 8, ['unit']),
                                        ]),
                                    ]),
                                ]),
                                o.list.totalConsumableWeight
                                    ? (v(),
                                      y('li', Ll, [
                                          p[5] || (p[5] = i('span', { class: 'lpCell' }, null, -1)),
                                          p[6] ||
                                              (p[6] = i('span', { class: 'lpCell lpSubtotal' }, ' Consumable ', -1)),
                                          l.value.optionalFields.price
                                              ? (v(),
                                                y(
                                                    'span',
                                                    Ul,
                                                    D(r(o.list.totalConsumablePrice, l.value.currencySymbol)),
                                                    1,
                                                ))
                                              : x('', !0),
                                          i('span', Fl, [
                                              i(
                                                  'span',
                                                  { class: 'lpDisplaySubtotal', mg: o.list.totalConsumableWeight },
                                                  D(a(o.list.totalConsumableWeight, l.value.totalUnit)),
                                                  9,
                                                  Ml,
                                              ),
                                              i('span', Hl, D(l.value.totalUnit), 1),
                                          ]),
                                      ]))
                                    : x('', !0),
                                o.list.totalWornWeight
                                    ? (v(),
                                      y('li', Wl, [
                                          p[7] || (p[7] = i('span', { class: 'lpCell' }, null, -1)),
                                          p[8] || (p[8] = i('span', { class: 'lpCell lpSubtotal' }, ' Worn ', -1)),
                                          l.value.optionalFields.price ? (v(), y('span', Rl)) : x('', !0),
                                          i('span', Bl, [
                                              i(
                                                  'span',
                                                  { class: 'lpDisplaySubtotal', mg: o.list.totalWornWeight },
                                                  D(a(o.list.totalWornWeight, l.value.totalUnit)),
                                                  9,
                                                  jl,
                                              ),
                                              i('span', Vl, D(l.value.totalUnit), 1),
                                          ]),
                                      ]))
                                    : x('', !0),
                                o.list.totalWornWeight || o.list.totalConsumableWeight
                                    ? (v(),
                                      y('li', Yl, [
                                          p[9] || (p[9] = i('span', { class: 'lpCell' }, null, -1)),
                                          i(
                                              'span',
                                              {
                                                  class: 'lpCell lpSubtotal',
                                                  title:
                                                      a(o.list.totalPackWeight, l.value.totalUnit) +
                                                      ' ' +
                                                      l.value.totalUnit +
                                                      ' pack weight (consumable + base weight)',
                                              },
                                              ' Base Weight ',
                                              8,
                                              Xl,
                                          ),
                                          l.value.optionalFields.price ? (v(), y('span', zl)) : x('', !0),
                                          i('span', Gl, [
                                              i(
                                                  'span',
                                                  {
                                                      class: 'lpDisplaySubtotal',
                                                      mg: o.list.totalBaseWeight,
                                                      title:
                                                          a(o.list.totalPackWeight, l.value.totalUnit) +
                                                          ' ' +
                                                          l.value.totalUnit +
                                                          ' pack weight (consumable + base weight)',
                                                  },
                                                  D(a(o.list.totalBaseWeight, l.value.totalUnit)),
                                                  9,
                                                  ql,
                                              ),
                                              i('span', Ql, D(l.value.totalUnit), 1),
                                          ]),
                                      ]))
                                    : x('', !0),
                            ]),
                        ]),
                    ])
                );
            },
        },
    ),
    Jl = { class: 'lpListBody' },
    Zl = { key: 0, id: 'getStarted' },
    ei = { key: 0 },
    ti = { key: 0, class: 'lpWarning' },
    ni = { key: 2, id: 'listDescriptionContainer' },
    oi = { class: 'lpCategories' },
    li = Object.assign(
        { name: 'List' },
        {
            __name: 'List',
            setup(o) {
                const e = Y(),
                    n = C(() => e.library),
                    t = C(() => e.activeList),
                    l = C(() => {
                        const p = t.value;
                        return p ? p.categoryIds.map((d) => n.value.getCategoryById(d)) : [];
                    }),
                    s = C(() => t.value.totalWeight === 0),
                    a = C(() => e.saveType === 'local'),
                    r = Ro();
                let u = null;
                (Be(l, () => {
                    ft(() => {
                        r.setup(t);
                    });
                }),
                    et(() => {
                        ((u = c()), r.setup(t));
                    }),
                    Mt(() => {
                        (r.destroy(), u && u.destroy());
                    }));
                function f() {
                    e.newCategory(t.value);
                }
                function m() {
                    e.updateListDescription(t.value);
                }
                function c() {
                    const p = document.getElementsByClassName('lpCategories')[0];
                    return b.create(p, {
                        handle: '.lpCategoryHandle',
                        animation: 150,
                        onEnd(d) {
                            const { item: g, from: w, oldIndex: I, newIndex: P } = d;
                            (P < I
                                ? w.insertBefore(g, w.children[I + 1] ?? null)
                                : w.insertBefore(g, w.children[I] ?? null),
                                e.reorderCategory({ list: t.value, before: I, after: P }));
                        },
                    });
                }
                return (p, d) => (
                    v(),
                    y('div', Jl, [
                        s.value
                            ? (v(),
                              y('div', Zl, [
                                  d[4] || (d[4] = i('h2', null, 'Welcome to LighterPack!', -1)),
                                  d[5] || (d[5] = i('p', null, "Here's what you need to get started:", -1)),
                                  i('ol', null, [
                                      d[1] ||
                                          (d[1] = i(
                                              'li',
                                              null,
                                              'Click on things to edit them. Give your list and category a name.',
                                              -1,
                                          )),
                                      d[2] ||
                                          (d[2] = i(
                                              'li',
                                              null,
                                              'Add new categories and give items weights to start the visualization.',
                                              -1,
                                          )),
                                      a.value
                                          ? x('', !0)
                                          : (v(), y('li', ei, "When you're done, share your list with others!")),
                                  ]),
                                  a.value
                                      ? (v(),
                                        y('p', ti, [
                                            ...(d[3] ||
                                                (d[3] = [
                                                    i('strong', null, 'Note:', -1),
                                                    U(
                                                        ' Your data is being saved to your local computer. In order to share your lists please register an account. ',
                                                        -1,
                                                    ),
                                                ])),
                                        ]))
                                      : x('', !0),
                              ]))
                            : x('', !0),
                        s.value ? x('', !0) : (v(), ee(Kl, { key: 1, list: t.value }, null, 8, ['list'])),
                        d[9] || (d[9] = i('div', { style: { clear: 'both' } }, null, -1)),
                        n.value.optionalFields.listDescription
                            ? (v(),
                              y('div', ni, [
                                  d[6] || (d[6] = i('h3', null, 'List Description', -1)),
                                  d[7] ||
                                      (d[7] = i(
                                          'p',
                                          null,
                                          [
                                              U(' ('),
                                              i(
                                                  'a',
                                                  {
                                                      href: 'https://guides.github.com/features/mastering-markdown/',
                                                      target: '_blank',
                                                      class: 'lpHref',
                                                  },
                                                  'Markdown',
                                              ),
                                              U(' supported) '),
                                          ],
                                          -1,
                                      )),
                                  B(
                                      i(
                                          'textarea',
                                          {
                                              id: 'listDescription',
                                              'onUpdate:modelValue': d[0] || (d[0] = (g) => (t.value.description = g)),
                                              onInput: m,
                                          },
                                          null,
                                          544,
                                      ),
                                      [[Z, t.value.description]],
                                  ),
                              ]))
                            : x('', !0),
                        i('ul', oi, [
                            (v(!0),
                            y(
                                me,
                                null,
                                ye(l.value, (g) => (v(), ee(ml, { key: g.id, category: g }, null, 8, ['category']))),
                                128,
                            )),
                        ]),
                        d[10] || (d[10] = i('hr', null, null, -1)),
                        i('a', { class: 'lpAdd addCategory', onClick: f }, [
                            ...(d[8] ||
                                (d[8] = [
                                    i('i', { class: 'lpSprite lpSpriteAdd' }, null, -1),
                                    U('Add new category', -1),
                                ])),
                        ]),
                    ])
                );
            },
        },
    ),
    ii = { key: 0 },
    ai = { class: 'buttons' },
    si = Object.assign(
        { name: 'Speedbump' },
        {
            __name: 'Speedbump',
            setup(o) {
                const e = Y(),
                    n = { title: '', body: '', confirm: 'Yes', cancel: 'No' },
                    t = C({
                        get: () => e.speedbump !== null,
                        set: (a) => {
                            a || e.closeSpeedbump();
                        },
                    }),
                    l = C(() => {
                        const a = Object.assign({}, n),
                            r = e.speedbump;
                        if (!r) return a;
                        const u = r.options;
                        return (typeof u == 'string' ? (a.body = u) : u && Object.assign(a, u), a);
                    });
                function s() {
                    e.confirmSpeedbump();
                }
                return (a, r) => {
                    const u = Re('focus-on-create');
                    return (
                        v(),
                        ee(
                            Ie,
                            { id: 'speedbump', shown: t.value, onHide: r[2] || (r[2] = (f) => (t.value = !1)) },
                            {
                                default: W(() => [
                                    l.value.title ? (v(), y('h2', ii, D(l.value.title), 1)) : x('', !0),
                                    i('p', null, D(l.value.body), 1),
                                    i('div', ai, [
                                        B(
                                            (v(),
                                            y('button', { class: 'lpButton', onClick: r[0] || (r[0] = (f) => s()) }, [
                                                U(D(l.value.confirm), 1),
                                            ])),
                                            [[u]],
                                        ),
                                        r[3] || (r[3] = U('  ', -1)),
                                        i(
                                            'button',
                                            { class: 'lpButton', onClick: r[1] || (r[1] = (f) => (t.value = !1)) },
                                            D(l.value.cancel),
                                            1,
                                        ),
                                    ]),
                                ]),
                                _: 1,
                            },
                            8,
                            ['shown'],
                        )
                    );
                };
            },
        },
    ),
    ri = ['value'],
    ui = Object.assign(
        { name: 'CopyList' },
        {
            __name: 'CopyList',
            setup(o) {
                const e = Y(),
                    n = E(!1),
                    t = C(() => e.library),
                    l = C({
                        get: () => e.activeModal === 'copyList',
                        set: (a) => {
                            a || e.closeModal();
                        },
                    });
                function s() {
                    n.value && (e.copyList(n.value), (l.value = !1));
                }
                return (a, r) => (
                    v(),
                    ee(
                        Ie,
                        { id: 'copyListDialog', shown: l.value, onHide: r[2] || (r[2] = (u) => (l.value = !1)) },
                        {
                            default: W(() => [
                                r[3] || (r[3] = i('h2', null, 'Choose the list to copy', -1)),
                                B(
                                    i(
                                        'select',
                                        {
                                            id: 'listToCopy',
                                            'onUpdate:modelValue': r[0] || (r[0] = (u) => (n.value = u)),
                                        },
                                        [
                                            (v(!0),
                                            y(
                                                me,
                                                null,
                                                ye(
                                                    t.value.lists,
                                                    (u) => (
                                                        v(),
                                                        y('option', { key: u.id, value: u.id }, D(u.name), 9, ri)
                                                    ),
                                                ),
                                                128,
                                            )),
                                        ],
                                        512,
                                    ),
                                    [[Cn, n.value]],
                                ),
                                r[4] || (r[4] = i('br', null, null, -1)),
                                r[5] || (r[5] = i('br', null, null, -1)),
                                r[6] ||
                                    (r[6] = i(
                                        'p',
                                        { class: 'lpWarning' },
                                        [
                                            i('b', null, 'Note:'),
                                            U(
                                                ' Copying a list will link the items between your lists. Updating an item in one list will alter that item in all other lists that item is in. ',
                                            ),
                                        ],
                                        -1,
                                    )),
                                i('a', { id: 'copyConfirm', class: 'lpButton', onClick: s }, 'Copy List'),
                                i(
                                    'a',
                                    { class: 'lpButton close', onClick: r[1] || (r[1] = (u) => (l.value = !1)) },
                                    'Cancel',
                                ),
                            ]),
                            _: 1,
                        },
                        8,
                        ['shown'],
                    )
                );
            },
        },
    ),
    di = { id: 'importCSV' },
    ci = { id: 'importData' },
    pi = { class: 'lpTable lpDataTable' },
    fi = { class: 'lpCell' },
    mi = { class: 'lpCell' },
    gi = { class: 'lpCell' },
    hi = { class: 'lpCell' },
    vi = { class: 'lpCell' },
    yi = { class: 'lpCell' },
    bi = { id: 'csvUpload' },
    wi = Object.assign(
        { name: 'ImportCsv' },
        {
            __name: 'ImportCsv',
            setup(o) {
                const e = Y(),
                    n = E(null),
                    t = E(!1),
                    l = E({}),
                    s = {
                        ounce: 'oz',
                        ounces: 'oz',
                        oz: 'oz',
                        pound: 'lb',
                        pounds: 'lb',
                        lb: 'lb',
                        lbs: 'lb',
                        gram: 'g',
                        grams: 'g',
                        g: 'g',
                        kilogram: 'kg',
                        kilograms: 'kg',
                        kg: 'kg',
                        kgs: 'kg',
                    };
                (Be(
                    () => e.importCSVTrigger,
                    () => {
                        n.value.click();
                    },
                ),
                    et(() => {
                        n.value.onchange = a;
                    }));
                function a(m) {
                    const c = m.target.files[0],
                        p = c.name;
                    if (c.name.length < 1) return;
                    if (c.size > 1e6) {
                        alert('File is too big');
                        return;
                    }
                    if (p.substring(p.length - 4).toLowerCase() !== '.csv') {
                        alert('Please select a CSV.');
                        return;
                    }
                    const d = new FileReader();
                    ((d.onload = (g) => {
                        u(g.target.result, c.name.substring(0, c.name.length - 4).replace(/_/g, ' '));
                    }),
                        d.readAsText(c));
                }
                function r(m) {
                    const p = [[]];
                    let d = null;
                    const g = new RegExp('(\\,|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\,\\r\\n]*))', 'gi');
                    for (; (d = g.exec(m)); ) {
                        const w = d[1];
                        w.length && w !== ',' && p.push([]);
                        let I;
                        (d[2] ? (I = d[2].replace(new RegExp('""', 'g'), '"')) : (I = d[3]), p[p.length - 1].push(I));
                    }
                    return p;
                }
                function u(m, c) {
                    const p = r(m);
                    l.value = { data: [], name: c };
                    for (const d in p) {
                        const g = p[d];
                        g.length < 6 ||
                            (g[0].toLowerCase() !== 'item name' &&
                                (isNaN(parseInt(g[3])) ||
                                    isNaN(parseInt(g[4])) ||
                                    typeof s[g[5]] > 'u' ||
                                    l.value.data.push({
                                        name: g[0],
                                        category: g[1],
                                        description: g[2],
                                        qty: parseFloat(g[3]),
                                        weight: parseFloat(g[4]),
                                        unit: s[g[5]],
                                    })));
                    }
                    l.value.data.length
                        ? (t.value = !0)
                        : alert('Unable to load spreadsheet - please verify the format.');
                }
                function f() {
                    (e.importCSV(l.value), (t.value = !1));
                }
                return (m, c) => (
                    v(),
                    y('div', di, [
                        L(
                            Ie,
                            { id: 'importValidate', shown: t.value, onHide: c[1] || (c[1] = (p) => (t.value = !1)) },
                            {
                                default: W(() => [
                                    c[3] || (c[3] = i('h2', null, 'Confirm your import', -1)),
                                    i('div', ci, [
                                        i('ul', pi, [
                                            c[2] ||
                                                (c[2] = i(
                                                    'li',
                                                    { class: 'lpRow lpHeader' },
                                                    [
                                                        i('span', { class: 'lpCell' }, 'Item Name'),
                                                        i('span', { class: 'lpCell' }, 'Category'),
                                                        i('span', { class: 'lpCell' }, 'Description'),
                                                        i('span', { class: 'lpCell' }, 'Qty'),
                                                        i('span', { class: 'lpCell' }, 'Weight'),
                                                        i('span', { class: 'lpCell' }, 'Unit'),
                                                    ],
                                                    -1,
                                                )),
                                            (v(!0),
                                            y(
                                                me,
                                                null,
                                                ye(
                                                    l.value.data,
                                                    (p, d) => (
                                                        v(),
                                                        y('li', { key: d, class: 'lpRow' }, [
                                                            i('span', fi, D(p.name), 1),
                                                            i('span', mi, D(p.category), 1),
                                                            i('span', gi, D(p.description), 1),
                                                            i('span', hi, D(p.qty), 1),
                                                            i('span', vi, D(p.weight), 1),
                                                            i('span', yi, D(p.unit), 1),
                                                        ])
                                                    ),
                                                ),
                                                128,
                                            )),
                                        ]),
                                    ]),
                                    i('a', { id: 'importConfirm', class: 'lpButton', onClick: f }, 'Import List'),
                                    i(
                                        'a',
                                        { class: 'lpButton close', onClick: c[0] || (c[0] = (p) => (t.value = !1)) },
                                        'Cancel Import',
                                    ),
                                ]),
                                _: 1,
                            },
                            8,
                            ['shown'],
                        ),
                        i('form', bi, [
                            i(
                                'input',
                                { id: 'csv', ref_key: 'csvInput', ref: n, type: 'file', name: 'csv' },
                                null,
                                512,
                            ),
                        ]),
                    ])
                );
            },
        },
    ),
    _i = { class: 'columns' },
    Ci = { class: 'lpHalf' },
    Si = { class: 'lpHalf' },
    Ii = { key: 0 },
    Di = Object.assign(
        { name: 'ItemImage' },
        {
            __name: 'ItemImage',
            setup(o) {
                const e = Y(),
                    n = E(null),
                    t = E(!1),
                    l = E(null),
                    s = E(null),
                    a = C({
                        get: () => !!(e.activeItemDialog && e.activeItemDialog.type === 'image'),
                        set: (p) => {
                            p || e.closeItemDialog();
                        },
                    }),
                    r = C(() =>
                        e.activeItemDialog && e.activeItemDialog.type === 'image'
                            ? e.activeItemDialog.item
                            : { image: null, imageUrl: null },
                    );
                Be(a, (p) => {
                    p && e.activeItemDialog && (n.value = e.activeItemDialog.item.imageUrl);
                });
                function u() {
                    (e.updateItemImageUrl({ imageUrl: n.value, item: r.value }), (a.value = !1));
                }
                function f() {
                    s.value.click();
                }
                function m(p) {
                    if (!FormData) {
                        alert(
                            'Your browser is not supported for file uploads. Please update to a more modern browser.',
                        );
                        return;
                    }
                    const d = p.target.files[0],
                        g = d.name,
                        w = d.size,
                        I = d.type;
                    if (g.length < 1) return;
                    if (w > 25e5) {
                        alert('Please upload a file less than 2.5mb');
                        return;
                    }
                    if (I != 'image/png' && I != 'image/jpg' && !I != 'image/gif' && I != 'image/jpeg') {
                        alert('File doesnt match png, jpg or gif.');
                        return;
                    }
                    const P = new FormData(l.value);
                    ((t.value = !0),
                        bt('/api/image-upload', { method: 'POST', body: P, credentials: 'same-origin' })
                            .then((O) => {
                                ((t.value = !1),
                                    e.updateItemImage({ image: O.data.id, item: r.value }),
                                    (a.value = !1));
                            })
                            .catch((O) => {
                                ((t.value = !1), alert('Upload failed! If this issue persists please file a bug.'));
                            }));
                }
                function c() {
                    (e.removeItemImage(r.value), (r.value.image = ''));
                }
                return (p, d) => (
                    v(),
                    y('div', null, [
                        L(
                            Ie,
                            { id: 'itemImageDialog', shown: a.value, onHide: d[4] || (d[4] = (g) => (a.value = !1)) },
                            {
                                default: W(() => [
                                    i('div', _i, [
                                        i('div', Ci, [
                                            d[6] || (d[6] = i('h2', null, 'Add image by URL', -1)),
                                            i(
                                                'form',
                                                {
                                                    id: 'itemImageUrlForm',
                                                    onSubmit: d[2] || (d[2] = wt((g) => u(), ['prevent'])),
                                                },
                                                [
                                                    B(
                                                        i(
                                                            'input',
                                                            {
                                                                id: 'itemImageUrl',
                                                                'onUpdate:modelValue':
                                                                    d[0] || (d[0] = (g) => (n.value = g)),
                                                                type: 'text',
                                                                placeholder: 'Image URL',
                                                            },
                                                            null,
                                                            512,
                                                        ),
                                                        [[Z, n.value]],
                                                    ),
                                                    d[5] ||
                                                        (d[5] = i(
                                                            'input',
                                                            { type: 'submit', class: 'lpButton', value: 'Save' },
                                                            null,
                                                            -1,
                                                        )),
                                                    i(
                                                        'a',
                                                        {
                                                            class: 'lpHref close',
                                                            onClick: d[1] || (d[1] = (g) => (a.value = !1)),
                                                        },
                                                        'Cancel',
                                                    ),
                                                ],
                                                32,
                                            ),
                                        ]),
                                        i('div', Si, [
                                            d[8] || (d[8] = i('h2', null, 'Upload image from disk', -1)),
                                            r.value.image
                                                ? x('', !0)
                                                : (v(),
                                                  y(
                                                      me,
                                                      { key: 0 },
                                                      [
                                                          d[7] ||
                                                              (d[7] = i(
                                                                  'p',
                                                                  { class: 'imageUploadDescription' },
                                                                  'Your image will be hosted on imgur.',
                                                                  -1,
                                                              )),
                                                          i(
                                                              'button',
                                                              { id: 'itemImageUpload', class: 'lpButton', onClick: f },
                                                              'Upload Image',
                                                          ),
                                                          i(
                                                              'a',
                                                              {
                                                                  class: 'lpHref close',
                                                                  onClick: d[3] || (d[3] = (g) => (a.value = !1)),
                                                              },
                                                              'Cancel',
                                                          ),
                                                          t.value ? (v(), y('p', Ii, 'Uploading image...')) : x('', !0),
                                                      ],
                                                      64,
                                                  )),
                                            r.value.image
                                                ? (v(),
                                                  y(
                                                      'button',
                                                      { key: 1, id: 'itemImageUpload', class: 'lpButton', onClick: c },
                                                      'Remove Image',
                                                  ))
                                                : x('', !0),
                                        ]),
                                    ]),
                                ]),
                                _: 1,
                            },
                            8,
                            ['shown'],
                        ),
                        i(
                            'form',
                            { id: 'imageUpload', ref_key: 'imageUploadForm', ref: l },
                            [
                                i(
                                    'input',
                                    {
                                        id: 'image',
                                        ref_key: 'imageInput',
                                        ref: s,
                                        type: 'file',
                                        name: 'image',
                                        onChange: m,
                                    },
                                    null,
                                    544,
                                ),
                            ],
                            512,
                        ),
                    ])
                );
            },
        },
    ),
    Ei = ['src'],
    ki = Object.assign(
        { name: 'ItemViewImage' },
        {
            __name: 'ItemViewImage',
            setup(o) {
                const e = Y(),
                    n = C({
                        get: () => !!(e.activeItemDialog && e.activeItemDialog.type === 'viewImage'),
                        set: (l) => {
                            l || e.closeItemDialog();
                        },
                    }),
                    t = C(() =>
                        e.activeItemDialog && e.activeItemDialog.type === 'viewImage'
                            ? e.activeItemDialog.imageUrl
                            : '',
                    );
                return (l, s) => (
                    v(),
                    ee(
                        Ie,
                        { id: 'lpImageDialog', shown: n.value, onHide: s[0] || (s[0] = (a) => (n.value = !1)) },
                        { default: W(() => [i('img', { src: t.value }, null, 8, Ei)]), _: 1 },
                        8,
                        ['shown'],
                    )
                );
            },
        },
    ),
    Ti = Object.assign(
        { name: 'ItemLink' },
        {
            __name: 'ItemLink',
            setup(o) {
                const e = Y(),
                    n = E(''),
                    t = C({
                        get: () => !!(e.activeItemDialog && e.activeItemDialog.type === 'link'),
                        set: (a) => {
                            a || e.closeItemDialog();
                        },
                    }),
                    l = C(() => (e.activeItemDialog ? e.activeItemDialog.item : null));
                Be(t, (a) => {
                    a && l.value && (n.value = l.value.url);
                });
                function s() {
                    (e.updateItemLink({ url: n.value, item: l.value }), e.closeItemDialog());
                }
                return (a, r) => (
                    v(),
                    ee(
                        Ie,
                        { id: 'itemLinkDialog', shown: t.value, onHide: r[2] || (r[2] = (u) => (t.value = !1)) },
                        {
                            default: W(() => [
                                r[4] || (r[4] = i('h2', null, 'Add a link for this item', -1)),
                                i(
                                    'form',
                                    { id: 'itemLinkForm', onSubmit: wt(s, ['prevent']) },
                                    [
                                        B(
                                            i(
                                                'input',
                                                {
                                                    'onUpdate:modelValue': r[0] || (r[0] = (u) => (n.value = u)),
                                                    type: 'text',
                                                    d: 'itemLink',
                                                    placeholder: 'Item Link',
                                                },
                                                null,
                                                512,
                                            ),
                                            [[Z, n.value]],
                                        ),
                                        r[3] ||
                                            (r[3] = i(
                                                'input',
                                                { type: 'submit', class: 'lpButton', value: 'Save' },
                                                null,
                                                -1,
                                            )),
                                        i(
                                            'a',
                                            { class: 'lpHref close', onClick: r[1] || (r[1] = (u) => (t.value = !1)) },
                                            'Cancel',
                                        ),
                                    ],
                                    32,
                                ),
                            ]),
                            _: 1,
                        },
                        8,
                        ['shown'],
                    )
                );
            },
        },
    ),
    $i = Object.assign(
        { name: 'Help' },
        {
            __name: 'Help',
            setup(o) {
                const e = Y(),
                    n = C({
                        get: () => e.activeModal === 'help',
                        set: (t) => {
                            t || e.closeModal();
                        },
                    });
                return (t, l) => (
                    v(),
                    ee(
                        Ie,
                        { id: 'help', shown: n.value, onHide: l[0] || (l[0] = (s) => (n.value = !1)) },
                        {
                            default: W(() => [
                                ...(l[1] ||
                                    (l[1] = [
                                        i('h2', null, 'Help', -1),
                                        i('p', null, 'Getting Started:', -1),
                                        i(
                                            'ol',
                                            null,
                                            [
                                                i(
                                                    'li',
                                                    null,
                                                    'Click on things to edit them. Give your list and category a name.',
                                                ),
                                                i('li', null, 'Add new categories and items to your list.'),
                                                i('li', null, "When you're done, share your list with others!"),
                                            ],
                                            -1,
                                        ),
                                        i('hr', null, null, -1),
                                        i('strong', null, 'Quantity and worn values', -1),
                                        i(
                                            'p',
                                            null,
                                            " If you have multiple quantity of an item and mark that item as worn, only the first quantity will count towards your worn weight. The rest will count towards your pack weight. This is because most items you have multiple of, you only wear one at once. This means you can't list your shoes/trekking poles with weights as individual weights and quantity of two - you should list as the combined weight with quantity of one. ",
                                            -1,
                                        ),
                                        i('hr', null, null, -1),
                                        i('strong', null, 'Items in multiple lists', -1),
                                        i(
                                            'p',
                                            null,
                                            [
                                                U(
                                                    ' If you copy your list or drag an item from the gear library into a second list, those items are now ',
                                                ),
                                                i('strong', null, 'linked'),
                                                U(
                                                    '. This means that changes to an item in one place will update that list everywhere. If you want to copy your list without links, for now you can export to CSV and re-import the list. ',
                                                ),
                                            ],
                                            -1,
                                        ),
                                        i('hr', null, null, -1),
                                        i(
                                            'p',
                                            null,
                                            [
                                                i(
                                                    'a',
                                                    { class: 'lpHref', href: 'mailto:info@lighterpack.com' },
                                                    'More help available via email.',
                                                ),
                                            ],
                                            -1,
                                        ),
                                    ])),
                            ]),
                            _: 1,
                        },
                        8,
                        ['shown'],
                    )
                );
            },
        },
    ),
    xi = { class: 'lpFields' },
    Pi = ['value'],
    Oi = { class: 'lpButtons' },
    Ni = { class: 'lpButton' },
    Ai = Object.assign(
        { name: 'Account' },
        {
            __name: 'Account',
            setup(o) {
                const e = Y(),
                    n = E(!1),
                    t = E([]),
                    l = E(''),
                    s = E(''),
                    a = E(''),
                    r = E(''),
                    u = C(() => e.loggedIn),
                    f = C({
                        get: () => e.activeModal === 'account',
                        set: (p) => {
                            p || e.closeModal();
                        },
                    });
                function m() {
                    if (
                        ((t.value = []),
                        l.value ||
                            t.value.push({ field: 'currentPassword', message: 'Please enter your current password.' }),
                        a.value &&
                            a.value !== r.value &&
                            t.value.push({ field: 'newPassword', message: "Your passwords don't match." }),
                        a.value &&
                            (a.value.length < 5 || a.value.length > 60) &&
                            t.value.push({
                                field: 'newPassword',
                                message: 'Please enter a password between 5 and 60 characters.',
                            }),
                        t.value.length)
                    )
                        return;
                    const p = { username: u.value, currentPassword: l.value };
                    let d = !1;
                    (a.value && ((d = !0), (p.newPassword = a.value)),
                        s.value && ((d = !0), (p.newEmail = s.value)),
                        d &&
                            ((l.value = ''),
                            (n.value = !0),
                            bt('/api/account', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                credentials: 'same-origin',
                                body: JSON.stringify(p),
                            })
                                .then((g) => {
                                    ((n.value = !1), (f.value = !1));
                                })
                                .catch((g) => {
                                    ((t.value = g), (n.value = !1));
                                })));
                }
                function c() {
                    e.showModal('deleteAccount');
                }
                return (p, d) => (
                    v(),
                    ee(
                        Ie,
                        { id: 'accountSettings', shown: f.value, onHide: d[6] || (d[6] = (g) => (f.value = !1)) },
                        {
                            default: W(() => [
                                d[10] || (d[10] = i('h2', null, 'Account Settings', -1)),
                                i(
                                    'form',
                                    { id: 'accountForm', onSubmit: d[5] || (d[5] = wt((g) => m(), ['prevent'])) },
                                    [
                                        i('div', xi, [
                                            i(
                                                'input',
                                                {
                                                    type: 'text',
                                                    name: 'username',
                                                    class: 'username',
                                                    disabled: '',
                                                    value: u.value,
                                                },
                                                null,
                                                8,
                                                Pi,
                                            ),
                                            B(
                                                i(
                                                    'input',
                                                    {
                                                        'onUpdate:modelValue': d[0] || (d[0] = (g) => (l.value = g)),
                                                        type: 'password',
                                                        placeholder: 'Current Password',
                                                        name: 'currentPassword',
                                                        class: 'currentPassword',
                                                    },
                                                    null,
                                                    512,
                                                ),
                                                [[Z, l.value]],
                                            ),
                                            d[7] || (d[7] = i('hr', null, null, -1)),
                                            B(
                                                i(
                                                    'input',
                                                    {
                                                        'onUpdate:modelValue': d[1] || (d[1] = (g) => (s.value = g)),
                                                        type: 'email',
                                                        placeholder: 'New Email',
                                                        name: 'newEmail',
                                                        class: 'newEmail',
                                                    },
                                                    null,
                                                    512,
                                                ),
                                                [[Z, s.value]],
                                            ),
                                            d[8] || (d[8] = i('hr', null, null, -1)),
                                            B(
                                                i(
                                                    'input',
                                                    {
                                                        'onUpdate:modelValue': d[2] || (d[2] = (g) => (a.value = g)),
                                                        type: 'password',
                                                        placeholder: 'New Password',
                                                        name: 'newPassword',
                                                        class: 'newPassword',
                                                    },
                                                    null,
                                                    512,
                                                ),
                                                [[Z, a.value]],
                                            ),
                                            B(
                                                i(
                                                    'input',
                                                    {
                                                        'onUpdate:modelValue': d[3] || (d[3] = (g) => (r.value = g)),
                                                        type: 'password',
                                                        placeholder: 'Confirm New Password',
                                                        name: 'confirmNewPassword',
                                                        class: 'confirmNewPassword',
                                                    },
                                                    null,
                                                    512,
                                                ),
                                                [[Z, r.value]],
                                            ),
                                        ]),
                                        L(tn, { errors: t.value }, null, 8, ['errors']),
                                        i('div', Oi, [
                                            i('button', Ni, [
                                                d[9] || (d[9] = U(' Submit ', -1)),
                                                n.value ? (v(), ee(En, { key: 0 })) : x('', !0),
                                            ]),
                                            i(
                                                'a',
                                                { class: 'lpHref', onClick: d[4] || (d[4] = (g) => (f.value = !1)) },
                                                'Cancel',
                                            ),
                                            i('a', { class: 'lpHref', onClick: c }, 'Delete account'),
                                        ]),
                                    ],
                                    32,
                                ),
                            ]),
                            _: 1,
                        },
                        8,
                        ['shown'],
                    )
                );
            },
        },
    ),
    Li = { class: 'lpFields' },
    Ui = { class: 'lpButtons' },
    Fi = Object.assign(
        { name: 'AccountDelete' },
        {
            __name: 'AccountDelete',
            setup(o) {
                const e = Y(),
                    n = Wt(),
                    t = E(!1),
                    l = E([]),
                    s = E(''),
                    a = E(''),
                    r = C(() => s.value.toLocaleLowerCase() === 'delete my account'),
                    u = C({
                        get: () => e.activeModal === 'deleteAccount',
                        set: (m) => {
                            m || e.closeModal();
                        },
                    });
                function f() {
                    ((l.value = []),
                        a.value ||
                            l.value.push({ field: 'currentPassword', message: 'Please enter your current password.' }),
                        r.value ||
                            l.value.push({ field: 'confirmationText', message: 'Please enter the confirmation text.' }),
                        !l.value.length &&
                            bt('/api/account/delete', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                credentials: 'same-origin',
                                body: JSON.stringify({ username: e.loggedIn, password: a.value }),
                            })
                                .then((m) => {
                                    ((t.value = !1), e.signout(), n.push('/signin'));
                                })
                                .catch((m) => {
                                    ((l.value = m), (t.value = !1));
                                }));
                }
                return (m, c) => (
                    v(),
                    ee(
                        Ie,
                        { id: 'deleteAccount', shown: u.value, onHide: c[4] || (c[4] = (p) => (u.value = !1)) },
                        {
                            default: W(() => [
                                c[7] || (c[7] = i('h2', null, 'Delete account?', -1)),
                                i(
                                    'form',
                                    { id: 'accountForm', onSubmit: c[3] || (c[3] = wt((p) => f(), ['prevent'])) },
                                    [
                                        c[5] ||
                                            (c[5] = i(
                                                'p',
                                                { class: 'lpWarning' },
                                                [i('strong', null, 'This action is permanent and cannot be undone.')],
                                                -1,
                                            )),
                                        c[6] ||
                                            (c[6] = i(
                                                'p',
                                                null,
                                                [
                                                    U(
                                                        ' If you want to delete your account, please enter your current password and the text ',
                                                    ),
                                                    i('strong', null, 'delete my account'),
                                                    U(': '),
                                                ],
                                                -1,
                                            )),
                                        i('div', Li, [
                                            B(
                                                i(
                                                    'input',
                                                    {
                                                        'onUpdate:modelValue': c[0] || (c[0] = (p) => (a.value = p)),
                                                        type: 'password',
                                                        placeholder: 'Current password',
                                                        name: 'currentPassword',
                                                        class: 'currentPassword',
                                                    },
                                                    null,
                                                    512,
                                                ),
                                                [[Z, a.value]],
                                            ),
                                            B(
                                                i(
                                                    'input',
                                                    {
                                                        'onUpdate:modelValue': c[1] || (c[1] = (p) => (s.value = p)),
                                                        type: 'text',
                                                        name: 'confirmationText',
                                                        placeholder: 'Confirmation text',
                                                    },
                                                    null,
                                                    512,
                                                ),
                                                [[Z, s.value]],
                                            ),
                                        ]),
                                        L(tn, { errors: l.value }, null, 8, ['errors']),
                                        i('div', Ui, [
                                            i(
                                                'input',
                                                {
                                                    type: 'submit',
                                                    value: 'Permanently delete account',
                                                    class: Q({ lpButton: !0, lpButtonDisabled: !r.value }),
                                                },
                                                null,
                                                2,
                                            ),
                                            i(
                                                'a',
                                                { class: 'lpHref', onClick: c[2] || (c[2] = (p) => (u.value = !1)) },
                                                'Cancel',
                                            ),
                                        ]),
                                    ],
                                    32,
                                ),
                            ]),
                            _: 1,
                        },
                        8,
                        ['shown'],
                    )
                );
            },
        },
    ),
    Mi = { id: 'header', class: 'clearfix' },
    Hi = ['value'],
    Wi = { key: 1, class: 'headerItem signInRegisterButtons' },
    zi = Object.assign(
        { name: 'Dashboard' },
        {
            __name: 'index',
            setup(o) {
                const e = Y(),
                    n = Wt(),
                    t = E(!1),
                    l = E(!1),
                    s = C(() => e.library),
                    a = C(() => s.value.getListById(s.value.defaultListId)),
                    r = C(() => e.loggedIn);
                (Ht(() => {
                    e.library ? (t.value = !0) : n.push('/welcome');
                }),
                    et(() => {
                        ft(() => {
                            l.value = !0;
                        });
                    }));
                function u() {
                    e.toggleSidebar();
                }
                function f(m) {
                    e.updateListName({ id: a.value.id, name: m.target.value });
                }
                return (m, c) => {
                    const p = Co,
                        d = xo,
                        g = Uo,
                        w = Ho,
                        I = In,
                        P = li,
                        O = kn,
                        A = si,
                        X = ui,
                        oe = wi,
                        z = Di,
                        le = ki,
                        de = Ti,
                        G = $i,
                        ge = Ai,
                        ie = Fi;
                    return t.value
                        ? (v(),
                          y(
                              'div',
                              { key: 0, id: 'main', class: Q({ lpHasSidebar: s.value.showSidebar }) },
                              [
                                  L(p),
                                  i(
                                      'div',
                                      { class: Q(['lpList', { lpTransition: l.value }]) },
                                      [
                                          i('div', Mi, [
                                              i('span', { class: 'headerItem' }, [
                                                  i('a', { id: 'hamburger', class: 'lpTransition', onClick: u }, [
                                                      ...(c[0] ||
                                                          (c[0] = [
                                                              i('i', { class: 'lpSprite lpHamburger' }, null, -1),
                                                          ])),
                                                  ]),
                                              ]),
                                              i(
                                                  'input',
                                                  {
                                                      id: 'lpListName',
                                                      value: a.value.name,
                                                      type: 'text',
                                                      class: 'lpListName lpSilent headerItem',
                                                      placeholder: 'List Name',
                                                      autocomplete: 'off',
                                                      name: 'lastpass-disable-search',
                                                      onInput: f,
                                                  },
                                                  null,
                                                  40,
                                                  Hi,
                                              ),
                                              L(d),
                                              L(g),
                                              r.value
                                                  ? (v(), ee(w, { key: 0 }))
                                                  : (v(),
                                                    y('span', Wi, [
                                                        L(
                                                            I,
                                                            { to: '/register', class: 'lpButton lpSmall' },
                                                            {
                                                                default: W(() => [
                                                                    ...(c[1] || (c[1] = [U('Register', -1)])),
                                                                ]),
                                                                _: 1,
                                                            },
                                                        ),
                                                        c[3] || (c[3] = U(' or ', -1)),
                                                        L(
                                                            I,
                                                            { to: '/signin', class: 'lpButton lpSmall' },
                                                            {
                                                                default: W(() => [
                                                                    ...(c[2] || (c[2] = [U('Sign In', -1)])),
                                                                ]),
                                                                _: 1,
                                                            },
                                                        ),
                                                    ])),
                                              c[4] || (c[4] = i('span', { class: 'clearfix' }, null, -1)),
                                          ]),
                                          L(P),
                                          c[5] ||
                                              (c[5] = Sn(
                                                  '<div id="lpFooter"><div class="lpSiteBy"> Site by <a class="lpHref" href="https://www.galenmaly.com/" target="_blank" rel="noopener noreferrer">Galen Maly</a> and <a class="lpHref" href="https://github.com/galenmaly/lighterpack/graphs/contributors" target="_blank" rel="noopener noreferrer">friends</a>. </div><div class="lpContact"><a class="lpHref" href="https://github.com/galenmaly/lighterpack" target="_blank" rel="noopener noreferrer">Copyleft</a> LighterPack 2019 - <a class="lpHref" href="mailto:info@lighterpack.com">Contact</a></div></div>',
                                                  1,
                                              )),
                                      ],
                                      2,
                                  ),
                                  L(O),
                                  L(A),
                                  L(X),
                                  L(oe),
                                  L(z),
                                  L(le),
                                  L(de),
                                  L(G),
                                  L(ge),
                                  L(ie),
                              ],
                              2,
                          ))
                        : x('', !0);
                };
            },
        },
    );
export { zi as default };
