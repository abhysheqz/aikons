import React from "react";
const GivePill: React.FC<
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
        d="M3.25 14a.75.75 0 0 1 .75-.75h3c.126 0 .25.032.361.093l2.332 1.282h.807c1.238 0 2.264.633 2.815 1.48L10 17.708l-2.763-.92-.474 1.422 3 1c.154.052.32.052.474 0l4.56-2.231v-1.37l2.176-.725a2.75 2.75 0 0 1 3.423 1.587l.3.75a.75.75 0 0 1-.361.949l-9 4.5a.75.75 0 0 1-.54.05l-7-1.98a.75.75 0 0 1-.545-.721zM14 1.25A3.75 3.75 0 0 0 10.25 5v1.25h7.5V5A3.75 3.75 0 0 0 14 1.25M17.75 7.75h-7.5V9a3.75 3.75 0 1 0 7.5 0z"
      />
    </svg>
  );
};
export default GivePill;
