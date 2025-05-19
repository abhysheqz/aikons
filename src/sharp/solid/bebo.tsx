import React from "react";
const Bebo: React.FC<
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
        d="M8.75 14A3.25 3.25 0 1 0 12 10.75h-.75v-5.5H12A8.75 8.75 0 1 1 3.25 14V1.25h5.5z"
      />
    </svg>
  );
};
export default Bebo;
