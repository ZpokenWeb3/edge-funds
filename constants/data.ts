export interface Token {
  name: string;
  icon_uri: string;
  year_APR: number;
  month_APR: number;
  tvl: string;
}

export const tokens: Token[] = [
  {
    name: "USDC, USDT, DAI",
    icon_uri: "/USD.svg",
    year_APR: 15.8,
    month_APR: 23.4,
    tvl: "26mm",
  },
  {
    name: "BTC",
    icon_uri: "/BTC.svg",
    year_APR: 13.9,
    month_APR: 20.5,
    tvl: "2mm",
  },
  {
    name: "ETH",
    icon_uri: "/ETH.svg",
    year_APR: 14.2,
    month_APR: 21,
    tvl: "1mm",
  },
  {
    name: "BNB",
    icon_uri: "/BNB.svg",
    year_APR: 14.1,
    month_APR: 20.5,
    tvl: "0mm",
  },
  {
    name: "SOL",
    icon_uri: "/SOL.svg",
    year_APR: 15.2,
    month_APR: 22,
    tvl: "2mm",
  },
  {
    name: "ADA",
    icon_uri: "/ADA.svg",
    year_APR: 14.6,
    month_APR: 23,
    tvl: "0mm",
  },
  {
    name: "AVAX",
    icon_uri: "/AVAX.svg",
    year_APR: 13.9,
    month_APR: 22.5,
    tvl: "2mm",
  },
  {
    name: "DOT",
    icon_uri: "/DOT.svg",
    year_APR: 15,
    month_APR: 23.5,
    tvl: "0mm",
  },
  {
    name: "MATIC",
    icon_uri: "/MATIC.svg",
    year_APR: 16,
    month_APR: 21,
    tvl: "0mm",
  },
  {
    name: "ATOM",
    icon_uri: "/ATOM.svg",
    year_APR: 13,
    month_APR: 22,
    tvl: "0mm",
  },
  {
    name: "OP",
    icon_uri: "/OP.svg",
    year_APR: 0,
    month_APR: 23,
    tvl: "0mm",
  },
  {
    name: "APT",
    icon_uri: "/APT.svg",
    year_APR: 0,
    month_APR: 22,
    tvl: "0mm",
  },
  {
    name: "NEAR",
    icon_uri: "/NEAR.svg",
    year_APR: 13,
    month_APR: 21,
    tvl: "0mm",
  },
  {
    name: "INJ",
    icon_uri: "/INJ.svg",
    year_APR: 0,
    month_APR: 21,
    tvl: "5mm",
  },
  {
    name: "SEI",
    icon_uri: "/SEI.svg",
    year_APR: 0,
    month_APR: 22,
    tvl: "0mm",
  },
  {
    name: "SUI",
    icon_uri: "/SUI.svg",
    year_APR: 0,
    month_APR: 22.4,
    tvl: "0mm",
  },
  {
    name: "AAVE",
    icon_uri: "/AAVE.svg",
    year_APR: 14,
    month_APR: 22,
    tvl: "0mm",
  },
  {
    name: "XRP",
    icon_uri: "/XRP.svg",
    year_APR: 13.8,
    month_APR: 21,
    tvl: "0mm",
  },
];

export const sliderTokens: Pick<Token, "name" | "month_APR" | "icon_uri">[] = [
  {
    name: "USD",
    month_APR: 23.4,
    icon_uri: "/USD.svg",
  },
  {
    name: "BTC",
    month_APR: 20.5,
    icon_uri: "/BTC.svg",
  },
  {
    name: "ETH",
    month_APR: 21,
    icon_uri: "/ETH.svg",
  },
  {
    name: "BNB",
    month_APR: 20.5,
    icon_uri: "/BNB.svg",
  },
  {
    name: "SOL",
    month_APR: 21,
    icon_uri: "/SOL.svg",
  },
  {
    name: "ADA",
    month_APR: 23,
    icon_uri: "/ADA.svg",
  },
  {
    name: "AVAX",
    month_APR: 22.5,
    icon_uri: "/AVAX.svg",
  },
  {
    name: "INJ",
    month_APR: 21,
    icon_uri: "/INJ.svg",
  },
  {
    name: "DOT",
    month_APR: 23.5,
    icon_uri: "/DOT.svg",
  },
  {
    name: "MATIC",
    month_APR: 21,
    icon_uri: "/MATIC.svg",
  },
];
