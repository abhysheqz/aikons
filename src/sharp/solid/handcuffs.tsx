import React from "react";
const Handcuffs: React.FC<
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
        d="M7.613 1.45a.96.96 0 0 1 .816-.172l7.6 1.89c.422.104.719.482.719.915V8.75h-1.9V4.82l-5.7-1.416.002 4.457h-1.9l-.002-5.666c0-.291.135-.566.365-.745"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.999 5.25a.75.75 0 0 0-.75.75v2.387a6.75 6.75 0 1 0 7.5 0V6a.75.75 0 0 0-.75-.75zm3 6a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.83 21.309a6.75 6.75 0 1 0 7.92-10.922V8a.75.75 0 0 0-.75-.75h-5.75v.386a8.24 8.24 0 0 1 2.967 5.623 2.75 2.75 0 1 1-1.315 5.263 8.3 8.3 0 0 1-3.071 2.787"
      />
    </svg>
  );
};
export default Handcuffs;
