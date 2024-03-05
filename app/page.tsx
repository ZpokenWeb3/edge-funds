"use client";

import Header from "@/components/layout/header";
import { useState } from "react";
import ReactPageScroller from "react-page-scroller";

import { Footer } from "@/components/layout/footer";
import { Hero } from "./hero";
import { Strategy } from "./strategy";
import { Average } from "./average";

const Page = () => {
  const [currentPage, setCurrentPage] = useState<undefined | number>();

  return (
    <>
      <div className="hidden md:block">
        <ReactPageScroller
          pageOnChange={(number) => setCurrentPage(number)}
          customPageNumber={currentPage}
        >
          <div className="px-2 md:px-4 py-4">
            <Hero />
          </div>
          <div className="px-2 md:px-4 py-4">
            <Strategy />
          </div>
          <div className="px-2 md:px-4 py-4">
            <Average />
          </div>
          <div className="px-2 md:px-4">
            <Footer />
          </div>
        </ReactPageScroller>
        <Header
          currentPage={Number(currentPage)}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className="flex flex-col md:hidden px-2 md:px-4 gap-4">
        <Hero />
        <Strategy id="strategy" />
        <Average id="perfomance" />
        <Footer id="about" />
        <Header
          currentPage={Number(currentPage)}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default Page;
