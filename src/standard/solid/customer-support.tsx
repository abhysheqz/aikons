import React from "react";
const CustomerSupport: React.FC<
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
        d="M3.69 8.974q.15-.1.313-.179C4.128 4.893 7.805 2 12 2s7.872 2.893 7.997 6.795q.162.078.314.18l1.659 1.104c.487.324.78.871.78 1.457v2.928a1.75 1.75 0 0 1-.78 1.457l-1.66 1.105q-.15.1-.31.177V19a3 3 0 0 1-3 3h-5a1 1 0 1 1 0-2h5a1 1 0 0 0 1-1v-1.683a2.61 2.61 0 0 1-1.75-2.466v-3.702a2.61 2.61 0 0 1 1.738-2.462C17.796 6.191 15.326 4 12 4 8.675 4 6.204 6.191 6.012 8.687a2.62 2.62 0 0 1 1.738 2.462v3.702a2.613 2.613 0 0 1-4.06 2.175L2.03 15.92a1.75 1.75 0 0 1-.78-1.457v-2.928c0-.586.293-1.133.78-1.457z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CustomerSupport;
