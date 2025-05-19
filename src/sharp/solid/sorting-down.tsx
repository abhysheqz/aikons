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
        d="M18 16H6v-2h12zM21 12H3v-2h18zM17 2v3.586l.793-.793 1.414 1.414L16 9.414l-3.207-3.207 1.414-1.414.793.793V2zM9 2v3.586l.793-.793 1.414 1.414L8 9.414 4.793 6.207l1.414-1.414.793.793V2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 15v3.172l.793-.793 1.414 1.414L12 22l-3.207-3.207 1.414-1.414.793.793V15z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SortingDown;
