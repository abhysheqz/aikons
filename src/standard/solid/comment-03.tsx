import React from "react";
const Comment_03: React.FC<
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
        d="M12 2.25c-3.089 0-5.763.641-7.686 2.015C2.356 5.663 1.25 7.77 1.25 10.5c0 4.122 2.753 6.944 5.33 8.684 1.301.878 2.597 1.51 3.564 1.92.478.203 1.329.504 1.627.61l.013.004A.75.75 0 0 0 12.75 21v-2.263c2.771-.097 5.17-.74 6.936-2.002 1.957-1.398 3.064-3.506 3.064-6.235s-1.107-4.837-3.064-6.235C17.763 2.89 15.089 2.25 12 2.25M8 7a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zm0 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Comment_03;
