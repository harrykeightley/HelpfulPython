import Head from "next/head";
import React from "react";
import Header from "../components/Header";

export default function MainLayout({ children }) {
  return (
    <div className="bg-slate-100">
      <Head>
        <title>Python Course</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 max-w-5xl mx-auto">{children}</main>
      </div>
    </div>
  );
}
 