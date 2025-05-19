import React from "react";
const TradeMark: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M6 8.715a.75.75 0 0 0 0 1.5h1.257V15a.75.75 0 0 0 1.5 0v-4.786H10a.75.75 0 1 0 0-1.5zM16.76 15V11.33l-1.222 1.211a.75.75 0 0 1-1.059-.002l-1.194-1.197v3.659a.75.75 0 0 1-1.5 0V9.555a.76.76 0 0 1 1.297-.538l1.93 1.933 1.952-1.936a.76.76 0 0 1 1.296.54v5.447a.75.75 0 1 1-1.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TradeMark;
