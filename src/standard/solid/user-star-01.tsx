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
        fill="currentColor"
        d="M17.25 13.25a.75.75 0 0 1 .677.427l.948 1.99 2.186.178a.75.75 0 0 1 .46 1.286l-1.578 1.529.452 2.188a.75.75 0 0 1-1.09.813l-2.055-1.106-2.056 1.106a.75.75 0 0 1-1.09-.813l.453-2.188-1.579-1.529a.75.75 0 0 1 .46-1.286l2.187-.179.948-1.989a.75.75 0 0 1 .677-.427"
      />
      <path
        fill="currentColor"
        d="M12.855 20.75H3a.75.75 0 0 1-.75-.75 7.75 7.75 0 0 1 5.995-7.55A5.252 5.252 0 0 1 10 2.25a5.25 5.25 0 0 1 1.755 10.2 7.7 7.7 0 0 1 3.243 1.627l-.192.402-1.469.12a2 2 0 0 0-1.228 3.43l1.085 1.05-.313 1.516a2 2 0 0 0-.026.155"
      />
    </svg>
  );
};
export default UserStar_01;
