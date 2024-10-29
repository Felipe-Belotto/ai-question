import { ClipboardCheck, Edit, ListChecks } from "lucide-react";

const HowItWorksSection = () => (
	<div className="mt-16 w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8">
		{/* Step 1: Choose Topic */}
		<div className="flex flex-col items-center text-center space-y-4">
			<div className="p-4 rounded-full bg-primary/10">
				<Edit className="w-8 h-8 text-primary" />
			</div>
			<h3 className="text-xl font-medium text-primary">
				Step 1: Choose Your Topic
			</h3>
			<p className="text-muted-foreground">
				Start by selecting the topic you're interested in exploring.
			</p>
		</div>

		{/* Step 2: Enter Prompt */}
		<div className="flex flex-col items-center text-center space-y-4">
			<div className="p-4 rounded-full bg-primary/10">
				<ListChecks className="w-8 h-8 text-primary" />
			</div>
			<h3 className="text-xl font-medium text-primary">
				Step 2: Enter Your Prompt
			</h3>
			<p className="text-muted-foreground">
				Type a specific prompt or question about the chosen topic.
			</p>
		</div>

		{/* Step 3: Generate Your Exam */}
		<div className="flex flex-col items-center text-center space-y-4">
			<div className="p-4 rounded-full bg-primary/10">
				<ClipboardCheck className="w-8 h-8 text-primary" />
			</div>
			<h3 className="text-xl font-medium text-primary">
				Step 3: Receive Your Exam
			</h3>
			<p className="text-muted-foreground">
				The platform generates a 10-question exam tailored to your topic.
			</p>
		</div>
	</div>
);

export default HowItWorksSection;
