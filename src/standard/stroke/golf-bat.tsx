import React from "react";
const GolfBat: React.FC<
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
        d="M7.471 17.263 12 20.974c-.237.445-.761.795-1.282.947-.27.079-.558.079-1.136.079H6.646c-1.522 0-2.95-.486-3.487-2.065-.505-1.484.193-3.946 2.08-3.935.696.004 1.208.424 2.232 1.263M12 21l4.75-10.75m0 0a.936.936 0 0 0 1.122-.448l2.952-5.543c.425-.84.031-1.88-.824-2.182-.773-.272-1.608.179-1.85 1l-1.916 6.167c-.13.42.1.867.516 1.005"
      />
    </svg>
  );
};
export default GolfBat;
