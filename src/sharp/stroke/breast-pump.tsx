import React from "react";
const BreastPump: React.FC<
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
        d="M7.5 22h10v-8a5 5 0 0 0-10 0z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 14h3.5M14 18h3.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 9V6"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M15 6H7L5 8" />
      <circle
        cx={4.5}
        cy={9.5}
        r={1.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15 6c1.02-.509 2.6-1.824 3.34-2.71C18.87 2.657 19.5 2 21 2v8c-1.5 0-2.13-.657-2.66-1.29C17.6 7.822 16.02 6.507 15 6Z"
      />
    </svg>
  );
};
export default BreastPump;
