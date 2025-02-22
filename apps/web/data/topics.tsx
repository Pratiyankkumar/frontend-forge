import {
  Accessibility,
  FileCode,
  FormInput,
  GitBranch,
  LayoutGrid,
  MonitorSmartphone,
  Network,
  RotateCcw,
} from "lucide-react";

export interface TopicCard {
  icon: JSX.Element;
  title: string;
  questions: number;
  href: string;
}

export const topics: TopicCard[] = [
  {
    icon: <Accessibility className="h-6 w-6" />,
    title: "Accessibility",
    questions: 12,
    href: "/accessibility",
  },
  {
    icon: <RotateCcw className="h-6 w-6" />,
    title: "Async Operations",
    questions: 33,
    href: "/async",
  },
  {
    icon: <Network className="h-6 w-6" />,
    title: "Data Structures & Algorithms",
    questions: 22,
    href: "/dsa",
  },
  {
    icon: <LayoutGrid className="h-6 w-6" />,
    title: "Design System Components",
    questions: 15,
    href: "/design-system",
  },
  {
    icon: <MonitorSmartphone className="h-6 w-6" />,
    title: "DOM Manipulation",
    questions: 10,
    href: "/dom",
  },
  {
    icon: <FormInput className="h-6 w-6" />,
    title: "Forms",
    questions: 10,
    href: "/forms",
  },
  {
    icon: <FileCode className="h-6 w-6" />,
    title: "JavaScript Polyfills",
    questions: 26,
    href: "/polyfills",
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    title: "State Management",
    questions: 17,
    href: "/state",
  },
];
