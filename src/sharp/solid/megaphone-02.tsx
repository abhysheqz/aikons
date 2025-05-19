import React from "react";
const Megaphone_02: React.FC<
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
        d="M8.25 17.07V14h-1.5v3.5a.75.75 0 0 0 .372.648l6 3.5A.75.75 0 0 0 14.25 21v-4.5h-1.5v3.194z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.705 2.31a.75.75 0 0 1 .808.143C20.502 4.32 21.75 7.25 21.75 10.5s-1.248 6.18-3.237 8.047a.75.75 0 0 1-.808.142L7.346 14.25H2.25v-7.5h5.096z"
      />
    </svg>
  );
};
export default Megaphone_02;
