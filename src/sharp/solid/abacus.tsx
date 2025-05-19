import React from "react";
const Abacus: React.FC<
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
        d="M2.47 2.47A.75.75 0 0 1 3 2.25h18a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 .22-.53M10.25 11V7h1.5v4zm3 0V7h1.5v4zM9 9.75H6v-1.5h3zm9 0h-2v-1.5h2zM10.25 13v4h1.5v-4zM9 14.25H6v1.5h3zm9 0h-5v1.5h5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Abacus;
