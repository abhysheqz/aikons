import React from "react";
const PointingLeft_04: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 10.5h-4m0 0H4.25a1.75 1.75 0 0 0 0 3.5h6.25v4.5a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3v-6.416a2 2 0 0 0-.909-1.676l-2.949-1.92c-1.327-.872-1.941-.971-2.612-.987a3 3 0 0 0-.896.115c-.645.184-1.19.66-2.279 1.614zM2.5 5 5 2.5M2.5 5 5 7.5M2.5 5h6"
      />
    </svg>
  );
};
export default PointingLeft_04;
