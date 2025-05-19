import React from "react";
const Tie: React.FC<
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
        d="m10 8-2.353 9.412a1 1 0 0 0 .306.99l3.383 3.008a1 1 0 0 0 1.328 0l3.383-3.008a1 1 0 0 0 .306-.99L14 8M12 2 8.705 3.098a1 1 0 0 0-.532 1.479L10 7.5l2 .5 2-.5 1.827-2.923a1 1 0 0 0-.532-1.479z"
      />
    </svg>
  );
};
export default Tie;
