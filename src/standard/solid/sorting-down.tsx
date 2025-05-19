import React from "react";
const SortingDown: React.FC<
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
        d="M8 1.5a1 1 0 0 1 1 1V5h1a1 1 0 0 1 .707 1.707l-2 2a1 1 0 0 1-1.414 0l-2-2A1 1 0 0 1 6 5h1V2.5a1 1 0 0 1 1-1M16 1.5a1 1 0 0 1 1 1V5h1a1 1 0 0 1 .707 1.707l-2 2a1 1 0 0 1-1.414 0l-2-2A1 1 0 0 1 14 5h1V2.5a1 1 0 0 1 1-1M12 14.5a1 1 0 0 1 1 1V18h1a1 1 0 0 1 .707 1.707l-2 2a1 1 0 0 1-1.414 0l-2-2A1 1 0 0 1 10 18h1v-2.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.5 15a1 1 0 0 0 1 1h11a1 1 0 1 0 0-2h-11a1 1 0 0 0-1 1M2.5 11a1 1 0 0 0 1 1h17a1 1 0 1 0 0-2h-17a1 1 0 0 0-1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SortingDown;
