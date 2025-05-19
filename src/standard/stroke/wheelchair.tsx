import React from "react";
const Wheelchair: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 16a5 5 0 1 1-10 0 5 5 0 0 1 10 0M18 19.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      />
      <path
        fill="#D9D9D9"
        fillRule="evenodd"
        d="M7.009 16H7z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.009 16H7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 11 4.653 3.816A1 1 0 0 0 3.67 3H2M5.5 7h10a1 1 0 0 1 1 1v10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 14h5.468a1 1 0 0 1 .833.446l1.252 1.882a1 1 0 0 0 1.198.378l1.249-.49"
      />
    </svg>
  );
};
export default Wheelchair;
