import React from "react";
const Radius: React.FC<
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
        d="M22.75 12c0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12 6.063 22.75 12 22.75 22.75 17.937 22.75 12m-8.734 1a2.25 2.25 0 1 1 0-2h2.234v-1a.75.75 0 0 1 1.237-.57l1.204 1.027c.248.212.489.417.661.61.19.212.398.518.398.933s-.208.72-.398.933c-.172.193-.413.398-.661.61l-1.204 1.027A.75.75 0 0 1 16.25 14v-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Radius;
