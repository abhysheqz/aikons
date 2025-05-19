import React from "react";
const Rocket_01: React.FC<
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
        d="M22.005 1.25a17.5 17.5 0 0 0-4.807.645c-1.524.435-2.967 1.11-3.931 2.068L10.43 6.585a.25.25 0 0 1-.252.052L8.93 6.204a2.75 2.75 0 0 0-2.847.653L4.97 7.97a.75.75 0 0 0 0 1.06l9.999 10a.75.75 0 0 0 1.06 0l1.114-1.113a2.75 2.75 0 0 0 .654-2.847l-.435-1.25a.25.25 0 0 1 .053-.25l2.622-2.837C21.912 8.848 22.749 5.565 22.749 2a.75.75 0 0 0-.744-.75M18.2 5.788a1 1 0 1 0-1.414 1.414l.006.007a1 1 0 1 0 1.415-1.415zM5.707 12.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0m3 3a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0m3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Rocket_01;
