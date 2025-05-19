import React from "react";
const ModernTvK_4: React.FC<
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
        d="M12 21.875c-1.29 0-2.492.322-3.524.88a1 1 0 0 1-.951-1.76A9.4 9.4 0 0 1 12 19.875c1.625 0 3.154.406 4.476 1.12a1 1 0 0 1-.951 1.76 7.4 7.4 0 0 0-3.525-.88M5 1.125a3.75 3.75 0 0 0-3.75 3.75v10A3.75 3.75 0 0 0 5 18.625h14a3.75 3.75 0 0 0 3.75-3.75v-10A3.75 3.75 0 0 0 19 1.125zm13.033 5.777a.75.75 0 0 0-1.066-1.055L13.75 9.1V6.375a.75.75 0 0 0-1.5 0v7a.75.75 0 0 0 1.5 0v-2.142l.686-.693 2.464 3.285a.75.75 0 1 0 1.2-.9l-2.598-3.463zM7.25 6.375a.75.75 0 1 0-1.5 0v2.5c0 .966.784 1.75 1.75 1.75h2.25v2.75a.75.75 0 0 0 1.5 0v-7a.75.75 0 0 0-1.5 0v2.75H7.5a.25.25 0 0 1-.25-.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ModernTvK_4;
