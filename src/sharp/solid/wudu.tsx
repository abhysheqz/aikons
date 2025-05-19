import React from "react";
const Wudu: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M3.75 14a.75.75 0 0 1 .75-.75h3c.126 0 .25.032.361.093l2.332 1.282H11c1.238 0 2.264.633 2.815 1.48L10.5 17.708l-2.763-.92-.474 1.422 3 1c.154.052.32.052.474 0l4.56-2.231v-1.37l2.176-.725a2.75 2.75 0 0 1 3.423 1.587l.3.75a.75.75 0 0 1-.361.949l-9 4.5a.75.75 0 0 1-.54.05l-7-1.98a.75.75 0 0 1-.545-.721zM19.87 4.762c1.824 1.886 1.856 4.963-.002 6.88a4.686 4.686 0 0 1-6.728.033l-.005-.005c-1.825-1.884-1.858-4.96-.031-6.879l.004-.004 3.425-3.537z"
      />
    </svg>
  );
};
export default Wudu;
