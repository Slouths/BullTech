(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/work/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// Company data - logos with valid files marked, others show text
// Order matches the provided image
const companies = [
    {
        id: 'aarp',
        name: 'AARP',
        logo: '/logos/AARP_id67vHQ-gW_0.png',
        images: []
    },
    {
        id: 'adidas',
        name: 'Adidas',
        logo: '/logos/adidas.png',
        images: []
    },
    {
        id: 'bacardi',
        name: 'BACARDÍ',
        logo: '/logos/BACARDÍ_Logo_1.png',
        images: []
    },
    {
        id: 'banamex',
        name: 'Banamex',
        logo: null,
        images: []
    },
    {
        id: 'banco-de-chile',
        name: 'Banco de Chile',
        logo: '/logos/Banco de Chile_idFm8SLWQ8_1.png',
        images: [],
        whiteLogo: true
    },
    {
        id: 'black-decker',
        name: 'BLACK+DECKER',
        logo: '/logos/BLACK+DECKER_idcmqdl1Ra_1.png',
        images: []
    },
    {
        id: 'bodyhealth',
        name: 'BodyHealth',
        logo: '/logos/BodyHealth_idwrZJJyvt_0.png',
        images: []
    },
    {
        id: 'coca-cola',
        name: 'Coca-Cola',
        logo: '/logos/coca-cola.png',
        images: []
    },
    {
        id: 'cosmopolitan',
        name: 'Cosmopolitan',
        logo: '/logos/Cosmopolitan_idtkMhB8ma_1.png',
        images: []
    },
    {
        id: 'disney',
        name: 'Disney+',
        logo: '/logos/disney.png',
        images: []
    },
    {
        id: 'dxl',
        name: 'DXL BIG + TALL',
        logo: '/logos/DXL Big + Tall_id_00o-s18_1.png',
        images: []
    },
    {
        id: 'unknown-oval',
        name: '',
        logo: null,
        images: []
    },
    {
        id: 'gap',
        name: 'GAP',
        logo: '/logos/GAP_idrCX-lrbU_1.png',
        images: []
    },
    {
        id: 'guess',
        name: 'GUESS',
        logo: '/logos/Guess_idFvyXVvBG_1.png',
        images: [],
        whiteLogo: true
    },
    {
        id: 'hca',
        name: 'HCA HEALTHCARE',
        logo: null,
        images: []
    },
    {
        id: 'humana',
        name: 'HUMANA',
        logo: '/logos/Humana_Logo_1.png',
        images: []
    },
    {
        id: 'justice',
        name: 'JUSTICE',
        logo: '/logos/Justice_idJKkD-aXE_1.png',
        images: []
    },
    {
        id: 'lofficiel',
        name: "L'OFFICIEL",
        logo: null,
        images: []
    },
    {
        id: 'loreal',
        name: "L'ORÉAL",
        logo: '/logos/loreal.png',
        images: []
    },
    {
        id: 'macys',
        name: "MACY'S",
        logo: "/logos/Macy's_id1bSFctD6_1.png",
        images: []
    },
    {
        id: 'mastercard',
        name: 'Mastercard',
        logo: '/logos/mastercard.png',
        images: []
    },
    {
        id: 'neiman-marcus',
        name: 'NEIMAN MARCUS',
        logo: '/logos/Neiman Marcus_idTfegSOzj_1.png',
        images: []
    },
    {
        id: 'nickelodeon',
        name: 'NICKELODEON',
        logo: '/logos/Nickelodeon Greece_idzYvbxzp0_0.png',
        images: []
    },
    {
        id: 'novo',
        name: 'NOVO',
        logo: '/logos/Novo_idpmMLw2CI_1.png',
        images: []
    },
    {
        id: 'parade',
        name: 'PARADE',
        logo: '/logos/Parade Magazine_idOaK9eZ2q_0.png',
        images: [],
        whiteLogo: true
    },
    {
        id: 'pga-tour',
        name: 'PGA TOUR',
        logo: '/logos/PGA TOUR_idATncDXGY_0.png',
        images: []
    },
    {
        id: 'puma',
        name: 'PUMA',
        logo: '/logos/PUMA_idZScXivAN_1.png',
        images: []
    },
    {
        id: 'ralph-lauren',
        name: 'RALPH LAUREN',
        logo: '/logos/Ralph Lauren_id4gNvWZ8Z_1.png',
        images: [],
        whiteLogo: true
    },
    {
        id: 'reebok',
        name: 'Reebok',
        logo: '/logos/reebok.png',
        images: []
    },
    {
        id: 'rolling-stone',
        name: 'ROLLING STONE',
        logo: '/logos/Rolling Stone_idXkOrqE34_1.png',
        images: []
    },
    {
        id: 'sony',
        name: 'SONY',
        logo: '/logos/sony.png',
        images: []
    },
    {
        id: 'sony-music',
        name: 'SONY MUSIC',
        logo: null,
        images: []
    },
    {
        id: 'telemundo',
        name: 'TELEMUNDO',
        logo: '/logos/Telemundo_idGQkJGENP_0.png',
        images: []
    },
    {
        id: 't-mobile',
        name: 'T-MOBILE',
        logo: '/logos/T-Mobile_Logo_1.png',
        images: []
    },
    {
        id: 'toyota',
        name: 'Toyota',
        logo: '/logos/toyota.png',
        images: [],
        whiteLogo: true
    },
    {
        id: 'us-polo',
        name: 'US POLO ASSN',
        logo: '/logos/US Polo Assn_idfVs8qm3r_0.png',
        images: [],
        whiteLogo: true
    },
    {
        id: 'vanity-fair',
        name: 'VANITY FAIR',
        logo: '/logos/VANITY FAIR_idJhwFnd6x_0.png',
        images: []
    },
    {
        id: 'virgin-atlantic',
        name: 'VIRGIN ATLANTIC',
        logo: '/logos/Virgin Atlantic_idHiNfURAN_1.png',
        images: []
    },
    {
        id: 'visa',
        name: 'VISA',
        logo: '/logos/visa.png',
        images: []
    },
    {
        id: 'warner-bros',
        name: 'WB',
        logo: '/logos/warner-bros.png',
        images: []
    },
    {
        id: 'zara',
        name: 'ZARA',
        logo: '/logos/zara.png',
        images: []
    },
    {
        id: 'american-tourister',
        name: 'AMERICAN TOURISTER',
        logo: null,
        images: []
    },
    {
        id: 'audi',
        name: 'Audi',
        logo: '/logos/audi.png',
        images: []
    },
    {
        id: 'chevrolet',
        name: 'CHEVROLET',
        logo: null,
        images: []
    },
    {
        id: 'chicos',
        name: "CHICO'S",
        logo: null,
        images: []
    },
    {
        id: 'nike',
        name: 'Nike',
        logo: '/logos/nike.png',
        images: []
    },
    {
        id: 'ford',
        name: 'Ford',
        logo: '/logos/ford.png',
        images: []
    },
    {
        id: 'beneficiaries',
        name: 'Beneficiaries',
        logo: '/logos/Beneficiaries_idK5nvuwsL_1.png',
        images: []
    }
];
function WorkPage() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [selectedCompany, setSelectedCompany] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentImageIndex, setCurrentImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const visibleCompanies = companies.filter((company)=>company.logo);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkPage.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "WorkPage.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo('.work-title', {
                        y: 30,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo('.company-logo', {
                        opacity: 0
                    }, {
                        opacity: 1,
                        duration: 0.3,
                        delay: 0.1,
                        stagger: 0.01,
                        ease: 'power2.out'
                    });
                }
            }["WorkPage.useEffect.ctx"], containerRef);
            return ({
                "WorkPage.useEffect": ()=>ctx.revert()
            })["WorkPage.useEffect"];
        }
    }["WorkPage.useEffect"], []);
    // Close modal on escape key
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkPage.useEffect": ()=>{
            const handleEscape = {
                "WorkPage.useEffect.handleEscape": (e)=>{
                    if (e.key === 'Escape') {
                        setSelectedCompany(null);
                    }
                }
            }["WorkPage.useEffect.handleEscape"];
            window.addEventListener('keydown', handleEscape);
            return ({
                "WorkPage.useEffect": ()=>window.removeEventListener('keydown', handleEscape)
            })["WorkPage.useEffect"];
        }
    }["WorkPage.useEffect"], []);
    const openGallery = (company)=>{
        if (company.images.length > 0) {
            setSelectedCompany(company);
            setCurrentImageIndex(0);
        }
    };
    const nextImage = ()=>{
        if (selectedCompany) {
            setCurrentImageIndex((prev)=>prev === selectedCompany.images.length - 1 ? 0 : prev + 1);
        }
    };
    const prevImage = ()=>{
        if (selectedCompany) {
            setCurrentImageIndex((prev)=>prev === 0 ? selectedCompany.images.length - 1 : prev - 1);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        ref: containerRef,
        className: "bg-[#080808] min-h-screen text-white pt-32 pb-24 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-[600px] h-[600px] bg-bulltech-pink/5 rounded-full blur-[200px] pointer-events-none z-0"
            }, void 0, false, {
                fileName: "[project]/app/work/page.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-[600px] h-[600px] bg-bulltech-blue/5 rounded-full blur-[200px] pointer-events-none z-0"
            }, void 0, false, {
                fileName: "[project]/app/work/page.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 md:px-12 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-20 md:mb-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "work-title text-[clamp(3rem,8vw,8rem)] font-black uppercase leading-[0.85] tracking-tighter mb-8",
                                children: [
                                    "OUR",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/app/work/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 16
                                    }, this),
                                    "CLIENTS"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/work/page.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "work-title text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed",
                                children: "We've had the privilege of working with amazing brands and production teams. Click on a logo to view our collaborative work."
                            }, void 0, false, {
                                fileName: "[project]/app/work/page.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/work/page.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4",
                        children: visibleCompanies.map((company)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>openGallery(company),
                                disabled: company.images.length === 0,
                                className: "company-logo group relative aspect-[2/1] bg-gradient-to-br from-white/[0.2] to-white/[0.1] backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-bulltech-pink/30 hover:from-white/[0.25] hover:to-white/[0.15] disabled:cursor-default",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex items-center justify-center p-3",
                                        children: company.logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: company.logo,
                                            alt: company.name,
                                            width: 120,
                                            height: 60,
                                            className: "w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity ".concat(company.whiteLogo ? 'brightness-0 invert' : '')
                                        }, void 0, false, {
                                            fileName: "[project]/app/work/page.tsx",
                                            lineNumber: 166,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-wider text-center leading-tight group-hover:text-white transition-colors",
                                            children: company.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/work/page.tsx",
                                            lineNumber: 176,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/work/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-bulltech-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                                    }, void 0, false, {
                                        fileName: "[project]/app/work/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this),
                                    company.images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-bulltech-pink/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-bold uppercase tracking-widest text-white",
                                            children: "View →"
                                        }, void 0, false, {
                                            fileName: "[project]/app/work/page.tsx",
                                            lineNumber: 188,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/work/page.tsx",
                                        lineNumber: 187,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, company.id, true, {
                                fileName: "[project]/app/work/page.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/work/page.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-white/30 text-xs mt-8 uppercase tracking-widest",
                        children: "40+ Brands & Counting"
                    }, void 0, false, {
                        fileName: "[project]/app/work/page.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 pt-12 border-t border-white/10",
                        children: [
                            {
                                value: '100%',
                                label: 'Satisfaction Rate'
                            },
                            {
                                value: '30+',
                                label: 'Years Combined Experience'
                            },
                            {
                                value: '700+',
                                label: 'Projects Completed'
                            }
                        ].map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-4xl md:text-5xl font-black text-bulltech-pink mb-2",
                                        children: stat.value
                                    }, void 0, false, {
                                        fileName: "[project]/app/work/page.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs uppercase tracking-[0.2em] text-white/50 leading-relaxed max-w-[150px] mx-auto",
                                        children: stat.label
                                    }, void 0, false, {
                                        fileName: "[project]/app/work/page.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/app/work/page.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/work/page.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/work/page.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            selectedCompany && selectedCompany.images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[10002] bg-black/95 backdrop-blur-md flex items-center justify-center",
                onClick: ()=>setSelectedCompany(null),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10",
                        onClick: ()=>setSelectedCompany(null),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6 text-white",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M6 18L18 6M6 6l12 12"
                            }, void 0, false, {
                                fileName: "[project]/app/work/page.tsx",
                                lineNumber: 230,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/work/page.tsx",
                            lineNumber: 229,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/work/page.tsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-6 left-6 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm uppercase tracking-widest text-white/50 mb-1",
                                children: "Portfolio"
                            }, void 0, false, {
                                fileName: "[project]/app/work/page.tsx",
                                lineNumber: 236,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold",
                                children: selectedCompany.name
                            }, void 0, false, {
                                fileName: "[project]/app/work/page.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/work/page.tsx",
                        lineNumber: 235,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-mono",
                        children: [
                            currentImageIndex + 1,
                            " / ",
                            selectedCompany.images.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/work/page.tsx",
                        lineNumber: 241,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full max-w-5xl mx-6 aspect-[16/10]",
                        onClick: (e)=>e.stopPropagation(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: selectedCompany.images[currentImageIndex],
                            alt: "".concat(selectedCompany.name, " work ").concat(currentImageIndex + 1),
                            fill: true,
                            className: "object-contain",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/app/work/page.tsx",
                            lineNumber: 250,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/work/page.tsx",
                        lineNumber: 246,
                        columnNumber: 11
                    }, this),
                    selectedCompany.images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    prevImage();
                                },
                                className: "absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-6 h-6 text-white",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M15 19l-7-7 7-7"
                                    }, void 0, false, {
                                        fileName: "[project]/app/work/page.tsx",
                                        lineNumber: 267,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/work/page.tsx",
                                    lineNumber: 266,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/work/page.tsx",
                                lineNumber: 262,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    nextImage();
                                },
                                className: "absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-6 h-6 text-white",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M9 5l7 7-7 7"
                                    }, void 0, false, {
                                        fileName: "[project]/app/work/page.tsx",
                                        lineNumber: 275,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/work/page.tsx",
                                    lineNumber: 274,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/work/page.tsx",
                                lineNumber: 270,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    selectedCompany.images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-6 py-2",
                        children: selectedCompany.images.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    setCurrentImageIndex(idx);
                                },
                                className: "relative w-16 h-12 rounded overflow-hidden flex-shrink-0 transition-all ".concat(idx === currentImageIndex ? 'ring-2 ring-bulltech-pink opacity-100' : 'opacity-50 hover:opacity-80'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: img,
                                    alt: "Thumbnail ".concat(idx + 1),
                                    fill: true,
                                    className: "object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/app/work/page.tsx",
                                    lineNumber: 294,
                                    columnNumber: 19
                                }, this)
                            }, idx, false, {
                                fileName: "[project]/app/work/page.tsx",
                                lineNumber: 285,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/work/page.tsx",
                        lineNumber: 283,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/work/page.tsx",
                lineNumber: 220,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/work/page.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_s(WorkPage, "vlUCF0CuMHj5lnsUJhB9UoRn7Vs=");
_c = WorkPage;
var _c;
__turbopack_context__.k.register(_c, "WorkPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_work_page_tsx_73e96048._.js.map