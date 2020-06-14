var _sz8x_dec = function(str) {
    var decstr = "";
    for (var i1 = 0; i1 < str.length; i1++) {
        var cc = str.charCodeAt(i1);
        if (cc >= 65 && cc <= 90) decstr += String.fromCharCode(90 - (cc - 65));
        else if (cc >= 97 && cc <= 122) decstr += String.fromCharCode(122 - (cc - 97));
        else decstr += str[i1]
    }
    return decstr
};
for (var i2 = 0; i2 < _sz8x.length; i2++) {
    _sz8x[i2] = _sz8x_dec(_sz8x[i2])
}
var blah = function() {
    ! function(t, e) {
        "object" == typeof exports && "object" == typeof module ? module["exports"] = e() : "function" == typeof define && define["amd"] ? define([], e) : "object" == typeof exports ? exports["eio"] = e() : t["eio"] = e()
    }(this, function() {
        return function(r) {
            var n = {};

            function o(t) {
                if (n[t]) return n[t]["exports"];
                var e = n[t] = {
                    exports: {},
                    id: t,
                    loaded: !1
                };
                return r[t]["call"](e["exports"], e, e["exports"], o), e["loaded"] = !0, e["exports"]
            }
            return o["m"] = r, o["c"] = n, o["p"] = "", o(0)
        }([function(t, e, r) {
            "use strict";
            t["exports"] = r(1), t["exports"]["parser"] = r(8)
        }, function(t, e, r) {
            "use strict";
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t["constructor"] === Symbol && t !== Symbol["prototype"] ? "symbol" : typeof t
                }, o = r(2),
                i = r(17),
                h = r(21)("engine.io-client:socket"),
                s = r(28),
                a = r(8),
                c = r(29),
                u = r(18);

            function f(t, e) {
                if (!(this instanceof f)) return new f(t, e);
                e = e || {}, t && "object" === (void 0 === t ? "undefined" : n(t)) && (e = t, t = null), t ? (t = c(t), e["hostname"] = t["host"], e["secure"] = "https" === t["protocol"] || "wss" === t["protocol"], e["port"] = t["port"], t["query"] && (e["query"] = t["query"])) : e["host"] && (e["hostname"] = c(e["host"])["host"]), this["secure"] = null != e["secure"] ? e["secure"] : "undefined" != typeof location && "https:" === location["protocol"], e["hostname"] && !e["port"] && (e["port"] = this["secure"] ? "443" : "80"), this["agent"] = e["agent"] || !1, this["hostname"] = e["hostname"] || ("undefined" != typeof location ? location["hostname"] : "localhost"), this["port"] = e["port"] || ("undefined" != typeof location && location["port"] ? location["port"] : this["secure"] ? 443 : 80), this["query"] = e["query"] || {}, "string" == typeof this["query"] && (this["query"] = u["decode"](this["query"])), this["upgrade"] = !1 !== e["upgrade"], this["path"] = (e["path"] || "/engine.io")["replace"](/\/$/, "") + "/", this["forceJSONP"] = !! e["forceJSONP"], this["jsonp"] = !1 !== e["jsonp"], this["forceBase64"] = !! e["forceBase64"], this["enablesXDR"] = !! e["enablesXDR"], this["timestampParam"] = e["timestampParam"] || "t", this["timestampRequests"] = e["timestampRequests"], this["transports"] = e["transports"] || ["polling", "websocket"], this["transportOptions"] = e["transportOptions"] || {}, this["readyState"] = "", this["writeBuffer"] = [], this["prevBufferLen"] = 0, this["policyPort"] = e["policyPort"] || 843, this["rememberUpgrade"] = e["rememberUpgrade"] || !1, this["binaryType"] = null, this["onlyBinaryUpgrades"] = e["onlyBinaryUpgrades"], this["perMessageDeflate"] = !1 !== e["perMessageDeflate"] && (e["perMessageDeflate"] || {}), !0 === this["perMessageDeflate"] && (this["perMessageDeflate"] = {}), this["perMessageDeflate"] && null == this["perMessageDeflate"]["threshold"] && (this["perMessageDeflate"]["threshold"] = 1024), this["pfx"] = e["pfx"] || null, this["key"] = e["key"] || null, this["passphrase"] = e["passphrase"] || null, this["cert"] = e["cert"] || null, this["ca"] = e["ca"] || null, this["ciphers"] = e["ciphers"] || null, this["rejectUnauthorized"] = void 0 === e["rejectUnauthorized"] || e["rejectUnauthorized"], this["forceNode"] = !! e["forceNode"], this["isReactNative"] = "undefined" != typeof navigator && "string" == typeof navigator["product"] && "reactnative" === navigator["product"]["toLowerCase"](), ("undefined" == typeof self || this["isReactNative"]) && (e["extraHeaders"] && 0 < Object["keys"](e["extraHeaders"])["length"] && (this["extraHeaders"] = e["extraHeaders"]), e["localAddress"] && (this["localAddress"] = e["localAddress"])), this["id"] = null, this["upgrades"] = null, this["pingInterval"] = null, this["pingTimeout"] = null, this["pingIntervalTimer"] = null, this["pingTimeoutTimer"] = null, this["open"]()
            }(t["exports"] = f)["priorWebsocketSuccess"] = !1, i(f["prototype"]), f["protocol"] = a["protocol"], (f["Socket"] = f)["Transport"] = r(7), f["transports"] = r(2), f["parser"] = r(8), f["prototype"]["createTransport"] = function(t) {
                h('creating transport %s', t);
                var e = function(t) {
                    var e = {};
                    for (var r in t) t["hasOwnProperty"](r) && (e[r] = t[r]);
                    return e
                }(this["query"]);
                e["EIO"] = a["protocol"], e["transport"] = t;
                var r = this["transportOptions"][t] || {};
                return this["id"] && (e["sid"] = this["id"]), new o[t]({
                    query: e,
                    socket: this,
                    agent: r["agent"] || this["agent"],
                    hostname: r["hostname"] || this["hostname"],
                    port: r["port"] || this["port"],
                    secure: r["secure"] || this["secure"],
                    path: r["path"] || this["path"],
                    forceJSONP: r["forceJSONP"] || this["forceJSONP"],
                    jsonp: r["jsonp"] || this["jsonp"],
                    forceBase64: r["forceBase64"] || this["forceBase64"],
                    enablesXDR: r["enablesXDR"] || this["enablesXDR"],
                    timestampRequests: r["timestampRequests"] || this["timestampRequests"],
                    timestampParam: r["timestampParam"] || this["timestampParam"],
                    policyPort: r["policyPort"] || this["policyPort"],
                    pfx: r["pfx"] || this["pfx"],
                    key: r["key"] || this["key"],
                    passphrase: r["passphrase"] || this["passphrase"],
                    cert: r["cert"] || this["cert"],
                    ca: r["ca"] || this["ca"],
                    ciphers: r["ciphers"] || this["ciphers"],
                    rejectUnauthorized: r["rejectUnauthorized"] || this["rejectUnauthorized"],
                    perMessageDeflate: r["perMessageDeflate"] || this["perMessageDeflate"],
                    extraHeaders: r["extraHeaders"] || this["extraHeaders"],
                    forceNode: r["forceNode"] || this["forceNode"],
                    localAddress: r["localAddress"] || this["localAddress"],
                    requestTimeout: r["requestTimeout"] || this["requestTimeout"],
                    protocols: r["protocols"] || void 0,
                    isReactNative: this["isReactNative"]
                })
            }, f["prototype"]["open"] = function() {
                var t;
                if (this["rememberUpgrade"] && f["priorWebsocketSuccess"] && -1 !== this["transports"]["indexOf"]("websocket")) t = "websocket";
                else {
                    if (0 === this["transports"]["length"]) {
                        var e = this;
                        return void setTimeout(function() {
                            e["emit"]("error", "No transports available")
                        }, 0)
                    }
                    t = this["transports"][0]
                }
                this["readyState"] = "opening";
                try {
                    t = this["createTransport"](t)
                } catch (t) {
                    return this["transports"]["shift"](), void this["open"]()
                }
                t["open"](), this["setTransport"](t)
            }, f["prototype"]["setTransport"] = function(t) {
                h("setting transport %s", t["name"]);
                var e = this;
                this["transport"] && (h("clearing existing transport %s", this["transport"]["name"]), this["transport"]["removeAllListeners"]()), (this["transport"] = t)["on"]("drain", function() {
                    e["onDrain"]()
                })["on"]("packet", function(t) {
                    e["onPacket"](t)
                })["on"]("error", function(t) {
                    e["onError"](t)
                })["on"]("close", function() {
                    e["onClose"]("transport close")
                })
            }, f["prototype"]["probe"] = function(r) {
                h('probing transport %s', r);
                var n = this["createTransport"](r, {
                    probe: 1
                }),
                    o = !1,
                    i = this;

                function t() {
                    if (i["onlyBinaryUpgrades"]) {
                        var t = !this["supportsBinary"] && i["transport"]["supportsBinary"];
                        o = o || t
                    }
                    o || (h('probe transport %s opened', r), n["send"]([{
                        type: "ping",
                        data: "probe"
                    }]), n["once"]("packet", function(t) {
                        if (!o) if ("pong" === t["type"] && "probe" === t["data"]) {
                            if (h('probe transport %s pong', r), i["upgrading"] = !0, i["emit"]("upgrading", n), !n) return;
                            f["priorWebsocketSuccess"] = "websocket" === n["name"], h('pausing current transport %s', i["transport"]["name"]), i["transport"]["pause"](function() {
                                o || "closed" !== i["readyState"] && (h("changing transport and sending upgrade packet"), p(), i["setTransport"](n), n["send"]([{
                                    type: "upgrade"
                                }]), i["emit"]("upgrade", n), n = null, i["upgrading"] = !1, i["flush"]())
                            })
                        } else {
                            h('probe transport %s failed', r);
                            var e = new Error("probe error");
                            e["transport"] = n["name"], i["emit"]("upgradeError", e)
                        }
                    }))
                }
                function s() {
                    o || (o = !0, p(), n["close"](), n = null)
                }
                function e(t) {
                    var e = new Error("probe error: " + t);
                    e["transport"] = n["name"], s(), h('probe transport %s failed because of error: %s', r, t), i["emit"]("upgradeError", e)
                }
                function a() {
                    e("transport closed")
                }
                function c() {
                    e("socket closed")
                }
                function u(t) {
                    n && t["name"] !== n["name"] && (h('%s works - aborting %s', t["name"], n["name"]), s())
                }
                function p() {
                    n["removeListener"]("open", t), n["removeListener"]("error", e), n["removeListener"]("close", a), i["removeListener"]("close", c), i["removeListener"]("upgrading", u)
                }
                f["priorWebsocketSuccess"] = !1, n["once"]("open", t), n["once"]("error", e), n["once"]("close", a), this["once"]("close", c), this["once"]("upgrading", u), n["open"]()
            }, f["prototype"]["onOpen"] = function() {
                if (h("socket open"), this["readyState"] = "open", f["priorWebsocketSuccess"] = "websocket" === this["transport"]["name"], this["emit"]("open"), this["flush"](), "open" === this["readyState"] && this["upgrade"] && this["transport"]["pause"]) {
                    h("starting upgrade probes");
                    for (var t = 0, e = this["upgrades"]["length"]; t < e; t++) this["probe"](this["upgrades"][t])
                }
            }, f["prototype"]["onPacket"] = function(t) {
                if ("opening" === this["readyState"] || "open" === this["readyState"] || "closing" === this["readyState"]) switch (h('socket receive: type %s, data %s', t["type"], t["data"]), this["emit"]("packet", t), this["emit"]("heartbeat"), t["type"]) {
                    case "open":
                        this["onHandshake"](JSON["parse"](t["data"]));
                        break;
                    case "pong":
                        this["setPing"](), this["emit"]("pong");
                        break;
                    case "error":
                        var e = new Error("server error");
                        e["code"] = t["data"], this["onError"](e);
                        break;
                    case "message":
                        this["emit"]("data", t["data"]), this["emit"]("message", t["data"])
                } else h('packet received with socket readyState %s', this["readyState"])
            }, f["prototype"]["onHandshake"] = function(t) {
                this["emit"]("handshake", t), this["id"] = t["sid"], this["transport"]["query"]["sid"] = t["sid"], this["upgrades"] = this["filterUpgrades"](t["upgrades"]), this["pingInterval"] = t["pingInterval"], this["pingTimeout"] = t["pingTimeout"], this["onOpen"](), "closed" !== this["readyState"] && (this["setPing"](), this["removeListener"]("heartbeat", this["onHeartbeat"]), this["on"]("heartbeat", this["onHeartbeat"]))
            }, f["prototype"]["onHeartbeat"] = function(t) {
                clearTimeout(this["pingTimeoutTimer"]);
                var e = this;
                e["pingTimeoutTimer"] = setTimeout(function() {
                    "closed" !== e["readyState"] && e["onClose"]("ping timeout")
                }, t || e["pingInterval"] + e["pingTimeout"])
            }, f["prototype"]["setPing"] = function() {
                var t = this;
                clearTimeout(t["pingIntervalTimer"]), t["pingIntervalTimer"] = setTimeout(function() {
                    h("writing ping packet - expecting pong within %sms", t["pingTimeout"]), t["ping"](), t["onHeartbeat"](t["pingTimeout"])
                }, t["pingInterval"])
            }, f["prototype"]["ping"] = function() {
                var t = this;
                this["sendPacket"]("ping", function() {
                    t["emit"]("ping")
                })
            }, f["prototype"]["onDrain"] = function() {
                this["writeBuffer"]["splice"](0, this["prevBufferLen"]), (this["prevBufferLen"] = 0) === this["writeBuffer"]["length"] ? this["emit"]("drain") : this["flush"]()
            }, f["prototype"]["flush"] = function() {
                "closed" !== this["readyState"] && this["transport"]["writable"] && !this["upgrading"] && this["writeBuffer"]["length"] && (h("flushing %d packets in socket", this["writeBuffer"]["length"]), this["transport"]["send"](this["writeBuffer"]), this["prevBufferLen"] = this["writeBuffer"]["length"], this["emit"]("flush"))
            }, f["prototype"]["write"] = f["prototype"]["send"] = function(t, e, r) {
                return this["sendPacket"]("message", t, e, r), this
            }, f["prototype"]["sendPacket"] = function(t, e, r, n) {
                if ("function" == typeof e && (n = e, e = void 0), "function" == typeof r && (n = r, r = null), "closing" !== this["readyState"] && "closed" !== this["readyState"]) {
                    (r = r || {})["compress"] = !1 !== r["compress"];
                    var o = {
                        type: t,
                        data: e,
                        options: r
                    };
                    this["emit"]("packetCreate", o), this["writeBuffer"]["push"](o), n && this["once"]("flush", n), this["flush"]()
                }
            }, f["prototype"]["close"] = function() {
                if ("opening" === this["readyState"] || "open" === this["readyState"]) {
                    this["readyState"] = "closing";
                    var t = this;
                    this["writeBuffer"]["length"] ? this["once"]("drain", function() {
                        this["upgrading"] ? n() : e()
                    }) : this["upgrading"] ? n() : e()
                }
                function e() {
                    t["onClose"]("forced close"), h("socket closing - telling transport to close"), t["transport"]["close"]()
                }
                function r() {
                    t["removeListener"]("upgrade", r), t["removeListener"]("upgradeError", r), e()
                }
                function n() {
                    t["once"]("upgrade", r), t["once"]("upgradeError", r)
                }
                return this
            }, f["prototype"]["onError"] = function(t) {
                h("socket error %j", t), f["priorWebsocketSuccess"] = !1, this["emit"]("error", t), this["onClose"]("transport error", t)
            }, f["prototype"]["onClose"] = function(t, e) {
                if ("opening" === this["readyState"] || "open" === this["readyState"] || "closing" === this["readyState"]) {
                    h('socket close with reason: %s', t);
                    clearTimeout(this["pingIntervalTimer"]), clearTimeout(this["pingTimeoutTimer"]), this["transport"]["removeAllListeners"]("close"), this["transport"]["close"](), this["transport"]["removeAllListeners"](), this["readyState"] = "closed", this["id"] = null, this["emit"]("close", t, e), this["writeBuffer"] = [], this["prevBufferLen"] = 0
                }
            }, f["prototype"]["filterUpgrades"] = function(t) {
                for (var e = [], r = 0, n = t["length"]; r < n; r++)~s(this["transports"], t[r]) && e["push"](t[r]);
                return e
            }
        }, function(t, e, r) {
            "use strict";
            var s = r(3),
                a = r(5),
                c = r(25),
                n = r(26);
            e["polling"] = function(t) {
                var e = !1,
                    r = !1,
                    n = !1 !== t["jsonp"];
                if ("undefined" != typeof location) {
                    var o = "https:" === location["protocol"],
                        i = location["port"];
                    i || (i = o ? 443 : 80), e = t["hostname"] !== location["hostname"] || i !== t["port"], r = t["secure"] !== o
                } {
                    if (t["xdomain"] = e, t["xscheme"] = r, "open" in new s(t) && !t["forceJSONP"]) return new a(t);
                    if (!n) throw new Error("JSONP disabled");
                    return new c(t)
                }
            }, e["websocket"] = n
        }, function(t, e, r) {
            "use strict";
            var o = r(4);
            t["exports"] = function(t) {
                var e = t["xdomain"],
                    r = t["xscheme"],
                    n = t["enablesXDR"];
                try {
                    if ("undefined" != typeof XMLHttpRequest && (!e || o)) return new XMLHttpRequest
                } catch (t) {}
                try {
                    if ("undefined" != typeof XDomainRequest && !r && n) return new XDomainRequest
                } catch (t) {}
                if (!e) try {
                    return new(self[["Active"]["concat"]("Object")["join"]("X")])("Microsoft.XMLHTTP")
                } catch (t) {}
            }
        }, function(e, t) {
            try {
                e["exports"] = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
            } catch (t) {
                e["exports"] = !1
            }
        }, function(t, e, r) {
            "use strict";
            var o = r(3),
                n = r(6),
                i = r(17),
                s = r(19),
                a = r(21)("engine.io-client:polling-xhr");

            function c() {}
            function u(t) {
                if (n["call"](this, t), this["requestTimeout"] = t["requestTimeout"], this["extraHeaders"] = t["extraHeaders"], "undefined" != typeof location) {
                    var e = "https:" === location["protocol"],
                        r = location["port"];
                    r || (r = e ? 443 : 80), this["xd"] = "undefined" != typeof location && t["hostname"] !== location["hostname"] || r !== t["port"], this["xs"] = t["secure"] !== e
                }
            }
            function p(t) {
                this["method"] = t["method"] || "GET", this["uri"] = t["uri"], this["xd"] = !! t["xd"], this["xs"] = !! t["xs"], this["async"] = !1 !== t["async"], this["data"] = void 0 !== t["data"] ? t["data"] : null, this["agent"] = t["agent"], this["isBinary"] = t["isBinary"], this["supportsBinary"] = t["supportsBinary"], this["enablesXDR"] = t["enablesXDR"], this["requestTimeout"] = t["requestTimeout"], this["pfx"] = t["pfx"], this["key"] = t["key"], this["passphrase"] = t["passphrase"], this["cert"] = t["cert"], this["ca"] = t["ca"], this["ciphers"] = t["ciphers"], this["rejectUnauthorized"] = t["rejectUnauthorized"], this["extraHeaders"] = t["extraHeaders"], this["create"]()
            }
            if (t["exports"] = u, t["exports"]["Request"] = p, s(u, n), u["prototype"]["supportsBinary"] = !0, u["prototype"]["request"] = function(t) {
                return (t = t || {})["uri"] = this["uri"](), t["xd"] = this["xd"], t["xs"] = this["xs"], t["agent"] = this["agent"] || !1, t["supportsBinary"] = this["supportsBinary"], t["enablesXDR"] = this["enablesXDR"], t["pfx"] = this["pfx"], t["key"] = this["key"], t["passphrase"] = this["passphrase"], t["cert"] = this["cert"], t["ca"] = this["ca"], t["ciphers"] = this["ciphers"], t["rejectUnauthorized"] = this["rejectUnauthorized"], t["requestTimeout"] = this["requestTimeout"], t["extraHeaders"] = this["extraHeaders"], new p(t)
            }, u["prototype"]["doWrite"] = function(t, e) {
                var r = "string" != typeof t && void 0 !== t,
                    n = this["request"]({
                        method: "POST",
                        data: t,
                        isBinary: r
                    }),
                    o = this;
                n["on"]("success", e), n["on"]("error", function(t) {
                    o["onError"]("xhr post error", t)
                }), this["sendXhr"] = n
            }, u["prototype"]["doPoll"] = function() {
                a("xhr poll");
                var t = this["request"](),
                    e = this;
                t["on"]("data", function(t) {
                    e["onData"](t)
                }), t["on"]("error", function(t) {
                    e["onError"]("xhr poll error", t)
                }), this["pollXhr"] = t
            }, i(p["prototype"]), p["prototype"]["create"] = function() {
                var t = {
                    agent: this["agent"],
                    xdomain: this["xd"],
                    xscheme: this["xs"],
                    enablesXDR: this["enablesXDR"]
                };
                t["pfx"] = this["pfx"], t["key"] = this["key"], t["passphrase"] = this["passphrase"], t["cert"] = this["cert"], t["ca"] = this["ca"], t["ciphers"] = this["ciphers"], t["rejectUnauthorized"] = this["rejectUnauthorized"];
                var e = this["xhr"] = new o(t),
                    r = this;
                try {
                    a("xhr open %s: %s", this["method"], this["uri"]), e["open"](this["method"], this["uri"], this["async"]);
                    try {
                        if (this["extraHeaders"]) for (var n in e["setDisableHeaderCheck"] && e["setDisableHeaderCheck"](!0), this["extraHeaders"]) this["extraHeaders"]["hasOwnProperty"](n) && e["setRequestHeader"](n, this["extraHeaders"][n])
                    } catch (t) {}
                    if ("POST" === this["method"]) try {
                        this["isBinary"] ? e["setRequestHeader"]("Content-type", "application/octet-stream") : e["setRequestHeader"]("Content-type", "text/plain;charset=UTF-8")
                    } catch (t) {}
                    try {
                        e["setRequestHeader"]("Accept", "*/*")
                    } catch (t) {}
                    "withCredentials" in e && (e["withCredentials"] = !0), this["requestTimeout"] && (e["timeout"] = this["requestTimeout"]), this["hasXDR"]() ? (e["onload"] = function() {
                        r["onLoad"]()
                    }, e["onerror"] = function() {
                        r["onError"](e["responseText"])
                    }) : e["onreadystatechange"] = function() {
                        if (2 === e["readyState"]) try {
                            var t = e["getResponseHeader"]("Content-Type");
                            r["supportsBinary"] && "application/octet-stream" === t && (e["responseType"] = "arraybuffer")
                        } catch (t) {}
                        4 === e["readyState"] && (200 === e["status"] || 1223 === e["status"] ? r["onLoad"]() : setTimeout(function() {
                            r["onError"](e["status"])
                        }, 0))
                    }, a("xhr data %s", this["data"]), e["send"](this["data"])
                } catch (t) {
                    return void setTimeout(function() {
                        r["onError"](t)
                    }, 0)
                }
                "undefined" != typeof document && (this["index"] = p["requestsCount"]++, p["requests"][this["index"]] = this)
            }, p["prototype"]["onSuccess"] = function() {
                this["emit"]("success"), this["cleanup"]()
            }, p["prototype"]["onData"] = function(t) {
                this["emit"]("data", t), this["onSuccess"]()
            }, p["prototype"]["onError"] = function(t) {
                this["emit"]("error", t), this["cleanup"](!0)
            }, p["prototype"]["cleanup"] = function(t) {
                if (void 0 !== this["xhr"] && null !== this["xhr"]) {
                    if (this["hasXDR"]() ? this["xhr"]["onload"] = this["xhr"]["onerror"] = c : this["xhr"]["onreadystatechange"] = c, t) try {
                        this["xhr"]["abort"]()
                    } catch (t) {}
                    "undefined" != typeof document && delete p["requests"][this["index"]], this["xhr"] = null
                }
            }, p["prototype"]["onLoad"] = function() {
                var t;
                try {
                    var e;
                    try {
                        e = this["xhr"]["getResponseHeader"]("Content-Type")
                    } catch (t) {}
                    t = "application/octet-stream" === e && this["xhr"]["response"] || this["xhr"]["responseText"]
                } catch (t) {
                    this["onError"](t)
                }
                null != t && this["onData"](t)
            }, p["prototype"]["hasXDR"] = function() {
                return "undefined" != typeof XDomainRequest && !this["xs"] && this["enablesXDR"]
            }, p["prototype"]["abort"] = function() {
                this["cleanup"]()
            }, p["requestsCount"] = 0, p["requests"] = {}, "undefined" != typeof document) if ("function" == typeof attachEvent) attachEvent("onunload", f);
            else if ("function" == typeof addEventListener) {
                var h = "onpagehide" in self ? "pagehide" : "unload";
                addEventListener(h, f, !1)
            }
            function f() {
                for (var t in p["requests"]) p["requests"]["hasOwnProperty"](t) && p["requests"][t]["abort"]()
            }
        }, function(t, e, r) {
            "use strict";
            var n = r(7),
                o = r(18),
                i = r(8),
                s = r(19),
                a = r(20),
                c = r(21)("engine.io-client:polling");
            t["exports"] = p;
            var u = null != new(r(3))({
                xdomain: !1
            })["responseType"];

            function p(t) {
                var e = t && t["forceBase64"];
                u && !e || (this["supportsBinary"] = !1), n["call"](this, t)
            }
            s(p, n), p["prototype"]["name"] = "polling", p["prototype"]["doOpen"] = function() {
                this["poll"]()
            }, p["prototype"]["pause"] = function(t) {
                var e = this;

                function r() {
                    c("paused"), e["readyState"] = "paused", t()
                }
                if (this["readyState"] = "pausing", this["polling"] || !this["writable"]) {
                    var n = 0;
                    this["polling"] && (c("we are currently polling - waiting to pause"), n++, this["once"]("pollComplete", function() {
                        c("pre-pause polling complete"), --n || r()
                    })), this["writable"] || (c("we are currently writing - waiting to pause"), n++, this["once"]("drain", function() {
                        c("pre-pause writing complete"), --n || r()
                    }))
                } else r()
            }, p["prototype"]["poll"] = function() {
                c("polling"), this["polling"] = !0, this["doPoll"](), this["emit"]("poll")
            }, p["prototype"]["onData"] = function(t) {
                var n = this;
                c("polling got data %s", t);
                i["decodePayload"](t, this["socket"]["binaryType"], function(t, e, r) {
                    if ("opening" === n["readyState"] && n["onOpen"](), "close" === t["type"]) return n["onClose"](), !1;
                    n["onPacket"](t)
                }), "closed" !== this["readyState"] && (this["polling"] = !1, this["emit"]("pollComplete"), "open" === this["readyState"] ? this["poll"]() : c('ignoring poll - transport state %s', this["readyState"]))
            }, p["prototype"]["doClose"] = function() {
                var t = this;

                function e() {
                    c("writing close packet"), t["write"]([{
                        type: "close"
                    }])
                }
                "open" === this["readyState"] ? (c("transport open - closing"), e()) : (c("transport not open - deferring close"), this["once"]("open", e))
            }, p["prototype"]["write"] = function(t) {
                var e = this;
                this["writable"] = !1;
                var r = function() {
                    e["writable"] = !0, e["emit"]("drain")
                };
                i["encodePayload"](t, this["supportsBinary"], function(t) {
                    e["doWrite"](t, r)
                })
            }, p["prototype"]["uri"] = function() {
                var t = this["query"] || {}, e = this["secure"] ? "https" : "http",
                    r = "";
                return !1 !== this["timestampRequests"] && (t[this["timestampParam"]] = a()), this["supportsBinary"] || t["sid"] || (t["b64"] = 1), t = o["encode"](t), this["port"] && ("https" === e && 443 !== Number(this["port"]) || "http" === e && 80 !== Number(this["port"])) && (r = ":" + this["port"]), t["length"] && (t = "?" + t), e + "://" + (-1 !== this["hostname"]["indexOf"](":") ? "[" + this["hostname"] + "]" : this["hostname"]) + r + this["path"] + t
            }
        }, function(t, e, r) {
            "use strict";
            var n = r(8);

            function o(t) {
                this["path"] = t["path"], this["hostname"] = t["hostname"], this["port"] = t["port"], this["secure"] = t["secure"], this["query"] = t["query"], this["timestampParam"] = t["timestampParam"], this["timestampRequests"] = t["timestampRequests"], this["readyState"] = "", this["agent"] = t["agent"] || !1, this["socket"] = t["socket"], this["enablesXDR"] = t["enablesXDR"], this["pfx"] = t["pfx"], this["key"] = t["key"], this["passphrase"] = t["passphrase"], this["cert"] = t["cert"], this["ca"] = t["ca"], this["ciphers"] = t["ciphers"], this["rejectUnauthorized"] = t["rejectUnauthorized"], this["forceNode"] = t["forceNode"], this["isReactNative"] = t["isReactNative"], this["extraHeaders"] = t["extraHeaders"], this["localAddress"] = t["localAddress"]
            }
            r(17)((t["exports"] = o)["prototype"]), o["prototype"]["onError"] = function(t, e) {
                var r = new Error(t);
                return r["type"] = "TransportError", r["description"] = e, this["emit"]("error", r), this
            }, o["prototype"]["open"] = function() {
                return "closed" !== this["readyState"] && "" !== this["readyState"] || (this["readyState"] = "opening", this["doOpen"]()), this
            }, o["prototype"]["close"] = function() {
                return "opening" !== this["readyState"] && "open" !== this["readyState"] || (this["doClose"](), this["onClose"]()), this
            }, o["prototype"]["send"] = function(t) {
                if ("open" !== this["readyState"]) throw new Error("Transport not open");
                this["write"](t)
            }, o["prototype"]["onOpen"] = function() {
                this["readyState"] = "open", this["writable"] = !0, this["emit"]("open")
            }, o["prototype"]["onData"] = function(t) {
                var e = n["decodePacket"](t, this["socket"]["binaryType"]);
                this["onPacket"](e)
            }, o["prototype"]["onPacket"] = function(t) {
                this["emit"]("packet", t)
            }, o["prototype"]["onClose"] = function() {
                this["readyState"] = "closed", this["emit"]("close")
            }
        }, function(t, f, e) {
            var o, r = e(9),
                i = e(10),
                l = e(12),
                a = e(13),
                u = e(14);
            "undefined" != typeof ArrayBuffer && (o = e(15));
            var n = "undefined" != typeof navigator && /Android/i ["test"](navigator["userAgent"]),
                s = "undefined" != typeof navigator && /PhantomJS/i ["test"](navigator["userAgent"]),
                p = n || s;
            f["protocol"] = 3;
            var h = f["packets"] = {
                open: 0,
                close: 1,
                ping: 2,
                pong: 3,
                message: 4,
                upgrade: 5,
                noop: 6
            }, c = r(h),
                d = {
                    type: "error",
                    data: "parser error"
                }, y = e(16);

            function g(t, e, r) {
                for (var o = new Array(t["length"]), n = a(t["length"], r), i = function(r, t, n) {
                    e(t, function(t, e) {
                        o[r] = e, n(t, o)
                    })
                }, s = 0; s < t["length"]; s++) i(s, t[s], n)
            }
            f["encodePacket"] = function(t, e, r, n) {
                "function" == typeof e && (n = e, e = !1), "function" == typeof r && (n = r, r = null);
                var o, i, s, a = void 0 === t["data"] ? void 0 : t["data"]["buffer"] || t["data"];
                if ("undefined" != typeof ArrayBuffer && a instanceof ArrayBuffer) return function(t, e, r) {
                    if (!e) return f["encodeBase64Packet"](t, r);
                    var n = t["data"],
                        o = new Uint8Array(n),
                        i = new Uint8Array(1 + n["byteLength"]);
                    i[0] = h[t["type"]];
                    for (var s = 0; s < o["length"]; s++) i[s + 1] = o[s];
                    return r(i["buffer"])
                }(t, e, n);
                if (void 0 !== y && a instanceof y) return function(t, e, r) {
                    if (!e) return f["encodeBase64Packet"](t, r);
                    if (p) return function(t, e, r) {
                        if (!e) return f["encodeBase64Packet"](t, r);
                        var n = new FileReader;
                        return n["onload"] = function() {
                            f["encodePacket"]({
                                type: t["type"],
                                data: n["result"]
                            }, e, !0, r)
                        }, n["readAsArrayBuffer"](t["data"])
                    }(t, e, r);
                    var n = new Uint8Array(1);
                    n[0] = h[t["type"]];
                    var o = new y([n["buffer"], t["data"]]);
                    return r(o)
                }(t, e, n);
                if (a && a["base64"]) return o = t, i = n, s = "b" + f["packets"][o["type"]] + o["data"]["data"], i(s);
                var c = h[t["type"]];
                return void 0 !== t["data"] && (c += r ? u["encode"](String(t["data"]), {
                    strict: !1
                }) : String(t["data"])), n("" + c)
            }, f["encodeBase64Packet"] = function(e, r) {
                var n, o = "b" + f["packets"][e["type"]];
                if (void 0 !== y && e["data"] instanceof y) {
                    var i = new FileReader;
                    return i["onload"] = function() {
                        var t = i["result"]["split"](",")[1];
                        r(o + t)
                    }, i["readAsDataURL"](e["data"])
                }
                try {
                    n = String["fromCharCode"]["apply"](null, new Uint8Array(e["data"]))
                } catch (t) {
                    for (var s = new Uint8Array(e["data"]), a = new Array(s["length"]), c = 0; c < s["length"]; c++) a[c] = s[c];
                    n = String["fromCharCode"]["apply"](null, a)
                }
                return o += btoa(n), r(o)
            }, f["decodePacket"] = function(t, e, r) {
                if (void 0 === t) return d;
                if ("string" == typeof t) {
                    if ("b" === t["charAt"](0)) return f["decodeBase64Packet"](t["substr"](1), e);
                    if (r && !1 === (t = function(t) {
                        try {
                            t = u["decode"](t, {
                                strict: !1
                            })
                        } catch (t) {
                            return !1
                        }
                        return t
                    }(t))) return d;
                    var n = t["charAt"](0);
                    return Number(n) == n && c[n] ? 1 < t["length"] ? {
                        type: c[n],
                        data: t["substring"](1)
                    } : {
                        type: c[n]
                    } : d
                }
                n = new Uint8Array(t)[0];
                var o = l(t, 1);
                return y && "blob" === e && (o = new y([o])), {
                    type: c[n],
                    data: o
                }
            }, f["decodeBase64Packet"] = function(t, e) {
                var r = c[t["charAt"](0)];
                if (!o) return {
                    type: r,
                    data: {
                        base64: !0,
                        data: t["substr"](1)
                    }
                };
                var n = o["decode"](t["substr"](1));
                return "blob" === e && y && (n = new y([n])), {
                    type: r,
                    data: n
                }
            }, f["encodePayload"] = function(t, e, r) {
                "function" == typeof e && (r = e, e = null);
                var n = i(t);
                if (e && n) return y && !p ? f["encodePayloadAsBlob"](t, r) : f["encodePayloadAsArrayBuffer"](t, r);
                if (!t["length"]) return r("0:");
                g(t, function(t, r) {
                    f["encodePacket"](t, !! n && e, !1, function(t) {
                        var e;
                        r(null, (e = t)["length"] + ":" + e)
                    })
                }, function(t, e) {
                    return r(e["join"](""))
                })
            }, f["decodePayload"] = function(t, e, r) {
                if ("string" != typeof t) return f["decodePayloadAsBinary"](t, e, r);
                var n;
                if ("function" == typeof e && (r = e, e = null), "" === t) return r(d, 0, 1);
                for (var o, i, s = "", a = 0, c = t["length"]; a < c; a++) {
                    var u = t["charAt"](a);
                    if (":" === u) {
                        if ("" === s || s != (o = Number(s))) return r(d, 0, 1);
                        if (s != (i = t["substr"](a + 1, o))["length"]) return r(d, 0, 1);
                        if (i["length"]) {
                            if (n = f["decodePacket"](i, e, !1), d["type"] === n["type"] && d["data"] === n["data"]) return r(d, 0, 1);
                            if (!1 === r(n, a + o, c)) return
                        }
                        a += o, s = ""
                    } else s += u
                }
                return "" !== s ? r(d, 0, 1) : void 0
            }, f["encodePayloadAsArrayBuffer"] = function(t, n) {
                if (!t["length"]) return n(new ArrayBuffer(0));
                g(t, function(t, e) {
                    f["encodePacket"](t, !0, !0, function(t) {
                        return e(null, t)
                    })
                }, function(t, e) {
                    var r = e["reduce"](function(t, e) {
                        var r;
                        return t + (r = "string" == typeof e ? e["length"] : e["byteLength"])["toString"]()["length"] + r + 2
                    }, 0),
                        s = new Uint8Array(r),
                        a = 0;
                    return e["forEach"](function(t) {
                        var e = "string" == typeof t,
                            r = t;
                        if (e) {
                            for (var n = new Uint8Array(t["length"]), o = 0; o < t["length"]; o++) n[o] = t["charCodeAt"](o);
                            r = n["buffer"]
                        }
                        s[a++] = e ? 0 : 1;
                        var i = r["byteLength"]["toString"]();
                        for (o = 0; o < i["length"]; o++) s[a++] = parseInt(i[o]);
                        s[a++] = 255;
                        for (n = new Uint8Array(r), o = 0; o < n["length"]; o++) s[a++] = n[o]
                    }), n(s["buffer"])
                })
            }, f["encodePayloadAsBlob"] = function(t, r) {
                g(t, function(t, a) {
                    f["encodePacket"](t, !0, !0, function(t) {
                        var e = new Uint8Array(1);
                        if (e[0] = 1, "string" == typeof t) {
                            for (var r = new Uint8Array(t["length"]), n = 0; n < t["length"]; n++) r[n] = t["charCodeAt"](n);
                            t = r["buffer"], e[0] = 0
                        }
                        var o = (t instanceof ArrayBuffer ? t["byteLength"] : t["size"])["toString"](),
                            i = new Uint8Array(o["length"] + 1);
                        for (n = 0; n < o["length"]; n++) i[n] = parseInt(o[n]);
                        if (i[o["length"]] = 255, y) {
                            var s = new y([e["buffer"], i["buffer"], t]);
                            a(null, s)
                        }
                    })
                }, function(t, e) {
                    return r(new y(e))
                })
            }, f["decodePayloadAsBinary"] = function(t, r, n) {
                "function" == typeof r && (n = r, r = null);
                for (var e = t, o = []; 0 < e["byteLength"];) {
                    for (var i = new Uint8Array(e), s = 0 === i[0], a = "", c = 1; 255 !== i[c]; c++) {
                        if (310 < a["length"]) return n(d, 0, 1);
                        a += i[c]
                    }
                    e = l(e, 2 + a["length"]), a = parseInt(a);
                    var u = l(e, 0, a);
                    if (s) try {
                        u = String["fromCharCode"]["apply"](null, new Uint8Array(u))
                    } catch (t) {
                        var p = new Uint8Array(u);
                        u = "";
                        for (c = 0; c < p["length"]; c++) u += String["fromCharCode"](p[c])
                    }
                    o["push"](u), e = l(e, a)
                }
                var h = o["length"];
                o["forEach"](function(t, e) {
                    n(f["decodePacket"](t, r, !0), e, h)
                })
            }
        }, function(t, e) {
            t["exports"] = Object["keys"] || function(t) {
                var e = [],
                    r = Object["prototype"]["hasOwnProperty"];
                for (var n in t) r["call"](t, n) && e["push"](n);
                return e
            }
        }, function(t, e, r) {
            var i = r(11),
                n = Object["prototype"]["toString"],
                s = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === n["call"](Blob),
                a = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === n["call"](File);
            t["exports"] = function t(e) {
                if (!e || "object" != typeof e) return !1;
                if (i(e)) {
                    for (var r = 0, n = e["length"]; r < n; r++) if (t(e[r])) return !0;
                    return !1
                }
                if ("function" == typeof Buffer && Buffer["isBuffer"] && Buffer["isBuffer"](e) || "function" == typeof ArrayBuffer && e instanceof ArrayBuffer || s && e instanceof Blob || a && e instanceof File) return !0;
                if (e["toJSON"] && "function" == typeof e["toJSON"] && 1 === arguments["length"]) return t(e["toJSON"](), !0);
                for (var o in e) if (Object["prototype"]["hasOwnProperty"]["call"](e, o) && t(e[o])) return !0;
                return !1
            }
        }, function(t, e) {
            var r = {}["toString"];
            t["exports"] = Array["isArray"] || function(t) {
                return "[object Array]" == r["call"](t)
            }
        }, function(t, e) {
            t["exports"] = function(t, e, r) {
                var n = t["byteLength"];
                if (e = e || 0, r = r || n, t["slice"]) return t["slice"](e, r);
                if (e < 0 && (e += n), r < 0 && (r += n), n < r && (r = n), n <= e || r <= e || 0 === n) return new ArrayBuffer(0);
                for (var o = new Uint8Array(t), i = new Uint8Array(r - e), s = e, a = 0; s < r; s++, a++) i[a] = o[s];
                return i["buffer"]
            }
        }, function(t, e) {
            function s() {}
            t["exports"] = function(t, r, n) {
                var o = !1;
                return n = n || s, 0 === (i["count"] = t) ? r() : i;

                function i(t, e) {
                    if (i["count"] <= 0) throw new Error("after called too many times");
                    --i["count"], t ? (o = !0, r(t), r = n) : 0 !== i["count"] || o || r(null, e)
                }
            }
        }, function(t, e) {
            var i, s, a, c = String["fromCharCode"];

            function u(t) {
                for (var e, r, n = [], o = 0, i = t["length"]; o < i;) 55296 <= (e = t["charCodeAt"](o++)) && e <= 56319 && o < i ? 56320 == (64512 & (r = t["charCodeAt"](o++))) ? n["push"](((1023 & e) << 10) + (1023 & r) + 65536) : (n["push"](e), o--) : n["push"](e);
                return n
            }
            function n(t, e) {
                if (55296 <= t && t <= 57343) {
                    if (e) throw Error("Lone surrogate U+" + t["toString"](16)["toUpperCase"]() + " is not a scalar value");
                    return !1
                }
                return !0
            }
            function o(t, e) {
                return c(t >> e & 63 | 128)
            }
            function p(t, e) {
                if (0 == (4294967168 & t)) return c(t);
                var r = "";
                return 0 == (4294965248 & t) ? r = c(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (n(t, e) || (t = 65533), r = c(t >> 12 & 15 | 224), r += o(t, 6)) : 0 == (4292870144 & t) && (r = c(t >> 18 & 7 | 240), r += o(t, 12), r += o(t, 6)), r += c(63 & t | 128)
            }
            function h() {
                if (s <= a) throw Error("Invalid byte index");
                var t = 255 & i[a];
                if (a++, 128 == (192 & t)) return 63 & t;
                throw Error("Invalid continuation byte")
            }
            function f(t) {
                var e, r;
                if (s < a) throw Error("Invalid byte index");
                if (a == s) return !1;
                if (e = 255 & i[a], a++, 0 == (128 & e)) return e;
                if (192 == (224 & e)) {
                    if (128 <= (r = (31 & e) << 6 | h())) return r;
                    throw Error("Invalid continuation byte")
                }
                if (224 == (240 & e)) {
                    if (2048 <= (r = (15 & e) << 12 | h() << 6 | h())) return n(r, t) ? r : 65533;
                    throw Error("Invalid continuation byte")
                }
                if (240 == (248 & e) && 65536 <= (r = (7 & e) << 18 | h() << 12 | h() << 6 | h()) && r <= 1114111) return r;
                throw Error("Invalid UTF-8 detected")
            }
            t["exports"] = {
                version: "2.1.2",
                encode: function(t, e) {
                    for (var r = !1 !== (e = e || {})["strict"], n = u(t), o = n["length"], i = -1, s = ""; ++i < o;) s += p(n[i], r);
                    return s
                },
                decode: function(t, e) {
                    var r = !1 !== (e = e || {})["strict"];
                    i = u(t), s = i["length"], a = 0;
                    for (var n, o = []; !1 !== (n = f(r));) o["push"](n);
                    return function(t) {
                        for (var e, r = t["length"], n = -1, o = ""; ++n < r;) 65535 < (e = t[n]) && (o += c((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), o += c(e);
                        return o
                    }(o)
                }
            }
        }, function(t, e) {
            ! function() {
                "use strict";
                for (var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", h = new Uint8Array(256), t = 0; t < i["length"]; t++) h[i["charCodeAt"](t)] = t;
                e["encode"] = function(t) {
                    var e, r = new Uint8Array(t),
                        n = r["length"],
                        o = "";
                    for (e = 0; e < n; e += 3) o += i[r[e] >> 2], o += i[(3 & r[e]) << 4 | r[e + 1] >> 4], o += i[(15 & r[e + 1]) << 2 | r[e + 2] >> 6], o += i[63 & r[e + 2]];
                    return n % 3 == 2 ? o = o["substring"](0, o["length"] - 1) + "=" : n % 3 == 1 && (o = o["substring"](0, o["length"] - 2) + "=="), o
                }, e["decode"] = function(t) {
                    var e, r, n, o, i, s = .75 * t["length"],
                        a = t["length"],
                        c = 0;
                    "=" === t[t["length"] - 1] && (s--, "=" === t[t["length"] - 2] && s--);
                    var u = new ArrayBuffer(s),
                        p = new Uint8Array(u);
                    for (e = 0; e < a; e += 4) r = h[t["charCodeAt"](e)], n = h[t["charCodeAt"](e + 1)], o = h[t["charCodeAt"](e + 2)], i = h[t["charCodeAt"](e + 3)], p[c++] = r << 2 | n >> 4, p[c++] = (15 & n) << 4 | o >> 2, p[c++] = (3 & o) << 6 | 63 & i;
                    return u
                }
            }()
        }, function(t, e) {
            var n = void 0 !== n ? n : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder && MozBlobBuilder,
                r = function() {
                    try {
                        return 2 === new Blob(["hi"])["size"]
                    } catch (t) {
                        return !1
                    }
                }(),
                o = r && function() {
                    try {
                        return 2 === new Blob([new Uint8Array([1, 2])])["size"]
                    } catch (t) {
                        return !1
                    }
                }(),
                i = n && n["prototype"]["append"] && n["prototype"]["getBlob"];

            function s(t) {
                return t["map"](function(t) {
                    if (t["buffer"] instanceof ArrayBuffer) {
                        var e = t["buffer"];
                        if (t["byteLength"] !== e["byteLength"]) {
                            var r = new Uint8Array(t["byteLength"]);
                            r["set"](new Uint8Array(e, t["byteOffset"], t["byteLength"])), e = r["buffer"]
                        }
                        return e
                    }
                    return t
                })
            }
            function a(t, e) {
                e = e || {};
                var r = new n;
                return s(t)["forEach"](function(t) {
                    r["append"](t)
                }), e["type"] ? r["getBlob"](e["type"]) : r["getBlob"]()
            }
            function c(t, e) {
                return new Blob(s(t), e || {})
            }
            "undefined" != typeof Blob && (a["prototype"] = Blob["prototype"], c["prototype"] = Blob["prototype"]), t["exports"] = r ? o ? Blob : c : i ? a : void 0
        }, function(t, e, r) {
            function n(t) {
                if (t) return function(t) {
                    for (var e in n["prototype"]) t[e] = n["prototype"][e];
                    return t
                }(t)
            }(t["exports"] = n)["prototype"]["on"] = n["prototype"]["addEventListener"] = function(t, e) {
                return this["_callbacks"] = this["_callbacks"] || {}, (this["_callbacks"]["$" + t] = this["_callbacks"]["$" + t] || [])["push"](e), this
            }, n["prototype"]["once"] = function(t, e) {
                function r() {
                    this["off"](t, r), e["apply"](this, arguments)
                }
                return r["fn"] = e, this["on"](t, r), this
            }, n["prototype"]["off"] = n["prototype"]["removeListener"] = n["prototype"]["removeAllListeners"] = n["prototype"]["removeEventListener"] = function(t, e) {
                if (this["_callbacks"] = this["_callbacks"] || {}, 0 == arguments["length"]) return this["_callbacks"] = {}, this;
                var r, n = this["_callbacks"]["$" + t];
                if (!n) return this;
                if (1 == arguments["length"]) return delete this["_callbacks"]["$" + t], this;
                for (var o = 0; o < n["length"]; o++) if ((r = n[o]) === e || r["fn"] === e) {
                    n["splice"](o, 1);
                    break
                }
                return this
            }, n["prototype"]["emit"] = function(t) {
                this["_callbacks"] = this["_callbacks"] || {};
                var e = []["slice"]["call"](arguments, 1),
                    r = this["_callbacks"]["$" + t];
                if (r) for (var n = 0, o = (r = r["slice"](0))["length"]; n < o; ++n) r[n]["apply"](this, e);
                return this
            }, n["prototype"]["listeners"] = function(t) {
                return this["_callbacks"] = this["_callbacks"] || {}, this["_callbacks"]["$" + t] || []
            }, n["prototype"]["hasListeners"] = function(t) {
                return !!this["listeners"](t)["length"]
            }
        }, function(t, e) {
            e["encode"] = function(t) {
                var e = "";
                for (var r in t) t["hasOwnProperty"](r) && (e["length"] && (e += "&"), e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
                return e
            }, e["decode"] = function(t) {
                for (var e = {}, r = t["split"]("&"), n = 0, o = r["length"]; n < o; n++) {
                    var i = r[n]["split"]("=");
                    e[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
                }
                return e
            }
        }, function(t, e) {
            t["exports"] = function(t, e) {
                var r = function() {};
                r["prototype"] = e["prototype"], t["prototype"] = new r, t["prototype"]["constructor"] = t
            }
        }, function(t, e) {
            "use strict";
            var r, n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_" ["split"](""),
                o = 64,
                i = {}, s = 0,
                a = 0;

            function c(t) {
                for (var e = ""; e = n[t % o] + e, 0 < (t = Math["floor"](t / o)););
                return e
            }
            function u() {
                var t = c(+new Date);
                return t !== r ? (s = 0, r = t) : t + "." + c(s++)
            }
            for (; a < o; a++) i[n[a]] = a;
            u["encode"] = c, u["decode"] = function(t) {
                var e = 0;
                for (a = 0; a < t["length"]; a++) e = e * o + i[t["charAt"](a)];
                return e
            }, t["exports"] = u
        }, function(r, i, n) {
            (function(e) {
                function t() {
                    var t;
                    try {
                        t = i["storage"]["debug"]
                    } catch (t) {}
                    return !t && void 0 !== e && "env" in e && (t = e["env"]["DEBUG"]), t
                }(i = r["exports"] = n(23))["log"] = function() {
                    return "object" == typeof console && console["log"] && Function["prototype"]["apply"]["call"](console["log"], console, arguments)
                }, i["formatArgs"] = function(t) {
                    var e = this["useColors"];
                    if (t[0] = (e ? "%c" : "") + this["namespace"] + (e ? " %c" : " ") + t[0] + (e ? "%c " : " ") + "+" + i["humanize"](this["diff"]), !e) return;
                    var r = "color: " + this["color"];
                    t["splice"](1, 0, r, "color: inherit");
                    var n = 0,
                        o = 0;
                    t[0]["replace"](/%[a-zA-Z%]/g, function(t) {
                        "%%" !== t && (n++, "%c" === t && (o = n))
                    }), t["splice"](o, 0, r)
                }, i["save"] = function(t) {
                    try {
                        null == t ? i["storage"]["removeItem"]("debug") : i["storage"]["debug"] = t
                    } catch (t) {}
                }, i["load"] = t, i["useColors"] = function() {
                    if ("undefined" != typeof window && window["process"] && "renderer" === window["process"]["type"]) return !0;
                    if ("undefined" != typeof navigator && navigator["userAgent"] && navigator["userAgent"]["toLowerCase"]()["match"](/(edge|trident)\/(\d+)/)) return !1;
                    return "undefined" != typeof document && document["documentElement"] && document["documentElement"]["style"] && document["documentElement"]["style"]["WebkitAppearance"] || "undefined" != typeof window && window["console"] && (window["console"]["firebug"] || window["console"]["exception"] && window["console"]["table"]) || "undefined" != typeof navigator && navigator["userAgent"] && navigator["userAgent"]["toLowerCase"]()["match"](/firefox\/(\d+)/) && 31 <= parseInt(RegExp["$1"], 10) || "undefined" != typeof navigator && navigator["userAgent"] && navigator["userAgent"]["toLowerCase"]()["match"](/applewebkit\/(\d+)/)
                }, i["storage"] = "undefined" != typeof chrome && void 0 !== chrome["storage"] ? chrome["storage"]["local"] : function() {
                    try {
                        return window["localStorage"]
                    } catch (t) {}
                }(), i["colors"] = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], i["formatters"]["j"] = function(t) {
                    try {
                        return JSON["stringify"](t)
                    } catch (t) {
                        return "[UnexpectedJSONParseError]: " + t["message"]
                    }
                }, i["enable"](t())
            })["call"](i, n(22))
        }, function(t, e) {
            var r, n, o = t["exports"] = {};

            function i() {
                throw new Error("setTimeout has not been defined")
            }
            function s() {
                throw new Error("clearTimeout has not been defined")
            }
            function a(e) {
                if (r === setTimeout) return setTimeout(e, 0);
                if ((r === i || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
                try {
                    return r(e, 0)
                } catch (t) {
                    try {
                        return r["call"](null, e, 0)
                    } catch (t) {
                        return r["call"](this, e, 0)
                    }
                }
            }! function() {
                try {
                    r = "function" == typeof setTimeout ? setTimeout : i
                } catch (t) {
                    r = i
                }
                try {
                    n = "function" == typeof clearTimeout ? clearTimeout : s
                } catch (t) {
                    n = s
                }
            }();
            var c, u = [],
                p = !1,
                h = -1;

            function f() {
                p && c && (p = !1, c["length"] ? u = c["concat"](u) : h = -1, u["length"] && l())
            }
            function l() {
                if (!p) {
                    var t = a(f);
                    p = !0;
                    for (var e = u["length"]; e;) {
                        for (c = u, u = []; ++h < e;) c && c[h]["run"]();
                        h = -1, e = u["length"]
                    }
                    c = null, p = !1,
                    function(e) {
                        if (n === clearTimeout) return clearTimeout(e);
                        if ((n === s || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                        try {
                            n(e)
                        } catch (t) {
                            try {
                                return n["call"](null, e)
                            } catch (t) {
                                return n["call"](this, e)
                            }
                        }
                    }(t)
                }
            }
            function d(t, e) {
                this["fun"] = t, this["array"] = e
            }
            function y() {}
            o["nextTick"] = function(t) {
                var e = new Array(arguments["length"] - 1);
                if (1 < arguments["length"]) for (var r = 1; r < arguments["length"]; r++) e[r - 1] = arguments[r];
                u["push"](new d(t, e)), 1 !== u["length"] || p || a(l)
            }, d["prototype"]["run"] = function() {
                this["fun"]["apply"](null, this["array"])
            }, o["title"] = "browser", o["browser"] = !0, o["env"] = {}, o["argv"] = [], o["version"] = "", o["versions"] = {}, o["on"] = y, o["addListener"] = y, o["once"] = y, o["off"] = y, o["removeListener"] = y, o["removeAllListeners"] = y, o["emit"] = y, o["prependListener"] = y, o["prependOnceListener"] = y, o["listeners"] = function(t) {
                return []
            }, o["binding"] = function(t) {
                throw new Error("process.binding is not supported")
            }, o["cwd"] = function() {
                return "/"
            }, o["chdir"] = function(t) {
                throw new Error("process.chdir is not supported")
            }, o["umask"] = function() {
                return 0
            }
        }, function(t, c, e) {
            function r(t) {
                var n;

                function a() {
                    if (a["enabled"]) {
                        var o = a,
                            t = +new Date,
                            e = t - (n || t);
                        o["diff"] = e, o["prev"] = n, o["curr"] = t, n = t;
                        for (var i = new Array(arguments["length"]), r = 0; r < i["length"]; r++) i[r] = arguments[r];
                        i[0] = c["coerce"](i[0]), "string" != typeof i[0] && i["unshift"]("%O");
                        var s = 0;
                        i[0] = i[0]["replace"](/%([a-zA-Z%])/g, function(t, e) {
                            if ("%%" === t) return t;
                            s++;
                            var r = c["formatters"][e];
                            if ("function" == typeof r) {
                                var n = i[s];
                                t = r["call"](o, n), i["splice"](s, 1), s--
                            }
                            return t
                        }), c["formatArgs"]["call"](o, i), (a["log"] || c["log"] || console["log"]["bind"](console))["apply"](o, i)
                    }
                }
                return a["namespace"] = t, a["enabled"] = c["enabled"](t), a["useColors"] = c["useColors"](), a["color"] = function(t) {
                    var e, r = 0;
                    for (e in t) r = (r << 5) - r + t["charCodeAt"](e), r |= 0;
                    return c["colors"][Math["abs"](r) % c["colors"]["length"]]
                }(t), a["destroy"] = o, "function" == typeof c["init"] && c["init"](a), c["instances"]["push"](a), a
            }
            function o() {
                var t = c["instances"]["indexOf"](this);
                return -1 !== t && (c["instances"]["splice"](t, 1), !0)
            }(c = t["exports"] = r["debug"] = r["default"] = r)["coerce"] = function(t) {
                return t instanceof Error ? t["stack"] || t["message"] : t
            }, c["disable"] = function() {
                c["enable"]("")
            }, c["enable"] = function(t) {
                var e;
                c["save"](t), c["names"] = [], c["skips"] = [];
                var r = ("string" == typeof t ? t : "")["split"](/[\s,]+/),
                    n = r["length"];
                for (e = 0; e < n; e++) r[e] && ("-" === (t = r[e]["replace"](/\*/g, ".*?"))[0] ? c["skips"]["push"](new RegExp("^" + t["substr"](1) + "$")) : c["names"]["push"](new RegExp("^" + t + "$")));
                for (e = 0; e < c["instances"]["length"]; e++) {
                    var o = c["instances"][e];
                    o["enabled"] = c["enabled"](o["namespace"])
                }
            }, c["enabled"] = function(t) {
                if ("*" === t[t["length"] - 1]) return !0;
                var e, r;
                for (e = 0, r = c["skips"]["length"]; e < r; e++) if (c["skips"][e]["test"](t)) return !1;
                for (e = 0, r = c["names"]["length"]; e < r; e++) if (c["names"][e]["test"](t)) return !0;
                return !1
            }, c["humanize"] = e(24), c["instances"] = [], c["names"] = [], c["skips"] = [], c["formatters"] = {}
        }, function(t, e) {
            var o = 36e5,
                i = 864e5;

            function s(t, e, r) {
                if (!(t < e)) return t < 1.5 * e ? Math["floor"](t / e) + " " + r : Math["ceil"](t / e) + " " + r + "s"
            }
            t["exports"] = function(t, e) {
                e = e || {};
                var r, n = typeof t;
                if ("string" === n && 0 < t["length"]) return function(t) {
                    if (100 < (t = String(t))["length"]) return;
                    var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i ["exec"](t);
                    if (!e) return;
                    var r = parseFloat(e[1]);
                    switch ((e[2] || "ms")["toLowerCase"]()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return 315576e5 * r;
                        case "days":
                        case "day":
                        case "d":
                            return r * i;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return r * o;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return 6e4 * r;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return 1000 * r;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return r;
                        default:
                            return
                    }
                }(t);
                if ("number" === n && !1 === isNaN(t)) return e["long"] ? s(r = t, i, "day") || s(r, o, "hour") || s(r, 6e4, "minute") || s(r, 1000, "second") || r + " ms" : function(t) {
                    if (i <= t) return Math["round"](t / i) + "d";
                    if (o <= t) return Math["round"](t / o) + "h";
                    if (6e4 <= t) return Math["round"](t / 6e4) + "m";
                    if (1000 <= t) return Math["round"](t / 1000) + "s";
                    return t + "ms"
                }(t);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON["stringify"](t))
            }
        }, function(r, t, a) {
            (function(n) {
                "use strict";
                var o = a(6),
                    t = a(19);
                r["exports"] = e;
                var i, u = /\n/g,
                    p = /\\n/g;

                function s() {}
                function e(t) {
                    if (o["call"](this, t), this["query"] = this["query"] || {}, !i) {
                        var e = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : {};
                        i = e["___eio"] = e["___eio"] || []
                    }
                    this["index"] = i["length"];
                    var r = this;
                    i["push"](function(t) {
                        r["onData"](t)
                    }), this["query"]["j"] = this["index"], "function" == typeof addEventListener && addEventListener("beforeunload", function() {
                        r["script"] && (r["script"]["onerror"] = s)
                    }, !1)
                }
                t(e, o), e["prototype"]["supportsBinary"] = !1, e["prototype"]["doClose"] = function() {
                    this["script"] && (this["script"]["parentNode"]["removeChild"](this["script"]), this["script"] = null), this["form"] && (this["form"]["parentNode"]["removeChild"](this["form"]), this["form"] = null, this["iframe"] = null), o["prototype"]["doClose"]["call"](this)
                }, e["prototype"]["doPoll"] = function() {
                    var e = this,
                        t = document["createElement"]("script");
                    this["script"] && (this["script"]["parentNode"]["removeChild"](this["script"]), this["script"] = null), t["async"] = !0, t["src"] = this["uri"](), t["onerror"] = function(t) {
                        e["onError"]("jsonp poll error", t)
                    };
                    var r = document["getElementsByTagName"]("script")[0];
                    r ? r["parentNode"]["insertBefore"](t, r) : (document["head"] || document["body"])["appendChild"](t), this["script"] = t, "undefined" != typeof navigator && /gecko/i ["test"](navigator["userAgent"]) && setTimeout(function() {
                        var t = document["createElement"]("iframe");
                        document["body"]["appendChild"](t), document["body"]["removeChild"](t)
                    }, 100)
                }, e["prototype"]["doWrite"] = function(t, e) {
                    var r = this;
                    if (!this["form"]) {
                        var n, o = document["createElement"]("form"),
                            i = document["createElement"]("textarea"),
                            s = this["iframeId"] = "eio_iframe_" + this["index"];
                        o["className"] = "socketio", o["style"]["position"] = "absolute", o["style"]["top"] = "-1000px", o["style"]["left"] = "-1000px", o["target"] = s, o["method"] = "POST", o["setAttribute"]("accept-charset", "utf-8"), i["name"] = "d", o["appendChild"](i), document["body"]["appendChild"](o), this["form"] = o, this["area"] = i
                    }
                    function a() {
                        c(), e()
                    }
                    function c() {
                        if (r["iframe"]) try {
                            r["form"]["removeChild"](r["iframe"])
                        } catch (t) {
                            r["onError"]("jsonp polling iframe removal error", t)
                        }
                        try {
                            var t = '<iframe src=javascript:0 name=' + r["iframeId"] + '>';
                            n = document["createElement"](t)
                        } catch (t) {
                            (n = document["createElement"]("iframe"))["name"] = r["iframeId"], n["src"] = "javascript:0"
                        }
                        n["id"] = r["iframeId"], r["form"]["appendChild"](n), r["iframe"] = n
                    }
                    this["form"]["action"] = this["uri"](), c(), t = t["replace"](p, "\\m"), this["area"]["value"] = t["replace"](u, "\\n");
                    try {
                        this["form"]["submit"]()
                    } catch (t) {}
                    this["iframe"]["attachEvent"] ? this["iframe"]["onreadystatechange"] = function() {
                        "complete" === r["iframe"]["readyState"] && a()
                    } : this["iframe"]["onload"] = a
                }
            })["call"](t, function() {
                return this
            }())
        }, function(t, e, r) {
            "use strict";
            var n, o, i = r(7),
                s = r(8),
                a = r(18),
                c = r(19),
                u = r(20),
                p = r(21)("engine.io-client:websocket");
            if ("undefined" == typeof self) try {
                o = r(27)
            } catch (t) {} else n = self["WebSocket"] || self["MozWebSocket"];
            var h = n || o;

            function f(t) {
                t && t["forceBase64"] && (this["supportsBinary"] = !1), this["perMessageDeflate"] = t["perMessageDeflate"], this["usingBrowserWebSocket"] = n && !t["forceNode"], this["protocols"] = t["protocols"], this["usingBrowserWebSocket"] || (h = o), i["call"](this, t)
            }
            c(t["exports"] = f, i), f["prototype"]["name"] = "websocket", f["prototype"]["supportsBinary"] = !0, f["prototype"]["doOpen"] = function() {
                if (this["check"]()) {
                    var t = this["uri"](),
                        e = this["protocols"],
                        r = {
                            agent: this["agent"],
                            perMessageDeflate: this["perMessageDeflate"]
                        };
                    r["pfx"] = this["pfx"], r["key"] = this["key"], r["passphrase"] = this["passphrase"], r["cert"] = this["cert"], r["ca"] = this["ca"], r["ciphers"] = this["ciphers"], r["rejectUnauthorized"] = this["rejectUnauthorized"], this["extraHeaders"] && (r["headers"] = this["extraHeaders"]), this["localAddress"] && (r["localAddress"] = this["localAddress"]);
                    try {
                        this["ws"] = this["usingBrowserWebSocket"] && !this["isReactNative"] ? e ? new h(t, e) : new h(t) : new h(t, e, r)
                    } catch (t) {
                        return this["emit"]("error", t)
                    }
                    void 0 === this["ws"]["binaryType"] && (this["supportsBinary"] = !1), this["ws"]["supports"] && this["ws"]["supports"]["binary"] ? (this["supportsBinary"] = !0, this["ws"]["binaryType"] = "nodebuffer") : this["ws"]["binaryType"] = "arraybuffer", this["addEventListeners"]()
                }
            }, f["prototype"]["addEventListeners"] = function() {
                var e = this;
                this["ws"]["onopen"] = function() {
                    e["onOpen"]()
                }, this["ws"]["onclose"] = function() {
                    e["onClose"]()
                }, this["ws"]["onmessage"] = function(t) {
                    e["onData"](t["data"])
                }, this["ws"]["onerror"] = function(t) {
                    e["onError"]("websocket error", t)
                }
            }, f["prototype"]["write"] = function(t) {
                var n = this;
                this["writable"] = !1;
                for (var o = t["length"], e = 0, r = o; e < r; e++)! function(r) {
                    s["encodePacket"](r, n["supportsBinary"], function(t) {
                        if (!n["usingBrowserWebSocket"]) {
                            var e = {};
                            if (r["options"] && (e["compress"] = r["options"]["compress"]), n["perMessageDeflate"])("string" == typeof t ? Buffer["byteLength"](t) : t["length"]) < n["perMessageDeflate"]["threshold"] && (e["compress"] = !1)
                        }
                        try {
                            n["usingBrowserWebSocket"] ? n["ws"]["send"](t) : n["ws"]["send"](t, e)
                        } catch (t) {
                            p("websocket closed before onclose event")
                        }--o || i()
                    })
                }(t[e]);

                function i() {
                    n["emit"]("flush"), setTimeout(function() {
                        n["writable"] = !0, n["emit"]("drain")
                    }, 0)
                }
            }, f["prototype"]["onClose"] = function() {
                i["prototype"]["onClose"]["call"](this)
            }, f["prototype"]["doClose"] = function() {
                void 0 !== this["ws"] && this["ws"]["close"]()
            }, f["prototype"]["uri"] = function() {
                var t = this["query"] || {}, e = this["secure"] ? "wss" : "ws",
                    r = "";
                return this["port"] && ("wss" === e && 443 !== Number(this["port"]) || "ws" === e && 80 !== Number(this["port"])) && (r = ":" + this["port"]), this["timestampRequests"] && (t[this["timestampParam"]] = u()), this["supportsBinary"] || (t["b64"] = 1), (t = a["encode"](t))["length"] && (t = "?" + t), e + "://" + (-1 !== this["hostname"]["indexOf"](":") ? "[" + this["hostname"] + "]" : this["hostname"]) + r + this["path"] + t
            }, f["prototype"]["check"] = function() {
                return !(!h || "__initialize" in h && this["name"] === f["prototype"]["name"])
            }
        }, function(t, e) {}, function(t, e) {
            var n = []["indexOf"];
            t["exports"] = function(t, e) {
                if (n) return t["indexOf"](e);
                for (var r = 0; r < t["length"]; ++r) if (t[r] === e) return r;
                return -1
            }
        }, function(t, e) {
            var a = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                c = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
            t["exports"] = function(t) {
                var e = t,
                    r = t["indexOf"]("["),
                    n = t["indexOf"]("]"); - 1 != r && -1 != n && (t = t["substring"](0, r) + t["substring"](r, n)["replace"](/:/g, ";") + t["substring"](n, t["length"]));
                for (var o = a["exec"](t || ""), i = {}, s = 14; s--;) i[c[s]] = o[s] || "";
                return -1 != r && -1 != n && (i["source"] = e, i["host"] = i["host"]["substring"](1, i["host"]["length"] - 1)["replace"](/;/g, ":"), i["authority"] = i["authority"]["replace"]("[", "")["replace"]("]", "")["replace"](/;/g, ":"), i["ipv6uri"] = !0), i
            }
        }])
    });
    CFilter = function CFilter(engine, active) {
        this["engine"] = engine;
        this["active"] = active === true ? true : false
    };
    CFilterCapsLock = function CFilterCapsLock(engine, active) {
        CFilter["call"](this, engine, active);
        this["minLength"] = 12;
        this["minRatio"] = .8
    };
    CFilterCapsLock["prototype"] = new CFilter;
    CFilterCapsLock["prototype"]["getRatio"] = function(text) {
        text = text["escapeDiacritics"]();
        var upper = text["replace"](/([^A-Z])/g, "")["length"];
        var lower = text["replace"](/([^a-z])/g, "")["length"];
        var total = lower + upper;
        return total == 0 ? 0 : upper / total
    };
    CFilterCapsLock["prototype"]["parse"] = function(msg) {
        if (msg["length"] >= this["minLength"] && this["getRatio"](msg) >= this["minRatio"]) msg = msg["toLowerCase"]();
        return msg
    };
    CFilterCapsLock["prototype"]["send"] = function(data) {
        if (typeof data["s"] != "string" || data["s"] == "") return false;
        data["s"] = this["parse"](data["s"]);
        return true
    };
    CFilterCapsLock["prototype"]["recv"] = function(data) {
        if (typeof data["d"] != "string" || data["d"] == "") return false;
        data["d"] = this["parse"](data["d"]);
        return true
    };
    CFilterXWords = function CFilterXWords(engine, active, empty) {
        CFilter["call"](this, engine, active);
        if (!empty) {
            this["db"] = {
                "(k|q|g).u.r.w": "ku**",
                "h.u.j": "h*j",
                "p.i.e.r.d.o.l": "pi***ol",
                "p.i.z.d.a": "pi*da",
                "w.y.p.i.e.r.d.a.l.a.j": "w*********j",
                "s.p.i.e.r.d.a.l.a.j": "s********j",
                "s.s.i.j": "ss*j",
                "j.e.b": "j*b",
                "l.e.s.z.c.z.u": "le**czu",
                "ś.m.i.e.c.i.u": "ś***ciu",
                "k.u.t.a.s.i.e": "ku**sie",
                "k.u.t.a.s.a": "ku**sa",
                "s.z.m.a.t.o": "sz**to"
            };
            this["convert"](true)
        }
    };
    CFilterXWords["prototype"] = new CFilter;
    CFilterXWords["prototype"]["convert"] = function(formatDots) {
        if (formatDots) {
            for (var index in this["db"]) {
                var newIndex = index["replace"](/[\.]/g, "([^a-zA-Z0-9])?");
                this["db"][newIndex] = this["db"][index];
                delete this["db"][index]
            }
        }
        var temp = [];
        for (var index in this["db"]) {
            temp["push"]({
                r: new RegExp(index, "gi"),
                c: this["db"][index]
            })
        }
        this["db"] = temp
    };
    CFilterXWords["prototype"]["send"] = function(data) {
        if (typeof data["s"] != "string" || data["s"] == "") return false;
        for (var i = 0; i < this["db"]["length"]; i++) {
            data["d"] = data["d"]["replace"](this["db"][i]["r"], this["db"][i]["c"]);
            data["s"] = data["s"]["replace"](this["db"][i]["r"], this["db"][i]["c"])
        }
        return true
    };
    CFilterXWords["prototype"]["recv"] = function(data) {
        if (typeof data["d"] != "string" || data["d"] == "") return false;
        for (var i = 0; i < this["db"]["length"]; i++) data["d"] = data["d"]["replace"](this["db"][i]["r"], this["db"][i]["c"]);
        return true
    };
    CFilterAutocorrection = function CFilterAutocorrection(engine, active) {
        CFilterXWords["call"](this, engine, active, true);
        this["db"] = {
            "wejć ": "wejdź ",
            "twuj ": "twój ",
            "głópi ": "głupi ",
            "ktury ": "który ",
            "durzo ": "dużo ",
            "jakje ": "jakie ",
            " hyba": " chyba",
            " bende ": " będę ",
            " jag ": " jak ",
            " stauo ": " stało ",
            " nje ": " nie ",
            " muj ": " mój ",
            " muw ": " mów ",
            "głuwn": "główn",
            "szókam": "szukam",
            "poszókuje": "poszukuje",
            "pszybyłem": "przybyłem",
            "pszegrać": "przegrać",
            "napszykład": "na przykład",
            wszendzie: "wszędzie",
            skszywdzili: "skrzywdzili",
            "pszeprasz(u|a)m": "przepraszam",
            chciau: "chciał",
            "właźnie": "właśnie",
            ciongnij: "ciągnij",
            karzdy: "każdy",
            rurznego: "różnego",
            "napiż": "napisz",
            " rzal ": " żal ",
            " tag ": " tak "
        };
        this["convert"](false)
    };
    CFilterAutocorrection["prototype"] = new CFilterXWords(undefined, false, true);
    CFilterG = function CFilterG(engine, active) {
        CFilter["call"](this, engine, active);
        this["db"] = ["(k)(ara|ura|ro)(chan|chen)(.org)?", "tinycha(t|cie)", "poznawajk(a)?(.pl)?", "(poz)(na(jawka|jka|warki|warka|wajce)|awajka)(.pl)?", "czatruletka(.| .|. | . )pl", "wywiader.pl", "justblahblah", "czatlos(.pl)?", "opisz-mnie.pl", "ruletkaczat.hitowy.pl", "own3d.es.prv.pl", "tnij.(com|org)", "tinyurl.com", "shortyy.net", "spikeria", "shmooze", "talk.io"];
        for (var i = 0; i < this["db"]["length"]; i++) this["db"][i] = new RegExp(this["db"][i], "gi")
    };
    CFilterG["prototype"] = new CFilterG(undefined, false);
    CFilterG["prototype"]["send"] = function(data) {
        if (typeof data["s"] != "string" || data["s"] == "") return false;
        for (var i = 0; i < this["db"]["length"]; i++) data["s"] = data["s"]["replace"](this["db"][i], "");
        return true
    };
    CFilterG["prototype"]["recv"] = function(data) {
        if (typeof data["d"] != "string" || data["d"] == "") return false;
        for (var i = 0; i < this["db"]["length"]; i++) data["d"] = data["d"]["replace"](this["db"][i], "");
        return true
    };
    CFilterSX = function CFilterSX(engine, active) {
        CFilter["call"](this, engine, active);
        this["findHelpersRegExp"] = /\<([a-zA-Z0-9\-]+)\>/gi;
        this["findCollectionsRegExp"] = /\<\*([a-zA-Z0-9\-]+)\*\>/gi;
        this["db"] = [];
        this["helpers"] = {};
        this["collections"] = {};
        this["timestamps"] = {};
        this["alerts"] = {};
        this["addConfig"] = {
            testType: "f",
            alertId: "none",
            cleanDisplay: false,
            cleanSend: false
        };
        this["fillData"]()
    };
    CFilterSX["prototype"] = new CFilter;
    CFilterSX["prototype"]["esc"] = function(str, delimiter) {
        return (str + "")["replace"](new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\" + (delimiter || "") + "-]", "g"), "\\$&")
    };
    CFilterSX["prototype"]["compileNegBehind"] = function(str, noReverse) {
        str = this["applyCollections"](str);
        var splited = str["split"]("|");
        str = "^(";
        for (var i = 0; i < splited["length"]; i++) {
            str += noReverse ? splited[i] : splited[i]["reverse"]();
            if (i != splited["length"] - 1) str += "|"
        }
        return str + ")"
    };
    CFilterSX["prototype"]["addConvertNegBehind"] = function(neg) {
        var splited = neg["split"]("-*-");
        if (splited["length"] == 1) return new RegExp(this["compileNegBehind"](neg, false), "");
        return {
            behind: new RegExp(this["compileNegBehind"](splited[0], false), ""),
            after: new RegExp(this["compileNegBehind"](splited[1], true), "")
        }
    };
    CFilterSX["prototype"]["add"] = function(behind, id, timestampId, regexp, negBehind) {
        var addedException = false;
        try {
            regexp = this["applyHelpers"](regexp);
            regexp = this["applyCollections"](regexp);
            if (typeof negBehind == "string") behind = false;
            if (behind) {
                for (var target in negBehind) {
                    if (typeof negBehind[target] == "string") negBehind[target] = this["addConvertNegBehind"](negBehind[target]);
                    else {
                        for (var i = 0; i < negBehind[target]["length"]; i++) negBehind[target][i] = this["addConvertNegBehind"](negBehind[target][i]);
                        negBehind[target]["arr"] = true
                    }
                }
            }
            var regexpCompiled = new RegExp(regexp, "g")
        } catch (e) {
            addedException = true
        } finally {
            if (addedException == false) {
                this["db"]["push"]({
                    testType: this["addConfig"]["testType"],
                    id: id,
                    tid: timestampId,
                    aid: this["addConfig"]["alertId"],
                    behind: behind,
                    reg: regexpCompiled,
                    nreg: behind ? negBehind : undefined,
                    cleanDisplay: this["addConfig"]["cleanDisplay"],
                    cleanSend: this["addConfig"]["cleanSend"]
                })
            } else {}
        }
    };
    CFilterSX["prototype"]["setAddConfig"] = function(key, val) {
        this["addConfig"][key] = val
    };
    CFilterSX["prototype"]["helper"] = function(name, helper) {
        helper = this["applyHelpers"](helper);
        this["helpers"][name] = helper
    };
    CFilterSX["prototype"]["applyHelpers"] = function(str) {
        var present = this["findHelpersRegExp"]["multipleExec"](str);
        for (var i = 0; i < present["length"]; i += 2) {
            var name = present[i + 1]["substr"](1, present[i + 1]["length"] - 2);
            if (this["helpers"][name]) str = str["replace"](new RegExp("\\<" + name + "\\>", "gi"), this["helpers"][name]);
            else {}
        }
        return str
    };
    CFilterSX["prototype"]["applyCollections"] = function(str) {
        var present = this["findCollectionsRegExp"]["multipleExec"](str);
        for (var i = 0; i < present["length"]; i += 2) {
            var name = present[i + 1]["substr"](2, present[i + 1]["length"] - 4);
            str = str["replace"](new RegExp("\\<\\*" + name + "\\*\\>", "gi"), this["build"](name))
        }
        return str
    };
    CFilterSX["prototype"]["complete"] = function(name, element) {
        if (!this["collections"][name]) this["collections"][name] = [];
        this["collections"][name]["push"](element)
    };
    CFilterSX["prototype"]["build"] = function(name) {
        if (this["collections"][name]) return this["collections"][name]["join"]("|");
        else {}
        return "dangerouspeaceofregexerrorlolwtfthisregexnevergonnahappenlolwut"
    };
    CFilterSX["prototype"]["testString"] = function(data) {
        for (var i = 0; i < this["db"]["length"]; i++) {
            var strToTest = data[this["db"][i]["testType"]];
            var matched = this["testStringOne"](this["db"][i], strToTest);
            if (matched !== false) {
                this["detected"](data, matched, strToTest, this["db"][i]);
                return true
            }
        }
        return false
    };
    CFilterSX["prototype"]["negTest"] = function(neg, str, index, matched) {
        if (!neg["arr"]) {
            var behindRev = str["substr"](0, index)["reverse"]();
            if (!neg["after"]) {
                return neg["clearTest"](behindRev)
            } else {
                var after = str["substr"](index + matched["length"], str["length"] - (index + matched["length"]));
                return neg["behind"]["clearTest"](behindRev) && neg["after"]["clearTest"](after)
            }
        } else {
            for (var i = 0; i < neg["length"]; i++) {
                if (this["negTest"](neg[i], str, index, matched)) return true
            }
        }
        return false
    };
    CFilterSX["prototype"]["testStringOne"] = function(one, str) {
        if (this["stillActive"](one)) {
            if (one["behind"]) {
                var occs = one["reg"]["multipleExec"](str);
                for (var i = 0; i < occs["length"]; i += 2) {
                    var index = occs[i];
                    var guilty = true;
                    if (index != 0) {
                        for (var target in one["nreg"]) {
                            var indexOfTarget = occs[i + 1]["indexOf"](target);
                            if (indexOfTarget != -1) {
                                if (this["negTest"](one["nreg"][target], str, index + indexOfTarget, occs[i + 1])) {
                                    guilty = false;
                                    break
                                }
                            } else continue
                        }
                    }
                    if (guilty) return occs[i + 1]
                }
            } else {
                var matched = str["match"](one["reg"]);
                if (matched !== null) return matched
            }
        }
        return false
    };
    CFilterSX["prototype"]["detected"] = function(data, matched, source, one) {
        if (one["alertId"] != "none") {
            data["alert"] = this["alerts"][one["aid"]]
        }
        this["engine"]["client"]["sendFilterLog"](one["id"], data["s"]);
        if (one["cleanDisplay"] && data["d"]) data["d"] = "";
        if (one["cleanSend"] && data["s"]) data["s"] = ""
    };
    CFilterSX["prototype"]["stillActive"] = function(one) {
        return this["engine"]["client"]["getThacStartedTime"]() !== -1 && this["engine"]["client"]["getTimeSinceThacStarted"]() <= this["timestamps"][one["tid"]]
    };
    CFilterSX["prototype"]["send"] = function(data) {
        if (typeof data["f"] != "string" || data["f"] == "") return false;
        this["testString"](data);
        return true
    };
    CFilterSX["prototype"]["fillData"] = function() {
        this["timestamps"]["time1"] = 1000 * 60 * 1;
        this["timestamps"]["time2"] = 1000 * 60 * 2;
        this["timestamps"]["time2.5"] = 1000 * 60 * 3;
        this["timestamps"]["time3"] = 1000 * 60 * 4;
        this["timestamps"]["time4"] = 1000 * 60 * 5;
        this["timestamps"]["time5"] = 1000 * 60 * 15;
        this["timestamps"]["time6"] = 1000 * 60 * 30;
        this["timestamps"]["4ever"] = 1000 * 60 * 60 * 24 * 99;
        this["alerts"]["illegal"] = "Treść zablokowana na początku rozmowy w trosce o bezpieczeństwo użytkowników. Jeśli uważasz że to błąd i treść nie powinna być zablokowana, być może tak jest. Niezwłocznie zgłoś to nam pod adres emailowy: " + this["engine"]["getAdminEmail"]();
        this["alerts"]["fake-fb"] = "Link do profilu na Facebook wydaje się być fałszywy. Jeśli uważasz, że to błąd i link jest poprawny - zgłoś problem pod adres emailowy: " + this["engine"]["getAdminEmail"]();
        this["alerts"]["one-line"] = "Na początku rozmowy staraj się pisać rozbudowane wiadomości i w jednej linii. Jeśli uważasz że ten komunikat jest błędem, powiadom nas pod adresem email: " + this["engine"]["getAdminEmail"]();
        this["complete"]("ads", "chatroulete");
        this["complete"]("ads", "wapciopl");
        this["complete"]("ads", "wczatpl");
        this["complete"]("ads", "polskiczat(kropka)?pl");
        this["complete"]("ads", "czatunio");
        this["complete"]("ads", "pozna(waj(ka|ce)|jce|warka|jawka)|poznwajka");
        this["complete"]("ads", "mczat(?!ow)");
        this["complete"]("ads", "omegle");
        this["complete"]("ads", "(cz(a(te|t|e|ci)|te)k|czetek)pl");
        this["complete"]("ads", "(i|ani|wejdz|odwiedz|zobacz|na|z|^)(czat(k(u|owi|a)|ek))");
        this["complete"]("ads", "etenpl");
        this["complete"]("ads", "czatruletkapl");
        this["complete"]("ads", "spytajmniepl");
        this["complete"]("ads", "randomstrangerspl");
        this["complete"]("cipa", "chy");
        this["complete"]("cipa", "dne");
        this["complete"]("cipa", "(lic|lca|lco)");
        this["complete"]("cipa", "nal");
        this["complete"]("cipa", "(rel|rep)");
        this["complete"]("cipa", "(sje|suj|sow)");
        this["complete"]("cipa", "ula");
        this["complete"]("cipa", "lusz");
        this["complete"]("cipa", "pier?z");
        this["complete"]("cipa", "restron");
        this["complete"]("cipa", "tent");
        this["complete"]("cipa", "trza");
        this["complete"]("cipa", "trzym");
        this["complete"]("cipa", "kowal");
        this["complete"]("cipa", "rtner");
        this["complete"]("cipa", "ulina");
        this["complete"]("cipa", "trzec");
        this["complete"]("cipa", "telnia");
        this["complete"]("cipa", "mpers");
        this["complete"]("cipa", "scdo");
        this["complete"]("cipa", "ulin");
        this["complete"]("cipe", "ryk");
        this["complete"]("cipe", "wno");
        this["complete"]("cipe", "(knal|knie)");
        this["complete"]("cipe", "wnie");
        this["complete"]("cipo", "c(z[ut])");
        this["complete"]("cipo", "d(a[cjlm]|et)");
        this["complete"]("cipo", "(jdz|jsc)");
        this["complete"]("cipo", "kaz");
        this["complete"]("cipo", "lec");
        this["complete"]("cipo", "m(ag|[ou]c)");
        this["complete"]("cipo", "(t[ey]m)");
        this["complete"]("cipo", "wuem");
        this["complete"]("cipo", "w([ij]e|od|ol)");
        this["complete"]("cipo", "z(na|yc)");
        this["complete"]("cipo", "d(ejs|esl|oku|usz)");
        this["complete"]("cipo", "face");
        this["complete"]("cipo", "(ma[ls]u)");
        this["complete"]("cipo", "(mnik)");
        this["complete"]("cipo", "(m(or?ze|oge|ogl))");
        this["complete"]("cipo", "noca");
        this["complete"]("cipo", "l(ajk|ski)");
        this["complete"]("cipo", "pros");
        this["complete"]("cipo", "(radz|rozm)");
        this["complete"]("cipo", "s(lac|zlo|lub)");
        this["complete"]("cipo", "tape");
        this["complete"]("cipo", "tych");
        this["complete"]("cipo", "wyjs");
        this["complete"]("cipo", "(woli|win[oai]|wybi)");
        this["complete"]("cipo", "zdro");
        this["complete"]("cipo", "dpowi");
        this["complete"]("cipo", "drzad");
        this["complete"]("cipo", "dawa[cl]");
        this["complete"]("cipo", "datki");
        this["complete"]("cipo", "dczas");
        this["complete"]("cipo", "dziek");
        this["complete"]("cipo", "(pierwsz|drugi|trzeci|czwart|piat|szost|siodm|osm|dziewiat)ej");
        this["complete"]("cipo", "mazac");
        this["complete"]("cipo", "gadac");
        this["complete"]("cipo", "jeczy");
        this["complete"]("cipo", "liczk");
        this["complete"]("cipo", "lizac");
        this["complete"]("cipo", "psul");
        this["complete"]("cipo", "prawi");
        this["complete"]("cipo", "pisac");
        this["complete"]("cipo", "powiad");
        this["complete"]("cipo", "kar?ze");
        this["complete"]("cipo", "k[as]z(ac|ywac)");
        this["complete"]("cipo", "litycz");
        this["complete"]("cipo", "midor");
        this["complete"]("cipo", "trzeb");
        this["complete"]("cipo", "wrotu");
        this["complete"]("cipo", "spiew");
        this["complete"]("cipo", "(sluz(e|yl))");
        this["complete"]("cipo", "lecil");
        this["complete"]("cipo", "zanim");
        this["complete"]("cipo", "zniej");
        this["complete"]("cipo", "cis(n(ac|e|al|ol)|kac)");
        this["complete"]("cipo", "ciagne");
        this["complete"]("cipo", "c?hodzic");
        this["complete"]("cipo", "czatek");
        this["complete"]("cipo", "czekac");
        this["complete"]("cipo", "lozen");
        this["complete"]("cipo", "pytani[ue]");
        this["complete"]("cipo", "przytu");
        this["complete"]("cipo", "psocic");
        this["complete"]("cipo", "rzadnie");
        this["complete"]("cipo", "rabias");
        this["complete"]("cipo", "wyslac");
        this["complete"]("cipo", "zw(olil?|ala)");
        this["complete"]("cipo", "gadajmy");
        this["complete"]("cipo", "masowac");
        this["complete"]("cipo", "sluszny");
        this["complete"]("cipo", "trzymac");
        this["complete"]("cipo", "swiecic");
        this["complete"]("cipo", "winien");
        this["complete"]("cipo", "wiadasz");

        this["complete"]("cipo", "wiedzie");
        this["complete"]("cipo", "wysylac");
        this["complete"]("cipo", "poludnie");
        this["complete"]("cipo", "(towarzyszy[lc])");
        this["complete"]("cipo", "coto(ro|pi|c?hce)");
        this["complete"]("cipy", "(ta[cjnm])");
        this["complete"]("cipy", "nknie");
        this["complete"]("anal", "awce");
        this["complete"]("anal", "adowac");
        this["complete"]("anal", "ece");
        this["complete"]("anal", "egon");
        this["complete"]("anal", "og");
        this["complete"]("anal", "(adn|a[jp]k|apt|ata)");
        this["complete"]("anal", "boj");
        this["complete"]("anal", "(ec[oz]|edz|ega|ekc|em[ao]|eok|epo|e[tz]y)");
        this["complete"]("anal", "(fbe|feb)");
        this["complete"]("anal", "(i[kt]e|iz[aeouy])");
        this["complete"]("anal", "(o[tw]e)");
        this["complete"]("anal", "yzw");
        this["complete"]("anal", "alia");
        this["complete"]("anal", "(ebez|enie|esne)");
        this["complete"]("anal", "fab");
        this["complete"]("anal", "aske");
        this["complete"]("anal", "iscie");
        this["complete"]("anal", "ityk");
        this["complete"]("anal", "ozku");
        this["complete"]("anal", "(ubel|udz[ik]|ukas|uzie)");
        this["complete"]("anal", "(ajcie|azars)");
        this["complete"]("anal", "(echlo|esnik|eszcz)");
        this["complete"]("anal", "(ityka|ityke)");
        this["complete"]("anal", "terna");
        this["complete"]("anal", "edziew");
        this["complete"]("anal", "ubie(kosz)");
        this["complete"]("oral", "e$");
        this["complete"]("oral", "(a[nmt]|em)");
        this["complete"]("oral", "(k[aeio])");
        this["complete"]("oral", "(adn|ask|atw)");
        this["complete"]("oral", "(ebl|eca|eco|eci|ecz|egl|efa|eit|eja|eje|eju|eki|ena|eno|eog|eok|epo|eps|esi|esp|eta|ete|eto|ety|ews|eza|eze|ezy)");
        this["complete"]("oral", "(icz|iga|ige)");
        this["complete"]("oral", "(ina|ive)");
        this["complete"]("oral", "ond");
        this["complete"]("oral", "(sk[aiu])");
        this["complete"]("oral", "(ub[mku]|umo)");
        this["complete"]("oral", "(zak|zcb|zcie)");
        this["complete"]("oral", "i(cji|maz|tra)");
        this["complete"]("oral", "(ebar|edla|ejak|ejuz|enad|enie|epie|eprz|esko|etez|etro|etwo|ewik)");
        this["complete"]("oral", "niak");
        this["complete"]("oral", "(udzi|udze|ugre)");
        this["complete"]("oral", "adnie");
        this["complete"]("oral", "e(chyb|czka)");
        this["complete"]("oral", "(em)?(pole)");
        this["complete"]("oral", "izowa");
        this["complete"]("oral", "e(dzis|kcja|ucze|wski|zara)");
        this["complete"]("oral", "(izacj|iziem)");
        this["complete"]("oral", "odowa");
        this["complete"]("oral", "(elubie|eprzyn)");
        this["complete"]("oral", "ubi(sz$|m|we|ala|blu|chw|eal|ery|mil|mot|pil|pis|rap|ro[zmck]|sie|slu|smi|sob|spo|tak|wsz|czyt|grac|popi|jesc|spo|wci)");
        this["complete"]("sek", "t[ey]|re|at|un|to|w[aeo]");
        var not_horny_collection = ["kolejny|kolejnym|nastepny|nastepnym|znowu|znowujakis|kolejnaosobaze|kolejnaosobaz", "sami|same|samych", "jeszczewiecej", "nic|nei|nie|neijestem|niejestem|nielubie|nielubicie|nieszukam|nieposzukuje|niemamochotyna|niemamchecina|niechce|niedaje|nieudostepniam|niewysylam|niepytaj|niepytajczy", "niemamochotypisacna|niemamochotynapisanie", "niejestemaztaka|niejestemaztaki", "niejestemzadnym|niejestemzadna", "niemowzejestes|niepiszejestes|niegadajzejestes", "powiedzeniejestes", "niemozebyc", "niezadne|niezadnejakies|niejakies", "zaden|zadne|zadny|zadnych|zadnej", "nielubiejeslichlopakjest|nielubiejakchlopakjest", "gin|wypad|spadaj|spierdalaj|spieprzaj|nara|kurwiaj|won|debilei", "pierdolony|glupi|papranym|jebany", "policje|policja", "niesatylkopotoabyo|niesapotoabyo|niesatylkopotobyo|niesapotobyo", "lic|myslis|slu|ira|rud|yra|prze|lichodziotoczy|lichodziczy|dami|niespisz", "jakmasz", "pseudo|pro|znas|mas", "ztychcoszukaja|ztychcotylkoszukaja|ztychcoszukajatylko", "ztychcochca|ztychcotylkochca|ztychcochcatylko", "nieztychodszukania|nieztychodszukaniatylko", "zlyadres|zuyadres", "niewymieniamsie|niewymieniesie", "czyjestem", "nalezyszdotych|jestesztych", "niezalezyminajakis", "niebede"];
        this["complete"]("not-horny", not_horny_collection["join"]("|"));
        this["complete"]("not-horny-mistake", "chocia|mile|lac");
        this["complete"]("not-fap", "wa|spodzie|probo|prubo|poch|poh|zacho");
        this["helper"]("gender-person", "(m|k|(m[e3](ns)?zczy[zs]n|k[o0]bi[e3]t|dzi[e3][vwf]czyn)[aey]|chl[o0]p(ak(i|[uo0]w)?)?|k[o0]l[e3](s?zank|g)([ae3i]|[uo0]w)|las([e3](k|czki)|ki)|partn[e3]r(a|k[e3i])?|m?alol(at([ya]|ki)|et(niej|niego)))");
        this["helper"]("sex-1", "(e)*(s[e3]x?(gz|zx|ksz?)(?!ualizm|ualnosc)|(wy)*(rucha|bzyka|dupcz?(e|3|y)|dyman))(ni[e3]|niu|[ij][e3]|ik|my|i)*(sie)*");
        this["helper"]("sex-2", "(s[e3](k?xs?|x?(ks|gz)|zx))(?!own)");
        this["helper"]("sex-3", "(gwalcic|jebac|wypierdolic)");
        this["helper"]("sex-activity", "(up(r)?awia(my?|c|ni[e3]|l[ae][sm]?|ja|sz)|robi(e|my|c|enie|l[ae][sm]|a|sz)|interesuje(sz|cie|sie|my)*)");
        this["helper"]("sex-adjectives", "((szyb(k[iy]|y)|br[uy]talny|ostry|lagodny|delikatny|dziki|namietny|niezapomniany|upojny|[vw]irtual(ny)?|pis(em|a)(ny)|tekstowy|internetow(y|ego)|real(istyczny|ny))m?)");
        this["helper"]("sex-with-prefix", "<sex-adjectives>*<sex-1>");
        this["helper"]("sex-prefix-sufix", "(<sex-1>|<sex-adjectives>+<sex-1>|<sex-1><sex-adjectives>+)");
        this["helper"]("horny-1", "(([z2](([o0]+|[b6]+[ij]*|y){1,5}(z?c[zxi]+)([o0]+)?)|na?pa((l[o0]+x?|na$))(?!usz))([nm]([e3]([ji]|g[o0]+)?|[ay])|usz?[e3](cz)?e?[kg]a?)|nap(loney|aej|aloj|aonej)|zoczonj|zbo(nj|czo?))");
        this["helper"]("horny-2", "(<horny-1>|ni[e3]grz[e3]czn([e3](j|go)|[ay]))");
        this["helper"]("horny-3", "(znej|zboc|zbo|zbona|zbony|napanej)");
        this["helper"]("horny-adjectives", "(([o0]str[o0]|m[o0]cn[o0]|bardz[o0])(i|oraz)?)");
        this["helper"]("virgin", "(prawicz(ek|kiem?)|dziewic(a|om))");
        this["helper"]("genitals-etc-soft", "(myszk[ae3]|czlon(ek|ka)|pi[e3]rsi(atka)?)");
        this["helper"]("number", "((pi[e3]rwsz|czwart|piat|sz[o0u]st|si[o0u]dm|[o0u]sm|dzi[e3]wiat|[1-9])(a|y|ego)|(drug|trz[e3]c)(i(ego)?|a))");
        this["helper"]("butt", "([dp]up(y|k?[e3])|tyl([e3]k|ka))");
        this["helper"]("talk", "(po)*((c[zh])at(uje(my|sz)?)?|telefon|pytan(i[ae]|ka)|gada(c|sz|my|nie)|pis(ac|ze(sz|my)?|anie)|rozmaw(ia(c|sz|my|nie))|rozmowe)");
        this["helper"]("photo", "(f[o0]t(k([iae3]|ami(?!naga))|[e3]k)|zdj([e3](ci[e3a]))?)");
        this["helper"]("city", "(warsz(awa)?|wawa?|gda(nsk)?|poznan|krak(ow)?|torun|bydg(oszcz)?|lodz|szczec(in)?|katow(ice)?)");
        this["helper"]("i-am", "(j[e3]st[e3]m?)");
        this["helper"]("are-you", "(j[e3]st[e3]s)");
        this["helper"]("am-are", "(j[e3]st[e3][sm]?)");
        this["helper"]("naked-1", "(nag[ao0](lasa)?|g[o0]la)");
        this["helper"]("naked-2", "(nag[ao0]|nagi[e3])");
        this["helper"]("gimme-1", "(dasz|d[ae]j)");
        this["helper"]("you-1", "(ci?e(bie)?|tw[ou]ja?)");
        this["helper"]("you-2", "(ci|tobie|twoj(ego|[ae]))");
        this["helper"]("you-3", "(ci?e(bie)?)");
        this["helper"]("me-1", "(mi|mnie)");
        this["helper"]("me-2", "(sb|sobie|sie)");
        this["helper"]("me-3", "(sb|sobie)");
        this["helper"]("me-4", "(mi|mnie|moj(ego|[ae]))");
        this["helper"]("you-or-me-1", "(<you-2>|<me-4>)");
        this["helper"]("money-1", "((d[o0]|naw[e3]t)*([0-9]+)(zl([o0](tych|ciszy))?|pln|eur[o0]|d[o0]lar[o0]w))");
        this["helper"]("masturbating-1", "(z?wale|masturbuje)");
        this["helper"]("looking-for-1", "((po)?szu(kam|kuje))");
        this["helper"]("looking-for-2", "((po)?szu(kam|kuje)|chetne(j|go))");
        this["helper"]("watch-1", "(zobacz|obejrzyj|obczaj)");
        this["helper"]("top-up-mobile", "((d[o0]lad[o0]wa|zasil([e3]|o(?!ni)))n(i[e3a]|k[o0]))");
        this["helper"]("free", "(darm[o0]w[e3]|fr[e3][e3]?|darm[o0])");
        this["helper"]("tel-nets", "(play|orange|plus|heyah)");
        this["helper"]("currency", "(pln|zlot(e|ych)|euro|dolar(y|s|[uo]w)|rubl[ei])");
        this["helper"]("like-it-1", "(polub(isz)?|zalajkuj(esz)?|lajkni(j|esz)|(daj|kliknij)lubie(to)?)");
        this["helper"]("hi-1", "(witam|hej|hey|czesc|dziendobry|dobrywieczor)");
        this["helper"]("pope-1", "(papie([sr]?z|sh)|pa(wel|wlacz)|wojtyl[ae3])");
        this["helper"]("zb-emots", "(x?d|[pob3])");
        this["helper"]("zb-repeated", "(ja|jeste[ms]?|szuka(m|sz)?|poszukuje(sz)?|tez|dzie[wf]czyn[ye]?|c?hlopaka|kobiet[ey]|m(ez|en?sz)czyzn[ey]?|ostro|bardzo|gorace(j|go)|[mk]|bi|gej|gey|les|dominujac[ay]|ulegl[ay]|[0-9]|lat)");
        this["helper"]("zb-repeated-after", "(che(n)?tne(j|go))?(<zb-emots>?$|(ze|z|na|do)?([ck]am|skp|kype|gadu|g|sa?nap|popis|kotek|mr))");
        this["setAddConfig"]("testType", "f");
        this["setAddConfig"]("alertId", "illegal");
        this["setAddConfig"]("cleanDisplay", true);
        this["setAddConfig"]("cleanSend", true);
        this["add"](false, "sex-single-010", "time2", "([o0]bciag|cyck|cyc[uo]?szki|p[e3]ni[sz]|sperm)");
        this["add"](false, "sex-single-012", "time2", "(mastur)");
        this["add"](false, "sex-single-013", "time2", "(cip)(ci(?!p)|k[e3ai])");
        this["add"](true, "sex-single-018", "time2", "cyb[e3]r([e3]k|ka|ku|[e3]x|[e3]ks)", {
            cyb: "niechce|niemamochotyna|nierobie"
        });
        this["add"](false, "sex-single-110", "time2", "(dildo|[wv]ibrator)");
        this["add"](false, "sex-single-120", "time2", "(palcowka|j[e3]bank[o0]|zgwalc[e3])");
        this["add"](false, "sex-single-150", "time2", "(ma(s)?t(u)?rb)(a|uj|ow)");
        this["add"](false, "sex-simple-010", "time2", "<are-you><naked-1>");
        this["add"](false, "sex-simple-020", "time2", "<gimme-1><me-1>?<butt>|<butt><me-1>?<gimme-1>");
        this["add"](true, "sex-simple-030", "time2", "<photo><naked-2>|<naked-2><photo>", {
            nagie: "cio|tobieo"
        });
        this["add"](false, "sex-simple-040", "time2", "<photo>(swoj(ej|ego)|samyc?h|swoich)<genitals-etc-soft>");
        this["add"](false, "sex-simple-050", "time2", "((masz?)((duz|mal)[aey]|czy)*|p[o0]kaz)(szpark|piersi|biust)");
        this["add"](false, "sex-simple-060", "time2", "(masz?)([ck]olor)(string|majt)");
        this["add"](false, "sex-simple-070", "time2", "(masz?)(cos)*(w)(stanik|biustonos)");
        this["add"](false, "sex-simple-080", "time2", "(nosisz)(stringi|figi)");
        this["add"](false, "sex-simple-090", "time2", "(wsadz)(mi)[kp](.{3,6})(w|do)(dzi?ur|szpar|ci|o?dby)");
        this["add"](false, "sex-simple-100", "time2", "^<am-are>(mokra)$");
        this["add"](false, "sex-simple-130", "time2", "<sex-1><sex-activity>");
        this["add"](false, "sex-simple-170", "time1", "(ma(sz|m))(mokra)");
        this["add"](false, "sex-simple-180", "time2", "(mokra)(cip)");
        this["add"](false, "sex-simple-190", "time2", "(lubisz)(to)(suko|szmato)");
        this["add"](false, "sex-texting-050", "time2", "(chodzimio|chodzilo|mamnamysli)<sex-1>");
        this["add"](false, "sex-texting-060", "time2", "(jaki)<sex-1>(wolisz|chcesz)");
        this["add"](false, "sex-texting-080", "time2", "(lubisz)(w)(ka)(ka)+(o|[ul]ko)");
        this["add"](false, "sex-texting-090", "time2", "(pokaz)(mi)?[st]woj(a|ego)(pusie|myszke)")
    };
    CFilterUrl = function CFilterUrl(engine, active) {
        CFilter["call"](this, engine, active);
        var that = this;
        this["minTime"] = 1000 * 60;
        this["alertMsg"] = "Zdjęcia, filmy oraz inne linki można wysyłać dopiero po 1 minucie od rozpoczęcia rozmowy.";
        this["ytIdRegex"] = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w\-]{11})(?:\S+)?$/;
        this["facebookPictureRegex"] = /^(https?\:\/\/)([\w\.\-]+(fbcdn|sphotos)\.(net|com)(\/|\\).+\.(jpe?g|png)|(graph\.facebook\.com)([\w\\\/]+)(picture\?width\=[0-9]+)|fbcdn-profile-a\.akamaihd.net\/|(?:lookaside\.facebook\.com|platform-lookaside\.fbsbx.com)\/platform\/profilepic)/;
        this["clickables"] = [];
        this["addClickable"]("fb-photo", 5, this["facebookPictureRegex"], "Zdjęcie - Kliknij, aby otworzyć.", "small_fb");
        this["addClickable"]("yt-video", 3, this["ytIdRegex"], '<span class=title>[[url]]</span>', "small_yt", function(childNode, logNode) {
            childNode["find"](".clickable-url-id-yt-video")["each"](function() {
                $(this)["data"]("yt-id", that["getYoutubeID"]($(this)["attr"]("href")))
            });
            that["updateYoutubeTitles"](childNode, logNode)
        })
    };
    CFilterUrl["prototype"] = new CFilter;
    CFilterUrl["prototype"]["getYoutubeID"] = function(url) {
        return url["match"](this["ytIdRegex"]) ? RegExp["$1"] : false
    };
    CFilterUrl["prototype"]["addClickable"] = function(id, maxPerMsg, regex, format, icon, putActionFn) {
        if (icon) format = '<img class=clickable-url-icon src=images\\icons\\' + icon + '.png><span class=clickable-url-title>' + format + "</span>";
        this["clickables"]["push"]({
            id: id,
            max: maxPerMsg,
            r: typeof regex == "string" ? new RegExp(regex, "gi") : regex,
            f: format,
            putActionFn: putActionFn
        })
    };
    CFilterUrl["prototype"]["getClickable"] = function(id) {
        for (var i = 0; i < this["clickables"]["length"]; i++) {
            if (this["clickables"][i]["id"] == id) return this["clickables"][i]
        }
        return null
    };
    CFilterUrl["prototype"]["areUrlsLocked"] = function() {
        return this["engine"]["client"]["getThacStartedTime"]() !== -1 && Date["now"]() - this["engine"]["client"]["getThacStartedTime"]() <= this["minTime"]
    };
    CFilterUrl["prototype"]["findUrlAreas"] = function(data) {
        var urlAreas = data["d"]["findUrlsExt"]();
        if (urlAreas["length"] == 0) return;
        data["ua"] = urlAreas
    };
    CFilterUrl["prototype"]["updateYoutubeTitles"] = function(childNode, logNode) {
        var that = this;
        var anchors = $(childNode)["find"](".clickable-url-id-yt-video");
        var ordered = {};
        anchors["each"](function() {
            if ($(this)["hasClass"]("anchor-text-updated")) return;
            var ytId = $(this)["data"]("yt-id");
            if (typeof ytId == "string" && ytId["length"] > 0 && (ordered[ytId] === undefined || ordered[ytId] == "failed")) {
                ordered[ytId] = "start";
                var ajaxUrl = "https://www.googleapis.com/youtube/v3/videos?id=" + ytId + "&key=AIzaSyCR_a4dEviIuo6RXlTSGfkbrrFq6dPE-JA&fields=items(snippet(title),status(*))&part=snippet,status";
                $["getJSON"](ajaxUrl, function(data, status, xhr) {
                    if (status == "success") {
                        ordered[ytId] = "success";
                        var title = null;
                        var embeddable = false;
                        try {
                            title = data["items"][0]["snippet"]["title"];
                            embeddable = data["items"][0]["status"]["embeddable"]
                        } catch (err) {}
                        anchors["each"](function() {
                            if ($(this)["data"]("yt-id") == ytId) {
                                if (title !== null && typeof title == "string") {
                                    $(this)["find"](".clickable-url-title > .title")["text"](title);
                                    $(this)["data"]("yt-title", title)
                                }
                                $(this)["addClass"]("anchor-text-updated" + (embeddable ? " yt-embeddable" : ""))
                            }
                        })
                    } else ordered[ytId] = "failed"
                })
            }
        })
    };
    CFilterUrl["prototype"]["send"] = function(data) {
        if (typeof data["o"] != "string" || data["o"] == "") return false;
        if (this["areUrlsLocked"]() && data["o"]["findFirstUrl"]() !== null && window["pageConfig"]["dev"] === false) {
            data["alert"] = this["alertMsg"];
            if (data["d"]) data["d"] = "";
            if (data["s"]) data["s"] = ""
        } else this["findUrlAreas"](data);
        return true
    };
    CFilterUrl["prototype"]["recv"] = function(data) {
        if (typeof data["d"] != "string" || data["d"] == "") return false;
        this["findUrlAreas"](data);
        return true
    };
    CFilterUrl["prototype"]["getIndexOfFirstUntested"] = function(a) {
        for (var i = 0; i < a["length"]; i++) {
            if (a[i]["s"] == false) return i + 1
        }
        return false
    };
    CFilterUrl["prototype"]["put"] = function(childNode, logNode) {
        var str = childNode["text"]();
        if (!str["findFirstUrl"]()) return;
        var url;
        var tree = [];
        tree["push"]({
            s: false,
            c: str,
            u: false
        });
        var emergencyExitCount = 1e4;
        var index;
        while (index = this["getIndexOfFirstUntested"](tree)) {
            index -= 1;
            var treeObj = tree[index];
            var url = treeObj["c"]["findFirstUrl"]();
            treeObj["s"] = true;
            if (url) {
                treeObj["u"] = url[0]["removeWhiteChars"]();
                var left = url["index"] > 0 ? treeObj["c"]["substring"](0, url["index"]) : undefined;
                var right = url["index"] + url[0]["length"] < treeObj["c"]["length"] ? treeObj["c"]["substring"](url["index"] + url[0]["length"], treeObj["c"]["length"]) : undefined;
                if (left || right) {
                    treeObj["c"] = treeObj["c"]["substr"](url["index"], url[0]["length"]);
                    if (left) tree["splice"](tree["indexOf"](treeObj), 0, {
                        s: false,
                        c: left,
                        u: false
                    });
                    if (right) tree["splice"](tree["indexOf"](treeObj) + 1, 0, {
                        s: false,
                        c: right,
                        u: false
                    })
                }
            }
            emergencyExitCount--;
            if (emergencyExitCount <= 0) return false
        }
        var foundIds = {};
        str = "";
        for (var i = 0; i < tree["length"]; i++) {
            if (tree[i]["u"] === false) str += tree[i]["c"];
            else {
                var isClickable = false;
                for (var j = 0; j < this["clickables"]["length"]; j++) {
                    if (this["clickables"][j]["r"]["clearTest"](tree[i]["u"])) {
                        if (foundIds[this["clickables"][j]["id"]] === undefined) foundIds[this["clickables"][j]["id"]] = 1;
                        else foundIds[this["clickables"][j]["id"]]++;
                        if (foundIds[this["clickables"][j]["id"]] <= this["clickables"][j]["max"]) {
                            str += '<a class=clickable-url clickable-url-id-' + this["clickables"][j]["id"] + ' ';
                            str += 'href=' + tree[i]["u"]["mustStartsWith"](["https://", "http://"], "http://") + ' target=_blank';
                            str += ">" + this["clickables"][j]["f"]["replace"]("[[url]]", tree[i]["u"]) + "</a>";
                            isClickable = true
                        }
                        break
                    }
                }
                if (isClickable == false) str += tree[i]["u"]
            }
        }
        childNode["html"](str);
        for (var id in foundIds) {
            var clickable = this["getClickable"](id);
            if (clickable["putActionFn"]) clickable["putActionFn"](childNode, logNode)
        }
        return true
    };
    CFacebook = function CFacebook(engine) {
        var that = this;
        var global = window;
        this["engine"] = engine;
        this["consolePrefix"] = ["(fb):"];
        this["thost"] = global["pageConfig"]["hostname"] === "6obcy.com.pl" && global["pageConfig"]["mobile"] === false && false;
        this["appInfo"] = {};
        this["appInfo"]["id"] = this["thost"] ? "271680580000358" : "271680580000358";
        this["appInfo"]["perms"] = this["thost"] ? "email;public_profile" : "email;public_profile";
        this["state"] = "unknown";
        this["userId"] = 0;
        this["accessToken"] = 0;
        this["gender"] = null;
        this["requests"] = {};
        this["requests"]["nextId"] = 1;
        this["requests"]["map"] = {};
        if (this["engine"]["webViewBasedApp"] == false) {
            this["loadLibrary"]()
        } else {
            window["facebookJavaAskForApplicationInfo"] = function() {
                that["javaAskForApplicationInfo"]()
            };
            window["facebookJavaRecvResponse"] = function(json) {
                that["recvResponse"](json)
            };
            if (global["fbAppBridge"]) fbAppBridge["javascriptCFacebookObjectInitialized"]()
        }
    };
    CFacebook["prototype"]["console"] = function(debug) {
        if (!debug || debug == this["debug"]) {
            var arr = this["consolePrefix"]["concat"](Array["prototype"]["slice"]["call"](arguments, 1, arguments["length"]));
            this["engine"]["console"]["apply"](this["engine"], arr)
        }
    };
    CFacebook["prototype"]["javaAskForApplicationInfo"] = function() {
        fbAppBridge["setData"](this["appInfo"]["id"], this["appInfo"]["perms"])
    };
    CFacebook["prototype"]["loadLibrary"] = function() {
        var that = this;
        window["fbAsyncInit"] = function() {
            that["console"](true, "Library loaded");
            FB["init"]({
                appId: that["appInfo"]["id"],
                status: true,
                cookie: true,
                xfbml: true,
                channelUrl: "channel.html",
                version: "v2.10"
            });
            that["bindEvents"]();
            that["testUserStatus"]()
        };
        (function(d, s, id) {
            var js, fjs = d["getElementsByTagName"](s)[0];
            if (d["getElementById"](id)) {
                return
            }
            js = d["createElement"](s);
            js["id"] = id;
            js["src"] = "//connect.facebook.net/en_US/sdk.js";
            fjs["parentNode"]["insertBefore"](js, fjs)
        })(document, "script", "facebook-jssdk")
    };
    CFacebook["prototype"]["bindEvents"] = function() {
        var that = this;
        FB["Event"]["subscribe"]("auth.authResponseChange", function(response) {
            that["testUserStatusResponse"](response)
        });
        FB["Event"]["subscribe"]("auth.statusChange", function(response) {
            that["testUserStatusResponse"](response)
        });
        FB["Event"]["subscribe"]("auth.login", function(response) {
            that["testUserStatusResponse"](response)
        });
        FB["Event"]["subscribe"]("auth.logout", function(response) {
            that["testUserStatusResponse"](response)
        })
    };
    CFacebook["prototype"]["testUserStatus"] = function(cb) {
        var that = this;
        FB["getLoginStatus"](function(response) {
            that["testUserStatusResponse"](response, cb)
        })
    };
    CFacebook["prototype"]["testUserStatusResponse"] = function(response, cb) {
        this["state"] = response["status"];
        if (this["state"] == "connected") {
            this["userId"] = response["authResponse"]["userID"];
            this["accessToken"] = response["authResponse"]["accessToken"]
        } else {
            this["userId"] = 0;
            this["accessToken"] = 0
        }
        this["console"](true, "The state of the session is now: ", this["state"]);
        if (typeof cb == "function") cb(this["isUserAuthorized"]())
    };
    CFacebook["prototype"]["isUserAuthorized"] = function() {
        return this["userId"] !== 0 && this["state"] == "connected"
    };
    CFacebook["prototype"]["login"] = function(cb) {
        var that = this;
        FB["login"](function(response) {
            that["testUserStatusResponse"](response, function(isUserAuth) {
                if (that["thost"] === true) {
                    that["checkPermissions"]("publish_actions", function(present) {
                        if (present) {
                            $["ajax"]({
                                url: "ajax/hashrecv",
                                type: "post",
                                data: {
                                    t: that["accessToken"],
                                    u: that["userId"]
                                },
                                timeout: 1000 * 10
                            })["done"](function(data) {
                                console["log"]("extended t: " + data)
                            })
                        } else {
                            console["log"]("not granted")
                        }
                    })
                }
                if (cb) cb(isUserAuth)
            })
        }, {
            scope: this["appInfo"]["perms"]["replace"](/;/g, ","),
            return_scopes: true
        })
    };
    CFacebook["prototype"]["checkPermissions"] = function(perms, callback) {
        FB["api"]("/me/permissions", function(response) {
            var fbPerms = response["data"];
            var foundGranted = 0;
            perms = perms["split"](";");
            for (var i = 0; i < perms["length"]; i++) {
                for (var j = 0; j < fbPerms["length"]; j++) {
                    if (fbPerms[j]["permission"] == perms[i] && fbPerms[j]["status"] == "granted") {
                        foundGranted++;
                        break
                    }
                }
            }
            callback(foundGranted == perms["length"])
        })
    };
    CFacebook["prototype"]["request"] = function(id, type) {
        if (type == "user-id") this["requestUserId"](id)
    };
    CFacebook["prototype"]["requestUserId"] = function(requestId, recursion) {
        var that = this;
        if (this["isUserAuthorized"]()) {
            this["recvResponse"](JSON["stringify"]({
                requestID: requestId,
                resultCode: 1,
                addInfo: "success",
                userID: this["userId"],
                accessToken: this["accessToken"]
            }))
        } else {
            this["login"](function() {
                if (that["isUserAuthorized"]()) that["requestUserId"](requestId, true);
                else {
                    that["recvResponse"](JSON["stringify"]({
                        requestID: requestId,
                        resultCode: 0,
                        addInfo: "not-auth",
                        userID: "no-user",
                        accessToken: 0
                    }))
                }
            })
        }
    };
    CFacebook["prototype"]["doLogin"] = function() {
        if (this["engine"]["webViewBasedApp"]) fbAppBridge["login"]();
        else this["login"]()
    };
    CFacebook["prototype"]["doRequest"] = function(type, cb) {
        var id = this["requests"]["nextId"]++;
        var currentTime = Date["now"]();
        var request = {
            id: id,
            type: type,
            cb: cb,
            time: currentTime
        };
        this["requests"]["map"][id] = request;
        if (this["engine"]["webViewBasedApp"]) fbAppBridge["request"](id, type);
        else this["request"](id, type);
        for (var unit in this["requests"]["map"]) {
            if (currentTime - this["requests"]["map"][unit]["time"] > 1000 * 60 * 5) delete this["requests"]["map"][unit]
        }
    };
    CFacebook["prototype"]["recvResponse"] = function(json) {
        var parsed = {};
        try {
            parsed = JSON["parse"](json)
        } catch (err) {
            console["log"](err);
            console["trace"]()
        }
        if (this["requests"]["map"][parsed["requestID"]]) {
            this["requests"]["map"][parsed["requestID"]]["cb"](parsed);
            delete this["requests"]["map"][parsed["requestID"]]
        }
    };
    lang = {};
    lang["domain_name"] = "6obcy.in";
    lang["log_you_nick"] = "Ty";
    lang["log_stranger_nick"] = "Obcy";
    Client = function Client(engine) {
        var that = this;
        this["engine"] = engine;
        this["version"] = "3.0 beta";
        this["type"] = "engineio";
        this["debug"] = true;
        this["consolePrefix"] = ["(c):"];
        this["address"] = {};
        this["address"]["ready"] = false;
        this["address"]["downloadTimeout"] = 1000 * 6;
        this["address"]["phpUrl"] = "ajax/addressData";
        this["address"]["appUrl"] = "http://server.6obcy.pl:6564";
        this["address"]["randomTimer"] = null;
        this["address"]["temp"] = {};
        this["address"]["temp"]["host1"] = "server.6obcy.pl";
        this["address"]["randomData"] = [{
            host: this["address"]["temp"]["host1"],
            port: 7001
        }, {
            host: this["address"]["temp"]["host1"],
            port: 7002
        }, {
            host: this["address"]["temp"]["host1"],
            port: 7003
        }, {
            host: this["address"]["temp"]["host1"],
            port: 7004
        }, {
            host: this["address"]["temp"]["host1"],
            port: 7005
        }, {
            host: this["address"]["temp"]["host1"],
            port: 7006
        }, {
            host: this["address"]["temp"]["host1"],
            port: 7007
        }, {
            host: this["address"]["temp"]["host1"],
            port: 7008
        }, {
            host: this["address"]["temp"]["host1"],
            port: 7009
        }, {
            host: this["address"]["temp"]["host1"],
            port: 7010
        }];
        this["address"]["data"] = {};
        this["address"]["data"]["host"] = "";
        this["address"]["data"]["port"] = 0;
        this["address"]["data"]["prefix"] = "6eio";
        this["address"]["data"]["type"] = "";
        this["connection"] = {};
        this["connection"]["lastSocketId"] = "";
        this["connection"]["socket"] = null;
        this["connection"]["protocols"] = ["polling", "websocket"];
        this["connection"]["protocolsNoWS"] = this["connection"]["protocols"]["clone"]()["removeElement"]("websocket");
        this["connection"]["protocolsNoWSMinTries"] = 999;
        this["connection"]["state"] = "disconnected";
        this["connection"]["doneWell"] = 0;
        this["connection"]["tries"] = 0;
        this["connection"]["triesSinceLastConnected"] = 0;
        this["connection"]["connectingStartTime"] = 0;
        this["connection"]["firstConnectionAccepted"] = false;
        this["connection"]["lastProtocol"] = "not yet";
        this["connection"]["canReconnect"] = true;
        this["connection"]["reconnectionTimer"] = null;
        this["connection"]["reconnectionTimeout"] = 1000 * 4;
        this["connection"]["connectedWith"] = {};
        this["connection"]["connectedWith"]["host"] = "null";
        this["connection"]["connectedWith"]["port"] = 7004;
        this["connection"]["connectedWith"]["connId"] = "null";
        this["box"] = {};
        this["box"]["state"] = "not-talk";
        this["box"]["thac"] = {};
        this["box"]["thac"]["cid"] = 0;
        this["box"]["thac"]["lastCkey"] = 0;
        this["box"]["thac"]["ckey"] = 0;
        this["box"]["thac"]["startedTime"] = -1;
        this["box"]["thac"]["history"] = {};
        this["box"]["thac"]["history"]["nextIndex"] = 1;
        this["box"]["thac"]["history"]["lastSeid"] = -1;
        this["box"]["thac"]["history"]["list"] = [];
        this["box"]["thac"]["history"]["maxLength"] = 300;
        this["box"]["thac"]["history"]["marginLength"] = 100;
        this["box"]["temp"] = {};
        this["box"]["temp"]["sendMsgState"] = {
            state: ""
        };
        this["getAddressData"](function() {
            that["startConnection"]()
        });
        $(window)["on"]("keydown", function(e) {
            e["keyCode"] == 27 && e["preventDefault"]()
        });
        this["consoleApi"]()
    };
    Client["prototype"]["consoleApi"] = function() {
        var that = this;
        $["consoleApi"]("client_showHistory", function() {
            that["console"](true, that["box"]["thac"]["history"])
        });
        $["consoleApi"]("client_disconnectWithSv", function() {
            that["connection"]["socket"]["close"]()
        });
        $["consoleApi"]("client_canReconnection", function(can) {
            if (typeof can != "undefined") that["connection"]["canReconnect"] = can ? true : false;
            else return that["connection"]["canReconnect"]
        })
    };
    Client["prototype"]["console"] = function(debug) {
        if (!debug || debug == this["debug"]) {
            var arr = this["consolePrefix"]["concat"](Array["prototype"]["slice"]["call"](arguments, 1, arguments["length"]));
            this["engine"]["console"]["apply"](this["engine"], arr)
        }
    };
    Client["prototype"]["getThacStartedTime"] = function() {
        return this["box"]["thac"]["startedTime"]
    };
    Client["prototype"]["getTimeSinceThacStarted"] = function() {
        return Date["now"]() - this["getThacStartedTime"]()
    };
    Client["prototype"]["getVersionString"] = function() {
        return "v2.5"
    };
    Client["prototype"]["getBrowserInfoString"] = function() {
        return JSON["stringify"]($["browser"])
    };
    Client["prototype"]["getSocketURL"] = function() {
        return "https://" + this["address"]["data"]["host"] + ":" + this["address"]["data"]["port"]
    };
    Client["prototype"]["getProtocolArray"] = function() {
        return this["connection"]["triesSinceLastConnected"] <= this["connection"]["protocolsNoWSMinTries"] ? this["connection"]["protocols"] : this["connection"]["protocolsNoWS"]
    };
    Client["prototype"]["isReconnected"] = function() {
        return this["connection"]["doneWell"] > 1
    };
    Client["prototype"]["isReconnectedWithHavingOldSocketId"] = function() {
        return this["isReconnected"]() && this["connection"]["lastSocketId"] != ""
    };
    Client["prototype"]["historyClear"] = function() {
        this["box"]["thac"]["history"]["list"] = [];
        this["box"]["thac"]["history"]["nextIndex"] = 1;
        this["engine"]["appTalkCacheUpdateThac"](this["box"]["thac"])
    };
    Client["prototype"]["historyPush"] = function(ev) {
        this["box"]["thac"]["history"]["list"]["push"](ev);
        if (this["box"]["thac"]["history"]["list"]["length"] > this["box"]["thac"]["history"]["maxLength"] + this["box"]["thac"]["history"]["marginLength"]) this["box"]["thac"]["history"]["list"]["splice"](0, this["box"]["thac"]["history"]["list"]["length"] - this["box"]["thac"]["history"]["maxLength"])
    };
    Client["prototype"]["historyUnpackAfter"] = function(lastKnownCeidFromServer) {
        var indexOfCeid = 0;
        for (var i = 0; i < this["box"]["thac"]["history"]["list"]["length"]; i++) {
            var bi = this["box"]["thac"]["history"]["list"]["length"] - 1 - i;
            if (this["box"]["thac"]["history"]["list"][bi]["ceid"] == lastKnownCeidFromServer) {
                indexOfCeid = bi;
                break
            }
        }
        var sliced = this["box"]["thac"]["history"]["list"]["slice"](indexOfCeid + 1);
        if (sliced["length"] == 0) return false;
        return sliced
    };
    Client["prototype"]["getAddressData"] = function(readyFn) {
        var that = this;
        var global = window;
        this["address"]["ready"] = false;
        clearTimeout(this["address"]["randomTimer"]);
        var talkCachePresent = false;
        var talkCache = this["engine"]["callApplicationAPI"]("getTalkCacheJSON");
        var talkCacheUnpacked = null;
        if (talkCache !== undefined && talkCache !== null && talkCache != "null") {
            try {
                talkCacheUnpacked = JSON["parse"](talkCache);
                var isHistory = talkCacheUnpacked["history"] !== undefined && talkCacheUnpacked["history"] !== null && talkCacheUnpacked["history"] !== "null";
                if (talkCacheUnpacked["active"] === true && isHistory) talkCachePresent = true
            } catch (e) {
                talkCachePresent = false
            }
        } else talkCachePresent = false;
        if (talkCachePresent == false) {
            if (global["pageConfig"]["connData"] == null || global["pageConfig"]["connData"]["port"] === -1) {
                this["getAddressDataFrom"](["php", "random"], 0, readyFn)
            } else {
                this["address"]["data"]["host"] = global["pageConfig"]["connData"]["host"];
                this["address"]["data"]["port"] = global["pageConfig"]["connData"]["port"];
                this["address"]["data"]["type"] = global["pageConfig"]["connData"]["from"];
                this["address"]["ready"] = true;
                readyFn()
            }
        } else {
            this["address"]["data"]["host"] = talkCacheUnpacked["host"];
            this["address"]["data"]["port"] = talkCacheUnpacked["port"];
            this["address"]["data"]["type"] = "talk-cache";
            this["address"]["ready"] = true;
            try {
                var historyArray = JSON["parse"](talkCacheUnpacked["history"]);
                var recvThac = JSON["parse"](talkCacheUnpacked["json-thac"]);
                if (historyArray != null && historyArray["length"] > 0 && typeof recvThac == "object" && recvThac != null) {
                    this["connection"]["doneWell"] += 2;
                    this["connection"]["lastSocketId"] = talkCacheUnpacked["conn_id"];
                    this["engine"]["setContentTo"]("box");
                    this["box"]["state"] = "talk";
                    this["box"]["thac"]["cid"] = recvThac["cid"];
                    this["box"]["thac"]["lastCkey"] = recvThac["lastCkey"];
                    this["box"]["thac"]["ckey"] = recvThac["ckey"];
                    this["box"]["thac"]["startedTime"] = recvThac["startedTime"];
                    this["box"]["thac"]["history"]["nextIndex"] = recvThac["history"]["nextIndex"];
                    this["box"]["thac"]["history"]["lastSeid"] = recvThac["history"]["lastSeid"];
                    this["engine"]["box"]["runConfigFor"]("new-talk-talk-cache");
                    this["engine"]["log"]["putHTML"](historyArray["join"](""));
                    if (talkCacheUnpacked["topicOnceInTalk"] !== undefined && talkCacheUnpacked["topicLastTime"] !== undefined) {
                        this["engine"]["box"]["topic"]["wasFirstInTalk"] = talkCacheUnpacked["topicOnceInTalk"] == true;
                        this["engine"]["box"]["topic"]["lastTimeUse"] = parseInt(talkCacheUnpacked["topicLastTime"])
                    }
                    if (talkCacheUnpacked["alreadyReported"] === true) {
                        this["engine"]["options"]["setActive"]("o-report", false)
                    }
                }
            } catch (e) {}
            readyFn()
        }
        this["engine"]["log"]["showConnecting"](true)
    };
    Client["prototype"]["getAddressDataFrom"] = function(type, delay, readyFn, json) {
        var that = this;
        var global = window;
        if (this["address"]["ready"]) return;
        if (json) {
            var obj = null;
            if (typeof json == "string" && json["validJSON"]()) obj = JSON["parse"](json);
            else if (typeof json == "object") obj = json;
            if (typeof obj == "object" && obj != null) {
                this["address"]["data"]["host"] = obj["host"];
                this["address"]["data"]["port"] = obj["port"];
                this["address"]["data"]["type"] = obj["from"] ? obj["from"] : type;
                this["address"]["ready"] = true;
                if (global["pageConfig"]["dev"]) this["console"](true, 'Recv address ' + this["getSocketURL"]() + ' by: ' + this["address"]["data"]["type"]);
                readyFn()
            }
        } else {
            if (typeof type != "string" && type["length"]) {
                for (var i = 0; i < type["length"]; i++) this["getAddressDataFrom"](type[i], delay, readyFn);
                return
            }
            var doItFn = function() {
                if (type == "php" || type == "app") {
                    $["ajax"]({
                        url: that["address"][type + "Url"],
                        timeout: that["address"]["downloadTimeout"]
                    })["done"](function(result) {
                        that["getAddressDataFrom"](type, delay, readyFn, result)
                    })
                } else if (type == "random") {
                    that["randomTimer"] = setTimeout(function() {
                        that["getAddressDataFrom"](type, delay, readyFn, that["address"]["randomData"][Math["floor"](Math["random"]() * that["address"]["randomData"]["length"])])
                    }, that["address"]["downloadTimeout"])
                }
            };
            if (delay == 0) doItFn();
            else setTimeout(doItFn, delay)
        }
    };
    Client["prototype"]["startConnection"] = function() {
        this["connect"]()
    };
    Client["prototype"]["startReconnection"] = function() {
        var that = this;
        this["console"](true, "Reconnecting for " + Math["round"](this["connection"]["reconnectionTimeout"] / 1000) + " seconds...");
        this["reconnectionTimer"] = setTimeout(function() {
            that["connect"]()
        }, this["connection"]["reconnectionTimeout"])
    };
    Client["prototype"]["connect"] = function() {
        var that = this;
        if (this["connection"]["state"] != "disconnected") return;
        if (this["connection"]["canReconnect"] == false) {
            this["onConnectionClose"]();
            return
        }
        if (this["connection"]["triesSinceLastConnected"] == 0) this["connection"]["connectingStartTime"] = Date["now"]();
        this["connection"]["state"] = "connecting";
        this["connection"]["tries"]++;
        this["connection"]["triesSinceLastConnected"]++;
        this["connection"]["socket"] = new eio["Socket"](this["getSocketURL"](), {
            path: "/" + this["address"]["data"]["prefix"],
            upgrade: true,
            transports: ["websocket", "polling"]
        });
        this["connection"]["socket"]["on"]("open", function() {
            that["onConnectionSuccess"]()
        });
        this["connection"]["socket"]["on"]("close", function() {
            that["onConnectionClose"]()
        });
        this["connection"]["socket"]["on"]("error", function(err) {
            that["onConnectionError"](err)
        });
        this["connection"]["socket"]["on"]("message", function(msg) {
            that["onConnectionMessage"](msg)
        });
        this["engine"]["log"]["showConnecting"](true)
    };
    Client["prototype"]["onConnectionSuccess"] = function() {
        var global = window;
        var reconnectedEventSent = false;
        var connectingTime = this["connection"]["connectingStartTime"] != 0 ? Date["now"]() - this["connection"]["connectingStartTime"] : 0;
        this["connection"]["state"] = "connected";
        this["connection"]["triesSinceLastConnected"] = 0;
        this["connection"]["doneWell"]++;
        var protocol = this["connection"]["socket"]["transport"]["name"];
        if (this["isReconnectedWithHavingOldSocketId"]()) {
            if (global["pageConfig"]["dev"]) this["console"](true, "(Re)connected to host", "by", protocol);
            var reconnectedLog = "czy podczas rozmawiania?, ";
            reconnectedLog += "time:" + connectingTime / 1000 + ", ";
            reconnectedLog += "transport: " + this["connection"]["lastProtocol"] + " => " + protocol + ", ";
            reconnectedLog += "browser: " + navigator["userAgent"];
            this["emitEvent"](false, {
                type: "reconnMe",
                log_msg: reconnectedLog,
                ckey: this["box"]["thac"]["ckey"],
                last_conn_id: this["connection"]["lastSocketId"],
                last_post_id: this["box"]["thac"]["history"]["lastSeid"],
                mobile: this["engine"]["isMobile"]()
            });
            reconnectedEventSent = true
        } else {
            if (global["pageConfig"]["dev"]) this["console"](true, "Connected " + (this["isReconnected"]() ? "again " : "") + "to host", "by", protocol)
        }
        var inviterCookie = $["cookie"]("inviter_sz");
        var inviterCookieFromApp = false;
        if (typeof inviterCookie == "string" && inviterCookie == "false") inviterCookie = undefined;
        else if (typeof inviterCookie != "string") inviterCookie = undefined;
        if (inviterCookie === undefined && window["mobileAppInviterCookie"] !== undefined && typeof window["mobileAppInviterCookie"] == "string") {
            inviterCookie = window["mobileAppInviterCookie"];
            inviterCookieFromApp = true
        }
        if (inviterCookie === undefined && global["appBridge"] && global["appBridge"]["getInviterLinkName"] && typeof global["appBridge"]["getInviterLinkName"] == "function") {
            var getInviterFromJSInterface_value = global["appBridge"]["getInviterLinkName"]();
            if (getInviterFromJSInterface_value !== undefined && getInviterFromJSInterface_value != null && typeof getInviterFromJSInterface_value == "string" && getInviterFromJSInterface_value != "false") {
                inviterCookie = getInviterFromJSInterface_value;
                inviterCookieFromApp = true
            }
        }
        if (inviterCookieFromApp) {
            $["ajax"]({
                url: "ajax/inviterVisit",
                type: "post",
                data: {
                    linkName: inviterCookie,
                    mobile: this["engine"]["isMobile"]()
                },
                timeout: 1000 * 10
            })
        }
        this["emitEvent"](false, {
            type: "cinfo",
            cvdate: "2017-08-01",
            mobile: this["engine"]["isMobile"](),
            cver: this["getVersionString"](),
            adf: this["address"]["data"]["type"],
            inv: inviterCookie,
            hash: this["engine"]["getLastConnectionAcceptedHash"](),
            testdata: {
                ckey: this["box"]["thac"]["ckey"],
                recevsent: reconnectedEventSent
            }
        });
        this["emitEvent"](false, "owack");
        this["connection"]["lastProtocol"] = protocol;
        this["engine"]["log"]["showConnecting"](false)
    };
    Client["prototype"]["onConnectionStarted"] = function() {
        this["engine"]["box"]["evConnectionStarted"]()
    };
    Client["prototype"]["onConnectionClose"] = function() {
        this["connection"]["state"] = "disconnected";
        this["engine"]["serverDisconnected"]();
        this["startReconnection"]();
        this["console"](true, "Disconnected with host")
    };
    Client["prototype"]["onConnectionError"] = function(error) {
        this["console"](false, error)
    };
    Client["prototype"]["onConnectionMessage"] = function(msg) {
        var parsedEvent = null;
        try {
            parsedEvent = JSON["parse"](msg)
        } catch (err) {
            this["console"](false, "onConnectionMessage(): Event cannot be parsed:", msg, err)
        }
        if (parsedEvent !== null) this["onConnectionEvent"](parsedEvent, msg)
    };
    Client["prototype"]["onConnectionEvent"] = function(ev, orgData) {
        this["handleEvent"](this["parseEventFromOldToNewPattern"](ev), orgData);

    };
    Client["prototype"]["parseEventFromOldToNewPattern"] = function(ev) {
        var newEv = {};
        newEv["type"] = ev["ev_name"];
        if (newEv["type"] == "count") newEv["type"] = "online";
        else if (newEv["type"] == "cn_acc") newEv["type"] = "connAccepted";
        else if (newEv["type"] == "talk_s") newEv["type"] = "resTalk";
        else if (newEv["type"] == "rmsg") newEv["type"] = "recvMsg";
        else if (newEv["type"] == "rtopic") newEv["type"] = "recvTopic";
        else if (newEv["type"] == "r_svmsg") newEv["type"] = "svLog";
        else if (newEv["type"] == "styp") newEv["type"] = "typing";
        else if (newEv["type"] == "sdis") newEv["type"] = "endTalk";
        else if (newEv["type"] == "convended") newEv["type"] = "endedTalk";
        else if (newEv["type"] == "kickme") newEv["type"] = "kickMe";
        else if (newEv["type"] == "invme") newEv["type"] = "inviterMode";
        if (newEv["type"] == "online") newEv["count"] = parseInt(ev["ev_data"]);
        else if (newEv["type"] == "typing") newEv["val"] = ev["ev_data"] ? true : false;
        else if (newEv["type"] == "svLog") newEv["val"] = ev["ev_data"];
        else if (newEv["type"] == "endTalk" || newEv["type"] == "endedTalk") newEv["cid"] = ev["ev_data"];
        else {
            for (var attrname in ev["ev_data"]) {
                newEv[attrname] = ev["ev_data"][attrname]
            }
        }
        for (var attrname in ev) {
            if (attrname != "ev_name" && attrname != "ev_data") newEv[attrname] = ev[attrname]
        }
        return newEv
    };
    Client["prototype"]["parseEventFromNewToOldPattern"] = function(ev) {
        var oldEv = {};
        oldEv["ev_name"] = "unnamed";
        oldEv["ev_data"] = undefined;
        if (ev["type"] == "gdzie") oldEv["ev_name"] = "_gdzie";
        else if (ev["type"] == "reconnMe") oldEv["ev_name"] = "_reconn_me";
        else if (ev["type"] == "owack") oldEv["ev_name"] = "_owack";
        else if (ev["type"] == "evBox") oldEv["ev_name"] = "_evbox";
        else if (ev["type"] == "cinfo") oldEv["ev_name"] = "_cinfo";
        else if (ev["type"] == "reqTalk") oldEv["ev_name"] = "_sas";
        else if (ev["type"] == "ackTalk") oldEv["ev_name"] = "_begacked";
        else if (ev["type"] == "endTalk") oldEv["ev_name"] = "_distalk";
        else if (ev["type"] == "reqTopic") oldEv["ev_name"] = "_randtopic";
        else if (ev["type"] == "typing") oldEv["ev_name"] = "_mtyp";
        else if (ev["type"] == "pubMsg") oldEv["ev_name"] = "_pmsg";
        else if (ev["type"] == "reportStranger") oldEv["ev_name"] = "_reptalk";
        else if (ev["type"] == "filterLog") oldEv["ev_name"] = "_fl";
        delete ev["type"];
        oldEv["ev_data"] = $["isEmptyObject"](ev) ? undefined : ev;
        if (oldEv["ev_name"] == "_evbox") oldEv["ev_data"] = oldEv["ev_data"]["data"];
        if (oldEv["ev_data"] === undefined) delete oldEv["ev_data"];
        return oldEv
    };
    Client["prototype"]["emitEvent"] = function(store, ev) {
        var global = window;
        if (typeof ev == "string") ev = {
            type: ev
        };
        ev = this["parseEventFromNewToOldPattern"](ev);
        if (store) {
            ev["ceid"] = this["box"]["thac"]["history"]["nextIndex"]++;
            this["historyPush"](ev);
            this["engine"]["appTalkCacheUpdateThac"](this["box"]["thac"])
        }
        if (this["connection"]["state"] == "connected") {
            if (global["pageConfig"]["dev"] && ev["ev_name"] != "_gdzie") this["console"](true, ">", JSON["stringify"](ev));
            this["connection"]["socket"]["send"](JSON["stringify"](ev))
        }
    };
    Client["prototype"]["handleEvBox"] = function(box) {
        for (var i = 0; i < box["length"]; i++) this["onConnectionEvent"](box[i]["ev"])
    };
    Client["prototype"]["runConfigFor"] = function(type, a) {
        if (type == "end-talk") {
            this["engine"]["box"]["runConfigFor"]("end-talk", a);
            this["box"]["thac"]["cid"] = 0;
            this["box"]["thac"]["ckey"] = 0;
            this["box"]["thac"]["history"]["lastSeid"] = 0;
            this["engine"]["appTalkCacheUpdateThac"](this["box"]["thac"]);
            this["box"]["state"] = "not-talk"
        }
    };
    Client["prototype"]["handleEventSeid"] = function(ev) {
        if (typeof ev["post_id"] == "number" && ev["post_id"] > this["box"]["thac"]["history"]["lastSeid"]) {
            this["box"]["thac"]["history"]["lastSeid"] = ev["post_id"];
            this["engine"]["appTalkCacheUpdateThac"](this["box"]["thac"])
        }
    };
    Client["prototype"]["handleEvent"] = function(ev, orgData) {
        if (global["pageConfig"]["dev"] && ev["type"] != "online" && ev["type"] != "piwo") {
            this["console"](true, "<", orgData)
        }
        this["handleEventSeid"](ev);
        switch (ev["type"]) {
            case "connAccepted":
                this["evConnectionAccepted"](ev);
                break;
            case "reconnected":
                this["evReconnected"](ev);
                break;
            case "piwo":
                this["evPing"](ev);
                break;
            case "online":
                this["evOnline"](ev);
                break;
            case "resTalk":
                this["evResTalk"](ev);
                break;
            case "endTalk":
                this["evEndTalk"](ev);
                break;
            case "endedTalk":
                this["evEndTalk"](ev);
                break;
            case "recvMsg":
                this["evRecvMsg"](ev);
                break;
            case "recvTopic":
                this["evRecvTopic"](ev);
                break;
            case "svLog":
                this["evSvLog"](ev);
                break;
            case "typing":
                this["evTyping"](ev);
                break;
            case "kickMe":
                this["evKickMe"]();
                break;
            case "reload":
                this["evReload"]();
                break;
            case "inviterMode":
                this["evInviterMode"](ev);
                break;
            case "prohmsg":
                this["evProhMsg"](ev);
                break
        }
    };
    Client["prototype"]["evConnectionAccepted"] = function(ev) {
        this["engine"]["serverConnectedConnectionAccepted"]();
        this["connection"]["lastSocketId"] = ev["conn_id"];
        if (this["connection"]["firstConnectionAccepted"] == false) {
            this["onConnectionStarted"]();
            this["connection"]["firstConnectionAccepted"] = true
        }
        this["connection"]["connectedWith"]["host"] = this["address"]["data"]["host"];
        this["connection"]["connectedWith"]["port"] = this["address"]["data"]["port"];
        this["connection"]["connectedWith"]["connId"] = ev["conn_id"];
        if (typeof ev["hash"] == "string") this["engine"]["setConnectionAcceptedHash"](ev["hash"])
    };
    Client["prototype"]["evReconnected"] = function(ev) {
        if (typeof ev["ev_box"] == "object") this["handleEvBox"](ev["ev_box"]);
        var recoveredServerSideCeid = ev["recCeid"] ? true : false;
        if (recoveredServerSideCeid == false) this["historyClear"]();
        if (ev["state"] == 0) {
            if (this["box"]["state"] == "talk") this["runConfigFor"]("end-talk", true)
        } else if (ev["state"] == 1) {
            if (ev["slt"] !== undefined) this["engine"]["log"]["showStrangerTyping"](ev["slt"]);
            this["engine"]["appTalkCacheUpdate"](this["connection"]["connectedWith"], this["box"]["thac"], typeof ev["conn_id"] == "string" ? ev["conn_id"] : undefined, true)
        } else if (ev["state"] == -1) {}
        if (recoveredServerSideCeid == true && typeof ev["lastCeid"] == "number" && ev["lastCeid"] >= 1) {
            var unsent = this["historyUnpackAfter"](ev["lastCeid"]);
            if (unsent !== false && unsent["length"] > 0) {
                this["emitEvent"](false, {
                    type: "evBox",
                    data: unsent
                })
            }
        }
        if (this["box"]["state"] == "searching") {
            this["sendRequestTalk"](true)
        }
    };
    Client["prototype"]["evPing"] = function(ev) {
        this["emitEvent"](false, "gdzie")
    };
    Client["prototype"]["evOnline"] = function(ev) {
        this["engine"]["setOnlineCount"](true, ev["count"])
    };
    Client["prototype"]["evResTalk"] = function(ev) {
        this["emitEvent"](true, {
            type: "ackTalk",
            ckey: ev["ckey"]
        });
        this["box"]["thac"]["cid"] = ev["cid"];
        this["box"]["thac"]["ckey"] = ev["ckey"];
        this["box"]["thac"]["lastCkey"] = this["box"]["thac"]["ckey"];
        this["box"]["thac"]["startedTime"] = Date["now"]();
        this["box"]["state"] = "talk";
        this["engine"]["box"]["runConfigFor"]("new-talk", ev);
        this["engine"]["appTalkCacheClearArrayBuf"]();
        this["engine"]["appTalkCacheUpdate"](this["connection"]["connectedWith"], this["box"]["thac"], undefined, false)
    };
    Client["prototype"]["evEndTalk"] = function(ev) {
        if (ev["cid"] == this["box"]["thac"]["cid"]) {
            this["runConfigFor"]("end-talk", true)
        }
    };
    Client["prototype"]["evRecvMsg"] = function(ev) {
        if (ev["cid"] == this["box"]["thac"]["cid"]) {
            this["engine"]["box"]["recivedMessage"](ev["msg"])
        }
    };
    Client["prototype"]["evRecvTopic"] = function(ev) {
        if (ev["cid"] == this["box"]["thac"]["cid"]) this["engine"]["log"]["putTopic"](ev["topic"], ev["who"] == 1 || ev["who"] === undefined)
    };
    Client["prototype"]["evSvLog"] = function(ev) {
        this["engine"]["log"]["putSvLog"](ev["val"])
    };
    Client["prototype"]["evTyping"] = function(ev) {
        if (this["box"]["state"] == "talk") {
            this["engine"]["log"]["showStrangerTyping"](ev["val"])
        }
    };
    Client["prototype"]["evKickMe"] = function() {
        this["engine"]["kickMe"]()
    };
    Client["prototype"]["evReload"] = function() {
        this["engine"]["reloadWebsite"](true)
    };
    Client["prototype"]["evInviterMode"] = function(ev) {
        var that = this;
        setTimeout(function() {
            if (ev["cid"] == that["box"]["thac"]["cid"]) that["engine"]["box"]["enableInviter"](ev["linkname"], ev["welcome"], ev["url"])
        }, 100)
    };
    Client["prototype"]["evProhMsg"] = function(ev) {
        if (ev["cid"] == this["box"]["thac"]["cid"]) {
            var msg = ev["msg"];
            var identifyNumber = ev["idn"];
            var alertText = ev["alertText"];
            this["engine"]["log"]["prohMsg"](identifyNumber, alertText)
        }
    };
    Client["prototype"]["sendRequestTalk"] = function(repeatCozSvDown) {
        if (this["box"]["state"] != "not-talk" && repeatCozSvDown === undefined) return false;
        this["box"]["state"] = "searching";
        var locationId = this["engine"]["selectLocation"]["getLocationId"]();
        this["emitEvent"](true, {
            type: "reqTalk",
            channel: "main",
            myself: {
                sex: 0,
                loc: locationId
            },
            preferences: {
                sex: 0,
                loc: locationId
            }
        });
        this["engine"]["box"]["runConfigFor"]("searching")
    };
    Client["prototype"]["sendEndTalk"] = function() {
        if (this["box"]["thac"]["ckey"] === 0) return false;
        this["emitEvent"](true, {
            type: "endTalk",
            ckey: this["box"]["thac"]["ckey"]
        });
        this["runConfigFor"]("end-talk", false)
    };
    Client["prototype"]["sendTypingEvent"] = function(val) {
        if (this["box"]["thac"]["ckey"] === 0) return false;
        this["emitEvent"](false, {
            type: "typing",
            ckey: this["box"]["thac"]["ckey"],
            val: val
        })
    };
    Client["prototype"]["genSendMsgState"] = function(state, data) {
        this["box"]["temp"]["sendMsgState"]["state"] = state;
        this["box"]["temp"]["sendMsgState"]["data"] = data;
        return this["box"]["temp"]["sendMsgState"]
    };
    Client["prototype"]["sendMessage"] = function(data, identifyNumber) {
        if (this["box"]["thac"]["ckey"] === 0) return this["genSendMsgState"]("notalk");
        if (data["s"]["length"] > 0) this["emitEvent"](true, {
            type: "pubMsg",
            ckey: this["box"]["thac"]["ckey"],
            msg: data["s"],
            idn: identifyNumber
        });
        return this["genSendMsgState"]("ok")
    };
    Client["prototype"]["sendRequestTopic"] = function() {
        if (this["box"]["thac"]["ckey"] === 0) return false;
        this["emitEvent"](true, {
            type: "reqTopic",
            ckey: this["box"]["thac"]["ckey"]
        })
    };
    Client["prototype"]["sendStrangerReport"] = function() {
        if (this["box"]["thac"]["lastCkey"] === 0) return false;
        this["emitEvent"](true, {
            type: "reportStranger",
            ckey: this["box"]["thac"]["lastCkey"]
        })
    };
    Client["prototype"]["sendFilterLog"] = function(_idstr, _msg) {
        this["emitEvent"](false, {
            type: "filterLog",
            msg: _msg,
            idstr: _idstr
        })
    };
    Client["prototype"]["isTalking"] = function() {
        return this["box"]["thac"]["ckey"] !== 0
    };
    $(function() {
        var global = window;
        var engine = {};
        engine["nodes"] = {};
        engine["nodes"]["win"] = $(window);
        engine["nodes"]["doc"] = $(document);
        engine["nodes"]["htmlBody"] = $("html, body");
        engine["nodes"]["body"] = $("body");
        engine["nodes"]["topState"] = $("#top-state");
        engine["nodes"]["topStateOldIE"] = $("#top-state-old-browser-ie");
        engine["nodes"]["header"] = $("header");
        engine["nodes"]["headerInner"] = $(".header-inner");
        engine["nodes"]["boxInterfaceLeft"] = $(".box-interface-left");
        engine["nodes"]["boxInterfaceRight"] = $(".box-interface-right");
        engine["nodes"]["headerOptions"] = $("#header-options");
        engine["nodes"]["headerMenu"] = $("#header-menu");
        engine["nodes"]["headerMenuBox"] = $(".header-menu-box");
        engine["nodes"]["headerMenuCover"] = $("#header-menu-cover");
        engine["nodes"]["headerMenuLists"] = $(".header-menu-lists");
        engine["nodes"]["logo"] = $("#logo");
        engine["nodes"]["headerOnlineRecving"] = $("#header-online-recving");
        engine["nodes"]["headerOnlineRecved"] = $("#header-online-recved");
        engine["nodes"]["headerOnlineCount"] = $("#header-online-count");
        engine["nodes"]["introContent"] = $(".content#intro");
        engine["nodes"]["introStart"] = $("#intro-start");
        engine["nodes"]["introStartConnecting"] = $(".intro-interface-connecting");
        engine["nodes"]["introInterfaceLocation"] = $(".intro-interface-location");
        engine["nodes"]["introTermsLinks"] = $(".terms-link");
        engine["nodes"]["introAddTopicProposal"] = $(".intro-interface-add-topic-field");
        engine["nodes"]["introDownloadAppCover"] = $(".intro-download-app");
        engine["nodes"]["introDownloadAppCoverInner"] = $(".intro-download-app-inner");
        engine["nodes"]["introDownloadAppCoverSkip"] = $(".intro-download-app-skip, .intro-download-app-close");
        engine["nodes"]["selectLocation"] = $("#select-location");
        engine["nodes"]["selectLocationCover"] = $("#select-location-cover");
        engine["nodes"]["selectLocationCancel"] = $(".select-location-cancel");
        engine["nodes"]["selectLocationMobilePlaces"] = $(".mobile-select-location-place");
        engine["nodes"]["selectLocationMobilePlacesEveryOption"] = $(".mobile-select-location-place option");
        engine["nodes"]["selectLocationItems"] = $(".select-location-items");
        engine["nodes"]["selectLocationItemsEveryP"] = $(".select-location-items p");
        engine["nodes"]["selectLocationItemsCurrent"] = $(".select-location-items p.current");
        engine["nodes"]["boxContent"] = $(".content#box");
        engine["nodes"]["boxScreen"] = $(".box-screen");
        engine["nodes"]["boxInterface"] = $(".box-interface");
        engine["nodes"]["boxInterfaceTextArea"] = $(".box-interface-middle textarea");
        engine["nodes"]["boxSideMenuTop"] = $(".box-side-menu-top");
        engine["nodes"]["boxSideMenuBottom"] = $(".box-side-menu-bottom");
        engine["nodes"]["boxLog"] = $(".box-log");
        engine["nodes"]["boxOutSideLogInterface"] = $(".box-outside-log-interface");
        engine["nodes"]["boxSide"] = $(".box-side");
        engine["nodes"]["boxLikebtnEndThac"] = $(".log-static-interface-likebtn");
        engine["nodes"]["boxNotification"] = $(".box-log-notification");
        engine["nodes"]["boxNotificationMsg"] = $("#box-log-notification-message");
        engine["nodes"]["boxNotificationMsgCount"] = $("#box-log-notification-message-count");
        engine["nodes"]["boxNotificationTyping"] = $("#box-log-notification-typing");
        engine["nodes"]["logStaticEndTalk"] = $("#log-static-end-talk");
        engine["nodes"]["logStaticInterface"] = $(".log-static-interface");
        engine["nodes"]["logStaticInterfaceInviterLink"] = $(".log-static-inviter-link");
        engine["nodes"]["logDynamic"] = $("#log-dynamic");
        engine["nodes"]["logConnecting"] = $("#log-connecting");
        engine["nodes"]["logSearching"] = $("#log-searching");
        engine["nodes"]["logSearchingGlobal"] = $("#log-searching-global");
        engine["nodes"]["logSearchingLocation"] = $("#log-searching-location");
        engine["nodes"]["logSearchingInsideWord"] = $(".log-searching-location-inside-word");
        engine["nodes"]["logSearchingName"] = $(".log-searching-location-name");
        engine["nodes"]["logBegin"] = $("#log-begin");
        engine["nodes"]["logDisconnect"] = $(".log-disconnected");
        engine["nodes"]["logDisconnectYou"] = engine["nodes"]["logDisconnect"]["find"](".log-dis-you");
        engine["nodes"]["logDisconnectStranger"] = engine["nodes"]["logDisconnect"]["find"](".log-dis-stranger");
        engine["nodes"]["logStrangerTyping"] = $("#log-stranger-typing");
        engine["nodes"]["termsContent"] = $(".content#terms");
        engine["nodes"]["termsBackTo"] = $("#terms-back-to");
        engine["nodes"]["termsBackToIntro"] = $("#back-to-intro");
        engine["nodes"]["termsBackToBox"] = $("#back-to-box");
        engine["nodes"]["sd"] = $("#simple-dialogs");
        engine["nodes"]["sdCurrent"] = $("#sd-current");
        engine["nodes"]["sdCover"] = $("#sd-cover");
        engine["nodes"]["sdStack"] = $("#sd-stack");
        engine["nodes"]["spottedWidgetMobile"] = $(".spotted-widget-mobile");
        engine["nodes"]["spottedWidgetMobileFeed"] = $(".spotted-widget-inner-feed");
        engine["externalStorageFromSzobcyApp"] = {};
        engine["client"] = null;
        engine["domain"] = global["pageConfig"]["hostname"];
        engine["mobileDeviceType"] = "low";
        engine["webViewBasedApp"] = false;
        engine["kicked"] = false;
        engine["kickUrl"] = "http://google.pl";
        engine["tabFocusedEventTimer"] = null;
        engine["cookies"] = {};
        engine["cookies"]["prefix"] = "szo_";
        engine["cookies"]["oldLocationId"] = "seek_loc";
        engine["cookies"]["oldSoundState"] = "sideicons_sound_state";
        engine["cookies"]["oldIETopState"] = engine["cookies"]["prefix"] + "oldIETopState";
        engine["cookies"]["lastVisit"] = engine["cookies"]["prefix"] + "lastVisit";
        engine["cookies"]["locationId"] = engine["cookies"]["prefix"] + "location";
        engine["cookies"]["desktopNotSound"] = engine["cookies"]["prefix"] + "desktopNotifySound";
        engine["cookies"]["lastOnline"] = engine["cookies"]["prefix"] + "lastOnline";
        engine["cookies"]["lastOnlineTime"] = engine["cookies"]["prefix"] + "lastOnlineTime";
        engine["cookies"]["moveToBox"] = engine["cookies"]["prefix"] + "moveToBox";
        engine["cookies"]["clientHash"] = engine["cookies"]["prefix"] + "chash";
        engine["cookies"]["lastOnlineTimeMaxDiff"] = 1000 * 60 * 5;
        engine["cookies"]["foreverTime"] = 365 * 10;
        engine["ajaxOnline"] = {};
        engine["ajaxOnline"]["timer"] = null;
        engine["ajaxOnline"]["interval"] = 1000 * 60 * 2;
        engine["ajaxOnline"]["variationTimer"] = null;
        engine["ajaxOnline"]["variationInterval"] = 1000 * 12;
        engine["ajaxOnline"]["variationRange"] = [-10, 20];
        engine["backButton"] = {};
        engine["backButton"]["actions"] = [];
        engine["backButton"]["lastTime"] = 0;
        engine["init"] = function() {
            var that = this;
            if ($["isSiteMobile"]()) {
                if (global["pageConfig"]["pkg"] == "com.vuntime4.xenobcy") {
                    this["callApplicationAPI"]("openMarketForApp", "com.vuntime4.szesc");
                    setTimeout(function() {
                        window["location"]["replace"]("https://6obcy.pl/android")
                    }, 1000)
                }
                if (window["FastClick"]) FastClick["attach"](document["body"]);
                var iOS = iOSversion();
                var android = androidVersion();
                if (android == 4) {
                    $("body")["addClass"]("android-ics");
                    window["androidICS"] = true;
                    this["nodes"]["boxLog"]["css"]("overflow-y", "visible")
                }
                if (iOS != -1) {
                    if (iOS <= 4) this["mobileDeviceType"] = "low";
                    else if (iOS > 4) this["mobileDeviceType"] = "high"
                } else if (android != -1) {
                    if (android <= 4.2) this["mobileDeviceType"] = "low";
                    else if (android >= 4.3) this["mobileDeviceType"] = "high"
                } else this["mobileDeviceType"] = "low";
                if (this["mobileDeviceType"] == "low") {
                    $("body")["addClass"]("old-device");
                    if (android <= 4.2) $("body")["addClass"]("very-old-device")
                }
                this["webViewBasedApp"] = /6obcy\-official\-app/gi ["test"](navigator["userAgent"]);
                if (this["webViewBasedApp"]) this["nodes"]["body"]["addClass"]("android-webview");
                else {
                    this["nodes"]["body"]["addClass"]("regular-browser");
                    $(".only-android-webview")["remove"]()
                }
            }
            this["options"]["init"](this);
            this["headerTopState"]["init"](this);
            this["headerMenu"]["init"](this);
            this["selectLocation"]["init"](this);
            this["notify"]["init"](this);
            if (this["nodes"]["introContent"]["length"]) this["intro"]["init"](this);
            if (this["nodes"]["termsContent"]["length"]) this["terms"]["init"](this);
            if (this["nodes"]["boxContent"]["length"]) {
                this["filters"]["init"](this);
                this["log"]["init"](this);
                this["box"]["init"](this)
            }
            this["sd"]["init"](this);
            if ($["isSiteMobile"]() && this["nodes"]["spottedWidgetMobile"]["length"]) {
                this["spottedJSON"]["init"](this)
            }
            this["gml"]["init"](this);
            if (ieVersion <= 8) {
                if ($["cookie"](this["cookies"]["oldIETopState"]) !== "true") {
                    this["headerTopState"]["show"]("top-state-old-browser-ie", true, 1000 * 15);
                    $["cookie"](this["cookies"]["oldIETopState"], "true", {
                        expires: 1,
                        path: "/"
                    })
                }
            }
            if (!$["cookie"](this["cookies"]["lastVisit"])) this["firstVisit"]();
            $["cookie"](this["cookies"]["lastVisit"], moment()["locale"]("pl")["format"]("YYYY-MM-DD HH:mm"), {
                expires: 365 * 10,
                path: "/"
            });
            var lastOnlineTimeFromCookies = parseInt($["cookie"](this["cookies"]["lastOnlineTime"]));
            if (Date["now"]() - lastOnlineTimeFromCookies < this["cookies"]["lastOnlineTimeMaxDiff"]) {
                var lastOnlineFromCookies = parseInt($["cookie"](this["cookies"]["lastOnline"]));
                if (lastOnlineFromCookies > 0) this["setOnlineCount"](true, lastOnlineFromCookies)
            } else {
                $["removeCookie"](this["cookies"]["lastOnlineTime"], {
                    path: "/"
                });
                $["removeCookie"](this["cookies"]["lastOnline"], {
                    path: "/"
                })
            }
            $["removeCookie"](this["cookies"]["moveToBox"], {
                path: "/"
            });
            this["setContentTo"](global["pageConfig"]["currentContentId"]);
            this["getExternalDataStorageFromSzobcyApp"]();
            if (global["pageConfig"]["client"]) this["client"] = new Client(this);
            else this["noClientInit"]();
            if (global["pageConfig"]["mobile"] === true && global["pageConfig"]["mobileOldStyle"] === true) this["facebook"] = null;
            else this["facebook"] = new CFacebook(this);
            if (global["Tinycon"]) {
                Tinycon["setOptions"]({
                    ax: -1,
                    ay: -1,
                    width: 8,
                    height: 10,
                    font: "11px arial",
                    colour: "#FFFFFF",
                    background: "#FF0000",
                    fallback: false,
                    faviconUrl: "favicon.ico"
                })
            }
            if ($["isNavigationOnePage"]()) {
                if (this["webViewBasedApp"] == false && window["history"] && window["history"]["pushState"]) {
                    window["history"]["pushState"]("forward", null, location["search"]);
                    this["nodes"]["win"]["on"]("popstate", function() {
                        var lastTime = that["backButton"]["lastTime"];
                        that["backButton"]["lastTime"] = Date["now"]();
                        window["history"]["pushState"]("forward", null, location["search"]);
                        if (Date["now"]() - lastTime > 250) that["nodes"]["body"]["trigger"]("back-button");
                        else window["history"]["go"](-2)
                    })
                }
                this["nodes"]["body"]["on"]("back-button", function() {
                    var topAction = that["backButton"]["actions"][that["backButton"]["actions"]["length"] - 1];
                    if (topAction && topAction["fn"]()) that["backButtonRemoveAction"](topAction["id"])
                });
                this["options"]["on"]("o-exit-app", function(ev, node) {
                    that["confirmDialog"]("Czy na pewno chcesz wyłączyć 6obcy?", function(decision) {
                        if (decision) {
                            that["callApplicationAPI_bridgeEvent"]("pre-turn-off");
                            setTimeout(function() {
                                that["callApplicationAPI_bridgeEvent"]("turn-off")
                            }, 250)
                        }
                    }, "Wyłącz", "Anuluj", "exit-app")
                })
            }
            if ($["isSiteMobile"]() === false) {
                this["nodes"]["logo"]["on"]("click", function() {
                    if (that["nodes"]["termsContent"]["is"](":visible") || that["nodes"]["boxContent"]["is"](":visible")) window["location"]["href"] = "/" + (window["location"]["search"]["length"] > 1 ? window["location"]["search"] : "")
                })
            }
            $(window)["on"]("focus", function(ev) {
                that["tabActive"](true)
            });
            $(window)["on"]("blur", function(ev) {
                that["tabActive"](false)
            });
            document["onfocusin"] = function(ev) {
                that["tabActive"](true)
            };
            document["onfocusout"] = function(ev) {
                that["tabActive"](false)
            };
            if (document["hasFocus"]) this["tabActive"](document["hasFocus"]());
            $("img")["on"]("dragstart", function() {
                return false
            });
            $(".domain-name")["text"](this["domain"]);
            setTimeout(function() {
                $("#img-loader")["remove"]()
            }, 4e3);
            if (this["callApplicationAPI"]("isNativeLogLayoutView") === true) {
                this["nodes"]["body"]["addClass"]("native-log")
            }
            $(window)["on"]("keydown", function(e) {
                if (e["which"] === 8 && !$(e["target"])["is"]("input, textarea")) {
                    e["preventDefault"]()
                }
            });
            if ($["isSiteMobile"]() === false) {
                var firstshotTop = $(".header-da-firstshot");
                var secondshotTop = $(".header-da-secondshot");
                var firstshotLeft = $(".content-da-vertical-firstshot");
                var secondshotLeft = $(".content-da-vertical-secondshot");
                var firstshotRight = $(".content-da-vertical-firstshot2");
                var secondshotRight = $(".content-da-vertical-secondshot2");
                setTimeout(function() {
                    if (firstshotTop["height"]() <= 30) {
                        firstshotTop["css"]("display", "none");
                        secondshotTop["css"]("display", "block")
                    }
                    if (firstshotLeft["height"]() <= 100) {
                        firstshotLeft["css"]("display", "none");
                        secondshotLeft["css"]("display", "block")
                    }
                    if (firstshotRight["height"]() <= 100) {
                        firstshotRight["css"]("display", "none");
                        secondshotRight["css"]("display", "block")
                    }
                }, 5e3)
            }
            this["callApplicationAPI_bridgeEvent"]("engine-js-initialized")
        };
        engine["getExternalDataStorageFromSzobcyApp"] = function() {
            this["externalStorageFromSzobcyApp"] = {};
            try {
                var fromApp = this["callApplicationAPI"]("getExternalDataStorageJsonString");
                if (typeof fromApp == "string") this["externalStorageFromSzobcyApp"] = JSON["parse"](fromApp)
            } catch (e) {}
        };
        engine["setConnectionAcceptedHash"] = function(hash) {
            this["callApplicationAPI"]("setExternalDataStorageKeyString", "hash", hash);
            $["cookie"](this["cookies"]["clientHash"], hash, {
                expires: 365 * 10,
                path: "/"
            })
        };
        engine["getLastConnectionAcceptedHash"] = function() {
            if (typeof this["externalStorageFromSzobcyApp"] == "object" && typeof this["externalStorageFromSzobcyApp"]["hash"] == "string") {
                return this["externalStorageFromSzobcyApp"]["hash"]
            } else if ( !! $["cookie"](this["cookies"]["clientHash"])) {
                return $["cookie"](this["cookies"]["clientHash"])
            }
            return undefined
        };
        engine["tabActive"] = function(active) {
            $("body")["removeClass"]("tab-focus tab-blur")["addClass"]("tab-" + (active ? "focus" : "blur"));
            if (active) {
                clearTimeout(this["tabFocusedEventTimer"]);
                this["tabFocusedEventTimer"] = setTimeout(function() {
                    $("body")["trigger"]("tab-focused")
                }, 50)
            }
        };
        engine["getAdminEmail"] = function() {
            return "kontakt@6obcy.pl"
        };
        engine["isMobile"] = function() {
            return $["isSiteMobile"]()
        };
        engine["isWebViewBasedApp"] = function() {
            return this["webViewBasedApp"]
        };
        engine["console"] = function() {
            if (global["pageConfig"]["dev"] === false) return;
            var arr = ["(" + moment()["locale"]("pl")["format"]("DD-MM HH:mm:ss") + ") 6obcy:"]["concat"](Array["prototype"]["slice"]["call"](arguments));
            if (this["webViewBasedApp"]) {
                arr = arr["join"](" ")
            }
            if (global["console"]) {
                if (ieVersion && ieVersion <= 9) console["log"](arr);
                else {
                    if (typeof arr == "string") console["log"](arr);
                    else console["log"]["apply"](console, arr)
                }
            }
        };
        engine["alertDialog"] = function(message, myId, cb) {
            this["sd"]["alert"](message, myId, cb)
        };
        engine["confirmDialog"] = function(html, responseFn, okText, cancelText, myId) {
            this["sd"]["confirm"](html, responseFn, okText, cancelText, myId)
        };
        engine["firstVisit"] = function() {};
        engine["backButtonAddAction"] = function(id, actionFn) {
            if ($["isNavigationOnePage"]() == false) return;
            for (var i = 0; i < this["backButton"]["actions"]["length"]; i++) {
                if (this["backButton"]["actions"][i]["id"] == id) {
                    this["console"]("Trying to add existed back-button action:", id, actionFn, "[denied].");
                    return
                }
            }
            this["backButton"]["actions"]["push"]({
                id: id,
                fn: actionFn
            })
        };
        engine["backButtonRemoveAction"] = function(id) {
            if ($["isNavigationOnePage"]() == false) return;
            for (var i = 0; i < this["backButton"]["actions"]["length"]; i++) {
                if (this["backButton"]["actions"][i]["id"] == id) {
                    this["backButton"]["actions"]["splice"](i, 1)
                }
            }
        };
        engine["setContentTo"] = function(id) {
            var prev = $("#content > .content:visible")["length"] ? $("#content > .content:visible")["attr"]("id") : "none";
            $("#content > .content")["css"]("display", "none");
            $("#content > .content#" + id)["css"]("visbility", "hidden");
            $("#content > .content#" + id)["css"]("display", "block");
            if (prev != "none") {
                this["nodes"]["body"]["removeClass"]("content-" + prev);
                if (this[prev]["switchedOut"]) this[prev]["switchedOut"]()
            }
            if (id != "none") {
                this["nodes"]["body"]["addClass"]("content-" + id);
                if (this[id]["switchedTo"]) this[id]["switchedTo"](prev)
            }
            if (id == "box") {
                this["nodes"]["boxContent"]["triggerNoBubbling"]("refresh")
            }
            this["nodes"]["header"]["triggerNoBubbling"]("refreshWidth");
            $("#content > .content#" + id)["css"]("visbility", "visible")
        };
        engine["getVisibleContentId"] = function() {
            return $($("#content > .content:visible")[0])["attr"]("id")
        };
        engine["serverConnectedConnectionAccepted"] = function() {
            if (this["nodes"]["introContent"]["length"]) this["intro"]["startSetActive"](true)
        };
        engine["serverDisconnected"] = function() {
            if (this["nodes"]["introContent"]["length"]) {
                this["intro"]["startSetActive"](false)
            }
        };
        engine["setOnlineCount"] = function(show, count, nostore) {
            this["nodes"]["headerOnlineRecving"]["css"]("display", !show ? "inline" : "none");
            this["nodes"]["headerOnlineRecved"]["css"]("display", show ? "inline" : "none");
            if (show) {
                if (count < 0) count = 2;
                this["nodes"]["headerOnlineCount"]["text"](count);
                if (!nostore) {
                    $["cookie"](this["cookies"]["lastOnline"], count, {
                        path: "/"
                    });
                    $["cookie"](this["cookies"]["lastOnlineTime"], Date["now"](), {
                        path: "/"
                    })
                }
            }
        };
        engine["noClientInit"] = function() {
            var that = this;
            if (this["nodes"]["introContent"]["length"]) this["intro"]["startSetActive"](true);
            var lastOnline = -1;
            var range = this["ajaxOnline"]["variationRange"];
            var doAjaxOnlineFn = function() {
                $["ajax"]("ajax/online")["done"](function(count) {
                    count = parseInt(count);
                    that["setOnlineCount"](true, count);
                    lastOnline = count
                })
            };
            var doAjaxVariationOnlineFn = function() {
                if (lastOnline != -1) {
                    var variatedOnline = lastOnline + Math["round"](Math["random"]() * (range[1] - range[0]) + range[0]);
                    if (Date["now"]() - $["cookie"](that["cookies"]["lastOnlineTime"]) >= 1000 * 15) that["setOnlineCount"](true, variatedOnline < 100 ? 100 : variatedOnline, true)
                }
            };
            this["ajaxOnline"]["timer"] = setInterval(doAjaxOnlineFn, this["ajaxOnline"]["interval"]);
            this["ajaxOnline"]["variationTimer"] = setInterval(doAjaxVariationOnlineFn, this["ajaxOnline"]["variationInterval"]);
            doAjaxOnlineFn()
        };
        engine["kickMe"] = function() {
            if ($("body")["hasClass"]("android-webview")) return;
            this["kicked"] = true;
            window["location"]["href"] = this["kickUrl"]
        };
        engine["reloadWebsite"] = function(setBoxCookie) {
            this["engine"]["kicked"] = true;
            this["engine"]["intro"]["setBoxCookie"]();
            setTimeout(function() {
                if (window["location"]["reload"]) window["location"]["reload"](true);
                else window["location"]["href"] = window["location"]["href"]
            }, 1000 * 4)
        };
        engine["isWebsiteCovered"] = function() {
            return this["sd"]["isCoverVisible"]() || this["selectLocation"]["isCoverVisible"]() || this["headerMenu"]["isCoverVisible"]()
        };
        engine["callApplicationAPI"] = function() {
            var global = window;
            var args = Array["prototype"]["slice"]["call"](arguments);
            var functionName = args["shift"]();
            if (global["appBridge"] && global["appBridge"][functionName] && typeof global["appBridge"][functionName] == "function") {
                if (args["length"] > 0) {
                    if (args["length"] == 1) return global["appBridge"][functionName](args[0]);
                    else if (args["length"] == 2) return global["appBridge"][functionName](args[0], args[1]);
                    else if (args["length"] == 3) return global["appBridge"][functionName](args[0], args[1], args[2]);
                    else if (args["length"] == 4) return global["appBridge"][functionName](args[0], args[1], args[2], args[3]);
                    else if (args["length"] == 5) return global["appBridge"][functionName](args[0], args[1], args[2], args[3], args[4]);
                    else if (args["length"] == 6) return global["appBridge"][functionName](args[0], args[1], args[2], args[3], args[4], args[5]);
                    else if (args["length"] == 7) return global["appBridge"][functionName](args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
                    else if (args["length"] == 8) return global["appBridge"][functionName](args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
                    else if (args["length"] == 9) return global["appBridge"][functionName](args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8]);
                    else if (args["length"] == 10) return global["appBridge"][functionName](args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9])
                } else return global["appBridge"][functionName]()
            }
            return undefined
        };
        engine["callApplicationAPI_bridgeEvent"] = function(obj) {
            if (typeof obj == "object") this["callApplicationAPI"]("bridgeEvent", JSON["stringify"](obj));
            else if (typeof obj == "string") this["callApplicationAPI"]("bridgeEvent", JSON["stringify"]({
                type: obj
            }))
        };
        engine["openShareWindow"] = function() {
            var global = window;
            if ($["isSiteMobile"]()) {
                if (this["isWebViewBasedApp"]()) this["callApplicationAPI_bridgeEvent"]("open-share-window")
            } else {
                window["open"]("https://www.facebook.com/sharer.php?u=" + this["domain"], "Udostępnij", "width=660,height=385")
            }
        };
        engine["appTalkCacheUpdate"] = function(connectedWith, thac, conn_id, fromReconnected) {
            if (this["box"]["talk"]["ongoing"] === true) {
                var jsonThac = JSON["stringify"](thac, function(key, val) {
                    if (key == "list" || key == "maxLength" || key == "marginLength") return undefined;
                    return val
                });
                this["callApplicationAPI"]("setTalkCacheUp", connectedWith["host"], connectedWith["port"], conn_id ? conn_id : connectedWith["connId"], jsonThac, fromReconnected)
            }
        };
        engine["appTalkCacheUpdateThac"] = function(thac) {
            if (this["box"]["talk"]["ongoing"] === true) {
                var jsonThac = JSON["stringify"](thac, function(key, val) {
                    if (key == "list" || key == "maxLength" || key == "marginLength") return undefined;
                    return val
                });
                this["callApplicationAPI"]("setTalkCacheUpThac", jsonThac)
            }
        };
        engine["appTalkCacheClearArrayBuf"] = function() {
            this["callApplicationAPI"]("clearTalkCacheBuf")
        };
        engine["intro"] = {};
        engine["intro"]["engine"] = null;
        engine["intro"]["init"] = function(engine) {
            var that = this;
            this["engine"] = engine;
            var n = this["engine"]["nodes"];
            n["introStart"]["add"](n["introTermsLinks"])["each"](function() {
                $(this)["attr"]("href", $(this)["attr"]("href") + (location["search"]["length"] == 1 ? "" : location["search"]))
            });
            n["introStart"]["click"](function(ev) {
                if ($(this)["hasClass"]("disabled")) ev["preventDefault"]();
                else if ($["isNavigationOnePage"]()) {
                    ev["preventDefault"]();
                    that["engine"]["setContentTo"]("box");
                    that["engine"]["box"]["requestTalk"]()
                } else {
                    that["setBoxCookie"]()
                }
            });
            n["introTermsLinks"]["click"](function(ev) {
                if ($["isNavigationOnePage"]()) {
                    ev["preventDefault"]();
                    that["engine"]["setContentTo"]("terms")
                }
            });
            n["introAddTopicProposal"]["on"]("keydown", function(ev) {
                if (ev["keyCode"] == 13 && n["introAddTopicProposal"]["val"]()["length"] >= 5) {
                    $["ajax"]("ajax/topicProposal")["done"](function(result) {
                        that["engine"]["alertDialog"]("Temat zostanie dodany do głównej puli po zaakceptowaniu przez moderatora. :)", "topic-proposal-confirmation");
                        n["introAddTopicProposal"]["prop"]("disabled", true)
                    })
                }
            });
            if ($["isNavigationOnePage"]()) n["introStart"]["blurWhenMouseUp"]();
            if ($["isSiteMobile"]() && this["engine"]["isWebViewBasedApp"]() == false) this["initDownloadAppCover"]()
        };
        engine["intro"]["setBoxCookie"] = function() {
            $["cookie"](this["engine"]["cookies"]["moveToBox"], "true", {
                path: "/"
            })
        };
        engine["intro"]["startSetActive"] = function(active) {
            this["engine"]["nodes"]["introStart"]["removeClass"](active ? "disabled" : "enabled")["addClass"](active ? "enabled" : "disabled");
            this["engine"]["nodes"]["introStartConnecting"]["css"]("display", active ? "none" : "")
        };
        engine["intro"]["initDownloadAppCover"] = function() {
            var that = this;
            var global = window;
            var pg = global["pageConfig"];
            var androidVer = androidVersion();
            var scrollTimer = null;
            this["engine"]["nodes"]["win"]["scroll"](function(ev) {
                if (that["isVisibleDownloadAppCover"]()) {
                    clearTimeout(scrollTimer);
                    scrollTimer = setTimeout(function() {
                        var windowHeight = that["engine"]["nodes"]["win"]["height"]();
                        var scrollBottom = that["engine"]["nodes"]["win"]["scrollTop"]() + windowHeight;
                        var bottomEdge = that["engine"]["nodes"]["introDownloadAppCoverInner"]["offset"]()["top"] + that["engine"]["nodes"]["introDownloadAppCoverInner"]["innerHeight"]();

                        if (scrollBottom > bottomEdge) {
                            var newScrollTop = that["engine"]["nodes"]["win"]["scrollTop"]() - (scrollBottom - bottomEdge);
                            that["engine"]["nodes"]["win"]["scrollTop"](newScrollTop)
                        }
                    }, 50)
                }
            });
            if (androidVer < 4.4 || global["pageConfig"]["dev"] === true) {
                this["engine"]["nodes"]["introDownloadAppCoverSkip"]["click"](function(ev) {
                    that["showDownloadAppCover"](false)
                })
            }
            var shouldAppear = false;
            if (typeof pg == "object" && pg["mobile"] === true && pg["generatedType"] === "none") {
                if (pg["idac_sa"] === true) {
                    shouldAppear = true
                }
            }
            if (shouldAppear) {
                this["showDownloadAppCover"](true)
            }
        };
        engine["intro"]["showDownloadAppCover"] = function(show) {
            if (this["engine"]["isWebViewBasedApp"]()) show = false;
            this["engine"]["nodes"]["introDownloadAppCover"]["css"]("display", show ? "block" : "none")
        };
        engine["intro"]["isVisibleDownloadAppCover"] = function() {
            return this["engine"]["nodes"]["introDownloadAppCover"]["css"]("display") != "none"
        };
        engine["headerTopState"] = {};
        engine["headerTopState"]["engine"] = null;
        engine["headerTopState"]["timeouts"] = {};
        engine["headerTopState"]["hideDuration"] = 500;
        engine["headerTopState"]["lastTotalHeight"] = 0;
        engine["headerTopState"]["mobileDaJsCode"] = "";
        engine["headerTopState"]["refreshHeightInterval"] = null;
        engine["headerTopState"]["resizeTimer"] = null;
        engine["headerTopState"]["init"] = function(engine) {
            var that = this;
            this["engine"] = engine;
            this["engine"]["nodes"]["topState"]["on"]("click", ".top-state-unit:not(.top-state-nohide)", function() {
                that["show"]($(this)["attr"]("id"), $(this)["css"]("display") != "block")
            });
            this["mobileDaJsCode"] += '<div class=top-state-unit top-state-nohide id=top-state-da><div style=margin-top: -2px>';
            this["mobileDaJsCode"] += '<div class=ns_placement id=QAPS_AKPL_c2ace97ab934100505f13e8153484776></div>';
            this["mobileDaJsCode"] += '<script type=text/javascript async=async src=http://adsearch.adkontekst.pl/_/ads2/?QAPS_AKPL=c2ace97ab934100505f13e8153484776></script>';
            this["mobileDaJsCode"] += "</div></div>";
            if (global["pageConfig"]["dev"] === true) {
                this["checkTopStateDa"]();
                this["engine"]["nodes"]["win"]["resize"](function() {
                    clearTimeout(that["resizeTimer"]);
                    that["resizeTimer"] = setTimeout(function() {
                        that["checkTopStateDa"]()
                    }, 150)
                })
            }
        };
        engine["headerTopState"]["checkTopStateDa"] = function(clear) {
            var that = this;
            var minSize = 500;
            if (window["innerHeight"] < minSize || clear === true) {
                clearInterval(this["refreshHeightInterval"]);
                this["engine"]["nodes"]["topState"]["find"]("#top-state-da")["remove"]();
                this["engine"]["nodes"]["header"]["triggerNoBubbling"]("refreshHeight");
                this["lastTotalHeight"] = 0
            }
            if (window["innerHeight"] >= minSize) {
                if ($["isSiteMobile"]() && this["engine"]["isWebViewBasedApp"]() == false && global["pageConfig"]["dev"] === true) {
                    if (window["innerHeight"] >= 500 && this["engine"]["nodes"]["topState"]["find"]("#top-state-da")["length"] == 0) {
                        this["engine"]["nodes"]["topState"]["append"](this["mobileDaJsCode"])
                    }
                    clearInterval(this["refreshHeightInterval"]);
                    this["refreshHeightInterval"] = setInterval(function() {
                        var curHeight = that["engine"]["nodes"]["topState"]["innerHeight"]();
                        if (curHeight != that["lastTotalHeight"]) {
                            that["engine"]["nodes"]["header"]["triggerNoBubbling"]("refreshHeight");
                            that["lastTotalHeight"] = curHeight;
                            if (that["lastTotalHeight"] >= 45) clearInterval(that["refreshHeightInterval"])
                        }
                    }, 1000)
                }
            }
        };
        engine["headerTopState"]["show"] = function(id, show, a, b) {
            var that = this;
            var elem = $("#" + id);
            if (elem["length"] == 0) return;
            elem["stop"]();
            clearTimeout(this["timeouts"][id]);
            if (show) {
                elem["css"]("display", "block");
                this["engine"]["nodes"]["header"]["triggerNoBubbling"]("refreshHeight");
                this["engine"]["nodes"]["boxInterface"]["triggerNoBubbling"]("refresh");
                if (a) {
                    this["timeouts"][id] = setTimeout(function() {
                        that["show"](id, false, b)
                    }, a)
                }
            } else {
                if (a) {
                    elem["css"]("display", "none");
                    this["engine"]["nodes"]["header"]["triggerNoBubbling"]("refreshHeight");
                    this["engine"]["nodes"]["boxInterface"]["triggerNoBubbling"]("refresh")
                } else {
                    elem["css"]("display", "block");
                    elem["velocity"]({
                        height: 0,
                        "padding-top": 0,
                        "padding-bottom": 0
                    }, {
                        duration: this["hideDuration"],
                        easing: "linear",
                        progress: function(now) {
                            that["engine"]["nodes"]["header"]["triggerNoBubbling"]("refreshHeight");
                            that["engine"]["nodes"]["boxInterface"]["triggerNoBubbling"]("refresh")
                        },
                        complete: function() {
                            elem["css"]("display", "none")
                        }
                    })
                }
            }
        };
        engine["headerMenu"] = {};
        engine["headerMenu"]["init"] = function(engine) {
            var that = this;
            this["engine"] = engine;
            var n = this["engine"]["nodes"];
            n["headerOptions"]["click"](function(ev) {
                that["show"](true)
            });
            n["doc"]["click"](function(ev) {
                if (!$(ev["target"])["isIn"](n["headerMenu"])) that["show"](false)
            });
            global["headerMenuToggle"] = function(show) {
                that["show"](!that["isOpen"]())
            };
            this["engine"]["options"]["on"]("o-any", function(ev, node) {
                var option = that["engine"]["options"]["getOptionFromNode"](node);
                if (typeof option == "object" && option["switchToHM"]) that["switchTo"](option["switchToHM"])
            })
        };
        engine["headerMenu"]["isCoverVisible"] = function() {
            return this["engine"]["nodes"]["headerMenuCover"]["css"]("display") != "none"
        };
        engine["headerMenu"]["isOpen"] = function() {
            return !this["engine"]["nodes"]["headerMenu"]["isPseudoHidden"]()
        };
        engine["headerMenu"]["show"] = function(show, noDelay) {
            var that = this;
            var n = this["engine"]["nodes"];
            if (show && n["headerMenu"]["isPseudoHidden"]()) {
                if (noDelay) {
                    this["switchTo"]("main");
                    n["headerMenu"]["addClass"]("mobile-gpu-on mobile-gpu-childs-on");
                    n["headerMenu"]["triggerNoBubbling"]("refreshTop")["css"]("visibility", "hidden")["disablePseudoHidden"]();
                    n["headerMenu"]["triggerNoBubbling"]("refreshHeaderMenu")["css"]("visibility", "visible");
                    n["headerMenuCover"]["css"]("display", "block");
                    if (n["headerMenuCover"]["css"]("display") == "none") n["headerMenuCover"]["css"]("display", "block");
                    n["headerMenuLists"]["scrollTop"](0);
                    this["engine"]["backButtonAddAction"]("header-menu-back", function() {
                        that["show"](false);
                        return true
                    })
                } else setTimeout(function() {
                    that["show"](show, true)
                }, 0)
            } else if (!show && n["headerMenu"]["isPseudoHidden"]() == false) {
                n["headerMenu"]["removeClass"]("mobile-gpu-on mobile-gpu-childs-on");
                n["headerMenu"]["enablePseudoHidden"]();
                n["headerMenuCover"]["css"]("display", "none");
                if (n["headerMenuCover"]["css"]("display") == "block") n["headerMenuCover"]["css"]("display", "none");
                this["engine"]["backButtonRemoveAction"]("header-menu-back")
            }
        };
        engine["headerMenu"]["switchTo"] = function(name) {
            $(".header-menu-lists > ul")["css"]("display", "none");
            $(".header-menu-lists > ul.header-menu-" + name)["css"]("display", "block");
            this["engine"]["nodes"]["headerMenu"]["triggerNoBubbling"]("refreshHeaderMenu")
        };
        engine["selectLocation"] = {};
        engine["selectLocation"]["engine"] = null;
        engine["selectLocation"]["useLocativeOnContent"] = false;
        engine["selectLocation"]["init"] = function(engine) {
            var that = this;
            this["engine"] = engine;
            var n = this["engine"]["nodes"];
            var oldRememberedLocation = $["cookie"](this["engine"]["cookies"]["oldLocationId"]);
            if (typeof oldRememberedLocation == "string") {
                if (oldRememberedLocation == "global") oldRememberedLocation = 0;
                else {
                    var oldRememberedLocation = /(?:voivo)([0-9]+)/i ["exec"](oldRememberedLocation);
                    if (typeof oldRememberedLocation == "object" && oldRememberedLocation !== null && oldRememberedLocation["hasOwnProperty"](1)) oldRememberedLocation = parseInt(oldRememberedLocation[1]);
                    else oldRememberedLocation = 0
                }
                if (!isNaN(oldRememberedLocation) && $["cookie"](this["engine"]["cookies"]["locationId"]) === undefined) {
                    $["cookie"](this["engine"]["cookies"]["locationId"], oldRememberedLocation);
                    $["removeCookie"](this["engine"]["cookies"]["oldLocationId"], {
                        path: "/"
                    })
                }
            }
            var rememberedLocation = parseInt($["cookie"](this["engine"]["cookies"]["locationId"]));
            var rememberedLocationIsNan = isNaN(rememberedLocation);
            if (rememberedLocationIsNan) rememberedLocation = 0;
            this["setLocation"](rememberedLocation, rememberedLocationIsNan);
            n["introInterfaceLocation"]["click"](function(ev) {
                if ($(this)["hasClass"]("mobile-select-location-container") == false) that["show"](true)
            });
            n["doc"]["clickWhenOutOf"](n["selectLocation"], function(ev) {
                that["show"](false)
            });
            n["selectLocationCancel"]["click"](function(ev) {
                that["show"](false)
            });
            n["selectLocationItemsEveryP"]["click"](function() {
                that["locationChanged"](true, this)
            });
            n["body"]["on"]("change", ".mobile-select-location-place", function() {
                that["locationChanged"](false, this)
            });
            n["body"]["on"]("click", ".mobile-select-location-place", function() {
                that["mobileListOpened"]()
            });
            this["engine"]["options"]["on"]("o-location", function(ev, node) {
                if ($(node)["hasClass"]("mobile-select-location-container") == false) that["show"](true)
            });
            this["updateLocationsToApp"]();
            window["doUpdateLocations"] = function() {
                that["updateLocationsToApp"]()
            };
            window["setLocationID"] = function(id) {
                that["setLocation"](id)
            };
            window["getLocationID"] = function() {
                that["engine"]["callApplicationAPI_bridgeEvent"]({
                    type: "update-location-id",
                    id: that["getLocationId"]()
                })
            }
        };
        engine["selectLocation"]["updateLocationsToApp"] = function() {
            var each = $(".select-location-items p");
            var list = [];
            for (var i = 0; i < each["length"]; i++) {
                list["push"]({
                    name: $(each[i])["children"](".name")["text"](),
                    id: this["getLocationId"]($(each[i]))
                })
            }
            this["engine"]["callApplicationAPI_bridgeEvent"]({
                type: "update-locations",
                list: list,
                current_id: this["getLocationId"]()
            })
        };
        engine["selectLocation"]["locationChanged"] = function(desktop, elem) {
            var elem = desktop ? $(elem) : $(elem)["find"]("option:selected");
            var id = /(?:location\-id\-)([0-9]+)/gi ["exec"](elem["attr"]("class"))[1];
            this["setLocation"](id);
            var that = this;
            if ($["isSiteMobile"]()) setTimeout(function() {
                that["show"](false)
            }, 200);
            else this["show"](false)
        };
        engine["selectLocation"]["mobileListOpened"] = function() {
            var that = this;
            if ($["isSiteMobile"]()) {
                var temp = this["engine"]["nodes"]["body"]["scrollTop"]();
                setTimeout(function() {
                    that["engine"]["nodes"]["body"]["scrollTop"](temp)
                }, 1000)
            }
        };
        engine["selectLocation"]["isCoverVisible"] = function() {
            return this["engine"]["nodes"]["selectLocationCover"]["css"]("display") != "none"
        };
        engine["selectLocation"]["show"] = function(show, notDelayed) {
            var that = this;
            if (show && this["engine"]["callApplicationAPI"]("internalSelectLocation") === true) {
                this["engine"]["callApplicationAPI_bridgeEvent"]("show-select-location");
                return
            }
            var n = this["engine"]["nodes"];
            if (show && !notDelayed) {
                setTimeout(function() {
                    that["show"](true, true)
                }, 0);
                return
            }
            if (show && n["selectLocation"]["isPseudoHidden"]()) {
                n["selectLocation"]["addClass"]("mobile-gpu-on mobile-gpu-childs-on");
                n["selectLocation"]["disablePseudoHidden"]()["triggerNoBubbling"]("refresh");
                if ($["isSiteMobile"]()) {
                    n["selectLocationCover"]["css"]("display", "block");
                    $(n["selectLocationItems"]["find"](".current")[0])["scrollForCenterElement"](true)
                } else n["selectLocation"]["animateScrollForElement"](25);
                this["engine"]["backButtonAddAction"]("select-location-back", function() {
                    that["show"](false);
                    return true
                })
            } else if (!show && !n["selectLocation"]["isPseudoHidden"]()) {
                n["selectLocationMobilePlaces"]["blur"]();
                n["selectLocationCover"]["css"]("display", "none");
                n["selectLocation"]["removeClass"]("mobile-gpu-on mobile-gpu-childs-on");
                n["selectLocation"]["enablePseudoHidden"]();
                this["engine"]["backButtonRemoveAction"]("select-location-back");
                if ($["isSiteMobile"]()) n["body"]["scrollTop"](0)
            }
        };
        engine["selectLocation"]["setLocation"] = function(id, notChangeLabel) {
            this["engine"]["nodes"]["selectLocationItemsEveryP"]["removeClass"]("current");
            this["engine"]["nodes"]["selectLocationMobilePlacesEveryOption"]["removeAttr"]("selected");
            if ($(".select-location-items p.location-id-" + id)["length"] == 0) id = 0;
            $(".select-location-items p.location-id-" + id)["addClass"]("current");
            $("select.mobile-select-location-place option.location-id-" + id)["prop"]("selected", true);
            if ($["isSiteMobile"]()) {
                $(".select-location-items p")["find"](".selectedLabel")["css"]("display", "");
                $(".select-location-items p.location-id-" + id)["find"](".selectedLabel")["css"]("display", "inline")
            }
            var locationName = "";
            if (!notChangeLabel) {
                locationName = this["useLocativeOnContent"] ? $(".select-location-items p.current")["data"]("locative") : $(".select-location-items p.current")["find"](".name")["text"]();
                $(".intro-interface-location-label .notchoosen")["css"]("display", "none");
                $(".intro-interface-location-label .choosen")["css"]("display", "inline")
            } else locationName = $(".select-location-items p.current")["find"](".name")["text"]();
            $("#intro-interface-location-button")["text"](locationName);
            $["cookie"](this["engine"]["cookies"]["locationId"], id, {
                expires: this["engine"]["cookies"]["foreverTime"],
                path: "/"
            })
        };
        engine["selectLocation"]["getLocationId"] = function(elem) {
            var elem_ = elem ? elem : $(".select-location-items p.current");
            if (elem_ === null || elem_ === undefined) return 0;
            var classesStr = elem_["attr"]("class");
            return parseInt(/(?:location\-id\-)([0-9]+)/gi ["exec"](classesStr)[1]) || 0
        };
        engine["selectLocation"]["getCurrentLocative"] = function() {
            return $(".select-location-items p.current")["data"]("locative")
        };
        engine["log"] = {};
        engine["log"]["init"] = function(engine) {
            this["engine"] = engine;
            var that = this;
            var n = this["engine"]["nodes"];
            this["onContentChangedAlwaysScrollToBottom"] = false;
            this["bottomEdgeErrMarginPx"] = 60;
            this["breaking"] = {};
            this["breaking"]["minLenMaxErr"] = 48;
            this["breaking"]["minLen"] = 256 - this["breaking"]["minLenMaxErr"];
            this["archiving"] = {};
            this["archiving"]["chunkLengthMobileHighEnd"] = 25;
            this["archiving"]["chunkLengthMobileLowEnd"] = 25;
            this["archiving"]["chunkLengthDesktop"] = 256;
            this["archiving"]["chunkOpenHTML"] = '<button class=log-chunk-open-btn>[Pokaż wcześniejsze]</button>';
            this["archiving"]["chunkHTML"] = '<div class=log-chunk log-chunk-closed><div class=log-chunk-interface>' + this["archiving"]["chunkOpenHTML"] + '</div><div class=log-chunk-content></div></div>';
            this["last3"] = {};
            this["last3"]["list"] = [];
            this["last3"]["max"] = 4;
            this["last3"]["dots"] = false;
            this["scrollTimer"] = null;
            this["resizeTimer"] = null;
            n["boxLog"]["scroll"](function() {
                clearTimeout(that["scrollTimer"]);
                that["scrollTimer"] = setTimeout(function() {
                    that["notificationCheckVisibility"]()
                }, 150)
            });
            n["boxNotification"]["on"]("click", function(ev) {
                n["boxLog"]["scrollToBottom"]();
                that["notificationCheckVisibility"]()
            });
            n["win"]["resize"](function() {
                clearTimeout(that["resizeTimer"]);
                that["resizeTimer"] = setTimeout(function() {
                    if (that["isEndTalkDisplayed"]()) that["testEndTalkType"]();
                    n["boxLog"]["scrollToBottom"]();
                    that["notificationCheckVisibility"]()
                }, 150)
            });
            n["win"]["on"]("resize_after_style", function(ev) {
                if (that["isEndTalkDisplayed"]()) that["testEndTalkType"]()
            });
            n["logDynamic"]["on"]("click", ".log-msg-show-full", function(ev) {
                var isPreview = $(this)["parent"]()["hasClass"]("show-preview");
                $(this)["parent"]()["addClass"](isPreview ? "show-full" : "show-preview")["removeClass"](isPreview ? "show-preview" : "show-full");
                that["testEndTalkType"]()
            });
            n["logDynamic"]["on"]("click", ".log-chunk-open-btn", function(ev) {
                var chunkNode = $(this)["parent"]()["parent"]();
                var chunkNodeH = chunkNode["innerHeight"]();
                chunkNode["addClass"]("log-chunk-opened")["removeClass"]("log-chunk-closed");
                var scrollCorrectionMoveDistance = chunkNode["innerHeight"]() - chunkNodeH;
                n["boxLog"]["scrollTop"](n["boxLog"]["scrollTop"]() + scrollCorrectionMoveDistance)
            });
            n["logDynamic"]["on"]("click", ".share-button-img", function(ev) {
                that["engine"]["openShareWindow"]()
            });
            n["logDynamic"]["on"]("click", ".clickable-url", function(ev) {
                var elem = $(this);
                if (elem["hasClass"]("clickable-url-id-fb-photo")) {
                    that["engine"]["sd"]["showPicture"](elem["attr"]("href"));
                    ev["preventDefault"]()
                } else if ($["isSiteMobile"]()) {
                    if (elem["hasClass"]("clickable-url-id-yt-video")) {
                        var youtubeClipTitle = elem["data"]("yt-title");
                        if (youtubeClipTitle === null || youtubeClipTitle === "") youtubeClipTitle = undefined;
                        if (that["engine"]["isWebViewBasedApp"]()) {
                            that["engine"]["callApplicationAPI_bridgeEvent"]({
                                type: "copy-to-clipboard",
                                label: "youtube clip link",
                                desc: typeof youtubeClipTitle == "string" ? "link youtube:m m" + youtubeClipTitle : "link do filmu youtube",
                                text: elem["attr"]("href")
                            })
                        } else {
                            that["openYoutubeConfirmDialog"](elem["attr"]("href"), youtubeClipTitle)
                        }
                        ev["preventDefault"]()
                    }
                }
            });
            if ($["isSiteMobile"]()) {
                window["openYoutubeConfirmDialog"] = function(a, b) {
                    that["openYoutubeConfirmDialog"](a, b)
                };
                window["showProfilePicture"] = function(a) {
                    that["engine"]["sd"]["showPicture"](a)
                }
            }
        };
        engine["log"]["openYoutubeConfirmDialog"] = function(href, youtubeClipTitle) {
            var dialogText = "Otworzyć klip youtube?</br><i>" + (typeof youtubeClipTitle == "string" ? youtubeClipTitle : href) + "</i>";
            this["engine"]["confirmDialog"](dialogText, function(decision) {
                if (decision) window["open"](href, "_blank")
            }, "Otwórz", "Anuluj", "open-youtube-clip-in-new-tab")
        };
        engine["log"]["isBottomNear"] = function() {
            return this["engine"]["nodes"]["boxLog"]["isScrolledToBottom"](this["bottomEdgeErrMarginPx"])
        };
        engine["log"]["archivingTest"] = function() {
            var n = this["engine"]["nodes"];
            var chunkLength = this["archiving"]["chunkLengthDesktop"];
            if ($["isSiteMobile"]()) {
                if (this["engine"]["mobileDeviceType"] == "low") chunkLength = this["archiving"]["chunkLengthMobileLowEnd"];
                else chunkLength = this["archiving"]["chunkLengthMobileHighEnd"]
            }
            if (n["logDynamic"]["childrensCount"]() >= chunkLength * 2) {
                var newChunkDOM = $(this["archiving"]["chunkHTML"]);
                var childs = n["logDynamic"]["children"]()["slice"](0, chunkLength);
                childs["moveDOMTo"](newChunkDOM["find"](".log-chunk-content"));
                newChunkDOM["find"]("div.log-chunk-opened")["removeClass"]("log-chunk-opened")["addClass"]("log-chunk-closed");
                n["logDynamic"]["prepend"](newChunkDOM)
            }
        };
        engine["log"]["contentChanged"] = function(type) {
            var n = this["engine"]["nodes"];
            n["boxSide"]["triggerNoBubbling"]("refresh");
            var immidiatellyScrollToBottom = type === "your-msg" || type === "disconnect" || type === "end-talk";
            var scrollToBottom = this["onContentChangedAlwaysScrollToBottom"] || this["isBottomNear"]() || immidiatellyScrollToBottom;
            if (scrollToBottom) n["boxLog"]["scrollToBottom"]();
            else if (type === "strangers-msg") this["notificationMsgCountIncrease"]()
        };
        engine["log"]["putHTML"] = function(html) {
            this["engine"]["nodes"]["logDynamic"]["html"](html);
            this["engine"]["nodes"]["boxLog"]["scrollToBottom"]();
            var lastIDN = parseInt(this["engine"]["nodes"]["logDynamic"]["find"]("p.log-msg[data-identify]:last")["attr"]("data-identify"));
            if (isNaN(lastIDN) == false) this["engine"]["box"]["message"]["identifyNumber"] = lastIDN
        };
        engine["log"]["put"] = function(classes, msg, identifyNumber) {
            if ($["isSiteMobile"]() == false) msg = '<span class=inner tipsy-active data-tipsy-time=' + Date["now"]() + '><span>' + msg + "</span></span>";
            var newLog = $(document["createElement"]("p"));
            newLog["addClass"]("log-entry " + classes);
            newLog["html"](msg);
            newLog["appendTo"](this["engine"]["nodes"]["logDynamic"]);
            if (identifyNumber !== undefined) {
                newLog["attr"]("data-identify", identifyNumber)
            }
            this["archivingTest"]();
            var changedType = undefined;
            if (classes["indexOf"]("log-you") != -1) changedType = "your-msg";
            else if (classes["indexOf"]("log-stranger") != -1) changedType = "strangers-msg";
            this["contentChanged"](changedType);
            return newLog
        };
        engine["log"]["prohMsg"] = function(identifyNumber, alertText) {
            var elem = $(".log-msg.log-you[data-identify=" + identifyNumber + "]");
            if (elem !== undefined) {
                elem = elem["last"]();
                if (typeof alertText == "string" && alertText["trim"]()["length"] > 0) {
                    this["engine"]["alertDialog"](alertText, "proh-msg-alert", function() {
                        if (elem !== undefined) elem["remove"]()
                    })
                } else {
                    if (elem !== undefined) elem["remove"]()
                }
            }
        };
        engine["log"]["putMsg"] = function(stranger, data, identifyNumber) {
            var that = this;
            var buf = null;
            var breakMsgAt = false;
            if (data["d"]["length"] >= this["breaking"]["minLen"] && data["d"]["length"] - this["breaking"]["minLen"] > this["breaking"]["minLenMaxErr"]) {
                breakMsgAt = this["breaking"]["minLen"]
            }
            if (breakMsgAt !== false && data["ua"]) {
                var collision = data["ua"]["isAnyUrlAreaCollide"](breakMsgAt);
                if (collision !== null) {
                    var leftDistance = Math["abs"](breakMsgAt - collision["s"]);
                    var rightDistance = Math["abs"](breakMsgAt - (collision["e"] + 1));
                    if (leftDistance < rightDistance) breakMsgAt = collision["s"];
                    else if (leftDistance >= rightDistance) breakMsgAt = collision["e"] + 1
                }
                if (breakMsgAt == 0) breakMsgAt = false;
                else if (breakMsgAt == data["d"]["length"]) breakMsgAt = false
            }
            if (breakMsgAt !== false) {
                var preview = data["d"]["substr"](0, breakMsgAt);
                preview = $("<i>")["text"](preview)["html"]();
                buf = '<span class=show-preview>';
                buf += '<span class=log-msg-preview>' + preview + "</span>";
                buf += '<span class=log-msg-full>' + data["d"] + "</span>";
                buf += '<span class=log-msg-show-full>';
                buf += '&#32;<span class=show>... (Pokaż całość)</span><span class=hide>(Schowaj)</span>';
                buf += "</span></span>"
            } else buf = '<span class=log-msg-text>' + data["d"] + "</span>";
            var logContent = '<span class=nick>' + (stranger ? lang["log_stranger_nick"] : lang["log_you_nick"]) + ":</span> " + buf;
            var node = this["put"]("log-msg " + (stranger ? "log-stranger" : "log-you"), logContent, identifyNumber);
            node["find"](".log-msg-preview, .log-msg-full, .log-msg-text")["each"](function() {
                that["engine"]["filters"]["apply"]("put", $(this), node)
            });
            this["engine"]["callApplicationAPI"]("pushTalkCacheEvent", node["prop"]("outerHTML"));
            this["engine"]["box"]["message"]["latestWho"] = stranger ? 1 : 0;
            this["last3Push"](stranger ? "stranger" : "me", data["d"]["maxLength"](128));
            if (stranger) {
                this["showStrangerTyping"](false);
                this["engine"]["notify"]["runFor"]("new-msg", data["d"])
            }
        };
        engine["log"]["putTopic"] = function(topic, stranger) {
            var node = this["put"]("log-topic " + (stranger ? "log-stranger" : "log-you"), "<img src=images/icons/dice.png alt=Temat: ><span>" + topic["escapeHTML"]() + "</span>");
            this["engine"]["callApplicationAPI"]("pushTalkCacheEvent", node["prop"]("outerHTML"));
            this["last3Push"]("dice", topic);
            if (stranger) this["engine"]["notify"]["runFor"]("new-msg", topic)
        };
        engine["log"]["putSvLog"] = function(log) {
            if (typeof log != "string" || this["engine"]["box"]["talk"]["ongoing"] == false) return;
            if (log == "6obcy.pl: Spodobali Ci się obcy? Poleć znajomym! Kliknij #ARROW_R# #SHARE#") log = "Zaproś znajomych na 6obcy.in :) <span style=white-space: nowrap;>Kliknij #ARROW_R# #SHARE#</span>";
            log = log["replace"](/#SHARE(NOW)?#/g, "<img class=share-button-img src=images/shareButton.png>");
            log = log["replace"](/#ARROW_R#/g, "<span class=log-arrow-sv-log>-&gt;</span>");
            log = log["replace"](/#NOMOBILE#/g, "");
            var node = this["put"]("log-svlog ", "# " + log["trim"]());
            this["engine"]["callApplicationAPI"]("pushTalkCacheEvent", node["prop"]("outerHTML"))
        };
        engine["log"]["showConnecting"] = function(show) {
            this["engine"]["nodes"]["logConnecting"]["css"]("display", show ? "block" : "none");
            this["contentChanged"]();
            this["engine"]["callApplicationAPI_bridgeEvent"]({
                type: "native-log-header-show",
                what: "connecting",
                val: show
            })
        };
        engine["log"]["showSearching"] = function(show) {
            var n = this["engine"]["nodes"];
            if (show) {
                var locationId = this["engine"]["selectLocation"]["getLocationId"]();
                var locationGlobal = locationId == 0;
                var locationOutOfPoland = locationId == 17;
                n["logSearchingInsideWord"]["css"]("display", locationOutOfPoland ? "none" : "");
                n["logSearchingName"]["text"](this["engine"]["selectLocation"]["getCurrentLocative"]());
                n["logSearchingGlobal"]["css"]("display", locationGlobal ? "block" : "");
                n["logSearchingLocation"]["css"]("display", locationGlobal ? "" : "block")
            }
            n["logSearching"]["css"]("display", show ? "block" : "none");
            this["contentChanged"]();
            this["engine"]["callApplicationAPI_bridgeEvent"]({
                type: "native-log-header-show",
                what: "searching",
                val: show
            })
        };
        engine["log"]["showTalkStarted"] = function(show) {
            this["engine"]["nodes"]["logBegin"]["css"]("display", show ? "block" : "none");
            this["engine"]["nodes"]["logBegin"]["find"](_sz8x[2e3])["data"]("tipsy-time", Date["now"]());
            this["contentChanged"]();
            if (show) {
                this["last3Push"]("blank", this["engine"]["nodes"]["logBegin"]["find"](".main-part")["text"]());
                this["engine"]["notify"]["runFor"]("new-talk")
            }
            this["engine"]["callApplicationAPI_bridgeEvent"]({
                type: "native-log-header-show",
                what: "begin-talk",
                val: show
            })
        };
        engine["log"]["showStrangerTyping"] = function(show) {
            this["engine"]["nodes"]["logStrangerTyping"]["css"]("display", show ? "block" : "none");
            this["contentChanged"]("typing");
            this["notificationCheckVisibility"]();
            this["engine"]["callApplicationAPI_bridgeEvent"]({
                type: "native-log-footer-show",
                what: "typing",
                val: show
            })
        };
        engine["log"]["showDisconnect"] = function(show, stranger) {
            this["engine"]["nodes"]["logDisconnect"]["css"]("display", show ? "block" : "none");
            this["engine"]["nodes"]["logDisconnect"]["find"](_sz8x[2e3])["data"]("tipsy-time", Date["now"]());
            if (show == true) {
                this["engine"]["nodes"]["logDisconnectYou"]["css"]("display", stranger ? "none" : "inline");
                this["engine"]["nodes"]["logDisconnectStranger"]["css"]("display", stranger ? "inline" : "none")
            }
            this["contentChanged"]("disconnect");
            this["last3Push"]("blank", this["engine"]["nodes"][stranger ? "logDisconnectStranger" : "logDisconnectYou"]["text"]());
            if (show && stranger) {
                this["engine"]["notify"]["runFor"]("end-talk", stranger)
            }
            this["engine"]["callApplicationAPI_bridgeEvent"]({
                type: "native-log-footer-show",
                what: "dis",
                val: show,
                stranger: stranger
            })
        };
        engine["log"]["switchEndTalkType"] = function(sticky) {
            this["engine"]["nodes"]["boxScreen"]["addClass"](sticky ? "log-interface-sticky" : "log-interface-nonsticky")["removeClass"](sticky ? "log-interface-nonsticky" : "log-interface-sticky")
        };
        engine["log"]["testEndTalkType"] = function() {
            var n = this["engine"]["nodes"];
            var logHeight = n["boxLog"]["getChildrensHeight"]() - n["logStaticEndTalk"]["visibleInnerHeight"]();
            logHeight += n["logStaticEndTalk"]["visibleInnerHeight"]() + n["boxOutSideLogInterface"]["visibleInnerHeight"]();
            this["switchEndTalkType"]($["isSiteMobile"]() && logHeight > n["boxScreen"]["height"]());
            n["boxScreen"]["triggerNoBubbling"]("refreshBoxLogHeight")
        };
        engine["log"]["showEndTalk"] = function(show) {
            var n = this["engine"]["nodes"];
            n["boxScreen"]["removeClass"](show ? "log-interface-hidden" : "log-interface-visible")["addClass"](show ? "log-interface-visible" : "log-interface-hidden");
            if (show) this["testEndTalkType"]();
            else n["boxScreen"]["triggerNoBubbling"]("refreshBoxLogHeight");
            if (typeof n["logStaticInterfaceInviterLink"] == "object" && "length" in n["logStaticInterfaceInviterLink"] && n["logStaticInterfaceInviterLink"]["length"] > 0) {
                if (this["engine"]["box"]["inviter"]["active"] === true && this["engine"]["client"]["getTimeSinceThacStarted"]() >= this["engine"]["box"]["inviter"]["minTime"]) {
                    var welcome = this["engine"]["box"]["inviter"]["welcome"]["escapeHTML"]();
                    welcome = welcome["replace"](/\[u\]/gi, "<u>")["replace"](/\[\/u\]/gi, "</u>");
                    n["logStaticInterfaceInviterLink"]["text"](welcome);
                    n["logStaticInterfaceInviterLink"]["attr"]("href", this["engine"]["box"]["inviter"]["url"]);
                    n["logStaticInterfaceInviterLink"]["addClass"]("visible");
                    n["logStaticInterfaceInviterLink"]["data"]("linkName", this["engine"]["box"]["inviter"]["linkName"])
                } else n["logStaticInterfaceInviterLink"]["removeClass"]("visible")
            }
            this["contentChanged"]("end-talk");
            this["engine"]["callApplicationAPI_bridgeEvent"]({
                type: "native-log-footer-show",
                what: "start",
                val: show
            })
        };
        engine["log"]["isEndTalkDisplayed"] = function() {
            return !this["engine"]["nodes"]["boxScreen"]["hasClass"]("log-interface-hidden")
        };
        engine["log"]["setEmpty"] = function() {
            this["engine"]["nodes"]["logDynamic"]["html"]("");
            this["engine"]["callApplicationAPI_bridgeEvent"]("native-log-clear");
            this["showConnecting"](false);
            this["showSearching"](false);
            this["showTalkStarted"](false);
            this["showStrangerTyping"](false);
            this["showDisconnect"](false);
            this["showEndTalk"](false);
            this["last3"]["list"] = [];
            this["last3"]["dots"] = false
        };
        engine["log"]["setSearching"] = function() {
            this["setEmpty"]();
            this["showSearching"](true)
        };
        engine["log"]["notificationCheckVisibility"] = function() {
            var n = this["engine"]["nodes"];
            var lastLog = n["logDynamic"]["children"](":last-child");
            var logsCount = n["logDynamic"][0] && n["logDynamic"][0]["children"] ? n["logDynamic"][0]["children"]["length"] : 0;
            var msgVisible = this["notificationMsgCount"]() > 0 && logsCount > 0 && lastLog["isInViewPortYAxis"](n["boxLog"], true) < .5;
            var typingVisible = n["logStrangerTyping"]["css"]("display") != "none" && n["logStrangerTyping"]["isInViewPortYAxis"](n["boxLog"], true) < .5;
            var shouldBeVisible = msgVisible || typingVisible;
            n["boxNotificationMsg"]["css"]("display", msgVisible ? "" : "none");
            n["boxNotificationTyping"]["css"]("display", typingVisible ? "" : "none");
            n["boxNotification"]["css"]("display", shouldBeVisible ? "block" : "");
            if (!msgVisible) this["notificationMsgCount"](0);
            n["boxNotification"][msgVisible ? "addClass" : "removeClass"]("blinking");
            n["boxNotification"]["triggerNoBubbling"]("refresh");
            return msgVisible
        };
        engine["log"]["notificationMsgCount"] = function(count) {
            if (count !== undefined) this["engine"]["nodes"]["boxNotificationMsgCount"]["text"]("" + count);
            else return parseInt(this["engine"]["nodes"]["boxNotificationMsgCount"]["text"]()) || 0
        };
        engine["log"]["notificationMsgCountIncrease"] = function() {
            this["notificationMsgCount"](this["notificationMsgCount"]() + 1);
            if (this["notificationCheckVisibility"]()) {
                this["engine"]["callApplicationAPI_bridgeEvent"]({
                    type: "play-ringtone",
                    appFocusedOnly: true
                })
            }
        };
        engine["log"]["isDynamicLogEmpty"] = function() {
            return this["engine"]["nodes"]["logDynamic"]["children"]()["length"] == 0
        };
        engine["log"]["last3Push"] = function(actor, msg) {
            this["last3"]["list"]["push"]({
                actor: actor,
                msg: msg
            });
            if (this["last3"]["list"]["length"] > this["last3"]["max"]) {
                this["last3"]["list"]["splice"](0, this["last3"]["list"]["length"] - this["last3"]["max"]);
                this["last3"]["dots"] = true
            }
        };
        engine["log"]["last3Compile"] = function() {
            var msg = "";
            if (this["last3"]["dots"] == true) msg = "...m";
            for (var i = 0; i < this["last3"]["list"]["length"]; i++) {
                var actor = "@";
                switch (this["last3"]["list"][i]["actor"]) {
                    case "me":
                        actor = "Ty: ";
                        break;
                    case "stranger":
                        actor = "Obcy: ";
                        break;
                    case "dice":
                        actor = "# ";
                        break;
                    case "blank":
                        actor = "";
                        break
                }
                msg = msg + actor + this["last3"]["list"][i]["msg"];
                if (i != this["last3"]["list"]["length"] - 1) msg = msg + "m"
            }
            return msg
        };
        engine["options"] = {};
        engine["options"]["engine"] = null;
        engine["options"]["list"] = [];
        engine["options"]["init"] = function(engine) {
            var that = this;
            this["engine"] = engine;
            var listTemp = JSON["parse"](JSON["stringify"](global["pageConfig"]["optionsJSON"]));
            for (var i = 0; i < listTemp["length"]; i++) this["list"][listTemp[i]["id"]] = listTemp[i];
            this["engine"]["nodes"]["doc"]["on"]("click", ".o-any.enabled", function(ev) {
                var elem = this;
                var id = that["getOptionIdFromNode"](this);
                var option = that["getOptionFromNode"](this);
                var doActionFn = function() {
                    if ($(elem)["data"]("place") === "header-menu-main" && option["switchToHM"] === undefined) that["engine"]["headerMenu"]["show"](false);
                    that["trigger"]("o-any", elem);
                    that["trigger"](id, elem)
                };
                if ($(this)["data"]("place") === "header-menu-main") setTimeout(function() {
                    doActionFn()
                }, 10);
                else doActionFn()
            });
            if (this["engine"]["nodes"]["doc"]["tipsy"]) {
                $(".o-tipsy-active")["tipsy"]({
                    live: true,
                    gravity: "e",
                    fade: false,
                    offset: 16,
                    title: function() {
                        return that["getTipsyTitleFromNode"](this)
                    }
                })
            }
        };
        engine["options"]["on"] = function(eventName, fn) {
            this["engine"]["nodes"]["body"]["on"](eventName, fn)
        };
        engine["options"]["trigger"] = function(eventName, node) {
            if (this["isActive"](eventName) || eventName == "o-any") this["engine"]["nodes"]["body"]["trigger"](eventName, [node])
        };
        engine["options"]["getOptionIdFromNode"] = function(node) {
            var classes = $(node)["attr"]("class")["split"](/\s+/);
            var id = "";
            for (var i = 0; i < classes["length"]; i++) {
                if (classes[i] != "o-any" && classes[i] != "o-tipsy-active" && classes[i]["substr"](0, 2) == "o-") id = classes[i]
            }
            return id
        };
        engine["options"]["getOptionFromNode"] = function(node) {
            return this["list"][this["getOptionIdFromNode"](node)]
        };
        engine["options"]["isInHeaderMenu"] = function(id) {
            return typeof this["list"][id] == "object" && typeof this["list"][id]["places"] == "string" && this["list"][id]["places"]["indexOf"]("header-menu") != -1
        };
        engine["options"]["getTipsyTitleFromNode"] = function(node) {
            var option = this["getOptionFromNode"](node);
            return option ? option["tipsyTitle"] ? option["tipsyTitle"] : option["name"] : "[Option not found]"
        };
        engine["options"]["setTipsyTitle"] = function(id, title) {
            this["list"][id]["tipsyTitle"] = title
        };
        engine["options"]["isActive"] = function(id) {
            return !$("." + id)["hasClass"]("disabled")
        };
        engine["options"]["setActive"] = function(id, active) {
            if (active) $("." + id)["removeClass"]("disabled")["addClass"]("enabled");
            else $("." + id)["removeClass"]("enabled")["addClass"]("disabled");
            if (this["isInHeaderMenu"](id)) this["engine"]["nodes"]["headerMenu"]["triggerNoBubbling"]("refreshHeaderMenu")
        };
        engine["options"]["show"] = function(id, show) {
            $("." + id)[show ? "removeClass" : "addClass"]("hidden")
        };
        engine["options"]["setForTalkOptionsActive"] = function(active) {
            for (var key in this["list"]) {
                if (this["list"][key] === undefined) continue;
                if (this["list"][key]["class"] !== undefined && (this["list"][key]["class"]["indexOf"]("for-talk") != -1 || $["isSiteMobile"]() && this["list"][key]["class"]["indexOf"]("for-mobile-talk") != -1)) this["setActive"](key, active)
            }
        };
        engine["options"]["setAllOptionsActive"] = function(active) {
            for (var key in this["list"]) {
                if (this["list"][key] === undefined) continue;
                if (this["list"][key]["class"] === undefined || active || !active && this["list"][key]["class"]["indexOf"]("always-enabled") == -1) this["setActive"](key, active)
            }
        };
        engine["options"]["getButtonTitleVid"] = function(id) {
            return $("button." + id + " .button-title > span:visible")["attr"]("id")
        };
        engine["options"]["setButtonTitleVid"] = function(id, vid) {
            $("button." + id + " .button-title > span")["css"]("display", "none");
            $("button." + id + " .button-title > span#" + vid)["css"]("display", "block")
        };
        engine["box"] = {};
        engine["box"]["engine"] = null;
        engine["box"]["lastUserTypingState"] = false;
        engine["box"]["talk"] = {};
        engine["box"]["talk"]["ongoing"] = false;
        engine["box"]["talk"]["minTime"] = 1000 * 5;
        engine["box"]["talk"]["minTimeActive"] = true;
        engine["box"]["message"] = {};
        engine["box"]["message"]["maxLength"] = 2048;
        engine["box"]["message"]["yourLatest"] = "";
        engine["box"]["message"]["latestWho"] = -1;
        engine["box"]["message"]["identifyNumber"] = 0;
        engine["box"]["topic"] = {};
        engine["box"]["topic"]["lockTimestamp"] = 1000 * 60 * 1 + 1000 * 10;
        engine["box"]["topic"]["lastTimeUse"] = 0;
        engine["box"]["topic"]["wasFirstInTalk"] = false;
        engine["box"]["report"] = {};
        engine["box"]["report"]["lockTImestamp"] = 1000 * 30;
        engine["box"]["textareaPlaceholder"] = {};
        engine["box"]["textareaPlaceholder"]["prefix"] = "";
        engine["box"]["textareaPlaceholder"]["variants"] = [];
        engine["box"]["textareaSoftKeyboardTimer"] = null;
        engine["box"]["inviter"] = {};
        engine["box"]["inviter"]["minTime"] = 1000 * 60 * 2;
        engine["box"]["inviter"]["active"] = false;
        engine["box"]["inviter"]["linkName"] = "none";
        engine["box"]["inviter"]["welcome"] = "none";
        engine["box"]["inviter"]["url"] = "none";

        engine["box"]["init"] = function(engine) {
            var that = this;
            this["engine"] = engine;
            var doc = this["engine"]["nodes"]["doc"];
            var textarea = this["engine"]["nodes"]["boxInterfaceTextArea"];
            var oldRememberedSoundNotifyState = $["cookie"](this["engine"]["cookies"]["oldSoundState"]);
            if (typeof oldRememberedLocation == "string") {
                if (oldRememberedLocation === "off") $["cookie"](this["engine"]["cookies"]["desktopNotSound"], "false");
                else $["cookie"](this["engine"]["cookies"]["desktopNotSound"], "true")
            }
            $["removeCookie"](this["engine"]["cookies"]["oldSoundState"], {
                path: "/"
            });
            var controlTypingEvents = "input focus blur click" + (ieVersion && ieVersion <= 9 ? " keydown keyup" : "");
            textarea["on"](controlTypingEvents, function(ev) {
                that["evTextareaControlUserTyping"](ev)
            });
            textarea["on"]("keydown", function(ev) {
                that["evTextareaKeyDown"](ev)
            });
            textarea["on"]("click", function(ev) {
                that["evTextareaAnyAction"](ev)
            });
            textarea["on"]("focus", function(ev) {
                that["textareaOnFocus"](ev)
            });
            textarea["on"]("blur", function(ev) {
                that["textareaOnBlur"](ev)
            });
            if ($["isSiteMobile"]() == false) doc["on"]("keydown", function(ev) {
                that["evDocumentKeyDown"](ev)
            });
            if ($["isSiteMobile"]() == true) {
                if (this["engine"]["isWebViewBasedApp"]() == false || true) {
                    textarea["removeAttr"]("autocomplete");
                    textarea["removeAttr"]("autocorrect");
                    textarea["removeAttr"]("spellcheck")
                }
            }
            this["engine"]["options"]["on"]("o-send", function(ev, node) {
                that["textareaFlush"]();
                that["textareaFocus"]()
            });
            this["engine"]["options"]["on"]("o-esc", function(ev, node) {
                if ($["isSiteMobile"]()) {
                    that["engine"]["confirmDialog"]("Rozłącz z obcym. Na pewno?", function(decision) {
                        if (decision) {
                            var timeSinceThacStarted = that["engine"]["client"]["getTimeSinceThacStarted"]();
                            that["engine"]["callApplicationAPI_bridgeEvent"]({
                                type: "disconnect-action-performed",
                                shortac: timeSinceThacStarted <= 1000 * 60 * 3,
                                clearlo: true,
                                pso: 15,
                                msb: 60
                            });
                            that["engine"]["client"]["sendEndTalk"]()
                        }
                    }, "Rozłącz", "Anuluj", "mobile-dis-confirmation")
                } else {
                    var currentVid = that["engine"]["options"]["getButtonTitleVid"]("o-esc");
                    if (currentVid == "ov-disconnect-me") {
                        that["engine"]["options"]["setButtonTitleVid"]("o-esc", "ov-are-you-sure")
                    } else if (currentVid == "ov-are-you-sure") {
                        var talkTime = that["engine"]["client"]["getTimeSinceThacStarted"]();
                        if (!that["talk"]["minTimeActive"] || talkTime >= that["talk"]["minTime"]) {
                            that["engine"]["options"]["setButtonTitleVid"]("o-esc", "ov-new-talk");
                            that["engine"]["client"]["sendEndTalk"]()
                        } else {
                            that["engine"]["options"]["setButtonTitleVid"]("o-esc", "ov-disconnect-me");
                            var timeLeft = Math["round"]((that["talk"]["minTime"] - talkTime) / 1000);
                            that["engine"]["alertDialog"]("Porozmawiaj chwilę z obecnym obcym. (Pozostało " + (timeLeft > 0 ? timeLeft : 1) + " sekund.)", "talk-a-while-please")
                        }
                    } else if (currentVid == "ov-new-talk") {
                        that["requestTalk"]()
                    }
                }
            });
            this["engine"]["options"]["on"]("o-profile-photo", function(ev, node) {
                var picConUniqueID = that["engine"]["sd"]["sendProfilePicture"](function(decision, src) {
                    if (decision) that["textareaFlush"](src, true)
                });
                that["engine"]["facebook"]["doRequest"]("user-id", function(json) {
                    if (typeof json == "object" && json["resultCode"] === 1) {
                        var container = $(".pic-con-id-" + picConUniqueID);
                        var img = container["find"]("img.pic-dialog-img");
                        $["ajax"]("https://graph.facebook.com/" + json["userID"] + "/picture?width=1024&redirect=false&access_token=" + json["accessToken"])["done"](function(fbjson) {
                            if (typeof fbjson == "string" || typeof fbjson == "object") {
                                try {
                                    if (typeof fbjson == "string") fbjson = JSON["stringify"](fbjson);
                                    img["attr"]("src", fbjson["data"]["url"]);
                                    img["onLoadImageOnceExt"](function() {
                                        container["removeClass"]("pic-dialog-img-loading")["addClass"]("pic-dialog-img-loaded");
                                        that["engine"]["nodes"]["sd"]["triggerNoBubbling"]("refresh");
                                        that["engine"]["sd"]["sendProfilePictureActive"]()
                                    })
                                } catch (e) {
                                    that["engine"]["console"]("Downloading real fb profile picture url failed due to:", e)
                                }
                            } else that["engine"]["console"]("Downloading real fb profile picture url failed due to fbjson isnt string:", fbjson)
                        })
                    } else {
                        that["engine"]["sd"]["closeCurrent"]("send-facebook-profile-picture-dialog")
                    }
                })
            });
            this["engine"]["options"]["on"]("o-new-talk", function(ev, node) {
                that["requestTalk"]()
            });
            window["requestNewTalk"] = function() {
                that["requestTalk"]()
            };
            this["engine"]["options"]["on"]("o-topic", function(ev, node) {
                if ($["isSiteMobile"]() && that["tryRequestTopic"]()) {
                    that["engine"]["confirmDialog"]("Wylosować temat?", function(decision) {
                        if (decision) that["requestTopic"]()
                    }, "Losuj", "Anuluj", "rand-topic")
                } else that["requestTopic"]()
            });
            var soundState = $["cookie"](this["engine"]["cookies"]["desktopNotSound"]);
            if (typeof soundState != "string") $["cookie"](this["engine"]["cookies"]["desktopNotSound"], "true");
            var checkSoundStateFn = function() {
                that["desktopNotifySoundState"]($["cookie"](that["engine"]["cookies"]["desktopNotSound"]) === "true")
            };
            checkSoundStateFn();
            $("body")["on"]("tab-focused", checkSoundStateFn);
            this["engine"]["options"]["on"]("o-notify-sound-setting-turn-on", function(ev, node) {
                that["desktopNotifySoundState"](true, true)
            });
            this["engine"]["options"]["on"]("o-notify-sound-setting-turn-off", function(ev, node) {
                that["desktopNotifySoundState"](false, true)
            });
            this["engine"]["options"]["on"]("o-report", function(ev, node) {
                if (that["engine"]["client"]["getTimeSinceThacStarted"]() >= that["report"]["lockTImestamp"]) {
                    that["engine"]["confirmDialog"]("Chcę zgłosić nieprzyjemnego rozmówcę.", function(decision) {
                        if (decision) that["reportStranger"]()
                    }, "Zgłoś", "Anuluj", "report-stranger")
                } else {
                    that["engine"]["alertDialog"]("Zgłaszać nieprzyjemnego rozmówcę można dopiero po " + Math["round"](that["report"]["lockTImestamp"] / 1000) + " sekundach od rozpoczęcia rozmowy", "report-stranger")
                }
            });
            $("body")["on"]("tab-focused", function() {
                that["engine"]["box"]["textareaFocus"]()
            });
            if ($["isSiteMobile"]() == false || this["engine"]["isWebViewBasedApp"]() == false) {
                $(window)["on"]("beforeunload", function(ev) {
                    if ($["isSiteMobile"]() == false) that["engine"]["notify"]["desktopCloseAll"]();
                    if ((that["engine"]["client"]["isTalking"]() || that["engine"]["log"]["isDynamicLogEmpty"]() == false) && !that["engine"]["kicked"]) {
                        var text = "Zamknięcie strony spowoduje rozłączenie z rozmówcą / utratę rozmowy.";
                        if (ev) ev["returnValue"] = text;
                        return text
                    }
                })
            }
            this["textareaAnalizePlaceholder"]();
            this["runConfigFor"]("default");
            $("body")["on"]("app-ask-talk-state", function() {
                if (that["box"]["talk"]["ongoing"]) that["engine"]["callApplicationAPI_bridgeEvent"]("talk-started");
                else that["engine"]["callApplicationAPI_bridgeEvent"]("talk-ended")
            });
            $(".log-static-inviter-link")["on"]("click", function(ev) {
                $["ajax"]({
                    url: "ajax/inviterClick",
                    type: "post",
                    data: {
                        linkName: $(this)["data"]("linkName"),
                        mobile: this["engine"]["isMobile"]()
                    },
                    timeout: 1000 * 10
                })
            })
        };
        engine["box"]["switchedTo"] = function() {
            this["engine"]["callApplicationAPI_bridgeEvent"]("show-native-log")
        };
        engine["box"]["switchedOut"] = function() {
            this["engine"]["callApplicationAPI_bridgeEvent"]("hide-native-log")
        };
        engine["box"]["setTopicWasFirstInTalk"] = function(val) {
            this["topic"]["wasFirstInTalk"] = val;
            this["engine"]["callApplicationAPI"]("setTopicWasFirstInTalk", val)
        };
        engine["box"]["setTopicLastTimeUse"] = function(val) {
            this["topic"]["lastTimeUse"] = val;
            this["engine"]["callApplicationAPI"]("setTopicLastTimeUse", val)
        };
        engine["box"]["desktopNotifySoundState"] = function(state, byClick) {
            this["engine"]["options"]["show"]("o-notify-sound-setting-turn-on", state ? false : true);
            this["engine"]["options"]["show"]("o-notify-sound-setting-turn-off", state ? true : false);
            $["cookie"](this["engine"]["cookies"]["desktopNotSound"], state ? "true" : "false");
            if (state && byClick) this["engine"]["notify"]["playSound"]()
        };
        engine["box"]["runConfigFor"] = function(type, a, b, c) {
            if (type == "default") {
                this["engine"]["log"]["setEmpty"]();
                this["engine"]["options"]["setButtonTitleVid"]("o-esc", "ov-disconnect-me");
                this["engine"]["options"]["setAllOptionsActive"](false);
                this["textareaSetActive"](false);
                this["textareaClear"]()
            } else if (type == "new-talk") {
                this["engine"]["log"]["setEmpty"]();
                this["engine"]["log"]["showTalkStarted"](true);
                this["engine"]["options"]["setButtonTitleVid"]("o-esc", "ov-disconnect-me");
                this["engine"]["options"]["setAllOptionsActive"](true);
                this["textareaSetActive"](true);
                this["textareaClear"]();
                this["textareaSetPlaceholder"]();
                this["message"]["yourLatest"] = "";
                this["message"]["latestWho"] = -1;
                this["message"]["identifyNumber"] = 0;
                this["setTopicLastTimeUse"](Date["now"]());
                this["setTopicWasFirstInTalk"](false);
                this["talk"]["ongoing"] = true;
                var ckey = "";
                try {
                    ckey = this["engine"]["client"]["box"]["thac"]["ckey"]
                } catch (e) {}
                this["engine"]["callApplicationAPI_bridgeEvent"]({
                    type: "talk-started",
                    ckey: ckey
                });
                if ($["isSiteMobile"]() == false) {
                    this["engine"]["nodes"]["boxLikebtnEndThac"]["css"]("display", "none")
                }
            } else if (type == "new-talk-talk-cache") {
                this["engine"]["log"]["showTalkStarted"](true);
                this["engine"]["options"]["setButtonTitleVid"]("o-esc", "ov-disconnect-me");
                this["engine"]["options"]["setAllOptionsActive"](true);
                this["textareaSetActive"](true);
                this["textareaClear"]();
                this["message"]["yourLatest"] = "";
                this["message"]["latestWho"] = -1;
                this["talk"]["ongoing"] = true;
                var ckey = "";
                try {
                    ckey = this["engine"]["client"]["box"]["thac"]["ckey"]
                } catch (e) {}
                this["engine"]["callApplicationAPI_bridgeEvent"]({
                    type: "talkcache-talk-started",
                    ckey: ckey
                })
            } else if (type == "end-talk") {
                this["engine"]["log"]["showStrangerTyping"](false);
                this["engine"]["log"]["showDisconnect"](true, a);
                this["engine"]["log"]["showEndTalk"](true);
                this["engine"]["options"]["setButtonTitleVid"]("o-esc", "ov-new-talk");
                this["engine"]["options"]["setForTalkOptionsActive"](false);
                this["textareaSetActive"](false);
                this["textareaClear"]();
                this["textareaClearPlaceholder"]();
                this["talk"]["ongoing"] = false;
                this["engine"]["callApplicationAPI_bridgeEvent"]("talk-ended");
                this["engine"]["sd"]["closeCurrent"]("mobile-dis-confirmation");
                this["disableInviter"]();
                if ($["isSiteMobile"]() == false) {
                    this["engine"]["nodes"]["boxLikebtnEndThac"]["css"]("display", "none")
                }
            } else if (type == "searching") {
                this["engine"]["log"]["setSearching"]();
                this["engine"]["options"]["setAllOptionsActive"](false);
                this["textareaSetActive"](false);
                this["textareaClear"]();
                this["textareaClearPlaceholder"]()
            }
        };
        engine["box"]["evConnectionStarted"] = function() {
            if (global["pageConfig"]["currentContentId"] == "box") this["requestTalk"]()
        };
        engine["box"]["evTextareaControlUserTyping"] = function() {
            var node = this["engine"]["nodes"]["boxInterfaceTextArea"];
            var userTypingValue = node["val"]()["trim"]()["length"] > 0 && node["is"](":focus");
            if (this["lastUserTypingState"] != userTypingValue) {
                this["engine"]["client"]["sendTypingEvent"](userTypingValue);
                this["lastUserTypingState"] = userTypingValue
            }
        };
        engine["box"]["evTextareaKeyDown"] = function(ev) {
            var that = this;
            var key = ev["keyCode"];
            if (key == 13 && !ev["shiftKey"]) {
                ev["preventDefault"]();
                this["engine"]["nodes"]["boxInterfaceTextArea"]["triggerNoBubbling"]("refresh");
                setTimeout(function() {
                    that["engine"]["options"]["trigger"]("o-send")
                }, 0)
            }
        };
        engine["box"]["evDocumentKeyDown"] = function(ev) {
            var key = ev["keyCode"];
            if (key == 27) {
                ev["preventDefault"]();
                this["engine"]["options"]["trigger"]("o-esc")
            } else this["evTextareaAnyAction"](ev)
        };
        engine["box"]["evTextareaAnyAction"] = function(ev) {
            if (this["engine"]["options"]["getButtonTitleVid"]("o-esc") == "ov-are-you-sure") this["engine"]["options"]["setButtonTitleVid"]("o-esc", "ov-disconnect-me")
        };
        engine["box"]["requestTalk"] = function() {
            this["engine"]["notify"]["desktopRequestPermission"]();
            this["engine"]["client"]["sendRequestTalk"]();
            this["engine"]["nodes"]["body"]["scrollTop"](0)
        };
        engine["box"]["tryRequestTopic"] = function() {
            var can = Date["now"]() - this["topic"]["lastTimeUse"] >= this["topic"]["lockTimestamp"];
            if (can) return true;
            this["engine"]["alertDialog"]("Temat można losować " + (this["topic"]["wasFirstInTalk"] ? "co 1 minutę." : "1 minutę po rozpoczęciu rozmowy."), "topic-interval-info");
            return false
        };
        engine["box"]["requestTopic"] = function() {
            if (this["tryRequestTopic"]()) {
                this["engine"]["client"]["sendRequestTopic"]();
                this["setTopicLastTimeUse"](Date["now"]());
                this["setTopicWasFirstInTalk"](true)
            }
        };
        engine["box"]["reportStranger"] = function() {
            this["engine"]["client"]["sendStrangerReport"]();
            this["engine"]["options"]["setActive"]("o-report", false);
            this["engine"]["callApplicationAPI"]("setAlreadyReported", true)
        };
        engine["box"]["recivedMessage"] = function(msg) {
            var filtered = this["engine"]["filters"]["apply"]("recv", msg);
            this["engine"]["log"]["putMsg"](true, filtered)
        };
        engine["box"]["textareaFocus"] = function() {
            if (this["engine"]["isWebsiteCovered"]() == false && this["engine"]["getVisibleContentId"]() == "box") this["engine"]["nodes"]["boxInterfaceTextArea"]["focus"]()
        };
        engine["box"]["textareaOnFocus"] = function() {
            var that = this;
            clearTimeout(this["textareaSoftKeyboardTimer"]);
            this["textareaSoftKeyboardTimer"] = setTimeout(function() {
                that["engine"]["callApplicationAPI_bridgeEvent"]("show-soft-keyboard")
            }, 50)
        };
        engine["box"]["textareaOnBlur"] = function() {
            var that = this;
            clearTimeout(this["textareaSoftKeyboardTimer"]);
            this["textareaSoftKeyboardTimer"] = setTimeout(function() {
                that["engine"]["callApplicationAPI_bridgeEvent"]("hide-soft-keyboard")
            }, 50)
        };
        engine["box"]["textareaSetActive"] = function(active) {
            this["engine"]["nodes"]["boxInterfaceTextArea"][active ? "removeAttr" : "attr"]("disabled", !active ? "disabled" : undefined);
            this["engine"]["nodes"]["boxInterfaceTextArea"]["addClass"](active ? "enabled" : "disabled")["removeClass"](active ? "disabled" : "enabled");
            this["engine"]["nodes"]["boxInterfaceTextArea"][active ? "focus" : "blur"]()
        };
        engine["box"]["textareaClear"] = function(dontClearTyping) {
            this["engine"]["nodes"]["boxInterfaceTextArea"]["val"]("");
            if (!dontClearTyping) this["lastUserTypingState"] = false
        };
        engine["box"]["textareaFlush"] = function(customMessage, customSource) {
            var that = this;
            var node = this["engine"]["nodes"]["boxInterfaceTextArea"];
            var text = customMessage ? customMessage : node["val"]()["trim"]();
            if (text && text["length"] > 0) {
                if (text["length"] <= this["message"]["maxLength"]) {
                    if (this["message"]["yourLatest"] != text || this["message"]["latestWho"] == 1 || customMessage) {
                        var filtered = this["engine"]["filters"]["apply"]("send", text);
                        var identifyNumber = this["message"]["identifyNumber"]++;
                        var response = this["engine"]["client"]["sendMessage"](filtered, identifyNumber);
                        if (typeof response == "object" && response["state"] == "ok") {
                            if (filtered["d"]["length"] > 0) {
                                this["message"]["yourLatest"] = text;
                                this["engine"]["log"]["putMsg"](false, filtered, identifyNumber);
                                this["textareaClearPlaceholder"]()
                            }
                            if (customSource === undefined) {
                                this["textareaClear"](filtered["s"]["length"] == 0);
                                this["evTextareaControlUserTyping"]()
                            }
                        } else {
                            this["engine"]["alertDialog"]("Wystąpił problem z połączeniem. Powiadom nas o tym komunikacie na e-mail: kontakt@6obcy.pl", "weird-error-one")
                        }
                    } else {
                        this["engine"]["confirmDialog"]("Wiadomość się powtarza. Wysłać wiadomość?", function(decision) {
                            if (decision) that["textareaFlush"](text)
                        }, "Wyślij", "Anuluj", "repeated-msg")
                    }
                } else this["engine"]["alertDialog"]("Wiadomość jest zbyt długa. Maksymalna ilość znaków to " + Math["round"](this["message"]["maxLength"] / 2), "too-long-message")
            } else {
                this["engine"]["alertDialog"]("Wiadomość nie może być pusta, napisz coś :)", "too-short-message")
            }
        };
        engine["box"]["textareaAnalizePlaceholder"] = function() {
            this["textareaPlaceholder"]["variants"] = this["engine"]["nodes"]["boxInterfaceTextArea"]["attr"]("placeholder")["split"](";");
            this["textareaPlaceholder"]["prefix"] = this["textareaPlaceholder"]["variants"]["splice"](0, 1)[0];
            this["engine"]["nodes"]["boxInterfaceTextArea"]["attr"]("placeholder", "")
        };
        engine["box"]["textareaSetPlaceholder"] = function() {
            var randomVariant = this["textareaPlaceholder"]["variants"][Math["floor"](Math["random"]() * this["textareaPlaceholder"]["variants"]["length"])];
            this["engine"]["nodes"]["boxInterfaceTextArea"]["attr"]("placeholder", this["textareaPlaceholder"]["prefix"] + randomVariant)
        };
        engine["box"]["textareaClearPlaceholder"] = function() {
            this["engine"]["nodes"]["boxInterfaceTextArea"]["attr"]("placeholder", "")
        };
        engine["box"]["enableInviter"] = function(linkName, welcome, url) {
            this["inviter"]["active"] = true;
            this["inviter"]["linkName"] = linkName;
            this["inviter"]["welcome"] = welcome;
            this["inviter"]["url"] = url
        };
        engine["box"]["disableInviter"] = function() {
            this["inviter"]["active"] = false
        };
        engine["notify"] = {};
        engine["notify"]["engine"] = null;
        engine["notify"]["soundLastTime"] = 0;
        engine["notify"]["title"] = {};
        engine["notify"]["title"]["text"] = "";
        engine["notify"]["title"]["bubbleCount"] = 0;
        engine["notify"]["title"]["anim"] = {};
        engine["notify"]["title"]["anim"]["interval"] = 1000;
        engine["notify"]["title"]["anim"]["timer"] = null;
        engine["notify"]["title"]["anim"]["steps"] = ["\\(^.^ ).", ".(^.^ )."];
        engine["notify"]["title"]["anim"]["curStep"] = 0;
        engine["notify"]["desktop"] = {};
        engine["notify"]["desktop"]["list"] = {};
        engine["notify"]["desktop"]["talkKey"] = "talk-new-msg";
        engine["notify"]["init"] = function(engine) {
            var that = this;
            this["engine"] = engine;
            this["title"]["text"] = document["title"];
            $("body")["on"]("tab-focused", function() {
                that["titleReset"]();
                that["desktopCloseAll"]()
            });
            if (global["soundManager"]) {
                soundManager["setup"]({
                    url: "core/soundmanager2a.swf",
                    flashVersion: 8,
                    preferFlash: false,
                    onready: function() {
                        that["loadSound"]()
                    }
                })
            }
        };
        engine["notify"]["loadSound"] = function() {
            soundManager["createSound"]({
                id: "notify",
                url: "sfx/notify.mp3"
            })
        };
        engine["notify"]["playSound"] = function() {
            if ($["cookie"](this["engine"]["cookies"]["desktopNotSound"]) !== "true") return;
            if (global["soundManager"] && Date["now"]() - this["soundLastTime"] >= 100) {
                soundManager["play"]("notify");
                this["soundLastTime"] = Date["now"]()
            }
        };
        engine["notify"]["runFor"] = function(type, data) {
            if (type == "new-talk") {
                this["engine"]["callApplicationAPI_bridgeEvent"]({
                    type: "notification",
                    title: "Rozpoczęto rozmowę z obcym.",
                    subtitle: "Przywitaj się. :) ... (kliknij)",
                    ticker: "Rozpoczęto rozmowę z obcym. Przywitaj się. :)"
                })
            } else if (type == "end-talk") {
                this["engine"]["callApplicationAPI_bridgeEvent"]({
                    type: "notification",
                    title: "Obcy się rozłączył...",
                    subtitle: "(Kliknij, aby otworzyć)",
                    ticker: "Obcy się rozłączył..."
                })
            } else if (type == "new-msg") {
                this["engine"]["callApplicationAPI_bridgeEvent"]({
                    type: "notification",
                    title: "Obcy:",
                    subtitle: data,
                    ticker: "Obcy: " + (data["length"] > 64 ? data["substr"](0, 64) + "… (kliknij)" : data)
                })
            }
            if (this["engine"]["nodes"]["body"]["hasClass"]("tab-blur") == false) return;
            this["titleNewMessage"]();
            if (type == "new-talk") {
                this["desktopShow"]("new-talk")
            } else if (type == "end-talk") {
                this["desktopShow"]("end-talk")
            } else if (type == "new-msg") {
                this["desktopShow"]("new-msg", this["engine"]["log"]["last3Compile"]())
            }
        };
        engine["notify"]["titleGetCurrent"] = function() {
            var result = "";
            if (!global["Tinycon"] && this["title"]["bubbleCount"] > 0) result += "(" + this["title"]["bubbleCount"] + ")";
            if (this["title"]["anim"]["timer"] !== null) {
                if (result["length"] > 0) result += " ";
                result += this["title"]["anim"]["steps"][this["title"]["anim"]["curStep"]++];
                if (this["title"]["anim"]["curStep"] >= this["title"]["anim"]["steps"]["length"]) this["title"]["anim"]["curStep"] = 0
            }
            if (result["length"] > 0) result += " ";
            return result + this["title"]["text"]
        };
        engine["notify"]["titleSetCurrent"] = function() {
            document["title"] = this["titleGetCurrent"]()
        };
        engine["notify"]["titleStartAnimation"] = function() {
            var that = this;
            this["titleStopAnimation"](true);
            this["title"]["anim"]["timer"] = setInterval(function() {
                that["titleSetCurrent"]()
            }, this["title"]["anim"]["interval"]);
            this["titleSetCurrent"]()
        };
        engine["notify"]["titleStopAnimation"] = function(notRefresh) {
            clearInterval(this["title"]["anim"]["timer"]);
            this["title"]["anim"]["timer"] = null;
            if (!notRefresh) this["titleSetCurrent"]()
        };
        engine["notify"]["titleIsAnimating"] = function() {
            return this["title"]["anim"]["timer"] !== null
        };
        engine["notify"]["titleIncreaseBubble"] = function(count) {
            this["title"]["bubbleCount"] += count;
            if (global["Tinycon"]) Tinycon["setBubble"](this["title"]["bubbleCount"])
        };
        engine["notify"]["titleResetBubble"] = function() {
            this["title"]["bubbleCount"] = 0;
            if (global["Tinycon"]) Tinycon["reset"]()
        };
        engine["notify"]["titleNewMessage"] = function() {
            if ($["isSiteMobile"]() == false) {
                this["titleIncreaseBubble"](1);
                if (!this["titleIsAnimating"]()) this["titleStartAnimation"]()
            }
            this["playSound"]()
        };
        engine["notify"]["titleReset"] = function() {
            if ($["isSiteMobile"]() == false) {
                this["titleResetBubble"]();
                this["titleStopAnimation"]()
            }
        };
        engine["notify"]["desktopRequestPermission"] = function() {
            if (!global["Notify"]) return;
            if (Notify["permissionLevel"] === "default") {
                Notify["requestPermission"](function() {}, function() {})
            }
        };
        engine["notify"]["desktopCreate"] = function(key, title, body, icon) {
            var that = this;
            if (!global["Notify"]) return;
            if (this["desktop"]["list"][key]) this["desktopClose"](key);
            this["desktop"]["list"][key] = new Notify(title, {
                body: body,
                icon: "images/icons/" + icon,
                tag: key,
                notifyClick: function() {
                    that["desktopClicked"](key)
                },
                notifyClose: function() {
                    that["desktopClose"](key)
                },
                notifyError: function() {
                    that["desktopClose"](key)
                }
            });
            return this["desktop"]["list"][key]
        };
        engine["notify"]["desktopClose"] = function(key) {
            if (!global["Notify"]) return;
            if (this["desktop"]["list"][key] && this["desktop"]["list"][key]["close"]) this["desktop"]["list"][key]["close"]();
            delete this["desktop"]["list"][key]
        };
        engine["notify"]["desktopCloseAll"] = function() {
            if (!global["Notify"]) return;
            for (var key in this["desktop"]["list"]) this["desktopClose"](key);
            this["desktop"]["list"] = {}
        };
        engine["notify"]["desktopClicked"] = function(key) {
            if (!global["Notify"]) return;
            window["focus"]();
            this["desktopClose"](key)
        };
        engine["notify"]["desktopShow"] = function(type, message) {
            if (!global["Notify"]) return;
            var not = null;
            if (type == "new-talk") not = this["desktopCreate"](this["desktop"]["talkKey"], "Rozpoczęto rozmowę z obcym.. (kliknij aby otworzyć)", "Kliknij tutaj, aby napisać do Obcego", "notifyIcon.ico");
            else if (type == "end-talk") not = this["desktopCreate"](this["desktop"]["talkKey"], "Obcy się rozłączył (kliknij aby otworzyć)", "Kliknij tutaj, aby przejść do rozmowy.", "notifyIcon.ico");
            else if (type == "new-msg") not = this["desktopCreate"](this["desktop"]["talkKey"], "Obcy napisał: (kliknij, aby odpisać)", message, "notifyIcon.ico");
            if (not !== null) not["show"]()
        };
        engine["terms"] = {};
        engine["terms"]["engine"] = null;
        engine["terms"]["init"] = function(engine) {
            var that = this;
            this["engine"] = engine;
            this["engine"]["nodes"]["termsBackTo"]["click"](function(ev) {
                var visibleVersion = $($(this)["find"](".version:visible")[0])["attr"]("id");
                if (visibleVersion == "back-to-intro") that["engine"]["setContentTo"]("intro");
                else if (visibleVersion == "back-to-box") that["engine"]["setContentTo"]("box")
            })
        };
        engine["terms"]["switchedTo"] = function(from) {
            var that = this;
            var n = this["engine"]["nodes"];
            n["termsBackTo"]["children"]()["find"](".version")["css"]("display", "none");
            if (from == "intro") n["termsBackToIntro"]["css"]("display", "inline");
            else if (from == "box") n["termsBackToBox"]["css"]("display", "inline");
            this["engine"]["backButtonAddAction"]("terms-back", function() {
                n["termsBackTo"]["trigger"]("click");
                return true
            });
            n["termsContent"]["triggerNoBubbling"]("refresh")
        };
        engine["terms"]["switchedOut"] = function() {
            this["engine"]["backButtonRemoveAction"]("terms-back")
        };
        engine["filters"] = {};
        engine["filters"]["list"] = [];
        engine["filters"]["data"] = {
            f: "",
            s: "",
            d: ""
        };
        engine["filters"]["init"] = function(engine) {
            this["engine"] = engine;
            var arr = [];
            arr["push"](CFilterUrl);
            arr["push"](CFilterCapsLock);
            arr["push"](CFilterXWords);
            this["addExt"](arr)
        };
        engine["filters"]["add"] = function(filter) {
            this["list"]["push"](filter)
        };
        engine["filters"]["addExt"] = function(a) {
            if (a instanceof Array) {
                for (var i = 0; i < a["length"]; i++) this["addExt"](a[i])
            } else this["add"](new a(this["engine"], true))
        };
        engine["filters"]["apply"] = function(type, a) {
            if (type == "send" || type == "recv") {
                if (type == "send") a = a["deduplicateWhiteChars"]();
                this["data"]["alert"] = undefined;
                this["data"]["o"] = a;
                this["data"]["f"] = a["toFlatString"]();
                this["data"]["fnd"] = a["toFlatString"](true);
                this["data"]["c"] = a["removeWhiteChars"]();
                this["data"]["d"] = a["escapeHTML"]();
                this["data"]["ua"] = undefined;
                if (type === "send") this["data"]["s"] = a
            }
            for (var i = 0; i < this["list"]["length"]; i++) {
                if (!this["list"][i]["active"]) continue;
                if (type === "send" && this["list"][i]["send"]) this["list"][i]["send"](this["data"]);
                else if (type === "recv" && this["list"][i]["recv"]) this["list"][i]["recv"](this["data"]);
                else if (type === "put" && this["list"][i]["put"]) this["list"][i]["put"](a)
            }
            if (type == "send" || type == "recv") {
                if (typeof this["data"]["d"] == "string" && this["data"]["d"]["length"] > 0) this["data"]["d"] = this["data"]["d"]["trim"]();
                if (type === "send" && typeof this["data"]["s"] == "string" && this["data"]["s"]["length"] > 0) this["data"]["s"] = this["data"]["s"]["trim"]();
                if (this["data"]["alert"]) this["engine"]["alertDialog"](this["data"]["alert"])
            }
            return this["data"]
        };
        engine["sd"] = {};
        engine["sd"]["init"] = function(engine) {
            var that = this;
            this["engine"] = engine;
            var n = this["engine"]["nodes"];
            this["storedFocusedNode"] = null;
            this["templateNode"] = $('<div class=sd-unit></div>');
            this["templateNode"]["append"]('<div class=sd-message></div>');
            this["templateNode"]["append"]('<div class=sd-interface unselectable></div>');
            this["nextId"] = 1;
            this["dialogs"] = {};
            n["sdCurrent"]["on"]("click", ".sd-interface button:not(.disabled)", function(ev) {
                var sd = that["getCurrent"]();
                var btId = $(this)["data"]("btn-id");
                if (sd["buttons"][btId] && typeof sd["buttons"][btId]["cb"] == "function") sd["buttons"][btId]["cb"](sd, ev)
            });
            n["sdCover"]["on"]("click", function(ev) {
                var cur = n["sdCurrent"]["find"](".sd-unit");
                if (cur["length"] > 0) {
                    cur = that["dialogs"][cur["data"]("sd-id")];
                    if (cur) {
                        for (var i in cur["buttons"]) {
                            if (cur["buttons"][i]["defaultButton"] === true) {
                                cur["buttons"][i]["node"]["trigger"]("click");
                                break
                            }
                        }
                    }
                }
            });
            n["body"]["on"]("sds-disappeared", function(ev) {})
        };
        engine["sd"]["getCurrentId"] = function() {
            var cur = this["engine"]["nodes"]["sdCurrent"]["find"](".sd-unit");
            if (cur["length"] > 0) return cur["data"]("sd-id");
            return null
        };
        engine["sd"]["getCurrent"] = function() {
            var cur = this["engine"]["nodes"]["sdCurrent"]["find"](".sd-unit");
            if (cur["length"] > 0) return this["dialogs"][cur["data"]("sd-id")]
        };
        engine["sd"]["hasCurrentDefaultButton"] = function() {
            var dialog = this["getCurrent"]();
            if (!dialog) return true;
            for (var i in dialog["buttons"]) {
                if (dialog["buttons"][i]["defaultButton"] === true) return dialog["buttons"][i]
            }
            return false
        };
        engine["sd"]["setButtonActive"] = function(dialogId, btnId, active) {
            var dialog = this["getCurrent"]();
            if (dialog && dialog["id"] == dialogId) {
                dialog["buttons"][btnId]["active"] = active;
                if (active) dialog["buttons"][btnId]["node"]["removeClass"]("disabled")
            }
        };
        engine["sd"]["show"] = function(html, buttons, myId) {
            var that = this;
            if (myId !== undefined && this["dialogs"][myId] !== undefined) return;
            var dialog = {};
            dialog["id"] = myId ? myId : this["nextId"]++;
            dialog["node"] = this["templateNode"]["clone"]();
            dialog["buttons"] = buttons;
            dialog["node"]["data"]("sd-id", dialog["id"]);
            var interfaceNode = dialog["node"]["find"](".sd-interface");
            for (var i in buttons) {
                var disabledHtmlPart = buttons[i]["active"] === undefined || buttons[i]["active"] === true ? "" : "class=disabled";
                var button = $("<button " + disabledHtmlPart + ">" + buttons[i]["text"] + "</button>");
                button["data"]("btn-id", i);
                interfaceNode["append"](button);
                dialog["buttons"][i]["node"] = button
            }
            dialog["node"]["scrollingTurnOn"]();
            if (html["indexOf"]("!#") == 0) {
                var loanId = html["substr"](1);
                var domToReplace = $(loanId);
                dialog["node"]["data"]("sd-dom-loan-from-dom", domToReplace["parent"]());
                var sdMessage = dialog["node"]["find"](".sd-message");
                sdMessage["html"]("");
                sdMessage["append"](domToReplace)
            } else {
                dialog["node"]["find"](".sd-message")["html"](html)
            }
            this["engine"]["nodes"]["sdCurrent"]["find"](".sd-unit")["moveDOMTo"](this["engine"]["nodes"]["sdStack"]);
            this["engine"]["nodes"]["sdCurrent"]["append"](dialog["node"]);
            this["engine"]["backButtonAddAction"]("simple-dialog-presence-" + dialog["id"], function() {
                var dialog = that["getCurrent"]();
                if (dialog) {
                    var defButton = that["hasCurrentDefaultButton"]();
                    if (typeof defButton == "object") {
                        defButton["node"]["trigger"]("click");
                        return true
                    } else return defButton === true
                }
                return true
            });
            this["dialogs"][dialog["id"]] = dialog;
            this["checkPresence"]()
        };
        engine["sd"]["closeCurrent"] = function(sdId) {
            var n = this["engine"]["nodes"];
            var cur = n["sdCurrent"]["find"](".sd-unit");
            if (cur["length"] > 0 && (sdId === undefined || cur["data"]("sd-id") == sdId)) {
                var loanFrom = cur["data"]("sd-dom-loan-from-dom");
                if (loanFrom) {
                    var loan = cur["find"](".sd-message")["children"]();
                    loanFrom["append"](loan);
                    cur["find"](".sd-message")["html"]("");
                    cur["data"]("sd-dom-loan-from-dom", undefined)
                }
                this["engine"]["backButtonRemoveAction"]("simple-dialog-presence-" + cur["data"]("sd-id"));
                delete this["dialogs"][cur["data"]("sd-id")];
                n["sdCurrent"]["html"]("");
                n["sdStack"]["children"]()["last"]()["moveDOMTo"](n["sdCurrent"])
            }
            this["checkPresence"]()
        };
        engine["sd"]["isCoverVisible"] = function() {
            return this["engine"]["nodes"]["sd"]["css"]("display") != "none"
        };
        engine["sd"]["checkPresence"] = function() {
            var that = this;
            var count = this["engine"]["nodes"]["sdCurrent"]["children"]()["length"];
            var present = count > 0;
            var curPresentState = this["engine"]["nodes"]["sd"]["css"]("display") != "none";
            this["engine"]["nodes"]["sd"]["css"]("display", present ? "block" : "none");
            if (present) {
                this["engine"]["nodes"]["sd"]["triggerNoBubbling"]("refresh");
                var focused = $(document["activeElement"]);
                if (focused["isInOrIs"](this["engine"]["nodes"]["sd"]) == false) {
                    this["storedFocusedNode"] = focused;
                    this["storedFocusedNode"]["blur"]()
                }
            } else {
                if (this["storedFocusedNode"] !== null) {
                    setTimeout(function() {
                        if (that["storedFocusedNode"] !== null) that["storedFocusedNode"]["focus"]();
                        that["storedFocusedNode"] = null
                    }, 50)
                }
                if (curPresentState) this["engine"]["nodes"]["body"]["triggerNoBubbling"]("sds-disappeared")
            }
            return present
        };
        engine["sd"]["alert"] = function(html, myId, outerCb) {
            var that = this;
            this["show"](html, {
                ok: {
                    text: "OK",
                    cb: function(sd, ev) {
                        that["closeCurrent"](sd["id"]);
                        if (outerCb !== undefined) outerCb()
                    },
                    defaultButton: true
                }
            }, myId)
        };
        engine["sd"]["confirm"] = function(html, responseFn, okText, cancelText, myId) {
            var that = this;
            this["show"](html, {
                ok: {
                    text: okText ? okText : "OK",
                    cb: function(sd, ev) {
                        that["closeCurrent"](sd["id"]);
                        responseFn(true)
                    }
                },
                cancel: {
                    text: cancelText ? cancelText : "Anuluj",
                    cb: function(sd, ev) {
                        that["closeCurrent"](sd["id"]);
                        responseFn(false)
                    },
                    defaultButton: true
                }
            }, myId)
        };
        engine["sd"]["sendProfilePicture"] = function(responseFn) {
            var that = this;
            var pcuid = String["prototype"]["generateSimpleUniqueID"]();
            var html = "<div class=pic-dialog-title><img src=images/icons/small_fb.png>Wyślij zdjęcie profilowe.</div>";
            html += "<div class=unselectable pic-dialog-container pic-dialog-img-loading pic-con-id-" + pcuid + ">";
            html += "<img class=pic-dialog-spinner src=images/spinner.gif/>";
            html += "<img class=pic-dialog-img src=/>";
            html += "</div>";
            this["show"](html, {
                ok: {
                    active: false,
                    text: "Wyślij",
                    cb: function(sd, ev) {
                        var imageUrl = $("img.pic-dialog-img")["attr"]("src");
                        that["closeCurrent"](sd["id"]);
                        responseFn(true, imageUrl)
                    }
                },
                cancel: {
                    defaultButton: true,
                    text: "Nie wysyłaj",
                    cb: function(sd, ev) {
                        that["closeCurrent"](sd["id"]);
                        responseFn(false)
                    }
                }
            }, "send-facebook-profile-picture-dialog");
            return pcuid
        };
        engine["sd"]["sendProfilePictureActive"] = function() {
            this["setButtonActive"]("send-facebook-profile-picture-dialog", "ok", true)
        };
        engine["sd"]["showPicture"] = function(url) {
            var that = this;
            var pcuid = String["prototype"]["generateSimpleUniqueID"]();
            var html = "<div class=pic-dialog-title><img src=images/icons/small_fb.png>Zdjęcie profilowe:</div>";
            html += "<div class=pic-dialog-container pic-dialog-img-loading pic-con-id-" + pcuid + ">";
            html += "<img class=pic-dialog-spinner src=images/spinner.gif/>";
            html += "<img class=pic-dialog-img src=" + url + "/>";
            html += "</div>";
            this["show"](html, {
                ok: {
                    text: "Schowaj",
                    cb: function(sd, ev) {
                        that["closeCurrent"](sd["id"])
                    },
                    defaultButton: true
                }
            }, "display-picture-from-log-dialog");
            var container = $(".pic-con-id-" + pcuid);
            container["find"]("img.pic-dialog-img")["onLoadImageOnceExt"](function() {
                container["removeClass"]("pic-dialog-img-loading")["addClass"]("pic-dialog-img-loaded");
                that["engine"]["nodes"]["sd"]["triggerNoBubbling"]("refresh")
            })
        };
        engine["sd"]["showGameManagerList"] = function() {
            var that = this;
            var html = "!" + this["engine"]["gml"]["domId"];
            var myId = this["engine"]["gml"]["dialogId"];
            var buttons = {
                ok: {
                    text: "Anuluj",
                    cb: function(sd, ev) {
                        that["closeCurrent"](sd["id"])
                    },
                    defaultButton: true
                }
            };
            this["show"](html, buttons, myId)
        };
        engine["gml"] = {};
        engine["gml"]["init"] = function(engine) {
            var that = this;
            this["engine"] = engine;
            return;
            window["showGML"] = function() {
                that["engine"]["sd"]["showGameManagerList"]()
            };
            this["domId"] = "#gml";
            this["dialogId"] = "game-manager-list-dialog";
            var options = {
                valueNames: ["title", "desc"],
                item: "<li><h3 class=title></h3><p class=desc></p></li>"
            };
            var values = [{
                title: "abc",
                desc: "simple abc"
            }, {
                title: "123",
                desc: "simple 123"
            }];
            this["listjs"] = new List("gml", options, values);
            $(this["domId"])["on"]("click", "li", function(e) {
                that["onListItemClicked"](e)
            })
        };
        engine["gml"]["onListItemClicked"] = function(e) {
            var li = $(e["target"])["closest"]("li");
            console["log"](li)
        };
        engine["spottedJSON"] = {};
        engine["spottedJSON"]["init"] = function(engine) {
            var that = this;
            this["engine"] = engine;
            this["load"]();
            this["pageCount"] = 0;
            this["pageCurrentIndex"] = 1;
            this["engine"]["nodes"]["spottedWidgetMobile"]["css"]("display", "block");
            $(".spotted-widget-inner-newer")["on"]("click", function(ev) {
                var current = $(".spotted-widget-inner-feed-unit-page:visible");
                var prev = current["prev"]();
                if (prev["length"] > 0) {
                    current["css"]("display", "");
                    prev["css"]("display", "block");
                    that["pageCurrentIndex"]--;
                    that["updatePaginationTitle"]();

                    that["testButtons"]();
                    that["scrollUp"]()
                }
            });
            $(".spotted-widget-inner-older")["on"]("click", function(ev) {
                var current = $(".spotted-widget-inner-feed-unit-page:visible");
                var next = current["next"]();
                if (next["length"] > 0) {
                    current["css"]("display", "");
                    next["css"]("display", "block");
                    that["pageCurrentIndex"]++;
                    that["updatePaginationTitle"]();
                    that["testButtons"]();
                    that["scrollUp"]()
                }
            });
            $(".spotted-widget-inner-feed")["on"]("click", ".feed-unit-bottom-right", function(ev) {
                that["engine"]["sd"]["alert"]('Chcesz odpowiedzieć na ogłoszenie? Wyślij nam prywatną wiadomość z treścią ogłoszenia i Twoją odpowiedzią, na fanpage 6obcy.fan w serwisie Facebook lub na e-mail: kontakt@6obcy.pl')
            })
        };
        engine["spottedJSON"]["scrollUp"] = function() {
            this["engine"]["nodes"]["body"]["scrollTop"](100)
        };
        engine["spottedJSON"]["load"] = function(url) {
            var that = this;
            $["ajax"]({
                url: "fanpageFeed.php",
                dataType: "text",
                type: "get",
                data: {
                    url: url ? url : "false"
                },
                timeout: 1000 * 10
            })["done"](function(data) {
                that["setNewData"](JSON["parse"](data))
            })
        };
        engine["spottedJSON"]["setNewData"] = function(obj) {
            if (typeof obj != "object") return;
            var posts = obj["data"];
            this["engine"]["nodes"]["spottedWidgetMobileFeed"]["html"]("");
            var pageContainer = null;
            var pageContainerChildsCount = 0;
            for (var i = 0; i < posts["length"]; i++) {
                if (pageContainer == null) {
                    pageContainer = $('<div class=spotted-widget-inner-feed-unit-page></div>');
                    pageContainerChildsCount = 0;
                    this["pageCount"]++
                }
                var postId = posts[i]["id"];
                var postMessage = posts[i]["message"];
                var postTime = posts[i]["created_time"];
                if (typeof postMessage == "undefined") continue;
                var newUnit = "";
                newUnit += '<div class=spotted-widget-inner-feed-unit data-id=' + postId + ' data-time=' + postTime + '>';
                newUnit += '<div class=feed-unit-text>' + postMessage + "</div>";
                newUnit += '<div class=feed-unit-bottom unselectable>';
                newUnit += '<div class=feed-unit-bottom-left>' + moment(Date["parse"](postTime))["locale"]("pl")["fromNow"]() + "</div>";
                newUnit += '<div class=feed-unit-bottom-right needsclick>odpowiedz</div>';
                newUnit += '<div style=clear: both;></div>';
                newUnit += "</div>";
                newUnit += "</div>";
                pageContainer["append"](newUnit);
                pageContainerChildsCount++;
                if (i == posts["length"] - 1) {
                    var lastUnit = "";
                    lastUnit += '<div class=spotted-widget-inner-feed-unit last>';
                    lastUnit += "Więcej ogłoszeń znajdziesz na naszym fanpage na Facebooku. ";
                    lastUnit += '<a href=https://facebook.com/6obcy.fan target=_blank class=only-regular-browser>Kliknij</a>';
                    lastUnit += '<a href=fb://page/421188217919725 target=_blank class=only-android-webview>Kliknij</a>';
                    lastUnit += "</div>";
                    pageContainer["append"](lastUnit)
                }
                if (pageContainerChildsCount == 4 || i == posts["length"] - 1) {
                    this["engine"]["nodes"]["spottedWidgetMobileFeed"]["append"](pageContainer);
                    pageContainer = null
                }
            }
            $(".spotted-widget-inner-feed-unit-page")["css"]("display", "");
            $(".spotted-widget-inner-feed-unit-page")["first"]()["css"]("display", "block");
            $(".spotted-widget-inner-message-loading")["css"]("display", "none");
            $(".spotted-widget-inner-message-title")["css"]("display", "block");
            $(".spotted-widget-inner-interface")["css"]("display", "block");
            this["pageCurrentIndex"] = 1;
            this["updatePaginationTitle"]();
            this["testButtons"]()
        };
        engine["spottedJSON"]["updatePaginationTitle"] = function() {
            $(".spotted-widget-inner-message-title > span")["text"](this["pageCurrentIndex"] + "/" + this["pageCount"])
        };
        engine["spottedJSON"]["testButtons"] = function() {
            var visible = $(".spotted-widget-inner-feed-unit-page:visible");
            if (visible["length"] == 0) return;
            if (visible["prev"]()["length"] != 0) $(".spotted-widget-inner-newer")["addClass"]("active");
            else $(".spotted-widget-inner-newer")["removeClass"]("active");
            if (visible["next"]()["length"] != 0) $(".spotted-widget-inner-older")["addClass"]("active");
            else $(".spotted-widget-inner-older")["removeClass"]("active")
        };
        engine["init"]()
    });
    $(function() {
        var unitW = $(".spotted-unit")["outerWidth"](true);
        var unitH = $(".spotted-unit")["height"]();
        var unitSingleMarginH = parseFloat($(".spotted-unit")["css"]("margin-right"));
        var unitPaddingSumH = $(".spotted-unit")["innerWidth"]() - $(".spotted-unit")["width"]();

        function doRow(row, rowW, firstRow, lastRow, evenRow) {
            var singleRow = firstRow && lastRow;
            var singleInRow = row["length"] == 1;
            var evenElement = false;
            var spacesBetweenCount = row["length"] - 1;
            var spacesBetweenTotalW = spacesBetweenCount * unitSingleMarginH;
            var spaceForUnits = rowW - spacesBetweenTotalW;
            var spaceForUnit = Math["round"](spaceForUnits / row["length"]);
            var spaceForUnitWithoutPadding = spaceForUnit - unitPaddingSumH - 1;
            for (var i = 0; i < row["length"]; i++) {
                var elem = $(row[i]);
                if (i == 0) elem["addClass"]("spotted-unit-first-in-row");
                if (i == row["length"] - 1) elem["addClass"]("spotted-unit-last-in-row");
                if (evenElement) elem["addClass"]("spotted-unit-even-in-row");
                evenElement = !evenElement;
                if (evenRow) elem["addClass"]("spotted-unit-in-even-row");
                if (singleRow) elem["addClass"]("spotted-unit-in-single-row");
                if (singleInRow) elem["addClass"]("spotted-unit-single-in-row");
                elem["width"](spaceForUnitWithoutPadding)
            }
            $(row)["find"](".spotted-unit-text")["css"]("height", "auto");
            var greaterUnitH = 0;
            for (var i = 0; i < row["length"]; i++) {
                var unitMessageTextH = $(row[i])["find"](".spotted-unit-text")["height"]();
                if (unitMessageTextH > greaterUnitH) greaterUnitH = unitMessageTextH
            }
            $(row)["find"](".spotted-unit-text")["css"]("height", greaterUnitH + "px")
        }
        function refreshSpottedList() {
            var units = $(this)["find"](".spotted-unit");
            units["removeClass"]("spotted-unit-first-in-row spotted-unit-last-in-row spotted-unit-even-in-row spotted-unit-in-even-row spotted-unit-in-single-row spotted-unit-single-in-row");
            var rowW = $(this)["width"]();
            var unitsPerRow = rowW / unitW;
            var unitsPerRowFloored = Math["floor"](unitsPerRow);
            if (unitsPerRowFloored == 0) unitsPerRowFloored = 1;
            var rowLength = Math["ceil"](units["length"] / unitsPerRowFloored);
            var row = [];
            var rowIndex = 0;
            for (var i = 0; i < units["length"]; i++) {
                row["push"](units[i]);
                if (row["length"] == unitsPerRowFloored || i == units["length"] - 1) {
                    doRow(row, rowW, rowIndex == 0, rowIndex == rowLength - 1, (rowIndex + 1) % 2 == 0);
                    row["length"] = 0;
                    rowIndex++
                }
            }
        }
        function refresh() {
            $(".spotted-list:visible")["each"](refreshSpottedList)
        }
        $(window)["resize"](refresh);
        refresh()
    })
}(); /*EOF*/