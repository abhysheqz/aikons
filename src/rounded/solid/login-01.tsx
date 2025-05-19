import React from "react";
const Login_01: React.FC<
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
        d="M12.85 4c-4.811 0-8.6 3.642-8.6 8s3.789 8 8.6 8q.646-.001 1.264-.086a1 1 0 0 1 .272 1.982Q13.632 22 12.85 22c-5.792 0-10.6-4.417-10.6-10S7.058 2 12.85 2q.782.001 1.536.104a1 1 0 1 1-.272 1.982A9 9 0 0 0 12.85 4"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M20.75 13.006a1 1 0 0 0 0-2h-6.5v-.594c0-.176 0-.392-.022-.568V9.84c-.016-.127-.088-.703-.653-.977-.567-.275-1.067.027-1.176.092l-.468.34c-.376.294-.89.7-1.281 1.08-.196.19-.397.407-.556.638-.14.205-.344.555-.344.986s.203.78.344.986c.16.231.36.448.556.638.39.38.905.786 1.28 1.08l.47.34c.108.065.608.367 1.175.092.565-.274.637-.85.653-.976v-.004c.022-.176.022-.392.022-.568v-.582z"
      />
    </svg>
  );
};
export default Login_01;
