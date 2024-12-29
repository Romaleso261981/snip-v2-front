import { Metadata } from "next";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Container from "@/components/custom/Container";
import Link from "next/link";
import Checkout from "@/components/complex/Chechout";

export default async function page() {
  const generateCoupon = {
    coupon: "FRCTL2021"
  };

  return (
    <div>
      <section className="my-10">
        <Container>
          <Breadcrumb>
            <BreadcrumbList className="capitalize flex flex-wrap">
              <Link href="/" className="text-xl hover:text-primary-500">
                Home
              </Link>
              <BreadcrumbSeparator />
              <Link
                href={"/products"}
                className="text-xl hover:text-primary-500"
              >
                Store
              </Link>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-xl font-bold hover:text-primary-500 ">
                  Checkout
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Container>
      </section>
      <section>
        <Container>
          <Checkout
            couponGenearated={generateCoupon ? generateCoupon.coupon : ""}
          />
        </Container>
      </section>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Checkout - Fractal",
  description: "Online Ecommerce for selling anything in usa",
  icons: {
    icon: "/assets/images/logo.svg"
  }
};
