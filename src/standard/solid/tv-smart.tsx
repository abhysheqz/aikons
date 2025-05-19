import React from "react";
const TvSmart: React.FC<
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
        d="M5 2.125a3.75 3.75 0 0 0-3.75 3.75v10A3.75 3.75 0 0 0 5 19.625h14a3.75 3.75 0 0 0 3.75-3.75v-10A3.75 3.75 0 0 0 19 2.125zm6.25 13.25a7.25 7.25 0 0 1 7.25-7.25.75.75 0 0 0 0-1.5 8.75 8.75 0 0 0-8.75 8.75.75.75 0 0 0 1.5 0m3.2 0a4.05 4.05 0 0 1 4.05-4.05.75.75 0 0 0 0-1.5 5.55 5.55 0 0 0-5.55 5.55.75.75 0 0 0 1.5 0m3.2 0c0-.47.38-.85.85-.85a.75.75 0 0 0 0-1.5 2.35 2.35 0 0 0-2.35 2.35.75.75 0 0 0 1.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.447 17.98a1 1 0 0 1 .448 1.342l-1 2a1 1 0 1 1-1.79-.894l1-2a1 1 0 0 1 1.342-.447m11.106 0a1 1 0 0 1 1.342.448l1 2a1 1 0 1 1-1.79.894l-1-2a1 1 0 0 1 .448-1.341"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TvSmart;
