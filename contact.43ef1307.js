(() => {
    "use strict";
    var e, t = {
            6176: (e, t, o) => {
                var n = o(320),
                    a = o(9755),
                    i = o.n(a),
                    r = o(6808),
                    c = o.n(r),
                    s = o(2642),
                    u = o(1325),
                    l = o(7417),
                    d = o(6366),
                    p = o(9127),
                    m = o(7082),
                    _ = o(898),
                    y = o(2411),
                    f = o(5608),
                    h = o(8222),
                    g = o(468),
                    b = o.n(g),
                    v = (o(886), o(8509));

                function w(e) {
                    return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function O(e, t) {
                    return (O = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function k(e, t) {
                    return !t || "object" !== w(t) && "function" != typeof t ? function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t
                }

                function x(e) {
                    return (x = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }

                function q(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function T(e, t) {
                    for (var o = 0; o < t.length; o++) {
                        var n = t[o];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function E(e, t, o) {
                    return t && T(e.prototype, t), o && T(e, o), e
                }
                if (window.location.href.indexOf("de-DE") > -1) var C = "Das sieht super aus!",
                    B = "Bitte f??lle schnell den Firmenname aus",
                    I = "Es sollten mindestens drei Buchstaben sein",
                    D = "Bitte f??lle schnell die Unternehmens-Website aus",
                    S = "Es sollten mindestens drei Buchstaben sein",
                    L = "Bitte beschreibe Dein aktuelles Anliegen",
                    P = "Es sollten mindestens f??nf Buchstaben sein",
                    A = "Hmm? Etwa au??erirdisch?",
                    j = "Es sollte Dein Vor- und Nachname sein",
                    R = "Du hast keine Email Adresse? Dann geht es hier nicht weiter!",
                    M = "Ohje, diese Email Adresse sieht seltsam aus!",
                    N = "Unser gesch??ftlicher Sitz ist die europ??ische Union. Bitte akzeptieren Sie die Datenschutzbestimmungen.",
                    z = "Bitte w??hle einer der oberen Punkte aus",
                    Z = "Ohne Budget k??nnen wir leider kein genaues Angebot erstellen",
                    H = "schlie??en",
                    F = "Schmeckt gut, wa? ????";
                else C = "It looks awesome!", B = "Please fill your company name", I = "It should be minimum 3 characters", D = "Please fill your company website", S = "It should be minimum 3 characters", L = "Please describe your actual digital problem", P = "It should be minimum 5 characters", A = "Whoo? Some extraterrestrial?", j = "It should be your name and surname", R = "Empty mail field in our decade? No way!", M = "That email address looks a bit weird!", N = "We operate out of the european union. Please accept our privacy regulations.", z = "Please select one of the services above.", Z = "Oh c'mon! Give us a range.", H = "close", F = "Cookies accepted bro ????";
                window.addEventListener("orientationchange", (function() {
                    window.location.reload()
                })), window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (function(e) {
                    location.reload()
                })), window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (function(e) {
                    location.reload()
                }));
                var W, U, G, Y, Q, V = window.matchMedia("(min-width: 1150px)"),
                    J = window.matchMedia("(max-width: 1150px)"),
                    X = window.matchMedia("(prefers-color-scheme: light)");
                if (window.matchMedia("(prefers-color-scheme: dark)"), o(3587), W = document.getElementById("pre_entry_animation_video_content"), U = document.createElement("source"), X.matches ? U.setAttribute("src", "../../assets/video/video_2_pre_entry_light.mp4") : U.setAttribute("src", "../../assets/video/video_2_pre_entry_dark.mp4"), W.appendChild(U), s.p8.registerPlugin(u.c, l.X, d.z, p.L, m.i, _.W, y.s, f.W, h.A), J.matches) {
                    m.i.config({
                        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
                    });
                    var K = document.getElementsByClassName("nav_bar_modal"),
                        $ = document.getElementsByClassName("pre_entry_animation"),
                        ee = document.getElementsByClassName("form_successful_modal");
                    i()(document).ready((function() {
                        (0, v.Qp)($),
                        function() {
                            if (c().get("entry_animation", "played")) {
                                var e = s.p8.timeline({
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
                                    (0, v.tG)($)
                                }), null, 2), e.play()
                            } else {
                                var t = s.p8.timeline({
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
                                    oe.play()
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
                                    (0, v.tG)($)
                                }), null, 10), t.set(".pre_entry_animation", {
                                    display: "none"
                                }, 10), t.play(), c().set("entry_animation", "played", {
                                    expires: 7
                                })
                            }
                        }(), c().get("cookies", "accepted") ? function(e, t, o) {
                            t.ChatraID = "bRth8u6fmZR6ZN8ym";
                            var n = e.createElement("script");
                            t[o] = t[o] || function() {
                                (t[o].q = t[o].q || []).push(arguments)
                            }, n.async = !0, n.src = "https://call.chatra.io/chatra.js", e.head && e.head.appendChild(n)
                        }(document, window, "Chatra") : ie.play(), window.cookie_accepted = function() {
                            c().set("cookies", "accepted", {
                                expires: 30
                            }), re.play()
                        };
                        var e = s.p8.timeline({
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
                        }, 0)
                    })), new(b())({
                        accessToken: InstagramToken,
                        target: "instagram_feed",
                        limit: 3,
                        template: '<div class="instagram_feed_picture"><a href="{{link}}"><img class="instagram_feed_picture_img" title="{{caption}}" src="{{image}}" /><span class="instagram_feed_text">{{caption}}</span></a></div>'
                    }).run(), i()(document).ready((function() {
                        i()("#form").validate({
                            invalidHandler: function(e, t) {
                                console.log("something failed");
                                var o = t.numberOfInvalids();
                                if (o) {
                                    var n = 1 == o ? "You missed 1 field. It has been highlighted" : "You missed ".concat(o, " fields. They have been highlighted");
                                    i()("div.error span").html(n), i()("div.error").show()
                                } else i()("div.error").hide()
                            },
                            submitHandler: function(e) {
                                event.preventDefault(), e = i()("#form")[0];
                                var t = new FormData(e);
                                t.append("file_upload", i()("input[type=file]")[0].files[0]), i().post("/contact_mail", {
                                    token: fe
                                }, (function(e) {
                                    !1 === e ? console.log("failed") : (console.log("success"), i().ajax({
                                        type: "POST",
                                        enctype: "multipart/form-data",
                                        url: "https://api.evolves.agency/webhook/ae13cc38-4daf-44e8-86bd-52d1320abf43",
                                        data: t,
                                        processData: !1,
                                        contentType: !1,
                                        cache: !1,
                                        timeout: 6e5,
                                        statusCode: {
                                            200: function(e) {
                                                console.log("200"), (0, v.Qp)(ee), ce.play()
                                            },
                                            404: function(e) {
                                                console.log("404")
                                            }
                                        }
                                    }))
                                }))
                            },
                            success: function(e) {
                                e.addClass("valid").text(C)
                            },
                            errorPlacement: function(e, t) {
                                e.appendTo(t.parents(".error_container"))
                            },
                            rules: {
                                name_company: {
                                    required: !1,
                                    minlength: 3
                                },
                                link_website: {
                                    required: !1,
                                    minlength: 3
                                },
                                problem_today: {
                                    required: !1,
                                    minlength: 5
                                },
                                personal_name: {
                                    required: !0,
                                    minlength: 5
                                },
                                personal_mail: {
                                    email: !0,
                                    required: !0
                                },
                                privacy: {
                                    required: !0
                                },
                                service: {
                                    required: !0
                                },
                                budget: {
                                    required: !0
                                }
                            },
                            messages: {
                                name_company: {
                                    required: B,
                                    minlength: I
                                },
                                link_website: {
                                    required: D,
                                    minlength: S
                                },
                                problem_today: {
                                    required: L,
                                    minlength: P
                                },
                                personal_name: {
                                    required: A,
                                    minlength: j
                                },
                                personal_mail: {
                                    required: R,
                                    email: M
                                },
                                privacy: {
                                    required: N
                                },
                                service: {
                                    required: z
                                },
                                budget: {
                                    required: Z
                                }
                            }
                        })
                    })), i()("#cbx").click((function() {
                        grecaptcha.ready((function() {
                            grecaptcha.execute("6LddLBMaAAAAAIeZDzDWoD2UAzyuVvsUHzzlDqJb").then((function(e) {
                                console.log("recaptcha_executed"), fe = e
                            }))
                        }))
                    }));
                    var te = function() {
                        for (var e = document.querySelector("#myfiles").files, t = e.length, o = 0; o < t;) e[o], o++, document.querySelector(".files_uploaded_content").innerHTML = o
                    };
                    document.querySelector("#myfiles").onchange = te, i()('.contact_formular_question_4 input[type="checkbox"]').on("change", (function() {
                        i()('.contact_formular_question_4 input[type="checkbox"]').not(this).prop("checked", !1)
                    }));
                    var oe = document.getElementById("pre_entry_animation_video_content"),
                        ne = document.getElementById("menu_magnetic_target"),
                        ae = document.getElementById("menu_icon_svg");
                    window.menu_logical = function() {
                        ne.classList.contains("active") ? ((0, v.tG)(K), se.reverse(), ne.classList.remove("active"), ae.classList.remove("active")) : ((0, v.Qp)(K), se.play(), ne.classList.add("active"), ae.classList.add("active"))
                    };
                    var ie = s.p8.timeline({
                        id: "cookie_notification",
                        paused: !0
                    });
                    ie.set(".cookie_notification_box", {
                        display: "block"
                    }, 0), ie.fromTo(".cookie_notification", {
                        y: 150
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0);
                    var re = s.p8.timeline({
                        id: "cookie_notification_accepted",
                        paused: !0
                    });
                    re.to(".cookie_notification_content a", {
                        opacity: 0,
                        duration: .5,
                        ease: "power3.inOut"
                    }, 0), re.to(".cookie_notification_content p", {
                        text: {
                            value: F
                        },
                        duration: 2,
                        ease: "power3.inOut"
                    }, .5), re.to(".cookie_notification", {
                        filter: "blur(15px)",
                        opacity: 0,
                        duration: 1,
                        ease: "power3.inOut"
                    }, 4.5), re.set(".cookie_notification_box", {
                        display: "none"
                    }, 5.5), re.add((function() {
                        ! function(e, t, o) {
                            t.ChatraID = "bRth8u6fmZR6ZN8ym";
                            var n = e.createElement("script");
                            t[o] = t[o] || function() {
                                (t[o].q = t[o].q || []).push(arguments)
                            }, n.async = !0, n.src = "https://call.chatra.io/chatra.js", e.head && e.head.appendChild(n)
                        }(document, window, "Chatra")
                    }), null, 5.5);
                    var ce = s.p8.timeline({
                        id: "contact_form_send",
                        paused: !0
                    });
                    ce.set(".form_successful_modal", {
                        display: "block"
                    }, 0), ce.to(".form_successful_modal", {
                        opacity: 1,
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0), ce.to(".form_successful_box", {
                        opacity: 1,
                        duration: 2,
                        ease: "power3.inOut"
                    }, 1), ce.to(".form_successful_box_icon", {
                        opacity: 1,
                        duration: 2,
                        ease: "power3.inOut"
                    }, 1), ce.add((function() {
                        document.getElementById("checkmark").play()
                    }), null, 0), ce.fromTo(".form_successful_box_font", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 2,
                        ease: "power3.inOut"
                    }, 1.25), ce.fromTo(".form_successful_box_subheading", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 2,
                        ease: "power3.inOut"
                    }, 1.5), ce.fromTo(".form_successful_box_note", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 2,
                        ease: "power3.inOut"
                    }, 1.75), ce.to(".form_successful_modal", {
                        duration: 2
                    }, 3.5), ce.add((function() {
                        setInterval((function() {
                            location.reload(), (0, v.tG)(ee)
                        }), 5e3)
                    }), null, 6), s.p8.timeline({
                        repeat: -1,
                        yoyo: !0,
                        ease: "power2.inOut"
                    }).fromTo(".scrolling_text_two", {
                        x: 1200
                    }, {
                        x: -15e3,
                        duration: 120
                    }, 0);
                    var se = s.p8.timeline({
                        id: "menu_animation",
                        paused: !0
                    });
                    se.to("main", {
                        filter: "grayscale(1)",
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0), se.fromTo(".nav_bar", {
                        backdropFilter: "blur(15px)"
                    }, {
                        backdropFilter: "blur(0px)",
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0), se.to(".nav_bar_background", {
                        opacity: 0,
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0), se.fromTo(".nav_bar_modal_mobile", {
                        display: "none"
                    }, {
                        display: "block",
                        duration: .1
                    }, 0), se.fromTo(".nav_bar_modal_mobile", {
                        x: 600
                    }, {
                        opacity: 1,
                        x: 0,
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0), se.fromTo(".nav_bar_modal_mobile .nav_bar_modal_content_first", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.inOut"
                    }, 1.75), se.fromTo(".nav_bar_modal_mobile .nav_bar_modal_content_second_mobile", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.inOut"
                    }, 2), se.fromTo(".nav_bar_modal_mobile .nav_bar_modal_content_third", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.inOut"
                    }, 2.25)
                }
                if (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) {
                    if (V.matches) {
                        m.i.config({
                            autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
                        }), K = document.getElementsByClassName("nav_bar_modal"), $ = document.getElementsByClassName("pre_entry_animation"), ee = document.getElementsByClassName("form_successful_modal"), i()(document).ready((function() {
                            document.body.scrollTop = document.documentElement.scrollTop = 0, (0, v.Qp)($),
                                function() {
                                    if (c().get("entry_animation", "played")) {
                                        var e = s.p8.timeline({
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
                                            (0, v.tG)($)
                                        }), null, 2), e.play()
                                    } else {
                                        var t = s.p8.timeline({
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
                                            oe.play()
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
                                            (0, v.tG)($)
                                        }), null, 10), t.set(".pre_entry_animation", {
                                            display: "none"
                                        }, 10), t.play(), c().set("entry_animation", "played", {
                                            expires: 7
                                        })
                                    }
                                }(), c().get("cookies", "accepted") ? function(e, t, o) {
                                    t.ChatraID = "bRth8u6fmZR6ZN8ym";
                                    var n = e.createElement("script");
                                    t[o] = t[o] || function() {
                                        (t[o].q = t[o].q || []).push(arguments)
                                    }, n.async = !0, n.src = "https://call.chatra.io/chatra.js", e.head && e.head.appendChild(n)
                                }(document, window, "Chatra") : ue.play(), window.cookie_accepted = function() {
                                    c().set("cookies", "accepted", {
                                        expires: 30
                                    }), le.play()
                                }
                        })), new(b())({
                            accessToken: InstagramToken,
                            target: "instagram_feed",
                            limit: 3,
                            template: '<div class="instagram_feed_picture"><a href="{{link}}"><img class="instagram_feed_picture_img" title="{{caption}}" src="{{image}}" /><span class="instagram_feed_text">{{caption}}</span></a></div>'
                        }).run(), i()(document).ready((function() {
                            i()("#form").validate({
                                invalidHandler: function(e, t) {
                                    console.log("something failed");
                                    var o = t.numberOfInvalids();
                                    if (o) {
                                        var n = 1 == o ? "You missed 1 field. It has been highlighted" : "You missed ".concat(o, " fields. They have been highlighted");
                                        i()("div.error span").html(n), i()("div.error").show()
                                    } else i()("div.error").hide()
                                },
                                submitHandler: function(e) {
                                    event.preventDefault(), e = i()("#form")[0];
                                    var t = new FormData(e);
                                    t.append("file_upload", i()("input[type=file]")[0].files[0]), i().post("/contact_mail", {
                                        token: fe
                                    }, (function(e) {
                                        !1 === e ? console.log("failed") : (console.log("success"), i().ajax({
                                            type: "POST",
                                            enctype: "multipart/form-data",
                                            url: "https://api.evolves.agency/webhook/ae13cc38-4daf-44e8-86bd-52d1320abf43",
                                            data: t,
                                            processData: !1,
                                            contentType: !1,
                                            cache: !1,
                                            timeout: 6e5,
                                            statusCode: {
                                                200: function(e) {
                                                    console.log("200"), (0, v.Qp)(ee), de.play()
                                                },
                                                404: function(e) {
                                                    console.log("404")
                                                }
                                            }
                                        }))
                                    }))
                                },
                                success: function(e) {
                                    e.addClass("valid").text(C)
                                },
                                errorPlacement: function(e, t) {
                                    e.appendTo(t.parents(".error_container"))
                                },
                                rules: {
                                    name_company: {
                                        required: !1,
                                        minlength: 3
                                    },
                                    link_website: {
                                        required: !1,
                                        minlength: 3
                                    },
                                    problem_today: {
                                        required: !1,
                                        minlength: 5
                                    },
                                    personal_name: {
                                        required: !0,
                                        minlength: 5
                                    },
                                    personal_mail: {
                                        email: !0,
                                        required: !0
                                    },
                                    privacy: {
                                        required: !0
                                    },
                                    service: {
                                        required: !0
                                    },
                                    budget: {
                                        required: !0
                                    }
                                },
                                messages: {
                                    name_company: {
                                        required: B,
                                        minlength: I
                                    },
                                    link_website: {
                                        required: D,
                                        minlength: S
                                    },
                                    problem_today: {
                                        required: L,
                                        minlength: P
                                    },
                                    personal_name: {
                                        required: A,
                                        minlength: j
                                    },
                                    personal_mail: {
                                        required: R,
                                        email: M
                                    },
                                    privacy: {
                                        required: N
                                    },
                                    service: {
                                        required: z
                                    },
                                    budget: {
                                        required: Z
                                    }
                                }
                            })
                        })), i()("#cbx").click((function() {
                            grecaptcha.ready((function() {
                                grecaptcha.execute("6LddLBMaAAAAAIeZDzDWoD2UAzyuVvsUHzzlDqJb").then((function(e) {
                                    console.log("recaptcha_executed"), fe = e
                                }))
                            }))
                        })), te = function() {
                            for (var e = document.querySelector("#myfiles").files, t = e.length, o = 0; o < t;) e[o], o++, document.querySelector(".files_uploaded_content").innerHTML = o
                        }, document.querySelector("#myfiles").onchange = te, i()('.contact_formular_question_4 input[type="checkbox"]').on("change", (function() {
                            i()('.contact_formular_question_4 input[type="checkbox"]').not(this).prop("checked", !1)
                        })), oe = document.getElementById("pre_entry_animation_video_content"), ne = document.getElementById("menu_magnetic_target"), ae = document.getElementById("menu_icon_svg"), window.menu_logical = function() {
                            ne.classList.contains("active") ? ((0, v.tG)(K), me.reverse(), ne.classList.remove("active"), ae.classList.remove("active")) : ((0, v.Qp)(K), me.play(), ne.classList.add("active"), ae.classList.add("active"))
                        };
                        var ue = s.p8.timeline({
                            id: "cookie_notification",
                            paused: !0
                        });
                        ue.set(".cookie_notification_box", {
                            display: "block"
                        }, 0), ue.fromTo(".cookie_notification", {
                            y: 150
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 0);
                        var le = s.p8.timeline({
                            id: "cookie_notification_accepted",
                            paused: !0
                        });
                        le.to(".cookie_notification_content a", {
                            opacity: 0,
                            duration: .5,
                            ease: "power3.inOut"
                        }, 0), le.to(".cookie_notification_content p", {
                            text: {
                                value: F
                            },
                            duration: 2,
                            ease: "power3.inOut"
                        }, .5), le.to(".cookie_notification", {
                            filter: "blur(15px)",
                            opacity: 0,
                            duration: 1,
                            ease: "power3.inOut"
                        }, 4.5), le.set(".cookie_notification_box", {
                            display: "none"
                        }, 5.5), le.add((function() {
                            ! function(e, t, o) {
                                t.ChatraID = "bRth8u6fmZR6ZN8ym";
                                var n = e.createElement("script");
                                t[o] = t[o] || function() {
                                    (t[o].q = t[o].q || []).push(arguments)
                                }, n.async = !0, n.src = "https://call.chatra.io/chatra.js", e.head && e.head.appendChild(n)
                            }(document, window, "Chatra")
                        }), null, 5.5);
                        var de = s.p8.timeline({
                            id: "contact_form_send",
                            paused: !0
                        });
                        de.set(".form_successful_modal", {
                            display: "block"
                        }, 0), de.to(".form_successful_modal", {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 0), de.to(".form_successful_box", {
                            scale: 1,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 1), de.to(".form_successful_box_icon", {
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 1), de.add((function() {
                            document.getElementById("checkmark").play()
                        }), null, 0), de.fromTo(".form_successful_box_font", {
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 1.25), de.fromTo(".form_successful_box_subheading", {
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 1.5), de.fromTo(".form_successful_box_note", {
                            y: 50
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.inOut"
                        }, 1.75), de.to(".form_successful_modal", {
                            duration: 2
                        }, 3.5), de.add((function() {
                            setInterval((function() {
                                location.reload()
                            }), 5e3)
                        }), null, 6), s.p8.timeline({
                            repeat: -1,
                            yoyo: !0,
                            ease: "power2.inOut"
                        }).fromTo(".scrolling_text_two", {
                            x: 1200
                        }, {
                            x: -15e3,
                            duration: 120
                        }, 0);
                        var pe = s.p8.timeline({
                            id: "contact_form",
                            scrollTrigger: {
                                trigger: ".contact_form",
                                start: "-400 center",
                                end: "1700 top",
                                markers: !1,
                                scrub: !0
                            }
                        });
                        pe.to(".scrolling_text_container", {
                            y: -100,
                            opacity: 0,
                            duration: 4,
                            ease: "power3.inOut"
                        }, 0), pe.fromTo(".contact_formular_question_1", {
                            y: 50,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 4,
                            ease: "power3.inOut"
                        }, 0), pe.to(".contact_formular_question_1 h2", {
                            duration: 2,
                            ease: "power3.inOut"
                        }, 0), pe.fromTo(".contact_formular_question_2", {
                            y: 50,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 4,
                            ease: "power3.inOut"
                        }, 2), pe.to(".contact_formular_question_2 h2", {
                            duration: 2,
                            ease: "power3.inOut"
                        }, 2), pe.fromTo(".contact_formular_question_3", {
                            y: 50,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 4,
                            ease: "power3.inOut"
                        }, 4), pe.to(".contact_formular_question_3 h2", {
                            duration: 2,
                            ease: "power3.inOut"
                        }, 4), pe.fromTo(".contact_formular_question_4", {
                            y: 50,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 4,
                            ease: "power3.inOut"
                        }, 6), pe.to(".contact_formular_question_4 h2", {
                            duration: 2,
                            ease: "power3.inOut"
                        }, 6), pe.fromTo(".contact_formular_question_5", {
                            y: 50,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 4,
                            ease: "power3.inOut"
                        }, 6);
                        var me = s.p8.timeline({
                            id: "menu_animation",
                            paused: !0
                        });
                        me.to(".menu_font_animation", {
                            text: {
                                value: H
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
                        }, 2.25);
                        var _e = s.p8.timeline({
                            id: "nav_animation",
                            scrollTrigger: {
                                trigger: ".nav_bar",
                                start: "top top",
                                end: "950 center",
                                markers: !1,
                                scrub: !0
                            }
                        });
                        _e.to(".nav_bar_background", {
                            opacity: .2,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 5), _e.to(".logo_svg_icon", {
                            opacity: 0,
                            duration: 5,
                            ease: "power3.inOut"
                        }, 0), _e.to(".logo_schrift", {
                            width: "200px",
                            x: -49,
                            duration: 10,
                            ease: "power3.inOut"
                        }, 0);
                        var ye = s.p8.timeline({
                            id: "footer_anim",
                            paused: !0,
                            scrollTrigger: {
                                start: "80% center",
                                end: "110% bottom",
                                markers: !1,
                                trigger: ".contact_form",
                                scrub: 1
                            }
                        });
                        ye.to("body", {
                            backgroundColor: "white",
                            duration: 1,
                            ease: "power3.inOut"
                        }, 0), ye.to(".contact_form", {
                            scale: .9,
                            duration: 10,
                            filter: "grayscale(1)",
                            ease: "power3.inOut"
                        }, 0)
                    }
                } else if (V.matches) {
                    var fe;
                    i()(document).ready((function() {
                        ! function() {
                            if (c().get("entry_animation", "played")) {
                                var e = s.p8.timeline({
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
                                var t = s.p8.timeline({
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
                                    oe.play()
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
                                    be.updatePluginOptions("modal", {
                                        open: !1
                                    })
                                }), null, 10), t.set(".pre_entry_animation", {
                                    display: "none"
                                }, 10), t.play(), be.updatePluginOptions("modal", {
                                    open: !0
                                }), c().set("entry_animation", "played", {
                                    expires: 7
                                })
                            }
                        }(), c().get("cookies", "accepted") ? function(e, t, o) {
                            t.ChatraID = "bRth8u6fmZR6ZN8ym";
                            var n = e.createElement("script");
                            t[o] = t[o] || function() {
                                (t[o].q = t[o].q || []).push(arguments)
                            }, n.async = !0, n.src = "https://call.chatra.io/chatra.js", e.head && e.head.appendChild(n)
                        }(document, window, "Chatra") : Ee.play(), window.cookie_accepted = function() {
                            c().set("cookies", "accepted", {
                                expires: 30
                            }), Ce.play()
                        }
                    })), new(b())({
                        accessToken: InstagramToken,
                        target: "instagram_feed",
                        limit: 3,
                        template: '<div class="instagram_feed_picture"><a href="{{link}}"><img class="instagram_feed_picture_img" title="{{caption}}" src="{{image}}" /><span class="instagram_feed_text">{{caption}}</span></a></div>'
                    }).run(), G = document.querySelector(".cursor"), Y = document.querySelector(".menu_magnetic_target"), Q = document.querySelector(".menu_magnetic_icon"), new(function() {
                        function e(t) {
                            q(this, e), this.el = t, this.bind()
                        }
                        return E(e, [{
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
                                    var n = e.getBoundingClientRect().width,
                                        a = e.getBoundingClientRect().left + e.getBoundingClientRect().width / 2,
                                        i = e.getBoundingClientRect().top + e.getBoundingClientRect().height / 2,
                                        r = {
                                            x: a - o.left,
                                            y: i - o.top
                                        },
                                        c = Math.atan2(r.x, r.y),
                                        u = Math.sqrt(r.x * r.x + r.y * r.y);
                                    u < n ? (s.p8.to(t.el, {
                                        left: a - Math.sin(c) * u / 3,
                                        top: i - Math.cos(c) * u / 3,
                                        height: "75px",
                                        width: "75px",
                                        duration: .5
                                    }), s.p8.to(Q, {
                                        x: -Math.sin(c) * u / 3,
                                        y: -Math.cos(c) * u / 3,
                                        duration: .5
                                    })) : (s.p8.to(t.el, {
                                        left: o.left,
                                        top: o.top,
                                        height: "12px",
                                        width: "12px",
                                        duration: .5
                                    }), s.p8.to(Q, {
                                        x: 0,
                                        y: 0,
                                        duration: .5
                                    }))
                                }))
                            }
                        }]), e
                    }())(G, Y), i()(document).ready((function() {
                        i()("#form").validate({
                            invalidHandler: function(e, t) {
                                console.log("something failed");
                                var o = t.numberOfInvalids();
                                if (o) {
                                    var n = 1 == o ? "You missed 1 field. It has been highlighted" : "You missed ".concat(o, " fields. They have been highlighted");
                                    i()("div.error span").html(n), i()("div.error").show()
                                } else i()("div.error").hide()
                            },
                            submitHandler: function(e) {
                                event.preventDefault(), e = i()("#form")[0];
                                var t = new FormData(e);
                                t.append("file_upload", i()("input[type=file]")[0].files[0]), i().post("/contact_mail", {
                                    token: fe
                                }, (function(e) {
                                    !1 === e ? console.log("failed") : (console.log("success"), i().ajax({
                                        type: "POST",
                                        enctype: "multipart/form-data",
                                        url: "https://api.evolves.agency/webhook/ae13cc38-4daf-44e8-86bd-52d1320abf43",
                                        data: t,
                                        processData: !1,
                                        contentType: !1,
                                        cache: !1,
                                        timeout: 6e5,
                                        statusCode: {
                                            200: function(e) {
                                                console.log("200"), Be.play()
                                            },
                                            404: function(e) {
                                                console.log("404")
                                            }
                                        }
                                    }))
                                }))
                            },
                            success: function(e) {
                                e.addClass("valid").text(C)
                            },
                            errorPlacement: function(e, t) {
                                e.appendTo(t.parents(".error_container"))
                            },
                            rules: {
                                name_company: {
                                    required: !1,
                                    minlength: 3
                                },
                                link_website: {
                                    required: !1,
                                    minlength: 3
                                },
                                problem_today: {
                                    required: !1,
                                    minlength: 5
                                },
                                personal_name: {
                                    required: !0,
                                    minlength: 5
                                },
                                personal_mail: {
                                    email: !0,
                                    required: !0
                                },
                                privacy: {
                                    required: !0
                                },
                                service: {
                                    required: !0
                                },
                                budget: {
                                    required: !0
                                }
                            },
                            messages: {
                                name_company: {
                                    required: B,
                                    minlength: I
                                },
                                link_website: {
                                    required: D,
                                    minlength: S
                                },
                                problem_today: {
                                    required: L,
                                    minlength: P
                                },
                                personal_name: {
                                    required: A,
                                    minlength: j
                                },
                                personal_mail: {
                                    required: R,
                                    email: M
                                },
                                privacy: {
                                    required: N
                                },
                                service: {
                                    required: z
                                },
                                budget: {
                                    required: Z
                                }
                            }
                        })
                    })), i()("#cbx").click((function() {
                        grecaptcha.ready((function() {
                            grecaptcha.execute("6LddLBMaAAAAAIeZDzDWoD2UAzyuVvsUHzzlDqJb").then((function(e) {
                                console.log("recaptcha_executed"), fe = e
                            }))
                        }))
                    })), te = function() {
                        for (var e = document.querySelector("#myfiles").files, t = e.length, o = 0; o < t;) e[o], o++, document.querySelector(".files_uploaded_content").innerHTML = o
                    }, document.querySelector("#myfiles").onchange = te, i()('.contact_formular_question_4 input[type="checkbox"]').on("change", (function() {
                        i()('.contact_formular_question_4 input[type="checkbox"]').not(this).prop("checked", !1)
                    })), document.getElementsByClassName("pre_entry_animation");
                    var he = function(e) {
                        ! function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && O(e, t)
                        }(a, e);
                        var t, o, n = (t = a, o = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (e) {
                                return !1
                            }
                        }(), function() {
                            var e, n = x(t);
                            if (o) {
                                var a = x(this).constructor;
                                e = Reflect.construct(n, arguments, a)
                            } else e = n.apply(this, arguments);
                            return k(this, e)
                        });

                        function a() {
                            return q(this, a), n.apply(this, arguments)
                        }
                        return E(a, [{
                            key: "transformDelta",
                            value: function(e) {
                                return this.options.open ? {
                                    x: 0,
                                    y: 0
                                } : e
                            }
                        }]), a
                    }(n.c);
                    he.pluginName = "modal", he.defaultOptions = {
                        open: !1
                    }, n.Z.use(he);
                    var ge = document.querySelector(".scroller"),
                        be = n.Z.init(ge, {
                            damping: .1,
                            renderByPixels: !0,
                            thumbMinSize: 100,
                            delegateTo: document,
                            alwaysShowTracks: !1,
                            syncCallbacks: !0
                        });
                    m.i.scrollerProxy(".scroller", {
                        scrollTop: function(e) {
                            return arguments.length && (be.scrollTop = e), be.scrollTop
                        }
                    }), be.addListener(m.i.update), m.i.defaults({
                        scroller: ge
                    }), be.track.xAxis.element.remove();
                    var ve = document.getElementsByClassName("menu_bar")[0],
                        we = document.getElementsByClassName("nav_bar_modal")[0],
                        Oe = document.getElementsByClassName("cursor_container")[0],
                        ke = document.getElementsByClassName("logo_bar")[0],
                        xe = document.getElementsByClassName("nav_bar")[0],
                        qe = document.getElementsByClassName("form_successful_modal")[0],
                        Te = document.getElementsByClassName("cookie_notification_box")[0];
                    be.addListener((function(e) {
                        var t = e.offset;
                        ve.style.top = "".concat(t.y, "px"), we.style.top = "".concat(t.y, "px"), Oe.style.top = "".concat(t.y, "px"), ke.style.top = "".concat(t.y, "px"), xe.style.top = "".concat(t.y, "px"), qe.style.top = "".concat(t.y, "px"), Te.style.top = "".concat(t.y, "px")
                    })), window.innerWidth, window.innerHeight, oe = document.getElementById("pre_entry_animation_video_content"), ne = document.getElementById("menu_magnetic_target"), ae = document.getElementById("menu_icon_svg"), window.menu_logical = function() {
                        ne.classList.contains("active") ? (be.updatePluginOptions("modal", {
                            open: !1
                        }), De.reverse(), ne.classList.remove("active"), ae.classList.remove("active")) : (be.updatePluginOptions("modal", {
                            open: !0
                        }), De.play(), ne.classList.add("active"), ae.classList.add("active"))
                    };
                    var Ee = s.p8.timeline({
                        id: "cookie_notification",
                        paused: !0
                    });
                    Ee.set(".cookie_notification_box", {
                        display: "block"
                    }, 0), Ee.fromTo(".cookie_notification", {
                        y: 150
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0);
                    var Ce = s.p8.timeline({
                        id: "cookie_notification_accepted",
                        paused: !0
                    });
                    Ce.to(".cookie_notification_content a", {
                        opacity: 0,
                        duration: .5,
                        ease: "power3.inOut"
                    }, 0), Ce.to(".cookie_notification_content p", {
                        text: {
                            value: F
                        },
                        duration: 2,
                        ease: "power3.inOut"
                    }, .5), Ce.to(".cookie_notification", {
                        filter: "blur(15px)",
                        opacity: 0,
                        duration: 1,
                        ease: "power3.inOut"
                    }, 4.5), Ce.set(".cookie_notification_box", {
                        display: "none"
                    }, 5.5), Ce.add((function() {
                        ! function(e, t, o) {
                            t.ChatraID = "bRth8u6fmZR6ZN8ym";
                            var n = e.createElement("script");
                            t[o] = t[o] || function() {
                                (t[o].q = t[o].q || []).push(arguments)
                            }, n.async = !0, n.src = "https://call.chatra.io/chatra.js", e.head && e.head.appendChild(n)
                        }(document, window, "Chatra")
                    }), null, 5.5);
                    var Be = s.p8.timeline({
                        id: "contact_form_send",
                        paused: !0
                    });
                    Be.set(".form_successful_modal", {
                        display: "block"
                    }, 0), Be.to(".form_successful_modal", {
                        opacity: 1,
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0), Be.to(".form_successful_box", {
                        scale: 1,
                        opacity: 1,
                        duration: 2,
                        ease: "power3.inOut"
                    }, 1), Be.to(".form_successful_box_icon", {
                        opacity: 1,
                        duration: 2,
                        ease: "power3.inOut"
                    }, 1), Be.add((function() {
                        document.getElementById("checkmark").play()
                    }), null, 0), Be.fromTo(".form_successful_box_font", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 2,
                        ease: "power3.inOut"
                    }, 1.25), Be.fromTo(".form_successful_box_subheading", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 2,
                        ease: "power3.inOut"
                    }, 1.5), Be.fromTo(".form_successful_box_note", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 2,
                        ease: "power3.inOut"
                    }, 1.75), Be.to(".form_successful_modal", {
                        duration: 2
                    }, 3.5), Be.add((function() {
                        setInterval((function() {
                            location.reload()
                        }), 5e3)
                    }), null, 6), s.p8.timeline({
                        repeat: -1,
                        yoyo: !0,
                        ease: "power2.inOut"
                    }).fromTo(".scrolling_text_two", {
                        x: 1200
                    }, {
                        x: -15e3,
                        duration: 120
                    }, 0);
                    var Ie = s.p8.timeline({
                        id: "contact_form",
                        scrollTrigger: {
                            trigger: ".contact_form",
                            start: "-400 center",
                            end: "1700 top",
                            markers: !1,
                            scrub: !0
                        }
                    });
                    Ie.to(".scrolling_text_container", {
                        y: -100,
                        opacity: 0,
                        duration: 4,
                        ease: "power3.inOut"
                    }, 0), Ie.fromTo(".contact_formular_question_1", {
                        y: 50,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 4,
                        ease: "power3.inOut"
                    }, 0), Ie.to(".contact_formular_question_1 h2", {
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0), Ie.fromTo(".contact_formular_question_2", {
                        y: 50,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 4,
                        ease: "power3.inOut"
                    }, 2), Ie.to(".contact_formular_question_2 h2", {
                        duration: 2,
                        ease: "power3.inOut"
                    }, 2), Ie.fromTo(".contact_formular_question_3", {
                        y: 50,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 4,
                        ease: "power3.inOut"
                    }, 4), Ie.to(".contact_formular_question_3 h2", {
                        duration: 2,
                        ease: "power3.inOut"
                    }, 4), Ie.fromTo(".contact_formular_question_4", {
                        y: 50,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 4,
                        ease: "power3.inOut"
                    }, 6), Ie.to(".contact_formular_question_4 h2", {
                        duration: 2,
                        ease: "power3.inOut"
                    }, 6), Ie.fromTo(".contact_formular_question_5", {
                        y: 50,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 4,
                        ease: "power3.inOut"
                    }, 6);
                    var De = s.p8.timeline({
                        id: "menu_animation",
                        paused: !0
                    });
                    De.to(".menu_font_animation", {
                        text: {
                            value: H
                        },
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0), De.to("main", {
                        filter: "grayscale(1)",
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0), De.fromTo(".nav_bar", {
                        backdropFilter: "blur(15px)"
                    }, {
                        backdropFilter: "blur(0px)",
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0), De.to(".nav_bar_background", {
                        opacity: 0,
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0), De.fromTo(".nav_bar_modal", {
                        display: "none"
                    }, {
                        display: "block",
                        duration: .1
                    }, 0), De.fromTo(".nav_bar_modal", {
                        x: 600
                    }, {
                        opacity: 1,
                        x: 0,
                        duration: 2,
                        ease: "power3.inOut"
                    }, 0), De.fromTo(".nav_bar_modal_content_logo", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.inOut"
                    }, 1), De.fromTo(".nav_bar_modal_content_heading", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.inOut"
                    }, 1.25), De.fromTo(".nav_bar_modal_content_subheading", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.inOut"
                    }, 1.5), De.fromTo(".nav_bar_modal_content_second_inner_menu_heading_first", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.inOut"
                    }, 1.75), De.fromTo(".nav_bar_modal_content_second_inner_menu_heading_second", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.inOut"
                    }, 1.75), De.fromTo(".nav_bar_modal_content_second_inner_menu_socials", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.inOut"
                    }, 1.75), De.fromTo(".nav_bar_modal_content_second_inner_menu_menu", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.inOut"
                    }, 1.75), De.fromTo(".nav_bar_modal_content_third_text", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.inOut"
                    }, 2), De.fromTo(".nav_bar_modal_content_third_mail", {
                        y: 50
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.inOut"
                    }, 2.25);
                    var Se = s.p8.timeline({
                        id: "nav_animation",
                        scrollTrigger: {
                            trigger: ".nav_bar",
                            start: "top top",
                            end: "950 center",
                            markers: !1,
                            scrub: !0
                        }
                    });
                    Se.to(".nav_bar_background", {
                        opacity: .2,
                        duration: 10,
                        ease: "power3.inOut"
                    }, 5), Se.to(".logo_svg_icon", {
                        opacity: 0,
                        duration: 5,
                        ease: "power3.inOut"
                    }, 0), Se.to(".logo_schrift", {
                        width: "200px",
                        x: -49,
                        duration: 10,
                        ease: "power3.inOut"
                    }, 0);
                    var Le = s.p8.timeline({
                        id: "footer_anim",
                        paused: !0,
                        scrollTrigger: {
                            start: "90% center",
                            end: "120% bottom",
                            markers: !1,
                            trigger: ".contact_form",
                            scrub: 1
                        }
                    });
                    Le.to("body", {
                        backgroundColor: "white",
                        duration: 1,
                        ease: "power3.inOut"
                    }, 0), Le.to(".contact_form", {
                        scale: .9,
                        duration: 10,
                        filter: "grayscale(1)",
                        ease: "power3.inOut"
                    }, 0)
                }
            }
        },
        o = {};

    function n(e) {
        var a = o[e];
        if (void 0 !== a) return a.exports;
        var i = o[e] = {
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, n), i.exports
    }
    n.m = t, e = [], n.O = (t, o, a, i) => {
        if (!o) {
            var r = 1 / 0;
            for (u = 0; u < e.length; u++) {
                for (var [o, a, i] = e[u], c = !0, s = 0; s < o.length; s++)(!1 & i || r >= i) && Object.keys(n.O).every((e => n.O[e](o[s]))) ? o.splice(s--, 1) : (c = !1, i < r && (r = i));
                c && (e.splice(u--, 1), t = a())
            }
            return t
        }
        i = i || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
        e[u] = [o, a, i]
    }, n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }), t
    }, n.d = (e, t) => {
        for (var o in t) n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, {
            enumerable: !0,
            get: t[o]
        })
    }, n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        var e = {
            631: 0
        };
        n.O.j = t => 0 === e[t];
        var t = (t, o) => {
                var a, i, [r, c, s] = o,
                    u = 0;
                for (a in c) n.o(c, a) && (n.m[a] = c[a]);
                if (s) var l = s(n);
                for (t && t(o); u < r.length; u++) i = r[u], n.o(e, i) && e[i] && e[i][0](), e[r[u]] = 0;
                return n.O(l)
            },
            o = self.webpackChunkEvolves_Website = self.webpackChunkEvolves_Website || [];
        o.forEach(t.bind(null, 0)), o.push = t.bind(null, o.push.bind(o))
    })();
    var a = n.O(void 0, [630, 42, 664, 482, 755, 890, 886, 587, 468], (() => n(6176)));
    a = n.O(a)
})();
//# sourceMappingURL=contact.43ef1307.js.map