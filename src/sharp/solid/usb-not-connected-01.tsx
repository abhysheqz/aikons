import React from "react";
const UsbNotConnected_01: React.FC<
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
        d="M9 22.75v-5.5h2v5.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.25 1.25h-8.5v4H4a.75.75 0 0 0-.75.75v6.208l3.325 5.542h5.448l-.457-.457L13.86 15l-2.293-2.293 3.182-3.182 2.001 2.001V6a.75.75 0 0 0-.75-.75h-1.75zm-1.889 4V3.028H7.639V5.25zM8.5 10h3V8h-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m18.457 15 2.293 2.293-1.414 1.414-2.293-2.293-2.293 2.293-1.414-1.414L15.629 15l-2.293-2.293 1.414-1.414 2.293 2.293 2.293-2.293 1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UsbNotConnected_01;
