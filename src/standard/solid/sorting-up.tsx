import React from "react";
const SortingUp: React.FC<
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
        d="M8 22a1 1 0 0 0 1-1v-2.5h1a1 1 0 0 0 .707-1.707l-2-2a1 1 0 0 0-1.414 0l-2 2A1 1 0 0 0 6 18.5h1V21a1 1 0 0 0 1 1M16 22a1 1 0 0 0 1-1v-2.5h1a1 1 0 0 0 .707-1.707l-2-2a1 1 0 0 0-1.414 0l-2 2A1 1 0 0 0 14 18.5h1V21a1 1 0 0 0 1 1M12 9a1 1 0 0 0 1-1V5.5h1a1 1 0 0 0 .707-1.707l-2-2a1 1 0 0 0-1.414 0l-2 2A1 1 0 0 0 10 5.5h1V8a1 1 0 0 0 1 1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.5 8.5a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2h-11a1 1 0 0 1-1-1M2.5 12.5a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SortingUp;
