import React from "react";
const HandPointingLeft_02: React.FC<
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
        d="M10.218 6.666H4.25a2.5 2.5 0 1 0 0 5h4.607l.379 2.438v.004l.004.023c.141.942.253 1.685.38 2.276.131.6.29 1.102.555 1.544.765 1.277 1.988 2.299 3.799 2.299 1.086 0 1.87-.262 3.408-.777 1.063-.354 2.254-.751 2.807-1.131a4.75 4.75 0 0 0 1.876-2.603c.185-.645.185-3.065.185-4.185 0-1.615 0-2.657-.398-3.569a4.8 4.8 0 0 0-.704-1.139c-.637-.764-1.569-1.23-3.014-1.952-.624-.312-1.316-.657-1.752-.833-.453-.182-.876-.3-1.334-.31a3.8 3.8 0 0 0-1.12.144c-.44.126-.82.346-1.213.637-.377.28-.805.654-1.33 1.113z"
      />
    </svg>
  );
};
export default HandPointingLeft_02;
