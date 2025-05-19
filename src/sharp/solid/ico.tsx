import React from "react";
const Ico: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M9.25 10.5a.25.25 0 0 1 .25-.25h2a.25.25 0 0 1 .25.25v.75h1.5v-.75a1.75 1.75 0 0 0-1.75-1.75h-2a1.75 1.75 0 0 0-1.75 1.75v3c0 .966.784 1.75 1.75 1.75h2a1.75 1.75 0 0 0 1.75-1.75v-.75h-1.5v.75a.25.25 0 0 1-.25.25h-2a.25.25 0 0 1-.25-.25zm-2.5 4.75v-6.5h-1.5v6.5zm9-3.75a1.25 1.25 0 1 1 2.5 0v1a1.25 1.25 0 0 1-2.5 0zM17 8.75a2.75 2.75 0 0 0-2.75 2.75v1a2.75 2.75 0 0 0 5.5 0v-1A2.75 2.75 0 0 0 17 8.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Ico;
