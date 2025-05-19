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
        fill="currentColor"
        d="M14.889 8.75H9.11L6.5 18.256l5.002 4.305a.75.75 0 0 0 .997 0l5-4.305zM12.397 1.364a.75.75 0 0 0-.796 0l-4.61 2.882L8.706 7.25h6.584l1.717-3.004z"
      />
    </svg>
  );
};
export default Tie;
