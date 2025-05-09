"use client";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  Code2,
  FileQuestion,
  LayoutDashboard,
  Library,
  Menu,
  Timer,
} from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@workspace/ui/components/sheet";
import Image from "next/image";
import {
  DiscordIcon,
  GitHubDarkIcon,
  GitHubLightIcon,
  LinkedInIcon,
} from "@trigger.dev/companyicons";
import { useDarkMode } from "@/hooks/useDarkMode";

const SidebarContent = () => {
  const { theme } = useDarkMode();

  return (
    <div className="flex h-full flex-col bg-white dark:bg-[#18181B] dark:text-white text-black">
      {/* Header */}
      <div className="flex items-center gap-2 p-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center space-x-1">
            {theme === "dark" ? (
              <Image
                alt="logo"
                src={"/images/logo-light.svg"}
                width={40}
                height={40}
                className="rounded-md"
              />
            ) : (
              <Image
                alt="logo"
                src={"/images/logo.svg"}
                width={40}
                height={40}
                className="rounded-md"
              />
            )}
          </div>
          <span className="font-semibold">Frontend Forge</span>
        </div>
        <Button variant="ghost" size="icon" className="ml-auto">
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-2 py-2">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-white/10"
        >
          <LayoutDashboard className="h-4 w-4" />
          Dashboard
        </Link>

        <Collapsible>
          <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-white/10">
            <div className="flex items-center gap-2">
              <FileQuestion className="h-4 w-4" />
              Practice questions
            </div>
            <ChevronRight className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1 px-3 py-1">
            <Link
              href="/questions"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-white/10"
            >
              <Library className="h-4 w-4" />
              All practice questions
            </Link>
            <Link
              href="/questions/js"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-white/10"
            >
              <Code2 className="h-4 w-4" />
              Frameworks / languages
            </Link>
          </CollapsibleContent>
        </Collapsible>

        <Link
          href="/strategy"
          className="flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-white/10"
        >
          <span>Recommended strategy</span>
          <ChevronRight className="h-4 w-4" />
        </Link>

        <Link
          href="/time-savers"
          className="flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-white/10"
        >
          <div className="flex items-center gap-2">
            <Timer className="h-4 w-4" />
            Time-savers
          </div>
          <ChevronRight className="h-4 w-4" />
        </Link>

        <Link
          href="/guides"
          className="flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-white/10"
        >
          <span>Guides</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </nav>

      {/* Footer */}
      <div className="flex items-center gap-3 border-t border-gray-300 dark:border-[#27272A] p-4">
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-gray-200 p-2 border-white rounded-full bg-transparent"
        >
          <DiscordIcon className="w-6 h-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-gray-200 p-2 border-gray-200 rounded-full bg-transparent"
        >
          {theme === "dark" ? (
            <GitHubLightIcon className="w-6 h-6" />
          ) : (
            <GitHubDarkIcon className="w-6 h-6" />
          )}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-gray-200 p-2 border-gray-200 rounded-full bg-transparent"
        >
          <LinkedInIcon className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export function Sidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden fixed md:block dark:bg-[#18181B]">
        <div className="h-screen border-r-[1px]  border-r-gray-300 dark:border-r-[#27272A] w-64">
          <SidebarContent />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="fixed left-4 top-4 z-40 md:hidden"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  );
}
