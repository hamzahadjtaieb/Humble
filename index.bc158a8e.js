(() => {
    "use strict";
    var e, t = {
            5579: (e, t, o) => {
                var a = o(320),
                    i = o(9755),
                    r = o.n(i),
                    n = o(6808),
                    s = o.n(n),
                    _ = o(2642),
                    p = o(1325),
                    c = o(7417),
                    u = o(6366),
                    d = o(9127),
                    y = o(7082),
                    l = o(898),
                    m = o(2411),
                    w = o(5608),
                    f = o(8222),
                    h = o(8509),
                    g = o(468),
                    O = o.n(g),
                    b = (o(886), o(9755));

                function v(e) {
                    return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function T(e, t) {
                    return (T = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function x(e, t) {
                    return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t
                }

                function k(e) {
                    return (k = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }

                function j(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function S(e, t) {
                    for (var o = 0; o < t.length; o++) {
                        var a = t[o];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }

                function C(e, t, o) {
                    return t && S(e.prototype, t), o && S(e, o), e
                }
                if (window.location.href.indexOf("de-DE") > -1) var G = "schließen",
                    E = "aktiv",
                    V = "Backends",
                    B = "Realität.",
                    I = "Schmeckt gut, wa? 🎉";
                else G = "close", E = "Disable", V = "about your backend security.", B = "Reality.", I = "Cookies accepted bro 🎉";
                window.addEventListener("orientationchange", (function() {
                    window.location.reload()
                })), window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (function() {
                    location.reload()
                })), window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (function() {
                    location.reload()
                })), _.p8.registerPlugin(p.c, c.X, u.z, d.L, y.i, l.W, m.s, w.W, f.A);
                var M, R, L, A, P, q, N, U = window.matchMedia("(min-width: 1150px)"),
                    X = window.matchMedia("(max-width: 1150px)"),
                    Y = window.matchMedia("(prefers-color-scheme: light)");
                if (M = document.getElementById("pre_entry_animation_video_content"), R = document.createElement("source"), Y.matches ? R.setAttribute("src", "assets/video/video_2_pre_entry_light.mp4") : R.setAttribute("src", "assets/video/video_2_pre_entry_dark.mp4"), M.appendChild(R), L = document.getElementById("digital_devices_picture_container_inner_content"), A = document.createElement("source"), Y.matches ? A.setAttribute("src", "assets/video/scene1_light_premiere.mp4") : A.setAttribute("src", "assets/video/scene1_dark_premiere.mp4"), L.appendChild(A), X.matches) {
                    y.i.config({
                        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
                    });
                    var Z = document.getElementsByClassName("nav_bar_modal"),
                        D = document.getElementsByClassName("pre_entry_animation");
                    r()(document).ready((function() {
                        var e, t, o, a, i, r;
                        (0, h.Qp)(D),
                        function() {
                            if (s().get("entry_animation", "played")) {
                                var e = _.p8.timeline({
                                    id: "home_entry_animation",
                                    paused: !0
                                });
                                e.set(".pre_entry_animation", {
                                    display: "none"
                                }, 0), e.to("main", {
                                    opacity: 1,
                                    duration: 2,
                                    ease: "power3.inOut"
                                }, 0), e.to(".logo_bar", {
                                    opacity: 1,
                                    duration: 2,
                                    ease: "power3.inOut"
                                }, 0), e.to(".menu_bar", {
                                    opacity: 1,
                                    duration: 2,
                                    ease: "power3.inOut"
                                }, 0), e.to(".nav_bar", {
                                    opacity: 1,
                                    duration: 2,
                                    ease: "power3.inOut"
                                }, 0), e.add((function() {
                                    (0, h.tG)(D)
                                }), null, 2), e.play()
                            } else {
                                var t = _.p8.timeline({
                                    id: "pre_entry_animation",
                                    paused: !0
                                });
                                t.to(".pre_entry_animation", {
                                    opacity: 1,
                                    duration: .1
                                }, 0), t.fromTo(".pre_entry_animation_heading_first", {
                                    y: 50
                                }, {
                                    y: 0,
                                    opacity: 1,
                                    duration: 5,
                                    ease: "power3.inOut"
                                }, 0), t.add((function() {
                                    F.play()
                                }), null, 5), t.to(".pre_entry_animation_heading_first", {
                                    opacity: 0,
                                    duration: 2,
                                    ease: "power3.inOut"
                                }, 4), t.to(".pre_entry_animation_video", {
                                    opacity: 1,
                                    duration: 2,
                                    ease: "power3.inOut"
                                }, 4), t.to("main", {
                                    opacity: 1,
                                    duration: 3,
                                    ease: "power3.inOut"
                                }, 7), t.to(".logo_bar", {
                                    opacity: 1,
                                    duration: 3,
                                    ease: "power3.inOut"
                                }, 7), t.to(".menu_bar", {
                                    opacity: 1,
                                    duration: 3,
                                    ease: "power3.inOut"
                                }, 7), t.to(".nav_bar", {
                                    opacity: 1,
                                    duration: 3,
                                    ease: "power3.inOut"
                                }, 7), t.to(".pre_entry_animation", {
                                    opacity: 0,
                                    duration: 3,
                                    ease: "power3.inOut"
                                }, 7), t.add((function() {
                                    (0, h.tG)(D)
                                }), null, 10), t.set(".pre_entry_animation", {
                                    display: "none"
                                }, 10), t.play(), s().set("entry_animation", "played", {
                                    expires: 7
                                })
                            }
                        }(), e = document.getElementById("second_container_inner_icon_video_content_mobile"), t = document.createElement("source"), Y.matches ? t.setAttribute("src", "assets/video/scene4_light_premiere.mp4") : t.setAttribute("src", "assets/video/scene4_dark_premiere.mp4"), e.appendChild(t), o = document.getElementById("third_container_inner_icon_video_content_mobile"), a = document.createElement("source"), Y.matches ? a.setAttribute("src", "assets/video/scene2_light_premiere.mp4") : a.setAttribute("src", "assets/video/scene2_dark_premiere.mp4"), o.appendChild(a), i = document.getElementById("fourth_container_inner_icon_video_content_mobile"), r = document.createElement("source"), Y.matches ? r.setAttribute("src", "assets/video/scene3_light_premiere.mp4") : r.setAttribute("src", "assets/video/scene3_dark_premiere.mp4"), i.appendChild(r), s().get("cookies", "accepted") ? function(e, t, o) {
                            t.ChatraID = "bRth8u6fmZR6ZN8ym";
                            var a = e.createElement("script");
                            t[o] = t[o] || function() {
                                (t[o].q = t[o].q || []).push(arguments)
                            }, a.async = !0, a.src = "https://call.chatra.io/chatra.js", e.head && e.head.appendChild(a)
                        }(document, window, "Chatra") : H.play(), window.cookie_accepted = function() {
                            s().set("cookies", "accepted", {
                                expires: 30
                            }), J.play()
                        }
                    })), new(O())({
                        accessToken: InstagramToken,
                        target: "instagram_feed",
                        limit: 3,
                        template: '<div class="instagram_feed_picture"><a href="{{link}}"><img class="instagram_feed_picture_img" title="{{caption}}" src="{{image}}" /><span class="instagram_feed_text">{{caption}}</span></a></div>'
                    }).run();
                    var F = document.getElementById("pre_entry_animation_video_content"),
                        W = document.getElementById("menu_magnetic_target"),
                        Q = document.getElementById("menu_icon_svg");
                    window.menu_logical = function() {
                        W.classList.contains("active") ? ((0, h.tG)(Z), $.reverse(), W.classList.remove("active"), Q.classList.remove("active")) : ((0, h.Qp)(Z), $.play(), W.classList.add("active"), Q.classList.add("active"))
                    };
                    var z = document.getElementById("teaser_video");
                    window.teaser_video_sound = function() {
                        z.classList.contains("sound_on") ? (z.muted = !0, z.classList.remove("sound_on"), K.reverse()) : (K.play(), z.classList.add("sound_on"), z.muted = !1)
                    };
                    var H = _.p8.timeline({
                        id: "cookie_notification",
                        paused: !0
                    });
                    H.set(".cookie_notification_box", {
                        display: "block"
                    }, 0), H.fromTo(".cookie_notification", {
                        y: 150
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0);
                    var J = _.p8.timeline({
                        id: "cookie_notification_accepted",
                        paused: !0
                    });
                    J.to(".cookie_notification_content a", {
                        opacity: 0,
                        duration: .5,
                        ease: "power3.inOut"
                    }, 0), J.to(".cookie_notification_content p", {
                        text: {
                            value: I
                        },
                        duration: 2,
                        ease: "power3.inOut"
                    }, .5), J.to(".cookie_notification", {
                        filter: "blur(15px)",
                        opacity: 0,
                        duration: 1,
                        ease: "power3.inOut"
                    }, 4.5), J.set(".cookie_notification_box", {
                        display: "none"
                    }, 5.5), J.add((function() {
                        ! function(e, t, o) {
                            t.ChatraID = "bRth8u6fmZR6ZN8ym";
                            var a = e.createElement("script");
                            t[o] = t[o] || function() {
                                (t[o].q = t[o].q || []).push(arguments)
                            }, a.async = !0, a.src = "https://call.chatra.io/chatra.js", e.head && e.head.appendChild(a)
                        }(document, window, "Chatra")
                    }), null, 5.5);
                    var K = _.p8.timeline({
                        id: "gsap_teaser_video_sound_toggle",
                        paused: !0
                    });
                    K.to(".iphone_aufnahme_2_player_ui_text_animation", {
                        text: {
                            value: "Disable"
                        },
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0), K.to(".iphone_aufnahme_2_player_ui_icon_animation_1", {
                        opacity: 1,
                        duration: 1,
                        ease: "power3.inOut"
                    }, 0), K.to(".iphone_aufnahme_2_player_ui_icon_animation_2", {
                        opacity: 2,
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0);
                    var $ = _.p8.timeline({
                        id: "menu_animation",
                        paused: !0
                    });
                    $.to("main", {
                        filter: "grayscale(1)",
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0), $.fromTo(".nav_bar", {
                        backdropFilter: "blur(15px)"
                    }, {
                        backdropFilter: "blur(0px)",
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0), $.to(".nav_bar_background", {
                        opacity: 0,
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0), $.fromTo(".nav_bar_modal_mobile", {
                        display: "none"
                    }, {
                        display: "block",
                        duration: .1
                    }, 0), $.fromTo(".nav_bar_modal_mobile", {
                        x: 600
                    }, {
                        opacity: 1,
                        x: 0,
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0), $.fromTo(".nav_bar_modal_mobile .nav_bar_modal_content_first", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.inOut"
                    }, 1.75), $.fromTo(".nav_bar_modal_mobile .nav_bar_modal_content_second_mobile", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.inOut"
                    }, 2), $.fromTo(".nav_bar_modal_mobile .nav_bar_modal_content_third", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.inOut"
                    }, 2.25), r()(document).ready((function() {
                        var e = _.p8.timeline({
                            id: "nav_animation",
                            scrollTrigger: {
                                trigger: ".nav_bar",
                                start: "top top",
                                end: "950 center",
                                markers: !1
                            }
                        });
                        e.to(".nav_bar_background", {
                            opacity: .2,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 5), e.to(".logo_svg_icon", {
                            opacity: 0,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 0), e.to(".logo_schrift", {
                            width: "200px",
                            x: -49,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 0);
                        var t = _.p8.timeline({
                            id: "digital_devices",
                            paused: !0,
                            repeat: 0,
                            scrollTrigger: {
                                trigger: ".digital_devices",
                                start: "300 bottom",
                                end: "bottom top",
                                markers: !1,
                                toggleActions: "play pause resume pause"
                            }
                        });
                        t.fromTo(".digital_devices_picture_container_inner", {
                            opacity: 0,
                            scale: .5,
                            y: 50
                        }, {
                            opacity: 1,
                            duration: 1,
                            scale: 1,
                            y: 0,
                            ease: "power1.inOut"
                        }, 0), t.fromTo(".digital_devices_font", {
                            opacity: 0,
                            y: 50
                        }, {
                            opacity: 1,
                            duration: 2,
                            y: 0,
                            ease: "power1.inOut"
                        }, 0), t.fromTo(".digital_devices_font_change", {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, .25), t.fromTo(".digital_devices_subfont", {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, .5), t.fromTo(".mobile", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, 1), t.fromTo(".tablets", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, 1.25), t.fromTo(".smart_tv", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, 1.5), t.fromTo(".desktop", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, 1.75), t.fromTo(".smart_watch", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, 2), t.fromTo(".smart_car", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, 2.25), t.to(".digital_devices_font_change", {
                            text: {
                                value: B,
                                newClass: ".digital_devices_font_change_2"
                            },
                            duration: 2,
                            ease: "power1.inOut"
                        }, 3);
                        var o = _.p8.timeline({
                            id: "weltkarte",
                            paused: !0,
                            repeat: -1,
                            scrollTrigger: {
                                start: "-500 center",
                                end: "800 top",
                                markers: !1,
                                trigger: ".weltkarte",
                                toggleActions: "play pause resume reset"
                            }
                        });
                        o.set(".weltkarte_gsap_1", {
                            opacity: 0
                        }, 0), o.set(".weltkarte_gsap_2", {
                            opacity: 0
                        }, 0), o.set(".weltkarte_gsap_3", {
                            opacity: 0
                        }, 0), o.set(".weltkarte_gsap_4", {
                            opacity: 0
                        }, 0), o.set(".weltkarte_gsap_5", {
                            opacity: 0
                        }, 0), o.set("#dot_1", {
                            opacity: 0
                        }, 0), o.set("#dot_1_2", {
                            opacity: 0
                        }, 0), o.set("#dot_2", {
                            opacity: 0
                        }, 0), o.set("#dot_2_2", {
                            opacity: 0
                        }, 0), o.set("#dot_3", {
                            opacity: 0
                        }, 0), o.set("#dot_3_2", {
                            opacity: 0
                        }, 0), o.set("#dot_4", {
                            opacity: 0
                        }, 0), o.set("#dot_4_2", {
                            opacity: 0
                        }, 0), o.set("#dot_5", {
                            opacity: 0
                        }, 0), o.set("#dot_5_2", {
                            opacity: 0
                        }, 0), o.set(".weltkarte_text", {
                            opacity: 0
                        }, 0), o.fromTo(".weltkarte", {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 0), o.fromTo(".weltkarte_gsap_1", {
                            opacity: 0,
                            y: 50
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 2), o.fromTo("#dot_1", {}, {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 2), o.fromTo("#path_1", {
                            drawSVG: "100% 80%"
                        }, {
                            opacity: 1,
                            duration: 2,
                            drawSVG: "0%"
                        }, 3), o.fromTo("#dot_1_2", {}, {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 3), o.to("#dot_1", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 5), o.to("#dot_1_2", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 5), o.to("#path_1", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 5), o.to(".weltkarte_gsap_1", {
                            opacity: 0,
                            y: -50,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 5), o.fromTo(".weltkarte_gsap_2", {
                            opacity: 0,
                            y: 50
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 7), o.fromTo("#dot_2", {}, {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 7), o.fromTo("#path_2", {
                            drawSVG: "100% 80%"
                        }, {
                            opacity: 1,
                            duration: 2,
                            drawSVG: "0%"
                        }, 8), o.fromTo("#dot_2_2", {}, {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 8), o.to("#dot_2", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 10), o.to("#dot_2_2", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 10), o.to("#path_2", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 10), o.to(".weltkarte_gsap_2", {
                            opacity: 0,
                            y: -50,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 10), o.fromTo(".weltkarte_gsap_3", {
                            opacity: 0,
                            y: 50
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 12), o.fromTo("#dot_3", {}, {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 12), o.fromTo("#path_3", {
                            drawSVG: "100% 80%"
                        }, {
                            opacity: 1,
                            duration: 2,
                            drawSVG: "0%"
                        }, 13), o.fromTo("#dot_3_2", {}, {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 13), o.to("#dot_3", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 15), o.to("#dot_3_2", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 15), o.to("#path_3", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 15), o.to(".weltkarte_gsap_3", {
                            opacity: 0,
                            y: -50,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 15), o.fromTo(".weltkarte_gsap_4", {
                            opacity: 0,
                            y: 50
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 17), o.fromTo("#dot_4", {}, {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 17), o.fromTo("#path_4", {
                            drawSVG: "100% 80%"
                        }, {
                            opacity: 1,
                            duration: 2,
                            drawSVG: "0%"
                        }, 18), o.fromTo("#dot_4_2", {}, {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 18), o.to("#dot_4", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 20), o.to("#dot_4_2", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 20), o.to("#path_4", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 20), o.to(".weltkarte_gsap_4", {
                            opacity: 0,
                            y: -50,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 20), o.fromTo(".weltkarte_gsap_5", {
                            opacity: 0,
                            y: 50
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 22), o.fromTo("#dot_5", {}, {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 22), o.fromTo("#path_5", {
                            drawSVG: "100% 80%"
                        }, {
                            opacity: 1,
                            duration: 2,
                            drawSVG: "0%"
                        }, 23), o.fromTo("#dot_5_2", {}, {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 23), o.to("#dot_5", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 25), o.to("#dot_5_2", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 25), o.to("#path_5", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 25), o.to(".weltkarte_gsap_5", {
                            opacity: 0,
                            y: -50,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 25), o.to(".weltkarte_picture", {
                            opacity: 0,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 24.5), o.to(".weltkarte_dots", {
                            opacity: 0,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 24.5), o.fromTo("#weltkarte_logo_black", {
                            opacity: 0,
                            scale: .5
                        }, {
                            scale: 1,
                            opacity: 1,
                            duration: 3,
                            ease: "power3.inOut"
                        }, 24.5), o.fromTo(".logo_path_1", {
                            drawSVG: "0%"
                        }, {
                            drawSVG: "100%",
                            duration: 5,
                            ease: "power3.inOut"
                        }, 24.5), o.to("#weltkarte_logo_black", {
                            fill: "white",
                            duration: 2,
                            ease: "power3.inOut"
                        }, 27.5), o.to("#weltkarte_logo_black", {
                            y: -100,
                            scale: .75,
                            duration: 3,
                            ease: "power3.inOut"
                        }, 28), o.fromTo(".weltkarte_text", {
                            opacity: 0,
                            scale: .5
                        }, {
                            scale: 1,
                            opacity: 1,
                            duration: 3,
                            ease: "power3.inOut"
                        }, 28), o.fromTo(".weltkarte_subhead", {
                            opacity: 0,
                            y: -50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 30), o.to(".weltkarte", {
                            scale: 1,
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 37);
                        var a = _.p8.timeline({
                            id: "talents_entry",
                            paused: !0,
                            repeat: 0,
                            scrollTrigger: {
                                start: "-30% center",
                                end: "0 top",
                                markers: !1,
                                trigger: ".philosophy"
                            }
                        });
                        a.fromTo(".philosophy_row_left_heading", {
                            y: -50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 0), a.fromTo(".philosophy_row_right_heading", {
                            opacity: 0,
                            x: 300
                        }, {
                            x: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 0), a.fromTo(".philosophy_row_right_text", {
                            opacity: 0,
                            x: 300
                        }, {
                            x: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 0);
                        var i = _.p8.timeline({
                            id: "talents_guys",
                            paused: !0,
                            repeat: 0,
                            scrollTrigger: {
                                start: "-500 center",
                                end: "1000 top",
                                markers: !1,
                                trigger: ".talents"
                            }
                        });
                        i.fromTo(".one_talent", {
                            y: 50,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 1.5,
                            ease: "power3.inOut"
                        }, 0), i.fromTo(".two_talent", {
                            y: 50,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 1.5,
                            ease: "power3.inOut"
                        }, .25), i.fromTo(".three_talent", {
                            y: 50,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 1.5,
                            ease: "power3.inOut"
                        }, .5), i.fromTo(".four_talent", {
                            y: 50,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 1.5,
                            ease: "power3.inOut"
                        }, .75), i.fromTo(".five_talent", {
                            y: 50,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 1.5,
                            ease: "power3.inOut"
                        }, 1), i.fromTo(".six_talent", {
                            y: 50,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 1.5,
                            ease: "power3.inOut"
                        }, 1.25), i.fromTo(".founders_heading", {
                            y: 100
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 2), i.fromTo(".founders_text", {
                            y: 100
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 2), i.fromTo(".steve", {
                            y: 50,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 3,
                            ease: "power3.inOut"
                        }, 2), _.p8.timeline({
                            scrollTrigger: {
                                start: "-500 center",
                                end: "350 top",
                                markers: !1,
                                trigger: ".scrolling_text",
                                scrub: 1
                            }
                        }).fromTo(".scrolling_text", {
                            opacity: 1,
                            x: 1e3
                        }, {
                            x: -1500,
                            opacity: 1,
                            duration: 15
                        }, 0);
                        var r = _.p8.timeline({
                            id: "laptop_anim",
                            scrollTrigger: {
                                start: "0 center",
                                end: "0 bottom",
                                markers: !1,
                                trigger: ".laptop_anim",
                                scrub: 1
                            }
                        });
                        r.fromTo(".lottie_heart", {}, {
                            duration: 10
                        }, 0), r.add((function() {
                            document.getElementById("heart_lottie").play()
                        }), null, 0), r.fromTo(".laptop_anim_upper_inner_font", {}, {
                            duration: 10
                        }, 3);
                        var n = _.p8.timeline({
                            id: "aspects_second_l",
                            scrollTrigger: {
                                start: "-300 center",
                                end: "700 bottom",
                                markers: !1,
                                trigger: ".aspects_inner_container_second_l",
                                scrub: 1
                            }
                        });
                        n.to(".aspects_logo", {
                            morphSVG: ".aspects_lock_icon",
                            duration: 20,
                            ease: "power3.inOut"
                        }, 0), n.to(".protected_animation", {
                            duration: 40,
                            text: {
                                value: V
                            },
                            ease: "power3.inOut"
                        }, 5), n.fromTo(".protected_animation_2", {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 30);
                        var s = _.p8.timeline({
                            id: "aspects_first",
                            scrollTrigger: {
                                start: "-1000 center",
                                end: "600 bottom",
                                markers: !1,
                                trigger: ".aspects_inner_container_first",
                                scrub: 1
                            }
                        });
                        s.fromTo(".aspects_inner_container_first_box_background", {
                            opacity: 0
                        }, {
                            opacity: .6,
                            duration: 40,
                            ease: "power3.inOut"
                        }, 0), s.fromTo(".aspects_inner_container_first_box_heading", {
                            scale: .8,
                            opacity: 0
                        }, {
                            scale: 1,
                            opacity: 1,
                            duration: 20,
                            ease: "power3.inOut"
                        }, 20), s.fromTo(".aspects_inner_container_first_box_subheading", {
                            y: 100,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 20,
                            ease: "power3.inOut"
                        }, 25);
                        var p = _.p8.timeline({
                            id: "day_night_element",
                            paused: !0,
                            scrollTrigger: {
                                start: "150 center",
                                end: "bottom bottom",
                                markers: !1,
                                trigger: ".aspects_inner_container_fifth_r"
                            }
                        });
                        p.to(".aspects_inner_container_fifth_r_box_content_main", {
                            opacity: 0,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 0), p.fromTo(".aspects_inner_container_fifth_r_box_image_day", {
                            scale: .75,
                            opacity: 0
                        }, {
                            opacity: 1,
                            scale: 1,
                            duration: 3,
                            ease: "power3.inOut"
                        }, 0), p.to(".aspects_inner_container_fifth_r_box_content_day", {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 2), p.fromTo(".day_mode_icon", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 2), p.fromTo(".day_mode_heading", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 2.5), p.to(".aspects_inner_container_fifth_r_box_day", {
                            opacity: 0,
                            duration: 2.5,
                            ease: "power3.inOut"
                        }, 4), p.to(".aspects_inner_container_fifth_r_box_background_main", {
                            backgroundColor: "#000000",
                            duration: 2.5,
                            ease: "power3.inOut"
                        }, 4), p.set(".aspects_inner_container_fifth_r_box_night", {
                            display: "block",
                            ease: "power3.inOut"
                        }, 4), p.fromTo(".aspects_inner_container_fifth_r_box_image_night", {
                            scale: .75,
                            opacity: 0
                        }, {
                            opacity: 1,
                            scale: 1,
                            duration: 2.5,
                            ease: "power3.inOut"
                        }, 4), p.set(".aspects_inner_container_fifth_r_box_day", {
                            display: "none",
                            ease: "power3.inOut"
                        }, 6.5), p.to(".aspects_inner_container_fifth_r_box_image_night", {
                            duration: 2,
                            ease: "power3.inOut"
                        }, 6.5), p.to(".aspects_inner_container_fifth_r_box_content_night", {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 6.5), p.fromTo(".night_mode_icon", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 6.5), p.fromTo(".night_mode_heading", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 7), p.to(".aspects_inner_container_fifth_r_box_night", {
                            opacity: 0,
                            duration: 2.5,
                            ease: "power3.inOut"
                        }, 10), p.to(".aspects_inner_container_fifth_r_box_background_main", {
                            backgroundColor: "rgba(28, 28, 30, 1)",
                            duration: 2.5,
                            ease: "power3.inOut"
                        }, 10), p.to(".aspects_inner_container_fifth_r_box_content_main", {
                            opacity: 1,
                            duration: 2.5,
                            ease: "power3.inOut"
                        }, 11), window.repeat_day_night_animation = function() {
                            p.restart()
                        };
                        var c = _.p8.timeline({
                            id: "sticker_element",
                            paused: !0,
                            scrollTrigger: {
                                start: "150 center",
                                end: "bottom bottom",
                                markers: !1,
                                trigger: ".aspects_inner_container_second_r"
                            }
                        });
                        c.fromTo(".aspects_inner_container_second_r_box_heading", {
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 3,
                            ease: "power3.inOut"
                        }, 0), c.to(".aspects_inner_container_second_r_box_link", {
                            opacity: 1,
                            duration: 3,
                            ease: "power3.inOut"
                        }, 2), c.to(".aspects_inner_container_second_r_box_stickers_one", {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 0), c.to(".aspects_inner_container_second_r_box_stickers_second", {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, .5), c.to(".aspects_inner_container_second_r_box_stickers_third", {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 1), c.to(".aspects_inner_container_second_r_box_stickers_fourth", {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 1.5), c.to(".aspects_inner_container_second_r_box_stickers_fifth", {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 2), c.to(".aspects_inner_container_second_r_box_stickers_sixth", {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 2.5);
                        var u = _.p8.timeline({
                            id: "react_speed",
                            paused: !0,
                            scrollTrigger: {
                                start: "150 center",
                                end: "bottom bottom",
                                markers: !1,
                                trigger: ".aspects_inner_container_fifth_l"
                            }
                        });
                        u.fromTo(".aspects_inner_container_fifth_l_box_content h3", {
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 0), u.fromTo(".react_logo_container", {}, {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 1), u.fromTo(".fifth_p1", {
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 2), u.to(".aspects_inner_container_fifth_l_box_background", {
                            filter: "brightness(.6)",
                            duration: 2,
                            ease: "power3.inOut"
                        }, 2);
                        var d = _.p8.timeline({
                            id: "footer_anim",
                            paused: !0,
                            scrollTrigger: {
                                start: "80% center",
                                end: "110% bottom",
                                markers: !1,
                                trigger: ".aspects",
                                scrub: 1
                            }
                        });
                        d.to("body", {
                            backgroundColor: "rgba(28, 28, 30, 1) !important",
                            duration: 1,
                            ease: "power3.inOut"
                        }, 0), d.to(".aspects", {
                            scale: .9,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 0)
                    }))
                }
                if (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) {
                    if (U.matches) {
                        var ee = function() {
                            oe.clearRect(0, 0, te.width, te.height), oe.drawImage(ie[re.frame], 0, 0)
                        };
                        y.i.config({
                            autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
                        }), (0, h.Qp)(D), Z = document.getElementsByClassName("nav_bar_modal"), D = document.getElementsByClassName("pre_entry_animation"), r()(document).ready((function() {
                            var e, t, o, a, i, r;
                            ! function() {
                                if (s().get("entry_animation", "played")) {
                                    var e = _.p8.timeline({
                                        id: "home_entry_animation",
                                        paused: !0
                                    });
                                    e.set(".pre_entry_animation", {
                                        display: "none"
                                    }, 0), e.to("main", {
                                        opacity: 1,
                                        duration: 2,
                                        ease: "power3.inOut"
                                    }, 0), e.to(".logo_bar", {
                                        opacity: 1,
                                        duration: 2,
                                        ease: "power3.inOut"
                                    }, 0), e.to(".menu_bar", {
                                        opacity: 1,
                                        duration: 2,
                                        ease: "power3.inOut"
                                    }, 0), e.to(".nav_bar", {
                                        opacity: 1,
                                        duration: 2,
                                        ease: "power3.inOut"
                                    }, 0), e.add((function() {
                                        (0, h.tG)(D)
                                    }), null, 2), e.play()
                                } else {
                                    var t = _.p8.timeline({
                                        id: "pre_entry_animation",
                                        paused: !0
                                    });
                                    t.to(".pre_entry_animation", {
                                        opacity: 1,
                                        duration: .1
                                    }, 0), t.fromTo(".pre_entry_animation_heading_first", {
                                        y: 50
                                    }, {
                                        y: 0,
                                        opacity: 1,
                                        duration: 5,
                                        ease: "power3.inOut"
                                    }, 0), t.add((function() {
                                        _e.play()
                                    }), null, 5), t.to(".pre_entry_animation_heading_first", {
                                        opacity: 0,
                                        duration: 1,
                                        ease: "power3.inOut"
                                    }, 5), t.to(".pre_entry_animation_video", {
                                        opacity: 1,
                                        duration: 2,
                                        ease: "power3.inOut"
                                    }, 4), t.to("main", {
                                        opacity: 1,
                                        duration: 3,
                                        ease: "power3.inOut"
                                    }, 7), t.to(".logo_bar", {
                                        opacity: 1,
                                        duration: 3,
                                        ease: "power3.inOut"
                                    }, 7), t.to(".menu_bar", {
                                        opacity: 1,
                                        duration: 3,
                                        ease: "power3.inOut"
                                    }, 7), t.to(".nav_bar", {
                                        opacity: 1,
                                        duration: 3,
                                        ease: "power3.inOut"
                                    }, 7), t.to(".pre_entry_animation", {
                                        opacity: 0,
                                        duration: 3,
                                        ease: "power3.inOut"
                                    }, 7), t.add((function() {
                                        (0, h.tG)(D)
                                    }), null, 10), t.set(".pre_entry_animation", {
                                        display: "none"
                                    }, 10), t.play(), s().set("entry_animation", "played", {
                                        expires: 7
                                    })
                                }
                            }(), e = document.getElementById("second_container_inner_icon_video_content_desktop"), t = document.createElement("source"), Y.matches ? t.setAttribute("src", "assets/video/scene4_light_premiere.mp4") : t.setAttribute("src", "assets/video/scene4_dark_premiere.mp4"), e.appendChild(t), o = document.getElementById("third_container_inner_icon_video_content_desktop"), a = document.createElement("source"), Y.matches ? a.setAttribute("src", "assets/video/scene2_light_premiere.mp4") : a.setAttribute("src", "assets/video/scene2_dark_premiere.mp4"), o.appendChild(a), i = document.getElementById("fourth_container_inner_icon_video_content_desktop"), r = document.createElement("source"), Y.matches ? r.setAttribute("src", "assets/video/scene3_light_premiere.mp4") : r.setAttribute("src", "assets/video/scene3_dark_premiere.mp4"), i.appendChild(r), s().get("cookies", "accepted") ? function(e, t, o) {
                                t.ChatraID = "bRth8u6fmZR6ZN8ym";
                                var a = e.createElement("script");
                                t[o] = t[o] || function() {
                                    (t[o].q = t[o].q || []).push(arguments)
                                }, a.async = !0, a.src = "https://call.chatra.io/chatra.js", e.head && e.head.appendChild(a)
                            }(document, window, "Chatra") : de.play(), window.cookie_accepted = function() {
                                s().set("cookies", "accepted", {
                                    expires: 30
                                }), ye.play()
                            }
                        })), new(O())({
                            accessToken: InstagramToken,
                            target: "instagram_feed",
                            limit: 3,
                            template: '<div class="instagram_feed_picture"><a href="{{link}}"><img class="instagram_feed_picture_img" title="{{caption}}" src="{{image}}" /><span class="instagram_feed_text">{{caption}}</span></a></div>'
                        }).run();
                        var te = document.getElementById("laptop_anim_inner_canvas"),
                            oe = te.getContext("2d");
                        if (te.width = 200, te.height = 200, Y.matches) var ae = function(e) {
                            return "assets/images/light_" + e + ".jpg"
                        };
                        else ae = function(e) {
                            return "assets/images/dark_" + e + ".jpg"
                        };
                        for (var ie = [], re = {
                                frame: 0
                            }, ne = 0; ne < 195; ne++) {
                            var se = new Image;
                            se.src = ae(ne), ie.push(se)
                        }
                        ie[0].onload = ee;
                        var _e = document.getElementById("pre_entry_animation_video_content"),
                            pe = document.getElementById("menu_magnetic_target"),
                            ce = document.getElementById("menu_icon_svg");
                        window.menu_logical = function() {
                            pe.classList.contains("active") ? ((0, h.tG)(Z), me.reverse(), pe.classList.remove("active"), ce.classList.remove("active")) : ((0, h.Qp)(Z), me.play(), pe.classList.add("active"), ce.classList.add("active"))
                        };
                        var ue = document.getElementById("teaser_video");
                        window.teaser_video_sound = function() {
                            ue.classList.contains("sound_on") ? (ue.muted = !0, ue.classList.remove("sound_on"), le.reverse()) : (le.play(), ue.classList.add("sound_on"), ue.muted = !1)
                        };
                        var de = _.p8.timeline({
                            id: "cookie_notification",
                            paused: !0
                        });
                        de.set(".cookie_notification_box", {
                            display: "block"
                        }, 0), de.fromTo(".cookie_notification", {
                            y: 150
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 0);
                        var ye = _.p8.timeline({
                            id: "cookie_notification_accepted",
                            paused: !0
                        });
                        ye.to(".cookie_notification_content a", {
                            opacity: 0,
                            duration: .5,
                            ease: "power3.inOut"
                        }, 0), ye.to(".cookie_notification_content p", {
                            text: {
                                value: I
                            },
                            duration: 2,
                            ease: "power3.inOut"
                        }, .5), ye.to(".cookie_notification", {
                            filter: "blur(15px)",
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 4.5), ye.set(".cookie_notification_box", {
                            display: "none"
                        }, 5.5), ye.add((function() {
                            ! function(e, t, o) {
                                t.ChatraID = "bRth8u6fmZR6ZN8ym";
                                var a = e.createElement("script");
                                t[o] = t[o] || function() {
                                    (t[o].q = t[o].q || []).push(arguments)
                                }, a.async = !0, a.src = "https://call.chatra.io/chatra.js", e.head && e.head.appendChild(a)
                            }(document, window, "Chatra")
                        }), null, 5.5);
                        var le = _.p8.timeline({
                            id: "gsap_teaser_video_sound_toggle",
                            paused: !0
                        });
                        le.to(".iphone_aufnahme_2_player_ui_text_animation", {
                            text: {
                                value: E
                            },
                            duration: 2,
                            ease: "power3.inOut"
                        }, 0), le.to(".iphone_aufnahme_2_player_ui_icon_animation_1", {
                            opacity: 1,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 0), le.to(".iphone_aufnahme_2_player_ui_icon_animation_2", {
                            opacity: 2,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 0);
                        var me = _.p8.timeline({
                            id: "menu_animation",
                            paused: !0
                        });
                        me.to(".menu_font_animation", {
                            text: {
                                value: G
                            },
                            duration: 2,
                            ease: "power3.inOut"
                        }, 0), me.to("main", {
                            filter: "grayscale(1)",
                            duration: 2,
                            ease: "power3.inOut"
                        }, 0), me.fromTo(".nav_bar", {
                            backdropFilter: "blur(15px)"
                        }, {
                            backdropFilter: "blur(0px)",
                            duration: 2,
                            ease: "power3.inOut"
                        }, 0), me.to(".nav_bar_background", {
                            opacity: 0,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 0), me.fromTo(".nav_bar_modal", {
                            display: "none"
                        }, {
                            display: "block",
                            duration: .1
                        }, 0), me.fromTo(".nav_bar_modal", {
                            x: 600
                        }, {
                            opacity: 1,
                            x: 0,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 0), me.fromTo(".nav_bar_modal_content_logo", {
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 1.5,
                            ease: "power3.inOut"
                        }, 1), me.fromTo(".nav_bar_modal_content_heading", {
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 1.5,
                            ease: "power3.inOut"
                        }, 1.25), me.fromTo(".nav_bar_modal_content_subheading", {
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 1.5,
                            ease: "power3.inOut"
                        }, 1.5), me.fromTo(".nav_bar_modal_content_second_inner_menu_heading_first", {
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 1.5,
                            ease: "power3.inOut"
                        }, 1.75), me.fromTo(".nav_bar_modal_content_second_inner_menu_heading_second", {
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 1.5,
                            ease: "power3.inOut"
                        }, 1.75), me.fromTo(".nav_bar_modal_content_second_inner_menu_socials", {
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 1.5,
                            ease: "power3.inOut"
                        }, 1.75), me.fromTo(".nav_bar_modal_content_second_inner_menu_menu", {
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 1.5,
                            ease: "power3.inOut"
                        }, 1.75), me.fromTo(".nav_bar_modal_content_third_text", {
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 1.5,
                            ease: "power3.inOut"
                        }, 2), me.fromTo(".nav_bar_modal_content_third_mail", {
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 1.5,
                            ease: "power3.inOut"
                        }, 2.25), r()(document).ready((function() {
                            var e = _.p8.timeline({
                                id: "nav_animation",
                                scrollTrigger: {
                                    trigger: ".nav_bar",
                                    start: "top top",
                                    end: "950 center",
                                    markers: !1,
                                    scrub: !0
                                }
                            });
                            e.to(".nav_bar_background", {
                                opacity: .2,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 5), e.to(".logo_svg_icon", {
                                opacity: 0,
                                duration: 5,
                                ease: "power3.inOut"
                            }, 0), e.to(".logo_schrift", {
                                width: "200px",
                                x: -49,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 0);
                            var t = document.querySelector(".iphone_aufnahme_2");

                            function o() {
                                t.style.clipPath = "none", t.offsetWidth, t.style.clipPath = "url(#myClip)"
                            }
                            var a = _.p8.timeline({
                                id: "start_1",
                                scrollTrigger: {
                                    trigger: ".start",
                                    start: "top top",
                                    end: "5000 center",
                                    markers: !1,
                                    pin: !0,
                                    pinReparent: !0,
                                    scrub: 2
                                }
                            });
                            Y.matches ? (a.to(".container_start_background", {
                                backgroundColor: "rgba(242, 242, 247, 1)",
                                duration: 5,
                                ease: "power1.inOut"
                            }, 0), a.to(".start", {
                                backgroundColor: "white",
                                duration: 4,
                                ease: "power1.inOut"
                            }, 10)) : (a.to(".container_start_background", {
                                backgroundColor: "rgba(28, 28, 30, 1)",
                                duration: 5,
                                ease: "power1.inOut"
                            }, 0), a.to(".start", {
                                backgroundColor: "black",
                                duration: 4,
                                ease: "power1.inOut"
                            }, 10)), a.to(".container_start", {
                                borderRadius: "25px",
                                transform: "scale(0.7)",
                                boxShadow: "0px 0px 100px -20px rgba(0,0,0,0.4)",
                                duration: 5,
                                ease: "power1.inOut"
                            }, 0), a.fromTo(".container_start_browser", {
                                y: -100
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 5,
                                ease: "power1.inOut"
                            }, 0), a.to(".container_start", {
                                opacity: .2,
                                duration: 5,
                                ease: "power1.inOut"
                            }, 5), a.to(".container_start_content", {
                                duration: 4,
                                ease: "power1.inOut"
                            }, 10), a.to(".container_lets_get_shit", {
                                opacity: 1,
                                duration: 5,
                                ease: "power1.inOut"
                            }, 5), a.to(".container_lets_get_shit", {
                                display: "block",
                                ease: "power1.inOut"
                            }, 4), a.to(".lets", {
                                opacity: 1,
                                duration: 2,
                                ease: "power1.inOut"
                            }, 11), a.to(".get", {
                                opacity: 1,
                                duration: 2,
                                ease: "power1.inOut"
                            }, 13), a.to(".shit", {
                                opacity: 1,
                                duration: 2,
                                ease: "power1.inOut"
                            }, 15), a.to(".done", {
                                opacity: 1,
                                duration: 2,
                                ease: "power1.inOut"
                            }, 17), a.to(".container_lets_get_shit", {
                                scale: 1.5,
                                duration: 10,
                                ease: "power2.in"
                            }, 17), a.to(".container_lets_get_shit", {
                                scale: 3,
                                duration: 10,
                                ease: "power2.out"
                            }, 27), a.to(".container_start", {
                                scale: .5,
                                duration: 10,
                                ease: "power2.out"
                            }, 27), a.to(".container_lets_get_shit", {
                                duration: 15,
                                ease: "power1.inOut"
                            }, 25), a.to(".container_start", {
                                duration: 15,
                                ease: "power1.inOut"
                            }, 24), a.to(".container_start", {
                                duration: 15,
                                ease: "power1.inOut"
                            }, 24), a.set(".container_phone", {
                                display: "block"
                            }, 30), a.to(".transition_to_phone", {
                                opacity: 1,
                                duration: 10,
                                ease: "power2.out"
                            }, 26), a.to(".container_start", {
                                display: "none"
                            }, 31), a.to(".container_lets_get_shit", {
                                display: "none"
                            }, 31), a.set(".container_phone_content_together", {}, 31), a.fromTo(".iphone_bg_font_container", {
                                opacity: 0,
                                scale: 2.5
                            }, {
                                scale: 1,
                                opacity: 1,
                                duration: 8,
                                ease: "power1.inOut"
                            }, 31), a.to(".iphone_bg_font", {
                                text: {
                                    value: "push beyond imagination.",
                                    newClass: "iphone_bg_font_2"
                                },
                                duration: 8,
                                ease: "power1.inOut"
                            }, 33), a.fromTo(".phone_x_box", {
                                y: 500,
                                scale: 2,
                                opacity: 0
                            }, {
                                y: 0,
                                scale: 1,
                                opacity: 1,
                                duration: 8,
                                ease: "power1.inOut"
                            }, 31), a.fromTo(".iphone_2", {
                                opacity: 0
                            }, {
                                x: -170,
                                scale: 1,
                                opacity: 1,
                                duration: 8,
                                ease: "power1.inOut"
                            }, 38), a.fromTo(".iphone_3", {
                                opacity: 0
                            }, {
                                x: 250,
                                scale: 1,
                                opacity: 1,
                                duration: 8,
                                ease: "power1.inOut"
                            }, 38), a.to(".iphone_bg_font", {
                                opacity: 0,
                                duration: 8,
                                ease: "power1.inOut"
                            }, 44), a.to(".iphone_bg_font_container", {
                                opacity: 0,
                                duration: 8,
                                ease: "power1.inOut"
                            }, 44), a.to(".container_phone_content_together", {
                                duration: 8,
                                ease: "power1.inOut"
                            }, 43), a.fromTo(".iphone_bg_font_2", {
                                opacity: 0,
                                scale: .5
                            }, {
                                opacity: .2,
                                scale: 1,
                                duration: 10,
                                ease: "power1.inOut"
                            }, 43), a.set(".iphone_aufnahme", {
                                opacity: 1,
                                duration: 15,
                                ease: "power1.inOut"
                            }, 45), a.set(".tablet_container", {
                                display: "block"
                            }, 45), a.to(".iphone_2", {
                                x: -300,
                                opacity: 1,
                                duration: 8,
                                ease: "power1.inOut"
                            }, 57), a.to(".iphone_3", {
                                x: 350,
                                opacity: 1,
                                duration: 8,
                                ease: "power1.inOut"
                            }, 57), a.to(".phone_x_box", {
                                rotate: 90,
                                duration: 5,
                                ease: "power1.inOut"
                            }, 60), a.to(".iphone_aufnahme", {
                                opacity: 0,
                                duration: 5,
                                ease: "power1.inOut"
                            }, 60), a.to(".phone_x_box", {
                                scale: 3,
                                opacity: 1,
                                duration: 5.5,
                                ease: "power1.inOut"
                            }, 65), a.set(".iphone_aufnahme_2", {
                                display: "block",
                                width: "100vw",
                                height: "100vh",
                                opacity: 0
                            }, 65), a.set(".iphone_aufnahme_2_player_ui", {
                                display: "block",
                                opacity: 0
                            }, 65), a.to(".iphone_aufnahme_2", {
                                opacity: 1,
                                duration: 2,
                                ease: "power1.inOut"
                            }, 68), a.to(".container_phone_content_together", {
                                display: "none"
                            }, 70), a.add((function() {
                                ue.pause()
                            }), null, 67), a.add((function() {
                                ue.play()
                            }), null, 68), a.to(".iphone_bg_font", {
                                opacity: 0
                            }, 72), a.fromTo(".iphone_aufnahme_2_player_ui", {
                                opacity: 0,
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 5,
                                ease: "power1.inOut"
                            }, 72), a.to(".iphone_bg_font_2", {
                                opacity: 0
                            }, 72), a.to(".iphone_reel_teaser", {
                                opacity: 0
                            }, 72), a.to(".iphone_aufnahme_2", {
                                duration: 20,
                                ease: "power1.inOut"
                            }, 72);
                            var i = window.matchMedia("(min-width:1100px) and (max-width: 1200px)"),
                                r = window.matchMedia("(min-width:1200px) and (max-width: 1300px)"),
                                n = window.matchMedia("(min-width:1300px) and (max-width: 1400px)"),
                                s = window.matchMedia("(min-width:1400px) and (max-width: 1500px)"),
                                p = window.matchMedia("(min-width:1500px) and (max-width: 1600px)"),
                                c = window.matchMedia("(min-width:1600px) and (max-width: 1700px)"),
                                u = window.matchMedia("(min-width:1700px) and (max-width: 1800px)"),
                                d = window.matchMedia("(min-width:1800px) and (max-width: 1900px)"),
                                y = window.matchMedia("(min-width:1900px) and (max-width: 2000px)"),
                                l = window.matchMedia("(min-width:2000px)");
                            i.matches ? a.to(".iphone_aufnahme_2_evolves_mask_logo_path", {
                                scale: 1,
                                translateX: "30vw",
                                translateY: "15vh",
                                duration: 10,
                                ease: "power1.inOut",
                                onUpdate: o
                            }, 90) : r.matches ? a.to(".iphone_aufnahme_2_evolves_mask_logo_path", {
                                scale: 1,
                                translateX: "33vw",
                                translateY: "15vh",
                                duration: 10,
                                ease: "power1.inOut",
                                onUpdate: o
                            }, 90) : n.matches || s.matches ? a.to(".iphone_aufnahme_2_evolves_mask_logo_path", {
                                scale: 1,
                                translateX: "34vw",
                                translateY: "15vh",
                                duration: 10,
                                ease: "power1.inOut",
                                onUpdate: o
                            }, 90) : p.matches ? a.to(".iphone_aufnahme_2_evolves_mask_logo_path", {
                                scale: 1,
                                translateX: "35vw",
                                translateY: "15vh",
                                duration: 10,
                                ease: "power1.inOut",
                                onUpdate: o
                            }, 90) : c.matches ? a.to(".iphone_aufnahme_2_evolves_mask_logo_path", {
                                scale: 1,
                                translateX: "36vw",
                                translateY: "15vh",
                                duration: 10,
                                ease: "power1.inOut",
                                onUpdate: o
                            }, 90) : u.matches ? a.to(".iphone_aufnahme_2_evolves_mask_logo_path", {
                                scale: 1,
                                translateX: "37vw",
                                translateY: "15vh",
                                duration: 10,
                                ease: "power1.inOut",
                                onUpdate: o
                            }, 90) : d.matches ? a.to(".iphone_aufnahme_2_evolves_mask_logo_path", {
                                scale: 1,
                                translateX: "38vw",
                                translateY: "15vh",
                                duration: 10,
                                ease: "power1.inOut",
                                onUpdate: o
                            }, 90) : (y.matches || l.matches) && a.to(".iphone_aufnahme_2_evolves_mask_logo_path", {
                                scale: 1,
                                translateX: "39vw",
                                translateY: "15vh",
                                duration: 10,
                                ease: "power1.inOut",
                                onUpdate: o
                            }, 90), a.to(".iphone_aufnahme_2_player_ui", {
                                opacity: 0,
                                y: 50,
                                duration: 5,
                                ease: "power1.inOut"
                            }, 90), a.to(".iphone_x", {
                                display: "none"
                            }, 90), a.to(".iphone_2", {
                                display: "none"
                            }, 90), a.to(".iphone_3", {
                                display: "none"
                            }, 90), a.to(".iphone_aufnahme_2", {
                                duration: 10,
                                ease: "power1.inOut"
                            }, 100), a.to(".iphone_aufnahme_2", {
                                y: -50,
                                duration: 10,
                                ease: "power1.inOut"
                            }, 110), a.fromTo(".tablet_font", {
                                y: 100,
                                opacity: 0
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 10,
                                ease: "power1.inOut"
                            }, 110), a.add((function() {
                                ue.muted = !0, ue.classList.remove("sound_on"), le.reverse()
                            }), null, 120);
                            var m = _.p8.timeline({
                                id: "digital_devices",
                                paused: !0,
                                repeat: 0,
                                scrollTrigger: {
                                    trigger: ".digital_devices",
                                    start: "300 bottom",
                                    end: "bottom top",
                                    markers: !1,
                                    toggleActions: "play pause resume pause"
                                }
                            });
                            m.fromTo(".digital_devices_picture_container_inner", {
                                opacity: 0,
                                scale: .5,
                                y: 50
                            }, {
                                opacity: 1,
                                duration: 1,
                                scale: 1,
                                y: 0,
                                ease: "power1.inOut"
                            }, 0), m.fromTo(".digital_devices_font", {
                                opacity: 0,
                                y: 50
                            }, {
                                opacity: 1,
                                duration: 2,
                                y: 0,
                                ease: "power1.inOut"
                            }, 0), m.fromTo(".digital_devices_font_change", {
                                opacity: 0
                            }, {
                                opacity: 1,
                                duration: 2,
                                ease: "power1.inOut"
                            }, .25), m.fromTo(".digital_devices_subfont", {
                                opacity: 0
                            }, {
                                opacity: 1,
                                duration: 2,
                                ease: "power1.inOut"
                            }, .5), m.fromTo(".mobile", {
                                opacity: 0,
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 2,
                                ease: "power1.inOut"
                            }, 1), m.fromTo(".tablets", {
                                opacity: 0,
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 2,
                                ease: "power1.inOut"
                            }, 1.25), m.fromTo(".smart_tv", {
                                opacity: 0,
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 2,
                                ease: "power1.inOut"
                            }, 1.5), m.fromTo(".desktop", {
                                opacity: 0,
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 2,
                                ease: "power1.inOut"
                            }, 1.75), m.fromTo(".smart_watch", {
                                opacity: 0,
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 2,
                                ease: "power1.inOut"
                            }, 2), m.fromTo(".smart_car", {
                                opacity: 0,
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 2,
                                ease: "power1.inOut"
                            }, 2.25), m.to(".digital_devices_font_change", {
                                text: {
                                    value: B,
                                    newClass: ".digital_devices_font_change_2"
                                },
                                duration: 2,
                                ease: "power1.inOut"
                            }, 3);
                            var w = _.p8.timeline({
                                id: "weltkarte",
                                paused: !0,
                                repeat: -1,
                                scrollTrigger: {
                                    start: "-500 center",
                                    end: "800 top",
                                    markers: !1,
                                    trigger: ".weltkarte",
                                    toggleActions: "play pause resume reset"
                                }
                            });
                            Y.matches ? w.to("#weltkarte_logo_black", {
                                fill: "black",
                                duration: 2,
                                ease: "power3.inOut"
                            }, 27.5) : w.to("#weltkarte_logo_black", {
                                fill: "white",
                                duration: 2,
                                ease: "power3.inOut"
                            }, 27.5), w.set(".weltkarte_gsap_1", {
                                opacity: 0
                            }, 0), w.set(".weltkarte_gsap_2", {
                                opacity: 0
                            }, 0), w.set(".weltkarte_gsap_3", {
                                opacity: 0
                            }, 0), w.set(".weltkarte_gsap_4", {
                                opacity: 0
                            }, 0), w.set(".weltkarte_gsap_5", {
                                opacity: 0
                            }, 0), w.set("#dot_1", {
                                opacity: 0
                            }, 0), w.set("#dot_1_2", {
                                opacity: 0
                            }, 0), w.set("#dot_2", {
                                opacity: 0
                            }, 0), w.set("#dot_2_2", {
                                opacity: 0
                            }, 0), w.set("#dot_3", {
                                opacity: 0
                            }, 0), w.set("#dot_3_2", {
                                opacity: 0
                            }, 0), w.set("#dot_4", {
                                opacity: 0
                            }, 0), w.set("#dot_4_2", {
                                opacity: 0
                            }, 0), w.set("#dot_5", {
                                opacity: 0
                            }, 0), w.set("#dot_5_2", {
                                opacity: 0
                            }, 0), w.set(".weltkarte_text", {
                                opacity: 0
                            }, 0), w.fromTo(".weltkarte", {
                                opacity: 0
                            }, {
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 0), w.fromTo(".weltkarte_gsap_1", {
                                opacity: 0,
                                y: 50
                            }, {
                                opacity: 1,
                                y: 0,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 2), w.fromTo("#dot_1", {}, {
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 2), w.fromTo("#path_1", {
                                drawSVG: "100% 80%"
                            }, {
                                opacity: 1,
                                duration: 2,
                                drawSVG: "0%"
                            }, 3), w.fromTo("#dot_1_2", {}, {
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 3), w.to("#dot_1", {
                                opacity: 0,
                                duration: 1,
                                ease: "power3.inOut"
                            }, 5), w.to("#dot_1_2", {
                                opacity: 0,
                                duration: 1,
                                ease: "power3.inOut"
                            }, 5), w.to("#path_1", {
                                opacity: 0,
                                duration: 1,
                                ease: "power3.inOut"
                            }, 5), w.to(".weltkarte_gsap_1", {
                                opacity: 0,
                                y: -50,
                                duration: 1,
                                ease: "power3.inOut"
                            }, 5), w.fromTo(".weltkarte_gsap_2", {
                                opacity: 0,
                                y: 50
                            }, {
                                opacity: 1,
                                y: 0,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 7), w.fromTo("#dot_2", {}, {
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 7), w.fromTo("#path_2", {
                                drawSVG: "100% 80%"
                            }, {
                                opacity: 1,
                                duration: 2,
                                drawSVG: "0%"
                            }, 8), w.fromTo("#dot_2_2", {}, {
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 8), w.to("#dot_2", {
                                opacity: 0,
                                duration: 1,
                                ease: "power3.inOut"
                            }, 10), w.to("#dot_2_2", {
                                opacity: 0,
                                duration: 1,
                                ease: "power3.inOut"
                            }, 10), w.to("#path_2", {
                                opacity: 0,
                                duration: 1,
                                ease: "power3.inOut"
                            }, 10), w.to(".weltkarte_gsap_2", {
                                opacity: 0,
                                y: -50,
                                duration: 1,
                                ease: "power3.inOut"
                            }, 10), w.fromTo(".weltkarte_gsap_3", {
                                opacity: 0,
                                y: 50
                            }, {
                                opacity: 1,
                                y: 0,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 12), w.fromTo("#dot_3", {}, {
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 12), w.fromTo("#path_3", {
                                drawSVG: "100% 80%"
                            }, {
                                opacity: 1,
                                duration: 2,
                                drawSVG: "0%"
                            }, 13), w.fromTo("#dot_3_2", {}, {
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 13), w.to("#dot_3", {
                                opacity: 0,
                                duration: 1,
                                ease: "power3.inOut"
                            }, 15), w.to("#dot_3_2", {
                                opacity: 0,
                                duration: 1,
                                ease: "power3.inOut"
                            }, 15), w.to("#path_3", {
                                opacity: 0,
                                duration: 1,
                                ease: "power3.inOut"
                            }, 15), w.to(".weltkarte_gsap_3", {
                                opacity: 0,
                                y: -50,
                                duration: 1,
                                ease: "power3.inOut"
                            }, 15), w.fromTo(".weltkarte_gsap_4", {
                                opacity: 0,
                                y: 50
                            }, {
                                opacity: 1,
                                y: 0,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 17), w.fromTo("#dot_4", {}, {
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 17), w.fromTo("#path_4", {
                                drawSVG: "100% 80%"
                            }, {
                                opacity: 1,
                                duration: 2,
                                drawSVG: "0%"
                            }, 18), w.fromTo("#dot_4_2", {}, {
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 18), w.to("#dot_4", {
                                opacity: 0,
                                duration: 1,
                                ease: "power3.inOut"
                            }, 20), w.to("#dot_4_2", {
                                opacity: 0,
                                duration: 1,
                                ease: "power3.inOut"
                            }, 20), w.to("#path_4", {
                                opacity: 0,
                                duration: 1,
                                ease: "power3.inOut"
                            }, 20), w.to(".weltkarte_gsap_4", {
                                opacity: 0,
                                y: -50,
                                duration: 1,
                                ease: "power3.inOut"
                            }, 20), w.fromTo(".weltkarte_gsap_5", {
                                opacity: 0,
                                y: 50
                            }, {
                                opacity: 1,
                                y: 0,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 22), w.fromTo("#dot_5", {}, {
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 22), w.fromTo("#path_5", {
                                drawSVG: "100% 80%"
                            }, {
                                opacity: 1,
                                duration: 2,
                                drawSVG: "0%"
                            }, 23), w.fromTo("#dot_5_2", {}, {
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 23), w.to("#dot_5", {
                                opacity: 0,
                                duration: 1,
                                ease: "power3.inOut"
                            }, 25), w.to("#dot_5_2", {
                                opacity: 0,
                                duration: 1,
                                ease: "power3.inOut"
                            }, 25), w.to("#path_5", {
                                opacity: 0,
                                duration: 1,
                                ease: "power3.inOut"
                            }, 25), w.to(".weltkarte_gsap_5", {
                                opacity: 0,
                                y: -50,
                                duration: 1,
                                ease: "power3.inOut"
                            }, 25), w.to(".weltkarte_picture", {
                                opacity: 0,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 24.5), w.to(".weltkarte_dots", {
                                opacity: 0,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 24.5), w.fromTo("#weltkarte_logo_black", {
                                opacity: 0,
                                scale: .5
                            }, {
                                scale: 1,
                                opacity: 1,
                                duration: 3,
                                ease: "power3.inOut"
                            }, 24.5), w.fromTo(".logo_path_1", {
                                drawSVG: "0%"
                            }, {
                                drawSVG: "100%",
                                duration: 5,
                                ease: "power3.inOut"
                            }, 24.5), w.to("#weltkarte_logo_black", {
                                y: -150,
                                scale: .5,
                                duration: 3,
                                ease: "power3.inOut"
                            }, 28), w.fromTo(".weltkarte_text", {
                                opacity: 0,
                                scale: .5
                            }, {
                                scale: 1,
                                opacity: 1,
                                duration: 3,
                                ease: "power3.inOut"
                            }, 28), w.fromTo(".weltkarte_subhead", {
                                opacity: 0,
                                y: -50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 30), w.to(".weltkarte", {
                                scale: 1,
                                opacity: 0,
                                duration: 1,
                                ease: "power3.inOut"
                            }, 37);
                            var f = _.p8.timeline({
                                id: "talents_entry",
                                paused: !0,
                                repeat: 0,
                                scrollTrigger: {
                                    start: "-30% center",
                                    end: "0 top",
                                    markers: !1,
                                    trigger: ".philosophy"
                                }
                            });
                            f.fromTo(".philosophy_row_left_heading", {
                                y: -50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 0), f.fromTo(".philosophy_row_right_heading", {
                                opacity: 0,
                                x: 300
                            }, {
                                x: 0,
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 0), f.fromTo(".philosophy_row_right_text", {
                                opacity: 0,
                                x: 300
                            }, {
                                x: 0,
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 0);
                            var h = _.p8.timeline({
                                id: "talents_guys",
                                paused: !0,
                                repeat: 0,
                                scrollTrigger: {
                                    start: "-500 center",
                                    end: "1000 top",
                                    markers: !1,
                                    trigger: ".talents"
                                }
                            });
                            h.fromTo(".one_talent", {
                                y: 50,
                                opacity: 0
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 1.5,
                                ease: "power3.inOut"
                            }, 0), h.fromTo(".two_talent", {
                                y: 50,
                                opacity: 0
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 1.5,
                                ease: "power3.inOut"
                            }, .25), h.fromTo(".three_talent", {
                                y: 50,
                                opacity: 0
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 1.5,
                                ease: "power3.inOut"
                            }, .5), h.fromTo(".four_talent", {
                                y: 50,
                                opacity: 0
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 1.5,
                                ease: "power3.inOut"
                            }, .75), h.fromTo(".five_talent", {
                                y: 50,
                                opacity: 0
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 1.5,
                                ease: "power3.inOut"
                            }, 1), h.fromTo(".six_talent", {
                                y: 50,
                                opacity: 0
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 1.5,
                                ease: "power3.inOut"
                            }, 1.25), h.fromTo(".founders_heading", {
                                y: 100
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 2), h.fromTo(".founders_text", {
                                y: 100
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 2), h.fromTo(".steve", {
                                y: 50,
                                opacity: 0
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 3,
                                ease: "power3.inOut"
                            }, 2), _.p8.timeline({
                                scrollTrigger: {
                                    start: "-500 center",
                                    end: "350 top",
                                    markers: !1,
                                    trigger: ".scrolling_text",
                                    scrub: 1
                                }
                            }).fromTo(".scrolling_text", {
                                opacity: 1,
                                x: 1e3
                            }, {
                                x: -1500,
                                opacity: 1,
                                duration: 15
                            }, 0);
                            var g = _.p8.timeline({
                                id: "case_1",
                                scrollTrigger: {
                                    start: "0 top",
                                    end: "9500 top",
                                    markers: !1,
                                    trigger: ".case_studies",
                                    pin: !0,
                                    pinReparent: !0,
                                    scrub: 2
                                }
                            });
                            g.to(".scrolling_text_container", {
                                y: -200,
                                opacity: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 10), g.fromTo(".case_studies_projects_item_first", {
                                scale: .5,
                                y: 600,
                                opacity: 0
                            }, {
                                scale: 1,
                                y: 0,
                                opacity: 1,
                                duration: 20,
                                ease: "power3.inOut"
                            }, 0), g.fromTo(".evolves_logo_black_2", {
                                drawSVG: "0%"
                            }, {
                                drawSVG: "100%",
                                duration: 10,
                                ease: "power3.inOut"
                            }, 12), g.fromTo(".case_studies_projects_item_image_first_one", {
                                x: -200,
                                scale: .5,
                                y: 800
                            }, {
                                x: 0,
                                scale: 1,
                                y: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 12), g.fromTo(".case_studies_projects_item_image_first_one_second", {
                                x: 200,
                                scale: .5,
                                y: 800
                            }, {
                                x: 0,
                                scale: 1,
                                y: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 13), g.fromTo(".case_studies_projects_item_logo_first", {
                                scale: .5
                            }, {
                                scale: 1,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 35), g.fromTo(".case_studies_projects_item_categories_first", {
                                y: -20
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 35), g.to(".case_studies_projects_item_image_first_one", {
                                x: 200,
                                scale: 1.5,
                                y: -700,
                                opacity: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 25), g.to(".case_studies_projects_item_image_first_one_second", {
                                x: -200,
                                scale: 1.5,
                                y: -700,
                                opacity: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 26), g.to(".evolves_logo_black_2", {
                                drawSVG: "0%",
                                duration: 10,
                                ease: "power3.inOut"
                            }, 25), g.fromTo(".case_studies_background_evolves_first", {
                                opacity: 0,
                                scale: .5
                            }, {
                                scale: 1,
                                opacity: .15,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 30), g.fromTo(".case_studies_projects_item_image_first_two", {
                                x: 100,
                                scale: .75
                            }, {
                                opacity: 1,
                                x: 0,
                                scale: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 30), g.fromTo(".case_studies_projects_item_image_first_two_second", {
                                transform: "rotate(0deg)"
                            }, {
                                x: -73,
                                transform: "rotate(-17deg)",
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 35), g.fromTo(".case_studies_projects_item_description_first", {
                                y: -50,
                                opacity: 0
                            }, {
                                opacity: 1,
                                y: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 35), g.fromTo(".case_studies_projects_item_cta_first", {
                                x: -25,
                                opacity: 0
                            }, {
                                opacity: 1,
                                x: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 35), g.fromTo(".case_studies_projects_item_cta_icon_first", {
                                x: -25,
                                opacity: 0
                            }, {
                                opacity: 1,
                                x: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 35), g.to(".case_studies_projects_item_first", {
                                duration: 40,
                                ease: "power3.inOut"
                            }, 40), g.to(".case_studies_projects_item_first", {
                                scale: .75,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 80), g.to(".case_studies_projects_wrapper_second", {
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 80), g.fromTo(".case_studies_projects_item_second", {
                                display: "block",
                                x: "100%",
                                scale: .8
                            }, {
                                x: "0%",
                                scale: 1,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 80), g.fromTo(".case_studies_project_item_background_second", {
                                opacity: .3
                            }, {
                                opacity: .9,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 80), g.fromTo(".evolves_logo_black_2", {
                                drawSVG: "0%"
                            }, {
                                drawSVG: "100%",
                                duration: 10,
                                ease: "power3.inOut"
                            }, 92), g.fromTo(".case_studies_projects_item_image_second_one", {
                                x: -200,
                                scale: .5,
                                y: 800
                            }, {
                                x: 0,
                                scale: 1,
                                y: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 92), g.fromTo(".case_studies_projects_item_image_second_one_second", {
                                x: 200,
                                scale: .5,
                                y: 800
                            }, {
                                x: 0,
                                scale: 1,
                                y: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 93), g.fromTo(".case_studies_projects_item_logo_second", {
                                scale: .5
                            }, {
                                scale: 1,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 115), g.fromTo(".case_studies_projects_item_categories_second", {
                                y: -20
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 115), g.to(".case_studies_projects_item_image_second_one", {
                                x: 200,
                                scale: 1.5,
                                y: -700,
                                opacity: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 105), g.to(".case_studies_projects_item_image_second_one_second", {
                                x: -200,
                                scale: 1.5,
                                y: -700,
                                opacity: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 106), g.to(".evolves_logo_black_2", {
                                drawSVG: "0%",
                                duration: 10,
                                ease: "power3.inOut"
                            }, 105), g.fromTo(".case_studies_background_evolves_second", {
                                opacity: 0,
                                scale: .5
                            }, {
                                scale: 1,
                                opacity: .15,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 110), g.fromTo(".case_studies_projects_item_image_second_two", {
                                x: 100,
                                scale: .75
                            }, {
                                opacity: 1,
                                x: 0,
                                scale: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 110), g.fromTo(".case_studies_projects_item_image_second_two_second", {
                                transform: "rotate(0deg)"
                            }, {
                                x: -73,
                                transform: "rotate(-17deg)",
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 115), g.fromTo(".case_studies_projects_item_description_second", {
                                y: -50,
                                opacity: 0
                            }, {
                                opacity: 1,
                                y: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 115), g.fromTo(".case_studies_projects_item_cta_second", {
                                x: -25,
                                opacity: 0
                            }, {
                                opacity: 1,
                                x: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 115), g.fromTo(".case_studies_projects_item_cta_icon_second", {
                                x: -25,
                                opacity: 0
                            }, {
                                opacity: 1,
                                x: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 115), g.to(".case_studies_projects_item_second", {
                                duration: 40,
                                ease: "power3.inOut"
                            }, 120), g.to(".case_studies_projects_item_first", {
                                scale: .5,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 160), g.to(".case_studies_projects_item_second", {
                                scale: .75,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 160), g.to(".case_studies_projects_wrapper_third", {
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 160), g.fromTo(".case_studies_projects_item_third", {
                                display: "block",
                                x: "100%",
                                scale: .8
                            }, {
                                x: "0%",
                                scale: 1,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 160), g.fromTo(".case_studies_project_item_background_third", {
                                opacity: .3
                            }, {
                                opacity: .9,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 160), g.fromTo(".evolves_logo_black_2", {
                                drawSVG: "0%"
                            }, {
                                drawSVG: "100%",
                                duration: 10,
                                ease: "power3.inOut"
                            }, 172), g.fromTo(".case_studies_projects_item_image_third_one", {
                                x: -200,
                                scale: .5,
                                y: 800
                            }, {
                                x: 0,
                                scale: 1,
                                y: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 172), g.fromTo(".case_studies_projects_item_image_third_one_second", {
                                x: 200,
                                scale: .5,
                                y: 800
                            }, {
                                x: 0,
                                scale: 1,
                                y: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 173), g.fromTo(".case_studies_projects_item_logo_third", {
                                scale: .5
                            }, {
                                scale: 1,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 195), g.fromTo(".case_studies_projects_item_categories_third", {
                                y: -20
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 195), g.to(".case_studies_projects_item_image_third_one", {
                                x: 200,
                                scale: 1.5,
                                y: -700,
                                opacity: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 185), g.to(".case_studies_projects_item_image_third_one_second", {
                                x: -200,
                                scale: 1.5,
                                y: -700,
                                opacity: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 186), g.to(".evolves_logo_black_2", {
                                drawSVG: "0%",
                                duration: 10,
                                ease: "power3.inOut"
                            }, 185), g.fromTo(".case_studies_background_evolves_third", {
                                opacity: 0,
                                scale: .5
                            }, {
                                scale: 1,
                                opacity: .15,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 190), g.fromTo(".case_studies_projects_item_image_third_two", {
                                x: 100,
                                scale: .75
                            }, {
                                opacity: 1,
                                x: 0,
                                scale: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 190), g.fromTo(".case_studies_projects_item_image_third_two_second", {
                                transform: "rotate(0deg)"
                            }, {
                                x: -73,
                                transform: "rotate(-17deg)",
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 195), g.fromTo(".case_studies_projects_item_description_third", {
                                y: -50,
                                opacity: 0
                            }, {
                                opacity: 1,
                                y: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 195), g.fromTo(".case_studies_projects_item_cta_third", {
                                x: -25,
                                opacity: 0
                            }, {
                                opacity: 1,
                                x: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 195), g.fromTo(".case_studies_projects_item_cta_icon_third", {
                                x: -25,
                                opacity: 0
                            }, {
                                opacity: 1,
                                x: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 195), g.to(".case_studies_projects_item_third", {
                                duration: 40,
                                ease: "power3.inOut"
                            }, 200), g.to(".case_studies_projects_item_first", {
                                scale: .25,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 240), g.to(".case_studies_projects_item_second", {
                                scale: .5,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 240), g.to(".case_studies_projects_item_third", {
                                scale: .75,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 240), g.to(".case_studies_projects_wrapper_fourth", {
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 240), g.fromTo(".case_studies_projects_item_fourth", {
                                display: "block",
                                x: "100%",
                                scale: .8
                            }, {
                                x: "0%",
                                scale: 1,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 240), g.fromTo(".case_studies_project_item_background_fourth", {
                                opacity: .3
                            }, {
                                opacity: .9,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 240), g.fromTo(".evolves_logo_black_2", {
                                drawSVG: "0%"
                            }, {
                                drawSVG: "100%",
                                duration: 10,
                                ease: "power3.inOut"
                            }, 252), g.fromTo(".case_studies_projects_item_image_fourth_one", {
                                x: -200,
                                scale: .5,
                                y: 800
                            }, {
                                x: 0,
                                scale: 1,
                                y: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 252), g.fromTo(".case_studies_projects_item_image_fourth_one_second", {
                                x: 200,
                                scale: .5,
                                y: 800
                            }, {
                                x: 0,
                                scale: 1,
                                y: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 253), g.fromTo(".case_studies_projects_item_logo_fourth", {
                                scale: .5
                            }, {
                                scale: 1,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 275), g.fromTo(".case_studies_projects_item_categories_fourth", {
                                y: -20
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 275), g.to(".case_studies_projects_item_image_fourth_one", {
                                x: 200,
                                scale: 1.5,
                                y: -700,
                                opacity: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 265), g.to(".case_studies_projects_item_image_fourth_one_second", {
                                x: -200,
                                scale: 1.5,
                                y: -700,
                                opacity: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 266), g.to(".evolves_logo_black_2", {
                                drawSVG: "0%",
                                duration: 10,
                                ease: "power3.inOut"
                            }, 265), g.fromTo(".case_studies_background_evolves_fourth", {
                                opacity: 0,
                                scale: .5
                            }, {
                                scale: 1,
                                opacity: .15,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 270), g.fromTo(".case_studies_projects_item_image_fourth_two", {
                                x: 100,
                                scale: .75
                            }, {
                                opacity: 1,
                                x: 0,
                                scale: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 270), g.fromTo(".case_studies_projects_item_image_fourth_two_second", {
                                transform: "rotate(0deg)"
                            }, {
                                x: -73,
                                transform: "rotate(-17deg)",
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 275), g.fromTo(".case_studies_projects_item_description_fourth", {
                                y: -50,
                                opacity: 0
                            }, {
                                opacity: 1,
                                y: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 275), g.fromTo(".case_studies_projects_item_cta_fourth", {
                                x: -25,
                                opacity: 0
                            }, {
                                opacity: 1,
                                x: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 275), g.fromTo(".case_studies_projects_item_cta_icon_fourth", {
                                x: -25,
                                opacity: 0
                            }, {
                                opacity: 1,
                                x: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 275), g.to(".case_studies_projects_item_fourth", {
                                duration: 40,
                                ease: "power3.inOut"
                            }, 280), g.to(".case_studies_projects_item_fourth", {
                                opacity: 0,
                                scale: .75,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 310), g.to(".case_studies_projects_item_third", {
                                opacity: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 312), g.to(".case_studies_projects_item_second", {
                                opacity: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 314), g.to(".case_studies_projects_item_first", {
                                scale: .5,
                                y: "-27%",
                                x: "-26%",
                                duration: 10,
                                ease: "power3.inOut"
                            }, 317), g.set(".case_studies_projects_item_second", {
                                opacity: 0,
                                y: "-27%",
                                x: "26%",
                                scale: .5,
                                duration: 1,
                                ease: "power3.inOut"
                            }, 324), g.set(".case_studies_projects_item_third", {
                                opacity: 0,
                                y: "27%",
                                x: "-26%",
                                scale: .5,
                                duration: 1,
                                ease: "power3.inOut"
                            }, 324), g.set(".case_studies_projects_item_fourth", {
                                opacity: 0,
                                y: "27%",
                                x: "26%",
                                scale: .5,
                                duration: 1,
                                ease: "power3.inOut"
                            }, 324), g.to(".case_studies_projects_item_second", {
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 324), g.to(".case_studies_projects_item_third", {
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 328), g.to(".case_studies_projects_item_fourth", {
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 332);
                            var O = _.p8.timeline({
                                id: "power_digital",
                                scrollTrigger: {
                                    start: "0 top",
                                    end: "2000 top",
                                    markers: !1,
                                    trigger: ".services",
                                    scrub: 1,
                                    pin: !0,
                                    pinReparent: !0
                                }
                            });
                            O.fromTo(".first_container_inner_main_subhead", {
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 2), O.fromTo(".first_container_inner_main_text", {
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 0), O.fromTo(".first_container_inner_second_text", {
                                y: 25
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 3), O.to(".first_container_inner_main_text", {
                                opacity: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 10), O.to(".first_container_inner_second_text", {
                                opacity: 0,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 10), O.to(".first_container_inner_main_subhead", {
                                text: {
                                    value: "with Humble.",
                                    delimiter: " "
                                },
                                y: 250,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 12), O.fromTo(".first_container_inner_image_container", {
                                opacity: 0
                            }, {
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 12), O.to(".first_container_inner_image_container", {
                                duration: 10
                            }, 17);
                            var b = _.p8.timeline({
                                id: "paper_plane_gsap",
                                scrollTrigger: {
                                    start: "1600 center",
                                    end: "3000 bottom",
                                    markers: !1,
                                    trigger: ".second_container",
                                    scrub: 2
                                }
                            });
                            b.fromTo(".second_container_inner_left_desktop .icon_second_container", {
                                scale: .5,
                                opacity: 0
                            }, {
                                scale: 1,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 0), b.fromTo(".second_container_inner_left_desktop .heading_small", {
                                opacity: 0,
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, .5), b.fromTo(".second_container_inner_left_desktop .heading", {
                                opacity: 0,
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 1), b.fromTo(".second_container_inner_left_desktop .subheading", {
                                opacity: 0,
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 1.5), b.fromTo(".second_container_inner_right_desktop", {
                                opacity: 0,
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 3);
                            var v = _.p8.timeline({
                                id: "paper_plane_gsap_2",
                                scrollTrigger: {
                                    start: "1600 center",
                                    end: "3000 bottom",
                                    markers: !1,
                                    trigger: ".third_container",
                                    scrub: 2
                                }
                            });
                            v.fromTo(".third_container_inner_right_desktop .icon_third_container", {
                                scale: .5,
                                opacity: 0
                            }, {
                                scale: 1,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 0), v.fromTo(".third_container_inner_right_desktop .heading_small", {
                                opacity: 0,
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, .5), v.fromTo(".third_container_inner_right_desktop .heading", {
                                opacity: 0,
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 1), v.fromTo(".third_container_inner_right_desktop .subheading", {
                                opacity: 0,
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 1.5), v.fromTo(".third_container_inner_left_desktop", {
                                opacity: 0,
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 3);
                            var T = _.p8.timeline({
                                id: "paper_plane_gsap_3",
                                scrollTrigger: {
                                    start: "1600 center",
                                    end: "3000 bottom",
                                    markers: !1,
                                    trigger: ".fourth_container",
                                    scrub: 2
                                }
                            });
                            T.fromTo(".fourth_container_inner_left_desktop .icon_fourth_container", {
                                scale: .5,
                                opacity: 0
                            }, {
                                scale: 1,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 0), T.fromTo(".fourth_container_inner_left_desktop .heading_small", {
                                opacity: 0,
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, .5), T.fromTo(".fourth_container_inner_left_desktop .heading", {
                                opacity: 0,
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 1), T.fromTo(".fourth_container_inner_left_desktop .subheading", {
                                opacity: 0,
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 1.5), T.fromTo(".fourth_container_inner_right_desktop", {
                                opacity: 0,
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 3);
                            var x = _.p8.timeline({
                                id: "laptop_anim",
                                scrollTrigger: {
                                    start: "0 top",
                                    end: "0 bottom",
                                    pin: !0,
                                    pinReparent: !0,
                                    markers: !1,
                                    trigger: ".laptop_anim",
                                    scrub: 2
                                }
                            });
                            x.to(".services", {
                                duration: 20,
                                ease: "power3.inOut"
                            }, 0), x.fromTo(".lottie_heart", {
                                y: 100
                            }, {
                                opacity: 1,
                                y: 0,
                                duration: 20,
                                ease: "power3.inOut"
                            }, 7), x.fromTo(".laptop_anim_upper_inner_font", {
                                y: 100
                            }, {
                                opacity: 1,
                                y: 0,
                                duration: 20,
                                ease: "power3.inOut"
                            }, 10), x.add((function() {
                                document.getElementById("heart_lottie").play()
                            }), null, 15), x.to(".lottie_heart", {
                                y: -100,
                                opacity: 0,
                                duration: 20,
                                ease: "power3.inOut"
                            }, 45), x.to(".laptop_anim_upper_inner_font", {
                                y: -100,
                                opacity: 0,
                                duration: 20,
                                ease: "power3.inOut"
                            }, 48), x.fromTo("#laptop_anim_inner_canvas", {
                                y: 50
                            }, {
                                y: -50,
                                opacity: 1,
                                duration: 5,
                                ease: "power3.inOut"
                            }, 10), x.to(re, {
                                duration: 60,
                                frame: 194,
                                snap: "frame",
                                onUpdate: ee
                            }, 63), x.to("#laptop_anim_inner_canvas", {
                                duration: 40,
                                ease: "power3.inOut"
                            }, 110), x.to(".laptop_anim_upper_inner_second", {
                                opacity: 1,
                                duration: 40,
                                ease: "power3.inOut"
                            }, 110), x.fromTo("#laptop_anim_upper_inner_second_logo", {
                                y: 100
                            }, {
                                y: 0,
                                duration: 40,
                                ease: "power3.inOut"
                            }, 110), x.fromTo(".laptop_anim_upper_inner_second_logo_svg", {
                                drawSVG: "0%"
                            }, {
                                drawSVG: "100%",
                                duration: 40,
                                ease: "power3.inOut"
                            }, 120), x.to(".laptop_anim_upper_inner_second", {
                                y: -300,
                                duration: 40,
                                ease: "power3.inOut"
                            }, 160), 
                            // x.to(".laptop_anim_inner", {
                            //     y: -300,
                            //     duration: 40,
                            //     ease: "power3.inOut"
                            // }, 160),
                             x.to(".laptop_anim_upper_inner_second", {
                                opacity: 0,
                                duration: 40,
                                ease: "power3.inOut"
                            }, 160), x.fromTo(".laptop_anim_upper_inner_third_font", {
                                y: 150,
                                opacity: 0
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 40,
                                ease: "power3.inOut"
                            }, 165);
                            // var k = _.p8.timeline({
                            //     id: "laptop_anim_second",
                            //     scrollTrigger: {
                            //         start: "5000 center",
                            //         end: "6800 bottom",
                            //         markers: !1,
                            //         trigger: ".laptop_anim_upper_inner_third",
                            //         scrub: 2
                            //     }
                            // });
                            k.fromTo(".laptop_anim_upper_inner_third_subhead", {
                                opacity: 0,
                                y: 100
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 40,
                                ease: "power3.inOut"
                            }, 0), k.to("body", {
                                duration: 40,
                                ease: "power3.inOut"
                            }, 30), 
                            // k.to(".laptop_anim_inner", {
                            //     duration: 20,
                            //     ease: "power3.inOut"
                            // }, 20),
                             k.to(".laptop_anim_upper_inner_third_subhead", {
                                duration: 40,
                                ease: "power3.inOut"
                            }, 30);
                            var j = _.p8.timeline({
                                id: "aspects_second_l",
                                scrollTrigger: {
                                    start: "0 center",
                                    end: "1000 bottom",
                                    markers: !1,
                                    trigger: ".aspects_inner_container_second_l",
                                    scrub: 1
                                }
                            });
                            j.to(".aspects_logo", {
                                morphSVG: ".aspects_lock_icon",
                                duration: 20,
                                ease: "power3.inOut"
                            }, 0), j.to(".protected_animation", {
                                duration: 40,
                                text: {
                                    value: V
                                },
                                ease: "power3.inOut"
                            }, 5), j.fromTo(".protected_animation_2", {
                                opacity: 0
                            }, {
                                opacity: 1,
                                duration: 10,
                                ease: "power3.inOut"
                            }, 30);
                            var S = _.p8.timeline({
                                id: "aspects_first",
                                scrollTrigger: {
                                    start: "-300 center",
                                    end: "850 bottom",
                                    markers: !1,
                                    trigger: ".aspects_inner_container_first",
                                    scrub: 1
                                }
                            });
                            Y.matches ? S.fromTo(".aspects_inner_container_first_box_background", {
                                opacity: 0
                            }, {
                                opacity: 1,
                                duration: 40,
                                ease: "power3.inOut"
                            }, 0) : S.fromTo(".aspects_inner_container_first_box_background", {
                                opacity: 0
                            }, {
                                opacity: .4,
                                duration: 40,
                                ease: "power3.inOut"
                            }, 0), S.fromTo(".aspects_inner_container_first_box_heading", {
                                scale: .8,
                                opacity: 0
                            }, {
                                scale: 1,
                                opacity: 1,
                                duration: 20,
                                ease: "power3.inOut"
                            }, 20), S.fromTo(".aspects_inner_container_first_box_subheading", {
                                y: 100,
                                opacity: 0
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 20,
                                ease: "power3.inOut"
                            }, 25);
                            var C = _.p8.timeline({
                                id: "day_night_element",
                                paused: !0,
                                scrollTrigger: {
                                    start: "150 center",
                                    end: "bottom bottom",
                                    markers: !1,
                                    trigger: ".aspects_inner_container_fifth_r"
                                }
                            });
                            C.to(".aspects_inner_container_fifth_r_box_content_main", {
                                opacity: 0,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 0), C.fromTo(".aspects_inner_container_fifth_r_box_image_day", {
                                scale: .75,
                                opacity: 0
                            }, {
                                opacity: 1,
                                scale: 1,
                                duration: 3,
                                ease: "power3.inOut"
                            }, 0), C.to(".aspects_inner_container_fifth_r_box_image_day", {
                                duration: 2,
                                ease: "power3.inOut"
                            }, 2), C.to(".aspects_inner_container_fifth_r_box_content_day", {
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 2), C.fromTo(".day_mode_icon", {
                                opacity: 0,
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 2), C.fromTo(".day_mode_heading", {
                                opacity: 0,
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 2.5), C.to(".aspects_inner_container_fifth_r_box_day", {
                                opacity: 0,
                                duration: 2.5,
                                ease: "power3.inOut"
                            }, 4), C.to(".aspects_inner_container_fifth_r_box_background_main", {
                                backgroundColor: "#000000",
                                duration: 2.5,
                                ease: "power3.inOut"
                            }, 4), C.set(".aspects_inner_container_fifth_r_box_night", {
                                display: "block",
                                ease: "power3.inOut"
                            }, 4), C.fromTo(".aspects_inner_container_fifth_r_box_image_night", {
                                scale: .75,
                                opacity: 0
                            }, {
                                opacity: 1,
                                scale: 1,
                                duration: 2.5,
                                ease: "power3.inOut"
                            }, 4), C.set(".aspects_inner_container_fifth_r_box_day", {
                                display: "none",
                                ease: "power3.inOut"
                            }, 6.5), C.to(".aspects_inner_container_fifth_r_box_image_night", {
                                duration: 2,
                                ease: "power3.inOut"
                            }, 6.5), C.to(".aspects_inner_container_fifth_r_box_content_night", {
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 6.5), C.fromTo(".night_mode_icon", {
                                opacity: 0,
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 6.5), C.fromTo(".night_mode_heading", {
                                opacity: 0,
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 7), C.to(".aspects_inner_container_fifth_r_box_night", {
                                opacity: 0,
                                duration: 2.5,
                                ease: "power3.inOut"
                            }, 10), C.to(".aspects_inner_container_fifth_r_box_background_main", {
                                backgroundColor: "rgba(28, 28, 30, 1)",
                                duration: 2.5,
                                ease: "power3.inOut"
                            }, 10), C.to(".aspects_inner_container_fifth_r_box_content_main", {
                                opacity: 1,
                                duration: 2.5,
                                ease: "power3.inOut"
                            }, 11), window.repeat_day_night_animation = function() {
                                C.restart()
                            };
                            var G = _.p8.timeline({
                                id: "sticker_element",
                                paused: !0,
                                scrollTrigger: {
                                    start: "150 center",
                                    end: "bottom bottom",
                                    markers: !1,
                                    trigger: ".aspects_inner_container_second_r"
                                }
                            });
                            G.fromTo(".aspects_inner_container_second_r_box_heading", {
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 3,
                                ease: "power3.inOut"
                            }, 0), G.to(".aspects_inner_container_second_r_box_link", {
                                opacity: 1,
                                duration: 3,
                                ease: "power3.inOut"
                            }, 2), G.to(".aspects_inner_container_second_r_box_stickers_one", {
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 0), G.to(".aspects_inner_container_second_r_box_stickers_second", {
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, .5), G.to(".aspects_inner_container_second_r_box_stickers_third", {
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 1), G.to(".aspects_inner_container_second_r_box_stickers_fourth", {
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 1.5), G.to(".aspects_inner_container_second_r_box_stickers_fifth", {
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 2), G.to(".aspects_inner_container_second_r_box_stickers_sixth", {
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 2.5);
                            var E = _.p8.timeline({
                                id: "react_speed",
                                paused: !0,
                                scrollTrigger: {
                                    start: "150 center",
                                    end: "bottom bottom",
                                    markers: !1,
                                    trigger: ".aspects_inner_container_fifth_l"
                                }
                            });
                            E.fromTo(".aspects_inner_container_fifth_l_box_content h3", {
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 0), E.fromTo(".react_logo_container", {}, {
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 1), E.fromTo(".fifth_p1", {
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                duration: 2,
                                ease: "power3.inOut"
                            }, 2), E.to(".aspects_inner_container_fifth_l_box_background", {
                                filter: "brightness(.6)",
                                duration: 2,
                                ease: "power3.inOut"
                            }, 2), _.p8.timeline({
                                id: "footer_anim",
                                paused: !0,
                                scrollTrigger: {
                                    start: "80% center",
                                    end: "130% bottom",
                                    markers: !1,
                                    trigger: ".aspects",
                                    scrub: 1
                                }
                            }).to(".aspects", {
                                scale: .9,
                                duration: 10,
                                opacity: .2,
                                ease: "power3.inOut"
                            }, 0)
                        })), b(document).ready((function(e) {
                            for (var t = [], o = [4, 6, 8, 10], a = 0; a < e(".bubbles").width(); a++) t.push(a);

                            function i(e) {
                                return e[Math.floor(Math.random() * e.length)]
                            }
                            setInterval((function() {
                                var a = i(o);
                                e(".bubbles").append('<div class="individual-bubble" style="left: '.concat(i(t), "px; width: ").concat(a, "px; height:").concat(a, 'px;"></div>')), e(".individual-bubble").animate({
                                    bottom: "100%",
                                    opacity: "-=0.7"
                                }, 3e3, (function() {
                                    e(this).remove()
                                }))
                            }), 350)
                        }))
                    }
                } else if (U.matches) {
                    var we = function() {
                        Se.clearRect(0, 0, je.width, je.height), Se.drawImage(Ce[Ge.frame], 0, 0)
                    };
                    r()(document).ready((function() {
                        var e, t, o, a, i, r;
                        e = document.getElementById("second_container_inner_icon_video_content_desktop"), t = document.createElement("source"), Y.matches ? t.setAttribute("src", "assets/video/scene4_light_premiere.mp4") : t.setAttribute("src", "assets/video/scene4_dark_premiere.mp4"), e.appendChild(t), o = document.getElementById("third_container_inner_icon_video_content_desktop"), a = document.createElement("source"), Y.matches ? a.setAttribute("src", "assets/video/scene2_light_premiere.mp4") : a.setAttribute("src", "assets/video/scene2_dark_premiere.mp4"), o.appendChild(a), i = document.getElementById("fourth_container_inner_icon_video_content_desktop"), r = document.createElement("source"), Y.matches ? r.setAttribute("src", "assets/video/scene3_light_premiere.mp4") : r.setAttribute("src", "assets/video/scene3_dark_premiere.mp4"), i.appendChild(r),
                            function() {
                                if (s().get("entry_animation", "played")) {
                                    var e = _.p8.timeline({
                                        id: "home_entry_animation",
                                        paused: !0
                                    });
                                    e.set(".pre_entry_animation", {
                                        display: "none"
                                    }, 0), e.to("main", {
                                        opacity: 1,
                                        duration: 2,
                                        ease: "power3.inOut"
                                    }, 0), e.to(".logo_bar", {
                                        opacity: 1,
                                        duration: 2,
                                        ease: "power3.inOut"
                                    }, 0), e.to(".menu_bar", {
                                        opacity: 1,
                                        duration: 2,
                                        ease: "power3.inOut"
                                    }, 0), e.to(".nav_bar", {
                                        opacity: 1,
                                        duration: 2,
                                        ease: "power3.inOut"
                                    }, 0), e.play()
                                } else {
                                    var t = _.p8.timeline({
                                        id: "pre_entry_animation",
                                        paused: !0
                                    });
                                    t.to(".pre_entry_animation", {
                                        opacity: 1,
                                        duration: .1
                                    }, 0), t.fromTo(".pre_entry_animation_heading_first", {
                                        y: 50
                                    }, {
                                        y: 0,
                                        opacity: 1,
                                        duration: 5,
                                        ease: "power3.inOut"
                                    }, 0), t.add((function() {
                                        Be.play()
                                    }), null, 5), t.to(".pre_entry_animation_heading_first", {
                                        opacity: 0,
                                        duration: 1,
                                        ease: "power3.inOut"
                                    }, 5), t.to(".pre_entry_animation_video", {
                                        opacity: 1,
                                        duration: 2,
                                        ease: "power3.inOut"
                                    }, 4), t.to("main", {
                                        opacity: 1,
                                        duration: 3,
                                        ease: "power3.inOut"
                                    }, 7), t.to(".logo_bar", {
                                        opacity: 1,
                                        duration: 3,
                                        ease: "power3.inOut"
                                    }, 7), t.to(".menu_bar", {
                                        opacity: 1,
                                        duration: 3,
                                        ease: "power3.inOut"
                                    }, 7), t.to(".nav_bar", {
                                        opacity: 1,
                                        duration: 3,
                                        ease: "power3.inOut"
                                    }, 7), t.to(".pre_entry_animation", {
                                        opacity: 0,
                                        duration: 3,
                                        ease: "power3.inOut"
                                    }, 7), t.add((function() {
                                        ge.updatePluginOptions("modal", {
                                            open: !1
                                        })
                                    }), null, 10), t.set(".pre_entry_animation", {
                                        display: "none"
                                    }, 10), t.play(), ge.updatePluginOptions("modal", {
                                        open: !0
                                    }), s().set("entry_animation", "played", {
                                        expires: 7
                                    })
                                }
                            }(), s().get("cookies", "accepted") ? function(e, t, o) {
                                t.ChatraID = "bRth8u6fmZR6ZN8ym";
                                var a = e.createElement("script");
                                t[o] = t[o] || function() {
                                    (t[o].q = t[o].q || []).push(arguments)
                                }, a.async = !0, a.src = "https://call.chatra.io/chatra.js", e.head && e.head.appendChild(a)
                            }(document, window, "Chatra") : Le.play(), window.cookie_accepted = function() {
                                s().set("cookies", "accepted", {
                                    expires: 30
                                }), Ae.play()
                            }
                    })), new(O())({
                        accessToken: InstagramToken,
                        target: "instagram_feed",
                        limit: 3,
                        template: '<div class="instagram_feed_picture"><a href="{{link}}"><img class="instagram_feed_picture_img" title="{{caption}}" src="{{image}}" /><span class="instagram_feed_text">{{caption}}</span></a></div>'
                    }).run(), P = document.querySelector(".cursor"), q = document.querySelector(".menu_magnetic_target"), N = document.querySelector(".menu_magnetic_icon"), new(function() {
                        function e(t) {
                            j(this, e), this.el = t, this.bind()
                        }
                        return C(e, [{
                            key: "bind",
                            value: function() {
                                document.addEventListener("mousemove", this.move.bind(this), !1)
                            }
                        }, {
                            key: "move",
                            value: function(e) {
                                var t = this,
                                    o = {
                                        left: e.clientX,
                                        top: e.clientY
                                    };
                                document.querySelectorAll(".menu_magnetic_target").forEach((function(e) {
                                    var a = e.getBoundingClientRect().width,
                                        i = e.getBoundingClientRect().left + e.getBoundingClientRect().width / 2,
                                        r = e.getBoundingClientRect().top + e.getBoundingClientRect().height / 2,
                                        n = {
                                            x: i - o.left,
                                            y: r - o.top
                                        },
                                        s = Math.atan2(n.x, n.y),
                                        p = Math.sqrt(n.x * n.x + n.y * n.y);
                                    p < a ? (_.p8.to(t.el, {
                                        left: i - Math.sin(s) * p / 3,
                                        top: r - Math.cos(s) * p / 3,
                                        height: "75px",
                                        width: "75px",
                                        duration: .5
                                    }), _.p8.to(N, {
                                        x: -Math.sin(s) * p / 3,
                                        y: -Math.cos(s) * p / 3,
                                        duration: .5
                                    })) : (_.p8.to(t.el, {
                                        left: o.left,
                                        top: o.top,
                                        height: "12px",
                                        width: "12px",
                                        duration: .5
                                    }), _.p8.to(N, {
                                        x: 0,
                                        y: 0,
                                        duration: .5
                                    }))
                                }))
                            }
                        }]), e
                    }())(P, q), document.getElementsByClassName("pre_entry_animation");
                    var fe = function(e) {
                        ! function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && T(e, t)
                        }(i, e);
                        var t, o, a = (t = i, o = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (e) {
                                return !1
                            }
                        }(), function() {
                            var e, a = k(t);
                            if (o) {
                                var i = k(this).constructor;
                                e = Reflect.construct(a, arguments, i)
                            } else e = a.apply(this, arguments);
                            return x(this, e)
                        });

                        function i() {
                            return j(this, i), a.apply(this, arguments)
                        }
                        return C(i, [{
                            key: "transformDelta",
                            value: function(e) {
                                return this.options.open ? {
                                    x: 0,
                                    y: 0
                                } : e
                            }
                        }]), i
                    }(a.c);
                    fe.pluginName = "modal", fe.defaultOptions = {
                        open: !1
                    }, a.Z.use(fe);
                    var he = document.querySelector(".scroller"),
                        ge = a.Z.init(he, {
                            damping: .1,
                            renderByPixels: !0,
                            thumbMinSize: 100,
                            delegateTo: document,
                            alwaysShowTracks: !1,
                            syncCallbacks: !0
                        });
                    y.i.scrollerProxy(".scroller", {
                        scrollTop: function(e) {
                            return arguments.length && (ge.scrollTop = e), ge.scrollTop
                        }
                    }), ge.addListener(y.i.update), y.i.defaults({
                        scroller: he
                    }), ge.track.xAxis.element.remove();
                    var Oe = document.getElementsByClassName("menu_bar")[0],
                        be = document.getElementsByClassName("nav_bar_modal")[0],
                        ve = document.getElementsByClassName("cursor_container")[0],
                        Te = document.getElementsByClassName("logo_bar")[0],
                        xe = document.getElementsByClassName("nav_bar")[0],
                        ke = document.getElementsByClassName("cookie_notification_box")[0];
                    ge.addListener((function(e) {
                        var t = e.offset;
                        Oe.style.top = "".concat(t.y, "px"), be.style.top = "".concat(t.y, "px"), ve.style.top = "".concat(t.y, "px"), Te.style.top = "".concat(t.y, "px"), xe.style.top = "".concat(t.y, "px"), ke.style.top = "".concat(t.y, "px")
                    }));
                    var je = document.getElementById("laptop_anim_inner_canvas"),
                        Se = je.getContext("2d");
                    je.width = 200, je.height = 200, ae = Y.matches ? function(e) {
                        return "assets/images/light_".concat((e + 15).toString().padStart(5, "0"), ".jpg")
                    } : function(e) {
                        return "assets/images/dark_".concat((e + 15).toString().padStart(5, "0"), ".jpg")
                    };
                    for (var Ce = [], Ge = {
                            frame: 0
                        }, Ee = 0; Ee < 195; Ee++) {
                        var Ve = new Image;
                        Ve.src = ae(Ee), Ce.push(Ve)
                    }
                    Ce[0].onload = we;
                    var Be = document.getElementById("pre_entry_animation_video_content"),
                        Ie = document.getElementById("menu_magnetic_target"),
                        Me = document.getElementById("menu_icon_svg");
                    window.menu_logical = function() {
                        Ie.classList.contains("active") ? (ge.updatePluginOptions("modal", {
                            open: !1
                        }), qe.reverse(), Ie.classList.remove("active"), Me.classList.remove("active")) : (ge.updatePluginOptions("modal", {
                            open: !0
                        }), qe.play(), Ie.classList.add("active"), Me.classList.add("active"))
                    };
                    var Re = document.getElementById("teaser_video");
                    window.teaser_video_sound = function() {
                        Re.classList.contains("sound_on") ? (Re.muted = !0, Re.classList.remove("sound_on"), Pe.reverse()) : (Pe.play(), Re.classList.add("sound_on"), Re.muted = !1)
                    };
                    var Le = _.p8.timeline({
                        id: "cookie_notification",
                        paused: !0
                    });
                    Le.set(".cookie_notification_box", {
                        display: "block"
                    }, 0), Le.fromTo(".cookie_notification", {
                        y: 150
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0);
                    var Ae = _.p8.timeline({
                        id: "cookie_notification_accepted",
                        paused: !0
                    });
                    Ae.to(".cookie_notification_content a", {
                        opacity: 0,
                        duration: .5,
                        ease: "power3.inOut"
                    }, 0), Ae.to(".cookie_notification_content p", {
                        text: {
                            value: I
                        },
                        duration: 2,
                        ease: "power3.inOut"
                    }, .5), Ae.to(".cookie_notification", {
                        filter: "blur(15px)",
                        opacity: 0,
                        duration: 1,
                        ease: "power3.inOut"
                    }, 4.5), Ae.set(".cookie_notification_box", {
                        display: "none"
                    }, 5.5), Ae.add((function() {
                        ! function(e, t, o) {
                            t.ChatraID = "bRth8u6fmZR6ZN8ym";
                            var a = e.createElement("script");
                            t[o] = t[o] || function() {
                                (t[o].q = t[o].q || []).push(arguments)
                            }, a.async = !0, a.src = "https://call.chatra.io/chatra.js", e.head && e.head.appendChild(a)
                        }(document, window, "Chatra")
                    }), null, 5.5);
                    var Pe = _.p8.timeline({
                        id: "gsap_teaser_video_sound_toggle",
                        paused: !0
                    });
                    Pe.to(".iphone_aufnahme_2_player_ui_text_animation", {
                        text: {
                            value: E
                        },
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0), Pe.to(".iphone_aufnahme_2_player_ui_icon_animation_1", {
                        opacity: 1,
                        duration: 1,
                        ease: "power3.inOut"
                    }, 0), Pe.to(".iphone_aufnahme_2_player_ui_icon_animation_2", {
                        opacity: 2,
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0);
                    var qe = _.p8.timeline({
                        id: "menu_animation",
                        paused: !0
                    });
                    qe.to(".menu_font_animation", {
                        text: {
                            value: G
                        },
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0), qe.to("main", {
                        filter: "grayscale(1)",
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0), qe.fromTo(".nav_bar", {
                        backdropFilter: "blur(15px)"
                    }, {
                        backdropFilter: "blur(0px)",
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0), qe.to(".nav_bar_background", {
                        opacity: 0,
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0), qe.fromTo(".nav_bar_modal", {
                        display: "none"
                    }, {
                        display: "block",
                        duration: .1
                    }, 0), qe.fromTo(".nav_bar_modal", {
                        x: 600
                    }, {
                        opacity: 1,
                        x: 0,
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0), qe.fromTo(".nav_bar_modal_content_logo", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.inOut"
                    }, 1), qe.fromTo(".nav_bar_modal_content_heading", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.inOut"
                    }, 1.25), qe.fromTo(".nav_bar_modal_content_subheading", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.inOut"
                    }, 1.5), qe.fromTo(".nav_bar_modal_content_second_inner_menu_heading_first", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.inOut"
                    }, 1.75), qe.fromTo(".nav_bar_modal_content_second_inner_menu_heading_second", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.inOut"
                    }, 1.75), qe.fromTo(".nav_bar_modal_content_second_inner_menu_socials", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.inOut"
                    }, 1.75), qe.fromTo(".nav_bar_modal_content_second_inner_menu_menu", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.inOut"
                    }, 1.75), qe.fromTo(".nav_bar_modal_content_third_text", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.inOut"
                    }, 2), qe.fromTo(".nav_bar_modal_content_third_mail", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.inOut"
                    }, 2.25), r()(document).ready((function() {
                        var e = _.p8.timeline({
                            id: "nav_animation",
                            scrollTrigger: {
                                trigger: ".nav_bar",
                                start: "top top",
                                end: "950 center",
                                markers: !1,
                                scrub: !0
                            }
                        });
                        e.to(".nav_bar_background", {
                            opacity: .2,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 5), e.to(".logo_svg_icon", {
                            opacity: 0,
                            duration: 5,
                            ease: "power3.inOut"
                        }, 0), e.to(".logo_schrift", {
                            width: "200px",
                            x: -49,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 0);
                        var t = document.querySelector(".iphone_aufnahme_2");

                        function o() {
                            t.style.clipPath = "none", t.offsetWidth, t.style.clipPath = "url(#myClip)"
                        }
                        var a = _.p8.timeline({
                            id: "start_1",
                            scrollTrigger: {
                                trigger: ".start",
                                start: "top top",
                                end: "5000 center",
                                markers: !1,
                                pin: !0,
                                pinType: "transform",
                                pinReparent: !0,
                                scrub: 2
                            }
                        });
                        Y.matches ? (a.to(".container_start_background", {
                            backgroundColor: "rgba(242, 242, 247, 1)",
                            duration: 5,
                            ease: "power1.inOut"
                        }, 0), a.to(".start", {
                            backgroundColor: "white",
                            duration: 4,
                            ease: "power1.inOut"
                        }, 10)) : (a.to(".container_start_background", {
                            backgroundColor: "rgba(28, 28, 30, 1)",
                            duration: 5,
                            ease: "power1.inOut"
                        }, 0), a.to(".start", {
                            backgroundColor: "black",
                            duration: 4,
                            ease: "power1.inOut"
                        }, 10)), a.to(".container_start", {
                            borderRadius: "25px",
                            transform: "scale(0.7)",
                            boxShadow: "0px 0px 100px -20px rgba(0,0,0,0.4)",
                            duration: 5,
                            ease: "power1.inOut"
                        }, 0), a.fromTo(".container_start_browser", {
                            y: -100
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 5,
                            ease: "power1.inOut"
                        }, 0), a.to(".container_start", {
                            opacity: .2,
                            duration: 5,
                            ease: "power1.inOut"
                        }, 5), a.to(".container_start_content", {
                            duration: 4,
                            ease: "power1.inOut"
                        }, 10), a.to(".container_lets_get_shit", {
                            opacity: 1,
                            duration: 5,
                            ease: "power1.inOut"
                        }, 5), a.to(".container_lets_get_shit", {
                            display: "block",
                            ease: "power1.inOut"
                        }, 4), a.to(".lets", {
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, 11), a.to(".get", {
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, 13), a.to(".shit", {
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, 15), a.to(".done", {
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, 17), a.to(".container_lets_get_shit", {
                            scale: 1.5,
                            duration: 10,
                            ease: "power2.in"
                        }, 17), a.to(".container_lets_get_shit", {
                            scale: 3,
                            duration: 10,
                            ease: "power2.out"
                        }, 27), a.to(".container_start", {
                            scale: .5,
                            duration: 10,
                            ease: "power2.out"
                        }, 27), a.to(".container_lets_get_shit", {
                            duration: 15,
                            ease: "power1.inOut"
                        }, 25), a.to(".container_start", {
                            duration: 15,
                            ease: "power1.inOut"
                        }, 24), a.to(".container_start", {
                            duration: 15,
                            ease: "power1.inOut"
                        }, 24), a.set(".container_phone", {
                            display: "block"
                        }, 30), a.to(".transition_to_phone", {
                            opacity: 1,
                            duration: 10,
                            ease: "power2.out"
                        }, 26), a.to(".container_start", {
                            display: "none"
                        }, 31), a.to(".container_lets_get_shit", {
                            display: "none"
                        }, 31), a.set(".container_phone_content_together", {}, 31), a.fromTo(".iphone_bg_font_container", {
                            opacity: 0,
                            scale: 2.5
                        }, {
                            scale: 1,
                            opacity: 1,
                            duration: 8,
                            ease: "power1.inOut"
                        }, 31), a.to(".iphone_bg_font", {
                            text: {
                                value: "push beyond imagination.",
                                newClass: "iphone_bg_font_2"
                            },
                            duration: 8,
                            ease: "power1.inOut"
                        }, 33), a.fromTo(".phone_x_box", {
                            y: 500,
                            scale: 2,
                            opacity: 0
                        }, {
                            y: 0,
                            scale: 1,
                            opacity: 1,
                            duration: 8,
                            ease: "power1.inOut"
                        }, 31), a.fromTo(".iphone_2", {
                            opacity: 0
                        }, {
                            x: -170,
                            scale: 1,
                            opacity: 1,
                            duration: 8,
                            ease: "power1.inOut"
                        }, 38), a.fromTo(".iphone_3", {
                            opacity: 0
                        }, {
                            x: 250,
                            scale: 1,
                            opacity: 1,
                            duration: 8,
                            ease: "power1.inOut"
                        }, 38), a.to(".iphone_bg_font", {
                            opacity: 0,
                            duration: 8,
                            ease: "power1.inOut"
                        }, 44), a.to(".iphone_bg_font_container", {
                            opacity: 0,
                            duration: 8,
                            ease: "power1.inOut"
                        }, 44), a.to(".container_phone_content_together", {
                            duration: 8,
                            ease: "power1.inOut"
                        }, 43), a.fromTo(".iphone_bg_font_2", {
                            opacity: 0,
                            scale: .5
                        }, {
                            opacity: .2,
                            scale: 1,
                            duration: 10,
                            ease: "power1.inOut"
                        }, 43), a.set(".iphone_aufnahme", {
                            opacity: 1,
                            duration: 15,
                            ease: "power1.inOut"
                        }, 45), a.set(".tablet_container", {
                            display: "block"
                        }, 45), a.to(".iphone_2", {
                            x: -300,
                            opacity: 1,
                            duration: 8,
                            ease: "power1.inOut"
                        }, 57), a.to(".iphone_3", {
                            x: 350,
                            opacity: 1,
                            duration: 8,
                            ease: "power1.inOut"
                        }, 57), a.to(".phone_x_box", {
                            rotate: 90,
                            duration: 5,
                            ease: "power1.inOut"
                        }, 60), a.to(".iphone_aufnahme", {
                            opacity: 0,
                            duration: 5,
                            ease: "power1.inOut"
                        }, 60), a.to(".phone_x_box", {
                            scale: 3,
                            opacity: 1,
                            duration: 5.5,
                            ease: "power1.inOut"
                        }, 65), a.set(".iphone_aufnahme_2", {
                            display: "block",
                            width: "100vw",
                            height: "100vh",
                            opacity: 0
                        }, 65), a.set(".iphone_aufnahme_2_player_ui", {
                            display: "block",
                            opacity: 0
                        }, 65), a.to(".iphone_aufnahme_2", {
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, 68), a.to(".container_phone_content_together", {
                            display: "none"
                        }, 70), a.add((function() {
                            Re.pause()
                        }), null, 67), a.add((function() {
                            Re.play()
                        }), null, 68), a.to(".iphone_bg_font", {
                            opacity: 0
                        }, 72), a.fromTo(".iphone_aufnahme_2_player_ui", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 5,
                            ease: "power1.inOut"
                        }, 72), a.to(".iphone_bg_font_2", {
                            opacity: 0
                        }, 72), a.to(".iphone_reel_teaser", {
                            opacity: 0
                        }, 72), a.to(".iphone_aufnahme_2", {
                            duration: 20,
                            ease: "power1.inOut"
                        }, 72);
                        var i = window.matchMedia("(min-width:1100px) and (max-width: 1200px)"),
                            r = window.matchMedia("(min-width:1200px) and (max-width: 1300px)"),
                            n = window.matchMedia("(min-width:1300px) and (max-width: 1400px)"),
                            s = window.matchMedia("(min-width:1400px) and (max-width: 1500px)"),
                            p = window.matchMedia("(min-width:1500px) and (max-width: 1600px)"),
                            c = window.matchMedia("(min-width:1600px) and (max-width: 1700px)"),
                            u = window.matchMedia("(min-width:1700px) and (max-width: 1800px)"),
                            d = window.matchMedia("(min-width:1800px) and (max-width: 1900px)"),
                            y = window.matchMedia("(min-width:1900px) and (max-width: 2000px)"),
                            l = window.matchMedia("(min-width:2000px)");
                        i.matches ? a.to(".iphone_aufnahme_2_evolves_mask_logo_path", {
                            scale: 1,
                            translateX: "30vw",
                            translateY: "15vh",
                            duration: 10,
                            ease: "power1.inOut",
                            onUpdate: o
                        }, 90) : r.matches ? a.to(".iphone_aufnahme_2_evolves_mask_logo_path", {
                            scale: 1,
                            translateX: "33vw",
                            translateY: "15vh",
                            duration: 10,
                            ease: "power1.inOut",
                            onUpdate: o
                        }, 90) : n.matches || s.matches ? a.to(".iphone_aufnahme_2_evolves_mask_logo_path", {
                            scale: 1,
                            translateX: "34vw",
                            translateY: "15vh",
                            duration: 10,
                            ease: "power1.inOut",
                            onUpdate: o
                        }, 90) : p.matches ? a.to(".iphone_aufnahme_2_evolves_mask_logo_path", {
                            scale: 1,
                            translateX: "35vw",
                            translateY: "15vh",
                            duration: 10,
                            ease: "power1.inOut",
                            onUpdate: o
                        }, 90) : c.matches ? a.to(".iphone_aufnahme_2_evolves_mask_logo_path", {
                            scale: 1,
                            translateX: "36vw",
                            translateY: "15vh",
                            duration: 10,
                            ease: "power1.inOut",
                            onUpdate: o
                        }, 90) : u.matches ? a.to(".iphone_aufnahme_2_evolves_mask_logo_path", {
                            scale: 1,
                            translateX: "37vw",
                            translateY: "15vh",
                            duration: 10,
                            ease: "power1.inOut",
                            onUpdate: o
                        }, 90) : d.matches ? a.to(".iphone_aufnahme_2_evolves_mask_logo_path", {
                            scale: 1,
                            translateX: "38vw",
                            translateY: "15vh",
                            duration: 10,
                            ease: "power1.inOut",
                            onUpdate: o
                        }, 90) : (y.matches || l.matches) && a.to(".iphone_aufnahme_2_evolves_mask_logo_path", {
                            scale: 1,
                            translateX: "39vw",
                            translateY: "15vh",
                            duration: 10,
                            ease: "power1.inOut",
                            onUpdate: o
                        }, 90), a.to(".iphone_aufnahme_2_player_ui", {
                            opacity: 0,
                            y: 50,
                            duration: 5,
                            ease: "power1.inOut"
                        }, 90), a.to(".iphone_x", {
                            display: "none"
                        }, 90), a.to(".iphone_2", {
                            display: "none"
                        }, 90), a.to(".iphone_3", {
                            display: "none"
                        }, 90), a.to(".iphone_aufnahme_2", {
                            duration: 10,
                            ease: "power1.inOut"
                        }, 100), a.to(".iphone_aufnahme_2", {
                            y: -50,
                            duration: 10,
                            ease: "power1.inOut"
                        }, 110), a.fromTo(".tablet_font", {
                            y: 100,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 10,
                            ease: "power1.inOut"
                        }, 110), a.add((function() {
                            Re.muted = !0, Re.classList.remove("sound_on"), Pe.reverse()
                        }), null, 120);
                        var m = _.p8.timeline({
                            id: "digital_devices",
                            paused: !0,
                            repeat: 0,
                            scrollTrigger: {
                                trigger: ".digital_devices",
                                start: "300 bottom",
                                end: "bottom top",
                                markers: !1,
                                toggleActions: "play pause resume pause"
                            }
                        });
                        m.fromTo(".digital_devices_picture_container_inner", {
                            opacity: 0,
                            scale: .5,
                            y: 50
                        }, {
                            opacity: 1,
                            duration: 1,
                            scale: 1,
                            y: 0,
                            ease: "power1.inOut"
                        }, 0), m.fromTo(".digital_devices_font", {
                            opacity: 0,
                            y: 50
                        }, {
                            opacity: 1,
                            duration: 2,
                            y: 0,
                            ease: "power1.inOut"
                        }, 0), m.fromTo(".digital_devices_font_change", {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, .25), m.fromTo(".digital_devices_subfont", {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, .5), m.fromTo(".mobile", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, 1), m.fromTo(".tablets", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, 1.25), m.fromTo(".smart_tv", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, 1.5), m.fromTo(".desktop", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, 1.75), m.fromTo(".smart_watch", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, 2), m.fromTo(".smart_car", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power1.inOut"
                        }, 2.25), m.to(".digital_devices_font_change", {
                            text: {
                                value: B,
                                newClass: ".digital_devices_font_change_2"
                            },
                            duration: 2,
                            ease: "power1.inOut"
                        }, 3);
                        var w = _.p8.timeline({
                            id: "weltkarte",
                            paused: !0,
                            repeat: -1,
                            scrollTrigger: {
                                start: "-500 center",
                                end: "800 top",
                                markers: !1,
                                trigger: ".weltkarte",
                                toggleActions: "play pause resume reset"
                            }
                        });
                        Y.matches ? w.to("#weltkarte_logo_black", {
                            fill: "black",
                            duration: 2,
                            ease: "power3.inOut"
                        }, 27.5) : w.to("#weltkarte_logo_black", {
                            fill: "white",
                            duration: 2,
                            ease: "power3.inOut"
                        }, 27.5), w.set(".weltkarte_gsap_1", {
                            opacity: 0
                        }, 0), w.set(".weltkarte_gsap_2", {
                            opacity: 0
                        }, 0), w.set(".weltkarte_gsap_3", {
                            opacity: 0
                        }, 0), w.set(".weltkarte_gsap_4", {
                            opacity: 0
                        }, 0), w.set(".weltkarte_gsap_5", {
                            opacity: 0
                        }, 0), w.set("#dot_1", {
                            opacity: 0
                        }, 0), w.set("#dot_1_2", {
                            opacity: 0
                        }, 0), w.set("#dot_2", {
                            opacity: 0
                        }, 0), w.set("#dot_2_2", {
                            opacity: 0
                        }, 0), w.set("#dot_3", {
                            opacity: 0
                        }, 0), w.set("#dot_3_2", {
                            opacity: 0
                        }, 0), w.set("#dot_4", {
                            opacity: 0
                        }, 0), w.set("#dot_4_2", {
                            opacity: 0
                        }, 0), w.set("#dot_5", {
                            opacity: 0
                        }, 0), w.set("#dot_5_2", {
                            opacity: 0
                        }, 0), w.set(".weltkarte_text", {
                            opacity: 0
                        }, 0), w.fromTo(".weltkarte", {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 0), w.fromTo(".weltkarte_gsap_1", {
                            opacity: 0,
                            y: 50
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 2), w.fromTo("#dot_1", {}, {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 2), w.fromTo("#path_1", {
                            drawSVG: "100% 80%"
                        }, {
                            opacity: 1,
                            duration: 2,
                            drawSVG: "0%"
                        }, 3), w.fromTo("#dot_1_2", {}, {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 3), w.to("#dot_1", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 5), w.to("#dot_1_2", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 5), w.to("#path_1", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 5), w.to(".weltkarte_gsap_1", {
                            opacity: 0,
                            y: -50,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 5), w.fromTo(".weltkarte_gsap_2", {
                            opacity: 0,
                            y: 50
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 7), w.fromTo("#dot_2", {}, {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 7), w.fromTo("#path_2", {
                            drawSVG: "100% 80%"
                        }, {
                            opacity: 1,
                            duration: 2,
                            drawSVG: "0%"
                        }, 8), w.fromTo("#dot_2_2", {}, {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 8), w.to("#dot_2", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 10), w.to("#dot_2_2", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 10), w.to("#path_2", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 10), w.to(".weltkarte_gsap_2", {
                            opacity: 0,
                            y: -50,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 10), w.fromTo(".weltkarte_gsap_3", {
                            opacity: 0,
                            y: 50
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 12), w.fromTo("#dot_3", {}, {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 12), w.fromTo("#path_3", {
                            drawSVG: "100% 80%"
                        }, {
                            opacity: 1,
                            duration: 2,
                            drawSVG: "0%"
                        }, 13), w.fromTo("#dot_3_2", {}, {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 13), w.to("#dot_3", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 15), w.to("#dot_3_2", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 15), w.to("#path_3", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 15), w.to(".weltkarte_gsap_3", {
                            opacity: 0,
                            y: -50,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 15), w.fromTo(".weltkarte_gsap_4", {
                            opacity: 0,
                            y: 50
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 17), w.fromTo("#dot_4", {}, {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 17), w.fromTo("#path_4", {
                            drawSVG: "100% 80%"
                        }, {
                            opacity: 1,
                            duration: 2,
                            drawSVG: "0%"
                        }, 18), w.fromTo("#dot_4_2", {}, {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 18), w.to("#dot_4", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 20), w.to("#dot_4_2", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 20), w.to("#path_4", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 20), w.to(".weltkarte_gsap_4", {
                            opacity: 0,
                            y: -50,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 20), w.fromTo(".weltkarte_gsap_5", {
                            opacity: 0,
                            y: 50
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 22), w.fromTo("#dot_5", {}, {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 22), w.fromTo("#path_5", {
                            drawSVG: "100% 80%"
                        }, {
                            opacity: 1,
                            duration: 2,
                            drawSVG: "0%"
                        }, 23), w.fromTo("#dot_5_2", {}, {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 23), w.to("#dot_5", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 25), w.to("#dot_5_2", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 25), w.to("#path_5", {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 25), w.to(".weltkarte_gsap_5", {
                            opacity: 0,
                            y: -50,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 25), w.to(".weltkarte_picture", {
                            opacity: 0,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 24.5), w.to(".weltkarte_dots", {
                            opacity: 0,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 24.5), w.fromTo("#weltkarte_logo_black", {
                            opacity: 0,
                            scale: .5
                        }, {
                            scale: 1,
                            opacity: 1,
                            duration: 3,
                            ease: "power3.inOut"
                        }, 24.5), w.fromTo(".logo_path_1", {
                            drawSVG: "0%"
                        }, {
                            drawSVG: "100%",
                            duration: 5,
                            ease: "power3.inOut"
                        }, 24.5), w.to("#weltkarte_logo_black", {
                            y: -150,
                            scale: .5,
                            duration: 3,
                            ease: "power3.inOut"
                        }, 28), w.fromTo(".weltkarte_text", {
                            opacity: 0,
                            scale: .5
                        }, {
                            scale: 1,
                            opacity: 1,
                            duration: 3,
                            ease: "power3.inOut"
                        }, 28), w.fromTo(".weltkarte_subhead", {
                            opacity: 0,
                            y: -50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 30), w.to(".weltkarte", {
                            scale: 1,
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 37);
                        var f = _.p8.timeline({
                            id: "talents_entry",
                            paused: !0,
                            repeat: 0,
                            scrollTrigger: {
                                start: "-30% center",
                                end: "0 top",
                                markers: !1,
                                trigger: ".philosophy"
                            }
                        });
                        f.fromTo(".philosophy_row_left_heading", {
                            y: -50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 0), f.fromTo(".philosophy_row_right_heading", {
                            opacity: 0,
                            x: 300
                        }, {
                            x: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 0), f.fromTo(".philosophy_row_right_text", {
                            opacity: 0,
                            x: 300
                        }, {
                            x: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 0);
                        var h = _.p8.timeline({
                            id: "talents_guys",
                            paused: !0,
                            repeat: 0,
                            scrollTrigger: {
                                start: "-500 center",
                                end: "1000 top",
                                markers: !1,
                                trigger: ".talents"
                            }
                        });
                        h.fromTo(".one_talent", {
                            y: 50,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 1.5,
                            ease: "power3.inOut"
                        }, 0), h.fromTo(".two_talent", {
                            y: 50,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 1.5,
                            ease: "power3.inOut"
                        }, .25), h.fromTo(".three_talent", {
                            y: 50,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 1.5,
                            ease: "power3.inOut"
                        }, .5), h.fromTo(".four_talent", {
                            y: 50,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 1.5,
                            ease: "power3.inOut"
                        }, .75), h.fromTo(".five_talent", {
                            y: 50,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 1.5,
                            ease: "power3.inOut"
                        }, 1), h.fromTo(".six_talent", {
                            y: 50,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 1.5,
                            ease: "power3.inOut"
                        }, 1.25), h.fromTo(".founders_heading", {
                            y: 100
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 2), h.fromTo(".founders_text", {
                            y: 100
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 2), h.fromTo(".steve", {
                            y: 50,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 3,
                            ease: "power3.inOut"
                        }, 2), _.p8.timeline({
                            scrollTrigger: {
                                start: "-500 center",
                                end: "350 top",
                                markers: !1,
                                trigger: ".scrolling_text",
                                scrub: 1
                            }
                        }).fromTo(".scrolling_text", {
                            opacity: 1,
                            x: 1e3
                        }, {
                            x: -1500,
                            opacity: 1,
                            duration: 15
                        }, 0);
                        var g = _.p8.timeline({
                            id: "case_1",
                            scrollTrigger: {
                                start: "0 top",
                                end: "9500 top",
                                markers: !1,
                                trigger: ".case_studies",
                                pin: !0,
                                pinType: "transform",
                                pinReparent: !0,
                                scrub: 2
                            }
                        });
                        g.to(".scrolling_text_container", {
                            y: -200,
                            opacity: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 10), g.fromTo(".case_studies_projects_item_first", {
                            scale: .5,
                            y: 600,
                            opacity: 0
                        }, {
                            scale: 1,
                            y: 0,
                            opacity: 1,
                            duration: 20,
                            ease: "power3.inOut"
                        }, 0), g.fromTo(".evolves_logo_black_2", {
                            drawSVG: "0%"
                        }, {
                            drawSVG: "100%",
                            duration: 10,
                            ease: "power3.inOut"
                        }, 12), g.fromTo(".case_studies_projects_item_image_first_one", {
                            x: -200,
                            scale: .5,
                            y: 800
                        }, {
                            x: 0,
                            scale: 1,
                            y: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 12), g.fromTo(".case_studies_projects_item_image_first_one_second", {
                            x: 200,
                            scale: .5,
                            y: 800
                        }, {
                            x: 0,
                            scale: 1,
                            y: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 13), g.fromTo(".case_studies_projects_item_logo_first", {
                            scale: .5
                        }, {
                            scale: 1,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 35), g.fromTo(".case_studies_projects_item_categories_first", {
                            y: -20
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 35), g.to(".case_studies_projects_item_image_first_one", {
                            x: 200,
                            scale: 1.5,
                            y: -700,
                            opacity: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 25), g.to(".case_studies_projects_item_image_first_one_second", {
                            x: -200,
                            scale: 1.5,
                            y: -700,
                            opacity: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 26), g.to(".evolves_logo_black_2", {
                            drawSVG: "0%",
                            duration: 10,
                            ease: "power3.inOut"
                        }, 25), g.fromTo(".case_studies_background_evolves_first", {
                            opacity: 0,
                            scale: .5
                        }, {
                            scale: 1,
                            opacity: .15,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 30), g.fromTo(".case_studies_projects_item_image_first_two", {
                            x: 100,
                            scale: .75
                        }, {
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 30), g.fromTo(".case_studies_projects_item_image_first_two_second", {
                            transform: "rotate(0deg)"
                        }, {
                            x: -73,
                            transform: "rotate(-17deg)",
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 35), g.fromTo(".case_studies_projects_item_description_first", {
                            y: -50,
                            opacity: 0
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 35), g.fromTo(".case_studies_projects_item_cta_first", {
                            x: -25,
                            opacity: 0
                        }, {
                            opacity: 1,
                            x: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 35), g.fromTo(".case_studies_projects_item_cta_icon_first", {
                            x: -25,
                            opacity: 0
                        }, {
                            opacity: 1,
                            x: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 35), g.to(".case_studies_projects_item_first", {
                            duration: 40,
                            ease: "power3.inOut"
                        }, 40), g.to(".case_studies_projects_item_first", {
                            scale: .75,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 80), g.to(".case_studies_projects_wrapper_second", {
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 80), g.fromTo(".case_studies_projects_item_second", {
                            display: "block",
                            x: "100%",
                            scale: .8
                        }, {
                            x: "0%",
                            scale: 1,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 80), g.fromTo(".case_studies_project_item_background_second", {
                            opacity: .3
                        }, {
                            opacity: .9,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 80), g.fromTo(".evolves_logo_black_2", {
                            drawSVG: "0%"
                        }, {
                            drawSVG: "100%",
                            duration: 10,
                            ease: "power3.inOut"
                        }, 92), g.fromTo(".case_studies_projects_item_image_second_one", {
                            x: -200,
                            scale: .5,
                            y: 800
                        }, {
                            x: 0,
                            scale: 1,
                            y: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 92), g.fromTo(".case_studies_projects_item_image_second_one_second", {
                            x: 200,
                            scale: .5,
                            y: 800
                        }, {
                            x: 0,
                            scale: 1,
                            y: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 93), g.fromTo(".case_studies_projects_item_logo_second", {
                            scale: .5
                        }, {
                            scale: 1,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 115), g.fromTo(".case_studies_projects_item_categories_second", {
                            y: -20
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 115), g.to(".case_studies_projects_item_image_second_one", {
                            x: 200,
                            scale: 1.5,
                            y: -700,
                            opacity: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 105), g.to(".case_studies_projects_item_image_second_one_second", {
                            x: -200,
                            scale: 1.5,
                            y: -700,
                            opacity: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 106), g.to(".evolves_logo_black_2", {
                            drawSVG: "0%",
                            duration: 10,
                            ease: "power3.inOut"
                        }, 105), g.fromTo(".case_studies_background_evolves_second", {
                            opacity: 0,
                            scale: .5
                        }, {
                            scale: 1,
                            opacity: .15,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 110), g.fromTo(".case_studies_projects_item_image_second_two", {
                            x: 100,
                            scale: .75
                        }, {
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 110), g.fromTo(".case_studies_projects_item_image_second_two_second", {
                            transform: "rotate(0deg)"
                        }, {
                            x: -73,
                            transform: "rotate(-17deg)",
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 115), g.fromTo(".case_studies_projects_item_description_second", {
                            y: -50,
                            opacity: 0
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 115), g.fromTo(".case_studies_projects_item_cta_second", {
                            x: -25,
                            opacity: 0
                        }, {
                            opacity: 1,
                            x: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 115), g.fromTo(".case_studies_projects_item_cta_icon_second", {
                            x: -25,
                            opacity: 0
                        }, {
                            opacity: 1,
                            x: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 115), g.to(".case_studies_projects_item_second", {
                            duration: 40,
                            ease: "power3.inOut"
                        }, 120), g.to(".case_studies_projects_item_first", {
                            scale: .5,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 160), g.to(".case_studies_projects_item_second", {
                            scale: .75,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 160), g.to(".case_studies_projects_wrapper_third", {
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 160), g.fromTo(".case_studies_projects_item_third", {
                            display: "block",
                            x: "100%",
                            scale: .8
                        }, {
                            x: "0%",
                            scale: 1,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 160), g.fromTo(".case_studies_project_item_background_third", {
                            opacity: .3
                        }, {
                            opacity: .9,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 160), g.fromTo(".evolves_logo_black_2", {
                            drawSVG: "0%"
                        }, {
                            drawSVG: "100%",
                            duration: 10,
                            ease: "power3.inOut"
                        }, 172), g.fromTo(".case_studies_projects_item_image_third_one", {
                            x: -200,
                            scale: .5,
                            y: 800
                        }, {
                            x: 0,
                            scale: 1,
                            y: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 172), g.fromTo(".case_studies_projects_item_image_third_one_second", {
                            x: 200,
                            scale: .5,
                            y: 800
                        }, {
                            x: 0,
                            scale: 1,
                            y: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 173), g.fromTo(".case_studies_projects_item_logo_third", {
                            scale: .5
                        }, {
                            scale: 1,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 195), g.fromTo(".case_studies_projects_item_categories_third", {
                            y: -20
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 195), g.to(".case_studies_projects_item_image_third_one", {
                            x: 200,
                            scale: 1.5,
                            y: -700,
                            opacity: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 185), g.to(".case_studies_projects_item_image_third_one_second", {
                            x: -200,
                            scale: 1.5,
                            y: -700,
                            opacity: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 186), g.to(".evolves_logo_black_2", {
                            drawSVG: "0%",
                            duration: 10,
                            ease: "power3.inOut"
                        }, 185), g.fromTo(".case_studies_background_evolves_third", {
                            opacity: 0,
                            scale: .5
                        }, {
                            scale: 1,
                            opacity: .15,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 190), g.fromTo(".case_studies_projects_item_image_third_two", {
                            x: 100,
                            scale: .75
                        }, {
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 190), g.fromTo(".case_studies_projects_item_image_third_two_second", {
                            transform: "rotate(0deg)"
                        }, {
                            x: -73,
                            transform: "rotate(-17deg)",
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 195), g.fromTo(".case_studies_projects_item_description_third", {
                            y: -50,
                            opacity: 0
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 195), g.fromTo(".case_studies_projects_item_cta_third", {
                            x: -25,
                            opacity: 0
                        }, {
                            opacity: 1,
                            x: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 195), g.fromTo(".case_studies_projects_item_cta_icon_third", {
                            x: -25,
                            opacity: 0
                        }, {
                            opacity: 1,
                            x: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 195), g.to(".case_studies_projects_item_third", {
                            duration: 40,
                            ease: "power3.inOut"
                        }, 200), g.to(".case_studies_projects_item_first", {
                            scale: .25,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 240), g.to(".case_studies_projects_item_second", {
                            scale: .5,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 240), g.to(".case_studies_projects_item_third", {
                            scale: .75,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 240), g.to(".case_studies_projects_wrapper_fourth", {
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 240), g.fromTo(".case_studies_projects_item_fourth", {
                            display: "block",
                            x: "100%",
                            scale: .8
                        }, {
                            x: "0%",
                            scale: 1,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 240), g.fromTo(".case_studies_project_item_background_fourth", {
                            opacity: .3
                        }, {
                            opacity: .9,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 240), g.fromTo(".evolves_logo_black_2", {
                            drawSVG: "0%"
                        }, {
                            drawSVG: "100%",
                            duration: 10,
                            ease: "power3.inOut"
                        }, 252), g.fromTo(".case_studies_projects_item_image_fourth_one", {
                            x: -200,
                            scale: .5,
                            y: 800
                        }, {
                            x: 0,
                            scale: 1,
                            y: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 252), g.fromTo(".case_studies_projects_item_image_fourth_one_second", {
                            x: 200,
                            scale: .5,
                            y: 800
                        }, {
                            x: 0,
                            scale: 1,
                            y: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 253), g.fromTo(".case_studies_projects_item_logo_fourth", {
                            scale: .5
                        }, {
                            scale: 1,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 275), g.fromTo(".case_studies_projects_item_categories_fourth", {
                            y: -20
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 275), g.to(".case_studies_projects_item_image_fourth_one", {
                            x: 200,
                            scale: 1.5,
                            y: -700,
                            opacity: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 265), g.to(".case_studies_projects_item_image_fourth_one_second", {
                            x: -200,
                            scale: 1.5,
                            y: -700,
                            opacity: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 266), g.to(".evolves_logo_black_2", {
                            drawSVG: "0%",
                            duration: 10,
                            ease: "power3.inOut"
                        }, 265), g.fromTo(".case_studies_background_evolves_fourth", {
                            opacity: 0,
                            scale: .5
                        }, {
                            scale: 1,
                            opacity: .15,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 270), g.fromTo(".case_studies_projects_item_image_fourth_two", {
                            x: 100,
                            scale: .75
                        }, {
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 270), g.fromTo(".case_studies_projects_item_image_fourth_two_second", {
                            transform: "rotate(0deg)"
                        }, {
                            x: -73,
                            transform: "rotate(-17deg)",
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 275), g.fromTo(".case_studies_projects_item_description_fourth", {
                            y: -50,
                            opacity: 0
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 275), g.fromTo(".case_studies_projects_item_cta_fourth", {
                            x: -25,
                            opacity: 0
                        }, {
                            opacity: 1,
                            x: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 275), g.fromTo(".case_studies_projects_item_cta_icon_fourth", {
                            x: -25,
                            opacity: 0
                        }, {
                            opacity: 1,
                            x: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 275), g.to(".case_studies_projects_item_fourth", {
                            duration: 40,
                            ease: "power3.inOut"
                        }, 280), g.to(".case_studies_projects_item_fourth", {
                            opacity: 0,
                            scale: .75,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 310), g.to(".case_studies_projects_item_third", {
                            opacity: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 312), g.to(".case_studies_projects_item_second", {
                            opacity: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 314), g.to(".case_studies_projects_item_first", {
                            scale: .5,
                            y: "-27%",
                            x: "-26%",
                            duration: 10,
                            ease: "power3.inOut"
                        }, 317), g.set(".case_studies_projects_item_second", {
                            opacity: 0,
                            y: "-27%",
                            x: "26%",
                            scale: .5,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 324), g.set(".case_studies_projects_item_third", {
                            opacity: 0,
                            y: "27%",
                            x: "-26%",
                            scale: .5,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 324), g.set(".case_studies_projects_item_fourth", {
                            opacity: 0,
                            y: "27%",
                            x: "26%",
                            scale: .5,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 324), g.to(".case_studies_projects_item_second", {
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 324), g.to(".case_studies_projects_item_third", {
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 328), g.to(".case_studies_projects_item_fourth", {
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 332);
                        var O = _.p8.timeline({
                            id: "power_digital",
                            scrollTrigger: {
                                start: "0 top",
                                end: "2000 top",
                                markers: !1,
                                trigger: ".services",
                                scrub: 1,
                                pin: !0,
                                pinType: "transform",
                                pinReparent: !0
                            }
                        });
                        O.fromTo(".first_container_inner_main_subhead", {
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 2), O.fromTo(".first_container_inner_main_text", {
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 0), O.fromTo(".first_container_inner_second_text", {
                            y: 25
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 3), O.to(".first_container_inner_main_text", {
                            opacity: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 10), O.to(".first_container_inner_second_text", {
                            opacity: 0,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 10), O.to(".first_container_inner_main_subhead", {
                            text: {
                                value: "with Humble.",
                                delimiter: " "
                            },
                            y: 250,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 12), O.fromTo(".first_container_inner_image_container", {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 12), O.to(".first_container_inner_image_container", {
                            duration: 10
                        }, 17);
                        var b = _.p8.timeline({
                            id: "paper_plane_gsap",
                            scrollTrigger: {
                                start: "1600 center",
                                end: "3000 bottom",
                                markers: !1,
                                trigger: ".second_container",
                                scrub: 2
                            }
                        });
                        b.fromTo(".second_container_inner_left_desktop .icon_second_container", {
                            scale: .5,
                            opacity: 0
                        }, {
                            scale: 1,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 0), b.fromTo(".second_container_inner_left_desktop .heading_small", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, .5), b.fromTo(".second_container_inner_left_desktop .heading", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 1), b.fromTo(".second_container_inner_left_desktop .subheading", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 1.5), b.fromTo(".second_container_inner_right_desktop", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 3);
                        var v = _.p8.timeline({
                            id: "paper_plane_gsap_2",
                            scrollTrigger: {
                                start: "1600 center",
                                end: "3000 bottom",
                                markers: !1,
                                trigger: ".third_container",
                                scrub: 2
                            }
                        });
                        v.fromTo(".third_container_inner_right_desktop .icon_third_container", {
                            scale: .5,
                            opacity: 0
                        }, {
                            scale: 1,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 0), v.fromTo(".third_container_inner_right_desktop .heading_small", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, .5), v.fromTo(".third_container_inner_right_desktop .heading", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 1), v.fromTo(".third_container_inner_right_desktop .subheading", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 1.5), v.fromTo(".third_container_inner_left_desktop", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 3);
                        var T = _.p8.timeline({
                            id: "paper_plane_gsap_3",
                            scrollTrigger: {
                                start: "1600 center",
                                end: "3000 bottom",
                                markers: !1,
                                trigger: ".fourth_container",
                                scrub: 2
                            }
                        });
                        T.fromTo(".fourth_container_inner_left_desktop .icon_fourth_container", {
                            scale: .5,
                            opacity: 0
                        }, {
                            scale: 1,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 0), T.fromTo(".fourth_container_inner_left_desktop .heading_small", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, .5), T.fromTo(".fourth_container_inner_left_desktop .heading", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 1), T.fromTo(".fourth_container_inner_left_desktop .subheading", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 1.5), T.fromTo(".fourth_container_inner_right_desktop", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 3);
                        var x = _.p8.timeline({
                            id: "laptop_anim",
                            scrollTrigger: {
                                start: "0 top",
                                end: "0 bottom",
                                pin: !0,
                                pinType: "transform",
                                pinReparent: !0,
                                markers: !1,
                                trigger: ".laptop_anim",
                                scrub: 2
                            }
                        });
                        x.to(".services", {
                            duration: 20,
                            ease: "power3.inOut"
                        }, 0), x.fromTo(".lottie_heart", {
                            y: 100
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 20,
                            ease: "power3.inOut"
                        }, 7), x.fromTo(".laptop_anim_upper_inner_font", {
                            y: 100
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 20,
                            ease: "power3.inOut"
                        }, 10), x.add((function() {
                            document.getElementById("heart_lottie").play()
                        }), null, 15), x.to(".lottie_heart", {
                            y: -100,
                            opacity: 0,
                            duration: 20,
                            ease: "power3.inOut"
                        }, 45), x.to(".laptop_anim_upper_inner_font", {
                            y: -100,
                            opacity: 0,
                            duration: 20,
                            ease: "power3.inOut"
                        }, 48), x.fromTo("#laptop_anim_inner_canvas", {
                            y: 50
                        }, {
                            y: -50,
                            opacity: 1,
                            duration: 20,
                            ease: "power3.inOut"
                        }, 60), x.to(Ge, {
                            duration: 60,
                            frame: 194,
                            snap: "frame",
                            onUpdate: we
                        }, 63), x.to("#laptop_anim_inner_canvas", {
                            duration: 40,
                            ease: "power3.inOut"
                        }, 110), x.to(".laptop_anim_upper_inner_second", {
                            opacity: 1,
                            duration: 40,
                            ease: "power3.inOut"
                        }, 110), x.fromTo("#laptop_anim_upper_inner_second_logo", {
                            y: 100
                        }, {
                            y: 0,
                            duration: 40,
                            ease: "power3.inOut"
                        }, 110), x.fromTo(".laptop_anim_upper_inner_second_logo_svg", {
                            drawSVG: "0%"
                        }, {
                            drawSVG: "100%",
                            duration: 40,
                            ease: "power3.inOut"
                        }, 120), x.to(".laptop_anim_upper_inner_second", {
                            y: -300,
                            duration: 40,
                            ease: "power3.inOut"
                        }, 160), 
                        // x.to(".laptop_anim_inner", {
                        //     y: -300,
                        //     duration: 40,
                        //     ease: "power3.inOut"
                        // }, 160),
                         x.to(".laptop_anim_upper_inner_second", {
                            opacity: 0,
                            duration: 40,
                            ease: "power3.inOut"
                        }, 160), x.fromTo(".laptop_anim_upper_inner_third_font", {
                            y: 150,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 40,
                            ease: "power3.inOut"
                        }, 165);
                        // var k = _.p8.timeline({
                        //     id: "laptop_anim_second",
                        //     scrollTrigger: {
                        //         start: "5000 center",
                        //         end: "6800 bottom",
                        //         markers: !1,
                        //         trigger: ".laptop_anim_upper_inner_third",
                        //         scrub: 2
                        //     }
                        // });
                        k.fromTo(".laptop_anim_upper_inner_third_subhead", {
                            opacity: 0,
                            y: 100
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 40,
                            ease: "power3.inOut"
                        }, 0), k.to("body", {
                            duration: 40,
                            ease: "power3.inOut"
                        }, 30),
                        //  k.to(".laptop_anim_inner", {
                        //     duration: 20,
                        //     ease: "power3.inOut"
                        // }, 20),
                         k.to(".laptop_anim_upper_inner_third_subhead", {
                            duration: 40,
                            ease: "power3.inOut"
                        }, 30);
                        var j = _.p8.timeline({
                            id: "aspects_second_l",
                            scrollTrigger: {
                                start: "0 center",
                                end: "1000 bottom",
                                markers: !1,
                                trigger: ".aspects_inner_container_second_l",
                                scrub: 1
                            }
                        });
                        j.to(".aspects_logo", {
                            morphSVG: ".aspects_lock_icon",
                            duration: 20,
                            ease: "power3.inOut"
                        }, 0), j.to(".protected_animation", {
                            duration: 40,
                            text: {
                                value: V
                            },
                            ease: "power3.inOut"
                        }, 5), j.fromTo(".protected_animation_2", {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 30);
                        var S = _.p8.timeline({
                            id: "aspects_first",
                            scrollTrigger: {
                                start: "-300 center",
                                end: "850 bottom",
                                markers: !1,
                                trigger: ".aspects_inner_container_first",
                                scrub: 1
                            }
                        });
                        Y.matches ? S.fromTo(".aspects_inner_container_first_box_background", {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: 40,
                            ease: "power3.inOut"
                        }, 0) : S.fromTo(".aspects_inner_container_first_box_background", {
                            opacity: 0
                        }, {
                            opacity: .4,
                            duration: 40,
                            ease: "power3.inOut"
                        }, 0), S.fromTo(".aspects_inner_container_first_box_heading", {
                            scale: .8,
                            opacity: 0
                        }, {
                            scale: 1,
                            opacity: 1,
                            duration: 20,
                            ease: "power3.inOut"
                        }, 20), S.fromTo(".aspects_inner_container_first_box_subheading", {
                            y: 100,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 20,
                            ease: "power3.inOut"
                        }, 25);
                        var C = _.p8.timeline({
                            id: "day_night_element",
                            paused: !0,
                            scrollTrigger: {
                                start: "150 center",
                                end: "bottom bottom",
                                markers: !1,
                                trigger: ".aspects_inner_container_fifth_r"
                            }
                        });
                        C.to(".aspects_inner_container_fifth_r_box_content_main", {
                            opacity: 0,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 0), C.fromTo(".aspects_inner_container_fifth_r_box_image_day", {
                            scale: .75,
                            opacity: 0
                        }, {
                            opacity: 1,
                            scale: 1,
                            duration: 3,
                            ease: "power3.inOut"
                        }, 0), C.to(".aspects_inner_container_fifth_r_box_image_day", {
                            duration: 2,
                            ease: "power3.inOut"
                        }, 2), C.to(".aspects_inner_container_fifth_r_box_content_day", {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 2), C.fromTo(".day_mode_icon", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 2), C.fromTo(".day_mode_heading", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 2.5), C.to(".aspects_inner_container_fifth_r_box_day", {
                            opacity: 0,
                            duration: 2.5,
                            ease: "power3.inOut"
                        }, 4), C.to(".aspects_inner_container_fifth_r_box_background_main", {
                            backgroundColor: "#000000",
                            duration: 2.5,
                            ease: "power3.inOut"
                        }, 4), C.set(".aspects_inner_container_fifth_r_box_night", {
                            display: "block",
                            ease: "power3.inOut"
                        }, 4), C.fromTo(".aspects_inner_container_fifth_r_box_image_night", {
                            scale: .75,
                            opacity: 0
                        }, {
                            opacity: 1,
                            scale: 1,
                            duration: 2.5,
                            ease: "power3.inOut"
                        }, 4), C.set(".aspects_inner_container_fifth_r_box_day", {
                            display: "none",
                            ease: "power3.inOut"
                        }, 6.5), C.to(".aspects_inner_container_fifth_r_box_image_night", {
                            duration: 2,
                            ease: "power3.inOut"
                        }, 6.5), C.to(".aspects_inner_container_fifth_r_box_content_night", {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 6.5), C.fromTo(".night_mode_icon", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 6.5), C.fromTo(".night_mode_heading", {
                            opacity: 0,
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 7), C.to(".aspects_inner_container_fifth_r_box_night", {
                            opacity: 0,
                            duration: 2.5,
                            ease: "power3.inOut"
                        }, 10), C.to(".aspects_inner_container_fifth_r_box_background_main", {
                            backgroundColor: "rgba(28, 28, 30, 1)",
                            duration: 2.5,
                            ease: "power3.inOut"
                        }, 10), C.to(".aspects_inner_container_fifth_r_box_content_main", {
                            opacity: 1,
                            duration: 2.5,
                            ease: "power3.inOut"
                        }, 11), window.repeat_day_night_animation = function() {
                            C.restart()
                        };
                        var G = _.p8.timeline({
                            id: "sticker_element",
                            paused: !0,
                            scrollTrigger: {
                                start: "150 center",
                                end: "bottom bottom",
                                markers: !1,
                                trigger: ".aspects_inner_container_second_r"
                            }
                        });
                        G.fromTo(".aspects_inner_container_second_r_box_heading", {
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 3,
                            ease: "power3.inOut"
                        }, 0), G.to(".aspects_inner_container_second_r_box_link", {
                            opacity: 1,
                            duration: 3,
                            ease: "power3.inOut"
                        }, 2), G.to(".aspects_inner_container_second_r_box_stickers_one", {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 0), G.to(".aspects_inner_container_second_r_box_stickers_second", {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, .5), G.to(".aspects_inner_container_second_r_box_stickers_third", {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 1), G.to(".aspects_inner_container_second_r_box_stickers_fourth", {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 1.5), G.to(".aspects_inner_container_second_r_box_stickers_fifth", {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 2), G.to(".aspects_inner_container_second_r_box_stickers_sixth", {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 2.5);
                        var E = _.p8.timeline({
                            id: "react_speed",
                            paused: !0,
                            scrollTrigger: {
                                start: "150 center",
                                end: "bottom bottom",
                                markers: !1,
                                trigger: ".aspects_inner_container_fifth_l"
                            }
                        });
                        E.fromTo(".aspects_inner_container_fifth_l_box_content h3", {
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 0), E.fromTo(".react_logo_container", {}, {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 1), E.fromTo(".fifth_p1", {
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 2), E.to(".aspects_inner_container_fifth_l_box_background", {
                            filter: "brightness(.6)",
                            duration: 2,
                            ease: "power3.inOut"
                        }, 2), _.p8.timeline({
                            id: "footer_anim",
                            paused: !0,
                            scrollTrigger: {
                                start: "80% center",
                                end: "130% bottom",
                                markers: !1,
                                trigger: ".aspects",
                                scrub: 1
                            }
                        }).to(".aspects", {
                            scale: .9,
                            duration: 10,
                            opacity: .2,
                            ease: "power3.inOut"
                        }, 0)
                    })), b(document).ready((function(e) {
                        for (var t = [], o = [4, 6, 8, 10], a = 0; a < e(".bubbles").width(); a++) t.push(a);

                        function i(e) {
                            return e[Math.floor(Math.random() * e.length)]
                        }
                        setInterval((function() {
                            var a = i(o);
                            e(".bubbles").append('<div class="individual-bubble" style="left: '.concat(i(t), "px; width: ").concat(a, "px; height:").concat(a, 'px;"></div>')), e(".individual-bubble").animate({
                                bottom: "100%",
                                opacity: "-=0.7"
                            }, 3e3, (function() {
                                e(this).remove()
                            }))
                        }), 350)
                    }))
                }
            }
        },
        o = {};

    function a(e) {
        var i = o[e];
        if (void 0 !== i) return i.exports;
        var r = o[e] = {
            exports: {}
        };
        return t[e].call(r.exports, r, r.exports, a), r.exports
    }
    a.m = t, e = [], a.O = (t, o, i, r) => {
        if (!o) {
            var n = 1 / 0;
            for (p = 0; p < e.length; p++) {
                for (var [o, i, r] = e[p], s = !0, _ = 0; _ < o.length; _++)(!1 & r || n >= r) && Object.keys(a.O).every((e => a.O[e](o[_]))) ? o.splice(_--, 1) : (s = !1, r < n && (n = r));
                s && (e.splice(p--, 1), t = i())
            }
            return t
        }
        r = r || 0;
        for (var p = e.length; p > 0 && e[p - 1][2] > r; p--) e[p] = e[p - 1];
        e[p] = [o, i, r]
    }, a.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return a.d(t, {
            a: t
        }), t
    }, a.d = (e, t) => {
        for (var o in t) a.o(t, o) && !a.o(e, o) && Object.defineProperty(e, o, {
            enumerable: !0,
            get: t[o]
        })
    }, a.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), a.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        var e = {
            826: 0
        };
        a.O.j = t => 0 === e[t];
        var t = (t, o) => {
                var i, r, [n, s, _] = o,
                    p = 0;
                for (i in s) a.o(s, i) && (a.m[i] = s[i]);
                if (_) var c = _(a);
                for (t && t(o); p < n.length; p++) r = n[p], a.o(e, r) && e[r] && e[r][0](), e[n[p]] = 0;
                return a.O(c)
            },
            o = self.webpackChunkEvolves_Website = self.webpackChunkEvolves_Website || [];
        o.forEach(t.bind(null, 0)), o.push = t.bind(null, o.push.bind(o))
    })();
    var i = a.O(void 0, [630, 42, 664, 482, 755, 890, 886, 468], (() => a(5579)));
    i = a.O(i)
})();
//# sourceMappingURL=index.bc158a8e.js.map