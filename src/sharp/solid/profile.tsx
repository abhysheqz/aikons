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
        fill="currentColor"
        fillRule="evenodd"
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zM6 8h2V6H6zm4 0h8V6h-8zm-4 5h2v-2H6zm4 0h8v-2h-8zm-4 5h2v-2H6zm4 0h8v-2h-8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Profile;
