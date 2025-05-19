import React from "react";
const GiveBlood: React.FC<
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
        d="M3.25 14a.75.75 0 0 1 .75-.75h3c.126 0 .25.032.361.093l2.332 1.282h.807c1.238 0 2.264.633 2.815 1.48L10 17.708l-2.763-.92-.474 1.422 3 1c.154.052.32.052.474 0l4.56-2.231v-1.37l2.176-.725a2.75 2.75 0 0 1 3.423 1.587l.3.75a.75.75 0 0 1-.361.949l-9 4.5a.75.75 0 0 1-.54.05l-7-1.98a.75.75 0 0 1-.545-.721zM13.002 1.25c.119.08.88.571 1.079.72.396.298.927.732 1.46 1.275 1.04 1.06 2.211 2.661 2.211 4.563 0 2.686-2.084 4.942-4.75 4.942s-4.75-2.256-4.75-4.942c0-1.902 1.171-3.502 2.211-4.563a13 13 0 0 1 1.46-1.275c.199-.149.96-.64 1.079-.72"
      />
    </svg>
  );
};
export default GiveBlood;
