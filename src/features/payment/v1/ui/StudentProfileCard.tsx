import { memo } from "react";
import {
  BadgeCheck,
  Mail,
  School2,
  UserCircle2,
  Phone,
  GraduationCap,
  IdCard,
} from "lucide-react";

import { PAYMENT_STUDENT_PROFILE } from "../config/payment.config";

function StudentProfileCard() {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[2rem]
        border
        border-white/10
        bg-gradient-to-b
        from-white/[0.06]
        to-white/[0.03]
        p-6
        shadow-[0_20px_60px_rgba(0,0,0,0.28)]
        backdrop-blur-xl
        xl:p-8
      "
    >
      {/* Glow */}
      <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="relative">
          <img
            src={PAYMENT_STUDENT_PROFILE.avatarUrl}
            alt={PAYMENT_STUDENT_PROFILE.name}
            className="
              h-32
              w-32
              rounded-[2rem]
              border-4
              border-violet-400/20
              object-cover
              shadow-[0_20px_50px_rgba(0,0,0,0.35)]
            "
          />

          <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 shadow-lg">
            <BadgeCheck size={18} className="text-white" />
          </div>
        </div>

        {/* Status */}
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300">
          <BadgeCheck size={14} />
          {PAYMENT_STUDENT_PROFILE.status}
        </div>

        {/* Name */}
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
          {PAYMENT_STUDENT_PROFILE.name}
        </h2>

        {/* Student ID */}
        <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-3 py-1 text-sm text-violet-300">
          <IdCard size={14} />
          {PAYMENT_STUDENT_PROFILE.studentId}
        </div>

        {/* Quick Stats */}
        <div className="mt-6 grid w-full grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/5 bg-black/20 p-4 text-left">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Program
            </p>

            <p className="mt-2 flex items-center gap-2 text-sm font-medium text-white">
              <GraduationCap size={15} />
              {PAYMENT_STUDENT_PROFILE.program}
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-black/20 p-4 text-left">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Semester
            </p>

            <p className="mt-2 text-sm font-medium text-white">
              Semester 1
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-black/20 p-4 text-left col-span-2">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Email Address
            </p>

            <p className="mt-2 flex items-center gap-2 text-sm font-medium text-white">
              <Mail size={15} className="text-zinc-400" />
              {PAYMENT_STUDENT_PROFILE.email}
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-black/20 p-4 text-left col-span-2">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Mobile Number
            </p>

            <p className="mt-2 flex items-center gap-2 text-sm font-medium text-white">
              <Phone size={15} className="text-zinc-400" />
              {PAYMENT_STUDENT_PROFILE.mobile}
            </p>
          </div>
        </div>

       
      </div>
    </section>
  );
}

export default memo(StudentProfileCard);