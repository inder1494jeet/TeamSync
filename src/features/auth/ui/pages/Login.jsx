import React from "react";
import { useAuth } from "../../hooks/useauth";


const CloudIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M17.5 19H9a6 6 0 1 1 1.5-11.8A5 5 0 0 1 20 9.5 4.5 4.5 0 0 1 17.5 19Z" />
  </svg>
);

const GithubIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.81 1.3 3.5.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6-.01c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .5Z" />
  </svg>
);

const NetworkIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    stroke="white"
    strokeWidth="1.7"
  >
    <circle cx="15" cy="15" r="3" />
    <circle cx="7" cy="8" r="2.5" />
    <circle cx="23" cy="8" r="2.5" />
    <circle cx="7" cy="22" r="2.5" />
    <circle cx="23" cy="22" r="2.5" />

    <path d="M12.8 13 9 10" />
    <path d="M17.2 13 21 10" />
    <path d="M12.8 17 9 20" />
    <path d="M17.2 17 21 20" />
  </svg>
);

const LoginArrow = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M10 17l5-5-5-5" />
    <path d="M15 12H3" />
    <path d="M21 19V5a2 2 0 0 0-2-2h-6" />
  </svg>
);

const TerminalIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="m7 9 3 3-3 3" />
    <path d="M13 15h4" />
  </svg>
);

export default function Login() {
    let {register,errors,handleSubmit,onloginsubmit,navigate}=useAuth();
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#111015] text-white">
      {/* Top Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-[900px] -translate-x-1/2 bg-white/[0.08] blur-3xl" />

      {/* Right Decorative Glow */}
      <div className="pointer-events-none absolute right-[-100px] top-[50%] h-[400px] w-[400px] rounded-full bg-[#6d4cc3]/[0.04] blur-3xl" />

      {/* Main Content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-8">
        {/* Login Card */}
        <div
          className="
            w-full max-w-[400px]
            rounded-[10px]
            border border-white/[0.08]
            bg-[#1c1a1f]
            px-6
            py-6
            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
          "
        >
          {/* Logo */}
          <div className="mb-4 flex justify-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-[6px] bg-[#7051bb] shadow-lg shadow-[#7051bb]/20">
              <NetworkIcon />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-[19px] font-semibold tracking-[-0.3px] text-[#f1eef5]">
              team-sync
            </h1>

            <p className="mt-[2px] text-[11px] text-[#b8b2c0]">
              Sign in to your workspace
            </p>
          </div>

          {/* Social Buttons */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="
                flex h-8 items-center justify-center gap-2
                rounded-[5px]
                border border-white/[0.07]
                bg-[#29272d]
                text-[10px] font-semibold
                text-[#d8d4dc]
                transition
                hover:bg-[#302e35]
              "
            >
              <CloudIcon />
              GOOGLE
            </button>

            <button
              type="button"
              className="
                flex h-8 items-center justify-center gap-2
                rounded-[5px]
                border border-white/[0.07]
                bg-[#29272d]
                text-[10px] font-semibold
                text-[#d8d4dc]
                transition
                hover:bg-[#302e35]
              "
            >
              <TerminalIcon />
              GITHUB
            </button>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-white/[0.05]" />

            <span className="whitespace-nowrap text-[10px] text-[#a49eaa]">
              or continue with email
            </span>

            <div className="h-px flex-1 bg-white/[0.05]" />
          </div>

         <form onSubmit={handleSubmit(onloginsubmit)}>
           {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block pl-[2px] text-[11px] font-semibold tracking-[0.2px] text-[#d3cdd9]"
            >
              EMAIL ADDRESS
            </label>

            <input
            {...register("email",{required:"name is required"})}
              id="email"
              type="email"
              placeholder="name@company.com"
              className="
                h-[35px]
                w-full
                rounded-[5px]
                border border-white/[0.05]
                bg-[#0e0d11]
                px-3
                text-[11px]
                text-white
                outline-none
                placeholder:text-[#514c56]
                focus:border-[#7051bb]
              "
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="mt-5">
            <div className="mb-1.5 flex items-center justify-between px-[2px]">
              <label
                htmlFor="password"
                className="text-[11px] font-semibold tracking-[0.2px] text-[#d3cdd9]"
              >
                PASSWORD
              </label>

              <button
                type="button"
                className="text-[11px] text-[#9274db] hover:text-[#a78ae8]"
              >
                Forgot password?
              </button>
            </div>

            <input
            {...register("password",{
                required:"password is required",
                // pattern:{
                //     value:/^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
                //     message:"one special character and one captial letter required"
                // }
            })}
              id="password"
              type="password"
              placeholder="•••••••••"
              className="
                h-[35px]
                w-full
                rounded-[5px]
                border border-white/[0.05]
                bg-[#0e0d11]
                px-3
                text-[11px]
                text-white
                outline-none
                placeholder:text-[#514c56]
                focus:border-[#7051bb]
              "
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
           <button
            type="submit"
            className="
              mt-5
              flex h-[39px]
              w-full
              items-center justify-center
              gap-2
              rounded-[6px]
              bg-[#6d50b5]
              text-[11px]
              font-medium
              text-white
              transition
              hover:bg-[#795bc4]
              active:scale-[0.99]
            "
          >
            <span>Sign In</span>
            <LoginArrow />
          </button>
         </form>

       

          {/* Sign In */}
         

          {/* Bottom Divider */}
          <div className="mt-6 h-px w-full bg-white/[0.04]" />

          {/* Sign Up */}
          <div className="pt-5 text-center">
            <span className="text-[11px] text-[#b0aab4]">
              Don't have an account?{" "}
            </span>

            <button
              type="button"
              className="text-[12px] font-semibold text-[#9879df] hover:text-[#b08ff2]"
              onClick={()=>navigate("/register")}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center">
          <p className="text-[9px] text-[#59545e]">
            © 2024 Synthetix AI. Enterprise Intelligence Platforms.
          </p>

          <div className="mt-1 flex justify-center gap-3">
            <button className="text-[9px] text-[#59545e] hover:text-[#77717c]">
              Privacy Policy
            </button>

            <button className="text-[9px] text-[#59545e] hover:text-[#77717c]">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}