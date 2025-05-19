import React from "react";
const Linkedin_02: React.FC<
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
        d="M1.5 9.5A.5.5 0 0 1 2 9h4.5a.5.5 0 0 1 .5.5V22a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM1.5 4.25a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M9 9.5a.5.5 0 0 1 .5-.5H14a.5.5 0 0 1 .5.5v.464A4.55 4.55 0 0 1 17.297 9c2.576 0 5.203 2.201 5.203 5l-.001 8a.5.5 0 0 1-.5.5H17.5a.5.5 0 0 1-.5-.5v-6.25a1.25 1.25 0 0 0-2.5 0V22a.5.5 0 0 1-.5.5H9.5A.5.5 0 0 1 9 22z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Linkedin_02;
