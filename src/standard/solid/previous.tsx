import React from "react";
const Previous: React.FC<
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
        d="M18.081 4.3c1.166-.718 2.667.12 2.667 1.49v12.42c0 1.37-1.501 2.209-2.667 1.491l-10.092-6.21a1.75 1.75 0 0 1 0-2.981zM4 20.5a1 1 0 0 0 1-1v-15a1 1 0 0 0-2 0v15a1 1 0 0 0 1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Previous;
