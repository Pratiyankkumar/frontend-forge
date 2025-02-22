/* eslint-disable turbo/no-undeclared-env-vars */
"use client";

import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import type React from "react"; // Import React
import Image from "next/image";
import { Check, InfoIcon, PlayIcon } from "lucide-react";

import { Geist, Geist_Mono } from "next/font/google";

import "@workspace/ui/globals.css";
import { usePathname } from "next/navigation";
import { useCode } from "@/contexts/CodeContext";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const questionId = pathName.slice(8, pathName.length);

  const { code, setTestCases } = useCode();

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL as string;

  async function handleSubmit() {
    const req = await fetch(`${backendUrl}/api/test`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        questionId,
        userCode: code,
      }),
    });

    const res = await req.json();

    setTestCases(res.results);
  }

  return (
    <html lang="en">
      <body
        className={` ${fontSans.variable} ${fontMono.variable} font-sans antialiased  bg-white text-balck`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 text-black z-50 w-full border-b border-neutral-300 bg-white">
            <div className="flex h-14 items-center px-4">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  alt="logo"
                  src={"/images/logo.png"}
                  width={30}
                  height={30}
                  className="rounded-md"
                />
                <div className="font-bold text-black">Frontend Forge</div>
              </Link>

              <nav className="flex items-center space-x-6 mx-6">
                <button className="text-sm font-medium transition-colors hover:text-yellow-500">
                  Interviews
                </button>
                <Link
                  href="/dashboard"
                  className="text-sm font-medium transition-colors hover:text-yellow-500"
                >
                  Dashboard
                </Link>
                <div className="relative">
                  <button className="text-sm font-medium transition-colors hover:text-yellow-500">
                    Prepare
                  </button>
                </div>
              </nav>

              <div className="flex flex-1 items-center justify-end space-x-4">
                <Link
                  href="/pricing"
                  className="text-sm font-medium transition-colors hover:text-yellow-500"
                >
                  Pricing
                </Link>
                <Button
                  variant="default"
                  className="bg-[#E2FB75] rounded-full h-[30px] text-black hover:bg-[#E2FB75]/90"
                >
                  <p className="text-[12px]">Get full access</p>
                </Button>
              </div>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t w-full h-14 border-neutral-300 bg-white text-black">
            <div className="flex flex-row items-center justify-between h-full w-full">
              <div className="flex flex-row ml-8 gap-[6px] text-black cursor-pointer duration-300 transition-all hover:text-gray-900 items-center">
                <InfoIcon className="h-3 w-3" />
                <p className=" text-[12px] mt-[1px]">Report an Issue</p>
              </div>

              <div className="flex flex-row items-center gap-4 mr-8">
                <Button
                  variant="default"
                  className="bg-[#E2FB75] rounded-full flex flex-row gap-[4px] items-center h-[30px] px-2 text-black hover:bg-[#E2FB75]/90"
                >
                  <Check className="w-3 h-3" />
                  <p className="text-[12px]">Mark Completed</p>
                </Button>
                <Button
                  variant="default"
                  className="bg-[#E2FB75] rounded-full flex flex-row gap-[4px] items-center h-[30px] px-2 text-black hover:bg-[#E2FB75]/90"
                  onClick={handleSubmit}
                >
                  <PlayIcon className="w-3 h-3" />
                  <p className="text-[12px]">Run</p>
                </Button>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
