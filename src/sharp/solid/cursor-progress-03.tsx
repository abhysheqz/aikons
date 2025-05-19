import React from "react";
const CursorProgress_03: React.FC<
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
        d="m1.75 1.75 17.5 6.806-7.778 2.916-2.916 7.778z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.75 14.903q-.186 0-.364.022l-.815.101-.2-1.64.815-.101a4.6 4.6 0 0 1 1.128 0l.815.1-.2 1.641-.815-.1a3 3 0 0 0-.364-.023m-1.806.476-.5.655a3 3 0 0 0-.36.618l-.325.76-1.509-.653.324-.76a4.5 4.5 0 0 1 .568-.973l.5-.655zm4.914-1.008.5.656a4.5 4.5 0 0 1 .568.973l.324.76-1.509.651-.324-.759a3 3 0 0 0-.36-.617l-.501-.655zm1.392 4.371-.324.76a4.5 4.5 0 0 1-.568.973l-.5.655-1.302-1.008.5-.655a3 3 0 0 0 .361-.618l.324-.76zm-7.49-.652.323.76a2.9 2.9 0 0 0 .36.617l.501.655-1.302 1.008-.5-.655a4.5 4.5 0 0 1-.568-.973l-.324-.76zm1.81 2.384.816.1a3 3 0 0 0 .728 0l.815-.1.2 1.641-.815.1a4.6 4.6 0 0 1-1.128 0l-.815-.1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CursorProgress_03;
