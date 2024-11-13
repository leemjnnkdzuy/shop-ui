import React, { useState, useEffect, useContext } from "react";
import classNames from "classnames/bind";
import style from "./Login.module.scss";
import icons from "~/assets/icons";
import { useNavigate } from "react-router-dom";

import request from "~/utils/request";
import Popup from "~/components/Layout/components/Popup";
import images from "~/assets/images";
import { AuthContext } from '~/contexts/AuthContext';

const cx = classNames.bind(style);

function Login() {
	const [isActive, setIsActive] = useState(false);
	const [registerData, setRegisterData] = useState({
		user: "",
		email: "",
		password: "",
	});
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
	});
	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [verificationCode, setVerificationCode] = useState("");
	const [registrationEmail, setRegistrationEmail] = useState("");
	const [showPinForm, setShowPinForm] = useState(false);
	const [emailSent, setEmailSent] = useState(false);
	const [showForgotPassword, setShowForgotPassword] = useState(false);
	const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
	const [showResetPassword, setShowResetPassword] = useState(false);
	const [newPassword, setNewPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const { setAuthUser } = useContext(AuthContext);

	useEffect(() => {
		const checkToken = async () => {
			const token =
				localStorage.getItem("userToken") || sessionStorage.getItem("userToken");
			if (token) {
				try {
					const response = await request.get("api/user/verify-token", {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					});
					if (response.data.valid) {
						navigate("/AccountUser");
					}
				} catch (error) {
					console.error("Token verification failed:", error);
				}
			}
		};
		checkToken();
	}, [navigate]);

	const handleRegisterClick = () => {
		setIsActive(true);
	};

	const handleLoginClick = () => {
		setIsActive(false);
	};

	const handleRegisterChange = (e) => {
		setRegisterData({ ...registerData, [e.target.name]: e.target.value });
	};

	const handleLoginChange = (e) => {
		setLoginData({ ...loginData, [e.target.name]: e.target.value });
	};

	const validateRegisterData = () => {
		if (!registerData.user.trim()) {
			setErrorMessage("Vui lòng nhập tên đăng nhập");
			return false;
		}
		if (!registerData.email.trim()) {
			setErrorMessage("Vui lòng nhập email");
			return false;
		}
		if (!registerData.password.trim()) {
			setErrorMessage("Vui lòng nhập mật khẩu");
			return false;
		}
		if (registerData.password.length < 6) {
			setErrorMessage("Mật khẩu phải có ít nhất 6 ký tự");
			return false;
		}
		return true;
	};

	const checkRegistrationStatus = async (email) => {
		try {
			const response = await request.post("/api/user/register", {
				email: email,
				checkOnly: true,
			});

			if (response.data.requireVerification) {
				setRegistrationEmail(email);
				setShowPinForm(true);
			}
			return response.data;
		} catch (error) {
			console.error("Check registration status error:", error);
			return null;
		}
	};

	const handleRegisterSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setErrorMessage("");
		setSuccessMessage("");

		if (!validateRegisterData()) {
			setIsLoading(false);
			return;
		}

		try {
			const response = await request.post("/api/user/register", registerData);

			if (response.data.success && response.data.requireVerification) {
				setRegistrationEmail(response.data.email);
				setSuccessMessage(response.data.message);
				setEmailSent(true);

				await new Promise(resolve => setTimeout(resolve, 3000));
				setEmailSent(false);
				setShowPinForm(true);
			}
		} catch (error) {
			setErrorMessage(error.response?.data?.message || "Đăng ký thất bại");
			setEmailSent(false);
		} finally {
			setIsLoading(false);
		}
	};

	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setErrorMessage("");
		setSuccessMessage("");

		if (!loginData.email || !loginData.password) {
			setErrorMessage("Vui lòng điền đầy đủ thông tin đăng nhập");
			setIsLoading(false);
			return;
		}

		try {
			const response = await request.post("/api/user/login", loginData);

			if (response.data.token) {
				localStorage.setItem("userToken", response.data.token);
				setSuccessMessage("Đăng nhập thành công!");
				
				// Update the authUser in AuthContext
				setAuthUser(response.data.user);

				setTimeout(() => {
					navigate("/");
				}, 1500);
			}
		} catch (error) {
			console.log("Login error:", error);
			setErrorMessage(
				error.response?.data?.error || "Thông tin đăng nhập không chính xác"
			);
		} finally {
			setIsLoading(false);
		}
	};

	const handleForgotPasswordSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setErrorMessage("");
		setSuccessMessage("");

		if (!forgotPasswordEmail) {
			setErrorMessage("Vui lòng nhập email");
			setIsLoading(false);
			return;
		}

		try {
			await request.post("/api/user/forgot-password", {
				email: forgotPasswordEmail
			});
			setSuccessMessage("Mã xác thực đã được gửi đến email của bạn");
			setShowPinForm(true);
		} catch (error) {
			setErrorMessage(
				error.response?.data?.error || "Không thể gửi email khôi phục mật khẩu"
			);
		} finally {
			setIsLoading(false);
		}
	};

	const handleVerifyResetPin = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setErrorMessage("");
		setSuccessMessage("");

		try {
			await request.post("/api/user/verify-reset-pin", {
				email: forgotPasswordEmail,
				resetPin: verificationCode
			});
			setSuccessMessage("Mã xác thực hợp lệ");
			setShowResetPassword(true);
			setShowPinForm(false);
		} catch (error) {
			setErrorMessage(error.response?.data?.error || "Mã xác thực không hợp lệ");
		} finally {
			setIsLoading(false);
		}
	};

	const handleResetPassword = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setErrorMessage("");
		setSuccessMessage("");

		if (!newPassword) {
			setErrorMessage("Vui lòng nhập mật khẩu mới");
			setIsLoading(false);
			return;
		}

		try {
			await request.post("/api/user/reset-password", {
				email: forgotPasswordEmail,
				resetPin: verificationCode,
				newPassword: newPassword
			});
			setSuccessMessage("Đặt lại mật khẩu thành công");
			setTimeout(() => {
				setShowForgotPassword(false);
				setShowResetPassword(false);
				setForgotPasswordEmail("");
				setVerificationCode("");
				setNewPassword("");
				setSuccessMessage("");
			}, 2000);
		} catch (error) {
			setErrorMessage(
				error.response?.data?.error || "Không thể đặt lại mật khẩu"
			);
		} finally {
			setIsLoading(false);
		}
	};

	const handleVerificationSubmit = async (e) => {
		e.preventDefault();
		setErrorMessage("");
		setSuccessMessage("");

		try {
			await request.post("/api/user/verify-email", {
				email: registrationEmail,
				pin: verificationCode,
			});

			setSuccessMessage("Xác thực email thành công! Vui lòng đăng nhập.");

			setTimeout(() => {
				setShowPinForm(false);
				setIsActive(false);
				setVerificationCode("");
				setRegistrationEmail("");
				setRegisterData({
					user: "",
					email: "",
					password: "",
				});
				checkRegistrationStatus(registrationEmail);
			}, 1500);
		} catch (error) {
			setErrorMessage(error.response?.data?.message || "Mã xác thực không hợp lệ");
			await checkRegistrationStatus(registrationEmail);
		}
	};

	const Loading = () => {
		return (
			<div className={cx("loading")}>
				<img src={images.loading} alt="loading" />
			</div>
		);
	};

	const forgotPasswordForm = showResetPassword ? (
		<form onSubmit={handleResetPassword}>
			<h1>Đặt Lại Mật Khẩu</h1>
			<div className={cx("social-icons")}>
				<div className={cx("icon")}>
					<img src={icons.google} alt="google" />
				</div>
				<div className={cx("icon")}>
					<img src={icons.facebook} alt="facebook" />
				</div>
			</div>
			<span>Nhập mật khẩu mới của bạn</span>
			<input
				type="password"
				placeholder="Mật khẩu mới"
				value={newPassword}
				onChange={(e) => setNewPassword(e.target.value)}
				required
			/>
			<button type="submit">
				<div className={cx("text-button")}>Xác nhận</div>
			</button>
		</form>
	) : showPinForm ? (
		<form onSubmit={handleVerifyResetPin}>
			<h1>Xác Thực Mã PIN</h1>
			<div className={cx("social-icons")}>
				<div className={cx("icon")}>
					<img src={icons.google} alt="google" />
				</div>
				<div className={cx("icon")}>
					<img src={icons.facebook} alt="facebook" />
				</div>
			</div>
			<span>Nhập mã xác thực đã được gửi đến email của bạn</span>
			<input
				type="text"
				maxLength="6"
				pattern="\d{6}"
				value={verificationCode}
				onChange={(e) => setVerificationCode(e.target.value)}
				placeholder="Nhập mã 6 số"
				required
			/>
			<div className={cx("forgot-password-buttons")}>
				<button type="button" onClick={() => setShowPinForm(false)}>
					<div className={cx("text-button")}>Quay lại</div>
				</button>
				<button type="submit">
					<div className={cx("text-button")}>Xác nhận</div>
				</button>
			</div>
		</form>
	) : (
		<form onSubmit={handleForgotPasswordSubmit}>
			<h1>Quên Mật Khẩu</h1>
			<div className={cx("social-icons")}>
				<div className={cx("icon")}>
					<img src={icons.google} alt="google" />
				</div>
				<div className={cx("icon")}>
					<img src={icons.facebook} alt="facebook" />
				</div>
			</div>
			<span>Nhập email để nhận hướng dẫn đặt lại mật khẩu</span>
			<input
				type="email"
				placeholder="Nhập Email của bạn"
				value={forgotPasswordEmail}
				onChange={(e) => setForgotPasswordEmail(e.target.value)}
				required
			/>
			<div className={cx("forgot-password-buttons")}>
				<button type="button" onClick={() => setShowForgotPassword(false)}>
					<div className={cx("text-button")}>Quay lại</div>
				</button>
				<button type="submit">
					<div className={cx("text-button")}>Gửi</div>
				</button>
			</div>
		</form>
	);

	const registrationForm = showPinForm ? (
		<form onSubmit={handleVerificationSubmit}>
			<h1>Xác thực Email</h1>
			<div className={cx("social-icons")}>
				<div className={cx("icon")}>
					<img src={icons.google} alt="google" />
				</div>
				<div className={cx("icon")}>
					<img src={icons.facebook} alt="facebook" />
				</div>
			</div>
			<span>Nhập mã xác thực đã được gửi đến email của bạn</span>
			<span>Mã xác thực đã được gửi đến: {registrationEmail}</span>
			<input
				type="text"
				maxLength="6"
				pattern="\d{6}"
				value={verificationCode}
				onChange={(e) => setVerificationCode(e.target.value)}
				placeholder="Nhập mã 6 số"
				required
			/>
			<button type="submit">
				<div className={cx("text-button")}>Xác nhận</div>
			</button>
		</form>
	) : (
		<form onSubmit={handleRegisterSubmit}>
			<h1>Tạo Tài Khoản</h1>
			<div className={cx("social-icons")}>
				<div className={cx("icon")}>
					<img src={icons.google} alt="google" />
				</div>
				<div className={cx("icon")}>
					<img src={icons.facebook} alt="facebook" />
				</div>
			</div>
			<span>Sử dụng Email hoặc SDT để tạo tài khoản</span>
			<input
				type="text"
				placeholder="Tên Đăng Nhập"
				name="user"
				value={registerData.user}
				onChange={handleRegisterChange}
			/>
			<input
				type="email"
				placeholder="Email Hoặc SDT"
				name="email"
				value={registerData.email}
				onChange={handleRegisterChange}
			/>
			<input
				type="password"
				placeholder="Mật Khẩu"
				name="password"
				value={registerData.password}
				onChange={handleRegisterChange}
			/>
			<button type="submit">
				<div className={cx("text-button")}>Tạo Tài Khoản</div>
			</button>
		</form>
	);

	const loginForm = showForgotPassword ? forgotPasswordForm : (
		<form onSubmit={handleLoginSubmit}>
			<h1>Đăng Nhập</h1>
			<div className={cx("social-icons")}>
				<div className={cx("icon")}>
					<img src={icons.google} alt="google" />
				</div>
				<div className={cx("icon")}>
					<img src={icons.facebook} alt="facebook" />
				</div>
			</div>
			<span>Hoặc sử dụng tài khoản hiện có</span>
			<input
				type="email"
				placeholder="Email Hoặc SDT"
				name="email"
				value={loginData.email}
				onChange={handleLoginChange}
			/>
			<input
				type="password"
				placeholder="Mật Khẩu"
				name="password"
				value={loginData.password}
				onChange={handleLoginChange}
			/>
			<div 
				className={cx("forget-password")}
				onClick={() => setShowForgotPassword(true)}
			>
				Bạn quên mật khẩu ?
			</div>
			<button type="submit">
				<div className={cx("text-button")}>Đăng Nhập</div>
			</button>
		</form>
	);

	return (
		<div className={cx("wrapper")}>
			{isLoading && <Loading />}
			<div className={cx("container", { active: isActive })} id="container">
				<div className={cx("form-container", "sign-up")}>{registrationForm}</div>
				<div className={cx("form-container", "sign-in")}>
					{loginForm}
				</div>
				<div className={cx("toggle-container")}>
					<div className={cx("toggle")}>
						<div className={cx("toggle-panel", "toggle-left")}>
							<h1>
								Chào Mừng <br /> Bạn Mới!
							</h1>
							<p>
								Nếu bạn đã có tài khoản cá nhân hãy đăng nhập với thông tin cá nhân của bạn để
								tiếp tục mua hàng trên trang web.
							</p>
							<button className={cx("hidden")} id="login" onClick={handleLoginClick}>
								ĐĂNG NHẬP
							</button>
						</div>
						<div className={cx("toggle-panel", "toggle-right")}>
							<h1>
								Chào Mừng <br /> Bạn Cũ!
							</h1>
							<p>
								Nếu bạn chưa có tài khoản cá nhân hãy tạo một cái riêng của bạn để tiếp tục mua
								hàng trên trang web.
							</p>
							<button className={cx("hidden")} id="register" onClick={handleRegisterClick}>
								TẠO TÀI KHOẢN
							</button>
						</div>
					</div>
				</div>
			</div>
			{(errorMessage || successMessage || emailSent) && (
				<Popup>
					<div className={cx("header")}>
						<h2>Thông báo</h2>
						<button
							onClick={() => {
								setErrorMessage("");
								setSuccessMessage("");
								setEmailSent(false);
							}}
							className={cx("close-btn")}
						>
							&times;
						</button>
					</div>
					<div className={cx("content")}>
						<p>{successMessage || errorMessage}</p>
					</div>
				</Popup>
			)}
		</div>
	);
}

export default Login;
