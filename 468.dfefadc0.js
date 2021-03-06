(self.webpackChunkEvolves_Website = self.webpackChunkEvolves_Website || []).push([
    [468], {
        468: function(t, e) {
            var o, n;

            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            void 0 === (n = "function" == typeof(o = function() {
                function t(t, e) {
                    if (!t) throw new Error(e)
                }

                function e(e) {
                    t(!e || "object" === r(e), "options must be an object, got ".concat(e, " (").concat(r(e), ")"));
                    var o = {
                        accessToken: null,
                        accessTokenTimeout: 1e4,
                        after: null,
                        apiTimeout: 1e4,
                        before: null,
                        debug: !1,
                        error: null,
                        filter: null,
                        limit: null,
                        mock: !1,
                        render: null,
                        sort: null,
                        success: null,
                        target: "instafeed",
                        template: '<a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>',
                        templateBoundaries: ["{{", "}}"],
                        transform: null
                    };
                    if (e)
                        for (var n in o) void 0 !== e[n] && (o[n] = e[n]);
                    t("string" == typeof o.target || "object" === r(o.target), "target must be a string or DOM node, got ".concat(o.target, " (").concat(r(o.target), ")")), t("string" == typeof o.accessToken || "function" == typeof o.accessToken, "accessToken must be a string or function, got ".concat(o.accessToken, " (").concat(r(o.accessToken), ")")), t("number" == typeof o.accessTokenTimeout, "accessTokenTimeout must be a number, got ".concat(o.accessTokenTimeout, " (").concat(r(o.accessTokenTimeout), ")")), t("number" == typeof o.apiTimeout, "apiTimeout must be a number, got ".concat(o.apiTimeout, " (").concat(r(o.apiTimeout), ")")), t("boolean" == typeof o.debug, "debug must be true or false, got ".concat(o.debug, " (").concat(r(o.debug), ")")), t("boolean" == typeof o.mock, "mock must be true or false, got ".concat(o.mock, " (").concat(r(o.mock), ")")), t("object" === r(o.templateBoundaries) && 2 === o.templateBoundaries.length && "string" == typeof o.templateBoundaries[0] && "string" == typeof o.templateBoundaries[1], "templateBoundaries must be an array of 2 strings, got ".concat(o.templateBoundaries, " (").concat(r(o.templateBoundaries), ")")), t(!o.template || "string" == typeof o.template, "template must null or string, got ".concat(o.template, " (").concat(r(o.template), ")")), t(!o.error || "function" == typeof o.error, "error must be null or function, got ".concat(o.error, " (").concat(r(o.error), ")")), t(!o.before || "function" == typeof o.before, "before must be null or function, got ".concat(o.before, " (").concat(r(o.before), ")")), t(!o.after || "function" == typeof o.after, "after must be null or function, got ".concat(o.after, " (").concat(r(o.after), ")")), t(!o.success || "function" == typeof o.success, "success must be null or function, got ".concat(o.success, " (").concat(r(o.success), ")")), t(!o.filter || "function" == typeof o.filter, "filter must be null or function, got ".concat(o.filter, " (").concat(r(o.filter), ")")), t(!o.transform || "function" == typeof o.transform, "transform must be null or function, got ".concat(o.transform, " (").concat(r(o.transform), ")")), t(!o.sort || "function" == typeof o.sort, "sort must be null or function, got ".concat(o.sort, " (").concat(r(o.sort), ")")), t(!o.render || "function" == typeof o.render, "render must be null or function, got ".concat(o.render, " (").concat(r(o.render), ")")), t(!o.limit || "number" == typeof o.limit, "limit must be null or number, got ".concat(o.limit, " (").concat(r(o.limit), ")")), this._state = {
                        running: !1
                    }, this._options = o
                }
                return e.prototype.run = function() {
                    var t = this,
                        e = null,
                        o = null,
                        n = null,
                        r = null;
                    return this._debug("run", "options", this._options), this._debug("run", "state", this._state), this._state.running ? (this._debug("run", "already running, skipping"), !1) : (this._start(), this._debug("run", "getting dom node"), (e = "string" == typeof this._options.target ? document.getElementById(this._options.target) : this._options.target) ? (this._debug("run", "got dom node", e), this._debug("run", "getting access token"), this._getAccessToken((function(s, i) {
                        if (s) return t._debug("onTokenReceived", "error", s), void t._fail(new Error("error getting access token: ".concat(s.message)));
                        o = "https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=".concat(i), t._debug("onTokenReceived", "request url", o), t._makeApiRequest(o, (function(o, s) {
                            if (o) return t._debug("onResponseReceived", "error", o), void t._fail(new Error("api request error: ".concat(o.message)));
                            t._debug("onResponseReceived", "data", s), t._success(s);
                            try {
                                n = t._processData(s), t._debug("onResponseReceived", "processed data", n)
                            } catch (e) {
                                return void t._fail(e)
                            }
                            if (t._options.mock) t._debug("onResponseReceived", "mock enabled, skipping render");
                            else {
                                try {
                                    r = t._renderData(n), t._debug("onResponseReceived", "html content", r)
                                } catch (e) {
                                    return void t._fail(e)
                                }
                                e.innerHTML = r
                            }
                            t._finish()
                        }))
                    })), !0) : (this._fail(new Error("no element found with ID ".concat(this._options.target))), !1))
                }, e.prototype._processData = function(t) {
                    var e = "function" == typeof this._options.transform,
                        o = "function" == typeof this._options.filter,
                        n = "function" == typeof this._options.sort,
                        s = "number" == typeof this._options.limit,
                        i = [],
                        a = null,
                        c = null,
                        u = null,
                        l = null;
                    if (this._debug("processData", "hasFilter", o, "hasTransform", e, "hasSort", n, "hasLimit", s), "object" !== r(t) || "object" !== r(t.data) || t.data.length <= 0) return null;
                    for (var p = 0; p < t.data.length; p++) {
                        if (c = this._getItemData(t.data[p]), e) try {
                            u = this._options.transform(c), this._debug("processData", "transformed item", c, u)
                        } catch (t) {
                            throw this._debug("processData", "error calling transform", t), new Error("error in transform: ".concat(t.message))
                        } else u = c;
                        if (o) {
                            try {
                                l = this._options.filter(u), this._debug("processData", "filter item result", u, l)
                            } catch (t) {
                                throw this._debug("processData", "error calling filter", t), new Error("error in filter: ".concat(t.message))
                            }
                            l && i.push(u)
                        } else i.push(u)
                    }
                    if (n) try {
                        i.sort(this._options.sort)
                    } catch (t) {
                        throw this._debug("processData", "error calling sort", t), new Error("error in sort: ".concat(t.message))
                    }
                    return s && (a = i.length - this._options.limit, this._debug("processData", "checking limit", i.length, this._options.limit, a), a > 0 && i.splice(i.length - a, a)), i
                }, e.prototype._extractTags = function(t) {
                    var e = /#([^\s]+)/gi,
                        o = /[~`!@#$%^&*\(\)\-\+={}\[\]:;"'<>\?,\./|\\\s]+/i,
                        n = [];
                    if ("string" == typeof t)
                        for (; null !== (match = e.exec(t));) !1 === o.test(match[1]) && n.push(match[1]);
                    return n
                }, e.prototype._getItemData = function(t) {
                    var e = null,
                        o = null;
                    switch (t.media_type) {
                        case "IMAGE":
                            e = "image", o = t.media_url;
                            break;
                        case "VIDEO":
                            e = "video", o = t.thumbnail_url;
                            break;
                        case "CAROUSEL_ALBUM":
                            e = "album", o = t.media_url
                    }
                    return {
                        caption: t.caption,
                        tags: this._extractTags(t.caption),
                        id: t.id,
                        image: o,
                        link: t.permalink,
                        model: t,
                        timestamp: t.timestamp,
                        type: e,
                        username: t.username
                    }
                }, e.prototype._renderData = function(t) {
                    var e = "string" == typeof this._options.template,
                        o = "function" == typeof this._options.render,
                        n = null,
                        s = null,
                        i = "";
                    if (this._debug("renderData", "hasTemplate", e, "hasRender", o), "object" !== r(t) || t.length <= 0) return null;
                    for (var a = 0; a < t.length; a++) {
                        if (n = t[a], o) try {
                            s = this._options.render(n, this._options), this._debug("renderData", "custom render result", n, s)
                        } catch (t) {
                            throw this._debug("renderData", "error calling render", t), new Error("error in render: ".concat(t.message))
                        } else e && (s = this._basicRender(n));
                        s ? i += s : this._debug("renderData", "render item did not return any content", n)
                    }
                    return i
                }, e.prototype._basicRender = function(t) {
                    for (var e = new RegExp("".concat(this._options.templateBoundaries[0], "([\\s\\w.]+)").concat(this._options.templateBoundaries[1]), "gm"), o = this._options.template, n = null, r = "", s = 0, i = null, a = null; null !== (n = e.exec(o));) i = n[1], r += o.slice(s, n.index), (a = this._valueForKeyPath(i, t)) && (r += a.toString()), s = e.lastIndex;
                    return s < o.length && (r += o.slice(s, o.length)), r
                }, e.prototype._valueForKeyPath = function(t, e) {
                    for (var o = /([\w]+)/gm, n = null, s = e; null !== (n = o.exec(t));) {
                        if ("object" !== r(s)) return null;
                        s = s[n[1]]
                    }
                    return s
                }, e.prototype._fail = function(t) {
                    !this._runHook("error", t) && console && "function" == typeof console.error && console.error(t), this._state.running = !1
                }, e.prototype._start = function() {
                    this._state.running = !0, this._runHook("before")
                }, e.prototype._finish = function() {
                    this._runHook("after"), this._state.running = !1
                }, e.prototype._success = function(t) {
                    this._runHook("success", t), this._state.running = !1
                }, e.prototype._makeApiRequest = function(t, e) {
                    var o = !1,
                        n = this,
                        r = null,
                        s = function(t, n) {
                            o || (o = !0, e(t, n))
                        };
                    (r = new XMLHttpRequest).ontimeout = function(t) {
                        s(new Error("api request timed out"))
                    }, r.onerror = function(t) {
                        s(new Error("api connection error"))
                    }, r.onload = function(t) {
                        var e = r.getResponseHeader("Content-Type"),
                            o = null;
                        if (n._debug("apiRequestOnLoad", "loaded", t), n._debug("apiRequestOnLoad", "response status", r.status), n._debug("apiRequestOnLoad", "response content type", e), e.indexOf("application/json") >= 0) try {
                            o = JSON.parse(r.responseText)
                        } catch (t) {
                            return n._debug("apiRequestOnLoad", "json parsing error", t, r.responseText), void s(new Error("error parsing response json"))
                        }
                        200 === r.status ? s(null, o) : o && o.error ? s(new Error("".concat(o.error.code, " ").concat(o.error.message))) : s(new Error("status code ".concat(r.status)))
                    }, r.open("GET", t, !0), r.timeout = this._options.apiTimeout, r.send()
                }, e.prototype._getAccessToken = function(t) {
                    var e = !1,
                        o = this,
                        n = null,
                        s = function(o, r) {
                            e || (e = !0, clearTimeout(n), t(o, r))
                        };
                    if ("function" == typeof this._options.accessToken) {
                        this._debug("getAccessToken", "calling accessToken as function"), n = setTimeout((function() {
                            o._debug("getAccessToken", "timeout check", e), s(new Error("accessToken timed out"), null)
                        }), this._options.accessTokenTimeout);
                        try {
                            this._options.accessToken((function(t, n) {
                                o._debug("getAccessToken", "received accessToken callback", e, t, n), s(t, n)
                            }))
                        } catch (t) {
                            this._debug("getAccessToken", "error invoking the accessToken as function", t), s(t, null)
                        }
                    } else this._debug("getAccessToken", "treating accessToken as static", r(this._options.accessToken)), s(null, this._options.accessToken)
                }, e.prototype._debug = function() {
                    var t = null;
                    this._options.debug && console && "function" == typeof console.log && ((t = [].slice.call(arguments))[0] = "[Instafeed] [".concat(t[0], "]"), console.log.apply(null, t))
                }, e.prototype._runHook = function(t, e) {
                    var o = !1;
                    if ("function" == typeof this._options[t]) try {
                        this._options[t](e), o = !0
                    } catch (e) {
                        this._debug("runHook", "error calling hook", t, e)
                    }
                    return o
                }, e
            }) ? o.apply(e, []) : o) || (t.exports = n)
        }
    }
]);
//# sourceMappingURL=468.dfefadc0.js.map