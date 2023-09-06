CREATE TABLE IF NOT EXISTS users (
   id serial PRIMARY KEY,
   name VARCHAR (50),
   email VARCHAR (255),
   password VARCHAR (50)
);

CREATE TABLE IF NOT EXISTS coins (
   id serial PRIMARY KEY,
   name VARCHAR (50),
   price NUMERIC (10, 5),
   listed_at integer
);

INSERT INTO coins(name, price, listed_at) values('Bitcoin', 25766.0061, 1330214400);
INSERT INTO coins(name, price, listed_at) values('Ethereum', 1635.0981787, 1438905600);
INSERT INTO coins(name, price, listed_at) values('Tether USD', 41.0024728, 1420761600);
INSERT INTO coins(name, price, listed_at) values('BNB', 215.3849, 1503014400);
INSERT INTO coins(name, price, listed_at) values('XRP', 50.50434, 1421798400);
INSERT INTO coins(name, price, listed_at) values('USDC', 1.00266, 1539043200);
INSERT INTO coins(name, price, listed_at) values('Cardano', 50.25737954, 1506902400);
INSERT INTO coins(name, price, listed_at) values('Dogecoin', 540.064050060, 1391212800);
INSERT INTO coins(name, price, listed_at) values('Solana', 19.88082534, 1586539320);
INSERT INTO coins(name, price, listed_at) values('TRON', 50.07813514254231105, 1505260800);
INSERT INTO coins(name, price, listed_at) values('Polkadot', 4.2486, 1598365200);
INSERT INTO coins(name, price, listed_at) values('Wrapped Ether', 1637.6413, 1600259445);
INSERT INTO coins(name, price, listed_at) values('…aked Ether 2.0', 1861.2959, 1638756833);
INSERT INTO coins(name, price, listed_at) values('Polygon', 440.555609, 1558961160);
INSERT INTO coins(name, price, listed_at) values('Shiba Inu', 45450.000007751, 1620650373);
INSERT INTO coins(name, price, listed_at) values('Litecoin', 563.110994434979, 1382572800);
INSERT INTO coins(name, price, listed_at) values('Wrapped BTC', 25785.44310089, 1549894980);
INSERT INTO coins(name, price, listed_at) values('Dai', 451.002645168, 1585574040);
INSERT INTO coins(name, price, listed_at) values('Uniswap', 54.4495407068, 1600323371);
INSERT INTO coins(name, price, listed_at) values('Bitcoin Cash', 193.89625, 1541808000);
INSERT INTO coins(name, price, listed_at) values('Avalanche', 29.9471, 1600961596);
INSERT INTO coins(name, price, listed_at) values('Chainlink', 456.134, 1505952000);
INSERT INTO coins(name, price, listed_at) values('Binance USD', 1.00305, 1563197940);
INSERT INTO coins(name, price, listed_at) values('Toncoin', 154.759, 1640268459);
INSERT INTO coins(name, price, listed_at) values('Monero', 140.22058, 1422489600);
INSERT INTO coins(name, price, listed_at) values('Stellar', 450.120010, 1484611200);
INSERT INTO coins(name, price, listed_at) values('Cosmos', 6.854, 1552520100);
INSERT INTO coins(name, price, listed_at) values('…hereum Classic', 15.55, 1469577600);
INSERT INTO coins(name, price, listed_at) values('PancakeSwap', 1.24193, 1613642379);
INSERT INTO coins(name, price, listed_at) values('Hedera', 0.04898237, 1568704980);
INSERT INTO coins(name, price, listed_at) values('…uter (DFINITY)', 3.3445, 1601555742);
INSERT INTO coins(name, price, listed_at) values('Filecoin', 3.257794, 1602839473);
INSERT INTO coins(name, price, listed_at) values('Lido DAO Token', 1.5894778, 1627361901);
INSERT INTO coins(name, price, listed_at) values('Huobi Token', 2.3859877, 1517702400);
INSERT INTO coins(name, price, listed_at) values('ARBITRUM', 450.8973, 1679022695);
INSERT INTO coins(name, price, listed_at) values('MX Token', 2545.5748715844544785, 1568732160);
INSERT INTO coins(name, price, listed_at) values('Immutable X', 0.5532437418746363, 1649387294);
INSERT INTO coins(name, price, listed_at) values('Maker', 1108.9360671552372, 1502236800);
INSERT INTO coins(name, price, listed_at) values('VeChain', 540.01563831372756114, 1533427200);
INSERT INTO coins(name, price, listed_at) values('Pax Dollar', 145.0012697402673256, 1650960626);
INSERT INTO coins(name, price, listed_at) values('Frax Share', 55.565764288007879, 1640985232);
INSERT INTO coins(name, price, listed_at) values('…ust Wallet Token', 0.80461658364112, 1610717385);
INSERT INTO coins(name, price, listed_at) values('Quant', 99.21044757667633, 1533945600);
INSERT INTO coins(name, price, listed_at) values('Baby Doge Coin', 541.088228747e-9, 1626135916);
INSERT INTO coins(name, price, listed_at) values('Aave', 55.318302024579005, 1603447311);
INSERT INTO coins(name, price, listed_at) values('…thetix Network', 782.4913857544844964, 1554322020);
INSERT INTO coins(name, price, listed_at) values('Mantle', 70.4180485103300155, 1689647196);
INSERT INTO coins(name, price, listed_at) values('Cronos', 40.050443972678012004, 1548953220);
INSERT INTO coins(name, price, listed_at) values('EnergySwap', 7.681670990313016, 1626134763);
INSERT INTO coins(name, price, listed_at) values('Frax', 524.9981421892952859, 1615299931);
INSERT INTO coins(name, price, listed_at) values('USDD', 1887.0013022742215008, 1651913559);
INSERT INTO coins(name, price, listed_at) values('Algorand', 70.09422174927975965, 1562082540);
INSERT INTO coins(name, price, listed_at) values('Render Token', 154.3719102673050925, 1562331120);
INSERT INTO coins(name, price, listed_at) values('Aptos', 5.502291908623859, 1666148370);
INSERT INTO coins(name, price, listed_at) values('The Sandbox', 87.3116949612287974, 1613583024);
INSERT INTO coins(name, price, listed_at) values('NEAR Protocol', 51.1276175281329388, 1615164591);
INSERT INTO coins(name, price, listed_at) values('XinFin Network', 780.055330956541898, 1508025600);
INSERT INTO coins(name, price, listed_at) values('Tezos', 570.6974101149992044, 1530662400);
INSERT INTO coins(name, price, listed_at) values('WhiteBIT Token', 57.32737098057486, 1664862997);
INSERT INTO coins(name, price, listed_at) values('Decentraland', 570.2969291213679792, 1500336000);
INSERT INTO coins(name, price, listed_at) values('MultiversX', 24.755159218150116, 1612524044);
INSERT INTO coins(name, price, listed_at) values('Theta Token', 750.6286278234308664, 1516233600);
INSERT INTO coins(name, price, listed_at) values('Bitget Token', 50.436802593280846, 1651983014);
INSERT INTO coins(name, price, listed_at) values('WEMIX Token', 780.5877994342512524, 1638249982);
INSERT INTO coins(name, price, listed_at) values('Nexo', 8770.5860457739485195, 1525219200);
INSERT INTO coins(name, price, listed_at) values('Bitcoin SV', 730.424287783482796, 1541808000);
INSERT INTO coins(name, price, listed_at) values('Bective Protocol', 6.856253493087307, 1610977844);
INSERT INTO coins(name, price, listed_at) values('EOS', 750.5835268830603626, 1498694400);
INSERT INTO coins(name, price, listed_at) values('Ocean Protocol', 0.32364740537335857, 1563192240);
INSERT INTO coins(name, price, listed_at) values('Radix', 450.05350237086884174, 1653989654);
INSERT INTO coins(name, price, listed_at) values('NEO', 7.414912783735585, 1501891200);
INSERT INTO coins(name, price, listed_at) values('WOO Network', 0.1633770506890009, 1627113782);
INSERT INTO coins(name, price, listed_at) values('TrueUSD', 451.00080, 1520380800);
INSERT INTO coins(name, price, listed_at) values('Kaspa', 450.038, 1665132341);
INSERT INTO coins(name, price, listed_at) values('Chiliz', 440.059705866963310254, 1562332440);
INSERT INTO coins(name, price, listed_at) values('PAX Gold', 1914.439775495038, 1570197780);
INSERT INTO coins(name, price, listed_at) values('Vulcan Forged', 4.0811159, 1619531495);
INSERT INTO coins(name, price, listed_at) values('IOTA', 4540.17006, 1497364209);
INSERT INTO coins(name, price, listed_at) values('THORChain', 1.5628065, 1574782200);
INSERT INTO coins(name, price, listed_at) values('eCash', 0.0000234, 1634887994);
INSERT INTO coins(name, price, listed_at) values('Flow', 4540.43805, 1614963736);
INSERT INTO coins(name, price, listed_at) values('The Graph', 70.087389, 1609341525);
INSERT INTO coins(name, price, listed_at) values('Stacks', 650.46978, 1574174220);
INSERT INTO coins(name, price, listed_at) values('Terra Classic', 650.000, 1565957940);
INSERT INTO coins(name, price, listed_at) values('Zcash', 25.0052, 1477612800);
INSERT INTO coins(name, price, listed_at) values('Tokenize Xchange', 5.0279, 1596033180);
INSERT INTO coins(name, price, listed_at) values('Trve DAO Token', 0.44620011, 1597402380);
INSERT INTO coins(name, price, listed_at) values('Casper', 0.034366, 1620306825);
INSERT INTO coins(name, price, listed_at) values('BitTorrent-New', 4.07621984641e-7, 1657036895);
INSERT INTO coins(name, price, listed_at) values('…rst Digital USD', 1.001778, 1691380699);
INSERT INTO coins(name, price, listed_at) values('Ankr', 45450.01857039, 1552484520);
INSERT INTO coins(name, price, listed_at) values('…rotocol Token', 0.37631375660272937, 1623662716);
INSERT INTO coins(name, price, listed_at) values('Fantom', 5000.2016636712939228, 1540944000);
INSERT INTO coins(name, price, listed_at) values('FTX Token', 156.0495603579105617, 1566222960);
INSERT INTO coins(name, price, listed_at) values('PEPE', 78.94586292501e-7, 1681785707);
INSERT INTO coins(name, price, listed_at) values('Klaytn', 1500.13358138, 1572962760);
INSERT INTO coins(name, price, listed_at) values('Compound', 40.61208841760905, 1593519840);
INSERT INTO coins(name, price, listed_at) values('Ravencoin', 520.015031, 1520726400);
INSERT INTO coins(name, price, listed_at) values('APENFT', 3445.12462989267e-7, 1626838226);
INSERT INTO coins(name, price, listed_at) values('Gemini dollar', 1.0061448854460089, 1538870400);
