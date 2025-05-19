import React from "react";
const NewReleases: React.FC<
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
        d="m12 2 2.534 2.582 3.646-.672.455 3.505L22 8.91 20.201 12 22 15.09l-3.365 1.495-.455 3.505-3.646-.672L12 22l-2.534-2.582-3.646.672-.455-3.505L2 15.09 3.799 12 2 8.91l3.365-1.495.455-3.505 3.646.672z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m8.5 12.5 2.25 2 5.25-5"
      />
    </svg>
  );
};
export default NewReleases;
