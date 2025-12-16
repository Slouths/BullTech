(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
const navLinks = [
    {
        href: '#home',
        label: 'Home'
    },
    {
        href: '#equipment',
        label: 'Equipment'
    },
    {
        href: '#setups',
        label: 'Setups'
    },
    {
        href: '#about',
        label: 'About'
    },
    {
        href: '#contact',
        label: 'Contact'
    },
    {
        href: '#shop',
        label: 'Shop'
    }
];
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 w-full h-[70px] bg-jaffa-red text-white flex justify-between items-center px-10 z-[100] shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-3xl font-bold flex items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-4xl",
                    children: "🎬"
                }, void 0, false, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex gap-8 items-center",
                children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: link.href,
                        className: "text-white no-underline uppercase text-[13px] font-normal tracking-wide transition-opacity hover:opacity-70",
                        children: link.label
                    }, link.href, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SplitScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SplitScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// Register GSAP plugins
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
}
function SplitScreen() {
    _s();
    const fixedScreenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const topHalfRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bottomHalfRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollTriggerAreaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SplitScreen.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "SplitScreen.useEffect.ctx": ()=>{
                    // Main split animation timeline
                    const splitTimeline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        scrollTrigger: {
                            trigger: scrollTriggerAreaRef.current,
                            start: 'top top',
                            end: 'bottom top',
                            scrub: 1,
                            pin: fixedScreenRef.current,
                            anticipatePin: 1
                        }
                    });
                    // Top half moves up
                    splitTimeline.to(topHalfRef.current, {
                        y: '-50vh',
                        ease: 'power2.inOut'
                    }, 0);
                    // Bottom half moves down
                    splitTimeline.to(bottomHalfRef.current, {
                        y: '50vh',
                        ease: 'power2.inOut'
                    }, 0);
                }
            }["SplitScreen.useEffect.ctx"]);
            // Cleanup
            return ({
                "SplitScreen.useEffect": ()=>ctx.revert()
            })["SplitScreen.useEffect"];
        }
    }["SplitScreen.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: fixedScreenRef,
                className: "absolute top-0 left-0 w-screen h-screen overflow-hidden z-[50]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: topHalfRef,
                        className: "absolute top-0 left-0 w-full h-1/2 bg-jaffa-red gpu-accelerated"
                    }, void 0, false, {
                        fileName: "[project]/components/SplitScreen.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: bottomHalfRef,
                        className: "absolute bottom-0 left-0 w-full h-1/2 bg-jaffa-red gpu-accelerated"
                    }, void 0, false, {
                        fileName: "[project]/components/SplitScreen.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SplitScreen.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: scrollTriggerAreaRef,
                className: "h-[200vh] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/SplitScreen.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(SplitScreen, "yXiL+HtfyF4WJJbhuGvEo0Edtdg=");
_c = SplitScreen;
var _c;
__turbopack_context__.k.register(_c, "SplitScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
}
function Logo() {
    _s();
    const logoWhiteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const logoBlackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const logoRedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Logo.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Logo.useEffect.ctx": ()=>{
                    // Create ScrollTrigger for each section
                    // Section 1 (white background) - reveal black logo
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        trigger: '#section1',
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                        onUpdate: {
                            "Logo.useEffect.ctx": (self)=>{
                                const progress = self.progress;
                                const trigger = self.trigger;
                                const triggerTop = trigger.getBoundingClientRect().top;
                                const triggerBottom = trigger.getBoundingClientRect().bottom;
                                const viewportHeight = window.innerHeight;
                                const viewportCenter = viewportHeight / 2;
                                if (logoBlackRef.current) {
                                    // Calculate clip position based on where section is relative to center
                                    let clipTop = 0;
                                    let clipBottom = 100;
                                    if (triggerTop > viewportCenter) {
                                        // Section is below center - no clipping
                                        clipTop = 100;
                                        clipBottom = 100;
                                    } else if (triggerBottom < viewportCenter) {
                                        // Section is above center - fully visible
                                        clipTop = 0;
                                        clipBottom = 0;
                                    } else {
                                        // Section is crossing center
                                        const sectionHeight = triggerBottom - triggerTop;
                                        const centerOffset = viewportCenter - triggerTop;
                                        const centerPercent = centerOffset / sectionHeight * 100;
                                        clipTop = 0;
                                        clipBottom = 100 - centerPercent;
                                    }
                                    logoBlackRef.current.style.clipPath = "inset(".concat(clipTop, "% 0 ").concat(clipBottom, "% 0)");
                                }
                            }
                        }["Logo.useEffect.ctx"]
                    });
                    // Section 2 (black background) - reveal red logo
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        trigger: '#section2',
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                        onUpdate: {
                            "Logo.useEffect.ctx": (self)=>{
                                const trigger = self.trigger;
                                const triggerTop = trigger.getBoundingClientRect().top;
                                const triggerBottom = trigger.getBoundingClientRect().bottom;
                                const viewportHeight = window.innerHeight;
                                const viewportCenter = viewportHeight / 2;
                                if (logoRedRef.current) {
                                    let clipTop = 0;
                                    let clipBottom = 100;
                                    if (triggerTop > viewportCenter) {
                                        clipTop = 100;
                                        clipBottom = 100;
                                    } else if (triggerBottom < viewportCenter) {
                                        clipTop = 0;
                                        clipBottom = 0;
                                    } else {
                                        const sectionHeight = triggerBottom - triggerTop;
                                        const centerOffset = viewportCenter - triggerTop;
                                        const centerPercent = centerOffset / sectionHeight * 100;
                                        clipTop = 0;
                                        clipBottom = 100 - centerPercent;
                                    }
                                    logoRedRef.current.style.clipPath = "inset(".concat(clipTop, "% 0 ").concat(clipBottom, "% 0)");
                                }
                            }
                        }["Logo.useEffect.ctx"]
                    });
                    // Section 3 (white background) - use black logo, manage with section 1
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        trigger: '#section3',
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                        onUpdate: {
                            "Logo.useEffect.ctx": (self)=>{
                                const trigger = self.trigger;
                                const triggerTop = trigger.getBoundingClientRect().top;
                                const triggerBottom = trigger.getBoundingClientRect().bottom;
                                const viewportHeight = window.innerHeight;
                                const viewportCenter = viewportHeight / 2;
                                if (logoBlackRef.current) {
                                    // Get current clip path
                                    const currentClip = logoBlackRef.current.style.clipPath;
                                    const match = currentClip.match(/inset\((\d+\.?\d*)% 0 (\d+\.?\d*)% 0\)/);
                                    let existingClipTop = match ? parseFloat(match[1]) : 0;
                                    let existingClipBottom = match ? parseFloat(match[2]) : 100;
                                    if (triggerTop > viewportCenter) {
                                    // Section 3 is below center - don't modify
                                    } else if (triggerBottom < viewportCenter) {
                                        // Section 3 is above center
                                        existingClipTop = 100 - triggerBottom / viewportHeight * 100;
                                    } else {
                                        // Section 3 is crossing center from below
                                        const sectionHeight = triggerBottom - triggerTop;
                                        const centerOffset = viewportCenter - triggerTop;
                                        const centerPercent = centerOffset / sectionHeight * 100;
                                        existingClipTop = 0;
                                    }
                                    logoBlackRef.current.style.clipPath = "inset(".concat(existingClipTop, "% 0 ").concat(existingClipBottom, "% 0)");
                                }
                            }
                        }["Logo.useEffect.ctx"]
                    });
                }
            }["Logo.useEffect.ctx"]);
            return ({
                "Logo.useEffect": ()=>ctx.revert()
            })["Logo.useEffect"];
        }
    }["Logo.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex flex-col justify-center items-center pointer-events-none z-[9999]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: logoWhiteRef,
                className: "absolute",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-marker text-[clamp(180px,20vw,320px)] leading-[0.9] text-white jaffa-text-shadow-white font-bold tracking-tight",
                        children: "Jaffa"
                    }, void 0, false, {
                        fileName: "[project]/components/Logo.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[clamp(24px,3vw,40px)] tracking-[12px] font-bold text-white bg-black px-6 py-3 mt-[-40px] border-4 border-white text-center",
                        children: "DIGITAL"
                    }, void 0, false, {
                        fileName: "[project]/components/Logo.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Logo.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: logoBlackRef,
                className: "absolute",
                style: {
                    clipPath: 'inset(100% 0 100% 0)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-marker text-[clamp(180px,20vw,320px)] leading-[0.9] text-black jaffa-text-shadow-black-red font-bold tracking-tight",
                        children: "Jaffa"
                    }, void 0, false, {
                        fileName: "[project]/components/Logo.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[clamp(24px,3vw,40px)] tracking-[12px] font-bold text-black bg-white px-6 py-3 mt-[-40px] border-4 border-black text-center",
                        children: "DIGITAL"
                    }, void 0, false, {
                        fileName: "[project]/components/Logo.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Logo.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: logoRedRef,
                className: "absolute",
                style: {
                    clipPath: 'inset(100% 0 100% 0)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-marker text-[clamp(180px,20vw,320px)] leading-[0.9] text-jaffa-red jaffa-text-shadow-red-black font-bold tracking-tight",
                        children: "Jaffa"
                    }, void 0, false, {
                        fileName: "[project]/components/Logo.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[clamp(24px,3vw,40px)] tracking-[12px] font-bold text-jaffa-red bg-white px-6 py-3 mt-[-40px] border-4 border-jaffa-red text-center",
                        children: "DIGITAL"
                    }, void 0, false, {
                        fileName: "[project]/components/Logo.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Logo.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Logo.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_s(Logo, "dSPSjrtOfoMxy6R3PBjMYVIz2oU=");
_c = Logo;
var _c;
__turbopack_context__.k.register(_c, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ContentSections.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContentSections
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const sections = [
    {
        id: 'section1',
        bgColor: 'bg-jaffa-red',
        textColor: 'text-white',
        heading: 'London Based Digital Operator',
        subheading: 'and Kit Rental',
        body: 'Feel free to get in touch for Quotes',
        email: 'james@jaffalondon.com'
    },
    {
        id: 'section2',
        bgColor: 'bg-white',
        textColor: 'text-black',
        heading: 'Professional Service',
        subheading: '',
        body: 'We provide comprehensive digital capture solutions.',
        email: '+44 (0) 7989 634 879'
    },
    {
        id: 'section3',
        bgColor: 'bg-black',
        textColor: 'text-white',
        heading: 'Get In Touch',
        subheading: '',
        body: 'Ready to bring your vision to life?',
        email: 'Contact us today'
    }
];
function ContentSections() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: section.id,
                className: "relative min-h-screen flex flex-col justify-center items-center text-center px-10 py-20 transition-colors duration-500 ".concat(section.bgColor, " ").concat(section.textColor, " z-[10000]"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative max-w-4xl px-10 py-10 z-[10000]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[clamp(2rem,4vw,3.5rem)] font-bold mb-8 leading-tight",
                            children: [
                                section.heading,
                                section.subheading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/ContentSections.tsx",
                                            lineNumber: 47,
                                            columnNumber: 19
                                        }, this),
                                        section.subheading
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ContentSections.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[clamp(1.2rem,2vw,1.8rem)] leading-relaxed mb-6 opacity-90",
                            children: section.body
                        }, void 0, false, {
                            fileName: "[project]/components/ContentSections.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[clamp(1.5rem,2.5vw,2.2rem)] text-jaffa-green font-bold mt-4 tracking-wide",
                            children: section.email
                        }, void 0, false, {
                            fileName: "[project]/components/ContentSections.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ContentSections.tsx",
                    lineNumber: 42,
                    columnNumber: 11
                }, this)
            }, section.id, false, {
                fileName: "[project]/components/ContentSections.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this))
    }, void 0, false);
}
_c = ContentSections;
var _c;
__turbopack_context__.k.register(_c, "ContentSections");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_96389b95._.js.map