import React from "react";
const StarHalf: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 19V3M11.109 3.748a1 1 0 0 1 1.782 0l2.188 4.293a1 1 0 0 0 .733.533l4.755.757a1 1 0 0 1 .55 1.694l-3.403 3.413a1 1 0 0 0-.28.862l.75 4.764a1 1 0 0 1-1.441 1.046l-4.29-2.185a1 1 0 0 0-.907 0L7.257 21.11a1 1 0 0 1-1.441-1.046l.75-4.764a1 1 0 0 0-.28-.862l-3.404-3.413a1 1 0 0 1 .55-1.694l4.756-.757a1 1 0 0 0 .734-.533z"
      />
    </svg>
  );
};
export default StarHalf;
