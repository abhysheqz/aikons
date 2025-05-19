import React from "react";
const CentralShaheedMinar: React.FC<
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
        d="M3.75 11.293v10.708a1 1 0 1 1-2 0V10.202a1.2 1.2 0 0 1 1.561-1.145l3.1.98c.503.159.839.625.839 1.146V22a1 1 0 1 1-2 0V11.767zM20.689 9.057a1.2 1.2 0 0 1 1.561 1.145v11.799a1 1 0 1 1-2 0V11.293l-1.5.475V22a1 1 0 1 1-2 0V11.183c0-.521.336-.987.839-1.146zM8 8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V9h-4v13a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 22a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1M8.122 3l1.81 4.637a1 1 0 0 1-1.864.727L6.241 3.68l-.012-.031a3.8 3.8 0 0 1-.22-.894c-.029-.307 0-.727.285-1.102.278-.364.665-.507.953-.572.29-.066.613-.081.93-.081h7.646c.317 0 .64.015.93.08.287.066.675.21.953.573.285.375.314.795.285 1.102a3.8 3.8 0 0 1-.232.925l-1.828 4.684a1 1 0 0 1-1.863-.728L15.878 3H8.121"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CentralShaheedMinar;
