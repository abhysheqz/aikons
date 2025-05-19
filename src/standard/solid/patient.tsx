import React from "react";
const Patient: React.FC<
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
        d="M10.54 13.75H18c.69 0 1.25.56 1.25 1.25v7a.75.75 0 1 0 1.5 0v-7A2.75 2.75 0 0 0 18 12.25H6A2.75 2.75 0 0 0 3.25 15v5A2.75 2.75 0 0 0 6 22.75h8.5a2.25 2.25 0 0 0 0-4.5h-2.46zm3.96 7.5h-1.46l-.5-1.5h1.96a.75.75 0 0 1 0 1.5m-8.25-7.5v7.5H6c-.69 0-1.25-.56-1.25-1.25v-5c0-.69.56-1.25 1.25-1.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.75 5.5a4.25 4.25 0 0 1 8.5 0v1a4.25 4.25 0 0 1-8.5 0z"
      />
    </svg>
  );
};
export default Patient;
