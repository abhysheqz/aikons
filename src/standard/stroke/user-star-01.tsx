import React from "react";
const UserStar_01: React.FC<
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
        d="M15 8A5 5 0 1 0 5 8a5 5 0 0 0 10 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 20a7 7 0 0 1 10.5-6.063M14.84 21l2.41-1.296L19.66 21l-.535-2.593L21 16.593l-2.616-.214L17.25 14l-1.134 2.379-2.616.214 1.875 1.814z"
      />
    </svg>
  );
};
export default UserStar_01;
