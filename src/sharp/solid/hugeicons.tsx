import React from "react";
const Hugeicons: React.FC<
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
        d="M6.025 8.5h11.95c-.274-2.748-2.782-5-5.975-5s-5.701 2.252-5.975 5m13.958 0H23v2h-1.617l-1.062 8.496a4 4 0 0 1-3.97 3.504H7.649a4 4 0 0 1-3.969-3.504L2.617 10.5H1v-2h3.017c.276-3.968 3.81-7 7.983-7 4.174 0 7.707 3.032 7.983 7"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hugeicons;
