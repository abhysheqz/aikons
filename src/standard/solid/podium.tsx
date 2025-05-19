import React from "react";
const Podium: React.FC<
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
        d="M9 3H7.78l-.81 3.242a1 1 0 0 1-1.94-.486l.81-3.241A2 2 0 0 1 7.78 1H9a1 1 0 1 1 0 2m5-1a1 1 0 0 1 1-1h1.22a2 2 0 0 1 1.94 1.515l.81 3.241a1 1 0 1 1-1.94.486L16.22 3H15a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.958 14.746h-2.63a1.75 1.75 0 0 1-1.72-1.427L3.485 7.32a1.75 1.75 0 0 1 1.72-2.073h13.59a1.75 1.75 0 0 1 1.72 2.072l-1.122 6a1.75 1.75 0 0 1-1.722 1.429l-2.63-.002-.231 3.003h.03c.7 0 1.333.417 1.609 1.06l.942 2.197a1.25 1.25 0 0 1-1.15 1.742H7.758a1.25 1.25 0 0 1-1.149-1.742l.942-2.197a1.75 1.75 0 0 1 1.608-1.06h.031z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Podium;
