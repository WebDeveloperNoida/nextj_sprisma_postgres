
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface EnquiryCardProps {
  title: string;
  heading: string;
  count: number;
  url: string;
}
export const CardWithContent = (EnquiryCardProps: any) => {

  return (
    <Card className="aspect-video rounded-xl bg-muted/50">
      <CardHeader>
        <CardTitle>{EnquiryCardProps.title}</CardTitle>
        <CardDescription>{EnquiryCardProps.heading}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button variant="outline">{EnquiryCardProps.count}</Button>
        <Button>Show More</Button>
      </CardFooter>
    </Card>
  )
}
