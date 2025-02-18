import type { Metadata } from "next";
import {AdminForgetPasswordForm} from "@/components/auth/admin-forget-password"
export const metadata: Metadata = {
    title: "Admin Forget Password",
    description: "Admin Forget Password",
  };

function AdminForgetPasswordPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
       <AdminForgetPasswordForm />
      </div>
    </div>
  )
}

export default AdminForgetPasswordPage