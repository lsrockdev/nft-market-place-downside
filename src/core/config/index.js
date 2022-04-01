export const baseURL = import.meta.env.VITE_APP_SERVER_URL;
export const mainChain = import.meta.env.VITE_MAIN_CHAIN;
export const netExplorerURL = import.meta.env.VITE_NET_EXPLORER_URL;
export const cryptocompareApiKey = import.meta.env.VITE_CRYPTOCOMPARE_API_KEY;
export const marketAddress = import.meta.env.VITE_MARKET_CONTRACT_ADDRESS;

export const publicPages = ['/', '/login', '/register', '/home'];

export const walletList = [
    {
        id: 'metamask',
        name: 'MetaMask',
        imgUrl: '/images/wallet_logo/metamask.png',
        s_imgUrl: '/images/wallet_logo/small/metamask.png'
    },
    {
        id: 'connect-wallet',
        name: 'WalletConnect',
        imgUrl: '/images/wallet_logo/connect-wallet.png',
        s_imgUrl: '/images/wallet_logo/small/connect-wallet.png'
    },
    {
        id: 'rainbow',
        name: 'Rainbow',
        imgUrl: '/images/wallet_logo/rainbow.png',
        s_imgUrl: '/images/wallet_logo/small/rainbow.png'
    },
    {
        id: 'trust',
        name: 'Trust',
        imgUrl: '/images/wallet_logo/trust.png',
        s_imgUrl: '/images/wallet_logo/small/trust.png'
    },
    {
        id: 'argent',
        name: 'Argent',
        imgUrl: '/images/wallet_logo/argent.png',
        s_imgUrl: '/images/wallet_logo/small/argent.png'
    },
    {
        id: 'gnosis',
        name: 'Gnosis Safe Multisig',
        imgUrl: '/images/wallet_logo/gnosis.png',
        s_imgUrl: '/images/wallet_logo/small/gnosis.png'
    },
];

export const defaultUser = {
    bio: "",
    email: "",
    instagram: "",
    name: "Your name",
    profile_banner: "/images/creators/profile-banner-1920.png",
    profile_img: "/images/creators/profile-big.png",
    twitter: "",
    website: ""
}

export const saleType = {
    FIX_SALE: 'FIX-SALE',
    AUCTION: 'AUCTION'
}

export const networks = [
    {
        name: "Binance",
        icon: "/images/currencies/curr-3.png"
    }
]

export const currencies = [
    {
        name: "BNB",
        icon: "/images/currencies/curr-3.png"
    }
]

export const themeConfig = {
    xl3: 1920,
    xl2: 1536,
    xl: 1280,
    lg: 1024,
    md: 768,
    sm: 640
}

export const TokenType = {
    BNB: 'BNB',
    ETH: 'ETH',
    BTC: 'BTC',
    SOL: 'SOL'
}

export const syndications = [
    {
        img: '/images/nfts/img1.png',
        type: 'AUCTION',
        lockedValue: 1548325.56
    },
    {
        img: '/images/nfts/img2.png',
        type: 'FIX_SALE',
        fixPrice: 50000,
        lockedValue: 1548325.56
    },
    {
        img: '/images/nfts/img3.png',
        type: 'FIX_SALE',
        fixPrice: 50000,
        lockedValue: 1548325.56
    },
    {
        img: '/images/nfts/img4.png',
        type: 'AUCTION',
        lockedValue: 1548325.56
    },
    {
        img: '/images/nfts/img5.png',
        type: 'FIX_SALE',
        fixPrice: 50000,
        lockedValue: 1548325.56
    },
    {
        img: '/images/nfts/img6.png',
        type: 'AUCTION',
        lockedValue: 1548325.56
    },
    {
        img: '/images/nfts/img7.png',
        type: 'AUCTION',
        lockedValue: 1548325.56
    },
    {
        img: '/images/nfts/img8.png',
        type: 'FIX_SALE',
        fixPrice: 50000,
        lockedValue: 1548325.56
    }
];

export const assetDetailTabs = [
    'Details', 'About the creator', 'Chain info', 'Downside Protection'
]

export const popularSyndications = [
    {
        name: 'Mutant Ape Yacht Club',
        rate: 31.28,
        price: 50000
    },
    {
        name: 'Mutant Ape Yacht Club',
        rate: -31.28,
        price: 50000
    },
    {
        name: 'Mutant Ape Yacht Club',
        rate: 31.28,
        price: 50000
    },
    {
        name: 'Mutant Ape Yacht Club',
        rate: 31.28,
        price: 50000
    },
    {
        name: 'Mutant Ape Yacht Club',
        rate: -31.28,
        price: 50000
    },
    {
        name: 'Mutant Ape Yacht Club',
        rate: -31.28,
        price: 50000
    },
    {
        name: 'Mutant Ape Yacht Club',
        rate: 31.28,
        price: 50000
    },
    {
        name: 'Mutant Ape Yacht Club',
        rate: 31.28,
        price: 50000
    }
]

export const defaultPagination = {
    page: 1,
    limit: 10
}

