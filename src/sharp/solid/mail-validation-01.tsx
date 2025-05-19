import React from "react";
const MailValidation_01: React.FC<
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
        d="M1.25 2A.75.75 0 0 1 2 1.25h20a.75.75 0 0 1 .75.75v10.584a7.25 7.25 0 0 0-12.46 7.166H2a.75.75 0 0 1-.75-.75zm5.166 2.457-.832 1.248L12 9.982l6.416-4.277-.832-1.248L12 8.18z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 11.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5m2.78 4.78-1.06-1.06-2.47 2.47-.97-.97-1.06 1.06 2.03 2.03z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailValidation_01;
