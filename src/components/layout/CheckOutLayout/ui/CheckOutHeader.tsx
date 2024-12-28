import React, { FC } from "react";

import MainLogo from "@/components/ui/MainLogo";
import BackButton from "@/components/ui/BackButton";

const CheckOutHeader: FC = () => {
  return (
    <header className="container flex justify-between md:w-3/4 px-4">
      <MainLogo />
      <BackButton />
    </header>
  );
};

export default CheckOutHeader;
