import React from "react";
const UserEdit_01: React.FC<
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
        d="m18.195 12.75 3.055 3.055-5.181 5.181-3.82.764.765-3.819zM11.862 17.315l-.687 3.435H2.75V20a7.75 7.75 0 0 1 5.995-7.55A5.252 5.252 0 0 1 10.5 2.25a5.25 5.25 0 0 1 1.755 10.2 7.7 7.7 0 0 1 3.024 1.448z"
      />
    </svg>
  );
};
export default UserEdit_01;
