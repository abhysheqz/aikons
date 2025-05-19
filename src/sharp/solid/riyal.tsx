import React from "react";
const Riyal: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M18.75 12v-1.75h-1.5V12A2.25 2.25 0 0 1 15 14.25h-.75v1.5H15A3.75 3.75 0 0 0 18.75 12m-7-4.75v5.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25v-.75h1.5v.75A1.75 1.75 0 0 1 13 14.25h-1a1.75 1.75 0 0 1-1.75-1.75V7.25zm-2.5 5.25V7.25h-1.5v5.25a.25.25 0 0 1-.25.25h-1a.25.25 0 0 1-.25-.25v-.75h-1.5v.75c0 .966.784 1.75 1.75 1.75h1a1.75 1.75 0 0 0 1.75-1.75m2.5 2.24v1.51h-1.5v-1.51zm2 1.52v-1.51h-1.5v1.51z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Riyal;
