import React from "react";
const Profile: React.FC<
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
        d="M21 3H3v18h18z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10 7h8M6 7h2m-2 5h2m-2 5h2m2-5h8m-8 5h8"
      />
    </svg>
  );
};
export default Profile;
