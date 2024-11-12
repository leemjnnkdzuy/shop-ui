import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { URL, default as request } from "~/utils/request";
import { AuthContext } from "~/contexts/AuthContext";

// Images
import images from "~/assets/images";
import { Wrapper as PopperWrapper } from "~/components/Layout/components/Popper";
import SearchItem from "~/components/Layout/components/SearchItem";
import CategoryList from "~/components/Layout/components/CategoryList";

// Tippy
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

const cx = classNames.bind(styles);

function Header() {
	const navigate = useNavigate();
	const { authUser, setAuthUser } = useContext(AuthContext);
	const [avatarError, setAvatarError] = useState(false);

	const handleLogout = () => {
		localStorage.removeItem("userToken");
		sessionStorage.removeItem("userToken");
		setAuthUser(null);
		navigate("/");
	};

	const handleNavigate = (path) => {
		navigate(path);
	};

	const [searchResult, setSearchResult] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const [category, setCategory] = useState(false);

	const handleClick = () => {
		setCategory(true);
	};

	const handleClickOutside = () => {
		setCategory(false);
	};

	const debounce = (func, wait) => {
		let timeout;
		return function executedFunction(...args) {
			const later = () => {
				clearTimeout(timeout);
				func(...args);
			};
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
		};
	};

	useEffect(() => {
		const fetchSearchResults = async () => {
			if (!inputValue.trim()) {
				setSearchResult([]);
				return;
			}

			try {
				const response = await request.get(`api/search?query=${inputValue}`);
				setSearchResult(response);
			} catch (error) {
				console.error("Search error:", error);
				setSearchResult([]);
			}
		};

		const debouncedFetch = debounce(fetchSearchResults, 300);
		debouncedFetch();

		return () => {
			setSearchResult([]);
		};
	}, [inputValue]);

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const clearInput = () => {
		setInputValue("");
	};

	return (
	<header className={cx("wrapper")}>
		<div className={cx("inner")}>
			<div onClick={() => handleNavigate("/")} className={cx("logo")}>
				<img className={cx("img-logo")} src={images.logo_only_text} alt="logo" />
			</div>

			<Tippy
				interactive={true}
				visible={searchResult.length > 0}
				render={(attrs) => (
					<div className={cx("search-result")} tabIndex="-1" {...attrs}>
						<PopperWrapper>
							<h4 className={cx("search-title")}>Kết quả tìm kiếm</h4>
							<SearchItem />
						</PopperWrapper>
					</div>
				)}
			>
				<div className={cx("search")}>
					<input
						type="text"
						value={inputValue}
						onChange={handleInputChange}
						placeholder="Nhập sản phẩm mà quý khách cần tìm..."
						spellCheck={false}
					/>

					{inputValue && (
						<button onClick={clearInput} className={cx("clear")}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								viewBox="0 0 24 24"
								style={{ fill: "#444444" }}
							>
								<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.207 12.793-1.414 1.414L12 13.414l-2.793 2.793-1.414-1.414L10.586 12 7.793 9.207l1.414-1.414L12 10.586l2.793-2.793 1.414 1.414L13.414 12l2.793 2.793z"></path>
							</svg>
						</button>
					)}
					<button className={cx("search-btn")}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="30"
							viewBox="0 0 24 24"
							style={{ fill: "#444444" }}
						>
							<path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
						</svg>
					</button>
				</div>
			</Tippy>

			<div className={cx("icon-header")}>
				<Tippy
					placement="bottom-start"
					interactive={true}
					visible={category}
					onClickOutside={handleClickOutside}
					render={(attrs) => (
						<div className={cx("category-result")} tabIndex="-1" {...attrs}>
							<CategoryList onCategoryClick={() => setCategory(false)} />
						</div>
					)}
				>
					<div onClick={handleClick}>
						<button className={cx("category")}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="35"
								height="35"
								viewBox="0 0 24 24"
								style={{ fill: "#444444" }}
							>
								<path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
							</svg>
							<div className={cx("header-title-button")}>Danh Mục</div>
						</button>
					</div>
				</Tippy>
				<button onClick={() => handleNavigate("/Cart")} className={cx("icon-cart")}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="35"
						height="35"
						viewBox="0 0 24 24"
						style={{ fill: "#444444" }}
					>
						<path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z"></path>
						<circle cx="10.5" cy="19.5" r="1.5"></circle>
						<circle cx="17.5" cy="19.5" r="1.5"></circle>
					</svg>
					<div className={cx("header-title-button")}>Giỏ Hàng</div>
				</button>
				{authUser ? (
					<div
						className={cx("user-profile")}
						onClick={() => handleNavigate("/AccountUser")}
					>
						<div className={cx("avatar-container")}>
							<img
								src={
									avatarError
										? `${URL}public/icon.png`
										: authUser.avatar || `${URL}public/icon.png`
								}
								alt={authUser.user || "User"}
								className={cx("user-avatar")}
								onError={() => setAvatarError(true)}
							/>
						</div>
						<div className={cx("user-actions")}>
							<span className={cx("username")}>{authUser.user}</span>
							<button className={cx("logout-btn")} onClick={handleLogout}>
								<div className={cx("logout-btn-title")}>Đăng xuất</div>
							</button>
						</div>
					</div>
				) : (
					<button onClick={() => handleNavigate("/Login")} className={cx("icon-user")}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="35"
							height="35"
							viewBox="0 0 24 24"
							style={{ fill: "#444444" }}
						>
							<path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"></path>
						</svg>
						<div className={cx("header-title-button")}>Đăng Nhập</div>
					</button>
				)}
			</div>
		</div>
	</header>
);
}

export default Header;
