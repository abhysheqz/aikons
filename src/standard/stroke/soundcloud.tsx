import React from "react";
const Soundcloud: React.FC<
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
        d="M8 6v13M5 9.88v9.028M2 11.63v5.527M11 19V5.042c3.65-.425 7.136 2.441 6.507 5.846m0 0c-.153.83-.55 1.693-1.25 2.547m1.25-2.547c1.045-.42 3.769.238 4.382 3.069.692 3.196-2 5.043-4.1 5.043h-3.726"
      />
    </svg>
  );
};
export default Soundcloud;
