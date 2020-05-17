(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [4],
  {
    "016d": function (t, e, a) {
      "use strict";
      a.r(e);
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "q-card",
            { staticClass: "q-mb-sm", attrs: { flat: "", bordered: "" } },
            [
              a("q-card-section", [
                a(
                  "div",
                  { staticClass: "row" },
                  [
                    a("div", { staticClass: "text-overline text-orange" }, [
                      t._v(t._s(t.article.website_name)),
                    ]),
                    a("q-space"),
                    a(
                      "div",
                      { staticClass: "actions" },
                      [
                        a(
                          "q-badge",
                          {
                            staticClass: "q-mr-lg text-bold",
                            attrs: { outline: "", color: "orange" },
                          },
                          [t._v(t._s(t.article.publish_date))]
                        ),
                        a(
                          "q-btn",
                          {
                            attrs: {
                              dense: "",
                              round: "",
                              flat: "",
                              icon: "favorite_border",
                            },
                          },
                          [
                            a(
                              "q-badge",
                              {
                                attrs: {
                                  color: "red",
                                  floating: "",
                                  transparent: "",
                                },
                              },
                              [t._v("\n            4\n          ")]
                            ),
                          ],
                          1
                        ),
                        a("q-btn", {
                          attrs: {
                            dense: "",
                            round: "",
                            flat: "",
                            icon: "share",
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                a("div", { staticClass: "text-h5 q-mt-sm q-mb-xs" }, [
                  t._v(t._s(t.article.title)),
                ]),
                a("div", { staticClass: "text-caption text-grey" }, [
                  t._v(
                    "\n        " +
                      t._s(t._f("truncate")(t.article.content, 360, "...")) +
                      "\n      "
                  ),
                ]),
                a(
                  "div",
                  { staticClass: "row q-mt-sm" },
                  [
                    a(
                      "q-badge",
                      {
                        staticClass: "ml-md",
                        attrs: { outline: "", color: "accent" },
                      },
                      [
                        t._v(
                          "\n        " +
                            t._s(t.article.searched_for) +
                            "\n      "
                        ),
                      ]
                    ),
                    a("q-space"),
                    a(
                      "q-btn",
                      {
                        attrs: {
                          type: "a",
                          target: "_blank",
                          color: "accent",
                          size: "sm",
                          href: t.article.url,
                          outline: "",
                          rounded: "",
                        },
                      },
                      [t._v("\n        read more\n      ")]
                    ),
                  ],
                  1
                ),
              ]),
            ],
            1
          );
        },
        r = [],
        n = {
          props: ["article"],
          filters: {
            truncate: function (t, e, a) {
              return t.substring(0, e) + a;
            },
          },
          data: function () {
            return { target: "_blank" };
          },
        },
        c = n,
        i = a("2877"),
        l = a("eebe"),
        o = a.n(l),
        u = a("f09f"),
        d = a("a370"),
        p = a("2c91"),
        b = a("58a8"),
        f = a("9c40"),
        g = Object(i["a"])(c, s, r, !1, null, null, null);
      e["default"] = g.exports;
      o()(g, "components", {
        QCard: u["a"],
        QCardSection: d["a"],
        QSpace: p["a"],
        QBadge: b["a"],
        QBtn: f["a"],
      });
    },
    "0bfd": function (t, e, a) {
      "use strict";
      a.r(e);
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return "loaded" == t.status
            ? a(
                "div",
                [
                  a(
                    "q-dialog",
                    {
                      model: {
                        value: t.interests,
                        callback: function (e) {
                          t.interests = e;
                        },
                        expression: "interests",
                      },
                    },
                    [
                      a(
                        "q-card",
                        { staticClass: "bg-black" },
                        [
                          a(
                            "q-card-section",
                            { staticClass: "row items-center q-pb-none" },
                            [
                              a("q-space"),
                              a("q-btn", {
                                directives: [
                                  {
                                    name: "close-popup",
                                    rawName: "v-close-popup",
                                  },
                                ],
                                attrs: { icon: "close" },
                                on: { click: t.closePopup },
                              }),
                            ],
                            1
                          ),
                          t.success
                            ? a(
                                "q-banner",
                                { staticClass: "text-white bg-positive" },
                                [
                                  t._v(
                                    "\n        " + t._s(t.success) + "\n      "
                                  ),
                                ]
                              )
                            : t._e(),
                          a(
                            "q-card-section",
                            [
                              a(
                                "div",
                                {
                                  staticClass:
                                    "q-mb-md text-weight-medium text-center",
                                },
                                [t._v("Select you interests")]
                              ),
                              t._l(t.getDefaultTags, function (e) {
                                return a(
                                  "div",
                                  {
                                    key: e.tag,
                                    staticClass: "q-ma-sm",
                                    staticStyle: { display: "inline" },
                                  },
                                  [
                                    a(
                                      "span",
                                      { staticClass: "q-gutter-md" },
                                      [
                                        a("q-btn", {
                                          attrs: {
                                            color: "blue",
                                            label: e.tag,
                                            outline: !e.enabled,
                                            rounded: "",
                                          },
                                          on: {
                                            click: function (a) {
                                              return t.selectTags(e.tag);
                                            },
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ]
                                );
                              }),
                            ],
                            2
                          ),
                          a(
                            "q-card-section",
                            { staticClass: "row items-center q-ma-lg" },
                            [
                              a("q-btn", {
                                staticClass: "full-width",
                                attrs: { color: "blue", label: "update" },
                                on: { click: t.submitInterests },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            : t._e();
        },
        r = [],
        n =
          (a("8e6e"),
          a("8a81"),
          a("ac6a"),
          a("cadf"),
          a("06db"),
          a("456d"),
          a("967e")),
        c = a.n(n),
        i = (a("96cf"), a("fa84")),
        l = a.n(i),
        o = (a("7514"), a("c47a")),
        u = a.n(o),
        d = a("2f62"),
        p = (a("4ee7"), a("bc3a")),
        b = a.n(p);
      function f(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(t);
          e &&
            (s = s.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, s);
        }
        return a;
      }
      function g(t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? f(Object(a), !0).forEach(function (e) {
                u()(t, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : f(Object(a)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(a, e)
                );
              });
        }
        return t;
      }
      var h = {
          name: "Interests",
          computed: g(
            g(
              g(
                g(
                  g({}, Object(d["b"])("articles", ["getEnabledTags"])),
                  Object(d["b"])("articles", ["getDefaultTags"])
                ),
                Object(d["b"])("articles", ["user"])
              ),
              Object(d["b"])("articles", ["status"])
            ),
            Object(d["b"])("articles", ["interests"])
          ),
          methods: {
            closePopup: function () {
              this.$store.commit("articles/SET_POPUP", {
                popup: "interestsPopup",
                flag: !1,
              });
            },
            selectTags: function (t) {
              var e = this;
              this.success = "";
              var a = this.selectedTags.find(function (e) {
                return e == t;
              });
              a
                ? (this.selectedTags.forEach(function (a, s) {
                    a == t && e.selectedTags.splice(s, 1);
                  }),
                  this.getDefaultTags.forEach(function (e) {
                    e.tag == t && (e.enabled = !1);
                  }))
                : (this.selectedTags.push(t),
                  this.getDefaultTags.forEach(function (e) {
                    e.tag == t && (e.enabled = !0);
                  }));
            },
            submitInterests: (function () {
              var t = l()(
                c.a.mark(function t() {
                  var e, a, s, r;
                  return c.a.wrap(
                    function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (e = this.selectedTags.join()),
                              (a = this.user),
                              (t.next = 4),
                              b.a.post(
                                "https://blogie-api.now.sh/api/updateuser/?email="
                                  .concat(a, "&tags=")
                                  .concat(e)
                              )
                            );
                          case 4:
                            this.$store.dispatch("articles/fetchTags", {
                              reload: !0,
                            }),
                              (s = this.$store.getters[
                                "articles/getEnabledTags"
                              ]),
                              (r = Math.pow(s.length, 2)),
                              this.$store.dispatch("articles/fetchFeed", {
                                limit: r,
                                page: 1,
                                reload: !0,
                              }),
                              (this.success = "Updated your preferences");
                          case 9:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              function e() {
                return t.apply(this, arguments);
              }
              return e;
            })(),
          },
          data: function () {
            return { selectedTags: [], success: "" };
          },
        },
        m = h,
        v = a("2877"),
        q = a("eebe"),
        _ = a.n(q),
        C = a("24e8"),
        O = a("f09f"),
        w = a("a370"),
        y = a("2c91"),
        x = a("9c40"),
        j = a("54e1"),
        P = a("7f67"),
        T = Object(v["a"])(m, s, r, !1, null, null, null);
      e["default"] = T.exports;
      _()(T, "components", {
        QDialog: C["a"],
        QCard: O["a"],
        QCardSection: w["a"],
        QSpace: y["a"],
        QBtn: x["a"],
        QBanner: j["a"],
      }),
        _()(T, "directives", { ClosePopup: P["a"] });
    },
    3255: function (t, e, a) {
      "use strict";
      a.r(e);
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return "loaded" == t.status
            ? a(
                "div",
                [
                  a(
                    "q-dialog",
                    {
                      model: {
                        value: t.initialSetup,
                        callback: function (e) {
                          t.initialSetup = e;
                        },
                        expression: "initialSetup",
                      },
                    },
                    [
                      a(
                        "q-card",
                        { staticClass: "bg-black" },
                        [
                          a(
                            "q-card-section",
                            { staticClass: "row items-center q-pb-none" },
                            [
                              a("q-space"),
                              t.selectedTags.length >= 1
                                ? a("q-btn", {
                                    directives: [
                                      {
                                        name: "close-popup",
                                        rawName: "v-close-popup",
                                      },
                                    ],
                                    attrs: { icon: "close" },
                                    on: { click: t.closePopup },
                                  })
                                : t._e(),
                            ],
                            1
                          ),
                          t.success
                            ? a(
                                "q-banner",
                                { staticClass: "text-white bg-positive" },
                                [t._v("\n      " + t._s(t.success) + "\n    ")]
                              )
                            : t._e(),
                          a(
                            "q-card-section",
                            [
                              a(
                                "div",
                                {
                                  staticClass:
                                    "q-mb-md text-weight-medium text-center",
                                },
                                [t._v("Select you interests")]
                              ),
                              t._l(t.getDefaultTags, function (e) {
                                return a(
                                  "div",
                                  {
                                    key: e.tag,
                                    staticClass: "q-ma-sm",
                                    staticStyle: { display: "inline" },
                                  },
                                  [
                                    a(
                                      "span",
                                      { staticClass: "q-gutter-md" },
                                      [
                                        a("q-btn", {
                                          attrs: {
                                            color: "blue",
                                            label: e.tag,
                                            outline: !e.enabled,
                                            rounded: "",
                                          },
                                          on: {
                                            click: function (a) {
                                              return t.selectTags(e.tag);
                                            },
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ]
                                );
                              }),
                            ],
                            2
                          ),
                          a(
                            "q-card-section",
                            { staticClass: "row items-center q-ma-lg" },
                            [
                              a("q-btn", {
                                staticClass: "full-width",
                                attrs: { color: "blue", label: "Submit" },
                                on: { click: t.submitInterests },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            : t._e();
        },
        r = [],
        n =
          (a("8e6e"),
          a("8a81"),
          a("ac6a"),
          a("cadf"),
          a("06db"),
          a("456d"),
          a("967e")),
        c = a.n(n),
        i = (a("96cf"), a("fa84")),
        l = a.n(i),
        o = (a("7514"), a("c47a")),
        u = a.n(o),
        d = a("2f62"),
        p = a("bc3a"),
        b = a.n(p);
      function f(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(t);
          e &&
            (s = s.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, s);
        }
        return a;
      }
      function g(t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? f(Object(a), !0).forEach(function (e) {
                u()(t, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : f(Object(a)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(a, e)
                );
              });
        }
        return t;
      }
      var h = {
          name: "Interests",
          computed: g(
            g(
              g(
                g(
                  g({}, Object(d["b"])("articles", ["getEnabledTags"])),
                  Object(d["b"])("articles", ["getDefaultTags"])
                ),
                Object(d["b"])("articles", ["user"])
              ),
              Object(d["b"])("articles", ["status"])
            ),
            Object(d["b"])("articles", ["initialSetup"])
          ),
          methods: {
            closePopup: function () {
              this.$store.commit("articles/SET_POPUP", {
                popup: "initialPopup",
                flag: !1,
              });
            },
            selectTags: function (t) {
              var e = this,
                a = this.selectedTags.find(function (e) {
                  return e == t;
                });
              a
                ? (this.selectedTags.forEach(function (a, s) {
                    a == t && e.selectedTags.splice(s, 1);
                  }),
                  this.getDefaultTags.forEach(function (e) {
                    e.tag == t && (e.enabled = !1);
                  }))
                : (this.selectedTags.push(t),
                  this.getDefaultTags.forEach(function (e) {
                    e.tag == t && (e.enabled = !0);
                  }));
            },
            submitInterests: (function () {
              var t = l()(
                c.a.mark(function t() {
                  var e, a, s, r;
                  return c.a.wrap(
                    function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (e = this.selectedTags.join()),
                              (a = this.user),
                              (t.next = 4),
                              b.a.post(
                                "https://blogie-api.now.sh/api/updateuser/?email="
                                  .concat(a, "&tags=")
                                  .concat(e)
                              )
                            );
                          case 4:
                            this.$store.dispatch("articles/fetchTags", {
                              reload: !0,
                            }),
                              (s = this.$store.getters[
                                "articles/getEnabledTags"
                              ]),
                              (r = Math.pow(s.length, 2)),
                              this.$store.dispatch("articles/fetchFeed", {
                                limit: r,
                                page: 1,
                                reload: !0,
                              }),
                              (this.success = "Updated your preferences");
                          case 9:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              );
              function e() {
                return t.apply(this, arguments);
              }
              return e;
            })(),
          },
          data: function () {
            return { selectedTags: [], success: "" };
          },
        },
        m = h,
        v = a("2877"),
        q = a("eebe"),
        _ = a.n(q),
        C = a("24e8"),
        O = a("f09f"),
        w = a("a370"),
        y = a("2c91"),
        x = a("9c40"),
        j = a("54e1"),
        P = a("7f67"),
        T = Object(v["a"])(m, s, r, !1, null, null, null);
      e["default"] = T.exports;
      _()(T, "components", {
        QDialog: C["a"],
        QCard: O["a"],
        QCardSection: w["a"],
        QSpace: y["a"],
        QBtn: x["a"],
        QBanner: j["a"],
      }),
        _()(T, "directives", { ClosePopup: P["a"] });
    },
    "4bbd": function (t, e, a) {
      "use strict";
      a.r(e);
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "q-card",
            { staticClass: "q-mb-sm", attrs: { flat: "", bordered: "" } },
            [
              a("q-img", {
                staticStyle: {
                  height: "175px",
                  width: "100%",
                  overflow: "hidden",
                },
                attrs: { src: t.article.thumbnail },
              }),
              a("q-card-section", [
                a(
                  "div",
                  { staticClass: "row" },
                  [
                    a("div", { staticClass: "text-overline text-orange" }, [
                      t._v(t._s(t.article.website_name)),
                    ]),
                    a("q-space"),
                    a(
                      "div",
                      { staticClass: "actions" },
                      [
                        a(
                          "q-badge",
                          {
                            staticClass: "q-mr-lg text-bold",
                            attrs: { outline: "", color: "orange" },
                          },
                          [t._v(t._s(t.article.publish_date))]
                        ),
                        a(
                          "q-btn",
                          {
                            attrs: {
                              dense: "",
                              color: "orange",
                              round: "",
                              flat: "",
                              icon: "favorite_border",
                            },
                          },
                          [
                            a(
                              "q-badge",
                              {
                                attrs: {
                                  color: "red",
                                  floating: "",
                                  transparent: "",
                                },
                              },
                              [t._v("\n          4\n        ")]
                            ),
                          ],
                          1
                        ),
                        a("q-btn", {
                          attrs: {
                            dense: "",
                            round: "",
                            flat: "",
                            icon: "share",
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                a("div", { staticClass: "text-h5 q-mt-sm q-mb-xs" }, [
                  t._v(t._s(t.article.title)),
                ]),
                a("div", { staticClass: "text-caption text-grey" }, [
                  t._v(
                    "\n      " +
                      t._s(t._f("truncate")(t.article.content, 120, "...")) +
                      "\n    "
                  ),
                ]),
                a(
                  "div",
                  { staticClass: "row q-mt-sm" },
                  [
                    a("q-badge", { attrs: { outline: "", color: "accent" } }, [
                      t._v(
                        "\n      " + t._s(t.article.searched_for) + "\n    "
                      ),
                    ]),
                    a("q-space"),
                    a(
                      "q-btn",
                      {
                        attrs: {
                          type: "a",
                          target: "_blank",
                          color: "accent",
                          size: "sm",
                          href: t.article.url,
                          outline: "",
                          rounded: "",
                        },
                      },
                      [t._v("\n      read more\n    ")]
                    ),
                  ],
                  1
                ),
              ]),
            ],
            1
          );
        },
        r = [],
        n = {
          props: ["article"],
          filters: {
            truncate: function (t, e, a) {
              return t.substring(0, e) + a;
            },
          },
          data: function () {
            return { target: "_blank" };
          },
        },
        c = n,
        i = a("2877"),
        l = a("eebe"),
        o = a.n(l),
        u = a("f09f"),
        d = a("068f"),
        p = a("a370"),
        b = a("2c91"),
        f = a("58a8"),
        g = a("9c40"),
        h = Object(i["a"])(c, s, r, !1, null, null, null);
      e["default"] = h.exports;
      o()(h, "components", {
        QCard: u["a"],
        QImg: d["a"],
        QCardSection: p["a"],
        QSpace: b["a"],
        QBadge: f["a"],
        QBtn: g["a"],
      });
    },
    aa20: function (t, e, a) {
      "use strict";
      a.r(e);
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "q-card",
            { staticClass: "q-mb-sm", attrs: { flat: "", bordered: "" } },
            [
              a("q-card-section", [
                a(
                  "div",
                  { staticClass: "row" },
                  [
                    a("div", { staticClass: "text-overline text-orange" }, [
                      t._v(t._s(t.article.website_name)),
                    ]),
                    a("q-space"),
                    a(
                      "div",
                      { staticClass: "actions" },
                      [
                        a(
                          "q-badge",
                          {
                            staticClass: "q-mr-lg text-bold",
                            attrs: { outline: "", color: "orange" },
                          },
                          [t._v(t._s(t.article.publish_date))]
                        ),
                        a(
                          "q-btn",
                          {
                            attrs: {
                              dense: "",
                              round: "",
                              flat: "",
                              icon: "favorite_border",
                            },
                          },
                          [
                            a(
                              "q-badge",
                              {
                                attrs: {
                                  color: "red",
                                  floating: "",
                                  transparent: "",
                                },
                              },
                              [t._v("\n              4\n            ")]
                            ),
                          ],
                          1
                        ),
                        a("q-btn", {
                          attrs: {
                            dense: "",
                            round: "",
                            flat: "",
                            icon: "share",
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                a("div", { staticClass: "row flex" }, [
                  a("div", { staticClass: "col-8" }, [
                    a("div", { staticClass: "text-h5 q-mb-xs" }, [
                      t._v(t._s(t.article.title)),
                    ]),
                    a("div", { staticClass: "text-caption text-grey" }, [
                      t._v(
                        "\n        " +
                          t._s(
                            t._f("truncate")(t.article.content, 120, "...")
                          ) +
                          "\n      "
                      ),
                    ]),
                  ]),
                  a(
                    "div",
                    { staticClass: "col-4" },
                    [
                      a("q-img", {
                        staticClass: "rounded-borders",
                        attrs: { src: t.article.thumbnail },
                      }),
                    ],
                    1
                  ),
                ]),
                a(
                  "div",
                  { staticClass: "row q-mt-sm" },
                  [
                    a("q-badge", { attrs: { outline: "", color: "accent" } }, [
                      t._v(
                        "\n          " +
                          t._s(t.article.searched_for) +
                          "\n        "
                      ),
                    ]),
                    a("q-space"),
                    a(
                      "q-btn",
                      {
                        attrs: {
                          type: "a",
                          target: "_blank",
                          color: "accent",
                          size: "sm",
                          href: t.article.url,
                          outline: "",
                          rounded: "",
                        },
                      },
                      [t._v("\n          read more\n        ")]
                    ),
                  ],
                  1
                ),
              ]),
            ],
            1
          );
        },
        r = [],
        n = {
          props: ["article"],
          filters: {
            truncate: function (t, e, a) {
              return t.substring(0, e) + a;
            },
          },
          data: function () {
            return { target: "_blank" };
          },
        },
        c = n,
        i = a("2877"),
        l = a("eebe"),
        o = a.n(l),
        u = a("f09f"),
        d = a("a370"),
        p = a("2c91"),
        b = a("58a8"),
        f = a("9c40"),
        g = a("068f"),
        h = Object(i["a"])(c, s, r, !1, null, null, null);
      e["default"] = h.exports;
      o()(h, "components", {
        QCard: u["a"],
        QCardSection: d["a"],
        QSpace: p["a"],
        QBadge: b["a"],
        QBtn: f["a"],
        QImg: g["a"],
      });
    },
    ec95: function (t, e, a) {
      "use strict";
      a.r(e);
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "q-page-container",
            [
              a(
                "q-page",
                { attrs: { padding: "" } },
                [
                  a(
                    "q-pull-to-refresh",
                    { on: { refresh: t.refresh } },
                    [
                      t.success
                        ? a(
                            "q-banner",
                            {
                              staticClass: "text-white bg-positive",
                              attrs: { "inline-actions": "" },
                            },
                            [t._v("\n    " + t._s(t.success) + "\n  ")]
                          )
                        : t._e(),
                      t.error
                        ? a(
                            "q-banner",
                            {
                              staticClass: "text-white bg-negative",
                              attrs: { "inline-actions": "" },
                            },
                            [t._v("\n    " + t._s(t.error) + "\n  ")]
                          )
                        : t._e(),
                      a(
                        "div",
                        {
                          staticClass: "q-pa-sm text-h5 text-weight-bold",
                          class: [
                            t.isDarkMode ? t.text - t.white : t.text - t.black,
                          ],
                          style: {
                            border:
                              "1px " +
                              (t.isDarkMode ? "white" : "black") +
                              " solid",
                            borderRadius: "10px",
                          },
                        },
                        [t._v("Recommended For You")]
                      ),
                      a("initial-popup"),
                      a("interests-popup"),
                      "loaded" == t.status
                        ? a(
                            "div",
                            [
                              a("primary-card", {
                                staticClass: "q-mt-lg",
                                attrs: { article: t.primaryCard },
                              }),
                              a("q-separator"),
                              t._l(t.subCard, function (t) {
                                return a("tiny-card", {
                                  key: t.index,
                                  attrs: { article: t },
                                });
                              }),
                              a("q-separator"),
                              t._l(t.secondaryCard, function (t) {
                                return a("sub-card", {
                                  key: t.index,
                                  attrs: { article: t },
                                });
                              }),
                              a(
                                "div",
                                { staticClass: "row" },
                                [
                                  a("q-btn", {
                                    staticClass: "q-ma-lg col",
                                    attrs: {
                                      outline: "",
                                      label: "Load More",
                                      color: "accent",
                                    },
                                    on: { click: t.loadMore },
                                  }),
                                ],
                                1
                              ),
                            ],
                            2
                          )
                        : a("div", [
                            a("div", { staticClass: "q-mt-lg" }, [
                              a(
                                "div",
                                { staticClass: "q-gutter-md" },
                                [
                                  a("q-skeleton", {
                                    attrs: { type: "circle", size: "100px" },
                                  }),
                                  a("q-skeleton", {
                                    attrs: { width: "150px" },
                                  }),
                                  a("q-skeleton", {
                                    attrs: { height: "150px" },
                                  }),
                                  a("q-skeleton", { attrs: { size: "250px" } }),
                                  a("q-skeleton", {
                                    attrs: { width: "100%", height: "100%" },
                                  }),
                                ],
                                1
                              ),
                            ]),
                          ]),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        r = [],
        n =
          (a("8e6e"),
          a("8a81"),
          a("ac6a"),
          a("cadf"),
          a("06db"),
          a("456d"),
          a("c47a")),
        c = a.n(n),
        i = a("2f62");
      function l(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(t);
          e &&
            (s = s.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, s);
        }
        return a;
      }
      function o(t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(a), !0).forEach(function (e) {
                c()(t, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : l(Object(a)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(a, e)
                );
              });
        }
        return t;
      }
      var u = {
          name: "PageIndex",
          preFetch: function (t) {
            var e = t.store,
              a = t.currentRoute;
            t.previousRoute, t.redirect, t.ssrContext;
            a.query.tutorial &&
              (e.dispatch("articles/fetchDefaultTags"),
              e.commit("articles/SET_POPUP", {
                popup: "initialPopup",
                flag: !0,
              })),
              e.subscribe(function (t, a) {
                if ("articles/SET_TAGS" === t.type) {
                  var s = e.getters["articles/getEnabledTags"],
                    r = Math.pow(s.length, 2);
                  e.dispatch("articles/fetchFeed", {
                    limit: r,
                    page: 1,
                    reload: !1,
                  });
                }
              });
          },
          components: {
            "primary-card": a("4bbd").default,
            "tiny-card": a("016d").default,
            "sub-card": a("aa20").default,
            "interests-popup": a("0bfd").default,
            "initial-popup": a("3255").default,
          },
          props: ["success", "error"],
          computed: o(
            o(
              o(
                o({}, Object(i["b"])("articles", ["articles"])),
                Object(i["b"])("articles", ["status"])
              ),
              Object(i["b"])("articles", ["isDarkMode"])
            ),
            {},
            {
              primaryCard: function () {
                return this.$store.getters["articles/articles"][0];
              },
              subCard: function () {
                return this.$store.getters["articles/articles"].slice(1, -1);
              },
              secondaryCard: function () {
                return this.$store.getters["articles/articles"].slice(-2);
              },
            }
          ),
          methods: {
            refresh: function (t) {
              var e = this.$store.getters["articles/getEnabledTags"],
                a = Math.pow(e.length, 2);
              this.$store.dispatch("articles/fetchFeed", {
                limit: a,
                page: 1,
                reload: !0,
              }),
                t();
            },
            loadMore: function () {
              this.page++;
              var t = this.$store.getters["articles/getEnabledTags"],
                e = Math.pow(t.length, 2),
                a = this.page;
              this.$store.dispatch("articles/fetchMoreFeed", {
                limit: e,
                page: a,
              });
            },
          },
          data: function () {
            return { page: 1 };
          },
        },
        d = u,
        p = a("2877"),
        b = a("eebe"),
        f = a.n(b),
        g = a("09e3"),
        h = a("9989"),
        m = a("59d7"),
        v = a("54e1"),
        q = a("eb85"),
        _ = a("9c40"),
        C = a("293e"),
        O = Object(p["a"])(d, s, r, !1, null, null, null);
      e["default"] = O.exports;
      f()(O, "components", {
        QPageContainer: g["a"],
        QPage: h["a"],
        QPullToRefresh: m["a"],
        QBanner: v["a"],
        QSeparator: q["a"],
        QBtn: _["a"],
        QSkeleton: C["a"],
      });
    },
  },
]);