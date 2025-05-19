import React from "react";
const Briefcase_03: React.FC<
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
        d="M2.5 11h-.75v.55l.524.165zm19 0 .226.715.524-.165V11zm0-5h.75a.75.75 0 0 0-.75-.75zm-19 0v-.75a.75.75 0 0 0-.75.75zm0 .75h19v-1.5h-19zM1.75 6v5h1.5V6zm20.5 5V6h-1.5v5zm-.976-.715-7.5 2.368.452 1.43 7.5-2.368zm-11.048 2.368-7.5-2.368-.452 1.43 7.5 2.369z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.5 11.5v10h17v-10M15.5 6V2.5h-7V6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14 11.5h-4v2a2 2 0 0 0 4 0z"
      />
    </svg>
  );
};
export default Briefcase_03;
