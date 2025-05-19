import React from "react";
const Underpants_03: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 19s0-9 7.5-9M10 19s0-9-7.5-9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 8h3M9.547 18.83c-3.34-1.388-6.544-5.764-7.465-8.562A1.8 1.8 0 0 1 2 9.72V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2.72c0 .186-.024.371-.082.548-.92 2.798-4.125 7.174-7.465 8.563-.296.123-.616.169-.937.169h-3.031c-.321 0-.641-.046-.938-.17"
      />
    </svg>
  );
};
export default Underpants_03;
