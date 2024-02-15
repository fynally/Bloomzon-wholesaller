export const COMPANIES = [
    // 1St COMPANY
    {

        name: 'Shenzhen Aisiyi Fashions Co., Ltd',
        isVerified: true,
        code: "58du2yfw42",
        veri_date: '2',
        staffCount: 66,
        netWorth: '1,600m - US$140,000+',
        logo: require("../assets/wholesale/logo/logo.png"),
        category: 3,
        shortDesc: 'Quality Assurance',
        slogan: 'Finished product inspection',
        follower: 622,
        business_card: {
            name: "Shenzhen Aisiyi Technology Co., Ltd",
            logo: require("../assets/wholesale/logo/logo.png"),
            verified_year: 1,
            response_time: "<0.64h",
            response_rate: "under 5 min: 59.69%",
            country: {
                name: "China",
                iso: "cn",
                flag: require("../assets/wholesale/flags/cn.png")
            },
        },

    },

    // 2ND COMPANY
    {
        name: 'Dongguan Minaspace Electronics Company Limited',
        isVerified: true,
        code: "q3a6844bcl",
        veri_date: '3',
        staffCount: 103,
        netWorth: '1,800m - US$670,000+',
        logo: require("../assets/wholesale/logo/dg.png"),
        category: 2,
        shortDesc: 'Quality management certified',
        slogan: 'Tested & trusted',
        follower: 487,
        business_card: {
            name: "Dongguan Minaspace Electronics Co., Ltd",
            logo: require("../assets/wholesale/logo/logo.png"),
            verified_year: 1,
            response_time: "<0.64h",
            response_rate: "under 5 min: 59.69%",
            country: {
                name: "China",
                iso: "cn",
                flag: require("../assets/wholesale/flags/cn.png")
            },
        },

    },
]

