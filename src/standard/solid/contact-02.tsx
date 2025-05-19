import React from "react";
const Contact_02: React.FC<
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
        d="M3 3.75A2.75 2.75 0 0 1 5.75 1h14a2.75 2.75 0 0 1 2.75 2.75v16a2.75 2.75 0 0 1-2.75 2.75h-14A2.75 2.75 0 0 1 3 19.75v-1H2a1 1 0 1 1 0-2h1v-4H2a1 1 0 1 1 0-2h1v-4H2a1 1 0 0 1 0-2h1zm6.37 2.26a.75.75 0 0 1 .55.405l1.5 3a.75.75 0 0 1-.14.865L9.5 12.06A7.8 7.8 0 0 0 12.44 15l1.78-1.78a.75.75 0 0 1 .865-.14l3 1.5a.75.75 0 0 1 .195 1.2l-.914.915c-.505.504-1.227.838-2.016.762A9.25 9.25 0 0 1 7.043 9.15c-.076-.789.257-1.511.762-2.016l.914-.914a.75.75 0 0 1 .65-.21"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Contact_02;
