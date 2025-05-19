import React from "react";
const Asteroid_01: React.FC<
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
        d="M10.124 4.084a.75.75 0 0 0-.934-.267l-5.5 2.5a.75.75 0 0 0-.417.501l-2 8a.75.75 0 0 0 .267.774l9 7a.75.75 0 0 0 .765.093l7.444-3.318a.75.75 0 0 0 .353-.326l2.557-4.681a.75.75 0 0 0-.01-.738l-3.5-6a.75.75 0 0 0-1.186-.145l-3.216 2.04zm5.26 11.352 1.74-1.005-1-1.732-1.74 1.005zM9.33 16.664l1.5-3 1.342.67-1.5 3zm-.065-6.612L6.632 9.06 5.33 11.665l1.342.671.697-1.395 1.368.515z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.55 1.4a.75.75 0 0 1 .45-.15h4.001a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.3.6l-2 1.5a.75.75 0 0 1-.632.128l-4-1A.75.75 0 0 1 15.25 5V3.5a.75.75 0 0 1 .3-.6z"
      />
    </svg>
  );
};
export default Asteroid_01;
