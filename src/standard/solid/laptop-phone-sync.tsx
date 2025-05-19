import React from "react";
const LaptopPhoneSync: React.FC<
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
        d="M15.25 11.5c0-.966.784-1.75 1.75-1.75h4c.966 0 1.75.784 1.75 1.75v8A1.75 1.75 0 0 1 21 21.25h-4a1.75 1.75 0 0 1-1.75-1.75zM13.75 17.25H2.786L1.33 20.165A.75.75 0 0 0 2 21.25h11.75z"
      />
      <path
        fill="currentColor"
        d="M3.25 5A2.25 2.25 0 0 1 5.5 2.75h14A2.25 2.25 0 0 1 21.75 5v3.337A3.3 3.3 0 0 0 21 8.25h-4a3.25 3.25 0 0 0-3.25 3.25v4.25H3.25z"
      />
    </svg>
  );
};
export default LaptopPhoneSync;
