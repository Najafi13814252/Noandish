import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactNode } from 'react';

type StepBoxProps = {
  title: string;
  description: string;
  step: number;
  children: ReactNode
};

function StepBox({ title, description, step, children }: StepBoxProps) {
  return (
    <Card>
      <CardHeader className='flex items-center justify-between gap-4'>
        <div className='flex flex-col gap-1.5'>
          <CardTitle className='text-primary'>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <span className='px-2 py-1 bg-teal-500/10 text-teal-500 rounded-full font-medium'>مرحله {step}</span>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}

export default StepBox;
