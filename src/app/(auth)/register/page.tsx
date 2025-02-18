import { Star } from "lucide-react"
import Link from "next/link";
import { UserRegisterForm } from "@/components/auth/user-register-form"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Register With Us",
    description: "Register with us",
  };

export default function UserRegisterPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Star className="size-4" />
          </div>
          Star Web Maker AI
        </Link>
        <UserRegisterForm />
      </div>
    </div>
  )
}
