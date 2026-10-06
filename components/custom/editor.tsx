"use client";

import { useEditor, EditorContent, type Editor as TiptapEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Fragment } from "react";
import { BoldIcon, CodeIcon, Heading01Icon, Heading02Icon, Heading03Icon, ItalicIcon, Link01Icon, ListIcon, ListOrderedIcon, Redo, StrikethroughIcon, UnderlineIcon, Undo } from "@hugeicons/core-free-icons";
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";


type Item = {
    label: string;
    icon: IconSvgElement;
    isActive: (e: TiptapEditor) => boolean;
    run: (e: TiptapEditor) => void;
};

const groups: Item[][] = [
    [
        { label: "Bold", icon: BoldIcon, isActive: (e) => e.isActive("bold"), run: (e) => e.chain().focus().toggleBold().run() },
        { label: "Italic", icon: ItalicIcon, isActive: (e) => e.isActive("italic"), run: (e) => e.chain().focus().toggleItalic().run() },
        { label: "Underline", icon: UnderlineIcon, isActive: (e) => e.isActive("underline"), run: (e) => e.chain().focus().toggleUnderline().run() },
        { label: "Strike", icon: StrikethroughIcon, isActive: (e) => e.isActive("strike"), run: (e) => e.chain().focus().toggleStrike().run() },
        { label: "Code", icon: CodeIcon, isActive: (e) => e.isActive("code"), run: (e) => e.chain().focus().toggleCode().run() },
    ],
    [
        { label: "Heading 1", icon: Heading01Icon, isActive: (e) => e.isActive("heading", { level: 1 }), run: (e) => e.chain().focus().toggleHeading({ level: 1 }).run() },
        { label: "Heading 2", icon: Heading02Icon, isActive: (e) => e.isActive("heading", { level: 2 }), run: (e) => e.chain().focus().toggleHeading({ level: 2 }).run() },
        { label: "Heading 3", icon: Heading03Icon, isActive: (e) => e.isActive("heading", { level: 3 }), run: (e) => e.chain().focus().toggleHeading({ level: 3 }).run() },
    ],
    [
        { label: "Bullet list", icon: ListIcon, isActive: (e) => e.isActive("bulletList"), run: (e) => e.chain().focus().toggleBulletList().run() },
        { label: "Numbered list", icon: ListOrderedIcon, isActive: (e) => e.isActive("orderedList"), run: (e) => e.chain().focus().toggleOrderedList().run() }
    ],
    [
        {
            label: "Link",
            icon: Link01Icon,
            isActive: (e) => e.isActive("link"),
            run: (e) => {
                const prev = e.getAttributes("link").href ?? "";
                const url = window.prompt("آدرس لینک", prev);
                if (url === null) return;                       // کاربر لغو کرد
                if (url === "") e.chain().focus().extendMarkRange("link").unsetLink().run();
                else e.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
            },
        },
    ],
];

export function Editor({ value, onChange }: {
    value: string;
    onChange: (html: string) => void;
}) {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({ link: { openOnClick: false } }),
            Placeholder.configure({ placeholder: "شرح کامل دوره، مزایا، پیش‌نیاز‌ها، اهداف و..." })
        ],
        content: value,
        immediatelyRender: false,
        shouldRerenderOnTransaction: true,
        editorProps: {
            attributes: {
                dir: 'rtl',
                class: "prose prose-sm dark:prose-invert max-w-none min-h-[150px] p-3 focus:outline-none"
            },
        },
        onUpdate: ({ editor }) => onChange(editor.getHTML()),
    });

    if (!editor) return null;

    return (
        <div className="rounded-md border">
            <div className="flex flex-wrap items-center gap-1 border-b p-1">
                {groups.map((group, i) => (
                    <Fragment key={i}>
                        {i > 0 && <Separator orientation="vertical" className="mx-1 h-6" />}
                        {group.map(({ label, icon, isActive, run }) => (
                            <Toggle
                                key={label}
                                size="sm"
                                aria-label={label}
                                title={label}
                                pressed={isActive(editor)}
                                onPressedChange={() => run(editor)}
                            >
                                <HugeiconsIcon icon={icon} className="size-4" />
                            </Toggle>
                        ))}
                    </Fragment>
                ))}

                <div className="ms-auto flex gap-1">
                    <Button variant="ghost" size="icon" className="size-8" aria-label="Undo"
                        disabled={!editor.can().undo()} onClick={() => editor.chain().focus().undo().run()}>
                        <HugeiconsIcon icon={Undo} className="size-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="size-8" aria-label="Redo"
                        disabled={!editor.can().redo()} onClick={() => editor.chain().focus().redo().run()}>
                        <HugeiconsIcon icon={Redo} className="size-4" />
                    </Button>
                </div>
            </div>
            <EditorContent editor={editor} className="bg-input/30"/>
        </div>
    );
}