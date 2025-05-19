import React from "react";
const LegalDocument_02: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 2v20h18V2zM8 17h8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5.992 7.012h5.993m0 0H18m-6.014 0v6.987m0 0h2.007m-2.007 0h-1.98m5.977-6.667c-.546.78-1.578 1.96-1.466 2.837.021.169.08.332.152.485.232.483.848 1.075 1.963.71.379-.205 1.075-.852.833-1.79-.208-.808-1.39-1.811-1.607-2.563-.028-.099.184.237.125.321Zm-7.75-.32c-.514.736-1.654 2.062-1.721 2.986-.02.283.079.565.23.805.278.444.878.89 1.88.562.378-.206 1.075-.853.832-1.791-.208-.808-1.003-1.434-1.22-2.186-.03-.099.058-.46 0-.376Z"
      />
    </svg>
  );
};
export default LegalDocument_02;
