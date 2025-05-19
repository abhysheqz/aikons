import React from "react";
const FlipRight: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 9.667v4.666M16.5 3.015c-.5-.017-1-.018-1.5-.016m1.5 17.986c-.5.017-1 .018-1.5.017m4.255-17.465a5 5 0 0 1 2.217 2.226M21.5 18.18a5 5 0 0 1-2.245 2.283"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 5.505c0-1.958-.638-2.498-2.5-2.498-2.532 0-5.454-.25-6.897 2.248C2 6.3 2 7.7 2 10.501v2.998c0 2.801 0 4.202.603 5.246 1.443 2.498 4.365 2.248 6.897 2.248 1.862 0 2.5-.54 2.5-2.498z"
      />
    </svg>
  );
};
export default FlipRight;
