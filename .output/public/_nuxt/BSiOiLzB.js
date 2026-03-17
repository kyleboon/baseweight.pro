const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            './DGJPxgEh.js',
            './BYZ0mjTS.js',
            './donut-chart.Dl9inVm8.css',
            './_id_.C-Uqcptt.css',
            './BtzAl7FG.js',
            './DXNVRMz3.js',
            './T9tIK9NT.js',
            './D-Mmche4.js',
            './modal.C1qnG6wz.css',
            './CHnPISrF.js',
            './forgot-password.C6EY7zdj.css',
            './DIRtzqgs.js',
            './moderation.D-_NvwQg.css',
            './Cpi6fCM3.js',
            './CPlW2tBH.js',
            './COR29gkO.js',
            './global-alerts.B0Yx6ZQc.css',
            './BfuYkSoz.js',
            './DXkiCk90.js',
            './C0AfYE1n.js',
            './welcome.ktz1ldve.css',
            './BCod2Xj9.js',
            './index.CNwQHqVY.css',
            './D_ZGk2cs.js',
            './D0WNy-kH.js',
            './error-404.C-Ezrlz-.css',
            './Aa7AeyTe.js',
            './error-500.DBWf9FGj.css',
        ]),
) => i.map((i) => d[i]);
(function () {
    const t = document.createElement('link').relList;
    if (t && t.supports && t.supports('modulepreload')) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
    new MutationObserver((r) => {
        for (const o of r)
            if (o.type === 'childList')
                for (const i of o.addedNodes) i.tagName === 'LINK' && i.rel === 'modulepreload' && s(i);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(r) {
        const o = {};
        return (
            r.integrity && (o.integrity = r.integrity),
            r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
            r.crossOrigin === 'use-credentials'
                ? (o.credentials = 'include')
                : r.crossOrigin === 'anonymous'
                  ? (o.credentials = 'omit')
                  : (o.credentials = 'same-origin'),
            o
        );
    }
    function s(r) {
        if (r.ep) return;
        r.ep = !0;
        const o = n(r);
        fetch(r.href, o);
    }
})();
function no(e) {
    const t = Object.create(null);
    for (const n of e.split(',')) t[n] = 1;
    return (n) => n in t;
}
const ce = {},
    dn = [],
    ht = () => {},
    _a = () => !1,
    ns = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    so = (e) => e.startsWith('onUpdate:'),
    ve = Object.assign,
    ro = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
    },
    qc = Object.prototype.hasOwnProperty,
    ie = (e, t) => qc.call(e, t),
    Q = Array.isArray,
    pn = (e) => ss(e) === '[object Map]',
    $s = (e) => ss(e) === '[object Set]',
    Fo = (e) => ss(e) === '[object Date]',
    X = (e) => typeof e == 'function',
    ge = (e) => typeof e == 'string',
    Xe = (e) => typeof e == 'symbol',
    se = (e) => e !== null && typeof e == 'object',
    oo = (e) => (se(e) || X(e)) && X(e.then) && X(e.catch),
    ba = Object.prototype.toString,
    ss = (e) => ba.call(e),
    Gc = (e) => ss(e).slice(8, -1),
    io = (e) => ss(e) === '[object Object]',
    Bs = (e) => ge(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
    Jt = no(
        ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
    ),
    Hs = (e) => {
        const t = Object.create(null);
        return (n) => t[n] || (t[n] = e(n));
    },
    Kc = /-\w/g,
    Me = Hs((e) => e.replace(Kc, (t) => t.slice(1).toUpperCase())),
    Jc = /\B([A-Z])/g,
    $t = Hs((e) => e.replace(Jc, '-$1').toLowerCase()),
    js = Hs((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    sr = Hs((e) => (e ? `on${js(e)}` : '')),
    ct = (e, t) => !Object.is(e, t),
    ms = (e, ...t) => {
        for (let n = 0; n < e.length; n++) e[n](...t);
    },
    va = (e, t, n, s = !1) => {
        Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: s, value: n });
    },
    Fs = (e) => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t;
    },
    wa = (e) => {
        const t = ge(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t;
    };
let Uo;
const Us = () =>
    Uo ||
    (Uo =
        typeof globalThis < 'u'
            ? globalThis
            : typeof self < 'u'
              ? self
              : typeof window < 'u'
                ? window
                : typeof global < 'u'
                  ? global
                  : {});
function Ws(e) {
    if (Q(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const s = e[n],
                r = ge(s) ? zc(s) : Ws(s);
            if (r) for (const o in r) t[o] = r[o];
        }
        return t;
    } else if (ge(e) || se(e)) return e;
}
const Qc = /;(?![^(]*\))/g,
    Yc = /:([^]+)/,
    Xc = /\/\*[^]*?\*\//g;
function zc(e) {
    const t = {};
    return (
        e
            .replace(Xc, '')
            .split(Qc)
            .forEach((n) => {
                if (n) {
                    const s = n.split(Yc);
                    s.length > 1 && (t[s[0].trim()] = s[1].trim());
                }
            }),
        t
    );
}
function Vs(e) {
    let t = '';
    if (ge(e)) t = e;
    else if (Q(e))
        for (let n = 0; n < e.length; n++) {
            const s = Vs(e[n]);
            s && (t += s + ' ');
        }
    else if (se(e)) for (const n in e) e[n] && (t += n + ' ');
    return t.trim();
}
function Zc(e) {
    if (!e) return null;
    let { class: t, style: n } = e;
    return (t && !ge(t) && (e.class = Vs(t)), n && (e.style = Ws(n)), e);
}
const eu = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
    tu = no(eu);
function Ea(e) {
    return !!e || e === '';
}
function nu(e, t) {
    if (e.length !== t.length) return !1;
    let n = !0;
    for (let s = 0; n && s < e.length; s++) n = rs(e[s], t[s]);
    return n;
}
function rs(e, t) {
    if (e === t) return !0;
    let n = Fo(e),
        s = Fo(t);
    if (n || s) return n && s ? e.getTime() === t.getTime() : !1;
    if (((n = Xe(e)), (s = Xe(t)), n || s)) return e === t;
    if (((n = Q(e)), (s = Q(t)), n || s)) return n && s ? nu(e, t) : !1;
    if (((n = se(e)), (s = se(t)), n || s)) {
        if (!n || !s) return !1;
        const r = Object.keys(e).length,
            o = Object.keys(t).length;
        if (r !== o) return !1;
        for (const i in e) {
            const a = e.hasOwnProperty(i),
                l = t.hasOwnProperty(i);
            if ((a && !l) || (!a && l) || !rs(e[i], t[i])) return !1;
        }
    }
    return String(e) === String(t);
}
function su(e, t) {
    return e.findIndex((n) => rs(n, t));
}
const Ia = (e) => !!(e && e.__v_isRef === !0),
    ru = (e) =>
        ge(e)
            ? e
            : e == null
              ? ''
              : Q(e) || (se(e) && (e.toString === ba || !X(e.toString)))
                ? Ia(e)
                    ? ru(e.value)
                    : JSON.stringify(e, Ca, 2)
                : String(e),
    Ca = (e, t) =>
        Ia(t)
            ? Ca(e, t.value)
            : pn(t)
              ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r], o) => ((n[rr(s, o) + ' =>'] = r), n), {}) }
              : $s(t)
                ? { [`Set(${t.size})`]: [...t.values()].map((n) => rr(n)) }
                : Xe(t)
                  ? rr(t)
                  : se(t) && !Q(t) && !io(t)
                    ? String(t)
                    : t,
    rr = (e, t = '') => {
        var n;
        return Xe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
    };
let Te;
class Sa {
    constructor(t = !1) {
        ((this.detached = t),
            (this._active = !0),
            (this._on = 0),
            (this.effects = []),
            (this.cleanups = []),
            (this._isPaused = !1),
            (this.__v_skip = !0),
            (this.parent = Te),
            !t && Te && (this.index = (Te.scopes || (Te.scopes = [])).push(this) - 1));
    }
    get active() {
        return this._active;
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
        }
    }
    run(t) {
        if (this._active) {
            const n = Te;
            try {
                return ((Te = this), t());
            } finally {
                Te = n;
            }
        }
    }
    on() {
        ++this._on === 1 && ((this.prevScope = Te), (Te = this));
    }
    off() {
        this._on > 0 && --this._on === 0 && ((Te = this.prevScope), (this.prevScope = void 0));
    }
    stop(t) {
        if (this._active) {
            this._active = !1;
            let n, s;
            for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
            for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
            if (((this.cleanups.length = 0), this.scopes)) {
                for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
                this.scopes.length = 0;
            }
            if (!this.detached && this.parent && !t) {
                const r = this.parent.scopes.pop();
                r && r !== this && ((this.parent.scopes[this.index] = r), (r.index = this.index));
            }
            this.parent = void 0;
        }
    }
}
function ao(e) {
    return new Sa(e);
}
function qs() {
    return Te;
}
function Ta(e, t = !1) {
    Te && Te.cleanups.push(e);
}
let he;
const or = new WeakSet();
class Ra {
    constructor(t) {
        ((this.fn = t),
            (this.deps = void 0),
            (this.depsTail = void 0),
            (this.flags = 5),
            (this.next = void 0),
            (this.cleanup = void 0),
            (this.scheduler = void 0),
            Te && Te.active && Te.effects.push(this));
    }
    pause() {
        this.flags |= 64;
    }
    resume() {
        this.flags & 64 && ((this.flags &= -65), or.has(this) && (or.delete(this), this.trigger()));
    }
    notify() {
        (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Pa(this);
    }
    run() {
        if (!(this.flags & 1)) return this.fn();
        ((this.flags |= 2), Wo(this), Oa(this));
        const t = he,
            n = Ye;
        ((he = this), (Ye = !0));
        try {
            return this.fn();
        } finally {
            (xa(this), (he = t), (Ye = n), (this.flags &= -3));
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep) uo(t);
            ((this.deps = this.depsTail = void 0), Wo(this), this.onStop && this.onStop(), (this.flags &= -2));
        }
    }
    trigger() {
        this.flags & 64 ? or.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
        Ar(this) && this.run();
    }
    get dirty() {
        return Ar(this);
    }
}
let Aa = 0,
    $n,
    Bn;
function Pa(e, t = !1) {
    if (((e.flags |= 8), t)) {
        ((e.next = Bn), (Bn = e));
        return;
    }
    ((e.next = $n), ($n = e));
}
function lo() {
    Aa++;
}
function co() {
    if (--Aa > 0) return;
    if (Bn) {
        let t = Bn;
        for (Bn = void 0; t; ) {
            const n = t.next;
            ((t.next = void 0), (t.flags &= -9), (t = n));
        }
    }
    let e;
    for (; $n; ) {
        let t = $n;
        for ($n = void 0; t; ) {
            const n = t.next;
            if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
                try {
                    t.trigger();
                } catch (s) {
                    e || (e = s);
                }
            t = n;
        }
    }
    if (e) throw e;
}
function Oa(e) {
    for (let t = e.deps; t; t = t.nextDep)
        ((t.version = -1), (t.prevActiveLink = t.dep.activeLink), (t.dep.activeLink = t));
}
function xa(e) {
    let t,
        n = e.depsTail,
        s = n;
    for (; s; ) {
        const r = s.prevDep;
        (s.version === -1 ? (s === n && (n = r), uo(s), ou(s)) : (t = s),
            (s.dep.activeLink = s.prevActiveLink),
            (s.prevActiveLink = void 0),
            (s = r));
    }
    ((e.deps = t), (e.depsTail = n));
}
function Ar(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || (t.dep.computed && (ka(t.dep.computed) || t.dep.version !== t.version)))
            return !0;
    return !!e._dirty;
}
function ka(e) {
    if (
        (e.flags & 4 && !(e.flags & 16)) ||
        ((e.flags &= -17), e.globalVersion === Kn) ||
        ((e.globalVersion = Kn), !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !Ar(e)))
    )
        return;
    e.flags |= 2;
    const t = e.dep,
        n = he,
        s = Ye;
    ((he = e), (Ye = !0));
    try {
        Oa(e);
        const r = e.fn(e._value);
        (t.version === 0 || ct(r, e._value)) && ((e.flags |= 128), (e._value = r), t.version++);
    } catch (r) {
        throw (t.version++, r);
    } finally {
        ((he = n), (Ye = s), xa(e), (e.flags &= -3));
    }
}
function uo(e, t = !1) {
    const { dep: n, prevSub: s, nextSub: r } = e;
    if (
        (s && ((s.nextSub = r), (e.prevSub = void 0)),
        r && ((r.prevSub = s), (e.nextSub = void 0)),
        n.subs === e && ((n.subs = s), !s && n.computed))
    ) {
        n.computed.flags &= -5;
        for (let o = n.computed.deps; o; o = o.nextDep) uo(o, !0);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ou(e) {
    const { prevDep: t, nextDep: n } = e;
    (t && ((t.nextDep = n), (e.prevDep = void 0)), n && ((n.prevDep = t), (e.nextDep = void 0)));
}
let Ye = !0;
const Ma = [];
function St() {
    (Ma.push(Ye), (Ye = !1));
}
function Tt() {
    const e = Ma.pop();
    Ye = e === void 0 ? !0 : e;
}
function Wo(e) {
    const { cleanup: t } = e;
    if (((e.cleanup = void 0), t)) {
        const n = he;
        he = void 0;
        try {
            t();
        } finally {
            he = n;
        }
    }
}
let Kn = 0;
class iu {
    constructor(t, n) {
        ((this.sub = t),
            (this.dep = n),
            (this.version = n.version),
            (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0));
    }
}
class fo {
    constructor(t) {
        ((this.computed = t),
            (this.version = 0),
            (this.activeLink = void 0),
            (this.subs = void 0),
            (this.map = void 0),
            (this.key = void 0),
            (this.sc = 0),
            (this.__v_skip = !0));
    }
    track(t) {
        if (!he || !Ye || he === this.computed) return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== he)
            ((n = this.activeLink = new iu(he, this)),
                he.deps
                    ? ((n.prevDep = he.depsTail), (he.depsTail.nextDep = n), (he.depsTail = n))
                    : (he.deps = he.depsTail = n),
                Da(n));
        else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
            const s = n.nextDep;
            ((s.prevDep = n.prevDep),
                n.prevDep && (n.prevDep.nextDep = s),
                (n.prevDep = he.depsTail),
                (n.nextDep = void 0),
                (he.depsTail.nextDep = n),
                (he.depsTail = n),
                he.deps === n && (he.deps = s));
        }
        return n;
    }
    trigger(t) {
        (this.version++, Kn++, this.notify(t));
    }
    notify(t) {
        lo();
        try {
            for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
        } finally {
            co();
        }
    }
}
function Da(e) {
    if ((e.dep.sc++, e.sub.flags & 4)) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let s = t.deps; s; s = s.nextDep) Da(s);
        }
        const n = e.dep.subs;
        (n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e));
    }
}
const ws = new WeakMap(),
    Qt = Symbol(''),
    Pr = Symbol(''),
    Jn = Symbol('');
function Re(e, t, n) {
    if (Ye && he) {
        let s = ws.get(e);
        s || ws.set(e, (s = new Map()));
        let r = s.get(n);
        (r || (s.set(n, (r = new fo())), (r.map = s), (r.key = n)), r.track());
    }
}
function Et(e, t, n, s, r, o) {
    const i = ws.get(e);
    if (!i) {
        Kn++;
        return;
    }
    const a = (l) => {
        l && l.trigger();
    };
    if ((lo(), t === 'clear')) i.forEach(a);
    else {
        const l = Q(e),
            f = l && Bs(n);
        if (l && n === 'length') {
            const c = Number(s);
            i.forEach((u, d) => {
                (d === 'length' || d === Jn || (!Xe(d) && d >= c)) && a(u);
            });
        } else
            switch (((n !== void 0 || i.has(void 0)) && a(i.get(n)), f && a(i.get(Jn)), t)) {
                case 'add':
                    l ? f && a(i.get('length')) : (a(i.get(Qt)), pn(e) && a(i.get(Pr)));
                    break;
                case 'delete':
                    l || (a(i.get(Qt)), pn(e) && a(i.get(Pr)));
                    break;
                case 'set':
                    pn(e) && a(i.get(Qt));
                    break;
            }
    }
    co();
}
function au(e, t) {
    const n = ws.get(e);
    return n && n.get(t);
}
function rn(e) {
    const t = ne(e);
    return t === e ? t : (Re(t, 'iterate', Jn), Fe(e) ? t : t.map(ze));
}
function Gs(e) {
    return (Re((e = ne(e)), 'iterate', Jn), e);
}
function at(e, t) {
    return gt(e) ? vn(dt(e) ? ze(t) : t) : ze(t);
}
const lu = {
    __proto__: null,
    [Symbol.iterator]() {
        return ir(this, Symbol.iterator, (e) => at(this, e));
    },
    concat(...e) {
        return rn(this).concat(...e.map((t) => (Q(t) ? rn(t) : t)));
    },
    entries() {
        return ir(this, 'entries', (e) => ((e[1] = at(this, e[1])), e));
    },
    every(e, t) {
        return mt(this, 'every', e, t, void 0, arguments);
    },
    filter(e, t) {
        return mt(this, 'filter', e, t, (n) => n.map((s) => at(this, s)), arguments);
    },
    find(e, t) {
        return mt(this, 'find', e, t, (n) => at(this, n), arguments);
    },
    findIndex(e, t) {
        return mt(this, 'findIndex', e, t, void 0, arguments);
    },
    findLast(e, t) {
        return mt(this, 'findLast', e, t, (n) => at(this, n), arguments);
    },
    findLastIndex(e, t) {
        return mt(this, 'findLastIndex', e, t, void 0, arguments);
    },
    forEach(e, t) {
        return mt(this, 'forEach', e, t, void 0, arguments);
    },
    includes(...e) {
        return ar(this, 'includes', e);
    },
    indexOf(...e) {
        return ar(this, 'indexOf', e);
    },
    join(e) {
        return rn(this).join(e);
    },
    lastIndexOf(...e) {
        return ar(this, 'lastIndexOf', e);
    },
    map(e, t) {
        return mt(this, 'map', e, t, void 0, arguments);
    },
    pop() {
        return xn(this, 'pop');
    },
    push(...e) {
        return xn(this, 'push', e);
    },
    reduce(e, ...t) {
        return Vo(this, 'reduce', e, t);
    },
    reduceRight(e, ...t) {
        return Vo(this, 'reduceRight', e, t);
    },
    shift() {
        return xn(this, 'shift');
    },
    some(e, t) {
        return mt(this, 'some', e, t, void 0, arguments);
    },
    splice(...e) {
        return xn(this, 'splice', e);
    },
    toReversed() {
        return rn(this).toReversed();
    },
    toSorted(e) {
        return rn(this).toSorted(e);
    },
    toSpliced(...e) {
        return rn(this).toSpliced(...e);
    },
    unshift(...e) {
        return xn(this, 'unshift', e);
    },
    values() {
        return ir(this, 'values', (e) => at(this, e));
    },
};
function ir(e, t, n) {
    const s = Gs(e),
        r = s[t]();
    return (
        s !== e &&
            !Fe(e) &&
            ((r._next = r.next),
            (r.next = () => {
                const o = r._next();
                return (o.done || (o.value = n(o.value)), o);
            })),
        r
    );
}
const cu = Array.prototype;
function mt(e, t, n, s, r, o) {
    const i = Gs(e),
        a = i !== e && !Fe(e),
        l = i[t];
    if (l !== cu[t]) {
        const u = l.apply(e, o);
        return a ? ze(u) : u;
    }
    let f = n;
    i !== e &&
        (a
            ? (f = function (u, d) {
                  return n.call(this, at(e, u), d, e);
              })
            : n.length > 2 &&
              (f = function (u, d) {
                  return n.call(this, u, d, e);
              }));
    const c = l.call(i, f, s);
    return a && r ? r(c) : c;
}
function Vo(e, t, n, s) {
    const r = Gs(e),
        o = r !== e && !Fe(e);
    let i = n,
        a = !1;
    r !== e &&
        (o
            ? ((a = s.length === 0),
              (i = function (f, c, u) {
                  return (a && ((a = !1), (f = at(e, f))), n.call(this, f, at(e, c), u, e));
              }))
            : n.length > 3 &&
              (i = function (f, c, u) {
                  return n.call(this, f, c, u, e);
              }));
    const l = r[t](i, ...s);
    return a ? at(e, l) : l;
}
function ar(e, t, n) {
    const s = ne(e);
    Re(s, 'iterate', Jn);
    const r = s[t](...n);
    return (r === -1 || r === !1) && Ks(n[0]) ? ((n[0] = ne(n[0])), s[t](...n)) : r;
}
function xn(e, t, n = []) {
    (St(), lo());
    const s = ne(e)[t].apply(e, n);
    return (co(), Tt(), s);
}
const uu = no('__proto__,__v_isRef,__isVue'),
    Na = new Set(
        Object.getOwnPropertyNames(Symbol)
            .filter((e) => e !== 'arguments' && e !== 'caller')
            .map((e) => Symbol[e])
            .filter(Xe),
    );
function fu(e) {
    Xe(e) || (e = String(e));
    const t = ne(this);
    return (Re(t, 'has', e), t.hasOwnProperty(e));
}
class La {
    constructor(t = !1, n = !1) {
        ((this._isReadonly = t), (this._isShallow = n));
    }
    get(t, n, s) {
        if (n === '__v_skip') return t.__v_skip;
        const r = this._isReadonly,
            o = this._isShallow;
        if (n === '__v_isReactive') return !r;
        if (n === '__v_isReadonly') return r;
        if (n === '__v_isShallow') return o;
        if (n === '__v_raw')
            return s === (r ? (o ? wu : ja) : o ? Ha : Ba).get(t) ||
                Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
                ? t
                : void 0;
        const i = Q(t);
        if (!r) {
            let l;
            if (i && (l = lu[n])) return l;
            if (n === 'hasOwnProperty') return fu;
        }
        const a = Reflect.get(t, n, pe(t) ? t : s);
        if ((Xe(n) ? Na.has(n) : uu(n)) || (r || Re(t, 'get', n), o)) return a;
        if (pe(a)) {
            const l = i && Bs(n) ? a : a.value;
            return r && se(l) ? xr(l) : l;
        }
        return se(a) ? (r ? xr(a) : tt(a)) : a;
    }
}
class $a extends La {
    constructor(t = !1) {
        super(!1, t);
    }
    set(t, n, s, r) {
        let o = t[n];
        const i = Q(t) && Bs(n);
        if (!this._isShallow) {
            const f = gt(o);
            if ((!Fe(s) && !gt(s) && ((o = ne(o)), (s = ne(s))), !i && pe(o) && !pe(s)))
                return (f || (o.value = s), !0);
        }
        const a = i ? Number(n) < t.length : ie(t, n),
            l = Reflect.set(t, n, s, pe(t) ? t : r);
        return (t === ne(r) && (a ? ct(s, o) && Et(t, 'set', n, s) : Et(t, 'add', n, s)), l);
    }
    deleteProperty(t, n) {
        const s = ie(t, n);
        t[n];
        const r = Reflect.deleteProperty(t, n);
        return (r && s && Et(t, 'delete', n, void 0), r);
    }
    has(t, n) {
        const s = Reflect.has(t, n);
        return ((!Xe(n) || !Na.has(n)) && Re(t, 'has', n), s);
    }
    ownKeys(t) {
        return (Re(t, 'iterate', Q(t) ? 'length' : Qt), Reflect.ownKeys(t));
    }
}
class hu extends La {
    constructor(t = !1) {
        super(!0, t);
    }
    set(t, n) {
        return !0;
    }
    deleteProperty(t, n) {
        return !0;
    }
}
const du = new $a(),
    pu = new hu(),
    gu = new $a(!0);
const Or = (e) => e,
    as = (e) => Reflect.getPrototypeOf(e);
function yu(e, t, n) {
    return function (...s) {
        const r = this.__v_raw,
            o = ne(r),
            i = pn(o),
            a = e === 'entries' || (e === Symbol.iterator && i),
            l = e === 'keys' && i,
            f = r[e](...s),
            c = n ? Or : t ? vn : ze;
        return (
            !t && Re(o, 'iterate', l ? Pr : Qt),
            ve(Object.create(f), {
                next() {
                    const { value: u, done: d } = f.next();
                    return d ? { value: u, done: d } : { value: a ? [c(u[0]), c(u[1])] : c(u), done: d };
                },
            })
        );
    };
}
function ls(e) {
    return function (...t) {
        return e === 'delete' ? !1 : e === 'clear' ? void 0 : this;
    };
}
function mu(e, t) {
    const n = {
        get(r) {
            const o = this.__v_raw,
                i = ne(o),
                a = ne(r);
            e || (ct(r, a) && Re(i, 'get', r), Re(i, 'get', a));
            const { has: l } = as(i),
                f = t ? Or : e ? vn : ze;
            if (l.call(i, r)) return f(o.get(r));
            if (l.call(i, a)) return f(o.get(a));
            o !== i && o.get(r);
        },
        get size() {
            const r = this.__v_raw;
            return (!e && Re(ne(r), 'iterate', Qt), r.size);
        },
        has(r) {
            const o = this.__v_raw,
                i = ne(o),
                a = ne(r);
            return (e || (ct(r, a) && Re(i, 'has', r), Re(i, 'has', a)), r === a ? o.has(r) : o.has(r) || o.has(a));
        },
        forEach(r, o) {
            const i = this,
                a = i.__v_raw,
                l = ne(a),
                f = t ? Or : e ? vn : ze;
            return (!e && Re(l, 'iterate', Qt), a.forEach((c, u) => r.call(o, f(c), f(u), i)));
        },
    };
    return (
        ve(
            n,
            e
                ? { add: ls('add'), set: ls('set'), delete: ls('delete'), clear: ls('clear') }
                : {
                      add(r) {
                          const o = ne(this),
                              i = as(o),
                              a = ne(r),
                              l = !t && !Fe(r) && !gt(r) ? a : r;
                          return (
                              i.has.call(o, l) ||
                                  (ct(r, l) && i.has.call(o, r)) ||
                                  (ct(a, l) && i.has.call(o, a)) ||
                                  (o.add(l), Et(o, 'add', l, l)),
                              this
                          );
                      },
                      set(r, o) {
                          !t && !Fe(o) && !gt(o) && (o = ne(o));
                          const i = ne(this),
                              { has: a, get: l } = as(i);
                          let f = a.call(i, r);
                          f || ((r = ne(r)), (f = a.call(i, r)));
                          const c = l.call(i, r);
                          return (i.set(r, o), f ? ct(o, c) && Et(i, 'set', r, o) : Et(i, 'add', r, o), this);
                      },
                      delete(r) {
                          const o = ne(this),
                              { has: i, get: a } = as(o);
                          let l = i.call(o, r);
                          (l || ((r = ne(r)), (l = i.call(o, r))), a && a.call(o, r));
                          const f = o.delete(r);
                          return (l && Et(o, 'delete', r, void 0), f);
                      },
                      clear() {
                          const r = ne(this),
                              o = r.size !== 0,
                              i = r.clear();
                          return (o && Et(r, 'clear', void 0, void 0), i);
                      },
                  },
        ),
        ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
            n[r] = yu(r, e, t);
        }),
        n
    );
}
function ho(e, t) {
    const n = mu(e, t);
    return (s, r, o) =>
        r === '__v_isReactive'
            ? !e
            : r === '__v_isReadonly'
              ? e
              : r === '__v_raw'
                ? s
                : Reflect.get(ie(n, r) && r in s ? n : s, r, o);
}
const _u = { get: ho(!1, !1) },
    bu = { get: ho(!1, !0) },
    vu = { get: ho(!0, !1) };
const Ba = new WeakMap(),
    Ha = new WeakMap(),
    ja = new WeakMap(),
    wu = new WeakMap();
function Eu(e) {
    switch (e) {
        case 'Object':
        case 'Array':
            return 1;
        case 'Map':
        case 'Set':
        case 'WeakMap':
        case 'WeakSet':
            return 2;
        default:
            return 0;
    }
}
function Iu(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Eu(Gc(e));
}
function tt(e) {
    return gt(e) ? e : po(e, !1, du, _u, Ba);
}
function It(e) {
    return po(e, !1, gu, bu, Ha);
}
function xr(e) {
    return po(e, !0, pu, vu, ja);
}
function po(e, t, n, s, r) {
    if (!se(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
    const o = Iu(e);
    if (o === 0) return e;
    const i = r.get(e);
    if (i) return i;
    const a = new Proxy(e, o === 2 ? s : n);
    return (r.set(e, a), a);
}
function dt(e) {
    return gt(e) ? dt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function gt(e) {
    return !!(e && e.__v_isReadonly);
}
function Fe(e) {
    return !!(e && e.__v_isShallow);
}
function Ks(e) {
    return e ? !!e.__v_raw : !1;
}
function ne(e) {
    const t = e && e.__v_raw;
    return t ? ne(t) : e;
}
function go(e) {
    return (!ie(e, '__v_skip') && Object.isExtensible(e) && va(e, '__v_skip', !0), e);
}
const ze = (e) => (se(e) ? tt(e) : e),
    vn = (e) => (se(e) ? xr(e) : e);
function pe(e) {
    return e ? e.__v_isRef === !0 : !1;
}
function pt(e) {
    return Fa(e, !1);
}
function en(e) {
    return Fa(e, !0);
}
function Fa(e, t) {
    return pe(e) ? e : new Cu(e, t);
}
class Cu {
    constructor(t, n) {
        ((this.dep = new fo()),
            (this.__v_isRef = !0),
            (this.__v_isShallow = !1),
            (this._rawValue = n ? t : ne(t)),
            (this._value = n ? t : ze(t)),
            (this.__v_isShallow = n));
    }
    get value() {
        return (this.dep.track(), this._value);
    }
    set value(t) {
        const n = this._rawValue,
            s = this.__v_isShallow || Fe(t) || gt(t);
        ((t = s ? t : ne(t)), ct(t, n) && ((this._rawValue = t), (this._value = s ? t : ze(t)), this.dep.trigger()));
    }
}
function le(e) {
    return pe(e) ? e.value : e;
}
function lt(e) {
    return X(e) ? e() : le(e);
}
const Su = {
    get: (e, t, n) => (t === '__v_raw' ? e : le(Reflect.get(e, t, n))),
    set: (e, t, n, s) => {
        const r = e[t];
        return pe(r) && !pe(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
    },
};
function Ua(e) {
    return dt(e) ? e : new Proxy(e, Su);
}
function Tu(e) {
    const t = Q(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = Va(e, n);
    return t;
}
class Ru {
    constructor(t, n, s) {
        ((this._object = t),
            (this._key = n),
            (this._defaultValue = s),
            (this.__v_isRef = !0),
            (this._value = void 0),
            (this._raw = ne(t)));
        let r = !0,
            o = t;
        if (!Q(t) || !Bs(String(n)))
            do r = !Ks(o) || Fe(o);
            while (r && (o = o.__v_raw));
        this._shallow = r;
    }
    get value() {
        let t = this._object[this._key];
        return (this._shallow && (t = le(t)), (this._value = t === void 0 ? this._defaultValue : t));
    }
    set value(t) {
        if (this._shallow && pe(this._raw[this._key])) {
            const n = this._object[this._key];
            if (pe(n)) {
                n.value = t;
                return;
            }
        }
        this._object[this._key] = t;
    }
    get dep() {
        return au(this._raw, this._key);
    }
}
class Au {
    constructor(t) {
        ((this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0), (this._value = void 0));
    }
    get value() {
        return (this._value = this._getter());
    }
}
function Wa(e, t, n) {
    return pe(e) ? e : X(e) ? new Au(e) : se(e) && arguments.length > 1 ? Va(e, t, n) : pt(e);
}
function Va(e, t, n) {
    return new Ru(e, t, n);
}
class Pu {
    constructor(t, n, s) {
        ((this.fn = t),
            (this.setter = n),
            (this._value = void 0),
            (this.dep = new fo(this)),
            (this.__v_isRef = !0),
            (this.deps = void 0),
            (this.depsTail = void 0),
            (this.flags = 16),
            (this.globalVersion = Kn - 1),
            (this.next = void 0),
            (this.effect = this),
            (this.__v_isReadonly = !n),
            (this.isSSR = s));
    }
    notify() {
        if (((this.flags |= 16), !(this.flags & 8) && he !== this)) return (Pa(this, !0), !0);
    }
    get value() {
        const t = this.dep.track();
        return (ka(this), t && (t.version = this.dep.version), this._value);
    }
    set value(t) {
        this.setter && this.setter(t);
    }
}
function Ou(e, t, n = !1) {
    let s, r;
    return (X(e) ? (s = e) : ((s = e.get), (r = e.set)), new Pu(s, r, n));
}
const cs = {},
    Es = new WeakMap();
let Vt;
function xu(e, t = !1, n = Vt) {
    if (n) {
        let s = Es.get(n);
        (s || Es.set(n, (s = [])), s.push(e));
    }
}
function ku(e, t, n = ce) {
    const { immediate: s, deep: r, once: o, scheduler: i, augmentJob: a, call: l } = n,
        f = (v) => (r ? v : Fe(v) || r === !1 || r === 0 ? Ct(v, 1) : Ct(v));
    let c,
        u,
        d,
        h,
        _ = !1,
        g = !1;
    if (
        (pe(e)
            ? ((u = () => e.value), (_ = Fe(e)))
            : dt(e)
              ? ((u = () => f(e)), (_ = !0))
              : Q(e)
                ? ((g = !0),
                  (_ = e.some((v) => dt(v) || Fe(v))),
                  (u = () =>
                      e.map((v) => {
                          if (pe(v)) return v.value;
                          if (dt(v)) return f(v);
                          if (X(v)) return l ? l(v, 2) : v();
                      })))
                : X(e)
                  ? t
                      ? (u = l ? () => l(e, 2) : e)
                      : (u = () => {
                            if (d) {
                                St();
                                try {
                                    d();
                                } finally {
                                    Tt();
                                }
                            }
                            const v = Vt;
                            Vt = c;
                            try {
                                return l ? l(e, 3, [h]) : e(h);
                            } finally {
                                Vt = v;
                            }
                        })
                  : (u = ht),
        t && r)
    ) {
        const v = u,
            E = r === !0 ? 1 / 0 : r;
        u = () => Ct(v(), E);
    }
    const S = qs(),
        b = () => {
            (c.stop(), S && S.active && ro(S.effects, c));
        };
    if (o && t) {
        const v = t;
        t = (...E) => {
            (v(...E), b());
        };
    }
    let w = g ? new Array(e.length).fill(cs) : cs;
    const y = (v) => {
        if (!(!(c.flags & 1) || (!c.dirty && !v)))
            if (t) {
                const E = c.run();
                if (r || _ || (g ? E.some((N, D) => ct(N, w[D])) : ct(E, w))) {
                    d && d();
                    const N = Vt;
                    Vt = c;
                    try {
                        const D = [E, w === cs ? void 0 : g && w[0] === cs ? [] : w, h];
                        ((w = E), l ? l(t, 3, D) : t(...D));
                    } finally {
                        Vt = N;
                    }
                }
            } else c.run();
    };
    return (
        a && a(y),
        (c = new Ra(u)),
        (c.scheduler = i ? () => i(y, !1) : y),
        (h = (v) => xu(v, !1, c)),
        (d = c.onStop =
            () => {
                const v = Es.get(c);
                if (v) {
                    if (l) l(v, 4);
                    else for (const E of v) E();
                    Es.delete(c);
                }
            }),
        t ? (s ? y(!0) : (w = c.run())) : i ? i(y.bind(null, !0), !0) : c.run(),
        (b.pause = c.pause.bind(c)),
        (b.resume = c.resume.bind(c)),
        (b.stop = b),
        b
    );
}
function Ct(e, t = 1 / 0, n) {
    if (t <= 0 || !se(e) || e.__v_skip || ((n = n || new Map()), (n.get(e) || 0) >= t)) return e;
    if ((n.set(e, t), t--, pe(e))) Ct(e.value, t, n);
    else if (Q(e)) for (let s = 0; s < e.length; s++) Ct(e[s], t, n);
    else if ($s(e) || pn(e))
        e.forEach((s) => {
            Ct(s, t, n);
        });
    else if (io(e)) {
        for (const s in e) Ct(e[s], t, n);
        for (const s of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, s) && Ct(e[s], t, n);
    }
    return e;
}
function os(e, t, n, s) {
    try {
        return s ? e(...s) : e();
    } catch (r) {
        Tn(r, t, n);
    }
}
function Ze(e, t, n, s) {
    if (X(e)) {
        const r = os(e, t, n, s);
        return (
            r &&
                oo(r) &&
                r.catch((o) => {
                    Tn(o, t, n);
                }),
            r
        );
    }
    if (Q(e)) {
        const r = [];
        for (let o = 0; o < e.length; o++) r.push(Ze(e[o], t, n, s));
        return r;
    }
}
function Tn(e, t, n, s = !0) {
    const r = t ? t.vnode : null,
        { errorHandler: o, throwUnhandledErrorInProduction: i } = (t && t.appContext.config) || ce;
    if (t) {
        let a = t.parent;
        const l = t.proxy,
            f = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; a; ) {
            const c = a.ec;
            if (c) {
                for (let u = 0; u < c.length; u++) if (c[u](e, l, f) === !1) return;
            }
            a = a.parent;
        }
        if (o) {
            (St(), os(o, null, 10, [e, l, f]), Tt());
            return;
        }
    }
    Mu(e, n, r, s, i);
}
function Mu(e, t, n, s = !0, r = !1) {
    if (r) throw e;
    console.error(e);
}
const xe = [];
let rt = -1;
const gn = [];
let kt = null,
    ln = 0;
const qa = Promise.resolve();
let Is = null;
function Rn(e) {
    const t = Is || qa;
    return e ? t.then(this ? e.bind(this) : e) : t;
}
function Du(e) {
    let t = rt + 1,
        n = xe.length;
    for (; t < n; ) {
        const s = (t + n) >>> 1,
            r = xe[s],
            o = Yn(r);
        o < e || (o === e && r.flags & 2) ? (t = s + 1) : (n = s);
    }
    return t;
}
function yo(e) {
    if (!(e.flags & 1)) {
        const t = Yn(e),
            n = xe[xe.length - 1];
        (!n || (!(e.flags & 2) && t >= Yn(n)) ? xe.push(e) : xe.splice(Du(t), 0, e), (e.flags |= 1), Ga());
    }
}
function Ga() {
    Is || (Is = qa.then(Ka));
}
function Qn(e) {
    (Q(e) ? gn.push(...e) : kt && e.id === -1 ? kt.splice(ln + 1, 0, e) : e.flags & 1 || (gn.push(e), (e.flags |= 1)),
        Ga());
}
function qo(e, t, n = rt + 1) {
    for (; n < xe.length; n++) {
        const s = xe[n];
        if (s && s.flags & 2) {
            if (e && s.id !== e.uid) continue;
            (xe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2));
        }
    }
}
function Cs(e) {
    if (gn.length) {
        const t = [...new Set(gn)].sort((n, s) => Yn(n) - Yn(s));
        if (((gn.length = 0), kt)) {
            kt.push(...t);
            return;
        }
        for (kt = t, ln = 0; ln < kt.length; ln++) {
            const n = kt[ln];
            (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2));
        }
        ((kt = null), (ln = 0));
    }
}
const Yn = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function Ka(e) {
    try {
        for (rt = 0; rt < xe.length; rt++) {
            const t = xe[rt];
            t &&
                !(t.flags & 8) &&
                (t.flags & 4 && (t.flags &= -2), os(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
        }
    } finally {
        for (; rt < xe.length; rt++) {
            const t = xe[rt];
            t && (t.flags &= -2);
        }
        ((rt = -1), (xe.length = 0), Cs(), (Is = null), (xe.length || gn.length) && Ka());
    }
}
let Ce = null,
    Ja = null;
function Ss(e) {
    const t = Ce;
    return ((Ce = e), (Ja = (e && e.type.__scopeId) || null), t);
}
function Qa(e, t = Ce, n) {
    if (!t || e._n) return e;
    const s = (...r) => {
        s._d && As(-1);
        const o = Ss(t);
        let i;
        try {
            i = e(...r);
        } finally {
            (Ss(o), s._d && As(1));
        }
        return i;
    };
    return ((s._n = !0), (s._c = !0), (s._d = !0), s);
}
function cm(e, t) {
    if (Ce === null) return e;
    const n = zs(Ce),
        s = e.dirs || (e.dirs = []);
    for (let r = 0; r < t.length; r++) {
        let [o, i, a, l = ce] = t[r];
        o &&
            (X(o) && (o = { mounted: o, updated: o }),
            o.deep && Ct(i),
            s.push({ dir: o, instance: n, value: i, oldValue: void 0, arg: a, modifiers: l }));
    }
    return e;
}
function ot(e, t, n, s) {
    const r = e.dirs,
        o = t && t.dirs;
    for (let i = 0; i < r.length; i++) {
        const a = r[i];
        o && (a.oldValue = o[i].value);
        let l = a.dir[s];
        l && (St(), Ze(l, n, 8, [e.el, a, e, t]), Tt());
    }
}
function Hn(e, t) {
    if (Ee) {
        let n = Ee.provides;
        const s = Ee.parent && Ee.parent.provides;
        (s === n && (n = Ee.provides = Object.create(s)), (n[e] = t));
    }
}
function De(e, t, n = !1) {
    const s = Lt();
    if (s || zt) {
        let r = zt
            ? zt._context.provides
            : s
              ? s.parent == null || s.ce
                  ? s.vnode.appContext && s.vnode.appContext.provides
                  : s.parent.provides
              : void 0;
        if (r && e in r) return r[e];
        if (arguments.length > 1) return n && X(t) ? t.call(s && s.proxy) : t;
    }
}
function Js() {
    return !!(Lt() || zt);
}
const Nu = Symbol.for('v-scx'),
    Lu = () => De(Nu);
function $u(e, t) {
    return mo(e, null, t);
}
function Yt(e, t, n) {
    return mo(e, t, n);
}
function mo(e, t, n = ce) {
    const { immediate: s, deep: r, flush: o, once: i } = n,
        a = ve({}, n),
        l = (t && s) || (!t && o !== 'post');
    let f;
    if (tn) {
        if (o === 'sync') {
            const h = Lu();
            f = h.__watcherHandles || (h.__watcherHandles = []);
        } else if (!l) {
            const h = () => {};
            return ((h.stop = ht), (h.resume = ht), (h.pause = ht), h);
        }
    }
    const c = Ee;
    a.call = (h, _, g) => Ze(h, c, _, g);
    let u = !1;
    (o === 'post'
        ? (a.scheduler = (h) => {
              Pe(h, c && c.suspense);
          })
        : o !== 'sync' &&
          ((u = !0),
          (a.scheduler = (h, _) => {
              _ ? h() : yo(h);
          })),
        (a.augmentJob = (h) => {
            (t && (h.flags |= 4), u && ((h.flags |= 2), c && ((h.id = c.uid), (h.i = c))));
        }));
    const d = ku(e, t, a);
    return (tn && (f ? f.push(d) : l && d()), d);
}
function Bu(e, t, n) {
    const s = this.proxy,
        r = ge(e) ? (e.includes('.') ? Ya(s, e) : () => s[e]) : e.bind(s, s);
    let o;
    X(t) ? (o = t) : ((o = t.handler), (n = t));
    const i = An(this),
        a = mo(r, o.bind(s), n);
    return (i(), a);
}
function Ya(e, t) {
    const n = t.split('.');
    return () => {
        let s = e;
        for (let r = 0; r < n.length && s; r++) s = s[n[r]];
        return s;
    };
}
const Hu = Symbol('_vte'),
    Xa = (e) => e.__isTeleport,
    it = Symbol('_leaveCb'),
    kn = Symbol('_enterCb');
function ju() {
    const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() };
    return (
        al(() => {
            e.isMounted = !0;
        }),
        vo(() => {
            e.isUnmounting = !0;
        }),
        e
    );
}
const Ve = [Function, Array],
    za = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: Ve,
        onEnter: Ve,
        onAfterEnter: Ve,
        onEnterCancelled: Ve,
        onBeforeLeave: Ve,
        onLeave: Ve,
        onAfterLeave: Ve,
        onLeaveCancelled: Ve,
        onBeforeAppear: Ve,
        onAppear: Ve,
        onAfterAppear: Ve,
        onAppearCancelled: Ve,
    },
    Za = (e) => {
        const t = e.subTree;
        return t.component ? Za(t.component) : t;
    },
    Fu = {
        name: 'BaseTransition',
        props: za,
        setup(e, { slots: t }) {
            const n = Lt(),
                s = ju();
            return () => {
                const r = t.default && nl(t.default(), !0);
                if (!r || !r.length) return;
                const o = el(r),
                    i = ne(e),
                    { mode: a } = i;
                if (s.isLeaving) return lr(o);
                const l = Go(o);
                if (!l) return lr(o);
                let f = kr(l, i, s, n, (u) => (f = u));
                l.type !== be && Xn(l, f);
                let c = n.subTree && Go(n.subTree);
                if (c && c.type !== be && !ft(c, l) && Za(n).type !== be) {
                    let u = kr(c, i, s, n);
                    if ((Xn(c, u), a === 'out-in' && l.type !== be))
                        return (
                            (s.isLeaving = !0),
                            (u.afterLeave = () => {
                                ((s.isLeaving = !1), n.job.flags & 8 || n.update(), delete u.afterLeave, (c = void 0));
                            }),
                            lr(o)
                        );
                    a === 'in-out' && l.type !== be
                        ? (u.delayLeave = (d, h, _) => {
                              const g = tl(s, c);
                              ((g[String(c.key)] = c),
                                  (d[it] = () => {
                                      (h(), (d[it] = void 0), delete f.delayedLeave, (c = void 0));
                                  }),
                                  (f.delayedLeave = () => {
                                      (_(), delete f.delayedLeave, (c = void 0));
                                  }));
                          })
                        : (c = void 0);
                } else c && (c = void 0);
                return o;
            };
        },
    };
function el(e) {
    let t = e[0];
    if (e.length > 1) {
        for (const n of e)
            if (n.type !== be) {
                t = n;
                break;
            }
    }
    return t;
}
const Uu = Fu;
function tl(e, t) {
    const { leavingVNodes: n } = e;
    let s = n.get(t.type);
    return (s || ((s = Object.create(null)), n.set(t.type, s)), s);
}
function kr(e, t, n, s, r) {
    const {
            appear: o,
            mode: i,
            persisted: a = !1,
            onBeforeEnter: l,
            onEnter: f,
            onAfterEnter: c,
            onEnterCancelled: u,
            onBeforeLeave: d,
            onLeave: h,
            onAfterLeave: _,
            onLeaveCancelled: g,
            onBeforeAppear: S,
            onAppear: b,
            onAfterAppear: w,
            onAppearCancelled: y,
        } = t,
        v = String(e.key),
        E = tl(n, e),
        N = (C, x) => {
            C && Ze(C, s, 9, x);
        },
        D = (C, x) => {
            const q = x[1];
            (N(C, x), Q(C) ? C.every((A) => A.length <= 1) && q() : C.length <= 1 && q());
        },
        P = {
            mode: i,
            persisted: a,
            beforeEnter(C) {
                let x = l;
                if (!n.isMounted)
                    if (o) x = S || l;
                    else return;
                C[it] && C[it](!0);
                const q = E[v];
                (q && ft(e, q) && q.el[it] && q.el[it](), N(x, [C]));
            },
            enter(C) {
                if (E[v] === e) return;
                let x = f,
                    q = c,
                    A = u;
                if (!n.isMounted)
                    if (o) ((x = b || f), (q = w || c), (A = y || u));
                    else return;
                let U = !1;
                C[kn] = (re) => {
                    U || ((U = !0), re ? N(A, [C]) : N(q, [C]), P.delayedLeave && P.delayedLeave(), (C[kn] = void 0));
                };
                const ee = C[kn].bind(null, !1);
                x ? D(x, [C, ee]) : ee();
            },
            leave(C, x) {
                const q = String(e.key);
                if ((C[kn] && C[kn](!0), n.isUnmounting)) return x();
                N(d, [C]);
                let A = !1;
                C[it] = (ee) => {
                    A || ((A = !0), x(), ee ? N(g, [C]) : N(_, [C]), (C[it] = void 0), E[q] === e && delete E[q]);
                };
                const U = C[it].bind(null, !1);
                ((E[q] = e), h ? D(h, [C, U]) : U());
            },
            clone(C) {
                const x = kr(C, t, n, s, r);
                return (r && r(x), x);
            },
        };
    return P;
}
function lr(e) {
    if (is(e)) return ((e = Nt(e)), (e.children = null), e);
}
function Go(e) {
    if (!is(e)) return Xa(e.type) && e.children ? el(e.children) : e;
    if (e.component) return e.component.subTree;
    const { shapeFlag: t, children: n } = e;
    if (n) {
        if (t & 16) return n[0];
        if (t & 32 && X(n.default)) return n.default();
    }
}
function Xn(e, t) {
    e.shapeFlag & 6 && e.component
        ? ((e.transition = t), Xn(e.component.subTree, t))
        : e.shapeFlag & 128
          ? ((e.ssContent.transition = t.clone(e.ssContent)), (e.ssFallback.transition = t.clone(e.ssFallback)))
          : (e.transition = t);
}
function nl(e, t = !1, n) {
    let s = [],
        r = 0;
    for (let o = 0; o < e.length; o++) {
        let i = e[o];
        const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
        i.type === ke
            ? (i.patchFlag & 128 && r++, (s = s.concat(nl(i.children, t, a))))
            : (t || i.type !== be) && s.push(a != null ? Nt(i, { key: a }) : i);
    }
    if (r > 1) for (let o = 0; o < s.length; o++) s[o].patchFlag = -2;
    return s;
}
function _o(e, t) {
    return X(e) ? ve({ name: e.name }, t, { setup: e }) : e;
}
function bo(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0];
}
function Ko(e, t) {
    let n;
    return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Ts = new WeakMap();
function yn(e, t, n, s, r = !1) {
    if (Q(e)) {
        e.forEach((g, S) => yn(g, t && (Q(t) ? t[S] : t), n, s, r));
        return;
    }
    if (Xt(s) && !r) {
        s.shapeFlag & 512 &&
            s.type.__asyncResolved &&
            s.component.subTree.component &&
            yn(e, t, n, s.component.subTree);
        return;
    }
    const o = s.shapeFlag & 4 ? zs(s.component) : s.el,
        i = r ? null : o,
        { i: a, r: l } = e,
        f = t && t.r,
        c = a.refs === ce ? (a.refs = {}) : a.refs,
        u = a.setupState,
        d = ne(u),
        h = u === ce ? _a : (g) => (Ko(c, g) ? !1 : ie(d, g)),
        _ = (g, S) => !(S && Ko(c, S));
    if (f != null && f !== l) {
        if ((Jo(t), ge(f))) ((c[f] = null), h(f) && (u[f] = null));
        else if (pe(f)) {
            const g = t;
            (_(f, g.k) && (f.value = null), g.k && (c[g.k] = null));
        }
    }
    if (X(l)) os(l, a, 12, [i, c]);
    else {
        const g = ge(l),
            S = pe(l);
        if (g || S) {
            const b = () => {
                if (e.f) {
                    const w = g ? (h(l) ? u[l] : c[l]) : _() || !e.k ? l.value : c[e.k];
                    if (r) Q(w) && ro(w, o);
                    else if (Q(w)) w.includes(o) || w.push(o);
                    else if (g) ((c[l] = [o]), h(l) && (u[l] = c[l]));
                    else {
                        const y = [o];
                        (_(l, e.k) && (l.value = y), e.k && (c[e.k] = y));
                    }
                } else g ? ((c[l] = i), h(l) && (u[l] = i)) : S && (_(l, e.k) && (l.value = i), e.k && (c[e.k] = i));
            };
            if (i) {
                const w = () => {
                    (b(), Ts.delete(e));
                };
                ((w.id = -1), Ts.set(e, w), Pe(w, n));
            } else (Jo(e), b());
        }
    }
}
function Jo(e) {
    const t = Ts.get(e);
    t && ((t.flags |= 8), Ts.delete(e));
}
let Qo = !1;
const on = () => {
        Qo || (console.error('Hydration completed but contains mismatches.'), (Qo = !0));
    },
    Wu = (e) => e.namespaceURI.includes('svg') && e.tagName !== 'foreignObject',
    Vu = (e) => e.namespaceURI.includes('MathML'),
    us = (e) => {
        if (e.nodeType === 1) {
            if (Wu(e)) return 'svg';
            if (Vu(e)) return 'mathml';
        }
    },
    fn = (e) => e.nodeType === 8;
function qu(e) {
    const {
            mt: t,
            p: n,
            o: { patchProp: s, createText: r, nextSibling: o, parentNode: i, remove: a, insert: l, createComment: f },
        } = e,
        c = (y, v) => {
            if (!v.hasChildNodes()) {
                (n(null, y, v), Cs(), (v._vnode = y));
                return;
            }
            (u(v.firstChild, y, null, null, null), Cs(), (v._vnode = y));
        },
        u = (y, v, E, N, D, P = !1) => {
            P = P || !!v.dynamicChildren;
            const C = fn(y) && y.data === '[',
                x = () => g(y, v, E, N, D, C),
                { type: q, ref: A, shapeFlag: U, patchFlag: ee } = v;
            let re = y.nodeType;
            ((v.el = y), ee === -2 && ((P = !1), (v.dynamicChildren = null)));
            let F = null;
            switch (q) {
                case Zt:
                    re !== 3
                        ? v.children === ''
                            ? (l((v.el = r('')), i(y), y), (F = y))
                            : (F = x())
                        : (y.data !== v.children && (on(), (y.data = v.children)), (F = o(y)));
                    break;
                case be:
                    w(y)
                        ? ((F = o(y)), b((v.el = y.content.firstChild), y, E))
                        : re !== 8 || C
                          ? (F = x())
                          : (F = o(y));
                    break;
                case Fn:
                    if ((C && ((y = o(y)), (re = y.nodeType)), re === 1 || re === 3)) {
                        F = y;
                        const G = !v.children.length;
                        for (let W = 0; W < v.staticCount; W++)
                            (G && (v.children += F.nodeType === 1 ? F.outerHTML : F.data),
                                W === v.staticCount - 1 && (v.anchor = F),
                                (F = o(F)));
                        return C ? o(F) : F;
                    } else x();
                    break;
                case ke:
                    C ? (F = _(y, v, E, N, D, P)) : (F = x());
                    break;
                default:
                    if (U & 1)
                        (re !== 1 || v.type.toLowerCase() !== y.tagName.toLowerCase()) && !w(y)
                            ? (F = x())
                            : (F = d(y, v, E, N, D, P));
                    else if (U & 6) {
                        v.slotScopeIds = D;
                        const G = i(y);
                        if (
                            (C
                                ? (F = S(y))
                                : fn(y) && y.data === 'teleport start'
                                  ? (F = S(y, y.data, 'teleport end'))
                                  : (F = o(y)),
                            t(v, G, null, E, N, us(G), P),
                            Xt(v) && !v.type.__asyncResolved)
                        ) {
                            let W;
                            (C
                                ? ((W = me(ke)), (W.anchor = F ? F.previousSibling : G.lastChild))
                                : (W = y.nodeType === 3 ? $l('') : me('div')),
                                (W.el = y),
                                (v.component.subTree = W));
                        }
                    } else
                        U & 64
                            ? re !== 8
                                ? (F = x())
                                : (F = v.type.hydrate(y, v, E, N, D, P, e, h))
                            : U & 128 && (F = v.type.hydrate(y, v, E, N, us(i(y)), D, P, e, u));
            }
            return (A != null && yn(A, null, N, v), F);
        },
        d = (y, v, E, N, D, P) => {
            P = P || !!v.dynamicChildren;
            const { type: C, props: x, patchFlag: q, shapeFlag: A, dirs: U, transition: ee } = v,
                re = C === 'input' || C === 'option';
            if (re || q !== -1) {
                U && ot(v, null, E, 'created');
                let F = !1;
                if (w(y)) {
                    F = Sl(null, ee) && E && E.vnode.props && E.vnode.props.appear;
                    const W = y.content.firstChild;
                    if (F) {
                        const ue = W.getAttribute('class');
                        (ue && (W.$cls = ue), ee.beforeEnter(W));
                    }
                    (b(W, y, E), (v.el = y = W));
                }
                if (A & 16 && !(x && (x.innerHTML || x.textContent))) {
                    let W = h(y.firstChild, v, y, E, N, D, P);
                    for (; W; ) {
                        fs(y, 1) || on();
                        const ue = W;
                        ((W = W.nextSibling), a(ue));
                    }
                } else if (A & 8) {
                    let W = v.children;
                    W[0] ===
                        `
` &&
                        (y.tagName === 'PRE' || y.tagName === 'TEXTAREA') &&
                        (W = W.slice(1));
                    const { textContent: ue } = y;
                    ue !== W &&
                        ue !==
                            W.replace(
                                /\r\n|\r/g,
                                `
`,
                            ) &&
                        (fs(y, 0) || on(), (y.textContent = v.children));
                }
                if (x) {
                    if (re || !P || q & 48) {
                        const W = y.tagName.includes('-');
                        for (const ue in x)
                            ((re && (ue.endsWith('value') || ue === 'indeterminate')) ||
                                (ns(ue) && !Jt(ue)) ||
                                ue[0] === '.' ||
                                (W && !Jt(ue))) &&
                                s(y, ue, null, x[ue], void 0, E);
                    } else if (x.onClick) s(y, 'onClick', null, x.onClick, void 0, E);
                    else if (q & 4 && dt(x.style)) for (const W in x.style) x.style[W];
                }
                let G;
                ((G = x && x.onVnodeBeforeMount) && qe(G, E, v),
                    U && ot(v, null, E, 'beforeMount'),
                    ((G = x && x.onVnodeMounted) || U || F) &&
                        xl(() => {
                            (G && qe(G, E, v), F && ee.enter(y), U && ot(v, null, E, 'mounted'));
                        }, N));
            }
            return y.nextSibling;
        },
        h = (y, v, E, N, D, P, C) => {
            C = C || !!v.dynamicChildren;
            const x = v.children,
                q = x.length;
            for (let A = 0; A < q; A++) {
                const U = C ? x[A] : (x[A] = je(x[A])),
                    ee = U.type === Zt;
                y
                    ? (ee &&
                          !C &&
                          A + 1 < q &&
                          je(x[A + 1]).type === Zt &&
                          (l(r(y.data.slice(U.children.length)), E, o(y)), (y.data = U.children)),
                      (y = u(y, U, N, D, P, C)))
                    : ee && !U.children
                      ? l((U.el = r('')), E)
                      : (fs(E, 1) || on(), n(null, U, E, null, N, D, us(E), P));
            }
            return y;
        },
        _ = (y, v, E, N, D, P) => {
            const { slotScopeIds: C } = v;
            C && (D = D ? D.concat(C) : C);
            const x = i(y),
                q = h(o(y), v, x, E, N, D, P);
            return q && fn(q) && q.data === ']' ? o((v.anchor = q)) : (on(), l((v.anchor = f(']')), x, q), q);
        },
        g = (y, v, E, N, D, P) => {
            if ((fs(y.parentElement, 1) || on(), (v.el = null), P)) {
                const q = S(y);
                for (;;) {
                    const A = o(y);
                    if (A && A !== q) a(A);
                    else break;
                }
            }
            const C = o(y),
                x = i(y);
            return (a(y), n(null, v, x, C, E, N, us(x), D), E && ((E.vnode.el = v.el), Xs(E, v.el)), C);
        },
        S = (y, v = '[', E = ']') => {
            let N = 0;
            for (; y; )
                if (((y = o(y)), y && fn(y) && (y.data === v && N++, y.data === E))) {
                    if (N === 0) return o(y);
                    N--;
                }
            return y;
        },
        b = (y, v, E) => {
            const N = v.parentNode;
            N && N.replaceChild(y, v);
            let D = E;
            for (; D; ) (D.vnode.el === v && (D.vnode.el = D.subTree.el = y), (D = D.parent));
        },
        w = (y) => y.nodeType === 1 && y.tagName === 'TEMPLATE';
    return [c, u];
}
const Yo = 'data-allow-mismatch',
    Gu = { 0: 'text', 1: 'children', 2: 'class', 3: 'style', 4: 'attribute' };
function fs(e, t) {
    if (t === 0 || t === 1) for (; e && !e.hasAttribute(Yo); ) e = e.parentElement;
    const n = e && e.getAttribute(Yo);
    if (n == null) return !1;
    if (n === '') return !0;
    {
        const s = n.split(',');
        return t === 0 && s.includes('children') ? !0 : s.includes(Gu[t]);
    }
}
Us().requestIdleCallback;
Us().cancelIdleCallback;
function Ku(e, t) {
    if (fn(e) && e.data === '[') {
        let n = 1,
            s = e.nextSibling;
        for (; s; ) {
            if (s.nodeType === 1) {
                if (t(s) === !1) break;
            } else if (fn(s))
                if (s.data === ']') {
                    if (--n === 0) break;
                } else s.data === '[' && n++;
            s = s.nextSibling;
        }
    } else t(e);
}
const Xt = (e) => !!e.type.__asyncLoader;
function Xo(e) {
    X(e) && (e = { loader: e });
    const {
        loader: t,
        loadingComponent: n,
        errorComponent: s,
        delay: r = 200,
        hydrate: o,
        timeout: i,
        suspensible: a = !0,
        onError: l,
    } = e;
    let f = null,
        c,
        u = 0;
    const d = () => (u++, (f = null), h()),
        h = () => {
            let _;
            return (
                f ||
                (_ = f =
                    t()
                        .catch((g) => {
                            if (((g = g instanceof Error ? g : new Error(String(g))), l))
                                return new Promise((S, b) => {
                                    l(
                                        g,
                                        () => S(d()),
                                        () => b(g),
                                        u + 1,
                                    );
                                });
                            throw g;
                        })
                        .then((g) =>
                            _ !== f && f
                                ? f
                                : (g && (g.__esModule || g[Symbol.toStringTag] === 'Module') && (g = g.default),
                                  (c = g),
                                  g),
                        ))
            );
        };
    return _o({
        name: 'AsyncComponentWrapper',
        __asyncLoader: h,
        __asyncHydrate(_, g, S) {
            let b = !1;
            (g.bu || (g.bu = [])).push(() => (b = !0));
            const w = () => {
                    b || S();
                },
                y = o
                    ? () => {
                          const v = o(w, (E) => Ku(_, E));
                          v && (g.bum || (g.bum = [])).push(v);
                      }
                    : w;
            c ? y() : h().then(() => !g.isUnmounted && y());
        },
        get __asyncResolved() {
            return c;
        },
        setup() {
            const _ = Ee;
            if ((bo(_), c)) return () => hs(c, _);
            const g = (y) => {
                ((f = null), Tn(y, _, 13, !s));
            };
            if ((a && _.suspense) || tn)
                return h()
                    .then((y) => () => hs(y, _))
                    .catch((y) => (g(y), () => (s ? me(s, { error: y }) : null)));
            const S = pt(!1),
                b = pt(),
                w = pt(!!r);
            return (
                r &&
                    setTimeout(() => {
                        w.value = !1;
                    }, r),
                i != null &&
                    setTimeout(() => {
                        if (!S.value && !b.value) {
                            const y = new Error(`Async component timed out after ${i}ms.`);
                            (g(y), (b.value = y));
                        }
                    }, i),
                h()
                    .then(() => {
                        ((S.value = !0), _.parent && is(_.parent.vnode) && _.parent.update());
                    })
                    .catch((y) => {
                        (g(y), (b.value = y));
                    }),
                () => {
                    if (S.value && c) return hs(c, _);
                    if (b.value && s) return me(s, { error: b.value });
                    if (n && !w.value) return hs(n, _);
                }
            );
        },
    });
}
function hs(e, t) {
    const { ref: n, props: s, children: r, ce: o } = t.vnode,
        i = me(e, s, r);
    return ((i.ref = n), (i.ce = o), delete t.vnode.ce, i);
}
const is = (e) => e.type.__isKeepAlive;
function sl(e, t) {
    ol(e, 'a', t);
}
function rl(e, t) {
    ol(e, 'da', t);
}
function ol(e, t, n = Ee) {
    const s =
        e.__wdc ||
        (e.__wdc = () => {
            let r = n;
            for (; r; ) {
                if (r.isDeactivated) return;
                r = r.parent;
            }
            return e();
        });
    if ((Qs(t, s, n), n)) {
        let r = n.parent;
        for (; r && r.parent; ) (is(r.parent.vnode) && Ju(s, t, n, r), (r = r.parent));
    }
}
function Ju(e, t, n, s) {
    const r = Qs(t, e, s, !0);
    wo(() => {
        ro(s[t], r);
    }, n);
}
function Qs(e, t, n = Ee, s = !1) {
    if (n) {
        const r = n[e] || (n[e] = []),
            o =
                t.__weh ||
                (t.__weh = (...i) => {
                    St();
                    const a = An(n),
                        l = Ze(t, n, e, i);
                    return (a(), Tt(), l);
                });
        return (s ? r.unshift(o) : r.push(o), o);
    }
}
const Rt =
        (e) =>
        (t, n = Ee) => {
            (!tn || e === 'sp') && Qs(e, (...s) => t(...s), n);
        },
    il = Rt('bm'),
    al = Rt('m'),
    Qu = Rt('bu'),
    Yu = Rt('u'),
    vo = Rt('bum'),
    wo = Rt('um'),
    Xu = Rt('sp'),
    zu = Rt('rtg'),
    Zu = Rt('rtc');
function ll(e, t = Ee) {
    Qs('ec', e, t);
}
const Eo = 'components',
    ef = 'directives';
function tf(e, t) {
    return Io(Eo, e, !0, t) || e;
}
const cl = Symbol.for('v-ndc');
function nf(e) {
    return ge(e) ? Io(Eo, e, !1) || e : e || cl;
}
function um(e) {
    return Io(ef, e);
}
function Io(e, t, n = !0, s = !1) {
    const r = Ce || Ee;
    if (r) {
        const o = r.type;
        if (e === Eo) {
            const a = qf(o, !1);
            if (a && (a === t || a === Me(t) || a === js(Me(t)))) return o;
        }
        const i = zo(r[e] || o[e], t) || zo(r.appContext[e], t);
        return !i && s ? o : i;
    }
}
function zo(e, t) {
    return e && (e[t] || e[Me(t)] || e[js(Me(t))]);
}
function fm(e, t, n, s) {
    let r;
    const o = n,
        i = Q(e);
    if (i || ge(e)) {
        const a = i && dt(e);
        let l = !1,
            f = !1;
        (a && ((l = !Fe(e)), (f = gt(e)), (e = Gs(e))), (r = new Array(e.length)));
        for (let c = 0, u = e.length; c < u; c++) r[c] = t(l ? (f ? vn(ze(e[c])) : ze(e[c])) : e[c], c, void 0, o);
    } else if (typeof e == 'number') {
        r = new Array(e);
        for (let a = 0; a < e; a++) r[a] = t(a + 1, a, void 0, o);
    } else if (se(e))
        if (e[Symbol.iterator]) r = Array.from(e, (a, l) => t(a, l, void 0, o));
        else {
            const a = Object.keys(e);
            r = new Array(a.length);
            for (let l = 0, f = a.length; l < f; l++) {
                const c = a[l];
                r[l] = t(e[c], c, l, o);
            }
        }
    else r = [];
    return r;
}
function hm(e, t, n = {}, s, r) {
    if (Ce.ce || (Ce.parent && Xt(Ce.parent) && Ce.parent.ce)) {
        const f = Object.keys(n).length > 0;
        return (t !== 'default' && (n.name = t), Ke(), ut(ke, null, [me('slot', n, s)], f ? -2 : 64));
    }
    let o = e[t];
    (o && o._c && (o._d = !1), Ke());
    const i = o && ul(o(n)),
        a = n.key || (i && i.key),
        l = ut(ke, { key: (a && !Xe(a) ? a : `_${t}`) + (!i && s ? '_fb' : '') }, i || [], i && e._ === 1 ? 64 : -2);
    return (l.scopeId && (l.slotScopeIds = [l.scopeId + '-s']), o && o._c && (o._d = !0), l);
}
function ul(e) {
    return e.some((t) => (En(t) ? !(t.type === be || (t.type === ke && !ul(t.children))) : !0)) ? e : null;
}
const Mr = (e) => (e ? (Bl(e) ? zs(e) : Mr(e.parent)) : null),
    jn = ve(Object.create(null), {
        $: (e) => e,
        $el: (e) => e.vnode.el,
        $data: (e) => e.data,
        $props: (e) => e.props,
        $attrs: (e) => e.attrs,
        $slots: (e) => e.slots,
        $refs: (e) => e.refs,
        $parent: (e) => Mr(e.parent),
        $root: (e) => Mr(e.root),
        $host: (e) => e.ce,
        $emit: (e) => e.emit,
        $options: (e) => hl(e),
        $forceUpdate: (e) =>
            e.f ||
            (e.f = () => {
                yo(e.update);
            }),
        $nextTick: (e) => e.n || (e.n = Rn.bind(e.proxy)),
        $watch: (e) => Bu.bind(e),
    }),
    cr = (e, t) => e !== ce && !e.__isScriptSetup && ie(e, t),
    sf = {
        get({ _: e }, t) {
            if (t === '__v_skip') return !0;
            const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: a, appContext: l } = e;
            if (t[0] !== '$') {
                const d = i[t];
                if (d !== void 0)
                    switch (d) {
                        case 1:
                            return s[t];
                        case 2:
                            return r[t];
                        case 4:
                            return n[t];
                        case 3:
                            return o[t];
                    }
                else {
                    if (cr(s, t)) return ((i[t] = 1), s[t]);
                    if (r !== ce && ie(r, t)) return ((i[t] = 2), r[t]);
                    if (ie(o, t)) return ((i[t] = 3), o[t]);
                    if (n !== ce && ie(n, t)) return ((i[t] = 4), n[t]);
                    Dr && (i[t] = 0);
                }
            }
            const f = jn[t];
            let c, u;
            if (f) return (t === '$attrs' && Re(e.attrs, 'get', ''), f(e));
            if ((c = a.__cssModules) && (c = c[t])) return c;
            if (n !== ce && ie(n, t)) return ((i[t] = 4), n[t]);
            if (((u = l.config.globalProperties), ie(u, t))) return u[t];
        },
        set({ _: e }, t, n) {
            const { data: s, setupState: r, ctx: o } = e;
            return cr(r, t)
                ? ((r[t] = n), !0)
                : s !== ce && ie(s, t)
                  ? ((s[t] = n), !0)
                  : ie(e.props, t) || (t[0] === '$' && t.slice(1) in e)
                    ? !1
                    : ((o[t] = n), !0);
        },
        has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: o, type: i } }, a) {
            let l;
            return !!(
                n[a] ||
                (e !== ce && a[0] !== '$' && ie(e, a)) ||
                cr(t, a) ||
                ie(o, a) ||
                ie(s, a) ||
                ie(jn, a) ||
                ie(r.config.globalProperties, a) ||
                ((l = i.__cssModules) && l[a])
            );
        },
        defineProperty(e, t, n) {
            return (
                n.get != null ? (e._.accessCache[t] = 0) : ie(n, 'value') && this.set(e, t, n.value, null),
                Reflect.defineProperty(e, t, n)
            );
        },
    };
function Zo(e) {
    return Q(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
function dm(e) {
    const t = Lt(),
        n = tn;
    let s = e();
    (Os(), n && _n(!1));
    const r = () => {
            (An(t), n && _n(!0));
        },
        o = () => {
            (Lt() !== t && t.scope.off(), Os(), n && _n(!1));
        };
    return (
        oo(s) &&
            (s = s.catch((i) => {
                throw (r(), Promise.resolve().then(() => Promise.resolve().then(o)), i);
            })),
        [
            s,
            () => {
                (r(), Promise.resolve().then(o));
            },
        ]
    );
}
let Dr = !0;
function rf(e) {
    const t = hl(e),
        n = e.proxy,
        s = e.ctx;
    ((Dr = !1), t.beforeCreate && ei(t.beforeCreate, e, 'bc'));
    const {
        data: r,
        computed: o,
        methods: i,
        watch: a,
        provide: l,
        inject: f,
        created: c,
        beforeMount: u,
        mounted: d,
        beforeUpdate: h,
        updated: _,
        activated: g,
        deactivated: S,
        beforeDestroy: b,
        beforeUnmount: w,
        destroyed: y,
        unmounted: v,
        render: E,
        renderTracked: N,
        renderTriggered: D,
        errorCaptured: P,
        serverPrefetch: C,
        expose: x,
        inheritAttrs: q,
        components: A,
        directives: U,
        filters: ee,
    } = t;
    if ((f && of(f, s, null), i))
        for (const G in i) {
            const W = i[G];
            X(W) && (s[G] = W.bind(n));
        }
    if (r) {
        const G = r.call(n, n);
        se(G) && (e.data = tt(G));
    }
    if (((Dr = !0), o))
        for (const G in o) {
            const W = o[G],
                ue = X(W) ? W.bind(n, n) : X(W.get) ? W.get.bind(n, n) : ht,
                At = !X(W) && X(W.set) ? W.set.bind(n) : ht,
                nt = Ie({ get: ue, set: At });
            Object.defineProperty(s, G, {
                enumerable: !0,
                configurable: !0,
                get: () => nt.value,
                set: (Ne) => (nt.value = Ne),
            });
        }
    if (a) for (const G in a) fl(a[G], s, n, G);
    if (l) {
        const G = X(l) ? l.call(n) : l;
        Reflect.ownKeys(G).forEach((W) => {
            Hn(W, G[W]);
        });
    }
    c && ei(c, e, 'c');
    function F(G, W) {
        Q(W) ? W.forEach((ue) => G(ue.bind(n))) : W && G(W.bind(n));
    }
    if (
        (F(il, u),
        F(al, d),
        F(Qu, h),
        F(Yu, _),
        F(sl, g),
        F(rl, S),
        F(ll, P),
        F(Zu, N),
        F(zu, D),
        F(vo, w),
        F(wo, v),
        F(Xu, C),
        Q(x))
    )
        if (x.length) {
            const G = e.exposed || (e.exposed = {});
            x.forEach((W) => {
                Object.defineProperty(G, W, { get: () => n[W], set: (ue) => (n[W] = ue), enumerable: !0 });
            });
        } else e.exposed || (e.exposed = {});
    (E && e.render === ht && (e.render = E),
        q != null && (e.inheritAttrs = q),
        A && (e.components = A),
        U && (e.directives = U),
        C && bo(e));
}
function of(e, t, n = ht) {
    Q(e) && (e = Nr(e));
    for (const s in e) {
        const r = e[s];
        let o;
        (se(r) ? ('default' in r ? (o = De(r.from || s, r.default, !0)) : (o = De(r.from || s))) : (o = De(r)),
            pe(o)
                ? Object.defineProperty(t, s, {
                      enumerable: !0,
                      configurable: !0,
                      get: () => o.value,
                      set: (i) => (o.value = i),
                  })
                : (t[s] = o));
    }
}
function ei(e, t, n) {
    Ze(Q(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function fl(e, t, n, s) {
    let r = s.includes('.') ? Ya(n, s) : () => n[s];
    if (ge(e)) {
        const o = t[e];
        X(o) && Yt(r, o);
    } else if (X(e)) Yt(r, e.bind(n));
    else if (se(e))
        if (Q(e)) e.forEach((o) => fl(o, t, n, s));
        else {
            const o = X(e.handler) ? e.handler.bind(n) : t[e.handler];
            X(o) && Yt(r, o, e);
        }
}
function hl(e) {
    const t = e.type,
        { mixins: n, extends: s } = t,
        {
            mixins: r,
            optionsCache: o,
            config: { optionMergeStrategies: i },
        } = e.appContext,
        a = o.get(t);
    let l;
    return (
        a
            ? (l = a)
            : !r.length && !n && !s
              ? (l = t)
              : ((l = {}), r.length && r.forEach((f) => Rs(l, f, i, !0)), Rs(l, t, i)),
        se(t) && o.set(t, l),
        l
    );
}
function Rs(e, t, n, s = !1) {
    const { mixins: r, extends: o } = t;
    (o && Rs(e, o, n, !0), r && r.forEach((i) => Rs(e, i, n, !0)));
    for (const i in t)
        if (!(s && i === 'expose')) {
            const a = af[i] || (n && n[i]);
            e[i] = a ? a(e[i], t[i]) : t[i];
        }
    return e;
}
const af = {
    data: ti,
    props: ni,
    emits: ni,
    methods: Ln,
    computed: Ln,
    beforeCreate: Ae,
    created: Ae,
    beforeMount: Ae,
    mounted: Ae,
    beforeUpdate: Ae,
    updated: Ae,
    beforeDestroy: Ae,
    beforeUnmount: Ae,
    destroyed: Ae,
    unmounted: Ae,
    activated: Ae,
    deactivated: Ae,
    errorCaptured: Ae,
    serverPrefetch: Ae,
    components: Ln,
    directives: Ln,
    watch: cf,
    provide: ti,
    inject: lf,
};
function ti(e, t) {
    return t
        ? e
            ? function () {
                  return ve(X(e) ? e.call(this, this) : e, X(t) ? t.call(this, this) : t);
              }
            : t
        : e;
}
function lf(e, t) {
    return Ln(Nr(e), Nr(t));
}
function Nr(e) {
    if (Q(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t;
    }
    return e;
}
function Ae(e, t) {
    return e ? [...new Set([].concat(e, t))] : t;
}
function Ln(e, t) {
    return e ? ve(Object.create(null), e, t) : t;
}
function ni(e, t) {
    return e ? (Q(e) && Q(t) ? [...new Set([...e, ...t])] : ve(Object.create(null), Zo(e), Zo(t ?? {}))) : t;
}
function cf(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = ve(Object.create(null), e);
    for (const s in t) n[s] = Ae(e[s], t[s]);
    return n;
}
function dl() {
    return {
        app: null,
        config: {
            isNativeTag: _a,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {},
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap(),
    };
}
let uf = 0;
function ff(e, t) {
    return function (s, r = null) {
        (X(s) || (s = ve({}, s)), r != null && !se(r) && (r = null));
        const o = dl(),
            i = new WeakSet(),
            a = [];
        let l = !1;
        const f = (o.app = {
            _uid: uf++,
            _component: s,
            _props: r,
            _container: null,
            _context: o,
            _instance: null,
            version: Kf,
            get config() {
                return o.config;
            },
            set config(c) {},
            use(c, ...u) {
                return (
                    i.has(c) || (c && X(c.install) ? (i.add(c), c.install(f, ...u)) : X(c) && (i.add(c), c(f, ...u))),
                    f
                );
            },
            mixin(c) {
                return (o.mixins.includes(c) || o.mixins.push(c), f);
            },
            component(c, u) {
                return u ? ((o.components[c] = u), f) : o.components[c];
            },
            directive(c, u) {
                return u ? ((o.directives[c] = u), f) : o.directives[c];
            },
            mount(c, u, d) {
                if (!l) {
                    const h = f._ceVNode || me(s, r);
                    return (
                        (h.appContext = o),
                        d === !0 ? (d = 'svg') : d === !1 && (d = void 0),
                        u && t ? t(h, c) : e(h, c, d),
                        (l = !0),
                        (f._container = c),
                        (c.__vue_app__ = f),
                        zs(h.component)
                    );
                }
            },
            onUnmount(c) {
                a.push(c);
            },
            unmount() {
                l && (Ze(a, f._instance, 16), e(null, f._container), delete f._container.__vue_app__);
            },
            provide(c, u) {
                return ((o.provides[c] = u), f);
            },
            runWithContext(c) {
                const u = zt;
                zt = f;
                try {
                    return c();
                } finally {
                    zt = u;
                }
            },
        });
        return f;
    };
}
let zt = null;
const hf = (e, t) =>
    t === 'modelValue' || t === 'model-value'
        ? e.modelModifiers
        : e[`${t}Modifiers`] || e[`${Me(t)}Modifiers`] || e[`${$t(t)}Modifiers`];
function df(e, t, ...n) {
    if (e.isUnmounted) return;
    const s = e.vnode.props || ce;
    let r = n;
    const o = t.startsWith('update:'),
        i = o && hf(s, t.slice(7));
    i && (i.trim && (r = n.map((c) => (ge(c) ? c.trim() : c))), i.number && (r = n.map(Fs)));
    let a,
        l = s[(a = sr(t))] || s[(a = sr(Me(t)))];
    (!l && o && (l = s[(a = sr($t(t)))]), l && Ze(l, e, 6, r));
    const f = s[a + 'Once'];
    if (f) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[a]) return;
        ((e.emitted[a] = !0), Ze(f, e, 6, r));
    }
}
const pf = new WeakMap();
function pl(e, t, n = !1) {
    const s = n ? pf : t.emitsCache,
        r = s.get(e);
    if (r !== void 0) return r;
    const o = e.emits;
    let i = {},
        a = !1;
    if (!X(e)) {
        const l = (f) => {
            const c = pl(f, t, !0);
            c && ((a = !0), ve(i, c));
        };
        (!n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l));
    }
    return !o && !a
        ? (se(e) && s.set(e, null), null)
        : (Q(o) ? o.forEach((l) => (i[l] = null)) : ve(i, o), se(e) && s.set(e, i), i);
}
function Ys(e, t) {
    return !e || !ns(t)
        ? !1
        : ((t = t.slice(2).replace(/Once$/, '')), ie(e, t[0].toLowerCase() + t.slice(1)) || ie(e, $t(t)) || ie(e, t));
}
function ur(e) {
    const {
            type: t,
            vnode: n,
            proxy: s,
            withProxy: r,
            propsOptions: [o],
            slots: i,
            attrs: a,
            emit: l,
            render: f,
            renderCache: c,
            props: u,
            data: d,
            setupState: h,
            ctx: _,
            inheritAttrs: g,
        } = e,
        S = Ss(e);
    let b, w;
    try {
        if (n.shapeFlag & 4) {
            const v = r || s,
                E = v;
            ((b = je(f.call(E, v, c, u, h, d, _))), (w = a));
        } else {
            const v = t;
            ((b = je(v.length > 1 ? v(u, { attrs: a, slots: i, emit: l }) : v(u, null))), (w = t.props ? a : yf(a)));
        }
    } catch (v) {
        ((Un.length = 0), Tn(v, e, 1), (b = me(be)));
    }
    let y = b;
    if (w && g !== !1) {
        const v = Object.keys(w),
            { shapeFlag: E } = y;
        v.length && E & 7 && (o && v.some(so) && (w = mf(w, o)), (y = Nt(y, w, !1, !0)));
    }
    return (
        n.dirs && ((y = Nt(y, null, !1, !0)), (y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs)),
        n.transition && Xn(y, n.transition),
        (b = y),
        Ss(S),
        b
    );
}
function gf(e, t = !0) {
    let n;
    for (let s = 0; s < e.length; s++) {
        const r = e[s];
        if (En(r)) {
            if (r.type !== be || r.children === 'v-if') {
                if (n) return;
                n = r;
            }
        } else return;
    }
    return n;
}
const yf = (e) => {
        let t;
        for (const n in e) (n === 'class' || n === 'style' || ns(n)) && ((t || (t = {}))[n] = e[n]);
        return t;
    },
    mf = (e, t) => {
        const n = {};
        for (const s in e) (!so(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
        return n;
    };
function _f(e, t, n) {
    const { props: s, children: r, component: o } = e,
        { props: i, children: a, patchFlag: l } = t,
        f = o.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && l >= 0) {
        if (l & 1024) return !0;
        if (l & 16) return s ? si(s, i, f) : !!i;
        if (l & 8) {
            const c = t.dynamicProps;
            for (let u = 0; u < c.length; u++) {
                const d = c[u];
                if (gl(i, s, d) && !Ys(f, d)) return !0;
            }
        }
    } else return (r || a) && (!a || !a.$stable) ? !0 : s === i ? !1 : s ? (i ? si(s, i, f) : !0) : !!i;
    return !1;
}
function si(e, t, n) {
    const s = Object.keys(t);
    if (s.length !== Object.keys(e).length) return !0;
    for (let r = 0; r < s.length; r++) {
        const o = s[r];
        if (gl(t, e, o) && !Ys(n, o)) return !0;
    }
    return !1;
}
function gl(e, t, n) {
    const s = e[n],
        r = t[n];
    return n === 'style' && se(s) && se(r) ? !rs(s, r) : s !== r;
}
function Xs({ vnode: e, parent: t }, n) {
    for (; t; ) {
        const s = t.subTree;
        if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
            (((e = t.vnode).el = n), (t = t.parent));
        else break;
    }
}
const yl = {},
    ml = () => Object.create(yl),
    _l = (e) => Object.getPrototypeOf(e) === yl;
function bf(e, t, n, s = !1) {
    const r = {},
        o = ml();
    ((e.propsDefaults = Object.create(null)), bl(e, t, r, o));
    for (const i in e.propsOptions[0]) i in r || (r[i] = void 0);
    (n ? (e.props = s ? r : It(r)) : e.type.props ? (e.props = r) : (e.props = o), (e.attrs = o));
}
function vf(e, t, n, s) {
    const {
            props: r,
            attrs: o,
            vnode: { patchFlag: i },
        } = e,
        a = ne(r),
        [l] = e.propsOptions;
    let f = !1;
    if ((s || i > 0) && !(i & 16)) {
        if (i & 8) {
            const c = e.vnode.dynamicProps;
            for (let u = 0; u < c.length; u++) {
                let d = c[u];
                if (Ys(e.emitsOptions, d)) continue;
                const h = t[d];
                if (l)
                    if (ie(o, d)) h !== o[d] && ((o[d] = h), (f = !0));
                    else {
                        const _ = Me(d);
                        r[_] = Lr(l, a, _, h, e, !1);
                    }
                else h !== o[d] && ((o[d] = h), (f = !0));
            }
        }
    } else {
        bl(e, t, r, o) && (f = !0);
        let c;
        for (const u in a)
            (!t || (!ie(t, u) && ((c = $t(u)) === u || !ie(t, c)))) &&
                (l ? n && (n[u] !== void 0 || n[c] !== void 0) && (r[u] = Lr(l, a, u, void 0, e, !0)) : delete r[u]);
        if (o !== a) for (const u in o) (!t || !ie(t, u)) && (delete o[u], (f = !0));
    }
    f && Et(e.attrs, 'set', '');
}
function bl(e, t, n, s) {
    const [r, o] = e.propsOptions;
    let i = !1,
        a;
    if (t)
        for (let l in t) {
            if (Jt(l)) continue;
            const f = t[l];
            let c;
            r && ie(r, (c = Me(l)))
                ? !o || !o.includes(c)
                    ? (n[c] = f)
                    : ((a || (a = {}))[c] = f)
                : Ys(e.emitsOptions, l) || ((!(l in s) || f !== s[l]) && ((s[l] = f), (i = !0)));
        }
    if (o) {
        const l = ne(n),
            f = a || ce;
        for (let c = 0; c < o.length; c++) {
            const u = o[c];
            n[u] = Lr(r, l, u, f[u], e, !ie(f, u));
        }
    }
    return i;
}
function Lr(e, t, n, s, r, o) {
    const i = e[n];
    if (i != null) {
        const a = ie(i, 'default');
        if (a && s === void 0) {
            const l = i.default;
            if (i.type !== Function && !i.skipFactory && X(l)) {
                const { propsDefaults: f } = r;
                if (n in f) s = f[n];
                else {
                    const c = An(r);
                    ((s = f[n] = l.call(null, t)), c());
                }
            } else s = l;
            r.ce && r.ce._setProp(n, s);
        }
        i[0] && (o && !a ? (s = !1) : i[1] && (s === '' || s === $t(n)) && (s = !0));
    }
    return s;
}
const wf = new WeakMap();
function vl(e, t, n = !1) {
    const s = n ? wf : t.propsCache,
        r = s.get(e);
    if (r) return r;
    const o = e.props,
        i = {},
        a = [];
    let l = !1;
    if (!X(e)) {
        const c = (u) => {
            l = !0;
            const [d, h] = vl(u, t, !0);
            (ve(i, d), h && a.push(...h));
        };
        (!n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c));
    }
    if (!o && !l) return (se(e) && s.set(e, dn), dn);
    if (Q(o))
        for (let c = 0; c < o.length; c++) {
            const u = Me(o[c]);
            ri(u) && (i[u] = ce);
        }
    else if (o)
        for (const c in o) {
            const u = Me(c);
            if (ri(u)) {
                const d = o[c],
                    h = (i[u] = Q(d) || X(d) ? { type: d } : ve({}, d)),
                    _ = h.type;
                let g = !1,
                    S = !0;
                if (Q(_))
                    for (let b = 0; b < _.length; ++b) {
                        const w = _[b],
                            y = X(w) && w.name;
                        if (y === 'Boolean') {
                            g = !0;
                            break;
                        } else y === 'String' && (S = !1);
                    }
                else g = X(_) && _.name === 'Boolean';
                ((h[0] = g), (h[1] = S), (g || ie(h, 'default')) && a.push(u));
            }
        }
    const f = [i, a];
    return (se(e) && s.set(e, f), f);
}
function ri(e) {
    return e[0] !== '$' && !Jt(e);
}
const Co = (e) => e === '_' || e === '_ctx' || e === '$stable',
    So = (e) => (Q(e) ? e.map(je) : [je(e)]),
    Ef = (e, t, n) => {
        if (t._n) return t;
        const s = Qa((...r) => So(t(...r)), n);
        return ((s._c = !1), s);
    },
    wl = (e, t, n) => {
        const s = e._ctx;
        for (const r in e) {
            if (Co(r)) continue;
            const o = e[r];
            if (X(o)) t[r] = Ef(r, o, s);
            else if (o != null) {
                const i = So(o);
                t[r] = () => i;
            }
        }
    },
    El = (e, t) => {
        const n = So(t);
        e.slots.default = () => n;
    },
    Il = (e, t, n) => {
        for (const s in t) (n || !Co(s)) && (e[s] = t[s]);
    },
    If = (e, t, n) => {
        const s = (e.slots = ml());
        if (e.vnode.shapeFlag & 32) {
            const r = t._;
            r ? (Il(s, t, n), n && va(s, '_', r, !0)) : wl(t, s);
        } else t && El(e, t);
    },
    Cf = (e, t, n) => {
        const { vnode: s, slots: r } = e;
        let o = !0,
            i = ce;
        if (s.shapeFlag & 32) {
            const a = t._;
            (a ? (n && a === 1 ? (o = !1) : Il(r, t, n)) : ((o = !t.$stable), wl(t, r)), (i = t));
        } else t && (El(e, t), (i = { default: 1 }));
        if (o) for (const a in r) !Co(a) && i[a] == null && delete r[a];
    },
    Pe = xl;
function Sf(e) {
    return Cl(e);
}
function Tf(e) {
    return Cl(e, qu);
}
function Cl(e, t) {
    const n = Us();
    n.__VUE__ = !0;
    const {
            insert: s,
            remove: r,
            patchProp: o,
            createElement: i,
            createText: a,
            createComment: l,
            setText: f,
            setElementText: c,
            parentNode: u,
            nextSibling: d,
            setScopeId: h = ht,
            insertStaticContent: _,
        } = e,
        g = (p, m, I, O = null, T = null, k = null, B = void 0, $ = null, L = !!m.dynamicChildren) => {
            if (p === m) return;
            (p && !ft(p, m) && ((O = R(p)), Ne(p, T, k, !0), (p = null)),
                m.patchFlag === -2 && ((L = !1), (m.dynamicChildren = null)));
            const { type: M, ref: Y, shapeFlag: j } = m;
            switch (M) {
                case Zt:
                    S(p, m, I, O);
                    break;
                case be:
                    b(p, m, I, O);
                    break;
                case Fn:
                    p == null && w(m, I, O, B);
                    break;
                case ke:
                    A(p, m, I, O, T, k, B, $, L);
                    break;
                default:
                    j & 1
                        ? E(p, m, I, O, T, k, B, $, L)
                        : j & 6
                          ? U(p, m, I, O, T, k, B, $, L)
                          : (j & 64 || j & 128) && M.process(p, m, I, O, T, k, B, $, L, J);
            }
            Y != null && T
                ? yn(Y, p && p.ref, k, m || p, !m)
                : Y == null && p && p.ref != null && yn(p.ref, null, k, p, !0);
        },
        S = (p, m, I, O) => {
            if (p == null) s((m.el = a(m.children)), I, O);
            else {
                const T = (m.el = p.el);
                m.children !== p.children && f(T, m.children);
            }
        },
        b = (p, m, I, O) => {
            p == null ? s((m.el = l(m.children || '')), I, O) : (m.el = p.el);
        },
        w = (p, m, I, O) => {
            [p.el, p.anchor] = _(p.children, m, I, O, p.el, p.anchor);
        },
        y = ({ el: p, anchor: m }, I, O) => {
            let T;
            for (; p && p !== m; ) ((T = d(p)), s(p, I, O), (p = T));
            s(m, I, O);
        },
        v = ({ el: p, anchor: m }) => {
            let I;
            for (; p && p !== m; ) ((I = d(p)), r(p), (p = I));
            r(m);
        },
        E = (p, m, I, O, T, k, B, $, L) => {
            if ((m.type === 'svg' ? (B = 'svg') : m.type === 'math' && (B = 'mathml'), p == null))
                N(m, I, O, T, k, B, $, L);
            else {
                const M = p.el && p.el._isVueCE ? p.el : null;
                try {
                    (M && M._beginPatch(), C(p, m, T, k, B, $, L));
                } finally {
                    M && M._endPatch();
                }
            }
        },
        N = (p, m, I, O, T, k, B, $) => {
            let L, M;
            const { props: Y, shapeFlag: j, transition: K, dirs: z } = p;
            if (
                ((L = p.el = i(p.type, k, Y && Y.is, Y)),
                j & 8 ? c(L, p.children) : j & 16 && P(p.children, L, null, O, T, fr(p, k), B, $),
                z && ot(p, null, O, 'created'),
                D(L, p, p.scopeId, B, O),
                Y)
            ) {
                for (const fe in Y) fe !== 'value' && !Jt(fe) && o(L, fe, null, Y[fe], k, O);
                ('value' in Y && o(L, 'value', null, Y.value, k), (M = Y.onVnodeBeforeMount) && qe(M, O, p));
            }
            z && ot(p, null, O, 'beforeMount');
            const te = Sl(T, K);
            (te && K.beforeEnter(L),
                s(L, m, I),
                ((M = Y && Y.onVnodeMounted) || te || z) &&
                    Pe(() => {
                        (M && qe(M, O, p), te && K.enter(L), z && ot(p, null, O, 'mounted'));
                    }, T));
        },
        D = (p, m, I, O, T) => {
            if ((I && h(p, I), O)) for (let k = 0; k < O.length; k++) h(p, O[k]);
            if (T) {
                let k = T.subTree;
                if (m === k || (Pl(k.type) && (k.ssContent === m || k.ssFallback === m))) {
                    const B = T.vnode;
                    D(p, B, B.scopeId, B.slotScopeIds, T.parent);
                }
            }
        },
        P = (p, m, I, O, T, k, B, $, L = 0) => {
            for (let M = L; M < p.length; M++) {
                const Y = (p[M] = $ ? wt(p[M]) : je(p[M]));
                g(null, Y, m, I, O, T, k, B, $);
            }
        },
        C = (p, m, I, O, T, k, B) => {
            const $ = (m.el = p.el);
            let { patchFlag: L, dynamicChildren: M, dirs: Y } = m;
            L |= p.patchFlag & 16;
            const j = p.props || ce,
                K = m.props || ce;
            let z;
            if (
                (I && Ht(I, !1),
                (z = K.onVnodeBeforeUpdate) && qe(z, I, m, p),
                Y && ot(m, p, I, 'beforeUpdate'),
                I && Ht(I, !0),
                ((j.innerHTML && K.innerHTML == null) || (j.textContent && K.textContent == null)) && c($, ''),
                M ? x(p.dynamicChildren, M, $, I, O, fr(m, T), k) : B || W(p, m, $, null, I, O, fr(m, T), k, !1),
                L > 0)
            ) {
                if (L & 16) q($, j, K, I, T);
                else if (
                    (L & 2 && j.class !== K.class && o($, 'class', null, K.class, T),
                    L & 4 && o($, 'style', j.style, K.style, T),
                    L & 8)
                ) {
                    const te = m.dynamicProps;
                    for (let fe = 0; fe < te.length; fe++) {
                        const ae = te[fe],
                            Le = j[ae],
                            Se = K[ae];
                        (Se !== Le || ae === 'value') && o($, ae, Le, Se, T, I);
                    }
                }
                L & 1 && p.children !== m.children && c($, m.children);
            } else !B && M == null && q($, j, K, I, T);
            ((z = K.onVnodeUpdated) || Y) &&
                Pe(() => {
                    (z && qe(z, I, m, p), Y && ot(m, p, I, 'updated'));
                }, O);
        },
        x = (p, m, I, O, T, k, B) => {
            for (let $ = 0; $ < m.length; $++) {
                const L = p[$],
                    M = m[$],
                    Y = L.el && (L.type === ke || !ft(L, M) || L.shapeFlag & 198) ? u(L.el) : I;
                g(L, M, Y, null, O, T, k, B, !0);
            }
        },
        q = (p, m, I, O, T) => {
            if (m !== I) {
                if (m !== ce) for (const k in m) !Jt(k) && !(k in I) && o(p, k, m[k], null, T, O);
                for (const k in I) {
                    if (Jt(k)) continue;
                    const B = I[k],
                        $ = m[k];
                    B !== $ && k !== 'value' && o(p, k, $, B, T, O);
                }
                'value' in I && o(p, 'value', m.value, I.value, T);
            }
        },
        A = (p, m, I, O, T, k, B, $, L) => {
            const M = (m.el = p ? p.el : a('')),
                Y = (m.anchor = p ? p.anchor : a(''));
            let { patchFlag: j, dynamicChildren: K, slotScopeIds: z } = m;
            (z && ($ = $ ? $.concat(z) : z),
                p == null
                    ? (s(M, I, O), s(Y, I, O), P(m.children || [], I, Y, T, k, B, $, L))
                    : j > 0 && j & 64 && K && p.dynamicChildren && p.dynamicChildren.length === K.length
                      ? (x(p.dynamicChildren, K, I, T, k, B, $),
                        (m.key != null || (T && m === T.subTree)) && Tl(p, m, !0))
                      : W(p, m, I, Y, T, k, B, $, L));
        },
        U = (p, m, I, O, T, k, B, $, L) => {
            ((m.slotScopeIds = $),
                p == null
                    ? m.shapeFlag & 512
                        ? T.ctx.activate(m, I, O, B, L)
                        : ee(m, I, O, T, k, B, L)
                    : re(p, m, L));
        },
        ee = (p, m, I, O, T, k, B) => {
            const $ = (p.component = jf(p, O, T));
            if ((is(p) && ($.ctx.renderer = J), Ff($, !1, B), $.asyncDep)) {
                if ((T && T.registerDep($, F, B), !p.el)) {
                    const L = ($.subTree = me(be));
                    (b(null, L, m, I), (p.placeholder = L.el));
                }
            } else F($, p, m, I, T, k, B);
        },
        re = (p, m, I) => {
            const O = (m.component = p.component);
            if (_f(p, m, I))
                if (O.asyncDep && !O.asyncResolved) {
                    G(O, m, I);
                    return;
                } else ((O.next = m), O.update());
            else ((m.el = p.el), (O.vnode = m));
        },
        F = (p, m, I, O, T, k, B) => {
            const $ = () => {
                if (p.isMounted) {
                    let { next: j, bu: K, u: z, parent: te, vnode: fe } = p;
                    {
                        const Be = Rl(p);
                        if (Be) {
                            (j && ((j.el = fe.el), G(p, j, B)),
                                Be.asyncDep.then(() => {
                                    Pe(() => {
                                        p.isUnmounted || M();
                                    }, T);
                                }));
                            return;
                        }
                    }
                    let ae = j,
                        Le;
                    (Ht(p, !1),
                        j ? ((j.el = fe.el), G(p, j, B)) : (j = fe),
                        K && ms(K),
                        (Le = j.props && j.props.onVnodeBeforeUpdate) && qe(Le, te, j, fe),
                        Ht(p, !0));
                    const Se = ur(p),
                        Je = p.subTree;
                    ((p.subTree = Se),
                        g(Je, Se, u(Je.el), R(Je), p, T, k),
                        (j.el = Se.el),
                        ae === null && Xs(p, Se.el),
                        z && Pe(z, T),
                        (Le = j.props && j.props.onVnodeUpdated) && Pe(() => qe(Le, te, j, fe), T));
                } else {
                    let j;
                    const { el: K, props: z } = m,
                        { bm: te, m: fe, parent: ae, root: Le, type: Se } = p,
                        Je = Xt(m);
                    if (
                        (Ht(p, !1),
                        te && ms(te),
                        !Je && (j = z && z.onVnodeBeforeMount) && qe(j, ae, m),
                        Ht(p, !0),
                        K && de)
                    ) {
                        const Be = () => {
                            ((p.subTree = ur(p)), de(K, p.subTree, p, T, null));
                        };
                        Je && Se.__asyncHydrate ? Se.__asyncHydrate(K, p, Be) : Be();
                    } else {
                        Le.ce &&
                            Le.ce._hasShadowRoot() &&
                            Le.ce._injectChildStyle(Se, p.parent ? p.parent.type : void 0);
                        const Be = (p.subTree = ur(p));
                        (g(null, Be, I, O, p, T, k), (m.el = Be.el));
                    }
                    if ((fe && Pe(fe, T), !Je && (j = z && z.onVnodeMounted))) {
                        const Be = m;
                        Pe(() => qe(j, ae, Be), T);
                    }
                    ((m.shapeFlag & 256 || (ae && Xt(ae.vnode) && ae.vnode.shapeFlag & 256)) && p.a && Pe(p.a, T),
                        (p.isMounted = !0),
                        (m = I = O = null));
                }
            };
            p.scope.on();
            const L = (p.effect = new Ra($));
            p.scope.off();
            const M = (p.update = L.run.bind(L)),
                Y = (p.job = L.runIfDirty.bind(L));
            ((Y.i = p), (Y.id = p.uid), (L.scheduler = () => yo(Y)), Ht(p, !0), M());
        },
        G = (p, m, I) => {
            m.component = p;
            const O = p.vnode.props;
            ((p.vnode = m), (p.next = null), vf(p, m.props, O, I), Cf(p, m.children, I), St(), qo(p), Tt());
        },
        W = (p, m, I, O, T, k, B, $, L = !1) => {
            const M = p && p.children,
                Y = p ? p.shapeFlag : 0,
                j = m.children,
                { patchFlag: K, shapeFlag: z } = m;
            if (K > 0) {
                if (K & 128) {
                    At(M, j, I, O, T, k, B, $, L);
                    return;
                } else if (K & 256) {
                    ue(M, j, I, O, T, k, B, $, L);
                    return;
                }
            }
            z & 8
                ? (Y & 16 && We(M, T, k), j !== M && c(I, j))
                : Y & 16
                  ? z & 16
                      ? At(M, j, I, O, T, k, B, $, L)
                      : We(M, T, k, !0)
                  : (Y & 8 && c(I, ''), z & 16 && P(j, I, O, T, k, B, $, L));
        },
        ue = (p, m, I, O, T, k, B, $, L) => {
            ((p = p || dn), (m = m || dn));
            const M = p.length,
                Y = m.length,
                j = Math.min(M, Y);
            let K;
            for (K = 0; K < j; K++) {
                const z = (m[K] = L ? wt(m[K]) : je(m[K]));
                g(p[K], z, I, null, T, k, B, $, L);
            }
            M > Y ? We(p, T, k, !0, !1, j) : P(m, I, O, T, k, B, $, L, j);
        },
        At = (p, m, I, O, T, k, B, $, L) => {
            let M = 0;
            const Y = m.length;
            let j = p.length - 1,
                K = Y - 1;
            for (; M <= j && M <= K; ) {
                const z = p[M],
                    te = (m[M] = L ? wt(m[M]) : je(m[M]));
                if (ft(z, te)) g(z, te, I, null, T, k, B, $, L);
                else break;
                M++;
            }
            for (; M <= j && M <= K; ) {
                const z = p[j],
                    te = (m[K] = L ? wt(m[K]) : je(m[K]));
                if (ft(z, te)) g(z, te, I, null, T, k, B, $, L);
                else break;
                (j--, K--);
            }
            if (M > j) {
                if (M <= K) {
                    const z = K + 1,
                        te = z < Y ? m[z].el : O;
                    for (; M <= K; ) (g(null, (m[M] = L ? wt(m[M]) : je(m[M])), I, te, T, k, B, $, L), M++);
                }
            } else if (M > K) for (; M <= j; ) (Ne(p[M], T, k, !0), M++);
            else {
                const z = M,
                    te = M,
                    fe = new Map();
                for (M = te; M <= K; M++) {
                    const He = (m[M] = L ? wt(m[M]) : je(m[M]));
                    He.key != null && fe.set(He.key, M);
                }
                let ae,
                    Le = 0;
                const Se = K - te + 1;
                let Je = !1,
                    Be = 0;
                const On = new Array(Se);
                for (M = 0; M < Se; M++) On[M] = 0;
                for (M = z; M <= j; M++) {
                    const He = p[M];
                    if (Le >= Se) {
                        Ne(He, T, k, !0);
                        continue;
                    }
                    let st;
                    if (He.key != null) st = fe.get(He.key);
                    else
                        for (ae = te; ae <= K; ae++)
                            if (On[ae - te] === 0 && ft(He, m[ae])) {
                                st = ae;
                                break;
                            }
                    st === void 0
                        ? Ne(He, T, k, !0)
                        : ((On[st - te] = M + 1),
                          st >= Be ? (Be = st) : (Je = !0),
                          g(He, m[st], I, null, T, k, B, $, L),
                          Le++);
                }
                const Bo = Je ? Rf(On) : dn;
                for (ae = Bo.length - 1, M = Se - 1; M >= 0; M--) {
                    const He = te + M,
                        st = m[He],
                        Ho = m[He + 1],
                        jo = He + 1 < Y ? Ho.el || Al(Ho) : O;
                    On[M] === 0
                        ? g(null, st, I, jo, T, k, B, $, L)
                        : Je && (ae < 0 || M !== Bo[ae] ? nt(st, I, jo, 2) : ae--);
                }
            }
        },
        nt = (p, m, I, O, T = null) => {
            const { el: k, type: B, transition: $, children: L, shapeFlag: M } = p;
            if (M & 6) {
                nt(p.component.subTree, m, I, O);
                return;
            }
            if (M & 128) {
                p.suspense.move(m, I, O);
                return;
            }
            if (M & 64) {
                B.move(p, m, I, J);
                return;
            }
            if (B === ke) {
                s(k, m, I);
                for (let j = 0; j < L.length; j++) nt(L[j], m, I, O);
                s(p.anchor, m, I);
                return;
            }
            if (B === Fn) {
                y(p, m, I);
                return;
            }
            if (O !== 2 && M & 1 && $)
                if (O === 0) ($.beforeEnter(k), s(k, m, I), Pe(() => $.enter(k), T));
                else {
                    const { leave: j, delayLeave: K, afterLeave: z } = $,
                        te = () => {
                            p.ctx.isUnmounted ? r(k) : s(k, m, I);
                        },
                        fe = () => {
                            (k._isLeaving && k[it](!0),
                                j(k, () => {
                                    (te(), z && z());
                                }));
                        };
                    K ? K(k, te, fe) : fe();
                }
            else s(k, m, I);
        },
        Ne = (p, m, I, O = !1, T = !1) => {
            const {
                type: k,
                props: B,
                ref: $,
                children: L,
                dynamicChildren: M,
                shapeFlag: Y,
                patchFlag: j,
                dirs: K,
                cacheIndex: z,
            } = p;
            if (
                (j === -2 && (T = !1),
                $ != null && (St(), yn($, null, I, p, !0), Tt()),
                z != null && (m.renderCache[z] = void 0),
                Y & 256)
            ) {
                m.ctx.deactivate(p);
                return;
            }
            const te = Y & 1 && K,
                fe = !Xt(p);
            let ae;
            if ((fe && (ae = B && B.onVnodeBeforeUnmount) && qe(ae, m, p), Y & 6)) Bt(p.component, I, O);
            else {
                if (Y & 128) {
                    p.suspense.unmount(I, O);
                    return;
                }
                (te && ot(p, null, m, 'beforeUnmount'),
                    Y & 64
                        ? p.type.remove(p, m, I, J, O)
                        : M && !M.hasOnce && (k !== ke || (j > 0 && j & 64))
                          ? We(M, m, I, !1, !0)
                          : ((k === ke && j & 384) || (!T && Y & 16)) && We(L, m, I),
                    O && nn(p));
            }
            ((fe && (ae = B && B.onVnodeUnmounted)) || te) &&
                Pe(() => {
                    (ae && qe(ae, m, p), te && ot(p, null, m, 'unmounted'));
                }, I);
        },
        nn = (p) => {
            const { type: m, el: I, anchor: O, transition: T } = p;
            if (m === ke) {
                sn(I, O);
                return;
            }
            if (m === Fn) {
                v(p);
                return;
            }
            const k = () => {
                (r(I), T && !T.persisted && T.afterLeave && T.afterLeave());
            };
            if (p.shapeFlag & 1 && T && !T.persisted) {
                const { leave: B, delayLeave: $ } = T,
                    L = () => B(I, k);
                $ ? $(p.el, k, L) : L();
            } else k();
        },
        sn = (p, m) => {
            let I;
            for (; p !== m; ) ((I = d(p)), r(p), (p = I));
            r(m);
        },
        Bt = (p, m, I) => {
            const { bum: O, scope: T, job: k, subTree: B, um: $, m: L, a: M } = p;
            (oi(L),
                oi(M),
                O && ms(O),
                T.stop(),
                k && ((k.flags |= 8), Ne(B, p, m, I)),
                $ && Pe($, m),
                Pe(() => {
                    p.isUnmounted = !0;
                }, m));
        },
        We = (p, m, I, O = !1, T = !1, k = 0) => {
            for (let B = k; B < p.length; B++) Ne(p[B], m, I, O, T);
        },
        R = (p) => {
            if (p.shapeFlag & 6) return R(p.component.subTree);
            if (p.shapeFlag & 128) return p.suspense.next();
            const m = d(p.anchor || p.el),
                I = m && m[Hu];
            return I ? d(I) : m;
        };
    let V = !1;
    const H = (p, m, I) => {
            let O;
            (p == null
                ? m._vnode && (Ne(m._vnode, null, null, !0), (O = m._vnode.component))
                : g(m._vnode || null, p, m, null, null, null, I),
                (m._vnode = p),
                V || ((V = !0), qo(O), Cs(), (V = !1)));
        },
        J = { p: g, um: Ne, m: nt, r: nn, mt: ee, mc: P, pc: W, pbc: x, n: R, o: e };
    let Z, de;
    return (t && ([Z, de] = t(J)), { render: H, hydrate: Z, createApp: ff(H, Z) });
}
function fr({ type: e, props: t }, n) {
    return (n === 'svg' && e === 'foreignObject') ||
        (n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
        ? void 0
        : n;
}
function Ht({ effect: e, job: t }, n) {
    n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function Sl(e, t) {
    return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Tl(e, t, n = !1) {
    const s = e.children,
        r = t.children;
    if (Q(s) && Q(r))
        for (let o = 0; o < s.length; o++) {
            const i = s[o];
            let a = r[o];
            (a.shapeFlag & 1 &&
                !a.dynamicChildren &&
                ((a.patchFlag <= 0 || a.patchFlag === 32) && ((a = r[o] = wt(r[o])), (a.el = i.el)),
                !n && a.patchFlag !== -2 && Tl(i, a)),
                a.type === Zt && (a.patchFlag === -1 && (a = r[o] = wt(a)), (a.el = i.el)),
                a.type === be && !a.el && (a.el = i.el));
        }
}
function Rf(e) {
    const t = e.slice(),
        n = [0];
    let s, r, o, i, a;
    const l = e.length;
    for (s = 0; s < l; s++) {
        const f = e[s];
        if (f !== 0) {
            if (((r = n[n.length - 1]), e[r] < f)) {
                ((t[s] = r), n.push(s));
                continue;
            }
            for (o = 0, i = n.length - 1; o < i; ) ((a = (o + i) >> 1), e[n[a]] < f ? (o = a + 1) : (i = a));
            f < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s));
        }
    }
    for (o = n.length, i = n[o - 1]; o-- > 0; ) ((n[o] = i), (i = t[i]));
    return n;
}
function Rl(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Rl(t);
}
function oi(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Al(e) {
    if (e.placeholder) return e.placeholder;
    const t = e.component;
    return t ? Al(t.subTree) : null;
}
const Pl = (e) => e.__isSuspense;
let $r = 0;
const Af = {
        name: 'Suspense',
        __isSuspense: !0,
        process(e, t, n, s, r, o, i, a, l, f) {
            if (e == null) Of(t, n, s, r, o, i, a, l, f);
            else {
                if (o && o.deps > 0 && !e.suspense.isInFallback) {
                    ((t.suspense = e.suspense), (t.suspense.vnode = t), (t.el = e.el));
                    return;
                }
                xf(e, t, n, s, r, i, a, l, f);
            }
        },
        hydrate: kf,
        normalize: Mf,
    },
    Pf = Af;
function zn(e, t) {
    const n = e.props && e.props[t];
    X(n) && n();
}
function Of(e, t, n, s, r, o, i, a, l) {
    const {
            p: f,
            o: { createElement: c },
        } = l,
        u = c('div'),
        d = (e.suspense = Ol(e, r, s, t, u, n, o, i, a, l));
    (f(null, (d.pendingBranch = e.ssContent), u, null, s, d, o, i),
        d.deps > 0
            ? (zn(e, 'onPending'), zn(e, 'onFallback'), f(null, e.ssFallback, t, n, s, null, o, i), mn(d, e.ssFallback))
            : d.resolve(!1, !0));
}
function xf(e, t, n, s, r, o, i, a, { p: l, um: f, o: { createElement: c } }) {
    const u = (t.suspense = e.suspense);
    ((u.vnode = t), (t.el = e.el));
    const d = t.ssContent,
        h = t.ssFallback,
        { activeBranch: _, pendingBranch: g, isInFallback: S, isHydrating: b } = u;
    if (g)
        ((u.pendingBranch = d),
            ft(g, d)
                ? (l(g, d, u.hiddenContainer, null, r, u, o, i, a),
                  u.deps <= 0 ? u.resolve() : S && (b || (l(_, h, n, s, r, null, o, i, a), mn(u, h))))
                : ((u.pendingId = $r++),
                  b ? ((u.isHydrating = !1), (u.activeBranch = g)) : f(g, r, u),
                  (u.deps = 0),
                  (u.effects.length = 0),
                  (u.hiddenContainer = c('div')),
                  S
                      ? (l(null, d, u.hiddenContainer, null, r, u, o, i, a),
                        u.deps <= 0 ? u.resolve() : (l(_, h, n, s, r, null, o, i, a), mn(u, h)))
                      : _ && ft(_, d)
                        ? (l(_, d, n, s, r, u, o, i, a), u.resolve(!0))
                        : (l(null, d, u.hiddenContainer, null, r, u, o, i, a), u.deps <= 0 && u.resolve())));
    else if (_ && ft(_, d)) (l(_, d, n, s, r, u, o, i, a), mn(u, d));
    else if (
        (zn(t, 'onPending'),
        (u.pendingBranch = d),
        d.shapeFlag & 512 ? (u.pendingId = d.component.suspenseId) : (u.pendingId = $r++),
        l(null, d, u.hiddenContainer, null, r, u, o, i, a),
        u.deps <= 0)
    )
        u.resolve();
    else {
        const { timeout: w, pendingId: y } = u;
        w > 0
            ? setTimeout(() => {
                  u.pendingId === y && u.fallback(h);
              }, w)
            : w === 0 && u.fallback(h);
    }
}
function Ol(e, t, n, s, r, o, i, a, l, f, c = !1) {
    const {
        p: u,
        m: d,
        um: h,
        n: _,
        o: { parentNode: g, remove: S },
    } = f;
    let b;
    const w = Df(e);
    w && t && t.pendingBranch && ((b = t.pendingId), t.deps++);
    const y = e.props ? wa(e.props.timeout) : void 0,
        v = o,
        E = {
            vnode: e,
            parent: t,
            parentComponent: n,
            namespace: i,
            container: s,
            hiddenContainer: r,
            deps: 0,
            pendingId: $r++,
            timeout: typeof y == 'number' ? y : -1,
            activeBranch: null,
            pendingBranch: null,
            isInFallback: !c,
            isHydrating: c,
            isUnmounted: !1,
            effects: [],
            resolve(N = !1, D = !1) {
                const {
                    vnode: P,
                    activeBranch: C,
                    pendingBranch: x,
                    pendingId: q,
                    effects: A,
                    parentComponent: U,
                    container: ee,
                    isInFallback: re,
                } = E;
                let F = !1;
                (E.isHydrating
                    ? (E.isHydrating = !1)
                    : N ||
                      ((F = C && x.transition && x.transition.mode === 'out-in'),
                      F &&
                          (C.transition.afterLeave = () => {
                              q === E.pendingId &&
                                  (d(x, ee, o === v ? _(C) : o, 0),
                                  Qn(A),
                                  re && P.ssFallback && (P.ssFallback.el = null));
                          }),
                      C &&
                          (g(C.el) === ee && (o = _(C)),
                          h(C, U, E, !0),
                          !F && re && P.ssFallback && Pe(() => (P.ssFallback.el = null), E)),
                      F || d(x, ee, o, 0)),
                    mn(E, x),
                    (E.pendingBranch = null),
                    (E.isInFallback = !1));
                let G = E.parent,
                    W = !1;
                for (; G; ) {
                    if (G.pendingBranch) {
                        (G.effects.push(...A), (W = !0));
                        break;
                    }
                    G = G.parent;
                }
                (!W && !F && Qn(A),
                    (E.effects = []),
                    w && t && t.pendingBranch && b === t.pendingId && (t.deps--, t.deps === 0 && !D && t.resolve()),
                    zn(P, 'onResolve'));
            },
            fallback(N) {
                if (!E.pendingBranch) return;
                const { vnode: D, activeBranch: P, parentComponent: C, container: x, namespace: q } = E;
                zn(D, 'onFallback');
                const A = _(P),
                    U = () => {
                        E.isInFallback && (u(null, N, x, A, C, null, q, a, l), mn(E, N));
                    },
                    ee = N.transition && N.transition.mode === 'out-in';
                (ee && (P.transition.afterLeave = U), (E.isInFallback = !0), h(P, C, null, !0), ee || U());
            },
            move(N, D, P) {
                (E.activeBranch && d(E.activeBranch, N, D, P), (E.container = N));
            },
            next() {
                return E.activeBranch && _(E.activeBranch);
            },
            registerDep(N, D, P) {
                const C = !!E.pendingBranch;
                C && E.deps++;
                const x = N.vnode.el;
                N.asyncDep
                    .catch((q) => {
                        Tn(q, N, 0);
                    })
                    .then((q) => {
                        if (N.isUnmounted || E.isUnmounted || E.pendingId !== N.suspenseId) return;
                        N.asyncResolved = !0;
                        const { vnode: A } = N;
                        (Br(N, q), x && (A.el = x));
                        const U = !x && N.subTree.el;
                        (D(N, A, g(x || N.subTree.el), x ? null : _(N.subTree), E, i, P),
                            U && ((A.placeholder = null), S(U)),
                            Xs(N, A.el),
                            C && --E.deps === 0 && E.resolve());
                    });
            },
            unmount(N, D) {
                ((E.isUnmounted = !0),
                    E.activeBranch && h(E.activeBranch, n, N, D),
                    E.pendingBranch && h(E.pendingBranch, n, N, D));
            },
        };
    return E;
}
function kf(e, t, n, s, r, o, i, a, l) {
    const f = (t.suspense = Ol(t, s, n, e.parentNode, document.createElement('div'), null, r, o, i, a, !0)),
        c = l(e, (f.pendingBranch = t.ssContent), n, f, o, i);
    return (f.deps === 0 && f.resolve(!1, !0), c);
}
function Mf(e) {
    const { shapeFlag: t, children: n } = e,
        s = t & 32;
    ((e.ssContent = ii(s ? n.default : n)), (e.ssFallback = s ? ii(n.fallback) : me(be)));
}
function ii(e) {
    let t;
    if (X(e)) {
        const n = wn && e._c;
        (n && ((e._d = !1), Ke()), (e = e()), n && ((e._d = !0), (t = $e), kl()));
    }
    return (
        Q(e) && (e = gf(e)),
        (e = je(e)),
        t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)),
        e
    );
}
function xl(e, t) {
    t && t.pendingBranch ? (Q(e) ? t.effects.push(...e) : t.effects.push(e)) : Qn(e);
}
function mn(e, t) {
    e.activeBranch = t;
    const { vnode: n, parentComponent: s } = e;
    let r = t.el;
    for (; !r && t.component; ) ((t = t.component.subTree), (r = t.el));
    ((n.el = r), s && s.subTree === n && ((s.vnode.el = r), Xs(s, r)));
}
function Df(e) {
    const t = e.props && e.props.suspensible;
    return t != null && t !== !1;
}
const ke = Symbol.for('v-fgt'),
    Zt = Symbol.for('v-txt'),
    be = Symbol.for('v-cmt'),
    Fn = Symbol.for('v-stc'),
    Un = [];
let $e = null;
function Ke(e = !1) {
    Un.push(($e = e ? null : []));
}
function kl() {
    (Un.pop(), ($e = Un[Un.length - 1] || null));
}
let wn = 1;
function As(e, t = !1) {
    ((wn += e), e < 0 && $e && t && ($e.hasOnce = !0));
}
function Ml(e) {
    return ((e.dynamicChildren = wn > 0 ? $e || dn : null), kl(), wn > 0 && $e && $e.push(e), e);
}
function Nf(e, t, n, s, r, o) {
    return Ml(Nl(e, t, n, s, r, o, !0));
}
function ut(e, t, n, s, r) {
    return Ml(me(e, t, n, s, r, !0));
}
function En(e) {
    return e ? e.__v_isVNode === !0 : !1;
}
function ft(e, t) {
    return e.type === t.type && e.key === t.key;
}
const Dl = ({ key: e }) => e ?? null,
    _s = ({ ref: e, ref_key: t, ref_for: n }) => (
        typeof e == 'number' && (e = '' + e),
        e != null ? (ge(e) || pe(e) || X(e) ? { i: Ce, r: e, k: t, f: !!n } : e) : null
    );
function Nl(e, t = null, n = null, s = 0, r = null, o = e === ke ? 0 : 1, i = !1, a = !1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Dl(t),
        ref: t && _s(t),
        scopeId: Ja,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: o,
        patchFlag: s,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
        ctx: Ce,
    };
    return (
        a ? (To(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= ge(n) ? 8 : 16),
        wn > 0 && !i && $e && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && $e.push(l),
        l
    );
}
const me = Lf;
function Lf(e, t = null, n = null, s = 0, r = null, o = !1) {
    if (((!e || e === cl) && (e = be), En(e))) {
        const a = Nt(e, t, !0);
        return (
            n && To(a, n),
            wn > 0 && !o && $e && (a.shapeFlag & 6 ? ($e[$e.indexOf(e)] = a) : $e.push(a)),
            (a.patchFlag = -2),
            a
        );
    }
    if ((Gf(e) && (e = e.__vccOpts), t)) {
        t = Ll(t);
        let { class: a, style: l } = t;
        (a && !ge(a) && (t.class = Vs(a)), se(l) && (Ks(l) && !Q(l) && (l = ve({}, l)), (t.style = Ws(l))));
    }
    const i = ge(e) ? 1 : Pl(e) ? 128 : Xa(e) ? 64 : se(e) ? 4 : X(e) ? 2 : 0;
    return Nl(e, t, n, s, r, i, o, !0);
}
function Ll(e) {
    return e ? (Ks(e) || _l(e) ? ve({}, e) : e) : null;
}
function Nt(e, t, n = !1, s = !1) {
    const { props: r, ref: o, patchFlag: i, children: a, transition: l } = e,
        f = t ? $f(r || {}, t) : r,
        c = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: f,
            key: f && Dl(f),
            ref: t && t.ref ? (n && o ? (Q(o) ? o.concat(_s(t)) : [o, _s(t)]) : _s(t)) : o,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: a,
            target: e.target,
            targetStart: e.targetStart,
            targetAnchor: e.targetAnchor,
            staticCount: e.staticCount,
            shapeFlag: e.shapeFlag,
            patchFlag: t && e.type !== ke ? (i === -1 ? 16 : i | 16) : i,
            dynamicProps: e.dynamicProps,
            dynamicChildren: e.dynamicChildren,
            appContext: e.appContext,
            dirs: e.dirs,
            transition: l,
            component: e.component,
            suspense: e.suspense,
            ssContent: e.ssContent && Nt(e.ssContent),
            ssFallback: e.ssFallback && Nt(e.ssFallback),
            placeholder: e.placeholder,
            el: e.el,
            anchor: e.anchor,
            ctx: e.ctx,
            ce: e.ce,
        };
    return (l && s && Xn(c, l.clone(c)), c);
}
function $l(e = ' ', t = 0) {
    return me(Zt, null, e, t);
}
function pm(e, t) {
    const n = me(Fn, null, e);
    return ((n.staticCount = t), n);
}
function gm(e = '', t = !1) {
    return t ? (Ke(), ut(be, null, e)) : me(be, null, e);
}
function je(e) {
    return e == null || typeof e == 'boolean'
        ? me(be)
        : Q(e)
          ? me(ke, null, e.slice())
          : En(e)
            ? wt(e)
            : me(Zt, null, String(e));
}
function wt(e) {
    return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Nt(e);
}
function To(e, t) {
    let n = 0;
    const { shapeFlag: s } = e;
    if (t == null) t = null;
    else if (Q(t)) n = 16;
    else if (typeof t == 'object')
        if (s & 65) {
            const r = t.default;
            r && (r._c && (r._d = !1), To(e, r()), r._c && (r._d = !0));
            return;
        } else {
            n = 32;
            const r = t._;
            !r && !_l(t)
                ? (t._ctx = Ce)
                : r === 3 && Ce && (Ce.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
        }
    else
        X(t)
            ? ((t = { default: t, _ctx: Ce }), (n = 32))
            : ((t = String(t)), s & 64 ? ((n = 16), (t = [$l(t)])) : (n = 8));
    ((e.children = t), (e.shapeFlag |= n));
}
function $f(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const s = e[n];
        for (const r in s)
            if (r === 'class') t.class !== s.class && (t.class = Vs([t.class, s.class]));
            else if (r === 'style') t.style = Ws([t.style, s.style]);
            else if (ns(r)) {
                const o = t[r],
                    i = s[r];
                i && o !== i && !(Q(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
            } else r !== '' && (t[r] = s[r]);
    }
    return t;
}
function qe(e, t, n, s = null) {
    Ze(e, t, 7, [n, s]);
}
const Bf = dl();
let Hf = 0;
function jf(e, t, n) {
    const s = e.type,
        r = (t ? t.appContext : e.appContext) || Bf,
        o = {
            uid: Hf++,
            vnode: e,
            type: s,
            parent: t,
            appContext: r,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            job: null,
            scope: new Sa(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(r.provides),
            ids: t ? t.ids : ['', 0, 0],
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: vl(s, r),
            emitsOptions: pl(s, r),
            emit: null,
            emitted: null,
            propsDefaults: ce,
            inheritAttrs: s.inheritAttrs,
            ctx: ce,
            data: ce,
            props: ce,
            attrs: ce,
            slots: ce,
            refs: ce,
            setupState: ce,
            setupContext: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null,
        };
    return ((o.ctx = { _: o }), (o.root = t ? t.root : o), (o.emit = df.bind(null, o)), e.ce && e.ce(o), o);
}
let Ee = null;
const Lt = () => Ee || Ce;
let Ps, _n;
{
    const e = Us(),
        t = (n, s) => {
            let r;
            return (
                (r = e[n]) || (r = e[n] = []),
                r.push(s),
                (o) => {
                    r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
                }
            );
        };
    ((Ps = t('__VUE_INSTANCE_SETTERS__', (n) => (Ee = n))), (_n = t('__VUE_SSR_SETTERS__', (n) => (tn = n))));
}
const An = (e) => {
        const t = Ee;
        return (
            Ps(e),
            e.scope.on(),
            () => {
                (e.scope.off(), Ps(t));
            }
        );
    },
    Os = () => {
        (Ee && Ee.scope.off(), Ps(null));
    };
function Bl(e) {
    return e.vnode.shapeFlag & 4;
}
let tn = !1;
function Ff(e, t = !1, n = !1) {
    t && _n(t);
    const { props: s, children: r } = e.vnode,
        o = Bl(e);
    (bf(e, s, o, t), If(e, r, n || t));
    const i = o ? Uf(e, t) : void 0;
    return (t && _n(!1), i);
}
function Uf(e, t) {
    const n = e.type;
    ((e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, sf)));
    const { setup: s } = n;
    if (s) {
        St();
        const r = (e.setupContext = s.length > 1 ? Vf(e) : null),
            o = An(e),
            i = os(s, e, 0, [e.props, r]),
            a = oo(i);
        if ((Tt(), o(), (a || e.sp) && !Xt(e) && bo(e), a)) {
            if ((i.then(Os, Os), t))
                return i
                    .then((l) => {
                        Br(e, l);
                    })
                    .catch((l) => {
                        Tn(l, e, 0);
                    });
            e.asyncDep = i;
        } else Br(e, i);
    } else Hl(e);
}
function Br(e, t, n) {
    (X(t) ? (e.type.__ssrInlineRender ? (e.ssrRender = t) : (e.render = t)) : se(t) && (e.setupState = Ua(t)), Hl(e));
}
function Hl(e, t, n) {
    const s = e.type;
    e.render || (e.render = s.render || ht);
    {
        const r = An(e);
        St();
        try {
            rf(e);
        } finally {
            (Tt(), r());
        }
    }
}
const Wf = {
    get(e, t) {
        return (Re(e, 'get', ''), e[t]);
    },
};
function Vf(e) {
    const t = (n) => {
        e.exposed = n || {};
    };
    return { attrs: new Proxy(e.attrs, Wf), slots: e.slots, emit: e.emit, expose: t };
}
function zs(e) {
    return e.exposed
        ? e.exposeProxy ||
              (e.exposeProxy = new Proxy(Ua(go(e.exposed)), {
                  get(t, n) {
                      if (n in t) return t[n];
                      if (n in jn) return jn[n](e);
                  },
                  has(t, n) {
                      return n in t || n in jn;
                  },
              }))
        : e.proxy;
}
function qf(e, t = !0) {
    return X(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Gf(e) {
    return X(e) && '__vccOpts' in e;
}
const Ie = (e, t) => Ou(e, t, tn);
function Ro(e, t, n) {
    try {
        As(-1);
        const s = arguments.length;
        return s === 2
            ? se(t) && !Q(t)
                ? En(t)
                    ? me(e, null, [t])
                    : me(e, t)
                : me(e, null, t)
            : (s > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : s === 3 && En(n) && (n = [n]), me(e, t, n));
    } finally {
        As(1);
    }
}
const Kf = '3.5.30';
let Hr;
const ai = typeof window < 'u' && window.trustedTypes;
if (ai)
    try {
        Hr = ai.createPolicy('vue', { createHTML: (e) => e });
    } catch {}
const jl = Hr ? (e) => Hr.createHTML(e) : (e) => e,
    Jf = 'http://www.w3.org/2000/svg',
    Qf = 'http://www.w3.org/1998/Math/MathML',
    vt = typeof document < 'u' ? document : null,
    li = vt && vt.createElement('template'),
    Yf = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null);
        },
        remove: (e) => {
            const t = e.parentNode;
            t && t.removeChild(e);
        },
        createElement: (e, t, n, s) => {
            const r =
                t === 'svg'
                    ? vt.createElementNS(Jf, e)
                    : t === 'mathml'
                      ? vt.createElementNS(Qf, e)
                      : n
                        ? vt.createElement(e, { is: n })
                        : vt.createElement(e);
            return (e === 'select' && s && s.multiple != null && r.setAttribute('multiple', s.multiple), r);
        },
        createText: (e) => vt.createTextNode(e),
        createComment: (e) => vt.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t;
        },
        setElementText: (e, t) => {
            e.textContent = t;
        },
        parentNode: (e) => e.parentNode,
        nextSibling: (e) => e.nextSibling,
        querySelector: (e) => vt.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, '');
        },
        insertStaticContent(e, t, n, s, r, o) {
            const i = n ? n.previousSibling : t.lastChild;
            if (r && (r === o || r.nextSibling))
                for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); );
            else {
                li.innerHTML = jl(s === 'svg' ? `<svg>${e}</svg>` : s === 'mathml' ? `<math>${e}</math>` : e);
                const a = li.content;
                if (s === 'svg' || s === 'mathml') {
                    const l = a.firstChild;
                    for (; l.firstChild; ) a.appendChild(l.firstChild);
                    a.removeChild(l);
                }
                t.insertBefore(a, n);
            }
            return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
        },
    },
    Pt = 'transition',
    Mn = 'animation',
    Zn = Symbol('_vtc'),
    Fl = {
        name: String,
        type: String,
        css: { type: Boolean, default: !0 },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String,
    },
    Xf = ve({}, za, Fl),
    zf = (e) => ((e.displayName = 'Transition'), (e.props = Xf), e),
    ym = zf((e, { slots: t }) => Ro(Uu, Zf(e), t)),
    jt = (e, t = []) => {
        Q(e) ? e.forEach((n) => n(...t)) : e && e(...t);
    },
    ci = (e) => (e ? (Q(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function Zf(e) {
    const t = {};
    for (const A in e) A in Fl || (t[A] = e[A]);
    if (e.css === !1) return t;
    const {
            name: n = 'v',
            type: s,
            duration: r,
            enterFromClass: o = `${n}-enter-from`,
            enterActiveClass: i = `${n}-enter-active`,
            enterToClass: a = `${n}-enter-to`,
            appearFromClass: l = o,
            appearActiveClass: f = i,
            appearToClass: c = a,
            leaveFromClass: u = `${n}-leave-from`,
            leaveActiveClass: d = `${n}-leave-active`,
            leaveToClass: h = `${n}-leave-to`,
        } = e,
        _ = eh(r),
        g = _ && _[0],
        S = _ && _[1],
        {
            onBeforeEnter: b,
            onEnter: w,
            onEnterCancelled: y,
            onLeave: v,
            onLeaveCancelled: E,
            onBeforeAppear: N = b,
            onAppear: D = w,
            onAppearCancelled: P = y,
        } = t,
        C = (A, U, ee, re) => {
            ((A._enterCancelled = re), Ft(A, U ? c : a), Ft(A, U ? f : i), ee && ee());
        },
        x = (A, U) => {
            ((A._isLeaving = !1), Ft(A, u), Ft(A, h), Ft(A, d), U && U());
        },
        q = (A) => (U, ee) => {
            const re = A ? D : w,
                F = () => C(U, A, ee);
            (jt(re, [U, F]),
                ui(() => {
                    (Ft(U, A ? l : o), _t(U, A ? c : a), ci(re) || fi(U, s, g, F));
                }));
        };
    return ve(t, {
        onBeforeEnter(A) {
            (jt(b, [A]), _t(A, o), _t(A, i));
        },
        onBeforeAppear(A) {
            (jt(N, [A]), _t(A, l), _t(A, f));
        },
        onEnter: q(!1),
        onAppear: q(!0),
        onLeave(A, U) {
            A._isLeaving = !0;
            const ee = () => x(A, U);
            (_t(A, u),
                A._enterCancelled ? (_t(A, d), pi(A)) : (pi(A), _t(A, d)),
                ui(() => {
                    A._isLeaving && (Ft(A, u), _t(A, h), ci(v) || fi(A, s, S, ee));
                }),
                jt(v, [A, ee]));
        },
        onEnterCancelled(A) {
            (C(A, !1, void 0, !0), jt(y, [A]));
        },
        onAppearCancelled(A) {
            (C(A, !0, void 0, !0), jt(P, [A]));
        },
        onLeaveCancelled(A) {
            (x(A), jt(E, [A]));
        },
    });
}
function eh(e) {
    if (e == null) return null;
    if (se(e)) return [hr(e.enter), hr(e.leave)];
    {
        const t = hr(e);
        return [t, t];
    }
}
function hr(e) {
    return wa(e);
}
function _t(e, t) {
    (t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Zn] || (e[Zn] = new Set())).add(t));
}
function Ft(e, t) {
    t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
    const n = e[Zn];
    n && (n.delete(t), n.size || (e[Zn] = void 0));
}
function ui(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e);
    });
}
let th = 0;
function fi(e, t, n, s) {
    const r = (e._endId = ++th),
        o = () => {
            r === e._endId && s();
        };
    if (n != null) return setTimeout(o, n);
    const { type: i, timeout: a, propCount: l } = nh(e, t);
    if (!i) return s();
    const f = i + 'end';
    let c = 0;
    const u = () => {
            (e.removeEventListener(f, d), o());
        },
        d = (h) => {
            h.target === e && ++c >= l && u();
        };
    (setTimeout(() => {
        c < l && u();
    }, a + 1),
        e.addEventListener(f, d));
}
function nh(e, t) {
    const n = window.getComputedStyle(e),
        s = (_) => (n[_] || '').split(', '),
        r = s(`${Pt}Delay`),
        o = s(`${Pt}Duration`),
        i = hi(r, o),
        a = s(`${Mn}Delay`),
        l = s(`${Mn}Duration`),
        f = hi(a, l);
    let c = null,
        u = 0,
        d = 0;
    t === Pt
        ? i > 0 && ((c = Pt), (u = i), (d = o.length))
        : t === Mn
          ? f > 0 && ((c = Mn), (u = f), (d = l.length))
          : ((u = Math.max(i, f)),
            (c = u > 0 ? (i > f ? Pt : Mn) : null),
            (d = c ? (c === Pt ? o.length : l.length) : 0));
    const h = c === Pt && /\b(?:transform|all)(?:,|$)/.test(s(`${Pt}Property`).toString());
    return { type: c, timeout: u, propCount: d, hasTransform: h };
}
function hi(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((n, s) => di(n) + di(e[s])));
}
function di(e) {
    return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3;
}
function pi(e) {
    return (e ? e.ownerDocument : document).body.offsetHeight;
}
function sh(e, t, n) {
    const s = e[Zn];
    (s && (t = (t ? [t, ...s] : [...s]).join(' ')),
        t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t));
}
const gi = Symbol('_vod'),
    rh = Symbol('_vsh'),
    oh = Symbol(''),
    ih = /(?:^|;)\s*display\s*:/;
function ah(e, t, n) {
    const s = e.style,
        r = ge(n);
    let o = !1;
    if (n && !r) {
        if (t)
            if (ge(t))
                for (const i of t.split(';')) {
                    const a = i.slice(0, i.indexOf(':')).trim();
                    n[a] == null && bs(s, a, '');
                }
            else for (const i in t) n[i] == null && bs(s, i, '');
        for (const i in n) (i === 'display' && (o = !0), bs(s, i, n[i]));
    } else if (r) {
        if (t !== n) {
            const i = s[oh];
            (i && (n += ';' + i), (s.cssText = n), (o = ih.test(n)));
        }
    } else t && e.removeAttribute('style');
    gi in e && ((e[gi] = o ? s.display : ''), e[rh] && (s.display = 'none'));
}
const yi = /\s*!important$/;
function bs(e, t, n) {
    if (Q(n)) n.forEach((s) => bs(e, t, s));
    else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
    else {
        const s = lh(e, t);
        yi.test(n) ? e.setProperty($t(s), n.replace(yi, ''), 'important') : (e[s] = n);
    }
}
const mi = ['Webkit', 'Moz', 'ms'],
    dr = {};
function lh(e, t) {
    const n = dr[t];
    if (n) return n;
    let s = Me(t);
    if (s !== 'filter' && s in e) return (dr[t] = s);
    s = js(s);
    for (let r = 0; r < mi.length; r++) {
        const o = mi[r] + s;
        if (o in e) return (dr[t] = o);
    }
    return t;
}
const _i = 'http://www.w3.org/1999/xlink';
function bi(e, t, n, s, r, o = tu(t)) {
    s && t.startsWith('xlink:')
        ? n == null
            ? e.removeAttributeNS(_i, t.slice(6, t.length))
            : e.setAttributeNS(_i, t, n)
        : n == null || (o && !Ea(n))
          ? e.removeAttribute(t)
          : e.setAttribute(t, o ? '' : Xe(n) ? String(n) : n);
}
function vi(e, t, n, s, r) {
    if (t === 'innerHTML' || t === 'textContent') {
        n != null && (e[t] = t === 'innerHTML' ? jl(n) : n);
        return;
    }
    const o = e.tagName;
    if (t === 'value' && o !== 'PROGRESS' && !o.includes('-')) {
        const a = o === 'OPTION' ? e.getAttribute('value') || '' : e.value,
            l = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n);
        ((a !== l || !('_value' in e)) && (e.value = l), n == null && e.removeAttribute(t), (e._value = n));
        return;
    }
    let i = !1;
    if (n === '' || n == null) {
        const a = typeof e[t];
        a === 'boolean'
            ? (n = Ea(n))
            : n == null && a === 'string'
              ? ((n = ''), (i = !0))
              : a === 'number' && ((n = 0), (i = !0));
    }
    try {
        e[t] = n;
    } catch {}
    i && e.removeAttribute(r || t);
}
function Gt(e, t, n, s) {
    e.addEventListener(t, n, s);
}
function ch(e, t, n, s) {
    e.removeEventListener(t, n, s);
}
const wi = Symbol('_vei');
function uh(e, t, n, s, r = null) {
    const o = e[wi] || (e[wi] = {}),
        i = o[t];
    if (s && i) i.value = s;
    else {
        const [a, l] = fh(t);
        if (s) {
            const f = (o[t] = ph(s, r));
            Gt(e, a, f, l);
        } else i && (ch(e, a, i, l), (o[t] = void 0));
    }
}
const Ei = /(?:Once|Passive|Capture)$/;
function fh(e) {
    let t;
    if (Ei.test(e)) {
        t = {};
        let s;
        for (; (s = e.match(Ei)); ) ((e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0));
    }
    return [e[2] === ':' ? e.slice(3) : $t(e.slice(2)), t];
}
let pr = 0;
const hh = Promise.resolve(),
    dh = () => pr || (hh.then(() => (pr = 0)), (pr = Date.now()));
function ph(e, t) {
    const n = (s) => {
        if (!s._vts) s._vts = Date.now();
        else if (s._vts <= n.attached) return;
        Ze(gh(s, n.value), t, 5, [s]);
    };
    return ((n.value = e), (n.attached = dh()), n);
}
function gh(e, t) {
    if (Q(t)) {
        const n = e.stopImmediatePropagation;
        return (
            (e.stopImmediatePropagation = () => {
                (n.call(e), (e._stopped = !0));
            }),
            t.map((s) => (r) => !r._stopped && s && s(r))
        );
    } else return t;
}
const Ii = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    yh = (e, t, n, s, r, o) => {
        const i = r === 'svg';
        t === 'class'
            ? sh(e, s, i)
            : t === 'style'
              ? ah(e, n, s)
              : ns(t)
                ? so(t) || uh(e, t, n, s, o)
                : (t[0] === '.' ? ((t = t.slice(1)), !0) : t[0] === '^' ? ((t = t.slice(1)), !1) : mh(e, t, s, i))
                  ? (vi(e, t, s),
                    !e.tagName.includes('-') &&
                        (t === 'value' || t === 'checked' || t === 'selected') &&
                        bi(e, t, s, i, o, t !== 'value'))
                  : e._isVueCE && (_h(e, t) || (e._def.__asyncLoader && (/[A-Z]/.test(t) || !ge(s))))
                    ? vi(e, Me(t), s, o, t)
                    : (t === 'true-value' ? (e._trueValue = s) : t === 'false-value' && (e._falseValue = s),
                      bi(e, t, s, i));
    };
function mh(e, t, n, s) {
    if (s) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && Ii(t) && X(n)));
    if (
        t === 'spellcheck' ||
        t === 'draggable' ||
        t === 'translate' ||
        t === 'autocorrect' ||
        (t === 'sandbox' && e.tagName === 'IFRAME') ||
        t === 'form' ||
        (t === 'list' && e.tagName === 'INPUT') ||
        (t === 'type' && e.tagName === 'TEXTAREA')
    )
        return !1;
    if (t === 'width' || t === 'height') {
        const r = e.tagName;
        if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE') return !1;
    }
    return Ii(t) && ge(n) ? !1 : t in e;
}
function _h(e, t) {
    const n = e._def.props;
    if (!n) return !1;
    const s = Me(t);
    return Array.isArray(n) ? n.some((r) => Me(r) === s) : Object.keys(n).some((r) => Me(r) === s);
}
const xs = (e) => {
    const t = e.props['onUpdate:modelValue'] || !1;
    return Q(t) ? (n) => ms(t, n) : t;
};
function bh(e) {
    e.target.composing = !0;
}
function Ci(e) {
    const t = e.target;
    t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')));
}
const bn = Symbol('_assign');
function Si(e, t, n) {
    return (t && (e = e.trim()), n && (e = Fs(e)), e);
}
const mm = {
        created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
            e[bn] = xs(r);
            const o = s || (r.props && r.props.type === 'number');
            (Gt(e, t ? 'change' : 'input', (i) => {
                i.target.composing || e[bn](Si(e.value, n, o));
            }),
                (n || o) &&
                    Gt(e, 'change', () => {
                        e.value = Si(e.value, n, o);
                    }),
                t || (Gt(e, 'compositionstart', bh), Gt(e, 'compositionend', Ci), Gt(e, 'change', Ci)));
        },
        mounted(e, { value: t }) {
            e.value = t ?? '';
        },
        beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: o } }, i) {
            if (((e[bn] = xs(i)), e.composing)) return;
            const a = (o || e.type === 'number') && !/^0\d/.test(e.value) ? Fs(e.value) : e.value,
                l = t ?? '';
            a !== l &&
                ((document.activeElement === e &&
                    e.type !== 'range' &&
                    ((s && t === n) || (r && e.value.trim() === l))) ||
                    (e.value = l));
        },
    },
    _m = {
        deep: !0,
        created(e, { value: t, modifiers: { number: n } }, s) {
            const r = $s(t);
            (Gt(e, 'change', () => {
                const o = Array.prototype.filter.call(e.options, (i) => i.selected).map((i) => (n ? Fs(ks(i)) : ks(i)));
                (e[bn](e.multiple ? (r ? new Set(o) : o) : o[0]),
                    (e._assigning = !0),
                    Rn(() => {
                        e._assigning = !1;
                    }));
            }),
                (e[bn] = xs(s)));
        },
        mounted(e, { value: t }) {
            Ti(e, t);
        },
        beforeUpdate(e, t, n) {
            e[bn] = xs(n);
        },
        updated(e, { value: t }) {
            e._assigning || Ti(e, t);
        },
    };
function Ti(e, t) {
    const n = e.multiple,
        s = Q(t);
    if (!(n && !s && !$s(t))) {
        for (let r = 0, o = e.options.length; r < o; r++) {
            const i = e.options[r],
                a = ks(i);
            if (n)
                if (s) {
                    const l = typeof a;
                    l === 'string' || l === 'number'
                        ? (i.selected = t.some((f) => String(f) === String(a)))
                        : (i.selected = su(t, a) > -1);
                } else i.selected = t.has(a);
            else if (rs(ks(i), t)) {
                e.selectedIndex !== r && (e.selectedIndex = r);
                return;
            }
        }
        !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
    }
}
function ks(e) {
    return '_value' in e ? e._value : e.value;
}
const vh = ['ctrl', 'shift', 'alt', 'meta'],
    wh = {
        stop: (e) => e.stopPropagation(),
        prevent: (e) => e.preventDefault(),
        self: (e) => e.target !== e.currentTarget,
        ctrl: (e) => !e.ctrlKey,
        shift: (e) => !e.shiftKey,
        alt: (e) => !e.altKey,
        meta: (e) => !e.metaKey,
        left: (e) => 'button' in e && e.button !== 0,
        middle: (e) => 'button' in e && e.button !== 1,
        right: (e) => 'button' in e && e.button !== 2,
        exact: (e, t) => vh.some((n) => e[`${n}Key`] && !t.includes(n)),
    },
    bm = (e, t) => {
        if (!e) return e;
        const n = e._withMods || (e._withMods = {}),
            s = t.join('.');
        return (
            n[s] ||
            (n[s] = (r, ...o) => {
                for (let i = 0; i < t.length; i++) {
                    const a = wh[t[i]];
                    if (a && a(r, t)) return;
                }
                return e(r, ...o);
            })
        );
    },
    Eh = {
        esc: 'escape',
        space: ' ',
        up: 'arrow-up',
        left: 'arrow-left',
        right: 'arrow-right',
        down: 'arrow-down',
        delete: 'backspace',
    },
    vm = (e, t) => {
        const n = e._withKeys || (e._withKeys = {}),
            s = t.join('.');
        return (
            n[s] ||
            (n[s] = (r) => {
                if (!('key' in r)) return;
                const o = $t(r.key);
                if (t.some((i) => i === o || Eh[i] === o)) return e(r);
            })
        );
    },
    Ul = ve({ patchProp: yh }, Yf);
let Wn,
    Ri = !1;
function Ih() {
    return Wn || (Wn = Sf(Ul));
}
function Ch() {
    return ((Wn = Ri ? Wn : Tf(Ul)), (Ri = !0), Wn);
}
const Sh = (...e) => {
        const t = Ih().createApp(...e),
            { mount: n } = t;
        return (
            (t.mount = (s) => {
                const r = Vl(s);
                if (!r) return;
                const o = t._component;
                (!X(o) && !o.render && !o.template && (o.template = r.innerHTML),
                    r.nodeType === 1 && (r.textContent = ''));
                const i = n(r, !1, Wl(r));
                return (r instanceof Element && (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')), i);
            }),
            t
        );
    },
    Th = (...e) => {
        const t = Ch().createApp(...e),
            { mount: n } = t;
        return (
            (t.mount = (s) => {
                const r = Vl(s);
                if (r) return n(r, !0, Wl(r));
            }),
            t
        );
    };
function Wl(e) {
    if (e instanceof SVGElement) return 'svg';
    if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml';
}
function Vl(e) {
    return ge(e) ? document.querySelector(e) : e;
}
const Rh =
        /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
    Ah =
        /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
    Ph = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Oh(e, t) {
    if (e === '__proto__' || (e === 'constructor' && t && typeof t == 'object' && 'prototype' in t)) {
        xh(e);
        return;
    }
    return t;
}
function xh(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
}
function kh(e, t = {}) {
    if (typeof e != 'string') return e;
    if (e[0] === '"' && e[e.length - 1] === '"' && e.indexOf('\\') === -1) return e.slice(1, -1);
    const n = e.trim();
    if (n.length <= 9)
        switch (n.toLowerCase()) {
            case 'true':
                return !0;
            case 'false':
                return !1;
            case 'undefined':
                return;
            case 'null':
                return null;
            case 'nan':
                return Number.NaN;
            case 'infinity':
                return Number.POSITIVE_INFINITY;
            case '-infinity':
                return Number.NEGATIVE_INFINITY;
        }
    if (!Ph.test(e)) {
        if (t.strict) throw new SyntaxError('[destr] Invalid JSON');
        return e;
    }
    try {
        if (Rh.test(e) || Ah.test(e)) {
            if (t.strict) throw new Error('[destr] Possible prototype pollution');
            return JSON.parse(e, Oh);
        }
        return JSON.parse(e);
    } catch (s) {
        if (t.strict) throw s;
        return e;
    }
}
const ql = /#/g,
    Gl = /&/g,
    Mh = /\//g,
    Dh = /=/g,
    Nh = /\?/g,
    Zs = /\+/g,
    Lh = /%5e/gi,
    $h = /%60/gi,
    Bh = /%7c/gi,
    Hh = /%20/gi,
    jh = /%2f/gi,
    Fh = /%252f/gi;
function Kl(e) {
    return encodeURI('' + e).replace(Bh, '|');
}
function jr(e) {
    return Kl(typeof e == 'string' ? e : JSON.stringify(e))
        .replace(Zs, '%2B')
        .replace(Hh, '+')
        .replace(ql, '%23')
        .replace(Gl, '%26')
        .replace($h, '`')
        .replace(Lh, '^')
        .replace(Mh, '%2F');
}
function gr(e) {
    return jr(e).replace(Dh, '%3D');
}
function Uh(e) {
    return Kl(e).replace(ql, '%23').replace(Nh, '%3F').replace(Fh, '%2F').replace(Gl, '%26').replace(Zs, '%2B');
}
function es(e = '') {
    try {
        return decodeURIComponent('' + e);
    } catch {
        return '' + e;
    }
}
function Wh(e) {
    return es(e.replace(jh, '%252F'));
}
function Vh(e) {
    return es(e.replace(Zs, ' '));
}
function qh(e) {
    return es(e.replace(Zs, ' '));
}
function Jl(e = '') {
    const t = Object.create(null);
    e[0] === '?' && (e = e.slice(1));
    for (const n of e.split('&')) {
        const s = n.match(/([^=]+)=?(.*)/) || [];
        if (s.length < 2) continue;
        const r = Vh(s[1]);
        if (r === '__proto__' || r === 'constructor') continue;
        const o = qh(s[2] || '');
        t[r] === void 0 ? (t[r] = o) : Array.isArray(t[r]) ? t[r].push(o) : (t[r] = [t[r], o]);
    }
    return t;
}
function Gh(e, t) {
    return (
        (typeof t == 'number' || typeof t == 'boolean') && (t = String(t)),
        t ? (Array.isArray(t) ? t.map((n) => `${gr(e)}=${jr(n)}`).join('&') : `${gr(e)}=${jr(t)}`) : gr(e)
    );
}
function Kh(e) {
    return Object.keys(e)
        .filter((t) => e[t] !== void 0)
        .map((t) => Gh(t, e[t]))
        .filter(Boolean)
        .join('&');
}
const Jh = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
    Qh = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
    Yh = /^([/\\]\s*){2,}[^/\\]/,
    Xh = /^[\s\0]*(blob|data|javascript|vbscript):$/i,
    zh = /\/$|\/\?|\/#/,
    Zh = /^\.?\//;
function Pn(e, t = {}) {
    return (
        typeof t == 'boolean' && (t = { acceptRelative: t }),
        t.strict ? Jh.test(e) : Qh.test(e) || (t.acceptRelative ? Yh.test(e) : !1)
    );
}
function ed(e) {
    return !!e && Xh.test(e);
}
function Fr(e = '', t) {
    return t ? zh.test(e) : e.endsWith('/');
}
function Ms(e = '', t) {
    if (!t) return (Fr(e) ? e.slice(0, -1) : e) || '/';
    if (!Fr(e, !0)) return e || '/';
    let n = e,
        s = '';
    const r = e.indexOf('#');
    r !== -1 && ((n = e.slice(0, r)), (s = e.slice(r)));
    const [o, ...i] = n.split('?');
    return ((o.endsWith('/') ? o.slice(0, -1) : o) || '/') + (i.length > 0 ? `?${i.join('?')}` : '') + s;
}
function td(e = '', t) {
    if (!t) return e.endsWith('/') ? e : e + '/';
    if (Fr(e, !0)) return e || '/';
    let n = e,
        s = '';
    const r = e.indexOf('#');
    if (r !== -1 && ((n = e.slice(0, r)), (s = e.slice(r)), !n)) return s;
    const [o, ...i] = n.split('?');
    return o + '/' + (i.length > 0 ? `?${i.join('?')}` : '') + s;
}
function nd(e, t) {
    if (Yl(t) || Pn(e)) return e;
    const n = Ms(t);
    if (e.startsWith(n)) {
        const s = e[n.length];
        if (!s || s === '/' || s === '?') return e;
    }
    return Xl(n, e);
}
function Ai(e, t) {
    if (Yl(t)) return e;
    const n = Ms(t);
    if (!e.startsWith(n)) return e;
    const s = e[n.length];
    if (s && s !== '/' && s !== '?') return e;
    const r = e.slice(n.length);
    return r[0] === '/' ? r : '/' + r;
}
function Ql(e, t) {
    const n = Ao(e),
        s = { ...Jl(n.search), ...t };
    return ((n.search = Kh(s)), rd(n));
}
function Yl(e) {
    return !e || e === '/';
}
function sd(e) {
    return e && e !== '/';
}
function Xl(e, ...t) {
    let n = e || '';
    for (const s of t.filter((r) => sd(r)))
        if (n) {
            const r = s.replace(Zh, '');
            n = td(n) + r;
        } else n = s;
    return n;
}
function zl(...e) {
    const t = /\/(?!\/)/,
        n = e.filter(Boolean),
        s = [];
    let r = 0;
    for (const i of n)
        if (!(!i || i === '/')) {
            for (const [a, l] of i.split(t).entries())
                if (!(!l || l === '.')) {
                    if (l === '..') {
                        if (s.length === 1 && Pn(s[0])) continue;
                        (s.pop(), r--);
                        continue;
                    }
                    if (a === 1 && s[s.length - 1]?.endsWith(':/')) {
                        s[s.length - 1] += '/' + l;
                        continue;
                    }
                    (s.push(l), r++);
                }
        }
    let o = s.join('/');
    return (
        r >= 0
            ? n[0]?.startsWith('/') && !o.startsWith('/')
                ? (o = '/' + o)
                : n[0]?.startsWith('./') && !o.startsWith('./') && (o = './' + o)
            : (o = '../'.repeat(-1 * r) + o),
        n[n.length - 1]?.endsWith('/') && !o.endsWith('/') && (o += '/'),
        o
    );
}
function Zl(e, t) {
    return es(Ms(e)) === es(Ms(t));
}
const ec = Symbol.for('ufo:protocolRelative');
function Ao(e = '', t) {
    const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
    if (n) {
        const [, u, d = ''] = n;
        return { protocol: u.toLowerCase(), pathname: d, href: u + d, auth: '', host: '', search: '', hash: '' };
    }
    if (!Pn(e, { acceptRelative: !0 })) return Pi(e);
    const [, s = '', r, o = ''] = e.replace(/\\/g, '/').match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
    let [, i = '', a = ''] = o.match(/([^#/?]*)(.*)?/) || [];
    s === 'file:' && (a = a.replace(/\/(?=[A-Za-z]:)/, ''));
    const { pathname: l, search: f, hash: c } = Pi(a);
    return {
        protocol: s.toLowerCase(),
        auth: r ? r.slice(0, Math.max(0, r.length - 1)) : '',
        host: i,
        pathname: l,
        search: f,
        hash: c,
        [ec]: !s,
    };
}
function Pi(e = '') {
    const [t = '', n = '', s = ''] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return { pathname: t, search: n, hash: s };
}
function rd(e) {
    const t = e.pathname || '',
        n = e.search ? (e.search.startsWith('?') ? '' : '?') + e.search : '',
        s = e.hash || '',
        r = e.auth ? e.auth + '@' : '',
        o = e.host || '';
    return (e.protocol || e[ec] ? (e.protocol || '') + '//' : '') + r + o + t + n + s;
}
class od extends Error {
    constructor(t, n) {
        (super(t, n), (this.name = 'FetchError'), n?.cause && !this.cause && (this.cause = n.cause));
    }
}
function id(e) {
    const t = e.error?.message || e.error?.toString() || '',
        n = e.request?.method || e.options?.method || 'GET',
        s = e.request?.url || String(e.request) || '/',
        r = `[${n}] ${JSON.stringify(s)}`,
        o = e.response ? `${e.response.status} ${e.response.statusText}` : '<no response>',
        i = `${r}: ${o}${t ? ` ${t}` : ''}`,
        a = new od(i, e.error ? { cause: e.error } : void 0);
    for (const l of ['request', 'options', 'response'])
        Object.defineProperty(a, l, {
            get() {
                return e[l];
            },
        });
    for (const [l, f] of [
        ['data', '_data'],
        ['status', 'status'],
        ['statusCode', 'status'],
        ['statusText', 'statusText'],
        ['statusMessage', 'statusText'],
    ])
        Object.defineProperty(a, l, {
            get() {
                return e.response && e.response[f];
            },
        });
    return a;
}
const ad = new Set(Object.freeze(['PATCH', 'POST', 'PUT', 'DELETE']));
function Oi(e = 'GET') {
    return ad.has(e.toUpperCase());
}
function ld(e) {
    if (e === void 0) return !1;
    const t = typeof e;
    return t === 'string' || t === 'number' || t === 'boolean' || t === null
        ? !0
        : t !== 'object'
          ? !1
          : Array.isArray(e)
            ? !0
            : e.buffer || e instanceof FormData || e instanceof URLSearchParams
              ? !1
              : (e.constructor && e.constructor.name === 'Object') || typeof e.toJSON == 'function';
}
const cd = new Set(['image/svg', 'application/xml', 'application/xhtml', 'application/html']),
    ud = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function fd(e = '') {
    if (!e) return 'json';
    const t = e.split(';').shift() || '';
    return ud.test(t)
        ? 'json'
        : t === 'text/event-stream'
          ? 'stream'
          : cd.has(t) || t.startsWith('text/')
            ? 'text'
            : 'blob';
}
function hd(e, t, n, s) {
    const r = dd(t?.headers ?? e?.headers, n?.headers, s);
    let o;
    return (
        (n?.query || n?.params || t?.params || t?.query) &&
            (o = { ...n?.params, ...n?.query, ...t?.params, ...t?.query }),
        { ...n, ...t, query: o, params: o, headers: r }
    );
}
function dd(e, t, n) {
    if (!t) return new n(e);
    const s = new n(t);
    if (e) for (const [r, o] of Symbol.iterator in e || Array.isArray(e) ? e : new n(e)) s.set(r, o);
    return s;
}
async function ds(e, t) {
    if (t)
        if (Array.isArray(t)) for (const n of t) await n(e);
        else await t(e);
}
const pd = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
    gd = new Set([101, 204, 205, 304]);
function tc(e = {}) {
    const {
        fetch: t = globalThis.fetch,
        Headers: n = globalThis.Headers,
        AbortController: s = globalThis.AbortController,
    } = e;
    async function r(a) {
        const l = (a.error && a.error.name === 'AbortError' && !a.options.timeout) || !1;
        if (a.options.retry !== !1 && !l) {
            let c;
            typeof a.options.retry == 'number' ? (c = a.options.retry) : (c = Oi(a.options.method) ? 0 : 1);
            const u = (a.response && a.response.status) || 500;
            if (
                c > 0 &&
                (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(u) : pd.has(u))
            ) {
                const d =
                    typeof a.options.retryDelay == 'function' ? a.options.retryDelay(a) : a.options.retryDelay || 0;
                return (
                    d > 0 && (await new Promise((h) => setTimeout(h, d))),
                    o(a.request, { ...a.options, retry: c - 1 })
                );
            }
        }
        const f = id(a);
        throw (Error.captureStackTrace && Error.captureStackTrace(f, o), f);
    }
    const o = async function (l, f = {}) {
            const c = { request: l, options: hd(l, f, e.defaults, n), response: void 0, error: void 0 };
            if (
                (c.options.method && (c.options.method = c.options.method.toUpperCase()),
                c.options.onRequest &&
                    (await ds(c, c.options.onRequest),
                    c.options.headers instanceof n || (c.options.headers = new n(c.options.headers || {}))),
                typeof c.request == 'string' &&
                    (c.options.baseURL && (c.request = nd(c.request, c.options.baseURL)),
                    c.options.query && ((c.request = Ql(c.request, c.options.query)), delete c.options.query),
                    'query' in c.options && delete c.options.query,
                    'params' in c.options && delete c.options.params),
                c.options.body && Oi(c.options.method))
            )
                if (ld(c.options.body)) {
                    const h = c.options.headers.get('content-type');
                    (typeof c.options.body != 'string' &&
                        (c.options.body =
                            h === 'application/x-www-form-urlencoded'
                                ? new URLSearchParams(c.options.body).toString()
                                : JSON.stringify(c.options.body)),
                        h || c.options.headers.set('content-type', 'application/json'),
                        c.options.headers.has('accept') || c.options.headers.set('accept', 'application/json'));
                } else
                    (('pipeTo' in c.options.body && typeof c.options.body.pipeTo == 'function') ||
                        typeof c.options.body.pipe == 'function') &&
                        ('duplex' in c.options || (c.options.duplex = 'half'));
            let u;
            if (!c.options.signal && c.options.timeout) {
                const h = new s();
                ((u = setTimeout(() => {
                    const _ = new Error('[TimeoutError]: The operation was aborted due to timeout');
                    ((_.name = 'TimeoutError'), (_.code = 23), h.abort(_));
                }, c.options.timeout)),
                    (c.options.signal = h.signal));
            }
            try {
                c.response = await t(c.request, c.options);
            } catch (h) {
                return ((c.error = h), c.options.onRequestError && (await ds(c, c.options.onRequestError)), await r(c));
            } finally {
                u && clearTimeout(u);
            }
            if (
                (c.response.body || c.response._bodyInit) &&
                !gd.has(c.response.status) &&
                c.options.method !== 'HEAD'
            ) {
                const h =
                    (c.options.parseResponse ? 'json' : c.options.responseType) ||
                    fd(c.response.headers.get('content-type') || '');
                switch (h) {
                    case 'json': {
                        const _ = await c.response.text(),
                            g = c.options.parseResponse || kh;
                        c.response._data = g(_);
                        break;
                    }
                    case 'stream': {
                        c.response._data = c.response.body || c.response._bodyInit;
                        break;
                    }
                    default:
                        c.response._data = await c.response[h]();
                }
            }
            return (
                c.options.onResponse && (await ds(c, c.options.onResponse)),
                !c.options.ignoreResponseError && c.response.status >= 400 && c.response.status < 600
                    ? (c.options.onResponseError && (await ds(c, c.options.onResponseError)), await r(c))
                    : c.response
            );
        },
        i = async function (l, f) {
            return (await o(l, f))._data;
        };
    return (
        (i.raw = o),
        (i.native = (...a) => t(...a)),
        (i.create = (a = {}, l = {}) => tc({ ...e, ...l, defaults: { ...e.defaults, ...l.defaults, ...a } })),
        i
    );
}
const Ds = (function () {
        if (typeof globalThis < 'u') return globalThis;
        if (typeof self < 'u') return self;
        if (typeof window < 'u') return window;
        if (typeof global < 'u') return global;
        throw new Error('unable to locate global object');
    })(),
    yd = Ds.fetch
        ? (...e) => Ds.fetch(...e)
        : () => Promise.reject(new Error('[ofetch] global.fetch is not supported!')),
    md = Ds.Headers,
    _d = Ds.AbortController,
    bd = tc({ fetch: yd, Headers: md, AbortController: _d }),
    vd = bd,
    wd = () => window?.__NUXT__?.config || window?.useNuxtApp?.().payload?.config,
    Po = () => wd().app,
    Ed = () => Po().baseURL,
    Id = () => Po().buildAssetsDir,
    Oo = (...e) => zl(nc(), Id(), ...e),
    nc = (...e) => {
        const t = Po(),
            n = t.cdnURL || t.baseURL;
        return e.length ? zl(n, ...e) : n;
    };
((globalThis.__buildAssetsURL = Oo), (globalThis.__publicAssetsURL = nc));
globalThis.$fetch || (globalThis.$fetch = vd.create({ baseURL: Ed() }));
'global' in globalThis || (globalThis.global = globalThis);
function Ur(e, t = {}, n) {
    for (const s in e) {
        const r = e[s],
            o = n ? `${n}:${s}` : s;
        typeof r == 'object' && r !== null ? Ur(r, t, o) : typeof r == 'function' && (t[o] = r);
    }
    return t;
}
const sc = (() => {
    if (console.createTask) return console.createTask;
    const e = { run: (t) => t() };
    return () => e;
})();
function rc(e, t, n, s) {
    for (let r = n; r < e.length; r += 1)
        try {
            const o = s ? s.run(() => e[r](...t)) : e[r](...t);
            if (o instanceof Promise) return o.then(() => rc(e, t, r + 1, s));
        } catch (o) {
            return Promise.reject(o);
        }
}
function Cd(e, t, n) {
    if (e.length > 0) return rc(e, t, 0, sc(n));
}
function Sd(e, t, n) {
    if (e.length > 0) {
        const s = sc(n);
        return Promise.all(e.map((r) => s.run(() => r(...t))));
    }
}
function yr(e, t) {
    for (const n of [...e]) n(t);
}
var Td = class {
    _hooks;
    _before;
    _after;
    _deprecatedHooks;
    _deprecatedMessages;
    constructor() {
        ((this._hooks = {}),
            (this._before = void 0),
            (this._after = void 0),
            (this._deprecatedMessages = void 0),
            (this._deprecatedHooks = {}),
            (this.hook = this.hook.bind(this)),
            (this.callHook = this.callHook.bind(this)),
            (this.callHookWith = this.callHookWith.bind(this)));
    }
    hook(t, n, s = {}) {
        if (!t || typeof n != 'function') return () => {};
        const r = t;
        let o;
        for (; this._deprecatedHooks[t]; ) ((o = this._deprecatedHooks[t]), (t = o.to));
        if (o && !s.allowDeprecated) {
            let i = o.message;
            (i || (i = `${r} hook has been deprecated` + (o.to ? `, please use ${o.to}` : '')),
                this._deprecatedMessages || (this._deprecatedMessages = new Set()),
                this._deprecatedMessages.has(i) || (console.warn(i), this._deprecatedMessages.add(i)));
        }
        if (!n.name)
            try {
                Object.defineProperty(n, 'name', {
                    get: () => '_' + t.replace(/\W+/g, '_') + '_hook_cb',
                    configurable: !0,
                });
            } catch {}
        return (
            (this._hooks[t] = this._hooks[t] || []),
            this._hooks[t].push(n),
            () => {
                n && (this.removeHook(t, n), (n = void 0));
            }
        );
    }
    hookOnce(t, n) {
        let s,
            r = (...o) => (typeof s == 'function' && s(), (s = void 0), (r = void 0), n(...o));
        return ((s = this.hook(t, r)), s);
    }
    removeHook(t, n) {
        const s = this._hooks[t];
        if (s) {
            const r = s.indexOf(n);
            (r !== -1 && s.splice(r, 1), s.length === 0 && (this._hooks[t] = void 0));
        }
    }
    clearHook(t) {
        this._hooks[t] = void 0;
    }
    deprecateHook(t, n) {
        this._deprecatedHooks[t] = typeof n == 'string' ? { to: n } : n;
        const s = this._hooks[t] || [];
        this._hooks[t] = void 0;
        for (const r of s) this.hook(t, r);
    }
    deprecateHooks(t) {
        for (const n in t) this.deprecateHook(n, t[n]);
    }
    addHooks(t) {
        const n = Ur(t),
            s = Object.keys(n).map((r) => this.hook(r, n[r]));
        return () => {
            for (const r of s) r();
            s.length = 0;
        };
    }
    removeHooks(t) {
        const n = Ur(t);
        for (const s in n) this.removeHook(s, n[s]);
    }
    removeAllHooks() {
        this._hooks = {};
    }
    callHook(t, ...n) {
        return this.callHookWith(Cd, t, n);
    }
    callHookParallel(t, ...n) {
        return this.callHookWith(Sd, t, n);
    }
    callHookWith(t, n, s) {
        const r = this._before || this._after ? { name: n, args: s, context: {} } : void 0;
        this._before && yr(this._before, r);
        const o = t(this._hooks[n] ? [...this._hooks[n]] : [], s, n);
        return o instanceof Promise
            ? o.finally(() => {
                  this._after && r && yr(this._after, r);
              })
            : (this._after && r && yr(this._after, r), o);
    }
    beforeEach(t) {
        return (
            (this._before = this._before || []),
            this._before.push(t),
            () => {
                if (this._before !== void 0) {
                    const n = this._before.indexOf(t);
                    n !== -1 && this._before.splice(n, 1);
                }
            }
        );
    }
    afterEach(t) {
        return (
            (this._after = this._after || []),
            this._after.push(t),
            () => {
                if (this._after !== void 0) {
                    const n = this._after.indexOf(t);
                    n !== -1 && this._after.splice(n, 1);
                }
            }
        );
    }
};
function Rd() {
    return new Td();
}
function Ad(e = {}) {
    let t,
        n = !1;
    const s = (i) => {
        if (t && t !== i) throw new Error('Context conflict');
    };
    let r;
    if (e.asyncContext) {
        const i = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
        i ? (r = new i()) : console.warn('[unctx] `AsyncLocalStorage` is not provided.');
    }
    const o = () => {
        if (r) {
            const i = r.getStore();
            if (i !== void 0) return i;
        }
        return t;
    };
    return {
        use: () => {
            const i = o();
            if (i === void 0) throw new Error('Context is not available');
            return i;
        },
        tryUse: () => o(),
        set: (i, a) => {
            (a || s(i), (t = i), (n = !0));
        },
        unset: () => {
            ((t = void 0), (n = !1));
        },
        call: (i, a) => {
            (s(i), (t = i));
            try {
                return r ? r.run(i, a) : a();
            } finally {
                n || (t = void 0);
            }
        },
        async callAsync(i, a) {
            t = i;
            const l = () => {
                    t = i;
                },
                f = () => (t === i ? l : void 0);
            Wr.add(f);
            try {
                const c = r ? r.run(i, a) : a();
                return (n || (t = void 0), await c);
            } finally {
                Wr.delete(f);
            }
        },
    };
}
function Pd(e = {}) {
    const t = {};
    return {
        get(n, s = {}) {
            return (t[n] || (t[n] = Ad({ ...e, ...s })), t[n]);
        },
    };
}
const Ns =
        typeof globalThis < 'u'
            ? globalThis
            : typeof self < 'u'
              ? self
              : typeof global < 'u'
                ? global
                : typeof window < 'u'
                  ? window
                  : {},
    xi = '__unctx__',
    Od = Ns[xi] || (Ns[xi] = Pd()),
    xd = (e, t = {}) => Od.get(e, t),
    ki = '__unctx_async_handlers__',
    Wr = Ns[ki] || (Ns[ki] = new Set());
function Vn(e) {
    const t = [];
    for (const r of Wr) {
        const o = r();
        o && t.push(o);
    }
    const n = () => {
        for (const r of t) r();
    };
    let s = e();
    return (
        s &&
            typeof s == 'object' &&
            'catch' in s &&
            (s = s.catch((r) => {
                throw (n(), r);
            })),
        [s, n]
    );
}
const Mi = { id: '__nuxt-loader' },
    Em = { componentName: 'NuxtLink', prefetch: !0, prefetchOn: { visibility: !0 } },
    kd = { deep: !1 },
    Md = {},
    Dd = '#lp',
    oc = 'nuxt-app',
    Di = 36e5,
    Nd = 'vite:preloadError';
function ic(e = oc) {
    return xd(e, { asyncContext: !1 });
}
const Ld = '__nuxt_plugin';
function $d(e) {
    let t = 0;
    const n = {
        _id: e.id || oc || 'nuxt-app',
        _scope: ao(),
        provide: void 0,
        versions: {
            get nuxt() {
                return '4.4.2';
            },
            get vue() {
                return n.vueApp.version;
            },
        },
        payload: It({
            ...(e.ssrContext?.payload || {}),
            data: It({}),
            state: tt({}),
            once: new Set(),
            _errors: It({}),
        }),
        static: { data: {} },
        runWithContext(r) {
            return n._scope.active && !qs() ? n._scope.run(() => Ni(n, r)) : Ni(n, r);
        },
        isHydrating: !0,
        deferHydration() {
            if (!n.isHydrating) return () => {};
            t++;
            let r = !1;
            return () => {
                if (!r && ((r = !0), t--, t === 0)) return ((n.isHydrating = !1), n.callHook('app:suspense:resolve'));
            };
        },
        _asyncDataPromises: {},
        _asyncData: It({}),
        _state: It({}),
        _payloadRevivers: {},
        ...e,
    };
    {
        const r = window.__NUXT__;
        if (r)
            for (const o in r)
                switch (o) {
                    case 'data':
                    case 'state':
                    case '_errors':
                        Object.assign(n.payload[o], r[o]);
                        break;
                    default:
                        n.payload[o] = r[o];
                }
    }
    ((n.hooks = Rd()), (n.hook = n.hooks.hook));
    {
        const r = n.hooks.callHook;
        n.hooks.callHook = (o, ...i) => Promise.resolve().then(() => r(o, ...i));
    }
    ((n.callHook = n.hooks.callHook),
        (n.provide = (r, o) => {
            const i = '$' + r;
            (ps(n, i, o), ps(n.vueApp.config.globalProperties, i, o));
        }),
        ps(n.vueApp, '$nuxt', n),
        ps(n.vueApp.config.globalProperties, '$nuxt', n));
    {
        (window.addEventListener(Nd, (o) => {
            (n.callHook('app:chunkError', { error: o.payload }),
                o.payload.message.includes('Unable to preload CSS') && o.preventDefault());
        }),
            (window.useNuxtApp ||= we));
        const r = n.hook('app:error', (...o) => {
            console.error('[nuxt] error caught during app initialization', ...o);
        });
        n.hook('app:mounted', r);
    }
    const s = n.payload.config;
    return (n.provide('config', s), n);
}
function Bd(e, t) {
    t.hooks && e.hooks.addHooks(t.hooks);
}
async function Hd(e, t) {
    if (typeof t == 'function') {
        const { provide: n } = (await e.runWithContext(() => t(e))) || {};
        if (n && typeof n == 'object') for (const s in n) e.provide(s, n[s]);
    }
}
async function jd(e, t) {
    const n = new Set(),
        s = [],
        r = [];
    let o,
        i = 0;
    async function a(l) {
        const f = l.dependsOn?.filter((c) => t.some((u) => u._name === c) && !n.has(c)) ?? [];
        if (f.length > 0) s.push([new Set(f), l]);
        else {
            const c = Hd(e, l)
                .then(async () => {
                    l._name &&
                        (n.add(l._name),
                        await Promise.all(
                            s.map(async ([u, d]) => {
                                u.has(l._name) && (u.delete(l._name), u.size === 0 && (i++, await a(d)));
                            }),
                        ));
                })
                .catch((u) => {
                    if (!l.parallel && !e.payload.error) throw u;
                    o ||= u;
                });
            l.parallel ? r.push(c) : await c;
        }
    }
    for (const l of t) Bd(e, l);
    for (const l of t) await a(l);
    if ((await Promise.all(r), i)) for (let l = 0; l < i; l++) await Promise.all(r);
    if (o) throw e.payload.error || o;
}
function Ue(e) {
    if (typeof e == 'function') return e;
    const t = e._name || e.name;
    return (delete e.name, Object.assign(e.setup || (() => {}), e, { [Ld]: !0, _name: t }));
}
const Fd = Ue;
function Ni(e, t, n) {
    const s = () => t();
    return (ic(e._id).set(e), e.vueApp.runWithContext(s));
}
function Ud(e) {
    let t;
    return (Js() && (t = Lt()?.appContext.app.$nuxt), (t ||= ic(e).tryUse()), t || null);
}
function we(e) {
    const t = Ud(e);
    if (!t) throw new Error('[nuxt] instance unavailable');
    return t;
}
function xo(e) {
    return we().$config;
}
function ps(e, t, n) {
    Object.defineProperty(e, t, { get: () => n });
}
function mr(e) {
    if (e === null || typeof e != 'object') return !1;
    const t = Object.getPrototypeOf(e);
    return (t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null) || Symbol.iterator in e
        ? !1
        : Symbol.toStringTag in e
          ? Object.prototype.toString.call(e) === '[object Module]'
          : !0;
}
function Vr(e, t, n = '.', s) {
    if (!mr(t)) return Vr(e, {}, n, s);
    const r = Object.assign({}, t);
    for (const o in e) {
        if (o === '__proto__' || o === 'constructor') continue;
        const i = e[o];
        i != null &&
            ((s && s(r, o, i, n)) ||
                (Array.isArray(i) && Array.isArray(r[o])
                    ? (r[o] = [...i, ...r[o]])
                    : mr(i) && mr(r[o])
                      ? (r[o] = Vr(i, r[o], (n ? `${n}.` : '') + o.toString(), s))
                      : (r[o] = i)));
    }
    return r;
}
function Wd(e) {
    return (...t) => t.reduce((n, s) => Vr(n, s, '', e), {});
}
const Vd = Wd();
function qd(e, t) {
    try {
        return t in e;
    } catch {
        return !1;
    }
}
class Li extends Error {
    static __h3_error__ = !0;
    statusCode = 500;
    fatal = !1;
    unhandled = !1;
    statusMessage;
    data;
    cause;
    constructor(t, n = {}) {
        (super(t, n), n.cause && !this.cause && (this.cause = n.cause));
    }
    toJSON() {
        const t = { message: this.message, statusCode: qr(this.statusCode, 500) };
        return (
            this.statusMessage && (t.statusMessage = ac(this.statusMessage)),
            this.data !== void 0 && (t.data = this.data),
            t
        );
    }
}
function Gd(e) {
    if (typeof e == 'string') return new Li(e);
    if (Kd(e)) return e;
    const t = new Li(e.message ?? e.statusMessage ?? '', { cause: e.cause || e });
    if (qd(e, 'stack'))
        try {
            Object.defineProperty(t, 'stack', {
                get() {
                    return e.stack;
                },
            });
        } catch {
            try {
                t.stack = e.stack;
            } catch {}
        }
    if (
        (e.data && (t.data = e.data),
        e.statusCode
            ? (t.statusCode = qr(e.statusCode, t.statusCode))
            : e.status && (t.statusCode = qr(e.status, t.statusCode)),
        e.statusMessage ? (t.statusMessage = e.statusMessage) : e.statusText && (t.statusMessage = e.statusText),
        t.statusMessage)
    ) {
        const n = t.statusMessage;
        ac(t.statusMessage) !== n &&
            console.warn(
                '[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.',
            );
    }
    return (e.fatal !== void 0 && (t.fatal = e.fatal), e.unhandled !== void 0 && (t.unhandled = e.unhandled), t);
}
function Kd(e) {
    return e?.constructor?.__h3_error__ === !0;
}
const Jd = /[^\u0009\u0020-\u007E]/g;
function ac(e = '') {
    return e.replace(Jd, '');
}
function qr(e, t = 200) {
    return !e || (typeof e == 'string' && (e = Number.parseInt(e, 10)), e < 100 || e > 999) ? t : e;
}
const lc = Symbol('route');
import.meta.url.replace(/\/app\/.*$/, '/');
const yt = () => we()?.$router,
    Qd = () => (Js() ? De(lc, we()._route) : we()._route);
function Im(e) {
    return e;
}
const Yd = () => {
        try {
            if (we()._processingMiddleware) return !0;
        } catch {
            return !1;
        }
        return !1;
    },
    ko = (e, t) => {
        e ||= '/';
        const n = typeof e == 'string' ? e : 'path' in e ? Xd(e) : yt().resolve(e).href;
        if (t?.open) {
            const { target: f = '_blank', windowFeatures: c = {} } = t.open,
                u = [];
            for (const [d, h] of Object.entries(c)) h !== void 0 && u.push(`${d.toLowerCase()}=${h}`);
            return (open(n, f, u.join(', ')), Promise.resolve());
        }
        const s = Pn(n, { acceptRelative: !0 }),
            r = t?.external || s;
        if (r) {
            if (!t?.external)
                throw new Error(
                    'Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.',
                );
            const { protocol: f } = new URL(n, window.location.href);
            if (f && ed(f)) throw new Error(`Cannot navigate to a URL with '${f}' protocol.`);
        }
        const o = Yd();
        if (!r && o) {
            if (t?.replace) {
                if (typeof e == 'string') {
                    const { pathname: f, search: c, hash: u } = Ao(e);
                    return { path: f, ...(c && { query: Jl(c) }), ...(u && { hash: u }), replace: !0 };
                }
                return { ...e, replace: !0 };
            }
            return e;
        }
        const i = yt(),
            a = we();
        if (r)
            return (
                a._scope.stop(),
                t?.replace ? location.replace(n) : (location.href = n),
                o ? (a.isHydrating ? new Promise(() => {}) : !1) : Promise.resolve()
            );
        const l = typeof e == 'string' ? zd(e) : e;
        return t?.replace ? i.replace(l) : i.push(l);
    };
function Xd(e) {
    return Ql(e.path || '', e.query || {}) + (e.hash || '');
}
function zd(e) {
    const t = Ao(e);
    return Uh(Wh(t.pathname)) + t.search + t.hash;
}
const cc = '__nuxt_error',
    er = () => Wa(we().payload, 'error'),
    qt = (e) => {
        const t = Dt(e);
        try {
            const n = er();
            (we().hooks.callHook('app:error', t), (n.value ||= t));
        } catch {
            throw t;
        }
        return t;
    },
    Zd = async (e = {}) => {
        const t = we(),
            n = er();
        (t.callHook('app:error:cleared', e), e.redirect && (await yt().replace(e.redirect)), (n.value = void 0));
    },
    uc = (e) => !!e && typeof e == 'object' && cc in e,
    Dt = (e) => {
        typeof e != 'string' && e.statusText && (e.message ??= e.statusText);
        const t = Gd(e);
        return (
            Object.defineProperty(t, cc, { value: !0, configurable: !1, writable: !1 }),
            Object.defineProperty(t, 'status', { get: () => t.statusCode, configurable: !0 }),
            Object.defineProperty(t, 'statusText', { get: () => t.statusMessage, configurable: !0 }),
            t
        );
    };
let fc;
const In = (e) => (fc = e),
    hc = Symbol();
function Gr(e) {
    return (
        e &&
        typeof e == 'object' &&
        Object.prototype.toString.call(e) === '[object Object]' &&
        typeof e.toJSON != 'function'
    );
}
var qn;
(function (e) {
    ((e.direct = 'direct'), (e.patchObject = 'patch object'), (e.patchFunction = 'patch function'));
})(qn || (qn = {}));
function ep() {
    const e = ao(!0),
        t = e.run(() => pt({}));
    let n = [],
        s = [];
    const r = go({
        install(o) {
            (In(r),
                (r._a = o),
                o.provide(hc, r),
                (o.config.globalProperties.$pinia = r),
                s.forEach((i) => n.push(i)),
                (s = []));
        },
        use(o) {
            return (this._a ? n.push(o) : s.push(o), this);
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map(),
        state: t,
    });
    return r;
}
const dc = () => {};
function $i(e, t, n, s = dc) {
    e.add(t);
    const r = () => {
        e.delete(t) && s();
    };
    return (!n && qs() && Ta(r), r);
}
function an(e, ...t) {
    e.forEach((n) => {
        n(...t);
    });
}
const tp = (e) => e(),
    Bi = Symbol(),
    _r = Symbol();
function Kr(e, t) {
    e instanceof Map && t instanceof Map
        ? t.forEach((n, s) => e.set(s, n))
        : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n)) continue;
        const s = t[n],
            r = e[n];
        Gr(r) && Gr(s) && e.hasOwnProperty(n) && !pe(s) && !dt(s) ? (e[n] = Kr(r, s)) : (e[n] = s);
    }
    return e;
}
const np = Symbol();
function sp(e) {
    return !Gr(e) || !Object.prototype.hasOwnProperty.call(e, np);
}
const { assign: xt } = Object;
function rp(e) {
    return !!(pe(e) && e.effect);
}
function op(e, t, n, s) {
    const { state: r, actions: o, getters: i } = t,
        a = n.state.value[e];
    let l;
    function f() {
        a || (n.state.value[e] = r ? r() : {});
        const c = Tu(n.state.value[e]);
        return xt(
            c,
            o,
            Object.keys(i || {}).reduce(
                (u, d) => (
                    (u[d] = go(
                        Ie(() => {
                            In(n);
                            const h = n._s.get(e);
                            return i[d].call(h, h);
                        }),
                    )),
                    u
                ),
                {},
            ),
        );
    }
    return ((l = pc(e, f, t, n, s, !0)), l);
}
function pc(e, t, n = {}, s, r, o) {
    let i;
    const a = xt({ actions: {} }, n),
        l = { deep: !0 };
    let f,
        c,
        u = new Set(),
        d = new Set(),
        h;
    const _ = s.state.value[e];
    !o && !_ && (s.state.value[e] = {});
    let g;
    function S(P) {
        let C;
        ((f = c = !1),
            typeof P == 'function'
                ? (P(s.state.value[e]), (C = { type: qn.patchFunction, storeId: e, events: h }))
                : (Kr(s.state.value[e], P), (C = { type: qn.patchObject, payload: P, storeId: e, events: h })));
        const x = (g = Symbol());
        (Rn().then(() => {
            g === x && (f = !0);
        }),
            (c = !0),
            an(u, C, s.state.value[e]));
    }
    const b = o
        ? function () {
              const { state: C } = n,
                  x = C ? C() : {};
              this.$patch((q) => {
                  xt(q, x);
              });
          }
        : dc;
    function w() {
        (i.stop(), u.clear(), d.clear(), s._s.delete(e));
    }
    const y = (P, C = '') => {
            if (Bi in P) return ((P[_r] = C), P);
            const x = function () {
                In(s);
                const q = Array.from(arguments),
                    A = new Set(),
                    U = new Set();
                function ee(G) {
                    A.add(G);
                }
                function re(G) {
                    U.add(G);
                }
                an(d, { args: q, name: x[_r], store: E, after: ee, onError: re });
                let F;
                try {
                    F = P.apply(this && this.$id === e ? this : E, q);
                } catch (G) {
                    throw (an(U, G), G);
                }
                return F instanceof Promise
                    ? F.then((G) => (an(A, G), G)).catch((G) => (an(U, G), Promise.reject(G)))
                    : (an(A, F), F);
            };
            return ((x[Bi] = !0), (x[_r] = C), x);
        },
        v = {
            _p: s,
            $id: e,
            $onAction: $i.bind(null, d),
            $patch: S,
            $reset: b,
            $subscribe(P, C = {}) {
                const x = $i(u, P, C.detached, () => q()),
                    q = i.run(() =>
                        Yt(
                            () => s.state.value[e],
                            (A) => {
                                (C.flush === 'sync' ? c : f) && P({ storeId: e, type: qn.direct, events: h }, A);
                            },
                            xt({}, l, C),
                        ),
                    );
                return x;
            },
            $dispose: w,
        },
        E = tt(v);
    s._s.set(e, E);
    const D = ((s._a && s._a.runWithContext) || tp)(() => s._e.run(() => (i = ao()).run(() => t({ action: y }))));
    for (const P in D) {
        const C = D[P];
        if ((pe(C) && !rp(C)) || dt(C))
            o || (_ && sp(C) && (pe(C) ? (C.value = _[P]) : Kr(C, _[P])), (s.state.value[e][P] = C));
        else if (typeof C == 'function') {
            const x = y(C, P);
            ((D[P] = x), (a.actions[P] = C));
        }
    }
    return (
        xt(E, D),
        xt(ne(E), D),
        Object.defineProperty(E, '$state', {
            get: () => s.state.value[e],
            set: (P) => {
                S((C) => {
                    xt(C, P);
                });
            },
        }),
        s._p.forEach((P) => {
            xt(
                E,
                i.run(() => P({ store: E, app: s._a, pinia: s, options: a })),
            );
        }),
        _ && o && n.hydrate && n.hydrate(E.$state, _),
        (f = !0),
        (c = !0),
        E
    );
}
function ip(e, t, n) {
    let s;
    const r = typeof t == 'function';
    s = r ? n : t;
    function o(i, a) {
        const l = Js();
        return (
            (i = i || (l ? De(hc, null) : null)),
            i && In(i),
            (i = fc),
            i._s.has(e) || (r ? pc(e, t, s, i) : op(e, s, i)),
            i._s.get(e)
        );
    }
    return ((o.$id = e), o);
}
function ap(e) {
    const t = cp(e),
        n = new ArrayBuffer(t.length),
        s = new DataView(n);
    for (let r = 0; r < n.byteLength; r++) s.setUint8(r, t.charCodeAt(r));
    return n;
}
const lp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
function cp(e) {
    e.length % 4 === 0 && (e = e.replace(/==?$/, ''));
    let t = '',
        n = 0,
        s = 0;
    for (let r = 0; r < e.length; r++)
        ((n <<= 6),
            (n |= lp.indexOf(e[r])),
            (s += 6),
            s === 24 &&
                ((t += String.fromCharCode((n & 16711680) >> 16)),
                (t += String.fromCharCode((n & 65280) >> 8)),
                (t += String.fromCharCode(n & 255)),
                (n = s = 0)));
    return (
        s === 12
            ? ((n >>= 4), (t += String.fromCharCode(n)))
            : s === 18 &&
              ((n >>= 2), (t += String.fromCharCode((n & 65280) >> 8)), (t += String.fromCharCode(n & 255))),
        t
    );
}
const up = -1,
    fp = -2,
    hp = -3,
    dp = -4,
    pp = -5,
    gp = -6,
    yp = -7;
function mp(e, t) {
    return _p(JSON.parse(e), t);
}
function _p(e, t) {
    if (typeof e == 'number') return o(e, !0);
    if (!Array.isArray(e) || e.length === 0) throw new Error('Invalid input');
    const n = e,
        s = Array(n.length);
    let r = null;
    function o(i, a = !1) {
        if (i === up) return;
        if (i === hp) return NaN;
        if (i === dp) return 1 / 0;
        if (i === pp) return -1 / 0;
        if (i === gp) return -0;
        if (a || typeof i != 'number') throw new Error('Invalid input');
        if (i in s) return s[i];
        const l = n[i];
        if (!l || typeof l != 'object') s[i] = l;
        else if (Array.isArray(l))
            if (typeof l[0] == 'string') {
                const f = l[0],
                    c = t && Object.hasOwn(t, f) ? t[f] : void 0;
                if (c) {
                    let u = l[1];
                    if ((typeof u != 'number' && (u = n.push(l[1]) - 1), (r ??= new Set()), r.has(u)))
                        throw new Error('Invalid circular reference');
                    return (r.add(u), (s[i] = c(o(u))), r.delete(u), s[i]);
                }
                switch (f) {
                    case 'Date':
                        s[i] = new Date(l[1]);
                        break;
                    case 'Set':
                        const u = new Set();
                        s[i] = u;
                        for (let g = 1; g < l.length; g += 1) u.add(o(l[g]));
                        break;
                    case 'Map':
                        const d = new Map();
                        s[i] = d;
                        for (let g = 1; g < l.length; g += 2) d.set(o(l[g]), o(l[g + 1]));
                        break;
                    case 'RegExp':
                        s[i] = new RegExp(l[1], l[2]);
                        break;
                    case 'Object':
                        const h = Object(l[1]);
                        if (Object.hasOwn(h, '__proto__'))
                            throw new Error('Cannot parse an object with a `__proto__` property');
                        s[i] = h;
                        break;
                    case 'BigInt':
                        s[i] = BigInt(l[1]);
                        break;
                    case 'null':
                        const _ = Object.create(null);
                        s[i] = _;
                        for (let g = 1; g < l.length; g += 2) {
                            if (l[g] === '__proto__')
                                throw new Error('Cannot parse an object with a `__proto__` property');
                            _[l[g]] = o(l[g + 1]);
                        }
                        break;
                    case 'Int8Array':
                    case 'Uint8Array':
                    case 'Uint8ClampedArray':
                    case 'Int16Array':
                    case 'Uint16Array':
                    case 'Int32Array':
                    case 'Uint32Array':
                    case 'Float32Array':
                    case 'Float64Array':
                    case 'BigInt64Array':
                    case 'BigUint64Array': {
                        if (n[l[1]][0] !== 'ArrayBuffer') throw new Error('Invalid data');
                        const g = globalThis[f],
                            S = o(l[1]),
                            b = new g(S);
                        s[i] = l[2] !== void 0 ? b.subarray(l[2], l[3]) : b;
                        break;
                    }
                    case 'ArrayBuffer': {
                        const g = l[1];
                        if (typeof g != 'string') throw new Error('Invalid ArrayBuffer encoding');
                        const S = ap(g);
                        s[i] = S;
                        break;
                    }
                    case 'Temporal.Duration':
                    case 'Temporal.Instant':
                    case 'Temporal.PlainDate':
                    case 'Temporal.PlainTime':
                    case 'Temporal.PlainDateTime':
                    case 'Temporal.PlainMonthDay':
                    case 'Temporal.PlainYearMonth':
                    case 'Temporal.ZonedDateTime': {
                        const g = f.slice(9);
                        s[i] = Temporal[g].from(l[1]);
                        break;
                    }
                    case 'URL': {
                        const g = new URL(l[1]);
                        s[i] = g;
                        break;
                    }
                    case 'URLSearchParams': {
                        const g = new URLSearchParams(l[1]);
                        s[i] = g;
                        break;
                    }
                    default:
                        throw new Error(`Unknown type ${f}`);
                }
            } else if (l[0] === yp) {
                const f = l[1];
                if (!Number.isInteger(f) || f < 0) throw new Error('Invalid input');
                const c = new Array(f);
                s[i] = c;
                for (let u = 2; u < l.length; u += 2) {
                    const d = l[u];
                    if (!Number.isInteger(d) || d < 0 || d >= f) throw new Error('Invalid input');
                    c[d] = o(l[u + 1]);
                }
            } else {
                const f = new Array(l.length);
                s[i] = f;
                for (let c = 0; c < l.length; c += 1) {
                    const u = l[c];
                    u !== fp && (f[c] = o(u));
                }
            }
        else {
            const f = {};
            s[i] = f;
            for (const c of Object.keys(l)) {
                if (c === '__proto__') throw new Error('Cannot parse an object with a `__proto__` property');
                const u = l[c];
                f[c] = o(u);
            }
        }
        return s[i];
    }
    return o(0);
}
const bp = new Set(['link', 'style', 'script', 'noscript']),
    vp = new Set(['title', 'titleTemplate', 'script', 'style', 'noscript']),
    Jr = new Set(['base', 'meta', 'link', 'style', 'script', 'noscript']),
    wp = new Set(['title', 'base', 'htmlAttrs', 'bodyAttrs', 'meta', 'link', 'style', 'script', 'noscript']),
    Ep = new Set(['base', 'title', 'titleTemplate', 'bodyAttrs', 'htmlAttrs', 'templateParams']),
    Ip = new Set([
        'key',
        'tagPosition',
        'tagPriority',
        'tagDuplicateStrategy',
        'innerHTML',
        'textContent',
        'processTemplateParams',
    ]),
    Cp = new Set(['templateParams', 'htmlAttrs', 'bodyAttrs']),
    Sp = new Set(['theme-color', 'google-site-verification', 'og', 'article', 'book', 'profile', 'twitter', 'author']);
function Qr(e, t = {}, n) {
    for (const s in e) {
        const r = e[s],
            o = n ? `${n}:${s}` : s;
        typeof r == 'object' && r !== null ? Qr(r, t, o) : typeof r == 'function' && (t[o] = r);
    }
    return t;
}
const gc = (() => {
    if (console.createTask) return console.createTask;
    const e = { run: (t) => t() };
    return () => e;
})();
function yc(e, t, n, s) {
    for (let r = n; r < e.length; r += 1)
        try {
            const o = s ? s.run(() => e[r](...t)) : e[r](...t);
            if (o instanceof Promise) return o.then(() => yc(e, t, r + 1, s));
        } catch (o) {
            return Promise.reject(o);
        }
}
function Tp(e, t, n) {
    if (e.length > 0) return yc(e, t, 0, gc(n));
}
function Rp(e, t, n) {
    if (e.length > 0) {
        const s = gc(n);
        return Promise.all(e.map((r) => s.run(() => r(...t))));
    }
}
function br(e, t) {
    for (const n of [...e]) n(t);
}
var Ap = class {
    _hooks;
    _before;
    _after;
    _deprecatedHooks;
    _deprecatedMessages;
    constructor() {
        ((this._hooks = {}),
            (this._before = void 0),
            (this._after = void 0),
            (this._deprecatedMessages = void 0),
            (this._deprecatedHooks = {}),
            (this.hook = this.hook.bind(this)),
            (this.callHook = this.callHook.bind(this)),
            (this.callHookWith = this.callHookWith.bind(this)));
    }
    hook(e, t, n = {}) {
        if (!e || typeof t != 'function') return () => {};
        const s = e;
        let r;
        for (; this._deprecatedHooks[e]; ) ((r = this._deprecatedHooks[e]), (e = r.to));
        if (r && !n.allowDeprecated) {
            let o = r.message;
            (o || (o = `${s} hook has been deprecated` + (r.to ? `, please use ${r.to}` : '')),
                this._deprecatedMessages || (this._deprecatedMessages = new Set()),
                this._deprecatedMessages.has(o) || (console.warn(o), this._deprecatedMessages.add(o)));
        }
        if (!t.name)
            try {
                Object.defineProperty(t, 'name', {
                    get: () => '_' + e.replace(/\W+/g, '_') + '_hook_cb',
                    configurable: !0,
                });
            } catch {}
        return (
            (this._hooks[e] = this._hooks[e] || []),
            this._hooks[e].push(t),
            () => {
                t && (this.removeHook(e, t), (t = void 0));
            }
        );
    }
    hookOnce(e, t) {
        let n,
            s = (...r) => (typeof n == 'function' && n(), (n = void 0), (s = void 0), t(...r));
        return ((n = this.hook(e, s)), n);
    }
    removeHook(e, t) {
        const n = this._hooks[e];
        if (n) {
            const s = n.indexOf(t);
            (s !== -1 && n.splice(s, 1), n.length === 0 && (this._hooks[e] = void 0));
        }
    }
    clearHook(e) {
        this._hooks[e] = void 0;
    }
    deprecateHook(e, t) {
        this._deprecatedHooks[e] = typeof t == 'string' ? { to: t } : t;
        const n = this._hooks[e] || [];
        this._hooks[e] = void 0;
        for (const s of n) this.hook(e, s);
    }
    deprecateHooks(e) {
        for (const t in e) this.deprecateHook(t, e[t]);
    }
    addHooks(e) {
        const t = Qr(e),
            n = Object.keys(t).map((s) => this.hook(s, t[s]));
        return () => {
            for (const s of n) s();
            n.length = 0;
        };
    }
    removeHooks(e) {
        const t = Qr(e);
        for (const n in t) this.removeHook(n, t[n]);
    }
    removeAllHooks() {
        this._hooks = {};
    }
    callHook(e, ...t) {
        return this.callHookWith(Tp, e, t);
    }
    callHookParallel(e, ...t) {
        return this.callHookWith(Rp, e, t);
    }
    callHookWith(e, t, n) {
        const s = this._before || this._after ? { name: t, args: n, context: {} } : void 0;
        this._before && br(this._before, s);
        const r = e(this._hooks[t] ? [...this._hooks[t]] : [], n, t);
        return r instanceof Promise
            ? r.finally(() => {
                  this._after && s && br(this._after, s);
              })
            : (this._after && s && br(this._after, s), r);
    }
    beforeEach(e) {
        return (
            (this._before = this._before || []),
            this._before.push(e),
            () => {
                if (this._before !== void 0) {
                    const t = this._before.indexOf(e);
                    t !== -1 && this._before.splice(t, 1);
                }
            }
        );
    }
    afterEach(e) {
        return (
            (this._after = this._after || []),
            this._after.push(e),
            () => {
                if (this._after !== void 0) {
                    const t = this._after.indexOf(e);
                    t !== -1 && this._after.splice(t, 1);
                }
            }
        );
    }
};
function Pp() {
    return new Ap();
}
const Op = ['name', 'property', 'http-equiv'],
    xp = new Set(['viewport', 'description', 'keywords', 'robots']);
function mc(e) {
    const t = e.split(':');
    return t.length ? Sp.has(t[1]) : !1;
}
function Yr(e) {
    const { props: t, tag: n } = e;
    if (Ep.has(n)) return n;
    if (n === 'link' && t.rel === 'canonical') return 'canonical';
    if (n === 'link' && t.rel === 'alternate') {
        const s = t.hreflang || t.type;
        if (s) return `alternate:${s}`;
    }
    if (t.charset) return 'charset';
    if (e.tag === 'meta') {
        for (const s of Op)
            if (t[s] !== void 0) {
                const r = t[s],
                    o = r && typeof r == 'string' && r.includes(':'),
                    i = r && xp.has(r),
                    l = !(o || i) && e.key ? `:key:${e.key}` : '';
                return `${n}:${r}${l}`;
            }
    }
    if (e.key) return `${n}:key:${e.key}`;
    if (t.id) return `${n}:id:${t.id}`;
    if (n === 'link' && t.rel === 'alternate') return `alternate:${t.href || ''}`;
    if (vp.has(n)) {
        const s = e.textContent || e.innerHTML;
        if (s) return `${n}:content:${s}`;
    }
}
function _c(e) {
    const t = e._h || e._d;
    if (t) return t;
    const n = e.textContent || e.innerHTML;
    return (
        n ||
        `${e.tag}:${Object.entries(e.props)
            .map(([s, r]) => `${s}:${String(r)}`)
            .join(',')}`
    );
}
function Ls(e, t, n) {
    typeof e === 'function' && (!n || (n !== 'titleTemplate' && !(n[0] === 'o' && n[1] === 'n'))) && (e = e());
    const r = t ? t(n, e) : e;
    if (Array.isArray(r)) return r.map((o) => Ls(o, t));
    if (r?.constructor === Object) {
        const o = {};
        for (const i of Object.keys(r)) o[i] = Ls(r[i], t, i);
        return o;
    }
    return r;
}
function kp(e, t) {
    const n = e === 'style' ? new Map() : new Set();
    function s(r) {
        if (r == null || r === void 0) return;
        const o = String(r).trim();
        if (o)
            if (e === 'style') {
                const [i, ...a] = o.split(':').map((l) => (l ? l.trim() : ''));
                i && a.length && n.set(i, a.join(':'));
            } else
                o.split(' ')
                    .filter(Boolean)
                    .forEach((i) => n.add(i));
    }
    return (
        typeof t == 'string'
            ? e === 'style'
                ? t.split(';').forEach(s)
                : s(t)
            : Array.isArray(t)
              ? t.forEach((r) => s(r))
              : t &&
                typeof t == 'object' &&
                Object.entries(t).forEach(([r, o]) => {
                    o && o !== 'false' && (e === 'style' ? n.set(String(r).trim(), String(o)) : s(r));
                }),
        n
    );
}
function bc(e, t) {
    if (((e.props = e.props || {}), !t)) return e;
    if (e.tag === 'templateParams') return ((e.props = t), e);
    const n = Jr.has(e.tag) || e.tag === 'htmlAttrs' || e.tag === 'bodyAttrs';
    return (
        Object.entries(t).forEach(([s, r]) => {
            if (s === '__proto__' || s === 'constructor' || s === 'prototype') return;
            if (r === null) {
                e.props[s] = null;
                return;
            }
            if (s === 'class' || s === 'style') {
                e.props[s] = kp(s, r);
                return;
            }
            if (Ip.has(s)) {
                if ((s === 'textContent' || s === 'innerHTML') && typeof r == 'object') {
                    let f = t.type;
                    if ((t.type || (f = 'application/json'), !f?.endsWith('json') && f !== 'speculationrules')) return;
                    ((t.type = f), (e.props.type = f), (e[s] = JSON.stringify(r)));
                } else e[s] = r;
                return;
            }
            const o = s.startsWith('data-'),
                i = n && !o ? s.toLowerCase() : s,
                a = String(r),
                l = e.tag === 'meta' && i === 'content';
            a === 'true' || a === ''
                ? (e.props[i] = o || l ? a : !0)
                : !r && o && a === 'false'
                  ? (e.props[i] = 'false')
                  : r !== void 0 && (e.props[i] = r);
        }),
        e
    );
}
function Mp(e, t) {
    const n =
            typeof t == 'object' && typeof t != 'function'
                ? t
                : { [e === 'script' || e === 'noscript' || e === 'style' ? 'innerHTML' : 'textContent']: t },
        s = bc({ tag: e, props: {} }, n);
    return (
        s.key && bp.has(s.tag) && (s.props['data-hid'] = s._h = s.key),
        s.tag === 'script' &&
            typeof s.innerHTML == 'object' &&
            ((s.innerHTML = JSON.stringify(s.innerHTML)), (s.props.type = s.props.type || 'application/json')),
        Array.isArray(s.props.content) ? s.props.content.map((r) => ({ ...s, props: { ...s.props, content: r } })) : s
    );
}
function Dp(e, t) {
    if (!e) return [];
    typeof e == 'function' && (e = e());
    const n = (r, o) => {
        for (let i = 0; i < t.length; i++) o = t[i](r, o);
        return o;
    };
    e = n(void 0, e);
    const s = [];
    return (
        (e = Ls(e, n)),
        Object.entries(e || {}).forEach(([r, o]) => {
            if (o !== void 0) for (const i of Array.isArray(o) ? o : [o]) s.push(Mp(r, i));
        }),
        s.flat()
    );
}
const Hi = (e, t) => (e._w === t._w ? e._p - t._p : e._w - t._w),
    ji = { base: -10, title: 10 },
    Np = { critical: -8, high: -1, low: 2 },
    Fi = {
        meta: { 'content-security-policy': -30, charset: -20, viewport: -15 },
        link: {
            preconnect: 20,
            stylesheet: 60,
            preload: 70,
            modulepreload: 70,
            prefetch: 90,
            'dns-prefetch': 90,
            prerender: 90,
        },
        script: { async: 30, defer: 80, sync: 50 },
        style: { imported: 40, sync: 60 },
    },
    Lp = /@import/,
    Dn = (e) => e === '' || e === !0;
function $p(e, t) {
    if (typeof t.tagPriority == 'number') return t.tagPriority;
    let n = 100;
    const s = Np[t.tagPriority] || 0,
        r = e.resolvedOptions.disableCapoSorting ? { link: {}, script: {}, style: {} } : Fi;
    if (t.tag in ji) n = ji[t.tag];
    else if (t.tag === 'meta') {
        const o =
            t.props['http-equiv'] === 'content-security-policy'
                ? 'content-security-policy'
                : t.props.charset
                  ? 'charset'
                  : t.props.name === 'viewport'
                    ? 'viewport'
                    : null;
        o && (n = Fi.meta[o]);
    } else if (t.tag === 'link' && t.props.rel) n = r.link[t.props.rel];
    else if (t.tag === 'script') {
        const o = String(t.props.type);
        Dn(t.props.async)
            ? (n = r.script.async)
            : (t.props.src && !Dn(t.props.defer) && !Dn(t.props.async) && o !== 'module' && !o.endsWith('json')) ||
                (t.innerHTML && !o.endsWith('json'))
              ? (n = r.script.sync)
              : ((Dn(t.props.defer) && t.props.src && !Dn(t.props.async)) || o === 'module') && (n = r.script.defer);
    } else t.tag === 'style' && (n = t.innerHTML && Lp.test(t.innerHTML) ? r.style.imported : r.style.sync);
    return (n || 100) + s;
}
function Ui(e, t) {
    const n = typeof t == 'function' ? t(e) : t,
        s = n.key || String(e.plugins.size + 1);
    e.plugins.get(s) || (e.plugins.set(s, n), e.hooks.addHooks(n.hooks || {}));
}
function Bp(e = {}) {
    const t = Pp();
    t.addHooks(e.hooks || {});
    const n = !e.document,
        s = new Map(),
        r = new Map(),
        o = new Set(),
        i = {
            _entryCount: 1,
            plugins: r,
            dirty: !1,
            resolvedOptions: e,
            hooks: t,
            ssr: n,
            entries: s,
            headEntries() {
                return [...s.values()];
            },
            use: (a) => Ui(i, a),
            push(a, l) {
                const f = { ...(l || {}) };
                delete f.head;
                const c = f._index ?? i._entryCount++,
                    u = { _i: c, input: a, options: f },
                    d = {
                        _poll(h = !1) {
                            ((i.dirty = !0), !h && o.add(c), t.callHook('entries:updated', i));
                        },
                        dispose() {
                            s.delete(c) && i.invalidate();
                        },
                        patch(h) {
                            (!f.mode || (f.mode === 'server' && n) || (f.mode === 'client' && !n)) &&
                                ((u.input = h), s.set(c, u), d._poll());
                        },
                    };
                return (d.patch(a), d);
            },
            async resolveTags() {
                const a = { tagMap: new Map(), tags: [], entries: [...i.entries.values()] };
                for (await t.callHook('entries:resolve', a); o.size; ) {
                    const d = o.values().next().value;
                    o.delete(d);
                    const h = s.get(d);
                    if (h) {
                        const _ = {
                            tags: Dp(h.input, e.propResolvers || []).map((g) => Object.assign(g, h.options)),
                            entry: h,
                        };
                        (await t.callHook('entries:normalize', _),
                            (h._tags = _.tags.map(
                                (g, S) => (
                                    (g._w = $p(i, g)),
                                    (g._p = (h._i << 10) + S),
                                    (g._d = Yr(g)),
                                    g._d || (g._h = _c(g)),
                                    g
                                ),
                            )));
                    }
                }
                let l = !1;
                a.entries
                    .flatMap((d) => (d._tags || []).map((h) => ({ ...h, props: { ...h.props } })))
                    .sort(Hi)
                    .reduce((d, h) => {
                        const _ = h._d || h._h;
                        if (!d.has(_)) return d.set(_, h);
                        const g = d.get(_);
                        if (
                            (h?.tagDuplicateStrategy ||
                                (Cp.has(h.tag) ? 'merge' : null) ||
                                (h.key && h.key === g.key ? 'merge' : null)) === 'merge'
                        ) {
                            const b = { ...g.props };
                            (Object.entries(h.props).forEach(
                                ([w, y]) =>
                                    (b[w] =
                                        w === 'style'
                                            ? new Map([...(g.props.style || new Map()), ...y])
                                            : w === 'class'
                                              ? new Set([...(g.props.class || new Set()), ...y])
                                              : y),
                            ),
                                d.set(_, { ...h, props: b }));
                        } else
                            h._p >> 10 === g._p >> 10 && h.tag === 'meta' && mc(_)
                                ? (d.set(_, Object.assign([...(Array.isArray(g) ? g : [g]), h], h)), (l = !0))
                                : (h._w === g._w ? h._p > g._p : h?._w < g?._w) && d.set(_, h);
                        return d;
                    }, a.tagMap);
                const f = a.tagMap.get('title'),
                    c = a.tagMap.get('titleTemplate');
                if (((i._title = f?.textContent), c)) {
                    const d = c?.textContent;
                    if (((i._titleTemplate = d), d)) {
                        let h = typeof d == 'function' ? d(f?.textContent) : d;
                        (typeof h == 'string' &&
                            !i.plugins.has('template-params') &&
                            (h = h.replace('%s', f?.textContent || '')),
                            f
                                ? h === null
                                    ? a.tagMap.delete('title')
                                    : a.tagMap.set('title', { ...f, textContent: h })
                                : ((c.tag = 'title'), (c.textContent = h)));
                    }
                }
                ((a.tags = Array.from(a.tagMap.values())),
                    l && (a.tags = a.tags.flat().sort(Hi)),
                    await t.callHook('tags:beforeResolve', a),
                    await t.callHook('tags:resolve', a),
                    await t.callHook('tags:afterResolve', a));
                const u = [];
                for (const d of a.tags) {
                    const { innerHTML: h, tag: _, props: g } = d;
                    if (
                        wp.has(_) &&
                        !(Object.keys(g).length === 0 && !d.innerHTML && !d.textContent) &&
                        !(_ === 'meta' && !g.content && !g['http-equiv'] && !g.charset)
                    ) {
                        if (_ === 'script' && h) {
                            if (String(g.type).endsWith('json')) {
                                const S = typeof h == 'string' ? h : JSON.stringify(h);
                                d.innerHTML = S.replace(/</g, '\\u003C');
                            } else
                                typeof h == 'string' &&
                                    (d.innerHTML = h.replace(new RegExp(`</${_}`, 'g'), `<\\/${_}`));
                            d._d = Yr(d);
                        }
                        u.push(d);
                    }
                }
                return u;
            },
            invalidate() {
                for (const a of s.values()) o.add(a._i);
                ((i.dirty = !0), t.callHook('entries:updated', i));
            },
        };
    return (
        (e?.plugins || []).forEach((a) => Ui(i, a)),
        i.hooks.callHook('init', i),
        e.init?.forEach((a) => a && i.push(a)),
        i
    );
}
const Hp = (e, t) => (pe(t) ? lt(t) : t),
    vc = 'usehead';
function jp(e) {
    return {
        install(n) {
            ((n.config.globalProperties.$unhead = e), (n.config.globalProperties.$head = e), n.provide(vc, e));
        },
    }.install;
}
function Fp() {
    if (Js()) {
        const e = De(vc);
        if (e) return e;
    }
    throw new Error('useHead() was called without provide context, ensure you call it through the setup() function.');
}
function Cm(e, t = {}) {
    const n = t.head || Fp();
    return n.ssr ? n.push(e || {}, t) : Up(n, e, t);
}
function Up(e, t, n = {}) {
    const s = pt(!1);
    let r;
    return (
        $u(() => {
            const i = s.value ? {} : Ls(t, Hp);
            r ? r.patch(i) : (r = e.push(i, n));
        }),
        Lt() &&
            (vo(() => {
                r.dispose();
            }),
            rl(() => {
                s.value = !0;
            }),
            sl(() => {
                s.value = !1;
            })),
        r
    );
}
const Wp = (() => {
        const e = { ssr: !0 },
            t = { ssr: !1 };
        return (n, s) => {
            let r = [];
            s.charCodeAt(s.length - 1) === 47 && (s = s.slice(0, -1) || '/');
            let o = s.split('/');
            return (
                o.length > 1 && o[1] === 'r' && r.unshift({ data: e, params: { _: o.slice(2).join('/') } }),
                r.unshift({ data: t, params: { _: o.slice(1).join('/') } }),
                r
            );
        };
    })(),
    Vp = (e) =>
        Vd(
            {},
            ...Wp('', e)
                .map((t) => t.data)
                .reverse(),
        ),
    qp = Vp;
let vs;
function Gp() {
    return (
        (vs = $fetch(Oo(`builds/meta/${xo().app.buildId}.json`), { responseType: 'json' })),
        vs.catch((e) => {
            console.error('[nuxt] Error fetching app manifest.', e);
        }),
        vs
    );
}
function wc() {
    return vs || Gp();
}
function Ec(e) {
    const t = typeof e == 'string' ? e : e.path;
    try {
        return qp(t);
    } catch (n) {
        return (console.error('[nuxt] Error matching route rules.', n), {});
    }
}
async function Wi(e, t = {}) {
    return null;
}
async function Kp(e) {
    return null;
}
let Ut = null;
async function Jp() {
    if (Ut) return Ut;
    const e = document.getElementById('__NUXT_DATA__');
    if (!e) return {};
    const t = await Qp(e.textContent || ''),
        n = e.dataset.src ? await Kp(e.dataset.src) : void 0;
    return (
        (Ut = { ...t, ...n, ...window.__NUXT__ }),
        Ut.config?.public && (Ut.config.public = tt(Ut.config.public)),
        Ut
    );
}
async function Qp(e) {
    return await mp(e, we()._payloadRevivers);
}
function Ic(e, t) {
    we()._payloadRevivers[e] = t;
}
const Yp = Fd(() => {
    Ic('skipHydrate', (e) => {});
});
function Vi(e) {
    try {
        return JSON.parse(e);
    } catch {
        return e;
    }
}
const Xp = [
        ['NuxtError', (e) => Dt(e)],
        ['EmptyShallowRef', (e) => en(e === '_' ? void 0 : e === '0n' ? BigInt(0) : Vi(e))],
        ['EmptyRef', (e) => pt(e === '_' ? void 0 : e === '0n' ? BigInt(0) : Vi(e))],
        ['ShallowRef', (e) => en(e)],
        ['ShallowReactive', (e) => It(e)],
        ['Ref', (e) => pt(e)],
        ['Reactive', (e) => tt(e)],
    ],
    zp = Ue({
        name: 'nuxt:revive-payload:client',
        order: -30,
        async setup(e) {
            let t, n;
            for (const [s, r] of Xp) Ic(s, r);
            (Object.assign(e.payload, (([t, n] = Vn(() => e.runWithContext(Jp))), (t = await t), n(), t)),
                delete window.__NUXT__);
        },
    });
async function Mo(e, t = {}) {
    const n = t.document || e.resolvedOptions.document;
    if (!n || !e.dirty) return;
    const s = { shouldRender: !0, tags: [] };
    if ((await e.hooks.callHook('dom:beforeRender', s), !!s.shouldRender))
        return (
            e._domUpdatePromise ||
                (e._domUpdatePromise = new Promise(async (r) => {
                    const o = new Map(),
                        i = new Promise((h) => {
                            e.resolveTags().then((_) => {
                                h(
                                    _.map((g) => {
                                        const S = o.get(g._d) || 0,
                                            b = { tag: g, id: (S ? `${g._d}:${S}` : g._d) || g._h, shouldRender: !0 };
                                        return (g._d && mc(g._d) && o.set(g._d, S + 1), b);
                                    }),
                                );
                            });
                        });
                    let a = e._dom;
                    if (!a) {
                        a = {
                            title: n.title,
                            elMap: new Map().set('htmlAttrs', n.documentElement).set('bodyAttrs', n.body),
                        };
                        for (const h of ['body', 'head']) {
                            const _ = n[h]?.children;
                            for (const g of _) {
                                const S = g.tagName.toLowerCase();
                                if (!Jr.has(S)) continue;
                                const b = bc(
                                    { tag: S, props: {} },
                                    {
                                        innerHTML: g.innerHTML,
                                        ...(g
                                            .getAttributeNames()
                                            .reduce((w, y) => ((w[y] = g.getAttribute(y)), w), {}) || {}),
                                    },
                                );
                                if (
                                    ((b.key = g.getAttribute('data-hid') || void 0),
                                    (b._d = Yr(b) || _c(b)),
                                    a.elMap.has(b._d))
                                ) {
                                    let w = 1,
                                        y = b._d;
                                    for (; a.elMap.has(y); ) y = `${b._d}:${w++}`;
                                    a.elMap.set(y, g);
                                } else a.elMap.set(b._d, g);
                            }
                        }
                    }
                    ((a.pendingSideEffects = { ...a.sideEffects }), (a.sideEffects = {}));
                    function l(h, _, g) {
                        const S = `${h}:${_}`;
                        ((a.sideEffects[S] = g), delete a.pendingSideEffects[S]);
                    }
                    function f({ id: h, $el: _, tag: g }) {
                        const S = g.tag.endsWith('Attrs');
                        (a.elMap.set(h, _),
                            S ||
                                (g.textContent && g.textContent !== _.textContent && (_.textContent = g.textContent),
                                g.innerHTML && g.innerHTML !== _.innerHTML && (_.innerHTML = g.innerHTML),
                                l(h, 'el', () => {
                                    (_?.remove(), a.elMap.delete(h));
                                })));
                        for (const b in g.props) {
                            if (!Object.prototype.hasOwnProperty.call(g.props, b)) continue;
                            const w = g.props[b];
                            if (b.startsWith('on') && typeof w == 'function') {
                                const v = _?.dataset;
                                if (v && v[`${b}fired`]) {
                                    const E = b.slice(0, -5);
                                    w.call(_, new Event(E.substring(2)));
                                }
                                _.getAttribute(`data-${b}`) !== '' &&
                                    ((g.tag === 'bodyAttrs' ? n.defaultView : _).addEventListener(
                                        b.substring(2),
                                        w.bind(_),
                                    ),
                                    _.setAttribute(`data-${b}`, ''));
                                continue;
                            }
                            const y = `attr:${b}`;
                            if (b === 'class') {
                                if (!w) continue;
                                for (const v of w)
                                    (S && l(h, `${y}:${v}`, () => _.classList.remove(v)),
                                        !_.classList.contains(v) && _.classList.add(v));
                            } else if (b === 'style') {
                                if (!w) continue;
                                for (const [v, E] of w)
                                    (l(h, `${y}:${v}`, () => {
                                        _.style.removeProperty(v);
                                    }),
                                        _.style.setProperty(v, E));
                            } else
                                w !== !1 &&
                                    w !== null &&
                                    (_.getAttribute(b) !== w && _.setAttribute(b, w === !0 ? '' : String(w)),
                                    S && l(h, y, () => _.removeAttribute(b)));
                        }
                    }
                    const c = [],
                        u = { bodyClose: void 0, bodyOpen: void 0, head: void 0 },
                        d = await i;
                    for (const h of d) {
                        const { tag: _, shouldRender: g, id: S } = h;
                        if (g) {
                            if (_.tag === 'title') {
                                ((n.title = _.textContent), l('title', '', () => (n.title = a.title)));
                                continue;
                            }
                            ((h.$el = h.$el || a.elMap.get(S)), h.$el ? f(h) : Jr.has(_.tag) && c.push(h));
                        }
                    }
                    for (const h of c) {
                        const _ = h.tag.tagPosition || 'head';
                        ((h.$el = n.createElement(h.tag.tag)),
                            f(h),
                            (u[_] = u[_] || n.createDocumentFragment()),
                            u[_].appendChild(h.$el));
                    }
                    for (const h of d) await e.hooks.callHook('dom:renderTag', h, n, l);
                    (u.head && n.head.appendChild(u.head),
                        u.bodyOpen && n.body.insertBefore(u.bodyOpen, n.body.firstChild),
                        u.bodyClose && n.body.appendChild(u.bodyClose));
                    for (const h in a.pendingSideEffects) a.pendingSideEffects[h]();
                    ((e._dom = a), await e.hooks.callHook('dom:rendered', { renders: d }), r());
                }).finally(() => {
                    ((e._domUpdatePromise = void 0), (e.dirty = !1));
                })),
            e._domUpdatePromise
        );
}
function Zp(e = {}) {
    const t = e.domOptions?.render || Mo;
    e.document = e.document || (typeof window < 'u' ? document : void 0);
    const n = e.document?.head.querySelector('script[id="unhead:payload"]')?.innerHTML || !1;
    return Bp({
        ...e,
        plugins: [...(e.plugins || []), { key: 'client', hooks: { 'entries:updated': t } }],
        init: [n ? JSON.parse(n) : !1, ...(e.init || [])],
    });
}
function eg(e, t) {
    let n = 0;
    return () => {
        const s = ++n;
        t(() => {
            n === s && e();
        });
    };
}
function tg(e = {}) {
    const t = Zp({
        domOptions: {
            render: eg(
                () => Mo(t),
                (n) => setTimeout(n, 0),
            ),
        },
        ...e,
    });
    return ((t.install = jp(t)), t);
}
const ng = { disableDefaults: !0 },
    sg = Ue({
        name: 'nuxt:head',
        enforce: 'pre',
        setup(e) {
            const t = tg(ng);
            e.vueApp.use(t);
            {
                let n = !0;
                const s = async () => {
                    ((n = !1), await Mo(t));
                };
                (t.hooks.hook('dom:beforeRender', (r) => {
                    r.shouldRender = !n;
                }),
                    e.hooks.hook('page:start', () => {
                        n = !0;
                    }),
                    e.hooks.hook('page:finish', () => {
                        e.isHydrating || s();
                    }),
                    e.hooks.hook('app:error', s),
                    e.hooks.hook('app:suspense:resolve', s));
            }
        },
    });
const cn = typeof document < 'u';
function Cc(e) {
    return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e;
}
function rg(e) {
    return e.__esModule || e[Symbol.toStringTag] === 'Module' || (e.default && Cc(e.default));
}
const oe = Object.assign;
function vr(e, t) {
    const n = {};
    for (const s in t) {
        const r = t[s];
        n[s] = et(r) ? r.map(e) : e(r);
    }
    return n;
}
const Gn = () => {},
    et = Array.isArray;
function qi(e, t) {
    const n = {};
    for (const s in e) n[s] = s in t ? t[s] : e[s];
    return n;
}
let ye = (function (e) {
    return (
        (e[(e.MATCHER_NOT_FOUND = 1)] = 'MATCHER_NOT_FOUND'),
        (e[(e.NAVIGATION_GUARD_REDIRECT = 2)] = 'NAVIGATION_GUARD_REDIRECT'),
        (e[(e.NAVIGATION_ABORTED = 4)] = 'NAVIGATION_ABORTED'),
        (e[(e.NAVIGATION_CANCELLED = 8)] = 'NAVIGATION_CANCELLED'),
        (e[(e.NAVIGATION_DUPLICATED = 16)] = 'NAVIGATION_DUPLICATED'),
        e
    );
})({});
const Sc = Symbol('');
(ye.MATCHER_NOT_FOUND + '',
    ye.NAVIGATION_GUARD_REDIRECT + '',
    ye.NAVIGATION_ABORTED + '',
    ye.NAVIGATION_CANCELLED + '',
    ye.NAVIGATION_DUPLICATED + '');
function Cn(e, t) {
    return oe(new Error(), { type: e, [Sc]: !0 }, t);
}
function bt(e, t) {
    return e instanceof Error && Sc in e && (t == null || !!(e.type & t));
}
const og = ['params', 'query', 'hash'];
function ig(e) {
    if (typeof e == 'string') return e;
    if (e.path != null) return e.path;
    const t = {};
    for (const n of og) n in e && (t[n] = e[n]);
    return JSON.stringify(t, null, 2);
}
const ag = Symbol(''),
    Gi = Symbol(''),
    tr = Symbol(''),
    Do = Symbol(''),
    Xr = Symbol('');
function Sm() {
    return De(tr);
}
function Tm(e) {
    return De(Do);
}
const Tc = /#/g,
    lg = /&/g,
    cg = /\//g,
    ug = /=/g,
    fg = /\?/g,
    Rc = /\+/g,
    hg = /%5B/g,
    dg = /%5D/g,
    Ac = /%5E/g,
    pg = /%60/g,
    Pc = /%7B/g,
    gg = /%7C/g,
    Oc = /%7D/g,
    yg = /%20/g;
function No(e) {
    return e == null
        ? ''
        : encodeURI('' + e)
              .replace(gg, '|')
              .replace(hg, '[')
              .replace(dg, ']');
}
function mg(e) {
    return No(e).replace(Pc, '{').replace(Oc, '}').replace(Ac, '^');
}
function zr(e) {
    return No(e)
        .replace(Rc, '%2B')
        .replace(yg, '+')
        .replace(Tc, '%23')
        .replace(lg, '%26')
        .replace(pg, '`')
        .replace(Pc, '{')
        .replace(Oc, '}')
        .replace(Ac, '^');
}
function _g(e) {
    return zr(e).replace(ug, '%3D');
}
function bg(e) {
    return No(e).replace(Tc, '%23').replace(fg, '%3F');
}
function vg(e) {
    return bg(e).replace(cg, '%2F');
}
function ts(e) {
    if (e == null) return null;
    try {
        return decodeURIComponent('' + e);
    } catch {}
    return '' + e;
}
const wg = /\/$/,
    Eg = (e) => e.replace(wg, '');
function wr(e, t, n = '/') {
    let s,
        r = {},
        o = '',
        i = '';
    const a = t.indexOf('#');
    let l = t.indexOf('?');
    return (
        (l = a >= 0 && l > a ? -1 : l),
        l >= 0 && ((s = t.slice(0, l)), (o = t.slice(l, a > 0 ? a : t.length)), (r = e(o.slice(1)))),
        a >= 0 && ((s = s || t.slice(0, a)), (i = t.slice(a, t.length))),
        (s = Tg(s ?? t, n)),
        { fullPath: s + o + i, path: s, query: r, hash: ts(i) }
    );
}
function Ig(e, t) {
    const n = t.query ? e(t.query) : '';
    return t.path + (n && '?') + n + (t.hash || '');
}
function Ki(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/';
}
function Cg(e, t, n) {
    const s = t.matched.length - 1,
        r = n.matched.length - 1;
    return (
        s > -1 &&
        s === r &&
        Sn(t.matched[s], n.matched[r]) &&
        xc(t.params, n.params) &&
        e(t.query) === e(n.query) &&
        t.hash === n.hash
    );
}
function Sn(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t);
}
function xc(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (var n in e) if (!Sg(e[n], t[n])) return !1;
    return !0;
}
function Sg(e, t) {
    return et(e) ? Ji(e, t) : et(t) ? Ji(t, e) : (e && e.valueOf()) === (t && t.valueOf());
}
function Ji(e, t) {
    return et(t) ? e.length === t.length && e.every((n, s) => n === t[s]) : e.length === 1 && e[0] === t;
}
function Tg(e, t) {
    if (e.startsWith('/')) return e;
    if (!e) return t;
    const n = t.split('/'),
        s = e.split('/'),
        r = s[s.length - 1];
    (r === '..' || r === '.') && s.push('');
    let o = n.length - 1,
        i,
        a;
    for (i = 0; i < s.length; i++)
        if (((a = s[i]), a !== '.'))
            if (a === '..') o > 1 && o--;
            else break;
    return n.slice(0, o).join('/') + '/' + s.slice(i).join('/');
}
const Ge = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0,
};
let Zr = (function (e) {
        return ((e.pop = 'pop'), (e.push = 'push'), e);
    })({}),
    Er = (function (e) {
        return ((e.back = 'back'), (e.forward = 'forward'), (e.unknown = ''), e);
    })({});
function Rg(e) {
    if (!e)
        if (cn) {
            const t = document.querySelector('base');
            ((e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, '')));
        } else e = '/';
    return (e[0] !== '/' && e[0] !== '#' && (e = '/' + e), Eg(e));
}
const Ag = /^[^#]+#/;
function Pg(e, t) {
    return e.replace(Ag, '#') + t;
}
function Og(e, t) {
    const n = document.documentElement.getBoundingClientRect(),
        s = e.getBoundingClientRect();
    return { behavior: t.behavior, left: s.left - n.left - (t.left || 0), top: s.top - n.top - (t.top || 0) };
}
const nr = () => ({ left: window.scrollX, top: window.scrollY });
function xg(e) {
    let t;
    if ('el' in e) {
        const n = e.el,
            s = typeof n == 'string' && n.startsWith('#'),
            r = typeof n == 'string' ? (s ? document.getElementById(n.slice(1)) : document.querySelector(n)) : n;
        if (!r) return;
        t = Og(r, e);
    } else t = e;
    'scrollBehavior' in document.documentElement.style
        ? window.scrollTo(t)
        : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Qi(e, t) {
    return (history.state ? history.state.position - t : -1) + e;
}
const eo = new Map();
function kg(e, t) {
    eo.set(e, t);
}
function Mg(e) {
    const t = eo.get(e);
    return (eo.delete(e), t);
}
function Dg(e) {
    return typeof e == 'string' || (e && typeof e == 'object');
}
function kc(e) {
    return typeof e == 'string' || typeof e == 'symbol';
}
function Ng(e) {
    const t = {};
    if (e === '' || e === '?') return t;
    const n = (e[0] === '?' ? e.slice(1) : e).split('&');
    for (let s = 0; s < n.length; ++s) {
        const r = n[s].replace(Rc, ' '),
            o = r.indexOf('='),
            i = ts(o < 0 ? r : r.slice(0, o)),
            a = o < 0 ? null : ts(r.slice(o + 1));
        if (i in t) {
            let l = t[i];
            (et(l) || (l = t[i] = [l]), l.push(a));
        } else t[i] = a;
    }
    return t;
}
function Yi(e) {
    let t = '';
    for (let n in e) {
        const s = e[n];
        if (((n = _g(n)), s == null)) {
            s !== void 0 && (t += (t.length ? '&' : '') + n);
            continue;
        }
        (et(s) ? s.map((r) => r && zr(r)) : [s && zr(s)]).forEach((r) => {
            r !== void 0 && ((t += (t.length ? '&' : '') + n), r != null && (t += '=' + r));
        });
    }
    return t;
}
function Lg(e) {
    const t = {};
    for (const n in e) {
        const s = e[n];
        s !== void 0 && (t[n] = et(s) ? s.map((r) => (r == null ? null : '' + r)) : s == null ? s : '' + s);
    }
    return t;
}
function Nn() {
    let e = [];
    function t(s) {
        return (
            e.push(s),
            () => {
                const r = e.indexOf(s);
                r > -1 && e.splice(r, 1);
            }
        );
    }
    function n() {
        e = [];
    }
    return { add: t, list: () => e.slice(), reset: n };
}
function Mt(e, t, n, s, r, o = (i) => i()) {
    const i = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
    return () =>
        new Promise((a, l) => {
            const f = (d) => {
                    d === !1
                        ? l(Cn(ye.NAVIGATION_ABORTED, { from: n, to: t }))
                        : d instanceof Error
                          ? l(d)
                          : Dg(d)
                            ? l(Cn(ye.NAVIGATION_GUARD_REDIRECT, { from: t, to: d }))
                            : (i && s.enterCallbacks[r] === i && typeof d == 'function' && i.push(d), a());
                },
                c = o(() => e.call(s && s.instances[r], t, n, f));
            let u = Promise.resolve(c);
            (e.length < 3 && (u = u.then(f)), u.catch((d) => l(d)));
        });
}
function Ir(e, t, n, s, r = (o) => o()) {
    const o = [];
    for (const i of e)
        for (const a in i.components) {
            let l = i.components[a];
            if (!(t !== 'beforeRouteEnter' && !i.instances[a]))
                if (Cc(l)) {
                    const f = (l.__vccOpts || l)[t];
                    f && o.push(Mt(f, n, s, i, a, r));
                } else {
                    let f = l();
                    o.push(() =>
                        f.then((c) => {
                            if (!c) throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
                            const u = rg(c) ? c.default : c;
                            ((i.mods[a] = c), (i.components[a] = u));
                            const d = (u.__vccOpts || u)[t];
                            return d && Mt(d, n, s, i, a, r)();
                        }),
                    );
                }
        }
    return o;
}
function $g(e, t) {
    const n = [],
        s = [],
        r = [],
        o = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < o; i++) {
        const a = t.matched[i];
        a && (e.matched.find((f) => Sn(f, a)) ? s.push(a) : n.push(a));
        const l = e.matched[i];
        l && (t.matched.find((f) => Sn(f, l)) || r.push(l));
    }
    return [n, s, r];
}
let Bg = () => location.protocol + '//' + location.host;
function Mc(e, t) {
    const { pathname: n, search: s, hash: r } = t,
        o = e.indexOf('#');
    if (o > -1) {
        let i = r.includes(e.slice(o)) ? e.slice(o).length : 1,
            a = r.slice(i);
        return (a[0] !== '/' && (a = '/' + a), Ki(a, ''));
    }
    return Ki(n, e) + s + r;
}
function Hg(e, t, n, s) {
    let r = [],
        o = [],
        i = null;
    const a = ({ state: d }) => {
        const h = Mc(e, location),
            _ = n.value,
            g = t.value;
        let S = 0;
        if (d) {
            if (((n.value = h), (t.value = d), i && i === _)) {
                i = null;
                return;
            }
            S = g ? d.position - g.position : 0;
        } else s(h);
        r.forEach((b) => {
            b(n.value, _, { delta: S, type: Zr.pop, direction: S ? (S > 0 ? Er.forward : Er.back) : Er.unknown });
        });
    };
    function l() {
        i = n.value;
    }
    function f(d) {
        r.push(d);
        const h = () => {
            const _ = r.indexOf(d);
            _ > -1 && r.splice(_, 1);
        };
        return (o.push(h), h);
    }
    function c() {
        if (document.visibilityState === 'hidden') {
            const { history: d } = window;
            if (!d.state) return;
            d.replaceState(oe({}, d.state, { scroll: nr() }), '');
        }
    }
    function u() {
        for (const d of o) d();
        ((o = []),
            window.removeEventListener('popstate', a),
            window.removeEventListener('pagehide', c),
            document.removeEventListener('visibilitychange', c));
    }
    return (
        window.addEventListener('popstate', a),
        window.addEventListener('pagehide', c),
        document.addEventListener('visibilitychange', c),
        { pauseListeners: l, listen: f, destroy: u }
    );
}
function Xi(e, t, n, s = !1, r = !1) {
    return { back: e, current: t, forward: n, replaced: s, position: window.history.length, scroll: r ? nr() : null };
}
function jg(e) {
    const { history: t, location: n } = window,
        s = { value: Mc(e, n) },
        r = { value: t.state };
    r.value ||
        o(
            s.value,
            { back: null, current: s.value, forward: null, position: t.length - 1, replaced: !0, scroll: null },
            !0,
        );
    function o(l, f, c) {
        const u = e.indexOf('#'),
            d = u > -1 ? (n.host && document.querySelector('base') ? e : e.slice(u)) + l : Bg() + e + l;
        try {
            (t[c ? 'replaceState' : 'pushState'](f, '', d), (r.value = f));
        } catch (h) {
            (console.error(h), n[c ? 'replace' : 'assign'](d));
        }
    }
    function i(l, f) {
        (o(l, oe({}, t.state, Xi(r.value.back, l, r.value.forward, !0), f, { position: r.value.position }), !0),
            (s.value = l));
    }
    function a(l, f) {
        const c = oe({}, r.value, t.state, { forward: l, scroll: nr() });
        (o(c.current, c, !0), o(l, oe({}, Xi(s.value, l, null), { position: c.position + 1 }, f), !1), (s.value = l));
    }
    return { location: s, state: r, push: a, replace: i };
}
function Fg(e) {
    e = Rg(e);
    const t = jg(e),
        n = Hg(e, t.state, t.location, t.replace);
    function s(o, i = !0) {
        (i || n.pauseListeners(), history.go(o));
    }
    const r = oe({ location: '', base: e, go: s, createHref: Pg.bind(null, e) }, t, n);
    return (
        Object.defineProperty(r, 'location', { enumerable: !0, get: () => t.location.value }),
        Object.defineProperty(r, 'state', { enumerable: !0, get: () => t.state.value }),
        r
    );
}
let Kt = (function (e) {
    return ((e[(e.Static = 0)] = 'Static'), (e[(e.Param = 1)] = 'Param'), (e[(e.Group = 2)] = 'Group'), e);
})({});
var _e = (function (e) {
    return (
        (e[(e.Static = 0)] = 'Static'),
        (e[(e.Param = 1)] = 'Param'),
        (e[(e.ParamRegExp = 2)] = 'ParamRegExp'),
        (e[(e.ParamRegExpEnd = 3)] = 'ParamRegExpEnd'),
        (e[(e.EscapeNext = 4)] = 'EscapeNext'),
        e
    );
})(_e || {});
const Ug = { type: Kt.Static, value: '' },
    Wg = /[a-zA-Z0-9_]/;
function Vg(e) {
    if (!e) return [[]];
    if (e === '/') return [[Ug]];
    if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
    function t(h) {
        throw new Error(`ERR (${n})/"${f}": ${h}`);
    }
    let n = _e.Static,
        s = n;
    const r = [];
    let o;
    function i() {
        (o && r.push(o), (o = []));
    }
    let a = 0,
        l,
        f = '',
        c = '';
    function u() {
        f &&
            (n === _e.Static
                ? o.push({ type: Kt.Static, value: f })
                : n === _e.Param || n === _e.ParamRegExp || n === _e.ParamRegExpEnd
                  ? (o.length > 1 &&
                        (l === '*' || l === '+') &&
                        t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),
                    o.push({
                        type: Kt.Param,
                        value: f,
                        regexp: c,
                        repeatable: l === '*' || l === '+',
                        optional: l === '*' || l === '?',
                    }))
                  : t('Invalid state to consume buffer'),
            (f = ''));
    }
    function d() {
        f += l;
    }
    for (; a < e.length; ) {
        if (((l = e[a++]), l === '\\' && n !== _e.ParamRegExp)) {
            ((s = n), (n = _e.EscapeNext));
            continue;
        }
        switch (n) {
            case _e.Static:
                l === '/' ? (f && u(), i()) : l === ':' ? (u(), (n = _e.Param)) : d();
                break;
            case _e.EscapeNext:
                (d(), (n = s));
                break;
            case _e.Param:
                l === '('
                    ? (n = _e.ParamRegExp)
                    : Wg.test(l)
                      ? d()
                      : (u(), (n = _e.Static), l !== '*' && l !== '?' && l !== '+' && a--);
                break;
            case _e.ParamRegExp:
                l === ')' ? (c[c.length - 1] == '\\' ? (c = c.slice(0, -1) + l) : (n = _e.ParamRegExpEnd)) : (c += l);
                break;
            case _e.ParamRegExpEnd:
                (u(), (n = _e.Static), l !== '*' && l !== '?' && l !== '+' && a--, (c = ''));
                break;
            default:
                t('Unknown state');
                break;
        }
    }
    return (n === _e.ParamRegExp && t(`Unfinished custom RegExp for param "${f}"`), u(), i(), r);
}
const zi = '[^/]+?',
    qg = { sensitive: !1, strict: !1, start: !0, end: !0 };
var Oe = (function (e) {
    return (
        (e[(e._multiplier = 10)] = '_multiplier'),
        (e[(e.Root = 90)] = 'Root'),
        (e[(e.Segment = 40)] = 'Segment'),
        (e[(e.SubSegment = 30)] = 'SubSegment'),
        (e[(e.Static = 40)] = 'Static'),
        (e[(e.Dynamic = 20)] = 'Dynamic'),
        (e[(e.BonusCustomRegExp = 10)] = 'BonusCustomRegExp'),
        (e[(e.BonusWildcard = -50)] = 'BonusWildcard'),
        (e[(e.BonusRepeatable = -20)] = 'BonusRepeatable'),
        (e[(e.BonusOptional = -8)] = 'BonusOptional'),
        (e[(e.BonusStrict = 0.7000000000000001)] = 'BonusStrict'),
        (e[(e.BonusCaseSensitive = 0.25)] = 'BonusCaseSensitive'),
        e
    );
})(Oe || {});
const Gg = /[.+*?^${}()[\]/\\]/g;
function Kg(e, t) {
    const n = oe({}, qg, t),
        s = [];
    let r = n.start ? '^' : '';
    const o = [];
    for (const f of e) {
        const c = f.length ? [] : [Oe.Root];
        n.strict && !f.length && (r += '/');
        for (let u = 0; u < f.length; u++) {
            const d = f[u];
            let h = Oe.Segment + (n.sensitive ? Oe.BonusCaseSensitive : 0);
            if (d.type === Kt.Static) (u || (r += '/'), (r += d.value.replace(Gg, '\\$&')), (h += Oe.Static));
            else if (d.type === Kt.Param) {
                const { value: _, repeatable: g, optional: S, regexp: b } = d;
                o.push({ name: _, repeatable: g, optional: S });
                const w = b || zi;
                if (w !== zi) {
                    h += Oe.BonusCustomRegExp;
                    try {
                        new RegExp(`(${w})`);
                    } catch (v) {
                        throw new Error(`Invalid custom RegExp for param "${_}" (${w}): ` + v.message);
                    }
                }
                let y = g ? `((?:${w})(?:/(?:${w}))*)` : `(${w})`;
                (u || (y = S && f.length < 2 ? `(?:/${y})` : '/' + y),
                    S && (y += '?'),
                    (r += y),
                    (h += Oe.Dynamic),
                    S && (h += Oe.BonusOptional),
                    g && (h += Oe.BonusRepeatable),
                    w === '.*' && (h += Oe.BonusWildcard));
            }
            c.push(h);
        }
        s.push(c);
    }
    if (n.strict && n.end) {
        const f = s.length - 1;
        s[f][s[f].length - 1] += Oe.BonusStrict;
    }
    (n.strict || (r += '/?'), n.end ? (r += '$') : n.strict && !r.endsWith('/') && (r += '(?:/|$)'));
    const i = new RegExp(r, n.sensitive ? '' : 'i');
    function a(f) {
        const c = f.match(i),
            u = {};
        if (!c) return null;
        for (let d = 1; d < c.length; d++) {
            const h = c[d] || '',
                _ = o[d - 1];
            u[_.name] = h && _.repeatable ? h.split('/') : h;
        }
        return u;
    }
    function l(f) {
        let c = '',
            u = !1;
        for (const d of e) {
            ((!u || !c.endsWith('/')) && (c += '/'), (u = !1));
            for (const h of d)
                if (h.type === Kt.Static) c += h.value;
                else if (h.type === Kt.Param) {
                    const { value: _, repeatable: g, optional: S } = h,
                        b = _ in f ? f[_] : '';
                    if (et(b) && !g)
                        throw new Error(
                            `Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`,
                        );
                    const w = et(b) ? b.join('/') : b;
                    if (!w)
                        if (S) d.length < 2 && (c.endsWith('/') ? (c = c.slice(0, -1)) : (u = !0));
                        else throw new Error(`Missing required param "${_}"`);
                    c += w;
                }
        }
        return c || '/';
    }
    return { re: i, score: s, keys: o, parse: a, stringify: l };
}
function Jg(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const s = t[n] - e[n];
        if (s) return s;
        n++;
    }
    return e.length < t.length
        ? e.length === 1 && e[0] === Oe.Static + Oe.Segment
            ? -1
            : 1
        : e.length > t.length
          ? t.length === 1 && t[0] === Oe.Static + Oe.Segment
              ? 1
              : -1
          : 0;
}
function Dc(e, t) {
    let n = 0;
    const s = e.score,
        r = t.score;
    for (; n < s.length && n < r.length; ) {
        const o = Jg(s[n], r[n]);
        if (o) return o;
        n++;
    }
    if (Math.abs(r.length - s.length) === 1) {
        if (Zi(s)) return 1;
        if (Zi(r)) return -1;
    }
    return r.length - s.length;
}
function Zi(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0;
}
const Qg = { strict: !1, end: !0, sensitive: !1 };
function Yg(e, t, n) {
    const s = Kg(Vg(e.path), n),
        r = oe(s, { record: e, parent: t, children: [], alias: [] });
    return (t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r);
}
function Xg(e, t) {
    const n = [],
        s = new Map();
    t = qi(Qg, t);
    function r(u) {
        return s.get(u);
    }
    function o(u, d, h) {
        const _ = !h,
            g = ta(u);
        g.aliasOf = h && h.record;
        const S = qi(t, u),
            b = [g];
        if ('alias' in u) {
            const v = typeof u.alias == 'string' ? [u.alias] : u.alias;
            for (const E of v)
                b.push(
                    ta(
                        oe({}, g, {
                            components: h ? h.record.components : g.components,
                            path: E,
                            aliasOf: h ? h.record : g,
                        }),
                    ),
                );
        }
        let w, y;
        for (const v of b) {
            const { path: E } = v;
            if (d && E[0] !== '/') {
                const N = d.record.path,
                    D = N[N.length - 1] === '/' ? '' : '/';
                v.path = d.record.path + (E && D + E);
            }
            if (
                ((w = Yg(v, d, S)),
                h ? h.alias.push(w) : ((y = y || w), y !== w && y.alias.push(w), _ && u.name && !na(w) && i(u.name)),
                Nc(w) && l(w),
                g.children)
            ) {
                const N = g.children;
                for (let D = 0; D < N.length; D++) o(N[D], w, h && h.children[D]);
            }
            h = h || w;
        }
        return y
            ? () => {
                  i(y);
              }
            : Gn;
    }
    function i(u) {
        if (kc(u)) {
            const d = s.get(u);
            d && (s.delete(u), n.splice(n.indexOf(d), 1), d.children.forEach(i), d.alias.forEach(i));
        } else {
            const d = n.indexOf(u);
            d > -1 &&
                (n.splice(d, 1), u.record.name && s.delete(u.record.name), u.children.forEach(i), u.alias.forEach(i));
        }
    }
    function a() {
        return n;
    }
    function l(u) {
        const d = ey(u, n);
        (n.splice(d, 0, u), u.record.name && !na(u) && s.set(u.record.name, u));
    }
    function f(u, d) {
        let h,
            _ = {},
            g,
            S;
        if ('name' in u && u.name) {
            if (((h = s.get(u.name)), !h)) throw Cn(ye.MATCHER_NOT_FOUND, { location: u });
            ((S = h.record.name),
                (_ = oe(
                    ea(
                        d.params,
                        h.keys
                            .filter((y) => !y.optional)
                            .concat(h.parent ? h.parent.keys.filter((y) => y.optional) : [])
                            .map((y) => y.name),
                    ),
                    u.params &&
                        ea(
                            u.params,
                            h.keys.map((y) => y.name),
                        ),
                )),
                (g = h.stringify(_)));
        } else if (u.path != null)
            ((g = u.path), (h = n.find((y) => y.re.test(g))), h && ((_ = h.parse(g)), (S = h.record.name)));
        else {
            if (((h = d.name ? s.get(d.name) : n.find((y) => y.re.test(d.path))), !h))
                throw Cn(ye.MATCHER_NOT_FOUND, { location: u, currentLocation: d });
            ((S = h.record.name), (_ = oe({}, d.params, u.params)), (g = h.stringify(_)));
        }
        const b = [];
        let w = h;
        for (; w; ) (b.unshift(w.record), (w = w.parent));
        return { name: S, path: g, params: _, matched: b, meta: Zg(b) };
    }
    e.forEach((u) => o(u));
    function c() {
        ((n.length = 0), s.clear());
    }
    return { addRoute: o, resolve: f, removeRoute: i, clearRoutes: c, getRoutes: a, getRecordMatcher: r };
}
function ea(e, t) {
    const n = {};
    for (const s of t) s in e && (n[s] = e[s]);
    return n;
}
function ta(e) {
    const t = {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: e.aliasOf,
        beforeEnter: e.beforeEnter,
        props: zg(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set(),
        updateGuards: new Set(),
        enterCallbacks: {},
        components: 'components' in e ? e.components || null : e.component && { default: e.component },
    };
    return (Object.defineProperty(t, 'mods', { value: {} }), t);
}
function zg(e) {
    const t = {},
        n = e.props || !1;
    if ('component' in e) t.default = n;
    else for (const s in e.components) t[s] = typeof n == 'object' ? n[s] : n;
    return t;
}
function na(e) {
    for (; e; ) {
        if (e.record.aliasOf) return !0;
        e = e.parent;
    }
    return !1;
}
function Zg(e) {
    return e.reduce((t, n) => oe(t, n.meta), {});
}
function ey(e, t) {
    let n = 0,
        s = t.length;
    for (; n !== s; ) {
        const o = (n + s) >> 1;
        Dc(e, t[o]) < 0 ? (s = o) : (n = o + 1);
    }
    const r = ty(e);
    return (r && (s = t.lastIndexOf(r, s - 1)), s);
}
function ty(e) {
    let t = e;
    for (; (t = t.parent); ) if (Nc(t) && Dc(e, t) === 0) return t;
}
function Nc({ record: e }) {
    return !!(e.name || (e.components && Object.keys(e.components).length) || e.redirect);
}
function sa(e) {
    const t = De(tr),
        n = De(Do),
        s = Ie(() => {
            const l = le(e.to);
            return t.resolve(l);
        }),
        r = Ie(() => {
            const { matched: l } = s.value,
                { length: f } = l,
                c = l[f - 1],
                u = n.matched;
            if (!c || !u.length) return -1;
            const d = u.findIndex(Sn.bind(null, c));
            if (d > -1) return d;
            const h = ra(l[f - 2]);
            return f > 1 && ra(c) === h && u[u.length - 1].path !== h ? u.findIndex(Sn.bind(null, l[f - 2])) : d;
        }),
        o = Ie(() => r.value > -1 && iy(n.params, s.value.params)),
        i = Ie(() => r.value > -1 && r.value === n.matched.length - 1 && xc(n.params, s.value.params));
    function a(l = {}) {
        if (oy(l)) {
            const f = t[le(e.replace) ? 'replace' : 'push'](le(e.to)).catch(Gn);
            return (
                e.viewTransition &&
                    typeof document < 'u' &&
                    'startViewTransition' in document &&
                    document.startViewTransition(() => f),
                f
            );
        }
        return Promise.resolve();
    }
    return { route: s, href: Ie(() => s.value.href), isActive: o, isExactActive: i, navigate: a };
}
function ny(e) {
    return e.length === 1 ? e[0] : e;
}
const sy = _o({
        name: 'RouterLink',
        compatConfig: { MODE: 3 },
        props: {
            to: { type: [String, Object], required: !0 },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: { type: String, default: 'page' },
            viewTransition: Boolean,
        },
        useLink: sa,
        setup(e, { slots: t }) {
            const n = tt(sa(e)),
                { options: s } = De(tr),
                r = Ie(() => ({
                    [oa(e.activeClass, s.linkActiveClass, 'router-link-active')]: n.isActive,
                    [oa(e.exactActiveClass, s.linkExactActiveClass, 'router-link-exact-active')]: n.isExactActive,
                }));
            return () => {
                const o = t.default && ny(t.default(n));
                return e.custom
                    ? o
                    : Ro(
                          'a',
                          {
                              'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                              href: n.href,
                              onClick: n.navigate,
                              class: r.value,
                          },
                          o,
                      );
            };
        },
    }),
    ry = sy;
function oy(e) {
    if (
        !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
        !e.defaultPrevented &&
        !(e.button !== void 0 && e.button !== 0)
    ) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute('target');
            if (/\b_blank\b/i.test(t)) return;
        }
        return (e.preventDefault && e.preventDefault(), !0);
    }
}
function iy(e, t) {
    for (const n in t) {
        const s = t[n],
            r = e[n];
        if (typeof s == 'string') {
            if (s !== r) return !1;
        } else if (!et(r) || r.length !== s.length || s.some((o, i) => o.valueOf() !== r[i].valueOf())) return !1;
    }
    return !0;
}
function ra(e) {
    return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
const oa = (e, t, n) => e ?? t ?? n,
    ay = _o({
        name: 'RouterView',
        inheritAttrs: !1,
        props: { name: { type: String, default: 'default' }, route: Object },
        compatConfig: { MODE: 3 },
        setup(e, { attrs: t, slots: n }) {
            const s = De(Xr),
                r = Ie(() => e.route || s.value),
                o = De(Gi, 0),
                i = Ie(() => {
                    let f = le(o);
                    const { matched: c } = r.value;
                    let u;
                    for (; (u = c[f]) && !u.components; ) f++;
                    return f;
                }),
                a = Ie(() => r.value.matched[i.value]);
            (Hn(
                Gi,
                Ie(() => i.value + 1),
            ),
                Hn(ag, a),
                Hn(Xr, r));
            const l = pt();
            return (
                Yt(
                    () => [l.value, a.value, e.name],
                    ([f, c, u], [d, h, _]) => {
                        (c &&
                            ((c.instances[u] = f),
                            h &&
                                h !== c &&
                                f &&
                                f === d &&
                                (c.leaveGuards.size || (c.leaveGuards = h.leaveGuards),
                                c.updateGuards.size || (c.updateGuards = h.updateGuards))),
                            f && c && (!h || !Sn(c, h) || !d) && (c.enterCallbacks[u] || []).forEach((g) => g(f)));
                    },
                    { flush: 'post' },
                ),
                () => {
                    const f = r.value,
                        c = e.name,
                        u = a.value,
                        d = u && u.components[c];
                    if (!d) return ia(n.default, { Component: d, route: f });
                    const h = u.props[c],
                        _ = h ? (h === !0 ? f.params : typeof h == 'function' ? h(f) : h) : null,
                        S = Ro(
                            d,
                            oe({}, _, t, {
                                onVnodeUnmounted: (b) => {
                                    b.component.isUnmounted && (u.instances[c] = null);
                                },
                                ref: l,
                            }),
                        );
                    return ia(n.default, { Component: S, route: f }) || S;
                }
            );
        },
    });
function ia(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n;
}
const ly = ay;
function cy(e) {
    const t = Xg(e.routes, e),
        n = e.parseQuery || Ng,
        s = e.stringifyQuery || Yi,
        r = e.history,
        o = Nn(),
        i = Nn(),
        a = Nn(),
        l = en(Ge);
    let f = Ge;
    cn && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual');
    const c = vr.bind(null, (R) => '' + R),
        u = vr.bind(null, vg),
        d = vr.bind(null, ts);
    function h(R, V) {
        let H, J;
        return (kc(R) ? ((H = t.getRecordMatcher(R)), (J = V)) : (J = R), t.addRoute(J, H));
    }
    function _(R) {
        const V = t.getRecordMatcher(R);
        V && t.removeRoute(V);
    }
    function g() {
        return t.getRoutes().map((R) => R.record);
    }
    function S(R) {
        return !!t.getRecordMatcher(R);
    }
    function b(R, V) {
        if (((V = oe({}, V || l.value)), typeof R == 'string')) {
            const m = wr(n, R, V.path),
                I = t.resolve({ path: m.path }, V),
                O = r.createHref(m.fullPath);
            return oe(m, I, { params: d(I.params), hash: ts(m.hash), redirectedFrom: void 0, href: O });
        }
        let H;
        if (R.path != null) H = oe({}, R, { path: wr(n, R.path, V.path).path });
        else {
            const m = oe({}, R.params);
            for (const I in m) m[I] == null && delete m[I];
            ((H = oe({}, R, { params: u(m) })), (V.params = u(V.params)));
        }
        const J = t.resolve(H, V),
            Z = R.hash || '';
        J.params = c(d(J.params));
        const de = Ig(s, oe({}, R, { hash: mg(Z), path: J.path })),
            p = r.createHref(de);
        return oe({ fullPath: de, hash: Z, query: s === Yi ? Lg(R.query) : R.query || {} }, J, {
            redirectedFrom: void 0,
            href: p,
        });
    }
    function w(R) {
        return typeof R == 'string' ? wr(n, R, l.value.path) : oe({}, R);
    }
    function y(R, V) {
        if (f !== R) return Cn(ye.NAVIGATION_CANCELLED, { from: V, to: R });
    }
    function v(R) {
        return D(R);
    }
    function E(R) {
        return v(oe(w(R), { replace: !0 }));
    }
    function N(R, V) {
        const H = R.matched[R.matched.length - 1];
        if (H && H.redirect) {
            const { redirect: J } = H;
            let Z = typeof J == 'function' ? J(R, V) : J;
            return (
                typeof Z == 'string' &&
                    ((Z = Z.includes('?') || Z.includes('#') ? (Z = w(Z)) : { path: Z }), (Z.params = {})),
                oe({ query: R.query, hash: R.hash, params: Z.path != null ? {} : R.params }, Z)
            );
        }
    }
    function D(R, V) {
        const H = (f = b(R)),
            J = l.value,
            Z = R.state,
            de = R.force,
            p = R.replace === !0,
            m = N(H, J);
        if (m)
            return D(oe(w(m), { state: typeof m == 'object' ? oe({}, Z, m.state) : Z, force: de, replace: p }), V || H);
        const I = H;
        I.redirectedFrom = V;
        let O;
        return (
            !de && Cg(s, J, H) && ((O = Cn(ye.NAVIGATION_DUPLICATED, { to: I, from: J })), nt(J, J, !0, !1)),
            (O ? Promise.resolve(O) : x(I, J))
                .catch((T) => (bt(T) ? (bt(T, ye.NAVIGATION_GUARD_REDIRECT) ? T : At(T)) : W(T, I, J)))
                .then((T) => {
                    if (T) {
                        if (bt(T, ye.NAVIGATION_GUARD_REDIRECT))
                            return D(
                                oe({ replace: p }, w(T.to), {
                                    state: typeof T.to == 'object' ? oe({}, Z, T.to.state) : Z,
                                    force: de,
                                }),
                                V || I,
                            );
                    } else T = A(I, J, !0, p, Z);
                    return (q(I, J, T), T);
                })
        );
    }
    function P(R, V) {
        const H = y(R, V);
        return H ? Promise.reject(H) : Promise.resolve();
    }
    function C(R) {
        const V = sn.values().next().value;
        return V && typeof V.runWithContext == 'function' ? V.runWithContext(R) : R();
    }
    function x(R, V) {
        let H;
        const [J, Z, de] = $g(R, V);
        H = Ir(J.reverse(), 'beforeRouteLeave', R, V);
        for (const m of J)
            m.leaveGuards.forEach((I) => {
                H.push(Mt(I, R, V));
            });
        const p = P.bind(null, R, V);
        return (
            H.push(p),
            We(H)
                .then(() => {
                    H = [];
                    for (const m of o.list()) H.push(Mt(m, R, V));
                    return (H.push(p), We(H));
                })
                .then(() => {
                    H = Ir(Z, 'beforeRouteUpdate', R, V);
                    for (const m of Z)
                        m.updateGuards.forEach((I) => {
                            H.push(Mt(I, R, V));
                        });
                    return (H.push(p), We(H));
                })
                .then(() => {
                    H = [];
                    for (const m of de)
                        if (m.beforeEnter)
                            if (et(m.beforeEnter)) for (const I of m.beforeEnter) H.push(Mt(I, R, V));
                            else H.push(Mt(m.beforeEnter, R, V));
                    return (H.push(p), We(H));
                })
                .then(
                    () => (
                        R.matched.forEach((m) => (m.enterCallbacks = {})),
                        (H = Ir(de, 'beforeRouteEnter', R, V, C)),
                        H.push(p),
                        We(H)
                    ),
                )
                .then(() => {
                    H = [];
                    for (const m of i.list()) H.push(Mt(m, R, V));
                    return (H.push(p), We(H));
                })
                .catch((m) => (bt(m, ye.NAVIGATION_CANCELLED) ? m : Promise.reject(m)))
        );
    }
    function q(R, V, H) {
        a.list().forEach((J) => C(() => J(R, V, H)));
    }
    function A(R, V, H, J, Z) {
        const de = y(R, V);
        if (de) return de;
        const p = V === Ge,
            m = cn ? history.state : {};
        (H && (J || p ? r.replace(R.fullPath, oe({ scroll: p && m && m.scroll }, Z)) : r.push(R.fullPath, Z)),
            (l.value = R),
            nt(R, V, H, p),
            At());
    }
    let U;
    function ee() {
        U ||
            (U = r.listen((R, V, H) => {
                if (!Bt.listening) return;
                const J = b(R),
                    Z = N(J, Bt.currentRoute.value);
                if (Z) {
                    D(oe(Z, { replace: !0, force: !0 }), J).catch(Gn);
                    return;
                }
                f = J;
                const de = l.value;
                (cn && kg(Qi(de.fullPath, H.delta), nr()),
                    x(J, de)
                        .catch((p) =>
                            bt(p, ye.NAVIGATION_ABORTED | ye.NAVIGATION_CANCELLED)
                                ? p
                                : bt(p, ye.NAVIGATION_GUARD_REDIRECT)
                                  ? (D(oe(w(p.to), { force: !0 }), J)
                                        .then((m) => {
                                            bt(m, ye.NAVIGATION_ABORTED | ye.NAVIGATION_DUPLICATED) &&
                                                !H.delta &&
                                                H.type === Zr.pop &&
                                                r.go(-1, !1);
                                        })
                                        .catch(Gn),
                                    Promise.reject())
                                  : (H.delta && r.go(-H.delta, !1), W(p, J, de)),
                        )
                        .then((p) => {
                            ((p = p || A(J, de, !1)),
                                p &&
                                    (H.delta && !bt(p, ye.NAVIGATION_CANCELLED)
                                        ? r.go(-H.delta, !1)
                                        : H.type === Zr.pop &&
                                          bt(p, ye.NAVIGATION_ABORTED | ye.NAVIGATION_DUPLICATED) &&
                                          r.go(-1, !1)),
                                q(J, de, p));
                        })
                        .catch(Gn));
            }));
    }
    let re = Nn(),
        F = Nn(),
        G;
    function W(R, V, H) {
        At(R);
        const J = F.list();
        return (J.length ? J.forEach((Z) => Z(R, V, H)) : console.error(R), Promise.reject(R));
    }
    function ue() {
        return G && l.value !== Ge
            ? Promise.resolve()
            : new Promise((R, V) => {
                  re.add([R, V]);
              });
    }
    function At(R) {
        return (G || ((G = !R), ee(), re.list().forEach(([V, H]) => (R ? H(R) : V())), re.reset()), R);
    }
    function nt(R, V, H, J) {
        const { scrollBehavior: Z } = e;
        if (!cn || !Z) return Promise.resolve();
        const de = (!H && Mg(Qi(R.fullPath, 0))) || ((J || !H) && history.state && history.state.scroll) || null;
        return Rn()
            .then(() => Z(R, V, de))
            .then((p) => p && xg(p))
            .catch((p) => W(p, R, V));
    }
    const Ne = (R) => r.go(R);
    let nn;
    const sn = new Set(),
        Bt = {
            currentRoute: l,
            listening: !0,
            addRoute: h,
            removeRoute: _,
            clearRoutes: t.clearRoutes,
            hasRoute: S,
            getRoutes: g,
            resolve: b,
            options: e,
            push: v,
            replace: E,
            go: Ne,
            back: () => Ne(-1),
            forward: () => Ne(1),
            beforeEach: o.add,
            beforeResolve: i.add,
            afterEach: a.add,
            onError: F.add,
            isReady: ue,
            install(R) {
                (R.component('RouterLink', ry),
                    R.component('RouterView', ly),
                    (R.config.globalProperties.$router = Bt),
                    Object.defineProperty(R.config.globalProperties, '$route', { enumerable: !0, get: () => le(l) }),
                    cn && !nn && l.value === Ge && ((nn = !0), v(r.location).catch((J) => {})));
                const V = {};
                for (const J in Ge) Object.defineProperty(V, J, { get: () => l.value[J], enumerable: !0 });
                (R.provide(tr, Bt), R.provide(Do, It(V)), R.provide(Xr, l));
                const H = R.unmount;
                (sn.add(R),
                    (R.unmount = function () {
                        (sn.delete(R),
                            sn.size < 1 && ((f = Ge), U && U(), (U = null), (l.value = Ge), (nn = !1), (G = !1)),
                            H());
                    }));
            },
        };
    function We(R) {
        return R.reduce((V, H) => V.then(() => C(H)), Promise.resolve());
    }
    return Bt;
}
function Lc(e) {
    return Array.isArray(e) ? e : [e];
}
const uy = 'modulepreload',
    fy = function (e, t) {
        return new URL(e, t).href;
    },
    aa = {},
    Qe = function (t, n, s) {
        let r = Promise.resolve();
        if (n && n.length > 0) {
            let f = function (c) {
                return Promise.all(
                    c.map((u) =>
                        Promise.resolve(u).then(
                            (d) => ({ status: 'fulfilled', value: d }),
                            (d) => ({ status: 'rejected', reason: d }),
                        ),
                    ),
                );
            };
            const i = document.getElementsByTagName('link'),
                a = document.querySelector('meta[property=csp-nonce]'),
                l = a?.nonce || a?.getAttribute('nonce');
            r = f(
                n.map((c) => {
                    if (((c = fy(c, s)), c in aa)) return;
                    aa[c] = !0;
                    const u = c.endsWith('.css'),
                        d = u ? '[rel="stylesheet"]' : '';
                    if (s)
                        for (let _ = i.length - 1; _ >= 0; _--) {
                            const g = i[_];
                            if (g.href === c && (!u || g.rel === 'stylesheet')) return;
                        }
                    else if (document.querySelector(`link[href="${c}"]${d}`)) return;
                    const h = document.createElement('link');
                    if (
                        ((h.rel = u ? 'stylesheet' : uy),
                        u || (h.as = 'script'),
                        (h.crossOrigin = ''),
                        (h.href = c),
                        l && h.setAttribute('nonce', l),
                        document.head.appendChild(h),
                        u)
                    )
                        return new Promise((_, g) => {
                            (h.addEventListener('load', _),
                                h.addEventListener('error', () => g(new Error(`Unable to preload CSS for ${c}`))));
                        });
                }),
            );
        }
        function o(i) {
            const a = new Event('vite:preloadError', { cancelable: !0 });
            if (((a.payload = i), window.dispatchEvent(a), !a.defaultPrevented)) throw i;
        }
        return r.then((i) => {
            for (const a of i || []) a.status === 'rejected' && o(a.reason);
            return t().catch(o);
        });
    },
    Cr = [
        {
            name: 'r-id',
            path: '/r/:id()',
            component: () => Qe(() => import('./DGJPxgEh.js'), __vite__mapDeps([0, 1, 2, 3]), import.meta.url),
        },
        {
            name: 'forgot-password',
            path: '/forgot-password',
            component: () =>
                Qe(() => import('./BtzAl7FG.js'), __vite__mapDeps([4, 5, 6, 7, 8, 9, 10]), import.meta.url),
        },
        {
            name: 'moderation',
            path: '/moderation',
            meta: { middleware: 'auth' },
            component: () => Qe(() => import('./DIRtzqgs.js'), __vite__mapDeps([11, 12]), import.meta.url),
        },
        {
            name: 'register',
            path: '/register',
            component: () =>
                Qe(() => import('./Cpi6fCM3.js'), __vite__mapDeps([13, 6, 14, 5, 15, 16, 7, 8, 9]), import.meta.url),
        },
        {
            name: 'signin',
            path: '/signin',
            component: () =>
                Qe(() => import('./BfuYkSoz.js'), __vite__mapDeps([17, 6, 18, 5, 15, 16, 7, 8, 9]), import.meta.url),
        },
        {
            name: 'welcome',
            path: '/welcome',
            component: () =>
                Qe(() => import('./C0AfYE1n.js'), __vite__mapDeps([19, 14, 5, 15, 16, 18, 9, 20]), import.meta.url),
        },
        { name: 'slug', path: '/:slug(.*)*', component: () => Qe(() => import('./iB_46Ra0.js'), [], import.meta.url) },
        {
            name: 'index',
            path: '/',
            component: () =>
                Qe(() => import('./BCod2Xj9.js'), __vite__mapDeps([21, 6, 1, 2, 15, 16, 7, 8, 5, 22]), import.meta.url),
        },
    ],
    hy = /(:\w+)\([^)]+\)/g,
    dy = /(:\w+)[?+*]/g,
    py = /:\w+/g;
function la(e) {
    const t =
        e?.meta.key ??
        e.path
            .replace(hy, '$1')
            .replace(dy, '$1')
            .replace(py, (n) => e.params[n.slice(1)]?.toString() || '');
    return typeof t == 'function' ? t(e) : t;
}
function gy(e, t) {
    return e === t || t === Ge
        ? !1
        : la(e) !== la(t)
          ? !0
          : !e.matched.every((s, r) => s.components && s.components.default === t.matched[r]?.components?.default);
}
const yy = {
    scrollBehavior(e, t, n) {
        const s = we(),
            r = yt().options?.scrollBehaviorType ?? 'auto';
        return e.path.replace(/\/$/, '') === t.path.replace(/\/$/, '')
            ? t.hash && !e.hash
                ? { left: 0, top: 0 }
                : e.hash
                  ? { el: e.hash, top: $c(e.hash), behavior: r }
                  : !1
            : (typeof e.meta.scrollToTop == 'function' ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop) === !1
              ? !1
              : t === Ge
                ? ca(e, t, n, r)
                : new Promise((i) => {
                      const a = () => {
                          requestAnimationFrame(() => i(ca(e, t, n, r)));
                      };
                      s.hooks.hookOnce('page:loading:end', () => {
                          const l = s['~transitionPromise'];
                          l ? l.then(a) : a();
                      });
                  });
    },
};
function $c(e) {
    try {
        const t = document.querySelector(e);
        if (t)
            return (
                (Number.parseFloat(getComputedStyle(t).scrollMarginTop) || 0) +
                (Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0)
            );
    } catch {}
    return 0;
}
function ca(e, t, n, s) {
    if (n) return n;
    const r = gy(e, t);
    return e.hash ? { el: e.hash, top: $c(e.hash), behavior: r ? s : 'instant' } : { left: 0, top: 0 };
}
const my = { hashMode: !1, scrollBehaviorType: 'auto' },
    Ot = { ...my, ...yy },
    _y = async (e, t) => {
        let n, s;
        if (!e.meta?.validate) return;
        const r = (([n, s] = Vn(() => Promise.resolve(e.meta.validate(e)))), (n = await n), s(), n);
        if (r === !0) return;
        const o = Dt({
            fatal: !0,
            status: (r && (r.status || r.statusCode)) || 404,
            statusText: (r && (r.statusText || r.statusMessage)) || `Page Not Found: ${e.fullPath}`,
            data: { path: e.fullPath },
        });
        return (typeof window < 'u' && window.history.pushState({}, '', t.fullPath), o);
    },
    by = (e) => {
        const t = Ec({ path: e.path });
        if (t.redirect) {
            const n = t.redirect.includes('#') ? t.redirect : t.redirect + e.hash;
            return Pn(n, { acceptRelative: !0 }) ? ((window.location.href = n), !1) : n;
        }
    },
    vy = [_y, by],
    to = { auth: () => Qe(() => import('./Z3PlYpUw.js'), [], import.meta.url) };
function wy(e, t, n) {
    const { pathname: s, search: r, hash: o } = t,
        i = e.indexOf('#');
    if (i > -1) {
        const f = o.includes(e.slice(i)) ? e.slice(i).length : 1;
        let c = o.slice(f);
        return (c[0] !== '/' && (c = '/' + c), Ai(c, ''));
    }
    const a = Ai(s, e),
        l = !n || Zl(a, n) ? a : n;
    return l + (l.includes('?') ? '' : r) + o;
}
const Ey = Ue({
        name: 'nuxt:router',
        enforce: 'pre',
        async setup(e) {
            let t,
                n,
                s = xo().app.baseURL;
            const r = Ot.history?.(s) ?? Fg(s),
                o = Ot.routes ? (([t, n] = Vn(() => Ot.routes(Cr))), (t = await t), n(), t ?? Cr) : Cr;
            let i;
            const a = cy({
                ...Ot,
                scrollBehavior: (b, w, y) => {
                    if (w === Ge) {
                        i = y;
                        return;
                    }
                    if (Ot.scrollBehavior) {
                        if (((a.options.scrollBehavior = Ot.scrollBehavior), 'scrollRestoration' in window.history)) {
                            const v = a.beforeEach(() => {
                                (v(), (window.history.scrollRestoration = 'manual'));
                            });
                        }
                        return Ot.scrollBehavior(b, Ge, i || y);
                    }
                },
                history: r,
                routes: o,
            });
            ('scrollRestoration' in window.history && (window.history.scrollRestoration = 'auto'), e.vueApp.use(a));
            const l = en(a.currentRoute.value);
            (a.afterEach((b, w) => {
                l.value = w;
            }),
                Object.defineProperty(e.vueApp.config.globalProperties, 'previousRoute', { get: () => l.value }));
            const f = wy(s, window.location, e.payload.path),
                c = en(a.currentRoute.value),
                u = () => {
                    c.value = a.currentRoute.value;
                };
            a.afterEach((b, w) => {
                b.matched.at(-1)?.components?.default === w.matched.at(-1)?.components?.default && u();
            });
            const d = { sync: u };
            for (const b in c.value) Object.defineProperty(d, b, { get: () => c.value[b], enumerable: !0 });
            ((e._route = It(d)), (e._middleware ||= { global: [], named: {} }));
            const h = er();
            a.afterEach(async (b, w, y) => {
                (delete e._processingMiddleware,
                    !e.isHydrating && h.value && (await e.runWithContext(Zd)),
                    y && (await e.callHook('page:loading:end')));
            });
            try {
                (([t, n] = Vn(() => a.isReady())), await t, n());
            } catch (b) {
                (([t, n] = Vn(() => e.runWithContext(() => qt(b)))), await t, n());
            }
            const _ = f !== a.currentRoute.value.fullPath ? a.resolve(f) : a.currentRoute.value,
                g =
                    e.isHydrating &&
                    e.payload.prerenderedAt &&
                    e.payload.path &&
                    f !== e.payload.path &&
                    Zl(a.currentRoute.value.path, e.payload.path);
            u();
            const S = e.payload.state._layout;
            return (
                a.beforeEach(async (b, w) => {
                    (await e.callHook('page:loading:start'),
                        (b.meta = tt(b.meta)),
                        e.isHydrating && S && !gt(b.meta.layout) && (b.meta.layout = S),
                        (e._processingMiddleware = !0));
                    {
                        const y = new Set([...vy, ...e._middleware.global]);
                        for (const E of b.matched) {
                            const N = E.meta.middleware;
                            if (N) for (const D of Lc(N)) y.add(D);
                        }
                        const v = Ec({ path: b.path });
                        if (v.appMiddleware)
                            for (const E in v.appMiddleware) v.appMiddleware[E] ? y.add(E) : y.delete(E);
                        for (const E of y) {
                            const N =
                                typeof E == 'string'
                                    ? e._middleware.named[E] || (await to[E]?.().then((D) => D.default || D))
                                    : E;
                            if (!N) throw new Error(`Unknown route middleware: '${E}'.`);
                            try {
                                const D = await e.runWithContext(() => N(b, w));
                                if (!e.payload.serverRendered && e.isHydrating && (D === !1 || D instanceof Error)) {
                                    const P = D || Dt({ status: 404, statusText: `Page Not Found: ${f}` });
                                    return (await e.runWithContext(() => qt(P)), !1);
                                }
                                if (D === !0) continue;
                                if (D === !1) return D;
                                if (D) return (uc(D) && D.fatal && (await e.runWithContext(() => qt(D))), D);
                            } catch (D) {
                                const P = Dt(D);
                                return (P.fatal && (await e.runWithContext(() => qt(P))), P);
                            }
                        }
                    }
                }),
                a.onError(async () => {
                    (delete e._processingMiddleware, await e.callHook('page:loading:end'));
                }),
                a.afterEach((b) => {
                    if (b.matched.length === 0 && !h.value)
                        return e.runWithContext(() =>
                            qt(
                                Dt({
                                    status: 404,
                                    fatal: !1,
                                    statusText: `Page not found: ${b.fullPath}`,
                                    data: { path: b.fullPath },
                                }),
                            ),
                        );
                }),
                e.hooks.hookOnce('app:created', async () => {
                    try {
                        if (('name' in _ && (_.name = void 0), g)) {
                            const b = a.resolve(e.payload.path);
                            ('name' in b && (b.name = void 0),
                                await a.replace({ ...b, force: !0 }),
                                e.hooks.hookOnce('app:suspense:resolve', async () => {
                                    await a.replace({ ..._, force: !0 });
                                }));
                        } else await a.replace({ ..._, force: !0 });
                        a.options.scrollBehavior = Ot.scrollBehavior;
                    } catch (b) {
                        await e.runWithContext(() => qt(b));
                    }
                }),
                { provide: { router: a } }
            );
        },
    }),
    ua =
        globalThis.requestIdleCallback ||
        ((e) => {
            const t = Date.now(),
                n = { didTimeout: !1, timeRemaining: () => Math.max(0, 50 - (Date.now() - t)) };
            return setTimeout(() => {
                e(n);
            }, 1);
        }),
    Rm =
        globalThis.cancelIdleCallback ||
        ((e) => {
            clearTimeout(e);
        }),
    Lo = (e) => {
        const t = we();
        t.isHydrating
            ? t.hooks.hookOnce('app:suspense:resolve', () => {
                  ua(() => e());
              })
            : ua(() => e());
    },
    Iy = Ue({
        name: 'nuxt:payload',
        setup(e) {
            const t = new Set();
            (yt().beforeResolve(async (n, s) => {
                if (n.path === s.path) return;
                const r = await Wi(n.path);
                if (r) {
                    for (const o of t) delete e.static.data[o];
                    for (const o in r.data) (o in e.static.data || t.add(o), (e.static.data[o] = r.data[o]));
                }
            }),
                Lo(() => {
                    (e.hooks.hook('link:prefetch', async (n) => {
                        const { hostname: s } = new URL(n, window.location.href);
                        s === window.location.hostname &&
                            (await Wi().catch(() => {
                                console.warn('[nuxt] Error preloading payload for', n);
                            }));
                    }),
                        navigator.connection?.effectiveType !== 'slow-2g' && setTimeout(wc, 1e3));
                }));
        },
    }),
    Cy = Ue(() => {
        const e = yt();
        Lo(() => {
            e.beforeResolve(async () => {
                await new Promise((t) => {
                    (setTimeout(t, 100),
                        requestAnimationFrame(() => {
                            setTimeout(t, 0);
                        }));
                });
            });
        });
    }),
    Sy = Ue((e) => {
        let t;
        async function n() {
            let s;
            try {
                s = await wc();
            } catch (r) {
                const o = r;
                if (!('status' in o && (o.status === 404 || o.status === 403))) throw o;
            }
            (t && clearTimeout(t), (t = setTimeout(n, Di)));
            try {
                const r = await $fetch(Oo('builds/latest.json') + `?${Date.now()}`);
                r.id !== s?.id && (e.hooks.callHook('app:manifest:update', r), t && clearTimeout(t));
            } catch {}
        }
        Lo(() => {
            t = setTimeout(n, Di);
        });
    });
function Ty(e = {}) {
    const t = e.path || window.location.pathname;
    let n = {};
    try {
        n = JSON.parse(sessionStorage.getItem('nuxt:reload') || '{}');
    } catch {}
    if (e.force || n?.path !== t || n?.expires < Date.now()) {
        try {
            sessionStorage.setItem('nuxt:reload', JSON.stringify({ path: t, expires: Date.now() + (e.ttl ?? 1e4) }));
        } catch {}
        if (e.persistState)
            try {
                sessionStorage.setItem('nuxt:reload:state', JSON.stringify({ state: we().payload.state }));
            } catch {}
        window.location.pathname !== t ? (window.location.href = t) : window.location.reload();
    }
}
const Ry = Ue({
    name: 'nuxt:chunk-reload',
    setup(e) {
        const t = yt(),
            n = xo(),
            s = new Set();
        (t.beforeEach(() => {
            s.clear();
        }),
            e.hook('app:chunkError', ({ error: o }) => {
                s.add(o);
            }));
        function r(o) {
            const i = Xl(n.app.baseURL, o.fullPath);
            Ty({ path: i, persistState: !0 });
        }
        (e.hook('app:manifest:update', () => {
            t.beforeResolve(r);
        }),
            t.onError((o, i) => {
                s.has(o) && r(i);
            }));
    },
});
function Ay(e) {
    return typeof e == 'string' ? `'${e}'` : new Py().serialize(e);
}
const Py = (function () {
        class e {
            #e = new Map();
            compare(n, s) {
                const r = typeof n,
                    o = typeof s;
                return r === 'string' && o === 'string'
                    ? n.localeCompare(s)
                    : r === 'number' && o === 'number'
                      ? n - s
                      : String.prototype.localeCompare.call(this.serialize(n, !0), this.serialize(s, !0));
            }
            serialize(n, s) {
                if (n === null) return 'null';
                switch (typeof n) {
                    case 'string':
                        return s ? n : `'${n}'`;
                    case 'bigint':
                        return `${n}n`;
                    case 'object':
                        return this.$object(n);
                    case 'function':
                        return this.$function(n);
                }
                return String(n);
            }
            serializeObject(n) {
                const s = Object.prototype.toString.call(n);
                if (s !== '[object Object]')
                    return this.serializeBuiltInType(s.length < 10 ? `unknown:${s}` : s.slice(8, -1), n);
                const r = n.constructor,
                    o = r === Object || r === void 0 ? '' : r.name;
                if (o !== '' && globalThis[o] === r) return this.serializeBuiltInType(o, n);
                if (typeof n.toJSON == 'function') {
                    const i = n.toJSON();
                    return o + (i !== null && typeof i == 'object' ? this.$object(i) : `(${this.serialize(i)})`);
                }
                return this.serializeObjectEntries(o, Object.entries(n));
            }
            serializeBuiltInType(n, s) {
                const r = this['$' + n];
                if (r) return r.call(this, s);
                if (typeof s?.entries == 'function') return this.serializeObjectEntries(n, s.entries());
                throw new Error(`Cannot serialize ${n}`);
            }
            serializeObjectEntries(n, s) {
                const r = Array.from(s).sort((i, a) => this.compare(i[0], a[0]));
                let o = `${n}{`;
                for (let i = 0; i < r.length; i++) {
                    const [a, l] = r[i];
                    ((o += `${this.serialize(a, !0)}:${this.serialize(l)}`), i < r.length - 1 && (o += ','));
                }
                return o + '}';
            }
            $object(n) {
                let s = this.#e.get(n);
                return (
                    s === void 0 &&
                        (this.#e.set(n, `#${this.#e.size}`), (s = this.serializeObject(n)), this.#e.set(n, s)),
                    s
                );
            }
            $function(n) {
                const s = Function.prototype.toString.call(n);
                return s.slice(-15) === '[native code] }'
                    ? `${n.name || ''}()[native]`
                    : `${n.name}(${n.length})${s.replace(/\s*\n\s*/g, '')}`;
            }
            $Array(n) {
                let s = '[';
                for (let r = 0; r < n.length; r++) ((s += this.serialize(n[r])), r < n.length - 1 && (s += ','));
                return s + ']';
            }
            $Date(n) {
                try {
                    return `Date(${n.toISOString()})`;
                } catch {
                    return 'Date(null)';
                }
            }
            $ArrayBuffer(n) {
                return `ArrayBuffer[${new Uint8Array(n).join(',')}]`;
            }
            $Set(n) {
                return `Set${this.$Array(Array.from(n).sort((s, r) => this.compare(s, r)))}`;
            }
            $Map(n) {
                return this.serializeObjectEntries('Map', n.entries());
            }
        }
        for (const t of ['Error', 'RegExp', 'URL'])
            e.prototype['$' + t] = function (n) {
                return `${t}(${n})`;
            };
        for (const t of [
            'Int8Array',
            'Uint8Array',
            'Uint8ClampedArray',
            'Int16Array',
            'Uint16Array',
            'Int32Array',
            'Uint32Array',
            'Float32Array',
            'Float64Array',
        ])
            e.prototype['$' + t] = function (n) {
                return `${t}[${n.join(',')}]`;
            };
        for (const t of ['BigInt64Array', 'BigUint64Array'])
            e.prototype['$' + t] = function (n) {
                return `${t}[${n.join('n,')}${n.length > 0 ? 'n' : ''}]`;
            };
        return e;
    })(),
    Oy = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225],
    xy = [
        1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216,
        310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522,
        264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488,
        -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
        1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479,
        -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
        1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817,
        -965641998,
    ],
    ky = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
    Wt = [];
class My {
    _data = new hn();
    _hash = new hn([...Oy]);
    _nDataBytes = 0;
    _minBufferSize = 0;
    finalize(t) {
        t && this._append(t);
        const n = this._nDataBytes * 8,
            s = this._data.sigBytes * 8;
        return (
            (this._data.words[s >>> 5] |= 128 << (24 - (s % 32))),
            (this._data.words[(((s + 64) >>> 9) << 4) + 14] = Math.floor(n / 4294967296)),
            (this._data.words[(((s + 64) >>> 9) << 4) + 15] = n),
            (this._data.sigBytes = this._data.words.length * 4),
            this._process(),
            this._hash
        );
    }
    _doProcessBlock(t, n) {
        const s = this._hash.words;
        let r = s[0],
            o = s[1],
            i = s[2],
            a = s[3],
            l = s[4],
            f = s[5],
            c = s[6],
            u = s[7];
        for (let d = 0; d < 64; d++) {
            if (d < 16) Wt[d] = t[n + d] | 0;
            else {
                const y = Wt[d - 15],
                    v = ((y << 25) | (y >>> 7)) ^ ((y << 14) | (y >>> 18)) ^ (y >>> 3),
                    E = Wt[d - 2],
                    N = ((E << 15) | (E >>> 17)) ^ ((E << 13) | (E >>> 19)) ^ (E >>> 10);
                Wt[d] = v + Wt[d - 7] + N + Wt[d - 16];
            }
            const h = (l & f) ^ (~l & c),
                _ = (r & o) ^ (r & i) ^ (o & i),
                g = ((r << 30) | (r >>> 2)) ^ ((r << 19) | (r >>> 13)) ^ ((r << 10) | (r >>> 22)),
                S = ((l << 26) | (l >>> 6)) ^ ((l << 21) | (l >>> 11)) ^ ((l << 7) | (l >>> 25)),
                b = u + S + h + xy[d] + Wt[d],
                w = g + _;
            ((u = c), (c = f), (f = l), (l = (a + b) | 0), (a = i), (i = o), (o = r), (r = (b + w) | 0));
        }
        ((s[0] = (s[0] + r) | 0),
            (s[1] = (s[1] + o) | 0),
            (s[2] = (s[2] + i) | 0),
            (s[3] = (s[3] + a) | 0),
            (s[4] = (s[4] + l) | 0),
            (s[5] = (s[5] + f) | 0),
            (s[6] = (s[6] + c) | 0),
            (s[7] = (s[7] + u) | 0));
    }
    _append(t) {
        (typeof t == 'string' && (t = hn.fromUtf8(t)), this._data.concat(t), (this._nDataBytes += t.sigBytes));
    }
    _process(t) {
        let n,
            s = this._data.sigBytes / 64;
        t ? (s = Math.ceil(s)) : (s = Math.max((s | 0) - this._minBufferSize, 0));
        const r = s * 16,
            o = Math.min(r * 4, this._data.sigBytes);
        if (r) {
            for (let i = 0; i < r; i += 16) this._doProcessBlock(this._data.words, i);
            ((n = this._data.words.splice(0, r)), (this._data.sigBytes -= o));
        }
        return new hn(n, o);
    }
}
class hn {
    words;
    sigBytes;
    constructor(t, n) {
        ((t = this.words = t || []), (this.sigBytes = n === void 0 ? t.length * 4 : n));
    }
    static fromUtf8(t) {
        const n = unescape(encodeURIComponent(t)),
            s = n.length,
            r = [];
        for (let o = 0; o < s; o++) r[o >>> 2] |= (n.charCodeAt(o) & 255) << (24 - (o % 4) * 8);
        return new hn(r, s);
    }
    toBase64() {
        const t = [];
        for (let n = 0; n < this.sigBytes; n += 3) {
            const s = (this.words[n >>> 2] >>> (24 - (n % 4) * 8)) & 255,
                r = (this.words[(n + 1) >>> 2] >>> (24 - ((n + 1) % 4) * 8)) & 255,
                o = (this.words[(n + 2) >>> 2] >>> (24 - ((n + 2) % 4) * 8)) & 255,
                i = (s << 16) | (r << 8) | o;
            for (let a = 0; a < 4 && n * 8 + a * 6 < this.sigBytes * 8; a++)
                t.push(ky.charAt((i >>> (6 * (3 - a))) & 63));
        }
        return t.join('');
    }
    concat(t) {
        if (
            ((this.words[this.sigBytes >>> 2] &= 4294967295 << (32 - (this.sigBytes % 4) * 8)),
            (this.words.length = Math.ceil(this.sigBytes / 4)),
            this.sigBytes % 4)
        )
            for (let n = 0; n < t.sigBytes; n++) {
                const s = (t.words[n >>> 2] >>> (24 - (n % 4) * 8)) & 255;
                this.words[(this.sigBytes + n) >>> 2] |= s << (24 - ((this.sigBytes + n) % 4) * 8);
            }
        else for (let n = 0; n < t.sigBytes; n += 4) this.words[(this.sigBytes + n) >>> 2] = t.words[n >>> 2];
        this.sigBytes += t.sigBytes;
    }
}
function Dy(e) {
    return new My().finalize(e).toBase64();
}
function un(e) {
    return Dy(Ay(e));
}
const Ny = { trailing: !0 };
function Ly(e, t = 25, n = {}) {
    if (((n = { ...Ny, ...n }), !Number.isFinite(t))) throw new TypeError('Expected `wait` to be a finite number');
    let s,
        r,
        o = [],
        i,
        a;
    const l = (u, d) => (
            (i = $y(e, u, d)),
            i.finally(() => {
                if (((i = null), n.trailing && a && !r)) {
                    const h = l(u, a);
                    return ((a = null), h);
                }
            }),
            i
        ),
        f = function (...u) {
            return (
                n.trailing && (a = u),
                i ||
                    new Promise((d) => {
                        const h = !r && n.leading;
                        (clearTimeout(r),
                            (r = setTimeout(() => {
                                r = null;
                                const _ = n.leading ? s : l(this, u);
                                a = null;
                                for (const g of o) g(_);
                                o = [];
                            }, t)),
                            h ? ((s = l(this, u)), d(s)) : o.push(d));
                    })
            );
        },
        c = (u) => {
            u && (clearTimeout(u), (r = null));
        };
    return (
        (f.isPending = () => !!r),
        (f.cancel = () => {
            (c(r), (o = []), (a = null));
        }),
        (f.flush = () => {
            if ((c(r), !a || i)) return;
            const u = a;
            return ((a = null), l(this, u));
        }),
        f
    );
}
async function $y(e, t, n) {
    return await e.apply(t, n);
}
const By = Symbol.for('nuxt:client-only');
function Bc(e) {
    return Object.defineProperty(
        function () {
            throw new Error(`[nuxt] \`${e.name}\` is a compiler macro and cannot be called at runtime.`);
        },
        '__nuxt_factory',
        { enumerable: !1, get: () => e.factory },
    );
}
const Hc = Bc({
        name: 'createUseAsyncData',
        factory(e = {}) {
            function t(...n) {
                const s = typeof n[n.length - 1] == 'string' ? n.pop() : void 0;
                jy(n[0], n[1]) && n.unshift(s);
                let [r, o, i = {}] = n,
                    a = !1;
                const l = Ie(() => lt(r));
                if (typeof l.value != 'string') throw new TypeError('[nuxt] [useAsyncData] key must be a string.');
                if (typeof o != 'function') throw new TypeError('[nuxt] [useAsyncData] handler must be a function.');
                const f = typeof e == 'function',
                    c = we(),
                    u = f ? e(i) : e;
                if (!f) for (const w in u) u[w] !== void 0 && i[w] === void 0 && (i[w] = u[w]);
                if (
                    ((i.server ??= !0),
                    (i.default ??= Uy),
                    (i.getCachedData ??= Fc),
                    (i.lazy ??= !1),
                    (i.immediate ??= !0),
                    (i.deep ??= kd.deep),
                    (i.dedupe ??= 'cancel'),
                    f)
                )
                    for (const w in u) u[w] !== void 0 && (i[w] = u[w]);
                c._asyncData[l.value];
                function d() {
                    const w = { cause: 'initial', dedupe: i.dedupe };
                    return (
                        c._asyncData[l.value]?._init ||
                            ((w.cachedData = i.getCachedData(l.value, c, { cause: 'initial' })),
                            (c._asyncData[l.value] = fa(c, l.value, o, i, w.cachedData))),
                        () => c._asyncData[l.value].execute(w)
                    );
                }
                const h = d(),
                    _ = c._asyncData[l.value];
                _._deps++;
                const g = i.server !== !1 && c.payload.serverRendered;
                {
                    let w = function (P) {
                        const C = c._asyncData[P];
                        C?._deps && (C._deps--, C._deps === 0 && C?._off());
                    };
                    const y = Lt();
                    if ((y && g && i.immediate && !y.sp && (y.sp = []), y && !y._nuxtOnBeforeMountCbs)) {
                        y._nuxtOnBeforeMountCbs = [];
                        const P = y._nuxtOnBeforeMountCbs;
                        (il(() => {
                            (P.forEach((C) => {
                                C();
                            }),
                                P.splice(0, P.length));
                        }),
                            wo(() => P.splice(0, P.length)));
                    }
                    const v = y && (y._nuxtClientOnly || De(By, !1));
                    g && c.isHydrating && (_.error.value || _.data.value !== void 0)
                        ? (_.status.value = _.error.value ? 'error' : 'success')
                        : y && ((!v && c.payload.serverRendered && c.isHydrating) || i.lazy) && i.immediate
                          ? y._nuxtOnBeforeMountCbs.push(h)
                          : i.immediate && _.status.value !== 'success' && h();
                    const E = qs(),
                        N = Yt(
                            l,
                            (P, C) => {
                                if ((P || C) && P !== C) {
                                    a = !0;
                                    const x = c._asyncData[C]?.data.value !== void 0,
                                        q = c._asyncDataPromises[C] !== void 0,
                                        A = { cause: 'initial', dedupe: i.dedupe };
                                    if (!c._asyncData[P]?._init) {
                                        let U;
                                        (C && x
                                            ? (U = c._asyncData[C].data.value)
                                            : ((U = i.getCachedData(P, c, { cause: 'initial' })), (A.cachedData = U)),
                                            (c._asyncData[P] = fa(c, P, o, i, U)));
                                    }
                                    (c._asyncData[P]._deps++,
                                        C && w(C),
                                        (i.immediate || x || q) && c._asyncData[P].execute(A),
                                        Qn(() => {
                                            a = !1;
                                        }));
                                }
                            },
                            { flush: 'sync' },
                        ),
                        D = i.watch
                            ? Yt(i.watch, () => {
                                  a ||
                                      (c._asyncData[l.value]?._execute.isPending() &&
                                          Qn(() => {
                                              c._asyncData[l.value]?._execute.flush();
                                          }),
                                      c._asyncData[l.value]?._execute({ cause: 'watch', dedupe: i.dedupe }));
                              })
                            : () => {};
                    E &&
                        Ta(() => {
                            (N(), D(), w(l.value));
                        });
                }
                const S = {
                        data: gs(() => c._asyncData[l.value]?.data),
                        pending: gs(() => c._asyncData[l.value]?.pending),
                        status: gs(() => c._asyncData[l.value]?.status),
                        error: gs(() => c._asyncData[l.value]?.error),
                        refresh: (...w) => (c._asyncData[l.value]?._init ? c._asyncData[l.value].execute(...w) : d()()),
                        execute: (...w) => S.refresh(...w),
                        clear: () => {
                            const w = c._asyncData[l.value];
                            if (w?._abortController)
                                try {
                                    w._abortController.abort(
                                        new DOMException('AsyncData aborted by user.', 'AbortError'),
                                    );
                                } finally {
                                    w._abortController = void 0;
                                }
                            jc(c, l.value);
                        },
                    },
                    b = Promise.resolve(c._asyncDataPromises[l.value]).then(() => S);
                return (
                    Object.assign(b, S),
                    Object.defineProperties(b, {
                        then: { enumerable: !0, value: b.then.bind(b) },
                        catch: { enumerable: !0, value: b.catch.bind(b) },
                        finally: { enumerable: !0, value: b.finally.bind(b) },
                    }),
                    b
                );
            }
            return t;
        },
    }),
    Hy = Hc.__nuxt_factory();
Hc.__nuxt_factory({ lazy: !0, _functionName: 'useLazyAsyncData' });
function gs(e) {
    return Ie({
        get() {
            return e()?.value;
        },
        set(t) {
            const n = e();
            n && (n.value = t);
        },
    });
}
function jy(e, t) {
    return !(
        typeof e == 'string' ||
        (typeof e == 'object' && e !== null) ||
        (typeof e == 'function' && typeof t == 'function')
    );
}
function jc(e, t) {
    (t in e.payload.data && (e.payload.data[t] = void 0),
        t in e.payload._errors && (e.payload._errors[t] = void 0),
        e._asyncData[t] &&
            ((e._asyncData[t].data.value = le(e._asyncData[t]._default())),
            (e._asyncData[t].error.value = void 0),
            (e._asyncData[t].status.value = 'idle')),
        t in e._asyncDataPromises && (e._asyncDataPromises[t] = void 0));
}
function Fy(e, t) {
    const n = {};
    for (const s of t) n[s] = e[s];
    return n;
}
function fa(e, t, n, s, r) {
    e.payload._errors[t] ??= void 0;
    const o = s.getCachedData !== Fc,
        i = n,
        a = s.deep ? pt : en,
        l = r !== void 0,
        f = e.hook('app:data:refresh', async (u) => {
            (!u || u.includes(t)) && (await c.execute({ cause: 'refresh:hook' }));
        }),
        c = {
            data: a(l ? r : s.default()),
            pending: Ie(() => c.status.value === 'pending'),
            error: Wa(e.payload._errors, t),
            status: en('idle'),
            execute: (...u) => {
                const [d, h = void 0] = u,
                    _ = d && h === void 0 && typeof d == 'object' ? d : {};
                if (e._asyncDataPromises[t] && (_.dedupe ?? s.dedupe) === 'defer') return e._asyncDataPromises[t];
                {
                    const b =
                        'cachedData' in _
                            ? _.cachedData
                            : s.getCachedData(t, e, { cause: _.cause ?? 'refresh:manual' });
                    if (b !== void 0)
                        return (
                            (e.payload.data[t] = c.data.value = b),
                            (c.error.value = void 0),
                            (c.status.value = 'success'),
                            Promise.resolve(b)
                        );
                }
                (c._abortController &&
                    c._abortController.abort(
                        new DOMException('AsyncData request cancelled by deduplication', 'AbortError'),
                    ),
                    (c._abortController = new AbortController()),
                    (c.status.value = 'pending'));
                const g = new AbortController(),
                    S = new Promise((b, w) => {
                        try {
                            const y = _.timeout ?? s.timeout,
                                v = Wy([c._abortController?.signal, _?.signal], g.signal, y);
                            if (v.aborted) {
                                const E = v.reason;
                                w(E instanceof Error ? E : new DOMException(String(E ?? 'Aborted'), 'AbortError'));
                                return;
                            }
                            return (
                                v.addEventListener(
                                    'abort',
                                    () => {
                                        const E = v.reason;
                                        w(
                                            E instanceof Error
                                                ? E
                                                : new DOMException(String(E ?? 'Aborted'), 'AbortError'),
                                        );
                                    },
                                    { once: !0, signal: g.signal },
                                ),
                                Promise.resolve(i(e, { signal: v })).then(b, w)
                            );
                        } catch (y) {
                            w(y);
                        }
                    })
                        .then(async (b) => {
                            let w = b;
                            (s.transform && (w = await s.transform(b)),
                                s.pick && (w = Fy(w, s.pick)),
                                (e.payload.data[t] = w),
                                (c.data.value = w),
                                (c.error.value = void 0),
                                (c.status.value = 'success'));
                        })
                        .catch((b) => {
                            if (
                                (e._asyncDataPromises[t] && e._asyncDataPromises[t] !== S) ||
                                c._abortController?.signal.aborted
                            )
                                return e._asyncDataPromises[t];
                            if (typeof DOMException < 'u' && b instanceof DOMException && b.name === 'AbortError')
                                return ((c.status.value = 'idle'), e._asyncDataPromises[t]);
                            ((c.error.value = Dt(b)), (c.data.value = le(s.default())), (c.status.value = 'error'));
                        })
                        .finally(() => {
                            (g.abort(), delete e._asyncDataPromises[t]);
                        });
                return ((e._asyncDataPromises[t] = S), e._asyncDataPromises[t]);
            },
            _execute: Ly((...u) => c.execute(...u), 0, { leading: !0 }),
            _default: s.default,
            _deps: 0,
            _init: !0,
            _hash: void 0,
            _off: () => {
                (f(),
                    e._asyncData[t]?._init && (e._asyncData[t]._init = !1),
                    o ||
                        Rn(() => {
                            e._asyncData[t]?._init || (jc(e, t), (c.execute = () => Promise.resolve()));
                        }));
            },
        };
    return c;
}
const Uy = () => {},
    Fc = (e, t, n) => {
        if (t.isHydrating) return t.payload.data[e];
        if (n.cause !== 'refresh:manual' && n.cause !== 'refresh:hook') return t.static.data[e];
    };
function Wy(e, t, n) {
    const s = e.filter((i) => !!i);
    if (typeof n == 'number' && n >= 0) {
        const i = AbortSignal.timeout?.(n);
        i && s.push(i);
    }
    if (AbortSignal.any) return AbortSignal.any(s);
    const r = new AbortController();
    for (const i of s)
        if (i.aborted) {
            const a = i.reason ?? new DOMException('Aborted', 'AbortError');
            try {
                r.abort(a);
            } catch {
                r.abort();
            }
            return r.signal;
        }
    const o = () => {
        const a = s.find((l) => l.aborted)?.reason ?? new DOMException('Aborted', 'AbortError');
        try {
            r.abort(a);
        } catch {
            r.abort();
        }
    };
    for (const i of s) i.addEventListener?.('abort', o, { once: !0, signal: t });
    return r.signal;
}
function Vy(e) {
    const t = [lt(e.method)?.toUpperCase() || 'GET', lt(e.baseURL)];
    for (const n of [e.query || e.params]) {
        const s = lt(n);
        if (!s) continue;
        const r = {};
        for (const [o, i] of Object.entries(s)) r[lt(o)] = lt(i);
        t.push(r);
    }
    if (e.body) {
        const n = lt(e.body);
        if (!n) t.push(un(n));
        else if (n instanceof ArrayBuffer)
            t.push(un(Object.fromEntries([...new Uint8Array(n).entries()].map(([s, r]) => [s, r.toString()]))));
        else if (n instanceof FormData) {
            const s = {};
            for (const r of n.entries()) {
                const [o, i] = r;
                s[o] = i instanceof File ? i.name : i;
            }
            t.push(un(s));
        } else if (io(n)) t.push(un(tt(n)));
        else
            try {
                t.push(un(n));
            } catch {
                console.warn('[useFetch] Failed to hash body', n);
            }
    }
    return t;
}
const Uc = Bc({
    name: 'createUseFetch',
    factory(e = {}) {
        function t(n, s, r) {
            const [o = {}, i] = typeof s == 'string' ? [{}, s] : [s, r],
                a = Ie(() => lt(n)),
                l = Ie(() => lt(o.key) || '$f' + un([i, typeof a.value == 'string' ? a.value : '', ...Vy(o)]));
            if (!o.baseURL && typeof a.value == 'string' && a.value[0] === '/' && a.value[1] === '/')
                throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
            const f = typeof e == 'function' ? e(o) : e,
                {
                    server: c,
                    lazy: u,
                    default: d,
                    transform: h,
                    pick: _,
                    watch: g,
                    immediate: S,
                    getCachedData: b,
                    deep: w,
                    dedupe: y,
                    timeout: v,
                    ...E
                } = { ...(typeof e == 'function' ? {} : f), ...o, ...(typeof e == 'function' ? f : {}) },
                N = tt({ ...Md, ...E, cache: typeof E.cache == 'boolean' ? void 0 : E.cache }),
                D = {
                    server: c,
                    lazy: u,
                    default: d,
                    transform: h,
                    pick: _,
                    immediate: S,
                    getCachedData: b,
                    deep: w,
                    dedupe: y,
                    timeout: v,
                    watch: g === !1 ? [] : [...(g || []), N],
                };
            return Hy(
                g === !1 ? l.value : l,
                (C, { signal: x }) => (o.$fetch || globalThis.$fetch)(a.value, { signal: x, ...N }),
                D,
            );
        }
        return t;
    },
});
Uc.__nuxt_factory();
Uc.__nuxt_factory({ lazy: !0, _functionName: 'useLazyFetch' });
function qy(e) {
    if (e?.__asyncLoader && !e.__asyncResolved) return e.__asyncLoader();
}
async function Gy(e, t = yt()) {
    const { path: n, matched: s } = t.resolve(e);
    if (!s.length || ((t._routePreloaded ||= new Set()), t._routePreloaded.has(n))) return;
    const r = (t._preloadPromises ||= []);
    if (r.length > 4) return Promise.all(r).then(() => Gy(e, t));
    t._routePreloaded.add(n);
    for (const o of s) {
        const i = o.components?.default;
        if (typeof i != 'function') continue;
        const a = Promise.resolve(i())
            .catch(() => {})
            .finally(() => r.splice(r.indexOf(a), 1));
        r.push(a);
    }
    await Promise.all(r);
}
const Ky = Ue({
        name: 'pinia',
        setup(e) {
            const t = ep();
            return (
                e.vueApp.use(t),
                In(t),
                e.payload && e.payload.pinia && (t.state.value = e.payload.pinia),
                { provide: { pinia: t } }
            );
        },
        hooks: {
            'app:rendered'() {
                const e = we();
                ((e.payload.pinia = ne(e.$pinia).state.value), In(void 0));
            },
        },
    }),
    Jy = Ue({ name: 'nuxt:global-components' }),
    ys = {},
    Qy = Ue({
        name: 'nuxt:prefetch',
        setup(e) {
            const t = yt();
            (e.hooks.hook('app:mounted', () => {
                t.beforeEach(async (n) => {
                    const s = n?.meta?.layout;
                    s && typeof ys[s] == 'function' && (await ys[s]());
                });
            }),
                e.hooks.hook('link:prefetch', (n) => {
                    if (Pn(n)) return;
                    const s = t.resolve(n);
                    if (!s) return;
                    const r = s.meta.layout;
                    let o = Lc(s.meta.middleware);
                    o = o.filter((i) => typeof i == 'string');
                    for (const i of o) typeof to[i] == 'function' && to[i]();
                    typeof r == 'string' && r in ys && qy(ys[r]);
                }));
        },
    }),
    $o = (function () {
        function e(n, s) {
            return s == 'g' ? n * 1e3 : s == 'kg' ? n * 1e6 : s == 'oz' ? n * 28349.5 : s == 'lb' ? n * 453592 : 0;
        }
        function t(n, s, r = !1) {
            if (s == 'g') return Math.round((100 * n) / 1e3) / 100;
            if (s == 'kg') return Math.round((100 * n) / 1e6) / 100;
            if (s == 'oz') return Math.round((100 * n) / 28349.5) / 100;
            if (s == 'lb') {
                if (r) {
                    const o = n / 453592,
                        i = Math.floor(o),
                        a = Math.round((o % 1) * 16 * 100) / 100;
                    let l = '';
                    return (
                        i && ((l += `${i}lb`), i > 1 && (l += 's')),
                        (a || !i) && (l && (l += ' '), (l += `${a}oz`)),
                        l
                    );
                }
                return Math.round((100 * n) / 453592) / 100;
            }
            return 0;
        }
        return { WeightToMg: e, MgToWeight: t };
    })(),
    Sr = (function () {
        function e(l, f) {
            if (f) {
                const u = n(f);
                return (
                    (u.s -= Math.round((u.s / 10) * (l % 10))),
                    (u.v += Math.round(((100 - u.v) / 10) * (l % 10))),
                    t(u)
                );
            }
            const c = [
                { r: 27, g: 119, b: 211 },
                { r: 206, g: 24, b: 54 },
                { r: 242, g: 208, b: 0 },
                { r: 122, g: 179, b: 23 },
                { r: 130, g: 33, b: 198 },
                { r: 232, g: 110, b: 28 },
                { r: 220, g: 242, b: 51 },
                { r: 86, g: 174, b: 226 },
                { r: 226, g: 86, b: 174 },
                { r: 226, g: 137, b: 86 },
                { r: 86, g: 226, b: 207 },
            ];
            return c[l % c.length];
        }
        function t(l) {
            let f = 0,
                c = 0,
                u = 0,
                d,
                h,
                _,
                g,
                S;
            const b = l.h / 360,
                w = l.s / 100,
                y = l.v / 100;
            switch (
                ((d = Math.floor(b * 6)),
                (h = b * 6 - d),
                (_ = y * (1 - w)),
                (g = y * (1 - h * w)),
                (S = y * (1 - (1 - h) * w)),
                d % 6)
            ) {
                case 0:
                    ((f = y), (c = S), (u = _));
                    break;
                case 1:
                    ((f = g), (c = y), (u = _));
                    break;
                case 2:
                    ((f = _), (c = y), (u = S));
                    break;
                case 3:
                    ((f = _), (c = g), (u = y));
                    break;
                case 4:
                    ((f = S), (c = _), (u = y));
                    break;
                case 5:
                    ((f = y), (c = _), (u = g));
                    break;
            }
            return { r: Math.floor(f * 255), g: Math.floor(c * 255), b: Math.floor(u * 255) };
        }
        function n(l) {
            let f, c, u;
            const d = l.r / 255,
                h = l.g / 255,
                _ = l.b / 255;
            let g = 0,
                S = 0;
            const b = Math.max(d, h, _),
                w = b - Math.min(d, h, _),
                y = function (v) {
                    return (b - v) / 6 / w + 1 / 2;
                };
            return (
                w == 0
                    ? (g = S = 0)
                    : ((S = w / b),
                      (f = y(d)),
                      (c = y(h)),
                      (u = y(_)),
                      d === b ? (g = u - c) : h === b ? (g = 1 / 3 + f - u) : _ === b && (g = 2 / 3 + c - f),
                      g < 0 ? (g += 1) : g > 1 && (g -= 1)),
                { h: Math.round(g * 360), s: Math.round(S * 100), v: Math.round(b * 100) }
            );
        }
        function s(l) {
            return `rgb(${l.r},${l.g},${l.b})`;
        }
        function r(l) {
            const c = l.substring(4, l.length - 1).split(',');
            return { r: parseInt(c[0]), g: parseInt(c[1]), b: parseInt(c[2]) };
        }
        function o(l) {
            const f = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(l);
            return f ? { r: parseInt(f[1], 16), g: parseInt(f[2], 16), b: parseInt(f[3], 16) } : null;
        }
        function i(l) {
            return `#${a(l.r)}${a(l.g)}${a(l.b)}`;
        }
        function a(l) {
            const f = l.toString(16);
            return f.length == 1 ? `0${f}` : f;
        }
        return { getColor: e, hsvToRgb: t, rgbToHsv: n, rgbToString: s, stringToRgb: r, hexToRgb: o, rgbToHex: i };
    })(),
    ha = { images: !1, price: !1, worn: !0, consumable: !0, listDescription: !1 };
class da {
    constructor({ id: t, unit: n }) {
        ((this.id = t),
            (this.name = ''),
            (this.description = ''),
            (this.weight = 0),
            (this.authorUnit = 'oz'),
            n && (this.authorUnit = n),
            (this.price = 0),
            (this.image = ''),
            (this.imageUrl = ''),
            (this.url = ''));
    }
    save() {
        return this;
    }
    load(t) {
        (Object.assign(this, t), typeof this.price == 'string' && (this.price = parseFloat(this.price)));
    }
}
class pa {
    constructor({ library: t, id: n, _isNew: s }) {
        ((this.library = t),
            (this.id = n),
            (this.name = ''),
            (this.categoryItems = []),
            (this.subtotalWeight = 0),
            (this.subtotalWornWeight = 0),
            (this.subtotalConsumableWeight = 0),
            (this.subtotalPrice = 0),
            (this.subtotalConsumablePrice = 0),
            (this.subtotalQty = 0),
            (this._isNew = s));
    }
    addItem(t) {
        const n = { qty: 1, worn: 0, consumable: !1, star: 0, itemId: null, _isNew: !1 };
        (Object.assign(n, t), this.categoryItems.push(n));
    }
    updateCategoryItem(t) {
        const n = this.getCategoryItemById(t.itemId);
        n && Object.assign(n, t);
    }
    removeItem(t) {
        const n = this.getCategoryItemById(t),
            s = this.categoryItems.indexOf(n);
        this.categoryItems.splice(s, 1);
    }
    calculateSubtotal() {
        ((this.subtotalWeight = 0),
            (this.subtotalWornWeight = 0),
            (this.subtotalConsumableWeight = 0),
            (this.subtotalPrice = 0),
            (this.subtotalConsumablePrice = 0),
            (this.subtotalQty = 0));
        for (const t in this.categoryItems) {
            const n = this.categoryItems[t],
                s = this.library.getItemById(n.itemId);
            s &&
                ((this.subtotalWeight += s.weight * n.qty),
                (this.subtotalPrice += s.price * n.qty),
                this.library.optionalFields.worn &&
                    n.worn &&
                    (this.subtotalWornWeight += s.weight * (n.qty > 0 ? 1 : 0)),
                this.library.optionalFields.consumable &&
                    n.consumable &&
                    ((this.subtotalConsumableWeight += s.weight * n.qty),
                    (this.subtotalConsumablePrice += s.price * n.qty)),
                (this.subtotalQty += n.qty));
        }
    }
    getCategoryItemById(t) {
        for (const n in this.categoryItems) {
            const s = this.categoryItems[n];
            if (s.itemId === t) return s;
        }
        return null;
    }
    getExtendedItemByIndex(t) {
        const n = this.categoryItems[t],
            s = this.library.getItemById(n.itemId),
            r = Object.assign({}, s);
        return (Object.assign(r, n), r);
    }
    save() {
        const t = Object.assign({}, this);
        return (delete t.library, delete t.template, delete t._isNew, t);
    }
    load(t) {
        (delete t._isNew,
            Object.assign(this, t),
            this.categoryItems.forEach((n, s) => {
                (delete n._isNew,
                    typeof n.price < 'u' && delete n.price,
                    n.star || (n.star = 0),
                    this.library.getItemById(n.itemId) || this.categoryItems.splice(s, 1));
            }));
    }
}
class ga {
    constructor({ id: t, library: n }) {
        ((this.library = n),
            (this.id = t),
            (this.name = ''),
            (this.categoryIds = []),
            (this.chart = null),
            (this.description = ''),
            (this.externalId = ''),
            (this.totalWeight = 0),
            (this.totalWornWeight = 0),
            (this.totalConsumableWeight = 0),
            (this.totalBaseWeight = 0),
            (this.totalPackWeight = 0),
            (this.totalPrice = 0),
            (this.totalConsumablePrice = 0),
            (this.totalQty = 0));
    }
    addCategory(t) {
        this.categoryIds.push(t);
    }
    removeCategory(t) {
        const n = parseInt(t);
        let s = this.categoryIds.indexOf(n);
        return s === -1 && ((s = this.categoryIds.indexOf(`${n}`)), s === -1)
            ? (console.warn(`Unable to delete category, it does not exist in this list:${n}`), !1)
            : (this.categoryIds.splice(s, 1), !0);
    }
    renderChart(t, n = !0) {
        const s = { points: {}, total: 0 };
        let r = 0;
        for (const i in this.categoryIds) {
            const a = this.library.getCategoryById(this.categoryIds[i]);
            a &&
                (a.calculateSubtotal(),
                t === 'consumable'
                    ? (r += a.subtotalConsumableWeight)
                    : t === 'worn'
                      ? (r += a.subtotalWornWeight)
                      : t === 'base'
                        ? (r += a.subtotalWeight - (a.subtotalConsumableWeight + a.subtotalWornWeight))
                        : (r += a.subtotalWeight));
        }
        if (!r) return !1;
        const o = function (i, a, l) {
            return `${i}: ${$o.MgToWeight(a, l)} ${l}`;
        };
        for (const i in this.categoryIds) {
            const a = this.library.getCategoryById(this.categoryIds[i]);
            if (a) {
                const l = {};
                let f;
                t === 'consumable'
                    ? (f = a.subtotalConsumableWeight)
                    : t === 'worn'
                      ? (f = a.subtotalWornWeight)
                      : t === 'base'
                        ? (f = a.subtotalWeight - (a.subtotalConsumableWeight + a.subtotalWornWeight))
                        : (f = a.subtotalWeight);
                const c = a.color || Sr.getColor(+i);
                a.displayColor = Sr.rgbToString(c);
                const u = {};
                for (const _ in a.categoryItems) {
                    const g = a.getExtendedItemByIndex(_);
                    let S = g.weight * g.qty;
                    S || (S = 0);
                    let b = o(g.name, S, g.authorUnit);
                    const w = Sr.getColor(+_, c);
                    g.qty > 1 && (b += ` x ${g.qty}`);
                    const y = S / f,
                        v = { value: S, id: g.id, name: b, color: w, percent: y };
                    (n && (v.parent = u), (l[_] = v));
                }
                const d = f / r,
                    h = {
                        points: l,
                        color: a.color,
                        id: a.id,
                        name: o(a.name, f, this.library.totalUnit),
                        total: f,
                        percent: d,
                        visiblePoints: !1,
                    };
                (n && (h.parent = s), Object.assign(u, h), (s.points[i] = u));
            }
        }
        return ((s.total = r), s);
    }
    calculateTotals() {
        let t = 0,
            n = 0,
            s = 0,
            r = 0,
            o = 0,
            i = 0,
            a = 0,
            l = 0;
        for (const f in this.categoryIds) {
            const c = this.library.getCategoryById(this.categoryIds[f]);
            c &&
                (c.calculateSubtotal(),
                (t += c.subtotalWeight),
                (s += c.subtotalWornWeight),
                (r += c.subtotalConsumableWeight),
                (n += c.subtotalPrice),
                (o += c.subtotalConsumablePrice),
                (l += c.subtotalQty));
        }
        ((i = t - (s + r)),
            (a = t - s),
            (this.totalWeight = t),
            (this.totalWornWeight = s),
            (this.totalConsumableWeight = r),
            (this.totalBaseWeight = i),
            (this.totalPackWeight = a),
            (this.totalPrice = n),
            (this.totalConsumablePrice = o),
            (this.totalQty = l));
    }
    save() {
        const t = Object.assign({}, this);
        return (delete t.library, delete t.chart, t);
    }
    load(t) {
        (Object.assign(this, t), this.calculateTotals());
    }
}
let Yy = class {
    constructor() {
        ((this.version = '0.3'),
            (this.idMap = {}),
            (this.items = []),
            (this.categories = []),
            (this.lists = []),
            (this.sequence = 0),
            (this.defaultListId = 1),
            (this.totalUnit = 'oz'),
            (this.itemUnit = 'oz'),
            (this.showSidebar = !0),
            (this.showImages = !1),
            (this.optionalFields = Object.assign({}, ha)),
            (this.currencySymbol = '$'),
            this.firstRun());
    }
    firstRun() {
        const t = this.newList(),
            n = this.newCategory({ list: t });
        this.newItem({ category: n });
    }
    newItem({ category: t, _isNew: n }) {
        const s = new da({ id: this.nextSequence(), unit: this.itemUnit });
        return (this.items.push(s), (this.idMap[s.id] = s), t && t.addItem({ itemId: s.id, _isNew: n }), s);
    }
    updateItem(t) {
        const n = this.getItemById(t.id);
        return (Object.assign(n, t), n);
    }
    removeItem(t) {
        const n = this.getItemById(t);
        for (const s in this.lists) {
            const r = this.findCategoryWithItemById(t, this.lists[s].id);
            r && r.removeItem(t);
        }
        return (this.items.splice(this.items.indexOf(n), 1), delete this.idMap[t], !0);
    }
    newCategory({ list: t, _isNew: n }) {
        const s = new pa({ id: this.nextSequence(), _isNew: n, library: this });
        return (this.categories.push(s), (this.idMap[s.id] = s), t && t.addCategory(s.id), s);
    }
    removeCategory(t, n) {
        const s = this.getCategoryById(t),
            r = this.findListWithCategoryById(t);
        return r && r.categoryIds.length === 1 && !n
            ? (alert("Can't remove the last category in a list!"), !1)
            : (r && r.removeCategory(t),
              this.categories.splice(this.categories.indexOf(s), 1),
              delete this.idMap[t],
              !0);
    }
    newList() {
        const t = new ga({ id: this.nextSequence(), library: this });
        return (this.lists.push(t), (this.idMap[t.id] = t), this.defaultListId || (this.defaultListId = t.id), t);
    }
    removeList(t) {
        if (this.lists.length === 1) return;
        const n = this.getListById(t);
        for (let s = 0; s < n.categoryIds.length; s++) this.removeCategory(n.categoryIds[s], !0);
        (this.lists.splice(this.lists.indexOf(n), 1),
            delete this.idMap[t],
            this.defaultListId === t && (this.defaultListId = this.lists.length > 0 ? this.lists[0].id : -1));
    }
    copyList(t) {
        const n = this.getListById(t);
        if (!n) return;
        const s = this.newList();
        s.name = `Copy of ${n.name}`;
        for (const r in n.categoryIds) {
            const o = this.getCategoryById(n.categoryIds[r]),
                i = this.newCategory({ list: s });
            i.name = o.name;
            for (const a in o.categoryItems) i.addItem(o.categoryItems[a]);
        }
        return s;
    }
    renderChart(t) {
        return this.getListById(this.defaultListId).renderChart(t);
    }
    getCategoryById(t) {
        return this.idMap[t];
    }
    getItemById(t) {
        return this.idMap[t];
    }
    getListById(t) {
        return this.idMap[t];
    }
    getItemsInCurrentList() {
        const t = [],
            n = this.getListById(this.defaultListId);
        for (let s = 0; s < n.categoryIds.length; s++) {
            const r = this.getCategoryById(n.categoryIds[s]);
            if (r)
                for (const o in r.categoryItems) {
                    const i = r.categoryItems[o];
                    t.push(i.itemId);
                }
        }
        return t;
    }
    findCategoryWithItemById(t, n) {
        if (n) {
            const s = this.getListById(n);
            for (const r in s.categoryIds) {
                const o = this.getCategoryById(s.categoryIds[r]);
                if (o) {
                    for (const i in o.categoryItems) if (o.categoryItems[i].itemId === t) return o;
                }
            }
        } else
            for (const s in this.categories) {
                const r = this.categories[s];
                if (r) {
                    for (const o in r.categoryItems) if (r.categoryItems[o].itemId === t) return r;
                }
            }
    }
    findListWithCategoryById(t) {
        for (const n in this.lists) {
            const s = this.lists[n];
            for (const r in s.categoryIds) if (s.categoryIds[r] === t) return s;
        }
    }
    nextSequence() {
        return ++this.sequence;
    }
    save() {
        const t = {};
        ((t.version = this.version),
            (t.totalUnit = this.totalUnit),
            (t.itemUnit = this.itemUnit),
            (t.defaultListId = this.defaultListId),
            (t.sequence = this.sequence),
            (t.showSidebar = this.showSidebar),
            (t.optionalFields = this.optionalFields),
            (t.currencySymbol = this.currencySymbol),
            (t.items = []));
        for (const n in this.items) t.items.push(this.items[n].save());
        t.categories = [];
        for (const n in this.categories) t.categories.push(this.categories[n].save());
        t.lists = [];
        for (const n in this.lists) t.lists.push(this.lists[n].save());
        return t;
    }
    load(t) {
        ((t.version === '0.1' || !t.version) && this.upgrade01to02(t),
            t.version === '0.2' && this.upgrade02to03(t),
            (this.items = []),
            Object.assign(this.optionalFields, t.optionalFields));
        for (const n in t.items) {
            const s = new da({ id: t.items[n].id });
            (s.load(t.items[n]), this.items.push(s), (this.idMap[s.id] = s));
        }
        this.categories = [];
        for (const n in t.categories) {
            const s = new pa({ id: t.categories[n].id, library: this });
            (s.load(t.categories[n]), this.categories.push(s), (this.idMap[s.id] = s));
        }
        this.lists = [];
        for (const n in t.lists) {
            const s = new ga({ id: t.lists[n].id, library: this });
            (s.load(t.lists[n]), this.lists.push(s), (this.idMap[s.id] = s));
        }
        (t.showSidebar && (this.showSidebar = t.showSidebar),
            t.totalUnit && (this.totalUnit = t.totalUnit),
            t.itemUnit && (this.itemUnit = t.itemUnit),
            t.currencySymbol && (this.currencySymbol = t.currencySymbol),
            (this.version = t.version),
            (this.sequence = t.sequence),
            (this.defaultListId = t.defaultListId));
    }
    upgrade01to02(t) {
        (t.optionalFields || (t.optionalFields = Object.assign({}, ha)),
            t.showImages ? (t.optionalFields.images = !0) : (t.optionalFields.images = !1),
            (t.version = '0.2'));
    }
    upgrade02to03(t) {
        (this.sequenceShouldBeCorrect(t),
            this.idsShouldBeInts(t),
            this.renameCategoryIds(t),
            this.fixDuplicateIds(t),
            (t.version = '0.3'));
    }
    sequenceShouldBeCorrect(t) {
        let n = 0;
        for (const s of t.lists) s.id > n && (n = s.id);
        for (const s of t.categories) s.id > n && (n = s.id);
        for (const s of t.items) s.id > n && (n = s.id);
        t.sequence = n + 1;
    }
    idsShouldBeInts(t) {
        for (const n of t.lists) n.categoryIds = n.categoryIds.map((s) => parseInt(s, 10));
    }
    renameCategoryIds(t) {
        for (const n of t.categories)
            (typeof n.itemIds < 'u' &&
                ((!n.categoryItems || n.categoryItems.length === 0) && (n.categoryItems = n.itemIds), delete n.itemIds),
                typeof n.categoryItems > 'u' && (n.categoryItems = []));
    }
    fixDuplicateIds(t) {
        const n = {};
        for (const s of t.items) (n[s.id] || (n[s.id] = []), n[s.id].push({ type: 'item', item: s }));
        for (const s of t.categories) (n[s.id] || (n[s.id] = []), n[s.id].push({ type: 'category', category: s }));
        for (const s of t.lists) (n[s.id] || (n[s.id] = []), n[s.id].push({ type: 'list', list: s }));
        for (const s in n)
            n[s].length > 1 &&
                n[s].forEach((o, i) => {
                    i !== 0 &&
                        (o.type === 'item'
                            ? this.updateItemId(t, o.item, ++t.sequence)
                            : o.type === 'category'
                              ? this.updateCategoryId(t, o.category, ++t.sequence)
                              : o.type === 'list' && this.updateListId(t, o.list, ++t.sequence));
                });
    }
    updateListId(t, n, s) {
        n.id = s;
    }
    updateCategoryId(t, n, s) {
        const r = n.id;
        n.id = s;
        for (const o of t.lists)
            o.categoryIds.forEach((i, a) => {
                i === r && (o.categoryIds[a] = s);
            });
    }
    updateItemId(t, n, s) {
        const r = n.id;
        n.id = s;
        for (const o of t.categories) for (const i of o.categoryItems) i.itemId === r && (i.itemId = s);
    }
};
const Xy = { Library: Yy };
class Tr extends Error {
    constructor(t, n = null) {
        (super(),
            (this.message = 'An error occurred, please try again later.'),
            (this.statusCode = n),
            (this.errors = null),
            (this.id = null),
            (this.metadata = null),
            t.message
                ? (this.message = t.message)
                : t.errors &&
                  t.errors instanceof Array &&
                  t.errors.length &&
                  t.errors[0].message &&
                  (this.message = t.errors[0].message),
            t.errors && (this.errors = t.errors));
    }
}
const Wc = (e, t) => {
    const n = { method: 'GET', headers: {} };
    (t && Object.assign(n, t),
        !n.body && !n.headers['Content-Type'] && (n.headers['Content-Type'] = 'application/json'));
    function s(r) {
        return new Promise((o, i) => {
            r.text()
                .then((a) => {
                    let l;
                    try {
                        l = a ? JSON.parse(a) : {};
                    } catch {
                        l = { message: r };
                    }
                    return o({ status: r.status, ok: r.ok, json: l });
                })
                .catch((a) => i(a));
        });
    }
    return new Promise((r, o) => {
        fetch(e, n)
            .then(s)
            .then((i) => {
                if (i.ok) return r(i.json);
                if (i.status && (i.status === 401 || i.status === 403)) {
                    ko('/signin');
                    return;
                }
                return i.json ? o(new Tr(i.json, i.status)) : o(new Tr(i));
            })
            .catch((i) => {
                const a = i && i instanceof TypeError && i.message === 'Failed to fetch' ? {} : i;
                return o(new Tr(a));
            });
    });
};
window.readCookie = function (e) {
    const t = `${e}=`,
        n = document.cookie.split(';');
    for (let s = 0; s < n.length; s++) {
        let r = n[s];
        for (; r.charAt(0) == ' '; ) r = r.substring(1, r.length);
        if (r.indexOf(t) == 0) return r.substring(t.length, r.length);
    }
    return null;
};
window.createCookie = function (e, t, n) {
    if (n) {
        const r = new Date();
        r.setTime(r.getTime() + n * 24 * 60 * 60 * 1e3);
        var s = `; expires=${r.toGMTString()}`;
    } else var s = '';
    document.cookie = `${e}=${t}${s}; path=/`;
};
window.getElementIndex = function (e) {
    let t = 0,
        n = e;
    for (; (n = n.previousElementSibling); ) t++;
    return t;
};
window.arrayMove = function (e, t, n) {
    const s = e.slice(),
        r = s[t];
    return (s.splice(t, 1), s.splice(n, 0, r), s);
};
window.displayWeight = function (e, t) {
    return $o.MgToWeight(e, t) || 0;
};
window.displayPrice = function (e, t) {
    let n = '0.00';
    return (typeof e == 'number' && (n = e.toFixed(2)), t + n);
};
const zy = Xy.Library,
    Vc = ip('lighterpack', {
        state: () => ({
            library: !1,
            isSaving: !1,
            syncToken: !1,
            saveType: null,
            lastSaveData: null,
            loggedIn: !1,
            directiveInstances: {},
            globalAlerts: [],
            activeModal: null,
            speedbump: null,
            importCSVTrigger: 0,
            activeItemDialog: null,
        }),
        getters: {
            activeList(e) {
                return e.library ? e.library.getListById(e.library.defaultListId) : null;
            },
        },
        actions: {
            setSaveType(e) {
                this.saveType = e;
            },
            setSyncToken(e) {
                this.syncToken = e;
            },
            setLastSaveData(e) {
                this.lastSaveData = e;
            },
            setIsSaving(e) {
                this.isSaving = e;
            },
            signout() {
                (fetch('/api/auth/signout', { method: 'POST', credentials: 'same-origin' }).catch(() => {}),
                    (this.library = !1),
                    (this.loggedIn = !1));
            },
            setLoggedIn(e) {
                this.loggedIn = e;
            },
            loadLibraryData(e) {
                const t = new zy();
                try {
                    const n = JSON.parse(e);
                    (t.load(n), (this.library = t));
                } catch {
                    this.globalAlerts.push({ message: 'An error occurred while loading your data.' });
                }
                this.lastSaveData = JSON.stringify(t.save());
            },
            clearLibraryData() {
                this.library = !1;
            },
            toggleSidebar() {
                this.library.showSidebar = !this.library.showSidebar;
            },
            setDefaultList(e) {
                ((this.library.defaultListId = e.id),
                    this.library.getListById(this.library.defaultListId).calculateTotals());
            },
            setTotalUnit(e) {
                this.library.totalUnit = e;
            },
            toggleOptionalField(e) {
                ((this.library.optionalFields[e] = !this.library.optionalFields[e]),
                    this.library.getListById(this.library.defaultListId).calculateTotals());
            },
            updateCurrencySymbol(e) {
                this.library.currencySymbol = e;
            },
            newItem({ category: e, _isNew: t }) {
                (this.library.newItem({ category: e, _isNew: t }),
                    this.library.getListById(this.library.defaultListId).calculateTotals());
            },
            newCategory(e) {
                const t = this.library.newCategory({ list: e, _isNew: !0 });
                (this.library.newItem({ category: t }),
                    this.library.getListById(this.library.defaultListId).calculateTotals());
            },
            newList() {
                const e = this.library.newList(),
                    t = this.library.newCategory({ list: e });
                (this.library.newItem({ category: t }), e.calculateTotals(), (this.library.defaultListId = e.id));
            },
            removeItem(e) {
                (this.library.removeItem(e.id), this.library.getListById(this.library.defaultListId).calculateTotals());
            },
            removeCategory(e) {
                this.library.removeCategory(e.id);
            },
            removeList(e) {
                this.library.removeList(e.id);
            },
            reorderList(e) {
                this.library.lists = arrayMove(this.library.lists, e.before, e.after);
            },
            reorderCategory(e) {
                const t = this.library.getListById(e.list.id);
                ((t.categoryIds = arrayMove(t.categoryIds, e.before, e.after)),
                    this.library.getListById(this.library.defaultListId).calculateTotals());
            },
            reorderItem(e) {
                const t = this.library.getItemById(e.itemId),
                    n = this.library.getCategoryById(e.categoryId),
                    s = this.library.getListById(e.list.id),
                    r = this.library.findCategoryWithItemById(t.id, s.id),
                    o = r.getCategoryItemById(t.id),
                    i = r.categoryItems.indexOf(o);
                (r === n
                    ? (n.categoryItems = arrayMove(n.categoryItems, i, e.dropIndex))
                    : (r.categoryItems.splice(i, 1), n.categoryItems.splice(e.dropIndex, 0, o)),
                    this.library.getListById(this.library.defaultListId).calculateTotals());
            },
            addItemToCategory(e) {
                const t = this.library.getItemById(e.itemId),
                    n = this.library.getCategoryById(e.categoryId);
                if (t && n) {
                    n.addItem({ itemId: t.id });
                    const s = n.getCategoryItemById(t.id),
                        r = n.categoryItems.indexOf(s);
                    (s && r !== -1 && (n.categoryItems = arrayMove(n.categoryItems, r, e.dropIndex)),
                        this.library.getListById(this.library.defaultListId).calculateTotals());
                }
            },
            updateListName(e) {
                const t = this.library.getListById(e.id);
                t.name = e.name;
            },
            updateListDescription(e) {
                const t = this.library.getListById(e.id);
                t.description = e.description;
            },
            setExternalId(e) {
                const t = this.library.getListById(e.list.id);
                t.externalId = e.externalId;
            },
            updateCategoryName(e) {
                const t = this.library.getCategoryById(e.id);
                ((t.name = e.name), this.library.getListById(this.library.defaultListId).calculateTotals());
            },
            updateCategoryColor(e) {
                const t = this.library.getCategoryById(e.id);
                t.color = e.color;
            },
            updateItem(e) {
                (this.library.updateItem(e), this.library.getListById(this.library.defaultListId).calculateTotals());
            },
            updateItemLink(e) {
                const t = this.library.getItemById(e.item.id);
                t.url = e.url;
            },
            updateItemImageUrl(e) {
                const t = this.library.getItemById(e.item.id);
                ((t.imageUrl = e.imageUrl), (this.library.optionalFields.images = !0));
            },
            updateItemImage(e) {
                const t = this.library.getItemById(e.item.id);
                ((t.image = e.image), (this.library.optionalFields.images = !0));
            },
            updateItemUnit(e) {
                this.library.itemUnit = e;
            },
            removeItemImage(e) {
                const t = this.library.getItemById(e.id);
                t.image = '';
            },
            updateCategoryItem(e) {
                (e.category.updateCategoryItem(e.categoryItem),
                    this.library.getListById(this.library.defaultListId).calculateTotals());
            },
            removeItemFromCategory(e) {
                (e.category.removeItem(e.itemId),
                    this.library.getListById(this.library.defaultListId).calculateTotals());
            },
            copyList(e) {
                const t = this.library.copyList(e);
                this.library.defaultListId = t.id;
            },
            importCSV(e) {
                const t = this.library.newList({});
                let n;
                const s = {};
                let r, o, i, a;
                t.name = e.name;
                for (a in e.data)
                    ((i = e.data[a]),
                        s[i.category]
                            ? (n = s[i.category])
                            : ((n = this.library.newCategory({ list: t })), (s[i.category] = n)),
                        (r = this.library.newItem({ category: n, _isNew: !1 })),
                        (o = n.getCategoryItemById(r.id)),
                        (r.name = i.name),
                        (r.description = i.description),
                        (o.qty = parseFloat(i.qty)),
                        (r.weight = $o.WeightToMg(parseFloat(i.weight), i.unit)),
                        (r.authorUnit = i.unit),
                        (n.name = i.category));
                (t.calculateTotals(), (this.library.defaultListId = t.id));
            },
            showModal(e) {
                this.activeModal = e;
            },
            closeModal() {
                this.activeModal = null;
            },
            initSpeedbump(e, t) {
                this.speedbump = { callback: e, options: t };
            },
            confirmSpeedbump() {
                (this.speedbump && typeof this.speedbump.callback == 'function' && this.speedbump.callback(!0),
                    (this.speedbump = null));
            },
            closeSpeedbump() {
                this.speedbump = null;
            },
            triggerImportCSV() {
                this.importCSVTrigger += 1;
            },
            openItemLinkDialog(e) {
                this.activeItemDialog = { type: 'link', item: e, imageUrl: null };
            },
            openItemImageDialog(e) {
                this.activeItemDialog = { type: 'image', item: e, imageUrl: null };
            },
            openViewImageDialog(e) {
                this.activeItemDialog = { type: 'viewImage', item: null, imageUrl: e };
            },
            closeItemDialog() {
                this.activeItemDialog = null;
            },
            addDirectiveInstance({ key: e, value: t }) {
                this.directiveInstances[e] = t;
            },
            removeDirectiveInstance(e) {
                delete this.directiveInstances[e];
            },
            init() {
                return localStorage.library
                    ? this.loadLocal()
                    : fetch('/api/auth/signin', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          credentials: 'same-origin',
                      })
                          .then((e) => (e.ok ? e.json() : null))
                          .then((e) => {
                              e &&
                                  (this.setSyncToken(e.syncToken),
                                  this.loadLibraryData(e.library),
                                  this.setSaveType('remote'),
                                  this.setLoggedIn(e.username));
                          })
                          .catch(() => {});
            },
            loadLocal() {
                const e = localStorage.library;
                (this.loadLibraryData(e), this.setSaveType('local'), this.setLoggedIn(!1));
            },
            loadRemote() {
                return Wc('/api/auth/signin', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'same-origin',
                })
                    .then((e) => {
                        (this.setSyncToken(e.syncToken),
                            this.loadLibraryData(e.library),
                            this.setSaveType('remote'),
                            this.setLoggedIn(e.username));
                    })
                    .catch((e) => {
                        if (e.status == 401) {
                            ko('/signin');
                            return;
                        }
                        return new Promise((t, n) => {
                            n('An error occurred while fetching your data, please try again later.');
                        });
                    });
            },
        },
    }),
    Rr = 1e4;
function Zy(e, t, { maxWait: n } = {}) {
    let s = null,
        r = null;
    return function (...o) {
        const i = Date.now();
        (r === null && (r = i), clearTimeout(s));
        const a = i - r;
        n && a >= n
            ? ((r = i), e(...o))
            : (s = setTimeout(() => {
                  ((r = null), (s = null), e(...o));
              }, t));
    };
}
const em = Ue(() => {
        const e = Vc(),
            t = Zy(
                (n) => {
                    if (!n.library) return;
                    const s = JSON.stringify(n.library.save());
                    if (s === n.lastSaveData) return;
                    const r = function () {
                        if (n.isSaving) {
                            setTimeout(() => e.setIsSaving(!1), Rr + 1);
                            return;
                        }
                        const o = JSON.stringify(n.library.save());
                        (e.setIsSaving(!0),
                            e.setLastSaveData(o),
                            Wc('/api/library/save', {
                                method: 'POST',
                                body: JSON.stringify({ syncToken: n.syncToken, username: n.loggedIn, data: o }),
                                headers: { 'Content-Type': 'application/json' },
                                credentials: 'same-origin',
                            })
                                .then((i) => {
                                    (e.setSyncToken(i.syncToken), e.setIsSaving(!1));
                                })
                                .catch((i) => {
                                    e.setIsSaving(!1);
                                    let a = 'An error occurred while attempting to save your data.';
                                    (i.json && i.json.status && (a = i.json.status),
                                        i.status == 401 ? ko('/signin') : alert(a));
                                }));
                    };
                    n.saveType === 'remote' ? r() : n.saveType === 'local' && (localStorage.library = s);
                },
                Rr,
                { maxWait: Rr * 3 },
            );
        e.$subscribe((n, s) => {
            const r = [
                'setIsSaving',
                'setSaveType',
                'setSyncToken',
                'setLastSaveData',
                'signout',
                'setLoggedIn',
                'loadLibraryData',
                'clearLibraryData',
            ];
            !s.library || r.indexOf(n.type.replace('lighterpack/', '')) > -1 || t(s);
        });
    }),
    tm = Ue((e) => {
        const t = Vc();
        e.vueApp.config.globalProperties.$store = t;
    }),
    nm = [Yp, zp, sg, Ey, Iy, Cy, Sy, Ry, Ky, Jy, Qy, em, tm],
    sm = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [s, r] of t) n[s] = r;
        return n;
    },
    rm = { name: 'App' };
function om(e, t, n, s, r, o) {
    const i = tf('router-view');
    return (Ke(), ut(i));
}
const im = sm(rm, [['render', om]]),
    am = {
        __name: 'nuxt-error-page',
        props: { error: Object },
        setup(e) {
            const n = e.error,
                s = Number(n.statusCode || 500),
                r = s === 404,
                o = n.statusMessage ?? (r ? 'Page Not Found' : 'Internal Server Error'),
                i = n.message || n.toString(),
                a = void 0,
                c = r
                    ? Xo(() => Qe(() => import('./D_ZGk2cs.js'), __vite__mapDeps([23, 6, 24, 25]), import.meta.url))
                    : Xo(() => Qe(() => import('./Aa7AeyTe.js'), __vite__mapDeps([26, 24, 27]), import.meta.url));
            return (u, d) => (
                Ke(),
                ut(
                    le(c),
                    Zc(
                        Ll({
                            status: le(s),
                            statusText: le(o),
                            statusCode: le(s),
                            statusMessage: le(o),
                            description: le(i),
                            stack: le(a),
                        }),
                    ),
                    null,
                    16,
                )
            );
        },
    },
    lm = { key: 0 },
    ya = {
        __name: 'nuxt-root',
        setup(e) {
            const t = () => null,
                n = we(),
                s = n.deferHydration();
            if (n.isHydrating) {
                const f = n.hooks.hookOnce('app:error', s);
                yt().beforeEach(f);
            }
            const r = !1;
            (Hn(lc, Qd()), n.hooks.callHookWith((f) => f.map((c) => c()), 'vue:setup'));
            const o = er(),
                i = !1,
                a = /bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;
            ll((f, c, u) => {
                if (
                    (n.hooks
                        .callHook('vue:error', f, c, u)
                        ?.catch((d) => console.error('[nuxt] Error in `vue:error` hook', d)),
                    a.test(navigator.userAgent))
                )
                    return (
                        n.hooks.callHook('app:error', f),
                        console.error(
                            `[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,
                            f,
                        ),
                        !1
                    );
                if (uc(f) && (f.fatal || f.unhandled)) return (n.runWithContext(() => qt(f)), !1);
            });
            const l = !1;
            return (f, c) => (
                Ke(),
                ut(
                    Pf,
                    { onResolve: le(s) },
                    {
                        default: Qa(() => [
                            le(i)
                                ? (Ke(), Nf('div', lm))
                                : le(o)
                                  ? (Ke(), ut(le(am), { key: 1, error: le(o) }, null, 8, ['error']))
                                  : le(l)
                                    ? (Ke(), ut(le(t), { key: 2, context: le(l) }, null, 8, ['context']))
                                    : le(r)
                                      ? (Ke(), ut(nf(le(r)), { key: 3 }))
                                      : (Ke(), ut(le(im), { key: 4 })),
                        ]),
                        _: 1,
                    },
                    8,
                    ['onResolve'],
                )
            );
        },
    };
let ma;
{
    let e;
    ((ma = async function () {
        if (e) return e;
        const n = !!(
                window.__NUXT__?.serverRendered ?? document.getElementById('__NUXT_DATA__')?.dataset.ssr === 'true'
            ),
            s = n ? Th(ya) : Sh(ya),
            r = $d({ vueApp: s });
        async function o(i) {
            (await r.callHook('app:error', i), (r.payload.error ||= Dt(i)));
        }
        ((s.config.errorHandler = o),
            r.hook('app:suspense:resolve', () => {
                s.config.errorHandler === o && (s.config.errorHandler = void 0);
            }),
            !n &&
                Mi.id &&
                r.hook('app:suspense:resolve', () => {
                    document.getElementById(Mi.id)?.remove();
                }));
        try {
            await jd(r, nm);
        } catch (i) {
            o(i);
        }
        try {
            (await r.hooks.callHook('app:created', s),
                await r.hooks.callHook('app:beforeMount', s),
                s.mount(Dd),
                await r.hooks.callHook('app:mounted', s),
                await Rn());
        } catch (i) {
            o(i);
        }
        return s;
    }),
        (e = ma().catch((t) => {
            throw (console.error('Error while mounting app:', t), t);
        })));
}
export {
    Rm as $,
    mm as A,
    Wc as B,
    pt as C,
    Vc as D,
    nc as E,
    ke as F,
    il as G,
    pm as H,
    Sm as I,
    um as J,
    ut as K,
    tf as L,
    ko as M,
    al as N,
    wo as O,
    vo as P,
    hm as Q,
    Rn as R,
    Yt as S,
    vm as T,
    Sr as U,
    _m as V,
    ym as W,
    _o as X,
    Lo as Y,
    ua as Z,
    sm as _,
    Nl as a,
    Ro as a0,
    Jl as a1,
    zd as a2,
    en as a3,
    Xd as a4,
    Gy as a5,
    Em as a6,
    Xl as a7,
    Pn as a8,
    xo as a9,
    td as aa,
    Ms as ab,
    Im as ac,
    me as b,
    Nf as c,
    $l as d,
    we as e,
    vc as f,
    dm as g,
    Js as h,
    De as i,
    gm as j,
    le as k,
    Hy as l,
    Ie as m,
    Vs as n,
    Ke as o,
    Xy as p,
    Tm as q,
    fm as r,
    $o as s,
    ru as t,
    Cm as u,
    Ws as v,
    Qa as w,
    yt as x,
    bm as y,
    cm as z,
};
