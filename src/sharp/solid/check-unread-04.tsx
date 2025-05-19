import React from "react";
const CheckUnread_04: React.FC<
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
        d="M3.664 3.5 19.25 19.086 17.836 20.5 2.25 4.914z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m13.197 10.994-1.447-1.38L16.25 5l1.5 1.5zM1.25 13.414 2.664 12l4.586 4.586L5.836 18zM15.696 13.613l-1.446-1.38 7-7.233 1.5 1.5zM13.329 13.353l1.447 1.38L11.18 18.5 6.25 13.57l1.414-1.415 3.484 3.483z"
      />
    </svg>
  );
};
export default CheckUnread_04;
