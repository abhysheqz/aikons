import React from "react";
const YogaBall: React.FC<
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
        strokeWidth={1.5}
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
      <path
        fill="currentColor"
        d="M19.728 5.182a.75.75 0 0 0-1.456-.364zm2.457 5.124a.75.75 0 1 0-1.37-.612zm-3.913-5.488C17.342 8.543 13.621 12.25 9 12.25v1.5c5.423 0 9.659-4.293 10.728-8.568zm2.543 4.876c-2.045 4.57-6.09 7.556-11.336 7.556v1.5c5.898 0 10.445-3.39 12.706-8.444zM9.48 17.25c-2.317 0-4.29-.388-6.114-1.405l-.73 1.31c2.108 1.175 4.351 1.595 6.844 1.595zm-.479-5c-2.841 0-5.107-.947-6.476-2.286l-1.048 1.072C3.174 12.697 5.84 13.75 9 13.75zm-1-5c-1.574 0-3.17-.48-3.97-1.28L2.97 7.03C4.17 8.23 6.235 8.75 8 8.75zm6.258-5.356C13.813 5.008 11.084 7.25 8 7.25v1.5c3.796 0 7.187-2.758 7.743-6.644z"
      />
    </svg>
  );
};
export default YogaBall;
