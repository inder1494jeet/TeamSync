import React from "react";
import {
  User,
  Mail,
  LockKeyhole,
  Network,
  ArrowRight,
} from "lucide-react";
import { useAuth } from "../../hooks/useauth";

const Register = () => {
  let{register,handleSubmit,errors,navigate,onregistersubmit,watch}=useAuth();
  const password=watch("password","")
  const getStrength = (password) => {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[!@#$%^&*]/.test(password)) score++;

  return score;
};

const strength = getStrength(password);
  return (
    <div className="min-h-screen bg-[#100f14] text-white">

      <div className="flex min-h-screen flex-col">

        {/* ================= MAIN ================= */}
        <main className="flex flex-1">

          {/* ================= LEFT SIDE ================= */}
          <section className="relative hidden w-[40%] overflow-hidden border-r border-white/[0.08] lg:block">

            {/* Base Background */}
            <div className="absolute inset-0 bg-[#06152f]" />

            {/* Main Blue Glow */}
            <div
              className="
                absolute
                left-[-180px]
                top-[100px]
                h-[650px]
                w-[750px]
                rounded-full
                bg-[#315b96]/40
                blur-[120px]
              "
            />

            {/* Secondary Glow */}
            <div
              className="
                absolute
                left-[-100px]
                top-[280px]
                h-[450px]
                w-[600px]
                rounded-full
                bg-[#4d79b4]/20
                blur-[100px]
              "
            />

            {/* ================= NETWORK LINES ================= */}

            <div className="absolute left-[15%] top-[-100px] h-[700px] w-px rotate-[25deg] bg-gradient-to-b from-[#6389b9]/60 to-transparent" />

            <div className="absolute left-[32%] top-[-100px] h-[750px] w-px rotate-[35deg] bg-gradient-to-b from-[#6389b9]/50 to-transparent" />

            <div className="absolute left-[48%] top-[-100px] h-[700px] w-px rotate-[42deg] bg-gradient-to-b from-[#6389b9]/40 to-transparent" />

            <div className="absolute left-[7%] top-[100px] h-[650px] w-px rotate-[-35deg] bg-gradient-to-b from-[#6389b9]/40 to-transparent" />

            <div className="absolute left-[23%] top-[160px] h-[600px] w-px rotate-[-25deg] bg-gradient-to-b from-[#6389b9]/30 to-transparent" />

            {/* Small Network Dots */}
            <div className="absolute left-[30%] top-[18%] h-1 w-1 rounded-full bg-[#7999c4]" />
            <div className="absolute left-[42%] top-[25%] h-1 w-1 rounded-full bg-[#7999c4]" />
            <div className="absolute left-[18%] top-[32%] h-1 w-1 rounded-full bg-[#7999c4]" />
            <div className="absolute left-[52%] top-[14%] h-1 w-1 rounded-full bg-[#7999c4]" />
            <div className="absolute left-[35%] top-[42%] h-1 w-1 rounded-full bg-[#7999c4]" />

            {/* Dark Bottom Gradient */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-transparent
                via-transparent
                to-[#100f14]
              "
            />

            {/* ================= LEFT CONTENT ================= */}
            <div className="relative z-10 flex h-full flex-col justify-between p-8 xl:p-10">

              {/* Logo */}
              <div>
                <h2 className="text-[15px] font-semibold tracking-[-0.2px]">
                  team-sync
                </h2>
              </div>

              {/* Bottom Marketing Content */}
              <div className="max-w-[470px] pb-3">

                {/* Label */}
                <div className="mb-5 flex items-center gap-3">

                  <div className="h-px w-5 bg-[#b58cff]" />

                  <span className="text-[11px] font-semibold uppercase tracking-[1.8px] text-[#b58cff]">
                    Next-Gen Intelligence
                  </span>

                </div>

                {/* Heading */}
                <h1
                  className="
                    text-[36px]
                    font-bold
                    leading-[1.08]
                    tracking-[-1px]
                    text-white
                    xl:text-[40px]
                  "
                >
                  Accelerate your team's
                  <br />
                  intelligence.
                </h1>

                {/* Description */}
                <p
                  className="
                    mt-5
                    max-w-[430px]
                    text-[14px]
                    leading-[1.65]
                    text-[#c2c9d5]
                  "
                >
                  Connect your enterprise data to our specialized AI
                  models and unlock unparalleled strategic insights
                  in seconds.
                </p>

                {/* Stats */}
                <div className="mt-8 flex gap-12">

                  <div>
                    <p className="text-[21px] font-semibold">
                      99.9%
                    </p>

                    <p className="mt-1 text-[10px] text-[#7d8592]">
                      Uptime SLA
                    </p>
                  </div>

                  <div>
                    <p className="text-[21px] font-semibold">
                      ISO
                    </p>

                    <p className="mt-1 text-[10px] text-[#7d8592]">
                      27001 Certified
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </section>

          {/* ================= RIGHT SIDE ================= */}
          <section className="flex flex-1 flex-col bg-[#100f14]">

            {/* Form Wrapper */}
            <div
              className="
                flex
                flex-1
                items-center
                justify-center
                px-6
                py-12
                sm:px-10
                lg:px-16
                xl:px-20
              "
            >

              {/* FORM BOX */}
              <div className="w-full max-w-[460px]">

                {/* Heading */}
                <div className="mb-8">

                  <h1
                    className="
                      text-[28px]
                      font-semibold
                      leading-tight
                      tracking-[-0.7px]
                      text-[#f5f2f7]
                      sm:text-[30px]
                    "
                  >
                    Create your account
                  </h1>

                  <p className="mt-2 text-[13px] text-[#a7a1ad]">
                    Experience the future of collaborative data intelligence.
                  </p>

                </div>

           <form onSubmit={handleSubmit(onregistersubmit)}>

  {/* ================= NAME ================= */}
  <div className="mb-6">

    <label
      htmlFor="name"
      className="mb-2 block text-[12px] font-medium text-[#d7d1db]"
    >
      Full Name
    </label>

    <div className="relative">

      <User
        size={17}
        strokeWidth={1.6}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-[#55505c]
        "
      />

      <input
        {...register("name", {
          required: "Full name is required",
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters",
          },
        })}
        id="name"
        type="text"
        placeholder="Enter your full name"
        className="
          h-[48px]
          w-full
          rounded-[7px]
          border
          border-white/[0.09]
          bg-[#1c1a1f]
          pl-11
          pr-4
          text-[14px]
          text-white
          outline-none
          transition
          placeholder:text-[#514d56]
          focus:border-[#7657bd]
          focus:ring-1
          focus:ring-[#7657bd]/20
        "
      />

    </div>

    {errors.name && (
      <p className="mt-1 text-[11px] text-red-500">
        {errors.name.message}
      </p>
    )}

  </div>


  {/* ================= EMAIL ================= */}
  <div className="mb-6">

    <label
      htmlFor="email"
      className="mb-2 block text-[12px] font-medium text-[#d7d1db]"
    >
      Email Address
    </label>

    <div className="relative">

      <Mail
        size={17}
        strokeWidth={1.6}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-[#55505c]
        "
      />

      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Please enter a valid email address",
          },
        })}
        id="email"
        type="email"
        placeholder="name@company.com"
        className="
          h-[48px]
          w-full
          rounded-[7px]
          border
          border-white/[0.09]
          bg-[#1c1a1f]
          pl-11
          pr-4
          text-[14px]
          text-white
          outline-none
          transition
          placeholder:text-[#514d56]
          focus:border-[#7657bd]
          focus:ring-1
          focus:ring-[#7657bd]/20
        "
      />

    </div>

    {errors.email && (
      <p className="mt-1 text-[11px] text-red-500">
        {errors.email.message}
      </p>
    )}

  </div>


  {/* ================= PASSWORD ================= */}
  <div>

    <label
      htmlFor="password"
      className="mb-2 block text-[12px] font-medium text-[#d7d1db]"
    >
      Password
    </label>

    <div className="relative">

      <LockKeyhole
        size={17}
        strokeWidth={1.6}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-[#55505c]
        "
      />

      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
          pattern: {
            value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
            message:
              "Password must contain uppercase, lowercase, number and special character",
          },
        })}
        id="password"
        type="password"
        placeholder="••••••••••••••••"
        className="
          h-[48px]
          w-full
          rounded-[7px]
          border
          border-white/[0.09]
          bg-[#1c1a1f]
          pl-11
          pr-4
          text-[14px]
          text-white
          outline-none
          transition
          placeholder:text-[#514d56]
          focus:border-[#7657bd]
          focus:ring-1
          focus:ring-[#7657bd]/20
        "
      />

    </div>

    {errors.password && (
      <p className="mt-1 text-[11px] text-red-500">
        {errors.password.message}
      </p>
    )}

  </div>


  {/* ================= PASSWORD STRENGTH ================= */}
 <div className="mb-7 mt-2">

  <div className="flex gap-1.5">
    {[1, 2, 3, 4].map((bar) => (
      <div
        key={bar}
        className={`h-[4px] flex-1 rounded-full ${
          bar <= Math.ceil(strength / 1.25)
            ? "bg-[#7657bd]"
            : "bg-[#28252d]"
        }`}
      />
    ))}
  </div>

  <p className="mt-1.5 text-[10px] text-[#ad8de8]">
    {password
      ? strength <= 2
        ? "Easy password"
        : strength <= 4
        ? "Medium password"
        : "Strong password"
      : "Enter your password"}
  </p>

</div>


  {/* ================= TERMS ================= */}
  <div className="mb-6">

    <div className="flex items-start gap-3">

      <input
        {...register("terms", {
          required: "You must accept the Terms of Service",
        })}
        id="terms"
        type="checkbox"
        className="
          mt-[3px]
          h-4
          w-4
          shrink-0
          cursor-pointer
          rounded
          border-white/10
          bg-[#1c1a1f]
          accent-[#7657bd]
        "
      />

      <label
        htmlFor="terms"
        className="
          cursor-pointer
          text-[11px]
          leading-5
          text-[#aaa4af]
        "
      >
        I agree to the{" "}
        <span className="text-[#b28fea]">
          Terms of Service
        </span>{" "}
        and{" "}
        <span className="text-[#b28fea]">
          Privacy Policy.
        </span>
      </label>

    </div>

    {errors.terms && (
      <p className="mt-1 text-[11px] text-red-500">
        {errors.terms.message}
      </p>
    )}

  </div>


  {/* ================= CREATE ACCOUNT ================= */}
  <button
    type="submit"
    className="
      flex
      h-[48px]
      w-full
      items-center
      justify-center
      gap-2
      rounded-[7px]
      bg-gradient-to-r
      from-[#7252b8]
      to-[#c2a6ff]
      text-[13px]
      font-semibold
      text-[#17121d]
      transition
      hover:brightness-110
      active:scale-[0.99]
    "
  >
    Create Account

    <ArrowRight
      size={17}
      strokeWidth={2}
    />

  </button>

</form>

                {/* ================= DIVIDER ================= */}
                <div className="my-7 flex items-center gap-4">

                  <div className="h-px flex-1 bg-white/[0.06]" />

                  <span className="text-[9px] uppercase tracking-[1px] text-[#5c5762]">
                    Or continue with
                  </span>

                  <div className="h-px flex-1 bg-white/[0.06]" />

                </div>

                {/* ================= SOCIAL BUTTONS ================= */}
                <div className="grid grid-cols-2 gap-3">

                  <button
                    type="button"
                    className="
                      flex
                      h-[46px]
                      items-center
                      justify-center
                      gap-2
                      rounded-[7px]
                      border
                      border-white/[0.09]
                      bg-transparent
                      text-[13px]
                      font-medium
                      text-[#d3ced7]
                      transition
                      hover:bg-white/[0.03]
                    "
                  >
                    <span className="text-[14px] font-semibold">
                      G
                    </span>

                    Google
                  </button>

                  <button
                    type="button"
                    className="
                      flex
                      h-[46px]
                      items-center
                      justify-center
                      gap-2
                      rounded-[7px]
                      border
                      border-white/[0.09]
                      bg-transparent
                      text-[13px]
                      font-medium
                      text-[#d3ced7]
                      transition
                      hover:bg-white/[0.03]
                    "
                  >
                    <Network
                      size={17}
                      strokeWidth={1.8}
                    />

                    SSO
                  </button>

                </div>

                {/* ================= LOGIN ================= */}
                <p className="mt-8 text-center text-[12px] text-[#99939e]">

                  Already have an account?{" "}

                  <button
                    type="button"
                    className="
                      font-semibold
                      text-[#a985e5]
                      hover:text-[#c0a5f5]
                    "
                    onClick={()=>navigate("/")}
                  >
                    Log In
                  </button>

                </p>

              </div>
            </div>
          </section>
        </main>

        {/* ================= FOOTER ================= */}
        <footer
          className="
            flex
            min-h-[58px]
            items-center
            justify-between
            border-t
            border-white/[0.06]
            px-6
            lg:px-8
          "
        >

          {/* Logo */}
          <div className="text-[12px] font-semibold text-[#d7d2db]">
            team-sync
          </div>

          {/* Links */}
          <div className="hidden items-center gap-7 md:flex">

            <button className="text-[10px] text-[#817b86] transition hover:text-white">
              Privacy Policy
            </button>

            <button className="text-[10px] text-[#817b86] transition hover:text-white">
              Terms of Service
            </button>

            <button className="text-[10px] text-[#817b86] transition hover:text-white">
              Security
            </button>

            <button className="text-[10px] text-[#817b86] transition hover:text-white">
              System Status
            </button>

          </div>

          {/* Copyright */}
          <div className="text-[10px] text-[#68636d]">
            © 2024 team-sync. Enterprise Intelligence Platforms.
          </div>

        </footer>

      </div>
    </div>
  );
};

export default Register;