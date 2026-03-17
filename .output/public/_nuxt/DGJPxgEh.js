import { _ as Pe } from './BYZ0mjTS.js';
import {
    g as Ae,
    c as y,
    a as p,
    t as m,
    b as Le,
    j as R,
    F as M,
    r as Y,
    n as E,
    k as ue,
    l as We,
    m as q,
    p as De,
    q as Be,
    s as qe,
    o as _,
    v as Ee,
    d as Ne,
} from './BSiOiLzB.js';
function le() {
    return {
        async: !1,
        breaks: !1,
        extensions: null,
        gfm: !0,
        hooks: null,
        pedantic: !1,
        renderer: null,
        silent: !1,
        tokenizer: null,
        walkTokens: null,
    };
}
var D = le();
function xe(l) {
    D = l;
}
var L = { exec: () => null };
function b(l, e = '') {
    let s = typeof l == 'string' ? l : l.source,
        n = {
            replace: (t, i) => {
                let r = typeof i == 'string' ? i : i.source;
                return ((r = r.replace(v.caret, '$1')), (s = s.replace(t, r)), n);
            },
            getRegex: () => new RegExp(s, e),
        };
    return n;
}
var Fe = (() => {
        try {
            return !!new RegExp('(?<=1)(?<!1)');
        } catch {
            return !1;
        }
    })(),
    v = {
        codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
        outputLinkReplace: /\\([\[\]])/g,
        indentCodeCompensation: /^(\s+)(?:```)/,
        beginningSpace: /^\s+/,
        endingHash: /#$/,
        startingSpaceChar: /^ /,
        endingSpaceChar: / $/,
        nonSpaceChar: /[^ ]/,
        newLineCharGlobal: /\n/g,
        tabCharGlobal: /\t/g,
        multipleSpaceGlobal: /\s+/g,
        blankLine: /^[ \t]*$/,
        doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
        blockquoteStart: /^ {0,3}>/,
        blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
        blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
        listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
        listIsTask: /^\[[ xX]\] +\S/,
        listReplaceTask: /^\[[ xX]\] +/,
        listTaskCheckbox: /\[[ xX]\]/,
        anyLine: /\n.*\n/,
        hrefBrackets: /^<(.*)>$/,
        tableDelimiter: /[:|]/,
        tableAlignChars: /^\||\| *$/g,
        tableRowBlankLine: /\n[ \t]*$/,
        tableAlignRight: /^ *-+: *$/,
        tableAlignCenter: /^ *:-+: *$/,
        tableAlignLeft: /^ *:-+ *$/,
        startATag: /^<a /i,
        endATag: /^<\/a>/i,
        startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
        endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
        startAngleBracket: /^</,
        endAngleBracket: />$/,
        pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
        unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
        escapeTest: /[&<>"']/,
        escapeReplace: /[&<>"']/g,
        escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
        escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
        caret: /(^|[^\[])\^/g,
        percentDecode: /%25/g,
        findPipe: /\|/g,
        splitPipe: / \|/,
        slashPipe: /\\\|/g,
        carriageReturn: /\r\n|\r/g,
        spaceLine: /^ +$/gm,
        notSpaceStart: /^\S*/,
        endingNewline: /\n$/,
        listItemRegex: (l) => new RegExp(`^( {0,3}${l})((?:[	 ][^\\n]*)?(?:\\n|$))`),
        nextBulletRegex: (l) =>
            new RegExp(`^ {0,${Math.min(3, l - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
        hrRegex: (l) => new RegExp(`^ {0,${Math.min(3, l - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
        fencesBeginRegex: (l) => new RegExp(`^ {0,${Math.min(3, l - 1)}}(?:\`\`\`|~~~)`),
        headingBeginRegex: (l) => new RegExp(`^ {0,${Math.min(3, l - 1)}}#`),
        htmlBeginRegex: (l) => new RegExp(`^ {0,${Math.min(3, l - 1)}}<(?:[a-z].*>|!--)`, 'i'),
        blockquoteBeginRegex: (l) => new RegExp(`^ {0,${Math.min(3, l - 1)}}>`),
    },
    Ue = /^(?:[ \t]*(?:\n|$))+/,
    Qe = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
    Ze = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
    Q = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
    He = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    ne = / {0,3}(?:[*+-]|\d{1,9}[.)])/,
    we =
        /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    ye = b(we)
        .replace(/bull/g, ne)
        .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
        .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
        .replace(/blockquote/g, / {0,3}>/)
        .replace(/heading/g, / {0,3}#{1,6}/)
        .replace(/html/g, / {0,3}<[^\n>]+>\n/)
        .replace(/\|table/g, '')
        .getRegex(),
    Me = b(we)
        .replace(/bull/g, ne)
        .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
        .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
        .replace(/blockquote/g, / {0,3}>/)
        .replace(/heading/g, / {0,3}#{1,6}/)
        .replace(/html/g, / {0,3}<[^\n>]+>\n/)
        .replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/)
        .getRegex(),
    re = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
    je = /^[^\n]+/,
    ie = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,
    Oe = b(
        /^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/,
    )
        .replace('label', ie)
        .replace('title', /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/)
        .getRegex(),
    Ge = b(/^(bull)([ \t][^\n]+?)?(?:\n|$)/)
        .replace(/bull/g, ne)
        .getRegex(),
    X =
        'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul',
    ae = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
    Ve = b(
        '^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))',
        'i',
    )
        .replace('comment', ae)
        .replace('tag', X)
        .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
        .getRegex(),
    _e = b(re)
        .replace('hr', Q)
        .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
        .replace('|lheading', '')
        .replace('|table', '')
        .replace('blockquote', ' {0,3}>')
        .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
        .replace('list', ' {0,3}(?:[*+-]|1[.)])[ \\t]')
        .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
        .replace('tag', X)
        .getRegex(),
    Xe = b(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
        .replace('paragraph', _e)
        .getRegex(),
    oe = {
        blockquote: Xe,
        code: Qe,
        def: Oe,
        fences: Ze,
        heading: He,
        hr: Q,
        html: Ve,
        lheading: ye,
        list: Ge,
        newline: Ue,
        paragraph: _e,
        table: L,
        text: je,
    },
    ge = b(
        '^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
    )
        .replace('hr', Q)
        .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
        .replace('blockquote', ' {0,3}>')
        .replace('code', '(?: {4}| {0,3}	)[^\\n]')
        .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
        .replace('list', ' {0,3}(?:[*+-]|1[.)])[ \\t]')
        .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
        .replace('tag', X)
        .getRegex(),
    Je = {
        ...oe,
        lheading: Me,
        table: ge,
        paragraph: b(re)
            .replace('hr', Q)
            .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
            .replace('|lheading', '')
            .replace('table', ge)
            .replace('blockquote', ' {0,3}>')
            .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
            .replace('list', ' {0,3}(?:[*+-]|1[.)])[ \\t]')
            .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
            .replace('tag', X)
            .getRegex(),
    },
    Ke = {
        ...oe,
        html: b(
            `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`,
        )
            .replace('comment', ae)
            .replace(
                /tag/g,
                '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b',
            )
            .getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: L,
        lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        paragraph: b(re)
            .replace('hr', Q)
            .replace(
                'heading',
                ` *#{1,6} *[^
]`,
            )
            .replace('lheading', ye)
            .replace('|table', '')
            .replace('blockquote', ' {0,3}>')
            .replace('|fences', '')
            .replace('|list', '')
            .replace('|html', '')
            .replace('|tag', '')
            .getRegex(),
    },
    Ye = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    et = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    Se = /^( {2,}|\\)\n(?!\s*$)/,
    tt = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    J = /[\p{P}\p{S}]/u,
    ce = /[\s\p{P}\p{S}]/u,
    $e = /[^\s\p{P}\p{S}]/u,
    st = b(/^((?![*_])punctSpace)/, 'u')
        .replace(/punctSpace/g, ce)
        .getRegex(),
    Re = /(?!~)[\p{P}\p{S}]/u,
    lt = /(?!~)[\s\p{P}\p{S}]/u,
    nt = /(?:[^\s\p{P}\p{S}]|~)/u,
    ve = /(?![*_])[\p{P}\p{S}]/u,
    rt = /(?![*_])[\s\p{P}\p{S}]/u,
    it = /(?:[^\s\p{P}\p{S}]|[*_])/u,
    at = b(/link|precode-code|html/, 'g')
        .replace(
            'link',
            /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/,
        )
        .replace('precode-', Fe ? '(?<!`)()' : '(^^|[^`])')
        .replace('code', /(?<b>`+)[^`]+\k<b>(?!`)/)
        .replace('html', /<(?! )[^<>]*?>/)
        .getRegex(),
    Te = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,
    ot = b(Te, 'u').replace(/punct/g, J).getRegex(),
    ct = b(Te, 'u').replace(/punct/g, Re).getRegex(),
    Ce =
        '^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)',
    pt = b(Ce, 'gu')
        .replace(/notPunctSpace/g, $e)
        .replace(/punctSpace/g, ce)
        .replace(/punct/g, J)
        .getRegex(),
    ht = b(Ce, 'gu')
        .replace(/notPunctSpace/g, nt)
        .replace(/punctSpace/g, lt)
        .replace(/punct/g, Re)
        .getRegex(),
    ut = b(
        '^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)',
        'gu',
    )
        .replace(/notPunctSpace/g, $e)
        .replace(/punctSpace/g, ce)
        .replace(/punct/g, J)
        .getRegex(),
    gt = b(/^~~?(?:((?!~)punct)|[^\s~])/, 'u')
        .replace(/punct/g, ve)
        .getRegex(),
    dt =
        '^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)',
    kt = b(dt, 'gu')
        .replace(/notPunctSpace/g, it)
        .replace(/punctSpace/g, rt)
        .replace(/punct/g, ve)
        .getRegex(),
    ft = b(/\\(punct)/, 'gu')
        .replace(/punct/g, J)
        .getRegex(),
    bt = b(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
        .replace('scheme', /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
        .replace(
            'email',
            /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
        )
        .getRegex(),
    mt = b(ae).replace('(?:-->|$)', '-->').getRegex(),
    xt = b(
        '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
    )
        .replace('comment', mt)
        .replace('attribute', /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/)
        .getRegex(),
    O = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,
    wt = b(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/)
        .replace('label', O)
        .replace('href', /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/)
        .replace('title', /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/)
        .getRegex(),
    Ie = b(/^!?\[(label)\]\[(ref)\]/)
        .replace('label', O)
        .replace('ref', ie)
        .getRegex(),
    ze = b(/^!?\[(ref)\](?:\[\])?/)
        .replace('ref', ie)
        .getRegex(),
    yt = b('reflink|nolink(?!\\()', 'g').replace('reflink', Ie).replace('nolink', ze).getRegex(),
    de = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,
    pe = {
        _backpedal: L,
        anyPunctuation: ft,
        autolink: bt,
        blockSkip: at,
        br: Se,
        code: et,
        del: L,
        delLDelim: L,
        delRDelim: L,
        emStrongLDelim: ot,
        emStrongRDelimAst: pt,
        emStrongRDelimUnd: ut,
        escape: Ye,
        link: wt,
        nolink: ze,
        punctuation: st,
        reflink: Ie,
        reflinkSearch: yt,
        tag: xt,
        text: tt,
        url: L,
    },
    _t = {
        ...pe,
        link: b(/^!?\[(label)\]\((.*?)\)/)
            .replace('label', O)
            .getRegex(),
        reflink: b(/^!?\[(label)\]\s*\[([^\]]*)\]/)
            .replace('label', O)
            .getRegex(),
    },
    ee = {
        ...pe,
        emStrongRDelimAst: ht,
        emStrongLDelim: ct,
        delLDelim: gt,
        delRDelim: kt,
        url: b(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/)
            .replace('protocol', de)
            .replace('email', /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/)
            .getRegex(),
        _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
        text: b(
            /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
        )
            .replace('protocol', de)
            .getRegex(),
    },
    St = {
        ...ee,
        br: b(Se).replace('{2,}', '*').getRegex(),
        text: b(ee.text)
            .replace('\\b_', '\\b_| {2,}\\n')
            .replace(/\{2,\}/g, '*')
            .getRegex(),
    },
    j = { normal: oe, gfm: Je, pedantic: Ke },
    N = { normal: pe, gfm: ee, breaks: St, pedantic: _t },
    $t = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
    ke = (l) => $t[l];
function P(l, e) {
    if (e) {
        if (v.escapeTest.test(l)) return l.replace(v.escapeReplace, ke);
    } else if (v.escapeTestNoEncode.test(l)) return l.replace(v.escapeReplaceNoEncode, ke);
    return l;
}
function fe(l) {
    try {
        l = encodeURI(l).replace(v.percentDecode, '%');
    } catch {
        return null;
    }
    return l;
}
function be(l, e) {
    let s = l.replace(v.findPipe, (i, r, o) => {
            let a = !1,
                h = r;
            for (; --h >= 0 && o[h] === '\\'; ) a = !a;
            return a ? '|' : ' |';
        }),
        n = s.split(v.splitPipe),
        t = 0;
    if ((n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e))
        if (n.length > e) n.splice(e);
        else for (; n.length < e; ) n.push('');
    for (; t < n.length; t++) n[t] = n[t].trim().replace(v.slashPipe, '|');
    return n;
}
function F(l, e, s) {
    let n = l.length;
    if (n === 0) return '';
    let t = 0;
    for (; t < n && l.charAt(n - t - 1) === e; ) t++;
    return l.slice(0, n - t);
}
function Rt(l, e) {
    if (l.indexOf(e[1]) === -1) return -1;
    let s = 0;
    for (let n = 0; n < l.length; n++)
        if (l[n] === '\\') n++;
        else if (l[n] === e[0]) s++;
        else if (l[n] === e[1] && (s--, s < 0)) return n;
    return s > 0 ? -2 : -1;
}
function vt(l, e = 0) {
    let s = e,
        n = '';
    for (let t of l)
        if (t === '	') {
            let i = 4 - (s % 4);
            ((n += ' '.repeat(i)), (s += i));
        } else ((n += t), s++);
    return n;
}
function me(l, e, s, n, t) {
    let i = e.href,
        r = e.title || null,
        o = l[1].replace(t.other.outputLinkReplace, '$1');
    n.state.inLink = !0;
    let a = {
        type: l[0].charAt(0) === '!' ? 'image' : 'link',
        raw: s,
        href: i,
        title: r,
        text: o,
        tokens: n.inlineTokens(o),
    };
    return ((n.state.inLink = !1), a);
}
function Tt(l, e, s) {
    let n = l.match(s.other.indentCodeCompensation);
    if (n === null) return e;
    let t = n[1];
    return e
        .split(
            `
`,
        )
        .map((i) => {
            let r = i.match(s.other.beginningSpace);
            if (r === null) return i;
            let [o] = r;
            return o.length >= t.length ? i.slice(t.length) : i;
        }).join(`
`);
}
var G = class {
        options;
        rules;
        lexer;
        constructor(l) {
            this.options = l || D;
        }
        space(l) {
            let e = this.rules.block.newline.exec(l);
            if (e && e[0].length > 0) return { type: 'space', raw: e[0] };
        }
        code(l) {
            let e = this.rules.block.code.exec(l);
            if (e) {
                let s = e[0].replace(this.rules.other.codeRemoveIndent, '');
                return {
                    type: 'code',
                    raw: e[0],
                    codeBlockStyle: 'indented',
                    text: this.options.pedantic
                        ? s
                        : F(
                              s,
                              `
`,
                          ),
                };
            }
        }
        fences(l) {
            let e = this.rules.block.fences.exec(l);
            if (e) {
                let s = e[0],
                    n = Tt(s, e[3] || '', this.rules);
                return {
                    type: 'code',
                    raw: s,
                    lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, '$1') : e[2],
                    text: n,
                };
            }
        }
        heading(l) {
            let e = this.rules.block.heading.exec(l);
            if (e) {
                let s = e[2].trim();
                if (this.rules.other.endingHash.test(s)) {
                    let n = F(s, '#');
                    (this.options.pedantic || !n || this.rules.other.endingSpaceChar.test(n)) && (s = n.trim());
                }
                return { type: 'heading', raw: e[0], depth: e[1].length, text: s, tokens: this.lexer.inline(s) };
            }
        }
        hr(l) {
            let e = this.rules.block.hr.exec(l);
            if (e)
                return {
                    type: 'hr',
                    raw: F(
                        e[0],
                        `
`,
                    ),
                };
        }
        blockquote(l) {
            let e = this.rules.block.blockquote.exec(l);
            if (e) {
                let s = F(
                        e[0],
                        `
`,
                    ).split(`
`),
                    n = '',
                    t = '',
                    i = [];
                for (; s.length > 0; ) {
                    let r = !1,
                        o = [],
                        a;
                    for (a = 0; a < s.length; a++)
                        if (this.rules.other.blockquoteStart.test(s[a])) (o.push(s[a]), (r = !0));
                        else if (!r) o.push(s[a]);
                        else break;
                    s = s.slice(a);
                    let h = o.join(`
`),
                        c = h
                            .replace(
                                this.rules.other.blockquoteSetextReplace,
                                `
    $1`,
                            )
                            .replace(this.rules.other.blockquoteSetextReplace2, '');
                    ((n = n
                        ? `${n}
${h}`
                        : h),
                        (t = t
                            ? `${t}
${c}`
                            : c));
                    let g = this.lexer.state.top;
                    if (
                        ((this.lexer.state.top = !0),
                        this.lexer.blockTokens(c, i, !0),
                        (this.lexer.state.top = g),
                        s.length === 0)
                    )
                        break;
                    let k = i.at(-1);
                    if (k?.type === 'code') break;
                    if (k?.type === 'blockquote') {
                        let S = k,
                            d =
                                S.raw +
                                `
` +
                                s.join(`
`),
                            T = this.blockquote(d);
                        ((i[i.length - 1] = T),
                            (n = n.substring(0, n.length - S.raw.length) + T.raw),
                            (t = t.substring(0, t.length - S.text.length) + T.text));
                        break;
                    } else if (k?.type === 'list') {
                        let S = k,
                            d =
                                S.raw +
                                `
` +
                                s.join(`
`),
                            T = this.list(d);
                        ((i[i.length - 1] = T),
                            (n = n.substring(0, n.length - k.raw.length) + T.raw),
                            (t = t.substring(0, t.length - S.raw.length) + T.raw),
                            (s = d.substring(i.at(-1).raw.length).split(`
`)));
                        continue;
                    }
                }
                return { type: 'blockquote', raw: n, tokens: i, text: t };
            }
        }
        list(l) {
            let e = this.rules.block.list.exec(l);
            if (e) {
                let s = e[1].trim(),
                    n = s.length > 1,
                    t = { type: 'list', raw: '', ordered: n, start: n ? +s.slice(0, -1) : '', loose: !1, items: [] };
                ((s = n ? `\\d{1,9}\\${s.slice(-1)}` : `\\${s}`), this.options.pedantic && (s = n ? s : '[*+-]'));
                let i = this.rules.other.listItemRegex(s),
                    r = !1;
                for (; l; ) {
                    let a = !1,
                        h = '',
                        c = '';
                    if (!(e = i.exec(l)) || this.rules.block.hr.test(l)) break;
                    ((h = e[0]), (l = l.substring(h.length)));
                    let g = vt(
                            e[2].split(
                                `
`,
                                1,
                            )[0],
                            e[1].length,
                        ),
                        k = l.split(
                            `
`,
                            1,
                        )[0],
                        S = !g.trim(),
                        d = 0;
                    if (
                        (this.options.pedantic
                            ? ((d = 2), (c = g.trimStart()))
                            : S
                              ? (d = e[1].length + 1)
                              : ((d = g.search(this.rules.other.nonSpaceChar)),
                                (d = d > 4 ? 1 : d),
                                (c = g.slice(d)),
                                (d += e[1].length)),
                        S &&
                            this.rules.other.blankLine.test(k) &&
                            ((h +=
                                k +
                                `
`),
                            (l = l.substring(k.length + 1)),
                            (a = !0)),
                        !a)
                    ) {
                        let T = this.rules.other.nextBulletRegex(d),
                            Z = this.rules.other.hrRegex(d),
                            w = this.rules.other.fencesBeginRegex(d),
                            u = this.rules.other.headingBeginRegex(d),
                            A = this.rules.other.htmlBeginRegex(d),
                            $ = this.rules.other.blockquoteBeginRegex(d);
                        for (; l; ) {
                            let f = l.split(
                                    `
`,
                                    1,
                                )[0],
                                z;
                            if (
                                ((k = f),
                                this.options.pedantic
                                    ? ((k = k.replace(this.rules.other.listReplaceNesting, '  ')), (z = k))
                                    : (z = k.replace(this.rules.other.tabCharGlobal, '    ')),
                                w.test(k) || u.test(k) || A.test(k) || $.test(k) || T.test(k) || Z.test(k))
                            )
                                break;
                            if (z.search(this.rules.other.nonSpaceChar) >= d || !k.trim())
                                c +=
                                    `
` + z.slice(d);
                            else {
                                if (
                                    S ||
                                    g
                                        .replace(this.rules.other.tabCharGlobal, '    ')
                                        .search(this.rules.other.nonSpaceChar) >= 4 ||
                                    w.test(g) ||
                                    u.test(g) ||
                                    Z.test(g)
                                )
                                    break;
                                c +=
                                    `
` + k;
                            }
                            ((S = !k.trim()),
                                (h +=
                                    f +
                                    `
`),
                                (l = l.substring(f.length + 1)),
                                (g = z.slice(d)));
                        }
                    }
                    (t.loose || (r ? (t.loose = !0) : this.rules.other.doubleBlankLine.test(h) && (r = !0)),
                        t.items.push({
                            type: 'list_item',
                            raw: h,
                            task: !!this.options.gfm && this.rules.other.listIsTask.test(c),
                            loose: !1,
                            text: c,
                            tokens: [],
                        }),
                        (t.raw += h));
                }
                let o = t.items.at(-1);
                if (o) ((o.raw = o.raw.trimEnd()), (o.text = o.text.trimEnd()));
                else return;
                t.raw = t.raw.trimEnd();
                for (let a of t.items) {
                    if (((this.lexer.state.top = !1), (a.tokens = this.lexer.blockTokens(a.text, [])), a.task)) {
                        if (
                            ((a.text = a.text.replace(this.rules.other.listReplaceTask, '')),
                            a.tokens[0]?.type === 'text' || a.tokens[0]?.type === 'paragraph')
                        ) {
                            ((a.tokens[0].raw = a.tokens[0].raw.replace(this.rules.other.listReplaceTask, '')),
                                (a.tokens[0].text = a.tokens[0].text.replace(this.rules.other.listReplaceTask, '')));
                            for (let c = this.lexer.inlineQueue.length - 1; c >= 0; c--)
                                if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[c].src)) {
                                    this.lexer.inlineQueue[c].src = this.lexer.inlineQueue[c].src.replace(
                                        this.rules.other.listReplaceTask,
                                        '',
                                    );
                                    break;
                                }
                        }
                        let h = this.rules.other.listTaskCheckbox.exec(a.raw);
                        if (h) {
                            let c = { type: 'checkbox', raw: h[0] + ' ', checked: h[0] !== '[ ]' };
                            ((a.checked = c.checked),
                                t.loose
                                    ? a.tokens[0] &&
                                      ['paragraph', 'text'].includes(a.tokens[0].type) &&
                                      'tokens' in a.tokens[0] &&
                                      a.tokens[0].tokens
                                        ? ((a.tokens[0].raw = c.raw + a.tokens[0].raw),
                                          (a.tokens[0].text = c.raw + a.tokens[0].text),
                                          a.tokens[0].tokens.unshift(c))
                                        : a.tokens.unshift({ type: 'paragraph', raw: c.raw, text: c.raw, tokens: [c] })
                                    : a.tokens.unshift(c));
                        }
                    }
                    if (!t.loose) {
                        let h = a.tokens.filter((g) => g.type === 'space'),
                            c = h.length > 0 && h.some((g) => this.rules.other.anyLine.test(g.raw));
                        t.loose = c;
                    }
                }
                if (t.loose)
                    for (let a of t.items) {
                        a.loose = !0;
                        for (let h of a.tokens) h.type === 'text' && (h.type = 'paragraph');
                    }
                return t;
            }
        }
        html(l) {
            let e = this.rules.block.html.exec(l);
            if (e)
                return {
                    type: 'html',
                    block: !0,
                    raw: e[0],
                    pre: e[1] === 'pre' || e[1] === 'script' || e[1] === 'style',
                    text: e[0],
                };
        }
        def(l) {
            let e = this.rules.block.def.exec(l);
            if (e) {
                let s = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, ' '),
                    n = e[2]
                        ? e[2]
                              .replace(this.rules.other.hrefBrackets, '$1')
                              .replace(this.rules.inline.anyPunctuation, '$1')
                        : '',
                    t = e[3]
                        ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, '$1')
                        : e[3];
                return { type: 'def', tag: s, raw: e[0], href: n, title: t };
            }
        }
        table(l) {
            let e = this.rules.block.table.exec(l);
            if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
            let s = be(e[1]),
                n = e[2].replace(this.rules.other.tableAlignChars, '').split('|'),
                t = e[3]?.trim()
                    ? e[3].replace(this.rules.other.tableRowBlankLine, '').split(`
`)
                    : [],
                i = { type: 'table', raw: e[0], header: [], align: [], rows: [] };
            if (s.length === n.length) {
                for (let r of n)
                    this.rules.other.tableAlignRight.test(r)
                        ? i.align.push('right')
                        : this.rules.other.tableAlignCenter.test(r)
                          ? i.align.push('center')
                          : this.rules.other.tableAlignLeft.test(r)
                            ? i.align.push('left')
                            : i.align.push(null);
                for (let r = 0; r < s.length; r++)
                    i.header.push({ text: s[r], tokens: this.lexer.inline(s[r]), header: !0, align: i.align[r] });
                for (let r of t)
                    i.rows.push(
                        be(r, i.header.length).map((o, a) => ({
                            text: o,
                            tokens: this.lexer.inline(o),
                            header: !1,
                            align: i.align[a],
                        })),
                    );
                return i;
            }
        }
        lheading(l) {
            let e = this.rules.block.lheading.exec(l);
            if (e)
                return {
                    type: 'heading',
                    raw: e[0],
                    depth: e[2].charAt(0) === '=' ? 1 : 2,
                    text: e[1],
                    tokens: this.lexer.inline(e[1]),
                };
        }
        paragraph(l) {
            let e = this.rules.block.paragraph.exec(l);
            if (e) {
                let s =
                    e[1].charAt(e[1].length - 1) ===
                    `
`
                        ? e[1].slice(0, -1)
                        : e[1];
                return { type: 'paragraph', raw: e[0], text: s, tokens: this.lexer.inline(s) };
            }
        }
        text(l) {
            let e = this.rules.block.text.exec(l);
            if (e) return { type: 'text', raw: e[0], text: e[0], tokens: this.lexer.inline(e[0]) };
        }
        escape(l) {
            let e = this.rules.inline.escape.exec(l);
            if (e) return { type: 'escape', raw: e[0], text: e[1] };
        }
        tag(l) {
            let e = this.rules.inline.tag.exec(l);
            if (e)
                return (
                    !this.lexer.state.inLink && this.rules.other.startATag.test(e[0])
                        ? (this.lexer.state.inLink = !0)
                        : this.lexer.state.inLink &&
                          this.rules.other.endATag.test(e[0]) &&
                          (this.lexer.state.inLink = !1),
                    !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(e[0])
                        ? (this.lexer.state.inRawBlock = !0)
                        : this.lexer.state.inRawBlock &&
                          this.rules.other.endPreScriptTag.test(e[0]) &&
                          (this.lexer.state.inRawBlock = !1),
                    {
                        type: 'html',
                        raw: e[0],
                        inLink: this.lexer.state.inLink,
                        inRawBlock: this.lexer.state.inRawBlock,
                        block: !1,
                        text: e[0],
                    }
                );
        }
        link(l) {
            let e = this.rules.inline.link.exec(l);
            if (e) {
                let s = e[2].trim();
                if (!this.options.pedantic && this.rules.other.startAngleBracket.test(s)) {
                    if (!this.rules.other.endAngleBracket.test(s)) return;
                    let i = F(s.slice(0, -1), '\\');
                    if ((s.length - i.length) % 2 === 0) return;
                } else {
                    let i = Rt(e[2], '()');
                    if (i === -2) return;
                    if (i > -1) {
                        let r = (e[0].indexOf('!') === 0 ? 5 : 4) + e[1].length + i;
                        ((e[2] = e[2].substring(0, i)), (e[0] = e[0].substring(0, r).trim()), (e[3] = ''));
                    }
                }
                let n = e[2],
                    t = '';
                if (this.options.pedantic) {
                    let i = this.rules.other.pedanticHrefTitle.exec(n);
                    i && ((n = i[1]), (t = i[3]));
                } else t = e[3] ? e[3].slice(1, -1) : '';
                return (
                    (n = n.trim()),
                    this.rules.other.startAngleBracket.test(n) &&
                        (this.options.pedantic && !this.rules.other.endAngleBracket.test(s)
                            ? (n = n.slice(1))
                            : (n = n.slice(1, -1))),
                    me(
                        e,
                        {
                            href: n && n.replace(this.rules.inline.anyPunctuation, '$1'),
                            title: t && t.replace(this.rules.inline.anyPunctuation, '$1'),
                        },
                        e[0],
                        this.lexer,
                        this.rules,
                    )
                );
            }
        }
        reflink(l, e) {
            let s;
            if ((s = this.rules.inline.reflink.exec(l)) || (s = this.rules.inline.nolink.exec(l))) {
                let n = (s[2] || s[1]).replace(this.rules.other.multipleSpaceGlobal, ' '),
                    t = e[n.toLowerCase()];
                if (!t) {
                    let i = s[0].charAt(0);
                    return { type: 'text', raw: i, text: i };
                }
                return me(s, t, s[0], this.lexer, this.rules);
            }
        }
        emStrong(l, e, s = '') {
            let n = this.rules.inline.emStrongLDelim.exec(l);
            if (
                !(!n || (n[3] && s.match(this.rules.other.unicodeAlphaNumeric))) &&
                (!(n[1] || n[2]) || !s || this.rules.inline.punctuation.exec(s))
            ) {
                let t = [...n[0]].length - 1,
                    i,
                    r,
                    o = t,
                    a = 0,
                    h = n[0][0] === '*' ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
                for (h.lastIndex = 0, e = e.slice(-1 * l.length + t); (n = h.exec(e)) != null; ) {
                    if (((i = n[1] || n[2] || n[3] || n[4] || n[5] || n[6]), !i)) continue;
                    if (((r = [...i].length), n[3] || n[4])) {
                        o += r;
                        continue;
                    } else if ((n[5] || n[6]) && t % 3 && !((t + r) % 3)) {
                        a += r;
                        continue;
                    }
                    if (((o -= r), o > 0)) continue;
                    r = Math.min(r, r + o + a);
                    let c = [...n[0]][0].length,
                        g = l.slice(0, t + n.index + c + r);
                    if (Math.min(t, r) % 2) {
                        let S = g.slice(1, -1);
                        return { type: 'em', raw: g, text: S, tokens: this.lexer.inlineTokens(S) };
                    }
                    let k = g.slice(2, -2);
                    return { type: 'strong', raw: g, text: k, tokens: this.lexer.inlineTokens(k) };
                }
            }
        }
        codespan(l) {
            let e = this.rules.inline.code.exec(l);
            if (e) {
                let s = e[2].replace(this.rules.other.newLineCharGlobal, ' '),
                    n = this.rules.other.nonSpaceChar.test(s),
                    t = this.rules.other.startingSpaceChar.test(s) && this.rules.other.endingSpaceChar.test(s);
                return (n && t && (s = s.substring(1, s.length - 1)), { type: 'codespan', raw: e[0], text: s });
            }
        }
        br(l) {
            let e = this.rules.inline.br.exec(l);
            if (e) return { type: 'br', raw: e[0] };
        }
        del(l, e, s = '') {
            let n = this.rules.inline.delLDelim.exec(l);
            if (n && (!n[1] || !s || this.rules.inline.punctuation.exec(s))) {
                let t = [...n[0]].length - 1,
                    i,
                    r,
                    o = t,
                    a = this.rules.inline.delRDelim;
                for (a.lastIndex = 0, e = e.slice(-1 * l.length + t); (n = a.exec(e)) != null; ) {
                    if (((i = n[1] || n[2] || n[3] || n[4] || n[5] || n[6]), !i || ((r = [...i].length), r !== t)))
                        continue;
                    if (n[3] || n[4]) {
                        o += r;
                        continue;
                    }
                    if (((o -= r), o > 0)) continue;
                    r = Math.min(r, r + o);
                    let h = [...n[0]][0].length,
                        c = l.slice(0, t + n.index + h + r),
                        g = c.slice(t, -t);
                    return { type: 'del', raw: c, text: g, tokens: this.lexer.inlineTokens(g) };
                }
            }
        }
        autolink(l) {
            let e = this.rules.inline.autolink.exec(l);
            if (e) {
                let s, n;
                return (
                    e[2] === '@' ? ((s = e[1]), (n = 'mailto:' + s)) : ((s = e[1]), (n = s)),
                    { type: 'link', raw: e[0], text: s, href: n, tokens: [{ type: 'text', raw: s, text: s }] }
                );
            }
        }
        url(l) {
            let e;
            if ((e = this.rules.inline.url.exec(l))) {
                let s, n;
                if (e[2] === '@') ((s = e[0]), (n = 'mailto:' + s));
                else {
                    let t;
                    do ((t = e[0]), (e[0] = this.rules.inline._backpedal.exec(e[0])?.[0] ?? ''));
                    while (t !== e[0]);
                    ((s = e[0]), e[1] === 'www.' ? (n = 'http://' + e[0]) : (n = e[0]));
                }
                return { type: 'link', raw: e[0], text: s, href: n, tokens: [{ type: 'text', raw: s, text: s }] };
            }
        }
        inlineText(l) {
            let e = this.rules.inline.text.exec(l);
            if (e) {
                let s = this.lexer.state.inRawBlock;
                return { type: 'text', raw: e[0], text: e[0], escaped: s };
            }
        }
    },
    C = class te {
        tokens;
        options;
        state;
        inlineQueue;
        tokenizer;
        constructor(e) {
            ((this.tokens = []),
                (this.tokens.links = Object.create(null)),
                (this.options = e || D),
                (this.options.tokenizer = this.options.tokenizer || new G()),
                (this.tokenizer = this.options.tokenizer),
                (this.tokenizer.options = this.options),
                (this.tokenizer.lexer = this),
                (this.inlineQueue = []),
                (this.state = { inLink: !1, inRawBlock: !1, top: !0 }));
            let s = { other: v, block: j.normal, inline: N.normal };
            (this.options.pedantic
                ? ((s.block = j.pedantic), (s.inline = N.pedantic))
                : this.options.gfm &&
                  ((s.block = j.gfm), this.options.breaks ? (s.inline = N.breaks) : (s.inline = N.gfm)),
                (this.tokenizer.rules = s));
        }
        static get rules() {
            return { block: j, inline: N };
        }
        static lex(e, s) {
            return new te(s).lex(e);
        }
        static lexInline(e, s) {
            return new te(s).inlineTokens(e);
        }
        lex(e) {
            ((e = e.replace(
                v.carriageReturn,
                `
`,
            )),
                this.blockTokens(e, this.tokens));
            for (let s = 0; s < this.inlineQueue.length; s++) {
                let n = this.inlineQueue[s];
                this.inlineTokens(n.src, n.tokens);
            }
            return ((this.inlineQueue = []), this.tokens);
        }
        blockTokens(e, s = [], n = !1) {
            for (this.options.pedantic && (e = e.replace(v.tabCharGlobal, '    ').replace(v.spaceLine, '')); e; ) {
                let t;
                if (
                    this.options.extensions?.block?.some((r) =>
                        (t = r.call({ lexer: this }, e, s)) ? ((e = e.substring(t.raw.length)), s.push(t), !0) : !1,
                    )
                )
                    continue;
                if ((t = this.tokenizer.space(e))) {
                    e = e.substring(t.raw.length);
                    let r = s.at(-1);
                    t.raw.length === 1 && r !== void 0
                        ? (r.raw += `
`)
                        : s.push(t);
                    continue;
                }
                if ((t = this.tokenizer.code(e))) {
                    e = e.substring(t.raw.length);
                    let r = s.at(-1);
                    r?.type === 'paragraph' || r?.type === 'text'
                        ? ((r.raw +=
                              (r.raw.endsWith(`
`)
                                  ? ''
                                  : `
`) + t.raw),
                          (r.text +=
                              `
` + t.text),
                          (this.inlineQueue.at(-1).src = r.text))
                        : s.push(t);
                    continue;
                }
                if ((t = this.tokenizer.fences(e))) {
                    ((e = e.substring(t.raw.length)), s.push(t));
                    continue;
                }
                if ((t = this.tokenizer.heading(e))) {
                    ((e = e.substring(t.raw.length)), s.push(t));
                    continue;
                }
                if ((t = this.tokenizer.hr(e))) {
                    ((e = e.substring(t.raw.length)), s.push(t));
                    continue;
                }
                if ((t = this.tokenizer.blockquote(e))) {
                    ((e = e.substring(t.raw.length)), s.push(t));
                    continue;
                }
                if ((t = this.tokenizer.list(e))) {
                    ((e = e.substring(t.raw.length)), s.push(t));
                    continue;
                }
                if ((t = this.tokenizer.html(e))) {
                    ((e = e.substring(t.raw.length)), s.push(t));
                    continue;
                }
                if ((t = this.tokenizer.def(e))) {
                    e = e.substring(t.raw.length);
                    let r = s.at(-1);
                    r?.type === 'paragraph' || r?.type === 'text'
                        ? ((r.raw +=
                              (r.raw.endsWith(`
`)
                                  ? ''
                                  : `
`) + t.raw),
                          (r.text +=
                              `
` + t.raw),
                          (this.inlineQueue.at(-1).src = r.text))
                        : this.tokens.links[t.tag] ||
                          ((this.tokens.links[t.tag] = { href: t.href, title: t.title }), s.push(t));
                    continue;
                }
                if ((t = this.tokenizer.table(e))) {
                    ((e = e.substring(t.raw.length)), s.push(t));
                    continue;
                }
                if ((t = this.tokenizer.lheading(e))) {
                    ((e = e.substring(t.raw.length)), s.push(t));
                    continue;
                }
                let i = e;
                if (this.options.extensions?.startBlock) {
                    let r = 1 / 0,
                        o = e.slice(1),
                        a;
                    (this.options.extensions.startBlock.forEach((h) => {
                        ((a = h.call({ lexer: this }, o)), typeof a == 'number' && a >= 0 && (r = Math.min(r, a)));
                    }),
                        r < 1 / 0 && r >= 0 && (i = e.substring(0, r + 1)));
                }
                if (this.state.top && (t = this.tokenizer.paragraph(i))) {
                    let r = s.at(-1);
                    (n && r?.type === 'paragraph'
                        ? ((r.raw +=
                              (r.raw.endsWith(`
`)
                                  ? ''
                                  : `
`) + t.raw),
                          (r.text +=
                              `
` + t.text),
                          this.inlineQueue.pop(),
                          (this.inlineQueue.at(-1).src = r.text))
                        : s.push(t),
                        (n = i.length !== e.length),
                        (e = e.substring(t.raw.length)));
                    continue;
                }
                if ((t = this.tokenizer.text(e))) {
                    e = e.substring(t.raw.length);
                    let r = s.at(-1);
                    r?.type === 'text'
                        ? ((r.raw +=
                              (r.raw.endsWith(`
`)
                                  ? ''
                                  : `
`) + t.raw),
                          (r.text +=
                              `
` + t.text),
                          this.inlineQueue.pop(),
                          (this.inlineQueue.at(-1).src = r.text))
                        : s.push(t);
                    continue;
                }
                if (e) {
                    let r = 'Infinite loop on byte: ' + e.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(r);
                        break;
                    } else throw new Error(r);
                }
            }
            return ((this.state.top = !0), s);
        }
        inline(e, s = []) {
            return (this.inlineQueue.push({ src: e, tokens: s }), s);
        }
        inlineTokens(e, s = []) {
            let n = e,
                t = null;
            if (this.tokens.links) {
                let a = Object.keys(this.tokens.links);
                if (a.length > 0)
                    for (; (t = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null; )
                        a.includes(t[0].slice(t[0].lastIndexOf('[') + 1, -1)) &&
                            (n =
                                n.slice(0, t.index) +
                                '[' +
                                'a'.repeat(t[0].length - 2) +
                                ']' +
                                n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
            }
            for (; (t = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null; )
                n = n.slice(0, t.index) + '++' + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
            let i;
            for (; (t = this.tokenizer.rules.inline.blockSkip.exec(n)) != null; )
                ((i = t[2] ? t[2].length : 0),
                    (n =
                        n.slice(0, t.index + i) +
                        '[' +
                        'a'.repeat(t[0].length - i - 2) +
                        ']' +
                        n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex)));
            n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
            let r = !1,
                o = '';
            for (; e; ) {
                (r || (o = ''), (r = !1));
                let a;
                if (
                    this.options.extensions?.inline?.some((c) =>
                        (a = c.call({ lexer: this }, e, s)) ? ((e = e.substring(a.raw.length)), s.push(a), !0) : !1,
                    )
                )
                    continue;
                if ((a = this.tokenizer.escape(e))) {
                    ((e = e.substring(a.raw.length)), s.push(a));
                    continue;
                }
                if ((a = this.tokenizer.tag(e))) {
                    ((e = e.substring(a.raw.length)), s.push(a));
                    continue;
                }
                if ((a = this.tokenizer.link(e))) {
                    ((e = e.substring(a.raw.length)), s.push(a));
                    continue;
                }
                if ((a = this.tokenizer.reflink(e, this.tokens.links))) {
                    e = e.substring(a.raw.length);
                    let c = s.at(-1);
                    a.type === 'text' && c?.type === 'text' ? ((c.raw += a.raw), (c.text += a.text)) : s.push(a);
                    continue;
                }
                if ((a = this.tokenizer.emStrong(e, n, o))) {
                    ((e = e.substring(a.raw.length)), s.push(a));
                    continue;
                }
                if ((a = this.tokenizer.codespan(e))) {
                    ((e = e.substring(a.raw.length)), s.push(a));
                    continue;
                }
                if ((a = this.tokenizer.br(e))) {
                    ((e = e.substring(a.raw.length)), s.push(a));
                    continue;
                }
                if ((a = this.tokenizer.del(e, n, o))) {
                    ((e = e.substring(a.raw.length)), s.push(a));
                    continue;
                }
                if ((a = this.tokenizer.autolink(e))) {
                    ((e = e.substring(a.raw.length)), s.push(a));
                    continue;
                }
                if (!this.state.inLink && (a = this.tokenizer.url(e))) {
                    ((e = e.substring(a.raw.length)), s.push(a));
                    continue;
                }
                let h = e;
                if (this.options.extensions?.startInline) {
                    let c = 1 / 0,
                        g = e.slice(1),
                        k;
                    (this.options.extensions.startInline.forEach((S) => {
                        ((k = S.call({ lexer: this }, g)), typeof k == 'number' && k >= 0 && (c = Math.min(c, k)));
                    }),
                        c < 1 / 0 && c >= 0 && (h = e.substring(0, c + 1)));
                }
                if ((a = this.tokenizer.inlineText(h))) {
                    ((e = e.substring(a.raw.length)), a.raw.slice(-1) !== '_' && (o = a.raw.slice(-1)), (r = !0));
                    let c = s.at(-1);
                    c?.type === 'text' ? ((c.raw += a.raw), (c.text += a.text)) : s.push(a);
                    continue;
                }
                if (e) {
                    let c = 'Infinite loop on byte: ' + e.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(c);
                        break;
                    } else throw new Error(c);
                }
            }
            return s;
        }
    },
    V = class {
        options;
        parser;
        constructor(l) {
            this.options = l || D;
        }
        space(l) {
            return '';
        }
        code({ text: l, lang: e, escaped: s }) {
            let n = (e || '').match(v.notSpaceStart)?.[0],
                t =
                    l.replace(v.endingNewline, '') +
                    `
`;
            return n
                ? '<pre><code class="language-' +
                      P(n) +
                      '">' +
                      (s ? t : P(t, !0)) +
                      `</code></pre>
`
                : '<pre><code>' +
                      (s ? t : P(t, !0)) +
                      `</code></pre>
`;
        }
        blockquote({ tokens: l }) {
            return `<blockquote>
${this.parser.parse(l)}</blockquote>
`;
        }
        html({ text: l }) {
            return l;
        }
        def(l) {
            return '';
        }
        heading({ tokens: l, depth: e }) {
            return `<h${e}>${this.parser.parseInline(l)}</h${e}>
`;
        }
        hr(l) {
            return `<hr>
`;
        }
        list(l) {
            let e = l.ordered,
                s = l.start,
                n = '';
            for (let r = 0; r < l.items.length; r++) {
                let o = l.items[r];
                n += this.listitem(o);
            }
            let t = e ? 'ol' : 'ul',
                i = e && s !== 1 ? ' start="' + s + '"' : '';
            return (
                '<' +
                t +
                i +
                `>
` +
                n +
                '</' +
                t +
                `>
`
            );
        }
        listitem(l) {
            return `<li>${this.parser.parse(l.tokens)}</li>
`;
        }
        checkbox({ checked: l }) {
            return '<input ' + (l ? 'checked="" ' : '') + 'disabled="" type="checkbox"> ';
        }
        paragraph({ tokens: l }) {
            return `<p>${this.parser.parseInline(l)}</p>
`;
        }
        table(l) {
            let e = '',
                s = '';
            for (let t = 0; t < l.header.length; t++) s += this.tablecell(l.header[t]);
            e += this.tablerow({ text: s });
            let n = '';
            for (let t = 0; t < l.rows.length; t++) {
                let i = l.rows[t];
                s = '';
                for (let r = 0; r < i.length; r++) s += this.tablecell(i[r]);
                n += this.tablerow({ text: s });
            }
            return (
                n && (n = `<tbody>${n}</tbody>`),
                `<table>
<thead>
` +
                    e +
                    `</thead>
` +
                    n +
                    `</table>
`
            );
        }
        tablerow({ text: l }) {
            return `<tr>
${l}</tr>
`;
        }
        tablecell(l) {
            let e = this.parser.parseInline(l.tokens),
                s = l.header ? 'th' : 'td';
            return (
                (l.align ? `<${s} align="${l.align}">` : `<${s}>`) +
                e +
                `</${s}>
`
            );
        }
        strong({ tokens: l }) {
            return `<strong>${this.parser.parseInline(l)}</strong>`;
        }
        em({ tokens: l }) {
            return `<em>${this.parser.parseInline(l)}</em>`;
        }
        codespan({ text: l }) {
            return `<code>${P(l, !0)}</code>`;
        }
        br(l) {
            return '<br>';
        }
        del({ tokens: l }) {
            return `<del>${this.parser.parseInline(l)}</del>`;
        }
        link({ href: l, title: e, tokens: s }) {
            let n = this.parser.parseInline(s),
                t = fe(l);
            if (t === null) return n;
            l = t;
            let i = '<a href="' + l + '"';
            return (e && (i += ' title="' + P(e) + '"'), (i += '>' + n + '</a>'), i);
        }
        image({ href: l, title: e, text: s, tokens: n }) {
            n && (s = this.parser.parseInline(n, this.parser.textRenderer));
            let t = fe(l);
            if (t === null) return P(s);
            l = t;
            let i = `<img src="${l}" alt="${P(s)}"`;
            return (e && (i += ` title="${P(e)}"`), (i += '>'), i);
        }
        text(l) {
            return 'tokens' in l && l.tokens
                ? this.parser.parseInline(l.tokens)
                : 'escaped' in l && l.escaped
                  ? l.text
                  : P(l.text);
        }
    },
    he = class {
        strong({ text: l }) {
            return l;
        }
        em({ text: l }) {
            return l;
        }
        codespan({ text: l }) {
            return l;
        }
        del({ text: l }) {
            return l;
        }
        html({ text: l }) {
            return l;
        }
        text({ text: l }) {
            return l;
        }
        link({ text: l }) {
            return '' + l;
        }
        image({ text: l }) {
            return '' + l;
        }
        br() {
            return '';
        }
        checkbox({ raw: l }) {
            return l;
        }
    },
    I = class se {
        options;
        renderer;
        textRenderer;
        constructor(e) {
            ((this.options = e || D),
                (this.options.renderer = this.options.renderer || new V()),
                (this.renderer = this.options.renderer),
                (this.renderer.options = this.options),
                (this.renderer.parser = this),
                (this.textRenderer = new he()));
        }
        static parse(e, s) {
            return new se(s).parse(e);
        }
        static parseInline(e, s) {
            return new se(s).parseInline(e);
        }
        parse(e) {
            let s = '';
            for (let n = 0; n < e.length; n++) {
                let t = e[n];
                if (this.options.extensions?.renderers?.[t.type]) {
                    let r = t,
                        o = this.options.extensions.renderers[r.type].call({ parser: this }, r);
                    if (
                        o !== !1 ||
                        ![
                            'space',
                            'hr',
                            'heading',
                            'code',
                            'table',
                            'blockquote',
                            'list',
                            'html',
                            'def',
                            'paragraph',
                            'text',
                        ].includes(r.type)
                    ) {
                        s += o || '';
                        continue;
                    }
                }
                let i = t;
                switch (i.type) {
                    case 'space': {
                        s += this.renderer.space(i);
                        break;
                    }
                    case 'hr': {
                        s += this.renderer.hr(i);
                        break;
                    }
                    case 'heading': {
                        s += this.renderer.heading(i);
                        break;
                    }
                    case 'code': {
                        s += this.renderer.code(i);
                        break;
                    }
                    case 'table': {
                        s += this.renderer.table(i);
                        break;
                    }
                    case 'blockquote': {
                        s += this.renderer.blockquote(i);
                        break;
                    }
                    case 'list': {
                        s += this.renderer.list(i);
                        break;
                    }
                    case 'checkbox': {
                        s += this.renderer.checkbox(i);
                        break;
                    }
                    case 'html': {
                        s += this.renderer.html(i);
                        break;
                    }
                    case 'def': {
                        s += this.renderer.def(i);
                        break;
                    }
                    case 'paragraph': {
                        s += this.renderer.paragraph(i);
                        break;
                    }
                    case 'text': {
                        s += this.renderer.text(i);
                        break;
                    }
                    default: {
                        let r = 'Token with "' + i.type + '" type was not found.';
                        if (this.options.silent) return (console.error(r), '');
                        throw new Error(r);
                    }
                }
            }
            return s;
        }
        parseInline(e, s = this.renderer) {
            let n = '';
            for (let t = 0; t < e.length; t++) {
                let i = e[t];
                if (this.options.extensions?.renderers?.[i.type]) {
                    let o = this.options.extensions.renderers[i.type].call({ parser: this }, i);
                    if (
                        o !== !1 ||
                        !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(
                            i.type,
                        )
                    ) {
                        n += o || '';
                        continue;
                    }
                }
                let r = i;
                switch (r.type) {
                    case 'escape': {
                        n += s.text(r);
                        break;
                    }
                    case 'html': {
                        n += s.html(r);
                        break;
                    }
                    case 'link': {
                        n += s.link(r);
                        break;
                    }
                    case 'image': {
                        n += s.image(r);
                        break;
                    }
                    case 'checkbox': {
                        n += s.checkbox(r);
                        break;
                    }
                    case 'strong': {
                        n += s.strong(r);
                        break;
                    }
                    case 'em': {
                        n += s.em(r);
                        break;
                    }
                    case 'codespan': {
                        n += s.codespan(r);
                        break;
                    }
                    case 'br': {
                        n += s.br(r);
                        break;
                    }
                    case 'del': {
                        n += s.del(r);
                        break;
                    }
                    case 'text': {
                        n += s.text(r);
                        break;
                    }
                    default: {
                        let o = 'Token with "' + r.type + '" type was not found.';
                        if (this.options.silent) return (console.error(o), '');
                        throw new Error(o);
                    }
                }
            }
            return n;
        }
    },
    U = class {
        options;
        block;
        constructor(l) {
            this.options = l || D;
        }
        static passThroughHooks = new Set(['preprocess', 'postprocess', 'processAllTokens', 'emStrongMask']);
        static passThroughHooksRespectAsync = new Set(['preprocess', 'postprocess', 'processAllTokens']);
        preprocess(l) {
            return l;
        }
        postprocess(l) {
            return l;
        }
        processAllTokens(l) {
            return l;
        }
        emStrongMask(l) {
            return l;
        }
        provideLexer() {
            return this.block ? C.lex : C.lexInline;
        }
        provideParser() {
            return this.block ? I.parse : I.parseInline;
        }
    },
    Ct = class {
        defaults = le();
        options = this.setOptions;
        parse = this.parseMarkdown(!0);
        parseInline = this.parseMarkdown(!1);
        Parser = I;
        Renderer = V;
        TextRenderer = he;
        Lexer = C;
        Tokenizer = G;
        Hooks = U;
        constructor(...l) {
            this.use(...l);
        }
        walkTokens(l, e) {
            let s = [];
            for (let n of l)
                switch (((s = s.concat(e.call(this, n))), n.type)) {
                    case 'table': {
                        let t = n;
                        for (let i of t.header) s = s.concat(this.walkTokens(i.tokens, e));
                        for (let i of t.rows) for (let r of i) s = s.concat(this.walkTokens(r.tokens, e));
                        break;
                    }
                    case 'list': {
                        let t = n;
                        s = s.concat(this.walkTokens(t.items, e));
                        break;
                    }
                    default: {
                        let t = n;
                        this.defaults.extensions?.childTokens?.[t.type]
                            ? this.defaults.extensions.childTokens[t.type].forEach((i) => {
                                  let r = t[i].flat(1 / 0);
                                  s = s.concat(this.walkTokens(r, e));
                              })
                            : t.tokens && (s = s.concat(this.walkTokens(t.tokens, e)));
                    }
                }
            return s;
        }
        use(...l) {
            let e = this.defaults.extensions || { renderers: {}, childTokens: {} };
            return (
                l.forEach((s) => {
                    let n = { ...s };
                    if (
                        ((n.async = this.defaults.async || n.async || !1),
                        s.extensions &&
                            (s.extensions.forEach((t) => {
                                if (!t.name) throw new Error('extension name required');
                                if ('renderer' in t) {
                                    let i = e.renderers[t.name];
                                    i
                                        ? (e.renderers[t.name] = function (...r) {
                                              let o = t.renderer.apply(this, r);
                                              return (o === !1 && (o = i.apply(this, r)), o);
                                          })
                                        : (e.renderers[t.name] = t.renderer);
                                }
                                if ('tokenizer' in t) {
                                    if (!t.level || (t.level !== 'block' && t.level !== 'inline'))
                                        throw new Error("extension level must be 'block' or 'inline'");
                                    let i = e[t.level];
                                    (i ? i.unshift(t.tokenizer) : (e[t.level] = [t.tokenizer]),
                                        t.start &&
                                            (t.level === 'block'
                                                ? e.startBlock
                                                    ? e.startBlock.push(t.start)
                                                    : (e.startBlock = [t.start])
                                                : t.level === 'inline' &&
                                                  (e.startInline
                                                      ? e.startInline.push(t.start)
                                                      : (e.startInline = [t.start]))));
                                }
                                'childTokens' in t && t.childTokens && (e.childTokens[t.name] = t.childTokens);
                            }),
                            (n.extensions = e)),
                        s.renderer)
                    ) {
                        let t = this.defaults.renderer || new V(this.defaults);
                        for (let i in s.renderer) {
                            if (!(i in t)) throw new Error(`renderer '${i}' does not exist`);
                            if (['options', 'parser'].includes(i)) continue;
                            let r = i,
                                o = s.renderer[r],
                                a = t[r];
                            t[r] = (...h) => {
                                let c = o.apply(t, h);
                                return (c === !1 && (c = a.apply(t, h)), c || '');
                            };
                        }
                        n.renderer = t;
                    }
                    if (s.tokenizer) {
                        let t = this.defaults.tokenizer || new G(this.defaults);
                        for (let i in s.tokenizer) {
                            if (!(i in t)) throw new Error(`tokenizer '${i}' does not exist`);
                            if (['options', 'rules', 'lexer'].includes(i)) continue;
                            let r = i,
                                o = s.tokenizer[r],
                                a = t[r];
                            t[r] = (...h) => {
                                let c = o.apply(t, h);
                                return (c === !1 && (c = a.apply(t, h)), c);
                            };
                        }
                        n.tokenizer = t;
                    }
                    if (s.hooks) {
                        let t = this.defaults.hooks || new U();
                        for (let i in s.hooks) {
                            if (!(i in t)) throw new Error(`hook '${i}' does not exist`);
                            if (['options', 'block'].includes(i)) continue;
                            let r = i,
                                o = s.hooks[r],
                                a = t[r];
                            U.passThroughHooks.has(i)
                                ? (t[r] = (h) => {
                                      if (this.defaults.async && U.passThroughHooksRespectAsync.has(i))
                                          return (async () => {
                                              let g = await o.call(t, h);
                                              return a.call(t, g);
                                          })();
                                      let c = o.call(t, h);
                                      return a.call(t, c);
                                  })
                                : (t[r] = (...h) => {
                                      if (this.defaults.async)
                                          return (async () => {
                                              let g = await o.apply(t, h);
                                              return (g === !1 && (g = await a.apply(t, h)), g);
                                          })();
                                      let c = o.apply(t, h);
                                      return (c === !1 && (c = a.apply(t, h)), c);
                                  });
                        }
                        n.hooks = t;
                    }
                    if (s.walkTokens) {
                        let t = this.defaults.walkTokens,
                            i = s.walkTokens;
                        n.walkTokens = function (r) {
                            let o = [];
                            return (o.push(i.call(this, r)), t && (o = o.concat(t.call(this, r))), o);
                        };
                    }
                    this.defaults = { ...this.defaults, ...n };
                }),
                this
            );
        }
        setOptions(l) {
            return ((this.defaults = { ...this.defaults, ...l }), this);
        }
        lexer(l, e) {
            return C.lex(l, e ?? this.defaults);
        }
        parser(l, e) {
            return I.parse(l, e ?? this.defaults);
        }
        parseMarkdown(l) {
            return (e, s) => {
                let n = { ...s },
                    t = { ...this.defaults, ...n },
                    i = this.onError(!!t.silent, !!t.async);
                if (this.defaults.async === !0 && n.async === !1)
                    return i(
                        new Error(
                            'marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.',
                        ),
                    );
                if (typeof e > 'u' || e === null) return i(new Error('marked(): input parameter is undefined or null'));
                if (typeof e != 'string')
                    return i(
                        new Error(
                            'marked(): input parameter is of type ' +
                                Object.prototype.toString.call(e) +
                                ', string expected',
                        ),
                    );
                if ((t.hooks && ((t.hooks.options = t), (t.hooks.block = l)), t.async))
                    return (async () => {
                        let r = t.hooks ? await t.hooks.preprocess(e) : e,
                            o = await (t.hooks ? await t.hooks.provideLexer() : l ? C.lex : C.lexInline)(r, t),
                            a = t.hooks ? await t.hooks.processAllTokens(o) : o;
                        t.walkTokens && (await Promise.all(this.walkTokens(a, t.walkTokens)));
                        let h = await (t.hooks ? await t.hooks.provideParser() : l ? I.parse : I.parseInline)(a, t);
                        return t.hooks ? await t.hooks.postprocess(h) : h;
                    })().catch(i);
                try {
                    t.hooks && (e = t.hooks.preprocess(e));
                    let r = (t.hooks ? t.hooks.provideLexer() : l ? C.lex : C.lexInline)(e, t);
                    (t.hooks && (r = t.hooks.processAllTokens(r)), t.walkTokens && this.walkTokens(r, t.walkTokens));
                    let o = (t.hooks ? t.hooks.provideParser() : l ? I.parse : I.parseInline)(r, t);
                    return (t.hooks && (o = t.hooks.postprocess(o)), o);
                } catch (r) {
                    return i(r);
                }
            };
        }
        onError(l, e) {
            return (s) => {
                if (
                    ((s.message += `
Please report this to https://github.com/markedjs/marked.`),
                    l)
                ) {
                    let n = '<p>An error occurred:</p><pre>' + P(s.message + '', !0) + '</pre>';
                    return e ? Promise.resolve(n) : n;
                }
                if (e) return Promise.reject(s);
                throw s;
            };
        }
    },
    W = new Ct();
function x(l, e) {
    return W.parse(l, e);
}
x.options = x.setOptions = function (l) {
    return (W.setOptions(l), (x.defaults = W.defaults), xe(x.defaults), x);
};
x.getDefaults = le;
x.defaults = D;
x.use = function (...l) {
    return (W.use(...l), (x.defaults = W.defaults), xe(x.defaults), x);
};
x.walkTokens = function (l, e) {
    return W.walkTokens(l, e);
};
x.parseInline = W.parseInline;
x.Parser = I;
x.parser = I.parse;
x.Renderer = V;
x.TextRenderer = he;
x.Lexer = C;
x.lexer = C.lex;
x.Tokenizer = G;
x.Hooks = U;
x.parse = x;
x.options;
x.setOptions;
x.use;
x.walkTokens;
x.parseInline;
I.parse;
C.lex;
const It = { key: 0, id: 'main', class: 'lpShare' },
    zt = { class: 'lpListName' },
    Pt = { class: 'lpListSummary' },
    At = { class: 'lpChartContainer' },
    Lt = { class: 'lpTotalsContainer' },
    Wt = { class: 'lpTotals lpTable lpDataTable' },
    Dt = { class: 'lpRow lpHeader' },
    Bt = { key: 0, class: 'lpCell' },
    qt = ['id', 'category'],
    Et = { class: 'lpCell lpLegendCell' },
    Nt = { class: 'lpCell' },
    Ft = { key: 0, class: 'lpCell lpNumber' },
    Ut = { class: 'lpCell lpNumber' },
    Qt = { class: 'lpSubtotal' },
    Zt = ['mg'],
    Ht = { class: 'lpSubtotalUnit' },
    Mt = { class: 'lpRow lpFooter lpTotal' },
    jt = ['title'],
    Ot = { key: 0, class: 'lpCell lpNumber lpSubtotal' },
    Gt = { class: 'lpCell lpNumber lpSubtotal' },
    Vt = ['title'],
    Xt = { class: 'lpTotalUnit' },
    Jt = { key: 0, class: 'lpRow lpFooter lpBreakdown lpConsumableWeight' },
    Kt = { key: 0, class: 'lpCell' },
    Yt = { class: 'lpCell lpNumber lpSubtotal' },
    es = ['mg'],
    ts = { class: 'lpSubtotalUnit' },
    ss = { key: 1, class: 'lpRow lpFooter lpBreakdown lpWornWeight' },
    ls = { key: 0, class: 'lpCell' },
    ns = { class: 'lpCell lpNumber lpSubtotal' },
    rs = ['mg'],
    is = { class: 'lpSubtotalUnit' },
    as = { key: 2, class: 'lpRow lpFooter lpBreakdown lpPackWeight' },
    os = { key: 0, class: 'lpCell' },
    cs = { class: 'lpCell lpNumber lpSubtotal' },
    ps = ['mg'],
    hs = { class: 'lpSubtotalUnit' },
    us = ['innerHTML'],
    gs = { class: 'lpCategories' },
    ds = ['id'],
    ks = { class: 'lpItems lpDataTable' },
    fs = { class: 'lpHeader lpItemsHeader' },
    bs = { class: 'lpCategoryName' },
    ms = { key: 0, class: 'lpPriceCell' },
    xs = ['id'],
    ws = { key: 0, class: 'lpImageCell' },
    ys = ['src', 'href'],
    _s = ['src', 'href'],
    Ss = { class: 'lpName' },
    $s = ['href'],
    Rs = { class: 'lpDescription' },
    vs = { class: 'lpActionsCell' },
    Ts = { key: 1, class: 'lpPriceCell lpNumber' },
    Cs = { class: 'lpWeightCell lpNumber' },
    Is = { class: 'lpWeight' },
    zs = { class: 'lpUnitSelect' },
    Ps = { class: 'lpDisplay' },
    As = ['qty'],
    Ls = { class: 'lpFooter lpItemsFooter' },
    Ws = { key: 0, class: 'lpPriceCell lpNumber' },
    Ds = { class: 'lpPriceSubtotal' },
    Bs = { class: 'lpWeightCell lpNumber' },
    qs = { class: 'lpSubtotal' },
    Es = ['mg'],
    Ns = { class: 'lpSubtotalUnit' },
    Fs = { class: 'lpQtyCell lpNumber' },
    Us = { class: 'lpSubtotal' },
    Qs = { class: 'lpQtySubtotal' },
    Zs = { key: 1, id: 'main', class: 'lpShare' },
    js = {
        __name: '[id]',
        async setup(l) {
            let e, s;
            const { Library: n } = De,
                t = Be(),
                { data: i, error: r } =
                    (([e, s] = Ae(() => We('share', () => $fetch(`/api/share/${t.params.id}`)))),
                    (e = await e),
                    s(),
                    e),
                o = q(() => {
                    if (!i.value) return null;
                    const w = new n();
                    w.load(i.value.library);
                    for (const u of w.lists)
                        if (u.externalId && u.externalId == i.value.externalId) {
                            w.defaultListId = u.id;
                            break;
                        }
                    for (const u of w.categories) u.calculateSubtotal();
                    return w;
                }),
                a = q(() => (o.value ? o.value.getListById(o.value.defaultListId) : null)),
                h = q(() =>
                    !o.value || !a.value
                        ? []
                        : a.value.categoryIds.map((w) => o.value.getCategoryById(w)).filter(Boolean),
                ),
                c = q(() => h.value.reduce((w, u) => w + u.subtotalWeight, 0)),
                g = q(() => {
                    let w = 0,
                        u = 0,
                        A = 0,
                        $ = 0,
                        f = 0,
                        z = 0;
                    for (const B of h.value)
                        ((w += B.subtotalWeight),
                            (f += B.subtotalPrice),
                            (u += B.subtotalWornWeight),
                            (A += B.subtotalConsumableWeight),
                            (z += B.subtotalConsumablePrice),
                            ($ += B.subtotalQty));
                    const K = w - (u + A),
                        H = o.value?.totalUnit ?? 'oz';
                    return {
                        totalWeight: w,
                        totalWeightDisplay: S(w, H),
                        totalWornWeight: u,
                        totalWornWeightDisplay: S(u, H),
                        totalConsumableWeight: A,
                        totalConsumableWeightDisplay: S(A, H),
                        totalPackWeight: K,
                        totalPackWeightDisplay: S(K, H),
                        shouldDisplayPackWeight: K !== w,
                        totalQty: $,
                        totalPrice: f,
                        totalPriceDisplay: f ? f.toFixed(2) : '',
                        totalConsumablePrice: z,
                        totalConsumablePriceDisplay: z ? z.toFixed(2) : '',
                    };
                }),
                k = q(() => (a.value?.description ? x(a.value.description) : ''));
            function S(w, u) {
                return qe.MgToWeight(w, u);
            }
            function d(w) {
                return o.value?.getItemById(w) ?? {};
            }
            function T(w) {
                const u = d(w.itemId);
                return { lpItemHasImage: !!(u.image || u.imageUrl), lpItemHasPrice: !!u.price };
            }
            function Z(w) {
                return w.star ? `lpStar${w.star}` : '';
            }
            return (w, u) => {
                const A = Pe;
                return o.value && a.value
                    ? (_(),
                      y('div', It, [
                          p(
                              'div',
                              {
                                  class: E([
                                      'lpList',
                                      {
                                          lpShowImages: o.value.optionalFields.images,
                                          lpShowWorn: o.value.optionalFields.worn,
                                          lpShowConsumable: o.value.optionalFields.consumable,
                                          lpShowPrices: o.value.optionalFields.price,
                                      },
                                  ]),
                              },
                              [
                                  p('h1', zt, m(a.value.name), 1),
                                  p('div', Pt, [
                                      p('div', At, [
                                          Le(
                                              A,
                                              { categories: h.value, 'total-weight': c.value, library: o.value },
                                              null,
                                              8,
                                              ['categories', 'total-weight', 'library'],
                                          ),
                                      ]),
                                      p('div', Lt, [
                                          p('ul', Wt, [
                                              p('li', Dt, [
                                                  u[0] || (u[0] = p('span', { class: 'lpCell' }, ' ', -1)),
                                                  u[1] || (u[1] = p('span', { class: 'lpCell' }, 'Category', -1)),
                                                  o.value.optionalFields.price
                                                      ? (_(), y('span', Bt, 'Price'))
                                                      : R('', !0),
                                                  u[2] || (u[2] = p('span', { class: 'lpCell' }, 'Weight', -1)),
                                              ]),
                                              (_(!0),
                                              y(
                                                  M,
                                                  null,
                                                  Y(
                                                      h.value,
                                                      ($) => (
                                                          _(),
                                                          y(
                                                              'li',
                                                              {
                                                                  key: $.id,
                                                                  class: 'lpTotalCategory lpRow',
                                                                  id: `total_${$.id}`,
                                                                  category: $.id,
                                                              },
                                                              [
                                                                  p('span', Et, [
                                                                      p(
                                                                          'span',
                                                                          {
                                                                              class: 'lpLegend',
                                                                              style: Ee({
                                                                                  backgroundColor: $.displayColor,
                                                                              }),
                                                                          },
                                                                          null,
                                                                          4,
                                                                      ),
                                                                  ]),
                                                                  p('span', Nt, m($.name), 1),
                                                                  o.value.optionalFields.price
                                                                      ? (_(),
                                                                        y(
                                                                            'span',
                                                                            Ft,
                                                                            m(o.value.currencySymbol) +
                                                                                m(
                                                                                    $.subtotalPrice
                                                                                        ? $.subtotalPrice.toFixed(2)
                                                                                        : '0.00',
                                                                                ),
                                                                            1,
                                                                        ))
                                                                      : R('', !0),
                                                                  p('span', Ut, [
                                                                      p('div', Qt, [
                                                                          p(
                                                                              'span',
                                                                              {
                                                                                  class: 'lpDisplaySubtotal',
                                                                                  mg: $.subtotalWeight,
                                                                              },
                                                                              m(S($.subtotalWeight, o.value.totalUnit)),
                                                                              9,
                                                                              Zt,
                                                                          ),
                                                                          p('span', Ht, m(o.value.totalUnit), 1),
                                                                      ]),
                                                                  ]),
                                                              ],
                                                              8,
                                                              qt,
                                                          )
                                                      ),
                                                  ),
                                                  128,
                                              )),
                                              p('li', Mt, [
                                                  u[3] || (u[3] = p('span', { class: 'lpCell' }, null, -1)),
                                                  p(
                                                      'span',
                                                      {
                                                          class: 'lpCell lpSubtotal',
                                                          title: `${g.value.totalQty} items`,
                                                      },
                                                      'Total',
                                                      8,
                                                      jt,
                                                  ),
                                                  o.value.optionalFields.price
                                                      ? (_(),
                                                        y(
                                                            'span',
                                                            Ot,
                                                            m(o.value.currencySymbol) + m(g.value.totalPriceDisplay),
                                                            1,
                                                        ))
                                                      : R('', !0),
                                                  p('span', Gt, [
                                                      p(
                                                          'span',
                                                          { class: 'lpTotalValue', title: `${g.value.totalQty} items` },
                                                          m(g.value.totalWeightDisplay),
                                                          9,
                                                          Vt,
                                                      ),
                                                      p('span', Xt, m(o.value.totalUnit), 1),
                                                  ]),
                                              ]),
                                              g.value.totalConsumableWeight
                                                  ? (_(),
                                                    y('li', Jt, [
                                                        u[4] || (u[4] = p('span', { class: 'lpCell' }, null, -1)),
                                                        u[5] ||
                                                            (u[5] = p(
                                                                'span',
                                                                { class: 'lpCell lpSubtotal' },
                                                                'Consumable',
                                                                -1,
                                                            )),
                                                        o.value.optionalFields.price ? (_(), y('span', Kt)) : R('', !0),
                                                        p('span', Yt, [
                                                            p(
                                                                'span',
                                                                {
                                                                    class: 'lpDisplaySubtotal',
                                                                    mg: g.value.totalConsumableWeight,
                                                                },
                                                                m(g.value.totalConsumableWeightDisplay),
                                                                9,
                                                                es,
                                                            ),
                                                            p('span', ts, m(o.value.totalUnit), 1),
                                                        ]),
                                                    ]))
                                                  : R('', !0),
                                              g.value.totalWornWeight
                                                  ? (_(),
                                                    y('li', ss, [
                                                        u[6] || (u[6] = p('span', { class: 'lpCell' }, null, -1)),
                                                        u[7] ||
                                                            (u[7] = p(
                                                                'span',
                                                                { class: 'lpCell lpSubtotal' },
                                                                'Worn',
                                                                -1,
                                                            )),
                                                        o.value.optionalFields.price ? (_(), y('span', ls)) : R('', !0),
                                                        p('span', ns, [
                                                            p(
                                                                'span',
                                                                {
                                                                    class: 'lpDisplaySubtotal',
                                                                    mg: g.value.totalWornWeight,
                                                                },
                                                                m(g.value.totalWornWeightDisplay),
                                                                9,
                                                                rs,
                                                            ),
                                                            p('span', is, m(o.value.totalUnit), 1),
                                                        ]),
                                                    ]))
                                                  : R('', !0),
                                              g.value.shouldDisplayPackWeight
                                                  ? (_(),
                                                    y('li', as, [
                                                        u[8] || (u[8] = p('span', { class: 'lpCell' }, null, -1)),
                                                        u[9] ||
                                                            (u[9] = p(
                                                                'span',
                                                                { class: 'lpCell lpSubtotal' },
                                                                'Base Weight',
                                                                -1,
                                                            )),
                                                        o.value.optionalFields.price ? (_(), y('span', os)) : R('', !0),
                                                        p('span', cs, [
                                                            p(
                                                                'span',
                                                                {
                                                                    class: 'lpDisplaySubtotal',
                                                                    mg: g.value.totalPackWeight,
                                                                },
                                                                m(g.value.totalPackWeightDisplay),
                                                                9,
                                                                ps,
                                                            ),
                                                            p('span', hs, m(o.value.totalUnit), 1),
                                                        ]),
                                                    ]))
                                                  : R('', !0),
                                          ]),
                                      ]),
                                  ]),
                                  u[12] || (u[12] = p('div', { style: { clear: 'both' } }, null, -1)),
                                  k.value
                                      ? (_(),
                                        y('div', { key: 0, id: 'lpListDescription', innerHTML: k.value }, null, 8, us))
                                      : R('', !0),
                                  p('ul', gs, [
                                      (_(!0),
                                      y(
                                          M,
                                          null,
                                          Y(
                                              h.value,
                                              ($) => (
                                                  _(),
                                                  y(
                                                      'li',
                                                      { key: $.id, class: 'lpCategory', id: $.id },
                                                      [
                                                          p('ul', ks, [
                                                              p('li', fs, [
                                                                  p('h2', bs, m($.name), 1),
                                                                  o.value.optionalFields.price
                                                                      ? (_(), y('span', ms, 'Price'))
                                                                      : R('', !0),
                                                                  u[10] ||
                                                                      (u[10] = p(
                                                                          'span',
                                                                          { class: 'lpWeightCell' },
                                                                          'Weight',
                                                                          -1,
                                                                      )),
                                                                  u[11] ||
                                                                      (u[11] = p(
                                                                          'span',
                                                                          { class: 'lpQtyCell' },
                                                                          'qty',
                                                                          -1,
                                                                      )),
                                                              ]),
                                                              (_(!0),
                                                              y(
                                                                  M,
                                                                  null,
                                                                  Y(
                                                                      $.categoryItems,
                                                                      (f) => (
                                                                          _(),
                                                                          y(
                                                                              'li',
                                                                              {
                                                                                  key: f.itemId,
                                                                                  class: E(['lpItem', T(f)]),
                                                                                  id: f.itemId,
                                                                              },
                                                                              [
                                                                                  o.value.optionalFields.images
                                                                                      ? (_(),
                                                                                        y('span', ws, [
                                                                                            d(f.itemId).image
                                                                                                ? (_(),
                                                                                                  y(
                                                                                                      'img',
                                                                                                      {
                                                                                                          key: 0,
                                                                                                          class: 'lpItemImage',
                                                                                                          src: `https://i.imgur.com/${d(f.itemId).image}s.jpg`,
                                                                                                          href: `https://i.imgur.com/${d(f.itemId).image}l.jpg`,
                                                                                                      },
                                                                                                      null,
                                                                                                      8,
                                                                                                      ys,
                                                                                                  ))
                                                                                                : d(f.itemId).imageUrl
                                                                                                  ? (_(),
                                                                                                    y(
                                                                                                        'img',
                                                                                                        {
                                                                                                            key: 1,
                                                                                                            class: 'lpItemImage',
                                                                                                            src: d(
                                                                                                                f.itemId,
                                                                                                            ).imageUrl,
                                                                                                            href: d(
                                                                                                                f.itemId,
                                                                                                            ).imageUrl,
                                                                                                        },
                                                                                                        null,
                                                                                                        8,
                                                                                                        _s,
                                                                                                    ))
                                                                                                  : R('', !0),
                                                                                        ]))
                                                                                      : R('', !0),
                                                                                  p('span', Ss, [
                                                                                      d(f.itemId).url
                                                                                          ? (_(),
                                                                                            y(
                                                                                                'a',
                                                                                                {
                                                                                                    key: 0,
                                                                                                    href: d(f.itemId)
                                                                                                        .url,
                                                                                                    class: 'lpHref',
                                                                                                },
                                                                                                m(d(f.itemId).name),
                                                                                                9,
                                                                                                $s,
                                                                                            ))
                                                                                          : (_(),
                                                                                            y(
                                                                                                M,
                                                                                                { key: 1 },
                                                                                                [
                                                                                                    Ne(
                                                                                                        m(
                                                                                                            d(f.itemId)
                                                                                                                .name,
                                                                                                        ),
                                                                                                        1,
                                                                                                    ),
                                                                                                ],
                                                                                                64,
                                                                                            )),
                                                                                  ]),
                                                                                  p(
                                                                                      'span',
                                                                                      Rs,
                                                                                      m(d(f.itemId).description),
                                                                                      1,
                                                                                  ),
                                                                                  p('span', vs, [
                                                                                      p(
                                                                                          'i',
                                                                                          {
                                                                                              class: E([
                                                                                                  'lpSprite lpWorn',
                                                                                                  { lpActive: f.worn },
                                                                                              ]),
                                                                                              title: 'This item is worn and not counted in pack weight.',
                                                                                          },
                                                                                          null,
                                                                                          2,
                                                                                      ),
                                                                                      p(
                                                                                          'i',
                                                                                          {
                                                                                              class: E([
                                                                                                  'lpSprite lpConsumable',
                                                                                                  {
                                                                                                      lpActive:
                                                                                                          f.consumable,
                                                                                                  },
                                                                                              ]),
                                                                                              title: 'This item is a consumable and not counted in pack weight.',
                                                                                          },
                                                                                          null,
                                                                                          2,
                                                                                      ),
                                                                                      p(
                                                                                          'i',
                                                                                          {
                                                                                              class: E([
                                                                                                  'lpSprite lpStar',
                                                                                                  [
                                                                                                      Z(d(f.itemId)),
                                                                                                      {
                                                                                                          lpHidden: !d(
                                                                                                              f.itemId,
                                                                                                          ).star,
                                                                                                      },
                                                                                                  ],
                                                                                              ]),
                                                                                              title: 'This item is starred',
                                                                                          },
                                                                                          null,
                                                                                          2,
                                                                                      ),
                                                                                  ]),
                                                                                  o.value.optionalFields.price
                                                                                      ? (_(),
                                                                                        y(
                                                                                            'span',
                                                                                            Ts,
                                                                                            m(o.value.currencySymbol) +
                                                                                                m(
                                                                                                    d(f.itemId).price
                                                                                                        ? d(
                                                                                                              f.itemId,
                                                                                                          ).price.toFixed(
                                                                                                              2,
                                                                                                          )
                                                                                                        : '0.00',
                                                                                                ),
                                                                                            1,
                                                                                        ))
                                                                                      : R('', !0),
                                                                                  p('span', Cs, [
                                                                                      p(
                                                                                          'span',
                                                                                          Is,
                                                                                          m(
                                                                                              S(
                                                                                                  d(f.itemId).weight,
                                                                                                  d(f.itemId)
                                                                                                      .authorUnit,
                                                                                              ),
                                                                                          ),
                                                                                          1,
                                                                                      ),
                                                                                      p('div', zs, [
                                                                                          p(
                                                                                              'span',
                                                                                              Ps,
                                                                                              m(d(f.itemId).authorUnit),
                                                                                              1,
                                                                                          ),
                                                                                      ]),
                                                                                  ]),
                                                                                  p(
                                                                                      'span',
                                                                                      {
                                                                                          class: 'lpQtyCell lpNumber',
                                                                                          qty: f.qty,
                                                                                      },
                                                                                      m(f.qty),
                                                                                      9,
                                                                                      As,
                                                                                  ),
                                                                              ],
                                                                              10,
                                                                              xs,
                                                                          )
                                                                      ),
                                                                  ),
                                                                  128,
                                                              )),
                                                              p('li', Ls, [
                                                                  o.value.optionalFields.price
                                                                      ? (_(),
                                                                        y('span', Ws, [
                                                                            p(
                                                                                'div',
                                                                                Ds,
                                                                                m(o.value.currencySymbol) +
                                                                                    m(
                                                                                        $.subtotalPrice
                                                                                            ? $.subtotalPrice.toFixed(2)
                                                                                            : '0.00',
                                                                                    ),
                                                                                1,
                                                                            ),
                                                                        ]))
                                                                      : R('', !0),
                                                                  p('span', Bs, [
                                                                      p('div', qs, [
                                                                          p(
                                                                              'span',
                                                                              {
                                                                                  class: 'lpDisplaySubtotal',
                                                                                  mg: $.subtotalWeight,
                                                                              },
                                                                              m(S($.subtotalWeight, o.value.totalUnit)),
                                                                              9,
                                                                              Es,
                                                                          ),
                                                                          p('span', Ns, m(o.value.totalUnit), 1),
                                                                      ]),
                                                                  ]),
                                                                  p('span', Fs, [
                                                                      p('div', Us, [
                                                                          p('span', Qs, m($.subtotalQty), 1),
                                                                      ]),
                                                                  ]),
                                                              ]),
                                                          ]),
                                                      ],
                                                      8,
                                                      ds,
                                                  )
                                              ),
                                          ),
                                          128,
                                      )),
                                  ]),
                              ],
                              2,
                          ),
                      ]))
                    : ue(r)
                      ? (_(), y('div', Zs, [p('p', null, m(ue(r).message || 'List not found.'), 1)]))
                      : R('', !0);
            };
        },
    };
export { js as default };
