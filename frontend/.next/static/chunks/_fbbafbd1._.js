(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/volunteer-activity-card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
const ActivityCard = ({ props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${props.isActive == true ? "bg-red-100 border-red-400" : "bg-green-100 border-green-400"} border  rounded-xl shadow px-4 py-3 w-full max-w-sm mx-auto`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${props.isActive == true ? "text-red-900" : "text-green-900"} text-sm text-right font-semibold mb-1`,
                children: [
                    props.tokens,
                    " Tokens"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/volunteer-activity-card.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 relative rounded-lg overflow-hidden shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: props.img_src,
                            alt: "image of food",
                            fill: true,
                            objectFit: "cover"
                        }, void 0, false, {
                            fileName: "[project]/src/components/volunteer-activity-card.tsx",
                            lineNumber: 24,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/volunteer-activity-card.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl font-bold text-gray-900 flex-1 ",
                        children: props.mess
                    }, void 0, false, {
                        fileName: "[project]/src/components/volunteer-activity-card.tsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/volunteer-activity-card.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-md text-right text-gray-700 mt-2",
                children: props.date
            }, void 0, false, {
                fileName: "[project]/src/components/volunteer-activity-card.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/volunteer-activity-card.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
};
_c = ActivityCard;
const __TURBOPACK__default__export__ = ActivityCard;
var _c;
__turbopack_context__.k.register(_c, "ActivityCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/food.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/food.fdefcdbe.png");}}),
"[project]/public/food.png.mjs { IMAGE => \"[project]/public/food.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$food$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/food.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$food$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 500,
    height: 333,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AHdoVmxnUHFiSnlnSWxsWHp0bHh1T3aDMgCMbFVlXkJyaEeSazaBcUOFZUhyY0Nqb0UAeGI/bF9Nc2VFjHRMfmc9fmNJdmBIaEs+AHFvXHppToJzOIZvT21gSHxlSnlWK0c3IwBpXDeCWEVtTS+Pa0NzZUVmb0OLe0tKQzNRsy0IyhuHGwAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(app)/volunteer/activities/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// 'use client'
