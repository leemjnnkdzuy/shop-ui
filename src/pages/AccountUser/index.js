import classNames from "classnames/bind";
import style from "./AccountUser.module.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import images from "~/assets/images";
import { URL, default as request } from "~/utils/request";
import Popup from "~/components/Layout/components/Popup";

const cx = classNames.bind(style);

function AccountUser() {
	const navigate = useNavigate();
	const [user, setUser] = useState("");
	const [email, setEmail] = useState("");
	const [fullname, setFullname] = useState("");
	const [age, setAge] = useState("");
	const [phonemumber, setPhonemumber] = useState("");
	const [sex, setSex] = useState("Ông/Bà");
	const [address, setAddress] = useState("");
	const [avatar, setAvatar] = useState("");
	const [isEditing, setIsEditing] = useState(false);
	const [originalValues, setOriginalValues] = useState({});
	const [hasChanges, setHasChanges] = useState(false);
	const [showVerificationPopup, setShowVerificationPopup] = useState(false);
	const [verificationCode, setVerificationCode] = useState("");
	const [updateMessage, setUpdateMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const verifyToken = async () => {};

		verifyToken();
	}, [navigate]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await request.get("api/user/get-user-data", {
					headers: {
						Authorization: `Bearer ${localStorage.getItem("userToken")}`,
					},
				});
				const data = response.data;
				setUser(data.user || "");
				setEmail(data.email || "");
				setFullname(data.fullname || "");
				setAge(data.age || "");
				setPhonemumber(data.phonemumber || "");
				setSex(data.sex || "Nam");
				setAddress(data.address || "");
				setAvatar(URL + (data.avatar || ""));
				setOriginalValues(data);
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		const checkChanges = () => {
			if (!originalValues) return false;
			return (
				user !== originalValues.user ||
				email !== originalValues.email ||
				fullname !== originalValues.fullname ||
				age !== originalValues.age ||
				phonemumber !== originalValues.phonemumber ||
				sex !== originalValues.sex ||
				address !== originalValues.address
			);
		};
		setHasChanges(checkChanges());
	}, [user, email, fullname, age, phonemumber, sex, address, originalValues]);

	const handleToggleEdit = async () => {
		if (isEditing) {
			if (hasChanges) {
				setIsLoading(true);
				try {
					const response = await request.put(
						"api/user/update-user",
						{
							user: user || "",
							email: email || "",
							fullname: fullname || "",
							age: age || "",
							phonemumber: phonemumber || "",
							sex: sex || "Nam",
							address: address || "",
						},
						{
							headers: {
								Authorization: `Bearer ${localStorage.getItem("userToken")}`,
							},
						}
					);

					setUpdateMessage(response.data.message);
					setIsLoading(false);
					setShowVerificationPopup(true);
				} catch (error) {
					setIsLoading(false);
				}
			} else {
				setIsEditing(false);
			}
		} else {
			setIsEditing(true);
		}
	};

	const handleVerificationSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			await request.post(
				"/api/user/verify-update",
				{
					verificationPin: verificationCode,
				},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem("userToken")}`,
					},
				}
			);

			setIsLoading(false);
			setShowVerificationPopup(false);
			setIsEditing(false);
			setOriginalValues({
				user,
				email,
				fullname,
				age,
				phonemumber,
				sex,
				address,
			});
		} catch (error) {
			setIsLoading(false);
		}
	};

	const Loading = () => {
		return (
			<div className={cx("loading")}>
				<img src={images.loading} alt="loading" />
			</div>
		);
	};

	return (
		<div className={cx("wrapper")}>
			{isLoading && <Loading />}
			<div className={cx("inner")}>
				<div className={cx("header")}>Tài khoản của tôi</div>
				<div className={cx("body")}>
					<form onSubmit={(e) => e.preventDefault()}>
						<div className={cx("user-info")}>
							<div className={cx("row")}>
								<div className={cx("user-info-tag")}>
									<div className={cx("user-info-title")}>Tên đăng nhập</div>
									<div className={cx("user-info-content")}>
										<input
											type="text"
											value={user}
											name="user"
											required
											disabled={!isEditing}
											onChange={(e) => setUser(e.target.value)}
										/>
									</div>
								</div>
								<div className={cx("user-info-tag")}>
									<div className={cx("user-info-title")}>Email</div>
									<div className={cx("user-info-content")}>
										<input
											type="email"
											value={email}
											name="email"
											required
											disabled={!isEditing}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
								</div>
							</div>

							<div className={cx("row")}>
								<div className={cx("user-info-tag")}>
									<div className={cx("user-info-title")}>Họ và tên</div>
									<div className={cx("user-info-content")}>
										<input
											type="text"
											value={fullname}
											name="fullname"
											disabled={!isEditing}
											onChange={(e) => setFullname(e.target.value)}
										/>
									</div>
								</div>
								<div className={cx("user-info-tag")}>
									<div className={cx("user-info-title")}>Giới tính</div>
									<div className={cx("user-info-content")}>
										<select
											value={sex}
											name="sex"
											disabled={!isEditing}
											onChange={(e) => setSex(e.target.value)}
										>
											<option value="Nam">Nam</option>
											<option value="Nữ">Nữ</option>
										</select>
									</div>
								</div>
							</div>

							<div className={cx("row")}>
								<div className={cx("user-info-tag")}>
									<div className={cx("user-info-title")}>Ngày sinh</div>
									<div className={cx("user-info-content")}>
										<input
											type="date"
											value={age}
											name="age"
											disabled={!isEditing}
											onChange={(e) => setAge(e.target.value)}
										/>
									</div>
								</div>
								<div className={cx("user-info-tag")}>
									<div className={cx("user-info-title")}>Số điện thoại</div>
									<div className={cx("user-info-content")}>
										<input
											type="text"
											value={phonemumber}
											name="phonemumber"
											disabled={!isEditing}
											onChange={(e) => setPhonemumber(e.target.value)}
										/>
									</div>
								</div>
							</div>

							<div className={cx("user-info-tag")}>
								<div className={cx("user-info-title")}>Địa chỉ</div>
								<div className={cx("user-info-content")}>
									<input
										type="text"
										value={address}
										name="address"
										disabled={!isEditing}
										onChange={(e) => setAddress(e.target.value)}
									/>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div className={cx("sidebar")}>
				<div className={cx("avatar")}>
					<div className={cx("avatar-img")}>
						<img src={avatar} alt="avatar" />
					</div>
				</div>
				<div className={cx("body-sidebar")}>
					<div className={cx("body-sidebar-name")}>{fullname || "Tên người dùng"}</div>
					<div className={cx("body-sidebar-user")}>{user || "Tên người dùng"}</div>
				</div>
				<button
					className={cx("button-sidebar", { "button-sidebar-active": isEditing })}
					onClick={handleToggleEdit}
				>
					{isEditing
						? hasChanges
							? "Cập nhật thông tin"
							: "Chỉnh sửa thông tin"
						: "Chỉnh sửa thông tin"}
				</button>
			</div>

			{showVerificationPopup && (
				<Popup>
					<div className={cx("popup-header")}>
						<h2>Xác thực thay đổi thông tin</h2>
						<button
							onClick={() => {
								setShowVerificationPopup(false);
								setIsLoading(false);
							}}
							className={cx("close-btn")}
						>
							&times;
						</button>
					</div>
					<form onSubmit={handleVerificationSubmit} className={cx("popup-form")}>
						<p>{updateMessage}</p>
						<input
							type="text"
							maxLength="6"
							value={verificationCode}
							onChange={(e) => setVerificationCode(e.target.value)}
							placeholder="Nhập mã xác thực 6 số"
							required
						/>
						<button type="submit">Xác nhận</button>
					</form>
				</Popup>
			)}
		</div>
	);
}

export default AccountUser;
