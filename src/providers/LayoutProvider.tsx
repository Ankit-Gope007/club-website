"use client";

import Footer from "@/components/Footer";
import FullScreenLoader from "@/components/loading/FullScreenLoader";
import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 13000);
  }, []);
  if (loading) {
    return <FullScreenLoader />;
  }
  return (
    <>
      {/* Background Image for all pages */}
      {/* <div className="fixed inset-0 -z-10">
        <Image
          src="/background_image.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div> */}
      
      <div className=" mx-auto">
        <Navbar />
      </div>
      {children}
      <Footer />
    </>
  );
}

export default LayoutProvider;
