(() => {
var exports = {};
exports.id = 763;
exports.ids = [763];
exports.modules = {

/***/ 981:
/***/ ((module) => {

// Exports
module.exports = {
	"single_container": "SingleProduct_single_container__K6lge",
	"left_section": "SingleProduct_left_section__kMAGq",
	"left_img": "SingleProduct_left_img__9R5c1",
	"right_section": "SingleProduct_right_section__ZIfsC",
	"title": "SingleProduct_title__CQork",
	"para": "SingleProduct_para__tVafu",
	"price": "SingleProduct_price__TzrwN"
};


/***/ }),

/***/ 133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_SingleProduct_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(981);
/* harmony import */ var _styles_SingleProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_SingleProduct_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);




const singleproduct = ({ product  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: product.name
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_SingleProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().single_container),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_SingleProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().left_section),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: product.image.url,
                            className: (_styles_SingleProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().left_img),
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_SingleProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().right_section),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: (_styles_SingleProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),
                                children: product.name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: (_styles_SingleProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().price),
                                children: [
                                    "$",
                                    product.price
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_SingleProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().para),
                                dangerouslySetInnerHTML: {
                                    __html: product.description.html
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "btn snipcart-add-item",
                                "data-item-id": product.id,
                                "data-item-price": product.price,
                                "data-item-url": `products/${product.slug}`,
                                "data-item-image": product.image.url,
                                "data-item-name": product.name,
                                children: "Add to cart \uD83D\uDED2"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (singleproduct);
async function getStaticProps({ params  }) {
    const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloClient({
        uri: "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clk79spfd0l7w01urb7gc30w0/master",
        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.InMemoryCache()
    });
    const data = await client.query({
        query: _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
			query MyQuery($slug: String) {
				product(where: { slug: $slug }) {
					id
					name
					price
					slug
					description {
						html
					}
					image {
						url
					}
				}
			}
		`,
        variables: {
            slug: params.productslug
        }
    });
    const product = data.data.product;
    return {
        props: {
            product
        }
    };
}
async function getStaticPaths() {
    const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloClient({
        uri: "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clk79spfd0l7w01urb7gc30w0/master",
        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.InMemoryCache()
    });
    const data = await client.query({
        query: _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
			query ProductsQuery {
				products (first: 25){
					id
					name
					slug
					price
					image {
						url
					}
				}
			}
		`
    });
    const paths = data.data.products.map((singleProduct)=>{
        return {
            params: {
                productslug: singleProduct.slug
            }
        };
    });
    return {
        paths,
        fallback: false
    };
}


/***/ }),

/***/ 114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(133));
module.exports = __webpack_exports__;

})();