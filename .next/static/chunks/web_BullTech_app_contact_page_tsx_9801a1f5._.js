(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/web/BullTech/app/contact/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/BullTech/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/BullTech/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/BullTech/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const CustomSelect = (param)=>{
    let { label, value, onChange, options, isOpen, onToggle, placeholder = 'Select an option' } = param;
    var _options_find;
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Scroll active option into view when opened
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomSelect.useEffect": ()=>{
            if (isOpen && containerRef.current) {
                const activeOption = containerRef.current.querySelector('[data-active="true"]');
                if (activeOption) {
                    activeOption.scrollIntoView({
                        block: 'nearest'
                    });
                }
            }
        }
    }["CustomSelect.useEffect"], [
        isOpen
    ]);
    const selectedLabel = ((_options_find = options.find((opt)=>opt.value === value)) === null || _options_find === void 0 ? void 0 : _options_find.label) || placeholder;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ref: containerRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-bold uppercase tracking-wider mb-2",
                children: label
            }, void 0, false, {
                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onToggle,
                className: "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-left text-white focus:outline-none focus:border-bulltech-pink transition-all duration-200 flex items-center justify-between group ".concat(isOpen ? 'border-bulltech-pink bg-white/15' : 'hover:bg-white/15'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block truncate ".concat(!value ? 'text-white/40' : ''),
                        children: selectedLabel
                    }, void 0, false, {
                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-5 h-5 text-white/60 transition-transform duration-300 ".concat(isOpen ? 'rotate-180 text-bulltech-pink' : 'group-hover:text-white'),
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M19 9l-7 7-7-7"
                        }, void 0, false, {
                            fileName: "[project]/web/BullTech/app/contact/page.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-50 top-full left-0 right-0 mt-2 bg-[#1a1a1a] border border-white/20 rounded-lg shadow-2xl overflow-hidden transition-all duration-200 origin-top ".concat(isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-60 overflow-y-auto p-1 custom-scrollbar",
                    children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            "data-active": option.value === value,
                            onClick: ()=>{
                                onChange(option.value);
                                onToggle();
                            },
                            className: "w-full text-left px-3 py-2.5 rounded-md text-sm transition-colors flex items-center justify-between ".concat(option.value === value ? 'bg-bulltech-pink/20 text-bulltech-pink font-medium' : 'text-white/80 hover:bg-white/10 hover:text-white'),
                            children: [
                                option.label,
                                option.value === value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4 text-bulltech-pink",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M5 13l4 4L19 7"
                                    }, void 0, false, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, option.value, true, {
                            fileName: "[project]/web/BullTech/app/contact/page.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/web/BullTech/app/contact/page.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/web/BullTech/app/contact/page.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CustomSelect, "8puyVO4ts1RhCfXUmci3vLI3Njw=");
_c = CustomSelect;
function ContactPage() {
    _s1();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        subject: '',
        message: '',
        services: [],
        otherService: '',
        shootLocation: '',
        shootLocationDetails: '',
        locationType: '',
        shootType: '',
        equipmentNeeds: '',
        budget: ''
    });
    const [weather, setWeather] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSuccess, setIsSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Manage which dropdown is open
    const [activeDropdown, setActiveDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactPage.useEffect": ()=>{
            // Fetch Miami weather
            const fetchWeather = {
                "ContactPage.useEffect.fetchWeather": async ()=>{
                    try {
                        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=25.76&longitude=-80.19&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=America%2FNew_York');
                        const data = await res.json();
                        const getWeatherIcon = {
                            "ContactPage.useEffect.fetchWeather.getWeatherIcon": (code)=>{
                                if (code >= 0 && code <= 3) return '☀️';
                                if (code >= 45 && code <= 48) return '🌫️';
                                if (code >= 51 && code <= 67) return '🌧️';
                                if (code >= 71 && code <= 77) return '❄️';
                                if (code >= 80 && code <= 82) return '🌦️';
                                if (code >= 95 && code <= 99) return '⛈️';
                                return '☁️';
                            }
                        }["ContactPage.useEffect.fetchWeather.getWeatherIcon"];
                        const currentCode = data.current.weather_code;
                        // Process daily forecast (next 5 days)
                        // Ensure data.daily exists before mapping
                        let daily = [];
                        if (data.daily && data.daily.time) {
                            daily = data.daily.time.slice(0, 5).map({
                                "ContactPage.useEffect.fetchWeather": (time, index)=>{
                                    const date = new Date(time + 'T12:00:00'); // Append time to avoid UTC shift
                                    const day = date.toLocaleDateString('en-US', {
                                        weekday: 'short'
                                    });
                                    // Safely get temps, fallback to current if missing (though unlikely with proper API call)
                                    const max = typeof data.daily.temperature_2m_max[index] === 'number' ? Math.round(data.daily.temperature_2m_max[index]) : 0;
                                    const min = typeof data.daily.temperature_2m_min[index] === 'number' ? Math.round(data.daily.temperature_2m_min[index]) : 0;
                                    return {
                                        day,
                                        code: data.daily.weather_code[index],
                                        max,
                                        min
                                    };
                                }
                            }["ContactPage.useEffect.fetchWeather"]);
                        }
                        setWeather({
                            temp: Math.round(data.current.temperature_2m),
                            condition: 'Clear',
                            humidity: data.current.relative_humidity_2m,
                            wind: Math.round(data.current.wind_speed_10m),
                            icon: getWeatherIcon(currentCode),
                            daily
                        });
                    } catch (error) {
                        console.error('Failed to fetch weather:', error);
                    }
                }
            }["ContactPage.useEffect.fetchWeather"];
            fetchWeather();
        }
    }["ContactPage.useEffect"], []);
    // Handle clicking outside dropdowns
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactPage.useEffect": ()=>{
            const handleClickOutside = {
                "ContactPage.useEffect.handleClickOutside": (event)=>{
                    // Check if click is inside specific service dropdown or generic container
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setActiveDropdown(null);
                    }
                }
            }["ContactPage.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "ContactPage.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["ContactPage.useEffect"];
        }
    }["ContactPage.useEffect"], []);
    const handleServiceChange = (service)=>{
        setFormData((prev)=>({
                ...prev,
                services: prev.services.includes(service) ? prev.services.filter((s)=>s !== service) : [
                    ...prev.services,
                    service
                ]
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setIsSuccess(true);
            } else {
                const errorData = await response.json();
                alert("Failed to send message: ".concat(errorData.message));
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again later.');
        } finally{
            setIsSubmitting(false);
        }
    };
    const selectedServicesText = formData.services.length > 0 ? formData.services.join(', ') : 'Select workflow';
    // Options Data
    const shootLocationOptions = [
        {
            label: 'Miami',
            value: 'miami'
        },
        {
            label: 'Isla Morada',
            value: 'isla-morada'
        },
        {
            label: 'Key West',
            value: 'key-west'
        },
        {
            label: 'Hollywood',
            value: 'hollywood'
        },
        {
            label: 'Ft. Lauderdale',
            value: 'ft-lauderdale'
        },
        {
            label: 'Palm Beach',
            value: 'palm-beach'
        },
        {
            label: 'Orlando',
            value: 'orlando'
        },
        {
            label: 'Atlanta',
            value: 'atlanta'
        },
        {
            label: 'NYC',
            value: 'nyc'
        },
        {
            label: 'LA',
            value: 'la'
        },
        {
            label: 'Another US State',
            value: 'another-us-state'
        },
        {
            label: 'Bahamas',
            value: 'bahamas'
        },
        {
            label: 'Caribbean (specify)',
            value: 'caribbean-specify'
        },
        {
            label: 'Spain',
            value: 'spain'
        },
        {
            label: 'International (specify)',
            value: 'international-specify'
        },
        {
            label: 'N/A',
            value: 'na'
        }
    ];
    const locationTypeOptions = [
        {
            label: 'Studio',
            value: 'studio'
        },
        {
            label: 'On Location (Indoor)',
            value: 'indoor'
        },
        {
            label: 'On Location (Outdoor)',
            value: 'outdoor'
        },
        {
            label: 'Underwater',
            value: 'underwater'
        },
        {
            label: 'Virtual',
            value: 'virtual'
        },
        {
            label: 'Other',
            value: 'other'
        },
        {
            label: 'N/A',
            value: 'na'
        }
    ];
    const shootTypeOptions = [
        {
            label: 'Advertising',
            value: 'advertising'
        },
        {
            label: 'Catalog',
            value: 'catalog'
        },
        {
            label: 'Editorial',
            value: 'editorial'
        },
        {
            label: 'E-Commerce',
            value: 'ecommerce'
        },
        {
            label: 'Publicity',
            value: 'publicity'
        },
        {
            label: 'Social Content',
            value: 'social-content'
        },
        {
            label: 'Tech/Support Request',
            value: 'tech-support'
        },
        {
            label: 'Test / Portfolio Request',
            value: 'test-portfolio'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#080808] text-white pt-32 md:pt-40 pb-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 md:px-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-12 md:gap-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-6",
                                        children: [
                                            "Let's Work",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 302,
                                                columnNumber: 27
                                            }, this),
                                            "Together"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 301,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg leading-relaxed text-white/80 max-w-md",
                                        children: "Whether you're planning a high-end advertising shoot, a multi-station technical production, or a remote-location project in the Caribbean or South Florida, BullTech is here to ensure your workflow is smooth, stable, and stress-free. We look forward to supporting your next production."
                                    }, void 0, false, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 304,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                lineNumber: 300,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:hello@BullDigital.tech",
                                        className: "block text-xl font-bold hover:text-bulltech-pink transition-colors",
                                        children: "hello@BullDigital.tech"
                                    }, void 0, false, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 310,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "tel:+13055227386",
                                        className: "block text-xl font-bold hover:text-bulltech-pink transition-colors",
                                        children: "+1 (305) 522-7386"
                                    }, void 0, false, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 316,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                lineNumber: 309,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#111] border border-white/10 rounded-2xl p-8 max-w-sm flex flex-col items-center text-center shadow-2xl relative overflow-hidden group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-bulltech-blue via-white to-bulltech-pink opacity-50"
                                    }, void 0, false, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 326,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-24 h-24 rounded-full overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/AF_Bulltech_Miami_Logo.webp",
                                                alt: "BullTech Logo",
                                                width: 96,
                                                height: 96,
                                                className: "w-full h-full object-cover rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 330,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                            lineNumber: 329,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 328,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold mb-1",
                                        children: "BullTech LLC"
                                    }, void 0, false, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 340,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/40 text-sm mb-6",
                                        children: "WhatsApp Business Account"
                                    }, void 0, false, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 341,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-2 rounded-xl mb-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/whatsapp-qr.png",
                                            alt: "WhatsApp QR Code",
                                            width: 200,
                                            height: 200,
                                            className: "w-48 h-48 object-contain",
                                            unoptimized: true
                                        }, void 0, false, {
                                            fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                            lineNumber: 344,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 343,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                lineNumber: 325,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-20 h-20 rounded-full overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/AF_Bulltech_Miami_Logo.webp",
                                                    alt: "BullTech Logo",
                                                    width: 80,
                                                    height: 80,
                                                    className: "w-full h-full object-cover rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 358,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-lg uppercase tracking-tight",
                                                        children: "Week Weather"
                                                    }, void 0, false, {
                                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-lg uppercase tracking-tight",
                                                        children: "Miami, FL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 367,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 357,
                                        columnNumber: 15
                                    }, this),
                                    weather && weather.daily ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: weather.daily.map((day, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between text-sm py-2 border-b border-white/5 last:border-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 font-medium text-white/80",
                                                        children: day.day
                                                    }, void 0, false, {
                                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xl",
                                                        children: day.code >= 0 && day.code <= 3 ? '☀️' : day.code >= 51 ? '🌧️' : '☁️'
                                                    }, void 0, false, {
                                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-3 font-mono",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white",
                                                                children: [
                                                                    day.max,
                                                                    "°"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                                lineNumber: 383,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white/40",
                                                                children: [
                                                                    day.min,
                                                                    "°"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                                lineNumber: 384,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 376,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 374,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center h-32",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 border-2 border-bulltech-pink border-t-transparent rounded-full animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                            lineNumber: 391,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 390,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                lineNumber: 356,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-20 h-20 rounded-full overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/AF_Bulltech_Miami_Logo.webp",
                                                    alt: "BullTech Logo",
                                                    width: 80,
                                                    height: 80,
                                                    className: "w-full h-full object-cover rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 399,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-lg uppercase tracking-tight",
                                                        children: "Weather Livestream"
                                                    }, void 0, false, {
                                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                        lineNumber: 409,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-lg uppercase tracking-tight",
                                                        children: "Miami, FL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 408,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 398,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-bold uppercase text-white/40 tracking-wider mb-2",
                                                children: "Live Cams"
                                            }, void 0, false, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 416,
                                                columnNumber: 17
                                            }, this),
                                            [
                                                {
                                                    name: 'W South Beach Cam (Official)',
                                                    url: 'https://www.miamiandbeaches.com/l/hotels/w-south-beach/488?category=1'
                                                },
                                                {
                                                    name: 'Key Biscayne (Virginia Key)',
                                                    url: 'https://www.miamiandbeaches.com/plan-your-trip/miami-webcams'
                                                },
                                                {
                                                    name: 'Coconut Grove (Arya Hotel)',
                                                    url: 'https://www.miamiandbeaches.com/plan-your-trip/miami-webcams'
                                                }
                                            ].map((cam, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: cam.url,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-all group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium text-white/80 group-hover:text-bulltech-pink",
                                                            children: cam.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                            lineNumber: 429,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-4 h-4 text-white/40 group-hover:text-bulltech-pink transition-colors",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                            }, void 0, false, {
                                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                                lineNumber: 431,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                            lineNumber: 430,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                    lineNumber: 422,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 415,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                lineNumber: 397,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                        lineNumber: 299,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12",
                        ref: dropdownRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-white/70 mb-8",
                                children: [
                                    "Requests for services may be submitted through this form. You are also welcome to e-mail us directly at",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:hello@bulldigital.tech",
                                        className: "text-bulltech-pink hover:underline",
                                        children: "hello@bulldigital.tech"
                                    }, void 0, false, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 443,
                                        columnNumber: 15
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                lineNumber: 441,
                                columnNumber: 13
                            }, this),
                            isSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-bulltech-pink/10 border border-bulltech-pink rounded-lg p-6 text-center animate-fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-bulltech-pink rounded-full flex items-center justify-center mx-auto mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-8 h-8 text-black",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M5 13l4 4L19 7"
                                            }, void 0, false, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 452,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                            lineNumber: 451,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 450,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold text-white mb-2",
                                        children: "Message Sent!"
                                    }, void 0, false, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 455,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/80 mb-6",
                                        children: "Thank you for your inquiry. We have received your message and will get back to you shortly."
                                    }, void 0, false, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 456,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsSuccess(false),
                                        className: "text-bulltech-pink hover:text-white transition-colors text-sm font-bold uppercase tracking-wider",
                                        children: "Send Another Request"
                                    }, void 0, false, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 459,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                lineNumber: 449,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-bold uppercase tracking-wider mb-2",
                                                children: [
                                                    "Name ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-bulltech-pink",
                                                        children: "(required)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                        lineNumber: 471,
                                                        columnNumber: 24
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 470,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        required: true,
                                                        placeholder: "First Name",
                                                        value: formData.firstName,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                firstName: e.target.value
                                                            }),
                                                        className: "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-bulltech-pink transition-colors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                        lineNumber: 474,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        required: true,
                                                        placeholder: "Last Name",
                                                        value: formData.lastName,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                lastName: e.target.value
                                                            }),
                                                        className: "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-bulltech-pink transition-colors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                        lineNumber: 482,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 473,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 469,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-bold uppercase tracking-wider mb-2",
                                                children: "Company"
                                            }, void 0, false, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 495,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Company",
                                                value: formData.company,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        company: e.target.value
                                                    }),
                                                className: "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-bulltech-pink transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 496,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 494,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-bold uppercase tracking-wider mb-2",
                                                children: [
                                                    "Email ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-bulltech-pink",
                                                        children: "(required)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                        lineNumber: 508,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 507,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                required: true,
                                                placeholder: "Email",
                                                value: formData.email,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        email: e.target.value
                                                    }),
                                                className: "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-bulltech-pink transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 510,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 506,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-bold uppercase tracking-wider mb-2",
                                                children: [
                                                    "Subject ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-bulltech-pink",
                                                        children: "(required)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                        lineNumber: 523,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 522,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                required: true,
                                                placeholder: "Subject",
                                                value: formData.subject,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        subject: e.target.value
                                                    }),
                                                className: "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-bulltech-pink transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 525,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 521,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-bold uppercase tracking-wider mb-2",
                                                children: [
                                                    "Message ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-bulltech-pink",
                                                        children: "(required)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                        lineNumber: 538,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 537,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                required: true,
                                                rows: 6,
                                                placeholder: "Message",
                                                value: formData.message,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        message: e.target.value
                                                    }),
                                                className: "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-bulltech-pink transition-colors resize-none"
                                            }, void 0, false, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 540,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 536,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-bold uppercase tracking-wider mb-2",
                                                children: "Workflow"
                                            }, void 0, false, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 552,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setActiveDropdown(activeDropdown === 'services' ? null : 'services'),
                                                className: "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-left text-white focus:outline-none focus:border-bulltech-pink transition-colors flex items-center justify-between group ".concat(activeDropdown === 'services' ? 'border-bulltech-pink bg-white/15' : 'hover:bg-white/15'),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block truncate ".concat(formData.services.length === 0 ? 'text-white/40' : ''),
                                                        children: selectedServicesText
                                                    }, void 0, false, {
                                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                        lineNumber: 563,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5 text-white/60 transition-transform duration-300 ".concat(activeDropdown === 'services' ? 'rotate-180 text-bulltech-pink' : 'group-hover:text-white'),
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M19 9l-7 7-7-7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                            lineNumber: 572,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                        lineNumber: 566,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 556,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute z-50 top-full left-0 right-0 mt-2 bg-[#1a1a1a] border border-white/20 rounded-lg shadow-2xl overflow-hidden transition-all duration-200 origin-top ".concat(activeDropdown === 'services' ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "max-h-80 overflow-y-auto p-4 space-y-3 custom-scrollbar",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-3 cursor-pointer group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: formData.services.includes('Digital Capture'),
                                                                    onChange: ()=>handleServiceChange('Digital Capture'),
                                                                    className: "w-5 h-5 rounded border-white/20 bg-white/10 text-bulltech-pink focus:ring-bulltech-pink focus:ring-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                                    lineNumber: 580,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white group-hover:text-bulltech-pink transition-colors",
                                                                    children: "Digital Capture"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                                    lineNumber: 581,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                            lineNumber: 579,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-3 cursor-pointer group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: formData.services.includes('Equipment Rental'),
                                                                    onChange: ()=>handleServiceChange('Equipment Rental'),
                                                                    className: "w-5 h-5 rounded border-white/20 bg-white/10 text-bulltech-pink focus:ring-bulltech-pink focus:ring-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                                    lineNumber: 584,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white group-hover:text-bulltech-pink transition-colors",
                                                                    children: "Equipment Rental"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                                    lineNumber: 585,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                            lineNumber: 583,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-3 cursor-pointer group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: formData.services.includes('Live Streaming'),
                                                                    onChange: ()=>handleServiceChange('Live Streaming'),
                                                                    className: "w-5 h-5 rounded border-white/20 bg-white/10 text-bulltech-pink focus:ring-bulltech-pink focus:ring-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                                    lineNumber: 588,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white group-hover:text-bulltech-pink transition-colors",
                                                                    children: "Live Streaming"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                                    lineNumber: 589,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                            lineNumber: 587,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center gap-3 cursor-pointer group",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: formData.services.includes('Post Production'),
                                                                            onChange: ()=>handleServiceChange('Post Production'),
                                                                            className: "w-5 h-5 rounded border-white/20 bg-white/10 text-bulltech-pink focus:ring-bulltech-pink focus:ring-2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                                            lineNumber: 593,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-white group-hover:text-bulltech-pink transition-colors",
                                                                            children: "Post Production"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                                            lineNumber: 594,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                                    lineNumber: 592,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "flex items-center gap-3 cursor-pointer group",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "checkbox",
                                                                                    checked: formData.services.includes('Color'),
                                                                                    onChange: ()=>handleServiceChange('Color'),
                                                                                    className: "w-4 h-4 rounded border-white/20 bg-white/10 text-bulltech-pink focus:ring-bulltech-pink focus:ring-2"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                                                    lineNumber: 598,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-white group-hover:text-bulltech-pink transition-colors",
                                                                                    children: "Color"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                                                    lineNumber: 599,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                                            lineNumber: 597,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "flex items-center gap-3 cursor-pointer group",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "checkbox",
                                                                                    checked: formData.services.includes('Retouching'),
                                                                                    onChange: ()=>handleServiceChange('Retouching'),
                                                                                    className: "w-4 h-4 rounded border-white/20 bg-white/10 text-bulltech-pink focus:ring-bulltech-pink focus:ring-2"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                                                    lineNumber: 602,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-white group-hover:text-bulltech-pink transition-colors",
                                                                                    children: "Retouching"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                                                    lineNumber: 603,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                                            lineNumber: 601,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                                    lineNumber: 596,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                            lineNumber: 591,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-3 cursor-pointer group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: formData.services.includes('Archival'),
                                                                    onChange: ()=>handleServiceChange('Archival'),
                                                                    className: "w-5 h-5 rounded border-white/20 bg-white/10 text-bulltech-pink focus:ring-bulltech-pink focus:ring-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                                    lineNumber: 608,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white group-hover:text-bulltech-pink transition-colors",
                                                                    children: "Archival"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                                    lineNumber: 609,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                            lineNumber: 607,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-3 cursor-pointer group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: formData.services.includes('Other'),
                                                                    onChange: ()=>handleServiceChange('Other'),
                                                                    className: "w-5 h-5 rounded border-white/20 bg-white/10 text-bulltech-pink focus:ring-bulltech-pink focus:ring-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                                    lineNumber: 612,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white group-hover:text-bulltech-pink transition-colors",
                                                                    children: "Other (Specify)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                                    lineNumber: 613,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                            lineNumber: 611,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                    lineNumber: 577,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 576,
                                                columnNumber: 17
                                            }, this),
                                            formData.services.includes('Other') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Please specify other services",
                                                value: formData.otherService,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        otherService: e.target.value
                                                    }),
                                                className: "w-full mt-3 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-bulltech-pink transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 619,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 551,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomSelect, {
                                                label: "Shoot Location",
                                                value: formData.shootLocation,
                                                onChange: (value)=>setFormData({
                                                        ...formData,
                                                        shootLocation: value
                                                    }),
                                                options: shootLocationOptions,
                                                isOpen: activeDropdown === 'shootLocation',
                                                onToggle: ()=>setActiveDropdown(activeDropdown === 'shootLocation' ? null : 'shootLocation')
                                            }, void 0, false, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 631,
                                                columnNumber: 17
                                            }, this),
                                            (formData.shootLocation === 'caribbean-specify' || formData.shootLocation === 'international-specify') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Please specify location",
                                                value: formData.shootLocationDetails,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        shootLocationDetails: e.target.value
                                                    }),
                                                className: "w-full mt-3 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-bulltech-pink transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 640,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 630,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomSelect, {
                                        label: "Location Type",
                                        value: formData.locationType,
                                        onChange: (value)=>setFormData({
                                                ...formData,
                                                locationType: value
                                            }),
                                        options: locationTypeOptions,
                                        isOpen: activeDropdown === 'locationType',
                                        onToggle: ()=>setActiveDropdown(activeDropdown === 'locationType' ? null : 'locationType')
                                    }, void 0, false, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 651,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomSelect, {
                                        label: "Shoot Type",
                                        value: formData.shootType,
                                        onChange: (value)=>setFormData({
                                                ...formData,
                                                shootType: value
                                            }),
                                        options: shootTypeOptions,
                                        isOpen: activeDropdown === 'shootType',
                                        onToggle: ()=>setActiveDropdown(activeDropdown === 'shootType' ? null : 'shootType')
                                    }, void 0, false, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 661,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-bold uppercase tracking-wider mb-2",
                                                children: "Equipment Needs"
                                            }, void 0, false, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 672,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                rows: 4,
                                                placeholder: "Equipment Needs",
                                                value: formData.equipmentNeeds,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        equipmentNeeds: e.target.value
                                                    }),
                                                className: "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-bulltech-pink transition-colors resize-none"
                                            }, void 0, false, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 673,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 671,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-bold uppercase tracking-wider mb-2",
                                                children: "Budget"
                                            }, void 0, false, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 684,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-white/60 mb-3",
                                                children: "For digital tech services, provide full digital budget including equipment. Please list post production budgets separately if applicable. If unknown, leave blank."
                                            }, void 0, false, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 685,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute left-4 top-1/2 -translate-y-1/2 text-white/60",
                                                        children: "$"
                                                    }, void 0, false, {
                                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                        lineNumber: 689,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "Budget",
                                                        value: formData.budget,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                budget: e.target.value
                                                            }),
                                                        className: "w-full pl-8 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-bulltech-pink transition-colors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                        lineNumber: 690,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                                lineNumber: 688,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 683,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$BullTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: isSubmitting,
                                        className: "w-full py-4 bg-bulltech-pink hover:bg-bulltech-blue text-black font-bold uppercase tracking-widest rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: isSubmitting ? 'Submitting...' : 'Submit'
                                    }, void 0, false, {
                                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                        lineNumber: 701,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                                lineNumber: 467,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/web/BullTech/app/contact/page.tsx",
                        lineNumber: 440,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/web/BullTech/app/contact/page.tsx",
                lineNumber: 296,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/web/BullTech/app/contact/page.tsx",
            lineNumber: 295,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/web/BullTech/app/contact/page.tsx",
        lineNumber: 294,
        columnNumber: 5
    }, this);
}
_s1(ContactPage, "Q888OwAHt67ui24EduHzggyhLYk=");
_c1 = ContactPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "CustomSelect");
__turbopack_context__.k.register(_c1, "ContactPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=web_BullTech_app_contact_page_tsx_9801a1f5._.js.map