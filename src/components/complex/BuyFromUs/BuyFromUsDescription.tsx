import Container from "@/components/custom/Container";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb/breadcrumb";
import Link from "next/link";

type BuyFromUsDescriptionProps = {
  description: string;
  title: string;
};

export default function BuyFromUsDescription({
  description,
  title
}: BuyFromUsDescriptionProps) {
  return (
    <div>
      <Container>
        <Breadcrumb>
          <BreadcrumbList className="capitalize flex flex-wrap">
            <Link href="/uk/" className="text-sm hover:text-gold">
              Home
            </Link>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-sm font-bold hover:text-gold ">
                buy-from-us
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Container>
      <div>
        <div className="flex flex-col justify-center items-center px-8">
          <h3 className="font-montserrat font-weight-500 text-2xl pb-4">
            {title}
          </h3>
          <p className="text-center pb-4 text-black font-montserrat font-weight-500 text-2xs">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
