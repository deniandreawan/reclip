import { DicesIcon, Settings2Icon, SparkleIcon } from "lucide-react";
import { useEffect, useRef } from "react";

import { Button } from "~/components/ui/button";

export function PromptInput() {
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		const textarea = textareaRef.current;
		if (!textarea) return;

		const adjustHeight = () => {
			textarea.style.height = "auto";
			const newHeight = Math.min(textarea.scrollHeight, 100);
			textarea.style.height = `${newHeight}px`;
			textarea.style.overflowY =
				textarea.scrollHeight > 100 ? "scroll" : "hidden";
		};

		textarea.addEventListener("input", adjustHeight);
		return () => textarea.removeEventListener("input", adjustHeight);
	}, []);

	return (
		<form className="overflow-hidden rounded-3xl border border-border bg-background/40 shadow-md backdrop-blur-xl">
			<textarea
				id="prompt"
				name="prompt"
				ref={textareaRef}
				className="scrollbar-hide w-full resize-none bg-transparent px-4 py-4 tracking-[3%] outline-none transition-[height] placeholder:text-muted-foreground/40"
				placeholder="Describe an image..."
				rows={1}
				style={{ maxHeight: "100px", overflow: "hidden" }}
			/>
			<div className="flex w-full items-center justify-between p-3">
				<div className="flex space-x-2">
					<Button
						variant="secondary"
						size="icon"
						type="button"
						className="rounded-full bg-muted-foreground/10 text-muted-foreground shadow-none hover:bg-muted-foreground/5 hover:text-primary"
					>
						<Settings2Icon className="size-4" />
					</Button>
					<Button
						variant="secondary"
						size="icon"
						type="button"
						className="rounded-full bg-muted-foreground/10 text-muted-foreground shadow-none hover:bg-muted-foreground/5 hover:text-primary"
					>
						<DicesIcon className="size-4" />
					</Button>
				</div>
				<Button
					variant="secondary"
					type="submit"
					className="rounded-full bg-blue-600/20 text-blue-400 shadow-none hover:bg-blue-600 hover:text-primary"
				>
					<SparkleIcon className="size-4" />
					Generate
				</Button>
			</div>
		</form>
	);
}
