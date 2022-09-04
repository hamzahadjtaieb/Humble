(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        45301: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() { return n(4013) }])
        },
        54113: function(e, t, n) {
            "use strict";
            n.d(t, { Z: function() { return s } });
            var o = n(85893),
                i = n(68527),
                r = n(75814);

            function s(e) {
                var t = e.link,
                    n = e.children,
                    s = e.style;
                return (0, o.jsx)(r.E.button, { whileHover: { scale: 1.05 }, whileTap: { scale: .95 }, style: s, children: (0, o.jsx)(i.rU, { href: t, isExternal: !0, style: { textDecoration: "none" }, w: "full", children: n }) })
            }
        },
        41795: function(e, t, n) {
            "use strict";
            n.d(t, { Z: function() { return u } });
            var o = n(85893),
                i = n(70655),
                r = n(67294);
            const s = { any: 0, all: 1 };

            function a(e, t, { root: n, margin: o, amount: i = "any" } = {}) {
                if ("undefined" === typeof IntersectionObserver) return () => {};
                const r = function(e, t) { var n; return "string" === typeof e ? t ? (null !== (n = t[e]) && void 0 !== n || (t[e] = document.querySelectorAll(e)), e = t[e]) : e = document.querySelectorAll(e) : e instanceof Element && (e = [e]), Array.from(e || []) }(e),
                    a = new WeakMap,
                    l = new IntersectionObserver((e => {
                        e.forEach((e => {
                            const n = a.get(e.target);
                            if (e.isIntersecting !== Boolean(n))
                                if (e.isIntersecting) { const n = t(e); "function" === typeof n ? a.set(e.target, n) : l.unobserve(e.target) } else n && (n(e), a.delete(e.target))
                        }))
                    }), { root: n, rootMargin: o, threshold: "number" === typeof i ? i : s[i] });
                return r.forEach((e => l.observe(e))), () => l.disconnect()
            }

            function l(e, t) {
                var n = void 0 === t ? {} : t,
                    o = n.root,
                    s = n.margin,
                    l = n.amount,
                    m = n.once,
                    c = void 0 !== m && m,
                    g = (0, i.CR)((0, r.useState)(!1), 2),
                    h = g[0],
                    u = g[1];
                return (0, r.useEffect)((function() { var t; if (!(!e.current || c && h)) { var n = { root: null !== (t = null === o || void 0 === o ? void 0 : o.current) && void 0 !== t ? t : void 0, margin: s, amount: "some" === l ? "any" : l }; return a(e.current, (function() { return u(!0), c ? void 0 : function() { return u(!1) } }), n) } }), [o, e, s, c]), h
            }
            var m = n(75814),
                c = ["M161.839 266.5C161.839 188.7 161.139 125 161.139 125C161.139 125 145.539 134.2 127.339 145.4L94.3392 165.7L94.0392 125.1C93.9392 102.8 94.0392 84 94.2392 83.5C94.4392 82.9 110.539 72.9 130.039 61.2L165.339 40H202.139H238.839V224V408H200.339H161.839V266.5Z", "M36.1 376.699V345.397L64.8 320.396C80.6 306.615 116.2 275.413 144 251.198C171.8 226.984 197.7 203.754 201.4 199.522C205.7 194.699 209.9 188.596 212.9 182.69C217.4 173.831 217.6 173.142 217.9 163.496C218.6 146.762 214.1 134.36 203.6 123.926C190.3 110.638 168.7 106.209 148.9 112.705C128.4 119.497 114.1 138.297 114.1 158.476V165.858H75H36L36.6 156.31C37.6 141.742 39.8 129.045 43.1 119.398C60.6 67.9187 111.1 37.5033 175 40.161C209.7 41.539 238.1 53.3508 260.6 75.6948C273.6 88.4909 283 103.354 288.7 119.891C299 149.617 297.5 189.777 285.3 213.794C275.7 232.398 266.1 242.044 201.2 298.15C177 319.116 156.6 337.228 156.6 337.228C156.6 337.228 182.5 338.114 226 338.114H296.1V373.057V408H166.1H36.1V376.699Z", "M47.6 334.153C64 369.489 102.4 397.245 143.5 403.545C162.4 406.399 183.9 405.021 202.5 399.706C241.7 388.485 275.7 356.398 287.4 319.684C301 276.868 288.8 227.162 257.2 196.65C248.3 188.185 235.8 179.72 225.2 175.192C221 173.421 217.5 171.846 217.5 171.846C217.5 171.846 233.4 155.802 252.4 137.692L287 104.817V70.8591V37H170.5H54V72.434V107.868H123.1H192.2L149.4 142.908C125.8 162.2 105.3 178.933 103.8 180.114L101 182.181L117.5 210.725C126.5 226.375 135 240.253 135 240.253C135 240.253 138 238.777 140.7 237.497C148.6 233.56 155.7 231.887 164.9 231.887C179.6 231.887 189.4 235.627 199.6 244.978C211.9 256.198 216.2 265.943 216.4 282.577C216.5 295.963 214.7 302.164 207.5 312.598C201.4 321.456 191.5 328.936 181.3 332.48C175.7 334.35 172.5 334.744 163.5 334.645C154.1 334.645 151.5 334.252 145.7 331.988C137.2 328.74 129 323.425 124.4 318.208C118.05 310.356 115.21 305.181 112.1 293.896L40.4 312.893C40.4 312.893 43.5 325.295 47.6 334.153Z", "M190 380V352H111.5H33V318.4V284.7L90.7 162.4L148.5 40H191.3C225.3 40 233.5 40 233.5 40C233.5 40 207.9 96 177.1 161.3C146.2 226.6 121 280.5 121 280.5C121 280.5 136.5 281 155.5 281H190V236V191H228H266V236V281H282H298V316.5V352H282H266V380V408H228H190V380Z"],
                g = { hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } },
                h = { default: { duration: 2, ease: "easeInOut" } };

            function u(e) {
                var t = e.number,
                    n = (0, r.useRef)(null),
                    i = l(n, { once: !0 });
                return t <= 0 && t > 4 ? (0, o.jsx)(o.Fragment, {}) : (0, o.jsx)("svg", { ref: n, viewBox: "0 0 332 448", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, o.jsx)(m.E.path, { d: c[t - 1], stroke: "#FF7BFF", strokeWidth: "5", variants: g, initial: "hidden", animate: i ? "visible" : "", transition: h }) })
            }
        },
        4013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, { default: function() { return K } });
            var o = n(85893),
                i = n(68527),
                r = n(54113);

            function s(e) {
                var t = e.link,
                    n = e.isExternal,
                    r = void 0 !== n && n;
                return (0, o.jsx)(i.kC, { py: { base: "0", md: "4px" }, mt: { base: 3, md: 6 }, flexDirection: "column", w: "full", alignItems: "flex-end", children: (0, o.jsx)(i.rU, { style: { textDecoration: "none" }, href: t, isExternal: r, children: (0, o.jsx)(i.xu, { _hover: { textColor: "#FF7BFF" }, textColor: "#005EFF", fontWeight: "bold", fontSize: { base: "xl", md: "3xl" }, children: "SEE MORE >>>" }) }) })
            }
            var a = n(34651),
                l = n(67294);

            function m(e) {
                var t = e.title,
                    n = e.img,
                    r = e.hoverImg,
                    s = e.url,
                    m = (0, l.useState)(!1),
                    c = m[0],
                    g = m[1];
                return (0, o.jsxs)(i.rU, { href: s, isExternal: !0, onClick: function() { g(!0) }, onMouseEnter: function() { g(!0) }, onMouseLeave: function() { g(!1) }, children: [(0, o.jsx)(a.Ee, { hidden: c, src: n, alt: t }), (0, o.jsx)(a.Ee, { hidden: !c, src: r, alt: t })] })
            }

            function c(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) { return Object.getOwnPropertyDescriptor(n, e).enumerable })))), o.forEach((function(t) { c(e, t, n[t]) }))
                }
                return e
            }
            var h = [{ title: "BSC NFT & DeFi Hackathon", img: "images/home/awards/home-binance.svg", hoverImg: "images/home/awards/home-binance-color.svg", url: "https://hackerlink.io/grant/rcis/top" }, { title: "NEAR Foundation", img: "images/home/awards/home-nearfoundation.svg", hoverImg: "images/home/awards/home-nearfoundation-color.svg", url: "https://aurora.dev/ecosystem/xdao" }, { title: "Polygon Grants Hackathon", img: "images/home/awards/home-polygon.svg", hoverImg: "images/home/awards/home-polygon-color.svg", url: "https://www.polygongrantshackathon.com/" }, { title: "TRON Grand Hackathon 2022", img: "images/home/awards/home-tron.svg", hoverImg: "images/home/awards/home-tron-color.svg", url: "https://forum.trondao.org/t/tron-grand-hackathon-2022-season-1-winners-announcement-congrats-to-all-winners/2029/28" }];

            function u() { return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(i.MI, { columns: [1, 2, 2, 4, 4], py: [6, 10, 12, 6, 8], px: ["15%", "0", "0", "0", "0"], spacingY: [8, 8, 12, 12, 20], spacingX: [0, 12, 32, 12, 20], alignContent: "center", children: h.map((function(e, t) { return (0, o.jsx)(i.kC, { align: "center", children: (0, o.jsx)(m, g({}, e)) }, t) })) }), (0, o.jsx)(s, { link: "/about#awards" })] }) }
            var d = n(66606);

            function x(e) {
                var t = e.title,
                    n = e.description,
                    s = e.img,
                    l = e.url;
                return (0, o.jsx)(r.Z, { link: l, style: { width: "100%", height: "100%" }, children: (0, o.jsx)(i.xu, { h: "full", w: "full", bgColor: d.$Z, borderRadius: "3xl", p: { base: "4", md: "6" }, children: (0, o.jsxs)(i.gC, { alignItems: "center", justify: "space-between", h: "full", w: "full", textAlign: "start", children: [(0, o.jsx)(a.Ee, { src: s, alt: t, width: "full", loading: "lazy", sizes: "50vw" }), (0, o.jsx)(i.xv, { fontSize: ["lg", "xl", "2xl"], fontWeight: "extrabold", my: { base: "2", md: "4" }, w: "full", as: "h3", children: t }), (0, o.jsx)(i.xv, { fontSize: ["xs", "sm", "md"], w: "full", children: n })] }) }) })
            }

            function f(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) { return Object.getOwnPropertyDescriptor(n, e).enumerable })))), o.forEach((function(t) { f(e, t, n[t]) }))
                }
                return e
            }
            var v = [{ title: "Musk, Philanthropy and DAOs", description: "Kimbal Musk is now gaining fame as an important person in the field of blockchain and Web 3.0 technologies.", img: "images/home/blog/daos-philantopy.webp", url: "https://xdaoapp.medium.com/musk-philanthropy-and-daos-7852cc52381c" }, { title: "XDAO and EYWA. Partnership and community airdrop", description: "The global goal of the collaboration is to expand the opportunities available to each of us and to stimulate mutual growth.", img: "images/home/blog/eywa.webp", url: "https://blog.xdao.app/xdao-and-eywa-partnership-and-community-airdrop-3917f648b6f0" }, { title: "1st stage of XDAO Ambassador Program: finish", description: "Every XDAO Ambassador will get an NFT badge!", img: "images/home/blog/ambassador.webp", url: "https://blog.xdao.app/1st-stage-of-xdao-ambassador-program-fin-498d0f6a3a25" }];

            function b() { return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(i.MI, { columns: [1, 1, 1, 1, 3], my: { base: "6", md: "10" }, px: ["0", "5%", "10%", "10%", "0", "5%"], spacingY: [4, 8, 8, 12, 0], spacingX: [0, 0, 0, 0, 8, 16], alignContent: "center", children: v.map((function(e, t) { return (0, o.jsx)(i.kC, { align: "center", w: "full", children: (0, o.jsx)(x, p({}, e)) }, t) })) }), (0, o.jsx)(s, { link: "https://blog.xdao.app/", isExternal: !0 })] }) }

            function w(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) { return Object.getOwnPropertyDescriptor(n, e).enumerable })))), o.forEach((function(t) { w(e, t, n[t]) }))
                }
                return e
            }

            function y() { var e = { h: "full", w: "full", bgColor: "#000", p: { base: "4", md: "6" }, borderRadius: "3xl" }; return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)(i.MI, { columns: [1, 1, 1, 2, 2], spacing: { base: 4, md: 8 }, w: "full", children: [(0, o.jsx)(r.Z, { link: "https://parqubud.com/", children: (0, o.jsxs)(i.xu, j({}, e, { children: [(0, o.jsx)(i.kC, { mb: "4", w: "full", flexDirection: "column", children: (0, o.jsx)(a.Ee, { src: "images/home/clients/parq-logo.svg", alt: "CGU", height: { base: 10, md: 12 } }) }), (0, o.jsx)(a.Ee, { src: "images/home/clients/home-parq-main.webp", alt: "PARQ", height: "300px", w: "full", objectFit: "cover", mb: { base: "4", md: "8" }, loading: "lazy", sizes: "50vw" }), (0, o.jsx)(i.xv, { fontSize: { base: "md", md: "lg" }, textAlign: "start", children: "XDAO and PARQ, a Bali-based city of the future, entered an exclusive relationship to issue PARQ stablecoin, supported by PARQ real estate." })] })) }), (0, o.jsxs)(i.MI, { columns: 1, spacing: { base: 4, md: 8 }, w: "full", children: [(0, o.jsx)(r.Z, { link: "https://blog.xdao.app/xdao-and-infam-strategic-partnership-announce-fd95329287d2", children: (0, o.jsxs)(i.xu, j({}, e, { children: [(0, o.jsx)(i.kC, { mb: "4", w: "full", flexDirection: "column", children: (0, o.jsx)(a.Ee, { src: "images/home/clients/infam-logo.svg", alt: "Infam", height: { base: 10, md: 12 } }) }), (0, o.jsx)(i.xv, { fontSize: { base: "md", md: "lg" }, textAlign: "start", children: "XDAO leads DAO development for the Infam platform. The Infam DAO is the basis for governance and management of this ecosystem. Membership in the ecosystem will be available to governance NFT holders, which give users voting and decision-making power inside Infam DAO." })] })) }), (0, o.jsx)(r.Z, { link: "https://www.cgu.io/", children: (0, o.jsxs)(i.xu, j({}, e, { children: [(0, o.jsx)(i.kC, { mb: "4", w: "full", flexDirection: "column", children: (0, o.jsx)(a.Ee, { src: "images/home/clients/cgu-logo.svg", alt: "CGU", height: { base: 10, md: 12 } }) }), (0, o.jsx)(i.xv, { fontSize: { base: "md", md: "lg" }, textAlign: "start", children: "CGU has invested in XDAO and uses the platform to manage its own muli-chain treasury. CGU members can now use their own DAO to purchase NFTs and other assets." })] })) })] })] }), (0, o.jsx)(s, { link: "/about#clientsAndPartners" })] }) }

            function k(e) {
                var t = e.title,
                    n = e.img,
                    s = e.hoverImg,
                    m = e.link,
                    c = (0, l.useState)(!1),
                    g = c[0],
                    h = c[1];
                return (0, o.jsx)(r.Z, { link: m, children: (0, o.jsx)(i.xu, { w: "full", borderRadius: { base: "xl", md: "3xl" }, px: ["2", "3", "6", "8"], fontWeight: "semibold", bgColor: "#FFF", textColor: "#000", _hover: { textColor: "#005EFF" }, onClick: function() { h(!0) }, onMouseEnter: function() { h(!0) }, onMouseLeave: function() { h(!1) }, children: (0, o.jsxs)(i.Ug, { spacing: ["2", "3", "6", "8"], px: 2, py: 1.5, children: [(0, o.jsxs)(i.xu, { children: [(0, o.jsx)(a.Ee, { hidden: g, src: n, alt: t, boxSize: ["6", "8", "12"] }), (0, o.jsx)(a.Ee, { hidden: !g, src: s, alt: t, boxSize: ["6", "8", "12"] })] }), (0, o.jsx)(i.xv, { fontSize: ["lg", "xl", "2xl", "3xl"], children: t })] }) }) })
            }
            n(1826);
            var C = n(26723),
                O = n(67677),
                I = n(41664),
                A = n(59830);

            function E(e) {
                var t = e.bgImage,
                    n = e.mobileBgImage,
                    r = e.title,
                    s = e.description,
                    a = e.buttons;
                return (0, o.jsx)(i.xu, { bgImage: { base: n, md: t }, w: "full", h: "720px", bgSize: "cover", bgPosition: "center", align: "center", px: { base: "8%", md: "10%" }, children: (0, o.jsxs)(i.kC, { py: "70px", h: "full", w: "full", direction: "column", justify: "space-between", textAlign: "left", children: [r, (0, o.jsxs)(i.Kq, { direction: { base: "column", md: "row-reverse" }, spacing: { base: 0, md: "10%" }, children: [(0, o.jsx)(i.xu, { w: { base: "full", md: "70%" }, mb: { base: "4", md: "0" }, alignSelf: "flex-end", children: a }), (0, o.jsx)(i.xv, { w: "full", fontSize: ["md", "lg", "xl", "2xl"], children: s })] })] }) })
            }

            function F(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) { return Object.getOwnPropertyDescriptor(n, e).enumerable })))), o.forEach((function(t) { F(e, t, n[t]) }))
                }
                return e
            }

            function D() { var e = { w: "full", size: "sm", variant: "outline", colorScheme: "white", _hover: { borderColor: "#005EFF", textColor: "#005EFF" } }; return (0, o.jsx)(o.Fragment, { children: (0, o.jsx)(O.tv, { hasTrack: !1, options: { type: "fade", rewind: !0, keyboard: !0, pagination: !1, speed: 1500 }, children: (0, o.jsxs)(O.Gj, { children: [(0, o.jsx)(O.jw, { children: (0, o.jsx)(E, { bgImage: "images/home/home-splide-bg1.svg", mobileBgImage: "images/home/home-splide-mobile-bg1.svg", title: (0, o.jsx)(i.kC, { fontSize: ["4xl", "5xl", "5xl", "6xl", "7xl"], fontWeight: "extrabold", flexDirection: "column", children: (0, o.jsx)(i.xv, { as: "h1", w: { base: "full", md: "60%" }, maxW: ["300px", "400px", "400px", "600px"], children: "Create your DAO With CARDASHIFT" }) }), description: "Build and manage your Decentralized Autonomous Organization using the fastest-growing, safest, and most convenient solution on the market", buttons: (0, o.jsxs)(i.gC, { w: "full", children: [(0, o.jsx)(I.default, { href: "/".concat(A.Kc), passHref: !0, children: (0, o.jsx)(C.zx, { w: "full", h: { base: 10, md: 12 }, _hover: { bgColor: "#003FAA" }, variant: "solid", textColor: "#FFF", bgColor: "#005EFF", children: "Launch App" }) }), (0, o.jsxs)(i.Ug, { w: "full", children: [(0, o.jsx)(i.rU, { href: "https://docs.CARDASHIFT.app", isExternal: !0, w: "full", style: { textDecoration: "none" }, children: (0, o.jsx)(C.zx, S({}, e, { children: "Academy" })) }), (0, o.jsx)(i.rU, { href: "https://legacy.CARDASHIFT.app", isExternal: !0, w: "full", style: { textDecoration: "none" }, children: (0, o.jsx)(C.zx, S({}, e, { children: "Launch v1" })) })] })] }) }) }), (0, o.jsx)(O.jw, { children: (0, o.jsx)(E, { bgImage: "images/home/home-splide-bg2.svg", mobileBgImage: "images/home/home-splide-mobile-bg2.svg", title: (0, o.jsxs)(i.kC, { fontWeight: "extrabold", flexDirection: "column", children: [(0, o.jsx)(i.Ug, { w: { base: "full", md: "60%" }, fontSize: ["5xl", "5xl", "6xl", "7xl", "7xl"], mb: "4", children: (0, o.jsx)(i.xv, { as: "h2", children: "CARDASHIFT Pro" }) }), (0, o.jsx)(i.xv, { as: "h3", w: { base: "80%", md: "60%" }, fontSize: ["3xl", "4xl", "5xl", "6xl", "6xl"], children: "Your personal DAO manager" })] }), description: "Count upon experts. We can provide technical, legal, and marketing support throughout the whole launching process and after it. Build your DAO by contributing your time only to consultations.", buttons: (0, o.jsx)(i.rU, { href: "/pro", style: { textDecoration: "none" }, isExternal: !0, children: (0, o.jsx)(C.zx, S({}, e, { h: { base: 10, md: 12 }, children: "Become a Pro" })) }) }) }), (0, o.jsx)(O.jw, { children: (0, o.jsx)(E, { bgImage: "images/home/home-splide-bg3.svg", mobileBgImage: "images/home/home-splide-mobile-bg3.svg", title: (0, o.jsx)(i.Ug, { fontSize: ["6xl", "6xl", "5xl", "7xl", "7xl"], fontWeight: "extrabold", children: (0, o.jsx)(i.xv, { as: "h2", children: "CARDASHIFT Up" }) }), description: "Run your startup as a DAO. Details coming soon", buttons: (0, o.jsx)(o.Fragment, {}) }) })] }) }) }) }
            var P = n(41795),
                z = [{ description: "Create your DAO by distributing GT shares with your teammates and setting up a quorum." }, { description: "Send assets to your DAO or raise investment by using LP tokens." }, { description: "Connect the necessary modules to expand the capabilities of your DAO." }, { description: 'Use "Connect" to interact with DeFi projects and make a profit.' }];

            function H() { return (0, o.jsx)(i.MI, { columns: [1, 1, 2, 2, 2, 4], spacing: { base: 4, md: 6 }, w: "full", textAlign: "start", children: z.map((function(e, t) { return (0, o.jsx)(i.xu, { h: "full", w: "full", bgColor: "#000", py: { base: "4", md: "6" }, px: ["6", "8", "6", "8", "8", "6"], borderRadius: "3xl", children: (0, o.jsxs)(i.Ug, { alignItems: "center", spacing: ["6", "8", "6", "8", "8", "6"], h: "full", children: [(0, o.jsx)(i.xu, { children: (0, o.jsx)(i.xu, { alignItems: "center", w: ["64px", "56px", "64px", "72px", "64px", "72px"], children: (0, o.jsx)(P.Z, { number: t + 1 }) }) }), (0, o.jsx)(i.xv, { fontSize: ["lg", "xl", "lg", "xl", "xl"], children: e.description })] }) }, t) })) }) }
            var M = n(97005);

            function Z(e) {
                var t = e.title,
                    n = e.img,
                    r = e.hoverImg,
                    s = e.chainId,
                    m = (0, l.useState)(!1),
                    c = m[0],
                    g = m[1];
                return (0, o.jsx)(i.xu, { boxSize: { base: "12", md: "16" }, mx: { base: "4", md: "6" }, mt: { base: "2", md: "4" }, mb: "2", children: (0, o.jsxs)(i.rU, { href: "/".concat(s, "/ecosystem"), isExternal: !0, onClick: function() { g(!0) }, onMouseEnter: function() { g(!0) }, onMouseLeave: function() { g(!1) }, children: [(0, o.jsx)(a.Ee, { hidden: c, src: n, alt: t, boxSize: { base: "12", md: "16" } }), (0, o.jsx)(a.Ee, { hidden: !c, src: r, alt: t, boxSize: { base: "12", md: "16" } })] }) })
            }

            function B(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function W(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) { return Object.getOwnPropertyDescriptor(n, e).enumerable })))), o.forEach((function(t) { B(e, t, n[t]) }))
                }
                return e
            }
            var V = [{ title: "Ethereum", img: "/images/home/networks/home-eth.svg", hoverImg: "/images/home/networks/home-eth-color.svg", chainId: 1 }, { title: "Polygon", img: "/images/home/networks/home-polygon.svg", hoverImg: "/images/home/networks/home-polygon-color.svg", chainId: 137 }, { title: "BNB Chain", img: "/images/home/networks/home-bnb.svg", hoverImg: "/images/home/networks/home-bnb-color.svg", chainId: 56 }, { title: "Optimism", img: "/images/home/networks/home-optimism.svg", hoverImg: "/images/home/networks/home-optimism-color.svg", chainId: 10 }, { title: "Aurora", img: "/images/home/networks/home-aurora.svg", hoverImg: "/images/home/networks/home-aurora-color.svg", chainId: 1313161554 }, { title: "Moonbeam", img: "/images/home/networks/home-moonbeam.svg", hoverImg: "/images/home/networks/home-moonbeam-color.svg", chainId: 1284 }, { title: "Moonriver", img: "/images/home/networks/home-moonriver.svg", hoverImg: "/images/home/networks/home-moonriver-color.svg", chainId: 1285 }, { title: "OKC", img: "/images/home/networks/home-okc.svg", hoverImg: "/images/home/networks/home-okc-color.svg", chainId: 66 }, { title: "Metis", img: "/images/home/networks/home-metis.svg", hoverImg: "/images/home/networks/home-metis-color.svg", chainId: 1088 }, { title: "Avalanche", img: "/images/home/networks/home-avax.svg", hoverImg: "/images/home/networks/home-avax-color.svg", chainId: 43114 }, { title: "Boba", img: "/images/home/networks/home-boba.svg", hoverImg: "/images/home/networks/home-boba-color.svg", chainId: 288 }, { title: "Celo", img: "/images/home/networks/home-celo.svg", hoverImg: "/images/home/networks/home-celo-color.svg", chainId: 42220 }, { title: "Fantom", img: "/images/home/networks/home-ftm.svg", hoverImg: "/images/home/networks/home-ftm-color.svg", chainId: 250 }, { title: "Oasis", img: "/images/home/networks/home-oasis.svg", hoverImg: "/images/home/networks/home-oasis-color.svg", chainId: 42262 }, { title: "Astar", img: "/images/home/networks/home-astar.svg", hoverImg: "/images/home/networks/home-astar-color.svg", chainId: 592 }, { title: "Shiden", img: "/images/home/networks/home-shiden.svg", hoverImg: "/images/home/networks/home-shiden-color.svg", chainId: 336 }, { title: "BitTorrent Chain", img: "/images/home/networks/home-bttc.svg", hoverImg: "/images/home/networks/home-bttc-color.svg", chainId: 199 }, { title: "CoinEx", img: "/images/home/networks/home-coinex.svg", hoverImg: "/images/home/networks/home-coinex-color.svg", chainId: 52 }, { title: "Klaytn", img: "/images/home/networks/home-klaytn.svg", hoverImg: "/images/home/networks/home-klaytn-color.svg", chainId: 8217 }, { title: "Milkomeda", img: "/images/home/networks/home-milkomeda.svg", hoverImg: "/images/home/networks/home-milkomeda-color.svg", chainId: 2001 }, { title: "Cube", img: "/images/home/networks/home-cube.svg", hoverImg: "/images/home/networks/home-cube-color.svg", chainId: 1818 }, { title: "Ontology", img: "/images/home/networks/home-ontology.svg", hoverImg: "/images/home/networks/home-ontology-color.svg", chainId: 58 }, { title: "Telos", img: "/images/home/networks/home-telos.svg", hoverImg: "/images/home/networks/home-telos-color.svg", chainId: 40 }, { title: "Fuse", img: "/images/home/networks/home-fuse.svg", hoverImg: "/images/home/networks/home-fuse-color.svg", chainId: 122 }, { title: "Godwoken", img: "/images/home/networks/home-godwoken.svg", hoverImg: "/images/home/networks/home-godwoken-color.svg", chainId: 71402 }, { title: "Evmos", img: "/images/home/networks/home-evmos.svg", hoverImg: "/images/home/networks/home-evmos-color.svg", chainId: 9001 }, { title: "Xinfin", img: "/images/home/networks/home-xinfin.svg", hoverImg: "/images/home/networks/home-xinfin-color.svg", chainId: 50 }, { title: "HECO", img: "/images/home/networks/home-heco.svg", hoverImg: "/images/home/networks/home-heco-color.svg", chainId: 128 }],
                L = [{ title: "1inch", img: "images/home/integrations/1inch.svg" }, { title: "Uniswap", img: "images/home/integrations/uniswap.svg" }, { title: "Aave", img: "images/home/integrations/aave.svg" }, { title: "Curve", img: "images/home/integrations/curve.svg" }, { title: "Instadapp", img: "images/home/integrations/instadapp.svg" }, { title: "Sushi", img: "images/home/integrations/sushi.svg" }, { title: "B.Protocol", img: "images/home/integrations/b-protocol.svg" }, { title: "Compound", img: "images/home/integrations/compound.svg" }, { title: "yEarn", img: "images/home/integrations/yearn.svg" }, { title: "PancakeSwap", img: "images/home/integrations/pancakeswap.svg" }, { title: "Index", img: "images/home/integrations/index.svg" }, { title: "Balancer", img: "images/home/integrations/balancer.svg" }, { title: "Kyber Network", img: "images/home/integrations/kyber-network.svg" }, { title: "DeBank", img: "images/home/integrations/debank.svg" }, { title: "Ape Board", img: "images/home/integrations/apeboard.svg" }, { title: "Zapper", img: "images/home/integrations/zapper.svg" }, { title: "Zerion", img: "images/home/integrations/zerion.svg" }, { title: "Snapshot", img: "images/home/integrations/snapshot.svg" }, { title: "Symbiosis", img: "images/home/integrations/symbiosis.svg" }, { title: "Covalent", img: "images/home/integrations/covalent.svg" }];

            function R(e) {
                var t = e.content;
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(i.xu, {
                        h: "fit-content",
                        borderTop: "1px",
                        children: (0, o.jsx)(M.Z, {
                            gradient: !1,
                            direction: "chains" === t ? "right" : "left",
                            children: "chains" === t ? V.map((function(e, t) { return (0, o.jsx)(l.Fragment, { children: (0, o.jsx)(Z, W({}, e)) }, t) })) : L.map((function(e, t) {
                                var n = e.title,
                                    i = e.img;
                                return (0, o.jsx)(a.Ee, { src: i, alt: n, boxSize: { base: "12", md: "16" }, mx: { base: "6", md: "8" }, mt: { base: "2", md: "4" }, mb: "2" }, t)
                            }))
                        })
                    }), (0, o.jsx)(i.xu, { h: "8", borderBottom: "1px", children: (0, o.jsx)(M.Z, { gradient: !1, speed: 40, direction: "chains" === t ? "right" : "left", children: Array(10).fill("chains" === t ? "multichain support" : "integrations").map((function(e, t) { return (0, o.jsx)(i.xv, { textColor: "#FFF", mx: "20", fontSize: "lg", fontWeight: "bold", fontFamily: "monospace", children: e }, t) })) }) })]
                })
            }

            function N(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) { return Object.getOwnPropertyDescriptor(n, e).enumerable })))), o.forEach((function(t) { N(e, t, n[t]) }))
                }
                return e
            }
            var U = [{ title: "Trust Management", description: "Collect funds and invest in other projects through launchpads and other platforms", img: "images/home/useCases/home-trust.svg" }, { title: "Venture Investments", description: "Reducing the risk of loss of funds. Make decisions about spending in invested companies", img: "images/home/useCases/home-venture.svg" }, { title: "Hedge Funds", description: "Connect to any DeFi protocol and deliver liquidity through the DAO", img: "images/home/useCases/home-hedge.svg" }, { title: "Gaming Guilds & NFT Funds", description: "Create a DAO and use it as a guild. You can also jointly buy and sell NTFs", img: "images/home/useCases/home-gaming.svg" }, { title: "Project Money Management", description: "Manage your shared project budget", img: "images/home/useCases/home-pm.svg" }, { title: "Charity", description: "Distribute funds transparently and securely through the DAO", img: "images/home/useCases/home-charity.svg" }];

            function _() { var e = { h: "full", w: "full", bgColor: d.$Z, borderRadius: "3xl", p: { base: "4", md: "6" } }; return (0, o.jsx)(i.MI, { columns: [1, 1, 2, 2, 3], spacing: { base: 4, md: 8 }, w: "full", px: [0, 0, "10%"], children: U.map((function(t, n) { return (0, o.jsx)(i.kC, { w: "full", h: "full", pr: ["5%", n % 2 === 0 ? "15%" : "5%", 0], pl: ["5%", n % 2 === 0 ? "5%" : "15%", 0], children: (0, o.jsx)(i.xu, T({}, e, { children: (0, o.jsxs)(i.Kq, { direction: { base: "row", md: "column" }, alignItems: "center", justify: "space-between", h: "full", w: "full", children: [(0, o.jsx)(a.Ee, { src: t.img, alt: t.title, width: ["50%", "40%", "60%", "50%", "60%", "50%"] }), (0, o.jsxs)(i.kC, { w: "full", h: "full", flexDirection: "column", justify: "space-around", ml: { base: "2", md: 0 }, textAlign: "center", alignItems: "center", children: [(0, o.jsx)(i.xv, { fontSize: ["lg", "xl", "2xl"], fontWeight: "extrabold", mb: { base: "2", md: 0 }, textAlign: "center", as: "h3", children: t.title }), (0, o.jsx)(i.xv, { fontSize: ["xs", "sm", "md"], w: { base: "full", md: "90%" }, children: t.description })] })] }) })) }, n) })) }) }
            var X = n(97751);

            function q(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function G(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) { return Object.getOwnPropertyDescriptor(n, e).enumerable })))), o.forEach((function(t) { q(e, t, n[t]) }))
                }
                return e
            }
            var $ = [{ title: "Discord", img: "images/home/community/home-discord.svg", hoverImg: "images/home/community/home-discord-color.svg", link: "https://discord.gg/axx6uCAb4Y" }, { title: "Telegram", img: "images/home/community/home-telegram.svg", hoverImg: "images/home/community/home-telegram-color.svg", link: "https://t.me/xdao_eng" }];

            function K() {
                var e = (0, X.XA)(),
                    t = (0, l.useState)(">> Become a Pro <<"),
                    n = t[0],
                    s = t[1];
                return (0, l.useEffect)((function() { s(e ? ">> Become a Pro <<" : ">> Become a Pro With XDAO Pro <<") }), [e]), (0, o.jsx)(o.Fragment, { children: (0, o.jsxs)(i.kC, { flexDir: "column", align: "center", textAlign: "center", mt: "12", children: [(0, o.jsx)(i.xu, { w: "full", children: (0, o.jsx)(D, {}) }), (0, o.jsx)(i.xu, { w: "full", as: "h2", textAlign: "left", fontSize: ["2xl", "3xl", "4xl"], px: "5%", fontWeight: "extrabold", pt: { base: "6", md: "10" }, mt: { base: "3", md: "5" }, bgColor: d.$Z, children: "Our Awards" }), (0, o.jsx)(i.xu, { w: "full", px: "10%", py: { base: "6", md: "10" }, bgColor: d.$Z, children: (0, o.jsx)(u, {}) }), (0, o.jsx)(i.xu, { w: "full", children: (0, o.jsx)(R, { content: "chains" }) }), (0, o.jsx)(i.xu, { w: "full", textAlign: "left", fontSize: ["2xl", "3xl", "4xl"], pt: { base: "12", md: "20" }, px: "5%", fontWeight: "extrabold", bgColor: d.$Z, as: "h2", children: "How to get started?" }), (0, o.jsx)(i.xu, { w: "full", pt: { base: "6", md: "10" }, px: { base: "5%" }, bgColor: d.$Z, children: (0, o.jsx)(H, {}) }), (0, o.jsx)(i.xu, { w: "full", py: { base: "12", md: "20" }, justify: "center", bgColor: d.$Z, children: (0, o.jsx)(r.Z, { link: "/".concat(A.Kc, "/dao/create"), children: (0, o.jsx)(i.xu, { w: "full", border: "1px", borderRadius: { base: "xl", md: "3xl" }, px: 4, _hover: { textColor: "#FF7BFF" }, fontSize: ["2xl", "3xl", "4xl", "5xl"], fontWeight: "semibold", children: ">> Create a DAO <<" }) }) }), (0, o.jsx)(i.xu, { w: "full", textAlign: "left", fontSize: ["2xl", "3xl", "4xl"], mt: { base: "6", md: "10" }, px: "5%", fontWeight: "extrabold", as: "h2", children: "What Are DAOs For?" }), (0, o.jsx)(i.xu, { w: "full", mt: { base: "6", md: "10" }, children: (0, o.jsx)(_, {}) }), (0, o.jsxs)(i.gC, { px: { base: "5%", md: "10%" }, w: "full", py: { base: "12", md: "20" }, justify: "center", children: [(0, o.jsx)(i.xv, { fontSize: ["2xl", "3xl", "4xl", "5xl"], textAlign: "center", fontWeight: "semibold", as: "h2", children: "Join Our Community" }), (0, o.jsx)(i.Ug, { spacing: { base: "6", md: "10" }, children: $.map((function(e, t) { return (0, o.jsx)(l.Fragment, { children: (0, o.jsx)(k, G({}, e)) }, t) })) })] }), (0, o.jsx)(i.xu, { w: "full", textAlign: "left", fontSize: ["2xl", "3xl", "4xl"], px: "5%", fontWeight: "extrabold", pt: { base: "6", md: "10" }, bgColor: d.$Z, as: "h2", children: "Our Clients & Partners" }), (0, o.jsx)(i.xu, { w: "full", px: "10%", py: { base: "6", md: "10" }, bgColor: d.$Z, children: (0, o.jsx)(y, {}) }), (0, o.jsx)(i.xu, { w: "full", bgColor: d.$Z, pt: { base: "6", md: "10" }, pb: { base: "60px", md: "100px" }, justify: "center", children: (0, o.jsx)(r.Z, { link: "/pro", children: (0, o.jsx)(i.xu, { w: "full", borderRadius: { base: "xl", md: "3xl" }, px: 4, fontSize: ["2xl", "3xl", "4xl", "5xl"], fontWeight: "semibold", bgColor: "#FFF", textColor: "#000", _hover: { textColor: "#005EFF" }, children: n }) }) }), (0, o.jsx)(i.xu, { w: "full", children: (0, o.jsx)(R, { content: "integrations" }) }), (0, o.jsx)(i.xu, { w: "full", textAlign: "left", fontSize: ["2xl", "3xl", "4xl"], mt: { base: "6", md: "10" }, px: "5%", fontWeight: "extrabold", as: "h2", children: "Our Blog" }), (0, o.jsx)(i.xu, { w: "full", px: "10%", mb: { base: "6", md: "10" }, children: (0, o.jsx)(b, {}) })] }) })
            }
        },
        97005: function(e, t, n) {
            var o = n(67294);

            function i(e) { return e && "object" === typeof e && "default" in e ? e : { default: e } }
            var r = i(o),
                s = function() {
                    return (s = Object.assign || function(e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }).apply(this, arguments)
                };
            ! function(e) {
                if (!e || "undefined" === typeof window) return;
                const t = document.createElement("style");
                t.setAttribute("type", "text/css"), t.innerHTML = e, document.head.appendChild(t)
            }('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}');
            t.Z = function(e) {
                var t, n, i, a, l = e.style,
                    m = void 0 === l ? {} : l,
                    c = e.className,
                    g = void 0 === c ? "" : c,
                    h = e.play,
                    u = void 0 === h || h,
                    d = e.pauseOnHover,
                    x = void 0 !== d && d,
                    f = e.pauseOnClick,
                    p = void 0 !== f && f,
                    v = e.direction,
                    b = void 0 === v ? "left" : v,
                    w = e.speed,
                    j = void 0 === w ? 20 : w,
                    y = e.delay,
                    k = void 0 === y ? 0 : y,
                    C = e.loop,
                    O = void 0 === C ? 0 : C,
                    I = e.gradient,
                    A = void 0 === I || I,
                    E = e.gradientColor,
                    F = void 0 === E ? [255, 255, 255] : E,
                    S = e.gradientWidth,
                    D = void 0 === S ? 200 : S,
                    P = e.onFinish,
                    z = e.onCycleComplete,
                    H = e.children,
                    M = o.useState(0),
                    Z = M[0],
                    B = M[1],
                    W = o.useState(0),
                    V = W[0],
                    L = W[1],
                    R = o.useState(0),
                    N = R[0],
                    T = R[1],
                    U = o.useState(!1),
                    _ = U[0],
                    X = U[1],
                    q = o.useRef(null),
                    G = o.useRef(null),
                    $ = function() { G.current && q.current && (B(q.current.getBoundingClientRect().width), L(G.current.getBoundingClientRect().width)), T(V < Z ? Z / j : V / j) };
                o.useEffect((function() {
                    return $(), window.addEventListener("resize", $),
                        function() { window.removeEventListener("resize", $) }
                })), o.useEffect((function() { X(!0) }), []);
                var K = "rgba(" + F[0] + ", " + F[1] + ", " + F[2];
                return r.default.createElement(o.Fragment, null, _ ? r.default.createElement("div", { ref: q, style: s(s({}, m), (t = {}, t["--pause-on-hover"] = x ? "paused" : "running", t["--pause-on-click"] = p ? "paused" : "running", t)), className: g + " marquee-container" }, A && r.default.createElement("div", { style: (n = {}, n["--gradient-color"] = K + ", 1), " + K + ", 0)", n["--gradient-width"] = "number" === typeof D ? D + "px" : D, n), className: "overlay" }), r.default.createElement("div", { ref: G, style: (i = {}, i["--play"] = u ? "running" : "paused", i["--direction"] = "left" === b ? "normal" : "reverse", i["--duration"] = N + "s", i["--delay"] = k + "s", i["--iteration-count"] = O ? "" + O : "infinite", i), className: "marquee", onAnimationIteration: z, onAnimationEnd: P }, H), r.default.createElement("div", { style: (a = {}, a["--play"] = u ? "running" : "paused", a["--direction"] = "left" === b ? "normal" : "reverse", a["--duration"] = N + "s", a["--delay"] = k + "s", a["--iteration-count"] = O ? "" + O : "infinite", a), className: "marquee" }, H)) : null)
            }
        }
    },
    function(e) {
        e.O(0, [6889, 9774, 2888, 179], (function() { return t = 45301, e(e.s = t); var t }));
        var t = e.O();
        _N_E = t
    }
]);