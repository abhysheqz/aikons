import React from "react";
const House_03: React.FC<
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
        d="M22.828 9.52a.76.76 0 0 1 .102.798.74.74 0 0 1-.67.432h-9.194L7.448 5.06l-5.4 5.47L1 9.47l2.745-2.78V3.25h1.481v1.94l1.915-1.94H17.67z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 16v4.75h3.75v-9.552L7.447 6.84 2.25 12.103v8.647H6V16zm-2.001-3h2.009v-2h-2.01zM13.065 12q-.034 0-.067-.002v8.752h8.75V12zm2.808 3.75h3v-1.5h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default House_03;
