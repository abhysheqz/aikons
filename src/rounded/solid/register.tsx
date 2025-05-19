import React from "react";
const Register: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M11 7a2 2 0 0 0-2 2v7a1 1 0 1 0 2 0v-2.5h1.34l1.24 2.894a1 1 0 1 0 1.84-.788l-1.081-2.52A3.25 3.25 0 0 0 12.75 7zm1.75 4.5H11V9h1.75a1.25 1.25 0 1 1 0 2.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Register;
