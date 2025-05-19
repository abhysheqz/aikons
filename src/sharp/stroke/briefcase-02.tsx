import React from "react";
const Briefcase_02: React.FC<
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
        d="m12 14-.226.715.226.072.226-.072zm-9.5-3h-.75v.55l.524.165zm19 0 .226.715.524-.165V11zm0-5h.75a.75.75 0 0 0-.75-.75zm-19 0v-.75a.75.75 0 0 0-.75.75zm0 .75h19v-1.5h-19zm18.774 3.535-9.5 3 .452 1.43 9.5-3zm-9.048 3-9.5-3-.452 1.43 9.5 3zM1.75 6v5h1.5V6zm20.5 5V6h-1.5v5z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m3.463 11.5-.001 10h17.075v-10M15.5 6V2.5h-7V6"
      />
    </svg>
  );
};
export default Briefcase_02;