export const openseaTrendingCollections = [
    {
        "name": "Bored Ape Yacht Club",
        "slug": "boredapeyachtclub",
        "logo": "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s120"
    },
    {
        "name": "Mutant Ape Yacht Club",
        "slug": "mutant-ape-yacht-club",
        "logo": "https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s120"
    },
    {
        "name": "Meebits",
        "slug": "meebits",
        "logo": "https://lh3.googleusercontent.com/d784iHHbqQFVH1XYD6HoT4u3y_Fsu_9FZUltWjnOzoYv7qqB5dLUqpGyHBd8Gq3h4mykK5Enj8pxqOUorgD2PfIWcVj9ugvu8l0=s120"
    },
    {
        "name": "CryptoPunks",
        "slug": "cryptopunks",
        "logo": "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s120"
    },
    {
        "name": "GNSS by MGXS",
        "slug": "gnssbymgxs",
        "logo": "https://lh3.googleusercontent.com/DZWZqpzB2oziNcsKBwjLVJScJuJYOajr_hgy6p5OxM_iy4is4Rec9GDCkrRrPNwGC3kh9NamwSFlK2gd4FM9oBqCZsBGdDiDa564XCU=s120"
    },
    {
        "name": "DourDarcels",
        "slug": "dourdarcels",
        "logo": "https://lh3.googleusercontent.com/WxBXXLXUJZwhUMPfz0o18a2gjYpU-qecO-ENOF8QXsfiBLt8TeQ8Nurmi2zLbwgwTHE-J_aZRkIqDA_OGrBSbU7ZpOV8jdjtkp-U4Q=s120"
    },
    {
        "name": "Bored Ape Kennel Club",
        "slug": "bored-ape-kennel-club",
        "logo": "https://lh3.googleusercontent.com/l1wZXP2hHFUQ3turU5VQ9PpgVVasyQ79-ChvCgjoU5xKkBA50OGoJqKZeMOR-qLrzqwIfd1HpYmiv23JWm0EZ14owiPYaufqzmj1=s120"
    },
    {
        "name": "CLONE X - X TAKASHI MURAKAMI",
        "slug": "clonex",
        "logo": "https://lh3.googleusercontent.com/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg=s120"
    },
    {
        "name": "MURI by Haus",
        "slug": "murixhaus",
        "logo": "https://lh3.googleusercontent.com/OPgdc2e-yuBEMeyS8ttfl8cINQ5amQofP0xS4wWj59bWyUUo84A4g-WaulcpghyQCde1mQh88XABNHWjT9MRhPo34-QF50bdYQZa=s120"
    },
    {
        "name": "Antonym: GENESIS",
        "slug": "antonymgenesis",
        "logo": "https://lh3.googleusercontent.com/VvaQMGvYpCRISPBOo4ZgI-9xmZq2XZnRtp3veKYMFinA1jN8Ab0EsVRKWQm0rIy8kN8qdibhDUe7lxVZKuMgg57bzo3mOANKb6b9tQ=s120"
    },
    {
        "name": "CyberBrokers",
        "slug": "cyberbrokers",
        "logo": "https://lh3.googleusercontent.com/Qd1IEPYz_0YlMaclPwb6_9PyP7afZIzH15IdIU2X6t1Wvg81DwpAaWOY0cNmxy173C4yMA7sM3xF9-HJsCSKJdx6KvDR3old3IKuTIc=s120"
    },
    {
        "name": "Doodles",
        "slug": "doodles-official",
        "logo": "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s120"
    },
    {
        "name": "Azuki",
        "slug": "azuki",
        "logo": "https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s120"
    },
    {
        "name": "Loser Club Official",
        "slug": "loser-club-official",
        "logo": "https://lh3.googleusercontent.com/lboeLdy4a1Bodfib2FRXkqLeWPCaGbCeWs6GdOMQhXqO7r41feS7iRkyb99qoHaxpmYb9NF7wnvyjt7VU5Jwo2YGrAst5Dgtm_RpRQ=s120"
    },
    {
        "name": "I Like You, You're Weird",
        "slug": "ilyyw",
        "logo": "https://lh3.googleusercontent.com/m3ItIEvgov0fZVFGX8suBYdLTk9hTNKb2DNPvWFHnTxpIx-6D_kzR6c1uqXDssIITM9MI3eGkuyXU7ojyxRoCpWK0QOOU2rEciE3Tw=s120"
    },
    {
        "name": "10KTF: GUCCI GRAIL MINT PASS",
        "slug": "10ktf-gucci-grail-mint-pass",
        "logo": "https://lh3.googleusercontent.com/1M3Fu0-V2g9-WbQsxs5KAnx8gIXLPUDi8Y7gl8X4V-yszvdje4QNwYFVnROl4CkdjcpNKEgm_Ng7w1E3Xm-QvI5L0QL__D_x6qMsAQ=s120"
    },
    {
        "name": "ZombieClub Token",
        "slug": "zombieclub-token",
        "logo": "https://lh3.googleusercontent.com/fIMi-xohZrCuA16mfi4ZbP013HbTkz-p6bkLraFtJPved2gBDovkQa91LmwULp0tUX2RpjUYl4aYjcTC2AQyt2q8TERofZsH39kx=s120"
    },
    {
        "name": "mfers",
        "slug": "mfers",
        "logo": "https://lh3.googleusercontent.com/J2iIgy5_gmA8IS6sXGKGZeFVZwhldQylk7w7fLepTE9S7ICPCn_dlo8kypX8Ju0N6wvLVOKsbP_7bNGd8cpKmWhFQmqMXOC8q2sOdqw=s120"
    },
    {
        "name": "Coolman's Universe",
        "slug": "coolmans-universe",
        "logo": "https://lh3.googleusercontent.com/E2qCzhIiOS7mfw-vkPU3ROBTbNMeSaC47DLYXd9qiV275KGgciNbbKFgpffwOEpTTJ9JHHztmv1nnh6bOo0KpoFueK4EitHJzsqX=s120"
    },
    {
        "name": "RaidParty Fighters",
        "slug": "raidpartyfighters",
        "logo": "https://lh3.googleusercontent.com/xFWORGa69G8bUyY9cDTO-33PSBKd2Ua8GoPQj_0v1xyYgyUYRR05QJi7Fl4Xv75Vdxm-j8Ov5m9hIpR6tw246IGAOGP7vB4VTulYnA=s120"
    },
    {
        "name": "Gutter Juice",
        "slug": "gutter-juice",
        "logo": "https://lh3.googleusercontent.com/xsApnCm19QrZDa8uPuZ8GBoNxRbKW5aPZQsUedWh3giAEM5Oo7dEDDjAQcEdVHDvbDlHfmOOv2mqyv5owaGHWvmDfc4zZ8Nq-gRxbw=s120"
    },
    {
        "name": "Invisible Friends",
        "slug": "invisiblefriends",
        "logo": "https://lh3.googleusercontent.com/lW22aEwUE0IqGaYm5HRiMS8DwkDwsdjPpprEqYnBqo2s7gSR-JqcYOjU9LM6p32ujG_YAEd72aDyox-pdCVK10G-u1qZ3zAsn2r9=s120"
    },
    {
        "name": "Super Ordinary Villains - SOV",
        "slug": "super-ordinary-villains-genesis",
        "logo": "https://lh3.googleusercontent.com/acJL58sufDJzVcJ7Dok0YGyAzx35GoGJZ_sAQHaylOhHB0K71sTlflixSqCWphVCiSQ46Djwe5nboSv3S_0SZrIRJQTxt-RcwjZ4Rg=s120"
    },
    {
        "name": "CrypToadz by GREMPLIN",
        "slug": "cryptoadz-by-gremplin",
        "logo": "https://lh3.googleusercontent.com/iofetZEyiEIGcNyJKpbOafb_efJyeo7QOYnTog8qcQJhqoBU-Vu9l3lXidZhXOAdu6dj4fzWW6BZDU5vLseC-K03rMMu-_j2LvwcbHo=s120"
    },
    {
        "name": "VeeFriends",
        "slug": "veefriends",
        "logo": "https://lh3.googleusercontent.com/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg=s120"
    },
    {
        "name": "Quirkies Originals",
        "slug": "quirkiesoriginals",
        "logo": "https://lh3.googleusercontent.com/XS6RqsT7CBpoeX8vUmWkJYldMV6h0Ko7TpagNgFZ-nEh4yrMZFrpY4gtBqyuRDJV6mx2B0ssYxoh9Z9XlO770Xe8FNSu-kj-1EVzMQ=s120"
    },
    {
        "name": "Villagers of XOLO",
        "slug": "villagers-of-xolo",
        "logo": "https://lh3.googleusercontent.com/MTW_67KF7QCxvyUoijpQ30aQ8mD2Md5_xs1E9MXB0JqlYfZB7G48oFEp4aibAVC43f8D_QFgJA1seC61YljNyDaAzxhbY007rgUflYU=s120"
    },
    {
        "name": "RTFKT - MNLTH",
        "slug": "rtfkt-mnlth",
        "logo": "https://lh3.googleusercontent.com/gp39NTyxBPazqowYV9XTFxAU4eNk1i7FlmonHW4Zr7eS9UxEvrZ7f04rOLEhDxcuGxsbUx1Rm_N6Ky_Dp4A1ZQYHFAaEWj5YdBF0qg=s120"
    },
    {
        "name": "Bored Ape Chemistry Club",
        "slug": "bored-ape-chemistry-club",
        "logo": "https://lh3.googleusercontent.com/Mf4vImKbzrJUcj7f7RZNOl9iZSEEJgkvpiUp9ugXc9dcpxFe6fvVgxYcRmTI1PnvfL_X1bD3mH4e66j6aJhqLEYm0vvpC8Jy8XJNZOI=s120"
    },
    {
        "name": "Cool Cats NFT",
        "slug": "cool-cats-nft",
        "logo": "https://lh3.googleusercontent.com/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8=s120"
    },
    {
        "name": "3Landers",
        "slug": "3landers",
        "logo": "https://lh3.googleusercontent.com/tStSWQ2QRTvYwz--9cKDmzlApbfvA8574zkJ7vz6zdJj6zRD7DmM5LccTUmjA3KYYwXQGd6cvjzmvxnJLY6Y2cAZGQSVmsZR8H44Dg=s120"
    },
    {
        "name": "Dippies",
        "slug": "dippies",
        "logo": "https://lh3.googleusercontent.com/ltLmL2_T4KKONimcbknNYs3SeQoKLCKgE429Y39zSMIpvEIy8PW8xXMnztPCehNCktTGhJAsKIzksM070xfmhFhsIyrs0U05N50q=s120"
    },
    {
        "name": "Look Labs 420 Game",
        "slug": "420-game",
        "logo": "https://lh3.googleusercontent.com/oLh0YxnRwrQLb0G58iVuPOshNhLEe5Djx99pnbR8dqgHTR-2BZKuPXVL3nPH93_BJxDZ2EcOOHVcb3xN7UnMF9yJlgnzuGJVhxF4MQ=s120"
    },
    {
        "name": "World of Women",
        "slug": "world-of-women-nft",
        "logo": "https://lh3.googleusercontent.com/7rQxqp2cAN4J-pFJ6A22Ncb_tm2j6Lz61zXMi9bNJbmAk8PheVXcL4zVIZptVQ8_owbOJAiYuhSbn0vtjwcE4Jg7FQqDGwZTndd-_A=s120"
    },
    {
        "name": "ConiunPass",
        "slug": "coniun-pass",
        "logo": "https://lh3.googleusercontent.com/RmHHZEQZJIl2Go9W3pHScS_44b-G6ErPhI8vXUhC3iw-kw-A9CsAstAfnk3BRbtiakvvrkC2iCmCkJK5nbdv7cy-B924kjfeKmDTxWQ=s120"
    },
    {
        "name": "Project Godjira Gen 2",
        "slug": "project-godjira-gen-2",
        "logo": "https://lh3.googleusercontent.com/Wb1h0cgCPBo1MCIWa4VyEEsfBWDRT3eZ4ZGUid6yAf6TosWzgVlEavQ1nUxYW0mUjseb_VSDjsMLbc7XFDgmV-vuZP84Bile0Lwm=s120"
    },
    {
        "name": "DrugReceipts",
        "slug": "drugreceipts",
        "logo": "https://lh3.googleusercontent.com/kcO_5XdaSERzUYXJKQArPLQcabXJT8hMyFtgxPzZQZyuE4kcK82Na5LZsyBWk0skrm41EhC60h0giJ8Vsl7DG5E8lw1cIQ0NG4BXVMM=s120"
    },
    {
        "name": "MPL Official",
        "slug": "mpl-official",
        "logo": "https://lh3.googleusercontent.com/p-xelF1DUHVKq1B7qMLxiUExpYY8yOAKTozR4rx2WUioY-kmxSwDhvFAK6UccaRnVsmQYbycQ1t0sSSY2tlCQyL2PVSB057DYSi0Cg=s120"
    },
    {
        "name": "JRNY CLUB OFFICIAL",
        "slug": "jrny-club-official",
        "logo": "https://lh3.googleusercontent.com/zj2Rka2PYonWXbyiwi_8s7ecOiXYaqHH-K1EZkeuITvSqJ41RIMTICoXfpopTVZ_CB9bIjTJHzwrL7x5eN3yLoAK2VxGDo4-Sw_oTw=s120"
    },
    {
        "name": "White Sands Parcel Pass",
        "slug": "white-sands-parcel-pass",
        "logo": "https://lh3.googleusercontent.com/p4WnHUMHJ68cmFAO2Acs6XxhHF34eAg-GceS6AIaL3J07rW9q65mm3hMIanZV4blWaVCsXmPwe5qCh5949WezQ7X5uH6dtydvana=s120"
    },
    {
        "name": "Blockchain Bandits Official",
        "slug": "blockchain-bandits-official",
        "logo": "https://lh3.googleusercontent.com/6UFfIlJbT4Y7JjOaJxOBJQczYas7Ybt26TMw2JMXirfVXGgKvRbo9FEB4-jaJ_C3sxDnWL9GsRPvvmmRgvC4Jw0utTSgwS8mxjb-ew=s120"
    },
    {
        "name": "RaidParty Heroes",
        "slug": "raidparty",
        "logo": "https://lh3.googleusercontent.com/xFWORGa69G8bUyY9cDTO-33PSBKd2Ua8GoPQj_0v1xyYgyUYRR05QJi7Fl4Xv75Vdxm-j8Ov5m9hIpR6tw246IGAOGP7vB4VTulYnA=s120"
    },
    {
        "name": "Kaiju Kingz",
        "slug": "kaiju-kingz",
        "logo": "https://lh3.googleusercontent.com/80yXYN287mZWxZhcBImQes5pVi19Tm5X9q2xj6DU2o_WUJKB1AybLpiFv2nL2WL00c3idD_XAL12wZLKsV1jzL8x2fTYlakHZg3JxA=s120"
    },
    {
        "name": "Karafuru",
        "slug": "karafuru",
        "logo": "https://lh3.googleusercontent.com/VMG3VFncJG-pyqsRAwQznZGqYDw4RkPjJnJNJwrDERFhD4pWLh82q66JJ8Qh0vCPoovjoyigJwLqfFpa5tMAVV5ASIiR5nF1XkQFpec=s120"
    },
    {
        "name": "The Bibiz",
        "slug": "thebibiz",
        "logo": "https://lh3.googleusercontent.com/Zc3SfjuREslEi4-fu9Xi7_kgIxtsXksnTCnmWQZ17v1RhsX49XV9UCjKTilYWk-yqRtA5ivWJD4X9G7S5a0cGk3r0UTQCc-NusIFFQ=s120"
    },
    {
        "name": "WonderPals",
        "slug": "wonderpals",
        "logo": "https://lh3.googleusercontent.com/DA_iUjt7S9PdmAANh0aqMkxYVhvGogTuKbMSzFO3uEnbvRRt5hn1B8DuN50HQpkRtH34QX7EOYYKIayz1q5KgZWfgLedNo7xBQzK=s120"
    },
    {
        "name": "Chromie Squiggle by Snowfro",
        "slug": "chromie-squiggle-by-snowfro",
        "logo": "https://lh3.googleusercontent.com/0qG8Y78s198F2GZHhURw8_TEfxFlpS2XYnuLV_OW6TJin5AV1G2WOSpcLGnEmv5g2gZ6R6Pxjd4v1DP2p0bxptckM6ZJ3cMIvQmrgDM=s120"
    },
    {
        "name": "Parallel Alpha",
        "slug": "parallelalpha",
        "logo": "https://lh3.googleusercontent.com/nxaymgd9aJIzLXb0r3oLO0VCMFi0Zex1ubTmEYekEKwOVq1YijOULDeT1qCjk71OTsQW47zmvZ2ZuycXorgu6WA6Wosc6CiOuVnAXGk=s120"
    },
    {
        "name": "Acrocalypse",
        "slug": "acrocalypse",
        "logo": "https://lh3.googleusercontent.com/2A1CFc0BZ_4wmXLeAd-2KgxsRGa_KdkvBRex3BC64HoPnLPzBjPz79xmX5JPq6OXEx8yhc38oGIlh1OjwDqvgU0-Tx_s3P9hAdUY5Fk=s120"
    },
    {
        "name": "Cool Pets NFT",
        "slug": "coolpetsnft",
        "logo": "https://lh3.googleusercontent.com/dNMaqYrBRTBWeTQOJsKg0IedkMSS_SB37x1ivbcydSWur1Pv3_sETgQYQdeCgp8Iv4gTT60xz8pnWkfAJF7HwHibOfB94wT5l2WJ2Q=s120"
    },
    {
        "name": "hausphases by Haus",
        "slug": "hausphases",
        "logo": "https://lh3.googleusercontent.com/zpYSsc9x7hJ6veSPqx-IzrDUMrfdGnimXa15KkR2ctEvHIFMmB3n8ogN4C1jAlIVjjicCzE6kj2WRyYeR6uYvBH22xQnJPOPVz5cQQ=s120"
    },
    {
        "name": "Cryptoshack Club",
        "slug": "cryptoshack",
        "logo": "https://lh3.googleusercontent.com/0qMTKKfs5TnE8iUaYLrJ4k1vkHYKPVEfhvjgfEaQNGNm4YjIk0ou9NfNdAgxAaTDJzS6T3UJkqLp_LxsiUk6htmQg0BtQv3qfJ5X=s120"
    },
    {
        "name": "Decentral Games ICE Poker",
        "slug": "decentral-games-ice",
        "logo": "https://lh3.googleusercontent.com/vqpagZzkUkiTlLR1DHyw58wc6uxfEegI8NbeFo45mubN2O3m8WTGTG59xXPQCflsAXLs_EcmR3tIiic_1Alet6E0z2YcXtIMxWfVWw=s120"
    },
    {
        "name": "Broskees NFTs",
        "slug": "broskeesnfts",
        "logo": "https://lh3.googleusercontent.com/yEmxT0kvKccQbQFXtrMY4ZmXNYVM8hWfx2La0ZFA7Rak6HCBdIbI8991jQmpYDbdL2tqAM5LHNehFpJeSonX5YimIK2fxfxbIs2WnA=s120"
    },
    {
        "name": "DEGEN TOONZ COLLECTION",
        "slug": "degentoonz-collection",
        "logo": "https://lh3.googleusercontent.com/3Rk7PFs3XX1ja50aKi8lxh9x67yNX5kZLti7gPlHvWsS7iuXSUdQGctoOXtto7uLLLnvwxe1uhWN6WmmZvVWCcQ-Qm7a8K2KFmEZJC4=s120"
    },
    {
        "name": "HAPE PRIME",
        "slug": "hapeprime",
        "logo": "https://lh3.googleusercontent.com/5VAunHscTO5Nt8WgCezb0i2oVskplFVhVgwmvISfiWQlrBulCxUL7zCYUkRfVF04_47QmNlpWqqdfVraThlhLBEZjuWzajmYDYc9vOc=s120"
    },
    {
        "name": "tubby cats by tubby collective",
        "slug": "tubby-cats",
        "logo": "https://lh3.googleusercontent.com/XHZY9623keDQqFSDHKqOdcjD99Y7N82K1egYRM2Mm1Z-Jxn5myrkKiC5NBktWKStVtTzDzwELy9dNpzTWJTIkLsdMIxUHI86jduQ=s120"
    },
    {
        "name": "Mavia Land",
        "slug": "mavia-land",
        "logo": "https://lh3.googleusercontent.com/KwtlzGCHxo9CgfOzLHrO1f6a8ty1QSBGFpGyof9DlVw4zpQ-N_tbqzAwI3kQNuItCM47XwwJp97jqs86k6fW304hRLgFpLrBMXPrGQ=s120"
    },
    {
        "name": "Rare Bears NFT - Official",
        "slug": "rarebearsnft-official",
        "logo": "https://lh3.googleusercontent.com/FGNMoWeFBJvNAslvFz84O4OHJte3sHTG8SG0oVcTMauGlOY2q3aJGfL-EsdGLdV9ZDyu4zzP06qwlqk5ffPeOGteWSZZbd9wREe9=s120"
    },
    {
        "name": "adidas Originals Into the Metaverse",
        "slug": "adidasoriginals",
        "logo": "https://lh3.googleusercontent.com/_wXtGDZ07ZelRfyfqDQkhoTX_feD_w3wdFuJ25z2ZLA1R6GFzuQ2jOGURRS8d7UEJGJd1svd61tZnGRS4zN-VXTUUVmg8Wymt-Uk=s120"
    },
    {
        "name": "Milady Maker",
        "slug": "milady",
        "logo": "https://lh3.googleusercontent.com/j8PFqoTtQQ1LkwnFhBRUwFvG2RVXrLpnmSZ6d5he2yxJnDvN3NcaWIaK9Vnmk5Ip2VhrSNVfQD10MyPyM8R1jjs8z1d6cPtjgcPWcA=s120"
    },
    {
        "name": "gmoney Brick-Breaker",
        "slug": "gmoney-brick-breaker",
        "logo": "https://lh3.googleusercontent.com/rhV1R6QSRF53cnjDMQ1CBUoseUf9k5YSqMr0zTl3t9WjAw_Aa6pfFEMSnv9gTpd6DEn3Gz9U3ZnsVIZ761xx_KqcUfgRdRgsaC706g=s120"
    },
    {
        "name": "MultiverseVM",
        "slug": "multiversevm",
        "logo": "https://lh3.googleusercontent.com/sJBqZcJittBcjkIY1F-V6DkJuIBYN0R0AaVjPIpnznaPTdPNCWoauHBNRGwgObGtp-zGailvnavs0uDitRaVoOEonGEjEieIq0-KLQ=s120"
    },
    {
        "name": "Look Labs 420 Buds",
        "slug": "look-labs-420-buds",
        "logo": "https://lh3.googleusercontent.com/ghyCZGvZKk4up5CdcDrino1M0WFRl4t6-J8AZgDKyjkqXHbGehOpZaGtzPEnrtQi5KUjCar_gSAVdIubXe-0xdjT9rRFa-u_71LY=s120"
    },
    {
        "name": "Psychedelics Anonymous Genesis",
        "slug": "psychedelics-anonymous-genesis",
        "logo": "https://lh3.googleusercontent.com/9VndAx-5SvVdamB8KvABGcw2bdXMdeyEYdhHJ22WMV98C2yS85SDT5rnBtT0zOxVjeJ6KBz2fXKXcYSIXeOc7aGiU4i0Rx9IwaMfO9o=s120"
    },
    {
        "name": "FVCK_CRYSTAL//",
        "slug": "fvck-crystal",
        "logo": "https://lh3.googleusercontent.com/UiZmYgnMO_AEn8cQmUSOcqCT1mP4XF7zupkJpQtwNS3rMCzJlGsQH1I22tsUWvkDqCYISpIEHGuKzibepZIYLVNRDBAFigyivmA34cI=s120"
    },
    {
        "name": "Skelet Guys",
        "slug": "skelet-guys",
        "logo": "https://lh3.googleusercontent.com/XMOHn9rIh607U-DaRsYVth4STQw1spx-Twy9nmcTF3IRVJimGRnSZhf6reZqYLYJGRPv6E9jcbJvLUaypy9VXF2ij5RP3mRsVhME=s120"
    },
    {
        "name": "Cosmiqs Official Collection",
        "slug": "cosmiqs-official",
        "logo": "https://lh3.googleusercontent.com/jRs2CLtWkGUnMYeqKazPdtb_joMklN5bxKgZLEnXEhnCquwpbS-D-LuEimwKctEJgQ2DUIZ2t3RhxaE5kjXw8L44evkygYA2W3KXBw=s120"
    },
    {
        "name": "Snoop Dogg on Sound XYZ",
        "slug": "snooponsound",
        "logo": "https://lh3.googleusercontent.com/ehUSQhnsGoxsqszQdgzLAhD50gnhgdFCsnqlNdsOqINRTNtlwVoMDVdVVskBPuCp0KLtnhuYzCZCaLm_craTEjpafyfrXSjNpco8MUE=s120"
    },
    {
        "name": "Gutter Cat Gang",
        "slug": "guttercatgang",
        "logo": "https://lh3.googleusercontent.com/gjOExI2qNNJuv6fo4hmHamRzDMRLkYPFQtK4d67GE3bgdVJCyZngUwY_h6qp9244pp7l_pF2JBHtOJ8cLgzFbulxMK-KqlZnu9E1sg=s120"
    },
    {
        "name": "Llamaverse Genesis",
        "slug": "llamaverse-genesis",
        "logo": "https://lh3.googleusercontent.com/I-ef-zrbXTLC8w38vOFCRGnaJyRkyYxHNgb7yNE8g_POI7O1UAo0yDEQIaCtf_eEDdovFkCP9nyDGFpjtOD8T6-JSs0HLqbGSDtdNLo=s120"
    },
    {
        "name": "Voyagers: Unknown Genesis",
        "slug": "voyagers-unknown-304-x",
        "logo": "https://lh3.googleusercontent.com/5C3O6Mm2cjVhG2qK6stlEeXTOjbq7LWdWfeioHDEZRMOpqL89U89U80Hu1u0vVG2qKTm9eraZd1vcv8akPKLypXas-ujcmDrvFO5sKo=s120"
    },
    {
        "name": "CyberKongz VX",
        "slug": "cyberkongz-vx",
        "logo": "https://lh3.googleusercontent.com/vpJFZRfBl9ghj9IinaDB3w3xScD9AHwuXxpId50Yo80bw1Tt1BOhJg5pltBN-_wJwA0aCyHbcxIbXNnQ1cKd9xlc5ATdJUL4Yy3kDQ=s120"
    },
    {
        "name": "ARKIV by Alethea AI",
        "slug": "arkiv",
        "logo": "https://lh3.googleusercontent.com/l83Ga13cRv53TOuLzPji49oyCQ2SZW4e2e7gp4CNC2R0w82Y3JoYS6JvkKMe4TJnLdWCkydZrNoXTyUH05iN39M7grHnJSGbDXLVKwQ=s120"
    },
    {
        "name": "CyberKongz",
        "slug": "cyberkongz",
        "logo": "https://lh3.googleusercontent.com/LIpf9z6Ux8uxn69auBME9FCTXpXqSYFo8ZLO1GaM8T7S3hiKScHaClXe0ZdhTv5br6FE2g5i-J5SobhKFsYfe6CIMCv-UfnrlYFWOM4=s120"
    },
    {
        "name": "Look Labs Game Key",
        "slug": "look-labs-game-key",
        "logo": "https://lh3.googleusercontent.com/Br2_z45_tk63vpTILIXZCwH9HcQAlaicf6zfF5CiqyuNdJs9Cs9PbdV1d8jvlXOcoCJo6hGEY9BwukUC2GuMfM04a6TFSy6pXcQpmg=s120"
    },
    {
        "name": "DeadFellaz",
        "slug": "deadfellaz",
        "logo": "https://lh3.googleusercontent.com/seJEwLWJP3RAXrxboeG11qbc_MYrxwVrsxGH0s0qxvF68hefOjf5qrPSKkIknUTYzfvinOUPWbYBdM8VEtGEE980Qv2ti_GGd86OWQ=s120"
    },
    {
        "name": "SheepFarm",
        "slug": "sheepfarm",
        "logo": "https://lh3.googleusercontent.com/ynlAQE698lEpXooP100VUIGQIUdFapJZweh8WhPuvnucEuRv5DcL0PFo80dgkdiQY3ydUaTl7ZzsGl51NCNpuAp-Wxswlq1O6RS6JQ=s120"
    },
    {
        "name": "Troverse Planets",
        "slug": "troverse-planets",
        "logo": "https://lh3.googleusercontent.com/Crjer8NEs7CCNfaaisBuSHu9yIVhaReYSuoga15jh56oueGQV57AfVn-m_AoCyT0aozoL_PnJh37NY_AB0J5za_Jc70OuPWxHwQyxQ=s120"
    },
    {
        "name": "RATATTACK SIGNS",
        "slug": "ratattacksigns",
        "logo": "https://lh3.googleusercontent.com/oqedwTczCZ4ub_2bdrLO5kJU33GgBkoGxolOhUg5K0AC54Hy2hZn52a8qBrPQvNvs0ZaZ3Ahkj2pAtdPmotX29g8Se4Ib2bElNpF-o8=s120"
    },
    {
        "name": "Moonlings NFT Official",
        "slug": "moonlingsofficial",
        "logo": "https://lh3.googleusercontent.com/7slwpy6l8dqhwBHtwwTuY6KkKQabLdeh6lwycJd2KcNkvDwlWrk7XfCZJH0NTtS9AS8KM99UGkxWI8LwofCcOVPm4MV3lbLS1475xg=s120"
    },
    {
        "name": "alien frens",
        "slug": "alienfrensnft",
        "logo": "https://lh3.googleusercontent.com/_zidXBb2QsMBD6OYdjED63tczeXDUr1ah7zvhSSLHQjU4BF-H-lUexkLJ76_ahmbkkItEiH738jVPG88DOFVdt4GX377cvNNgCyzFT4=s120"
    },
    {
        "name": "Project NANOPASS",
        "slug": "projectnanopass",
        "logo": "https://lh3.googleusercontent.com/fZ4I5g6uU4pufmceGnEd8Z60OBlHwYWI2gJKnrlaJCO7WW1c1kUyL17oh7culsru9Yy6sbiMT8x9-DY2uQMZhDDW8aSyddEOsV6dpCE=s120"
    },
    {
        "name": "Everyday Goddesses",
        "slug": "everyday-goddesses",
        "logo": "https://lh3.googleusercontent.com/NzgadMy47VkrWTPN0dyyqWbGnLuKYcP-YL2AJnc3K8MvGwp4nQM7Ck7KPL-3mSfnjwXcg3g6Q17lmb3XC_XoAlig3et1hZYwj2GFNQ=s120"
    },
    {
        "name": "My Pet Hooligan",
        "slug": "mypethooligan",
        "logo": "https://lh3.googleusercontent.com/cdJmA0q7yBVaohfUK7AU1q7ZpeBiC5wt4nh6wRFmpQbGcYM260IP9NFPErTJs-Va0Z8x02EHEH-0wUdydBGZY2yj4akcFk0UjvAjaw=s120"
    },
    {
        "name": "Meta Adventure, frozen",
        "slug": "meta-adventure-frozen",
        "logo": "https://lh3.googleusercontent.com/F1HOms1IzBqhDeMetFKXY9oH6pNmqry_L6lvrP1iwo_K4twmTO9_PBii-Tav6_f7zqVR1_2CSvkn3XZ2O9todehAAZdStnYJp4p9bg=s120"
    },
    {
        "name": "Quantum Key",
        "slug": "quantum-key",
        "logo": "https://lh3.googleusercontent.com/AIeOkQApQ1DZfX9IVXdON9NwbZjPWsQlYu9VRRchsevRIpVoh5U7k_pEebpeH5iYC2nV-swboo-WPtBbrgvTrS_6G4J8R4qd6mMoTNQ=s120"
    },
    {
        "name": "Apocalyptic Apes",
        "slug": "apocalyptic-apes",
        "logo": "https://lh3.googleusercontent.com/0XGxAWQd9ooOYTyLT-3nI3PXKfSbeu0Qd7r_KS9VV6aeVpbLPLxblsr0TjAVacQslkwtDzrenJX5IncVYz34q7PAk01BvYZoJ2Qc8-Q=s120"
    },
    {
        "name": "Loveless City Metropass",
        "slug": "lovelesscitymetropass",
        "logo": "https://lh3.googleusercontent.com/kKlBgXFbfEjo-d72xOLbVjbZi3kReV0CMrk_6RetSgErP_2XpTtYbxKAQ9LvQbYk_bz4hnEVzKqHQvbVBxrOGzdCjagDo8CNmk0K=s120"
    },
    {
        "name": "Pixel Vault MintPass",
        "slug": "pixel-vault-mintpass",
        "logo": "https://lh3.googleusercontent.com/3Y2i7gCGgr6JY6-qPQ3aeFTGbgZfznTprxHaCJd0xVjEQ0n-NjBISvS8pnPGfh8BAmkx67zeOu9P0XNOj8I5TOEUrPbvtTNT46rM=s120"
    },
    {
        "name": "Boss Beauties",
        "slug": "bossbeauties",
        "logo": "https://lh3.googleusercontent.com/pSvJC9PfgSxXROesWTc2SACmMT598Vuv0g5kURR7o-0wkdhkRQKIw__fghIs-zhL-Ja-qOzI7_twdyglU75FOIksxpuuEhh4-fVDEK8=s120"
    },
    {
        "name": "The Walking Dead Official",
        "slug": "thewalkingdeadofficial",
        "logo": "https://lh3.googleusercontent.com/N6RmCQqaCOaFluQihElP55ucIlcyShXyzYV3ceMmk3ihJC-ZZgIYsrNdbOYCPZUT_nXS16izBMvPgBU8MF1q7LQFC1M_WNdViAwLHA=s120"
    },
    {
        "name": "Coalition Crew 2.0",
        "slug": "coalition-crew-2-0",
        "logo": "https://lh3.googleusercontent.com/XVJjeSKBfsrnYJAsg8xCCxI_zPT2CtJA_wWd11wX-efZCPEAHz-YxEDnFOcoAxtR8AcT-rZmQ4e72AYPYqt1fsaHB_g3in2vbxfbcT4=s120"
    },
    {
        "name": "Grifters by XCOPY",
        "slug": "grifters-by-xcopy",
        "logo": "https://lh3.googleusercontent.com/X_oAA8f4sqxZNiyEpEWE3sXuzzlt-SY1NC4b2xrqrO65LQEfSFis0l7lwAvvA0f_p_EZMyMRdCnEo6Adhu9sEVEYmnukxhubRcQ3dg=s120"
    },
    {
        "name": "Cyber Factory 2",
        "slug": "cyber-factory-2",
        "logo": "https://lh3.googleusercontent.com/72591rGu5Q4R7JeUjXyc1ZH2QJ2CW64OwKQ4Ec9Hf1_z8W6IgXNummT2ErPy80zh0DoUY8KXUXZdvgeUUw9HeIz8L11sYeNqTyD21y0=s120"
    },
    {
        "name": "CatBlox Genesis Collection",
        "slug": "catbloxgenesis",
        "logo": "https://lh3.googleusercontent.com/ruiSdBeZwFASTXoEuKtOQECfEj23sNlkJT-oHMN907STbDjqT3lvvZFDjCNcy8ynGb9yLDkFip0bf_Ed_8eCRpbsSO_s6dBKNfRcnA=s120"
    },
    {
        "name": "G.rilla OFFICIAL",
        "slug": "g-rilla-official",
        "logo": "https://lh3.googleusercontent.com/97GgxcGM-qnu20xEe0sPH1DlIHJB3R6tFcmkowW287_hXeala1o0Tu-AyHksa9DE5Q3npRbevahOkBGY7Fp9a4BFVMRK7N5vdvufDw=s120"
    },
    {
        "name": "Ethernal Elves Sentinels",
        "slug": "ethernalelves",
        "logo": "https://lh3.googleusercontent.com/gSU3jb0xhYHZfmfrwzrDx68cg6oWbjJRndNhtyYjntb9KsdWV0tB9ycxgEgaYIqoSwcgdsEcQhFfVZjVpZt6S7XS87kdbdQTscob=s120"
    },
    {
        "name": "Lazy Lions",
        "slug": "lazy-lions",
        "logo": "https://lh3.googleusercontent.com/kFZpw-bkoyH03qFbfqkwkkhHVxT7qclK_tYFmhU1K2HegU3v2wSMmhL6TIgw7Stx1KIoKs1sdJQ4My71ktXV7GygPBjaQZCACERt=s120"
    },
    {
        "name": "FLUF World",
        "slug": "fluf-world",
        "logo": "https://lh3.googleusercontent.com/6A_zAw2qtq91-5x8yuJUwuV6ttgD2G__RWVApFWfUcH8Qb8oLhW3uP9MkonFAaHRnE4XodwYHCgESxQ3xdQlQrjTros61gPaG3qf2nQ=s120"
    },
    {
        "name": "0N1 Force",
        "slug": "0n1-force",
        "logo": "https://lh3.googleusercontent.com/7gOej3SUvqALR-qkqL_ApAt97SpUKQOZQe88p8jPjeiDDcqITesbAdsLcWlsIg8oh7SRrTpUPfPlm12lb4xDahgP2h32pQQYCsuOM_s=s120"
    },
    {
        "name": "Meta Toy DragonZ",
        "slug": "mtdz-1",
        "logo": "https://lh3.googleusercontent.com/02PLvfCkPwgAeWBEmRa0HjdfXAabG4-fE9zIrNmecO2YMJUax-ZzvlkqNzT7w2GS19-9us0eoFWvd7S6O2DrSKdW3DrXVlegY1Hefg=s120"
    },
    {
        "name": "Starcatchers",
        "slug": "starcatchersnft",
        "logo": "https://lh3.googleusercontent.com/uRZrWesOYmPJBCQV-YFcGslv6HncNKMmSkMCtUxGI1uOLVm713TPmN9BIs35-jEg8dXvgUnhxy0Udyj4qwZjNPliNSTP5DtiS7vkXw=s120"
    },
    {
        "name": "Xoasis",
        "slug": "x-pass",
        "logo": "https://lh3.googleusercontent.com/mKo6qsfoCJwNqYonvRBXa8jW6Y2y1zAQPtE46eVhZIFb7uAbZtETEIGlVz3MHotqStV8p0Sm3qvNj9jpmCPEZ7PU5F2DXBgafzIo=s120"
    },
    {
        "name": "Creepz Genesis",
        "slug": "genesis-creepz",
        "logo": "https://lh3.googleusercontent.com/r_FGZQ0mgacLAOzH1MxC9n-yyygNmg37QyjYvM3g4HCl1mOkeGif7_8IW62v_R4Tvx9O9EWdHkNmiQQW30DNxwcvuSbg5EM1FQeSDIo=s120"
    },
    {
        "name": "Emblem Vault [Ethereum]",
        "slug": "emblem-vault",
        "logo": "https://lh3.googleusercontent.com/VkSY4QiLanH0h2oS37cjRAENLDLBqLKUX3YC4ZvdEW60zI9OXoRl4E9uR1x3d8hU8ekFai4Ruwq4FObZ0VH2NpU=s120"
    },
    {
        "name": "the littles NFT",
        "slug": "thelittlesnft",
        "logo": "https://lh3.googleusercontent.com/Ie_qAA75_piqy1daeu3dRKUEETbQMz0ormtUaHt8LY15I5AeGKJ45gojR9NW7SY-h_vbgA-O-hwKrU0xf6Q_qqpwQ4ep7Xld8hao=s120"
    },
    {
        "name": "Primal Beast",
        "slug": "primalbeast",
        "logo": "https://lh3.googleusercontent.com/Jrd1-ZfLsOS9G-uEHlFatIn0Nk_9e5MFCbXrI2UtPl8ntrfyaqZJ-K8yr_OF-0WkqyXu9u1hk0-BQzIsx8h6ZTHDfhHA2_6oXT4lO44=s120"
    },
    {
        "name": "ASM Brains",
        "slug": "asm-brains",
        "logo": "https://lh3.googleusercontent.com/IbvW1k5GNi-3kcGDSUlguX6JsqxxdJgDhEXT9pnlk8KmHch_M9QyhaES0gBY3EzECeYKUm9SSQ4y0wfPHnU7MrJHfdqS5uXm71q9fCo=s120"
    },
    {
        "name": "Frenly Pandas",
        "slug": "frenlypandas",
        "logo": "https://lh3.googleusercontent.com/Mrtjj9EOdaLVQRc6CjQLLmna8ezEA9YOHFikt8AEgB7LYuqw1QZo76TUnaz9tT3OKkKeLh7HZDA1f-ts9YLVLujX2PoqMy2y7DGV=s120"
    },
    {
        "name": "The Lucid Planet",
        "slug": "the-lucid-planet",
        "logo": "https://lh3.googleusercontent.com/E9f0DA6qcY9H68Wx4tnssLn8GMaJ0MGdZkRDxANlOyfT46uTg31awp-JAz44411On3Yw7kW5shn-jhOsix_xlysGAx-yZ9U5bQVW=s120"
    },
    {
        "name": "Fortune Dao Genesis",
        "slug": "fortune-dao-genesis",
        "logo": "https://lh3.googleusercontent.com/rpaf-COuLmFtwFEabyzUVgSQhHZYqaKDvAYXOZAHmLFZkM3SjHF5NCZFff2Oigje5vtPb0AlIiD7-BhuOLHl8sr93AGNoh8QmWQG7w=s120"
    },
    {
        "name": "Crypto Unicorns Market",
        "slug": "crypto-unicorns-market",
        "logo": "https://lh3.googleusercontent.com/jLi7QyLxZLXAeAqtKuecs5ebhGpDwWG6iI_EsfeXanpCCjCnDtqW9Db4b2ZAO0poqfIgBuGdYmyJCFL-c9wVJFIjJUZ2Lmna13kTDg=s120"
    },
    {
        "name": "FULL SEND METACARD NFT",
        "slug": "metacard-by-fullsend",
        "logo": "https://lh3.googleusercontent.com/g0fd7h85fN47tCh78-6m9Qvq70glOhUkFbpzBu2zJsqSBeHUajCHclmgnkO6nXd0JS5vghkXtTfuSSbVQY5X7vHsic6p1SWQv6XBeA=s120"
    },
    {
        "name": "Fidenza by Tyler Hobbs",
        "slug": "fidenza-by-tyler-hobbs",
        "logo": "https://lh3.googleusercontent.com/M2nEf60xoxSn3sRz_YSe4phhBMUdx3_YhIR-OgVMjjFiNOSi3uujRPD9txCh3zWWC3yEHL3Jo2eg9YhjTtPxXGTRpSKhQnQfQvwaAQ"
    },
    {
        "name": "OG (original garage) Social Club by Tai Lopez",
        "slug": "tailopez",
        "logo": "https://lh3.googleusercontent.com/BIM6g-WkeWkVG7eO_9vgksgaEqPQsMHRMeO29WNDh2ESFqj8P85u3ilS0uNhsMMS1a77BJ10VqDHA7Oyxa-DhVMCvNYT4FqTo28wOlc=s120"
    },
    {
        "name": "HUXLEY Comics",
        "slug": "huxley-comics",
        "logo": "https://lh3.googleusercontent.com/7gMGh7tsUXwYFz-pJdYLWo3GdrzUF8e0aiPizi2XeWTBtxCdPU8Zt5dW7P3Ev3Fi5o1XM91SCNe89S-mk0uE6_DTFve6krp6uAByQ3o=s120"
    },
    {
        "name": "PeopleInThePlaceTheyLove",
        "slug": "peopleintheplacetheylove",
        "logo": "https://lh3.googleusercontent.com/ovjOYKiz9oG7dCDGRpgJ9KK7AMk_2_tpkDuNkpxZTYZfYlVP0wS8fuOgz0os2nbYE_sZEteQ4l7ctrBXxeVqrM8os9rwQNJTtS5DILM=s120"
    },
    {
        "name": "The Door of Dimension",
        "slug": "the-door-of-dimension",
        "logo": "https://lh3.googleusercontent.com/AX_uuKN-OFhtHXtzw5PJ3K-bGW5tg2svacBEv8xO_ii3UCEo6UTjqec4MiXFGP3gsxPD-p-W0d315pEvIOxG3pKNWfT3G8KvAgIl=s120"
    },
    {
        "name": "AlleyKatzOfficial",
        "slug": "alleykatzofficial",
        "logo": "https://lh3.googleusercontent.com/hp-q7jZqnz32oZtahZ7_qkO78WBJZzhZvooqp4DB95T8fPKqV_GHwZtjkhr_OTrkidgWKHLyt1-GqbNcOM-WDmLitgFUY1QEMOpgyw=s120"
    },
    {
        "name": "RTFKT - CloneX Mintvial",
        "slug": "clonex-mintvial",
        "logo": "https://lh3.googleusercontent.com/xOw5gYzZzkm83sL8ObO_wv-adMrsw5w9TkPjrJLT3c2dbGIS8DR_Qm_hsth7esBM2l3q_FOmlqzO0dR4BFquFEX5wSx-Suc82669=s120"
    },
    {
        "name": "Gutter Dogs",
        "slug": "gutterdogs",
        "logo": "https://lh3.googleusercontent.com/vNgijw2b0ybGsKbVw5210hQhv42uFiX2r0IMnD0GbyX-Tg-YI7F09_QnIWSiHdPIKfi4ANzH204I1SgKkBz_uMO0njDaVfsXivIPYMU=s120"
    },
    {
        "name": "The Wicked Craniums",
        "slug": "thewickedcraniums",
        "logo": "https://lh3.googleusercontent.com/e5s2WcnoPKpVZ4MxRA6v1IYPcCmC_3LSDCTI-Cp_pAxu_J81v0iQUiOByr5gLdQjM083RHQZd_izPmTeB1w2P9r8YmjxHNJNRi4RRw=s120"
    },
    {
        "name": "Quantum Curated",
        "slug": "quantum-curated",
        "logo": "https://lh3.googleusercontent.com/HhL3P-qUEGPv7diJNrC_UH12BWRwJBbpLzr8VuLFMXQryauJPXT7VkKLy2GwPET8ipoUxkVeaCSpQTs0nRxiC2xBLJZ5LVKR0jXC=s120"
    },
    {
        "name": "Rollbots",
        "slug": "rollbots",
        "logo": "https://lh3.googleusercontent.com/8J_Jt_tRTlRy_1DH0FfYLOe1byhw2syxDzeKkK4NMLgPK8WGeqn3fl_QQq0HUKHP1XOBly2O2w4r6Bzxoh6kH1uGuUdBycH7fENdNQ=s120"
    },
    {
        "name": "SkuxxVerse Pass",
        "slug": "skuxxversepass",
        "logo": "https://lh3.googleusercontent.com/XwIn-1ZdQpG5KJ9TUIDDvzQxwIdk7xyYnP2077a2Y5bDs8hihErufVuVjYgJXzqnTYtlMMs0z5O-dQVJb9QFRou0gD27D0hfkGxBfg=s120"
    },
    {
        "name": "TBAC",
        "slug": "tbac",
        "logo": "https://lh3.googleusercontent.com/U2Y1etueFuIlXNdW_iC3-Jd3dMV0kFlF7hxtEbeTLfVdZMpYcR7jHA-d7k9PHBq_rP8KJwS0sRV70BhwtfZ4wIashUQAYE702-A6og=s120"
    },
    {
        "name": "Rug Radio - Genesis NFT",
        "slug": "ruggenesis-nft",
        "logo": "https://lh3.googleusercontent.com/I4Jd-ET3UY7eKLYeC7WxrmJTsyxrsXHG0Zg_Yqif0vpFhO9oA6fMdzHX6ze0g4nzSFsjP7RZSyDMPUdeuJxDCjPx9moPzPJkqeVBeco=s120"
    },
    {
        "name": "NeoTokyo Outer Identities",
        "slug": "neotokyo-outer-identities",
        "logo": "https://lh3.googleusercontent.com/NAHUqJSZROBhWJ-L8CdaJhgCwvTDcAqj92AdC_A0d5K0d_y8f1yc5YjjD4BstlEjPGkVLamgWK7QKW7VSSK5Vn2xoaqRwTcZhI7p=s120"
    },
    {
        "name": "Psychedelics Anonymous Printing Press",
        "slug": "psychedelics-anonymous-printing-press",
        "logo": "https://lh3.googleusercontent.com/tcaq06WX_YmZBknc7tSRYyAgjqP-gqsVY5xQos-dkmWtvWnOfk9PiTS8Vsz1kDjrZgDuFrRaGTJ2nVgljkHad7bYmnadglK7ZvyJ7Q=s120"
    },
    {
        "name": "Zoofrenz by Zombot Studio",
        "slug": "zoofrenznft",
        "logo": "https://lh3.googleusercontent.com/2pdrMlu5UF2H5wgkJW9Xdnm8xETZbJynokigR-Z9MHBMyYnIXmEZte-sOh6LDVfVY2kpEennWkmJNNvaHMws3jsk9GlpMoEQIR40jQ=s120"
    },
    {
        "name": "The Doggies (Snoop Dogg)",
        "slug": "snoop-dogg-doggies",
        "logo": "https://lh3.googleusercontent.com/ufumJQN9NwT0U5jh_suJP5cLRIjyE38hirVdBChQLe-ghnt1RomIARfxSNmR6fdMQC0OIgjVQHhhduUfcxiRVrfHpihrXSW-SU5J=s120"
    },
    {
        "name": "Gazers by Matt Kane",
        "slug": "gazers-by-matt-kane",
        "logo": "https://lh3.googleusercontent.com/w_yH3NZ3NxnNIJq1ObSNpRnqyn_4zzA2PN1mAH2160WxletV-6WHZyQ-N6-BI-JmrBld7_o6i7FMJoUxlptoALnI2dE5k1aqAFMj"
    },
    {
        "name": "Hero Galaxy: Heroes",
        "slug": "hero-galaxy-heroes",
        "logo": "https://lh3.googleusercontent.com/DduOoAikAyFHfZG0FNqYQl3lcdnr5s5FWRtHUuzAcantq7RDCnnROEHOH5hVzYyfxS87t5ugD7hfdfr-jb9dnyDSo2am0G29hR1ko2I=s120"
    },
    {
        "name": "btches",
        "slug": "btches",
        "logo": "https://lh3.googleusercontent.com/bbw7_cBIFFX7CjdFZto47t20sovZ6ePxsfSpMXhx2ZVYTig6TkRBi03iSzHUMt0LjwKakwucq1-x_iSAvrQP4JVmFvZnVdWI-vvUXNg=s120"
    },
    {
        "name": "Adam Bomb Squad",
        "slug": "adam-bomb-squad",
        "logo": "https://lh3.googleusercontent.com/AFLfluhz2BbvfAUDmTdZzZKvF-wETqzYFZUefPJIw9tO9uXiqftaznKxpgUobXFQqpmG5n2tgAvjbSycubZZ7E89D4K8QbzIFtGWCkY=s120"
    },
    {
        "name": "The Habibiz",
        "slug": "thehabibiz",
        "logo": "https://lh3.googleusercontent.com/CmVGfawvyc-qv-RqqhSbN_t2svxwbOvWrYsvGhH2pY8cU2f07bmOe1vAXu26ZIWoJLRn8D0ubKAhCmZ30bG7COO0fO614UQmC-W9_A=s120"
    },
    {
        "name": "Crypto Coven",
        "slug": "cryptocoven",
        "logo": "https://lh3.googleusercontent.com/E8MVasG7noxC0Fa_duhnexc2xze1PzT1jzyeaHsytOC4722C2Zeo7EhUR8-T6mSem9-4XE5ylrCtoAsceZ_lXez_kTaMufV5pfLc3Fk=s120"
    },
    {
        "name": "Rubber Duck Bath Party",
        "slug": "rubber-duck-bath-party",
        "logo": "https://lh3.googleusercontent.com/oimm-gEDjKhA6LJzKQa4Y1TuL_gsFamR6Qbl3DmuD81beEW6DNmdYcTUJ7gnbLQRbBbMB_iZ2PpBMpCZpqffTz_x9vrqrL7o-pIk5w=s120"
    },
    {
        "name": "Pudgy Penguins",
        "slug": "pudgypenguins",
        "logo": "https://lh3.googleusercontent.com/bcCd1TfusKK6wWjmshwmizmY9j7An3pp9kxopMxfIt-_I8WFnSIK-5gevOduoYK4Qpq2e3DyXgROKNfkP396W5ViEYXhxoyAZG3s_vY=s120"
    },
    {
        "name": "Goopdoods by Goopdude - Official Collection",
        "slug": "goopdoods-by-goopdude-official-collection",
        "logo": "https://lh3.googleusercontent.com/Bfx317HTqAqQQJNp9vorDeHSN3xI8ToSLadwJPCe79XZ6hpukQYZ4joRUJXykGWleLGCZTBJ6hqRS3qLgciVG8Kx5TwVjXqSD3unOg=s120"
    },
    {
        "name": "Women Unite",
        "slug": "womenunite",
        "logo": "https://lh3.googleusercontent.com/p8ivhYALfXcVdKq0mUPfsXqJIdCN8QYPyQ-ASxJY3q9X6rws4uX01uXutIp8zdVwNxWURnE0frPLgQyQ9qmrnT5-ZuNA1qE5vzwHMX8=s120"
    },
    {
        "name": "FLUF World: Thingies",
        "slug": "fluf-world-thingies",
        "logo": "https://lh3.googleusercontent.com/32sWDgOCOgBBiCcDOWJNjfn8b9uQp-5Fif9pTFEC7vVVHEoPBCpY_d0E7zFvC3geX4vt-27crDVWUZaFfSbZf4LryWmTEryX8a2Mbw=s120"
    },
    {
        "name": "CarMan_Metaverse",
        "slug": "carman-metaverse",
        "logo": "https://lh3.googleusercontent.com/HQNS6g7h42-xgR91pSFmamcGHWWyZvMizkYOOnriV4RWOHhQih4hVFtvDE0LqdFPICVEX3ElzyZjmdzurTTXeBKMrgFOd4Rv31I2kR4=s120"
    },
    {
        "name": "STAPLEVERSE - FEED CLAN - PHASE 1 of 3",
        "slug": "stapleverse-feed-clan",
        "logo": "https://lh3.googleusercontent.com/_Tm_20vy6-B5G94vMV287G7EYyNYagAAFEb2My6-PIpYYGJ0f3_nYLQU1xsHgcGUeVyDO0nmLw9kbw3nsQHmfBwsQgcSxT7YREHpYQk=s120"
    },
    {
        "name": "FLUF World: Burrows",
        "slug": "fluf-world-burrows",
        "logo": "https://lh3.googleusercontent.com/K_C58JdU7Mmk7-Nlbq36q0X9lc7gMiB-LNPcknDDXbHcefGh1jMBuwnj-w6GdZxzOo78WRIKi2eLIK1SOYyO2y3QG-WKNDtUIOXd3NY=s120"
    },
    {
        "name": "OnChainMonkey",
        "slug": "onchainmonkey",
        "logo": "https://lh3.googleusercontent.com/DiZDS55tz4x8hmupgiNQxHHq1kuts0n83RNwpytSpNJ90IKyNxRzDLMVPtCQOBd5IlEjE5nlvwXISh065KHXfOS7F5tS-Dvdh-dTMis=s120"
    },
    {
        "name": "Gray Boys",
        "slug": "grayboys",
        "logo": "https://lh3.googleusercontent.com/YyDYdthDkWfr19tpjCedtcgLdapxiTkQ2zjmPDdBUngMobX-meNlniRtWkfUrXCrk-7o5YgaD31a8nxZKQLUz3S41ImMQgoYKe04Vg=s120"
    },
    {
        "name": "EtherOrcs Allies",
        "slug": "etherorcsallies",
        "logo": "https://lh3.googleusercontent.com/EFYLDaXBisOCDOhstIEj8eHveIuOuDA9uk5xUwDzRHvF9Cghrmdj_Nlwjjgfuq9D4kzo5kMnYAMmxSVFdBPvuLxm7Veur8a_gw7aJTc=s120"
    },
    {
        "name": "Forgotten Runes Wizards Cult",
        "slug": "forgottenruneswizardscult",
        "logo": "https://lh3.googleusercontent.com/rfEd3YcRfS8Hk8YcZjD20Vrqu8XTazvnzklVN9pUcROrwhoLO8RbP0yiBQuemgGPpWMgEDGU7qO164x42GRn60Xv6aeFbdZkttzBjx8=s120"
    },
    {
        "name": "Capsule House",
        "slug": "capsulehouse",
        "logo": "https://lh3.googleusercontent.com/jzt7Uq5x6lN4PsVC9R_AU2RUujBEw1Pfe6ygJbKc4YRR9r6c8x8dFmh-hYarCcmVQfvHJMjNUKR2tN4g96Tmv-3YyxyQspva78GWZg=s120"
    },
    {
        "name": "Autoglyphs",
        "slug": "autoglyphs",
        "logo": "https://lh3.googleusercontent.com/BX7cWHwWFzo6FVh-Ql_qzFbXtADQgLLlpLOl3l9tS6hUPlgtGHgHn_E1FxiHXmzNlvig00ZEAk9uZU-tMPT2Fg=s60"
    },
    {
        "name": "Grails by PROOF Collective",
        "slug": "proof-collective-grails",
        "logo": "https://lh3.googleusercontent.com/aCqYW0G0Zh1gBfwnP-MP0Dq5qn1i5ed2eMRl5Z0X2lYjNCPZlaevbK42rI6MyFGAJOR3e5yJnADg44h_-2a-mO--lP90gdpu8IONjQ=s120"
    },
    {
        "name": "Slotie NFT",
        "slug": "slotienft",
        "logo": "https://lh3.googleusercontent.com/FDfJqrobmHVsLC6tNvjYv90xxRUPqG39zJqpjj-FpgKJJX5n23IegiO4lkqbATXRUxz2z8GGHa8qMN0cHqof1hx2xetxy6MobmKxkw=s120"
    },
    {
        "name": "Swampverse",
        "slug": "swampverseofficial",
        "logo": "https://lh3.googleusercontent.com/QQpvfbD1FjrMsEgzKdq0WjY0PvAfNvmaPtgK9tFc4pdYqlUzQEzUqMVRMN6j-QY2ULU3V5qWD1bwpHqY-Q4zz02Ow_pz_6Qc4ne1mLA=s120"
    },
    {
        "name": "Wizard Pass Official",
        "slug": "wizardpassofficial",
        "logo": "https://lh3.googleusercontent.com/S-ysIgXExdZwrN5nTb_nsTKC2m4VCh5H0lQly3zW64Df1Xy3-rpTnDdfa8CSYds8XH_cdyk6LCjL4g146vK0Oqny0smHLfbgAZNza54=s120"
    },
    {
        "name": "Wolf Game - Wool Pouch",
        "slug": "wool-pouch",
        "logo": "https://lh3.googleusercontent.com/WbsvgftKvXTeSKmE2C9L6_bVY5Y015WBj0wjcaG7mP3IEy7tX6S6xO63wX1WxvsUuLj4akqHqPHXzq5fj69GPnViZbaLUOQ5N_NJXZE=s120"
    },
    {
        "name": "Creature World",
        "slug": "creatureworld",
        "logo": "https://lh3.googleusercontent.com/PkMdNUr4UsEq5RLvAm721Ja5QGAijunAVDMz0hfRuyHQn853TRQzKL4aTFBgWPoy-nWlYA3hXzAm7flCmKn7Z9p2HN0GJxAtAixB4g=s120"
    },
    {
        "name": "merge.",
        "slug": "m",
        "logo": "https://lh3.googleusercontent.com/kkm2fXYCLfD-7hZbfb-g6xdOZiuzCJcSR5-sOAl4Dz0tBOw9hLdgeiayPeiyuEjnZ72OK091c0M7AthiBALQ5rqF7o51icWoskFF=s120"
    },
    {
        "name": "Founder Bricks",
        "slug": "founderbricks",
        "logo": "https://lh3.googleusercontent.com/C1n1V8F8H2tmMVke_oHXadJ5S-YzLukKkcmHMSzh0ZhBvRtj1xo1TTz7KqMSuT_mqq6-_fp7BAZ5BRk2KZHOn_nIbC711oX3jv2YGw=s120"
    },
    {
        "name": "Damien Hirst - The Currency",
        "slug": "thecurrency",
        "logo": "https://lh3.googleusercontent.com/Q3G1qQKz97idjTwIJB9Enz3D4LDvL_DbwnHCP9YgVjTL4TLh7tAWUwGLPExniqGlfgLXRX-bOHRgGOb7oNOAHoeQWz2-CPLwDuaHRw=s120"
    },
    {
        "name": "the sunnies collection",
        "slug": "thesunniesnft",
        "logo": "https://lh3.googleusercontent.com/yM81xQ27XywCZu_8EAufsAgh3KueQRJ3zwVHhfqizQxq96-L6w88GCn4zXqYLrucWmKFpVvfvA6fpSBhjW0RgS3S4J5vkNLzl6Uj9So=s120"
    },
    {
        "name": "Wolf Game - Migrated",
        "slug": "wolf-game-migrated",
        "logo": "https://lh3.googleusercontent.com/Jt0pP1TzhfUrG52l_Ffe0I8KcPWmaUjk14W3R1UuuHM4BJfqS4jBkfv9-euuMQRLxNS44PvV3V_ZtMgkAhS4bBkK8FeFW2qDh-TM6A=s120"
    },
    {
        "name": "Nouns",
        "slug": "nouns",
        "logo": "https://lh3.googleusercontent.com/vfYB4RarIqixy2-wyfP4lIdK6fsOT8uNrmKxvYCJdjdRwAMj2ZjC2zTSxL-YKky0s-4Pb6eML7ze3Ouj54HrpUlfSWx52xF_ZK2TYw=s120"
    },
    {
        "name": "VOX Collectibles",
        "slug": "collectvox",
        "logo": "https://lh3.googleusercontent.com/2QUNq1tqWDePg7jCqM7usnLNukDRTUc33VgVLkBYry4VKkess3MgRGw5fpz3qD5i2shfuyWdJH8Z8lWWyn39YcfeOMz7SjScZXnL=s120"
    },
    {
        "name": "The Squishiverse NFT",
        "slug": "the-squishiverse",
        "logo": "https://lh3.googleusercontent.com/d7dS9_HCsKcOej8qlW6cmO8isfgRs3wpJGBznyka5UiEIqPhb5Ut9LbUcOTgIyhsqKvsJrNLF2t30lFUkTXDio-VFwqKbRpp_D11=s120"
    },
    {
        "name": "ASM AIFA Genesis",
        "slug": "asm-aifa-genesis",
        "logo": "https://lh3.googleusercontent.com/1zBGv7flcBW0Kh8lRdJlZxmiP6F7hPel2XHVFGJDytrz4IBveQPR7B6DSrGMSkxCw1LErUWYVAOPUIvgVDaUOzEcaoEpx9BOpOE98NE=s120"
    },
    {
        "name": "SYLTARE, Dawn of East",
        "slug": "syltare-dawn-of-east",
        "logo": "https://lh3.googleusercontent.com/sWsPZIov5KKOPsEJkt2OmwxGEkyQH65YDrZhqaX7I-Ayj-XQRNhdxyXwQniyi0GplXl_CHokEsgDRsGSBPD3P-Efg25_FsTzprq2Yw=s120"
    },
    {
        "name": "XenoInfinity",
        "slug": "xenoinfinity",
        "logo": "https://lh3.googleusercontent.com/JySODCBHQME7VhjOixZ4XzdJ6eIY8BKDW1_Rgenj_6VPMlvByawlM1rqAQ3sidBol4syKWB16Fggq4i_fbBYjCdt3OErE8tFgEEFWQ=s120"
    },
    {
        "name": "Mirandus",
        "slug": "mirandus",
        "logo": "https://lh3.googleusercontent.com/zH2rP3EBA9cpYdlxCkQhLAiJzqyoIIkQ6ex5YkbRczElE6H4-suVezS7gOkM143PFcns_WYvN0qwWKF2eJAL57t_0COOK5VGP5Y5Bw=s120"
    },
    {
        "name": "DAPE: Genesis",
        "slug": "dape-nft-activated",
        "logo": "https://lh3.googleusercontent.com/HYOSmgUMy2-L1oyzdDpfyJ6mluwAgUG9LaQ-QwcA7dO6UjbxVwudWfNmat48ruxBF3Ub8U_b1yma2Xuu4BCCcO0ofJMRdCeFKNTe8g=s120"
    },
    {
        "name": "BFF Friendship Bracelets",
        "slug": "bff-friendship-bracelets",
        "logo": "https://lh3.googleusercontent.com/9LK52eD3wmwzsk2uuNr1Bl9AZNe89ixNgQzhxIEKodUOcf2vLdJv9DAEpC25aIiCfeUFdWTugdUwGyHuHHUKQpvCz3AA8ZmMex00=s120"
    },
    {
        "name": "MetaHero Universe: Generative Identities",
        "slug": "metahero-generative",
        "logo": "https://lh3.googleusercontent.com/cyJeHA0Oo-KveczexdimAxDHTCtmvApkn2SWFhq_QmU4CotxW1uCRp-rBydovapL65kG5geRCrGZts74o3eZS9VONQ6549A4DIMCjg=s120"
    },
    {
        "name": "Cereal Club",
        "slug": "cerealclub",
        "logo": "https://lh3.googleusercontent.com/Eyu2IoO2VhggREPjTKlNpcD8fnbDRlZo2NSIpjO0MNLGhW7mnLbgmnBKJyyNTab6KGLQCBpBKlcyA6aqYEmOQJ43qSB8paUz9oYuwEc=s120"
    },
    {
        "name": "Farm Land by Pixels",
        "slug": "pixels-farm",
        "logo": "https://lh3.googleusercontent.com/W3vxS7fioumIQy8-t9As7h8a8uxufNnLRbLVl3PTQ32eBW8papu5C0AeBhtM_fvsFnomdn9WQLJVBPhQOiwo7z7oV1c8oYQR_DRe=s120"
    },
    {
        "name": "Realms (for Adventurers)",
        "slug": "lootrealms",
        "logo": "https://lh3.googleusercontent.com/kHRyhl24FEUgv0Vs6AsS4jg-qZCZOiD9k5M5T7e7cvRcERcgXMQrXeCy8IZyBeOvgyMZAEGzTJPFfpR0QqqqfYeHD9BXnNnoLmlV=s120"
    },
    {
        "name": "SlimHoods",
        "slug": "slimhoods",
        "logo": "https://lh3.googleusercontent.com/_PXs9iFB8iSm40EfmsjJ_6VHZ7eescWHfZ_PVhinl8AFj26BjTh38iDW1Sr3bR3MU8wsTFD8tbXtaFVZPMRa9XNH-sucajGHNB2gkw=s120"
    },
    {
        "name": "ChinaChic NFT",
        "slug": "chinachic",
        "logo": "https://lh3.googleusercontent.com/JY3Fs2ZLt951St-2DB3NRGpfllS4GrjoefJgrv_RzWd-Yt7nPE6TthwwC1xqejTidu6y2CqxS8v_ONPdFRAjXZE2f26M9ft-VPE94aY=s120"
    },
    {
        "name": "KPOPCTzen_Official",
        "slug": "kpopctzen-official",
        "logo": "https://lh3.googleusercontent.com/ceU5wK5QkYmHYxDaV2e4L3bWyeUQX-lLwa4Y1hA4WDcUVtkTxvLb_nVUnoW0ZozrZhLNPQKoD8jRV4HXpZE19qQDuNVGxXSdMFCJYA=s120"
    },
    {
        "name": "Tasty Bones XYZ",
        "slug": "tastybonesxyz",
        "logo": "https://lh3.googleusercontent.com/pFx2k4GbEd30FbIPOGagqG646QGUk-0Ns8n6kSgozxY4aJSI2AYm1a_Acvu0jngeIx7hSeZeZTHLKUiUEt9qXfE-DWRmJyZJQ_AnKA=s120"
    },
    {
        "name": "AzukiApeSocialClub",
        "slug": "azukiapesocialclub",
        "logo": "https://lh3.googleusercontent.com/MQ-0MQbzGwwbR5lb2EBvBlPJ2OuaIQHTa8JHnvsSn-V5AI0Iw9QngktmcqIDP6Hsib4EOVcVI4ZjPQjBrvhZzMlskv8QAYIl89nE2Q=s120"
    },
    {
        "name": "Pixelmon - Generation 1",
        "slug": "pixelmongen1",
        "logo": "https://lh3.googleusercontent.com/hqDSpTYhSy--C3l8Q0yKGGCs1h9DSwlqvNGK3WXh3QS-ce-VYWOfo-F8unGDdGhhJA6v8Vqw6mYyMr8MPecCEYHVAKXh4tn24THo=s120"
    },
    {
        "name": "DentedFeelsNFT",
        "slug": "dentedfeelsnft",
        "logo": "https://lh3.googleusercontent.com/0E-6rL-B-dLFiu-9tipTI7zXaaK0DHEQ4699BVC0nMQ9XRIqgeJ7XrhER-bXYSEsSIex-5CW2fr7bUaCFV-978YiWABy8nKYrxOp=s120"
    },
    {
        "name": "Gutter Pigeons",
        "slug": "gutterpigeons",
        "logo": "https://lh3.googleusercontent.com/UoABiu1ydkR50jb_G2BPJO1I9dQ30o6DzRY2RCPoo-etNtb77FRj2WxoxG_sYL6C6I5qiu88g6BpAX6GfIGjuFPcZQ_beA_M8TWpQDM=s120"
    },
    {
        "name": "TCG Dragon Cave Club",
        "slug": "tcg-world-dragons",
        "logo": "https://lh3.googleusercontent.com/nW0cDGnA-HXsBaBQNBXICu-Xu0tHYpxgGS6BMxe92KqxdZknF7JB3KuDaoCkEklX3qzhiJ3XWzVMDc-_vMVfMV7vQjH08Gd4Cioxvg=s120"
    },
    {
        "name": "Idols NFT",
        "slug": "idolsnft",
        "logo": "https://lh3.googleusercontent.com/pqfL3E2yMt0z7cm3ArCIUgQSLu47hF6a14m3zPSmYH_Av62yADWgT8DUUzQPUsoMo6QR43q_MTey4mFTO7FM9XokvRh0z3yYn8euGA=s120"
    },
    {
        "name": "EtherOrcs Genesis",
        "slug": "ether-orcs",
        "logo": "https://lh3.googleusercontent.com/Rqt9abO3ajmblpelJjiWpmoNaIUKrHAJ4TMVicJW_ycx23UeTQgkOQKmqzkhj27k7fbyG0eMZtPpukuNkudv8HCrAxtghqgMkv3wwJ0=s120"
    },
    {
        "name": "Apostles: Genesis",
        "slug": "apostles-genesis",
        "logo": "https://lh3.googleusercontent.com/KQ_Jm2nXdNAfDvMHxzoZ-1X7v5hGUFbWjAZpR-OTZsHuJy4W8tMkc07gULnRahgZytYh8v6mRMRgQ0q_05xGS2Qqub_7WTxJKBu2RGc=s120"
    },
    {
        "name": "Mad Meerkat Burrow",
        "slug": "mad-meerkat-burrow",
        "logo": "https://lh3.googleusercontent.com/MD4kvKomZSB0XHqfAbvpuhxijFd_ZQ_7M-ALSdBf9bPP5ETRColARlG2C9MNyV0K5G9ym5OlKVuD6uOA_NFa5k_vL70WKX_55Ns6mQ=s120"
    },
    {
        "name": "Jenkins the Valet: The Writer's Room",
        "slug": "jenkins-the-valet",
        "logo": "https://lh3.googleusercontent.com/N0upGYKkQfLf8gTLaNQyECdXWRyugKRyx9VVHnfA1JzHMKov2WuRM44djsWJJe9-Y11ZEgiKjsLpACqI8xMUa_0CtLkAqg75BymNmUU=s120"
    },
    {
        "name": "Cyber Snails Official",
        "slug": "cyber-snails-official",
        "logo": "https://lh3.googleusercontent.com/F4BwR86K9uIKZCITppYN_yJKsi7YLemZq_oMawQMp3vt1g5IsbuVO-ke-A4ALCO5ugUfh4K4rh_Jzw-mMpbuqP4KG6ziNOjcyHOAxQ=s120"
    },
    {
        "name": "Grandpa Ape Country Club",
        "slug": "grandpaapecountryclub",
        "logo": "https://lh3.googleusercontent.com/n9HKrkgouw_PsI79-XDrbfeomqcpVDXwDuJTKykWQjxVIOitQeDongPHwap1SbsFb_X0mVyoNGzztJPIV776N0kmnFkApZa-JBxyMA=s120"
    },
    {
        "name": "RTFKT PodX",
        "slug": "rtfkt-podx",
        "logo": "https://lh3.googleusercontent.com/NEt4bwVmIhlQ60QPEXeDMF2-4ExtSt3r0EKAJt-LKF08TCGZGDVWH9M7H5b0-dF3dmrcgXbUola4ZB-2A4VE23Be8qT9vTWPJAELnA=s120"
    },
    {
        "name": "CryptoMories",
        "slug": "cryptomories",
        "logo": "https://lh3.googleusercontent.com/vb1frYDXLe4AHtDQORgr1O1EODOkq31xePpKvgsN3uE5wopK0M8rBYECcDbvTkOpx5Y-9x1TQIP61ae4wI9lq9qwe-wdSUsXywlw=s120"
    },
    {
        "name": "Smilesssvrs ::)",
        "slug": "smilesssvrs",
        "logo": "https://lh3.googleusercontent.com/hbmc3V8YlN0_tslH9qjQRbj_dZpNzInzx-uY0t5LgQY-lrVBd9Rgv_KMnlxyAKE5ZTgoZhZYW3e3v2bZ2kOUYTKRdlFnfnErqs1EWHA=s120"
    },
    {
        "name": "CryptoSkulls",
        "slug": "cryptoskulls",
        "logo": "https://lh3.googleusercontent.com/mxXgfafTwxpLtvGStBGIX5G8W-AE-dfKTBh8E3h92cIKrXiIb8OmNP7hRA33wFGSDbut0MI84PQpnk3LGOe4hC2jkP-eEjejwYWK=s120"
    },
    {
        "name": "Sneaky Vampire Syndicate",
        "slug": "sneaky-vampire-syndicate",
        "logo": "https://lh3.googleusercontent.com/--7LUBCbLndUydYh3_oeDZD5MMUIDtXyJD-EHy01qkMbrCTTFl9XMLyLsFfcHa7TeN6wR72R9WEnHgDJHjGTMmUaUlJWWZOa1ZsYLQ=s120"
    },
    {
        "name": "PhantaBear",
        "slug": "phantabear",
        "logo": "https://lh3.googleusercontent.com/1wTnxFx6paNeV1lv_ht10OFpDucUhg-fL6IZbPrai3Jf_3pHS5dSazhpU_UBn2BVQBUEffYAeoo2iVbCu9LPeUDhmwZwt_7J4xpdrQ=s120"
    },
    {
        "name": "Champs Only",
        "slug": "champsonly",
        "logo": "https://lh3.googleusercontent.com/WefQsG_1nj9NwyJSFmZ-EYPJXukZPC3fE2u7N1wAWggChRmHXS69AcQHgN-tAajO7OG_vIKTZ8wrMZqcw7abz9fZluDPhUo1i_6Vxg=s120"
    },
    {
        "name": "Metaverse Psychedelics Anonymous Pass",
        "slug": "metaverse-psychedelics-anonymous-pass",
        "logo": "https://lh3.googleusercontent.com/9VndAx-5SvVdamB8KvABGcw2bdXMdeyEYdhHJ22WMV98C2yS85SDT5rnBtT0zOxVjeJ6KBz2fXKXcYSIXeOc7aGiU4i0Rx9IwaMfO9o=s120"
    },
    {
        "name": "MetaHero Universe: United Planets",
        "slug": "unitedplanets",
        "logo": "https://lh3.googleusercontent.com/cyJeHA0Oo-KveczexdimAxDHTCtmvApkn2SWFhq_QmU4CotxW1uCRp-rBydovapL65kG5geRCrGZts74o3eZS9VONQ6549A4DIMCjg=s120"
    },
    {
        "name": "PUNKS Comic",
        "slug": "punks-comic",
        "logo": "https://lh3.googleusercontent.com/ejZNFaWsdUnmzbafD0TRf0RoIX9NiyaCRii_j7PhCnYa8CBW2SzGEjn3RDg4k3gYvFY8T5_cosCj7ozT69zELByZ5OvqoaWCi1LrJG0=s120"
    },
    {
        "name": "Wave Catchers Official",
        "slug": "wavecatchersofficial",
        "logo": "https://lh3.googleusercontent.com/b87V8THu0p3SPENp9bU2V3_BSuPyZs7IajR3WUjYix85Hjjc1_VavhK57PUn_HMNzatqMQ-EFLEssRYnz-mOq4Fr7jrHRVK8GagF5Q=s120"
    },
    {
        "name": "Flyfish Club",
        "slug": "flyfish-club",
        "logo": "https://lh3.googleusercontent.com/3mPdo7sj92tMMNcr8-t51cFsTPVJuEZaxkL8Wx_1rPo5mHIqdRmCwC33u6bdLSR7y3TwN2mS4rBCPffsDTdtDGebDWJ-cG2WD-Ha4g=s120"
    },
    {
        "name": "STAPLEVERSE - HOOD SQUAD - PHASE 2 of 3",
        "slug": "stapleverse-hood-squad",
        "logo": "https://lh3.googleusercontent.com/JnnMQtzi-YZWz-u6ED3O20FGPg5C6ePCuERRtHAkVSomWrPga23r9FgYaXfheutSD5lc9bE2elyTLI71iMjHvVZuK_5mv-TQIaLY1A=s120"
    },
    {
        "name": "Sappy Seals",
        "slug": "sappy-seals",
        "logo": "https://lh3.googleusercontent.com/c_wASW_EH06TmUJTAfZ9HYAx8rhKbu3SbOqpHHp0OistKOTJcPDjhSBg3S6OM3HG9ivBpVVtSnKkNJKilZQCc_8V1kTG7JQDSzmWoQ=s120"
    },
    {
        "name": "Satoshi Runners Official",
        "slug": "satoshirunnersofficial",
        "logo": "https://lh3.googleusercontent.com/LezCcPxAQZx3Y9dYOx3eNhrnyn5WnUzVoJRxi2TNU5ApcvjsYjpEh3SOrAwOWJO8d7134yggmL0nMCq-MhIQaW9aY161sA1Sv1mu=s120"
    },
    {
        "name": "Noodles (Official)",
        "slug": "noodlesnft-official",
        "logo": "https://lh3.googleusercontent.com/8vTyYTGKjVBrFj_eJXpVTp7riIkXvidRcGtFSecKKQlX3Vg5E8et9EyVadDrox8zD-m3pt3-RgOoEbxuKyKh3n6IPlm8CKwdv5h5bRc=s120"
    },
    {
        "name": "Wolf Game - Farmer",
        "slug": "wolf-game-farmer",
        "logo": "https://lh3.googleusercontent.com/fDDp6C86RU2p6-scVtv-oJQyd9majYo8y9W9to0_Sx_uW0X9c4iGw8jXtAcl5ljT8HCzyNFvzTFaOatyxl-tSTQRo_RKbhqeFVhg5eA=s120"
    },
    {
        "name": "Wolf Game - Genesis Land",
        "slug": "wolf-game-land",
        "logo": "https://lh3.googleusercontent.com/MNZ_7zfZRZ-AFrMOPh7Bylc7IkPr-RvGjSGj_YKSrkYX_QKTzQFUvqs4UKx_FTsY1ioGOHYJjRTkiIDuyShcT1li69EilYucMeqhKSY=s120"
    },
    {
        "name": "Zipcy's SuperNormal",
        "slug": "supernormalbyzipcy",
        "logo": "https://lh3.googleusercontent.com/cZ0lurTxSFfA6lZ_5670kU-GB_okeuTv1QSxCWWF_A0goQOGnRxZvVIOnHl3Rkfeqq-Gdmn0CZbcR7_N_UYM00gJD3w7nCwEU0Ns8yY=s120"
    },
    {
        "name": "The Phunky Fungi",
        "slug": "the-phunky-fungi",
        "logo": "https://lh3.googleusercontent.com/tLFyi4gh8M4b1YQLyf12u6o2E20PDCCAayHFC3wedlr5tVAu-8UWH2mGuibTQ9JtCTKrvZHmgiY_Eszi3JeePIJdhumz6x52kOIYMw=s120"
    },
    {
        "name": "InternetFrens",
        "slug": "internetfrens",
        "logo": "https://lh3.googleusercontent.com/crO15U5D7v1i8ijys1BJo1WGCh1Sz1v0fr0rJ413Qp0fayIKikgE99KE6AJxgVw1nJ1WoCFTqlISQ9cOuSyraSpuv7JxpLTWFQ8I=s120"
    },
    {
        "name": "T-O-S The Other Side",
        "slug": "tos-theotherside",
        "logo": "https://lh3.googleusercontent.com/A77NOhBXYcgBIGygV2SqvYNcJnjgJ8q64GKl2Zm5WeU9xrmZfLq0uzb6gHkMHRf01l19_OVi0d3o9S5DwY4hvZqdgQi7_YjNShbtrGk=s120"
    },
    {
        "name": "BYOLand",
        "slug": "byoland",
        "logo": "https://lh3.googleusercontent.com/KbV7LSUwQfKg05RPpQsKy6oMBDyYCLIk6B_oeDkCWY6aGOzLCH2dBps5-eQOsyyVsqZwlXJ0r48HNRhdGCJPqazVZOw6btBoQnqg=s120"
    },
    {
        "name": "Sunmiya Club Official",
        "slug": "sunmiya-club-official",
        "logo": "https://lh3.googleusercontent.com/f4gveNvJbpfeTVBrUHSMr5U9QlKPu-9yqzfg3gwe1dZST1iJra-5J-g1Tps5HttiSRQvcnR8wujMh1nqHWxg7E-yvmkz-dAjq7vR=s120"
    },
    {
        "name": "Crypto Unicorns Land Market",
        "slug": "crypto-unicorns-land-market",
        "logo": "https://lh3.googleusercontent.com/jLi7QyLxZLXAeAqtKuecs5ebhGpDwWG6iI_EsfeXanpCCjCnDtqW9Db4b2ZAO0poqfIgBuGdYmyJCFL-c9wVJFIjJUZ2Lmna13kTDg=s120"
    },
    {
        "name": "Sins Finance Nodes",
        "slug": "sins-finance",
        "logo": "https://lh3.googleusercontent.com/iYroQfGXeOtPVWS7g5Tq6nYbS923dBX68GjzwWpT7DZoIINSrYykOUMtXWPW3pIF8oDWSTypjghcRW3wB0ZZiHVVR75RlsNGRVmo9rU=s120"
    },
    {
        "name": "Beanbag Frens",
        "slug": "beanbagfrens-nft",
        "logo": "https://lh3.googleusercontent.com/FZB-rEYu4oyWnpLTYhZBQcpp3Uej8QMkwZRp0CWLtMkmN3lbM8hf0luHgJVUTODbKEntWb5oiyqH_tjY9cBGFLR4J0DMv7VAyRE8CA=s120"
    },
    {
        "name": "CartoonsNFT",
        "slug": "cartoonsnft",
        "logo": "https://lh3.googleusercontent.com/VyVQ32g-wP3_k6rYQFZSoP7pf37cSw_9Yvr6L_gGZxx5zZTjVJyRxzwyVUakiKLRu9KFZnBjgrOWsH2rQ8zt4QyzplRirqUiIZ9b=s120"
    },
    {
        "name": "Meta Adventure Official",
        "slug": "meta-adventure-official",
        "logo": "https://lh3.googleusercontent.com/9U41In_-8zlpJIoXwUmk9y6kqZqPtYK9acBMjCxj25c5mO4AYU-ASkXaX40aC19DzbuzWUusYQbbgwbshTTqIUtM4Ttah-FXjG0AmQ=s120"
    },
    {
        "name": "SupDucks",
        "slug": "supducks",
        "logo": "https://lh3.googleusercontent.com/WNd3NNCiOAkD3rUNCau9qXDPQsnH3ZA8PcDMhlsfLnK6J1vSNpJnPFCjA-_l03LbCxwAYC1Mj8IcRQch7YMTDLnn_c-jAQ03RWRdEw=s120"
    },
    {
        "name": "Kaiju Mutants NFT",
        "slug": "kaijumutant",
        "logo": "https://lh3.googleusercontent.com/hVU2KWNOdldZfapIvkC3qb1D_nhO4LjqNkT4XvLCBKKQoFVIbMw5r22iQCVA4Mz6PVIMmf81feBtUiaPvaNB3TfEhgD5UnBFJtnT8JI=s120"
    },
    {
        "name": "Unikong Official",
        "slug": "unikongofficial",
        "logo": "https://lh3.googleusercontent.com/_f2TUe4TD5YI3UKeU0AgQgCSirNUXRFfkn0YTLWMa7fOM_POJYflOTSLCHY9su-2a-oBf-8gvXhRPam1Te5TodiA8acqIIGdLkPwyA=s120"
    },
    {
        "name": "ZED RUN",
        "slug": "zed-run-official",
        "logo": "https://lh3.googleusercontent.com/tgpgbT3OwxX4REASLdyafzCWQ5EhOtgSiIlhI3am3aZ_mYPS0WbM9Z4F6hOhb0D-AKqhHlFg6BNBquchQy-_bwY=s120"
    },
    {
        "name": "Degen Pass Genesis",
        "slug": "degenpass",
        "logo": "https://lh3.googleusercontent.com/eY9KLud7wPaxyvUAN-ltwxn9Ofqk7hg-VTbeUvZNkqbHUkZGX62L0BSOypcMupQD5fucClSxofqNIio8ilbShMbYMyXnIPvKC4Gf=s120"
    },
    {
        "name": "Gutter Rats",
        "slug": "gutterrats",
        "logo": "https://lh3.googleusercontent.com/Xz4jA8j-PDDJK_THGjYhEire5ZsE4dXKZSMqxW5Dut0H-mgNiEasEm6-C4EnwVhZ5J9WHqBG9zT14gF7XnlGjMBqzhP66UmZq7V_AQ=s120"
    },
    {
        "name": "Blitmap",
        "slug": "blitmap",
        "logo": "https://lh3.googleusercontent.com/N61iOqLx-qWAjIqVet9L0Fx-tWrgr_Jn6hdlyke23nnRdkRqDeE8Htz_BVjlOJ7KxEfB3KyujldKWnQg0bDao-Y1zyEJnogKtvaf=s120"
    },
    {
        "name": "Internet Game Token",
        "slug": "internet-game-token",
        "logo": "https://lh3.googleusercontent.com/iccdrHt3mIQ2EyfRw2Li63Yd6enslBl39FT-zC-iNhqzl8WSYT8XrRIXNhdU9eREiQ5Bu407d5z3aKNtCxso8hpuGWNptEaR-s4W=s120"
    },
    {
        "name": "Rebel Bots",
        "slug": "rebelbots",
        "logo": "https://lh3.googleusercontent.com/omqoY9eXusai_i9j0lZ3icG1U7bY9Ec7wxEhk7srEDZI2DDW3xbNnejxxHHhYnK8mHE_EK7fQhBteU-K28J4PwQzNju2L6FvEyKriQ=s120"
    },
    {
        "name": "Stranger EggZ",
        "slug": "stranger-eggz",
        "logo": "https://lh3.googleusercontent.com/hOijhVf7N9Cr9wI1taIjwum3PQmmJDWzJRZWqTj23mKFFHJ17DUielT4KQ1U1_Derqrq1vNJWNQ_hb5OkG8gRZ3aLLFFKIKdSbhJr2w=s120"
    },
    {
        "name": "Art Blocks Factory",
        "slug": "art-blocks-factory",
        "logo": "https://lh3.googleusercontent.com/GwnosrkaneKGEkWySxvTSzZ5bEUjWkRuQzLSNfrpgy2-gxYjoR3m5PohLT9Fzy0p1tohajZ1g-LFfF_ZLnS1GqlPNHPUaKUbDhbf=s120"
    },
    {
        "name": "LOSTPOETS",
        "slug": "lostpoets",
        "logo": "https://lh3.googleusercontent.com/cGKkMxKQ-7J0A4mZvcPqr2LKvGqIVsXjzGqpfxRNb4yVr-zTycPJ0kznkwKqDyUTg--A32oW8cI32BQBl6hrbM-frn1__o544ECpCg=s120"
    },
    {
        "name": "Clay Friends",
        "slug": "clayfriends",
        "logo": "https://lh3.googleusercontent.com/4yq8GQqa4rYyiq51ntFtpZ3cRT8I-GmEbP3aQn5O0RPdfbuI0pMIqp2proFWeMo3pzdegKR3oX1F8CSUUsMEjVoUIqmTrJze-BkA3A=s120"
    },
    {
        "name": "Terraforms by Mathcastles",
        "slug": "terraforms",
        "logo": "https://lh3.googleusercontent.com/5w8DDjrDhTKLfe-r6erP3yF1m9nfFi-d4b_WbArv17vqatPg0ZwTVrnOGiry3YhQCS00gfxzOEDSbW2Zr4soCTZ0A-u0TZ3Xjln4qA=s120"
    },
    {
        "name": "Psychedelics Anonymous Component 1",
        "slug": "psychedelics-anonymous-component-1",
        "logo": "https://lh3.googleusercontent.com/9VndAx-5SvVdamB8KvABGcw2bdXMdeyEYdhHJ22WMV98C2yS85SDT5rnBtT0zOxVjeJ6KBz2fXKXcYSIXeOc7aGiU4i0Rx9IwaMfO9o=s120"
    },
    {
        "name": "My Curio Cards",
        "slug": "curiocardswrapper",
        "logo": "https://lh3.googleusercontent.com/xNW1W9O2CYUNGS2GeHqv9yHw-wLdSb9uVoc51TL5GSp8yvC2en45pqp5zYFHhRGHZpgHJdagD2QELXwpu01frltG7Nl055aVqDTDSg=s120"
    },
    {
        "name": "Crypto Unicorns Shadowcorns",
        "slug": "crypto-unicorns-shadowcorns",
        "logo": "https://lh3.googleusercontent.com/EorjfSP6_15XdWcMLzJqHTC-y1aadmGeL_jydEtpL4aTj--lUdQ1GWy_bdvb8PN6Dmf46rXOZxgYQkbDVEoNnjHrWKO9HUdc39RdPkA=s120"
    },
    {
        "name": "Prime Ape Planet PAP",
        "slug": "primeapeplanetpap",
        "logo": "https://lh3.googleusercontent.com/Elp_bWKH4be7BFwUbM84JhRgggPwP1XM1akHPJsTksP88BJoY9NWt2ECMZpY-rI3l9wrNUFdekGVC7-6i4vn4Al4f9iQt4JgZ6Mgxw=s120"
    },
    {
        "name": "MoonCats",
        "slug": "acclimatedmooncats",
        "logo": "https://lh3.googleusercontent.com/RwIPOH0RftzOWtyC0WBnMx2X4_4Xqeimk5iT6I1xNQKSuRTVNwBY0PcA6MkCiX2dVP5U_MDbseAq3LoaJ7BY_xyTfLpeUsGtt2-WTA=s120"
    },
    {
        "name": "PROOF Collective",
        "slug": "proof-collective",
        "logo": "https://lh3.googleusercontent.com/ipAyQg6Xlgvwxma0Qp0a1gqdsZepRvHR4ZLsPN3mOFvIR1aznNiWFEgba2gcVqQwJS5BoJilLPrA2DRq2DVOnwKc3tDovmEdjR4qb-0=s120"
    },
    {
        "name": "Feline Fiendz NFT",
        "slug": "felinefiendznft",
        "logo": "https://lh3.googleusercontent.com/5uj0X--87WO060UfkLyVF3aGlz-WxKIlkrhUvCM6IypB32V8Y1PgXqNu6LgMNt72B30GmVmAi8M6t6dZ327AxhZjGgc0VsrLFixCjA=s120"
    },
    {
        "name": "Psychedelics Anonymous Component 2",
        "slug": "psychedelics-anonymous-component-two",
        "logo": "https://lh3.googleusercontent.com/9VndAx-5SvVdamB8KvABGcw2bdXMdeyEYdhHJ22WMV98C2yS85SDT5rnBtT0zOxVjeJ6KBz2fXKXcYSIXeOc7aGiU4i0Rx9IwaMfO9o=s120"
    },
    {
        "name": "Pixl Pets - Genesis Collection",
        "slug": "pixl-pets-genesis",
        "logo": "https://lh3.googleusercontent.com/8NDyUGiRJUFFs62PCW6XDubAbX-UPDT7oStqmhgZSpbO1SZ4Z0wG8yJgAmrquKo6NNiKBRW-1A2HW3SWfdk2P5fLkJAz_5gutmFyv0o=s120"
    },
    {
        "name": "The Doge Pound",
        "slug": "the-doge-pound",
        "logo": "https://lh3.googleusercontent.com/uNkBbVvg7wyRjspsooFtYYbRHFHFISntxwijLRskjGhplP8A3Iz_4ApLU_yLp9BW-Ai0yUWC50A138IGUkII55QWRT7g12qmSRTlbA=s120"
    },
    {
        "name": "HOWLERZ",
        "slug": "howlerz",
        "logo": "https://lh3.googleusercontent.com/x6hvOIWMQoPlIGwDAhpZCm4NesFGCwtrF6tv7UNu6vDasx6WxqW80WZ7w_vvMd6rVil6orhfeBmCk9GDGVUCYfP78gzFDb30usxWOA=s120"
    },
    {
        "name": "Genesis Critterz",
        "slug": "critterznft",
        "logo": "https://lh3.googleusercontent.com/7x44eOJS6RMc4cumPwCYIjGZFIyEv6dGe01ncoj7ypeyWM35tznzuH9fYIdTvhGRqTZLJGaPnPp1BAPsV8S3W2zBa6YAzwQ_JonTcQ=s120"
    },
    {
        "name": "BEEPLE - SPRING/SUMMER COLLECTION 2021",
        "slug": "beeple-spring-collection",
        "logo": "https://lh3.googleusercontent.com/N7GezCIhjCnlzyklOSmlXGrWt5M3qpGTMGj17Vf-q0G0e7ivRYSzrKHUuhvSdp1OlTWeHR3d21hQhScm1_vS1aE9F_KglouuH70wdg=s120"
    },
    {
        "name": "Deadfrenz Collection",
        "slug": "deadfrenz-collection",
        "logo": "https://lh3.googleusercontent.com/d2JT6DRWuuNfOEaMebDoCM3tUh-OBk6zfLUfNb9lwJ3dSGJQolGxQSStM_c4fn4p2eirPcDQ8aQEqC6La7UpBh9uyFXzKh36BUcF=s120"
    },
    {
        "name": "BYOPill",
        "slug": "byopill",
        "logo": "https://lh3.googleusercontent.com/zhCC9jZrj9037Ex59PZBS1ABu8wAhWc-K-VkaTN5QRM2lfi-8e2e93VJvXO6iXZlbGzxpNQ4TRAK9aNrN61E8wp5C7zA5qjWyozm3w=s120"
    },
    {
        "name": "NeoTokyo Citizens",
        "slug": "neotokyo-citizens",
        "logo": "https://lh3.googleusercontent.com/NAHUqJSZROBhWJ-L8CdaJhgCwvTDcAqj92AdC_A0d5K0d_y8f1yc5YjjD4BstlEjPGkVLamgWK7QKW7VSSK5Vn2xoaqRwTcZhI7p=s120"
    },
    {
        "name": "Expandables Official",
        "slug": "expandables-official",
        "logo": "https://lh3.googleusercontent.com/s2fOROm0K77YTMbiIbkP8Z-5p7GAo9EAFNFTzOK9lBA7iqeXdybtDSX2M-DD4n04xJV79recKC0-aslUYqNrZX2P1bq9rqbnbMDZzdQ=s120"
    },
    {
        "name": "DarkEchelon",
        "slug": "darkechelon",
        "logo": "https://lh3.googleusercontent.com/HWVEruW0loUEng2_lvBgZJNOsVdSpVoTPPbdILWJcAQmEi520hzPi3wqNWihhMrgkJjea9tEc-v0gdA1hUWRoh_QQd6mAhhgX2NQYA=s120"
    },
    {
        "name": "CareBears Official",
        "slug": "carebears",
        "logo": "https://lh3.googleusercontent.com/FhIOwD8OIUuAOF7il7aaHqXENUEbuFQMT93inrDUumK5_Y5xj-B9sYp5sUyF7j1u26DPyIUKRdrlKLilsAd-u5RxXjvntUNlq2_4=s120"
    },
    {
        "name": "Sherbet NFTs",
        "slug": "playsherbet",
        "logo": "https://lh3.googleusercontent.com/SYrlJtatQ1RhDE9U1AaYAYyPNHrA1SMWGjgU9JpAhpioyxvpHPj_d0VY1sYZx6viX3r8GhuBoJDKqcxdzmdywRc5d7K6McC3x8XJnw=s120"
    },
    {
        "name": "3LAND INVENTORY",
        "slug": "3land-inventory",
        "logo": "https://lh3.googleusercontent.com/Me4bwni3pjc8PcAgjpv5o6cLHyTBQjqavm7OpcYg8J1fyKk6z0IgGVTHRYSCordAivjUUmWxSgLrRJiZLhg6djLQ4XDsypmrjQHDuY8=s120"
    },
    {
        "name": "Meta Triads",
        "slug": "metatriads",
        "logo": "https://lh3.googleusercontent.com/zgTRLp-Qgh-INTpglqeYubMWGSA40GGlUwvyE696yGuNycMpQsGghMmDPhAkvJrgO2d7J8nZPYyKW-gR1AY0Mty7U0rUMoSJ1_PUeio=s120"
    },
    {
        "name": "Edenhorde",
        "slug": "edenhorde-official",
        "logo": "https://lh3.googleusercontent.com/jrJiN_NEI5ySl1EV8V6qjPA4zErIe4lWpsqWb5RoqaNlsx_nm3tKI4HLgDVHjzvHN3PSx0NfYwbO49YVucd1J5W3-dfcN-dqUEFY5A=s120"
    },
    {
        "name": "FoxFam",
        "slug": "foxfam",
        "logo": "https://lh3.googleusercontent.com/S_C8yQupZQJnyhed0an3qi4Ydui_sUrfWGqwF299cDB1tGoNQXPCyd62nk9OUlwsxm_-MfvxFg1wYn4ONcSivcvz38qdNGjVMGPKdA=s120"
    },
    {
        "name": "PartyBear",
        "slug": "partybear",
        "logo": "https://lh3.googleusercontent.com/Pq4am5kMfPJxybtOv9OUcAIkYh6nn-A99Z_HcGnDk_G86qKm4P1yGTXEq2RBXsNirSXVJj0LxYIRKkx0wUNr_K8fPrEoRzc1M66lQQ=s120"
    },
    {
        "name": "MoodRollers by Lucas Zanotto",
        "slug": "moodrollers-by-lucas-zanotto",
        "logo": "https://lh3.googleusercontent.com/wE6ocgRIw10NH7PtlQJXlTvYTuO3gplXVE14Rz9XWCsQkHBnxa9PlNdIY1G1hxmSrsO0ds5EQFpiKzsETqT-UgmlzBjAncU8Cxfe=s120"
    },
    {
        "name": "MekaVerse",
        "slug": "mekaverse",
        "logo": "https://lh3.googleusercontent.com/6CS0frnjPEpvJ8hE3OG6_TbJFEC5YYThnZMdLTTmW-Z91lyYAJkPA7-ou2uE-b_J-cBUBeqWkI4HYKHEiu2PAyCT6wkYKzoeCyuy=s120"
    },
    {
        "name": "All that Remains",
        "slug": "all-that-remains",
        "logo": "https://lh3.googleusercontent.com/Uo1kSluQaQvpUwU4T8bipYHYrpv4VYcAMpYDMZpwH7y9sXLhZSt3S_twxUmBTUAlf4cvI8mFwYEdrokyNiWn_K8ncfaicxvMLh8qgQ=s120"
    },
    {
        "name": "SuperFarm Genesis Series",
        "slug": "superfarm",
        "logo": "https://lh3.googleusercontent.com/stQDZp36ffNXpmDXeEn-1QV_C34ziVVsHNQrR0-yo9l20NFe-Dl0voL6j7hACyDoFgpVG5vdurTjR3DCbiZA7V2ZDy7TRpalGWsrdA=s120"
    },
    {
        "name": "ASM AIFA All-Stars",
        "slug": "asm-aifa-all-stars",
        "logo": "https://lh3.googleusercontent.com/aiB49weCSsN3o3IqqbTk_uE6aXzGHQmdEcEtNZclkuAMnt5aO8IDgtU4Y_Sl66ID4Q22jPqSKm67jy2ROSSUisCCo55CkiHB16hsFQ=s120"
    },
    {
        "name": "ENS: Ethereum Name Service",
        "slug": "ens",
        "logo": "https://lh3.googleusercontent.com/0cOqWoYA7xL9CkUjGlxsjreSYBdrUBE0c6EO1COG4XE8UeP-Z30ckqUNiL872zHQHQU5MUNMNhfDpyXIP17hRSC5HQ=s60"
    },
    {
        "name": "Candy Hunters",
        "slug": "candy-hunters",
        "logo": "https://lh3.googleusercontent.com/BeyfaZRO6sOeBKLSclv__PG0zBB_x9EwAyCBuWC7twhq29MCzM0r-lARiaWSWPxi8hVzyTc8wCkI7PMGcJEt7p1cHVC-ivJHSAVxIuo=s120"
    },
    {
        "name": "VOX Collectibles: Mirandus",
        "slug": "collectvoxmirandus",
        "logo": "https://lh3.googleusercontent.com/wzxBcOr_VAjwDqkaQ4ppAsc556coUTWIQf6db_tobrmmi4z8u0KwPM8qam421G6o_fLgjpB8jyUcDYEjxqaR6oMFbjxx937YmWFOdQ=s120"
    },
    {
        "name": "Shadow Quest",
        "slug": "shadow-quest",
        "logo": "https://lh3.googleusercontent.com/kvY3UaSqpSmowbs5O_TBiooJ8af6k3KYJN-yMsgJxD-g5VGb8_e23yWIDdddY0e4fpbHrwWnaeuXYh_JFQYO5ks7rnHp4PCZgABy=s120"
    },
    {
        "name": "Coalition Crew",
        "slug": "coalitioncrew",
        "logo": "https://lh3.googleusercontent.com/lnPUkSxFgu1KCCN_NY2Jc4LpeuHjzAjWJHWMpBTSPZs3gVVSoYcEQvQKDqFYGMqoycKDxmtSittwq8hlOv0l-ysQ0RJxFYS9yPq6=s120"
    },
    {
        "name": "Dogg on it: Death Row Mixtape Vol. 1",
        "slug": "dogg-on-it-death-row-mixtape-vol-1",
        "logo": "https://lh3.googleusercontent.com/LJOjfIyAWQgx5NTHw1kI3-w2wge2y6JjPWDr8B-_WcCeJ6HmcyjNwdAF5SA8xC-LWKoX2tKdIFv_2K7iowUqbn0hdFf3lgzfH6JOzKQ=s120"
    },
    {
        "name": "Voxel Ville Official",
        "slug": "voxel-ville-official",
        "logo": "https://lh3.googleusercontent.com/W7gaosyJkDOSBcGBYAK597HWlEUG6Xa30zxLbTcUID-Z22lY-MlAKg2HovnURlyFJKbYbc4T4FIbsNqcIf4HmWbwiOf_SA95N6Bolg=s120"
    },
    {
        "name": "Robotos",
        "slug": "robotos-official",
        "logo": "https://lh3.googleusercontent.com/hZ1VzS0uyt-jA8C13rTHMSxQHlr1qdTHSzHqxhBlEn9V107ANj8dtzWFnD0q9oQZ6Hs-XcN4eOFl3KF7qS4V9ApQHMipGkG33yLvDw=s120"
    },
    {
        "name": "Clementines Nightmare",
        "slug": "official-clementines-nightmare",
        "logo": "https://lh3.googleusercontent.com/rb3CzNFCXwT3kzh9pxKVnMMegerJAWTblo9A1aQi2ZZeB2Bm9K8-xhdRSrdHktvLMHCTxwAGvdVFsIo7pTwpE4erRNg50sX4_3EWTKo=s120"
    },
    {
        "name": "Nifty League DEGENs",
        "slug": "niftydegen",
        "logo": "https://lh3.googleusercontent.com/eJhIV33weRWP-pYJq9GUQtccP5WYtRWCuZKfzqX3HiclTx_3YOrCQ3nR34LPK3YpU49ezSXRdaCV4VyG53FXIa0aJyo1YkDQTYGLGw=s120"
    },
    {
        "name": "JUNGLE FREAKS BY TROSLEY",
        "slug": "jungle-freaks-by-trosley",
        "logo": "https://lh3.googleusercontent.com/9ElHIcK8dZ3fOxLLVA1KKNuN7AVmNvFycX4jK3f_GvDhTrkCgh4hBJAiXGf8UsBSWlJU9lpSrtPtCfNHDp08ChZ7Tx_LDXbiT65t=s120"
    },
    {
        "name": "Project Godjira Genesis",
        "slug": "projectgodjiragenesis",
        "logo": "https://lh3.googleusercontent.com/74aDgsQopFEYlLvKl0vzPmJm16r7KoOmHJs-Xxq90W2Y4zDFVX1r8UwjPR2E6aAl8e7pJM6DNI8pOcHm-G7-Iq2B08drPkTaZslum3E=s120"
    },
    {
        "name": "PunksVoxels",
        "slug": "punksvoxels",
        "logo": "https://lh3.googleusercontent.com/nud5veftyxwjze_B9nDLqIOlhGlDXwVIcdeUB7xYU9KIo1sqVhu1O32uvpH1m7RQQR5JW7jaXR4iSL6XeGnqRCpYxEkfyHwtJJvsXw=s120"
    },
    {
        "name": "WomenRise",
        "slug": "womenrise",
        "logo": "https://lh3.googleusercontent.com/2MsWeFGP4TzS3LiwOTQ4NnmGWvA-cWCcTng-R_ZCve_fYvqJ8slusr-f7y8Q0adO2QrpPWMjD6TadLRrbHfrbrzVGWPSWBLVs-zPGA=s120"
    },
    {
        "name": "Cool Monkes Genesis",
        "slug": "coolmonkes",
        "logo": "https://lh3.googleusercontent.com/yBuljll0-zEVS8MtYc_1zfRxPxeIgcRHN9FJsNHnYMu3rCQatPWaeUX87nGf0l8FtOdE1nD30EVq3jiCObUPgJazMvKfbvVdK5ca=s120"
    },
    {
        "name": "SUPERPLASTIC: SUPERGUCCI",
        "slug": "superplastic-supergucci",
        "logo": "https://lh3.googleusercontent.com/H2q_NpyBs7vCtL-7FWgTH1FCiYnSqC7WwybQDg95bukk3eLBFkr6udy1CBNqwrgwbBYcqshdbuxL0Slz2_IlXNkHMJJCOHEZnj0ONg=s120"
    },
    {
        "name": "BOOMGALA_Official",
        "slug": "boomgalaofficial",
        "logo": "https://lh3.googleusercontent.com/xjw-pBEeIF100xs9qx04D5VnSQuANrFuD1KMCEz60l2ldrCVSn0rR2sBB7sTrqp8wp9wJs6yhrWyltPhh7XjWmAuVlIujRwQd-2axA=s120"
    },
    {
        "name": "Chain Runners",
        "slug": "chain-runners-nft",
        "logo": "https://lh3.googleusercontent.com/3vScLGUcTB7yhItRYXuAFcPGFNJ3kgO0mXeUSUfEMBjGkGPKz__smtXyUlRxzZjr1Y5x8hz1QXoBQSEb8wm4oBByeQC_8WOCaDON4Go=s120"
    },
    {
        "name": "PX Quest",
        "slug": "pxquest",
        "logo": "https://lh3.googleusercontent.com/7lWzGgt1-MGsInwTwUOQCvzi_po7c2R1cypRI5EiJSgQksMffnCQguDYo4LJGA19QV7BfLNKeLlZfhzVx1tk3LklOM54U4shemHprg=s120"
    },
    {
        "name": "Cameo Pass",
        "slug": "cameo-pass",
        "logo": "https://storage.opensea.io/files/7572aef06110b4e365817f60d37eff0d.svg"
    },
    {
        "name": "Grandpa Ape Chemistry Club",
        "slug": "grandpaapechemistryclub",
        "logo": "https://lh3.googleusercontent.com/we9wClWToKgrvmDPY3dpCnG4M-tJ1QlvHbqpvsWipitap_gipUilOhq1mcuw0htwrBlzc_elmg_xJLHV5ZvYJP0K4KL5HRu-5Jft=s120"
    },
    {
        "name": "Chain Scouts Genesis",
        "slug": "chain-scouts-genesis",
        "logo": "https://lh3.googleusercontent.com/Gwo7P4koHs5W-Sa25_f8Zn-oHDWPnYvRhb1mQbzwEsF6yt9B4uLrni_SOsHOobp1uZ3rRcVQfigfRW8Qm7QCSwpq4ID2i7GAygBqag=s120"
    },
    {
        "name": "$CAR",
        "slug": "car999",
        "logo": "https://lh3.googleusercontent.com/rjZcSOd9majUhfifKlKFZ0av5dZVKc6XJNDaCY7FSJO1_GwJeigf6NVPTUwQA4Pj0os1gzEB7YlqAqeEU7f4-mB2rzhZnYyiKMp_=s120"
    },
    {
        "name": "KEYCard V1",
        "slug": "keycard-v1",
        "logo": "https://lh3.googleusercontent.com/Pw9_1sXKa91PhUiFOuibzx0h6sQ5_o3ooG7v6NoNyJFIeobPSwCZRdjGZIxcrrGR44RvyY-noy_xaSYiaXpWh8i93qJzdMMQUnf_RQ=s120"
    },
    {
        "name": "FancyBears Metaverse Official",
        "slug": "fancybearsmetaverseofficial",
        "logo": "https://lh3.googleusercontent.com/r-XOIxDG633GCZrYIJP6cA95af2S2hp2TPNklSXt3O5bPGOU_bq2tkUTIns5DsKy0ZoR-4pDO3JL1NCMmzh73_TtBRu_wjOjniTuyQ=s120"
    },
    {
        "name": "StrongBlock NFTs",
        "slug": "strongblock-nfts",
        "logo": "https://lh3.googleusercontent.com/Wfzlvq_En_9Bqlvb-6_E88iND_rYVmnUb4KO0vYX_Mf1kqWYDRs7Mj7lICLZSvLsDCJ-SWBQTLMc46Gq6D5BjF-db6uzMa25NitQdA=s120"
    },
    {
        "name": "The 1336 Coach Pop Collection",
        "slug": "the-1336-coach-pop-collection",
        "logo": "https://lh3.googleusercontent.com/Hp5mF2mW9U-pKN6tenU85WP6jkYSlnfmixMZFYccSRHxRbfSi_Z_pNHWtI-pCbPJ_HXEtHVRu5LylAK99qhE9ujvccUL1YINlzgOGQ=s120"
    },
    {
        "name": "The Martians: Metaverse",
        "slug": "the-mars-martians",
        "logo": "https://lh3.googleusercontent.com/IQT-uqtTooKkCKVHI1AKVUczl1LIIT1fR8NZEUh0EzrB-Frs7y-54bZ3SZ0zG8WimxzShQsc2i2QLSuwRokL5IOfu8FpnlzmjPXq3w=s120"
    },
    {
        "name": "KlayCity District",
        "slug": "klaycity-district",
        "logo": "https://lh3.googleusercontent.com/QJgoaGpc1G1Diea0vFP7JImvBF8F7OczTxdhHMUR1F439HNUooSdQxMhvRGwCPcFjJg9iERKqk4Lvz7qzxqBzQhqMKW925mPxKyJ=s120"
    },
    {
        "name": "Bobu, the Bean Farmer",
        "slug": "bobutoken",
        "logo": "https://lh3.googleusercontent.com/mXN41aHt5_JXxfZdKO8C9txVMYfiKAf8cWppLf4z0Ax0D7AOi6Su8B8UcgwNH1Jp6eDeEkdM6uy9MlcaQ9u1EC5cs65DOjLiGYNcD0U=s120"
    },
    {
        "name": "Junior Slotie",
        "slug": "junior-slotie",
        "logo": "https://lh3.googleusercontent.com/BWQtHF0nroL_9SOzMOZyToLArZJQNtU3moqwDqkLYrSbl7BjY8DxncXOOwwBFIJAbXbrbLLzgodWOstKEmsz3ZhhD5_X-9I63s6UTQ=s120"
    },
    {
        "name": "Bad Face Bots",
        "slug": "badfacebots",
        "logo": "https://lh3.googleusercontent.com/9Rwp3TpgKMcODwN7Fqbxuwjm2EeTUTfijYAiI9h2tZEb-kfraWtevv5SJvhTb43CmrZR99jCT3q1-PPikFQ-z-9FBnZFYUcCTADaXeM=s120"
    },
    {
        "name": "Genesis Kakira",
        "slug": "genesiskakira",
        "logo": "https://lh3.googleusercontent.com/yURB6WX1zExsZ_B7E05D2ctkADt6rrrgTpCveWGbrEqXjlj9ZBSB3lypvHmxslIXsmEQTaG4tZyuAe8LyuUZqM738To5kStAYjRAQdA=s120"
    },
    {
        "name": "findbalance",
        "slug": "findbalance",
        "logo": "https://lh3.googleusercontent.com/n7ShDI5_-frdTAv2RrN-8Bx7iMfoRjmlrBq2Ltgt1fJdiaZ7-Jf5xRj7uCpy-xQ3EHHV5bkIJigZmZ_gYXz4PgsSlOBaPaT_OGJh=s120"
    },
    {
        "name": "YEAR OF THE WOMAN",
        "slug": "yearofthewoman",
        "logo": "https://lh3.googleusercontent.com/cULgr1DWPLit6H2mYB21TLDhYTK5XVEnFzGSifuXNg3_mEeS0O4XFazB7ZqdEAYJj92IRpGGM9pzaWSIsc990N9GQk5NgoF6Qp-0EwM=s120"
    },
    {
        "name": "ALPACADABRAZ 3D",
        "slug": "alpacadabraz-3d",
        "logo": "https://lh3.googleusercontent.com/Kgsg-xo-BJ70rJ4OpUJBGVGSw2hLZSrfg-kponGjMYWwjpEPCRG1ErN6dzM1Wd1MR9p0h1dA5RWFGOHQvMjiGli5qzwnHPhYeOLJ=s120"
    },
    {
        "name": "CryptoBatz by Ozzy Osbourne",
        "slug": "cryptobatz-by-ozzy-osbourne",
        "logo": "https://lh3.googleusercontent.com/oHF2355rmbMguzNweOA5Bl3DCOAyjWai3ZelFnlpoG7N6HmGIvaRgvAW6ajDCyJGZp9wIkXv8SQeucSlN-TM5SxNDFBQL7wrOBk-CQ=s120"
    },
    {
        "name": "Brian NFTS Collection By Braindom",
        "slug": "brian-nfts-collection-by-braindom",
        "logo": "https://lh3.googleusercontent.com/2JlbeUtXHbO_hcSnK9tDl6JmIEOQ8ocsfl85_k_K0PRusppfJt_llby_s3J5cbM41bFmL-crMG-xsUhpFczU8xkBtgHYQ04va3Jn=s120"
    },
    {
        "name": "JPEG Cards",
        "slug": "jpeg-cards",
        "logo": "https://lh3.googleusercontent.com/wlZxX9Z5loaOcNyD6KPgTBZkib7Wv0j9QnIPp0DKIkd8uK6Dw-9ZbccahddVIdUURzOk0xsr7Y3Pe7_PlbXWtmDTWaE-u5GR04LQQg=s120"
    },
    {
        "name": "AngelsDevilsNFT",
        "slug": "angelsdevilsnft",
        "logo": "https://lh3.googleusercontent.com/UVJL7zKc3JTvpdSj_MrHmm1nreWqf2uIhh6E07I58-QXeiPH5Ub_mXzUyevQpdE4hL8zBita-B0M2d37Dc0QWngbYQhkwYQxTDkHDTg=s120"
    },
    {
        "name": "Super Creators By IAC",
        "slug": "supercreatorsbyiac",
        "logo": "https://lh3.googleusercontent.com/1rc8SSvlhrlbYFiAmU-AzSkrmGdg6dHEByOtE38a6domk2gwERy5bxr6mWamLfE1HQb7t-72G6MzVssXPruaMnLfVVjRGgl2G4FFmw=s120"
    },
    {
        "name": "Rumble Kong League",
        "slug": "rumble-kong-league",
        "logo": "https://lh3.googleusercontent.com/x18rNFBg9leLL9TtHkhhiC8cwIurh1UhMKU6TL_JMbGyUsY8MTMhyPiz8Nz7VRJHShEgIQlCP070UB9gGWvJ05ST7IclovIWnwAUww=s120"
    },
    {
        "name": "THE SHIBOSHIS",
        "slug": "theshiboshis",
        "logo": "https://lh3.googleusercontent.com/9G_SbzGpWnId_ouP-rsTfv1UIeSaaayelyZVyo7eVETYp2uDXDXeH82Yvw4AchRHuKSrixHhGQ7ri5UUepQLaK9BpwhMH1yjImnXHA=s120"
    },
    {
        "name": "MidnightBreeze",
        "slug": "midnightbreeze",
        "logo": "https://lh3.googleusercontent.com/6I3ubH_YUJ11z5yuG32r64zr0O3eKfU-nV0H_uttY-YKzF7dYurcjBt32DzLY32E-EIhmJmnPbcGKfh0x2AiUIG5_Ol7JhckTpIhuA=s120"
    },
    {
        "name": "WORLD WIDE NFTS",
        "slug": "world-wide-nfts",
        "logo": "https://lh3.googleusercontent.com/mka-DmmAhGrmjMtPfbaWIp9xrGBlldgiQ0Ge83mrumELDiJNWHReopc8slTwDkp9PRF1gr4fIY5_pFEfZBd8t-pYtAt4OQrLIFUvXQ=s120"
    },
    {
        "name": "Angry Ape Army",
        "slug": "angry-ape-army",
        "logo": "https://lh3.googleusercontent.com/jqRimZy4zej_lTnJvkd6OuMGVG9IudKGsBrCfoHOBzXNSuiJ_jlaanAlbOaRGzebOrJPl_UFLMYPSl5N17wDjSGFhJS-hDQw4wxx=s120"
    },
    {
        "name": "OCM Dessert",
        "slug": "ocm-dessert",
        "logo": "https://lh3.googleusercontent.com/GHWGdeiY8blqXy9zVolLHFJ-leYtH3pcXtSFJMwmPhFENEP-ucu4EKRRMf8Ge-kcz7AVf7JQqYCvJywQqZQ3D0S1PVVlx_zWMj-oyA=s120"
    },
    {
        "name": "BrainDrops",
        "slug": "braindrops-1",
        "logo": "https://lh3.googleusercontent.com/U7CaccqE3lrtwrT9uZNrEtrnmwwBtX5ytA4lKPWKv26_rJ4hxgt3SDQyjG1Clz2ORAMK3LWeMWhfTbVEQYw_YerRGcNd2ogqvq7ajA=s120"
    },
    {
        "name": "Snoop Dogg - B.O.D.R",
        "slug": "snoopdoggbodr",
        "logo": "https://lh3.googleusercontent.com/GPAsaG3RQBWcRxaY3csb7f-ybDmYS_6EfjvxW7qDjp7t07B--hbNlwEy-VTR1SKx34jWfSLTwqKzKbVsrBQvPxE9PQiyyOTnK0Bsuw=s120"
    },
    {
        "name": "Origins NFT",
        "slug": "originsnft",
        "logo": "https://lh3.googleusercontent.com/6zn5BHpfb9sLarcrPqp26PezGuoc_LcWzPjpa9Sy0jdGUouDvUcErvx0rttVIr2NkOH6r5Zo04mPerQb-FLUMkQLTfyzH8nyJ8g8cg=s120"
    },
    {
        "name": "E-DAMER",
        "slug": "e-damer",
        "logo": "https://lh3.googleusercontent.com/od2raRGBSrs9Sj6w7_bPHQ6YUpjnY97aDWV7FmEwvqYEmwryeIEa5FkNsjVl3oI_cJAkkfXrYhV_R3inGk2zwZqoK3xmK7odbFzUZcE=s120"
    },
    {
        "name": "Crypto.Chicks",
        "slug": "the-crypto-chicks",
        "logo": "https://lh3.googleusercontent.com/zEO0YjgOvjan3mBd37uSUP5hHY0dlY8M__ocpsWNEA6dJ2LcC1gkdA48KvOOrxboLKDuS631p99EBeRpnj0pzd69kABLjGFZUeHRFQ=s120"
    },
    {
        "name": "LARVA-OFFICIAL",
        "slug": "larva-nft-official",
        "logo": "https://lh3.googleusercontent.com/bIOycpBh_zsAPkyALAypClW4krCRg59qvylGApGDRRHNH2UHMSKQq6G4iO_L1rPvEpQjujYzJv5Aucc9sDFpB4Bv4vttF9cK7xko=s120"
    },
    {
        "name": "Stoner Ape Club | SAC",
        "slug": "sac",
        "logo": "https://lh3.googleusercontent.com/0JXO7-jSFkO7XGyOIzt7M4Ai42UuZZKub7PxLHYKIfEGB_wdroHnt_2j-ewDe_e-OnG1e9CqCXNLw1Es6fm3DYk6xPZ3N2Ew9kFTzQ=s120"
    },
    {
        "name": "Wassies by Wassies",
        "slug": "wassiesbywassies",
        "logo": "https://lh3.googleusercontent.com/ju6vDR0sbEvqT0bAb4QPEzYMzpReEllDZ5MlICtxqJu76G5UrZ0cT-w6X3Mzf9e8KXZXJGNIyXGDRAoL-qlaApiJsj27ZdbOY5VvCA=s120"
    },
    {
        "name": "fRiENDSiES",
        "slug": "friendsies-nft",
        "logo": "https://lh3.googleusercontent.com/L4yuGjWWF9l4uo0qLxKHNn2XDsd458aivGi9SFllK9p-x6LrJKW60SsX92hw-k4qQus1QT0NixFeHfSQsLNcI8RXWMVUpfb9oVis8A=s120"
    },
    {
        "name": "Neo Tokyo Outer Lands",
        "slug": "neo-tokyo-outer-lands",
        "logo": "https://lh3.googleusercontent.com/fmy3rZQgswpkd5TV3QWl66JG3SvIPGhWDtHr3dKKi15EAUb96k-lKFsi0amKXyJv9Lh7xnDBHG0Btq--bIorfDfL0dJ39RVQYofU=s120"
    },
    {
        "name": "Meta Bounty Hunters",
        "slug": "metabountyhunters",
        "logo": "https://lh3.googleusercontent.com/vAw8NwSA7b_N3qh4Tz-R9_fm5fMtWFesq4dYgnxWq2Zxiu1N6KcLYS0HceUTcgOADtZR9NAOjvnvs40HeH_Wm7gjyJ1FLz0-S2HFMLc=s120"
    },
    {
        "name": "Bunny Buddies",
        "slug": "bunny-buddies",
        "logo": "https://lh3.googleusercontent.com/uRNiQu5_VpjhHoYy_QTvqOpIWs5QvSJ36hCrsGV4jP2YDJqIwfBVtR_XALDmmHHyFks6FC919AzvXv0J1AT4WlSEGM6VIODNt07snw=s120"
    },
    {
        "name": "Space Doodles",
        "slug": "space-doodles-official",
        "logo": "https://lh3.googleusercontent.com/grtJLoHghmlq1Zh05DEc4S20t6_aESFq-nq07SyAsxDuOoRorjo1EQ9Z2L2Fb-LS7DgZt9Ar4Ra9l2KpBkSvvyu7wnVdhLkHcNFtQ8c=s120"
    },
    {
        "name": "Never Fear Truth  by Johnny Depp",
        "slug": "never-fear-truth-by-jd",
        "logo": "https://lh3.googleusercontent.com/xefmaCSVmFfL8tQJw-fYYIY9ISE0mOYAugBkFLlre1ermeVt_ggsFbMrnDVxvQLAtAgZFemlc6UfSjHDW_h28zzvuzBVjsiZCjJPLjg=s120"
    },
    {
        "name": "Metaverse HQ",
        "slug": "metaverse-hq",
        "logo": "https://lh3.googleusercontent.com/4FXmPB0L18lEZ2uhy7vU-N1Q2bVViZkpCS3wkZ76Vxco-lEyAJ9Du2PQAqRMDQECmzBsqkc6vLR5GozH7kjrXr8yZtWj4n7xZs0o8g=s120"
    },
    {
        "name": "Ninja Squad Official",
        "slug": "ninja-squad-official",
        "logo": "https://lh3.googleusercontent.com/xVyUwQMXGvCha3V8UQ1laIx5tfwpmR76Bu1L0oaNKHfxz0FS_t5Y6wRlXBTFqZNlGb0ixL4_TSifMtjQUgv25ZPuTHaFVNitFGf4Dw=s120"
    },
    {
        "name": "Purrnelopes Country Club",
        "slug": "purrnelopes-country-club",
        "logo": "https://lh3.googleusercontent.com/5yYsbRGh47Mnml9Fxca7TLJL6jtqTEIrgkGYwxBs2Cn4zam3EsVHJCakLcJ2riWbH6xax9bbgYA_mjqcSj0X5PEY-OXAUHY98m3Jdw=s120"
    },
    {
        "name": "KLAY APE CLUB",
        "slug": "klay-ape-club",
        "logo": "https://lh3.googleusercontent.com/75B-5EyX6JD94YaePcqZqR9lo-euI_Z5uspmNCNXt27oO0ipAv1YQUb7wj0rydtHGLU2d_n5btI_wzNWxu-cgQsdDrnEyGpVNAwSZg=s120"
    },
    {
        "name": "10KTF",
        "slug": "10ktf",
        "logo": "https://lh3.googleusercontent.com/pyp53Pww5B2BvzOhN06mXQQWttj8j6nwj-SK9M6faFS1k-VYKQ_knLCgtwOcE4GHIZlli4xgwJqxBmzoh8K-FwuGOQikyV_7fOKdHA=s120"
    },
    {
        "name": "BYOCraft",
        "slug": "byocraft",
        "logo": "https://lh3.googleusercontent.com/loLaTLldopCn0--dDGt77s-5pRf9-s0LljgUgRszbCJpkW2ylJ4ZdElCkOxDWbMSylTPLttePH0Is3h7YbDbbnLCpFShkPeK1yGppw=s120"
    },
    {
        "name": "Timeless Characters",
        "slug": "timelessnfts",
        "logo": "https://lh3.googleusercontent.com/ufwQp_mUf5PvhgpMMlPueNZcSRBzWqdRTEOq5wSy_I7WEe19bY-i9SY3TRmZO3Nn1Mnl_VxBumFuG42VIsRP7H3o-51Ptz8JNo-e-w=s120"
    },
    {
        "name": "kai de anecdote",
        "slug": "kaideanecdote",
        "logo": "https://lh3.googleusercontent.com/3uogygaHTeIcgRqYFlR-EhlNlO0198G-hUguitX9pOoQdZWWF8Jx_TU3pKZi2x_lWZHY5kZmb9tEnmHWFXWN5C6jKY8UgurtrAT4=s120"
    },
    {
        "name": "CryptoDickbutts",
        "slug": "cryptodickbutts-s3",
        "logo": "https://lh3.googleusercontent.com/vw-gp8yUYkQsxQN5xbHrWEhY7rQWQZhIjgO2tvLxu46VY6iwulwWZt5VFS2Q9gy9qJaiJk8QspZs0qaM9z1ODeIyeUUseABOxdfVrC8=s120"
    },
    {
        "name": "Council of Kingz Official",
        "slug": "council-of-kingz-official",
        "logo": "https://lh3.googleusercontent.com/ZwwaTwKB8JOpp8U_2S6ZV-jRQwDl1t1p-sBcsLsFVSak_rJ_I2lBCd0W8LvFXzHrPaYGqYpjG1Xc5XNtEDmPXCSoRUVcMUhFcDBTsQ=s120"
    },
    {
        "name": "XOLO Keys",
        "slug": "xolo-keys",
        "logo": "https://lh3.googleusercontent.com/6oPRXCEueufv57i-tLL0FBn-LgtSQK8ZqZVjoGyy2nzSrh8bvb8-oVJpAMj5QgjftByd32CDiiGa8XmNsuPbXIWoaxMCSaLUjZ0I=s120"
    },
    {
        "name": "Monfters Club",
        "slug": "monftersclub",
        "logo": "https://lh3.googleusercontent.com/LUMJK3aqMXN6taHe04arCY5ZACTFRRmbPRg7e3FBumTzvjift0TeoWa4K5LEoEgvPuKCrgRvpwU6czfACbojwX9S_Y25oUXmyH0ceA=s120"
    },
    {
        "name": "Bears Deluxe",
        "slug": "bears-deluxe",
        "logo": "https://lh3.googleusercontent.com/InPgClcuGiNA5TdEGTu7zuGSv1LDJ54L_sC49G7fqJ0YawDcdmN78t7iShcrbyQ_sdoUyjyBAoXVMTKaaf9OP8ekDyBaEEWJMiDbi8M=s120"
    },
    {
        "name": "missaniela Collection",
        "slug": "missaniela-collection",
        "logo": "https://storage.opensea.io/files/44ba9603c48c0283c4cfcc6dc02854df.webp"
    },
    {
        "name": "Notorious Frogs",
        "slug": "notorious-frogs",
        "logo": "https://lh3.googleusercontent.com/Gt1sbsnEpJdZcLYQoJO3Q_2Lbsh8VFgUQaabxAGyS5456DTS1lo94jrlDpHW7d9plXC6G3Igr4QecmfOBLG4kZXK0foKno0WDGhH=s120"
    },
    {
        "name": "MekaApes Game by OogaVerse",
        "slug": "mekaapes",
        "logo": "https://lh3.googleusercontent.com/JyBj6Saua8aKejfxRGvndGs_qp-AwSmXMDG780QR6zlIocvNPUNm0fy8c5QVdCPBv4j0VcIng2JhVwR2P-H8cDSMyhpw2zCM-WOf-g=s120"
    },
    {
        "name": "Vandalz For Ukraine",
        "slug": "vandalz",
        "logo": "https://lh3.googleusercontent.com/3ZRolrXwE2h6bzvWSG5kzqUzhpDIVeTQqkBq14geICx7nmVpq2wv-KZm7Hlu35w0AdbY6f5dOyUf1-Y8kgqHbZtQszBYAGLJOQqV=s120"
    },
    {
        "name": "Meta Eagle Club. Galyverse by Gal Yosef",
        "slug": "metaeagleclub-mec",
        "logo": "https://lh3.googleusercontent.com/MXHQ-Yps-g7Lz6D25NXgEh-aGP0VVIkG8p5-2pN5EeKJXNmfQ1kv_Pzy6kQfU776FIASm-tAJ5z-zhCergLBtMB52L8v3HS5ZnkF9JA=s120"
    },
    {
        "name": "ALPACADABRAZ",
        "slug": "alpacadabraz",
        "logo": "https://lh3.googleusercontent.com/3Lp0Vst9cxJ5YxY5hk5AFNyonTLpHEQMsVo_7pvyBnmxq9f4vn3K1W9eJYH-QuEuOoQQ3zm9yLWAluHZst2xse_CLP1XmOuFEcVD=s120"
    },
    {
        "name": "Little Lemon Friends",
        "slug": "little-lemon-friends",
        "logo": "https://lh3.googleusercontent.com/SSHi3LwWt7tnEIV_pvuL56-Uyr6ajDrIpFZjNn8VpCx9esjY3hkRz4MV_yUa82bdzt5eUdnTizeBB615CPKkqHEED-71dLrczPs6npY=s120"
    },
    {
        "name": "Moon Ape Lab Genesis",
        "slug": "mal-genesis",
        "logo": "https://lh3.googleusercontent.com/kLQSuxxCwAaal3Sn6BpVDSudBmT43qgxAJl4sTOtZOrBqUelIksTJ2DvmYQBRrDlXIqCAY3qb-Vrbq513QZx5-S-MffVNWIyoD_u4Q=s120"
    },
    {
        "name": "Deez Nuts (Official Nuts)",
        "slug": "bofadeeznuts",
        "logo": "https://lh3.googleusercontent.com/uQrIDsax9DKHuf17wD1WYzpWv94ickqAP7VVj3Po-YjKPwkLlIQ153xqn1IbP51dqbkhWtSRJMgHAxN9y8MSv3Dcqx7PQOT34SiY=s120"
    },
    {
        "name": "Wabi Sabi Collective Genesis",
        "slug": "wabi-sabi-official",
        "logo": "https://lh3.googleusercontent.com/t2x-ximr6kA_-6OcWQiv9S_cHXZou9NhoDpXyI3aMu1B5WnVAeqAfwJvAAyDI4J7kKs1di1x_YTo1jR5FSnrygGwYpRJ1Eo9sX14EYo=s120"
    },
    {
        "name": "LinksDAO",
        "slug": "linksdao",
        "logo": "https://lh3.googleusercontent.com/4flXT3VrXYC63isfk78Ki3UbDA4tALcMgYCTelqq5n8Z3rQr_Nl_Q1a3NroC6bCDRQ0YDHpkJMHmIXcCcuAmtkenRUuECs8eKD2Ka-0=s120"
    },
    {
        "name": "Letters by Vinnie Hager",
        "slug": "letters-by-vinnie-hager",
        "logo": "https://lh3.googleusercontent.com/4jTGMD9wrWQwQ0WZb-RvvZabH9_4QeUNPzeyrSVmlOGnG2KdFM9GrXv_PrPDY30_e7oCsJZDuu0o-ST5NEFAZJ0mnG6AClWDN5BSmg=s120"
    },
    {
        "name": "8SIAN Main Collection",
        "slug": "8sian-main-collection",
        "logo": "https://lh3.googleusercontent.com/eAULPaXEuD9oufUOtA-_c1MbS71hh_s_2LUMWs_xYBQW4DFqXNU1f6IrEQcE6Zv0gnV3kUyYPPt7mIzsLRhQEEDSkraAnPv81eLi=s120"
    },
    {
        "name": "Cryptoon Goonz",
        "slug": "cryptoongoonz",
        "logo": "https://lh3.googleusercontent.com/IxHixGmp59Aheq1hwIWlXjBRgma95Jp9OmD_21wcxjr1n-1F7HqIDyD5Dc5bXgezWSgqEKkkZhylC8cCTPm9MO8EvSqHpbiCCk3x32o=s120"
    },
    {
        "name": "Toy Boogers",
        "slug": "toyboogers",
        "logo": "https://lh3.googleusercontent.com/4hS1RbSyTcA8AF5lFeDDM_3Du12BVz9U-m0Z6WdkJCoGUuYyChAvY7HgsbikdzYFAVSHk3K0u_-_G6pvX4jZq85h9X-LlEzBcZumpg=s120"
    },
    {
        "name": "AquaTools",
        "slug": "aquatools",
        "logo": "https://lh3.googleusercontent.com/1AuAC-f6ccKU6ltV0xl5TKS_wM4D6ssJbfLga7KLRGGtYU1GshE40OVDCRCJ67q2ofWbiPzcuKLxKAILIuA5c2AeDdVkht5qvdOW=s120"
    },
    {
        "name": "CyberBrokes",
        "slug": "cyberbrokes",
        "logo": "https://lh3.googleusercontent.com/Y1QQWuJR01gJRJFT06kI81y-gGV_yTrHmvPYezGuXldCK1NE2TmdZfnACaNd44Ix7IxPKiTwl6tUNZOTAazWEACzvcc1Xb9sESyjxnQ=s120"
    },
    {
        "name": "XCOPY",
        "slug": "xcopy",
        "logo": "https://lh3.googleusercontent.com/6u03VU9Xbl5_RWNbxO98ukh9TwUqF3Xfbbl0AljjVi28paJuDWAtmtZEEYVyvzsIjRwa0f6A9BHrDXVxQBKfEmwGWrDv26dKZHjrAg=s120"
    },
    {
        "name": "Code Hyperium Genesis",
        "slug": "codehyperiumgenesis",
        "logo": "https://lh3.googleusercontent.com/C9gOk6k1ENC4u00s7exS_fxCa-MLoLkLA5VWRK68JLimMw1FyA3oVmlajmIuhTbD3zm4ilrf9YJ0nqeAmdyYLyF1kPNCc2_PzzHrc-4=s120"
    },
    {
        "name": "0xApes Trilogy",
        "slug": "0xapes-trilogy",
        "logo": "https://lh3.googleusercontent.com/RpkU22TwUksonije0rrA7_edf7J5fZkCnLEmKbSPNa7rjL8uB2H_5gIple5CgzWcH8G8bQJz4Xhr7EJMYWkKPPDkzr5CRYXL1mlyieU=s120"
    },
    {
        "name": "Jira Mfers",
        "slug": "jira-mfers",
        "logo": "https://lh3.googleusercontent.com/veYnaO2aG2xLDMD6B6iHJ-WrSH-E2f4lF7_xh4QCZYfxMKewxQQMHjUmeA-YrD8pfW_vEX3VYKQ5xpLG1LH25PZjbnRzf0rzM76Wgg=s120"
    },
    {
        "name": "LetsWalk",
        "slug": "letswalk",
        "logo": "https://lh3.googleusercontent.com/LS2AweBD09u_9ZJKCg0kygkkUwUEm48vdgFNYm7SoT-GvQ9iysUUCbSz5ILDKd3SfLFstKOOmKjeWdE7_SZwVhCSggHiLLwytEGN=s120"
    },
    {
        "name": "Crypts and Caverns",
        "slug": "crypts-and-caverns",
        "logo": "https://lh3.googleusercontent.com/5xfRiioB2Vd530dpG1kDabSC97hAB0a42IQKh-khcK23Ptqh8vnR4-qGx0p3h8Mxjr9CtRf2DzaE74yFg7zi9ZKdcZr9T6e7sa90qg=s120"
    },
    {
        "name": "Squishy Squad NFT",
        "slug": "squishy-squad",
        "logo": "https://lh3.googleusercontent.com/QpNMoHSR7sSxv27_B1v3Y7VvOl8-_JigGgy84CL2xLFKqJCVf7-giOcyl4mkheXdDi1FO2V2RDAx99DaQDHmiWSLZTxCpS3g2ASLwZg=s120"
    },
    {
        "name": "Cyber Gorillas Official",
        "slug": "cybergorillasnftofficial",
        "logo": "https://lh3.googleusercontent.com/XxD3QhUBWoDXwVxh7WaMd5susAHoaKnppxQLBbtyn8rjZqOcDyRUjlZLPrkhkuts7LkRazXcFn2EJJyT1Bj6rwyb_dKHaiL6fbMiZg=s120"
    },
    {
        "name": "Nuclear Nerds of the Accidental Apocalypse",
        "slug": "nuclear-nerds-of-the-accidental-apocalypse",
        "logo": "https://lh3.googleusercontent.com/xRx6J7j8LKqzRX-Tt9-0NUu-CEidWFHylIpKFXRxlskd_rxf1mzWe5OIACQCF5q8AYQPNhrLGyS7X-oKFYr7EhSfRXSL3by5QYod=s120"
    },
    {
        "name": "Cyber Turtles Genesis",
        "slug": "cyberturtles-genesis",
        "logo": "https://lh3.googleusercontent.com/Hr2SUvpASKxTO0h9ULMgRcNe_V_4_gZb6bwkuHa6z4eEFSaAeth5jC9xy42NPn8zrb2FJalIlQATBPCRJw5JjpGkoME7INnaL5xQKg=s120"
    },
    {
        "name": "KRISALIS - The Official Page",
        "slug": "krisalis",
        "logo": "https://lh3.googleusercontent.com/DSH3PzTU_LDfaEFbRqQe8iNEunk5NyxYYtjPtNG2u8XmWIHXyZd38TbV92Rie_Cl-unmAewANF1DvymKcNH7Ezwjn0Cxe55Z9YaU2w=s120"
    },
    {
        "name": "Whales Worldwide 2022",
        "slug": "whales-worldwide-2022",
        "logo": "https://lh3.googleusercontent.com/lgb3jBiMAr_7ykgqAwth1HTMz79CvgMhjn3Wt1Pnwq9ic7O3qNjxvRuBnwk5IszN8BlPXdWJWuoWtGUH9kqJq8Em7SWuAuqPfgY5DA=s120"
    },
    {
        "name": "SUPERPLASTIC: Cryptojankyz",
        "slug": "cryptojankyz",
        "logo": "https://lh3.googleusercontent.com/t2-r0kOctD_bjnl4QkcUWea3RFnUeo4gi3A5yCH1U3R8-8B-VevuXS8In0qeKomCVITW0puDRuM_sVWLjBd0ZelW5yziMzrMtlpe=s120"
    },
    {
        "name": "think what you think",
        "slug": "think-what-you-think",
        "logo": "https://lh3.googleusercontent.com/jgF1OdfhBTYeSiA81K0wNiLQY9THDzfnd2ZRW9-553WdSEOcVnXmruOaAauPwVXBpytiksSXqmVybigBEnoJ3WfFKeDHKuLPPG47=s120"
    },
    {
        "name": "The Flower Girls",
        "slug": "the-flower-girls",
        "logo": "https://lh3.googleusercontent.com/WRbEGpYOKWEEt7BoyCvq_XOfG4393JCzIyzdJwlgjh5sFOP3hP34BQ2Y-TW88qVntN4CSX-sEsBo3ryPDDwQTceQBwNyxLTBlrCG1w=s120"
    },
    {
        "name": "Bricktopians by Law Degree",
        "slug": "bricktopians-by-law-degree",
        "logo": "https://lh3.googleusercontent.com/u01G6jfmka_aUIEGc-GK45E70JiExfGmCqpA9575L8NEZDsVhYv34GdCSOg0j7loKSJ-dboWXstDPdX2n9f38SKFSROTRuL95mI-=s120"
    },
    {
        "name": "AspenBlocks",
        "slug": "aspenblocks",
        "logo": "https://lh3.googleusercontent.com/d9M-jFwl-coBqmT39a6BoEqDrTP3dyn-diCxUCfpZO8pS6mIsotBv5UAu20h1C1fn5p8Ba6dg4wRzk5r3PDlB8EglaDstqaNWrMC"
    },
    {
        "name": "LlamaBoost",
        "slug": "llamaboost",
        "logo": "https://lh3.googleusercontent.com/9ChNgFh67muzQqqGwa4DtgoXIdOd8vVX-94yLBF_WbbTNYEenIszZ48T4LZ2Lp_Z3TEShcBSt1ssJkKB7Fy5d3kM2nkvlyIOaYFOYQ=s120"
    },
    {
        "name": "Jadu Hoverboard",
        "slug": "jadu-hoverboard",
        "logo": "https://lh3.googleusercontent.com/6aidut4KF0Ltw296sQ07V1KTn5_aEtssMUuQfcStrZfdGvVHVhP1z36-lcdSwpo6s3CiTSYY_jdXTg1fws_nFQWPohThvHmVXxh2MA=s120"
    },
    {
        "name": "WVRPS by WarpSound (Official)",
        "slug": "wvrps-by-warpsound",
        "logo": "https://lh3.googleusercontent.com/TLyqit6C4onBqWvjnxwApA0pcVTEKQymvkT5L-609EON9C09Y66-GAqY-N_o_g5OCUTQhR1hPPppnFYktblJEmwsQQjuKZoZ66iYpw=s120"
    },
    {
        "name": "inBetweeners by GianPiero",
        "slug": "inbetweeners",
        "logo": "https://lh3.googleusercontent.com/MKEzQ2Ah4hI3iXWUy95-so2EyAvHC9PxbmBySaW94TgC3FulhqByJGgarrK5VxL1pTOzUWfVuGt_sFwVcakz47edlCuxcgtne1vAKg=s120"
    },
    {
        "name": "Pop Wonder World",
        "slug": "pop-wonder-world",
        "logo": "https://lh3.googleusercontent.com/4PgNYduDhbDDUcL3GHW1KmPgCTPLwyoDGmE3kL3y-jLwaPQvriKYN3XbAcFCPuoY_Jn_f1KMH-K3cHRpN2YerzBYipoWF6E2bIGlyow=s120"
    },
    {
        "name": "SandVegasCasinoClub Official",
        "slug": "sandvegascasinoclub-official",
        "logo": "https://lh3.googleusercontent.com/rWt-oQSmPs8LLOVbtsMrswjUuuhVS2l9Sl4xR1ihWE6zIfhMy_KGVKbQKoGlHNI_H9XjEh2iEqAdQzZ8r0x286tRKc0Uyp72Jtq6Ww=s120"
    },
    {
        "name": "Plug Pass",
        "slug": "plugpass",
        "logo": "https://lh3.googleusercontent.com/iEyJMn9BR6UnpvStv7UYB0sgUbmnvcWoXkPdwtmIPWQNsg0_BCeBIT7H9AJe90f9Y0cz2kLqRyhvFTsLYLGoFZGbpoqBbAX69kYCIQ=s120"
    },{
        "name": "Ultra Miners",
        "slug": "ultra-miners",
        "logo": "https://lh3.googleusercontent.com/DyyPHg5tIa-kt-J1ExVryXdKGo6wrWv1IxGWl-Ovs6DFsp6seLTbZU2221-TJxQpMLCSWrFzYFmhjttcUn5gYx5JHOxCg7C71k85=s120"
    },
    {
        "name": "the beginning is here",
        "slug": "the-beginning-is-here",
        "logo": "https://lh3.googleusercontent.com/vaP-xD5UuKq0h7QSjoMHJisd-6j4u3PUgcPqOTlx5MKXspHx0ofyM45PNJj-OTC04FnO80twhbZXGQy-O8T97AAPYA-Bj9wfLwz2=s120"
    },
    {
        "name": "Pop Art Cats by Matt Chessco",
        "slug": "popartcats",
        "logo": "https://lh3.googleusercontent.com/lrB7SS2lKrWipQ7-dHyRIyiOr_taPcoppUbGl-65wM3FVySOlR6DX-c-7J4ZH5rbMdkadhj-DqXds6WViznM2kpylOe-GYPqQAYvTg=s120"
    },
    {
        "name": "6Sigma",
        "slug": "6sigma",
        "logo": "https://lh3.googleusercontent.com/4p5ljT-QdrsS7kK52N74cSMpQlJAaeRsZPKHCzWbX6AbfyzNauw8ooXgJ1nkH5EdpBiXQPuEfCWltCHMkDPniCvAnhUVEUOPr_gZ=s120"
    },
    {
        "name": "EtherOrcs Items",
        "slug": "etherorcs-items",
        "logo": "https://storage.opensea.io/files/c11429c7afc0015c888647062e2e65e4.svg"
    },
    {
        "name": "Legendary Lions by Tecate Pal Norte",
        "slug": "legendary-lions-by-tecate-pal-norte",
        "logo": "https://lh3.googleusercontent.com/HUqg8Q2dYzjieOmmSkve37gobdt-yoLYJBLj62OzcOnzG7qyqZxQpekuxM4e-vaPsSyYquY1dlIxIK9urJGd3To3Vvqw0hpIAjm4950=s120"
    },
    {
        "name": "Boss Beauties Role Models",
        "slug": "rolemodels",
        "logo": "https://lh3.googleusercontent.com/VEQioB12ll9f1EX0Y6gjDWwZ2EUn5oa6khPJan-gx34wXO7DM5W0h21KjcLDykfkDxF071nzmlI3ZGLCAfYebxpP1rPdLBqj-2XaWw=s120"
    },
    {
        "name": "FancyBirds",
        "slug": "fancybirds-genesis",
        "logo": "https://lh3.googleusercontent.com/wrElaEBwneqKR669amNlLLxXC7rKuXoc50Et36hnwqYQcs2oa2cBtuKN1ogPnSJN8okccSoeqvpRTvdYwPFwPVyu8-4p33p6RCuwL_g=s120"
    },
    {
        "name": "Champions Ascension",
        "slug": "champions-ascension-prime-eternal",
        "logo": "https://lh3.googleusercontent.com/4hGRhrPFlxMf1gyL9H8oVndEK9EYARJ1cxsd3pJIMm2yBYfSzEDPn0Dtpzf8wf_utZVCwWl-ITU7dTcFC2qZSqb8S6WMF-2wzm5n6iA=s120"
    },
    {
        "name": "Women and Weapons",
        "slug": "womenandweapons",
        "logo": "https://lh3.googleusercontent.com/V7zthClFFknAFy3-ts8yXvqTQ7oRXmS9huaGjtquVRqAUrnwngJ0_JoJfhMDhwxl_pPdP20ncjE5RW5wtBZMDHJ8_xLNBzndTTqhTA=s120"
    },
    {
        "name": "CYE ChuchuCAT V0",
        "slug": "cye-chuchucat-v0",
        "logo": "https://lh3.googleusercontent.com/bSq3kivPSaYTnfuGIgZYVcLsgImG4MZaiy7uNogj4q2EbDEtr9qNr-gy6DonP2V3qgjP7ypFsom0JKrF1PscJD8wJNdWT53Dm6xTFJQ=s120"
    },
    {
        "name": "Furballs.com Official",
        "slug": "furballs-com-official",
        "logo": "https://lh3.googleusercontent.com/7P8qEXVhOfSSutF32nCrYYmv91sCF_DXpwcHzOHE_t_CJm6f9HVrTSAQEoqbm5HU6weJSOJQNRBaFCbUnjaszBnqfg4HEBTDU8KA=s120"
    },
    {
        "name": "Roo Troop",
        "slug": "roo-troop",
        "logo": "https://lh3.googleusercontent.com/ACV_EFtAaBzWx14Ui35U3qy3fGx-A7d5-vZHCULMWtO9ZfJD2ctgk8LR6_DCtEcEfCt8hqeJ_oPxmqU3v-h4zMpbHNai5KyW4DMA=s120"
    },
    {
        "name": "A0K1VERSE Credits",
        "slug": "a0k1verse-credits",
        "logo": "https://lh3.googleusercontent.com/yTxiUsGxGsWxmn4hZDulFX82hC4rOHlQxETB1STP9U5Nuy1tcisPpdKJexpT4sgzSWzHYOwPgnpxOvhoLv_vSkdodxOUTY7t_tFzEy0=s120"
    },
    {
        "name": "Creepz Reptile Armoury",
        "slug": "reptile-armoury",
        "logo": "https://lh3.googleusercontent.com/xZadnh07TDBG8WsyCNp1F14TCCfErxq0qmfeCcZPxufi_qsNM7NAXGB-QGvf9sC-MhAxCcq7H09jmfWFyLLouoBevEMDuCqA1PIN=s120"
    },
    {
        "name": "Twisted Toonz Genesis",
        "slug": "twistedtoonz-genesis",
        "logo": "https://lh3.googleusercontent.com/EO5sojr-GjV_S1SrV3L5MZ0ATyC8Q3OLEqdiAEsEQEyDDnATam9_xdzTEKoexc1PyHdIKC3Fp11V0jPzWLKdEAzH-BTYayGwZHwvx7A=s120"
    },
    {
        "name": "C-01 Official Collection",
        "slug": "c-01-official-collection",
        "logo": "https://lh3.googleusercontent.com/_hn57CNgbtqSi7fmGhXsBpRk0Ocb0lnQFzHku9hVw1pvtkAtvmXf7k3X6HYqhVwDy4C47McDmikN9Gi5kNrdrVFQG5l0sVeqavCPGQ=s120"
    },
    {
        "name": "The BapesClan Genesis I",
        "slug": "the-bapesclan-genesis",
        "logo": "https://lh3.googleusercontent.com/A3H7ECjaoA5DrlHxQ4-WWG9eb_kmEu3M_AAg5YZ45nVzVs_HpKvjeMHNaBL3K8rgk0KDojboiheSmuGSvC0QTmZYHg1xaFcUDCt1dA=s120"
    },
    {
        "name": "Anonymice",
        "slug": "anonymice",
        "logo": "https://lh3.googleusercontent.com/308aB5WLnVeBKohs3RrlCwGqGyJuqZCHdWFQNKyGk2JEciYFWK8gYYFHUC8fFESnJbWx9RideuRZseLCzKkVc9jUoOg-xHazbA8cikk=s120"
    },
    {
        "name": "Loot (for Adventurers)",
        "slug": "lootproject",
        "logo": "https://lh3.googleusercontent.com/g-NFUWjS4IGgym8PHBxyhg5-G_B4x-IHgPKRkxo00JQFE3LOd-95yU2uhrokITVmV7KHEav6OMfAhfJ4roC5hwP-0tI9dMRd9wQLdw=s120"
    },
    {
        "name": "RUDEKIDZ",
        "slug": "rudekidz",
        "logo": "https://lh3.googleusercontent.com/Xdk3QDQd2GQd6AnCyQMFjyQn0k4lwAa788W_IU-Gco6nrevgAWatq4I-sqnX-e0vDo1lyUjY5KHrrIUEvJ30fHdz1hjQtExIWW0XoKU=s120"
    },
    {
        "name": "Meta Angels NFT",
        "slug": "metaangelsnft",
        "logo": "https://lh3.googleusercontent.com/J4sUEAJDbvc-6bgkHQyNtQRxlFr1CkZZ1d14DSGR1x7miJZN0AXcV81Hlc9yQEx3XkyAnvbeFukFQlODyNDjwBcIvHOsh7eeYTIQnWs=s120"
    },
    {
        "name": "Travel Tiger Club by Travala.com",
        "slug": "travel-tiger-club-travala",
        "logo": "https://lh3.googleusercontent.com/--O8ECSSkpKFnj2n9WeY6fXXIX000tB4Wq6oBBzlK5e6GNIaPWj_0TC4ZbeJtY6RerWCfTAYkyDWaD5OPYCUc2W__5KKXVnQ076pM60=s120"
    },
    {
        "name": "Tiny Heroes",
        "slug": "tiny-heroes",
        "logo": "https://lh3.googleusercontent.com/KMVwvAdcwzca2mQVd7spN0_wltcvJutTwJ-NKWrxtg7Hc0XnNVQgUHykvPlAY_1VcNMNh2zpzfi1MJIvtm46SIrESmTFvo0lMx-z=s120"
    },
    {
        "name": "Forgotten Ethereal Worlds",
        "slug": "forgotten-ethereal-worlds",
        "logo": "https://lh3.googleusercontent.com/eJ5dMGWC7YxOfBIvqXGBojHcKBnYewSLrCC9Nro1XrMYTqRBEzxizeMylHYDNkiAXVFsOhniP9w9YcwJJES9BBP2ol0iesBrC1ZnM7Y=s120"
    },
    {
        "name": "hauspets",
        "slug": "hauspets",
        "logo": "https://lh3.googleusercontent.com/zpKxF7wrAetDo0eNmeWlX3r-deBq5jvXnWnBcMiIz4z1bYk6Meza_tcTuDwNiYtpZaN8bj_TQO8qzcTAw1W6HAELns6bvHXgYi-X7w=s120"
    },
    {
        "name": "Legionfarm Gaming Heroes #1",
        "slug": "legionfarm-gaming-heroes-1",
        "logo": "https://lh3.googleusercontent.com/ndD2dA3zKwWqbilG98mYBEtlyug3CGji3DeFvK6FnGL1WhNxFGVJM6tPWMIQAauFPBpKyV7vdc5EtpOGbTPwbFNMJoBR9Jau9pdN=s120"
    },
    {
        "name": "CryptoRayRays",
        "slug": "cryptorayrays-collection",
        "logo": "https://lh3.googleusercontent.com/GHsoJ85qlPWTbrKywAOH6nq0duV18NsGEXZN9I9RUim8eLTVeLEAcl6Khqi3Kgwd2be2jWLkHLS87I_09_KGB8qRWfRgU0TjLxkCZw=s120"
    },
    {
        "name": "Club Hippo",
        "slug": "club-hippo",
        "logo": "https://lh3.googleusercontent.com/dr1p03FUREMsvUUfO_7jPpV1N_nxrb70uCgHJ-yFyN-7PfNlC7aGeBbfKILvorXdMKGaA9_bxBxIDMQEnkDiIa-vTCxkECCIqUo2RA=s120"
    },
    {
        "name": "Super Fat Academy - Fraternity Alpha",
        "slug": "superfatacademy",
        "logo": "https://lh3.googleusercontent.com/jXdGYX7B8ezvBY6HXZqIdfEI55jPDnmSCvpDCic46hf1R8wcGKKvVipxpiDRaVNb5wReRWu2TxKqrpFeyhkltCjUWYhjyG4U_TMdKA=s120"
    },
    {
        "name": "Ethereal Art - Asia Ladowska",
        "slug": "ethereal-art-ladowska",
        "logo": "https://lh3.googleusercontent.com/Uib4wTw6vxs_07nIrGEUyj2IoFbMaMtoOD9Sp5bgE3_Aomrklf9iPP5s9ja512s3Nr4iZ3Kdbio0_dELAonNoXY-ojidaNXYsm8IzQ=s120"
    },
    {
        "name": "Zinja NFTs",
        "slug": "zinja-nft",
        "logo": "https://lh3.googleusercontent.com/oneorLkWjlNI284JegwZIF-m7bxNoKIgnUEnnvolw4tAQiHM8DOhj3Sej_JflrlEwJ8W5uuPedbI9cNg4eeXhOzLhK_1bqS1YskJkog=s120"
    },
    {
        "name": "Super Yeti",
        "slug": "superyeti",
        "logo": "https://lh3.googleusercontent.com/SCLQ9GXToC6SHT2SIayi1E1bzngDbBDzjpn_ikU3dV52xxTVSQqo3AjtPtAWMUfulMdFH4gAbv1vQNpmtYz5KAIsBE_7EfnpcahmFw=s120"
    },
    {
        "name": "Lil' Heroes by Edgar Plans",
        "slug": "lil-heroes-by-edgar-plans",
        "logo": "https://lh3.googleusercontent.com/4WmDJuV477K7gHdjHS0VffmQ0IfaMAaB7HVFtCU8bzx9hUMmlJJT7b-SlNO34cuzb6xNkq1AmaSBftryMVf54a9Nq0J865BimGwHKCY=s120"
    },
    {
        "name": "Cosmic Cats Official",
        "slug": "cosmiccatsofficial",
        "logo": "https://lh3.googleusercontent.com/3zlTN7HJPnS_avFw3HPfFXfdlrA5kt3a06eED1LaPAUxUG9TyiTMw9z8y_vlqLaPXHpJU0-2cbJIV9LgeMX-cX8UN1gE0lrjpSOQLSI=s120"
    },
    {
        "name": "Tom Sachs Rocket Factory",
        "slug": "tom-sachs-rockets",
        "logo": "https://lh3.googleusercontent.com/dajx50F-VzEd3YeUMmZhKWPy42X7vq0d4Emqe7BB2c5XDYToFgpbi_VlmpHMofZJ6RVi7VEJ-G_WAH3D0MN48fAmAV0Uq2S1iY_yAQs=s120"
    },
    {
        "name": "PREMINT Creator Pass",
        "slug": "premint",
        "logo": "https://lh3.googleusercontent.com/n0-gp1OZk-p-3_-6KX5-wCzV2c7DhhMBbhoKzVawVdkad5C1_TnCKWo-heG56uklsGY9tjVZJPhlmQEhiobMQSXBUR1tS0l0NYGDtw=s120"
    },
    {
        "name": "Art of Prediction",
        "slug": "art-of-prediction",
        "logo": "https://lh3.googleusercontent.com/bbmrziCDvrCLgF29FjkvT2uVFiXp6QsU7Bw--whIYtBnYw8ecNqV6ADHxB3XTnt_ThbJWz54xPMw2jJR2KmPWZQLgrksIE_laHKanZM=s120"
    },
    {
        "name": "Cuddly Cubs",
        "slug": "cuddly-cubs",
        "logo": "https://lh3.googleusercontent.com/7xgrrUzIu6lCyVGHAFc_DAAFQq65IQVhDEEf9RicaKfMruoeo9Y6ocE48IDV4BeCDy2Pbep5MqLMXNc1WP-LzIDXm4W-2BRl6n2wT9M=s120"
    },
    {
        "name": "Resorts V2",
        "slug": "resorts-v2",
        "logo": "https://storage.opensea.io/files/b5b3f6319a87c4cff3de44e0a1af0cef.svg"
    },
    {
        "name": "Meridian by Matt DesLauriers",
        "slug": "meridian-by-matt-deslauriers",
        "logo": "https://lh3.googleusercontent.com/o5Tt1FbaINxqvS47-r3weuCEaTKGbc5yZJS0yXtDyBDwVeyYVWr7angBivb3iGXKc_1Q-a-DBwxu_VMynRnPbJHVnkt4u1pbBTDz"
    },
    {
        "name": "Degenz",
        "slug": "degenz",
        "logo": "https://lh3.googleusercontent.com/vH7gGLr1U-MQ2wS_Xtxhd5UcA_y-vs4RNFIvh6_2I2zVIf9pahLQB8Om5_q80FbbOAWioTFyP5Pof7EpdY4zfrCuNEzGDWVE9bTy=s120"
    },
    {
        "name": "Turf Plots",
        "slug": "turfnft",
        "logo": "https://lh3.googleusercontent.com/WxjLWoPDXbkvbx2WY_j6lj_Kf7VsTSPawVJ1qdrAokZApGk9LPTewp60ZG275mH0gH9zALpGJYqogwHkncSxXbXTuIP5DNsimr-r1A=s120"
    },
    {
        "name": "Lostboy NFT",
        "slug": "lostboy-nft",
        "logo": "https://lh3.googleusercontent.com/jp3OeskDt-Jk69YDLjTTgVNMpGpmohM-h5AcCMLiVTeiRLNvpeGnW1sEhGIoWV6WxGYVKCrJQRGiHyfj4V9OLmkHpfhGGTM-kks8DA=s120"
    },
    {
        "name": "The Holy Pets",
        "slug": "holy-pets",
        "logo": "https://lh3.googleusercontent.com/shZiK-NlzckxpHHYkCNCO-6qquEFFT6CjuGEOWaAY1URT7-8LAa6aLlVNTPnP9oRTVcjd-Joj3ef1uyts13Mjx7Q7Kof8tStoLdqxIo=s120"
    },
    {
        "name": "WEEDGANG.GAME - STRAIN",
        "slug": "weedgang-game-strain",
        "logo": "https://lh3.googleusercontent.com/nICZttiJf6VOQd817t8T_WAvpetBGzAdJSFKS5DbLOGoWaT9IQEnau_E1XSxpuPtmXR6bgjXeDBW7lTNAX93vsPVelscPx3ro158Pg=s120"
    },
    {
        "name": "GM420",
        "slug": "gm420",
        "logo": "https://storage.opensea.io/files/40066f73e79ba75eb68c7aea75830883.svg"
    },
    {
        "name": "Habbo Avatars",
        "slug": "habbo-avatars",
        "logo": "https://lh3.googleusercontent.com/DL0wRno1hjuLgSuHKXrCobkRIswiN7C6daCJJUt-jl5t2kF8Lp-R4w6bgma9aNNGcttljZgCAZqXE8or3XiXNwYwjCeMVCrDLtPz41U=s120"
    },
    {
        "name": "Thingdoms",
        "slug": "thingdoms",
        "logo": "https://lh3.googleusercontent.com/pj2DA_BEkdRyLSReBoSPokAAapXPSBF8bWy1MyeJCaSbcj5u-_L0ZRnWdmSEalt6vKWAcTnK1w9LXsHAtvXiDPsgf5PX3UODUgeR=s120"
    },
    {
        "name": "Funky Flies Official",
        "slug": "official-funky-flies",
        "logo": "https://lh3.googleusercontent.com/lM7YSU8CuxUvFPaEWzDMjBPCVt7H_C9zsVZHzR6fj22X5ROO8fv4rfgJUxx1g1dIrgRLLYKxnNpNVgIUNh3UYsFmDJz2lLYAS4CLZy0=s120"
    },
    {
        "name": "Neo Tokyo Outer Item Caches",
        "slug": "neo-tokyo-outer-item-caches",
        "logo": "https://lh3.googleusercontent.com/fmy3rZQgswpkd5TV3QWl66JG3SvIPGhWDtHr3dKKi15EAUb96k-lKFsi0amKXyJv9Lh7xnDBHG0Btq--bIorfDfL0dJ39RVQYofU=s120"
    },
    {
        "name": "Special Edition Girlies",
        "slug": "special-edition-girlies",
        "logo": "https://lh3.googleusercontent.com/eXqPxHBFHmf0rq0zEUr6-tj7CPp54FibX0jnvrtw1kc7JLQ0uO1DEMf711rVbtRnK1bFabPyhbHBwswv_mSMCpVlNvL8xvay8FV5=s120"
    },
    {
        "name": "MurMur Cats",
        "slug": "murmurcats",
        "logo": "https://lh3.googleusercontent.com/0LSLR7vFqFxdJrCkTsCSMyCgEl5UNeXvrkNCvPCRie5sLE528V5wSCyVHTt-kIlmLodd2kYiOzhrwpvkgkELYqga9-GDW8Pfi8bl=s120"
    },
    {
        "name": "10KTF Stockroom",
        "slug": "10ktf-stockroom",
        "logo": "https://lh3.googleusercontent.com/8Psw091U98gxhuI5MH0GDpjEebrlZ3XxzqDbP8eD35j0IyyFapeFu-zKYu_z1jn7PiduRxkXPgSc2wp-PgDpr3Ji70mD9yu1ksb3eQ=s120"
    },
    {
        "name": "Samurai Saga",
        "slug": "samuraisaga",
        "logo": "https://lh3.googleusercontent.com/xTEYeliaqJ0F239BrFP3ql7Qmarc24KWIHTSDSQIPOjuuiTObPm9o7GOkH-oMx6YW2CqMQa9z4M-3J4iyaMMHeQZZdfrjx9pZYCq=s120"
    },
    {
        "name": "OogaVerse",
        "slug": "oogaverse",
        "logo": "https://lh3.googleusercontent.com/AoXwtxKcBI8H6_p4nMU9l5ni3srWh9vaQsQmZLB2LzRmu2ivIfF5UiaQWpvV0cOZ-qapx2X7W571WGy9lR0Xt4HShXAnIMo3c2K3QWg=s120"
    },
    {
        "name": "Mee Cats NFT",
        "slug": "mee-cats-nft",
        "logo": "https://lh3.googleusercontent.com/zUiK5acKggHH-qie1ZovGlIp9AmBnrDHEPLotvwUDHm1wxe3POhWa5lNID5TxuwImy4omHIw6XGaWA2-UfuKygMspLo_3GI9IUoyfw=s120"
    },
    {
        "name": "Klaypad Key",
        "slug": "klaypad-key",
        "logo": "https://lh3.googleusercontent.com/GE2R1e0aZXlItNS5ZO3jhwOqylrfXmQhHlhP_CCbnkjTYsrjm4rZYk48xCjFwHQXAf_01b8SXCSnvBE7J6-84NEMYQ8BtC6X8iiD=s120"
    },
    {
        "name": "Yuga Punks",
        "slug": "yuga-punks",
        "logo": "https://lh3.googleusercontent.com/O0TPreCr-fnuhYTUGwHPfp3gZgqwAogRrdmkm60Aiozg9kTuyMeIKc_A0I_yBNIJfoISRuGllSHsatOjxxMWHMMxMOhMbpOJ43wM8A=s120"
    },
    {
        "name": "Evaverse",
        "slug": "evaverse",
        "logo": "https://lh3.googleusercontent.com/FbrOJX99uNKuOVxBSqt3MqmtYZhFE7uXEZ8LI3NL_bCxZ64ciCi9dLZPDJ4UJhoAPUGotxBoAI-dXx_OHBxHlhEYSi278CZs6Qiw=s120"
    },
    {
        "name": "BEANS - Dumb Ways to Die",
        "slug": "beans-dumb-ways-to-die",
        "logo": "https://lh3.googleusercontent.com/qXvhLctJ8ajL_68PNU10U_Gb8fjgk_1b7OgLGLEQiBqrS4lMeTvRUnz-YF_Z6l_WhgF_fsZPlBqdXui-LTnqu74WOgifLgSIF19N1g=s120"
    },
    {
        "name": "sail-o-bots by sturec",
        "slug": "sail-o-bots-by-sturec",
        "logo": "https://lh3.googleusercontent.com/pNMM6sE5xvRRFqkWUnmXyHmHkM7bZCfV8im2zGSetX6SbdwpHdfYyXz6jchoZ9otzsaKwaKNyaq8OA9Y-cbI6X5E_A2B7dKrFTkx2g"
    },
    {
        "name": "Angry Ape Army Evolution Collection",
        "slug": "angry-ape-army-evolution-collection",
        "logo": "https://lh3.googleusercontent.com/qm4oUtUkQyMFCCD5R_UHZTfPqchyfc0S8PToEy3Ncw9n5DmaIsSstPlh2pxh8xmAmMi465qv-DwEFdojOOBGlAIZARqXCBvhIK74=s120"
    },
    {
        "name": "LaserCat NFT",
        "slug": "lasercat-nft",
        "logo": "https://lh3.googleusercontent.com/CoquxgvVeYhbP7F5PQm0PUuQxrLS-GIccPQXjUhKgPO2WBLW5wdzKDyE9kkr1pHsRF8washlF55pOzJQ7JQXGFyTqtuMwwBWHuJs=s120"
    },
    {
        "name": "89 Seconds Atomized",
        "slug": "89-seconds-atomized-v5",
        "logo": "https://lh3.googleusercontent.com/_mkWRKlSIRb6zhZVCggXxT-hCmwmUOMWrkpVOIGG3eD8Z6mDr2TAxsa09v-qjDiMNABPtfXHzDzWYhe0eScwn7FQ=s60"
    },
    {
        "name": "Weather Report Intl.",
        "slug": "weathereportofficial",
        "logo": "https://lh3.googleusercontent.com/gqRyan-Fk3-zGCfxJxgnaAOVrHdCoEcDlEwDgLt1AvcLZHSLouo6JUduTfZPs3RL82g9aQWKsk34Qp0R31ySOK2aa0224IhBEMHG=s120"
    },
    {
        "name": "MEKAZUKI",
        "slug": "mekazuki",
        "logo": "https://lh3.googleusercontent.com/8Akgdo2c4tTDM66ONld8ReQbzon01nOEucUm7gELkwWrUl-tfevEVNIZ_IdNe9Xt5iYQFomz-BtF1fqsXBY_4RcrU3UYEsbpD1euTg=s120"
    },
    {
        "name": "IRL Psychedelics Anonymous Pass",
        "slug": "irl-psychedelics-anonymous-pass",
        "logo": "https://lh3.googleusercontent.com/9VndAx-5SvVdamB8KvABGcw2bdXMdeyEYdhHJ22WMV98C2yS85SDT5rnBtT0zOxVjeJ6KBz2fXKXcYSIXeOc7aGiU4i0Rx9IwaMfO9o=s120"
    },
    {
        "name": "Queens+Kings",
        "slug": "queenskings",
        "logo": "https://lh3.googleusercontent.com/morG2Iz69vppkkU4M-f3awkdrK8EqDvZbw9oBF2iJFGyBld5xtHOwpRSk1wcwfvUu4OwoxxX5crKdj7FRFUiL7fUQ9hqyfDjrjpl=s120"
    },
    {
        "name": "The High Indians",
        "slug": "thehighindians",
        "logo": "https://lh3.googleusercontent.com/QyS19X0yu1JCwdrgVDdYfsw0jlZeAuvKD2JwuqP6VaEljK9pJjoVGp-GUE_a3oCDnGE_RCXZrnWf0Z3NSxsk8do-FI2UAW1xwdiBRg=s120"
    },
    {
        "name": "Wilder World",
        "slug": "wilderworld",
        "logo": "https://lh3.googleusercontent.com/VBrDThBCUkrZYE1hIAQg6HYQOTPnB2YQJwTtVp6LQe0qM4zbnmHmgYKI1bouD6Sici8SX7WI0K5N3FaFx9Cq14iXniY740BaYG8tJw=s120"
    },
    {
        "name": "Frontier Game",
        "slug": "frontiergame",
        "logo": "https://lh3.googleusercontent.com/OxFPtHkMcpPadPxxb8Kqr4E6fcEo_NoYG48X6heC7ttx8qM2KOAebNhKNm4u6wD9Fgb9JJn_n0vcxEJwfQA8hvrjv4mpmPO5uE77Ww=s120"
    },
    {
        "name": "FOMO Dog Club",
        "slug": "fomo-dog-club",
        "logo": "https://lh3.googleusercontent.com/jcvGNeEq2IQUgjaAmU0MsaftXW6jwK697BRPV9Zyk5KgiKGvUDkhEtdJpi5WJVG0QI-G9PfKjvVycrbrcL6Y4aOMtA2xwr_oJS21kg=s120"
    },
    {
        "name": "Uloan Token NFT",
        "slug": "uloantoken",
        "logo": "https://lh3.googleusercontent.com/L5_XzHqe5uP5gk8-2N9wm0n78YLNbouWL9E2n0JesEZX2QHAceWphVg4m0qJuLP1kse1QrZGOewO4RjiGsHv3Ageagld0CN0ZxltuQ=s120"
    },
    {
        "name": "FishyFam",
        "slug": "fishyfam",
        "logo": "https://lh3.googleusercontent.com/5Yq4zTYC55Ntc2KMb46quvtHkR23sEyyclexQY51jRvOpJLCqpvQ8ZZB-az5UgEVQYyuF1Wi5wXa43GrNJTqLDF8b9JZskuFsTzeqw=s120"
    },
    {
        "name": "WE ARE KLOUD",
        "slug": "we-are-kloud",
        "logo": "https://lh3.googleusercontent.com/ICJQZ_ahWfDPdtF-wz9gx79qTjU5A08L9fGkdB_HEyLT0EzYpE6zIdjZGPq4mwEDd4cT3PufBeMDohfppoX2RXdbfDxSxEYio7gh=s120"
    },
    {
        "name": "Nostalgia by YMH",
        "slug": "nostalgia-by-ymh",
        "logo": "https://lh3.googleusercontent.com/2RBeIu9CTUO-NMGSyjqvZ-aIRqNk3yg7Qbpt8WSVtv2YxVxGoYbC_oX8wxcDOiRG8sGMxy6y4BhBWWkQhauVQ4lzWmu5eazoY3GB=s120"
    },
    {
        "name": "Killer GF",
        "slug": "killergf",
        "logo": "https://lh3.googleusercontent.com/KMl96HWwKockuqsrNdOK498dP_yzgwvYrapQ4i8eyXfuF7_C_Yp3xRDDANU8J8EM2A9Ydmm6VICkjEHJyNalfFqXkWryLXPbGzPAVw=s120"
    },
    {
        "name": "DumpsterDorks",
        "slug": "dumpsterdorks",
        "logo": "https://lh3.googleusercontent.com/uRl7myNsKgbLq3D6bMuzVofPLW5GNZKyhowG2VJKD9n6cp-qzv1kLUz9HvM5BgLIXmbigLpt4rribDhdRvSX8KHdkiqDJt9pBUhQyA=s120"
    },
    {
        "name": "SoulZ Monogatari",
        "slug": "soulz-monogatari7777",
        "logo": "https://lh3.googleusercontent.com/Zpmnw--cV8P32EmTXf9BGl51wdSP2DKFMNAzLAMe97C8NLQFcABOLO_AZQMSsMV1AaMhlyGpPfCeVXssqnSsdP6W5XMmlW1eRSZU=s120"
    },
    {
        "name": "ExpansionPunks",
        "slug": "expansionpunks",
        "logo": "https://lh3.googleusercontent.com/wOcdC7XRZ5JZ3Z5xym5jEi895YGuZKzrDxRLaxHPXWBPxH8fzXs9_7oml8mka4Suj2xp-yAu4q9Qp3-vx5aiWCbh-WCyu2pybUUEIQ=s120"
    },
    {
        "name": "Galaxy Fight Club",
        "slug": "galaxy-fight-club",
        "logo": "https://lh3.googleusercontent.com/AG-bMrIZAa8Gby3GSuacvR7KWfD3AIvFD1H7r9-3z_iIm1GI9n6NBt573G_xeQq-RggWtmJkU27wLX9sE_ZJViL-wFpd88y8ewjT6g=s120"
    },
    {
        "name": "Bad Bears Genesis",
        "slug": "badbearsgenesis",
        "logo": "https://lh3.googleusercontent.com/zZAcIKe5CWCuYdKe3QkgL_2UsG931OMCruWKxXGBD9aIxGmblVcbfQA2d7hFqkToO4fP4mOLoz7sRrTpBSDK2N-OnSxyGVXGNjvR=s120"
    },
    {
        "name": "Gambling Apes",
        "slug": "gamblingapes",
        "logo": "https://lh3.googleusercontent.com/L4UK_wLnVUUL1BPUgex4ntWhS-IREHFKR6nxqFrxervu7iumFc9Za6cSVK6o8wGfPlmLpIFgzLHsq432a9_SMT7y2LXVTpbDwNkvFQ=s120"
    },
    {
        "name": "0xMAYC Official",
        "slug": "0xmayc-official",
        "logo": "https://lh3.googleusercontent.com/q8tEGsTmOJ40v5O45_-jsiRxm_K4XwV8PiCW8HbelxpPwX2GAmgJbFnikwIfwRW9vcqCCcefjESKwZIrc-boYOOAX_4OIqsnyzNqiOA=s120"
    },
    {
        "name": "Giraffe Tower",
        "slug": "giraffe-tower",
        "logo": "https://lh3.googleusercontent.com/jklDozXBeZBIWa9Jxh-faNb3LtdZeOV9fEaeBkABN4fpnW_IWS2UyYstiCTkZm4Gzhm3bVE_xniv6TA2UGaCHewUTKUAd3fiVn2Xcg=s120"
    },
    {
        "name": "Aurora Hunter NFT",
        "slug": "aurorahunter",
        "logo": "https://lh3.googleusercontent.com/0HYu2T5sLYiHOfvLwupEzvHE1UHF-GlsGQzCCTl_F-LAo4swzRPfUreVeW4nDnChAHlu5GzL_0FjCKj8XPdkm0iYnnnm-D3UOfIeAos=s120"
    },
    {
        "name": "Moon Ape Pets",
        "slug": "mal-pets",
        "logo": "https://lh3.googleusercontent.com/BZjkNyR-s0etUyzdsK4xpiE531zW_QifXNtnzreMgSRTLnrHyYLeYNMQk7300U5bOxeWObM6bJv-RQiuHs-3wV6GJEfy_ZDxoxOgLw=s120"
    },
    {
        "name": "Ethereum Towers",
        "slug": "ethereum-towers",
        "logo": "https://lh3.googleusercontent.com/zsX8dqcLECR0sRgPMcvUy3RSo0_URgTbMCKH2PRz7pzXDL44UenGu7KMvxErNc9JrTQkDxDPIfJAqQ_5noDl9U9MYVjhXm7xn663seI=s120"
    },
    {
        "name": "Hashmasks",
        "slug": "hashmasks",
        "logo": "https://lh3.googleusercontent.com/6X867ZmCsuYcjHpx-nmNkXeHaDFd2m-EDEEkExVLKETphkfcrpRJOyzFxRQlc-29J0e-9mB9uDGze0O9yracSA9ibnQm2sIq5i2Yuw=s120"
    },
    {
        "name": "The Orbs by BT",
        "slug": "theorbsbybt",
        "logo": "https://lh3.googleusercontent.com/CpUPdCh-yk-F8w68DjV5Dt2hLtLFq7gFtZNGITrBlMwdul2ZR_qxGcz18gt-502WgDADvOnHYoDf9yFdR-FfuVDLpu9N9iRMd2es=s120"
    },
    {
        "name": "Fortune Friends Club Official NFT",
        "slug": "fortune-friends-club-official-nft",
        "logo": "https://lh3.googleusercontent.com/hMbOHECbaMtuobe66b0D3XL7c27SCjuR-TB1YmyTOYv7fLEZqMjE_Qv-Y5sMuyz5wV3QlxSaiUOOlJ2_FsI26fRoEUE1Jh6RAFPowA=s120"
    },
    {
        "name": "Women Tribe NFT",
        "slug": "official-women-tribe",
        "logo": "https://lh3.googleusercontent.com/2LhfMy_lvayjRds1DtRGNbJUNSUFderN5QwuKs7AQ5YkyUpbxPrBHXg6b_YxBw3sExI9aD9s5F1KRB_ZrubmOcLamAMiXohzz67CQw=s120"
    },
    {
        "name": "Gaia Supernova",
        "slug": "gaia-supernova",
        "logo": "https://lh3.googleusercontent.com/hAiWLsSF8BSYRK69Y-F0tZksJ8qWzp7zLo-07MR9OEMRCISa6fTHi1GgDL1cqQ0utUZRczV9zKnZWSEob1NvQmH7gzt0Iz6XyqkS=s120"
    },
    {
        "name": "Interconnected Planes",
        "slug": "interconnectedplanes",
        "logo": "https://lh3.googleusercontent.com/BYIy9n6gZyVz0N5TcEl-D4Q5eyBWjE_Wao7oMyXkgNSE59pHJ0v1ElrZEgfYMwSRxGTPo2IJoSCJZFYdZS0yyqcO24qpYDnoYDWA3-I=s120"
    },
    {
        "name": "Undead Pastel Club",
        "slug": "undead-pastel-club",
        "logo": "https://lh3.googleusercontent.com/dvcrWjYHh83wdOgOXChJioqkF_NtvHKOi63a8j33iivXMEtpGWQr6HQJ53N5RI8xWtKvK2PvN4XTjrgjVD0MUvWIGuKAGU697ReRaQ=s120"
    },
    {
        "name": "Flooz GEN F",
        "slug": "gen-f",
        "logo": "https://lh3.googleusercontent.com/Vr2LqMRAwYyHyP0fm-5RWY-GXrdFOKJuMINf_e9eRWUhPjVx8RH_d1MUMspRGgL49eJhsZX1jK03ksZPojbfVDsJjz-jzc0E4AwudVo=s120"
    },
    {
        "name": "Tunney Munney",
        "slug": "tunney-munney",
        "logo": "https://lh3.googleusercontent.com/CK34V4Jg7fof2FTwINjWh3_WCvsAz16hYPF5fkcfpNsA2NlHrzs3SCXL43QUGm1D4Bf9aJ3DUqJgSjSQqEKyvXKhxO8L9Ml6Y9vR_Q=s120"
    }
]
