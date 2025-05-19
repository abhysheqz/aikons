import React from "react";
const WpsOffice: React.FC<
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
        d="M1.362 5.106A.75.75 0 0 1 2 4.75h7a.75.75 0 0 1 .67.415L12 9.823l2.33-4.658A.75.75 0 0 1 15 4.75h7a.75.75 0 0 1 .67 1.085l-6.5 13a.75.75 0 0 1-1.34 0L12 13.177l-2.83 5.658a.75.75 0 0 1-1.34 0l-6.5-13a.75.75 0 0 1 .032-.73"
      />
    </svg>
  );
};
export default WpsOffice;
