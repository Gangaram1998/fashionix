import React from 'react'
import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export const WomenSinglePage = () => {

    const { id } = useParams();

    const [data, setData] = useState({});
    const getData = async () => {
        let res = await fetch(`https://saraweb.onrender.com/women/${id}`);
        res = await res.json();
        setData({ ...res, quantity: 1 });
    };
    console.log(data);

    useEffect(() => {
        getData(id);
    }, [id]);

    let localD = JSON.parse(localStorage.getItem("Data")) || [];
    const handleLocal = (data) => {
        localD.push(data);
        localStorage.setItem("Data", JSON.stringify(localD));
    };

    return (
        <div
            style={{
                display: "flex",
                marginTop: "200px",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    width: "15%",
                    padding: "1rem",
                    marginBottom: "50px",
                    fontFamily: "Neue-Helvetica, Helvetica, Arial, sans-serif",
                    textAlign: "start",
                }}
            >
                <p style={{ marginTop: "20px", fontWeight: "bold", fontSize: "15px" }}>
                    MATERIALS, CARE AND ORIGIN
                </p>
                <p style={{ marginTop: "20px" }}>MATERIALS</p>
                <p style={{ marginTop: "20px", fontSize: "12px" }}>
                    We work with monitoring programmes to ensure compliance with our
                    social, environmental and health and safety standards for our
                    garments.
                </p>
                <p style={{ marginTop: "20px", fontSize: "12px" }}>
                    To assess compliance, we have developed a programme of audits and
                    continuous improvement plans.
                </p>
                <p style={{ marginTop: "20px", fontWeight: "bold", fontSize: "14px" }}>
                    OUTER SHELL
                </p>
                <p
                    style={{
                        marginTop: "20px",
                        fontWeight: "bold",
                        fontSize: "10px",
                        textDecoration: "underline",
                    }}
                >
                    View more
                </p>
            </div>
            <div
                style={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "50px",
                    // borderRadius: "10px",
                }}
            >
                {" "}
                <img
                    src={data.imgUrl}
                    width="400px"
                    alt={data.prod_name}
                    style={{ borderRadius: "20px" }}
                />
            </div>
            <div
                style={{
                    width: "18%",
                    border: "1px solid black",
                    padding: "1rem",
                    // borderRadius: "10px",
                    fontFamily: "Neue-Helvetica, Helvetica, Arial, sans-serif",
                    color:"black"
                }}
            >
                <p>PRODUCT : {data.prod_name}</p>
                <p style={{ marginTop: "20px" }}>PRICE : $ {data.price}</p>
                <p style={{ marginTop: "20px" }}>DESCRIPTION : {data.material}</p>
                <p style={{ marginTop: "20px" }}>SIZE : {data.size}</p>
                <Flex gap={5}>
                    <Button
                        mt={"20px"}
                        bg={"black"}
                        color={"white"}
                        _hover={{ bg: "grey", color: "white" }}
                        onClick={() => handleLocal(data)}
                    >
                        Add To Cart
                    </Button>

                    <Link to={`/cart`}>
                        <Button
                            mt={"20px"}
                            bg={"black"}
                            color={"white"}
                            _hover={{ bg: "grey", color: "white" }}
                        >
                            View Cart
                        </Button>
                    </Link>
                </Flex>
            </div>
        </div>
    )
}
