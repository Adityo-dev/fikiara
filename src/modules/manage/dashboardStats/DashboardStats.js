import {
  Award,
  BookOpen,
  DollarSign,
  Gift,
  Monitor,
  Users,
} from "lucide-react";
import DashboardStatsCard from "./DashboardStatsCard";

const stats = [
  {
    id: 1,
    label: "Enrolled Courses",
    value: "30",
    icon: <BookOpen className="w-8 h-8 text-blue-500" />,
    bg: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    id: 2,
    label: "Active Courses",
    value: "10",
    icon: <Monitor className="w-8 h-8 text-purple-500" />,
    bg: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    id: 3,
    label: "Completed Courses",
    value: "7",
    icon: <Award className="w-8 h-8 text-pink-500" />,
    bg: "bg-pink-50",
    textColor: "text-pink-600",
  },
  {
    id: 4,
    label: "Total Students",
    value: "160",
    icon: <Users className="w-8 h-8 text-rose-500" />,
    bg: "bg-rose-50",
    textColor: "text-rose-600",
  },
  {
    id: 5,
    label: "Total Courses",
    value: "20",
    icon: <Gift className="w-8 h-8 text-orange-400" />,
    bg: "bg-orange-50",
    textColor: "text-orange-500",
  },
  {
    id: 6,
    label: "Total Earnings",
    value: "25,000+",
    icon: <DollarSign className="w-8 h-8 text-amber-500" />,
    bg: "bg-amber-50",
    textColor: "text-amber-500",
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <DashboardStatsCard stat={stat} key={stat?.id} />
      ))}
    </div>
  );
}
