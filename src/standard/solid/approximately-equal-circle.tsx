import React from "react";
const ApproximatelyEqualCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M7.768 9.925c.687-.824 1.222-.958 1.637-.919.511.049 1.145.385 1.935 1.08.876.768 1.91 1.456 3.065 1.566 1.252.119 2.384-.454 3.363-1.63a1 1 0 1 0-1.536-1.28c-.687.824-1.222.958-1.637.919-.51-.049-1.145-.385-1.935-1.079-.876-.769-1.91-1.457-3.065-1.567-1.252-.119-2.384.454-3.363 1.63a1 1 0 0 0 1.536 1.28m0 5.333c.687-.824 1.222-.958 1.637-.918.511.048 1.145.385 1.935 1.078.876.77 1.91 1.457 3.065 1.567 1.252.119 2.384-.454 3.363-1.63a1 1 0 1 0-1.536-1.28c-.687.824-1.222.958-1.637.919-.51-.049-1.145-.385-1.935-1.079-.876-.769-1.91-1.456-3.065-1.566-1.252-.12-2.384.454-3.363 1.629a1 1 0 1 0 1.536 1.28"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ApproximatelyEqualCircle;
