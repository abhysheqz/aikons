import React from "react";
const YenCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M9.57 7.012a.75.75 0 0 0-1.14.976l2.82 3.29v.972H9.5a.75.75 0 0 0 0 1.5h1.75v2.75a.75.75 0 0 0 1.5 0v-2.75h1.75a.75.75 0 0 0 0-1.5h-1.75v-.973l2.82-3.289a.75.75 0 0 0-1.14-.976L12 9.848z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default YenCircle;