export const PRODUCTS = [
    {
        id: 1,
        category: 2,
        basePrice: 35.74,
        samplePrice: 57.26,
        sellerCode: "58du2yfw42",
        name: 'Shirts',
        desc: 'Wholesale sweet jogar suits, two pieces 100% original, Lorem ipsum dolor sit amet, consectetur',
        totalOrders: [{}],
        ratingCount: [{}, {}, {},],
        totalLikes: [{}, {}, {}, {}, {}, {},],
        is_customizable: true,
        image: require("../assets/wholesale/products/clothe.png"),
        moqs: {
            base: [
                { id: 1, price: 10.50, moq: { min: 100, max: 299 } },
                { id: 2, price: 9, moq: { min: 300, max: 499 } },
                { id: 3, price: 7.88, moq: { min: 500, max: 1000 } },
            ],
            sample: [
                { id: 1, price: 88.70, moq: { min: 1, max: 100000 } }
            ]
        },
        variations: {
            colors: [
                {
                    id: 1,
                    basePrice: 35.74,
                    sample_moq: 62.99,
                    is_default: true,
                    color: "Red",
                    amount: 20.55,
                    in_stock: true,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 0, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 0, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/clothe_red.png"),
                },
                {
                    id: 2,
                    basePrice: 66.20,
                    samplePrice: 110.60,
                    color: "Blue",
                    amount: 17.99,
                    in_stock: false,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 0, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 0, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/clothe_blue.png"),
                },
                {
                    id: 3,
                    basePrice: 91.22,
                    samplePrice: 200.30,
                    color: "Grey",
                    amount: 34,
                    in_stock: true,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 0, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 0, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/clothe_grey.png"),
                },
                {
                    id: 4,
                    basePrice: 58.32,
                    samplePrice: 100.51,
                    color: "Indigo",
                    amount: 19.71,
                    in_stock: true,
                    sizes: [
                        { id: 1, in_stock: 10, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 3, price: 0, label: 'l', value: 25 },
                        { id: 3, in_stock: 8, price: 0, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/clothe.png"),
                },
            ],
            sizes: [
                { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                { id: 2, in_stock: 7, price: 0, label: 'm', value: 25 },
                { id: 3, in_stock: 2, price: 0, label: 'l', value: 32 },
                { id: 4, in_stock: 8, price: 0, label: 'xl', value: 28 },
                { id: 5, in_stock: 3, price: 0, label: '2xl', value: 32 },
                { id: 6, in_stock: 11, price: 0, label: '3xl', value: 35 },
            ]
        },
    },
    {
        id: 2,
        category: 2,
        basePrice: 35.74,
        samplePrice: 62.99,
        sellerCode: "58du2yfw42",
        name: 'T-Shirts',
        desc: 'Wholesale sweet jogar suits, two pieces 100% original, Lorem ipsum dolor sit amet, consectetur',
        totalOrders: [{}],
        ratingCount: [{}, {}, {},],
        totalLikes: [{}, {}, {}, {}, {}, {},],
        is_customizable: false,
        moqs: {
            base: [
                { id: 1, price: 10.50, moq: { min: 100, max: 299 } },
                { id: 2, price: 9, moq: { min: 300, max: 499 } },
                { id: 3, price: 7.88, moq: { min: 500, max: 1000 } },
            ],
            sample: [
                { id: 1, price: 88.70, moq: { min: 1, max: 100000 } }
            ]
        },
        image: require("../assets/wholesale/products/clothe.png"),
        variations: {
            colors: [
                {
                    id: 1,
                    basePrice: 35.74,
                    samplePrice: 62.99,
                    is_default: true,
                    color: "Red",
                    amount: 12000,
                    in_stock: true,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 3, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 5, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/clothe_red.png"),
                },
                {
                    id: 2,
                    basePrice: 66.20,
                    samplePrice: 110.60,
                    color: "Blue",
                    amount: 18500,
                    in_stock: false,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 3, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 5, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/clothe_blue.png"),
                },
                {
                    id: 3,
                    basePrice: 91.22,
                    samplePrice: 200.30,
                    color: "Grey",
                    amount: 22100,
                    in_stock: true,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 3, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 5, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/clothe_grey.png"),
                },
                {
                    id: 4,
                    basePrice: 58.32,
                    samplePrice: 100.51,
                    color: "Indigo",
                    amount: 32000,
                    in_stock: true,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 3, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 5, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/clothe.png"),
                },
            ],
            sizes: [
                { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                { id: 2, in_stock: 7, price: 0, label: 'm', value: 25 },
                { id: 3, in_stock: 2, price: 0, label: 'l', value: 32 },
                { id: 4, in_stock: 8, price: 0, label: 'xl', value: 28 },
                { id: 5, in_stock: 3, price: 0, label: '2xl', value: 32 },
                { id: 6, in_stock: 11, price: 0, label: '3xl', value: 35 },
            ]
        },

    },
    {
        id: 3,
        category: 2,
        basePrice: 35.74,
        samplePrice: 62.99,
        sellerCode: "58du2yfw42",
        name: 'Jackets',
        desc: 'Wholesale sweet jogar suits, two pieces 100% original, Lorem ipsum dolor sit amet, consectetur',
        totalOrders: [{}],
        ratingCount: [{}, {}],
        totalLikes: [{}, {}, {}, {}, {}, {}, {}, {},],
        is_customizable: true,
        moqs: {
            base: [
                { id: 1, price: 10.50, moq: { min: 100, max: 299 } },
                { id: 2, price: 9, moq: { min: 300, max: 499 } },
                { id: 3, price: 7.88, moq: { min: 500, max: 1000 } },
            ],
            sample: [
                { id: 1, price: 88.70, moq: { min: 1, max: 100000 } }
            ]
        },
        image: require("../assets/wholesale/products/clothe.png"),
        variations: {
            colors: [
                {
                    id: 1,
                    basePrice: 35.74,
                    samplePrice: 62.99,
                    is_default: true,
                    color: "Red",
                    amount: 12000,
                    in_stock: true,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 3, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 5, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/clothe_red.png"),
                },
                {
                    id: 2,
                    basePrice: 66.20,
                    samplePrice: 110.60,
                    color: "Blue",
                    amount: 18500,
                    in_stock: false,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 3, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 5, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/clothe_blue.png"),
                },
                {
                    id: 3,
                    basePrice: 91.22,
                    samplePrice: 200.30,
                    color: "Grey",
                    amount: 22100,
                    in_stock: true,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 3, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 5, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/clothe_grey.png"),
                },
                {
                    id: 4,
                    basePrice: 58.32,
                    samplePrice: 100.51,
                    color: "Indigo",
                    amount: 32000,
                    in_stock: true,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 3, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 5, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/clothe.png"),
                },
            ],
            sizes: [
                { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                { id: 2, in_stock: 7, price: 0, label: 'm', value: 25 },
                { id: 3, in_stock: 2, price: 0, label: 'l', value: 32 },
                { id: 4, in_stock: 8, price: 0, label: 'xl', value: 28 },
                { id: 5, in_stock: 3, price: 0, label: '2xl', value: 32 },
                { id: 6, in_stock: 11, price: 0, label: '3xl', value: 35 },
            ]
        },

    },
    {
        id: 4,
        category: 2,
        basePrice: 35.74,
        samplePrice: 62.99,
        sellerCode: "58du2yfw42",
        name: 'Shirts',
        desc: 'Wholesale sweet jogar suits, two pieces 100% original, Lorem ipsum dolor sit amet, consectetur',
        totalOrders: [{}],
        ratingCount: [{}, {}],
        totalLikes: [{}, {}, {}, {}, {}, {}, {}, {},],
        is_customizable: true,
        moqs: {
            base: [
                { id: 1, price: 10.50, moq: { min: 100, max: 299 } },
                { id: 2, price: 9, moq: { min: 300, max: 499 } },
                { id: 3, price: 7.88, moq: { min: 500, max: 1000 } },
            ],
            sample: [
                { id: 1, price: 88.70, moq: { min: 1, max: 100000 } }
            ]
        },
        image: require("../assets/wholesale/products/clothe.png"),
        variations: {
            colors: [
                {
                    id: 1,
                    basePrice: 35.74,
                    samplePrice: 62.99,
                    is_default: true,
                    color: "Red",
                    amount: 12000,
                    in_stock: true,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 3, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 5, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/clothe_red.png"),
                },
                {
                    id: 2,
                    basePrice: 66.20,
                    samplePrice: 110.60,
                    color: "Blue",
                    amount: 18500,
                    in_stock: false,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 3, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 5, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/clothe_blue.png"),
                },
                {
                    id: 3,
                    basePrice: 91.22,
                    samplePrice: 200.30,
                    color: "Grey",
                    amount: 22100,
                    in_stock: true,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 3, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 5, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/clothe_grey.png"),
                },
                {
                    id: 4,
                    basePrice: 58.32,
                    samplePrice: 100.51,
                    color: "Indigo",
                    amount: 32000,
                    in_stock: true,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 3, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 5, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/clothe.png"),
                },
            ],
            sizes: [
                { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                { id: 2, in_stock: 7, price: 0, label: 'm', value: 25 },
                { id: 3, in_stock: 2, price: 0, label: 'l', value: 32 },
                { id: 4, in_stock: 8, price: 0, label: 'xl', value: 28 },
                { id: 5, in_stock: 3, price: 0, label: '2xl', value: 32 },
                { id: 6, in_stock: 11, price: 0, label: '3xl', value: 35 },
            ]
        },

    },
    {
        id: 5,
        category: 2,
        basePrice: 35.74,
        samplePrice: 62.99,
        sellerCode: "58du2yfw42",
        name: 'T-Shirts',
        desc: 'Wholesale sweet jogar suits, two pieces 100% original, Lorem ipsum dolor sit amet, consectetur',
        totalOrders: [{}, {}, {}, {},],
        ratingCount: [{}, {}, {}],
        totalLikes: [{}, {}, {}, {}, {}, {}, {}, {},],
        is_customizable: true,
        moqs: {
            base: [
                { id: 1, price: 10.50, moq: { min: 100, max: 299 } },
                { id: 2, price: 9, moq: { min: 300, max: 499 } },
                { id: 3, price: 7.88, moq: { min: 500, max: 1000 } },
            ],
            sample: [
                { id: 1, price: 88.70, moq: { min: 1, max: 100000 } }
            ]
        },
        image: require("../assets/wholesale/products/clothe.png"),
        variations: {
            colors: [
                {
                    id: 1,
                    basePrice: 35.74,
                    samplePrice: 62.99,
                    is_default: true,
                    color: "Red",
                    amount: 12000,
                    in_stock: true,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 3, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 5, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/clothe_red.png"),
                },
                {
                    id: 2,
                    basePrice: 66.20,
                    samplePrice: 110.60,
                    color: "Blue",
                    amount: 18500,
                    in_stock: false,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 3, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 5, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/clothe_blue.png"),
                },
                {
                    id: 3,
                    basePrice: 91.22,
                    samplePrice: 200.30,
                    color: "Grey",
                    amount: 22100,
                    in_stock: true,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 3, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 5, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/clothe_grey.png"),
                },
                {
                    id: 4,
                    basePrice: 58.32,
                    samplePrice: 100.51,
                    color: "Indigo",
                    amount: 32000,
                    in_stock: true,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 3, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 5, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/clothe.png"),
                },
            ],
            sizes: [
                { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                { id: 2, in_stock: 7, price: 0, label: 'm', value: 25 },
                { id: 3, in_stock: 2, price: 0, label: 'l', value: 32 },
                { id: 4, in_stock: 8, price: 0, label: 'xl', value: 28 },
                { id: 5, in_stock: 3, price: 0, label: '2xl', value: 32 },
                { id: 6, in_stock: 11, price: 0, label: '3xl', value: 35 },
            ]
        },

    },
    {
        id: 6,
        category: 2,
        basePrice: 35.74,
        samplePrice: 62.99,
        sellerCode: "58du2yfw42",
        name: 'Jackets',
        desc: 'Wholesale sweet jogar suits, two pieces 100% original, Lorem ipsum dolor sit amet, consectetur',
        totalOrders: [{}, {}, {}, {},],
        ratingCount: [{}, {}, {}],
        totalLikes: [{}, {}, {}, {}, {}, {}, {}, {},],
        is_customizable: true,
        moqs: {
            base: [
                { id: 1, price: 10.50, moq: { min: 100, max: 299 } },
                { id: 2, price: 9, moq: { min: 300, max: 499 } },
                { id: 3, price: 7.88, moq: { min: 500, max: 1000 } },
            ],
            sample: [
                { id: 1, price: 88.70, moq: { min: 1, max: 100000 } }
            ]
        },
        image: require("../assets/wholesale/products/clothe.png"),
        variations: {
            colors: [
                {
                    id: 1,
                    basePrice: 35.74,
                    samplePrice: 62.99,
                    is_default: true,
                    color: "Red",
                    amount: 12000,
                    in_stock: true,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 3, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 5, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/clothe_red.png"),
                },
                {
                    id: 2,
                    basePrice: 66.20,
                    samplePrice: 110.60,
                    color: "Blue",
                    amount: 18500,
                    in_stock: false,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 3, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 5, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/clothe_blue.png"),
                },
                {
                    id: 3,
                    basePrice: 91.22,
                    samplePrice: 200.30,
                    color: "Grey",
                    amount: 22100,
                    in_stock: true,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 3, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 5, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/clothe_grey.png"),
                },
                {
                    id: 4,
                    basePrice: 58.32,
                    samplePrice: 100.51,
                    color: "Indigo",
                    amount: 32000,
                    in_stock: true,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 3, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 5, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/clothe.png"),
                },
            ],
            sizes: [
                { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                { id: 2, in_stock: 7, price: 0, label: 'm', value: 25 },
                { id: 3, in_stock: 2, price: 0, label: 'l', value: 32 },
                { id: 4, in_stock: 8, price: 0, label: 'xl', value: 28 },
                { id: 5, in_stock: 3, price: 0, label: '2xl', value: 32 },
                { id: 6, in_stock: 11, price: 0, label: '3xl', value: 35 },
            ]
        },

    },

    ///////////// 
    {
        id: 7,
        category: 3,
        basePrice: 35.74,
        samplePrice: 57.26,
        sellerCode: "q3a6844bcl",
        name: 'Phone',
        desc: 'Original android smart phone and all that stuff',
        totalOrders: [{}],
        ratingCount: [{}, {}, {},],
        totalLikes: [{}, {}, {}, {}, {}, {},],
        is_customizable: false,
        image: require("../assets/wholesale/products/phone.png"),
        moqs: {
            base: [
                { id: 1, price: 10.50, moq: { min: 100, max: 299 } },
                { id: 2, price: 9, moq: { min: 300, max: 499 } },
                { id: 3, price: 7.88, moq: { min: 500, max: 1000 } },
            ],
            sample: [
                { id: 1, price: 88.70, moq: { min: 1, max: 100000 } }
            ]
        },
        variations: {
            colors: [
                {
                    id: 1,
                    basePrice: 35.74,
                    sample_moq: 62.99,
                    is_default: true,
                    color: "Red",
                    amount: 20.55,
                    in_stock: true,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 0, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 0, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/phone.png"),
                },
            ],
            sizes: [
                { id: 1, in_stock: 12, price: 0, label: '2gb', value: 20 },
                { id: 2, in_stock: 7, price: 0, label: '4gb', value: 25 },
                { id: 3, in_stock: 2, price: 0, label: '16gb', value: 32 },
                { id: 4, in_stock: 8, price: 0, label: '32gb', value: 28 },
                { id: 5, in_stock: 3, price: 0, label: '120gb', value: 32 },
            ]
        },
    },
    {
        id: 8,
        category: 3,
        basePrice: 35.74,
        samplePrice: 57.26,
        sellerCode: "q3a6844bcl",
        name: 'Phone',
        desc: 'Original android smart phone and all that stuff',
        totalOrders: [{}],
        ratingCount: [{}, {}, {},],
        totalLikes: [{}, {}, {}, {}, {}, {},],
        is_customizable: false,
        image: require("../assets/wholesale/products/phone.png"),
        moqs: {
            base: [
                { id: 1, price: 10.50, moq: { min: 100, max: 299 } },
                { id: 2, price: 9, moq: { min: 300, max: 499 } },
                { id: 3, price: 7.88, moq: { min: 500, max: 1000 } },
            ],
            sample: [
                { id: 1, price: 88.70, moq: { min: 1, max: 100000 } }
            ]
        },
        variations: {
            colors: [
                {
                    id: 1,
                    basePrice: 35.74,
                    sample_moq: 62.99,
                    is_default: true,
                    color: "Red",
                    amount: 20.55,
                    in_stock: true,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 0, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 0, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/phone.png"),
                },
            ],
            sizes: [
                { id: 1, in_stock: 12, price: 0, label: '2gb', value: 20 },
                { id: 2, in_stock: 7, price: 0, label: '4gb', value: 25 },
                { id: 3, in_stock: 2, price: 0, label: '16gb', value: 32 },
                { id: 4, in_stock: 8, price: 0, label: '32gb', value: 28 },
                { id: 5, in_stock: 3, price: 0, label: '120gb', value: 32 },
            ]
        },
    },
    {
        id: 9,
        category: 3,
        basePrice: 35.74,
        samplePrice: 57.26,
        sellerCode: "q3a6844bcl",
        name: 'Phone',
        desc: 'Original android smart phone and all that stuff',
        totalOrders: [{}],
        ratingCount: [{}, {}, {},],
        totalLikes: [{}, {}, {}, {}, {}, {},],
        is_customizable: false,
        image: require("../assets/wholesale/products/phone.png"),
        moqs: {
            base: [
                { id: 1, price: 10.50, moq: { min: 100, max: 299 } },
                { id: 2, price: 9, moq: { min: 300, max: 499 } },
                { id: 3, price: 7.88, moq: { min: 500, max: 1000 } },
            ],
            sample: [
                { id: 1, price: 88.70, moq: { min: 1, max: 100000 } }
            ]
        },
        variations: {
            colors: [
                {
                    id: 1,
                    basePrice: 35.74,
                    sample_moq: 62.99,
                    is_default: true,
                    color: "Red",
                    amount: 20.55,
                    in_stock: true,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 0, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 0, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/phone.png"),
                },
            ],
            sizes: [
                { id: 1, in_stock: 12, price: 0, label: '2gb', value: 20 },
                { id: 2, in_stock: 7, price: 0, label: '4gb', value: 25 },
                { id: 3, in_stock: 2, price: 0, label: '16gb', value: 32 },
                { id: 4, in_stock: 8, price: 0, label: '32gb', value: 28 },
                { id: 5, in_stock: 3, price: 0, label: '120gb', value: 32 },
            ]
        },
    },
    {
        id: 10,
        category: 3,
        basePrice: 35.74,
        samplePrice: 57.26,
        sellerCode: "q3a6844bcl",
        name: 'Phone',
        desc: 'Original android smart phone and all that stuff',
        totalOrders: [{}],
        ratingCount: [{}, {}, {},],
        totalLikes: [{}, {}, {}, {}, {}, {},],
        is_customizable: false,
        image: require("../assets/wholesale/products/phone.png"),
        moqs: {
            base: [
                { id: 1, price: 10.50, moq: { min: 100, max: 299 } },
                { id: 2, price: 9, moq: { min: 300, max: 499 } },
                { id: 3, price: 7.88, moq: { min: 500, max: 1000 } },
            ],
            sample: [
                { id: 1, price: 88.70, moq: { min: 1, max: 100000 } }
            ]
        },
        variations: {
            colors: [
                {
                    id: 1,
                    basePrice: 35.74,
                    sample_moq: 62.99,
                    is_default: true,
                    color: "Red",
                    amount: 20.55,
                    in_stock: true,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 0, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 0, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/phone.png"),
                },
            ],
            sizes: [
                { id: 1, in_stock: 12, price: 0, label: '2gb', value: 20 },
                { id: 2, in_stock: 7, price: 0, label: '4gb', value: 25 },
                { id: 3, in_stock: 2, price: 0, label: '16gb', value: 32 },
                { id: 4, in_stock: 8, price: 0, label: '32gb', value: 28 },
                { id: 5, in_stock: 3, price: 0, label: '120gb', value: 32 },
            ]
        },
    },
    {
        id: 11,
        category: 3,
        basePrice: 35.74,
        samplePrice: 57.26,
        sellerCode: "q3a6844bcl",
        name: 'Phone',
        desc: 'Original android smart phone and all that stuff',
        totalOrders: [{}],
        ratingCount: [{}, {}, {},],
        totalLikes: [{}, {}, {}, {}, {}, {},],
        is_customizable: false,
        image: require("../assets/wholesale/products/phone.png"),
        moqs: {
            base: [
                { id: 1, price: 10.50, moq: { min: 100, max: 299 } },
                { id: 2, price: 9, moq: { min: 300, max: 499 } },
                { id: 3, price: 7.88, moq: { min: 500, max: 1000 } },
            ],
            sample: [
                { id: 1, price: 88.70, moq: { min: 1, max: 100000 } }
            ]
        },
        variations: {
            colors: [
                {
                    id: 1,
                    basePrice: 35.74,
                    sample_moq: 62.99,
                    is_default: true,
                    color: "Red",
                    amount: 20.55,
                    in_stock: true,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 0, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 0, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/phone.png"),
                },
            ],
            sizes: [
                { id: 1, in_stock: 12, price: 0, label: '2gb', value: 20 },
                { id: 2, in_stock: 7, price: 0, label: '4gb', value: 25 },
                { id: 3, in_stock: 2, price: 0, label: '16gb', value: 32 },
                { id: 4, in_stock: 8, price: 0, label: '32gb', value: 28 },
                { id: 5, in_stock: 3, price: 0, label: '120gb', value: 32 },
            ]
        },
    },
    {
        id: 12,
        category: 3,
        basePrice: 35.74,
        samplePrice: 57.26,
        sellerCode: "q3a6844bcl",
        name: 'Phone',
        desc: 'Original android smart phone and all that stuff',
        totalOrders: [{}],
        ratingCount: [{}, {}, {},],
        totalLikes: [{}, {}, {}, {}, {}, {},],
        is_customizable: false,
        image: require("../assets/wholesale/products/phone.png"),
        moqs: {
            base: [
                { id: 1, price: 10.50, moq: { min: 100, max: 299 } },
                { id: 2, price: 9, moq: { min: 300, max: 499 } },
                { id: 3, price: 7.88, moq: { min: 500, max: 1000 } },
            ],
            sample: [
                { id: 1, price: 88.70, moq: { min: 1, max: 100000 } }
            ]
        },
        variations: {
            colors: [
                {
                    id: 1,
                    basePrice: 35.74,
                    sample_moq: 62.99,
                    is_default: true,
                    color: "Red",
                    amount: 20.55,
                    in_stock: true,
                    sizes: [
                        { id: 1, in_stock: 12, price: 0, label: 's', value: 20 },
                        { id: 2, in_stock: 50, price: 0, label: 'l', value: 25 },
                        { id: 3, in_stock: 7, price: 0, label: 'm', value: 32 },
                    ],
                    v_image: require("../assets/wholesale/products/phone.png"),
                },
            ],
            sizes: [
                { id: 1, in_stock: 12, price: 0, label: '2gb', value: 20 },
                { id: 2, in_stock: 7, price: 0, label: '4gb', value: 25 },
                { id: 3, in_stock: 2, price: 0, label: '16gb', value: 32 },
                { id: 4, in_stock: 8, price: 0, label: '32gb', value: 28 },
                { id: 5, in_stock: 3, price: 0, label: '120gb', value: 32 },
            ]
        },
    },
]

export const VIDEOS = [

    {
        id: 1,
        sellerCode: "58du2yfw42",
        duration: 52,
        like_count: 500,
        uploader_name: "Jasman Kasidy",
        uploader_image: require("../assets/wholesale/customer_care.png"),
        video_cover: require("../assets/wholesale/backgrounds/lights.png"),
        video_file: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor Lorem ipsum dolor sit elit.",
    },
    {
        id: 2,
        sellerCode: "58du2yfw42",
        duration: 32,
        like_count: 820,
        uploader_name: "Jasman Kasidy",
        uploader_image: require("../assets/wholesale/customer_care.png"),
        video_cover: require("../assets/wholesale/backgrounds/lights.png"),
        video_file: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor Lorem ipsum dolor sit elit.",
    },
    {
        id: 3,
        sellerCode: "58du2yfw42",
        duration: 52,
        like_count: 500,
        uploader_name: "Jasman Kasidy",
        uploader_image: require("../assets/wholesale/customer_care.png"),
        video_cover: require("../assets/wholesale/backgrounds/lights.png"),
        video_file: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor Lorem ipsum dolor sit elit.",
    },
    {
        id: 4,
        sellerCode: "58du2yfw42",
        duration: 32,
        like_count: 820,
        uploader_name: "Jasman Kasidy",
        uploader_image: require("../assets/wholesale/customer_care.png"),
        video_cover: require("../assets/wholesale/backgrounds/lights.png"),
        video_file: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor Lorem ipsum dolor sit elit.",
    },
    {
        id: 5,
        sellerCode: "58du2yfw42",
        duration: 52,
        like_count: 500,
        uploader_name: "Jasman Kasidy",
        uploader_image: require("../assets/wholesale/customer_care.png"),
        video_cover: require("../assets/wholesale/backgrounds/lights.png"),
        video_file: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor Lorem ipsum dolor sit elit.",
    },
    {
        id: 6,
        sellerCode: "58du2yfw42",
        duration: 32,
        like_count: 820,
        uploader_name: "Jasman Kasidy",
        uploader_image: require("../assets/wholesale/customer_care.png"),
        video_cover: require("../assets/wholesale/backgrounds/lights.png"),
        video_file: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor Lorem ipsum dolor sit elit.",
    },
    {
        id: 7,
        duration: 52,
        like_count: 500,
        uploader_name: "Jasman Kasidy",
        uploader_image: require("../assets/wholesale/customer_care.png"),
        video_cover: require("../assets/wholesale/backgrounds/lights.png"),
        video_file: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor Lorem ipsum dolor sit elit.",
    },
    {
        id: 8,
        duration: 32,
        like_count: 820,
        uploader_name: "Jasman Kasidy",
        uploader_image: require("../assets/wholesale/customer_care.png"),
        video_cover: require("../assets/wholesale/backgrounds/lights.png"),
        video_file: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor Lorem ipsum dolor sit elit.",
    },
]

export const WHOLESALE_MENU = [
    {
        id: 1,
        menuTitle: "All Categories",
        menuIcon: require("../assets/wholesale/icons/menu.png"),
        menuColor: '#F67F00'
    },
    {
        id: 2,
        menuTitle: "Get Quotation",
        menuIcon: require("../assets/wholesale/icons/bulleye.png"),
        menuColor: '#2a5e98'
    },
    {
        id: 3,
        menuTitle: "International Factories & Wholesales",
        menuIcon: require("../assets/wholesale/icons/factory.png"),
        menuColor: '#00a5b9'
    },
    {
        id: 4,
        menuTitle: "Customize",
        menuIcon: require("../assets/wholesale/icons/customize.png"),
        menuColor: '#2a5e98'
    },
    {
        id: 5,
        menuTitle: "Local Factories & Wholesales",
        menuIcon: require("../assets/wholesale/icons/factory.png"),
        menuColor: '#d68c45'
    },
    {
        id: 6,
        menuTitle: "Logistic Services",
        menuIcon: require("../assets/wholesale/icons/logistic.png"),
        menuColor: '#1d5964'
    },
]

export const TOP_FACTORY = [
    {
        id: 1,
        title: "Best Seller",
        category: "Bikes & Motorcycles",
        menuIcon: require("../assets/wholesale/icons/scooter.png"),
    },
    {
        id: 2,
        title: "Most Popular",
        category: "Men's Pant & Trouser",
        menuIcon: require("../assets/wholesale/icons/suit.png"),
    },
    {
        id: 3,
        title: "Most Popular",
        category: "Men's Pants & Trouser",
        menuIcon: require("../assets/wholesale/icons/scooter1.png"),
    }
]

export const TOP_WHOLESALE = [
    {
        id: 1,
        title: "Best Seller",
        category: "Bikes & Motorcycles",
        menuIcon: require("../assets/wholesale/icons/scooter.png"),
    },
    {
        id: 2,
        title: "Most Popular",
        category: "Men's Pant & Trouser",
        menuIcon: require("../assets/wholesale/icons/suit.png"),
    },
    {
        id: 3,
        title: "Most Popular",
        category: "Men's Pants & Trouser",
        menuIcon: require("../assets/wholesale/icons/scooter1.png"),
    }
]

export const CATEGORIES = [
    {
        id: 1,
        title: 'All Categories',
        categoryIcon: require("../assets/wholesale/icons/all.png")
    },
    {
        id: 2,
        title: 'Mobile Phones',
        categoryIcon: require("../assets/wholesale/icons/phone.png")
    },
    {
        id: 3,
        title: 'Clothing',
        categoryIcon: require("../assets/wholesale/icons/clothe.png")
    },
    {
        id: 4,
        title: 'Grocery',
        categoryIcon: require("../assets/wholesale/icons/grocery.png")
    },
    {
        id: 5,
        title: 'Sports & Entertainment',
        categoryIcon: require("../assets/wholesale/icons/grocery.png")
    },
    {
        id: 6,
        title: 'Apparel',
        categoryIcon: require("../assets/wholesale/icons/grocery.png")
    },
    {
        id: 7,
        title: 'Men Underwear & Briefs',
        categoryIcon: require("../assets/wholesale/icons/grocery.png")
    },
    {
        id: 8,
        title: 'Men T-shirt Short-sleeve',
        categoryIcon: require("../assets/wholesale/icons/grocery.png")
    },
    {
        id: 9,
        title: 'Men Hoodies/Long-sleeve Sweartshirt',
        categoryIcon: require("../assets/wholesale/icons/grocery.png")
    },
    {
        id: 10,
        title: 'Men Jacket',
        categoryIcon: require("../assets/wholesale/icons/grocery.png")
    },
    {
        id: 11,
        title: 'Men Long-sleeve T-shirt/Sweatshirt',
        categoryIcon: require("../assets/wholesale/icons/grocery.png")
    },
    {
        id: 12,
        title: '70% Discount/Dropshipping',
        categoryIcon: require("../assets/wholesale/icons/grocery.png")
    },
    {
        id: 13,
        title: 'Men Cut/Tank Tops',
        categoryIcon: require("../assets/wholesale/icons/grocery.png")
    },
    {
        id: 14,
        title: 'Women Clothes',
        categoryIcon: require("../assets/wholesale/icons/grocery.png")
    },

]

export const SHORT_CATEGORIES = [
    {
        id: 1,
        title: 'R&D Capabilities',
    },
    {
        id: 2,
        title: 'Supplies fortune 500 companies',
    },
    {
        id: 3,
        title: 'Full customization',
    },
    {
        id: 4,
        title: 'Agile supply chain',
    },
    {
        id: 5,
        title: 'OEM for well-known brands',
    },
]

export const CHAT_TIPS = [
    {
        id: 1,
        title: 'Start order',
    },
    {
        id: 2,
        title: 'File a compliant',
    },
    {
        id: 3,
        title: 'Mini-site',
    },
    {
        id: 4,
        title: 'Logistics enquiry',
    },
]



export const PRODUCT = {
    id: 1,
    productPhoneImage: require("../assets/wholesale/products/phone.png"),
    productClotheImage: require("../assets/wholesale/products/clothe.png"),
    variations: [
        {
            id: 1,
            name: 'Price',
            options: [
                { price: 5.95, moq: 16 },
                { price: 11.63, moq: 100 },
                { price: 0.7, moq: 200 },
                { price: 30.12, moq: 300 },
                { price: 9.74, moq: 500 },
                { price: 3.46, moq: 1000 },
            ],
        },
        // {
        //     id: 2,
        //     name: 'RAM',
        //     options: ['2GB', '16GB', '32GB'],
        // },
        {
            id: 3,
            name: 'Color',
            options: [
                {
                    itemColor: 'red',
                    itemImage: require("../assets/wholesale/products/clothe_red.png")
                },
                {
                    itemColor: 'blue',
                    itemImage: require("../assets/wholesale/products/clothe_blue.png")
                },
                {
                    itemColor: 'green',
                    itemImage: require("../assets/wholesale/products/clothe_green.png")
                },
                {
                    itemColor: 'grey',
                    itemImage: require("../assets/wholesale/products/clothe_grey.png")
                },
                {
                    itemColor: 'indigo',
                    itemImage: require("../assets/wholesale/products/clothe_indigo.png")
                },

            ],
        },
        {
            id: 4,
            name: 'Size',
            options: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL', '7XL', '8XL',],
        },
    ]
}

export const SHIPPINGS = [
    {
        id: 1,
        name: 'Ocean',
        shippingIcon: "ship",
        options: [
            {
                id: 2,
                name: "Express+Ocean Us (Standard)",
                estDelivery: "4/10-5/1",
                estCost: "$102.25",
                deliveryResponse: "Estimated delivery",
                notice: "Offline consolidated logistics service offers more economic freight cost",
                isGuaranteed: false,
                offeredBy: ''
            },
            {
                id: 3,
                name: "Express+Ocean Us (Premium)",
                estDelivery: "2/10-5/1",
                estCost: "$598.85",
                deliveryResponse: "Guaranteed delivery",
                notice: "",
                isGuaranteed: true,
                offeredBy: ''
            }
        ]
    },
    {
        id: 4,
        name: 'Express',
        shippingIcon: "shipping-fast",
        options: [
            {
                id: 5,
                name: "Freight Via Jl (Economic)",
                estDelivery: "4/10-5/1",
                estCost: "$102.25",
                deliveryResponse: "Estimated delivery",
                notice: "",
                isGuaranteed: true,
                offeredBy: ''
            },
            {
                id: 6,
                name: "Express EU & Us (Standard)",
                estDelivery: "By Apr 8",
                estCost: "$255.71",
                deliveryResponse: "Guaranteed delivery",
                notice: "",
                isGuaranteed: true,
                offeredBy: 'Bloomzon.com'
            },
            {
                id: 7,
                name: "Express EU & Us (Standard)",
                estDelivery: "By Apr 11",
                estCost: "$366.71",
                deliveryResponse: "Guaranteed delivery",
                notice: "",
                isGuaranteed: true,
                offeredBy: 'Bloomzon.com'
            }
        ]
    }
]

export const RELATED_PRODUCTS = [
    {
        id: 1,
        price: 305.99,
        moq: 6,
        image: require("../assets/wholesale/products/phone.png")
    },
    {
        id: 2,
        price: 401.00,
        moq: 2,
        image: require("../assets/wholesale/products/phone.png")
    },
    {
        id: 3,
        price: 222.99,
        moq: 2,
        image: require("../assets/wholesale/products/phone.png")
    },
    {
        id: 4,
        price: 77.35,
        moq: 10,
        image: require("../assets/wholesale/products/phone.png")
    },
    {
        id: 5,
        price: 88.21,
        moq: 100,
        image: require("../assets/wholesale/products/phone.png")
    },
    {
        id: 6,
        price: 105.13,
        moq: 50,
        image: require("../assets/wholesale/products/phone.png")
    },
    {
        id: 7,
        price: 122.78,
        moq: 111,
        image: require("../assets/wholesale/products/phone.png")
    },
    {
        id: 8,
        price: 46.28,
        moq: 500,
        image: require("../assets/wholesale/products/phone.png")
    },
    {
        id: 9,
        price: 90.09,
        moq: 100,
        image: require("../assets/wholesale/products/phone.png")
    },
    {
        id: 10,
        price: 300.00,
        moq: 10,
        image: require("../assets/wholesale/products/phone.png")
    },
    {
        id: 11,
        price: 122.78,
        moq: 111,
        image: require("../assets/wholesale/products/phone.png")
    },
    {
        id: 12,
        price: 122.78,
        moq: 111,
        image: require("../assets/wholesale/products/phone.png")
    },
]

export const TOP_CAROUSEL = [
    {
        id: 1,
        image: require("../assets/wholesale/image1.png")
    },
    {
        id: 2,
        image: require("../assets/wholesale/image2.png")
    },
    {
        id: 3,
        image: require("../assets/wholesale/image3.png")
    },
    {
        id: 4,
        image: require("../assets/wholesale/image4.png")
    },
]

export const MAIN_CATEGORY_226 = [
    {
        id: 1,
        name: 'Shirts',
        desc: 'Wholesale sweet jogar suits, two pieces 100% original, Lorem ipsum dolor sit amet, consectetur',
        moq: '50',
        priceFrom: '$21.45',
        priceTo: '$27.90',
        image: require("../assets/wholesale/backgrounds/worker.jpg")
    },
    {
        id: 2,
        name: 'T-Shirts',
        desc: 'Wholesale sweet jogar suits, two pieces 100% original, Lorem ipsum dolor sit amet, consectetur',
        moq: '50',
        priceFrom: '$21.45',
        priceTo: '$27.90',
        image: require("../assets/wholesale/backgrounds/worker.jpg")
    },
    {
        id: 3,
        name: 'Jackets',
        desc: 'Wholesale sweet jogar suits, two pieces 100% original, Lorem ipsum dolor sit amet, consectetur',
        moq: '50',
        priceFrom: '$21.45',
        priceTo: '$27.90',
        image: require("../assets/wholesale/backgrounds/worker.jpg")
    },
    {
        id: 4,
        name: 'Shirts',
        desc: 'Wholesale sweet jogar suits, two pieces 100% original, Lorem ipsum dolor sit amet, consectetur',
        moq: '50',
        priceFrom: '$21.45',
        priceTo: '$27.90',
        image: require("../assets/wholesale/backgrounds/worker.jpg")
    },
    {
        id: 5,
        name: 'T-Shirts',
        desc: 'Wholesale sweet jogar suits, two pieces 100% original, Lorem ipsum dolor sit amet, consectetur',
        moq: '50',
        priceFrom: '$21.45',
        priceTo: '$27.90',
        image: require("../assets/wholesale/backgrounds/worker.jpg")
    },
    {
        id: 6,
        name: 'Jackets',
        desc: 'Wholesale sweet jogar suits, two pieces 100% original, Lorem ipsum dolor sit amet, consectetur',
        moq: '50',
        priceFrom: '$21.45',
        priceTo: '$27.90',
        image: require("../assets/wholesale/backgrounds/worker.jpg")
    },

]

export const WHY_CHOOSE_US = [
    {
        id: 1,
        title: 'Years in industry (4)',
        activityDuration: '15 yrs',
        activityDesc: "High-end manufacturer",
        image: require("../assets/wholesale/backgrounds/worker.jpg")
    },
    {
        id: 2,
        title: 'Repeated buyer choice',
        activityDuration: '7 days',
        activityDesc: "Making sample",
        image: require("../assets/wholesale/backgrounds/worker.jpg")
    },
    {
        id: 3,
        title: 'Design-based customization',
        activityDuration: '15 days',
        activityDesc: "of bulk order",
        image: require("../assets/wholesale/backgrounds/worker.jpg")
    },
    {
        id: 4,
        title: 'Full customization',
        activityDuration: '2000m',
        activityDesc: "Premium factories",
        image: require("../assets/wholesale/backgrounds/worker.jpg")
    },
    {
        id: 5,
        title: 'Sample-based customization',
        activityDuration: '10',
        activityDesc: "Professional designers",
        image: require("../assets/wholesale/backgrounds/worker.jpg")
    },
    {
        id: 6,
        title: 'Consolidation service',
        activityDuration: '100+',
        activityDesc: "Workers",
        image: require("../assets/wholesale/backgrounds/worker.jpg")
    },
    {
        id: 7,
        title: 'Competitive OEM Factory',
        image: require("../assets/wholesale/backgrounds/worker.jpg")
    },
    {
        id: 8,
        title: 'On-site material inspection',
        image: require("../assets/wholesale/backgrounds/worker.jpg")
    },
    {
        id: 9,
        title: 'Supplier assessment procedure',
        image: require("../assets/wholesale/backgrounds/worker.jpg")
    },
    {
        id: 10,
        title: 'Annual sales $13,324,232',
        image: require("../assets/wholesale/backgrounds/worker.jpg")
    },
]

export const FEEDBACKS = [
    {
        id: 1,
        name: 'Nelson Bruce',
        review: 'Excellent service, kudos Bloomzon',
        rateCount: 3,
        reviewDate: '12-04-2023',
        image: require("../assets/wholesale/backgrounds/worker.jpg"),
        countryFlag: require("../assets/wholesale/flags/ng.png"),
        gallery: [
            {
                id: 1,
                image: require("../assets/wholesale/backgrounds/worker.jpg"),
            },
            {
                id: 2,
                image: require("../assets/wholesale/backgrounds/worker.jpg"),
            },
            {
                id: 3,
                image: require("../assets/wholesale/backgrounds/worker.jpg"),
            },
        ]
    },
    {
        id: 2,
        name: 'Emmanuel Cynthia',
        review: 'Wow, you guys are so cool',
        rateCount: 5,
        reviewDate: '12-04-2023',
        image: require("../assets/wholesale/backgrounds/worker.jpg"),
        countryFlag: require("../assets/wholesale/flags/us.png"),
        gallery: [
            {
                id: 1,
                image: require("../assets/wholesale/backgrounds/worker.jpg"),
            },
            {
                id: 2,
                image: require("../assets/wholesale/backgrounds/worker.jpg"),
            },
            {
                id: 3,
                image: require("../assets/wholesale/backgrounds/worker.jpg"),
            },
        ]
    },
    {
        id: 3,
        name: 'Justina',
        review: 'Amazing customer care service',
        rateCount: 4,
        reviewDate: '12-04-2023',
        image: require("../assets/wholesale/backgrounds/worker.jpg"),
        countryFlag: require("../assets/wholesale/flags/gb.png"),
        gallery: [
            {
                id: 1,
                image: require("../assets/wholesale/backgrounds/worker.jpg"),
            },
            {
                id: 2,
                image: require("../assets/wholesale/backgrounds/worker.jpg"),
            },
            {
                id: 3,
                image: require("../assets/wholesale/backgrounds/worker.jpg"),
            },
        ]
    },
]

export const FACTORY_LIVE_23_MENU = [
    {
        id: 1,
        name: "All",
    },
    {
        id: 2,
        name: "Sports & Entertainment",
    },
    {
        id: 3,
        name: "Fashion Shows",
    },
    {
        id: 4,
        name: "Consumer",
    },
]

export const FACTORY_LIVE_23_CONTENTS = [

    {
        id: 2,
        name: "2023 Spring Summer Fashion",
        verificationDate: 3,
        rating: "3.5",
        isOnline: false,
        image: require("../assets/wholesale/products/clothe_red.png"),
        subs: [
            {
                id: 2,
                itemColor: 'blue',
                itemsInStock: 45,
                itemPrice: 500,
                image: require("../assets/wholesale/products/clothe_blue.png")
            },
            {
                id: 3,
                itemColor: 'green',
                itemsInStock: 666,
                itemPrice: 420,
                image: require("../assets/wholesale/products/clothe_green.png")
            },
            {
                id: 4,
                itemColor: 'grey',
                itemsInStock: 115,
                itemPrice: 101.54,
                image: require("../assets/wholesale/products/clothe_grey.png")
            },
        ]
    },
    {
        id: 3,
        name: "2023 Spring Summer Fashion",
        verificationDate: 4,
        rating: "4.0",
        isOnline: true,
        image: require("../assets/wholesale/backgrounds/worker.jpg"),
        subs: [
            {
                id: 1,
                itemColor: 'blue',
                itemsInStock: 666,
                itemPrice: 420,
                image: require("../assets/wholesale/backgrounds/worker.jpg")
            },
            {
                id: 2,
                itemColor: 'green',
                itemsInStock: 666,
                itemPrice: 420,
                image: require("../assets/wholesale/backgrounds/worker.jpg")
            },
            {
                id: 3,
                itemColor: 'grey',
                itemsInStock: 666,
                itemPrice: 420,
                image: require("../assets/wholesale/backgrounds/worker.jpg")
            },
        ]
    },
    {
        id: 4,
        name: "2023 Spring Summer Fashion",
        verificationDate: 2,
        rating: "5.0",
        isOnline: true,
        image: require("../assets/wholesale/backgrounds/worker.jpg"),
        subs: [
            {
                id: 1,
                itemColor: 'blue',
                itemsInStock: 666,
                itemPrice: 420,
                image: require("../assets/wholesale/backgrounds/worker.jpg")
            },
            {
                id: 2,
                itemColor: 'green',
                itemsInStock: 666,
                itemPrice: 420,
                image: require("../assets/wholesale/backgrounds/worker.jpg")
            },
            {
                id: 3,
                itemColor: 'grey',
                itemsInStock: 666,
                itemPrice: 420,
                image: require("../assets/wholesale/backgrounds/worker.jpg")
            },
        ]
    },
    {
        id: 5,
        name: "2023 Spring Summer Fashion",
        verificationDate: 5,
        rating: "4.0",
        isOnline: true,
        image: require("../assets/wholesale/backgrounds/worker.jpg"),
        subs: [
            {
                id: 1,
                itemColor: 'blue',
                itemsInStock: 666,
                itemPrice: 420,
                image: require("../assets/wholesale/backgrounds/worker.jpg")
            },
            {
                id: 2,
                itemColor: 'green',
                itemsInStock: 666,
                itemPrice: 420,
                image: require("../assets/wholesale/backgrounds/worker.jpg")
            },
            {
                id: 3,
                itemColor: 'grey',
                itemsInStock: 666,
                itemPrice: 420,
                image: require("../assets/wholesale/backgrounds/worker.jpg")
            },
        ]
    },
    {
        id: 6,
        name: "2023 Spring Summer Fashion",
        verificationDate: 1,
        rating: "2.5",
        isOnline: true,
        image: require("../assets/wholesale/backgrounds/worker.jpg"),
        subs: [
            {
                id: 1,
                itemColor: 'blue',
                itemsInStock: 666,
                itemPrice: 420,
                image: require("../assets/wholesale/backgrounds/worker.jpg")
            },
            {
                id: 2,
                itemColor: 'green',
                itemsInStock: 666,
                itemPrice: 420,
                image: require("../assets/wholesale/backgrounds/worker.jpg")
            },
            {
                id: 3,
                itemColor: 'grey',
                itemsInStock: 666,
                itemPrice: 420,
                image: require("../assets/wholesale/backgrounds/worker.jpg")
            },
        ]
    },
    {
        id: 7,
        name: "2023 Spring Summer Fashion",
        verificationDate: 2,
        rating: "3.0",
        isOnline: true,
        image: require("../assets/wholesale/backgrounds/worker.jpg"),
        subs: [
            {
                id: 1,
                itemColor: 'blue',
                itemsInStock: 666,
                itemPrice: 420,
                image: require("../assets/wholesale/backgrounds/worker.jpg")
            },
            {
                id: 2,
                itemColor: 'green',
                itemsInStock: 666,
                itemPrice: 420,
                image: require("../assets/wholesale/backgrounds/worker.jpg")
            },
            {
                id: 3,
                itemColor: 'grey',
                itemsInStock: 666,
                itemPrice: 420,
                image: require("../assets/wholesale/backgrounds/worker.jpg")
            },
        ]
    }

]

export const VIOLATION_DATA = [
    {
        id: 1,
        reason: "Pornographic",
    },
    {
        id: 2,
        reason: "Illegal politics content",
    },
    {
        id: 3,
        reason: "Sale illegal commodities",
    },
    {
        id: 4,
        reason: "Unauthorized content",
    },
    {
        id: 5,
        reason: "Guide offline transfer transaction",
    },
    {
        id: 6,
        reason: "Discomfort caused by content",
    },
    {
        id: 7,
        reason: "Others",
    },
]

export const SHIPPING_ADDRESS = [
    {
        id: 1,
        title: "IOU plc (Bloomzon.com)",
        contact: "08033652485",
        address_code: "7016667082",
        address: "Joseph street, off osho street, Opabi lagos state. No7, other lagos state Nigeria",
        is_residential: false,
        is_default: false
    },
    {
        id: 2,
        title: "Onome sonia akpan",
        contact: "09178543220",
        address_code: "39110939342",
        address: "Joseph street, off osho street, Opabi lagos state. No7, other lagos state Nigeria",
        is_residential: false,
        is_default: false
    },
    {
        id: 3,
        title: "Oreti Oluyemi uanzekin",
        contact: "07033877112",
        address_code: "4208320840",
        address: "Joseph street, off osho street, Opabi lagos state. No7, other lagos state Nigeria",
        is_residential: false,
        is_default: false
    },
    {
        id: 4,
        title: "Upper Hills Avenue",
        contact: "08128351145",
        address_code: "320328017",
        address: "Joseph street, off osho street, Opabi lagos state. No7, other lagos state Nigeria",
        is_residential: true,
        is_default: false
    },
    {
        id: 5,
        title: "IOU PLC",
        contact: "09060421442",
        address_code: "80647283",
        address: "Joseph street, off osho street, Opabi lagos state. No7, other lagos state Nigeria",
        is_residential: false,
        is_default: true
    },
]

export const CART = [
    {
        id: 1,
        image: require("../assets/wholesale/products/clothe.png"),
        discount: 50,
        min_order: 6,
        variation: [
            {
                id: 1,
                color: 'Red',
                quantity: 1,
                price: 13500,
                old_price: 19500,
                total_inStock: 2588,
            },
            {
                id: 2,
                color: 'Blue',
                quantity: 1,
                price: 17000,
                old_price: 22300,
                total_inStock: 1623,
            }
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    }
]

export const PAYMENTS = [
    {
        id: 1,
        name: "visa",
        channel: require("../assets/wholesale/payments/visa.png")
    },
    {
        id: 2,
        name: "master card",
        channel: require("../assets/wholesale/payments/master.png")
    },
    {
        id: 3,
        name: "paypal",
        channel: require("../assets/wholesale/payments/paypal.png")
    },
    {
        id: 4,
        name: "amex",
        channel: require("../assets/wholesale/payments/amex.png")
    },
    {
        id: 5,
        name: "jcb",
        channel: require("../assets/wholesale/payments/jcb.png")
    },
    {
        id: 6,
        name: "union pay",
        channel: require("../assets/wholesale/payments/union.png")
    },
    {
        id: 7,
        name: "apple pay",
        channel: require("../assets/wholesale/payments/apple.png")
    },
    {
        id: 8,
        name: "diners",
        channel: require("../assets/wholesale/payments/diners.png")
    },
    {
        id: 9,
        name: "discover",
        channel: require("../assets/wholesale/payments/discover.png")
    },
    {
        id: 10,
        name: "google pay",
        channel: require("../assets/wholesale/payments/google.png")
    },
]

export const SHIPPING_SERVICES = [
    {
        id: 1,
        name: 'Ocean + Delivery US',
        level: "Economy",
        duration_from: "4/19",
        duration_to: "5/11",
        price: 16.17
    },
    {
        id: 2,
        name: 'HKDHL',
        level: "Premium",
        duration_from: "3/15",
        duration_to: "3/12",
        price: 26.98
    },
    {
        id: 3,
        name: 'Express via JYC',
        level: "Standard",
        duration_from: "3/15",
        duration_to: "3/21",
        price: 25.20
    },
    {
        id: 4,
        name: 'Ocean + Delivery US',
        level: "Economy",
        duration_from: "4/19",
        duration_to: "5/11",
        price: 16.17
    },
    {
        id: 5,
        name: 'HKDHL',
        level: "Premium",
        duration_from: "3/15",
        duration_to: "3/12",
        price: 26.98
    },
    {
        id: 6,
        name: 'Express via JYC',
        level: "Standard",
        duration_from: "3/15",
        duration_to: "3/21",
        price: 25.20
    },
    {
        id: 7,
        name: 'Ocean + Delivery US',
        level: "Economy",
        duration_from: "4/19",
        duration_to: "5/11",
        price: 16.17
    },
    {
        id: 8,
        name: 'HKDHL',
        level: "Premium",
        duration_from: "3/15",
        duration_to: "3/12",
        price: 26.98
    },
    {
        id: 9,
        name: 'Express via JYC',
        level: "Standard",
        duration_from: "3/15",
        duration_to: "3/21",
        price: 25.20
    },

]

export const COUNTRIES = [
    {
        id: 1,
        flag: require("../assets/wholesale/flags/al.png"),
        name: "Albania",
    },
    {
        id: 2,
        flag: require("../assets/wholesale/flags/dz.png"),
        name: "Algeria",
    },
    {
        id: 3,
        flag: require("../assets/wholesale/flags/ao.png"),
        name: "Angola",
    },
    {
        id: 4,
        flag: require("../assets/wholesale/flags/bh.png"),
        name: "Bahrain",
    },
    {
        id: 5,
        flag: require("../assets/wholesale/flags/bd.png"),
        name: "Bangladesh",
    },
    {
        id: 6,
        flag: require("../assets/wholesale/flags/be.png"),
        name: "Belgium",
    },
    {
        id: 7,
        flag: require("../assets/wholesale/flags/ng.png"),
        name: "Nigeria",
    },
    {
        id: 8,
        flag: require("../assets/wholesale/flags/gh.png"),
        name: "Ghana",
    },
    {
        id: 9,
        flag: require("../assets/wholesale/flags/ke.png"),
        name: "Kenya",
    },
    {
        id: 10,
        flag: require("../assets/wholesale/flags/ar.png"),
        name: "Argentina",
    },
    {
        id: 11,
        flag: require("../assets/wholesale/flags/br.png"),
        name: "Brazil",
    },
    {
        id: 12,
        flag: require("../assets/wholesale/flags/us.png"),
        name: "United States",
    },
    {
        id: 14,
        flag: require("../assets/wholesale/flags/gb.png"),
        name: "United Kingdom",
    },
    {
        id: 15,
        flag: require("../assets/wholesale/flags/ae.png"),
        name: "Dubai",
    },
]

export const ALL_CATEGORY = [

    {
        id: 1,
        menu: [
            {
                id: 1,
                title: 'Men\'s Shoes ',
                categoryIcon: require("../assets/wholesale/icons/all.png")
            },
            {
                id: 2,
                title: 'Mobile Phones',
                categoryIcon: require("../assets/wholesale/icons/phone.png")
            },
            {
                id: 3,
                title: 'Clothing',
                categoryIcon: require("../assets/wholesale/icons/clothe.png")
            },
            {
                id: 4,
                title: 'Grocery',
                categoryIcon: require("../assets/wholesale/icons/grocery.png")
            },
            {
                id: 5,
                title: 'Sports & Entertainment',
                categoryIcon: require("../assets/wholesale/icons/grocery.png")
            },
            {
                id: 6,
                title: 'Electrical Services',
                categoryIcon: require("../assets/wholesale/icons/grocery.png")
            },
        ]
    },
    {
        id: 2,
        menu: [
            {
                id: 1,
                title: 'Men\'s Shoes ',
                categoryIcon: require("../assets/wholesale/icons/all.png")
            },
            {
                id: 2,
                title: 'Mobile Phones',
                categoryIcon: require("../assets/wholesale/icons/phone.png")
            },
            {
                id: 3,
                title: 'Clothing',
                categoryIcon: require("../assets/wholesale/icons/clothe.png")
            },
            {
                id: 4,
                title: 'Grocery',
                categoryIcon: require("../assets/wholesale/icons/grocery.png")
            },
            {
                id: 5,
                title: 'Sports & Entertainment',
                categoryIcon: require("../assets/wholesale/icons/grocery.png")
            },
            {
                id: 6,
                title: 'Electrical Services',
                categoryIcon: require("../assets/wholesale/icons/grocery.png")
            },
        ]
    },
    {
        id: 3,
        menu: [
            {
                id: 1,
                title: 'Men\'s Shoes ',
                categoryIcon: require("../assets/wholesale/icons/all.png")
            },
            {
                id: 2,
                title: 'Mobile Phones',
                categoryIcon: require("../assets/wholesale/icons/phone.png")
            },
            {
                id: 3,
                title: 'Clothing',
                categoryIcon: require("../assets/wholesale/icons/clothe.png")
            },
            {
                id: 4,
                title: 'Grocery',
                categoryIcon: require("../assets/wholesale/icons/grocery.png")
            },
            {
                id: 5,
                title: 'Sports & Entertainment',
                categoryIcon: require("../assets/wholesale/icons/grocery.png")
            },
            {
                id: 6,
                title: 'Electrical Services',
                categoryIcon: require("../assets/wholesale/icons/grocery.png")
            },
        ]
    },
    {
        id: 4,
        menu: [
            {
                id: 1,
                title: 'Men\'s Shoes ',
                categoryIcon: require("../assets/wholesale/icons/all.png")
            },
            {
                id: 2,
                title: 'Mobile Phones',
                categoryIcon: require("../assets/wholesale/icons/phone.png")
            },
            {
                id: 3,
                title: 'Clothing',
                categoryIcon: require("../assets/wholesale/icons/clothe.png")
            },
            {
                id: 4,
                title: 'Grocery',
                categoryIcon: require("../assets/wholesale/icons/grocery.png")
            },
            {
                id: 5,
                title: 'Sports & Entertainment',
                categoryIcon: require("../assets/wholesale/icons/grocery.png")
            },
            {
                id: 6,
                title: 'Electrical Services',
                categoryIcon: require("../assets/wholesale/icons/grocery.png")
            },
        ]
    }

]

export const COMPANY_CARD = {
    name: "Shenzhen Aisiyi Technology Co., Ltd",
    logo: require("../assets/wholesale/logo/logo.png"),
    verified_year: 1,
    response_time: "<0.64h",
    response_rate: "under 5 min: 59.69%",
    country: {
        name: "China",
        iso: "cn",
        flag: require("../assets/wholesale/flags/cn.png")
    }
}

