"use strict";
exports.id = 969;
exports.ids = [969];
exports.modules = {

/***/ 2969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/elements/BackToTop.js


function BackToTop() {
    const [hasScrolled, setHasScrolled] = (0,external_react_.useState)("false");
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", onScroll);
        return ()=>{
            window.removeEventListener("scroll", onScroll);
        };
    });
    const onScroll = ()=>{
        if (window.scrollY > 100 && !hasScrolled) {
            setHasScrolled(true);
        } else if (window.scrollY < 100 && hasScrolled) {
            setHasScrolled(false);
        }
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: hasScrolled && /*#__PURE__*/ jsx_runtime.jsx("a", {
            className: "scroll-top scroll-to-target open",
            href: "#top",
            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                className: "fas fa-level-up-alt"
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/elements/DataBg.js


function DataBg() {
    (0,external_react_.useEffect)(()=>{
        const elements = document.querySelectorAll("[data-background]");
        elements.forEach((element)=>{
            element.style.backgroundImage = `url(${element.getAttribute("data-background")})`;
        });
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {});
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/layout/Breadcrumb.js


function Breadcrumb({ breadcrumbTitle  }) {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
            className: "breadcrumb-area breadcrumb-bg",
            "data-background": "/assets/img/bg/breadcrumb_bg.jpg",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "breadcrumb-shape",
                    "data-background": "/assets/img/images/breadcrumb_shape.png"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-12",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "breadcrumb-content",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "title",
                                        children: breadcrumbTitle
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("nav", {
                                        "aria-label": "breadcrumb",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ol", {
                                            className: "breadcrumb",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    className: "breadcrumb-item",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/",
                                                        children: "Home"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    className: "breadcrumb-item active",
                                                    "aria-current": "page",
                                                    children: breadcrumbTitle
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/Footer.js


function Footer1() {
    const handleSubmit = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        fetch("http://localhost:8000/api/subscribe/add", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email
            })
        }).then((res)=>res.json()).then((data)=>{
            console.log(data);
            if (data.status === 200) {
                alert(data.message);
                e.target.reset();
            }
            if (data.status === 400) {
                alert(data.message);
                e.target.reset();
            }
        });
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("footer", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "footer-area footer-bg",
                "data-background": "/assets/img/bg/footer_bg.jpg",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "footer-top",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-xl-3 col-lg-4 col-md-7",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "footer-widget",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                        className: "fw-title",
                                                        children: "About Us"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "footer-content",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                children: "Invest in good roofing solutions. If you care about comfort and are looking for protection for your home value, we have compiled a list of some of the best roofs"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "footer-newsletter",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                        className: "title",
                                                                        children: "Subscribe to Our Newsletter"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                                                        onSubmit: handleSubmit,
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                                type: "email",
                                                                                name: "email",
                                                                                placeholder: "Enter your email",
                                                                                required: true
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                                type: "submit",
                                                                                className: "btn btn-two",
                                                                                children: "Subscribe"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-xl-3 col-lg-4 col-md-5 col-sm-6",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "footer-widget",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                        className: "fw-title",
                                                        children: "Our Services"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "footer-link",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                            className: "list-wrap",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                        href: "/project",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fas fa-angle-double-right"
                                                                            }),
                                                                            "Single Ply Roofing"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                        href: "/project",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fas fa-angle-double-right"
                                                                            }),
                                                                            "Modified Roofing"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                        href: "/project",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fas fa-angle-double-right"
                                                                            }),
                                                                            "Built-Up Roofing"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                        href: "/project",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fas fa-angle-double-right"
                                                                            }),
                                                                            "Metal Roofing"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                        href: "/project",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fas fa-angle-double-right"
                                                                            }),
                                                                            "Vegetative Roofing"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                        href: "/project",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fas fa-angle-double-right"
                                                                            }),
                                                                            "Specialty Metal"
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-xl-2 col-lg-4 col-md-6 col-sm-6",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "footer-widget",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                        className: "fw-title",
                                                        children: "Quick Links"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "footer-link",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                            className: "list-wrap",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                        href: "/contact",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fas fa-angle-double-right"
                                                                            }),
                                                                            "Terms Conditions"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                        href: "/contact",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fas fa-angle-double-right"
                                                                            }),
                                                                            "Tax Vat"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                        href: "/contact",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fas fa-angle-double-right"
                                                                            }),
                                                                            "Refund Policy"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                        href: "/contact",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fas fa-angle-double-right"
                                                                            }),
                                                                            "Typically Solutions"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                        href: "/contact",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fas fa-angle-double-right"
                                                                            }),
                                                                            "Our Process"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                        href: "/contact",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fas fa-angle-double-right"
                                                                            }),
                                                                            "Contact Us"
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-xl-4 col-lg-5 col-md-6",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "footer-widget",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                        className: "fw-title",
                                                        children: "Instagram Posts"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "footer-instagram",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                            className: "list-wrap",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                        href: "/#",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                            src: "/assets/img/instagram/f_insta_img01.jpg",
                                                                            alt: ""
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                        href: "/#",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                            src: "/assets/img/instagram/f_insta_img02.jpg",
                                                                            alt: ""
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                        href: "/#",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                            src: "/assets/img/instagram/f_insta_img03.jpg",
                                                                            alt: ""
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                        href: "/#",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                            src: "/assets/img/instagram/f_insta_img04.jpg",
                                                                            alt: ""
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                        href: "/#",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                            src: "/assets/img/instagram/f_insta_img05.jpg",
                                                                            alt: ""
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                        href: "/#",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                            src: "/assets/img/instagram/f_insta_img06.jpg",
                                                                            alt: ""
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "footer-logo-area",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "row align-items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-xl-3 col-lg-3 col-md-12",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "logo",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/index",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/assets/img/logo/w_logo.png",
                                                            alt: ""
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-xl-4 col-lg-4 col-md-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "footer-contact",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "icon",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fas fa-phone-alt"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "content",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    children: "Phone No"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                    href: "/tel:024 286 7618",
                                                                    children: "024 286 7618"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-xl-5 col-lg-5 col-md-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "footer-social",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                            className: "title",
                                                            children: "Follow Us:"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                            className: "list-wrap",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                        href: "/#",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                            className: "fab fa-facebook-f"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                        href: "/#",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                            className: "fab fa-youtube"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "footer-bottom",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-md-6",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "copyright-text",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                children: [
                                                    "\xa9 Copyright ",
                                                    new Date().getFullYear(),
                                                    ". All Right Reserved"
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-md-6",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "footer-bootom-menu",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                className: "list-wrap",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "/contact",
                                                            children: "Privacy Policy"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "/contact",
                                                            children: "Terms Conditions"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/Sidebar.js



