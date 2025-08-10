import { MemoryAnswerProvider } from '@/lib/context/memory-answer-context';

const MemoryLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <MemoryAnswerProvider>
        {children}
      </MemoryAnswerProvider>
    </>
  );
};

export default MemoryLayout;
