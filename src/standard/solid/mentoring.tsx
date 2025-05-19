import React from "react";
const Mentoring: React.FC<
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
        d="M1.189 15.415A1 1 0 0 1 2 15h8a1 1 0 0 1 .949.684L12.72 21H15.5a1 1 0 1 1 0 2H4a1 1 0 0 1-.949-.684l-2-6a1 1 0 0 1 .138-.9M3.25 9.5c0-.966.784-1.75 1.75-1.75h6c.966 0 1.75.784 1.75 1.75V12A1.75 1.75 0 0 1 11 13.75H5A1.75 1.75 0 0 1 3.25 12z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 17.5a1 1 0 0 1 1-1h7a2 2 0 0 1 2 2V21a2 2 0 0 1-2 2h-2.5a1 1 0 1 1 0-2H21v-2.5h-7a1 1 0 0 1-1-1M14.266 13a2.75 2.75 0 0 1 2.751-2.75A2.75 2.75 0 1 1 14.266 13M5.25 4a2.75 2.75 0 0 1 2.752-2.75A2.75 2.75 0 1 1 5.25 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mentoring;
