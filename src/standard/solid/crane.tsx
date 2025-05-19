import React from "react";
const Crane: React.FC<
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
        d="M3.75 5c0-.966.784-1.75 1.75-1.75h4.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237V12A1.75 1.75 0 0 1 13 13.75H5.5A1.75 1.75 0 0 1 3.75 12zM5 15.25a3.75 3.75 0 1 0 0 7.5h10a3.75 3.75 0 1 0 0-7.5zM6 18a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2zm3.996 0a1 1 0 1 0 0 2h.008a1 1 0 1 0 0-2zm3.995 0a1 1 0 1 0 0 2H14a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.954 1.671A2 2 0 0 1 17.45 1H20.5a1 1 0 1 1 0 2h-3.05l-3.703 4.164a1 1 0 1 1-1.494-1.328zM20.5 3.5a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m0 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m0 3.5a1 1 0 0 1 1 1v.208a2.5 2.5 0 0 1-1 4.792c-1.026 0-2.08-.638-2.443-1.667a1 1 0 1 1 1.886-.666c.048.136.276.333.557.333a.5.5 0 0 0 0-1 1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Crane;
