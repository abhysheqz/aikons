import React from "react";
const Presentation_03: React.FC<
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
        d="M1.25 2.25A.75.75 0 0 1 2 1.5h20A.75.75 0 0 1 22 3h-.25v9.75A3.75 3.75 0 0 1 18 16.5H6a3.75 3.75 0 0 1-3.75-3.75V3H2a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.25 18.128V15.75h1.5v2.378a2.251 2.251 0 1 1-1.5 0M12 19.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Presentation_03;
