"use strict";
(() => {
var exports = {};
exports.id = 227;
exports.ids = [227];
exports.modules = {

/***/ 6569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/layout/Layout.js + 7 modules
var Layout = __webpack_require__(5347);
// EXTERNAL MODULE: ./components/sections/Brand3.js
var Brand3 = __webpack_require__(8719);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/json/product.json
const product_namespaceObject = JSON.parse('[{"id":1,"description":" Our free estimation service is designed to assist potential clients in understanding the scope and cost of their roofing projects. Our experts will assess the size and requirements of your roof and provide you with a detailed cost estimate, covering labor, materials, and other expenses. This gives you a clear idea of the project\'s budget before making any commitments.","description2":" Whether you are planning a new construction project or considering roof renovations, our production of roofing sheets is the backbone of quality roofing solutions. Our dedicated team ensures that each roofing sheet meets the highest standards of craftsmanship. From selecting the finest materials to utilizing cutting-edge machinery, we take pride in producing roofing sheets that are not only aesthetically appealing but also offer exceptional durability and weather resistance."},{"id":2,"description":"Central Roofing specializes in the production of high-quality roofing sheets made from materials like aluminum and alu-zinc metals. Our state-of-the-art machines shape these materials into elegant and durable wave-like structures. Each type of roofing sheet has its own unique machine, ensuring precision and beauty in every product.","description2":"As part of our commitment to excellence, we prioritize precision and attention to detail during the installation of roofing sheets. Our skilled technicians work diligently to ensure seamless integration of the sheets, guaranteeing a watertight and long-lasting roof. With years of experience and a keen eye for accuracy, our installation process ensures that your roof is not only functional but also adds beauty and value to your property."},{"id":3,"description":"   Installing roofing sheets is a crucial process that requires skill and attention to detail. Our experienced team measures and cuts the sheets to fit your roof perfectly. We then secure them using the appropriate fasteners, starting from the bottom and working our way up. Proper overlapping is done to prevent leaks, ensuring a reliable and long-lasting roof","description2":"In addition to a vast selection of roofing sheets, we take pride in our sales services that provide you with a smooth and hassle-free experience. Our knowledgeable sales team is equipped with in-depth product knowledge, enabling them to guide you in making informed decisions about the right roofing sheets for your specific needs. Whether you are a homeowner, contractor, or builder, our sales team is dedicated to delivering exceptional customer service and ensuring you find the perfect roofing solutions."},{"id":4,"description":"   As a trusted roofing provider, we offer a wide selection of roofing sheets to cater to various requirements. Whether you need roofing sheets for residential or commercial purposes, we have you covered. Our knowledgeable staff will guide you through the options available, explaining their applications and advantages. You can purchase the roofing sheets from our physical store or online, whichever is convenient for you.","description2":"At Central Roofing, we consider roof repairs and re-roofing as vital services to maintain the integrity of your roof. Our skilled technicians are equipped with the expertise to diagnose and address various roofing issues promptly. From minor repairs to comprehensive re-roofing projects, we aim to restore the functionality and appearance of your roof efficiently and effectively. With our repair and re-roofing services, you can trust that your roof will remain resilient against the elements for years to come. "},{"id":5,"description":"   We understand that roofing sheets may encounter issues over time. Our skilled team is well-equipped to handle repairs, whether it\'s fixing leaks, addressing rust, or reattaching loose sheets. In cases of extensive damage or an aging roof, we offer re-roofing services. Our experts will carefully remove the old roofing sheets and install new ones, giving your roof a fresh and sturdy outlook.","description2":" Introducing our Roof Maintenance Program, designed to provide you with peace of mind and protect your roofing investment. Regular roof maintenance is crucial to extending the lifespan of your roof and preventing costly damages. Our comprehensive program includes periodic inspections, cleaning, and minor repairs to ensure your roof remains in optimal condition. With our proactive approach to roof maintenance, you can be confident that your roof will stand strong against any weather conditions."},{"id":6,"description":"   As part of our commitment to long-term customer satisfaction, we are introducing our Roof Maintenance Program. Regular roof maintenance is essential for prolonging the lifespan of your roof and preventing major issues. With our roof maintenance service, you can ensure your roof stays in top-notch condition, saving you from potential costly repairs in the future.","description2":" At Central Roofing, our commitment to excellence extends beyond the initial roofing service. Our Roof Maintenance Program is a testament to our dedication to customer satisfaction. By enrolling in this program, you gain access to our team of experts who will proactively monitor and maintain your roof\'s condition. With our Roof Maintenance Program, you can rest assured that your roof will continue to provide protection and performance for years to come."}]');
;// CONCATENATED MODULE: ./pages/service-details/[id].js






const ProductDetail = ({ product  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime.jsx(Layout/* default */.Z, {
            breadcrumbTitle: "Service Details",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("section", {
                        className: "services-details-area pt-120",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "row justify-content-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xl-8",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "services-details-wrap",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "services-details-thumb",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "/assets/img/services/services_details01.jpg",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "services-details-content",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                            className: "title",
                                                            children: "Modified roofing beautiful wooden house with big windows"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            children: product.description
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "services-process-wrap",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "row justify-content-center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "col-lg-6 col-md-8",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "services-process-img",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                    src: "/assets/img/services/sp_img01.jpg",
                                                                                    alt: ""
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                    src: "/assets/img/services/sp_img02.jpg",
                                                                                    alt: ""
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "col-lg-6",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "services-process-content",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                                                    className: "title",
                                                                                    children: "Our Service Process"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                                                    className: "list-wrap",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                className: "services-process-item",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                        className: "icon",
                                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                                            src: "/assets/img/icon/sp_icon01.svg",
                                                                                                            alt: ""
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                        className: "content",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                                                                className: "title",
                                                                                                                children: "Creative Analysis"
                                                                                                            }),
                                                                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                                                                children: "Creative analysis is important. It is common for marketers"
                                                                                                            })
                                                                                                        ]
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                className: "services-process-item",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                        className: "icon",
                                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                                            src: "/assets/img/icon/sp_icon02.svg",
                                                                                                            alt: ""
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                        className: "content",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                                                                className: "title",
                                                                                                                children: "Design Scratches"
                                                                                                            }),
                                                                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                                                                children: "Creative analysis is important. It is common for marketers"
                                                                                                            })
                                                                                                        ]
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                className: "services-process-item",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                        className: "icon",
                                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                                            src: "/assets/img/icon/sp_icon01.svg",
                                                                                                            alt: ""
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                        className: "content",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                                                                className: "title",
                                                                                                                children: "Development Delivery"
                                                                                                            }),
                                                                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                                                                children: "Creative analysis is important. It is common for marketers"
                                                                                                            })
                                                                                                        ]
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                            className: "title-two",
                                                            children: "We Hope You Find What You are Looking for"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            children: product.description2
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "service-benefits-wrap",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "row",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "col-lg-7 order-0 order-lg-2",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "benefits-img",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                    src: "/assets/img/services/sb_img01.jpg",
                                                                                    alt: ""
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                    src: "/assets/img/services/sb_img02.jpg",
                                                                                    alt: ""
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "col-lg-5",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "benefits-content",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                                                    className: "title",
                                                                                    children: "Our Service Benefits"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                                    children: "There are many variations of passages of Lorem by injected humour, or randomised words whic Lorem Ipsum, you need to."
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                                                    className: "list-wrap",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                                    className: "fas fa-check-circle"
                                                                                                }),
                                                                                                "In id diam nec nisi congue tincidunt"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                                    className: "fas fa-check-circle"
                                                                                                }),
                                                                                                "Vestibulum tincidunt arcu vel nisl"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                                    className: "fas fa-check-circle"
                                                                                                }),
                                                                                                "Provide the best roof services"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                                    className: "fas fa-check-circle"
                                                                                                }),
                                                                                                "Sed tristique lorem non tesque"
                                                                                            ]
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
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xl-4 col-lg-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("aside", {
                                            className: "services-sidebar",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "services-widget",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                            className: "widget-title",
                                                            children: "Our All Service"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "our-services-list",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                                className: "list-wrap",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                            href: "#",
                                                                            children: [
                                                                                "Single play roofing",
                                                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                    className: "fas fa-arrow-right"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                            href: "#",
                                                                            children: [
                                                                                "Modified roofing",
                                                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                    className: "fas fa-arrow-right"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                            href: "#",
                                                                            children: [
                                                                                "Buil-up roofing",
                                                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                    className: "fas fa-arrow-right"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                            href: "#",
                                                                            children: [
                                                                                "Roof inspection",
                                                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                    className: "fas fa-arrow-right"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                            href: "#",
                                                                            children: [
                                                                                "Metal roofing",
                                                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                    className: "fas fa-arrow-right"
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "services-widget widget-bg",
                                                    "data-background": "/assets/img/services/sw_bg.jpg",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                            className: "widget-title",
                                                            children: "Get a free quote"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                                            action: "#",
                                                            className: "sidebar-form",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "form-grp",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                        id: "name",
                                                                        type: "text",
                                                                        placeholder: "Your Name"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "form-grp",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                        id: "email",
                                                                        type: "text",
                                                                        placeholder: "Your Email Address"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "form-grp",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                                                        id: "message",
                                                                        placeholder: "Your Message"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                    type: "submit",
                                                                    className: "btn btn-two",
                                                                    children: "Contact Us"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "services-widget",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                            className: "widget-title",
                                                            children: "Our Brochures Download"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "download-wrap",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                    href: "assets/img/services/services_details01.jpg",
                                                                    download: true,
                                                                    target: "_blank",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                            className: "fas fa-cloud-download-alt"
                                                                        }),
                                                                        "Service Details.pdf 65 KB"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                    href: "assets/img/services/services_details01.jpg",
                                                                    download: true,
                                                                    target: "_blank",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                            className: "fas fa-file-pdf"
                                                                        }),
                                                                        "Roofing Models.doc 48 KB"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Brand3/* default */.Z, {})
                ]
            })
        })
    });
};
async function getStaticPaths() {
    // Generate paths for each product ID
    const paths = product_namespaceObject.map((product)=>({
            params: {
                id: product.id.toString()
            }
        }));
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const productId = parseInt(params.id);
    const product = product_namespaceObject.find((p)=>p.id === productId);
    return {
        props: {
            product
        }
    };
}
/* harmony default export */ const _id_ = (ProductDetail);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 477:
/***/ ((module) => {

module.exports = require("wowjs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,347,719], () => (__webpack_exec__(6569)));
module.exports = __webpack_exports__;

})();