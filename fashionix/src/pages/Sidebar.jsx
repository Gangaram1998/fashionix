import {
    Box,
    Flex,
    Text,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

let Men = [
    "NEW",
    "ZARA ATHLETICZ",
    "BASICSNEW",
    "TRENDNEW",
    "LINEN",
    "SUITS",
    "SHIRTS",
    "T-SHIRTS",
    "POLO SHIRTS"

];

let Women = [
    "NEW",
    "BASICS",
    "BLAZERS",
    "JACKETS | OVERSHIRTS",
    "DRESSES | JUMPSUITS",
    "SHIRTS",
    "T-SHIRTS",
    "TOPS | CORSETS",
];

let Child = [
    "GIRL | 6 - 14 YEARS",
    "BOY | 6 - 14 YEARS",
    "BABY GIRL | 6 MONTHS - 5 YEARS",
    "BABY BOY | 6 MONTHS - 5 YEARS",
    "MINI | 0-12 MONTHS",
    "ACCESSORIES",
    "JOIN LIFE",
];

let Beauty = ["FACE", "LIPS", "EYES", "NAIL POLISH", "BRUSHES", "REFILLS"];

let Origins = ["MOVIE", "LOOKBOOK", "COLLECTION", "CAMPAIGN", "STORE LOCATOR"];

function Sidebar() {
    const [nam, setName] = useState(Women);
    const [mens, setMens] = useState(Men);
    const [kids, setKids] = useState(Child);
    const [beauty, setBeauty] = useState(Beauty);


    return (
        <Box className="scrolldetails" color={"black"}  fontFamily={"Neue-Helvetica, Helvetica, Arial, sans-serif"}>
            <Flex gap={6}>
                <Tabs>
                    <TabList>
                        <Tab fontSize={"11px"}>WOMEN</Tab>
                        <Tab fontSize={"11px"}>MEN</Tab>
                        <Tab fontSize={"11px"}>KIDS</Tab>
                        <Tab fontSize={"11px"}>BEAUTY</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            {nam &&
                                nam.map((el, ind) => {
                                    return (
                                        <Text key={ind} fontSize="xs" fontWeight={400}>
                                            <Link to="/women">{el}</Link>
                                        </Text>
                                    );
                                })}
                        </TabPanel>
                        <TabPanel>
                            {mens &&
                                mens.map((el, ind) => {
                                    return (
                                        <Text key={ind} fontSize="xs" fontWeight={400}>
                                            <Link to={`/mens`} >{el}</Link>
                                        </Text>
                                    );
                                })}
                        </TabPanel>
                        <TabPanel>
                            {kids &&
                                kids.map((el, ind) => {
                                    return (
                                        <Text key={ind} fontSize="xs" fontWeight={400}>
                                            <Link to={`/kids`}>{el}</Link>
                                        </Text>
                                    );
                                })}
                        </TabPanel>
                        <TabPanel>
                            {beauty &&
                                beauty.map((el, ind) => {
                                    return (
                                        <Text key={ind} fontSize="xs" fontWeight={400}>
                                            <Link to={`/beauty`}>{el}</Link>
                                        </Text>
                                    );
                                })}
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
            <Box mt={8} mb={8}>
                <Text fontSize="xs" fontWeight={400}>
                    +INFO
                </Text>
            </Box>
        </Box>
    );
}

export default Sidebar;