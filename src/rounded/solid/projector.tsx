import React from "react";
const Projector: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.943 3.25h4.113c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.237 2.87.134.992.151 2.224.153 3.739h-3.058a4.751 4.751 0 0 0-9.382 0H1.25c.002-1.515.02-2.747.153-3.739.157-1.172.49-2.121 1.238-2.87.748-.748 1.697-1.08 2.87-1.238C6.65 3.25 8.105 3.25 9.943 3.25m9.748 9.5h3.058c-.002 1.515-.02 2.747-.152 3.739-.158 1.172-.49 2.121-1.239 2.87-.748.748-1.697 1.08-2.87 1.238-1.139.153-2.594.153-4.432.153H9.943c-1.838 0-3.293 0-4.432-.153-1.173-.158-2.122-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.134-.992-.15-2.224-.153-3.739h9.059a4.751 4.751 0 0 0 9.382 0M6 15a1 1 0 1 0 0 2h.008a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Projector;
