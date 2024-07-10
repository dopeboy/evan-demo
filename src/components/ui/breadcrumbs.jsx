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
  return (
    <Breadcrumb className="mx-auto">
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
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
