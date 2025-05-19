import React from "react";
const Teamviewer: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm5.75 6.75a.75.75 0 0 0-1.244-.564l-4 3.5a.75.75 0 0 0 0 1.128l4 3.5a.75.75 0 0 0 1.244-.564v-2.043h3.5V15.5a.75.75 0 0 0 1.244.564l4-3.5a.75.75 0 0 0 0-1.128l-4-3.5a.75.75 0 0 0-1.244.564v2.002h-3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Teamviewer;
