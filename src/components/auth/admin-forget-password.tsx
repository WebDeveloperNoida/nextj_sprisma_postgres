import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AdminForgetPasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Forget Password?</CardTitle>
          <CardDescription>
            Enter register email below to reset password to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
             
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Back to {" "}
              <Link href="/admin" className="underline underline-offset-4">
                 Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
