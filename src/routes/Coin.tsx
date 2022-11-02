import React from "react";
import { useParams } from "react-router-dom";

interface ICoin {
	coinId: string;
}

function Coin() {
	const { coinId } = useParams<ICoin>();
	return <h1>Coid: {coinId}</h1>;
}

export default Coin;
