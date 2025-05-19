import React from "react";
const Caravan: React.FC<
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
        d="M11.5 18a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 5a2 2 0 0 1 2-2h10a7 7 0 0 1 7 7v7h1v-1a1 1 0 1 1 2 0v1a2 2 0 0 1-2 2h-8.333A3.804 3.804 0 0 0 9 14.2 3.8 3.8 0 0 0 5.333 19H3a2 2 0 0 1-2-2zm5 2h5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Caravan;
