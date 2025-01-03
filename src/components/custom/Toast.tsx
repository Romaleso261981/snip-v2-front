import { cn } from "@/lib/utils";
import { AlertCircle, CheckCheck, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { m } from "framer-motion";
import { Button2 } from "../ui/button2";

export default function Toast({
  status = "success",
  message,
  link,
  toastId
}: {
  status?: "error" | "success";
  message: string;
  link?: string;
  toastId?: string;
}) {
  return (
    <m.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className={cn(
        "z-[99999] shadow-xl flex items-center justify-between gap-10  p-4 mb-4 text-slate-800 border-slate-400 bg-white",
        status === "error" && "text-red-800 border-t-4 border-red-300"
      )}
      role="alert"
    >
      {status === "success"
        ? <CheckCheck className="w-8 h-8 text-green-700" />
        : <AlertCircle className="w-8 h-8 text-red-700" />}

      <div className="ms-3 text-base font-medium" data-cy="notification">
        {message}
        {link &&
          <Link
            href={link}
            className="font-semibold underline hover:no-underline "
          />}
      </div>
      <Button2
        onClick={() => toast.remove(toastId)}
        size="icon"
        variant="outline"
        className="ms-auto rounded-lg "
      >
        <X
          className={cn(
            "text-black h-8 w-8",
            status === "error" && "text-red-800 "
          )}
        />
      </Button2>
    </m.div>
  );
}
