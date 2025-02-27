import { AppSidebar } from "@/app/(admin_dashboard)/admins/components/app-sidebar"
import {CardWithContent} from "./components/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"


interface EnquiryCardProps {
  title: string;
  heading: string;
  count: number;
  url: string;
}


export default function HomePage() {

  const cardsData: EnquiryCardProps[] = [
    {
      title: "Hot Line", heading: "Follow these enquiry", count: 0, url: "/admins/enquiry/hotline",
    },
    {
      title: "Contact", heading: "Follow these enquiry", count: 0, url: "/admins/enquiry/contact",
    },
    {
      title: "Request", heading: "Follow these enquiry", count: 0, url: "/admins/enquiry/request",
    },
  ];




  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/admins">
                  Admin
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          {cardsData.map((card, index) => (
        <CardWithContent key={index} {...card} />
         ))}
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
