/*! For license information please see 42.87c08df0.js.LICENSE.txt */
(self.webpackChunkEvolves_Website = self.webpackChunkEvolves_Website || []).push([
    [42], {
        898: (e, t, o) => {
            "use strict";
            o.d(t, {
                W: () => k
            });
            var n, i, r, s, a, l = function() {
                    return "undefined" != typeof window
                },
                c = function() {
                    return n || l() && (n = window.gsap) && n.registerPlugin && n
                },
                d = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
                p = {
                    rect: ["width", "height"],
                    circle: ["r", "r"],
                    ellipse: ["rx", "ry"],
                    line: ["x2", "y2"]
                },
                u = function(e) {
                    return Math.round(1e4 * e) / 1e4
                },
                g = function(e) {
                    return parseFloat(e) || 0
                },
                h = function(e, t) {
                    var o = g(e);
                    return ~e.indexOf("%") ? o / 100 * t : o
                },
                f = function(e, t) {
                    return g(e.getAttribute(t))
                },
                m = Math.sqrt,
                v = function(e, t, o, n, i, r) {
                    return m(Math.pow((g(o) - g(e)) * i, 2) + Math.pow((g(n) - g(t)) * r, 2))
                },
                x = function(e) {
                    return console.warn(e)
                },
                y = function(e) {
                    return "non-scaling-stroke" === e.getAttribute("vector-effect")
                },
                w = function(e) {
                    if (!(e = i(e)[0])) return 0;
                    var t, o, n, r, s, a, l, c = e.tagName.toLowerCase(),
                        u = e.style,
                        g = 1,
                        h = 1;
                    y(e) && (h = e.getScreenCTM(), g = m(h.a * h.a + h.b * h.b), h = m(h.d * h.d + h.c * h.c));
                    try {
                        o = e.getBBox()
                    } catch (e) {
                        x("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
                    }
                    var w = o || {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        },
                        b = w.x,
                        _ = w.y,
                        k = w.width,
                        T = w.height;
                    if (o && (k || T) || !p[c] || (k = f(e, p[c][0]), T = f(e, p[c][1]), "rect" !== c && "line" !== c && (k *= 2, T *= 2), "line" === c && (b = f(e, "x1"), _ = f(e, "y1"), k = Math.abs(k - b), T = Math.abs(T - _))), "path" === c) r = u.strokeDasharray, u.strokeDasharray = "none", t = e.getTotalLength() || 0, g !== h && x("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), t *= (g + h) / 2, u.strokeDasharray = r;
                    else if ("rect" === c) t = 2 * k * g + 2 * T * h;
                    else if ("line" === c) t = v(b, _, b + k, _ + T, g, h);
                    else if ("polyline" === c || "polygon" === c)
                        for (n = e.getAttribute("points").match(d) || [], "polygon" === c && n.push(n[0], n[1]), t = 0, s = 2; s < n.length; s += 2) t += v(n[s - 2], n[s - 1], n[s], n[s + 1], g, h) || 0;
                    else "circle" !== c && "ellipse" !== c || (a = k / 2 * g, l = T / 2 * h, t = Math.PI * (3 * (a + l) - m((3 * a + l) * (a + 3 * l))));
                    return t || 0
                },
                b = function(e, t) {
                    if (!(e = i(e)[0])) return [0, 0];
                    t || (t = w(e) + 1);
                    var o = r.getComputedStyle(e),
                        n = o.strokeDasharray || "",
                        s = g(o.strokeDashoffset),
                        a = n.indexOf(",");
                    return a < 0 && (a = n.indexOf(" ")), (n = a < 0 ? t : g(n.substr(0, a))) > t && (n = t), [-s || 0, n - s || 0]
                },
                _ = function() {
                    l() && (document, r = window, a = n = c(), i = n.utils.toArray, s = -1 !== ((r.navigator || {}).userAgent || "").indexOf("Edge"))
                },
                k = {
                    version: "3.6.1",
                    name: "drawSVG",
                    register: function(e) {
                        n = e, _()
                    },
                    init: function(e, t, o, n, i) {
                        if (!e.getBBox) return !1;
                        a || _();
                        var l, c, d, p = w(e);
                        return this._style = e.style, this._target = e, t + "" == "true" ? t = "0 100%" : t ? -1 === (t + "").indexOf(" ") && (t = "0 " + t) : t = "0 0", c = function(e, t, o) {
                            var n, i, r = e.indexOf(" ");
                            return r < 0 ? (n = void 0 !== o ? o + "" : e, i = e) : (n = e.substr(0, r), i = e.substr(r + 1)), (n = h(n, t)) > (i = h(i, t)) ? [i, n] : [n, i]
                        }(t, p, (l = b(e, p))[0]), this._length = u(p), this._dash = u(l[1] - l[0]), this._offset = u(-l[0]), this._dashPT = this.add(this, "_dash", this._dash, u(c[1] - c[0])), this._offsetPT = this.add(this, "_offset", this._offset, u(-c[0])), s && (d = r.getComputedStyle(e)).strokeLinecap !== d.strokeLinejoin && (c = g(d.strokeMiterlimit), this.add(e.style, "strokeMiterlimit", c, c + .01)), this._live = y(e) || ~(t + "").indexOf("live"), this._nowrap = ~(t + "").indexOf("nowrap"), this._props.push("drawSVG"), 1
                    },
                    render: function(e, t) {
                        var o, n, i, r, s = t._pt,
                            a = t._style;
                        if (s) {
                            for (t._live && (o = w(t._target)) !== t._length && (n = o / t._length, t._length = o, t._offsetPT && (t._offsetPT.s *= n, t._offsetPT.c *= n), t._dashPT ? (t._dashPT.s *= n, t._dashPT.c *= n) : t._dash *= n); s;) s.r(e, s.d), s = s._next;
                            i = t._dash || e && 1 !== e && 1e-4 || 0, o = t._length - i + .1, r = t._offset, i && r && i + Math.abs(r % t._length) > t._length - .2 && (r += r < 0 ? .1 : -.1) && (o += .1), a.strokeDashoffset = i ? r : r + .001, a.strokeDasharray = o < .2 ? "none" : i ? i + "px," + (t._nowrap ? 999999 : o) + "px" : "0px, 999999px"
                        }
                    },
                    getLength: w,
                    getPosition: b
                };
            c() && n.registerPlugin(k)
        },
        2411: (e, t, o) => {
            "use strict";
            o.d(t, {
                s: () => dt
            });
            var n, i, r, s, a, l, c, d, p, u, g, h, f, m, v, x, y, w, b, _, k, T = o(4867),
                M = function() {
                    return "undefined" != typeof window
                },
                S = function() {
                    return n || M() && (n = window.gsap) && n.registerPlugin && n
                },
                D = function(e) {
                    return "function" == typeof e
                },
                P = function(e) {
                    return "object" == typeof e
                },
                E = function(e) {
                    return void 0 === e
                },
                L = function() {
                    return !1
                },
                C = "transform",
                X = "transformOrigin",
                H = function(e) {
                    return Math.round(1e4 * e) / 1e4
                },
                Y = Array.isArray,
                z = function(e, t) {
                    var o = r.createElementNS ? r.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : r.createElement(e);
                    return o.style ? o : r.createElement(e)
                },
                B = 180 / Math.PI,
                N = 1e20,
                R = new T.G9,
                O = Date.now || function() {
                    return (new Date).getTime()
                },
                I = [],
                A = {},
                F = 0,
                W = /^(?:a|input|textarea|button|select)$/i,
                V = 0,
                G = {},
                q = {},
                j = function(e, t) {
                    var o, n = {};
                    for (o in e) n[o] = t ? e[o] * t : e[o];
                    return n
                },
                K = function e(t, o) {
                    for (var n, i = t.length; i--;) o ? t[i].style.touchAction = o : t[i].style.removeProperty("touch-action"), (n = t[i].children) && n.length && e(n, o)
                },
                Z = function() {
                    return I.forEach((function(e) {
                        return e()
                    }))
                },
                U = function() {
                    return !I.length && n.ticker.remove(Z)
                },
                $ = function(e) {
                    for (var t = I.length; t--;) I[t] === e && I.splice(t, 1);
                    n.to(U, {
                        overwrite: !0,
                        delay: 15,
                        duration: 0,
                        onComplete: U,
                        data: "_draggable"
                    })
                },
                J = function(e, t, o, n) {
                    if (e.addEventListener) {
                        var i = f[t];
                        n = n || (g ? {
                            passive: !1
                        } : null), e.addEventListener(i || t, o, n), i && t !== i && e.addEventListener(t, o, n)
                    }
                },
                Q = function(e, t, o) {
                    if (e.removeEventListener) {
                        var n = f[t];
                        e.removeEventListener(n || t, o), n && t !== n && e.removeEventListener(t, o)
                    }
                },
                ee = function(e) {
                    e.preventDefault && e.preventDefault(), e.preventManipulation && e.preventManipulation()
                },
                te = function e(t) {
                    v = t.touches && m < t.touches.length, Q(t.target, "touchend", e)
                },
                oe = function(e) {
                    v = e.touches && m < e.touches.length, J(e.target, "touchend", te)
                },
                ne = function(e) {
                    return i.pageYOffset || e.scrollTop || e.documentElement.scrollTop || e.body.scrollTop || 0
                },
                ie = function(e) {
                    return i.pageXOffset || e.scrollLeft || e.documentElement.scrollLeft || e.body.scrollLeft || 0
                },
                re = function e(t, o) {
                    J(t, "scroll", o), ae(t.parentNode) || e(t.parentNode, o)
                },
                se = function e(t, o) {
                    Q(t, "scroll", o), ae(t.parentNode) || e(t.parentNode, o)
                },
                ae = function(e) {
                    return !(e && e !== s && 9 !== e.nodeType && e !== r.body && e !== i && e.nodeType && e.parentNode)
                },
                le = function(e, t) {
                    var o = "x" === t ? "Width" : "Height",
                        n = "scroll" + o,
                        r = "client" + o;
                    return Math.max(0, ae(e) ? Math.max(s[n], a[n]) - (i["inner" + o] || s[r] || a[r]) : e[n] - e[r])
                },
                ce = function e(t, o) {
                    var n = le(t, "x"),
                        i = le(t, "y");
                    ae(t) ? t = q : e(t.parentNode, o), t._gsMaxScrollX = n, t._gsMaxScrollY = i, o || (t._gsScrollX = t.scrollLeft || 0, t._gsScrollY = t.scrollTop || 0)
                },
                de = function(e, t, o) {
                    var n = e.style;
                    n && (E(n[t]) && (t = p(t, e) || t), null == o ? n.removeProperty && n.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase()) : n[t] = o)
                },
                pe = function(e) {
                    return i.getComputedStyle(e instanceof Element ? e : e.host || (e.parentNode || {}).host || e)
                },
                ue = {},
                ge = function(e) {
                    if (e === i) return ue.left = ue.top = 0, ue.width = ue.right = s.clientWidth || e.innerWidth || a.clientWidth || 0, ue.height = ue.bottom = (e.innerHeight || 0) - 20 < s.clientHeight ? s.clientHeight : e.innerHeight || a.clientHeight || 0, ue;
                    var t = e.ownerDocument || r,
                        o = E(e.pageX) ? e.nodeType || E(e.left) || E(e.top) ? u(e)[0].getBoundingClientRect() : e : {
                            left: e.pageX - ie(t),
                            top: e.pageY - ne(t),
                            right: e.pageX - ie(t) + 1,
                            bottom: e.pageY - ne(t) + 1
                        };
                    return E(o.right) && !E(o.width) ? (o.right = o.left + o.width, o.bottom = o.top + o.height) : E(o.width) && (o = {
                        width: o.right - o.left,
                        height: o.bottom - o.top,
                        right: o.right,
                        left: o.left,
                        bottom: o.bottom,
                        top: o.top
                    }), o
                },
                he = function(e, t, o) {
                    var n, i = e.vars,
                        r = i[o],
                        s = e._listeners[t];
                    return D(r) && (n = r.apply(i.callbackScope || e, i[o + "Params"] || [e.pointerEvent])), s && !1 === e.dispatchEvent(t) && (n = !1), n
                },
                fe = function(e, t) {
                    var o, n, r, s = u(e)[0];
                    return s.nodeType || s === i ? ve(s, t) : E(e.left) ? {
                        left: n = e.min || e.minX || e.minRotation || 0,
                        top: o = e.min || e.minY || 0,
                        width: (e.max || e.maxX || e.maxRotation || 0) - n,
                        height: (e.max || e.maxY || 0) - o
                    } : (r = {
                        x: 0,
                        y: 0
                    }, {
                        left: e.left - r.x,
                        top: e.top - r.y,
                        width: e.width,
                        height: e.height
                    })
                },
                me = {},
                ve = function(e, t) {
                    t = u(t)[0];
                    var o, n, s, a, l, c, d, p, g, h, f, m, v, x, y = e.getBBox && e.ownerSVGElement,
                        w = e.ownerDocument || r;
                    if (e === i) s = ne(w), n = (o = ie(w)) + (w.documentElement.clientWidth || e.innerWidth || w.body.clientWidth || 0), a = s + ((e.innerHeight || 0) - 20 < w.documentElement.clientHeight ? w.documentElement.clientHeight : e.innerHeight || w.body.clientHeight || 0);
                    else {
                        if (t === i || E(t)) return e.getBoundingClientRect();
                        o = s = 0, y ? (f = (h = e.getBBox()).width, m = h.height) : (e.viewBox && (h = e.viewBox.baseVal) && (o = h.x || 0, s = h.y || 0, f = h.width, m = h.height), f || (h = "border-box" === (v = pe(e)).boxSizing, f = (parseFloat(v.width) || e.clientWidth || 0) + (h ? 0 : parseFloat(v.borderLeftWidth) + parseFloat(v.borderRightWidth)), m = (parseFloat(v.height) || e.clientHeight || 0) + (h ? 0 : parseFloat(v.borderTopWidth) + parseFloat(v.borderBottomWidth)))), n = f, a = m
                    }
                    return e === t ? {
                        left: o,
                        top: s,
                        width: n - o,
                        height: a - s
                    } : (c = (l = (0, T.M9)(t, !0).multiply((0, T.M9)(e))).apply({
                        x: o,
                        y: s
                    }), d = l.apply({
                        x: n,
                        y: s
                    }), p = l.apply({
                        x: n,
                        y: a
                    }), g = l.apply({
                        x: o,
                        y: a
                    }), o = Math.min(c.x, d.x, p.x, g.x), s = Math.min(c.y, d.y, p.y, g.y), {
                        left: o + ((x = t.parentNode || {}).scrollLeft || 0),
                        top: s + (x.scrollTop || 0),
                        width: Math.max(c.x, d.x, p.x, g.x) - o,
                        height: Math.max(c.y, d.y, p.y, g.y) - s
                    })
                },
                xe = function(e, t, o, n, i, r) {
                    var s, a, l, c = {};
                    if (t)
                        if (1 !== i && t instanceof Array) {
                            if (c.end = s = [], l = t.length, P(t[0]))
                                for (a = 0; a < l; a++) s[a] = j(t[a], i);
                            else
                                for (a = 0; a < l; a++) s[a] = t[a] * i;
                            o += 1.1, n -= 1.1
                        } else D(t) ? c.end = function(o) {
                            var n, r, s = t.call(e, o);
                            if (1 !== i)
                                if (P(s)) {
                                    for (r in n = {}, s) n[r] = s[r] * i;
                                    s = n
                                } else s *= i;
                            return s
                        } : c.end = t;
                    return (o || 0 === o) && (c.max = o), (n || 0 === n) && (c.min = n), r && (c.velocity = 0), c
                },
                ye = function e(t) {
                    var o;
                    return !(!t || !t.getAttribute || t === a) && (!("true" !== (o = t.getAttribute("data-clickable")) && ("false" === o || !t.onclick && !W.test(t.nodeName + "") && "true" !== t.getAttribute("contentEditable"))) || e(t.parentNode))
                },
                we = function(e, t) {
                    for (var o, i = e.length; i--;)(o = e[i]).ondragstart = o.onselectstart = t ? null : L, n.set(o, {
                        lazy: !0,
                        userSelect: t ? "text" : "none"
                    })
                },
                be = function e(t) {
                    return "fixed" === pe(t).position || ((t = t.parentNode) && 1 === t.nodeType ? e(t) : void 0)
                },
                _e = function(e, t) {
                    e = n.utils.toArray(e)[0], t = t || {};
                    var o, i, r, s, a, l, c = document.createElement("div"),
                        d = c.style,
                        p = e.firstChild,
                        u = 0,
                        g = 0,
                        h = e.scrollTop,
                        f = e.scrollLeft,
                        m = e.scrollWidth,
                        v = e.scrollHeight,
                        x = 0,
                        y = 0,
                        w = 0;
                    _ && !1 !== t.force3D ? (a = "translate3d(", l = "px,0px)") : C && (a = "translate(", l = "px)"), this.scrollTop = function(e, t) {
                        if (!arguments.length) return -this.top();
                        this.top(-e, t)
                    }, this.scrollLeft = function(e, t) {
                        if (!arguments.length) return -this.left();
                        this.left(-e, t)
                    }, this.left = function(o, i) {
                        if (!arguments.length) return -(e.scrollLeft + g);
                        var r = e.scrollLeft - f,
                            s = g;
                        if ((r > 2 || r < -2) && !i) return f = e.scrollLeft, n.killTweensOf(this, {
                            left: 1,
                            scrollLeft: 1
                        }), this.left(-f), void(t.onKill && t.onKill());
                        (o = -o) < 0 ? (g = o - .5 | 0, o = 0) : o > y ? (g = o - y | 0, o = y) : g = 0, (g || s) && (this._skip || (d[C] = a + -g + "px," + -u + l), g + x >= 0 && (d.paddingRight = g + x + "px")), e.scrollLeft = 0 | o, f = e.scrollLeft
                    }, this.top = function(o, i) {
                        if (!arguments.length) return -(e.scrollTop + u);
                        var r = e.scrollTop - h,
                            s = u;
                        if ((r > 2 || r < -2) && !i) return h = e.scrollTop, n.killTweensOf(this, {
                            top: 1,
                            scrollTop: 1
                        }), this.top(-h), void(t.onKill && t.onKill());
                        (o = -o) < 0 ? (u = o - .5 | 0, o = 0) : o > w ? (u = o - w | 0, o = w) : u = 0, (u || s) && (this._skip || (d[C] = a + -g + "px," + -u + l)), e.scrollTop = 0 | o, h = e.scrollTop
                    }, this.maxScrollTop = function() {
                        return w
                    }, this.maxScrollLeft = function() {
                        return y
                    }, this.disable = function() {
                        for (p = c.firstChild; p;) s = p.nextSibling, e.appendChild(p), p = s;
                        e === c.parentNode && e.removeChild(c)
                    }, this.enable = function() {
                        if ((p = e.firstChild) !== c) {
                            for (; p;) s = p.nextSibling, c.appendChild(p), p = s;
                            e.appendChild(c), this.calibrate()
                        }
                    }, this.calibrate = function(t) {
                        var n, s, a, l = e.clientWidth === o;
                        h = e.scrollTop, f = e.scrollLeft, l && e.clientHeight === i && c.offsetHeight === r && m === e.scrollWidth && v === e.scrollHeight && !t || ((u || g) && (s = this.left(), a = this.top(), this.left(-e.scrollLeft), this.top(-e.scrollTop)), n = pe(e), l && !t || (d.display = "block", d.width = "auto", d.paddingRight = "0px", (x = Math.max(0, e.scrollWidth - e.clientWidth)) && (x += parseFloat(n.paddingLeft) + (k ? parseFloat(n.paddingRight) : 0))), d.display = "inline-block", d.position = "relative", d.overflow = "visible", d.verticalAlign = "top", d.boxSizing = "content-box", d.width = "100%", d.paddingRight = x + "px", k && (d.paddingBottom = n.paddingBottom), o = e.clientWidth, i = e.clientHeight, m = e.scrollWidth, v = e.scrollHeight, y = e.scrollWidth - o, w = e.scrollHeight - i, r = c.offsetHeight, d.display = "block", (s || a) && (this.left(s), this.top(a)))
                    }, this.content = c, this.element = e, this._skip = !1, this.enable()
                },
                ke = function(e) {
                    if (M() && document.body) {
                        var t = window && window.navigator;
                        i = window, r = document, s = r.documentElement, a = r.body, l = z("div"), b = !!window.PointerEvent, (c = z("div")).style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", w = "grab" === c.style.cursor ? "grab" : "move", x = t && -1 !== t.userAgent.toLowerCase().indexOf("android"), h = "ontouchstart" in s && "orientation" in i || t && (t.MaxTouchPoints > 0 || t.msMaxTouchPoints > 0), m = z("div"), T = (v = z("div")).style, D = a, T.display = "inline-block", T.position = "relative", m.style.cssText = v.innerHTML = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden", m.appendChild(v), D.appendChild(m), o = v.offsetHeight + 18 > m.scrollHeight, D.removeChild(m), k = o, f = function(e) {
                            for (var t = e.split(","), o = (("onpointerdown" in l ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in l ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : e).split(",")), n = {}, i = 4; --i > -1;) n[t[i]] = o[i], n[o[i]] = t[i];
                            try {
                                s.addEventListener("test", null, Object.defineProperty({}, "passive", {
                                    get: function() {
                                        g = 1
                                    }
                                }))
                            } catch (e) {}
                            return n
                        }("touchstart,touchmove,touchend,touchcancel"), J(r, "touchcancel", L), J(i, "touchmove", L), a && a.addEventListener("touchstart", L), J(r, "contextmenu", (function() {
                            for (var e in A) A[e].isPressed && A[e].endDrag()
                        })), n = d = S()
                    }
                    var o, m, v, T, D;
                    n ? (y = n.plugins.inertia, p = n.utils.checkPrefix, C = p(C), X = p(X), u = n.utils.toArray, _ = !!p("perspective")) : e && console.warn("Please gsap.registerPlugin(Draggable)")
                },
                Te = function(e) {
                    var t, o;

                    function a(t, o) {
                        var l;
                        l = e.call(this) || this, d || ke(1), t = u(t)[0], y || (y = n.plugins.inertia), l.vars = o = j(o || {}), l.target = t, l.x = l.y = l.rotation = 0, l.dragResistance = parseFloat(o.dragResistance) || 0, l.edgeResistance = isNaN(o.edgeResistance) ? 1 : parseFloat(o.edgeResistance) || 0, l.lockAxis = o.lockAxis, l.autoScroll = o.autoScroll || 0, l.lockedAxis = null, l.allowEventDefault = !!o.allowEventDefault, n.getProperty(t, "x");
                        var p, g, _, k, M, S, L, C, z, W, U, te, le, ue, ve, Te, Me, Se, De, Pe, Ee, Le, Ce, Xe, He, Ye, ze, Be, Ne, Re, Oe, Ie = (o.type || "x,y").toLowerCase(),
                            Ae = ~Ie.indexOf("x") || ~Ie.indexOf("y"),
                            Fe = -1 !== Ie.indexOf("rotation"),
                            We = Fe ? "rotation" : Ae ? "x" : "left",
                            Ve = Ae ? "y" : "top",
                            Ge = !(!~Ie.indexOf("x") && !~Ie.indexOf("left") && "scroll" !== Ie),
                            qe = !(!~Ie.indexOf("y") && !~Ie.indexOf("top") && "scroll" !== Ie),
                            je = o.minimumMovement || 2,
                            Ke = function(e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e
                            }(l),
                            Ze = u(o.trigger || o.handle || t),
                            Ue = {},
                            $e = 0,
                            Je = !1,
                            Qe = o.autoScrollMarginTop || 40,
                            et = o.autoScrollMarginRight || 40,
                            tt = o.autoScrollMarginBottom || 40,
                            ot = o.autoScrollMarginLeft || 40,
                            nt = o.clickableTest || ye,
                            it = 0,
                            rt = t._gsap || n.core.getCache(t),
                            st = be(t),
                            at = function(e, o) {
                                return parseFloat(rt.get(t, e, o))
                            },
                            lt = t.ownerDocument || r,
                            ct = function(e) {
                                return ee(e), e.stopImmediatePropagation && e.stopImmediatePropagation(), !1
                            },
                            dt = function e(o) {
                                if (Ke.autoScroll && Ke.isDragging && (Je || Me)) {
                                    var n, r, a, l, c, d, p, u, h = t,
                                        f = 15 * Ke.autoScroll;
                                    for (Je = !1, q.scrollTop = null != i.pageYOffset ? i.pageYOffset : null != lt.documentElement.scrollTop ? lt.documentElement.scrollTop : lt.body.scrollTop, q.scrollLeft = null != i.pageXOffset ? i.pageXOffset : null != lt.documentElement.scrollLeft ? lt.documentElement.scrollLeft : lt.body.scrollLeft, l = Ke.pointerX - q.scrollLeft, c = Ke.pointerY - q.scrollTop; h && !r;) n = (r = ae(h.parentNode)) ? q : h.parentNode, a = r ? {
                                        bottom: Math.max(s.clientHeight, i.innerHeight || 0),
                                        right: Math.max(s.clientWidth, i.innerWidth || 0),
                                        left: 0,
                                        top: 0
                                    } : n.getBoundingClientRect(), d = p = 0, qe && ((u = n._gsMaxScrollY - n.scrollTop) < 0 ? p = u : c > a.bottom - tt && u ? (Je = !0, p = Math.min(u, f * (1 - Math.max(0, a.bottom - c) / tt) | 0)) : c < a.top + Qe && n.scrollTop && (Je = !0, p = -Math.min(n.scrollTop, f * (1 - Math.max(0, c - a.top) / Qe) | 0)), p && (n.scrollTop += p)), Ge && ((u = n._gsMaxScrollX - n.scrollLeft) < 0 ? d = u : l > a.right - et && u ? (Je = !0, d = Math.min(u, f * (1 - Math.max(0, a.right - l) / et) | 0)) : l < a.left + ot && n.scrollLeft && (Je = !0, d = -Math.min(n.scrollLeft, f * (1 - Math.max(0, l - a.left) / ot) | 0)), d && (n.scrollLeft += d)), r && (d || p) && (i.scrollTo(n.scrollLeft, n.scrollTop), kt(Ke.pointerX + d, Ke.pointerY + p)), h = n
                                }
                                if (Me) {
                                    var m = Ke.x,
                                        v = Ke.y;
                                    Fe ? (Ke.deltaX = m - parseFloat(rt.rotation), Ke.rotation = m, rt.rotation = m + "deg", rt.renderTransform(1, rt)) : g ? (qe && (Ke.deltaY = v - g.top(), g.top(v)), Ge && (Ke.deltaX = m - g.left(), g.left(m))) : Ae ? (qe && (Ke.deltaY = v - parseFloat(rt.y), rt.y = v + "px"), Ge && (Ke.deltaX = m - parseFloat(rt.x), rt.x = m + "px"), rt.renderTransform(1, rt)) : (qe && (Ke.deltaY = v - parseFloat(t.style.top || 0), t.style.top = v + "px"), Ge && (Ke.deltaX = m - parseFloat(t.style.left || 0), t.style.left = m + "px")), !C || o || Be || (Be = !0, !1 === he(Ke, "drag", "onDrag") && (Ge && (Ke.x -= Ke.deltaX), qe && (Ke.y -= Ke.deltaY), e(!0)), Be = !1)
                                }
                                Me = !1
                            },
                            pt = function(e, o) {
                                var i, r, s = Ke.x,
                                    a = Ke.y;
                                t._gsap || (rt = n.core.getCache(t)), rt.uncache && n.getProperty(t, "x"), Ae ? (Ke.x = parseFloat(rt.x), Ke.y = parseFloat(rt.y)) : Fe ? Ke.x = Ke.rotation = parseFloat(rt.rotation) : g ? (Ke.y = g.top(), Ke.x = g.left()) : (Ke.y = parseFloat(t.style.top || (r = pe(t)) && r.top) || 0, Ke.x = parseFloat(t.style.left || (r || {}).left) || 0), (De || Pe || Ee) && !o && (Ke.isDragging || Ke.isThrowing) && (Ee && (G.x = Ke.x, G.y = Ke.y, (i = Ee(G)).x !== Ke.x && (Ke.x = i.x, Me = !0), i.y !== Ke.y && (Ke.y = i.y, Me = !0)), De && (i = De(Ke.x)) !== Ke.x && (Ke.x = i, Fe && (Ke.rotation = i), Me = !0), Pe && ((i = Pe(Ke.y)) !== Ke.y && (Ke.y = i), Me = !0)), Me && dt(!0), e || (Ke.deltaX = Ke.x - s, Ke.deltaY = Ke.y - a, he(Ke, "throwupdate", "onThrowUpdate"))
                            },
                            ut = function(e, t, o, n) {
                                return null == t && (t = -N), null == o && (o = N), D(e) ? function(i) {
                                    var r = Ke.isPressed ? 1 - Ke.edgeResistance : 1;
                                    return e.call(Ke, i > o ? o + (i - o) * r : i < t ? t + (i - t) * r : i) * n
                                } : Y(e) ? function(n) {
                                    for (var i, r, s = e.length, a = 0, l = N; --s > -1;)(r = (i = e[s]) - n) < 0 && (r = -r), r < l && i >= t && i <= o && (a = s, l = r);
                                    return e[a]
                                } : isNaN(e) ? function(e) {
                                    return e
                                } : function() {
                                    return e * n
                                }
                            },
                            gt = function() {
                                var e, n, i, r;
                                L = !1, g ? (g.calibrate(), Ke.minX = U = -g.maxScrollLeft(), Ke.minY = le = -g.maxScrollTop(), Ke.maxX = W = Ke.maxY = te = 0, L = !0) : o.bounds && (e = fe(o.bounds, t.parentNode), Fe ? (Ke.minX = U = e.left, Ke.maxX = W = e.left + e.width, Ke.minY = le = Ke.maxY = te = 0) : E(o.bounds.maxX) && E(o.bounds.maxY) ? (n = fe(t, t.parentNode), Ke.minX = U = Math.round(at(We, "px") + e.left - n.left - .5), Ke.minY = le = Math.round(at(Ve, "px") + e.top - n.top - .5), Ke.maxX = W = Math.round(U + (e.width - n.width)), Ke.maxY = te = Math.round(le + (e.height - n.height))) : (e = o.bounds, Ke.minX = U = e.minX, Ke.minY = le = e.minY, Ke.maxX = W = e.maxX, Ke.maxY = te = e.maxY), U > W && (Ke.minX = W, Ke.maxX = W = U, U = Ke.minX), le > te && (Ke.minY = te, Ke.maxY = te = le, le = Ke.minY), Fe && (Ke.minRotation = U, Ke.maxRotation = W), L = !0), o.liveSnap && (i = !0 === o.liveSnap ? o.snap || {} : o.liveSnap, r = Y(i) || D(i), Fe ? (De = ut(r ? i : i.rotation, U, W, 1), Pe = null) : i.points ? Ee = function(e, t, o, n, i, r, s) {
                                    return r = r && r < N ? r * r : N, D(e) ? function(a) {
                                        var l, c, d, p = Ke.isPressed ? 1 - Ke.edgeResistance : 1,
                                            u = a.x,
                                            g = a.y;
                                        return a.x = u = u > o ? o + (u - o) * p : u < t ? t + (u - t) * p : u, a.y = g = g > i ? i + (g - i) * p : g < n ? n + (g - n) * p : g, (l = e.call(Ke, a)) !== a && (a.x = l.x, a.y = l.y), 1 !== s && (a.x *= s, a.y *= s), r < N && (c = a.x - u) * c + (d = a.y - g) * d > r && (a.x = u, a.y = g), a
                                    } : Y(e) ? function(t) {
                                        for (var o, n, i, s, a = e.length, l = 0, c = N; --a > -1;)(s = (o = (i = e[a]).x - t.x) * o + (n = i.y - t.y) * n) < c && (l = a, c = s);
                                        return c <= r ? e[l] : t
                                    } : function(e) {
                                        return e
                                    }
                                }(r ? i : i.points, U, W, le, te, i.radius, g ? -1 : 1) : (Ge && (De = ut(r ? i : i.x || i.left || i.scrollLeft, U, W, g ? -1 : 1)), qe && (Pe = ut(r ? i : i.y || i.top || i.scrollTop, le, te, g ? -1 : 1))))
                            },
                            ht = function() {
                                Ke.isThrowing = !1, he(Ke, "throwcomplete", "onThrowComplete")
                            },
                            ft = function() {
                                Ke.isThrowing = !1
                            },
                            mt = function(e, i) {
                                var r, s, a, l;
                                e && y ? (!0 === e && (r = o.snap || o.liveSnap || {}, s = Y(r) || D(r), e = {
                                    resistance: (o.throwResistance || o.resistance || 1e3) / (Fe ? 10 : 1)
                                }, Fe ? e.rotation = xe(Ke, s ? r : r.rotation, W, U, 1, i) : (Ge && (e[We] = xe(Ke, s ? r : r.points || r.x || r.left, W, U, g ? -1 : 1, i || "x" === Ke.lockedAxis)), qe && (e[Ve] = xe(Ke, s ? r : r.points || r.y || r.top, te, le, g ? -1 : 1, i || "y" === Ke.lockedAxis)), (r.points || Y(r) && P(r[0])) && (e.linkedProps = We + "," + Ve, e.radius = r.radius))), Ke.isThrowing = !0, l = isNaN(o.overshootTolerance) ? 1 === o.edgeResistance ? 0 : 1 - Ke.edgeResistance + .2 : o.overshootTolerance, e.duration || (e.duration = {
                                    max: Math.max(o.minDuration || 0, "maxDuration" in o ? o.maxDuration : 2),
                                    min: isNaN(o.minDuration) ? 0 === l || P(e) && e.resistance > 1e3 ? 0 : .5 : o.minDuration,
                                    overshoot: l
                                }), Ke.tween = a = n.to(g || t, {
                                    inertia: e,
                                    data: "_draggable",
                                    onComplete: ht,
                                    onInterrupt: ft,
                                    onUpdate: o.fastMode ? he : pt,
                                    onUpdateParams: o.fastMode ? [Ke, "onthrowupdate", "onThrowUpdate"] : r && r.radius ? [!1, !0] : []
                                }), o.fastMode || (g && (g._skip = !0), a.render(1e9, !0, !0), pt(!0, !0), Ke.endX = Ke.x, Ke.endY = Ke.y, Fe && (Ke.endRotation = Ke.x), a.play(0), pt(!0, !0), g && (g._skip = !1))) : L && Ke.applyBounds()
                            },
                            vt = function(e) {
                                var o, n = Xe;
                                Xe = (0, T.M9)(t.parentNode, !0), e && Ke.isPressed && !Xe.equals(n || new T.G9) && (o = n.inverse().apply({
                                    x: _,
                                    y: k
                                }), Xe.apply(o, o), _ = o.x, k = o.y), Xe.equals(R) && (Xe = null)
                            },
                            xt = function() {
                                var e, o, n, i = 1 - Ke.edgeResistance,
                                    r = st ? ie(lt) : 0,
                                    s = st ? ne(lt) : 0;
                                vt(!1), me.x = Ke.pointerX - r, me.y = Ke.pointerY - s, Xe && Xe.apply(me, me), _ = me.x, k = me.y, Me && (kt(Ke.pointerX, Ke.pointerY), dt(!0)), g ? (gt(), S = g.top(), M = g.left()) : (yt() ? (pt(!0, !0), gt()) : Ke.applyBounds(), Fe ? (e = t.ownerSVGElement ? [rt.xOrigin - t.getBBox().x, rt.yOrigin - t.getBBox().y] : (pe(t)[X] || "0 0").split(" "), Te = Ke.rotationOrigin = (0, T.M9)(t).apply({
                                    x: parseFloat(e[0]) || 0,
                                    y: parseFloat(e[1]) || 0
                                }), pt(!0, !0), o = Ke.pointerX - Te.x - r, n = Te.y - Ke.pointerY + s, M = Ke.x, S = Ke.y = Math.atan2(n, o) * B) : (S = at(Ve, "px"), M = at(We, "px"))), L && i && (M > W ? M = W + (M - W) / i : M < U && (M = U - (U - M) / i), Fe || (S > te ? S = te + (S - te) / i : S < le && (S = le - (le - S) / i))), Ke.startX = M = H(M), Ke.startY = S = H(S)
                            },
                            yt = function() {
                                return Ke.tween && Ke.tween.isActive()
                            },
                            wt = function() {
                                !c.parentNode || yt() || Ke.isDragging || c.parentNode.removeChild(c)
                            },
                            bt = function(e, r) {
                                var s;
                                if (!p || Ke.isPressed || !e || !("mousedown" !== e.type && "pointerdown" !== e.type || r) && O() - it < 30 && f[Ke.pointerEvent.type]) Oe && e && p && ee(e);
                                else {
                                    if (He = yt(), Ke.pointerEvent = e, f[e.type] ? (Ce = ~e.type.indexOf("touch") ? e.currentTarget || e.target : lt, J(Ce, "touchend", Tt), J(Ce, "touchmove", _t), J(Ce, "touchcancel", Tt), J(lt, "touchstart", oe)) : (Ce = null, J(lt, "mousemove", _t)), ze = null, b && Ce || (J(lt, "mouseup", Tt), e && e.target && J(e.target, "mouseup", Tt)), Le = nt.call(Ke, e.target) && !1 === o.dragClickables && !r) return J(e.target, "change", Tt), he(Ke, "pressInit", "onPressInit"), he(Ke, "press", "onPress"), we(Ze, !0), void(Oe = !1);
                                    var l;
                                    if (Ye = !(!Ce || Ge === qe || !1 === Ke.vars.allowNativeTouchScrolling || Ke.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2)) && (Ge ? "y" : "x"), (Oe = !Ye && !Ke.allowEventDefault) && (ee(e), J(i, "touchforcechange", ee)), e.changedTouches ? (e = ue = e.changedTouches[0], ve = e.identifier) : e.pointerId ? ve = e.pointerId : ue = ve = null, m++, l = dt, I.push(l), 1 === I.length && n.ticker.add(Z), k = Ke.pointerY = e.pageY, _ = Ke.pointerX = e.pageX, he(Ke, "pressInit", "onPressInit"), (Ye || Ke.autoScroll) && ce(t.parentNode), !t.parentNode || !Ke.autoScroll || g || Fe || !t.parentNode._gsMaxScrollX || c.parentNode || t.getBBox || (c.style.width = t.parentNode.scrollWidth + "px", t.parentNode.appendChild(c)), xt(), Ke.tween && Ke.tween.kill(), Ke.isThrowing = !1, n.killTweensOf(g || t, Ue, !0), g && n.killTweensOf(t, {
                                            scrollTo: 1
                                        }, !0), Ke.tween = Ke.lockedAxis = null, (o.zIndexBoost || !Fe && !g && !1 !== o.zIndexBoost) && (t.style.zIndex = a.zIndex++), Ke.isPressed = !0, C = !(!o.onDrag && !Ke._listeners.drag), z = !(!o.onMove && !Ke._listeners.move), !Fe && (!1 !== o.cursor || o.activeCursor))
                                        for (s = Ze.length; --s > -1;) n.set(Ze[s], {
                                            cursor: o.activeCursor || o.cursor || ("grab" === w ? "grabbing" : w)
                                        });
                                    he(Ke, "press", "onPress")
                                }
                            },
                            _t = function(e) {
                                var o, n, r, s, a, l, c = e;
                                if (p && !v && Ke.isPressed && e) {
                                    if (Ke.pointerEvent = e, o = e.changedTouches) {
                                        if ((e = o[0]) !== ue && e.identifier !== ve) {
                                            for (s = o.length; --s > -1 && (e = o[s]).identifier !== ve && e.target !== t;);
                                            if (s < 0) return
                                        }
                                    } else if (e.pointerId && ve && e.pointerId !== ve) return;
                                    Ce && Ye && !ze && (me.x = e.pageX, me.y = e.pageY, Xe && Xe.apply(me, me), n = me.x, r = me.y, ((a = Math.abs(n - _)) !== (l = Math.abs(r - k)) && (a > je || l > je) || x && Ye === ze) && (ze = a > l && Ge ? "x" : "y", Ye && ze !== Ye && J(i, "touchforcechange", ee), !1 !== Ke.vars.lockAxisOnTouchScroll && Ge && qe && (Ke.lockedAxis = "x" === ze ? "y" : "x", D(Ke.vars.onLockAxis) && Ke.vars.onLockAxis.call(Ke, c)), x && Ye === ze)) ? Tt(c) : (Ke.allowEventDefault || Ye && (!ze || Ye === ze) || !1 === c.cancelable ? Oe && (Oe = !1) : (ee(c), Oe = !0), Ke.autoScroll && (Je = !0), kt(e.pageX, e.pageY, z))
                                } else Oe && e && p && ee(e)
                            },
                            kt = function(e, t, o) {
                                var n, i, r, s, a, l, c = 1 - Ke.dragResistance,
                                    d = 1 - Ke.edgeResistance,
                                    p = Ke.pointerX,
                                    u = Ke.pointerY,
                                    g = S,
                                    h = Ke.x,
                                    f = Ke.y,
                                    m = Ke.endX,
                                    v = Ke.endY,
                                    x = Ke.endRotation,
                                    y = Me;
                                Ke.pointerX = e, Ke.pointerY = t, st && (e -= ie(lt), t -= ne(lt)), Fe ? (s = Math.atan2(Te.y - t, e - Te.x) * B, (a = Ke.y - s) > 180 ? (S -= 360, Ke.y = s) : a < -180 && (S += 360, Ke.y = s), Ke.x !== M || Math.abs(S - s) > je ? (Ke.y = s, r = M + (S - s) * c) : r = M) : (Xe && (l = e * Xe.a + t * Xe.c + Xe.e, t = e * Xe.b + t * Xe.d + Xe.f, e = l), (i = t - k) < je && i > -je && (i = 0), (n = e - _) < je && n > -je && (n = 0), (Ke.lockAxis || Ke.lockedAxis) && (n || i) && ((l = Ke.lockedAxis) || (Ke.lockedAxis = l = Ge && Math.abs(n) > Math.abs(i) ? "y" : qe ? "x" : null, l && D(Ke.vars.onLockAxis) && Ke.vars.onLockAxis.call(Ke, Ke.pointerEvent)), "y" === l ? i = 0 : "x" === l && (n = 0)), r = H(M + n * c), s = H(S + i * c)), (De || Pe || Ee) && (Ke.x !== r || Ke.y !== s && !Fe) ? (Ee && (G.x = r, G.y = s, l = Ee(G), r = H(l.x), s = H(l.y)), De && (r = H(De(r))), Pe && (s = H(Pe(s)))) : L && (r > W ? r = W + Math.round((r - W) * d) : r < U && (r = U + Math.round((r - U) * d)), Fe || (s > te ? s = Math.round(te + (s - te) * d) : s < le && (s = Math.round(le + (s - le) * d)))), (Ke.x !== r || Ke.y !== s && !Fe) && (Fe ? (Ke.endRotation = Ke.x = Ke.endX = r, Me = !0) : (qe && (Ke.y = Ke.endY = s, Me = !0), Ge && (Ke.x = Ke.endX = r, Me = !0)), o && !1 === he(Ke, "move", "onMove") ? (Ke.pointerX = p, Ke.pointerY = u, S = g, Ke.x = h, Ke.y = f, Ke.endX = m, Ke.endY = v, Ke.endRotation = x, Me = y) : !Ke.isDragging && Ke.isPressed && (Ke.isDragging = !0, he(Ke, "dragstart", "onDragStart")))
                            },
                            Tt = function e(r, s) {
                                if (p && Ke.isPressed && (!r || null == ve || s || !(r.pointerId && r.pointerId !== ve && r.target !== t || r.changedTouches && ! function(e, t) {
                                        for (var o = e.length; o--;)
                                            if (e[o].identifier === t) return !0
                                    }(r.changedTouches, ve)))) {
                                    Ke.isPressed = !1;
                                    var a, l, c, d, u, g = r,
                                        h = Ke.isDragging,
                                        f = Ke.vars.allowContextMenu && r && (r.ctrlKey || r.which > 2),
                                        v = n.delayedCall(.001, wt);
                                    if (Ce ? (Q(Ce, "touchend", e), Q(Ce, "touchmove", _t), Q(Ce, "touchcancel", e), Q(lt, "touchstart", oe)) : Q(lt, "mousemove", _t), Q(i, "touchforcechange", ee), b && Ce || (Q(lt, "mouseup", e), r && r.target && Q(r.target, "mouseup", e)), Me = !1, h && ($e = V = O(), Ke.isDragging = !1), Le && !f) return r && (Q(r.target, "change", e), Ke.pointerEvent = g), we(Ze, !1), he(Ke, "release", "onRelease"), he(Ke, "click", "onClick"), void(Le = !1);
                                    if ($(dt), !Fe)
                                        for (l = Ze.length; --l > -1;) de(Ze[l], "cursor", o.cursor || (!1 !== o.cursor ? w : null));
                                    if (m--, r) {
                                        if ((a = r.changedTouches) && (r = a[0]) !== ue && r.identifier !== ve) {
                                            for (l = a.length; --l > -1 && (r = a[l]).identifier !== ve && r.target !== t;);
                                            if (l < 0) return
                                        }
                                        Ke.pointerEvent = g, Ke.pointerX = r.pageX, Ke.pointerY = r.pageY
                                    }
                                    return f && g ? (ee(g), Oe = !0, he(Ke, "release", "onRelease")) : g && !h ? (Oe = !1, He && (o.snap || o.bounds) && mt(o.inertia || o.throwProps), he(Ke, "release", "onRelease"), x && "touchmove" === g.type || -1 !== g.type.indexOf("cancel") || (he(Ke, "click", "onClick"), O() - it < 300 && he(Ke, "doubleclick", "onDoubleClick"), d = g.target || t, it = O(), u = function() {
                                        it === Ne || !Ke.enabled() || Ke.isPressed || g.defaultPrevented || (d.click ? d.click() : lt.createEvent && ((c = lt.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, i, 1, Ke.pointerEvent.screenX, Ke.pointerEvent.screenY, Ke.pointerX, Ke.pointerY, !1, !1, !1, !1, 0, null), d.dispatchEvent(c)))
                                    }, x || g.defaultPrevented || n.delayedCall(.05, u))) : (mt(o.inertia || o.throwProps), Ke.allowEventDefault || !g || !1 === o.dragClickables && nt.call(Ke, g.target) || !h || Ye && (!ze || Ye !== ze) || !1 === g.cancelable ? Oe = !1 : (Oe = !0, ee(g)), he(Ke, "release", "onRelease")), yt() && v.duration(Ke.tween.duration()), h && he(Ke, "dragend", "onDragEnd"), !0
                                }
                                Oe && r && p && ee(r)
                            },
                            Mt = function(e) {
                                if (e && Ke.isDragging && !g) {
                                    var o = e.target || t.parentNode,
                                        n = o.scrollLeft - o._gsScrollX,
                                        i = o.scrollTop - o._gsScrollY;
                                    (n || i) && (Xe ? (_ -= n * Xe.a + i * Xe.c, k -= i * Xe.d + n * Xe.b) : (_ -= n, k -= i), o._gsScrollX += n, o._gsScrollY += i, kt(Ke.pointerX, Ke.pointerY))
                                }
                            },
                            St = function(e) {
                                var t = O(),
                                    o = t - it < 40,
                                    n = t - $e < 40,
                                    i = o && Ne === it,
                                    r = Ke.pointerEvent && Ke.pointerEvent.defaultPrevented,
                                    s = o && Re === it,
                                    a = e.isTrusted || null == e.isTrusted && o && i;
                                if ((i || n && !1 !== Ke.vars.suppressClickOnDrag) && e.stopImmediatePropagation && e.stopImmediatePropagation(), o && (!Ke.pointerEvent || !Ke.pointerEvent.defaultPrevented) && (!i || a && !s)) return a && i && (Re = it), void(Ne = it);
                                (Ke.isPressed || n || o) && (a && e.detail && o && !r || ee(e)), o || n || (e && e.target && (Ke.pointerEvent = e), he(Ke, "click", "onClick"))
                            },
                            Dt = function(e) {
                                return Xe ? {
                                    x: e.x * Xe.a + e.y * Xe.c + Xe.e,
                                    y: e.x * Xe.b + e.y * Xe.d + Xe.f
                                } : {
                                    x: e.x,
                                    y: e.y
                                }
                            };
                        return (Se = a.get(t)) && Se.kill(), l.startDrag = function(e, o) {
                            var n, i, r, s;
                            bt(e || Ke.pointerEvent, !0), o && !Ke.hitTest(e || Ke.pointerEvent) && (n = ge(e || Ke.pointerEvent), i = ge(t), r = Dt({
                                x: n.left + n.width / 2,
                                y: n.top + n.height / 2
                            }), s = Dt({
                                x: i.left + i.width / 2,
                                y: i.top + i.height / 2
                            }), _ -= r.x - s.x, k -= r.y - s.y), Ke.isDragging || (Ke.isDragging = !0, he(Ke, "dragstart", "onDragStart"))
                        }, l.drag = _t, l.endDrag = function(e) {
                            return Tt(e || Ke.pointerEvent, !0)
                        }, l.timeSinceDrag = function() {
                            return Ke.isDragging ? 0 : (O() - $e) / 1e3
                        }, l.timeSinceClick = function() {
                            return (O() - it) / 1e3
                        }, l.hitTest = function(e, t) {
                            return a.hitTest(Ke.target, e, t)
                        }, l.getDirection = function(e, o) {
                            var n, i, r, s, a, l, c = "velocity" === e && y ? e : P(e) && !Fe ? "element" : "start";
                            return "element" === c && (a = ge(Ke.target), l = ge(e)), n = "start" === c ? Ke.x - M : "velocity" === c ? y.getVelocity(t, We) : a.left + a.width / 2 - (l.left + l.width / 2), Fe ? n < 0 ? "counter-clockwise" : "clockwise" : (o = o || 2, i = "start" === c ? Ke.y - S : "velocity" === c ? y.getVelocity(t, Ve) : a.top + a.height / 2 - (l.top + l.height / 2), s = (r = Math.abs(n / i)) < 1 / o ? "" : n < 0 ? "left" : "right", r < o && ("" !== s && (s += "-"), s += i < 0 ? "up" : "down"), s)
                        }, l.applyBounds = function(e, n) {
                            var r, s, a, l, c, d;
                            if (e && o.bounds !== e) return o.bounds = e, Ke.update(!0, n);
                            if (pt(!0), gt(), L && !yt()) {
                                if (r = Ke.x, s = Ke.y, r > W ? r = W : r < U && (r = U), s > te ? s = te : s < le && (s = le), (Ke.x !== r || Ke.y !== s) && (a = !0, Ke.x = Ke.endX = r, Fe ? Ke.endRotation = r : Ke.y = Ke.endY = s, Me = !0, dt(!0), Ke.autoScroll && !Ke.isDragging))
                                    for (ce(t.parentNode), l = t, q.scrollTop = null != i.pageYOffset ? i.pageYOffset : null != lt.documentElement.scrollTop ? lt.documentElement.scrollTop : lt.body.scrollTop, q.scrollLeft = null != i.pageXOffset ? i.pageXOffset : null != lt.documentElement.scrollLeft ? lt.documentElement.scrollLeft : lt.body.scrollLeft; l && !d;) c = (d = ae(l.parentNode)) ? q : l.parentNode, qe && c.scrollTop > c._gsMaxScrollY && (c.scrollTop = c._gsMaxScrollY), Ge && c.scrollLeft > c._gsMaxScrollX && (c.scrollLeft = c._gsMaxScrollX), l = c;
                                Ke.isThrowing && (a || Ke.endX > W || Ke.endX < U || Ke.endY > te || Ke.endY < le) && mt(o.inertia || o.throwProps, a)
                            }
                            return Ke
                        }, l.update = function(e, o, n) {
                            var i = Ke.x,
                                r = Ke.y;
                            return vt(!o), e ? Ke.applyBounds() : (Me && n && dt(!0), pt(!0)), o && (kt(Ke.pointerX, Ke.pointerY), Me && dt(!0)), Ke.isPressed && !o && (Ge && Math.abs(i - Ke.x) > .01 || qe && Math.abs(r - Ke.y) > .01 && !Fe) && xt(), Ke.autoScroll && (ce(t.parentNode, Ke.isDragging), Je = Ke.isDragging, dt(!0), se(t, Mt), re(t, Mt)), Ke
                        }, l.enable = function(e) {
                            var i, r, s, a = {
                                lazy: !0
                            };
                            if (Fe || !1 === o.cursor || (a.cursor = o.cursor || w), n.utils.checkPrefix("touchCallout") && (a.touchCallout = "none"), "soft" !== e) {
                                for (K(Ze, Ge === qe ? "none" : o.allowNativeTouchScrolling && t.scrollHeight === t.clientHeight == (t.scrollWidth === t.clientHeight) || o.allowEventDefault ? "manipulation" : Ge ? "pan-y" : "pan-x"), r = Ze.length; --r > -1;) s = Ze[r], b || J(s, "mousedown", bt), J(s, "touchstart", bt), J(s, "click", St, !0), n.set(s, a), s.getBBox && s.ownerSVGElement && n.set(s.ownerSVGElement, {
                                    touchAction: Ge === qe ? "none" : o.allowNativeTouchScrolling || o.allowEventDefault ? "manipulation" : Ge ? "pan-y" : "pan-x"
                                }), o.allowContextMenu || J(s, "contextmenu", ct);
                                we(Ze, !1)
                            }
                            return re(t, Mt), p = !0, y && "soft" !== e && y.track(g || t, Ae ? "x,y" : Fe ? "rotation" : "top,left"), t._gsDragID = i = "d" + F++, A[i] = Ke, g && (g.enable(), g.element._gsDragID = i), (o.bounds || Fe) && xt(), o.bounds && Ke.applyBounds(), Ke
                        }, l.disable = function(e) {
                            var o, n, i = Ke.isDragging;
                            if (!Fe)
                                for (o = Ze.length; --o > -1;) de(Ze[o], "cursor", null);
                            if ("soft" !== e) {
                                for (K(Ze, null), o = Ze.length; --o > -1;) n = Ze[o], de(n, "touchCallout", null), Q(n, "mousedown", bt), Q(n, "touchstart", bt), Q(n, "click", St), Q(n, "contextmenu", ct);
                                we(Ze, !0), Ce && (Q(Ce, "touchcancel", Tt), Q(Ce, "touchend", Tt), Q(Ce, "touchmove", _t)), Q(lt, "mouseup", Tt), Q(lt, "mousemove", _t)
                            }
                            return se(t, Mt), p = !1, y && "soft" !== e && y.untrack(g || t, Ae ? "x,y" : Fe ? "rotation" : "top,left"), g && g.disable(), $(dt), Ke.isDragging = Ke.isPressed = Le = !1, i && he(Ke, "dragend", "onDragEnd"), Ke
                        }, l.enabled = function(e, t) {
                            return arguments.length ? e ? Ke.enable(t) : Ke.disable(t) : p
                        }, l.kill = function() {
                            return Ke.isThrowing = !1, Ke.tween && Ke.tween.kill(), Ke.disable(), n.set(Ze, {
                                clearProps: "userSelect"
                            }), delete A[t._gsDragID], Ke
                        }, ~Ie.indexOf("scroll") && (g = l.scrollProxy = new _e(t, function(e, t) {
                            for (var o in t) o in e || (e[o] = t[o]);
                            return e
                        }({
                            onKill: function() {
                                Ke.isPressed && Tt(null)
                            }
                        }, o)), t.style.overflowY = qe && !h ? "auto" : "hidden", t.style.overflowX = Ge && !h ? "auto" : "hidden", t = g.content), Fe ? Ue.rotation = 1 : (Ge && (Ue[We] = 1), qe && (Ue[Ve] = 1)), rt.force3D = !("force3D" in o) || o.force3D, l.enable(), l
                    }
                    return o = e, (t = a).prototype = Object.create(o.prototype), t.prototype.constructor = t, t.__proto__ = o, a.register = function(e) {
                        n = e, ke()
                    }, a.create = function(e, t) {
                        return d || ke(!0), u(e).map((function(e) {
                            return new a(e, t)
                        }))
                    }, a.get = function(e) {
                        return A[(u(e)[0] || {})._gsDragID]
                    }, a.timeSinceDrag = function() {
                        return (O() - V) / 1e3
                    }, a.hitTest = function(e, t, o) {
                        if (e === t) return !1;
                        var n, i, r, s = ge(e),
                            a = ge(t),
                            l = s.top,
                            c = s.left,
                            d = s.right,
                            p = s.bottom,
                            u = s.width,
                            g = s.height,
                            h = a.left > d || a.right < c || a.top > p || a.bottom < l;
                        return h || !o ? !h : (r = -1 !== (o + "").indexOf("%"), o = parseFloat(o) || 0, (n = {
                            left: Math.max(c, a.left),
                            top: Math.max(l, a.top)
                        }).width = Math.min(d, a.right) - n.left, n.height = Math.min(p, a.bottom) - n.top, !(n.width < 0 || n.height < 0) && (r ? (o *= .01, (i = n.width * n.height) >= u * g * o || i >= a.width * a.height * o) : n.width > o && n.height > o))
                    }, a
                }(function() {
                    function e(e) {
                        this._listeners = {}, this.target = e || this
                    }
                    var t = e.prototype;
                    return t.addEventListener = function(e, t) {
                        var o = this._listeners[e] || (this._listeners[e] = []);
                        ~o.indexOf(t) || o.push(t)
                    }, t.removeEventListener = function(e, t) {
                        var o = this._listeners[e],
                            n = o && o.indexOf(t) || -1;
                        n > -1 && o.splice(n, 1)
                    }, t.dispatchEvent = function(e) {
                        var t, o = this;
                        return (this._listeners[e] || []).forEach((function(n) {
                            return !1 === n.call(o, {
                                type: e,
                                target: o.target
                            }) && (t = !1)
                        })), t
                    }, e
                }());
            ! function(e, t) {
                for (var o in t) o in e || (e[o] = t[o])
            }(Te.prototype, {
                pointerX: 0,
                pointerY: 0,
                startX: 0,
                startY: 0,
                deltaX: 0,
                deltaY: 0,
                isDragging: !1,
                isPressed: !1
            }), Te.zIndex = 1e3, Te.version = "3.6.1", S() && n.registerPlugin(Te);
            var Me, Se, De, Pe, Ee, Le, Ce, Xe, He, Ye, ze, Be, Ne, Re, Oe = !0,
                Ie = 0,
                Ae = function() {
                    return "undefined" != typeof window
                },
                Fe = function() {
                    return Me || Ae() && (Me = window.gsap) && Me.registerPlugin && Me
                },
                We = function(e) {
                    return "string" == typeof e
                },
                Ve = function(e) {
                    return void 0 === e
                },
                Ge = "http://www.w3.org/2000/svg",
                qe = "http://www.w3.org/1999/xhtml",
                je = 0,
                Ke = {},
                Ze = function() {
                    try {
                        return sessionStorage.setItem("gsTest", "1"), sessionStorage.removeItem("gsTest"), !0
                    } catch (e) {
                        return !1
                    }
                }(),
                Ue = function(e, t, o) {
                    var n = De.createElementNS ? De.createElementNS("svg" === e ? Ge : qe, e) : De.createElement(e);
                    return t && (We(t) && (t = De.querySelector(t)), t.appendChild(n)), "svg" === e && (n.setAttribute("xmlns", Ge), n.setAttribute("xmlns:xlink", qe)), o && (n.style.cssText = o), n
                },
                $e = function() {
                    De.selection ? De.selection.empty() : Ee.getSelection && Ee.getSelection().removeAllRanges()
                },
                Je = function e(t, o) {
                    for (var n = [], i = 0, r = Me.core.Tween, s = t._first; s;) s instanceof r ? s.vars.id && (n[i++] = s) : (o && s.vars.id && (n[i++] = s), i = (n = n.concat(e(s, o))).length), s = s._next;
                    return n
                },
                Qe = function(e, t) {
                    var o = 0,
                        n = Math.max(0, e._repeat),
                        i = e._first;
                    for (i || (o = e.duration()); i;) o = Math.max(o, i.totalDuration() > 999 ? i.endTime(!1) : i._start + i._tDur / i._ts), i = i._next;
                    return !t && n ? o * (n + 1) + e._rDelay * n : o
                },
                et = function(e, t, o, n) {
                    var i, r, s;
                    return We(e) && ("=" === e.charAt(1) ? ((i = parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2))) < 0 && 0 === n && (n = 100), e = n / 100 * t.duration() + i) : isNaN(e) && t.labels && -1 !== t.labels[e] ? e = t.labels[e] : t === Le && ((r = e.indexOf("=")) > 0 ? (i = parseInt(e.charAt(r - 1) + "1", 10) * parseFloat(e.substr(r + 1)), e = e.substr(0, r - 1)) : i = 0, (s = Me.getById(e)) && (e = function(e, t) {
                        for (var o = e, n = arguments.length > 1 ? +t : o.rawTime(); o;) n = o._start + n / (o._ts || 1), o = o.parent;
                        return n
                    }(s, o / 100 * s.duration()) + i))), e = isNaN(e) ? o : parseFloat(e), Math.min(100, Math.max(0, e / t.duration() * 100))
                },
                tt = !0,
                ot = function(e, t, o, n) {
                    var i, r;
                    if ("mousedown" !== t && "mouseup" !== t || (e.style.cursor = "pointer"), "mousedown" === t && (r = Ve(e.onpointerdown) ? Ve(e.ontouchstart) ? null : "touchstart" : "pointerdown")) return i = function(t) {
                        "select" !== t.target.nodeName.toLowerCase() && t.type === r ? (t.stopPropagation(), tt && (t.preventDefault(), o.call(e, t))) : t.type !== r && o.call(e, t), tt = !0
                    }, e.addEventListener(r, i, n), void("pointerdown" !== r && e.addEventListener(t, i, n));
                    e.addEventListener(t, o, n)
                },
                nt = function(e, t, o) {
                    e.removeEventListener(t, o), (t = "mousedown" !== t ? null : Ve(e.onpointerdown) ? Ve(e.ontouchstart) ? null : "touchstart" : "pointerdown") && e.removeEventListener(t, o)
                },
                it = function(e, t, o, n) {
                    var i, r = e.options,
                        s = r.length;
                    for (t += ""; --s > -1;)
                        if (r[s].innerHTML === t || r[s].value === t) return e.selectedIndex = s, o.innerHTML = r[s].innerHTML, r[s];
                    n && ((i = Ue("option", e)).setAttribute("value", t), i.innerHTML = o.innerHTML = We(n) ? n : t, e.selectedIndex = r.length - 1)
                },
                rt = function(e, t, o) {
                    var n = e.options,
                        i = Math.min(n.length - 1, Math.max(0, e.selectedIndex + t));
                    return e.selectedIndex = i, o && (o.innerHTML = n[i].innerHTML), n[i].value
                },
                st = function() {
                    var e, t, o, n = ze._first;
                    if (He) {
                        for (e = Le._dur; n;) t = n._next, "function" == typeof(o = n._targets && n._targets[0]) && o === n.vars.onComplete && !n._dur || o && o._gsIgnore || Le.add(n, n._start - n._delay), n = t;
                        return e !== Le.duration()
                    }
                },
                at = function(e) {
                    return Me.getById(e) || Be.getById(e) || e === Le.vars.id && Le
                },
                lt = function(e) {
                    Me = e || Fe(), Se || Me && Ae() && (De = document, Pe = De.documentElement, Ee = window, Me.registerPlugin(Te), (ze = Me.globalTimeline)._sort = !0, ze.autoRemoveChildren = !1, Ce = Me.core.Animation, (Be = Me.timeline({
                        data: "indy",
                        autoRemoveChildren: !0,
                        smoothChildTiming: !0
                    })).kill(), Be._dp = 0, Be.to({}, {
                        duration: 1e12
                    }), Le = Me.timeline({
                        data: "root",
                        id: "Global Timeline",
                        autoRemoveChildren: !1,
                        smoothChildTiming: !0,
                        parent: Be
                    }), Xe = Me.to(Le, {
                        duration: 1,
                        time: 1,
                        ease: "none",
                        data: "root",
                        id: "_rootTween",
                        paused: !0,
                        immediateRender: !1,
                        parent: Be
                    }), ze.killTweensOf = function(e, t, o) {
                        Le.killTweensOf(e, t, o), Le.killTweensOf.call(ze, e, t, o)
                    }, Be._start = Me.ticker.time, Me.ticker.add((function(e) {
                        return Be.render(e - Be._start)
                    })), ze._start += ze._time, Le._start = ze._time = ze._tTime = 0, (Ne = function(e, t, o, n) {
                        return Me.to(t, {
                            delay: e,
                            duration: 0,
                            onComplete: t,
                            onReverseComplete: t,
                            onCompleteParams: o,
                            onReverseCompleteParams: o,
                            callbackScope: n,
                            parent: Be
                        })
                    })(.01, (function() {
                        return He ? He.update() : st()
                    })), Ne(2, (function() {
                        var e, t, o;
                        if (!He)
                            for (st(), e = Le._first, o = Le._start; e;) t = e._next, e._tDur !== e._tTime || !e._dur && 1 !== e.progress() ? ze.add(e, e._start - e._delay + o) : e.kill(), e = t;
                        dt.globalRecordingTime > 2 ? Ne(dt.globalRecordingTime - 2, (function() {
                            He && He.update(), ze.autoRemoveChildren = !0
                        })) : ze.autoRemoveChildren = !0, Oe = !1
                    })), Se = 1)
                },
                ct = function(e, t) {
                    t.globalSync || e.parent === ze || ze.add(e, ze.time())
                },
                dt = function e(t) {
                    Se || (lt(), Me || console.warn("Please gsap.registerPlugin(GSDevTools)")), this.vars = t = t || {}, t.animation && (e.getByAnimation(t.animation) || {
                        kill: function() {
                            return 0
                        }
                    }).kill(), t.id = t.id || (We(t.animation) ? t.animation : je++), Ke[t.id + ""] = this, "globalSync" in t || (t.globalSync = !t.animation);
                    var o, n, i, r, s, a, l, c, d, p, u, g, h, f, m, v = this,
                        x = function(e, t, o) {
                            Re || (Ue("style", Pe).innerHTML = ".gs-dev-tools{height:51px;bottom:0;left:0;right:0;display:block;position:fixed;overflow:visible;padding:0}.gs-dev-tools *{box-sizing:content-box;visibility:visible}.gs-dev-tools .gs-top{position:relative;z-index:499}.gs-dev-tools .gs-bottom{display:flex;align-items:center;justify-content:space-between;background-color:rgba(0,0,0,.6);height:42px;border-top:1px solid #999;position:relative}.gs-dev-tools .timeline{position:relative;height:8px;margin-left:15px;margin-right:15px;overflow:visible}.gs-dev-tools .progress-bar,.gs-dev-tools .timeline-track{height:8px;width:100%;position:absolute;top:0;left:0}.gs-dev-tools .timeline-track{background-color:#999;opacity:.6}.gs-dev-tools .progress-bar{background-color:#91e600;height:8px;top:0;width:0;pointer-events:none}.gs-dev-tools .seek-bar{width:100%;position:absolute;height:24px;top:-12px;left:0;background-color:transparent}.gs-dev-tools .in-point,.gs-dev-tools .out-point{width:15px;height:26px;position:absolute;top:-18px}.gs-dev-tools .in-point-shape{fill:#6d9900;stroke:rgba(0,0,0,.5);stroke-width:1}.gs-dev-tools .out-point-shape{fill:#994242;stroke:rgba(0,0,0,.5);stroke-width:1}.gs-dev-tools .in-point{transform:translateX(-100%)}.gs-dev-tools .out-point{left:100%}.gs-dev-tools .grab{stroke:rgba(255,255,255,.3);stroke-width:1}.gs-dev-tools .playhead{position:absolute;top:-5px;transform:translate(-50%,0);left:0;border-radius:50%;width:16px;height:16px;border:1px solid #6d9900;background-color:#91e600}.gs-dev-tools .gs-btn-white{fill:#fff}.gs-dev-tools .pause{opacity:0}.gs-dev-tools .select-animation{vertical-align:middle;position:relative;padding:6px 10px}.gs-dev-tools .select-animation-container{flex-grow:4;width:40%}.gs-dev-tools .select-arrow{display:inline-block;width:12px;height:7px;margin:0 7px;transform:translate(0,-2px)}.gs-dev-tools .select-arrow-shape{stroke:rgba(255,255,255,.6);stroke-width:2px;fill:none}.gs-dev-tools .rewind{height:16px;width:19px;padding:10px 4px;min-width:24px}.gs-dev-tools .rewind-path{opacity:.6}.gs-dev-tools .play-pause{width:24px;height:24px;padding:6px 10px;min-width:24px}.gs-dev-tools .ease{width:30px;height:30px;padding:10px;min-width:30px;display:none}.gs-dev-tools .ease-path{fill:none;stroke:rgba(255,255,255,.6);stroke-width:2px}.gs-dev-tools .ease-border{fill:rgba(255,255,255,.25)}.gs-dev-tools .time-scale{font-family:monospace;font-size:18px;text-align:center;color:rgba(255,255,255,.6);padding:4px 4px 4px 0;min-width:30px;margin-left:7px}.gs-dev-tools .loop{width:20px;padding:5px;min-width:20px}.gs-dev-tools .loop-path{fill:rgba(255,255,255,.6)}.gs-dev-tools label span{color:#fff;font-family:monospace;text-decoration:none;font-size:16px;line-height:18px}.gs-dev-tools .time-scale span{color:rgba(255,255,255,.6)}.gs-dev-tools button:focus,.gs-dev-tools select:focus{outline:0}.gs-dev-tools label{position:relative;cursor:pointer}.gs-dev-tools label.locked{text-decoration:none;cursor:auto}.gs-dev-tools label input,.gs-dev-tools label select{position:absolute;left:0;top:0;z-index:1;font:inherit;font-size:inherit;line-height:inherit;height:100%;width:100%;color:#000!important;opacity:0;background:0 0;border:none;padding:0;margin:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer}.gs-dev-tools label input+.display{position:relative;z-index:2}.gs-dev-tools .gs-bottom-right{vertical-align:middle;display:flex;align-items:center;flex-grow:4;width:40%;justify-content:flex-end}.gs-dev-tools .time-container{font-size:18px;font-family:monospace;color:rgba(255,255,255,.6);margin:0 5px}.gs-dev-tools .logo{width:32px;height:32px;position:relative;top:2px;margin:0 12px}.gs-dev-tools .gs-hit-area{background-color:transparent;width:100%;height:100%;top:0;position:absolute}.gs-dev-tools.minimal{height:auto;display:flex;align-items:stretch}.gs-dev-tools.minimal .gs-top{order:2;flex-grow:4;background-color:rgba(0,0,0,1)}.gs-dev-tools.minimal .gs-bottom{background-color:rgba(0,0,0,1);border-top:none}.gs-dev-tools.minimal .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools.minimal .in-point,.gs-dev-tools.minimal .out-point{display:none}.gs-dev-tools.minimal .select-animation-container{display:none}.gs-dev-tools.minimal .rewind{display:none}.gs-dev-tools.minimal .play-pause{width:20px;height:20px;padding:4px 6px;margin-left:14px}.gs-dev-tools.minimal .time-scale{min-width:26px}.gs-dev-tools.minimal .loop{width:18px;min-width:18px;display:none}.gs-dev-tools.minimal .gs-bottom-right{display:none}@media only screen and (max-width:600px){.gs-dev-tools{height:auto;display:flex;align-items:stretch}.gs-dev-tools .gs-top{order:2;flex-grow:4;background-color:rgba(0,0,0,1);height:42px}.gs-dev-tools .gs-bottom{background-color:rgba(0,0,0,1);border-top:none}.gs-dev-tools .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools .in-point,.gs-dev-tools .out-point{display:none}.gs-dev-tools .select-animation-container{display:none}.gs-dev-tools .rewind{display:none}.gs-dev-tools .play-pause{width:20px;height:20px;padding:4px 6px;margin-left:14px}.gs-dev-tools .time-scale{min-width:26px}.gs-dev-tools .loop{width:18px;min-width:18px;display:none}.gs-dev-tools .gs-bottom-right{display:none}}", Re = !0), We(e) && (e = De.querySelector(e));
                            var n = Ue("div", e || Pe.getElementsByTagName("body")[0] || Pe);
                            return n.setAttribute("class", "gs-dev-tools" + (t ? " minimal" : "")), n.innerHTML = '<div class=gs-hit-area></div><div class=gs-top><div class=timeline><div class=timeline-track></div><div class=progress-bar></div><div class=seek-bar></div><svg class=in-point viewBox="0 0 15 26" xmlns=http://www.w3.org/2000/svg><polygon class=in-point-shape points=".5 .5 14.5 .5 14.5 25.5 .5 17.5"/><polyline class=grab points="5.5 4 5.5 15"/><polyline class=grab points="9.5 4 9.5 17"/></svg><svg class=out-point viewBox="0 0 15 26" xmlns=http://www.w3.org/2000/svg><polygon class=out-point-shape points=".5 .5 14.5 .5 14.5 17.5 .5 25.5"/><polyline class=grab points="5.5 4 5.5 17"/><polyline class=grab points="9.5 4 9.5 15"/></svg><div class=playhead></div></div></div><div class=gs-bottom><div class=select-animation-container><label class=select-animation><select class=animation-list><option>Global Timeline<option>myTimeline</select><nobr><span class="display animation-label">Global Timeline</span><svg class=select-arrow viewBox="0 0 12.05 6.73" xmlns=http://www.w3.org/2000/svg><polyline class=select-arrow-shape points="0.35 0.35 6.03 6.03 11.7 0.35"/></svg></nobr></label></div><svg class=rewind viewBox="0 0 12 15.38" xmlns=http://www.w3.org/2000/svg><path d=M0,.38H2v15H0Zm2,7,10,7.36V0Z class="gs-btn-white rewind-path"/></svg><svg class=play-pause viewBox="0 0 20.97 25.67" xmlns=http://www.w3.org/2000/svg><g class=play><path d="M8,4.88 C8,10.18 8,15.48 8,20.79 5.33,22.41 2.66,24.04 0,25.67 0,17.11 0,8.55 0,0 2.66,1.62 5.33,3.25 8,4.88" class="gs-btn-white play-1" style=stroke:#fff;stroke-width:.6px /><path d="M14.485,8.855 C16.64,10.18 18.8,11.5 20.97,12.83 16.64,15.48 12.32,18.13 8,20.79 8,15.48 8,10.18 8,4.88 10.16,6.2 12.32,7.53 14.48,8.85" class="gs-btn-white play-2" style=stroke:#fff;stroke-width:.6px /></g></svg> <svg class=loop viewBox="0 0 29 25.38" xmlns=http://www.w3.org/2000/svg><path d=M27.44,5.44,20.19,0V3.06H9.06A9.31,9.31,0,0,0,0,12.41,9.74,9.74,0,0,0,.69,16l3.06-2.23a6,6,0,0,1-.12-1.22,5.49,5.49,0,0,1,5.43-5.5H20.19v3.81Z class=loop-path /><path d=M25.25,11.54a5.18,5.18,0,0,1,.12,1.12,5.41,5.41,0,0,1-5.43,5.41H9.19V14.5L1.94,19.94l7.25,5.44V22.06H19.94A9.2,9.2,0,0,0,29,12.84a9.42,9.42,0,0,0-.68-3.53Z class=loop-path /></svg> <svg class=ease viewBox="0 0 25.67 25.67" xmlns=http://www.w3.org/2000/svg><path d=M.48,25.12c1.74-3.57,4.28-12.6,8.8-10.7s4.75,1.43,6.5-1.11S19.89,1.19,25.2.55 class=ease-path /><path d=M24.67,1V24.67H1V1H24.67m1-1H0V25.67H25.67V0Z class=ease-border /></svg><label class=time-scale><select><option value=10>10x<option value=5>5x<option value=2>2x<option value=1 selected>1x<option value=0.5>0.5x<option value=0.25>0.25x<option value=0.1>0.1x</select><span class="display time-scale-label">1x</span></label><div class=gs-bottom-right><div class=time-container><span class=time>0.00</span> / <span class=duration>0.00</span></div><a href="https://greensock.com/docs/v3/Plugins/GSDevTools?source=GSDevTools" target=_blank title=Docs><svg class=logo viewBox="0 0 100 100" xmlns=http://www.w3.org/2000/svg><path d="M60 15.4c-.3-.4-.5-.6-.5-.7.1-.6.2-1 .2-1.7v-.4c.6.6 1.3 1.3 1.8 1.7.2.2.5.3.8.3.2 0 .3 0 .5.1h1.6c.8 0 1.6.1 2 0 .1 0 .2 0 .3-.1.6-.3 1.4-1 2.1-1.6 0 .6.1 1.2.1 1.7v1.5c0 .3 0 .5.1.7-.1.1-.2.1-.4.2-.7.4-1.7 1-2.3.9-.5-.1-1.5-.3-2.6-.7-1.2-.3-2.4-.8-3.2-1.2 0 0-.1 0-.1-.1s-.2-.4-.4-.6zm24.6 21.9c-.5-1.7-1.9-2-4.2-.7.9-1.5 2.1-1.5 2.3-2.1.9-2.5-.6-4.6-1.2-5.3.7-1.8 1.4-4.5-1-6.8-1-1-2.4-1.2-3.6-1.1 1.8 1.7 3.4 4.4 2.5 7.2-.1.3-.9.7-1.7 1 0 0 .4 2-.3 3.5-.3.6-.8 1.5-1.3 2.6 1 .9 1.6 1 3 1.3-.9.1-1.2.4-1.2.5-.7 3 1 3.4 1.4 4.8 0 .1 0 .2.1.3v.4c-.3.3-1.4.5-2.5.5s-1.8 1-1.8 1c-.2.1-.3.3-.4.4v1c0 .1 0 .4.1.6.1.5.3 1.3.4 1.8.9.6 1.4.9 2.2 1.1.5.1 1 .2 1.5.1.3-.1.7-.3 1-.7 1.5-1.7 1.9-3.2 2.2-4.1 0-.1 0-.2.1-.2 0 .1.1.1.1.2 0 0 .1-.1.1-.2l.1-.1c1.3-1.6 2.9-4.5 2.1-7zM74.3 49.9c-.1-.3-.1-.7-.2-1.1v-.2c-.1-.2-.1-.4-.2-.6 0-.1-.1-.3-.1-.5s-.1-.5-.1-.7v-.1c0-.2-.1-.5-.1-.7-.1-.3-.1-.7-.2-1.1v-.1c0-.2 0-.3-.1-.5v-.9c0-.1 0-.2.1-.3V43h-.3c-1.1.1-3.8.4-6.7.2-1.2-.1-2.4-.3-3.6-.6-1-.3-1.8-.5-2.3-.7-1.2-.4-1.6-.6-1.8-.7 0 .2-.1.4-.1.7 0 .3-.1.5-.1.8-.1.2-.1.4-.2.6l.1.1c.5.5 1.5 1.3 1.5 2.1v.2c-.1.4-.4.5-.8.9-.1.1-.6.7-1.1 1.1l-.6.6c-.1 0-.1.1-.2.1-.1.1-.3.2-.4.3-.2.1-.7.5-.8.6-.1.1-.2.1-.3.1-2.8 8.8-2.2 13.5-1.5 16.1.1.5.3 1 .4 1.3-.4.5-.8 1-1.2 1.4-1.2 1.5-2 2.6-2.6 4.2 0 .1 0 .1-.1.2 0 .1 0 .2-.1.2-.2.5-.3 1-.4 1.5-.6 2.3-.8 4.5-.9 6.6-.1 2.4-.2 4.6-.5 6.9.7.3 3.1.9 4.7.6.2-.1 0-3.9.6-5.7l.6-1.5c.4-.9.9-1.9 1.3-3.1.3-.7.5-1.5.7-2.4.1-.5.2-1 .3-1.6V74v-.1c.1-.6.1-1.3.1-2 0-.2-.7.3-1.1.9.3-1.8 1.3-2.1 2-3.2.3-.5.6-1.1.6-2 2.5-1.7 4-3.7 5-5.7.2-.4.4-.9.6-1.4.3-.8.5-1.6.7-2.4.3-1.4.8-3.2 1.2-4.8v-.1c.4-1.2.8-2.2 1.2-2.6-.2.9-.4 1.7-.6 2.5v.2c-.6 3.5-.7 6.2-2 9.2 1 2.6 1.9 3.9 2 7.6-2 0-3.2 1.6-3.7 3.2 1.2.3 3.9.7 8.3.1h.3c.1-.5.3-1.1.5-1.5.3-.8.5-1.5.6-2.2.2-1.3.1-2.4 0-3.2 3.9-3.7 2.6-11 1.6-16.6zm.3-15.1c.1-.3.2-.6.4-.8.2-.3.3-.7.5-1 .1-.3.3-.6.4-.9.5-1.5.4-2.8.3-3.5-.1 0-.1-.1-.2-.1-.5-.2-.9-.4-1.4-.6-.1 0-.2-.1-.3-.1-3.8-1.2-7.9-.9-11.9.1-1 .2-1.9.5-2.9.1-2.3-.8-3.9-1.9-4.6-2.8l-.2-.2c-.1.2-.2.4-.4.6.2 2.3-.5 3.9-1.4 5.1.9 1.2 2.6 2.8 3.6 3.4 1.1.6 1.7.7 3.4.4-.6.7-1.1 1-1.9 1.4.1.7.2 2 .5 3.4.3.3 1.2.8 2.3 1.3.5.3 1.1.5 1.7.7.8.3 1.7.6 2.4.8.1 0 .2.1.3.1.5.1 1.1.2 1.8.2h.9c2.1 0 4.5-.2 5.4-.3h.1c-.1-2.7.2-4.6.7-6.2.2-.3.4-.7.5-1.1zm-23.2 9.3v.2c-.3 1.7.5 2.4 1.9 3.4.6.5 0 .5.5.8.3.2.7.3 1 .3.3 0 .5 0 .8-.1.2-.1.4-.3.6-.5.1-.1.3-.2.5-.4.3-.2.6-.5.7-.6.1-.1.2-.1.3-.2.2-.2.5-.5.6-.7.2-.2.4-.5.5-.7 0-.1.1-.1.1-.1v-.1c.1-.4-.3-.8-.8-1.3-.2-.2-.4-.3-.5-.5-.3-.3-.6-.5-1-.7-.9-.5-1.9-.7-3-.7l-.3-.3c-2.2-2.5-3.2-4.8-3.9-6.5-.9-2.1-1.9-3.3-3.9-4.9 1 .4 1.8.8 2.3 1.1.5.4 1.3.4 1.9.2.2-.1.5-.2.7-.3.2-.1.4-.2.6-.4 1.6-1.3 2.5-3.8 2.6-5.6v-.1c.2-.3.6-1.1.8-1.4l.1.1c.1.1.3.2.6.5.1 0 .1.1.2.1.1.1.2.1.2.2.8.6 1.9 1.3 2.6 1.7 1.4.7 2.3.7 5.3-.1 2.2-.6 4.8-.8 6.8-.8 1.4 0 2.7.3 4 .7.2.1.4.1.5.2.3.1.6.2.9.4 0 0 .1 0 .1.1.8.4 2.1 1.2 2.5-.3.1-2-.6-3.9-1.6-5.3 0 0-.1 0-.1-.1-.1-.1-.2-.2-.4-.3-.1-.1-.2-.1-.3-.2-.1-.1-.2-.2-.4-.2-.6-.4-1.2-.8-1.6-.9-.1-.1-.3-.1-.4-.2h-.1-.1c-.1 0-.3-.1-.4-.1-.1 0-.1 0-.2-.1h-.1l-.2-.4c-.2-.1-.4-.2-.5-.2h-.6c-.3 0-.5.1-.7.1-.7.1-1.2.3-1.7.4-.2 0-.3.1-.5.1-.5.1-1 .2-1.6.2-.4 0-.9-.1-1.5-.2-.4-.1-.8-.2-1.1-.3-.2-.1-.4-.1-.6-.2-.6-.2-1.1-.3-1.7-.4h-.2-1.8c-.3 0-.6.1-1 .1H57.9c-.8 0-1.5 0-2.3-.1-.2 0-.5-.1-.7-.1-.5-.1-.9-.2-1.3-.4-.2-.1-.3-.1-.4-.2-.1 0-.2 0-.2-.1-.3-.1-.6-.1-.9-.1H51h-.1c-.4 0-.9.1-1.4.2-1.1.2-2.1.6-3 1.3-.3.2-.6.5-.8.8-.1.1-.2.2-.2.3-.4.6-.8 1.2-.9 2 0 .2-.1.4-.1.6 0 .2 1.7.7 2.3 2.8-.8-1.2-2.3-2.5-4.1-1.4-1.5 1-1.1 3.1-2.4 5.4-.3.5-.6.9-1 1.4-.8 1-.7 2.1.2 4.4 1.4 3.4 7.6 5.3 11.5 8.3l.4.4zm8.7-36.3c0 .6.1 1 .2 1.6v.1c0 .3.1.6.1.9.1 1.2.4 2 1 2.9 0 .1.1.1.1.2.3.2.5.3.8.4 1.1.2 3.1.3 4.2 0 .2-.1.5-.3.7-.5.4-.4.7-1.1.9-1.7.1-.7.3-1.3.4-1.8 0-.2.1-.4.1-.5v-.1c0-.2 0-.3.1-.5.2-.7.2-2.4.3-2.8.1-.7 0-1.8-.1-2.5 0-.2-.1-.4-.1-.5v-.1c-.2-.5-1.4-1.4-4.3-1.4-3.1 0-4 1-4.1 1.5v.1c0 .1 0 .3-.1.5-.1.4-.2 1.4-.2 1.9v2.3zm-6 88.6c0-.1-.1-.2-.1-.3-.7-1.5-1.1-3.5-1.3-4.6.4.1.7.6.8.3.2-.5-.4-1.5-.5-2.2v-.1c-.5-.5-4-.5-3.7-.3-.4.8-1 .6-1.3 2.1-.1.7.8.1 1.7.1-1.4.9-3 2.1-3.4 3.2-.1.1-.1.2-.1.3 0 .2-.1.4-.1.5-.1 1.2.5 1.6 2 2.4H48.4c1.4.3 3 .3 4.3.3 1.2-.2 1.6-.7 1.6-1.4-.2-.1-.2-.2-.2-.3z" style=fill:#efefef /><path d="M56.1 36.5c.3 1.4.5 2.4.8 4.2h-.2c-.1.5-.1.9-.1 1.3-1-.4-2.2-.5-2.6-.5-3.7-4.4-2.9-6.1-4.4-8.3.4-.2 1-.4 1.5-.8 1.6 1.9 3.3 3 5 4.1zm-1.7 13.2s-1.4 0-2.3-1c0 0-.1-.5.1-.7 0 0-1.2-1-1.5-1.7-.2-.5-.3-1.1-.2-1.6-4.4-3.7-10.9-4.2-12.9-9.1-.5-1.2-1.3-2.9-.9-3.9-.3.1-.5.2-.8.3-2.9.9-11.7 5.3-17.9 8.8 1.6 1.7 2.6 4.3 3.2 7.2l.3 1.5c.1.5.1 1 .2 1.5.1 1.4.4 2.7.8 3.9.2.8.6 1.5.9 2.2.6 1 1.2 1.9 2.1 2.6.6.5 1.2.9 1.9 1.3 2.1 1.1 5 1.6 8.6 1.5H37.9c.5 0 1 .1 1.5.1h.1c.4.1.9.1 1.3.2h.2c.4.1.9.2 1.3.4h.1c.4.1.8.3 1.1.5h.1c.4.2.7.4 1.1.6h.1c.7.4 1.3.9 1.9 1.5l.1.1c.6.5 1.1 1.1 1.5 1.8 0 .1.1.1.1.2s.1.1.1.2c.4.6 1.2 1.1 1.9 1.3.7-.9 1.5-1.8 2.2-2.8-1.6-6 0-11.7 1.8-16.9zm-26-15.9c5-2.4 9-4.1 9.9-4.5.3-.6.6-1.4.9-2.6.1-.3.2-.5.3-.8 1-2.7 2.7-2.8 3.5-3v-.2c.1-1.1.5-2 1-2.8-8.8 2.5-18 5.5-28 11.7-.1.1-.2.2-.4.2C11.3 34.5 3 40.3 1.3 51c2.4-2.7 6-5.6 10.5-8.5.1-.1.3-.2.5-.3.2-.1.5-.3.7-.4 1.2-.7 2.4-1.4 3.6-2.2 2.2-1.2 4.5-2.4 6.7-3.5 1.8-.8 3.5-1.6 5.1-2.3zm54.9 61.3l-.3-.3c-.8-.6-4.1-1.2-5.5-2.3-.4-.3-1.1-.7-1.7-1.1-1.6-.9-3.5-1.8-3.5-2.1v-.1c-.2-1.7-.2-7 .1-8.8.3-1.8.7-4.4.8-5.1.1-.6.5-1.2.1-1.2h-.4c-.2 0-.4.1-.8.1-1.5.3-4.3.6-6.6.4-.9-.1-1.6-.2-2-.3-.5-.1-.7-.2-.9-.3H62.3c-.4.5 0 2.7.6 4.8.3 1.1.8 2 1.2 3 .3.8.6 1.8.8 3.1 0 .2.1.4.1.7.2 2.8.3 3.6-.2 4.9-.1.3-.3.6-.4 1-.4.9-.7 1.7-.6 2.3 0 .2.1.4.1.5.2.4.6.7 1.2.8.2 0 .3.1.5.1.3 0 .6.1.9.1 3.4 0 5.2 0 8.6.4 2.5.4 3.9.6 5.1.5.4 0 .9-.1 1.4-.1 1.2-.2 1.8-.5 1.9-.9-.1.2-.1.1-.2-.1zM60.2 16.4zm-.5 1.7zm3.8.5c.1 0 .3.1.5.1.4.1.7.2 1.2.3.3.1.6.1.9.1h1.3c.3-.1.7-.1 1-.2.7-.2 1.5-.4 2.7-.6h.3c.3 0 .6.1.9.3.1.1.2.1.4.2.3.2.8.2 1.2.4h.1c.1 0 .1.1.2.1.6.3 1.3.7 1.9 1.1l.3.3c.9-.1 1.6-.2 2.1-.2h.1c-.2-.4-.3-1.3-1.8-.6-.6-.7-.8-1.3-2.1-.9-.1-.2-.2-.3-.3-.4l-.1-.1c-.1-.1-.2-.3-.3-.4 0-.1-.1-.1-.1-.2-.2-.3-.5-.5-.9-.7-.7-.4-1.5-.6-2.3-.5-.2 0-.4.1-.6.2-.1 0-.2.1-.2.1-.1 0-.2.1-.3.2-.5.3-1.3.8-2.1 1-.1 0-.1 0-.2.1-.2 0-.4.1-.5.1H66.5h-.1c-.4-.1-1.1-.2-2-.5-.1 0-.2-.1-.3-.1-.9-.2-1.8-.5-2.7-.8-.3-.1-.7-.2-1-.3-.1 0-.1 0-.2-.1h-.1s-.1 0-.1-.1c-.3-.3-.7-.6-1.3-.8-.5-.2-1.2-.4-2.1-.5-.2 0-.5 0-.7.1-.4.2-.8.6-1.2.9.1.1.3.3.4.5.1.2.2.4.3.7l-.6-.6c-.5-.4-1.1-.8-1.7-.9-.8-.2-1.4.4-2.3.9 1 0 1.8.1 2.5.4.1 0 .1 0 .2.1h.1c.1 0 .2.1.3.1.9.4 1.8.6 2.7.6h1.3c.5 0 .8-.1 1.1-.1.1 0 .4 0 .7-.1h2.2c.4.4.9.6 1.6.8z" style=fill:#88ce02 /><path d="M100 51.8c0-19.5-12.5-36.1-30-42.1.1-1.2.2-2.4.3-3.1.1-1.5.2-3.9-.5-4.9-1.6-2.3-9.1-2.1-10.5-.1-.4.6-.7 3.6-.6 5.9-1.1-.1-2.2-.1-3.3-.1-16.5 0-30.9 9-38.6 22.3-2.4 1.4-4.7 2.8-6.1 4C5.4 38 2.2 43.2 1 47c-1.6 4.7-1.1 7.6.4 5.8 1.2-1.5 6.6-5.9 10.1-8.2-.4 2.3-.6 4.8-.6 7.2 0 21 14.5 38.5 34 43.3-.1 1.1.1 2 .7 2.6.9.8 3.2 2 6.4 1.6 2.9-.3 3.5-.5 3.2-2.9h.2c2.7 0 5.3-.2 7.8-.7.1.1.2.2.4.3 1.5 1 7.1.8 9.6.7s6.2.9 8.6.5c2.9-.5 3.4-2.3 1.6-3.2-1.5-.8-3.8-1.3-6.7-3.1C90.6 83.4 100 68.7 100 51.8zM60.1 5.5c0-.5.1-1.5.2-2.1 0-.2 0-.4.1-.5v-.1c.1-.5 1-1.5 4.1-1.5 2.9 0 4.2.9 4.3 1.4v.1c0 .1 0 .3.1.5.1.8.2 1.9.1 2.7 0 .5-.1 2.1-.2 2.9 0 .1 0 .3-.1.5v.1c0 .2-.1.3-.1.5-.1.5-.2 1.1-.4 1.8-.1.6-.5 1.2-.9 1.7-.2.3-.5.5-.7.5-1.1.3-3.1.3-4.2 0-.3-.1-.5-.2-.8-.4 0-.1-.1-.1-.1-.2-.6-.9-.9-1.7-1-2.9 0-.4-.1-.6-.1-.9v-.1c-.1-.6-.2-1-.2-1.6v-.3c-.1-1.3-.1-2.1-.1-2.1zm-.4 7.5v-.4c.6.6 1.3 1.3 1.8 1.7.2.2.5.3.8.3.2 0 .3 0 .5.1h1.6c.8 0 1.6.1 2 0 .1 0 .2 0 .3-.1.6-.3 1.4-1 2.1-1.6 0 .6.1 1.2.1 1.7v1.5c0 .3 0 .5.1.7-.1.1-.2.1-.4.2-.7.4-1.7 1-2.3.9-.5-.1-1.5-.3-2.6-.7-1.2-.3-2.4-.8-3.2-1.2 0 0-.1 0-.1-.1-.2-.3-.4-.5-.6-.7-.3-.4-.5-.6-.5-.7.3-.4.4-.9.4-1.6zm.5 3.4zm-7.3-.3c.6.1 1.2.5 1.7.9.2.2.5.4.6.6-.1-.2-.2-.5-.3-.7-.1-.2-.3-.4-.4-.5.4-.3.8-.7 1.2-.9.2-.1.4-.1.7-.1.9.1 1.6.2 2.1.5.6.2 1 .5 1.3.8 0 0 .1 0 .1.1h.1c.1 0 .1 0 .2.1.3.1.6.2 1 .3.9.3 1.9.6 2.7.8.1 0 .2.1.3.1.9.2 1.6.4 2 .5h.4c.2 0 .4 0 .5-.1.1 0 .1 0 .2-.1.7-.2 1.5-.7 2.1-1 .1-.1.2-.1.3-.2.1 0 .2-.1.2-.1.2-.1.4-.2.6-.2.8-.2 1.7.1 2.3.5.3.2.6.4.9.7 0 .1.1.1.1.2.1.2.2.3.3.4l.1.1c.1.1.2.2.3.4 1.3-.4 1.5.2 2.1.9 1.6-.7 1.7.2 1.8.6h-.1c-.5 0-1.2 0-2.1.2l-.3-.3c-.5-.4-1.2-.8-1.9-1.1-.1 0-.1-.1-.2-.1h-.1c-.4-.2-.8-.2-1.2-.4-.1-.1-.2-.1-.4-.2-.3-.1-.6-.3-.9-.3h-.3c-1.2.1-2 .4-2.7.6-.3.1-.7.2-1 .2-.4.1-.8.1-1.3 0-.3 0-.6-.1-.9-.1-.5-.1-.8-.2-1.2-.3-.2 0-.3-.1-.5-.1h-.1c-.6-.2-1.2-.3-1.8-.4h-.1-2.1c-.4.1-.6.1-.7.1-.3 0-.7.1-1.1.1h-1.3c-.9 0-1.9-.2-2.7-.6-.1 0-.2-.1-.3-.1H53c-.1 0-.1 0-.2-.1-.7-.3-1.6-.4-2.5-.4 1.2-.8 1.8-1.4 2.6-1.3zm6.8 2zm-15.2 4.1c.1-.7.4-1.4.9-2 .1-.1.2-.2.2-.3l.8-.8c.9-.6 1.9-1.1 3-1.3.5-.1 1-.2 1.4-.2H52c.3 0 .6.1.9.1.1 0 .2 0 .2.1.1.1.2.1.4.2.4.2.8.3 1.3.4.2 0 .5.1.7.1.7.1 1.5.1 2.3.1H58.7c.4 0 .7-.1 1-.1H61.7c.6.1 1.1.2 1.7.4.2 0 .4.1.6.2.3.1.7.2 1.1.3.6.1 1.1.2 1.5.2.6 0 1.1-.1 1.6-.2.2 0 .3-.1.5-.1.5-.1 1-.3 1.7-.4.2 0 .5-.1.7-.1h.6c.2 0 .4.1.5.2l.1.1h.1c.1 0 .1 0 .2.1.2.1.3.1.4.1h.2c.1.1.3.1.4.2.4.2 1 .6 1.6.9.1.1.2.2.4.2.1.1.2.1.3.2.2.1.3.3.4.3l.1.1c1.1 1.4 1.8 3.3 1.6 5.3-.3 1.5-1.6.7-2.5.3 0 0-.1 0-.1-.1-.3-.1-.6-.2-.9-.4-.2-.1-.4-.1-.5-.2-1.2-.4-2.5-.7-4-.7-2 0-4.6.1-6.8.8-3 .8-4 .8-5.3.1-.8-.4-1.8-1.1-2.6-1.7-.1-.1-.2-.1-.2-.2-.1-.1-.1-.1-.2-.1-.3-.2-.6-.4-.6-.5l-.1-.1c-.2.3-.6 1-.8 1.4v.1c-.1 1.7-1 4.2-2.6 5.6-.2.1-.4.3-.6.4-.2.1-.5.2-.7.3-.7.2-1.4.2-1.9-.2-.5-.3-1.3-.7-2.3-1.1 2 1.6 3 2.8 3.9 4.9.7 1.7 1.7 4 3.9 6.5l.3.3c1.1 0 2.1.2 3 .7.4.2.7.4 1 .7.2.2.4.3.5.5.5.4.9.8.8 1.3v.1s0 .1-.1.1c-.1.2-.3.5-.5.7-.1.1-.4.4-.6.7-.1.1-.2.2-.3.2-.1.1-.4.3-.7.6-.2.2-.4.3-.5.4-.2.1-.4.4-.6.5-.3.1-.5.2-.8.1-.3 0-.7-.2-1-.3-.5-.3.1-.3-.5-.8-1.4-1-2.2-1.7-1.9-3.4v-.2c-.2-.1-.3-.3-.5-.4-3.9-3-10.1-4.9-11.5-8.3-.9-2.3-1-3.4-.2-4.4.4-.5.8-1 1-1.4 1.3-2.3.9-4.4 2.4-5.4 1.8-1.2 3.3.2 4.1 1.4-.5-2.1-2.3-2.6-2.3-2.8.3.1.3-.1.3-.3zm29 20s-.1 0 0 0c-.1 0-.1 0 0 0-.9.1-3.3.3-5.4.3h-.9c-.7 0-1.3-.1-1.8-.2-.1 0-.2 0-.3-.1-.7-.2-1.6-.5-2.4-.8-.6-.2-1.2-.5-1.7-.7-1.1-.5-2.1-1.1-2.3-1.3-.5-1.4-.7-2.7-.7-3.4.8-.4 1.3-.7 1.9-1.4-1.7.3-2.4.2-3.4-.4-1-.5-2.6-2.2-3.6-3.4 1-1.2 1.7-2.9 1.4-5.1.1-.2.3-.4.4-.6 0 .1.1.1.2.2.7.9 2.4 2 4.6 2.8 1.1.4 2 .1 2.9-.1 4-1 8.1-1.3 11.9-.1.1 0 .2.1.3.1.5.2.9.4 1.4.6.1 0 .1.1.2.1.1.7.2 2-.3 3.5-.1.3-.2.6-.4.9-.2.3-.3.6-.5 1-.1.3-.2.5-.4.8-.2.4-.3.8-.5 1.3-.4 1.4-.7 3.4-.6 6zm-23.9-9c.4-.2 1-.4 1.5-.8 1.6 1.8 3.3 3 5 4.1.3 1.4.5 2.4.8 4.2h-.2c-.1.5-.1.9-.1 1.3-1-.4-2.2-.5-2.6-.5-3.7-4.3-3-6-4.4-8.3zm-32.9 6.5c-1.3.7-2.5 1.4-3.6 2.2-.2.1-.5.3-.7.4-.1.1-.3.2-.5.3-4.5 2.9-8.1 5.8-10.5 8.5 1.7-10.8 10-16.5 14.3-19.2.1-.1.2-.2.4-.2 10-6.2 19.2-9.2 28-11.7-.5.8-.9 1.7-1 2.8v.2c-.8.1-2.5.2-3.5 3-.1.2-.2.5-.3.8-.3 1.2-.6 2-.9 2.6-.9.4-5 2.2-9.9 4.5-1.6.8-3.3 1.6-5 2.4-2.3 1-4.6 2.2-6.8 3.4zm28 24.8s0-.1 0 0c-.4-.3-.8-.5-1.2-.7h-.1c-.4-.2-.7-.3-1.1-.5h-.1c-.4-.1-.8-.3-1.3-.4h-.2c-.4-.1-.8-.2-1.3-.2h-.1c-.5-.1-1-.1-1.5-.1H35.9c-3.7.1-6.5-.4-8.6-1.5-.7-.4-1.4-.8-1.9-1.3-.9-.7-1.5-1.6-2.1-2.6-.4-.7-.7-1.4-.9-2.2-.4-1.2-.6-2.5-.8-3.9 0-.5-.1-1-.2-1.5l-.3-1.5c-.6-2.9-1.6-5.5-3.2-7.2 6.3-3.5 15-7.9 17.8-8.8.3-.1.6-.2.8-.3-.3 1.1.4 2.7.9 3.9 2.1 4.9 8.6 5.4 12.9 9.1 0 .5 0 1.1.2 1.6.5.6 1.7 1.6 1.7 1.6-.2.2-.1.7-.1.7.9 1 2.3 1 2.3 1-1.8 5.2-3.4 10.9-1.9 16.9-.7 1-1.5 1.8-2.2 2.8-.7-.2-1.4-.6-1.9-1.3 0-.1-.1-.1-.1-.2s-.1-.1-.1-.2l-1.5-1.8-.1-.1c-.5-.4-1.2-.9-1.9-1.3zm7.9 33.6c-1.3.1-2.9 0-4.3-.3h-.2-.1c-1.5-.8-2.1-1.2-2-2.4 0-.2 0-.3.1-.5 0-.1.1-.2.1-.3.5-1.1 2.1-2.2 3.4-3.2-.8 0-1.8.7-1.7-.1.2-1.5.9-1.3 1.3-2.1-.2-.3 3.3-.2 3.8.3v.1c0 .7.7 1.7.5 2.2-.1.3-.4-.2-.8-.3.2 1.1.6 3.1 1.3 4.6.1.1.1.2.1.3 0 .1.1.2.1.3 0 .7-.4 1.2-1.6 1.4zM59 67.7c0 .9-.3 1.6-.6 2-.7 1.1-1.7 1.4-2 3.2.4-.6 1.1-1.1 1.1-.9 0 .8-.1 1.4-.1 2v.2c-.1.6-.2 1.1-.3 1.6-.2.9-.5 1.7-.7 2.4-.4 1.2-.9 2.1-1.3 3.1l-.6 1.5c-.6 1.7-.4 5.6-.6 5.7-1.6.3-4.1-.3-4.7-.6.3-2.2.4-4.5.5-6.9.1-2.1.3-4.3.9-6.6.1-.5.3-1 .4-1.5 0-.1 0-.2.1-.2 0-.1 0-.1.1-.2.5-1.6 1.4-2.7 2.6-4.2.4-.4.7-.9 1.2-1.4-.1-.4-.2-.8-.4-1.3-.7-2.6-1.3-7.3 1.5-16.1.1 0 .2-.1.3-.1.2-.1.7-.5.8-.6.1-.1.3-.2.4-.3.1 0 .1-.1.2-.1l.6-.6 1.1-1.1c.4-.4.7-.5.8-.9v-.2c0-.8-1.1-1.5-1.5-2.1l-.1-.1c.1-.2.1-.4.2-.6 0-.2.1-.5.1-.8 0-.2.1-.5.1-.7.1.1.6.4 1.8.7.6.2 1.3.4 2.3.7 1.1.3 2.4.5 3.6.6 2.9.2 5.6 0 6.7-.2h.3v.1c0 .1 0 .2-.1.3v.9c0 .2 0 .3.1.5v.1c0 .4.1.7.2 1.1 0 .3.1.5.1.7v.1c0 .3.1.5.1.7 0 .2.1.3.1.5.1.2.1.4.2.6v.2c.1.4.2.8.2 1.1 1 5.7 2.3 12.9-1.1 16.7.2.8.3 1.9 0 3.2-.1.7-.3 1.4-.6 2.2-.2.5-.3 1-.5 1.5h-.3c-4.5.6-7.1.2-8.3-.1.5-1.6 1.7-3.3 3.7-3.2-.1-3.7-1.1-5-2-7.6 1.3-3 1.3-5.7 2-9.2v-.2c.2-.8.3-1.6.6-2.5-.4.5-.8 1.5-1.2 2.6v.1c-.5 1.5-.9 3.4-1.2 4.8-.2.8-.4 1.6-.7 2.4-.2.5-.4.9-.6 1.4-1.5 1.9-3 3.9-5.5 5.6zm18.5 24.9c1.5 1.1 4.7 1.8 5.5 2.3l.3.3c.1.1.1.2.1.3-.1.4-.7.7-1.9.9-.5.1-.9.1-1.4.1-1.3 0-2.6-.2-5.1-.5-3.4-.5-5.2-.4-8.6-.4-.3 0-.6 0-.9-.1-.2 0-.4-.1-.5-.1-.6-.2-1-.5-1.2-.8-.1-.2-.1-.3-.1-.5-.1-.7.2-1.5.6-2.3.2-.4.3-.7.4-1 .5-1.3.4-2.1.2-4.9 0-.2-.1-.4-.1-.7-.2-1.3-.5-2.3-.8-3.1-.4-1.1-.9-1.9-1.2-3-.6-2.1-1-4.3-.6-4.8H62.5c.2.1.5.2.9.3.5.1 1.1.2 2 .3 2.2.2 5.1-.2 6.6-.4.3-.1.6-.1.8-.1h.4c.4 0 .1.6-.1 1.2-.1.7-.5 3.3-.8 5.1-.3 1.8-.2 7.1-.1 8.8v.1c0 .3 1.9 1.2 3.5 2.1.7.2 1.4.5 1.8.9zm4.8-48.2c0 .1 0 .1 0 0-.1.1-.2.2-.2.3 0-.1-.1-.1-.1-.2 0 .1 0 .2-.1.2-.2.9-.6 2.4-2.2 4.1-.4.4-.7.6-1 .7-.5.1-.9 0-1.5-.1-.9-.2-1.3-.6-2.2-1.1-.1-.6-.3-1.3-.4-1.8 0-.3-.1-.5-.1-.6v-1l.4-.4s.7-1 1.8-1 2.2-.2 2.5-.5v-.1-.3c0-.1 0-.2-.1-.3-.4-1.4-2.1-1.8-1.4-4.8 0-.2.3-.5 1.2-.5-1.4-.3-2-.4-3-1.3.5-1.1 1-1.9 1.3-2.6.8-1.5.3-3.5.3-3.5.8-.3 1.6-.7 1.7-1 .9-2.8-.7-5.5-2.5-7.2 1.2-.1 2.6.1 3.6 1.1 2.4 2.4 1.8 5 1 6.8.6.7 2.1 2.9 1.2 5.3-.2.6-1.4.6-2.3 2.1 2.3-1.3 3.7-1 4.2.7 1 2.4-.6 5.3-2.1 7z"/><path d="M22 53.4v-.2c0-.2-.1-.5-.2-.9s-.1-.8-.2-1.3c-.5-4.7-1.9-9.4-4.9-11.3 3.7-2 16.8-8.5 21.9-10.5 2.9-1.2.8-.4-.2 1.4-.8 1.4-.3 2.9-.5 3.2-.6.8-12.6 10.5-15.9 19.6zm32.2-2.3c-3.4 3.8-12 11-18.2 11.4 8.7-.2 12.2 4.1 14.7 9.7 2.6-5.2 2.7-10.3 2.6-16.1 0-2.6 1.8-6 .9-5zm5.3-23L54.3 24s-1.1 3.1-1 4.6c.1 1.6-1.8 2.7-.9 3.6.9.9 3.2 2.5 4 3.4.7.9 1.1 7.1 1.1 7.1l2.2 2.7s1-1.8 1.1-6.3c.2-5.4-2.9-7.1-3.3-8.6-.4-1.4.6-2.9 2-2.4zm3.1 45.6l3.9.3s1.2-2.2 2.1-3.5c.9-1.4.4-1.6 0-4.6-.4-3-1.4-9.3-1.2-13.6l-3.1 10.2s1.8 5.6 1.6 6.4c-.1.8-3.3 4.8-3.3 4.8zm5 18.8c-1.1 0-2.5-.4-3.5-.8l-1 .3.2 4s5.2.7 4.6-.4c-.6-1.2-.3-3.1-.3-3.1zm12 .6c-1 0-.3.2.4 1.2.8 1 .1 2-.8 2.3l3.2.5 1.9-1.7c.1 0-3.7-2.3-4.7-2.3zM73 76c-1.6.5-4.2.8-5.9.8-1.7.1-3.7-.1-5-.5v1.4s1.2.5 5.4.5c3.5.1 5.7-.8 5.7-.8l.9-.8c-.1.1.5-1.1-1.1-.6zm-.2 3.1c-1.6.6-3.9.6-5.6.7-1.7.1-3.7-.1-5-.5l.1 1.4s.7.3 4.9.4c3.5.1 5.7-.7 5.7-.7l.3-.5c-.1-.1.3-1-.4-.8zm5.9-42.7c-.9-.8-1.4-2.4-1.5-3.3l-1.9 2.5.7 1.2s2.5.1 2.8.1c.4 0 .3-.1-.1-.5zM69 14.7c.6-.7.2-2.7.2-2.7L66 14.6l-4.4-.8-.5-1.3-1.3-.1c.8 1.8 1.8 2.5 3.3 3.1.9.4 4.5.9 5.9-.8z" style=opacity:.4;fill-rule:evenodd;clip-rule:evenodd /></svg></a></div></div>', e && (n.style.position = "absolute", n.style.top = t ? "calc(100% - 42px)" : "calc(100% - 51px)"), o && (We(o) ? n.style.cssText = o : "object" == typeof o && (o.data = "root", Me.set(n, o).kill()), n.style.top && (n.style.bottom = "auto"), n.style.width && Me.set(n, {
                                xPercent: -50,
                                left: "50%",
                                right: "auto",
                                data: "root"
                            }).kill()), !t && n.offsetWidth < 600 && (n.setAttribute("class", "gs-dev-tools minimal"), e && (n.style.top = "calc(100% - 42px)")), n
                        }(t.container, t.minimal, t.css),
                        y = function(e) {
                            return x.querySelector(e)
                        },
                        w = function(e, o) {
                            return !1 !== t.persist && Ze && sessionStorage.setItem("gs-dev-" + e + t.id, o), o
                        },
                        b = function(e) {
                            var o;
                            if (!1 !== t.persist && Ze) return o = sessionStorage.getItem("gs-dev-" + e + t.id), "animation" === e ? o : "loop" === e ? "true" === o : parseFloat(o)
                        },
                        _ = y(".playhead"),
                        k = y(".timeline-track"),
                        T = y(".progress-bar"),
                        M = y(".time"),
                        S = y(".duration"),
                        D = 0,
                        P = y(".in-point"),
                        E = y(".out-point"),
                        L = 0,
                        C = 100,
                        X = y(".animation-list"),
                        H = y(".animation-label"),
                        Y = y(".play-pause"),
                        z = (f = Y, (m = Me.timeline({
                            data: "root",
                            parent: Be,
                            onComplete: function() {
                                return m.kill()
                            }
                        })).to(f.querySelector(".play-1"), {
                            duration: .4,
                            attr: {
                                d: "M5.75,3.13 C5.75,9.79 5.75,16.46 5.75,23.13 4.08,23.13 2.41,23.13 0.75,23.13 0.75,16.46 0.75,9.79 0.75,3.12 2.41,3.12 4.08,3.12 5.75,3.12"
                            },
                            ease: "power2.inOut",
                            rotation: 360,
                            transformOrigin: "50% 50%"
                        }).to(f.querySelector(".play-2"), {
                            duration: .4,
                            attr: {
                                d: "M16.38,3.13 C16.38,9.79 16.38,16.46 16.38,23.13 14.71,23.13 13.04,23.13 11.38,23.13 11.38,16.46 11.38,9.79 11.38,3.12 13.04,3.12 14.71,3.12 16.38,3.12"
                            },
                            ease: "power2.inOut",
                            rotation: 360,
                            transformOrigin: "50% 50%"
                        }, .05), m),
                        B = !1,
                        N = y(".loop"),
                        R = function(e) {
                            var t = Me.timeline({
                                data: "root",
                                id: "loop",
                                parent: Be,
                                paused: !0,
                                onComplete: function() {
                                    return t.kill()
                                }
                            });
                            return t.to(e, {
                                duration: .5,
                                rotation: 360,
                                ease: "power3.inOut",
                                transformOrigin: "50% 50%"
                            }).to(e.querySelectorAll(".loop-path"), {
                                duration: .5,
                                fill: "#91e600",
                                ease: "none"
                            }, 0), t
                        }(N),
                        O = y(".time-scale select"),
                        I = y(".time-scale-label"),
                        A = function(e, t, a) {
                            return function(c) {
                                var d, p = k.getBoundingClientRect(),
                                    u = e.getBoundingClientRect(),
                                    g = u.width * t,
                                    h = Me.getProperty(e, "x"),
                                    f = p.left - u.left - g + h,
                                    m = p.right - u.right + (u.width - g) + h,
                                    v = f;
                                a && (e !== P && (d = P.getBoundingClientRect()).left && (f += d.left + d.width - p.left), e !== E && (d = E.getBoundingClientRect()).left && (m -= p.left + p.width - d.left)), s = B, this.applyBounds({
                                    minX: f,
                                    maxX: m
                                }), o = l.duration() / p.width, n = -v * o, r ? l.pause() : l.pause(n + o * this.x), this.target === _ && (this.activated && (this.allowEventDefault = !1), this.activated = !0), i = !0
                            }
                        },
                        F = Te.create(_, {
                            type: "x",
                            cursor: "ew-resize",
                            allowNativeTouchScrolling: !1,
                            allowEventDefault: !0,
                            onPress: A(_, .5, !0),
                            onDrag: function() {
                                var e = n + o * this.x;
                                e < 0 ? e = 0 : e > l._dur && (e = l._dur), r || l.time(e), T.style.width = Math.min(C - L, Math.max(0, e / l._dur * 100 - L)) + "%", M.innerHTML = e.toFixed(2)
                            },
                            onRelease: function() {
                                B || l.resume()
                            }
                        })[0],
                        W = function() {
                            L = 0, C = 100, P.style.left = "0%", E.style.left = "100%", w("in", L), w("out", C), q(!0)
                        },
                        V = Te.create(P, {
                            type: "x",
                            cursor: "ew-resize",
                            zIndexBoost: !1,
                            allowNativeTouchScrolling: !1,
                            allowEventDefault: !0,
                            onPress: A(P, 1, !0),
                            onDoubleClick: W,
                            onDrag: function() {
                                L = (n + o * this.x) / l.duration() * 100, l.progress(L / 100), q(!0)
                            },
                            onRelease: function() {
                                L < 0 && (L = 0), $e(), P.style.left = L + "%", w("in", L), Me.set(P, {
                                    x: 0,
                                    data: "root",
                                    display: "block"
                                }), B || l.resume()
                            }
                        })[0],
                        G = Te.create(E, {
                            type: "x",
                            cursor: "ew-resize",
                            allowNativeTouchScrolling: !1,
                            allowEventDefault: !0,
                            zIndexBoost: !1,
                            onPress: A(E, 0, !0),
                            onDoubleClick: W,
                            onDrag: function() {
                                C = (n + o * this.x) / l.duration() * 100, l.progress(C / 100), q(!0)
                            },
                            onRelease: function() {
                                C > 100 && (C = 100), $e(), E.style.left = C + "%", w("out", C), Me.set(E, {
                                    x: 0,
                                    data: "root",
                                    display: "block"
                                }), s || (K(), l.resume())
                            }
                        })[0],
                        q = function(e) {
                            if (!F.isPressed || !0 === e) {
                                var t, o = h || -1 !== a._repeat ? 100 * l.progress() || 0 : a.totalTime() / a.duration() * 100,
                                    n = a._repeat && a._rDelay && a.totalTime() % (a.duration() + a._rDelay) > a.duration();
                                o > 100 && (o = 100), o >= C ? !h || l.paused() || F.isDragging ? (o === C && -1 !== a._repeat || (o = C, l.progress(o / 100)), !B && (C < 100 || 1 === a.totalProgress() || -1 === a._repeat) && Z()) : n || (o = L, (t = l._targets && l._targets[0]) === a && t.seek(d + (p - d) * L / 100), a._repeat > 0 && !L && 100 === C ? 1 === a.totalProgress() && l.totalProgress(0, !0).resume() : l.progress(o / 100, !0).resume()) : o < L && (o = L, l.progress(o / 100, !0)), o === D && !0 !== e || (T.style.left = L + "%", T.style.width = Math.max(0, o - L) + "%", _.style.left = o + "%", M.innerHTML = l._time.toFixed(2), S.innerHTML = l._dur.toFixed(2), i && (_.style.transform = "translate(-50%,0)", _._gsap.x = "0px", _._gsap.xPercent = -50, i = !1), D = o), l.paused() !== B && U()
                            }
                        },
                        j = function(e) {
                            if (!F.isPressed) {
                                var t = e.target.getBoundingClientRect(),
                                    o = ((e.changedTouches ? e.changedTouches[0] : e).clientX - t.left) / t.width * 100;
                                if (o < L) return L = o = Math.max(0, o), P.style.left = L + "%", void V.startDrag(e);
                                if (o > C) return C = o = Math.min(100, o), E.style.left = C + "%", void G.startDrag(e);
                                l.progress(o / 100).pause(), q(!0), F.startDrag(e)
                            }
                        },
                        K = function() {
                            if (l.progress() >= C / 100) {
                                ct(l, t);
                                var e = l._targets && l._targets[0];
                                e === a && e.seek(d + (p - d) * L / 100), l._repeat && !L ? l.totalProgress(0, !0) : l.reversed() || l.progress(L / 100, !0)
                            }
                            z.play(), l.resume(), B && v.update(), B = !1
                        },
                        Z = function() {
                            z.reverse(), l && l.pause(), B = !0
                        },
                        U = function() {
                            B ? K() : Z()
                        },
                        $ = function(e) {
                            if (!F.isPressed) {
                                ct(l, t);
                                var o = l._targets && l._targets[0];
                                o === a && o.seek(d + (p - d) * L / 100), l.progress(L / 100, !0), B || l.resume()
                            }
                        },
                        J = function(e) {
                            if (w("loop", h = e), h) {
                                if (R.play(), l.progress() >= C / 100) {
                                    var t = l._targets && l._targets[0];
                                    t === a && t.seek(d + (p - d) * L / 100), a._repeat && !L && 100 === C ? l.totalProgress(0, !0) : l.progress(L / 100, !0), K()
                                }
                            } else R.reverse()
                        },
                        Q = function() {
                            return J(!h)
                        },
                        ee = function() {
                            var e, o, n = Je(c && !t.globalSync ? c : Le, !0),
                                i = X.children,
                                r = 0;
                            for (c && !t.globalSync ? n.unshift(c) : t.hideGlobalTimeline || n.unshift(Le), o = 0; o < n.length; o++)(e = i[o] || Ue("option", X)).animation = n[o], r = o && n[o].vars.id === n[o - 1].vars.id ? r + 1 : 0, e.setAttribute("value", e.innerHTML = n[o].vars.id + (r ? " [" + r + "]" : n[o + 1] && n[o + 1].vars.id === n[o].vars.id ? " [0]" : ""));
                            for (; o < i.length; o++) X.removeChild(i[o])
                        },
                        te = function(e) {
                            var o, n, i = parseFloat(O.options[O.selectedIndex].value) || 1;
                            if (!arguments.length) return a;
                            if (We(e) && (e = at(e)), e instanceof Ce || console.warn("GSDevTools error: invalid animation."), e !== a) {
                                if (a && (a._inProgress = L, a._outProgress = C), a = e, l && (i = l.timeScale(), l._targets && l._targets[0] === c && (c.resume(), l.kill())), L = a._inProgress || 0, C = a._outProgress || 100, P.style.left = L + "%", E.style.left = C + "%", u && (w("animation", a.vars.id), w("in", L), w("out", C)), d = 0, n = t.maxDuration || Math.min(1e3, Qe(a)), a === Le || t.globalSync) {
                                    if (st(), l = Xe, He && He !== v && console.warn("Error: GSDevTools can only have one instance that's globally synchronized."), He = v, a !== Le)
                                        for ((p = (o = a).totalDuration()) > 99999999 && (p = o.duration()); o.parent.parent;) d = d / o._ts + o._start, p = p / o._ts + o._start, o = o.parent;
                                    else p = Le.duration();
                                    p - d > n && (p = d + n), Le.pause(d), Xe.vars.time = p, Xe.invalidate(), Xe.duration(p - d).timeScale(i), B ? Xe.progress(1).pause(0) : Ne(.01, (function() {
                                        Xe.resume().progress(L / 100), B && K()
                                    }))
                                } else {
                                    if (He === v && (He = null), a !== c && c) {
                                        for ((p = (o = a).totalDuration()) > 99999999 && (p = o.duration()); o.parent.parent && o !== c;) d = d / (o._ts || o._pauseTS) + o._start, p = p / (o._ts || o._pauseTS) + o._start, o = o.parent;
                                        p - d > n && (p = d + n), c.pause(d), l = Me.to(c, {
                                            duration: p - d,
                                            time: p,
                                            ease: "none",
                                            data: "root",
                                            parent: Be
                                        })
                                    } else l = a, !h && l._repeat && J(!0);
                                    l.timeScale(i), Xe.pause(), Le.resume(), l.seek(0)
                                }
                                S.innerHTML = l.duration().toFixed(2), it(X, a.vars.id, H)
                            }
                        },
                        oe = function(e) {
                            te(X.options[X.selectedIndex].animation), e.target && e.target.blur && e.target.blur(), B && K()
                        },
                        ne = function(e) {
                            var t, o = parseFloat(O.options[O.selectedIndex].value) || 1;
                            l.timeScale(o), w("timeScale", o), B || (l.progress() >= C / 100 ? ((t = l._targets && l._targets[0]) === a && t.seek(d + (p - d) * L / 100), l.progress(L / 100, !0).pause()) : l.pause(), Ne(.01, (function() {
                                return l.resume()
                            }))), I.innerHTML = o + "x", O.blur && O.blur()
                        },
                        ie = Me.to([y(".gs-bottom"), y(".gs-top")], {
                            duration: .3,
                            autoAlpha: 0,
                            y: 50,
                            ease: "power2.in",
                            data: "root",
                            paused: !0,
                            parent: Be
                        }),
                        re = !1,
                        se = function(e) {
                            Te.hitTest(e, x) || F.isDragging || V.isDragging || G.isDragging || ce.restart(!0)
                        },
                        ae = function() {
                            re || (ie.play(), ce.pause(), re = !0)
                        },
                        le = function() {
                            ce.pause(), re && (ie.reverse(), re = !1)
                        },
                        ce = Ne(1.3, ae).pause(),
                        de = function(e) {
                            var o;
                            Oe && !Ie && (Ie = Le._start), u = !e, o = t.animation, (c = o instanceof Ce ? o : o ? Me.getById(o) : null) && !c.vars.id && (c.vars.id = "[no id]"), st(), ee();
                            var n = at(b("animation"));
                            n && (n._inProgress = b("in") || 0, n._outProgress = b("out") || 100), t.paused && Z(), a = null, te(c || n || Le);
                            var i = t.timeScale || b("timeScale"),
                                r = n === a;
                            i && (it(O, i, I, i + "x"), l.timeScale(i)), 100 === (L = ("inTime" in t ? et(t.inTime, a, 0, 0) : r ? n._inProgress : 0) || 0) && !t.animation && n && (te(Le), L = et(t.inTime, a, 0, 0) || 0), L && (P.style.left = L + "%", P.style.display = E.style.display = "block"), (C = ("outTime" in t ? et(t.outTime, a, 100, L) : r ? n._outProgress : 0) || 100) < L && (C = 100), 100 !== C && (E.style.left = C + "%", P.style.display = E.style.display = "block"), (h = "loop" in t ? t.loop : b("loop")) && J(!0), t.paused && l.progress(L / 100, !0).pause(), Oe && a === Le && Ie && t.globalSync && !B && l.time(-Ie, !0), q(!0)
                        };
                    ot(X, "change", oe), ot(X, "mousedown", ee), ot(Y, "mousedown", U), ot(y(".seek-bar"), "mousedown", j), ot(y(".rewind"), "mousedown", $), ot(N, "mousedown", Q), ot(O, "change", ne), "auto" === t.visibility ? (ot(x, "mouseout", se), ot(x, "mouseover", le)) : "hidden" === t.visibility && (re = !0, ie.progress(1)), !1 !== t.keyboard && (Ye && t.keyboard ? console.warn("[GSDevTools warning] only one instance can be affected by keyboard shortcuts. There is already one active.") : (Ye = v, ot(Pe, "keydown", g = function(e) {
                        var t, o = e.keyCode ? e.keyCode : e.which;
                        32 === o ? U() : 38 === o ? (t = parseFloat(rt(O, -1, I)), l.timeScale(t), w("timeScale", t)) : 40 === o ? (t = parseFloat(rt(O, 1, I)), l.timeScale(t), w("timeScale", t)) : 37 === o ? $() : 39 === o ? l.progress(C / 100) : 76 === o ? Q() : 72 === o ? re ? le() : ae() : 73 === o ? (L = 100 * l.progress(), w("in", L), P.style.left = L + "%", q(!0)) : 79 === o && (C = 100 * l.progress(), w("out", C), E.style.left = C + "%", q(!0))
                    }))), Me.set(_, {
                        xPercent: -50,
                        x: 0,
                        data: "root"
                    }), Me.set(P, {
                        xPercent: -100,
                        x: 0,
                        data: "root"
                    }), P._gsIgnore = E._gsIgnore = _._gsIgnore = Y._gsIgnore = N._gsIgnore = !0, Me.killTweensOf([P, E, _]), de(Oe), Oe && Ne(1e-4, de, [!1], this), Me.ticker.add(q), this.update = function(e) {
                        var t, o, n;
                        He === v && (Xe.paused() && !e || st(), a === Le && (t = Le._time, Le.progress(1, !0).time(t, !0), t = (Xe._dp._time - Xe._start) * Xe._ts, 1e3 === (n = Math.min(1e3, Le.duration())) && (n = Math.min(1e3, Qe(Le))), 1 != (o = Xe.duration() / n) && n && (L *= o, C < 100 && (C *= o), Xe.seek(0), Xe.vars.time = n, Xe.invalidate(), Xe.duration(n), Xe.time(t), S.innerHTML = n.toFixed(2), P.style.left = L + "%", E.style.left = C + "%", q(!0))))
                    }, this.kill = function() {
                        nt(X, "change", oe), nt(X, "mousedown", ee), nt(Y, "mousedown", U), nt(y(".seek-bar"), "mousedown", j), nt(y(".rewind"), "mousedown", $), nt(N, "mousedown", Q), nt(O, "change", ne), F.disable(), V.disable(), G.disable(), Me.ticker.remove(q), nt(x, "mouseout", se), nt(x, "mouseover", le), nt(Pe, "keydown", g), x.parentNode.removeChild(x), He === v && (He = null), delete Ke[t.id + ""]
                    }, this.minimal = function(e) {
                        var o, n = x.classList.contains("minimal");
                        if (!arguments.length || n === e) return n;
                        e ? x.classList.add("minimal") : x.classList.remove("minimal"), t.container && (x.style.top = e ? "calc(100% - 42px)" : "calc(100% - 51px)"), F.isPressed && (r = !0, F.endDrag(F.pointerEvent), r = !1, o = 100 * l.progress(), T.style.width = Math.max(0, o - L) + "%", _.style.left = o + "%", _.style.transform = "translate(-50%,0)", _._gsap.x = "0px", _._gsap.xPercent = -50, F.startDrag(F.pointerEvent, !0))
                    }, this.animation = te, this.updateList = ee
                };
            dt.version = "3.6.1", dt.globalRecordingTime = 2, dt.getById = function(e) {
                return e ? Ke[e] : He
            }, dt.getByAnimation = function(e) {
                for (var t in We(e) && (e = Me.getById(e)), Ke)
                    if (Ke[t].animation() === e) return Ke[t]
            }, dt.create = function(e) {
                return new dt(e)
            }, dt.register = lt, Fe() && Me.registerPlugin(dt)
        }
    }
]);
//# sourceMappingURL=42.87c08df0.js.map