import React from "react";
const CalendarDownload_02: React.FC<
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
        d="M7.5 1.5V3h9V1.5h2V3H21a.75.75 0 0 1 .75.75v17.775a.975.975 0 0 1-.975.975H3.225a.975.975 0 0 1-.975-.975V3.75A.75.75 0 0 1 3 3h2.5V1.5zm12.3 19.05V9.5H4.2v11.05z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m12 18.555 3.03-3.03-1.061-1.06-1.22 1.22v-4.19h-1.5v4.19l-1.22-1.22-1.06 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CalendarDownload_02;
