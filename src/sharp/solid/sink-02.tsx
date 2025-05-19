import React from "react";
const Sink_02: React.FC<
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
        d="M20.75 8.25V9a8.75 8.75 0 0 1-17.5 0v-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.5 3a.5.5 0 0 0-.5.5V9h-2V3.5a2.5 2.5 0 0 1 5 0V4h-2v-.5a.5.5 0 0 0-.5-.5M8 7H7V5h2a1 1 0 0 1 1 1v3H8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 9V6h2v3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.75 18.724v1.026a3.25 3.25 0 0 0 6.5 0v-1.026a10.2 10.2 0 0 1-3.25.526c-1.136 0-2.229-.185-3.25-.526"
      />
    </svg>
  );
};
export default Sink_02;
