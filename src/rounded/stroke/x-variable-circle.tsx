import React from "react";
const XVariableCircle: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 8.99c-3.184 0-4.816 6.02-8 6.02"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.54 15.01c-.808 0-1.252 0-1.593-.12a1.8 1.8 0 0 1-.52-.284c-.265-.21-.41-.509-.7-1.108l-1.452-2.995c-.29-.6-.435-.9-.7-1.109a1.8 1.8 0 0 0-.52-.283c-.34-.121-.785-.121-1.594-.121"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      />
    </svg>
  );
};
export default XVariableCircle;
