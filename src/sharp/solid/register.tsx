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
        d="M12.75 11.5H11V9h1.75a1.25 1.25 0 1 1 0 2.5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M12.75 7H9v9.447h2V13.5h1.132l1.474 2.947 1.788-.894-1.196-2.393A3.25 3.25 0 0 0 12.75 7"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Register;
