import React from "react";
const Option: React.FC<
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
        d="M3 5a1 1 0 0 1 1-1h3.681a3 3 0 0 1 2.758 1.818l4.96 11.576a1 1 0 0 0 .92.606H20a1 1 0 1 1 0 2h-3.681a3 3 0 0 1-2.758-1.818L8.601 6.606A1 1 0 0 0 7.68 6H4a1 1 0 0 1-1-1M13 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Option;
