import Head from "next/head";
import React from "react";
import Header from "../components/Header";

export default function MainLayout({ children }) {
  return (
    <div className="bg-slate-100">
      <Head>
        <title>Python Course</title>
      </Head>
      <div className="flex flex-col max-w-5xl mx-auto min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
 