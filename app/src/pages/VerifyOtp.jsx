import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../UserContext/CreateContext";

const VerifyOtp = () => {
    const [loading, setLoading] = useState(false);
    const [otp, setOtp] = useState("");
    const [generatedOtp, setGeneratedOtp] = useState("");
    const [timer, setTimer] = useState(60);
    const [expired, setExpired] = useState(false);
    const [toast, setToast] = useState(true);
    const { GetProfile, VerifyOtp } = useContext(UserContext);
    useEffect(() => {
        generateOtp();
    }, []);

    useEffect(() => {
        if (timer === 0) {
            setExpired(true);
            return;
        }
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [timer]);
    const navigate = useNavigate();

    const { token, mobileNumber } = useParams();

    useEffect(() => {
        getUserProfile();
    }, []);

    const generateOtp = () => {
        const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
        setGeneratedOtp(newOtp);
        setTimer(60);
        setExpired(false);
        setToast(true);
        setTimeout(() => setToast(false), 2500);

        const oneHour = 60 * 60 * 1000;

        // setTimeout(() => {
        //     navigate("/");
        // }, 2000);
        // console.log(res);
    };

    const verifyOtp = async () => {
        if (expired) {
            alert("OTP expired! Please resend.");
            return;
        }
        setLoading(true);

        setLoading(false);
        if (otp === generatedOtp) {
            // const res = await toekenGenerate(mobileNumber);

            alert(" OTP Verified Successfully");

            const oneHour = 60 * 60 * 1000;
            localStorage.setItem("ExpireTime", Date.now() + oneHour);
            const res = await VerifyOtp(mobileNumber);
            // const User = await GetProfile(res.token);

            localStorage.setItem("token", res.token);
            getUserProfile();
            // console.log("otp verify successfull :", res);
            setTimeout(() => {
                navigate("/");
            }, 1000);

            return;
        } else {
            alert("❌ Invalid OTP");
        }
    };

    async function getUserProfile() {
        const token = localStorage.getItem("token");

        if (!token) {
            return;
        }

        try {
            const res = await GetProfile(token);
            localStorage.setItem("userAuth", JSON.stringify(res));
            console.log("object");
            console.log("GetProfile fetch successfull :", User);
        } catch (error) {
            console.log("error while fetching profile :", error);
        }
    }

    // const token = Cookies.get("token");
    //  async function getUserProfile() {
    //      const token = localStorage.getItem("token");

    //      if (!token) {
    //          return;
    //      }

    //      try {
    //       const res = await GetProfile(token);
    //       localStorage.setItem("userAuth", JSON.stringify(res));
    //         setLoading(false);

    //      } catch (error) {
    //          console.log("error while fetching profile :", error);
    //      }
    //  }

    //  useEffect(() => {
    //      getUserProfile();
    //  }, []);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body { font-family: 'Inter', sans-serif; }

        .otp-root {
          min-height: 100vh;
          background: #eaecf2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          font-family: 'Inter', sans-serif;
          padding-top: 0;
          position: relative;
        }

        /* Toast - full width green bar at top */
        .toast {
          width: 100%;
          background: #3cb563;
          color: #fff;
          font-size: 1rem;
          font-weight: 600;
          padding: 16px 24px;
          text-align: center;
          letter-spacing: 0.01em;
          animation: slideDown 0.35s ease forwards;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-100%); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Subtitle below toast */
        .otp-subtitle {
          font-size: 0.9rem;
          color: #888;
          margin: 28px 0 20px;
          text-align: center;
          font-weight: 400;
        }

        /* Card */
        .otp-card {
          background: #fff;
          border-radius: 18px;
          padding: 32px 36px 28px;
          width: 100%;
          max-width: 560px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
          margin: 0 16px;
        }

        /* Mobile sent to */
        .otp-sent-to {
          text-align: center;
          font-size: 0.95rem;
          color: #555;
          font-weight: 400;
        }
        .otp-sent-to strong {
          color: #111;
          font-weight: 700;
        }

        /* Demo OTP box */
        .demo-otp-box {
          background: linear-gradient(135deg, #dce8fc 0%, #eaf0ff 100%);
          border-radius: 12px;
          padding: 16px 20px 14px;
          text-align: center;
        }
        .demo-otp-label {
          font-size: 0.82rem;
          color: #8a9ec2;
          font-weight: 400;
          margin-bottom: 6px;
        }
        .demo-otp-value {
          font-size: 2rem;
          font-weight: 700;
          color: #2563eb;
          letter-spacing: 0.35em;
          font-family: 'Inter', sans-serif;
        }

        /* Timer */
        .timer-text {
          text-align: center;
          font-size: 0.85rem;
          font-weight: 500;
        }

        /* Label */
        .otp-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #333;
          margin-bottom: 8px;
        }

        /* Input */
        .otp-input {
          width: 100%;
          border: 2px solid #d0d5e8;
          border-radius: 10px;
          padding: 16px 20px;
          font-family: 'Inter', sans-serif;
          font-size: 1.4rem;
          font-weight: 500;
          letter-spacing: 0.55em;
          text-align: center;
          color: #111;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          background: #fff;
        }
        .otp-input::placeholder {
          color: #ccc;
          letter-spacing: 0.2em;
        }
        .otp-input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 4px rgba(37,99,235,0.1);
        }

        /* Verify button */
        .btn-verify {
          width: 100%;
          padding: 17px;
          background: #2b7fff;
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.18s, transform 0.12s, box-shadow 0.18s;
          box-shadow: 0 4px 16px rgba(43,127,255,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .btn-verify:hover:not(:disabled) {
          background: #1a6fef;
          box-shadow: 0 6px 22px rgba(43,127,255,0.4);
          transform: translateY(-1px);
        }
        .btn-verify:active:not(:disabled) { transform: translateY(0); }
        .btn-verify:disabled { opacity: 0.55; cursor: not-allowed; }

        /* Loading dots */
        .loading-dots { display: flex; gap: 5px; align-items: center; }
        .loading-dots span {
          width: 7px; height: 7px;
          background: #fff; border-radius: 50%;
          animation: bounce 0.6s ease-in-out infinite;
        }
        .loading-dots span:nth-child(2) { animation-delay: 0.12s; }
        .loading-dots span:nth-child(3) { animation-delay: 0.24s; }
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }

        /* Resend / Change button */
        .btn-change {
          align-self: center;
          background: #f0f2f8;
          border: none;
          border-radius: 50px;
          padding: 10px 24px;
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          font-weight: 500;
          color: #555;
          cursor: pointer;
          transition: background 0.18s, color 0.18s;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .btn-change:hover {
          background: #e2e6f0;
          color: #222;
        }

        /* Terms */
        .otp-terms {
          font-size: 0.78rem;
          color: #aaa;
          text-align: center;
          margin-top: 20px;
        }
        .otp-terms a {
          color: #2563eb;
          text-decoration: none;
        }
        .otp-back {
          margin-top: 10px;
          font-size: 0.88rem;
          color: #2563eb;
          cursor: pointer;
          background: none;
          border: none;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
        }
        .otp-back:hover { text-decoration: underline; }
      `}</style>

            <div className="otp-root">
                {/* Toast */}
                {toast && <div className="toast">OTP sent successfully!</div>}

                {/* Subtitle */}
                <p className="otp-subtitle">Sign in with your mobile number</p>

                {/* Card */}
                <div className="otp-card">
                    <p className="otp-sent-to">
                        OTP sent to <strong>{mobileNumber}</strong>
                    </p>

                    {/* Demo OTP Box */}
                    <div className="demo-otp-box">
                        <div className="demo-otp-label"> OTP</div>
                        <div className="demo-otp-value">{generatedOtp}</div>
                    </div>

                    {/* Timer */}
                    <p
                        className="timer-text"
                        style={{
                            color: expired
                                ? "#ef4444"
                                : timer > 20
                                  ? "#888"
                                  : "#f97316",
                        }}
                    >
                        {expired ? "OTP Expired ❌" : `Expires in ${timer}s`}
                    </p>

                    {/* Input */}
                    <div>
                        <div className="otp-label">Enter OTP</div>
                        <input
                            className="otp-input"
                            value={otp}
                            onChange={(e) =>
                                setOtp(
                                    e.target.value
                                        .replace(/\D/g, "")
                                        .slice(0, 6),
                                )
                            }
                            placeholder="· · · · · ·"
                            maxLength={6}
                            autoFocus
                        />
                    </div>

                    {/* Verify */}
                    <button
                        className="btn-verify"
                        onClick={verifyOtp}
                        disabled={loading || otp.length < 6}
                    >
                        {loading ? (
                            <div className="loading-dots">
                                <span />
                                <span />
                                <span />
                            </div>
                        ) : (
                            "Verify & Login"
                        )}
                    </button>

                    {/* Resend */}
                    <button className="btn-change" onClick={generateOtp}>
                        ↻ Resend OTP
                    </button>
                </div>

                <p className="otp-terms">
                    By continuing, you agree to Kannect's{" "}
                    <a href="#">Terms of Service</a>
                </p>
                <Link to="/">
                    <button className="otp-back">← Back to Home</button>
                </Link>
            </div>
        </>
    );
};

export default VerifyOtp;
