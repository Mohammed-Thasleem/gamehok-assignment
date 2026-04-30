import type { NavItem } from "@/types/navigation";
import { Home, Trophy, Users, MessageSquare } from "lucide-react";

export const navItems: NavItem[] = [
  { to: "/", label: "Home", icon: Home, end: true },
  {
    to: "/my-tournament",
    label: "My Tournament",
    icon: Trophy,
    disabled: true,
  },
  { to: "/social", label: "Social", icon: Users, disabled: true },
  { to: "/chat", label: "Chat", icon: MessageSquare, disabled: true },
];
