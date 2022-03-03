import Head from "next/head";
import React from "react";
import Header from "../components/Header";

export default function MainLayout({ children }) {
  return (
    <div className="bg-slate-100">
      <Head>
        <title>HelpfulPython</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="container flex-1 py-8 ">{children}</main>
      </div>
    </div>
  );
}