function Sidebar() {
    const [isActive, setIsActive] = (0,external_react_.useState)({
        status: false,
        key: ""
    });
    const handleToggle = (key)=>{
        if (isActive.key === key) {
            setIsActive({
                status: false
            });
        } else {
            setIsActive({
                status: true,
                key
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
            className: "navigation",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                    className: "menu-item-has-children",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "#",
                            children: "Home"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("ul", {
                            className: "sub-menu",
                            style: {
                                display: `${isActive.key == 1 ? "block" : "none"}`
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/",
                                    children: "Home One"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "dropdown-btn",
                            onClick: ()=>handleToggle(1),
                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "fas fa-angle-down"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/about",
                        children: "About us"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                    className: "menu-item-has-children",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "#",
                            children: "Services"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            className: "sub-menu",
                            style: {
                                display: `${isActive.key == 2 ? "block" : "none"}`
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/services",
                                        children: "Services Page"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/services-details",
                                        children: "Services Details"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "dropdown-btn",
                            onClick: ()=>handleToggle(2),
                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "fas fa-angle-down"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                    className: "active menu-item-has-children",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "#",
                            children: "Pages"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            className: "sub-menu",
                            style: {
                                display: `${isActive.key == 3 ? "block" : "none"}`
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/project",
                                        children: "Project Page"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/project-details",
                                        children: "Project Details"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/team",
                                        children: "Our Team"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/team-details",
                                        children: "Team Details"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/error",
                                        children: "404 Error"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "dropdown-btn",
                            onClick: ()=>handleToggle(3),
                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "fas fa-angle-down"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                    className: "menu-item-has-children",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "#",
                            children: "Blog"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            className: "sub-menu",
                            style: {
                                display: `${isActive.key == 4 ? "block" : "none"}`
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/blog",
                                        children: "Our Blog"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/blog-details",
                                        children: "Blog Details"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "dropdown-btn",
                            onClick: ()=>handleToggle(4),
                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "fas fa-angle-down"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/contact",
                        children: "Contact"
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./public/assets/img/logo/Logo.jpg
/* harmony default export */ const Logo = ({"src":"/_next/static/media/Logo.c7f111ee.jpg","height":344,"width":836,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAApIS//8QAGhABAAIDAQAAAAAAAAAAAAAAAgESAAMRIf/aAAgBAQABPwBtyzturleT3P/EABYRAAMAAAAAAAAAAAAAAAAAAAABMf/aAAgBAgEBPwB0/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQACEv/aAAgBAwEBPwCoZJ//2Q==","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./components/layout/Header.js





function Header({ headerCls , headerTop  }) {
    const [scroll, setScroll] = (0,external_react_.useState)(0);
    const [isToggled, setToggled] = (0,external_react_.useState)(false);
    const handleToggled = ()=>{
        setToggled(!isToggled);
        !isToggled ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible");
    };
    (0,external_react_.useEffect)(()=>{
        document.addEventListener("scroll", ()=>{
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            headerTop && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "header-top-wrap",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xl-8 col-lg-9",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "header-top-left",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                        className: "list-wrap",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: "Welcome to Central Roofing System"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fas fa-phone-alt"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "tel:0242867618",
                                                        children: " 024 286 7618"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fas fa-envelope"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "mailto:agent@centralroofingsystem.com",
                                                        children: "agent@centralroofingsystem.com"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xl-4 col-lg-3",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "header-top-right",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "header-lang",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "dropdown",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                        className: "dropdown-toggle",
                                                        type: "button",
                                                        id: "dropdownMenuButton1",
                                                        "data-bs-toggle": "dropdown",
                                                        "aria-haspopup": "true",
                                                        "aria-expanded": "false",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                src: "assets/img/icon/united-states.jpg",
                                                                alt: ""
                                                            }),
                                                            " ",
                                                            "English"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "dropdown-menu",
                                                        "aria-labelledby": "dropdownMenuButton1",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                className: "dropdown-item",
                                                                href: "/",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                        src: "assets/img/icon/russia.jpg",
                                                                        alt: ""
                                                                    }),
                                                                    "Russia"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                className: "dropdown-item",
                                                                href: "/",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                        src: "assets/img/icon/india.jpg",
                                                                        alt: ""
                                                                    }),
                                                                    "India"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                className: "dropdown-item",
                                                                href: "/",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                        src: "assets/img/icon/bangladesh.jpg",
                                                                        alt: ""
                                                                    }),
                                                                    "Bangla"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "header-social",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                className: "list-wrap",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fab fa-facebook-f"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fab fa-youtube"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("header", {
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    id: "sticky-header",
                    className: `menu-area  ${scroll ? "sticky-menu" : ""} ${headerCls ? headerCls : ""}`,
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mobile-nav-toggler",
                                        onClick: handleToggled,
                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "fas fa-bars"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "menu-wrap",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                                            className: "menu-nav",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "logo different-logo",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: Logo.src,
                                                            alt: "Logo"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "logo d-none",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/assets/img/logo/logo.jpg",
                                                            alt: "Logo"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "navbar-wrap main-menu d-none d-lg-flex",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                        className: "navigation",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                    href: "/",
                                                                    children: "Home"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                    href: "/about",
                                                                    children: "About us"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                    href: "/services",
                                                                    children: "Services"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                    href: "/project",
                                                                    children: "Projects"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                    href: "/contact",
                                                                    children: "Contact"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "header-action d-none d-md-block",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                        className: "list-wrap",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            className: "header-btn",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                target: "_blank",
                                                                href: "https://wa.me/<number>",
                                                                className: "btn",
                                                                children: "Get a Quoute"
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mobile-menu",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                                            className: "menu-box",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "close-btn",
                                                    onClick: handleToggled,
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fas fa-times"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "nav-logo",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/assets/img/logo/logo_02.png",
                                                            alt: "Logo"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "menu-outer",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(Sidebar, {})
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "social-links",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                        className: "clearfix list-wrap",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                    href: "/#",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "fab fa-facebook-f"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                    href: "/#",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "fab fa-youtube"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "menu-backdrop"
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/layout/PageHead.js


const PageHead = ({ headTitle  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
            children: /*#__PURE__*/ jsx_runtime.jsx("title", {
                children: headTitle ? headTitle : "CRS -Central Roofing System"
            })
        })
    });
};
/* harmony default export */ const layout_PageHead = (PageHead);

;// CONCATENATED MODULE: ./components/layout/Layout.js








function Layout({ headerCls , headerTop , headTitle , breadcrumbTitle , children  }) {
    (0,external_react_.useEffect)(()=>{
        const WOW = __webpack_require__(477);
        window.wow = new WOW.WOW({
            live: false
        });
        window.wow.init();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(layout_PageHead, {
                headTitle: headTitle
            }),
            /*#__PURE__*/ jsx_runtime.jsx(DataBg, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Header, {
                headerCls: headerCls,
                headerTop: headerTop
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                children: [
                    breadcrumbTitle && /*#__PURE__*/ jsx_runtime.jsx(Breadcrumb, {
                        breadcrumbTitle: breadcrumbTitle
                    }),
                    children
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer1, {}),
            /*#__PURE__*/ jsx_runtime.jsx(BackToTop, {})
        ]
    });
}


/***/ })

};
;