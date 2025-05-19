import React from "react";
const FootballPitch: React.FC<
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
        d="M1.25 6A2.75 2.75 0 0 1 4 3.25h7.25v6.104a2.751 2.751 0 0 0 0 5.293v6.103H4A2.75 2.75 0 0 1 1.25 18v-2.25h2.5A1.75 1.75 0 0 0 5.5 14v-4a1.75 1.75 0 0 0-1.75-1.75h-2.5zm0 3.75v4.5h2.5A.25.25 0 0 0 4 14v-4a.25.25 0 0 0-.25-.25zm11.5 11H20A2.75 2.75 0 0 0 22.75 18v-2.25h-2.5A1.75 1.75 0 0 1 18.5 14v-4c0-.966.784-1.75 1.75-1.75h2.5V6A2.75 2.75 0 0 0 20 3.25h-7.25v6.104a2.751 2.751 0 0 1 0 5.293zm7.5-11h2.5v4.5h-2.5A.25.25 0 0 1 20 14v-4a.25.25 0 0 1 .25-.25m-8.25 1a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FootballPitch;
