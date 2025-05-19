import React from "react";
const Ketupat: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m19.586 12.086-5.672-5.672a2 2 0 0 0-2.828 0l-5.672 5.672a2 2 0 0 0 0 2.828l5.672 5.672a2 2 0 0 0 2.828 0l5.672-5.672a2 2 0 0 0 0-2.828ZM17 9l-4.5 4.5m0 0L8 18m4.5-4.5L8 9m4.5 4.5L17 18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.5 2c-2.5 0-3 3.5-3 3.5s-1-2.5-3-2.5"
      />
    </svg>
  );
};
export default Ketupat;
