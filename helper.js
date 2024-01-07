/*!For license information see mcpacks.pack.js.licenses.txt*/
if (!function(h, T) {
    function e(t, e) {
        return e.toUpperCase()
    }
    function i() {
        m.addEventListener ? (m.removeEventListener("DOMContentLoaded", B, !1),
            h.removeEventListener("load", B, !1)) : (m.detachEvent("onreadystatechange", B),
            h.detachEvent("onload", B))
    }
    var r, g = typeof T, m = h.document, t = h.location, n = h.jQuery, o = h.$, s = {}, p = [], a = "1.9.1", y = p.concat, l = p.push, u = p.slice, c = p.indexOf, f = s.toString, v = s.hasOwnProperty, d = a.trim, dt = function(t, e) {
        return new dt.fn.init(t,e,O)
    }, b = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, C = /\S+/g, x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, w = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, S = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, k = /^[\],:{}\s]*$/, E = /(?:^|:|,)(?:\s*\[)+/g, N = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D = /^-ms-/, _ = /-([\da-z])/gi, B = function(t) {
        !m.addEventListener && "load" !== t.type && "complete" !== m.readyState || (i(),
            dt.ready())
    };
    function j(t) {
        var e = t.length
            , n = dt.type(t);
        return !dt.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || "function" !== n && (0 === e || "number" == typeof e && 0 < e && e - 1 in t)))
    }
    dt.fn = dt.prototype = {
        jquery: a,
        constructor: dt,
        init: function(t, e, n) {
            var i, r;
            if (!t)
                return this;
            if ("string" != typeof t)
                return t.nodeType ? (this.context = this[0] = t,
                    this.length = 1,
                    this) : dt.isFunction(t) ? n.ready(t) : (t.selector !== T && (this.selector = t.selector,
                    this.context = t.context),
                    dt.makeArray(t, this));
            if (!(i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && 3 <= t.length ? [null, t, null] : w.exec(t)) || !i[1] && e)
                return (!e || e.jquery ? e || n : this.constructor(e)).find(t);
            if (i[1]) {
                if (e = e instanceof dt ? e[0] : e,
                    dt.merge(this, dt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : m, !0)),
                S.test(i[1]) && dt.isPlainObject(e))
                    for (i in e)
                        dt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            if ((r = m.getElementById(i[2])) && r.parentNode) {
                if (r.id !== i[2])
                    return n.find(t);
                this.length = 1,
                    this[0] = r
            }
            return this.context = m,
                this.selector = t,
                this
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return u.call(this)
        },
        get: function(t) {
            return null == t ? this.toArray() : t < 0 ? this[this.length + t] : this[t]
        },
        pushStack: function(t) {
            t = dt.merge(this.constructor(), t);
            return t.prevObject = this,
                t.context = this.context,
                t
        },
        each: function(t, e) {
            return dt.each(this, t, e)
        },
        ready: function(t) {
            return dt.ready.promise().done(t),
                this
        },
        slice: function() {
            return this.pushStack(u.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length
                , t = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= t && t < e ? [this[t]] : [])
        },
        map: function(n) {
            return this.pushStack(dt.map(this, function(t, e) {
                return n.call(t, e, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: l,
        sort: [].sort,
        splice: [].splice
    },
        dt.fn.init.prototype = dt.fn,
        dt.extend = dt.fn.extend = function() {
            var t, e, n, i, r, o = arguments[0] || {}, s = 1, a = arguments.length, l = !1;
            for ("boolean" == typeof o && (l = o,
                o = arguments[1] || {},
                s = 2),
                 "object" == typeof o || dt.isFunction(o) || (o = {}),
                 a === s && (o = this,
                     --s); s < a; s++)
                if (null != (i = arguments[s]))
                    for (n in i)
                        r = o[n],
                        o !== (e = i[n]) && (l && e && (dt.isPlainObject(e) || (t = dt.isArray(e))) ? (r = t ? (t = !1,
                            r && dt.isArray(r) ? r : []) : r && dt.isPlainObject(r) ? r : {},
                            o[n] = dt.extend(l, r, e)) : e !== T && (o[n] = e));
            return o
        }
        ,
        dt.extend({
            noConflict: function(t) {
                return h.$ === dt && (h.$ = o),
                t && h.jQuery === dt && (h.jQuery = n),
                    dt
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? dt.readyWait++ : dt.ready(!0)
            },
            ready: function(t) {
                if (!0 === t ? !--dt.readyWait : !dt.isReady) {
                    if (!m.body)
                        return setTimeout(dt.ready);
                    (dt.isReady = !0) !== t && 0 < --dt.readyWait || (r.resolveWith(m, [dt]),
                    dt.fn.trigger && dt(m).trigger("ready").off("ready"))
                }
            },
            isFunction: function(t) {
                return "function" === dt.type(t)
            },
            isArray: Array.isArray || function(t) {
                return "array" === dt.type(t)
            }
            ,
            isWindow: function(t) {
                return null != t && t == t.window
            },
            isNumeric: function(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            },
            type: function(t) {
                return null == t ? String(t) : "object" == typeof t || "function" == typeof t ? s[f.call(t)] || "object" : typeof t
            },
            isPlainObject: function(t) {
                if (!t || "object" !== dt.type(t) || t.nodeType || dt.isWindow(t))
                    return !1;
                try {
                    if (t.constructor && !v.call(t, "constructor") && !v.call(t.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (t) {
                    return !1
                }
                for (var e in t)
                    ;
                return e === T || v.call(t, e)
            },
            isEmptyObject: function(t) {
                for (var e in t)
                    return !1;
                return !0
            },
            error: function(t) {
                throw new Error(t)
            },
            parseHTML: function(t, e, n) {
                if (!t || "string" != typeof t)
                    return null;
                "boolean" == typeof e && (n = e,
                    e = !1),
                    e = e || m;
                var i = S.exec(t)
                    , n = !n && [];
                return i ? [e.createElement(i[1])] : (i = dt.buildFragment([t], e, n),
                n && dt(n).remove(),
                    dt.merge([], i.childNodes))
            },
            parseJSON: function(t) {
                return h.JSON && h.JSON.parse ? h.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = dt.trim(t)) && k.test(t.replace(N, "@").replace(A, "]").replace(E, "")) ? new Function("return " + t)() : void dt.error("Invalid JSON: " + t)
            },
            parseXML: function(t) {
                var e;
                if (!t || "string" != typeof t)
                    return null;
                try {
                    h.DOMParser ? e = (new DOMParser).parseFromString(t, "text/xml") : ((e = new ActiveXObject("Microsoft.XMLDOM")).async = "false",
                        e.loadXML(t))
                } catch (t) {
                    e = T
                }
                return e && e.documentElement && !e.getElementsByTagName("parsererror").length || dt.error("Invalid XML: " + t),
                    e
            },
            noop: function() {},
            globalEval: function(t) {
                t && dt.trim(t) && (h.execScript || function(t) {
                        h.eval.call(h, t)
                    }
                )(t)
            },
            camelCase: function(t) {
                return t.replace(D, "ms-").replace(_, e)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, n) {
                var i = 0
                    , r = t.length
                    , o = j(t);
                if (n) {
                    if (o)
                        for (; i < r && !1 !== e.apply(t[i], n); i++)
                            ;
                    else
                        for (i in t)
                            if (!1 === e.apply(t[i], n))
                                break
                } else if (o)
                    for (; i < r && !1 !== e.call(t[i], i, t[i]); i++)
                        ;
                else
                    for (i in t)
                        if (!1 === e.call(t[i], i, t[i]))
                            break;
                return t
            },
            trim: d && !d.call("\ufeff ") ? function(t) {
                    return null == t ? "" : d.call(t)
                }
                : function(t) {
                    return null == t ? "" : (t + "").replace(x, "")
                }
            ,
            makeArray: function(t, e) {
                e = e || [];
                return null != t && (j(Object(t)) ? dt.merge(e, "string" == typeof t ? [t] : t) : l.call(e, t)),
                    e
            },
            inArray: function(t, e, n) {
                var i;
                if (e) {
                    if (c)
                        return c.call(e, t, n);
                    for (i = e.length,
                             n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                        if (n in e && e[n] === t)
                            return n
                }
                return -1
            },
            merge: function(t, e) {
                var n = e.length
                    , i = t.length
                    , r = 0;
                if ("number" == typeof n)
                    for (; r < n; r++)
                        t[i++] = e[r];
                else
                    for (; e[r] !== T; )
                        t[i++] = e[r++];
                return t.length = i,
                    t
            },
            grep: function(t, e, n) {
                var i = []
                    , r = 0
                    , o = t.length;
                for (n = !!n; r < o; r++)
                    n !== !!e(t[r], r) && i.push(t[r]);
                return i
            },
            map: function(t, e, n) {
                var i, r = 0, o = t.length, s = [];
                if (j(t))
                    for (; r < o; r++)
                        null != (i = e(t[r], r, n)) && (s[s.length] = i);
                else
                    for (r in t)
                        null != (i = e(t[r], r, n)) && (s[s.length] = i);
                return y.apply([], s)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, i;
                return "string" == typeof e && (i = t[e],
                    e = t,
                    t = i),
                    dt.isFunction(t) ? (n = u.call(arguments, 2),
                        (i = function() {
                                return t.apply(e || this, n.concat(u.call(arguments)))
                            }
                        ).guid = t.guid = t.guid || dt.guid++,
                        i) : T
            },
            access: function(t, e, n, i, r, o, s) {
                var a = 0
                    , l = t.length
                    , c = null == n;
                if ("object" === dt.type(n))
                    for (a in r = !0,
                        n)
                        dt.access(t, e, a, n[a], !0, o, s);
                else if (i !== T && (r = !0,
                dt.isFunction(i) || (s = !0),
                    e = c ? s ? (e.call(t, i),
                        null) : (c = e,
                            function(t, e, n) {
                                return c.call(dt(t), n)
                            }
                    ) : e))
                    for (; a < l; a++)
                        e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                return r ? t : c ? e.call(t) : l ? e(t[0], n) : o
            },
            now: function() {
                return (new Date).getTime()
            }
        }),
        dt.ready.promise = function(t) {
            if (!r)
                if (r = dt.Deferred(),
                "complete" === m.readyState)
                    setTimeout(dt.ready);
                else if (m.addEventListener)
                    m.addEventListener("DOMContentLoaded", B, !1),
                        h.addEventListener("load", B, !1);
                else {
                    m.attachEvent("onreadystatechange", B),
                        h.attachEvent("onload", B);
                    var n = !1;
                    try {
                        n = null == h.frameElement && m.documentElement
                    } catch (t) {}
                    n && n.doScroll && !function e() {
                        if (!dt.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (t) {
                                return setTimeout(e, 50)
                            }
                            i(),
                                dt.ready()
                        }
                    }()
                }
            return r.promise(t)
        }
        ,
        dt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            s["[object " + e + "]"] = e.toLowerCase()
        });
    var O = dt(m)
        , H = {};
    dt.Callbacks = function(r) {
        var t, n;
        r = "string" == typeof r ? H[r] || (n = H[t = r] = {},
            dt.each(t.match(C) || [], function(t, e) {
                n[e] = !0
            }),
            n) : dt.extend({}, r);
        function i(t) {
            for (e = r.memory && t,
                     s = !0,
                     l = c || 0,
                     c = 0,
                     a = u.length,
                     o = !0; u && l < a; l++)
                if (!1 === u[l].apply(t[0], t[1]) && r.stopOnFalse) {
                    e = !1;
                    break
                }
            o = !1,
            u && (p ? p.length && i(p.shift()) : e ? u = [] : f.disable())
        }
        var o, e, s, a, l, c, u = [], p = !r.once && [], f = {
            add: function() {
                var t;
                return u && (t = u.length,
                    function i(t) {
                        dt.each(t, function(t, e) {
                            var n = dt.type(e);
                            "function" === n ? r.unique && f.has(e) || u.push(e) : e && e.length && "string" !== n && i(e)
                        })
                    }(arguments),
                    o ? a = u.length : e && (c = t,
                        i(e))),
                    this
            },
            remove: function() {
                return u && dt.each(arguments, function(t, e) {
                    for (var n; -1 < (n = dt.inArray(e, u, n)); )
                        u.splice(n, 1),
                        o && (n <= a && a--,
                        n <= l && l--)
                }),
                    this
            },
            has: function(t) {
                return t ? -1 < dt.inArray(t, u) : !(!u || !u.length)
            },
            empty: function() {
                return u = [],
                    this
            },
            disable: function() {
                return u = p = e = T,
                    this
            },
            disabled: function() {
                return !u
            },
            lock: function() {
                return p = T,
                e || f.disable(),
                    this
            },
            locked: function() {
                return !p
            },
            fireWith: function(t, e) {
                return e = [t, (e = e || []).slice ? e.slice() : e],
                !u || s && !p || (o ? p.push(e) : i(e)),
                    this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                    this
            },
            fired: function() {
                return !!s
            }
        };
        return f
    }
        ,
        dt.extend({
            Deferred: function(t) {
                var s = [["resolve", "done", dt.Callbacks("once memory"), "resolved"], ["reject", "fail", dt.Callbacks("once memory"), "rejected"], ["notify", "progress", dt.Callbacks("memory")]]
                    , r = "pending"
                    , a = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return l.done(arguments).fail(arguments),
                            this
                    },
                    then: function() {
                        var o = arguments;
                        return dt.Deferred(function(r) {
                            dt.each(s, function(t, e) {
                                var n = e[0]
                                    , i = dt.isFunction(o[t]) && o[t];
                                l[e[1]](function() {
                                    var t = i && i.apply(this, arguments);
                                    t && dt.isFunction(t.promise) ? t.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[n + "With"](this === a ? r.promise() : this, i ? [t] : arguments)
                                })
                            }),
                                o = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? dt.extend(t, a) : a
                    }
                }
                    , l = {};
                return a.pipe = a.then,
                    dt.each(s, function(t, e) {
                        var n = e[2]
                            , i = e[3];
                        a[e[1]] = n.add,
                        i && n.add(function() {
                            r = i
                        }, s[1 ^ t][2].disable, s[2][2].lock),
                            l[e[0]] = function() {
                                return l[e[0] + "With"](this === l ? a : this, arguments),
                                    this
                            }
                            ,
                            l[e[0] + "With"] = n.fireWith
                    }),
                    a.promise(l),
                t && t.call(l, l),
                    l
            },
            when: function(t) {
                function e(e, n, i) {
                    return function(t) {
                        n[e] = this,
                            i[e] = 1 < arguments.length ? u.call(arguments) : t,
                            i === r ? c.notifyWith(n, i) : --l || c.resolveWith(n, i)
                    }
                }
                var r, n, i, o = 0, s = u.call(arguments), a = s.length, l = 1 !== a || t && dt.isFunction(t.promise) ? a : 0, c = 1 === l ? t : dt.Deferred();
                if (1 < a)
                    for (r = new Array(a),
                             n = new Array(a),
                             i = new Array(a); o < a; o++)
                        s[o] && dt.isFunction(s[o].promise) ? s[o].promise().done(e(o, i, s)).fail(c.reject).progress(e(o, n, r)) : --l;
                return l || c.resolveWith(i, s),
                    c.promise()
            }
        }),
        dt.support = function() {
            var r, t, e, n, i, o, s, a, l, c, u = m.createElement("div");
            if (u.setAttribute("className", "t"),
                u.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                t = u.getElementsByTagName("*"),
                e = u.getElementsByTagName("a")[0],
            !t || !e || !t.length)
                return {};
            s = (i = m.createElement("select")).appendChild(m.createElement("option")),
                n = u.getElementsByTagName("input")[0],
                e.style.cssText = "top:1px;float:left;opacity:.5",
                r = {
                    getSetAttribute: "t" !== u.className,
                    leadingWhitespace: 3 === u.firstChild.nodeType,
                    tbody: !u.getElementsByTagName("tbody").length,
                    htmlSerialize: !!u.getElementsByTagName("link").length,
                    style: /top/.test(e.getAttribute("style")),
                    hrefNormalized: "/a" === e.getAttribute("href"),
                    opacity: /^0.5/.test(e.style.opacity),
                    cssFloat: !!e.style.cssFloat,
                    checkOn: !!n.value,
                    optSelected: s.selected,
                    enctype: !!m.createElement("form").enctype,
                    html5Clone: "<:nav></:nav>" !== m.createElement("nav").cloneNode(!0).outerHTML,
                    boxModel: "CSS1Compat" === m.compatMode,
                    deleteExpando: !0,
                    noCloneEvent: !0,
                    inlineBlockNeedsLayout: !1,
                    shrinkWrapBlocks: !1,
                    reliableMarginRight: !0,
                    boxSizingReliable: !0,
                    pixelPosition: !1
                },
                n.checked = !0,
                r.noCloneChecked = n.cloneNode(!0).checked,
                i.disabled = !0,
                r.optDisabled = !s.disabled;
            try {
                delete u.test
            } catch (t) {
                r.deleteExpando = !1
            }
            for (c in (n = m.createElement("input")).setAttribute("value", ""),
                r.input = "" === n.getAttribute("value"),
                n.value = "t",
                n.setAttribute("type", "radio"),
                r.radioValue = "t" === n.value,
                n.setAttribute("checked", "t"),
                n.setAttribute("name", "t"),
                (o = m.createDocumentFragment()).appendChild(n),
                r.appendChecked = n.checked,
                r.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked,
            u.attachEvent && (u.attachEvent("onclick", function() {
                r.noCloneEvent = !1
            }),
                u.cloneNode(!0).click()),
                {
                    submit: !0,
                    change: !0,
                    focusin: !0
                })
                u.setAttribute(a = "on" + c, "t"),
                    r[c + "Bubbles"] = a in h || !1 === u.attributes[a].expando;
            return u.style.backgroundClip = "content-box",
                u.cloneNode(!0).style.backgroundClip = "",
                r.clearCloneStyle = "content-box" === u.style.backgroundClip,
                dt(function() {
                    var t, e, n = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", i = m.getElementsByTagName("body")[0];
                    i && ((t = m.createElement("div")).style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
                        i.appendChild(t).appendChild(u),
                        u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                        (e = u.getElementsByTagName("td"))[0].style.cssText = "padding:0;margin:0;border:0;display:none",
                        l = 0 === e[0].offsetHeight,
                        e[0].style.display = "",
                        e[1].style.display = "none",
                        r.reliableHiddenOffsets = l && 0 === e[0].offsetHeight,
                        u.innerHTML = "",
                        u.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
                        r.boxSizing = 4 === u.offsetWidth,
                        r.doesNotIncludeMarginInBodyOffset = 1 !== i.offsetTop,
                    h.getComputedStyle && (r.pixelPosition = "1%" !== (h.getComputedStyle(u, null) || {}).top,
                        r.boxSizingReliable = "4px" === (h.getComputedStyle(u, null) || {
                            width: "4px"
                        }).width,
                        (e = u.appendChild(m.createElement("div"))).style.cssText = u.style.cssText = n,
                        e.style.marginRight = e.style.width = "0",
                        u.style.width = "1px",
                        r.reliableMarginRight = !parseFloat((h.getComputedStyle(e, null) || {}).marginRight)),
                    typeof u.style.zoom != g && (u.innerHTML = "",
                        u.style.cssText = n + "width:1px;padding:1px;display:inline;zoom:1",
                        r.inlineBlockNeedsLayout = 3 === u.offsetWidth,
                        u.style.display = "block",
                        u.innerHTML = "<div></div>",
                        u.firstChild.style.width = "5px",
                        r.shrinkWrapBlocks = 3 !== u.offsetWidth,
                    r.inlineBlockNeedsLayout && (i.style.zoom = 1)),
                        i.removeChild(t),
                        u = null)
                }),
                t = i = o = e = n = null,
                r
        }();
    var L = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
        , I = /([A-Z])/g;
    function R(t, e, n, i) {
        if (dt.acceptData(t)) {
            var r, o = dt.expando, s = "string" == typeof e, a = t.nodeType, l = a ? dt.cache : t, c = a ? t[o] : t[o] && o;
            if (c && l[c] && (i || l[c].data) || !s || n !== T)
                return c || (a ? t[o] = c = p.pop() || dt.guid++ : c = o),
                l[c] || (l[c] = {},
                a || (l[c].toJSON = dt.noop)),
                "object" != typeof e && "function" != typeof e || (i ? l[c] = dt.extend(l[c], e) : l[c].data = dt.extend(l[c].data, e)),
                    c = l[c],
                i || (c.data || (c.data = {}),
                    c = c.data),
                n !== T && (c[dt.camelCase(e)] = n),
                    s ? null == (r = c[e]) && (r = c[dt.camelCase(e)]) : r = c,
                    r
        }
    }
    function M(t, e, n) {
        if (dt.acceptData(t)) {
            var i, r, o, s = t.nodeType, a = s ? dt.cache : t, l = s ? t[dt.expando] : dt.expando;
            if (a[l]) {
                if (e && (o = n ? a[l] : a[l].data)) {
                    for ((i = 0,
                        r = (e = dt.isArray(e) ? e.concat(dt.map(e, dt.camelCase)) : e in o || (e = dt.camelCase(e))in o ? [e] : e.split(" ")).length); i < r; i++)
                        delete o[e[i]];
                    if (!(n ? P : dt.isEmptyObject)(o))
                        return
                }
                (n || (delete a[l].data,
                    P(a[l]))) && (s ? dt.cleanData([t], !0) : dt.support.deleteExpando || a != a.window ? delete a[l] : a[l] = null)
            }
        }
    }
    function F(t, e, n) {
        if (n === T && 1 === t.nodeType) {
            var i = "data-" + e.replace(I, "-$1").toLowerCase();
            if ("string" == typeof (n = t.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : L.test(n) ? dt.parseJSON(n) : n)
                } catch (t) {}
                dt.data(t, e, n)
            } else
                n = T
        }
        return n
    }
    function P(t) {
        for (var e in t)
            if (("data" !== e || !dt.isEmptyObject(t[e])) && "toJSON" !== e)
                return !1;
        return !0
    }
    dt.extend({
        cache: {},
        expando: "jQuery" + (a + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(t) {
            return !!(t = t.nodeType ? dt.cache[t[dt.expando]] : t[dt.expando]) && !P(t)
        },
        data: function(t, e, n) {
            return R(t, e, n)
        },
        removeData: function(t, e) {
            return M(t, e)
        },
        _data: function(t, e, n) {
            return R(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return M(t, e, !0)
        },
        acceptData: function(t) {
            if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType)
                return !1;
            var e = t.nodeName && dt.noData[t.nodeName.toLowerCase()];
            return !e || !0 !== e && t.getAttribute("classid") === e
        }
    }),
        dt.fn.extend({
            data: function(e, t) {
                var n, i, r = this[0], o = 0, s = null;
                if (e !== T)
                    return "object" == typeof e ? this.each(function() {
                        dt.data(this, e)
                    }) : dt.access(this, function(t) {
                        return t === T ? r ? F(r, e, dt.data(r, e)) : null : void this.each(function() {
                            dt.data(this, e, t)
                        })
                    }, null, t, 1 < arguments.length, null, !0);
                if (this.length && (s = dt.data(r),
                1 === r.nodeType && !dt._data(r, "parsedAttrs"))) {
                    for (n = r.attributes; o < n.length; o++)
                        (i = n[o].name).indexOf("data-") || (i = dt.camelCase(i.slice(5)),
                            F(r, i, s[i]));
                    dt._data(r, "parsedAttrs", !0)
                }
                return s
            },
            removeData: function(t) {
                return this.each(function() {
                    dt.removeData(this, t)
                })
            }
        }),
        dt.extend({
            queue: function(t, e, n) {
                var i;
                if (t)
                    return i = dt._data(t, e = (e || "fx") + "queue"),
                    n && (!i || dt.isArray(n) ? i = dt._data(t, e, dt.makeArray(n)) : i.push(n)),
                    i || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = dt.queue(t, e)
                    , i = n.length
                    , r = n.shift()
                    , o = dt._queueHooks(t, e);
                "inprogress" === r && (r = n.shift(),
                    i--),
                (o.cur = r) && ("fx" === e && n.unshift("inprogress"),
                    delete o.stop,
                    r.call(t, function() {
                        dt.dequeue(t, e)
                    }, o)),
                !i && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return dt._data(t, n) || dt._data(t, n, {
                    empty: dt.Callbacks("once memory").add(function() {
                        dt._removeData(t, e + "queue"),
                            dt._removeData(t, n)
                    })
                })
            }
        }),
        dt.fn.extend({
            queue: function(e, n) {
                var t = 2;
                return "string" != typeof e && (n = e,
                    e = "fx",
                    t--),
                    arguments.length < t ? dt.queue(this[0], e) : n === T ? this : this.each(function() {
                        var t = dt.queue(this, e, n);
                        dt._queueHooks(this, e),
                        "fx" === e && "inprogress" !== t[0] && dt.dequeue(this, e)
                    })
            },
            dequeue: function(t) {
                return this.each(function() {
                    dt.dequeue(this, t)
                })
            },
            delay: function(i, t) {
                return i = dt.fx && dt.fx.speeds[i] || i,
                    this.queue(t = t || "fx", function(t, e) {
                        var n = setTimeout(t, i);
                        e.stop = function() {
                            clearTimeout(n)
                        }
                    })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                function n() {
                    --r || o.resolveWith(s, [s])
                }
                var i, r = 1, o = dt.Deferred(), s = this, a = this.length;
                for ("string" != typeof t && (e = t,
                    t = T),
                         t = t || "fx"; a--; )
                    (i = dt._data(s[a], t + "queueHooks")) && i.empty && (r++,
                        i.empty.add(n));
                return n(),
                    o.promise(e)
            }
        });
    var q, z, W = /[\t\r\n]/g, U = /\r/g, X = /^(?:input|select|textarea|button|object)$/i, V = /^(?:a|area)$/i, J = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, Q = /^(?:checked|selected)$/i, K = dt.support.getSetAttribute, Y = dt.support.input;
    dt.fn.extend({
        attr: function(t, e) {
            return dt.access(this, dt.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function(t) {
            return this.each(function() {
                dt.removeAttr(this, t)
            })
        },
        prop: function(t, e) {
            return dt.access(this, dt.prop, t, e, 1 < arguments.length)
        },
        removeProp: function(t) {
            return t = dt.propFix[t] || t,
                this.each(function() {
                    try {
                        this[t] = T,
                            delete this[t]
                    } catch (t) {}
                })
        },
        addClass: function(e) {
            var t, n, i, r, o, s = 0, a = this.length, l = "string" == typeof e && e;
            if (dt.isFunction(e))
                return this.each(function(t) {
                    dt(this).addClass(e.call(this, t, this.className))
                });
            if (l)
                for (t = (e || "").match(C) || []; s < a; s++)
                    if (i = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : " ")) {
                        for (o = 0; r = t[o++]; )
                            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        n.className = dt.trim(i)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s = 0, a = this.length, l = 0 === arguments.length || "string" == typeof e && e;
            if (dt.isFunction(e))
                return this.each(function(t) {
                    dt(this).removeClass(e.call(this, t, this.className))
                });
            if (l)
                for (t = (e || "").match(C) || []; s < a; s++)
                    if (i = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : "")) {
                        for (o = 0; r = t[o++]; )
                            for (; 0 <= i.indexOf(" " + r + " "); )
                                i = i.replace(" " + r + " ", " ");
                        n.className = e ? dt.trim(i) : ""
                    }
            return this
        },
        toggleClass: function(o, s) {
            var a = typeof o
                , l = "boolean" == typeof s;
            return dt.isFunction(o) ? this.each(function(t) {
                dt(this).toggleClass(o.call(this, t, this.className, s), s)
            }) : this.each(function() {
                if ("string" == a)
                    for (var t, e = 0, n = dt(this), i = s, r = o.match(C) || []; t = r[e++]; )
                        i = l ? i : !n.hasClass(t),
                            n[i ? "addClass" : "removeClass"](t);
                else
                    a != g && "boolean" != a || (this.className && dt._data(this, "__className__", this.className),
                        this.className = !this.className && !1 !== o && dt._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, i = this.length; n < i; n++)
                if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(W, " ").indexOf(e))
                    return !0;
            return !1
        },
        val: function(n) {
            var t, i, r, e = this[0];
            return arguments.length ? (r = dt.isFunction(n),
                this.each(function(t) {
                    var e = dt(this);
                    1 === this.nodeType && (null == (e = r ? n.call(this, t, e.val()) : n) ? e = "" : "number" == typeof e ? e += "" : dt.isArray(e) && (e = dt.map(e, function(t) {
                        return null == t ? "" : t + ""
                    })),
                    (i = dt.valHooks[this.type] || dt.valHooks[this.nodeName.toLowerCase()]) && "set"in i && i.set(this, e, "value") !== T || (this.value = e))
                })) : e ? (i = dt.valHooks[e.type] || dt.valHooks[e.nodeName.toLowerCase()]) && "get"in i && (t = i.get(e, "value")) !== T ? t : "string" == typeof (t = e.value) ? t.replace(U, "") : null == t ? "" : t : void 0
        }
    }),
        dt.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = t.attributes.value;
                        return !e || e.specified ? t.value : t.text
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n = t.options, i = t.selectedIndex, r = "select-one" === t.type || i < 0, o = r ? null : [], s = r ? i + 1 : n.length, a = i < 0 ? s : r ? i : 0; a < s; a++)
                            if (((e = n[a]).selected || a === i) && (dt.support.optDisabled ? !e.disabled : null === e.getAttribute("disabled")) && (!e.parentNode.disabled || !dt.nodeName(e.parentNode, "optgroup"))) {
                                if (e = dt(e).val(),
                                    r)
                                    return e;
                                o.push(e)
                            }
                        return o
                    },
                    set: function(t, e) {
                        var n = dt.makeArray(e);
                        return dt(t).find("option").each(function() {
                            this.selected = 0 <= dt.inArray(dt(this).val(), n)
                        }),
                        n.length || (t.selectedIndex = -1),
                            n
                    }
                }
            },
            attr: function(t, e, n) {
                var i, r, o = t.nodeType;
                if (t && 3 !== o && 8 !== o && 2 !== o)
                    return typeof t.getAttribute == g ? dt.prop(t, e, n) : ((o = 1 !== o || !dt.isXMLDoc(t)) && (e = e.toLowerCase(),
                        i = dt.attrHooks[e] || (J.test(e) ? z : q)),
                        n === T ? !(i && o && "get"in i && null !== (r = i.get(t, e))) && null == (r = typeof t.getAttribute != g ? t.getAttribute(e) : r) ? T : r : null !== n ? i && o && "set"in i && (r = i.set(t, n, e)) !== T ? r : (t.setAttribute(e, n + ""),
                            n) : void dt.removeAttr(t, e))
            },
            removeAttr: function(t, e) {
                var n, i, r = 0, o = e && e.match(C);
                if (o && 1 === t.nodeType)
                    for (; n = o[r++]; )
                        i = dt.propFix[n] || n,
                            J.test(n) ? !K && Q.test(n) ? t[dt.camelCase("default-" + n)] = t[i] = !1 : t[i] = !1 : dt.attr(t, n, ""),
                            t.removeAttribute(K ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!dt.support.radioValue && "radio" === e && dt.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e),
                            n && (t.value = n),
                                e
                        }
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                for: "htmlFor",
                class: "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(t, e, n) {
                var i, r, o = t.nodeType;
                if (t && 3 !== o && 8 !== o && 2 !== o)
                    return (1 !== o || !dt.isXMLDoc(t)) && (e = dt.propFix[e] || e,
                        r = dt.propHooks[e]),
                        n !== T ? r && "set"in r && (i = r.set(t, n, e)) !== T ? i : t[e] = n : r && "get"in r && null !== (i = r.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = t.getAttributeNode("tabindex");
                        return e && e.specified ? parseInt(e.value, 10) : X.test(t.nodeName) || V.test(t.nodeName) && t.href ? 0 : T
                    }
                }
            }
        }),
        z = {
            get: function(t, e) {
                var n = dt.prop(t, e)
                    , i = "boolean" == typeof n && t.getAttribute(e)
                    , t = "boolean" == typeof n ? Y && K ? null != i : Q.test(e) ? t[dt.camelCase("default-" + e)] : !!i : t.getAttributeNode(e);
                return t && !1 !== t.value ? e.toLowerCase() : T
            },
            set: function(t, e, n) {
                return !1 === e ? dt.removeAttr(t, n) : Y && K || !Q.test(n) ? t.setAttribute(!K && dt.propFix[n] || n, n) : t[dt.camelCase("default-" + n)] = t[n] = !0,
                    n
            }
        },
    Y && K || (dt.attrHooks.value = {
        get: function(t, e) {
            e = t.getAttributeNode(e);
            return dt.nodeName(t, "input") ? t.defaultValue : e && e.specified ? e.value : T
        },
        set: function(t, e, n) {
            if (!dt.nodeName(t, "input"))
                return q && q.set(t, e, n);
            t.defaultValue = e
        }
    }),
    K || (q = dt.valHooks.button = {
        get: function(t, e) {
            t = t.getAttributeNode(e);
            return t && ("id" === e || "name" === e || "coords" === e ? "" !== t.value : t.specified) ? t.value : T
        },
        set: function(t, e, n) {
            var i = t.getAttributeNode(n);
            return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)),
                i.value = e += "",
                "value" === n || e === t.getAttribute(n) ? e : T
        }
    },
        dt.attrHooks.contenteditable = {
            get: q.get,
            set: function(t, e, n) {
                q.set(t, "" !== e && e, n)
            }
        },
        dt.each(["width", "height"], function(t, n) {
            dt.attrHooks[n] = dt.extend(dt.attrHooks[n], {
                set: function(t, e) {
                    if ("" === e)
                        return t.setAttribute(n, "auto"),
                            e
                }
            })
        })),
    dt.support.hrefNormalized || (dt.each(["href", "src", "width", "height"], function(t, e) {
        dt.attrHooks[e] = dt.extend(dt.attrHooks[e], {
            get: function(t) {
                t = t.getAttribute(e, 2);
                return null == t ? T : t
            }
        })
    }),
        dt.each(["href", "src"], function(t, e) {
            dt.propHooks[e] = {
                get: function(t) {
                    return t.getAttribute(e, 4)
                }
            }
        })),
    dt.support.style || (dt.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || T
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    }),
    dt.support.optSelected || (dt.propHooks.selected = dt.extend(dt.propHooks.selected, {
        get: function(t) {
            t = t.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
                null
        }
    })),
    dt.support.enctype || (dt.propFix.enctype = "encoding"),
    dt.support.checkOn || dt.each(["radio", "checkbox"], function() {
        dt.valHooks[this] = {
            get: function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            }
        }
    }),
        dt.each(["radio", "checkbox"], function() {
            dt.valHooks[this] = dt.extend(dt.valHooks[this], {
                set: function(t, e) {
                    if (dt.isArray(e))
                        return t.checked = 0 <= dt.inArray(dt(t).val(), e)
                }
            })
        });
    var G = /^(?:input|select|textarea)$/i
        , Z = /^key/
        , tt = /^(?:mouse|contextmenu)|click/
        , et = /^(?:focusinfocus|focusoutblur)$/
        , nt = /^([^.]*)(?:\.(.+)|)$/;
    function it() {
        return !0
    }
    function rt() {
        return !1
    }
    dt.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, l, c, u, p, f, d, h = dt._data(t);
            if (h)
                for (n.handler && (n = (a = n).handler,
                    r = a.selector),
                     n.guid || (n.guid = dt.guid++),
                     (o = h.events) || (o = h.events = {}),
                     (c = h.handle) || ((c = h.handle = function(t) {
                             return typeof dt == g || t && dt.event.triggered === t.type ? T : dt.event.dispatch.apply(c.elem, arguments)
                         }
                     ).elem = t),
                         s = (e = (e || "").match(C) || [""]).length; s--; )
                    p = d = (u = nt.exec(e[s]) || [])[1],
                        f = (u[2] || "").split(".").sort(),
                        l = dt.event.special[p] || {},
                        p = (r ? l.delegateType : l.bindType) || p,
                        l = dt.event.special[p] || {},
                        u = dt.extend({
                            type: p,
                            origType: d,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: r,
                            needsContext: r && dt.expr.match.needsContext.test(r),
                            namespace: f.join(".")
                        }, a),
                    (d = o[p]) || ((d = o[p] = []).delegateCount = 0,
                    l.setup && !1 !== l.setup.call(t, i, f, c) || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))),
                    l.add && (l.add.call(t, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                        r ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                        dt.event.global[p] = !0
        },
        remove: function(t, e, n, i, r) {
            var o, s, a, l, c, u, p, f, d, h, g, m = dt.hasData(t) && dt._data(t);
            if (m && (u = m.events)) {
                for (c = (e = (e || "").match(C) || [""]).length; c--; )
                    if (d = g = (a = nt.exec(e[c]) || [])[1],
                        h = (a[2] || "").split(".").sort(),
                        d) {
                        for (p = dt.event.special[d] || {},
                                 f = u[d = (i ? p.delegateType : p.bindType) || d] || [],
                                 a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                 l = o = f.length; o--; )
                            s = f[o],
                            !r && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (f.splice(o, 1),
                            s.selector && f.delegateCount--,
                            p.remove && p.remove.call(t, s));
                        l && !f.length && (p.teardown && !1 !== p.teardown.call(t, h, m.handle) || dt.removeEvent(t, d, m.handle),
                            delete u[d])
                    } else
                        for (d in u)
                            dt.event.remove(t, d + e[c], n, i, !0);
                dt.isEmptyObject(u) && (delete m.handle,
                    dt._removeData(t, "events"))
            }
        },
        trigger: function(t, e, n, i) {
            var r, o, s, a, l, c, u = [n || m], p = v.call(t, "type") ? t.type : t, f = v.call(t, "namespace") ? t.namespace.split(".") : [], d = l = n = n || m;
            if (3 !== n.nodeType && 8 !== n.nodeType && !et.test(p + dt.event.triggered) && (0 <= p.indexOf(".") && (p = (f = p.split(".")).shift(),
                f.sort()),
                o = p.indexOf(":") < 0 && "on" + p,
                (t = t[dt.expando] ? t : new dt.Event(p,"object" == typeof t && t)).isTrigger = !0,
                t.namespace = f.join("."),
                t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                t.result = T,
            t.target || (t.target = n),
                e = null == e ? [t] : dt.makeArray(e, [t]),
                a = dt.event.special[p] || {},
            i || !a.trigger || !1 !== a.trigger.apply(n, e))) {
                if (!i && !a.noBubble && !dt.isWindow(n)) {
                    for (s = a.delegateType || p,
                         et.test(s + p) || (d = d.parentNode); d; d = d.parentNode)
                        u.push(d),
                            l = d;
                    l === (n.ownerDocument || m) && u.push(l.defaultView || l.parentWindow || h)
                }
                for (c = 0; (d = u[c++]) && !t.isPropagationStopped(); )
                    t.type = 1 < c ? s : a.bindType || p,
                    (r = (dt._data(d, "events") || {})[t.type] && dt._data(d, "handle")) && r.apply(d, e),
                    (r = o && d[o]) && dt.acceptData(d) && r.apply && !1 === r.apply(d, e) && t.preventDefault();
                if (t.type = p,
                !i && !t.isDefaultPrevented() && (!a._default || !1 === a._default.apply(n.ownerDocument, e)) && ("click" !== p || !dt.nodeName(n, "a")) && dt.acceptData(n) && o && n[p] && !dt.isWindow(n)) {
                    (l = n[o]) && (n[o] = null),
                        dt.event.triggered = p;
                    try {
                        n[p]()
                    } catch (t) {}
                    dt.event.triggered = T,
                    l && (n[o] = l)
                }
                return t.result
            }
        },
        dispatch: function(t) {
            t = dt.event.fix(t);
            var e, n, i, r, o, s = u.call(arguments), a = (dt._data(this, "events") || {})[t.type] || [], l = dt.event.special[t.type] || {};
            if ((s[0] = t).delegateTarget = this,
            !l.preDispatch || !1 !== l.preDispatch.call(this, t)) {
                for (o = dt.event.handlers.call(this, t, a),
                         e = 0; (i = o[e++]) && !t.isPropagationStopped(); )
                    for (t.currentTarget = i.elem,
                             r = 0; (n = i.handlers[r++]) && !t.isImmediatePropagationStopped(); )
                        t.namespace_re && !t.namespace_re.test(n.namespace) || (t.handleObj = n,
                            t.data = n.data,
                        (n = ((dt.event.special[n.origType] || {}).handle || n.handler).apply(i.elem, s)) !== T && !1 === (t.result = n) && (t.preventDefault(),
                            t.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, t),
                    t.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, o, s = [], a = e.delegateCount, l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                        for (r = [],
                                 o = 0; o < a; o++)
                            r[n = (i = e[o]).selector + " "] === T && (r[n] = i.needsContext ? 0 <= dt(n, this).index(l) : dt.find(n, this, null, [l]).length),
                            r[n] && r.push(i);
                        r.length && s.push({
                            elem: l,
                            handlers: r
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }),
                s
        },
        fix: function(t) {
            if (t[dt.expando])
                return t;
            var e, n, i, r = t.type, o = t, s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = tt.test(r) ? this.mouseHooks : Z.test(r) ? this.keyHooks : {}),
                     i = s.props ? this.props.concat(s.props) : this.props,
                     t = new dt.Event(o),
                     e = i.length; e--; )
                t[n = i[e]] = o[n];
            return t.target || (t.target = o.srcElement || m),
            3 === t.target.nodeType && (t.target = t.target.parentNode),
                t.metaKey = !!t.metaKey,
                s.filter ? s.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode),
                    t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, r = e.button, o = e.fromElement;
                return null == t.pageX && null != e.clientX && (i = (n = t.target.ownerDocument || m).documentElement,
                    n = n.body,
                    t.pageX = e.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0),
                    t.pageY = e.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)),
                !t.relatedTarget && o && (t.relatedTarget = o === t.target ? e.toElement : o),
                t.which || r === T || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                    t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function() {
                    if (dt.nodeName(this, "input") && "checkbox" === this.type && this.click)
                        return this.click(),
                            !1
                }
            },
            focus: {
                trigger: function() {
                    if (this !== m.activeElement && this.focus)
                        try {
                            return this.focus(),
                                !1
                        } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === m.activeElement && this.blur)
                        return this.blur(),
                            !1
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function(t) {
                    t.result !== T && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, i) {
            t = dt.extend(new dt.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? dt.event.trigger(t, null, e) : dt.event.dispatch.call(e, t),
            t.isDefaultPrevented() && n.preventDefault()
        }
    },
        dt.removeEvent = m.removeEventListener ? function(t, e, n) {
                t.removeEventListener && t.removeEventListener(e, n, !1)
            }
            : function(t, e, n) {
                e = "on" + e;
                t.detachEvent && (typeof t[e] == g && (t[e] = null),
                    t.detachEvent(e, n))
            }
        ,
        dt.Event = function(t, e) {
            if (!(this instanceof dt.Event))
                return new dt.Event(t,e);
            t && t.type ? (this.originalEvent = t,
                this.type = t.type,
                this.isDefaultPrevented = t.defaultPrevented || !1 === t.returnValue || t.getPreventDefault && t.getPreventDefault() ? it : rt) : this.type = t,
            e && dt.extend(this, e),
                this.timeStamp = t && t.timeStamp || dt.now(),
                this[dt.expando] = !0
        }
        ,
        dt.Event.prototype = {
            isDefaultPrevented: rt,
            isPropagationStopped: rt,
            isImmediatePropagationStopped: rt,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = it,
                t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = it,
                t && (t.stopPropagation && t.stopPropagation(),
                    t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = it,
                    this.stopPropagation()
            }
        },
        dt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(t, r) {
            dt.event.special[t] = {
                delegateType: r,
                bindType: r,
                handle: function(t) {
                    var e, n = t.relatedTarget, i = t.handleObj;
                    return n && (n === this || dt.contains(this, n)) || (t.type = i.origType,
                        e = i.handler.apply(this, arguments),
                        t.type = r),
                        e
                }
            }
        }),
    dt.support.submitBubbles || (dt.event.special.submit = {
        setup: function() {
            if (dt.nodeName(this, "form"))
                return !1;
            dt.event.add(this, "click._submit keypress._submit", function(t) {
                t = t.target,
                    t = dt.nodeName(t, "input") || dt.nodeName(t, "button") ? t.form : T;
                t && !dt._data(t, "submitBubbles") && (dt.event.add(t, "submit._submit", function(t) {
                    t._submit_bubble = !0
                }),
                    dt._data(t, "submitBubbles", !0))
            })
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble,
            this.parentNode && !t.isTrigger && dt.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            if (dt.nodeName(this, "form"))
                return !1;
            dt.event.remove(this, "._submit")
        }
    }),
    dt.support.changeBubbles || (dt.event.special.change = {
        setup: function() {
            if (G.test(this.nodeName))
                return "checkbox" !== this.type && "radio" !== this.type || (dt.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }),
                    dt.event.add(this, "click._change", function(t) {
                        this._just_changed && !t.isTrigger && (this._just_changed = !1),
                            dt.event.simulate("change", this, t, !0)
                    })),
                    !1;
            dt.event.add(this, "beforeactivate._change", function(t) {
                t = t.target;
                G.test(t.nodeName) && !dt._data(t, "changeBubbles") && (dt.event.add(t, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || dt.event.simulate("change", this.parentNode, t, !0)
                }),
                    dt._data(t, "changeBubbles", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type)
                return t.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return dt.event.remove(this, "._change"),
                !G.test(this.nodeName)
        }
    }),
    dt.support.focusinBubbles || dt.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        function n(t) {
            dt.event.simulate(e, t.target, dt.event.fix(t), !0)
        }
        var i = 0;
        dt.event.special[e] = {
            setup: function() {
                0 == i++ && m.addEventListener(t, n, !0)
            },
            teardown: function() {
                0 == --i && m.removeEventListener(t, n, !0)
            }
        }
    }),
        dt.fn.extend({
            on: function(t, e, n, i, r) {
                var o, s;
                if ("object" == typeof t) {
                    for (o in "string" != typeof e && (n = n || e,
                        e = T),
                        t)
                        this.on(o, e, n, t[o], r);
                    return this
                }
                if (null == n && null == i ? (i = e,
                    n = e = T) : null == i && ("string" == typeof e ? (i = n,
                    n = T) : (i = n,
                    n = e,
                    e = T)),
                !1 === i)
                    i = rt;
                else if (!i)
                    return this;
                return 1 === r && (s = i,
                    (i = function(t) {
                            return dt().off(t),
                                s.apply(this, arguments)
                        }
                    ).guid = s.guid || (s.guid = dt.guid++)),
                    this.each(function() {
                        dt.event.add(this, t, i, n, e)
                    })
            },
            one: function(t, e, n, i) {
                return this.on(t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, r;
                if (t && t.preventDefault && t.handleObj)
                    return i = t.handleObj,
                        dt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                        this;
                if ("object" != typeof t)
                    return !1 !== e && "function" != typeof e || (n = e,
                        e = T),
                    !1 === n && (n = rt),
                        this.each(function() {
                            dt.event.remove(this, t, n, e)
                        });
                for (r in t)
                    this.off(r, e, t[r]);
                return this
            },
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            },
            trigger: function(t, e) {
                return this.each(function() {
                    dt.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                if (n)
                    return dt.event.trigger(t, e, n, !0)
            }
        }),
        function(n) {
            var t, w, T, o, e, p, c, C, f, S, i, d, h, r, s, g, a, b = "sizzle" + -new Date, m = n.document, y = {}, k = 0, v = 0, l = Z(), u = Z(), x = Z(), E = "undefined", N = [], A = N.pop, D = N.push, _ = N.slice, B = N.indexOf || function(t) {
                for (var e = 0, n = this.length; e < n; e++)
                    if (this[e] === t)
                        return e;
                return -1
            }
                , j = "[\\x20\\t\\r\\n\\f]", O = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", H = O.replace("w", "w#"), N = "\\[" + j + "*(" + O + ")" + j + "*(?:([*^$|!~]?=)" + j + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + H + ")|)|)" + j + "*\\]", L = ":(" + O + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + N.replace(3, 8) + ")*)|.*)\\)|)", I = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$","g"), R = new RegExp("^" + j + "*," + j + "*"), M = new RegExp("^" + j + "*([\\x20\\t\\r\\n\\f>+~])" + j + "*"), F = new RegExp(L), P = new RegExp("^" + H + "$"), q = {
                ID: new RegExp("^#(" + O + ")"),
                CLASS: new RegExp("^\\.(" + O + ")"),
                NAME: new RegExp("^\\[name=['\"]?(" + O + ")['\"]?\\]"),
                TAG: new RegExp("^(" + O.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + L),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)","i"),
                needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)","i")
            }, z = /[\x20\t\r\n\f]*[+~]/, W = /^[^{]+\{\s*\[native code/, U = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, X = /^(?:input|select|textarea|button)$/i, V = /^h\d$/i, J = /'|\\/g, Q = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, K = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, Y = function(t, e) {
                var n = "0x" + e - 65536;
                return n != n ? e : n < 0 ? String.fromCharCode(65536 + n) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            };
            try {
                _.call(m.documentElement.childNodes, 0)[0].nodeType
            } catch (t) {
                _ = function(t) {
                    for (var e, n = []; e = this[t++]; )
                        n.push(e);
                    return n
                }
            }
            function G(t) {
                return W.test(t + "")
            }
            function Z() {
                var n, i = [];
                return n = function(t, e) {
                    return i.push(t += " ") > T.cacheLength && delete n[i.shift()],
                        n[t] = e
                }
            }
            function tt(t) {
                return t[b] = !0,
                    t
            }
            function et(t) {
                var e = S.createElement("div");
                try {
                    return t(e)
                } catch (t) {
                    return !1
                }
            }
            function nt(t, e, n, i) {
                var r, o, s, a, l, c, u;
                if ((e ? e.ownerDocument || e : m) !== S && f(e),
                    n = n || [],
                !t || "string" != typeof t)
                    return n;
                if (1 !== (r = (e = e || S).nodeType) && 9 !== r)
                    return [];
                if (!d && !i) {
                    if (c = U.exec(t))
                        if (u = c[1]) {
                            if (9 === r) {
                                if (!(a = e.getElementById(u)) || !a.parentNode)
                                    return n;
                                if (a.id === u)
                                    return n.push(a),
                                        n
                            } else if (e.ownerDocument && (a = e.ownerDocument.getElementById(u)) && g(e, a) && a.id === u)
                                return n.push(a),
                                    n
                        } else {
                            if (c[2])
                                return D.apply(n, _.call(e.getElementsByTagName(t), 0)),
                                    n;
                            if ((u = c[3]) && y.getByClassName && e.getElementsByClassName)
                                return D.apply(n, _.call(e.getElementsByClassName(u), 0)),
                                    n
                        }
                    if (y.qsa && !h.test(t)) {
                        if (a = !0,
                            l = b,
                            c = e,
                            u = 9 === r && t,
                        1 === r && "object" !== e.nodeName.toLowerCase()) {
                            for (s = ot(t),
                                     (a = e.getAttribute("id")) ? l = a.replace(J, "\\$&") : e.setAttribute("id", l),
                                     l = "[id='" + l + "'] ",
                                     o = s.length; o--; )
                                s[o] = l + st(s[o]);
                            c = z.test(t) && e.parentNode || e,
                                u = s.join(",")
                        }
                        if (u)
                            try {
                                return D.apply(n, _.call(c.querySelectorAll(u), 0)),
                                    n
                            } catch (t) {} finally {
                                a || e.removeAttribute("id")
                            }
                    }
                }
                return function(t, e, n, i) {
                    var r, o, s, a, l, c = ot(t);
                    if (!i && 1 === c.length) {
                        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === e.nodeType && !d && T.relative[o[1].type]) {
                            if (!(e = T.find.ID(s.matches[0].replace(K, Y), e)[0]))
                                return n;
                            t = t.slice(o.shift().value.length)
                        }
                        for (r = q.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r],
                            !T.relative[a = s.type]); )
                            if ((l = T.find[a]) && (i = l(s.matches[0].replace(K, Y), z.test(o[0].type) && e.parentNode || e))) {
                                if (o.splice(r, 1),
                                    !(t = i.length && st(o)))
                                    return D.apply(n, _.call(i, 0)),
                                        n;
                                break
                            }
                    }
                    return p(t, c)(i, e, d, n, z.test(t)),
                        n
                }(t.replace(I, "$1"), e, n, i)
            }
            function it(t, e) {
                var n = e && t
                    , i = n && (~e.sourceIndex || 1 << 31) - (~t.sourceIndex || 1 << 31);
                if (i)
                    return i;
                if (n)
                    for (; n = n.nextSibling; )
                        if (n === e)
                            return -1;
                return t ? 1 : -1
            }
            function rt(s) {
                return tt(function(o) {
                    return o = +o,
                        tt(function(t, e) {
                            for (var n, i = s([], t.length, o), r = i.length; r--; )
                                t[n = i[r]] && (t[n] = !(e[n] = t[n]))
                        })
                })
            }
            for (t in e = nt.isXML = function(t) {
                t = t && (t.ownerDocument || t).documentElement;
                return !!t && "HTML" !== t.nodeName
            }
                ,
                f = nt.setDocument = function(t) {
                    var l = t ? t.ownerDocument || t : m;
                    return l !== S && 9 === l.nodeType && l.documentElement && (i = (S = l).documentElement,
                        d = e(l),
                        y.tagNameNoComments = et(function(t) {
                            return t.appendChild(l.createComment("")),
                                !t.getElementsByTagName("*").length
                        }),
                        y.attributes = et(function(t) {
                            t.innerHTML = "<select></select>";
                            t = typeof t.lastChild.getAttribute("multiple");
                            return "boolean" != t && "string" != t
                        }),
                        y.getByClassName = et(function(t) {
                            return t.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
                            !(!t.getElementsByClassName || !t.getElementsByClassName("e").length) && (t.lastChild.className = "e",
                            2 === t.getElementsByClassName("e").length)
                        }),
                        y.getByName = et(function(t) {
                            t.id = b + 0,
                                t.innerHTML = "<a name='" + b + "'></a><div name='" + b + "'></div>",
                                i.insertBefore(t, i.firstChild);
                            var e = l.getElementsByName && l.getElementsByName(b).length === 2 + l.getElementsByName(b + 0).length;
                            return y.getIdNotName = !l.getElementById(b),
                                i.removeChild(t),
                                e
                        }),
                        T.attrHandle = et(function(t) {
                            return t.innerHTML = "<a href='#'></a>",
                            t.firstChild && typeof t.firstChild.getAttribute != E && "#" === t.firstChild.getAttribute("href")
                        }) ? {} : {
                            href: function(t) {
                                return t.getAttribute("href", 2)
                            },
                            type: function(t) {
                                return t.getAttribute("type")
                            }
                        },
                        y.getIdNotName ? (T.find.ID = function(t, e) {
                                if (typeof e.getElementById != E && !d) {
                                    t = e.getElementById(t);
                                    return t && t.parentNode ? [t] : []
                                }
                            }
                                ,
                                T.filter.ID = function(t) {
                                    var e = t.replace(K, Y);
                                    return function(t) {
                                        return t.getAttribute("id") === e
                                    }
                                }
                        ) : (T.find.ID = function(t, e) {
                                if (typeof e.getElementById != E && !d) {
                                    e = e.getElementById(t);
                                    return e ? e.id === t || typeof e.getAttributeNode != E && e.getAttributeNode("id").value === t ? [e] : void 0 : []
                                }
                            }
                                ,
                                T.filter.ID = function(t) {
                                    var e = t.replace(K, Y);
                                    return function(t) {
                                        t = typeof t.getAttributeNode != E && t.getAttributeNode("id");
                                        return t && t.value === e
                                    }
                                }
                        ),
                        T.find.TAG = y.tagNameNoComments ? function(t, e) {
                                if (typeof e.getElementsByTagName != E)
                                    return e.getElementsByTagName(t)
                            }
                            : function(t, e) {
                                var n, i = [], r = 0, o = e.getElementsByTagName(t);
                                if ("*" !== t)
                                    return o;
                                for (; n = o[r++]; )
                                    1 === n.nodeType && i.push(n);
                                return i
                            }
                        ,
                        T.find.NAME = y.getByName && function(t, e) {
                            if (typeof e.getElementsByName != E)
                                return e.getElementsByName(name)
                        }
                        ,
                        T.find.CLASS = y.getByClassName && function(t, e) {
                            if (typeof e.getElementsByClassName != E && !d)
                                return e.getElementsByClassName(t)
                        }
                        ,
                        r = [],
                        h = [":focus"],
                    (y.qsa = G(l.querySelectorAll)) && (et(function(t) {
                        t.innerHTML = "<select><option selected=''></option></select>",
                        t.querySelectorAll("[selected]").length || h.push("\\[" + j + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                        t.querySelectorAll(":checked").length || h.push(":checked")
                    }),
                        et(function(t) {
                            t.innerHTML = "<input type='hidden' i=''/>",
                            t.querySelectorAll("[i^='']").length && h.push("[*^$]=" + j + "*(?:\"\"|'')"),
                            t.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"),
                                t.querySelectorAll("*,:x"),
                                h.push(",.*:")
                        })),
                    (y.matchesSelector = G(s = i.matchesSelector || i.mozMatchesSelector || i.webkitMatchesSelector || i.oMatchesSelector || i.msMatchesSelector)) && et(function(t) {
                        y.disconnectedMatch = s.call(t, "div"),
                            s.call(t, "[s!='']:x"),
                            r.push("!=", L)
                    }),
                        h = new RegExp(h.join("|")),
                        r = new RegExp(r.join("|")),
                        g = G(i.contains) || i.compareDocumentPosition ? function(t, e) {
                                var n = 9 === t.nodeType ? t.documentElement : t
                                    , e = e && e.parentNode;
                                return t === e || !(!e || 1 !== e.nodeType || !(n.contains ? n.contains(e) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(e)))
                            }
                            : function(t, e) {
                                if (e)
                                    for (; e = e.parentNode; )
                                        if (e === t)
                                            return !0;
                                return !1
                            }
                        ,
                        a = i.compareDocumentPosition ? function(t, e) {
                                var n;
                                return t === e ? (c = !0,
                                    0) : (n = e.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(e)) ? 1 & n || t.parentNode && 11 === t.parentNode.nodeType ? t === l || g(m, t) ? -1 : e === l || g(m, e) ? 1 : 0 : 4 & n ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
                            }
                            : function(t, e) {
                                var n, i = 0, r = t.parentNode, o = e.parentNode, s = [t], a = [e];
                                if (t === e)
                                    return c = !0,
                                        0;
                                if (!r || !o)
                                    return t === l ? -1 : e === l ? 1 : r ? -1 : o ? 1 : 0;
                                if (r === o)
                                    return it(t, e);
                                for (n = t; n = n.parentNode; )
                                    s.unshift(n);
                                for (n = e; n = n.parentNode; )
                                    a.unshift(n);
                                for (; s[i] === a[i]; )
                                    i++;
                                return i ? it(s[i], a[i]) : s[i] === m ? -1 : a[i] === m ? 1 : 0
                            }
                        ,
                        c = !1,
                        [0, 0].sort(a),
                        y.detectDuplicates = c),
                        S
                }
                ,
                nt.matches = function(t, e) {
                    return nt(t, null, null, e)
                }
                ,
                nt.matchesSelector = function(t, e) {
                    if ((t.ownerDocument || t) !== S && f(t),
                        e = e.replace(Q, "='$1']"),
                    y.matchesSelector && !d && (!r || !r.test(e)) && !h.test(e))
                        try {
                            var n = s.call(t, e);
                            if (n || y.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                                return n
                        } catch (t) {}
                    return 0 < nt(e, S, null, [t]).length
                }
                ,
                nt.contains = function(t, e) {
                    return (t.ownerDocument || t) !== S && f(t),
                        g(t, e)
                }
                ,
                nt.attr = function(t, e) {
                    var n;
                    return (t.ownerDocument || t) !== S && f(t),
                    d || (e = e.toLowerCase()),
                        (n = T.attrHandle[e]) ? n(t) : d || y.attributes ? t.getAttribute(e) : ((n = t.getAttributeNode(e)) || t.getAttribute(e)) && !0 === t[e] ? e : n && n.specified ? n.value : null
                }
                ,
                nt.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }
                ,
                nt.uniqueSort = function(t) {
                    var e, n = [], i = 1, r = 0;
                    if (c = !y.detectDuplicates,
                        t.sort(a),
                        c) {
                        for (; e = t[i]; i++)
                            e === t[i - 1] && (r = n.push(i));
                        for (; r--; )
                            t.splice(n[r], 1)
                    }
                    return t
                }
                ,
                o = nt.getText = function(t) {
                    var e, n = "", i = 0, r = t.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof t.textContent)
                                return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling)
                                n += o(t)
                        } else if (3 === r || 4 === r)
                            return t.nodeValue
                    } else
                        for (; e = t[i]; i++)
                            n += o(e);
                    return n
                }
                ,
                T = nt.selectors = {
                    cacheLength: 50,
                    createPseudo: tt,
                    match: q,
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(K, Y),
                                t[3] = (t[4] || t[5] || "").replace(K, Y),
                            "~=" === t[2] && (t[3] = " " + t[3] + " "),
                                t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(),
                                "nth" === t[1].slice(0, 3) ? (t[3] || nt.error(t[0]),
                                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                                    t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && nt.error(t[0]),
                                t
                        },
                        PSEUDO: function(t) {
                            var e, n = !t[5] && t[2];
                            return q.CHILD.test(t[0]) ? null : (t[4] ? t[2] = t[4] : n && F.test(n) && (e = ot(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                                t[2] = n.slice(0, e)),
                                t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            return "*" === e ? function() {
                                    return !0
                                }
                                : (e = e.replace(K, Y).toLowerCase(),
                                        function(t) {
                                            return t.nodeName && t.nodeName.toLowerCase() === e
                                        }
                                )
                        },
                        CLASS: function(t) {
                            var e = l[t + " "];
                            return e || (e = new RegExp("(^|" + j + ")" + t + "(" + j + "|$)")) && l(t, function(t) {
                                return e.test(t.className || typeof t.getAttribute != E && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, n, i) {
                            return function(t) {
                                t = nt.attr(t, e);
                                return null == t ? "!=" === n : !n || (t += "",
                                    "=" === n ? t === i : "!=" === n ? t !== i : "^=" === n ? i && 0 === t.indexOf(i) : "*=" === n ? i && -1 < t.indexOf(i) : "$=" === n ? i && t.slice(-i.length) === i : "~=" === n ? -1 < (" " + t + " ").indexOf(i) : "|=" === n && (t === i || t.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function(d, t, e, h, g) {
                            var m = "nth" !== d.slice(0, 3)
                                , y = "last" !== d.slice(-4)
                                , v = "of-type" === t;
                            return 1 === h && 0 === g ? function(t) {
                                    return !!t.parentNode
                                }
                                : function(t, e, n) {
                                    var i, r, o, s, a, l, c = m != y ? "nextSibling" : "previousSibling", u = t.parentNode, p = v && t.nodeName.toLowerCase(), f = !n && !v;
                                    if (u) {
                                        if (m) {
                                            for (; c; ) {
                                                for (o = t; o = o[c]; )
                                                    if (v ? o.nodeName.toLowerCase() === p : 1 === o.nodeType)
                                                        return !1;
                                                l = c = "only" === d && !l && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (l = [y ? u.firstChild : u.lastChild],
                                        y && f) {
                                            for (a = (i = (r = u[b] || (u[b] = {}))[d] || [])[0] === k && i[1],
                                                     s = i[0] === k && i[2],
                                                     o = a && u.childNodes[a]; o = ++a && o && o[c] || (s = a = 0) || l.pop(); )
                                                if (1 === o.nodeType && ++s && o === t) {
                                                    r[d] = [k, a, s];
                                                    break
                                                }
                                        } else if (f && (i = (t[b] || (t[b] = {}))[d]) && i[0] === k)
                                            s = i[1];
                                        else
                                            for (; (o = ++a && o && o[c] || (s = a = 0) || l.pop()) && ((v ? o.nodeName.toLowerCase() !== p : 1 !== o.nodeType) || !++s || (f && ((o[b] || (o[b] = {}))[d] = [k, s]),
                                            o !== t)); )
                                                ;
                                        return (s -= g) === h || s % h == 0 && 0 <= s / h
                                    }
                                }
                        },
                        PSEUDO: function(t, o) {
                            var e, s = T.pseudos[t] || T.setFilters[t.toLowerCase()] || nt.error("unsupported pseudo: " + t);
                            return s[b] ? s(o) : 1 < s.length ? (e = [t, t, "", o],
                                    T.setFilters.hasOwnProperty(t.toLowerCase()) ? tt(function(t, e) {
                                        for (var n, i = s(t, o), r = i.length; r--; )
                                            t[n = B.call(t, i[r])] = !(e[n] = i[r])
                                    }) : function(t) {
                                        return s(t, 0, e)
                                    }
                            ) : s
                        }
                    },
                    pseudos: {
                        not: tt(function(t) {
                            var i = []
                                , r = []
                                , a = p(t.replace(I, "$1"));
                            return a[b] ? tt(function(t, e, n, i) {
                                for (var r, o = a(t, null, i, []), s = t.length; s--; )
                                    (r = o[s]) && (t[s] = !(e[s] = r))
                            }) : function(t, e, n) {
                                return i[0] = t,
                                    a(i, null, n, r),
                                    !r.pop()
                            }
                        }),
                        has: tt(function(e) {
                            return function(t) {
                                return 0 < nt(e, t).length
                            }
                        }),
                        contains: tt(function(e) {
                            return function(t) {
                                return -1 < (t.textContent || t.innerText || o(t)).indexOf(e)
                            }
                        }),
                        lang: tt(function(n) {
                            return P.test(n || "") || nt.error("unsupported lang: " + n),
                                n = n.replace(K, Y).toLowerCase(),
                                function(t) {
                                    var e;
                                    do {
                                        if (e = d ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang)
                                            return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var e = n.location && n.location.hash;
                            return e && e.slice(1) === t.id
                        },
                        root: function(t) {
                            return t === i
                        },
                        focus: function(t) {
                            return t === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function(t) {
                            return !1 === t.disabled
                        },
                        disabled: function(t) {
                            return !0 === t.disabled
                        },
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex,
                            !0 === t.selected
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if ("@" < t.nodeName || 3 === t.nodeType || 4 === t.nodeType)
                                    return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !T.pseudos.empty(t)
                        },
                        header: function(t) {
                            return V.test(t.nodeName)
                        },
                        input: function(t) {
                            return X.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
                        },
                        first: rt(function() {
                            return [0]
                        }),
                        last: rt(function(t, e) {
                            return [e - 1]
                        }),
                        eq: rt(function(t, e, n) {
                            return [n < 0 ? n + e : n]
                        }),
                        even: rt(function(t, e) {
                            for (var n = 0; n < e; n += 2)
                                t.push(n);
                            return t
                        }),
                        odd: rt(function(t, e) {
                            for (var n = 1; n < e; n += 2)
                                t.push(n);
                            return t
                        }),
                        lt: rt(function(t, e, n) {
                            for (var i = n < 0 ? n + e : n; 0 <= --i; )
                                t.push(i);
                            return t
                        }),
                        gt: rt(function(t, e, n) {
                            for (var i = n < 0 ? n + e : n; ++i < e; )
                                t.push(i);
                            return t
                        })
                    }
                },
                {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                })
                T.pseudos[t] = function(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }(t);
            for (t in {
                submit: !0,
                reset: !0
            })
                T.pseudos[t] = function(n) {
                    return function(t) {
                        var e = t.nodeName.toLowerCase();
                        return ("input" === e || "button" === e) && t.type === n
                    }
                }(t);
            function ot(t, e) {
                var n, i, r, o, s, a, l, c = u[t + " "];
                if (c)
                    return e ? 0 : c.slice(0);
                for (s = t,
                         a = [],
                         l = T.preFilter; s; ) {
                    for (o in n && !(i = R.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                        a.push(r = [])),
                        n = !1,
                    (i = M.exec(s)) && (n = i.shift(),
                        r.push({
                            value: n,
                            type: i[0].replace(I, " ")
                        }),
                        s = s.slice(n.length)),
                        T.filter)
                        !(i = q[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(),
                            r.push({
                                value: n,
                                type: o,
                                matches: i
                            }),
                            s = s.slice(n.length));
                    if (!n)
                        break
                }
                return e ? s.length : s ? nt.error(t) : u(t, a).slice(0)
            }
            function st(t) {
                for (var e = 0, n = t.length, i = ""; e < n; e++)
                    i += t[e].value;
                return i
            }
            function at(a, t, e) {
                var l = t.dir
                    , c = e && "parentNode" === l
                    , u = v++;
                return t.first ? function(t, e, n) {
                        for (; t = t[l]; )
                            if (1 === t.nodeType || c)
                                return a(t, e, n)
                    }
                    : function(t, e, n) {
                        var i, r, o, s = k + " " + u;
                        if (n) {
                            for (; t = t[l]; )
                                if ((1 === t.nodeType || c) && a(t, e, n))
                                    return !0
                        } else
                            for (; t = t[l]; )
                                if (1 === t.nodeType || c)
                                    if ((r = (o = t[b] || (t[b] = {}))[l]) && r[0] === s) {
                                        if (!0 === (i = r[1]) || i === w)
                                            return !0 === i
                                    } else if ((r = o[l] = [s])[1] = a(t, e, n) || w,
                                    !0 === r[1])
                                        return !0
                    }
            }
            function lt(r) {
                return 1 < r.length ? function(t, e, n) {
                        for (var i = r.length; i--; )
                            if (!r[i](t, e, n))
                                return !1;
                        return !0
                    }
                    : r[0]
            }
            function ct(t, e, n, i, r) {
                for (var o, s = [], a = 0, l = t.length, c = null != e; a < l; a++)
                    (o = t[a]) && (n && !n(o, i, r) || (s.push(o),
                    c && e.push(a)));
                return s
            }
            function ut(d, h, g, m, y, t) {
                return m && !m[b] && (m = ut(m)),
                y && !y[b] && (y = ut(y, t)),
                    tt(function(t, e, n, i) {
                        var r, o, s, a = [], l = [], c = e.length, u = t || function(t, e, n) {
                            for (var i = 0, r = e.length; i < r; i++)
                                nt(t, e[i], n);
                            return n
                        }(h || "*", n.nodeType ? [n] : n, []), p = !d || !t && h ? u : ct(u, a, d, n, i), f = g ? y || (t ? d : c || m) ? [] : e : p;
                        if (g && g(p, f, n, i),
                            m)
                            for (r = ct(f, l),
                                     m(r, [], n, i),
                                     o = r.length; o--; )
                                (s = r[o]) && (f[l[o]] = !(p[l[o]] = s));
                        if (t) {
                            if (y || d) {
                                if (y) {
                                    for (r = [],
                                             o = f.length; o--; )
                                        (s = f[o]) && r.push(p[o] = s);
                                    y(null, f = [], r, i)
                                }
                                for (o = f.length; o--; )
                                    (s = f[o]) && -1 < (r = y ? B.call(t, s) : a[o]) && (t[r] = !(e[r] = s))
                            }
                        } else
                            f = ct(f === e ? f.splice(c, f.length) : f),
                                y ? y(null, e, f, i) : D.apply(e, f)
                    })
            }
            function pt(m, y) {
                function t(t, e, n, i, r) {
                    var o, s, a, l = [], c = 0, u = "0", p = t && [], f = null != r, d = C, h = t || x && T.find.TAG("*", r && e.parentNode || e), g = k += null == d ? 1 : Math.random() || .1;
                    for (f && (C = e !== S && e,
                        w = v); null != (o = h[u]); u++) {
                        if (x && o) {
                            for (s = 0; a = m[s++]; )
                                if (a(o, e, n)) {
                                    i.push(o);
                                    break
                                }
                            f && (k = g,
                                w = ++v)
                        }
                        b && ((o = !a && o) && c--,
                        t && p.push(o))
                    }
                    if (c += u,
                    b && u !== c) {
                        for (s = 0; a = y[s++]; )
                            a(p, l, e, n);
                        if (t) {
                            if (0 < c)
                                for (; u--; )
                                    p[u] || l[u] || (l[u] = A.call(i));
                            l = ct(l)
                        }
                        D.apply(i, l),
                        f && !t && 0 < l.length && 1 < c + y.length && nt.uniqueSort(i)
                    }
                    return f && (k = g,
                        C = d),
                        p
                }
                var v = 0
                    , b = 0 < y.length
                    , x = 0 < m.length;
                return b ? tt(t) : t
            }
            function ft() {}
            p = nt.compile = function(t, e) {
                var n, i = [], r = [], o = x[t + " "];
                if (!o) {
                    for (n = (e = e || ot(t)).length; n--; )
                        ((o = function t(e) {
                            for (var i, n, r, o = e.length, s = T.relative[e[0].type], a = s || T.relative[" "], l = s ? 1 : 0, c = at(function(t) {
                                return t === i
                            }, a, !0), u = at(function(t) {
                                return -1 < B.call(i, t)
                            }, a, !0), p = [function(t, e, n) {
                                return !s && (n || e !== C) || ((i = e).nodeType ? c : u)(t, e, n)
                            }
                            ]; l < o; l++)
                                if (n = T.relative[e[l].type])
                                    p = [at(lt(p), n)];
                                else {
                                    if ((n = T.filter[e[l].type].apply(null, e[l].matches))[b]) {
                                        for (r = ++l; r < o && !T.relative[e[r].type]; r++)
                                            ;
                                        return ut(1 < l && lt(p), 1 < l && st(e.slice(0, l - 1)).replace(I, "$1"), n, l < r && t(e.slice(l, r)), r < o && t(e = e.slice(r)), r < o && st(e))
                                    }
                                    p.push(n)
                                }
                            return lt(p)
                        }(e[n]))[b] ? i : r).push(o);
                    o = x(t, pt(r, i))
                }
                return o
            }
                ,
                T.pseudos.nth = T.pseudos.eq,
                T.filters = ft.prototype = T.pseudos,
                T.setFilters = new ft,
                f(),
                nt.attr = dt.attr,
                dt.find = nt,
                dt.expr = nt.selectors,
                dt.expr[":"] = dt.expr.pseudos,
                dt.unique = nt.uniqueSort,
                dt.text = nt.getText,
                dt.isXMLDoc = nt.isXML,
                dt.contains = nt.contains
        }(h);
    var ot = /Until$/
        , st = /^(?:parents|prev(?:Until|All))/
        , at = /^.[^:#\[\.,]*$/
        , lt = dt.expr.match.needsContext
        , ct = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function ut(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; )
            ;
        return t
    }
    function pt(t, n, i) {
        if (n = n || 0,
            dt.isFunction(n))
            return dt.grep(t, function(t, e) {
                return !!n.call(t, e, t) === i
            });
        if (n.nodeType)
            return dt.grep(t, function(t) {
                return t === n === i
            });
        if ("string" == typeof n) {
            var e = dt.grep(t, function(t) {
                return 1 === t.nodeType
            });
            if (at.test(n))
                return dt.filter(n, e, !i);
            n = dt.filter(n, e)
        }
        return dt.grep(t, function(t) {
            return 0 <= dt.inArray(t, n) === i
        })
    }
    function ft(t) {
        var e = ht.split("|")
            , n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length; )
                n.createElement(e.pop());
        return n
    }
    dt.fn.extend({
        find: function(t) {
            var e, n, i, r = this.length;
            if ("string" != typeof t)
                return (i = this).pushStack(dt(t).filter(function() {
                    for (e = 0; e < r; e++)
                        if (dt.contains(i[e], this))
                            return !0
                }));
            for (n = [],
                     e = 0; e < r; e++)
                dt.find(t, this[e], n);
            return (n = this.pushStack(1 < r ? dt.unique(n) : n)).selector = (this.selector ? this.selector + " " : "") + t,
                n
        },
        has: function(t) {
            var e, n = dt(t, this), i = n.length;
            return this.filter(function() {
                for (e = 0; e < i; e++)
                    if (dt.contains(this, n[e]))
                        return !0
            })
        },
        not: function(t) {
            return this.pushStack(pt(this, t, !1))
        },
        filter: function(t) {
            return this.pushStack(pt(this, t, !0))
        },
        is: function(t) {
            return !!t && ("string" == typeof t ? lt.test(t) ? 0 <= dt(t, this.context).index(this[0]) : 0 < dt.filter(t, this).length : 0 < this.filter(t).length)
        },
        closest: function(t, e) {
            for (var n, i = 0, r = this.length, o = [], s = lt.test(t) || "string" != typeof t ? dt(t, e || this.context) : 0; i < r; i++)
                for (n = this[i]; n && n.ownerDocument && n !== e && 11 !== n.nodeType; ) {
                    if (s ? -1 < s.index(n) : dt.find.matchesSelector(n, t)) {
                        o.push(n);
                        break
                    }
                    n = n.parentNode
                }
            return this.pushStack(1 < o.length ? dt.unique(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? dt.inArray(this[0], dt(t)) : dt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            t = "string" == typeof t ? dt(t, e) : dt.makeArray(t && t.nodeType ? [t] : t),
                t = dt.merge(this.get(), t);
            return this.pushStack(dt.unique(t))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }),
        dt.fn.andSelf = dt.fn.addBack,
        dt.each({
            parent: function(t) {
                t = t.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(t) {
                return dt.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return dt.dir(t, "parentNode", n)
            },
            next: function(t) {
                return ut(t, "nextSibling")
            },
            prev: function(t) {
                return ut(t, "previousSibling")
            },
            nextAll: function(t) {
                return dt.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return dt.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return dt.dir(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return dt.dir(t, "previousSibling", n)
            },
            siblings: function(t) {
                return dt.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return dt.sibling(t.firstChild)
            },
            contents: function(t) {
                return dt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : dt.merge([], t.childNodes)
            }
        }, function(i, r) {
            dt.fn[i] = function(t, e) {
                var n = dt.map(this, r, t);
                return (e = !ot.test(i) ? t : e) && "string" == typeof e && (n = dt.filter(e, n)),
                    n = 1 < this.length && !ct[i] ? dt.unique(n) : n,
                1 < this.length && st.test(i) && (n = n.reverse()),
                    this.pushStack(n)
            }
        }),
        dt.extend({
            filter: function(t, e, n) {
                return n && (t = ":not(" + t + ")"),
                    1 === e.length ? dt.find.matchesSelector(e[0], t) ? [e[0]] : [] : dt.find.matches(t, e)
            },
            dir: function(t, e, n) {
                for (var i = [], r = t[e]; r && 9 !== r.nodeType && (n === T || 1 !== r.nodeType || !dt(r).is(n)); )
                    1 === r.nodeType && i.push(r),
                        r = r[e];
                return i
            },
            sibling: function(t, e) {
                for (var n = []; t; t = t.nextSibling)
                    1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        });
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
        , gt = / jQuery\d+="(?:null|\d+)"/g
        , mt = new RegExp("<(?:" + ht + ")[\\s/>]","i")
        , yt = /^\s+/
        , vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
        , bt = /<([\w:]+)/
        , xt = /<tbody/i
        , wt = /<|&#?\w+;/
        , Tt = /<(?:script|style|link)/i
        , Ct = /^(?:checkbox|radio)$/i
        , St = /checked\s*(?:[^=]|=\s*.checked.)/i
        , kt = /^$|\/(?:java|ecma)script/i
        , Et = /^true\/(.*)/
        , Nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
        , $t = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: dt.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
        , At = ft(m).appendChild(m.createElement("div"));
    function Dt(t) {
        var e = t.getAttributeNode("type");
        return t.type = (e && e.specified) + "/" + t.type,
            t
    }
    function _t(t) {
        var e = Et.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"),
            t
    }
    function Bt(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++)
            dt._data(n, "globalEval", !e || dt._data(e[i], "globalEval"))
    }
    function jt(t, e) {
        if (1 === e.nodeType && dt.hasData(t)) {
            var n, i, r, o = dt._data(t), t = dt._data(e, o), s = o.events;
            if (s)
                for (n in delete t.handle,
                    t.events = {},
                    s)
                    for (i = 0,
                             r = s[n].length; i < r; i++)
                        dt.event.add(e, n, s[n][i]);
            t.data && (t.data = dt.extend({}, t.data))
        }
    }
    function Ot(t, e) {
        var n, i, r = 0, o = typeof t.getElementsByTagName != g ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll != g ? t.querySelectorAll(e || "*") : T;
        if (!o)
            for (o = [],
                     n = t.childNodes || t; null != (i = n[r]); r++)
                !e || dt.nodeName(i, e) ? o.push(i) : dt.merge(o, Ot(i, e));
        return e === T || e && dt.nodeName(t, e) ? dt.merge([t], o) : o
    }
    function Ht(t) {
        Ct.test(t.type) && (t.defaultChecked = t.checked)
    }
    $t.optgroup = $t.option,
        $t.tbody = $t.tfoot = $t.colgroup = $t.caption = $t.thead,
        $t.th = $t.td,
        dt.fn.extend({
            text: function(t) {
                return dt.access(this, function(t) {
                    return t === T ? dt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || m).createTextNode(t))
                }, null, t, arguments.length)
            },
            wrapAll: function(e) {
                return dt.isFunction(e) ? this.each(function(t) {
                    dt(this).wrapAll(e.call(this, t))
                }) : (this[0] && (t = dt(e, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && t.insertBefore(this[0]),
                    t.map(function() {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; )
                            t = t.firstChild;
                        return t
                    }).append(this)),
                    this);
                var t
            },
            wrapInner: function(n) {
                return dt.isFunction(n) ? this.each(function(t) {
                    dt(this).wrapInner(n.call(this, t))
                }) : this.each(function() {
                    var t = dt(this)
                        , e = t.contents();
                    e.length ? e.wrapAll(n) : t.append(n)
                })
            },
            wrap: function(e) {
                var n = dt.isFunction(e);
                return this.each(function(t) {
                    dt(this).wrapAll(n ? e.call(this, t) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    dt.nodeName(this, "body") || dt(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.appendChild(t)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.insertBefore(t, this.firstChild)
                })
            },
            before: function() {
                return this.domManip(arguments, !1, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return this.domManip(arguments, !1, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function(t, e) {
                for (var n, i = 0; null != (n = this[i]); i++)
                    (!t || 0 < dt.filter(t, [n]).length) && (e || 1 !== n.nodeType || dt.cleanData(Ot(n)),
                    n.parentNode && (e && dt.contains(n.ownerDocument, n) && Bt(Ot(n, "script")),
                        n.parentNode.removeChild(n)));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && dt.cleanData(Ot(t, !1)); t.firstChild; )
                        t.removeChild(t.firstChild);
                    t.options && dt.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function(t, e) {
                return t = null != t && t,
                    e = null == e ? t : e,
                    this.map(function() {
                        return dt.clone(this, t, e)
                    })
            },
            html: function(t) {
                return dt.access(this, function(t) {
                    var e = this[0] || {}
                        , n = 0
                        , i = this.length;
                    if (t === T)
                        return 1 === e.nodeType ? e.innerHTML.replace(gt, "") : T;
                    if ("string" == typeof t && !Tt.test(t) && (dt.support.htmlSerialize || !mt.test(t)) && (dt.support.leadingWhitespace || !yt.test(t)) && !$t[(bt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = t.replace(vt, "<$1></$2>");
                        try {
                            for (; n < i; n++)
                                1 === (e = this[n] || {}).nodeType && (dt.cleanData(Ot(e, !1)),
                                    e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function(t) {
                return dt.isFunction(t) || "string" == typeof t || (t = dt(t).not(this).detach()),
                    this.domManip([t], !0, function(t) {
                        var e = this.nextSibling
                            , n = this.parentNode;
                        n && (dt(this).remove(),
                            n.insertBefore(t, e))
                    })
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(n, i, r) {
                n = y.apply([], n);
                var t, e, o, s, a, l, c, u, p = 0, f = this.length, d = this, h = f - 1, g = n[0], m = dt.isFunction(g);
                if (m || !(f <= 1 || "string" != typeof g || dt.support.checkClone) && St.test(g))
                    return this.each(function(t) {
                        var e = d.eq(t);
                        m && (n[0] = g.call(this, t, i ? e.html() : T)),
                            e.domManip(n, i, r)
                    });
                if (f && (t = (l = dt.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild,
                1 === l.childNodes.length && (l = t),
                    t)) {
                    for (i = i && dt.nodeName(t, "tr"),
                             o = (s = dt.map(Ot(l, "script"), Dt)).length; p < f; p++)
                        e = l,
                        p !== h && (e = dt.clone(e, !0, !0),
                        o && dt.merge(s, Ot(e, "script"))),
                            r.call(i && dt.nodeName(this[p], "table") ? (c = this[p],
                                u = "tbody",
                            c.getElementsByTagName(u)[0] || c.appendChild(c.ownerDocument.createElement(u))) : this[p], e, p);
                    if (o)
                        for (a = s[s.length - 1].ownerDocument,
                                 dt.map(s, _t),
                                 p = 0; p < o; p++)
                            e = s[p],
                            kt.test(e.type || "") && !dt._data(e, "globalEval") && dt.contains(a, e) && (e.src ? dt.ajax({
                                url: e.src,
                                type: "GET",
                                dataType: "script",
                                async: !1,
                                global: !1,
                                throws: !0
                            }) : dt.globalEval((e.text || e.textContent || e.innerHTML || "").replace(Nt, "")));
                    l = t = null
                }
                return this
            }
        }),
        dt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, s) {
            dt.fn[t] = function(t) {
                for (var e, n = 0, i = [], r = dt(t), o = r.length - 1; n <= o; n++)
                    e = n === o ? this : this.clone(!0),
                        dt(r[n])[s](e),
                        l.apply(i, e.get());
                return this.pushStack(i)
            }
        }),
        dt.extend({
            clone: function(t, e, n) {
                var i, r, o, s, a, l = dt.contains(t.ownerDocument, t);
                if (dt.support.html5Clone || dt.isXMLDoc(t) || !mt.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (At.innerHTML = t.outerHTML,
                    At.removeChild(o = At.firstChild)),
                    !(dt.support.noCloneEvent && dt.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || dt.isXMLDoc(t)))
                    for (i = Ot(o),
                             a = Ot(t),
                             s = 0; null != (r = a[s]); ++s)
                        i[s] && function(t, e) {
                            var n, i, r;
                            if (1 === e.nodeType) {
                                if (n = e.nodeName.toLowerCase(),
                                !dt.support.noCloneEvent && e[dt.expando]) {
                                    for (i in (r = dt._data(e)).events)
                                        dt.removeEvent(e, i, r.handle);
                                    e.removeAttribute(dt.expando)
                                }
                                "script" === n && e.text !== t.text ? (Dt(e).text = t.text,
                                    _t(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML),
                                dt.support.html5Clone && t.innerHTML && !dt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Ct.test(t.type) ? (e.defaultChecked = e.checked = t.checked,
                                e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
                            }
                        }(r, i[s]);
                if (e)
                    if (n)
                        for (a = a || Ot(t),
                                 i = i || Ot(o),
                                 s = 0; null != (r = a[s]); s++)
                            jt(r, i[s]);
                    else
                        jt(t, o);
                return 0 < (i = Ot(o, "script")).length && Bt(i, !l && Ot(t, "script")),
                    i = a = r = null,
                    o
            },
            buildFragment: function(t, e, n, i) {
                for (var r, o, s, a, l, c, u, p = t.length, f = ft(e), d = [], h = 0; h < p; h++)
                    if ((o = t[h]) || 0 === o)
                        if ("object" === dt.type(o))
                            dt.merge(d, o.nodeType ? [o] : o);
                        else if (wt.test(o)) {
                            for (a = a || f.appendChild(e.createElement("div")),
                                     l = (bt.exec(o) || ["", ""])[1].toLowerCase(),
                                     u = $t[l] || $t._default,
                                     a.innerHTML = u[1] + o.replace(vt, "<$1></$2>") + u[2],
                                     r = u[0]; r--; )
                                a = a.lastChild;
                            if (!dt.support.leadingWhitespace && yt.test(o) && d.push(e.createTextNode(yt.exec(o)[0])),
                                !dt.support.tbody)
                                for (r = (o = "table" !== l || xt.test(o) ? "<table>" !== u[1] || xt.test(o) ? 0 : a : a.firstChild) && o.childNodes.length; r--; )
                                    dt.nodeName(c = o.childNodes[r], "tbody") && !c.childNodes.length && o.removeChild(c);
                            for (dt.merge(d, a.childNodes),
                                     a.textContent = ""; a.firstChild; )
                                a.removeChild(a.firstChild);
                            a = f.lastChild
                        } else
                            d.push(e.createTextNode(o));
                for (a && f.removeChild(a),
                     dt.support.appendChecked || dt.grep(Ot(d, "input"), Ht),
                         h = 0; o = d[h++]; )
                    if ((!i || -1 === dt.inArray(o, i)) && (s = dt.contains(o.ownerDocument, o),
                        a = Ot(f.appendChild(o), "script"),
                    s && Bt(a),
                        n))
                        for (r = 0; o = a[r++]; )
                            kt.test(o.type || "") && n.push(o);
                return a = null,
                    f
            },
            cleanData: function(t, e) {
                for (var n, i, r, o, s = 0, a = dt.expando, l = dt.cache, c = dt.support.deleteExpando, u = dt.event.special; null != (n = t[s]); s++)
                    if ((e || dt.acceptData(n)) && (o = (r = n[a]) && l[r])) {
                        if (o.events)
                            for (i in o.events)
                                u[i] ? dt.event.remove(n, i) : dt.removeEvent(n, i, o.handle);
                        l[r] && (delete l[r],
                            c ? delete n[a] : typeof n.removeAttribute != g ? n.removeAttribute(a) : n[a] = null,
                            p.push(r))
                    }
            }
        });
    var Lt, It, Rt, Mt = /alpha\([^)]*\)/i, Ft = /opacity\s*=\s*([^)]*)/, Pt = /^(top|right|bottom|left)$/, qt = /^(none|table(?!-c[ea]).+)/, zt = /^margin/, Wt = new RegExp("^(" + b + ")(.*)$","i"), Ut = new RegExp("^(" + b + ")(?!px)[a-z%]+$","i"), Xt = new RegExp("^([+-])=(" + b + ")","i"), Vt = {
        BODY: "block"
    }, Jt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Qt = {
        letterSpacing: 0,
        fontWeight: 400
    }, Kt = ["Top", "Right", "Bottom", "Left"], Yt = ["Webkit", "O", "Moz", "ms"];
    function Gt(t, e) {
        if (e in t)
            return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = Yt.length; r--; )
            if ((e = Yt[r] + n)in t)
                return e;
        return i
    }
    function Zt(t, e) {
        return "none" === dt.css(t = e || t, "display") || !dt.contains(t.ownerDocument, t)
    }
    function te(t, e) {
        for (var n, i, r, o = [], s = 0, a = t.length; s < a; s++)
            (i = t[s]).style && (o[s] = dt._data(i, "olddisplay"),
                n = i.style.display,
                e ? (o[s] || "none" !== n || (i.style.display = ""),
                "" === i.style.display && Zt(i) && (o[s] = dt._data(i, "olddisplay", re(i.nodeName)))) : o[s] || (r = Zt(i),
                (n && "none" !== n || !r) && dt._data(i, "olddisplay", r ? n : dt.css(i, "display"))));
        for (s = 0; s < a; s++)
            (i = t[s]).style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
        return t
    }
    function ee(t, e, n) {
        var i = Wt.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }
    function ne(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; o < 4; o += 2)
            "margin" === n && (s += dt.css(t, n + Kt[o], !0, r)),
                i ? ("content" === n && (s -= dt.css(t, "padding" + Kt[o], !0, r)),
                "margin" !== n && (s -= dt.css(t, "border" + Kt[o] + "Width", !0, r))) : (s += dt.css(t, "padding" + Kt[o], !0, r),
                "padding" !== n && (s += dt.css(t, "border" + Kt[o] + "Width", !0, r)));
        return s
    }
    function ie(t, e, n) {
        var i = !0
            , r = "width" === e ? t.offsetWidth : t.offsetHeight
            , o = It(t)
            , s = dt.support.boxSizing && "border-box" === dt.css(t, "boxSizing", !1, o);
        if (r <= 0 || null == r) {
            if (((r = Rt(t, e, o)) < 0 || null == r) && (r = t.style[e]),
                Ut.test(r))
                return r;
            i = s && (dt.support.boxSizingReliable || r === t.style[e]),
                r = parseFloat(r) || 0
        }
        return r + ne(t, e, n || (s ? "border" : "content"), i, o) + "px"
    }
    function re(t) {
        var e = m
            , n = Vt[t];
        return n || ("none" !== (n = oe(t, e)) && n || ((e = ((Lt = (Lt || dt("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement))[0].contentWindow || Lt[0].contentDocument).document).write("<!doctype html><html><body>"),
            e.close(),
            n = oe(t, e),
            Lt.detach()),
            Vt[t] = n),
            n
    }
    function oe(t, e) {
        t = dt(e.createElement(t)).appendTo(e.body),
            e = dt.css(t[0], "display");
        return t.remove(),
            e
    }
    dt.fn.extend({
        css: function(t, e) {
            return dt.access(this, function(t, e, n) {
                var i, r, o = {}, s = 0;
                if (dt.isArray(e)) {
                    for (r = It(t),
                             i = e.length; s < i; s++)
                        o[e[s]] = dt.css(t, e[s], !1, r);
                    return o
                }
                return n !== T ? dt.style(t, e, n) : dt.css(t, e)
            }, t, e, 1 < arguments.length)
        },
        show: function() {
            return te(this, !0)
        },
        hide: function() {
            return te(this)
        },
        toggle: function(t) {
            var e = "boolean" == typeof t;
            return this.each(function() {
                (e ? t : Zt(this)) ? dt(this).show() : dt(this).hide()
            })
        }
    }),
        dt.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            t = Rt(t, "opacity");
                            return "" === t ? "1" : t
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: dt.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, o, s, a = dt.camelCase(e), l = t.style;
                    if (e = dt.cssProps[a] || (dt.cssProps[a] = Gt(l, a)),
                        s = dt.cssHooks[e] || dt.cssHooks[a],
                    n === T)
                        return s && "get"in s && (r = s.get(t, !1, i)) !== T ? r : l[e];
                    if ("string" === (o = typeof n) && (r = Xt.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(dt.css(t, e)),
                        o = "number"),
                        !(null == n || "number" === o && isNaN(n) || ("number" !== o || dt.cssNumber[a] || (n += "px"),
                        dt.support.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"),
                        s && "set"in s && (n = s.set(t, n, i)) === T)))
                        try {
                            l[e] = n
                        } catch (t) {}
                }
            },
            css: function(t, e, n, i) {
                var r, o = dt.camelCase(e);
                return e = dt.cssProps[o] || (dt.cssProps[o] = Gt(t.style, o)),
                "normal" === (r = (r = (o = dt.cssHooks[e] || dt.cssHooks[o]) && "get"in o ? o.get(t, !0, n) : r) === T ? Rt(t, e, i) : r) && e in Qt && (r = Qt[e]),
                    "" === n || n ? (e = parseFloat(r),
                        !0 === n || dt.isNumeric(e) ? e || 0 : r) : r
            },
            swap: function(t, e, n, i) {
                var r, o = {};
                for (r in e)
                    o[r] = t.style[r],
                        t.style[r] = e[r];
                for (r in i = n.apply(t, i || []),
                    e)
                    t.style[r] = o[r];
                return i
            }
        }),
        h.getComputedStyle ? (It = function(t) {
                return h.getComputedStyle(t, null)
            }
                ,
                Rt = function(t, e, n) {
                    var i = n || It(t)
                        , r = i ? i.getPropertyValue(e) || i[e] : T
                        , o = t.style;
                    return i && ("" !== r || dt.contains(t.ownerDocument, t) || (r = dt.style(t, e)),
                    Ut.test(r) && zt.test(e) && (n = o.width,
                        t = o.minWidth,
                        e = o.maxWidth,
                        o.minWidth = o.maxWidth = o.width = r,
                        r = i.width,
                        o.width = n,
                        o.minWidth = t,
                        o.maxWidth = e)),
                        r
                }
        ) : m.documentElement.currentStyle && (It = function(t) {
                return t.currentStyle
            }
                ,
                Rt = function(t, e, n) {
                    var i, r = n || It(t), o = r ? r[e] : T, s = t.style;
                    return null == o && s && s[e] && (o = s[e]),
                    Ut.test(o) && !Pt.test(e) && (i = s.left,
                    (r = (n = t.runtimeStyle) && n.left) && (n.left = t.currentStyle.left),
                        s.left = "fontSize" === e ? "1em" : o,
                        o = s.pixelLeft + "px",
                        s.left = i,
                    r && (n.left = r)),
                        "" === o ? "auto" : o
                }
        ),
        dt.each(["height", "width"], function(t, r) {
            dt.cssHooks[r] = {
                get: function(t, e, n) {
                    if (e)
                        return 0 === t.offsetWidth && qt.test(dt.css(t, "display")) ? dt.swap(t, Jt, function() {
                            return ie(t, r, n)
                        }) : ie(t, r, n)
                },
                set: function(t, e, n) {
                    var i = n && It(t);
                    return ee(0, e, n ? ne(t, r, n, dt.support.boxSizing && "border-box" === dt.css(t, "boxSizing", !1, i), i) : 0)
                }
            }
        }),
    dt.support.opacity || (dt.cssHooks.opacity = {
        get: function(t, e) {
            return Ft.test((e && t.currentStyle ? t.currentStyle : t.style).filter || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style
                , i = t.currentStyle
                , r = dt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : ""
                , t = i && i.filter || n.filter || "";
            ((n.zoom = 1) <= e || "" === e) && "" === dt.trim(t.replace(Mt, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === e || i && !i.filter) || (n.filter = Mt.test(t) ? t.replace(Mt, r) : t + " " + r)
        }
    }),
        dt(function() {
            dt.support.reliableMarginRight || (dt.cssHooks.marginRight = {
                get: function(t, e) {
                    if (e)
                        return dt.swap(t, {
                            display: "inline-block"
                        }, Rt, [t, "marginRight"])
                }
            }),
            !dt.support.pixelPosition && dt.fn.position && dt.each(["top", "left"], function(t, n) {
                dt.cssHooks[n] = {
                    get: function(t, e) {
                        if (e)
                            return e = Rt(t, n),
                                Ut.test(e) ? dt(t).position()[n] + "px" : e
                    }
                }
            })
        }),
    dt.expr && dt.expr.filters && (dt.expr.filters.hidden = function(t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !dt.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || dt.css(t, "display"))
        }
            ,
            dt.expr.filters.visible = function(t) {
                return !dt.expr.filters.hidden(t)
            }
    ),
        dt.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(r, o) {
            dt.cssHooks[r + o] = {
                expand: function(t) {
                    for (var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++)
                        n[r + Kt[e] + o] = i[e] || i[e - 2] || i[0];
                    return n
                }
            },
            zt.test(r) || (dt.cssHooks[r + o].set = ee)
        });
    var se = /%20/g
        , ae = /\[\]$/
        , le = /\r?\n/g
        , ce = /^(?:submit|button|image|reset|file)$/i
        , ue = /^(?:input|select|textarea|keygen)/i;
    dt.fn.extend({
        serialize: function() {
            return dt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = dt.prop(this, "elements");
                return t ? dt.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !dt(this).is(":disabled") && ue.test(this.nodeName) && !ce.test(t) && (this.checked || !Ct.test(t))
            }).map(function(t, e) {
                var n = dt(this).val();
                return null == n ? null : dt.isArray(n) ? dt.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(le, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(le, "\r\n")
                }
            }).get()
        }
    }),
        dt.param = function(t, e) {
            function n(t, e) {
                e = dt.isFunction(e) ? e() : null == e ? "" : e,
                    r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            }
            var i, r = [];
            if (e === T && (e = dt.ajaxSettings && dt.ajaxSettings.traditional),
            dt.isArray(t) || t.jquery && !dt.isPlainObject(t))
                dt.each(t, function() {
                    n(this.name, this.value)
                });
            else
                for (i in t)
                    !function n(i, t, r, o) {
                        if (dt.isArray(t))
                            dt.each(t, function(t, e) {
                                r || ae.test(i) ? o(i, e) : n(i + "[" + ("object" == typeof e ? t : "") + "]", e, r, o)
                            });
                        else if (r || "object" !== dt.type(t))
                            o(i, t);
                        else
                            for (var e in t)
                                n(i + "[" + e + "]", t[e], r, o)
                    }(i, t[i], e, n);
            return r.join("&").replace(se, "+")
        }
        ,
        dt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, n) {
            dt.fn[n] = function(t, e) {
                return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
            }
        }),
        dt.fn.hover = function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    ;
    var pe, fe, de = dt.now(), he = /\?/, ge = /#.*$/, me = /([?&])_=[^&]*/, ye = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, ve = /^(?:GET|HEAD)$/, be = /^\/\//, xe = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, we = dt.fn.load, Te = {}, Ce = {}, Se = "*/".concat("*");
    try {
        fe = t.href
    } catch (t) {
        (fe = m.createElement("a")).href = "",
            fe = fe.href
    }
    function ke(o) {
        return function(t, e) {
            "string" != typeof t && (e = t,
                t = "*");
            var n, i = 0, r = t.toLowerCase().match(C) || [];
            if (dt.isFunction(e))
                for (; n = r[i++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                        (o[n] = o[n] || []).unshift(e)) : (o[n] = o[n] || []).push(e)
        }
    }
    function Ee(e, i, r, o) {
        var s = {}
            , a = e === Ce;
        function l(t) {
            var n;
            return s[t] = !0,
                dt.each(e[t] || [], function(t, e) {
                    e = e(i, r, o);
                    return "string" != typeof e || a || s[e] ? a ? !(n = e) : void 0 : (i.dataTypes.unshift(e),
                        l(e),
                        !1)
                }),
                n
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function Ne(t, e) {
        var n, i, r = dt.ajaxSettings.flatOptions || {};
        for (i in e)
            e[i] !== T && ((r[i] ? t : n = n || {})[i] = e[i]);
        return n && dt.extend(!0, t, n),
            t
    }
    pe = xe.exec(fe.toLowerCase()) || [],
        dt.fn.load = function(t, e, n) {
            if ("string" != typeof t && we)
                return we.apply(this, arguments);
            var i, r, o, s = this, a = t.indexOf(" ");
            return 0 <= a && (i = t.slice(a, t.length),
                t = t.slice(0, a)),
                dt.isFunction(e) ? (n = e,
                    e = T) : e && "object" == typeof e && (o = "POST"),
            0 < s.length && dt.ajax({
                url: t,
                type: o,
                dataType: "html",
                data: e
            }).done(function(t) {
                r = arguments,
                    s.html(i ? dt("<div>").append(dt.parseHTML(t)).find(i) : t)
            }).complete(n && function(t, e) {
                s.each(n, r || [t.responseText, e, t])
            }
            ),
                this
        }
        ,
        dt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            dt.fn[e] = function(t) {
                return this.on(e, t)
            }
        }),
        dt.each(["get", "post"], function(t, r) {
            dt[r] = function(t, e, n, i) {
                return dt.isFunction(e) && (i = i || n,
                    n = e,
                    e = T),
                    dt.ajax({
                        url: t,
                        type: r,
                        dataType: i,
                        data: e,
                        success: n
                    })
            }
        }),
        dt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: fe,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(pe[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Se,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": h.String,
                    "text html": !0,
                    "text json": dt.parseJSON,
                    "text xml": dt.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? Ne(Ne(t, dt.ajaxSettings), e) : Ne(dt.ajaxSettings, t)
            },
            ajaxPrefilter: ke(Te),
            ajaxTransport: ke(Ce),
            ajax: function(t, e) {
                "object" == typeof t && (e = t,
                    t = T);
                var n, c, u, p, f, d, i, h = dt.ajaxSetup({}, e = e || {}), g = h.context || h, m = h.context && (g.nodeType || g.jquery) ? dt(g) : dt.event, y = dt.Deferred(), v = dt.Callbacks("once memory"), b = h.statusCode || {}, r = {}, o = {}, x = 0, s = "canceled", w = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === x) {
                            if (!i)
                                for (i = {}; e = ye.exec(u); )
                                    i[e[1].toLowerCase()] = e[2];
                            e = i[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? u : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return x || (t = o[n] = o[n] || t,
                            r[t] = e),
                            this
                    },
                    overrideMimeType: function(t) {
                        return x || (h.mimeType = t),
                            this
                    },
                    statusCode: function(t) {
                        if (t)
                            if (x < 2)
                                for (var e in t)
                                    b[e] = [b[e], t[e]];
                            else
                                w.always(t[w.status]);
                        return this
                    },
                    abort: function(t) {
                        t = t || s;
                        return d && d.abort(t),
                            a(0, t),
                            this
                    }
                };
                if (y.promise(w).complete = v.add,
                    w.success = w.done,
                    w.error = w.fail,
                    h.url = ((t || h.url || fe) + "").replace(ge, "").replace(be, pe[1] + "//"),
                    h.type = e.method || e.type || h.method || h.type,
                    h.dataTypes = dt.trim(h.dataType || "*").toLowerCase().match(C) || [""],
                null == h.crossDomain && (t = xe.exec(h.url.toLowerCase()),
                    h.crossDomain = !(!t || t[1] === pe[1] && t[2] === pe[2] && (t[3] || ("http:" === t[1] ? 80 : 443)) == (pe[3] || ("http:" === pe[1] ? 80 : 443)))),
                h.data && h.processData && "string" != typeof h.data && (h.data = dt.param(h.data, h.traditional)),
                    Ee(Te, h, e, w),
                2 === x)
                    return w;
                for (n in (f = h.global) && 0 == dt.active++ && dt.event.trigger("ajaxStart"),
                    h.type = h.type.toUpperCase(),
                    h.hasContent = !ve.test(h.type),
                    c = h.url,
                h.hasContent || (h.data && (c = h.url += (he.test(c) ? "&" : "?") + h.data,
                    delete h.data),
                !1 === h.cache && (h.url = me.test(c) ? c.replace(me, "$1_=" + de++) : c + (he.test(c) ? "&" : "?") + "_=" + de++)),
                h.ifModified && (dt.lastModified[c] && w.setRequestHeader("If-Modified-Since", dt.lastModified[c]),
                dt.etag[c] && w.setRequestHeader("If-None-Match", dt.etag[c])),
                (h.data && h.hasContent && !1 !== h.contentType || e.contentType) && w.setRequestHeader("Content-Type", h.contentType),
                    w.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Se + "; q=0.01" : "") : h.accepts["*"]),
                    h.headers)
                    w.setRequestHeader(n, h.headers[n]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, w, h) || 2 === x))
                    return w.abort();
                for (n in s = "abort",
                    {
                        success: 1,
                        error: 1,
                        complete: 1
                    })
                    w[n](h[n]);
                if (d = Ee(Ce, h, e, w)) {
                    w.readyState = 1,
                    f && m.trigger("ajaxSend", [w, h]),
                    h.async && 0 < h.timeout && (p = setTimeout(function() {
                        w.abort("timeout")
                    }, h.timeout));
                    try {
                        x = 1,
                            d.send(r, a)
                    } catch (t) {
                        if (!(x < 2))
                            throw t;
                        a(-1, t)
                    }
                } else
                    a(-1, "No Transport");
                function a(t, e, n, i) {
                    var r, o, s, a, l = e;
                    2 !== x && (x = 2,
                    p && clearTimeout(p),
                        d = T,
                        u = i || "",
                        w.readyState = 0 < t ? 4 : 0,
                    n && (a = function(t, e, n) {
                        var i, r, o, s, a = t.contents, l = t.dataTypes, c = t.responseFields;
                        for (s in c)
                            s in n && (e[c[s]] = n[s]);
                        for (; "*" === l[0]; )
                            l.shift(),
                            r === T && (r = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (r)
                            for (s in a)
                                if (a[s] && a[s].test(r)) {
                                    l.unshift(s);
                                    break
                                }
                        if (l[0]in n)
                            o = l[0];
                        else {
                            for (s in n) {
                                if (!l[0] || t.converters[s + " " + l[0]]) {
                                    o = s;
                                    break
                                }
                                i = i || s
                            }
                            o = o || i
                        }
                        if (o)
                            return o !== l[0] && l.unshift(o),
                                n[o]
                    }(h, w, n)),
                        200 <= t && t < 300 || 304 === t ? (h.ifModified && ((n = w.getResponseHeader("Last-Modified")) && (dt.lastModified[c] = n),
                        (n = w.getResponseHeader("etag")) && (dt.etag[c] = n)),
                            204 === t ? (r = !0,
                                l = "nocontent") : 304 === t ? (r = !0,
                                l = "notmodified") : (l = (r = function(t, e) {
                                var n, i, r, o, s = {}, a = 0, l = t.dataTypes.slice(), c = l[0];
                                t.dataFilter && (e = t.dataFilter(e, t.dataType));
                                if (l[1])
                                    for (r in t.converters)
                                        s[r.toLowerCase()] = t.converters[r];
                                for (; i = l[++a]; )
                                    if ("*" !== i) {
                                        if ("*" !== c && c !== i) {
                                            if (!(r = s[c + " " + i] || s["* " + i]))
                                                for (n in s)
                                                    if ((o = n.split(" "))[1] === i && (r = s[c + " " + o[0]] || s["* " + o[0]])) {
                                                        !0 === r ? r = s[n] : !0 !== s[n] && (i = o[0],
                                                            l.splice(a--, 0, i));
                                                        break
                                                    }
                                            if (!0 !== r)
                                                if (r && t.throws)
                                                    e = r(e);
                                                else
                                                    try {
                                                        e = r(e)
                                                    } catch (t) {
                                                        return {
                                                            state: "parsererror",
                                                            error: r ? t : "No conversion from " + c + " to " + i
                                                        }
                                                    }
                                        }
                                        c = i
                                    }
                                return {
                                    state: "success",
                                    data: e
                                }
                            }(h, a)).state,
                                o = r.data,
                                r = !(s = r.error))) : (s = l,
                        !t && l || (l = "error",
                        t < 0 && (t = 0))),
                        w.status = t,
                        w.statusText = (e || l) + "",
                        r ? y.resolveWith(g, [o, l, w]) : y.rejectWith(g, [w, l, s]),
                        w.statusCode(b),
                        b = T,
                    f && m.trigger(r ? "ajaxSuccess" : "ajaxError", [w, h, r ? o : s]),
                        v.fireWith(g, [w, l]),
                    f && (m.trigger("ajaxComplete", [w, h]),
                    --dt.active || dt.event.trigger("ajaxStop")))
                }
                return w
            },
            getScript: function(t, e) {
                return dt.get(t, T, e, "script")
            },
            getJSON: function(t, e, n) {
                return dt.get(t, e, n, "json")
            }
        }),
        dt.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(t) {
                    return dt.globalEval(t),
                        t
                }
            }
        }),
        dt.ajaxPrefilter("script", function(t) {
            t.cache === T && (t.cache = !1),
            t.crossDomain && (t.type = "GET",
                t.global = !1)
        }),
        dt.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var i, r = m.head || dt("head")[0] || m.documentElement;
                return {
                    send: function(t, n) {
                        (i = m.createElement("script")).async = !0,
                        e.scriptCharset && (i.charset = e.scriptCharset),
                            i.src = e.url,
                            i.onload = i.onreadystatechange = function(t, e) {
                                !e && i.readyState && !/loaded|complete/.test(i.readyState) || (i.onload = i.onreadystatechange = null,
                                i.parentNode && i.parentNode.removeChild(i),
                                    i = null,
                                e || n(200, "success"))
                            }
                            ,
                            r.insertBefore(i, r.firstChild)
                    },
                    abort: function() {
                        i && i.onload(T, !0)
                    }
                }
            }
        });
    var $e = []
        , Ae = /(=)\?(?=&|$)|\?\?/;
    dt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = $e.pop() || dt.expando + "_" + de++;
            return this[t] = !0,
                t
        }
    }),
        dt.ajaxPrefilter("json jsonp", function(t, e, n) {
            var i, r, o, s = !1 !== t.jsonp && (Ae.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ae.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0])
                return i = t.jsonpCallback = dt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                    s ? t[s] = t[s].replace(Ae, "$1" + i) : !1 !== t.jsonp && (t.url += (he.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                    t.converters["script json"] = function() {
                        return o || dt.error(i + " was not called"),
                            o[0]
                    }
                    ,
                    t.dataTypes[0] = "json",
                    r = h[i],
                    h[i] = function() {
                        o = arguments
                    }
                    ,
                    n.always(function() {
                        h[i] = r,
                        t[i] && (t.jsonpCallback = e.jsonpCallback,
                            $e.push(i)),
                        o && dt.isFunction(r) && r(o[0]),
                            o = r = T
                    }),
                    "script"
        });
    var De, _e = 0, Be = h.ActiveXObject && function() {
            for (var t in De)
                De[t](T, !0)
        }
    ;
    function je() {
        try {
            return new h.XMLHttpRequest
        } catch (t) {}
    }
    dt.ajaxSettings.xhr = h.ActiveXObject ? function() {
            return !this.isLocal && je() || function() {
                try {
                    return new h.ActiveXObject("Microsoft.XMLHTTP")
                } catch (t) {}
            }()
        }
        : je,
        t = dt.ajaxSettings.xhr(),
        dt.support.cors = !!t && "withCredentials"in t,
    (t = dt.support.ajax = !!t) && dt.ajaxTransport(function(c) {
        var u;
        if (!c.crossDomain || dt.support.cors)
            return {
                send: function(t, s) {
                    var a, e, l = c.xhr();
                    if (c.username ? l.open(c.type, c.url, c.async, c.username, c.password) : l.open(c.type, c.url, c.async),
                        c.xhrFields)
                        for (e in c.xhrFields)
                            l[e] = c.xhrFields[e];
                    c.mimeType && l.overrideMimeType && l.overrideMimeType(c.mimeType),
                    c.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (e in t)
                            l.setRequestHeader(e, t[e])
                    } catch (t) {}
                    l.send(c.hasContent && c.data || null),
                        u = function(t, e) {
                            var n, i, r, o;
                            try {
                                if (u && (e || 4 === l.readyState))
                                    if (u = T,
                                    a && (l.onreadystatechange = dt.noop,
                                    Be && delete De[a]),
                                        e)
                                        4 !== l.readyState && l.abort();
                                    else {
                                        o = {},
                                            n = l.status,
                                            i = l.getAllResponseHeaders(),
                                        "string" == typeof l.responseText && (o.text = l.responseText);
                                        try {
                                            r = l.statusText
                                        } catch (t) {
                                            r = ""
                                        }
                                        n || !c.isLocal || c.crossDomain ? 1223 === n && (n = 204) : n = o.text ? 200 : 404
                                    }
                            } catch (t) {
                                e || s(-1, t)
                            }
                            o && s(n, r, o, i)
                        }
                        ,
                        c.async ? 4 === l.readyState ? setTimeout(u) : (a = ++_e,
                        Be && (De || (De = {},
                            dt(h).unload(Be)),
                            De[a] = u),
                            l.onreadystatechange = u) : u()
                },
                abort: function() {
                    u && u(T, !0)
                }
            }
    });
    var Oe, He, Le = /^(?:toggle|show|hide)$/, Ie = new RegExp("^(?:([+-])=|)(" + b + ")([a-z%]*)$","i"), Re = /queueHooks$/, Me = [function(e, t, n) {
        var i, r, o, s, a, l, c, u, p, f = this, d = e.style, h = {}, g = [], m = e.nodeType && Zt(e);
        n.queue || (null == (u = dt._queueHooks(e, "fx")).unqueued && (u.unqueued = 0,
                p = u.empty.fire,
                u.empty.fire = function() {
                    u.unqueued || p()
                }
        ),
            u.unqueued++,
            f.always(function() {
                f.always(function() {
                    u.unqueued--,
                    dt.queue(e, "fx").length || u.empty.fire()
                })
            }));
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
        "inline" === dt.css(e, "display") && "none" === dt.css(e, "float") && (dt.support.inlineBlockNeedsLayout && "inline" !== re(e.nodeName) ? d.zoom = 1 : d.display = "inline-block"));
        n.overflow && (d.overflow = "hidden",
        dt.support.shrinkWrapBlocks || f.always(function() {
            d.overflow = n.overflow[0],
                d.overflowX = n.overflow[1],
                d.overflowY = n.overflow[2]
        }));
        for (r in t)
            s = t[r],
            Le.exec(s) && (delete t[r],
                l = l || "toggle" === s,
            s !== (m ? "hide" : "show") && g.push(r));
        if (o = g.length) {
            "hidden"in (a = dt._data(e, "fxshow") || dt._data(e, "fxshow", {})) && (m = a.hidden),
            l && (a.hidden = !m),
                m ? dt(e).show() : f.done(function() {
                    dt(e).hide()
                }),
                f.done(function() {
                    for (var t in dt._removeData(e, "fxshow"),
                        h)
                        dt.style(e, t, h[t])
                });
            for (r = 0; r < o; r++)
                i = g[r],
                    c = f.createTween(i, m ? a[i] : 0),
                    h[i] = a[i] || dt.style(e, i),
                i in a || (a[i] = c.start,
                m && (c.end = c.start,
                    c.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    ], Fe = {
        "*": [function(t, e) {
            var n, i = this.createTween(t, e), r = Ie.exec(e), o = i.cur(), s = +o || 0, a = 1, l = 20;
            if (r) {
                if (e = +r[2],
                "px" !== (n = r[3] || (dt.cssNumber[t] ? "" : "px")) && s)
                    for (s = dt.css(i.elem, t, !0) || e || 1; s /= a = a || ".5",
                        dt.style(i.elem, t, s + n),
                    a !== (a = i.cur() / o) && 1 !== a && --l; )
                        ;
                i.unit = n,
                    i.start = s,
                    i.end = r[1] ? s + (r[1] + 1) * e : e
            }
            return i
        }
        ]
    };
    function Pe() {
        return setTimeout(function() {
            Oe = T
        }),
            Oe = dt.now()
    }
    function qe(r, t, e) {
        var n, o, s, i = 0, a = Me.length, l = dt.Deferred().always(function() {
            delete c.elem
        }), c = function() {
            if (o)
                return !1;
            for (var t = Oe || Pe(), t = Math.max(0, u.startTime + u.duration - t), e = 1 - (t / u.duration || 0), n = 0, i = u.tweens.length; n < i; n++)
                u.tweens[n].run(e);
            return l.notifyWith(r, [u, e, t]),
                e < 1 && i ? t : (l.resolveWith(r, [u]),
                    !1)
        }, u = l.promise({
            elem: r,
            props: dt.extend({}, t),
            opts: dt.extend(!0, {
                specialEasing: {}
            }, e),
            originalProperties: t,
            originalOptions: e,
            startTime: Oe || Pe(),
            duration: e.duration,
            tweens: [],
            createTween: function(t, e) {
                t = dt.Tween(r, u.opts, t, e, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(t),
                    t
            },
            stop: function(t) {
                var e = 0
                    , n = t ? u.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; e < n; e++)
                    u.tweens[e].run(1);
                return t ? l.resolveWith(r, [u, t]) : l.rejectWith(r, [u, t]),
                    this
            }
        }), p = u.props;
        for (!function(t, e) {
            var n, i, r, o, s;
            for (r in t)
                if (i = dt.camelCase(r),
                    o = e[i],
                    n = t[r],
                dt.isArray(n) && (o = n[1],
                    n = t[r] = n[0]),
                r !== i && (t[i] = n,
                    delete t[r]),
                (s = dt.cssHooks[i]) && "expand"in s)
                    for (r in n = s.expand(n),
                        delete t[i],
                        n)
                        r in t || (t[r] = n[r],
                            e[r] = o);
                else
                    e[i] = o
        }(p, u.opts.specialEasing); i < a; i++)
            if (n = Me[i].call(u, r, p, u.opts))
                return n;
        return s = u,
            dt.each(p, function(t, e) {
                for (var n = (Fe[t] || []).concat(Fe["*"]), i = 0, r = n.length; i < r; i++)
                    if (n[i].call(s, t, e))
                        return
            }),
        dt.isFunction(u.opts.start) && u.opts.start.call(r, u),
            dt.fx.timer(dt.extend(c, {
                elem: r,
                anim: u,
                queue: u.opts.queue
            })),
            u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function ze(t, e, n, i, r) {
        return new ze.prototype.init(t,e,n,i,r)
    }
    function We(t, e) {
        var n, i = {
            height: t
        }, r = 0;
        for (e = e ? 1 : 0; r < 4; r += 2 - e)
            i["margin" + (n = Kt[r])] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t),
            i
    }
    function Ue(t) {
        return dt.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    dt.Animation = dt.extend(qe, {
        tweener: function(t, e) {
            for (var n, i = 0, r = (t = dt.isFunction(t) ? (e = t,
                ["*"]) : t.split(" ")).length; i < r; i++)
                n = t[i],
                    Fe[n] = Fe[n] || [],
                    Fe[n].unshift(e)
        },
        prefilter: function(t, e) {
            e ? Me.unshift(t) : Me.push(t)
        }
    }),
        ((dt.Tween = ze).prototype = {
            constructor: ze,
            init: function(t, e, n, i, r, o) {
                this.elem = t,
                    this.prop = n,
                    this.easing = r || "swing",
                    this.options = e,
                    this.start = this.now = this.cur(),
                    this.end = i,
                    this.unit = o || (dt.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = ze.propHooks[this.prop];
                return (t && t.get ? t : ze.propHooks._default).get(this)
            },
            run: function(t) {
                var e, n = ze.propHooks[this.prop];
                return this.options.duration ? this.pos = e = dt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
                    this.now = (this.end - this.start) * e + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                    (n && n.set ? n : ze.propHooks._default).set(this),
                    this
            }
        }).init.prototype = ze.prototype,
        (ze.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = dt.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0 : t.elem[t.prop]
                },
                set: function(t) {
                    dt.fx.step[t.prop] ? dt.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[dt.cssProps[t.prop]] || dt.cssHooks[t.prop]) ? dt.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }).scrollTop = ze.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        },
        dt.each(["toggle", "show", "hide"], function(t, i) {
            var r = dt.fn[i];
            dt.fn[i] = function(t, e, n) {
                return null == t || "boolean" == typeof t ? r.apply(this, arguments) : this.animate(We(i, !0), t, e, n)
            }
        }),
        dt.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(Zt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(e, t, n, i) {
                var r = dt.isEmptyObject(e)
                    , o = dt.speed(t, n, i)
                    , s = function() {
                    var t = qe(this, dt.extend({}, e), o);
                    s.finish = function() {
                        t.stop(!0)
                    }
                        ,
                    (r || dt._data(this, "finish")) && t.stop(!0)
                };
                return s.finish = s,
                    r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(r, t, o) {
                function s(t) {
                    var e = t.stop;
                    delete t.stop,
                        e(o)
                }
                return "string" != typeof r && (o = t,
                    t = r,
                    r = T),
                t && !1 !== r && this.queue(r || "fx", []),
                    this.each(function() {
                        var t = !0
                            , e = null != r && r + "queueHooks"
                            , n = dt.timers
                            , i = dt._data(this);
                        if (e)
                            i[e] && i[e].stop && s(i[e]);
                        else
                            for (e in i)
                                i[e] && i[e].stop && Re.test(e) && s(i[e]);
                        for (e = n.length; e--; )
                            n[e].elem !== this || null != r && n[e].queue !== r || (n[e].anim.stop(o),
                                t = !1,
                                n.splice(e, 1));
                        !t && o || dt.dequeue(this, r)
                    })
            },
            finish: function(s) {
                return !1 !== s && (s = s || "fx"),
                    this.each(function() {
                        var t, e = dt._data(this), n = e[s + "queue"], i = e[s + "queueHooks"], r = dt.timers, o = n ? n.length : 0;
                        for (e.finish = !0,
                                 dt.queue(this, s, []),
                             i && i.cur && i.cur.finish && i.cur.finish.call(this),
                                 t = r.length; t--; )
                            r[t].elem === this && r[t].queue === s && (r[t].anim.stop(!0),
                                r.splice(t, 1));
                        for (t = 0; t < o; t++)
                            n[t] && n[t].finish && n[t].finish.call(this);
                        delete e.finish
                    })
            }
        }),
        dt.each({
            slideDown: We("show"),
            slideUp: We("hide"),
            slideToggle: We("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, i) {
            dt.fn[t] = function(t, e, n) {
                return this.animate(i, t, e, n)
            }
        }),
        dt.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? dt.extend({}, t) : {
                complete: n || !n && e || dt.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !dt.isFunction(e) && e
            };
            return i.duration = dt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in dt.fx.speeds ? dt.fx.speeds[i.duration] : dt.fx.speeds._default,
            null != i.queue && !0 !== i.queue || (i.queue = "fx"),
                i.old = i.complete,
                i.complete = function() {
                    dt.isFunction(i.old) && i.old.call(this),
                    i.queue && dt.dequeue(this, i.queue)
                }
                ,
                i
        }
        ,
        dt.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        },
        dt.timers = [],
        dt.fx = ze.prototype.init,
        dt.fx.tick = function() {
            var t, e = dt.timers, n = 0;
            for (Oe = dt.now(); n < e.length; n++)
                (t = e[n])() || e[n] !== t || e.splice(n--, 1);
            e.length || dt.fx.stop(),
                Oe = T
        }
        ,
        dt.fx.timer = function(t) {
            t() && dt.timers.push(t) && dt.fx.start()
        }
        ,
        dt.fx.interval = 13,
        dt.fx.start = function() {
            He = He || setInterval(dt.fx.tick, dt.fx.interval)
        }
        ,
        dt.fx.stop = function() {
            clearInterval(He),
                He = null
        }
        ,
        dt.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        dt.fx.step = {},
    dt.expr && dt.expr.filters && (dt.expr.filters.animated = function(e) {
            return dt.grep(dt.timers, function(t) {
                return e === t.elem
            }).length
        }
    ),
        dt.fn.offset = function(e) {
            if (arguments.length)
                return e === T ? this : this.each(function(t) {
                    dt.offset.setOffset(this, e, t)
                });
            var t, n = {
                top: 0,
                left: 0
            }, i = this[0], r = i && i.ownerDocument;
            return r ? (t = r.documentElement,
                dt.contains(t, i) ? (typeof i.getBoundingClientRect != g && (n = i.getBoundingClientRect()),
                    r = Ue(r),
                    {
                        top: n.top + (r.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                        left: n.left + (r.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                    }) : n) : void 0
        }
        ,
        dt.offset = {
            setOffset: function(t, e, n) {
                var i = dt.css(t, "position");
                "static" === i && (t.style.position = "relative");
                var r, o, s = dt(t), a = s.offset(), l = dt.css(t, "top"), c = dt.css(t, "left"), u = {}, c = ("absolute" === i || "fixed" === i) && -1 < dt.inArray("auto", [l, c]) ? (o = (r = s.position()).top,
                    r.left) : (o = parseFloat(l) || 0,
                parseFloat(c) || 0);
                null != (e = dt.isFunction(e) ? e.call(t, n, a) : e).top && (u.top = e.top - a.top + o),
                null != e.left && (u.left = e.left - a.left + c),
                    "using"in e ? e.using.call(t, u) : s.css(u)
            }
        },
        dt.fn.extend({
            position: function() {
                if (this[0]) {
                    var t, e, n = {
                        top: 0,
                        left: 0
                    }, i = this[0];
                    return "fixed" === dt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(),
                        e = this.offset(),
                        (n = !dt.nodeName(t[0], "html") ? t.offset() : n).top += dt.css(t[0], "borderTopWidth", !0),
                        n.left += dt.css(t[0], "borderLeftWidth", !0)),
                        {
                            top: e.top - n.top - dt.css(i, "marginTop", !0),
                            left: e.left - n.left - dt.css(i, "marginLeft", !0)
                        }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || m.documentElement; t && !dt.nodeName(t, "html") && "static" === dt.css(t, "position"); )
                        t = t.offsetParent;
                    return t || m.documentElement
                })
            }
        }),
        dt.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, r) {
            var o = /Y/.test(r);
            dt.fn[e] = function(t) {
                return dt.access(this, function(t, e, n) {
                    var i = Ue(t);
                    if (n === T)
                        return i ? r in i ? i[r] : i.document.documentElement[e] : t[e];
                    i ? i.scrollTo(o ? dt(i).scrollLeft() : n, o ? n : dt(i).scrollTop()) : t[e] = n
                }, e, t, arguments.length, null)
            }
        }),
        dt.each({
            Height: "height",
            Width: "width"
        }, function(o, s) {
            dt.each({
                padding: "inner" + o,
                content: s,
                "": "outer" + o
            }, function(i, t) {
                dt.fn[t] = function(t, e) {
                    var n = arguments.length && (i || "boolean" != typeof t)
                        , r = i || (!0 === t || !0 === e ? "margin" : "border");
                    return dt.access(this, function(t, e, n) {
                        var i;
                        return dt.isWindow(t) ? t.document.documentElement["client" + o] : 9 === t.nodeType ? (i = t.documentElement,
                            Math.max(t.body["scroll" + o], i["scroll" + o], t.body["offset" + o], i["offset" + o], i["client" + o])) : n === T ? dt.css(t, e, r) : dt.style(t, e, n, r)
                    }, s, n ? t : T, n, null)
                }
            })
        }),
        h.jQuery = h.$ = dt,
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return dt
    })
}(window),
"undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
!function() {
    "use strict";
    var t = jQuery.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || 3 < t[0])
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(),
    function($) {
        "use strict";
        $.fn.emulateTransitionEnd = function(t) {
            var e = !1
                , n = this;
            $(this).one("bsTransitionEnd", function() {
                e = !0
            });
            return setTimeout(function() {
                e || $(n).trigger($.support.transition.end)
            }, t),
                this
        }
            ,
            $(function() {
                $.support.transition = function() {
                    var t, e = document.createElement("bootstrap"), n = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    };
                    for (t in n)
                        if (void 0 !== e.style[t])
                            return {
                                end: n[t]
                            };
                    return !1
                }(),
                $.support.transition && ($.event.special.bsTransitionEnd = {
                    bindType: $.support.transition.end,
                    delegateType: $.support.transition.end,
                    handle: function(t) {
                        if ($(t.target).is(this))
                            return t.handleObj.handler.apply(this, arguments)
                    }
                })
            })
    }(jQuery),
    function($) {
        "use strict";
        function o(t) {
            $(t).on("click", e, this.close)
        }
        var e = '[data-dismiss="alert"]';
        o.VERSION = "3.3.7",
            o.TRANSITION_DURATION = 150,
            o.prototype.close = function(t) {
                var e = $(this)
                    , n = (n = e.attr("data-target")) || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")
                    , i = $("#" === n ? [] : n);
                function r() {
                    i.detach().trigger("closed.bs.alert").remove()
                }
                t && t.preventDefault(),
                    (i = !i.length ? e.closest(".alert") : i).trigger(t = $.Event("close.bs.alert")),
                t.isDefaultPrevented() || (i.removeClass("in"),
                    $.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", r).emulateTransitionEnd(o.TRANSITION_DURATION) : r())
            }
        ;
        var t = $.fn.alert;
        $.fn.alert = function(n) {
            return this.each(function() {
                var t = $(this)
                    , e = t.data("bs.alert");
                e || t.data("bs.alert", e = new o(this)),
                "string" == typeof n && e[n].call(t)
            })
        }
            ,
            $.fn.alert.Constructor = o,
            $.fn.alert.noConflict = function() {
                return $.fn.alert = t,
                    this
            }
            ,
            $(document).on("click.bs.alert.data-api", e, o.prototype.close)
    }(jQuery),
    function($) {
        "use strict";
        function i(t, e) {
            this.$element = $(t),
                this.options = $.extend({}, i.DEFAULTS, e),
                this.isLoading = !1
        }
        function n(n) {
            return this.each(function() {
                var t = $(this)
                    , e = t.data("bs.button");
                e || t.data("bs.button", e = new i(this,"object" == typeof n && n)),
                    "toggle" == n ? e.toggle() : n && e.setState(n)
            })
        }
        i.VERSION = "3.3.7",
            i.DEFAULTS = {
                loadingText: "loading..."
            },
            i.prototype.setState = function(t) {
                var e = "disabled"
                    , n = this.$element
                    , i = n.is("input") ? "val" : "html"
                    , r = n.data();
                t += "Text",
                null == r.resetText && n.data("resetText", n[i]()),
                    setTimeout($.proxy(function() {
                        n[i]((null == r[t] ? this.options : r)[t]),
                            "loadingText" == t ? (this.isLoading = !0,
                                n.addClass(e).attr(e, e).prop(e, !0)) : this.isLoading && (this.isLoading = !1,
                                n.removeClass(e).removeAttr(e).prop(e, !1))
                    }, this), 0)
            }
            ,
            i.prototype.toggle = function() {
                var t, e = !0, n = this.$element.closest('[data-toggle="buttons"]');
                n.length ? ("radio" == (t = this.$element.find("input")).prop("type") ? (t.prop("checked") && (e = !1),
                    n.find(".active").removeClass("active"),
                    this.$element.addClass("active")) : "checkbox" == t.prop("type") && (t.prop("checked") !== this.$element.hasClass("active") && (e = !1),
                    this.$element.toggleClass("active")),
                    t.prop("checked", this.$element.hasClass("active")),
                e && t.trigger("change")) : (this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
                    this.$element.toggleClass("active"))
            }
        ;
        var t = $.fn.button;
        $.fn.button = n,
            $.fn.button.Constructor = i,
            $.fn.button.noConflict = function() {
                return $.fn.button = t,
                    this
            }
            ,
            $(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
                var e = $(t.target).closest(".btn");
                n.call(e, "toggle"),
                $(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(),
                    (e.is("input,button") ? e : e.find("input:visible,button:visible").first()).trigger("focus"))
            }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
                $(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
            })
    }(jQuery),
    function($) {
        "use strict";
        function c(t, e) {
            this.$element = $(t),
                this.$indicators = this.$element.find(".carousel-indicators"),
                this.options = e,
                this.paused = null,
                this.sliding = null,
                this.interval = null,
                this.$active = null,
                this.$items = null,
            this.options.keyboard && this.$element.on("keydown.bs.carousel", $.proxy(this.keydown, this)),
            "hover" != this.options.pause || "ontouchstart"in document.documentElement || this.$element.on("mouseenter.bs.carousel", $.proxy(this.pause, this)).on("mouseleave.bs.carousel", $.proxy(this.cycle, this))
        }
        function r(r) {
            return this.each(function() {
                var t = $(this)
                    , e = t.data("bs.carousel")
                    , n = $.extend({}, c.DEFAULTS, t.data(), "object" == typeof r && r)
                    , i = "string" == typeof r ? r : n.slide;
                e || t.data("bs.carousel", e = new c(this,n)),
                    "number" == typeof r ? e.to(r) : i ? e[i]() : n.interval && e.pause().cycle()
            })
        }
        c.VERSION = "3.3.7",
            c.TRANSITION_DURATION = 600,
            c.DEFAULTS = {
                interval: 5e3,
                pause: "hover",
                wrap: !0,
                keyboard: !0
            },
            c.prototype.keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) {
                    switch (t.which) {
                        case 37:
                            this.prev();
                            break;
                        case 39:
                            this.next();
                            break;
                        default:
                            return
                    }
                    t.preventDefault()
                }
            }
            ,
            c.prototype.cycle = function(t) {
                return t || (this.paused = !1),
                this.interval && clearInterval(this.interval),
                this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval)),
                    this
            }
            ,
            c.prototype.getItemIndex = function(t) {
                return this.$items = t.parent().children(".item"),
                    this.$items.index(t || this.$active)
            }
            ,
            c.prototype.getItemForDirection = function(t, e) {
                var n = this.getItemIndex(e);
                if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap)
                    return e;
                t = (n + ("prev" == t ? -1 : 1)) % this.$items.length;
                return this.$items.eq(t)
            }
            ,
            c.prototype.to = function(t) {
                var e = this
                    , n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
                if (!(t > this.$items.length - 1 || t < 0))
                    return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                        e.to(t)
                    }) : n == t ? this.pause().cycle() : this.slide(n < t ? "next" : "prev", this.$items.eq(t))
            }
            ,
            c.prototype.pause = function(t) {
                return t || (this.paused = !0),
                this.$element.find(".next, .prev").length && $.support.transition && (this.$element.trigger($.support.transition.end),
                    this.cycle(!0)),
                    this.interval = clearInterval(this.interval),
                    this
            }
            ,
            c.prototype.next = function() {
                if (!this.sliding)
                    return this.slide("next")
            }
            ,
            c.prototype.prev = function() {
                if (!this.sliding)
                    return this.slide("prev")
            }
            ,
            c.prototype.slide = function(t, e) {
                var n = this.$element.find(".item.active")
                    , i = e || this.getItemForDirection(t, n)
                    , r = this.interval
                    , o = "next" == t ? "left" : "right"
                    , s = this;
                if (i.hasClass("active"))
                    return this.sliding = !1;
                var a = i[0]
                    , e = $.Event("slide.bs.carousel", {
                    relatedTarget: a,
                    direction: o
                });
                if (this.$element.trigger(e),
                    !e.isDefaultPrevented()) {
                    this.sliding = !0,
                    r && this.pause(),
                    this.$indicators.length && (this.$indicators.find(".active").removeClass("active"),
                    (e = $(this.$indicators.children()[this.getItemIndex(i)])) && e.addClass("active"));
                    var l = $.Event("slid.bs.carousel", {
                        relatedTarget: a,
                        direction: o
                    });
                    return $.support.transition && this.$element.hasClass("slide") ? (i.addClass(t),
                        i[0].offsetWidth,
                        n.addClass(o),
                        i.addClass(o),
                        n.one("bsTransitionEnd", function() {
                            i.removeClass([t, o].join(" ")).addClass("active"),
                                n.removeClass(["active", o].join(" ")),
                                s.sliding = !1,
                                setTimeout(function() {
                                    s.$element.trigger(l)
                                }, 0)
                        }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (n.removeClass("active"),
                        i.addClass("active"),
                        this.sliding = !1,
                        this.$element.trigger(l)),
                    r && this.cycle(),
                        this
                }
            }
        ;
        var t = $.fn.carousel;
        $.fn.carousel = r,
            $.fn.carousel.Constructor = c,
            $.fn.carousel.noConflict = function() {
                return $.fn.carousel = t,
                    this
            }
        ;
        function e(t) {
            var e, n = $(this), i = $(n.attr("data-target") || (e = n.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""));
            i.hasClass("carousel") && (e = $.extend({}, i.data(), n.data()),
            (n = n.attr("data-slide-to")) && (e.interval = !1),
                r.call(i, e),
            n && i.data("bs.carousel").to(n),
                t.preventDefault())
        }
        $(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e),
            $(window).on("load", function() {
                $('[data-ride="carousel"]').each(function() {
                    var t = $(this);
                    r.call(t, t.data())
                })
            })
    }(jQuery),
    function($) {
        "use strict";
        function r(t, e) {
            this.$element = $(t),
                this.options = $.extend({}, r.DEFAULTS, e),
                this.$trigger = $('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'),
                this.transitioning = null,
                this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
            this.options.toggle && this.toggle()
        }
        function n(t) {
            var e = t.attr("data-target") || (e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "");
            return $(e)
        }
        function o(i) {
            return this.each(function() {
                var t = $(this)
                    , e = t.data("bs.collapse")
                    , n = $.extend({}, r.DEFAULTS, t.data(), "object" == typeof i && i);
                !e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                e || t.data("bs.collapse", e = new r(this,n)),
                "string" == typeof i && e[i]()
            })
        }
        r.VERSION = "3.3.7",
            r.TRANSITION_DURATION = 350,
            r.DEFAULTS = {
                toggle: !0
            },
            r.prototype.dimension = function() {
                return this.$element.hasClass("width") ? "width" : "height"
            }
            ,
            r.prototype.show = function() {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var t = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                    if (!(t && t.length && (i = t.data("bs.collapse")) && i.transitioning)) {
                        var e = $.Event("show.bs.collapse");
                        if (this.$element.trigger(e),
                            !e.isDefaultPrevented()) {
                            t && t.length && (o.call(t, "hide"),
                            i || t.data("bs.collapse", null));
                            var n = this.dimension();
                            this.$element.removeClass("collapse").addClass("collapsing")[n](0).attr("aria-expanded", !0),
                                this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                                this.transitioning = 1;
                            var i = function() {
                                this.$element.removeClass("collapsing").addClass("collapse in")[n](""),
                                    this.transitioning = 0,
                                    this.$element.trigger("shown.bs.collapse")
                            };
                            if (!$.support.transition)
                                return i.call(this);
                            t = $.camelCase(["scroll", n].join("-"));
                            this.$element.one("bsTransitionEnd", $.proxy(i, this)).emulateTransitionEnd(r.TRANSITION_DURATION)[n](this.$element[0][t])
                        }
                    }
                }
            }
            ,
            r.prototype.hide = function() {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var t = $.Event("hide.bs.collapse");
                    if (this.$element.trigger(t),
                        !t.isDefaultPrevented()) {
                        var e = this.dimension();
                        this.$element[e](this.$element[e]())[0].offsetHeight,
                            this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                            this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                            this.transitioning = 1;
                        t = function() {
                            this.transitioning = 0,
                                this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                        }
                        ;
                        if (!$.support.transition)
                            return t.call(this);
                        this.$element[e](0).one("bsTransitionEnd", $.proxy(t, this)).emulateTransitionEnd(r.TRANSITION_DURATION)
                    }
                }
            }
            ,
            r.prototype.toggle = function() {
                this[this.$element.hasClass("in") ? "hide" : "show"]()
            }
            ,
            r.prototype.getParent = function() {
                return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function(t, e) {
                    e = $(e);
                    this.addAriaAndCollapsedClass(n(e), e)
                }, this)).end()
            }
            ,
            r.prototype.addAriaAndCollapsedClass = function(t, e) {
                var n = t.hasClass("in");
                t.attr("aria-expanded", n),
                    e.toggleClass("collapsed", !n).attr("aria-expanded", n)
            }
        ;
        var t = $.fn.collapse;
        $.fn.collapse = o,
            $.fn.collapse.Constructor = r,
            $.fn.collapse.noConflict = function() {
                return $.fn.collapse = t,
                    this
            }
            ,
            $(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
                var e = $(this);
                e.attr("data-target") || t.preventDefault();
                t = n(e),
                    e = t.data("bs.collapse") ? "toggle" : e.data();
                o.call(t, e)
            })
    }(jQuery),
    function($) {
        "use strict";
        function i(t) {
            $(t).on("click.bs.dropdown", this.toggle)
        }
        var r = '[data-toggle="dropdown"]';
        function o(t) {
            var e = t.attr("data-target")
                , e = (e = e || (e = t.attr("href")) && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, "")) && $(e);
            return e && e.length ? e : t.parent()
        }
        function s(i) {
            i && 3 === i.which || ($(".dropdown-backdrop").remove(),
                $(r).each(function() {
                    var t = $(this)
                        , e = o(t)
                        , n = {
                        relatedTarget: this
                    };
                    e.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && $.contains(e[0], i.target) || (e.trigger(i = $.Event("hide.bs.dropdown", n)),
                    i.isDefaultPrevented() || (t.attr("aria-expanded", "false"),
                        e.removeClass("open").trigger($.Event("hidden.bs.dropdown", n)))))
                }))
        }
        i.VERSION = "3.3.7",
            i.prototype.toggle = function(t) {
                var e = $(this);
                if (!e.is(".disabled, :disabled")) {
                    var n = o(e)
                        , i = n.hasClass("open");
                    if (s(),
                        !i) {
                        "ontouchstart"in document.documentElement && !n.closest(".navbar-nav").length && $(document.createElement("div")).addClass("dropdown-backdrop").insertAfter($(this)).on("click", s);
                        i = {
                            relatedTarget: this
                        };
                        if (n.trigger(t = $.Event("show.bs.dropdown", i)),
                            t.isDefaultPrevented())
                            return;
                        e.trigger("focus").attr("aria-expanded", "true"),
                            n.toggleClass("open").trigger($.Event("shown.bs.dropdown", i))
                    }
                    return !1
                }
            }
            ,
            i.prototype.keydown = function(t) {
                if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
                    var e = $(this);
                    if (t.preventDefault(),
                        t.stopPropagation(),
                        !e.is(".disabled, :disabled")) {
                        var n = o(e)
                            , i = n.hasClass("open");
                        if (!i && 27 != t.which || i && 27 == t.which)
                            return 27 == t.which && n.find(r).trigger("focus"),
                                e.trigger("click");
                        e = n.find(".dropdown-menu li:not(.disabled):visible a");
                        e.length && (n = e.index(t.target),
                        38 == t.which && 0 < n && n--,
                        40 == t.which && n < e.length - 1 && n++,
                            e.eq(n = !~n ? 0 : n).trigger("focus"))
                    }
                }
            }
        ;
        var t = $.fn.dropdown;
        $.fn.dropdown = function(n) {
            return this.each(function() {
                var t = $(this)
                    , e = t.data("bs.dropdown");
                e || t.data("bs.dropdown", e = new i(this)),
                "string" == typeof n && e[n].call(t)
            })
        }
            ,
            $.fn.dropdown.Constructor = i,
            $.fn.dropdown.noConflict = function() {
                return $.fn.dropdown = t,
                    this
            }
            ,
            $(document).on("click.bs.dropdown.data-api", s).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
                t.stopPropagation()
            }).on("click.bs.dropdown.data-api", r, i.prototype.toggle).on("keydown.bs.dropdown.data-api", r, i.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", i.prototype.keydown)
    }(jQuery),
    function($) {
        "use strict";
        function o(t, e) {
            this.options = e,
                this.$body = $(document.body),
                this.$element = $(t),
                this.$dialog = this.$element.find(".modal-dialog"),
                this.$backdrop = null,
                this.isShown = null,
                this.originalBodyPad = null,
                this.scrollbarWidth = 0,
                this.ignoreBackdropClick = !1,
            this.options.remote && this.$element.find(".modal-content").load(this.options.remote, $.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        }
        function r(i, r) {
            return this.each(function() {
                var t = $(this)
                    , e = t.data("bs.modal")
                    , n = $.extend({}, o.DEFAULTS, t.data(), "object" == typeof i && i);
                e || t.data("bs.modal", e = new o(this,n)),
                    "string" == typeof i ? e[i](r) : n.show && e.show(r)
            })
        }
        o.VERSION = "3.3.7",
            o.TRANSITION_DURATION = 300,
            o.BACKDROP_TRANSITION_DURATION = 150,
            o.DEFAULTS = {
                backdrop: !0,
                keyboard: !0,
                show: !0
            },
            o.prototype.toggle = function(t) {
                return this.isShown ? this.hide() : this.show(t)
            }
            ,
            o.prototype.show = function(n) {
                var i = this
                    , t = $.Event("show.bs.modal", {
                    relatedTarget: n
                });
                this.$element.trigger(t),
                this.isShown || t.isDefaultPrevented() || (this.isShown = !0,
                    this.checkScrollbar(),
                    this.setScrollbar(),
                    this.$body.addClass("modal-open"),
                    this.escape(),
                    this.resize(),
                    this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', $.proxy(this.hide, this)),
                    this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                        i.$element.one("mouseup.dismiss.bs.modal", function(t) {
                            $(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
                        })
                    }),
                    this.backdrop(function() {
                        var t = $.support.transition && i.$element.hasClass("fade");
                        i.$element.parent().length || i.$element.appendTo(i.$body),
                            i.$element.show().scrollTop(0),
                            i.adjustDialog(),
                        t && i.$element[0].offsetWidth,
                            i.$element.addClass("in"),
                            i.enforceFocus();
                        var e = $.Event("shown.bs.modal", {
                            relatedTarget: n
                        });
                        t ? i.$dialog.one("bsTransitionEnd", function() {
                            i.$element.trigger("focus").trigger(e)
                        }).emulateTransitionEnd(o.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(e)
                    }))
            }
            ,
            o.prototype.hide = function(t) {
                t && t.preventDefault(),
                    t = $.Event("hide.bs.modal"),
                    this.$element.trigger(t),
                this.isShown && !t.isDefaultPrevented() && (this.isShown = !1,
                    this.escape(),
                    this.resize(),
                    $(document).off("focusin.bs.modal"),
                    this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
                    this.$dialog.off("mousedown.dismiss.bs.modal"),
                    $.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", $.proxy(this.hideModal, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : this.hideModal())
            }
            ,
            o.prototype.enforceFocus = function() {
                $(document).off("focusin.bs.modal").on("focusin.bs.modal", $.proxy(function(t) {
                    document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
                }, this))
            }
            ,
            o.prototype.escape = function() {
                this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", $.proxy(function(t) {
                    27 == t.which && this.hide()
                }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
            }
            ,
            o.prototype.resize = function() {
                this.isShown ? $(window).on("resize.bs.modal", $.proxy(this.handleUpdate, this)) : $(window).off("resize.bs.modal")
            }
            ,
            o.prototype.hideModal = function() {
                var t = this;
                this.$element.hide(),
                    this.backdrop(function() {
                        t.$body.removeClass("modal-open"),
                            t.resetAdjustments(),
                            t.resetScrollbar(),
                            t.$element.trigger("hidden.bs.modal")
                    })
            }
            ,
            o.prototype.removeBackdrop = function() {
                this.$backdrop && this.$backdrop.remove(),
                    this.$backdrop = null
            }
            ,
            o.prototype.backdrop = function(t) {
                var e, n = this, i = this.$element.hasClass("fade") ? "fade" : "";
                this.isShown && this.options.backdrop ? (e = $.support.transition && i,
                    this.$backdrop = $(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body),
                    this.$element.on("click.dismiss.bs.modal", $.proxy(function(t) {
                        this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                    }, this)),
                e && this.$backdrop[0].offsetWidth,
                    this.$backdrop.addClass("in"),
                t && (e ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(o.BACKDROP_TRANSITION_DURATION) : t())) : !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"),
                    e = function() {
                        n.removeBackdrop(),
                        t && t()
                    }
                    ,
                    $.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(o.BACKDROP_TRANSITION_DURATION) : e()) : t && t()
            }
            ,
            o.prototype.handleUpdate = function() {
                this.adjustDialog()
            }
            ,
            o.prototype.adjustDialog = function() {
                var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                this.$element.css({
                    paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                    paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
                })
            }
            ,
            o.prototype.resetAdjustments = function() {
                this.$element.css({
                    paddingLeft: "",
                    paddingRight: ""
                })
            }
            ,
            o.prototype.checkScrollbar = function() {
                var t, e = window.innerWidth;
                e || (e = (t = document.documentElement.getBoundingClientRect()).right - Math.abs(t.left)),
                    this.bodyIsOverflowing = document.body.clientWidth < e,
                    this.scrollbarWidth = this.measureScrollbar()
            }
            ,
            o.prototype.setScrollbar = function() {
                var t = parseInt(this.$body.css("padding-right") || 0, 10);
                this.originalBodyPad = document.body.style.paddingRight || "",
                this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
            }
            ,
            o.prototype.resetScrollbar = function() {
                this.$body.css("padding-right", this.originalBodyPad)
            }
            ,
            o.prototype.measureScrollbar = function() {
                var t = document.createElement("div");
                t.className = "modal-scrollbar-measure",
                    this.$body.append(t);
                var e = t.offsetWidth - t.clientWidth;
                return this.$body[0].removeChild(t),
                    e
            }
        ;
        var t = $.fn.modal;
        $.fn.modal = r,
            $.fn.modal.Constructor = o,
            $.fn.modal.noConflict = function() {
                return $.fn.modal = t,
                    this
            }
            ,
            $(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
                var e = $(this)
                    , n = e.attr("href")
                    , i = $(e.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, ""))
                    , n = i.data("bs.modal") ? "toggle" : $.extend({
                    remote: !/#/.test(n) && n
                }, i.data(), e.data());
                e.is("a") && t.preventDefault(),
                    i.one("show.bs.modal", function(t) {
                        t.isDefaultPrevented() || i.one("hidden.bs.modal", function() {
                            e.is(":visible") && e.trigger("focus")
                        })
                    }),
                    r.call(i, n, this)
            })
    }(jQuery),
    function($) {
        "use strict";
        function l(t, e) {
            this.type = null,
                this.options = null,
                this.enabled = null,
                this.timeout = null,
                this.hoverState = null,
                this.$element = null,
                this.inState = null,
                this.init("tooltip", t, e)
        }
        l.VERSION = "3.3.7",
            l.TRANSITION_DURATION = 150,
            l.DEFAULTS = {
                animation: !0,
                placement: "top",
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                container: !1,
                viewport: {
                    selector: "body",
                    padding: 0
                }
            },
            l.prototype.init = function(t, e, n) {
                if (this.enabled = !0,
                    this.type = t,
                    this.$element = $(e),
                    this.options = this.getOptions(n),
                    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
                    this.inState = {
                        click: !1,
                        hover: !1,
                        focus: !1
                    },
                this.$element[0]instanceof document.constructor && !this.options.selector)
                    throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                for (var i = this.options.trigger.split(" "), r = i.length; r--; ) {
                    var o, s = i[r];
                    "click" == s ? this.$element.on("click." + this.type, this.options.selector, $.proxy(this.toggle, this)) : "manual" != s && (o = "hover" == s ? "mouseleave" : "focusout",
                        this.$element.on(("hover" == s ? "mouseenter" : "focusin") + "." + this.type, this.options.selector, $.proxy(this.enter, this)),
                        this.$element.on(o + "." + this.type, this.options.selector, $.proxy(this.leave, this)))
                }
                this.options.selector ? this._options = $.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            }
            ,
            l.prototype.getDefaults = function() {
                return l.DEFAULTS
            }
            ,
            l.prototype.getOptions = function(t) {
                return (t = $.extend({}, this.getDefaults(), this.$element.data(), t)).delay && "number" == typeof t.delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }),
                    t
            }
            ,
            l.prototype.getDelegateOptions = function() {
                var n = {}
                    , i = this.getDefaults();
                return this._options && $.each(this._options, function(t, e) {
                    i[t] != e && (n[t] = e)
                }),
                    n
            }
            ,
            l.prototype.enter = function(t) {
                var e = t instanceof this.constructor ? t : $(t.currentTarget).data("bs." + this.type);
                if (e || (e = new this.constructor(t.currentTarget,this.getDelegateOptions()),
                    $(t.currentTarget).data("bs." + this.type, e)),
                t instanceof $.Event && (e.inState["focusin" == t.type ? "focus" : "hover"] = !0),
                e.tip().hasClass("in") || "in" == e.hoverState)
                    e.hoverState = "in";
                else {
                    if (clearTimeout(e.timeout),
                        e.hoverState = "in",
                    !e.options.delay || !e.options.delay.show)
                        return e.show();
                    e.timeout = setTimeout(function() {
                        "in" == e.hoverState && e.show()
                    }, e.options.delay.show)
                }
            }
            ,
            l.prototype.isInStateTrue = function() {
                for (var t in this.inState)
                    if (this.inState[t])
                        return !0;
                return !1
            }
            ,
            l.prototype.leave = function(t) {
                var e = t instanceof this.constructor ? t : $(t.currentTarget).data("bs." + this.type);
                if (e || (e = new this.constructor(t.currentTarget,this.getDelegateOptions()),
                    $(t.currentTarget).data("bs." + this.type, e)),
                t instanceof $.Event && (e.inState["focusout" == t.type ? "focus" : "hover"] = !1),
                    !e.isInStateTrue()) {
                    if (clearTimeout(e.timeout),
                        e.hoverState = "out",
                    !e.options.delay || !e.options.delay.hide)
                        return e.hide();
                    e.timeout = setTimeout(function() {
                        "out" == e.hoverState && e.hide()
                    }, e.options.delay.hide)
                }
            }
            ,
            l.prototype.show = function() {
                var e, t, n, i, r, o, s, a = $.Event("show.bs." + this.type);
                this.hasContent() && this.enabled && (this.$element.trigger(a),
                    n = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]),
                !a.isDefaultPrevented() && n && (t = (e = this).tip(),
                    o = this.getUID(this.type),
                    this.setContent(),
                    t.attr("id", o),
                    this.$element.attr("aria-describedby", o),
                this.options.animation && t.addClass("fade"),
                    s = "function" == typeof this.options.placement ? this.options.placement.call(this, t[0], this.$element[0]) : this.options.placement,
                (r = (i = /\s?auto?\s?/i).test(s)) && (s = s.replace(i, "") || "top"),
                    t.detach().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }).addClass(s).data("bs." + this.type, this),
                    this.options.container ? t.appendTo(this.options.container) : t.insertAfter(this.$element),
                    this.$element.trigger("inserted.bs." + this.type),
                    a = this.getPosition(),
                    n = t[0].offsetWidth,
                    o = t[0].offsetHeight,
                r && (i = s,
                    r = this.getPosition(this.$viewport),
                    s = "bottom" == s && a.bottom + o > r.bottom ? "top" : "top" == s && a.top - o < r.top ? "bottom" : "right" == s && a.right + n > r.width ? "left" : "left" == s && a.left - n < r.left ? "right" : s,
                    t.removeClass(i).addClass(s)),
                    o = this.getCalculatedOffset(s, a, n, o),
                    this.applyPlacement(o, s),
                    s = function() {
                        var t = e.hoverState;
                        e.$element.trigger("shown.bs." + e.type),
                            e.hoverState = null,
                        "out" == t && e.leave(e)
                    }
                    ,
                    $.support.transition && this.$tip.hasClass("fade") ? t.one("bsTransitionEnd", s).emulateTransitionEnd(l.TRANSITION_DURATION) : s()))
            }
            ,
            l.prototype.applyPlacement = function(t, e) {
                var n = this.tip()
                    , i = n[0].offsetWidth
                    , r = n[0].offsetHeight
                    , o = parseInt(n.css("margin-top"), 10)
                    , s = parseInt(n.css("margin-left"), 10);
                isNaN(o) && (o = 0),
                isNaN(s) && (s = 0),
                    t.top += o,
                    t.left += s,
                    $.offset.setOffset(n[0], $.extend({
                        using: function(t) {
                            n.css({
                                top: Math.round(t.top),
                                left: Math.round(t.left)
                            })
                        }
                    }, t), 0),
                    n.addClass("in");
                var a = n[0].offsetWidth
                    , o = n[0].offsetHeight;
                "top" == e && o != r && (t.top = t.top + r - o);
                s = this.getViewportAdjustedDelta(e, t, a, o);
                s.left ? t.left += s.left : t.top += s.top;
                e = /top|bottom/.test(e),
                    r = e ? 2 * s.left - i + a : 2 * s.top - r + o,
                    o = e ? "offsetWidth" : "offsetHeight";
                n.offset(t),
                    this.replaceArrow(r, n[0][o], e)
            }
            ,
            l.prototype.replaceArrow = function(t, e, n) {
                this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
            }
            ,
            l.prototype.setContent = function() {
                var t = this.tip()
                    , e = this.getTitle();
                t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
                    t.removeClass("fade in top bottom left right")
            }
            ,
            l.prototype.hide = function(t) {
                var e = this
                    , n = $(this.$tip)
                    , i = $.Event("hide.bs." + this.type);
                function r() {
                    "in" != e.hoverState && n.detach(),
                    e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type),
                    t && t()
                }
                if (this.$element.trigger(i),
                    !i.isDefaultPrevented())
                    return n.removeClass("in"),
                        $.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", r).emulateTransitionEnd(l.TRANSITION_DURATION) : r(),
                        this.hoverState = null,
                        this
            }
            ,
            l.prototype.fixTitle = function() {
                var t = this.$element;
                !t.attr("title") && "string" == typeof t.attr("data-original-title") || t.attr("data-original-title", t.attr("title") || "").attr("title", "")
            }
            ,
            l.prototype.hasContent = function() {
                return this.getTitle()
            }
            ,
            l.prototype.getPosition = function(t) {
                var e = (t = t || this.$element)[0]
                    , n = "BODY" == e.tagName
                    , i = e.getBoundingClientRect();
                null == i.width && (i = $.extend({}, i, {
                    width: i.right - i.left,
                    height: i.bottom - i.top
                }));
                e = window.SVGElement && e instanceof window.SVGElement,
                    e = n ? {
                        top: 0,
                        left: 0
                    } : e ? null : t.offset(),
                    t = {
                        scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
                    },
                    n = n ? {
                        width: $(window).width(),
                        height: $(window).height()
                    } : null;
                return $.extend({}, i, t, n, e)
            }
            ,
            l.prototype.getCalculatedOffset = function(t, e, n, i) {
                return "bottom" == t ? {
                    top: e.top + e.height,
                    left: e.left + e.width / 2 - n / 2
                } : "top" == t ? {
                    top: e.top - i,
                    left: e.left + e.width / 2 - n / 2
                } : "left" == t ? {
                    top: e.top + e.height / 2 - i / 2,
                    left: e.left - n
                } : {
                    top: e.top + e.height / 2 - i / 2,
                    left: e.left + e.width
                }
            }
            ,
            l.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
                var r = {
                    top: 0,
                    left: 0
                };
                if (!this.$viewport)
                    return r;
                var o, s = this.options.viewport && this.options.viewport.padding || 0, a = this.getPosition(this.$viewport);
                return /right|left/.test(t) ? (t = e.top - s - a.scroll,
                    o = e.top + s - a.scroll + i,
                    t < a.top ? r.top = a.top - t : o > a.top + a.height && (r.top = a.top + a.height - o)) : (o = e.left - s,
                    n = e.left + s + n,
                    o < a.left ? r.left = a.left - o : n > a.right && (r.left = a.left + a.width - n)),
                    r
            }
            ,
            l.prototype.getTitle = function() {
                var t = this.$element
                    , e = this.options;
                return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
            }
            ,
            l.prototype.getUID = function(t) {
                for (; t += ~~(1e6 * Math.random()),
                           document.getElementById(t); )
                    ;
                return t
            }
            ,
            l.prototype.tip = function() {
                if (!this.$tip && (this.$tip = $(this.options.template),
                1 != this.$tip.length))
                    throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                return this.$tip
            }
            ,
            l.prototype.arrow = function() {
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
            }
            ,
            l.prototype.enable = function() {
                this.enabled = !0
            }
            ,
            l.prototype.disable = function() {
                this.enabled = !1
            }
            ,
            l.prototype.toggleEnabled = function() {
                this.enabled = !this.enabled
            }
            ,
            l.prototype.toggle = function(t) {
                var e = this;
                t && ((e = $(t.currentTarget).data("bs." + this.type)) || (e = new this.constructor(t.currentTarget,this.getDelegateOptions()),
                    $(t.currentTarget).data("bs." + this.type, e))),
                    t ? (e.inState.click = !e.inState.click,
                        e.isInStateTrue() ? e.enter(e) : e.leave(e)) : e.tip().hasClass("in") ? e.leave(e) : e.enter(e)
            }
            ,
            l.prototype.destroy = function() {
                var t = this;
                clearTimeout(this.timeout),
                    this.hide(function() {
                        t.$element.off("." + t.type).removeData("bs." + t.type),
                        t.$tip && t.$tip.detach(),
                            t.$tip = null,
                            t.$arrow = null,
                            t.$viewport = null,
                            t.$element = null
                    })
            }
        ;
        var t = $.fn.tooltip;
        $.fn.tooltip = function(i) {
            return this.each(function() {
                var t = $(this)
                    , e = t.data("bs.tooltip")
                    , n = "object" == typeof i && i;
                !e && /destroy|hide/.test(i) || (e || t.data("bs.tooltip", e = new l(this,n)),
                "string" == typeof i && e[i]())
            })
        }
            ,
            $.fn.tooltip.Constructor = l,
            $.fn.tooltip.noConflict = function() {
                return $.fn.tooltip = t,
                    this
            }
    }(jQuery),
    function($) {
        "use strict";
        function r(t, e) {
            this.init("popover", t, e)
        }
        if (!$.fn.tooltip)
            throw new Error("Popover requires tooltip.js");
        r.VERSION = "3.3.7",
            r.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }),
            ((r.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)).constructor = r).prototype.getDefaults = function() {
                return r.DEFAULTS
            }
            ,
            r.prototype.setContent = function() {
                var t = this.tip()
                    , e = this.getTitle()
                    , n = this.getContent();
                t.find(".popover-title")[this.options.html ? "html" : "text"](e),
                    t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n),
                    t.removeClass("fade top bottom left right in"),
                t.find(".popover-title").html() || t.find(".popover-title").hide()
            }
            ,
            r.prototype.hasContent = function() {
                return this.getTitle() || this.getContent()
            }
            ,
            r.prototype.getContent = function() {
                var t = this.$element
                    , e = this.options;
                return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
            }
            ,
            r.prototype.arrow = function() {
                return this.$arrow = this.$arrow || this.tip().find(".arrow")
            }
        ;
        var t = $.fn.popover;
        $.fn.popover = function(i) {
            return this.each(function() {
                var t = $(this)
                    , e = t.data("bs.popover")
                    , n = "object" == typeof i && i;
                !e && /destroy|hide/.test(i) || (e || t.data("bs.popover", e = new r(this,n)),
                "string" == typeof i && e[i]())
            })
        }
            ,
            $.fn.popover.Constructor = r,
            $.fn.popover.noConflict = function() {
                return $.fn.popover = t,
                    this
            }
    }(jQuery),
    function($) {
        "use strict";
        function i(t, e) {
            this.$body = $(document.body),
                this.$scrollElement = $(t).is(document.body) ? $(window) : $(t),
                this.options = $.extend({}, i.DEFAULTS, e),
                this.selector = (this.options.target || "") + " .nav li > a",
                this.offsets = [],
                this.targets = [],
                this.activeTarget = null,
                this.scrollHeight = 0,
                this.$scrollElement.on("scroll.bs.scrollspy", $.proxy(this.process, this)),
                this.refresh(),
                this.process()
        }
        function e(n) {
            return this.each(function() {
                var t = $(this)
                    , e = t.data("bs.scrollspy");
                e || t.data("bs.scrollspy", e = new i(this,"object" == typeof n && n)),
                "string" == typeof n && e[n]()
            })
        }
        i.VERSION = "3.3.7",
            i.DEFAULTS = {
                offset: 10
            },
            i.prototype.getScrollHeight = function() {
                return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
            }
            ,
            i.prototype.refresh = function() {
                var t = this
                    , n = "offset"
                    , i = 0;
                this.offsets = [],
                    this.targets = [],
                    this.scrollHeight = this.getScrollHeight(),
                $.isWindow(this.$scrollElement[0]) || (n = "position",
                    i = this.$scrollElement.scrollTop()),
                    this.$body.find(this.selector).map(function() {
                        var t = $(this)
                            , e = t.data("target") || t.attr("href")
                            , t = /^#./.test(e) && $(e);
                        return t && t.length && t.is(":visible") ? [[t[n]().top + i, e]] : null
                    }).sort(function(t, e) {
                        return t[0] - e[0]
                    }).each(function() {
                        t.offsets.push(this[0]),
                            t.targets.push(this[1])
                    })
            }
            ,
            i.prototype.process = function() {
                var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), i = this.options.offset + n - this.$scrollElement.height(), r = this.offsets, o = this.targets, s = this.activeTarget;
                if (this.scrollHeight != n && this.refresh(),
                i <= e)
                    return s != (t = o[o.length - 1]) && this.activate(t);
                if (s && e < r[0])
                    return this.activeTarget = null,
                        this.clear();
                for (t = r.length; t--; )
                    s != o[t] && e >= r[t] && (void 0 === r[t + 1] || e < r[t + 1]) && this.activate(o[t])
            }
            ,
            i.prototype.activate = function(t) {
                this.activeTarget = t,
                    this.clear();
                t = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
                    t = $(t).parents("li").addClass("active");
                (t = t.parent(".dropdown-menu").length ? t.closest("li.dropdown").addClass("active") : t).trigger("activate.bs.scrollspy")
            }
            ,
            i.prototype.clear = function() {
                $(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
            }
        ;
        var t = $.fn.scrollspy;
        $.fn.scrollspy = e,
            $.fn.scrollspy.Constructor = i,
            $.fn.scrollspy.noConflict = function() {
                return $.fn.scrollspy = t,
                    this
            }
            ,
            $(window).on("load.bs.scrollspy.data-api", function() {
                $('[data-spy="scroll"]').each(function() {
                    var t = $(this);
                    e.call(t, t.data())
                })
            })
    }(jQuery),
    function($) {
        "use strict";
        function s(t) {
            this.element = $(t)
        }
        function e(n) {
            return this.each(function() {
                var t = $(this)
                    , e = t.data("bs.tab");
                e || t.data("bs.tab", e = new s(this)),
                "string" == typeof n && e[n]()
            })
        }
        s.VERSION = "3.3.7",
            s.TRANSITION_DURATION = 150,
            s.prototype.show = function() {
                var t, e, n, i = this.element, r = i.closest("ul:not(.dropdown-menu)"), o = (o = i.data("target")) || (o = i.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, "");
                i.parent("li").hasClass("active") || (t = r.find(".active:last a"),
                    e = $.Event("hide.bs.tab", {
                        relatedTarget: i[0]
                    }),
                    n = $.Event("show.bs.tab", {
                        relatedTarget: t[0]
                    }),
                    t.trigger(e),
                    i.trigger(n),
                n.isDefaultPrevented() || e.isDefaultPrevented() || (o = $(o),
                    this.activate(i.closest("li"), r),
                    this.activate(o, o.parent(), function() {
                        t.trigger({
                            type: "hidden.bs.tab",
                            relatedTarget: i[0]
                        }),
                            i.trigger({
                                type: "shown.bs.tab",
                                relatedTarget: t[0]
                            })
                    })))
            }
            ,
            s.prototype.activate = function(t, e, n) {
                var i = e.find("> .active")
                    , r = n && $.support.transition && (i.length && i.hasClass("fade") || !!e.find("> .fade").length);
                function o() {
                    i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
                        t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
                        r ? (t[0].offsetWidth,
                            t.addClass("in")) : t.removeClass("fade"),
                    t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
                    n && n()
                }
                i.length && r ? i.one("bsTransitionEnd", o).emulateTransitionEnd(s.TRANSITION_DURATION) : o(),
                    i.removeClass("in")
            }
        ;
        var t = $.fn.tab;
        $.fn.tab = e,
            $.fn.tab.Constructor = s,
            $.fn.tab.noConflict = function() {
                return $.fn.tab = t,
                    this
            }
        ;
        function n(t) {
            t.preventDefault(),
                e.call($(this), "show")
        }
        $(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
    }(jQuery),
    function($) {
        "use strict";
        function s(t, e) {
            this.options = $.extend({}, s.DEFAULTS, e),
                this.$target = $(this.options.target).on("scroll.bs.affix.data-api", $.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", $.proxy(this.checkPositionWithEventLoop, this)),
                this.$element = $(t),
                this.affixed = null,
                this.unpin = null,
                this.pinnedOffset = null,
                this.checkPosition()
        }
        function n(n) {
            return this.each(function() {
                var t = $(this)
                    , e = t.data("bs.affix");
                e || t.data("bs.affix", e = new s(this,"object" == typeof n && n)),
                "string" == typeof n && e[n]()
            })
        }
        s.VERSION = "3.3.7",
            s.RESET = "affix affix-top affix-bottom",
            s.DEFAULTS = {
                offset: 0,
                target: window
            },
            s.prototype.getState = function(t, e, n, i) {
                var r = this.$target.scrollTop()
                    , o = this.$element.offset()
                    , s = this.$target.height();
                if (null != n && "top" == this.affixed)
                    return r < n && "top";
                if ("bottom" == this.affixed)
                    return null != n ? !(r + this.unpin <= o.top) && "bottom" : !(r + s <= t - i) && "bottom";
                var a = null == this.affixed
                    , o = a ? r : o.top;
                return null != n && r <= n ? "top" : null != i && t - i <= o + (a ? s : e) && "bottom"
            }
            ,
            s.prototype.getPinnedOffset = function() {
                if (this.pinnedOffset)
                    return this.pinnedOffset;
                this.$element.removeClass(s.RESET).addClass("affix");
                var t = this.$target.scrollTop()
                    , e = this.$element.offset();
                return this.pinnedOffset = e.top - t
            }
            ,
            s.prototype.checkPositionWithEventLoop = function() {
                setTimeout($.proxy(this.checkPosition, this), 1)
            }
            ,
            s.prototype.checkPosition = function() {
                if (this.$element.is(":visible")) {
                    var t = this.$element.height()
                        , e = this.options.offset
                        , n = e.top
                        , i = e.bottom
                        , r = Math.max($(document).height(), $(document.body).height());
                    "object" != typeof e && (i = n = e),
                    "function" == typeof n && (n = e.top(this.$element)),
                    "function" == typeof i && (i = e.bottom(this.$element));
                    var o = this.getState(r, t, n, i);
                    if (this.affixed != o) {
                        null != this.unpin && this.$element.css("top", "");
                        e = "affix" + (o ? "-" + o : ""),
                            n = $.Event(e + ".bs.affix");
                        if (this.$element.trigger(n),
                            n.isDefaultPrevented())
                            return;
                        this.affixed = o,
                            this.unpin = "bottom" == o ? this.getPinnedOffset() : null,
                            this.$element.removeClass(s.RESET).addClass(e).trigger(e.replace("affix", "affixed") + ".bs.affix")
                    }
                    "bottom" == o && this.$element.offset({
                        top: r - t - i
                    })
                }
            }
        ;
        var t = $.fn.affix;
        $.fn.affix = n,
            $.fn.affix.Constructor = s,
            $.fn.affix.noConflict = function() {
                return $.fn.affix = t,
                    this
            }
            ,
            $(window).on("load", function() {
                $('[data-spy="affix"]').each(function() {
                    var t = $(this)
                        , e = t.data();
                    e.offset = e.offset || {},
                    null != e.offsetBottom && (e.offset.bottom = e.offsetBottom),
                    null != e.offsetTop && (e.offset.top = e.offsetTop),
                        n.call(t, e)
                })
            })
    }(jQuery);
var CryptoJS = CryptoJS || function(a) {
    function n() {}
    var t = {}
        , e = t.lib = {}
        , i = e.Base = {
        extend: function(t) {
            n.prototype = this;
            var e = new n;
            return t && e.mixIn(t),
            e.hasOwnProperty("init") || (e.init = function() {
                    e.$super.init.apply(this, arguments)
                }
            ),
                (e.init.prototype = e).$super = this,
                e
        },
        create: function() {
            var t = this.extend();
            return t.init.apply(t, arguments),
                t
        },
        init: function() {},
        mixIn: function(t) {
            for (var e in t)
                t.hasOwnProperty(e) && (this[e] = t[e]);
            t.hasOwnProperty("toString") && (this.toString = t.toString)
        },
        clone: function() {
            return this.init.prototype.extend(this)
        }
    }
        , l = e.WordArray = i.extend({
        init: function(t, e) {
            t = this.words = t || [],
                this.sigBytes = null != e ? e : 4 * t.length
        },
        toString: function(t) {
            return (t || o).stringify(this)
        },
        concat: function(t) {
            var e = this.words
                , n = t.words
                , i = this.sigBytes;
            if (t = t.sigBytes,
                this.clamp(),
            i % 4)
                for (var r = 0; r < t; r++)
                    e[i + r >>> 2] |= (n[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 24 - (i + r) % 4 * 8;
            else if (65535 < n.length)
                for (r = 0; r < t; r += 4)
                    e[i + r >>> 2] = n[r >>> 2];
            else
                e.push.apply(e, n);
            return this.sigBytes += t,
                this
        },
        clamp: function() {
            var t = this.words
                , e = this.sigBytes;
            t[e >>> 2] &= 4294967295 << 32 - e % 4 * 8,
                t.length = a.ceil(e / 4)
        },
        clone: function() {
            var t = i.clone.call(this);
            return t.words = this.words.slice(0),
                t
        },
        random: function(t) {
            for (var e = [], n = 0; n < t; n += 4)
                e.push(4294967296 * a.random() | 0);
            return new l.init(e,t)
        }
    })
        , r = t.enc = {}
        , o = r.Hex = {
        stringify: function(t) {
            var e = t.words;
            t = t.sigBytes;
            for (var n = [], i = 0; i < t; i++) {
                var r = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                n.push((r >>> 4).toString(16)),
                    n.push((15 & r).toString(16))
            }
            return n.join("")
        },
        parse: function(t) {
            for (var e = t.length, n = [], i = 0; i < e; i += 2)
                n[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - i % 8 * 4;
            return new l.init(n,e / 2)
        }
    }
        , s = r.Latin1 = {
        stringify: function(t) {
            var e = t.words;
            t = t.sigBytes;
            for (var n = [], i = 0; i < t; i++)
                n.push(String.fromCharCode(e[i >>> 2] >>> 24 - i % 4 * 8 & 255));
            return n.join("")
        },
        parse: function(t) {
            for (var e = t.length, n = [], i = 0; i < e; i++)
                n[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8;
            return new l.init(n,e)
        }
    }
        , c = r.Utf8 = {
        stringify: function(t) {
            try {
                return decodeURIComponent(escape(s.stringify(t)))
            } catch (t) {
                throw Error("Malformed UTF-8 data")
            }
        },
        parse: function(t) {
            return s.parse(unescape(encodeURIComponent(t)))
        }
    }
        , u = e.BufferedBlockAlgorithm = i.extend({
        reset: function() {
            this._data = new l.init,
                this._nDataBytes = 0
        },
        _append: function(t) {
            "string" == typeof t && (t = c.parse(t)),
                this._data.concat(t),
                this._nDataBytes += t.sigBytes
        },
        _process: function(t) {
            var e = this._data
                , n = e.words
                , i = e.sigBytes
                , r = this.blockSize
                , o = i / (4 * r)
                , o = t ? a.ceil(o) : a.max((0 | o) - this._minBufferSize, 0)
                , i = a.min(4 * (t = o * r), i);
            if (t) {
                for (var s = 0; s < t; s += r)
                    this._doProcessBlock(n, s);
                s = n.splice(0, t),
                    e.sigBytes -= i
            }
            return new l.init(s,i)
        },
        clone: function() {
            var t = i.clone.call(this);
            return t._data = this._data.clone(),
                t
        },
        _minBufferSize: 0
    });
    e.Hasher = u.extend({
        cfg: i.extend(),
        init: function(t) {
            this.cfg = this.cfg.extend(t),
                this.reset()
        },
        reset: function() {
            u.reset.call(this),
                this._doReset()
        },
        update: function(t) {
            return this._append(t),
                this._process(),
                this
        },
        finalize: function(t) {
            return t && this._append(t),
                this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function(n) {
            return function(t, e) {
                return new n.init(e).finalize(t)
            }
        },
        _createHmacHelper: function(n) {
            return function(t, e) {
                return new p.HMAC.init(n,e).finalize(t)
            }
        }
    });
    var p = t.algo = {};
    return t
}(Math);
!function() {
    var t = CryptoJS
        , e = (i = t.lib).WordArray
        , n = i.Hasher
        , u = []
        , i = t.algo.SHA1 = n.extend({
        _doReset: function() {
            this._hash = new e.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
        },
        _doProcessBlock: function(t, e) {
            for (var n, i = this._hash.words, r = i[0], o = i[1], s = i[2], a = i[3], l = i[4], c = 0; c < 80; c++)
                c < 16 ? u[c] = 0 | t[e + c] : (n = u[c - 3] ^ u[c - 8] ^ u[c - 14] ^ u[c - 16],
                    u[c] = n << 1 | n >>> 31),
                    n = (r << 5 | r >>> 27) + l + u[c],
                    n = c < 20 ? n + (1518500249 + (o & s | ~o & a)) : c < 40 ? n + (1859775393 + (o ^ s ^ a)) : c < 60 ? n + ((o & s | o & a | s & a) - 1894007588) : n + ((o ^ s ^ a) - 899497514),
                    l = a,
                    a = s,
                    s = o << 30 | o >>> 2,
                    o = r,
                    r = n;
            i[0] = i[0] + r | 0,
                i[1] = i[1] + o | 0,
                i[2] = i[2] + s | 0,
                i[3] = i[3] + a | 0,
                i[4] = i[4] + l | 0
        },
        _doFinalize: function() {
            var t = this._data
                , e = t.words
                , n = 8 * this._nDataBytes
                , i = 8 * t.sigBytes;
            return e[i >>> 5] |= 128 << 24 - i % 32,
                e[14 + (64 + i >>> 9 << 4)] = Math.floor(n / 4294967296),
                e[15 + (64 + i >>> 9 << 4)] = n,
                t.sigBytes = 4 * e.length,
                this._process(),
                this._hash
        },
        clone: function() {
            var t = n.clone.call(this);
            return t._hash = this._hash.clone(),
                t
        }
    });
    t.SHA1 = n._createHelper(i),
        t.HmacSHA1 = n._createHmacHelper(i)
}(),
    function() {
        var t, r;
        "function" == typeof ArrayBuffer && (t = CryptoJS.lib.WordArray,
            r = t.init,
            (t.init = function(t) {
                    if ((t = (t = t instanceof ArrayBuffer ? new Uint8Array(t) : t)instanceof Int8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array ? new Uint8Array(t.buffer,t.byteOffset,t.byteLength) : t)instanceof Uint8Array) {
                        for (var e = t.byteLength, n = [], i = 0; i < e; i++)
                            n[i >>> 2] |= t[i] << 24 - i % 4 * 8;
                        r.call(this, n, e)
                    } else
                        r.apply(this, arguments)
                }
            ).prototype = t)
    }();
CryptoJS = CryptoJS || function(a) {
    function n() {}
    var t = {}
        , e = t.lib = {}
        , i = e.Base = {
        extend: function(t) {
            n.prototype = this;
            var e = new n;
            return t && e.mixIn(t),
            e.hasOwnProperty("init") || (e.init = function() {
                    e.$super.init.apply(this, arguments)
                }
            ),
                (e.init.prototype = e).$super = this,
                e
        },
        create: function() {
            var t = this.extend();
            return t.init.apply(t, arguments),
                t
        },
        init: function() {},
        mixIn: function(t) {
            for (var e in t)
                t.hasOwnProperty(e) && (this[e] = t[e]);
            t.hasOwnProperty("toString") && (this.toString = t.toString)
        },
        clone: function() {
            return this.init.prototype.extend(this)
        }
    }
        , l = e.WordArray = i.extend({
        init: function(t, e) {
            t = this.words = t || [],
                this.sigBytes = null != e ? e : 4 * t.length
        },
        toString: function(t) {
            return (t || o).stringify(this)
        },
        concat: function(t) {
            var e = this.words
                , n = t.words
                , i = this.sigBytes;
            if (t = t.sigBytes,
                this.clamp(),
            i % 4)
                for (var r = 0; r < t; r++)
                    e[i + r >>> 2] |= (n[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 24 - (i + r) % 4 * 8;
            else if (65535 < n.length)
                for (r = 0; r < t; r += 4)
                    e[i + r >>> 2] = n[r >>> 2];
            else
                e.push.apply(e, n);
            return this.sigBytes += t,
                this
        },
        clamp: function() {
            var t = this.words
                , e = this.sigBytes;
            t[e >>> 2] &= 4294967295 << 32 - e % 4 * 8,
                t.length = a.ceil(e / 4)
        },
        clone: function() {
            var t = i.clone.call(this);
            return t.words = this.words.slice(0),
                t
        },
        random: function(t) {
            for (var e = [], n = 0; n < t; n += 4)
                e.push(4294967296 * a.random() | 0);
            return new l.init(e,t)
        }
    })
        , r = t.enc = {}
        , o = r.Hex = {
        stringify: function(t) {
            var e = t.words;
            t = t.sigBytes;
            for (var n = [], i = 0; i < t; i++) {
                var r = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                n.push((r >>> 4).toString(16)),
                    n.push((15 & r).toString(16))
            }
            return n.join("")
        },
        parse: function(t) {
            for (var e = t.length, n = [], i = 0; i < e; i += 2)
                n[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - i % 8 * 4;
            return new l.init(n,e / 2)
        }
    }
        , s = r.Latin1 = {
        stringify: function(t) {
            var e = t.words;
            t = t.sigBytes;
            for (var n = [], i = 0; i < t; i++)
                n.push(String.fromCharCode(e[i >>> 2] >>> 24 - i % 4 * 8 & 255));
            return n.join("")
        },
        parse: function(t) {
            for (var e = t.length, n = [], i = 0; i < e; i++)
                n[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8;
            return new l.init(n,e)
        }
    }
        , c = r.Utf8 = {
        stringify: function(t) {
            try {
                return decodeURIComponent(escape(s.stringify(t)))
            } catch (t) {
                throw Error("Malformed UTF-8 data")
            }
        },
        parse: function(t) {
            return s.parse(unescape(encodeURIComponent(t)))
        }
    }
        , u = e.BufferedBlockAlgorithm = i.extend({
        reset: function() {
            this._data = new l.init,
                this._nDataBytes = 0
        },
        _append: function(t) {
            "string" == typeof t && (t = c.parse(t)),
                this._data.concat(t),
                this._nDataBytes += t.sigBytes
        },
        _process: function(t) {
            var e = this._data
                , n = e.words
                , i = e.sigBytes
                , r = this.blockSize
                , o = i / (4 * r)
                , o = t ? a.ceil(o) : a.max((0 | o) - this._minBufferSize, 0)
                , i = a.min(4 * (t = o * r), i);
            if (t) {
                for (var s = 0; s < t; s += r)
                    this._doProcessBlock(n, s);
                s = n.splice(0, t),
                    e.sigBytes -= i
            }
            return new l.init(s,i)
        },
        clone: function() {
            var t = i.clone.call(this);
            return t._data = this._data.clone(),
                t
        },
        _minBufferSize: 0
    });
    e.Hasher = u.extend({
        cfg: i.extend(),
        init: function(t) {
            this.cfg = this.cfg.extend(t),
                this.reset()
        },
        reset: function() {
            u.reset.call(this),
                this._doReset()
        },
        update: function(t) {
            return this._append(t),
                this._process(),
                this
        },
        finalize: function(t) {
            return t && this._append(t),
                this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function(n) {
            return function(t, e) {
                return new n.init(e).finalize(t)
            }
        },
        _createHmacHelper: function(n) {
            return function(t, e) {
                return new p.HMAC.init(n,e).finalize(t)
            }
        }
    });
    var p = t.algo = {};
    return t
}(Math);
function ShowAlert(t, e, n) {
    $(n).empty(),
        $(n).append('<div class="alert alert-' + e + '">' + t + "</div>"),
        $(n).show()
}
!function() {
    var t = CryptoJS
        , l = t.lib.WordArray;
    t.enc.Base64 = {
        stringify: function(t) {
            var e = t.words
                , n = t.sigBytes
                , i = this._map;
            t.clamp(),
                t = [];
            for (var r = 0; r < n; r += 3)
                for (var o = (e[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (e[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | e[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, s = 0; s < 4 && r + .75 * s < n; s++)
                    t.push(i.charAt(o >>> 6 * (3 - s) & 63));
            if (e = i.charAt(64))
                for (; t.length % 4; )
                    t.push(e);
            return t.join("")
        },
        parse: function(t) {
            var e = t.length
                , n = this._map;
            !(o = n.charAt(64)) || -1 != (o = t.indexOf(o)) && (e = o);
            for (var i, r, o = [], s = 0, a = 0; a < e; a++)
                a % 4 && (i = n.indexOf(t.charAt(a - 1)) << a % 4 * 2,
                    r = n.indexOf(t.charAt(a)) >>> 6 - a % 4 * 2,
                    o[s >>> 2] |= (i | r) << 24 - s % 4 * 8,
                    s++);
            return l.create(o, s)
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
}(),
    function(o) {
        function C(t, e, n, i, r, o, s) {
            return ((t = t + (e & n | ~e & i) + r + s) << o | t >>> 32 - o) + e
        }
        function S(t, e, n, i, r, o, s) {
            return ((t = t + (e & i | n & ~i) + r + s) << o | t >>> 32 - o) + e
        }
        function k(t, e, n, i, r, o, s) {
            return ((t = t + (e ^ n ^ i) + r + s) << o | t >>> 32 - o) + e
        }
        function E(t, e, n, i, r, o, s) {
            return ((t = t + (n ^ (e | ~i)) + r + s) << o | t >>> 32 - o) + e
        }
        for (var t = CryptoJS, e = (i = t.lib).WordArray, n = i.Hasher, i = t.algo, N = [], r = 0; r < 64; r++)
            N[r] = 4294967296 * o.abs(o.sin(r + 1)) | 0;
        i = i.MD5 = n.extend({
            _doReset: function() {
                this._hash = new e.init([1732584193, 4023233417, 2562383102, 271733878])
            },
            _doProcessBlock: function(t, e) {
                for (var n = 0; n < 16; n++) {
                    var i = t[r = e + n];
                    t[r] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8)
                }
                var n = this._hash.words
                    , r = t[e + 0]
                    , i = t[e + 1]
                    , o = t[e + 2]
                    , s = t[e + 3]
                    , a = t[e + 4]
                    , l = t[e + 5]
                    , c = t[e + 6]
                    , u = t[e + 7]
                    , p = t[e + 8]
                    , f = t[e + 9]
                    , d = t[e + 10]
                    , h = t[e + 11]
                    , g = t[e + 12]
                    , m = t[e + 13]
                    , y = t[e + 14]
                    , v = t[e + 15]
                    , b = C(b = n[0], T = n[1], w = n[2], x = n[3], r, 7, N[0])
                    , x = C(x, b, T, w, i, 12, N[1])
                    , w = C(w, x, b, T, o, 17, N[2])
                    , T = C(T, w, x, b, s, 22, N[3])
                    , b = C(b, T, w, x, a, 7, N[4])
                    , x = C(x, b, T, w, l, 12, N[5])
                    , w = C(w, x, b, T, c, 17, N[6])
                    , T = C(T, w, x, b, u, 22, N[7])
                    , b = C(b, T, w, x, p, 7, N[8])
                    , x = C(x, b, T, w, f, 12, N[9])
                    , w = C(w, x, b, T, d, 17, N[10])
                    , T = C(T, w, x, b, h, 22, N[11])
                    , b = C(b, T, w, x, g, 7, N[12])
                    , x = C(x, b, T, w, m, 12, N[13])
                    , w = C(w, x, b, T, y, 17, N[14])
                    , b = S(b, T = C(T, w, x, b, v, 22, N[15]), w, x, i, 5, N[16])
                    , x = S(x, b, T, w, c, 9, N[17])
                    , w = S(w, x, b, T, h, 14, N[18])
                    , T = S(T, w, x, b, r, 20, N[19])
                    , b = S(b, T, w, x, l, 5, N[20])
                    , x = S(x, b, T, w, d, 9, N[21])
                    , w = S(w, x, b, T, v, 14, N[22])
                    , T = S(T, w, x, b, a, 20, N[23])
                    , b = S(b, T, w, x, f, 5, N[24])
                    , x = S(x, b, T, w, y, 9, N[25])
                    , w = S(w, x, b, T, s, 14, N[26])
                    , T = S(T, w, x, b, p, 20, N[27])
                    , b = S(b, T, w, x, m, 5, N[28])
                    , x = S(x, b, T, w, o, 9, N[29])
                    , w = S(w, x, b, T, u, 14, N[30])
                    , b = k(b, T = S(T, w, x, b, g, 20, N[31]), w, x, l, 4, N[32])
                    , x = k(x, b, T, w, p, 11, N[33])
                    , w = k(w, x, b, T, h, 16, N[34])
                    , T = k(T, w, x, b, y, 23, N[35])
                    , b = k(b, T, w, x, i, 4, N[36])
                    , x = k(x, b, T, w, a, 11, N[37])
                    , w = k(w, x, b, T, u, 16, N[38])
                    , T = k(T, w, x, b, d, 23, N[39])
                    , b = k(b, T, w, x, m, 4, N[40])
                    , x = k(x, b, T, w, r, 11, N[41])
                    , w = k(w, x, b, T, s, 16, N[42])
                    , T = k(T, w, x, b, c, 23, N[43])
                    , b = k(b, T, w, x, f, 4, N[44])
                    , x = k(x, b, T, w, g, 11, N[45])
                    , w = k(w, x, b, T, v, 16, N[46])
                    , b = E(b, T = k(T, w, x, b, o, 23, N[47]), w, x, r, 6, N[48])
                    , x = E(x, b, T, w, u, 10, N[49])
                    , w = E(w, x, b, T, y, 15, N[50])
                    , T = E(T, w, x, b, l, 21, N[51])
                    , b = E(b, T, w, x, g, 6, N[52])
                    , x = E(x, b, T, w, s, 10, N[53])
                    , w = E(w, x, b, T, d, 15, N[54])
                    , T = E(T, w, x, b, i, 21, N[55])
                    , b = E(b, T, w, x, p, 6, N[56])
                    , x = E(x, b, T, w, v, 10, N[57])
                    , w = E(w, x, b, T, c, 15, N[58])
                    , T = E(T, w, x, b, m, 21, N[59])
                    , b = E(b, T, w, x, a, 6, N[60])
                    , x = E(x, b, T, w, h, 10, N[61])
                    , w = E(w, x, b, T, o, 15, N[62])
                    , T = E(T, w, x, b, f, 21, N[63]);
                n[0] = n[0] + b | 0,
                    n[1] = n[1] + T | 0,
                    n[2] = n[2] + w | 0,
                    n[3] = n[3] + x | 0
            },
            _doFinalize: function() {
                var t = this._data
                    , e = t.words
                    , n = 8 * this._nDataBytes
                    , i = 8 * t.sigBytes;
                e[i >>> 5] |= 128 << 24 - i % 32;
                var r = o.floor(n / 4294967296);
                for (e[15 + (64 + i >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8),
                         e[14 + (64 + i >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8),
                         t.sigBytes = 4 * (e.length + 1),
                         this._process(),
                         e = (t = this._hash).words,
                         n = 0; n < 4; n++)
                    i = e[n],
                        e[n] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                return t
            },
            clone: function() {
                var t = n.clone.call(this);
                return t._hash = this._hash.clone(),
                    t
            }
        }),
            t.MD5 = n._createHelper(i),
            t.HmacMD5 = n._createHmacHelper(i)
    }(Math),
    function() {
        var t = CryptoJS
            , e = t.lib
            , n = e.Base
            , c = e.WordArray
            , i = (e = t.algo).EvpKDF = n.extend({
            cfg: n.extend({
                keySize: 4,
                hasher: e.MD5,
                iterations: 1
            }),
            init: function(t) {
                this.cfg = this.cfg.extend(t)
            },
            compute: function(t, e) {
                for (var n = (s = this.cfg).hasher.create(), i = c.create(), r = i.words, o = s.keySize, s = s.iterations; r.length < o; ) {
                    a && n.update(a);
                    var a = n.update(t).finalize(e);
                    n.reset();
                    for (var l = 1; l < s; l++)
                        a = n.finalize(a),
                            n.reset();
                    i.concat(a)
                }
                return i.sigBytes = 4 * o,
                    i
            }
        });
        t.EvpKDF = function(t, e, n) {
            return i.create(n).compute(t, e)
        }
    }(),
CryptoJS.lib.Cipher || function() {
    var t = (f = CryptoJS).lib
        , e = t.Base
        , s = t.WordArray
        , n = t.BufferedBlockAlgorithm
        , i = f.enc.Base64
        , r = f.algo.EvpKDF
        , o = t.Cipher = n.extend({
        cfg: e.extend(),
        createEncryptor: function(t, e) {
            return this.create(this._ENC_XFORM_MODE, t, e)
        },
        createDecryptor: function(t, e) {
            return this.create(this._DEC_XFORM_MODE, t, e)
        },
        init: function(t, e, n) {
            this.cfg = this.cfg.extend(n),
                this._xformMode = t,
                this._key = e,
                this.reset()
        },
        reset: function() {
            n.reset.call(this),
                this._doReset()
        },
        process: function(t) {
            return this._append(t),
                this._process()
        },
        finalize: function(t) {
            return t && this._append(t),
                this._doFinalize()
        },
        keySize: 4,
        ivSize: 4,
        _ENC_XFORM_MODE: 1,
        _DEC_XFORM_MODE: 2,
        _createHelper: function(i) {
            return {
                encrypt: function(t, e, n) {
                    return ("string" == typeof e ? d : p).encrypt(i, t, e, n)
                },
                decrypt: function(t, e, n) {
                    return ("string" == typeof e ? d : p).decrypt(i, t, e, n)
                }
            }
        }
    });
    t.StreamCipher = o.extend({
        _doFinalize: function() {
            return this._process(!0)
        },
        blockSize: 1
    });
    function a(t, e, n) {
        var i = this._iv;
        i ? this._iv = void 0 : i = this._prevBlock;
        for (var r = 0; r < n; r++)
            t[e + r] ^= i[r]
    }
    var l = f.mode = {}
        , c = (t.BlockCipherMode = e.extend({
        createEncryptor: function(t, e) {
            return this.Encryptor.create(t, e)
        },
        createDecryptor: function(t, e) {
            return this.Decryptor.create(t, e)
        },
        init: function(t, e) {
            this._cipher = t,
                this._iv = e
        }
    })).extend();
    c.Encryptor = c.extend({
        processBlock: function(t, e) {
            var n = this._cipher
                , i = n.blockSize;
            a.call(this, t, e, i),
                n.encryptBlock(t, e),
                this._prevBlock = t.slice(e, e + i)
        }
    }),
        c.Decryptor = c.extend({
            processBlock: function(t, e) {
                var n = this._cipher
                    , i = n.blockSize
                    , r = t.slice(e, e + i);
                n.decryptBlock(t, e),
                    a.call(this, t, e, i),
                    this._prevBlock = r
            }
        }),
        l = l.CBC = c,
        c = (f.pad = {}).Pkcs7 = {
            pad: function(t, e) {
                for (var n = 4 * e, i = (n = n - t.sigBytes % n) << 24 | n << 16 | n << 8 | n, r = [], o = 0; o < n; o += 4)
                    r.push(i);
                n = s.create(r, n),
                    t.concat(n)
            },
            unpad: function(t) {
                t.sigBytes -= 255 & t.words[t.sigBytes - 1 >>> 2]
            }
        },
        t.BlockCipher = o.extend({
            cfg: o.cfg.extend({
                mode: l,
                padding: c
            }),
            reset: function() {
                o.reset.call(this);
                var t, e = (n = this.cfg).iv, n = n.mode;
                this._xformMode == this._ENC_XFORM_MODE ? t = n.createEncryptor : (t = n.createDecryptor,
                    this._minBufferSize = 1),
                    this._mode = t.call(n, this, e && e.words)
            },
            _doProcessBlock: function(t, e) {
                this._mode.processBlock(t, e)
            },
            _doFinalize: function() {
                var t, e = this.cfg.padding;
                return this._xformMode == this._ENC_XFORM_MODE ? (e.pad(this._data, this.blockSize),
                    t = this._process(!0)) : (t = this._process(!0),
                    e.unpad(t)),
                    t
            },
            blockSize: 4
        });
    var u = t.CipherParams = e.extend({
        init: function(t) {
            this.mixIn(t)
        },
        toString: function(t) {
            return (t || this.formatter).stringify(this)
        }
    })
        , l = (f.format = {}).OpenSSL = {
        stringify: function(t) {
            var e = t.ciphertext;
            return ((t = t.salt) ? s.create([1398893684, 1701076831]).concat(t).concat(e) : e).toString(i)
        },
        parse: function(t) {
            var e, n = (t = i.parse(t)).words;
            return 1398893684 == n[0] && 1701076831 == n[1] && (e = s.create(n.slice(2, 4)),
                n.splice(0, 4),
                t.sigBytes -= 16),
                u.create({
                    ciphertext: t,
                    salt: e
                })
        }
    }
        , p = t.SerializableCipher = e.extend({
        cfg: e.extend({
            format: l
        }),
        encrypt: function(t, e, n, i) {
            i = this.cfg.extend(i);
            var r = t.createEncryptor(n, i);
            return e = r.finalize(e),
                r = r.cfg,
                u.create({
                    ciphertext: e,
                    key: n,
                    iv: r.iv,
                    algorithm: t,
                    mode: r.mode,
                    padding: r.padding,
                    blockSize: t.blockSize,
                    formatter: i.format
                })
        },
        decrypt: function(t, e, n, i) {
            return i = this.cfg.extend(i),
                e = this._parse(e, i.format),
                t.createDecryptor(n, i).finalize(e.ciphertext)
        },
        _parse: function(t, e) {
            return "string" == typeof t ? e.parse(t, this) : t
        }
    })
        , f = (f.kdf = {}).OpenSSL = {
        execute: function(t, e, n, i) {
            return i = i || s.random(8),
                t = r.create({
                    keySize: e + n
                }).compute(t, i),
                n = s.create(t.words.slice(e), 4 * n),
                t.sigBytes = 4 * e,
                u.create({
                    key: t,
                    iv: n,
                    salt: i
                })
        }
    }
        , d = t.PasswordBasedCipher = p.extend({
        cfg: p.cfg.extend({
            kdf: f
        }),
        encrypt: function(t, e, n, i) {
            return n = (i = this.cfg.extend(i)).kdf.execute(n, t.keySize, t.ivSize),
                i.iv = n.iv,
                (t = p.encrypt.call(this, t, e, n.key, i)).mixIn(n),
                t
        },
        decrypt: function(t, e, n, i) {
            return i = this.cfg.extend(i),
                e = this._parse(e, i.format),
                n = i.kdf.execute(n, t.keySize, t.ivSize, e.salt),
                i.iv = n.iv,
                p.decrypt.call(this, t, e, n.key, i)
        }
    })
}(),
    function() {
        for (var t = CryptoJS, e = t.lib.BlockCipher, n = t.algo, s = [], i = [], r = [], o = [], a = [], l = [], c = [], u = [], p = [], f = [], d = [], h = 0; h < 256; h++)
            d[h] = h < 128 ? h << 1 : h << 1 ^ 283;
        for (var g = 0, m = 0, h = 0; h < 256; h++) {
            var y = m ^ m << 1 ^ m << 2 ^ m << 3 ^ m << 4;
            s[g] = y = y >>> 8 ^ 255 & y ^ 99;
            var v = d[i[y] = g]
                , b = d[v]
                , x = d[b]
                , w = 257 * d[y] ^ 16843008 * y;
            r[g] = w << 24 | w >>> 8,
                o[g] = w << 16 | w >>> 16,
                a[g] = w << 8 | w >>> 24,
                l[g] = w,
                c[y] = (w = 16843009 * x ^ 65537 * b ^ 257 * v ^ 16843008 * g) << 24 | w >>> 8,
                u[y] = w << 16 | w >>> 16,
                p[y] = w << 8 | w >>> 24,
                f[y] = w,
                g ? (g = v ^ d[d[d[x ^ v]]],
                    m ^= d[d[m]]) : g = m = 1
        }
        var T = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
            , n = n.AES = e.extend({
            _doReset: function() {
                for (var t, e = (i = this._key).words, n = i.sigBytes / 4, i = 4 * ((this._nRounds = n + 6) + 1), r = this._keySchedule = [], o = 0; o < i; o++)
                    o < n ? r[o] = e[o] : (t = r[o - 1],
                        o % n ? 6 < n && 4 == o % n && (t = s[t >>> 24] << 24 | s[t >>> 16 & 255] << 16 | s[t >>> 8 & 255] << 8 | s[255 & t]) : (t = s[(t = t << 8 | t >>> 24) >>> 24] << 24 | s[t >>> 16 & 255] << 16 | s[t >>> 8 & 255] << 8 | s[255 & t],
                            t ^= T[o / n | 0] << 24),
                        r[o] = r[o - n] ^ t);
                for (e = this._invKeySchedule = [],
                         n = 0; n < i; n++)
                    o = i - n,
                        t = n % 4 ? r[o] : r[o - 4],
                        e[n] = n < 4 || o <= 4 ? t : c[s[t >>> 24]] ^ u[s[t >>> 16 & 255]] ^ p[s[t >>> 8 & 255]] ^ f[s[255 & t]]
            },
            encryptBlock: function(t, e) {
                this._doCryptBlock(t, e, this._keySchedule, r, o, a, l, s)
            },
            decryptBlock: function(t, e) {
                var n = t[e + 1];
                t[e + 1] = t[e + 3],
                    t[e + 3] = n,
                    this._doCryptBlock(t, e, this._invKeySchedule, c, u, p, f, i),
                    n = t[e + 1],
                    t[e + 1] = t[e + 3],
                    t[e + 3] = n
            },
            _doCryptBlock: function(t, e, n, i, r, o, s, a) {
                for (var l = this._nRounds, c = t[e] ^ n[0], u = t[e + 1] ^ n[1], p = t[e + 2] ^ n[2], f = t[e + 3] ^ n[3], d = 4, h = 1; h < l; h++)
                     var g = i[c >>> 24] ^ r[u >>> 16 & 255] ^ o[p >>> 8 & 255] ^ s[255 & f] ^ n[d++]
                         , m = i[u >>> 24] ^ r[p >>> 16 & 255] ^ o[f >>> 8 & 255] ^ s[255 & c] ^ n[d++]
                         , y = i[p >>> 24] ^ r[f >>> 16 & 255] ^ o[c >>> 8 & 255] ^ s[255 & u] ^ n[d++]
                         , f = i[f >>> 24] ^ r[c >>> 16 & 255] ^ o[u >>> 8 & 255] ^ s[255 & p] ^ n[d++]
                         , c = g
                         , u = m
                         , p = y;
                g = (a[c >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[p >>> 8 & 255] << 8 | a[255 & f]) ^ n[d++],
                    m = (a[u >>> 24] << 24 | a[p >>> 16 & 255] << 16 | a[f >>> 8 & 255] << 8 | a[255 & c]) ^ n[d++],
                    y = (a[p >>> 24] << 24 | a[f >>> 16 & 255] << 16 | a[c >>> 8 & 255] << 8 | a[255 & u]) ^ n[d++],
                    f = (a[f >>> 24] << 24 | a[c >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[255 & p]) ^ n[d++],
                    t[e] = g,
                    t[e + 1] = m,
                    t[e + 2] = y,
                    t[e + 3] = f
            },
            keySize: 8
        });
        t.AES = e._createHelper(n)
    }(),
    $(document).ready(function() {
        $("#fileSel").change(function() {
            $("#uploadBtn").prop("disabled", !0),
                $("#fileSel").prop("disabled", !0),
                $("#uploadBtn").val("Please wait...");
            var t = new FileReader
                , e = $("#fileSel")[0].files[0]
                , n = $("#fileSel").val().split(".").pop().toLowerCase();
            e ? 99614720 < e.size ? (ShowAlert("File is too large, allowed file size is no more than 95 MB.", "danger", ".upload-alert"),
                    $("#fileSel").prop("disabled", !1),
                    $("#uploadBtn").val("Upload")) : "zip" != n ? (ShowAlert("Error: File type not allowed.", "danger", ".upload-alert"),
                    $("#fileSel").prop("disabled", !1),
                    $("#uploadBtn").val("Upload")) : t.onload = function(t) {
                    var e = this.result
                        , e = CryptoJS.lib.WordArray.create(e)
                        , n = CryptoJS.SHA1(e);
                    $.getJSON("inc/check.php?hash=" + n.toString(), function(t) {
                        "true" == t.file ? ($("#uploadBtn").prop("disabled", !1),
                            $("#fileSel").prop("disabled", !1),
                            $("#uploadBtn").val("Upload"),
                            $("#uploadBtn").click(function(t) {
                                t.preventDefault(),
                                    window.location.replace("download/" + n.toString())
                            })) : ($("#uploadBtn").prop("disabled", !1),
                            $("#fileSel").prop("disabled", !1),
                            $("#uploadBtn").val("Upload"))
                    }).fail(function() {
                        $("#uploadBtn").prop("disabled", !1),
                            $("#fileSel").prop("disabled", !1),
                            $("#uploadBtn").val("Upload")
                    })
                }
                : (ShowAlert("Error: Invalid file.", "danger", ".upload-alert"),
                    $("#fileSel").prop("disabled", !1),
                    $("#uploadBtn").val("Upload")),
                t.readAsArrayBuffer(e)
        })
    });
