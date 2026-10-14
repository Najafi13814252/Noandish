import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDuration } from "@/lib/formatDuration";
import { BookOpen02Icon, LockIcon, PlayCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "cn";
import Link from "next/link";

interface CourseChaptersProps {
    courseChapters: {
        id: string;
        title: string;
        lessons: {
            id: string;
            title: string;
            duration: number | null;
            isFree: boolean;
        }[];
    }[]
    courseId: string
}

function CourseChapters({ courseChapters, courseId }: CourseChaptersProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-primary text-xl flex items-center gap-x-2">
                    <HugeiconsIcon icon={BookOpen02Icon} className="text-secondary size-7" />
                    سرفصل‌های دوره
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Accordion defaultValue={courseChapters[0] ? [courseChapters[0].id] : undefined}>
                    {courseChapters.map(chapter => (
                        <AccordionItem key={chapter.id} value={chapter.id}>
                            <AccordionTrigger className="text-base font-medium flex items-center">
                                {chapter.title}
                            </AccordionTrigger>

                            <AccordionContent>
                                <ul className="space-y-1">
                                    {chapter.lessons.map(lesson => (
                                        <li key={lesson.id}>
                                            <Link
                                                href={`/courses/${courseId}/chapters/${chapter.id}?lesson=${lesson.id}`}
                                                className={cn(
                                                    "flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm no-underline! transition-colors",
                                                    !lesson.isFree
                                                        ? "text-gray-400 hover:bg-muted dark:text-gray-400"
                                                        : "text-gray-600 hover:bg-teal-500/10 hover:text-teal-600! dark:text-gray-200 dark:hover:text-teal-300!"
                                                )}
                                            >
                                                <span className="flex min-w-0 items-center gap-2">
                                                    <HugeiconsIcon
                                                        icon={!lesson.isFree ? LockIcon : PlayCircleIcon}
                                                        className={cn("size-5 shrink-0", !lesson.isFree ? "text-gray-400" : "text-teal-500")}
                                                    />
                                                    <span className="truncate">{lesson.title}</span>
                                                </span>

                                                <span className="flex shrink-0 items-center gap-2 text-xs text-gray-400">
                                                    <span className="whitespace-nowrap">{formatDuration(lesson.duration!)}</span>
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
    )
}

export default CourseChapters