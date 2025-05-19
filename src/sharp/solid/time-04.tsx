import React from "react";
const Time_04: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m3.793 5.543L12 10.586 9.707 8.293 8.293 9.707 10.586 12l-.793.793 1.414 1.414.793-.793.793.793 1.414-1.414-.793-.793 3.793-3.793z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Time_04;
