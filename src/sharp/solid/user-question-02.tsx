import React from "react";
const UserQuestion_02: React.FC<
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
        d="M7.745 12.95A7.75 7.75 0 0 0 1.75 20.5v.75h15.5v-.75a7.75 7.75 0 0 0-5.995-7.55A5.252 5.252 0 0 0 9.5 2.75a5.25 5.25 0 0 0-1.755 10.2"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.25 9c-.63 0-1 .453-1 .846v.404h-2v-.404C16.25 8.2 17.67 7 19.25 7s3 1.2 3 2.846c0 .584-.186 1.124-.497 1.57l-.023.033-1.318 1.599a.7.7 0 0 0-.162.452v.18h-2v-.18c0-.63.219-1.239.619-1.724l1.262-1.531a.73.73 0 0 0 .119-.399c0-.393-.37-.846-1-.846m-1.01 6h2.01v2h-2.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserQuestion_02;
