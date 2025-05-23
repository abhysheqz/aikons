import React from "react";
const Triangle_01: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.898 6.733C9.712 3.578 10.619 2 12 2c1.38 0 2.288 1.578 4.102 4.733l3.757 6.532c1.726 3 2.589 4.5 1.908 5.618C21.087 20 19.31 20 15.757 20H8.243c-3.553 0-5.33 0-6.01-1.117s.182-2.618 1.908-5.618z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 20v2M20 9l-2 1M4 9l2 1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M4 14.409c1.89.642 3.252 2.468 3.252 4.62q0 .5-.094.971m9.684 0a5 5 0 0 1-.094-.97c0-2.153 1.362-3.979 3.252-4.621M15.281 6A4.67 4.67 0 0 1 12 7.35 4.67 4.67 0 0 1 8.719 6"
      />
    </svg>
  );
};
export default Triangle_01;
