import { _ as p } from './CPlW2tBH.js';
import { _ as m } from './DXkiCk90.js';
import { _ as u } from './COR29gkO.js';
import { _ as d } from './CHnPISrF.js';
import { E as _, D as g, G as h, c as f, a as e, d as t, b as s, H as v, I as k, o as W } from './BSiOiLzB.js';
import './DXNVRMz3.js';
const y = _('/images/screenshot.jpg'),
    C = { id: 'lpWelcomeContainer' },
    S = { id: 'lpWelcome', class: 'lpContainer' },
    V = { class: 'lpWelcomeContent' },
    b = { class: 'lpWelcomeRegisterContainer' },
    L = { class: 'lpWelcomeRegister' },
    B = { class: 'lpWelcomeSigninContainer' },
    A = Object.assign(
        { name: 'Welcome' },
        {
            __name: 'welcome',
            setup(P) {
                const n = g(),
                    i = k();
                return (
                    h(() => {
                        n.library && i.push('/');
                    }),
                    (R, o) => {
                        const r = p,
                            a = m,
                            l = u,
                            c = d;
                        return (
                            W(),
                            f('div', C, [
                                o[4] ||
                                    (o[4] = e(
                                        'div',
                                        { id: 'lpLaunchBanner' },
                                        [
                                            e('div', { class: 'lpContainer' }, [
                                                e('strong', null, 'Welcome to the new version of LighterPack!'),
                                                t(' We hope you like it, and if you have any questions please '),
                                                e(
                                                    'a',
                                                    { href: 'mailto:info@lighterpack.com', class: 'lpHref' },
                                                    'get in touch',
                                                ),
                                                t('. '),
                                            ]),
                                        ],
                                        -1,
                                    )),
                                e('div', S, [
                                    o[3] ||
                                        (o[3] = e(
                                            'h1',
                                            null,
                                            [
                                                e('strong', null, 'LighterPack'),
                                                t(' helps you track the gear you bring on adventures.'),
                                            ],
                                            -1,
                                        )),
                                    e('div', V, [
                                        e('div', b, [
                                            e('div', L, [
                                                o[0] ||
                                                    (o[0] = e(
                                                        'h3',
                                                        { class: 'lpWelcomeContainerHeader' },
                                                        'Register an account',
                                                        -1,
                                                    )),
                                                s(r),
                                            ]),
                                            o[1] ||
                                                (o[1] = v(
                                                    '<div class="lpValuePropContainer"><ul id="lpValueProp"><li id="valueEnter"><h3><strong>1.</strong>Enter your packing lists</h3></li><li id="valueVisualize"><h3><strong>2.</strong>Visualize your pack weights</h3></li><li id="valueShare"><h3><strong>3.</strong>Share your lists with others</h3></li></ul><img id="lpWelcomeScreenshot" src="' +
                                                        y +
                                                        '" alt="A screenshot of the LighterPack interface"></div>',
                                                    1,
                                                )),
                                        ]),
                                        e('div', B, [
                                            o[2] ||
                                                (o[2] = e('h3', { class: 'lpWelcomeContainerHeader' }, 'Sign in', -1)),
                                            s(a),
                                        ]),
                                    ]),
                                ]),
                                s(l),
                                s(c),
                            ])
                        );
                    }
                );
            },
        },
    );
export { A as default };
