import React from "react";
const OfficeChair: React.FC<
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
        strokeWidth={1.5}
        d="M16 22c-1.066-1.245-2.466-2-4-2s-2.934.755-4 2M7 16h10v-.75c0-1.243-.96-2.25-2.143-2.25H9.143C7.959 13 7 14.007 7 15.25zM21 10l-2 1v2a2 2 0 0 1-2 2M3 10l2 1v2a2 2 0 0 0 2 2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 16v6M8 10 7 2h10l-1 8zM12 10v3"
      />
    </svg>
  );
};
export default OfficeChair;