// import ActivityCard, { ActivityCardProps } from "@/components/volunteer-activity-card"
// import foodImg from "@/../public/food.png"
// import { Separator } from "@/components/ui/separator"
// const activeItems: ActivityCardProps[] = [
//   {
//     _id : "123456789",
//     tokens: 2,
//     img_src: foodImg,
//     mess: "Madhura Mess",
//     date: "17/07/2025",
//     isActive: true,
//   },
//   {
//     _id : "1234567e89",
//     tokens: 1,
//     img_src: foodImg,
//     mess: "Annapurna",
//     date: "17/07/2025",
//     isActive: true,
//   },
//   {
//     _id : "1234afe56789",
//     tokens: 3,
//     img_src: foodImg,
//     mess: "Sai Bhojanalay",
//     date: "17/07/2025",
//     isActive: true,
//   },
// ]
// const completeItems: ActivityCardProps[] = [
//   {
//     _id : "1234567aefe89",
//     tokens: 1,
//     img_src: foodImg,
//     mess: "Madhura Mess",
//     date: "16/07/2025",
//     isActive: false,
//   },
//   {
//     _id : "123erer456789",
//     tokens: 2,
//     img_src: foodImg,
//     mess: "Yogita Dining",
//     date: "15/07/2025",
//     isActive: false,
//   },
//   {
//     _id : "1234567aea89",
//     tokens: 1,
//     img_src: foodImg,
//     mess: "Krishna Bhojanalay",
//     date: "14/07/2025",
//     isActive: false,
//   },
//   {
//     _id : "123456aefe789",
//     tokens: 2,
//     img_src: foodImg,
//     mess: "Ganesh Mess",
//     date: "13/07/2025",
//     isActive: false,
//   },
// ]
// const Activities = () => {
//   return (
//     <div className="w-full h-full px-4">
//       <div className="w-full">
//         <h1 className="text-center text-3xl font-bold mb-5">Activities</h1>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-5">
//         {
//           activeItems.map((item) => (
//             <ActivityCard props={item} key={item._id}/>
//           ))
//         }
//       </div>
//       <div>
//         <Separator />
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-5">
//         {
//           completeItems.map((item) => (
//             <ActivityCard props={item} key={item._id}/>
//           ))
//         }
//       </div>
//     </div>
//   )
// }
// export default Activities
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$volunteer$2d$activity$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/volunteer-activity-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$food$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$food$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/food.png.mjs { IMAGE => "[project]/public/food.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const Activities = ()=>{
    _s();
    const [pending, setPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [completed, setCompleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Activities.useEffect": ()=>{
            const fetchActivities = {
                "Activities.useEffect.fetchActivities": async ()=>{
                    try {
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["volunteerAPI"].getActivities();
                        // Map backend data to ActivityCardProps
                        const mapActivity = {
                            "Activities.useEffect.fetchActivities.mapActivity": (item, isActive)=>({
                                    _id: item._id,
                                    tokens: item.credits || 1,
                                    img_src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$food$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$food$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                    mess: item.messname || "Mess",
                                    date: item.donationdate ? new Date(item.donationdate).toLocaleDateString() : "",
                                    isActive
                                })
                        }["Activities.useEffect.fetchActivities.mapActivity"];
                        setPending((res.pending || []).map({
                            "Activities.useEffect.fetchActivities": (item)=>mapActivity(item, true)
                        }["Activities.useEffect.fetchActivities"]));
                        setCompleted((res.completed || []).map({
                            "Activities.useEffect.fetchActivities": (item)=>mapActivity(item, false)
                        }["Activities.useEffect.fetchActivities"]));
                    } catch (err) {
                        setPending([]);
                        setCompleted([]);
                    } finally{
                        setLoading(false);
                    }
                }
            }["Activities.useEffect.fetchActivities"];
            fetchActivities();
        }
    }["Activities.useEffect"], []);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full flex items-center justify-center",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/(app)/volunteer/activities/page.tsx",
            lineNumber: 139,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-center text-3xl font-bold mb-5",
                    children: "Activities"
                }, void 0, false, {
                    fileName: "[project]/src/app/(app)/volunteer/activities/page.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/volunteer/activities/page.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8 my-5",
                children: pending.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-3 text-center text-gray-500",
                    children: "No active activities"
                }, void 0, false, {
                    fileName: "[project]/src/app/(app)/volunteer/activities/page.tsx",
                    lineNumber: 149,
                    columnNumber: 13
                }, this) : pending.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$volunteer$2d$activity$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        props: item
                    }, item._id, false, {
                        fileName: "[project]/src/app/(app)/volunteer/activities/page.tsx",
                        lineNumber: 151,
                        columnNumber: 15
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/volunteer/activities/page.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                    fileName: "[project]/src/app/(app)/volunteer/activities/page.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/volunteer/activities/page.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8 my-5",
                children: completed.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-3 text-center text-gray-500",
                    children: "No completed activities"
                }, void 0, false, {
                    fileName: "[project]/src/app/(app)/volunteer/activities/page.tsx",
                    lineNumber: 160,
                    columnNumber: 13
                }, this) : completed.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$volunteer$2d$activity$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        props: item
                    }, item._id, false, {
                        fileName: "[project]/src/app/(app)/volunteer/activities/page.tsx",
                        lineNumber: 162,
                        columnNumber: 15
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/volunteer/activities/page.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(app)/volunteer/activities/page.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
};
_s(Activities, "pZ377KkHEKChT4LWVhdY9zAwnkc=");
_c = Activities;
const __TURBOPACK__default__export__ = Activities;
var _c;
__turbopack_context__.k.register(_c, "Activities");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_fbbafbd1._.js.map