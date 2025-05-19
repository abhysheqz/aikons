import React from "react";
const SaveEnergy_01: React.FC<
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
        d="M15 1.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5m1.124 3.166-1.248-.832-2.777 4.166h3l-1.223 1.834 1.248.832 2.777-4.166h-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.796 14a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .361.093l2.332 1.282h.807c1.238 0 2.264.633 2.814 1.48l-3.314 1.604-2.763-.92-.474 1.422 3 1c.154.052.32.052.474 0l4.56-2.231v-1.37l2.176-.725a2.75 2.75 0 0 1 3.423 1.587l.3.75a.75.75 0 0 1-.361.949l-9 4.5a.75.75 0 0 1-.54.05l-7-1.98a.75.75 0 0 1-.545-.721z"
      />
    </svg>
  );
};
export default SaveEnergy_01;
