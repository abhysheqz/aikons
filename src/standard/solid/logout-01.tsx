import React from "react";
const Logout_01: React.FC<
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
        d="M12.6 4C7.789 4 4 7.642 4 12s3.789 8 8.6 8q.646-.001 1.264-.086a1 1 0 0 1 .272 1.982Q13.382 22 12.6 22C6.808 22 2 17.583 2 12S6.808 2 12.6 2q.782.001 1.536.104a1 1 0 1 1-.272 1.982A9 9 0 0 0 12.6 4"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.117 8.576a1 1 0 0 1 1.09.217l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5A1 1 0 0 1 17.5 14.5V13H11a1 1 0 1 1 0-2h6.5V9.5a1 1 0 0 1 .617-.924"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Logout_01;
