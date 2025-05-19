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
        d="m16.75 12.443 1.488 3.122 3.512.287-2.535 2.453.712 3.444-3.177-1.708-3.177 1.708.711-3.444-2.534-2.453 3.512-.287z"
      />
      <path
        fill="currentColor"
        d="M11.755 12.45a7.7 7.7 0 0 1 2.946 1.388l-.258.541-3.633.297-.388 1.632 2.5 2.419-.419 2.023H2.25V20a7.75 7.75 0 0 1 5.995-7.55A5.252 5.252 0 0 1 10 2.25a5.25 5.25 0 0 1 1.755 10.2"
      />
    </svg>
  );
};
export default UserStar_01;
