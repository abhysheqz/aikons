import React from "react";
const Bootstrap: React.FC<
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
        d="M4 3.25a.75.75 0 0 0-.75.75v6c0 .69-.56 1.25-1.25 1.25a.75.75 0 0 0 0 1.5c.69 0 1.25.56 1.25 1.25v6a.75.75 0 0 0 .75.75h16a.75.75 0 0 0 .75-.75v-6c0-.69.56-1.25 1.25-1.25a.75.75 0 0 0 0-1.5c-.69 0-1.25-.56-1.25-1.25V4a.75.75 0 0 0-.75-.75zm5 4a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h3.882c1.543 0 2.868-1.191 2.868-2.75 0-.8-.35-1.505-.9-2 .55-.495.9-1.2.9-2 0-1.559-1.325-2.75-2.868-2.75zM14.25 10c0 .65-.571 1.25-1.368 1.25H9.75v-2.5h3.132c.797 0 1.368.6 1.368 1.25m-1.368 2.75H9.75v2.5h3.132c.797 0 1.368-.6 1.368-1.25s-.571-1.25-1.368-1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bootstrap;
