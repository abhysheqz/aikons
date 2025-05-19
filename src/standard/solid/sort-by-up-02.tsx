import React from "react";
const SortByUp_02: React.FC<
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
        d="M18 15.5a1 1 0 0 0 1-1v-8h1.5a1 1 0 0 0 .707-1.707l-2.5-2.5a1 1 0 0 0-1.414 0l-2.5 2.5A1 1 0 0 0 15.5 6.5H17v8a1 1 0 0 0 1 1M13.5 14h-10a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2M2.5 9a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2h-6a1 1 0 0 0-1 1M2.5 21a1 1 0 0 0 1 1h15a1 1 0 1 0 0-2h-15a1 1 0 0 0-1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SortByUp_02;
