import React from "react";
const MailValidation_02: React.FC<
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
        d="M17 11.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5m2.78 4.78-1.06-1.06-2.47 2.47-.97-.97-1.06 1.06 2.03 2.03z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.227 1.25a.975.975 0 0 0-.977.974v16.552c0 .538.438.974.977.974h7.819v-1.947H3.205V6.94L12 11.338l8.796-4.397v4.046h1.954V2.224a.975.975 0 0 0-.977-.974z"
      />
    </svg>
  );
};
export default MailValidation_02;
