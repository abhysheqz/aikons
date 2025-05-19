import React from "react";
const Linkedin_01: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm3.759 4.62c0 .69-.56 1.25-1.25 1.25H7a1.25 1.25 0 1 1 0-2.5h.009c.69 0 1.25.559 1.25 1.25M7.001 8.5a1 1 0 0 1 1 1V17a1 1 0 1 1-2 0V9.5a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v.035a4 4 0 0 1 6 3.465v4a1 1 0 1 1-2 0v-4a2 2 0 0 0-4 0v4a1 1 0 1 1-2 0V9.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Linkedin_01;
