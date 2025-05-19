import React from "react";
const Percent: React.FC<
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
        d="M21 4.768 4.768 21 3 19.232 19.232 3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.202 4.202a3.25 3.25 0 1 1 4.596 4.596 3.25 3.25 0 0 1-4.596-4.596M15.202 15.202a3.25 3.25 0 1 1 4.596 4.596 3.25 3.25 0 0 1-4.596-4.596"
      />
    </svg>
  );
};
export default Percent;
