import React from "react";
const PointingLeft_02: React.FC<
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
        d="M17.185 7.6q.156.098.296.183c.433.263 1.305.86 2.049 1.374.376.26.727.506.983.685l.225.158h2.012v10.392h-2.58l-2.157 1.033c-.777.372-1.943.822-3.12.999-1.14.17-2.518.115-3.46-.821-2.047-2.034-2.622-4.74-2.685-6.603H3.75a2.5 2.5 0 1 1 0-5h5.884c.234-.294.626-.77 1.09-1.27.371-.402.8-.831 1.237-1.197.425-.356.913-.698 1.402-.868.872-.303 1.676-.148 2.357.133.523.215 1.035.534 1.465.802"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.456 1.5 1.25 4.707l3.207 3.207L5.87 6.5l-.793-.793h3.586v-2H5.077l.793-.793z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PointingLeft_02;
