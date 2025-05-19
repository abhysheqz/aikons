import React from "react";
const AlignTop: React.FC<
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
        d="M19 14.746a.75.75 0 0 0 .75-.75V8a.75.75 0 0 0-.75-.75l-5-.004a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 .75.75zM10 20.75a.75.75 0 0 0 .75-.75V8a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0-.75.75v12a.75.75 0 0 0 .75.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 5.25h20v-2H2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AlignTop;
