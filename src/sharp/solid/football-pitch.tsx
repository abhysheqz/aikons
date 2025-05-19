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
        d="M12.75 3.25v6.104a2.751 2.751 0 0 1 0 5.293v6.103H22a.75.75 0 0 0 .75-.75v-4.25H19.5a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75h3.25V4a.75.75 0 0 0-.75-.75zM11.25 3.25v6.104a2.751 2.751 0 0 0 0 5.293v6.103H2a.75.75 0 0 1-.75-.75v-4.25H4.5a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75H1.25V4A.75.75 0 0 1 2 3.25z"
      />
      <path
        fill="currentColor"
        d="M12 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M1.25 9.75v4.5h2.5v-4.5zM22.75 9.75h-2.5v4.5h2.5z"
      />
    </svg>
  );
};
export default FootballPitch;
