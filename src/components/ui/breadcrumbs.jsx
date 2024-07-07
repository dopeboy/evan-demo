"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Breadcrumb className="mx-auto w-96">
      <BreadcrumbList>
        <BreadcrumbItem>
          {pathname === "/" ? (
            <BreadcrumbPage className="" href="/">
              Prompt
            </BreadcrumbPage>
          ) : (
            <BreadcrumbLink className="" href="/">
              Prompt
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
        <BreadcrumbSeparator className="" />
        <BreadcrumbItem>
          {pathname === "/execute" ? (
            <BreadcrumbPage className="">Execute</BreadcrumbPage>
          ) : (
            <BreadcrumbLink className="" href="/execute">Execute</BreadcrumbLink>
          )}
        </BreadcrumbItem>
        <BreadcrumbSeparator className="" />
        <BreadcrumbItem>
          <BreadcrumbLink className="">View</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
