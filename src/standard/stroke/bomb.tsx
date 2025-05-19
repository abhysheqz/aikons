import React from "react";
const Bomb: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 15a7 7 0 1 1-14 0 7 7 0 0 1 14 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 8.5-.544-1.632c-.22-.66-.33-.99-.592-1.18-.262-.188-.61-.188-1.306-.188H8.442c-.696 0-1.044 0-1.306.189s-.372.519-.592 1.179L6 8.5M22 7.5 20.5 6m0 0L19 4.5M20.5 6 19 7.5M20.5 6 22 4.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 6c-2 0-2.575-2.588-5.11-3.774C9.664 1.184 9 3.996 9 5.499"
      />
    </svg>
  );
};
export default Bomb;
