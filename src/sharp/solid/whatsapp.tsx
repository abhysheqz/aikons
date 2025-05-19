import React from "react";
const Whatsapp: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 1.844.465 3.582 1.285 5.1l-1.26 4.706a.75.75 0 0 0 .919.918L6.9 21.466A10.7 10.7 0 0 0 12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25m-5 5a.75.75 0 0 0-.75.75c0 3.231 1.559 6.03 3.14 7.61 1.58 1.582 4.379 3.14 7.61 3.14a.75.75 0 0 0 .75-.75v-2.92a.75.75 0 0 0-.627-.74l-3.885-.644-1.72 1.751a8.4 8.4 0 0 1-1.068-.897 8.5 8.5 0 0 1-.897-1.069l1.743-1.712-.553-3.875A.75.75 0 0 0 10 6.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Whatsapp;
