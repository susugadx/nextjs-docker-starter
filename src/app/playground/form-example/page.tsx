import { Button } from "@/components/app/ui/button"
import { Input } from "@/components/app/ui/input"
import { Label } from "@/components/app/ui/label"

export default function Page() {
  return (
    <div className="p-8 space-y-6 max-w-md mx-auto">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="you@example.com" />
      </div>

      <Button>送信</Button>
    </div>
  )
}
