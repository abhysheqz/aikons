import React from "react";
const EditOff_04: React.FC<
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
        d="M2.543 2.543a1 1 0 0 1 1.414 0l17.5 17.5a1 1 0 0 1-1.414 1.414l-17.5-17.5a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m9.47 9.47-6.708 6.707a1.75 1.75 0 0 0-.512 1.237V21c0 .414.336.75.75.75h3.586c.464 0 .909-.184 1.237-.513l6.707-6.707zM16.298 12.763 18.5 10.56 13.44 5.5l-2.203 2.202zM16.177 2.763a1.75 1.75 0 0 1 2.474 0l2.586 2.585a1.75 1.75 0 0 1 0 2.475L19.561 9.5 14.5 4.44z"
      />
    </svg>
  );
};
export default EditOff_04;
