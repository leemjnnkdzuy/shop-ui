import React, { createContext, useState, useEffect } from "react";
import { default as request } from "~/utils/request";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(null);

	useEffect(() => {
		const fetchUserData = async () => {
			const token =
				localStorage.getItem("userToken") || sessionStorage.getItem("userToken");
			if (!token) return;

			try {
				const verifyResponse = await request.get("api/user/verify-token", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				if (verifyResponse.data.valid && verifyResponse.data.user) {
					setAuthUser(verifyResponse.data.user);
				}
			} catch (error) {
				console.error("Authentication error:", error);
				localStorage.removeItem("userToken");
				sessionStorage.removeItem("userToken");
				setAuthUser(null);
			}
		};

		fetchUserData();
	}, []);

	return (
		<AuthContext.Provider value={{ authUser, setAuthUser }}>
			{children}
		</AuthContext.Provider>
	);
};
