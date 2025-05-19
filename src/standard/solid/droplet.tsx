import React from "react";
const Droplet: React.FC<
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
        d="M13.272 1.352a1.66 1.66 0 0 0-2.044 0c-.969.752-2.998 2.424-4.792 4.536C4.667 7.97 3 10.626 3 13.331c0 4.516 3.507 9.169 9.25 9.169s9.25-4.653 9.25-9.17c0-2.704-1.667-5.36-3.436-7.442-1.794-2.112-3.823-3.784-4.792-4.536M18 14.75a.75.75 0 0 0-1.5 0A3.25 3.25 0 0 1 13.25 18a.75.75 0 0 0 0 1.5A4.75 4.75 0 0 0 18 14.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Droplet;
