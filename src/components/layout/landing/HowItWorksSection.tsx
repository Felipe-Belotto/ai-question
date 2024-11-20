import React from "react";
import * as m from "@paraglide/messages";
import { ClipboardCheck, Edit, ListChecks } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StepCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  index: number;
}

const StepCard: React.FC<StepCardProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <Card className="flex-1 bg-transparent border-primary/10 hover:border-primary/30 transition-colors group">
    <CardContent className="pt-6">
      <div className="mb-4">
        <div className="h-12 w-12 rounded-lg bg-primary/80 flex items-center justify-center transition-colors">
          <Icon className="h-6 w-6 text-background transition-colors" />
        </div>
      </div>
      <h3 className="text-lg text-primary font-semibold mb-2 transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground  transition-colors">{description}</p>
    </CardContent>
  </Card>
);

const HowItWorksSection = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: m.step1Title(),
      description: m.step1Description(),
    },
    {
      icon: Edit,
      title: m.step2Title(),
      description: m.step2Description(),
    },
    {
      icon: ListChecks,
      title: m.step3Title(),
      description: m.step3Description(),
    },
  ];

  return (
    <section className="min-h-[30vh] lg:min-h-[40vh] flex items-center justify-center">
      <div className="container text-secondary">
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
