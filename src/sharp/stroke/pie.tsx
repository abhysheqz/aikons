import React from "react";
const Pie: React.FC<
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
        d="M12 4c9 0 10 8.027 10 8.027 0 2.313-3.434 2.708-4 .502-.503 1.961-3.497 1.961-4 0-.252.98-1.126 1.471-2 1.471s-1.748-.49-2-1.471c-.503 1.961-3.497 1.961-4 0-.566 2.206-4 1.81-4-.502C2 12.027 3 4 12 4ZM15 7.5 16 9M9 7.5 8 9M12 7v2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.5 14 6 20h12l2.5-6"
      />
    </svg>
  );
};
export default Pie;
