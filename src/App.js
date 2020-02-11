import React, { useState } from "react";

import { GlobalStyle } from "./components/common";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
	const [headerHeight, setHeaderHeight] = useState(null);
	return (
		<>
			<GlobalStyle />
			<Header setHeaderHeight={setHeaderHeight} />
			<Main headerHeight={headerHeight} />
		</>
	);
};

export default App;
