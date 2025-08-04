(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/(app)/admin/donations/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// "use client"
// import ActivityCard, { ActivityCardProps } from "@/components/admin-activity-card"
// import foodImg from "@/../public/food2.png"
// const Donations = () => {
//   const activity_info: ActivityCardProps[] = [
//     {
//       _id: "aefaefae",
//       image: foodImg,
//       mess: "Madhura mess",
//       volunteer: "Atharva kuldhar"
//     },
//     {
//       _id: "ae3faefae",
//       image: foodImg,
//       mess: "Madhura mess",
//       volunteer: "Atharva kuldhar"
//     },
//     {
//       _id: "aefa4efae",
//       image: foodImg,
//       mess: "Madhura mess",
//       volunteer: "Atharva kuldhar"
//     },
//     {
//       _id: "ae1faefae",
//       image: foodImg,
//       mess: "Madhura mess",
//       volunteer: "Atharva kuldhar"
//     },
//     {
//       _id: "aefae5fae",
//       image: foodImg,
//       mess: "Madhura mess",
//       volunteer: "Atharva kuldhar"
//     },
//   ]
//   return (
//     <div className="w-full h-full px-4">
//       <div className="w-full">
//         <h1 className="text-center text-3xl font-bold mb-5">Donations</h1>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-5 justify-items-center">
//         {
//           activity_info.map((item) => (
//             <ActivityCard {...item} key={item._id}/>
//           ))
//         }
//       </div>
//     </div>
//   )
// }
// export default Donations
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const DonationsPage = ()=>{
    _s();
    const [donations, setDonations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DonationsPage.useEffect": ()=>{
            const fetchDonations = {
                "DonationsPage.useEffect.fetchDonations": async ()=>{
                    try {
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("http://localhost:9000/admin/donations", {
                            withCredentials: true
                        });
                        if (response.data.success) {
                            setDonations(response.data.donations);
                        } else {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].warning("Failed to fetch donations", {
                                description: response.data.message.join(", ")
                            });
                        }
                    } catch (error) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Error fetching donations");
                        console.error(error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["DonationsPage.useEffect.fetchDonations"];
            fetchDonations();
        }
    }["DonationsPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 min-h-screen bg-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-6",
                children: "Donation Records"
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/admin/donations/page.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/admin/donations/page.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, this) : donations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "No donations found."
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/admin/donations/page.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4",
                children: donations.map((donation, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-md shadow-md p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Donor:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(app)/admin/donations/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 18
                                    }, this),
                                    " ",
                                    donation.donorName
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(app)/admin/donations/page.tsx",
                                lineNumber: 117,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Item:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(app)/admin/donations/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 18
                                    }, this),
                                    " ",
                                    donation.item
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(app)/admin/donations/page.tsx",
                                lineNumber: 118,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Quantity:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(app)/admin/donations/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 18
                                    }, this),
                                    " ",
                                    donation.quantity
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(app)/admin/donations/page.tsx",
                                lineNumber: 119,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Location:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(app)/admin/donations/page.tsx",
                                        lineNumber: 120,
                                        columnNumber: 18
                                    }, this),
                                    " ",
                                    donation.location
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(app)/admin/donations/page.tsx",
                                lineNumber: 120,
                                columnNumber: 15
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/src/app/(app)/admin/donations/page.tsx",
                        lineNumber: 116,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/admin/donations/page.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(app)/admin/donations/page.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
};
_s(DonationsPage, "goa6zbGE+QTT5LuWTjvcIPLuPf8=");
_c = DonationsPage;
const __TURBOPACK__default__export__ = DonationsPage;
var _c;
__turbopack_context__.k.register(_c, "DonationsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_%28app%29_admin_donations_page_tsx_72939f56._.js.map