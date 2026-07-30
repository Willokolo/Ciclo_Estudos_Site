export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[15%] before:h-[70%] before:w-1 before:bg-amber-400 before:rounded text-4xl font-sans ont-serif text-blue-950">
      {children}
    </h2>
  );
}

export function line() {
  return (<div className= "border-b border-gray-200"></div>
  )
}

