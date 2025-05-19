import React from "react";
const Desert: React.FC<
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
        d="M7 20v-1.446l-3.53-2.206A1 1 0 0 1 3 15.5V13h2v1.946l2 1.25V7h2v6.999l1.998-1.5V9h2v4a1 1 0 0 1-.4.8L9 16.5v3.5h2v-2h2v2h2v2H3v-2zM13.5 5.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
    </svg>
  );
};
export default Desert;
