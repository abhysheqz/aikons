import React from "react";
const Profile_02: React.FC<
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
        d="M2 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm4 5a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75h4a.75.75 0 0 0 .75-.75V8a.75.75 0 0 0-.75-.75zm-.75 8H10v1.5H5.25zm13.5-8h-5.5v1.5h5.5zm0 4h-5.5v1.5h5.5zm0 4h-5.5v1.5h5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Profile_02;
