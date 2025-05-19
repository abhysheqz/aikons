import React from "react";
const AspectRatio: React.FC<
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
        d="M3.75 2A2.75 2.75 0 0 0 1 4.75V8h12.75a2.75 2.75 0 0 1 2.75 2.75V21.5h3.25a2.75 2.75 0 0 0 2.75-2.75v-14A2.75 2.75 0 0 0 19.75 2zM15 21.5V10.75c0-.69-.56-1.25-1.25-1.25H10.5v12zm-6 0v-12H1v9.25a2.75 2.75 0 0 0 2.75 2.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AspectRatio;
