import React from "react";
const Pinterest: React.FC<
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
        d="M8 12a4 4 0 1 1 3.079 3.894l1.846-4.515a1 1 0 1 0-1.85-.758L6.687 21.347A10.75 10.75 0 0 1 1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75c-1.221 0-2.395-.204-3.49-.579l1.805-4.411A6 6 0 1 0 6.5 14.4a1 1 0 1 0 1.833-.8A4 4 0 0 1 8 12"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pinterest;
