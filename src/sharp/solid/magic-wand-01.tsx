import React from "react";
const MagicWand_01: React.FC<
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
        d="M11.53 9.47a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 0 1.06l10 10a.75.75 0 0 0 1.06 0l2-2a.75.75 0 0 0 0-1.06zm.47 4.47L10.06 12l.94-.94L12.94 13z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6 3.25a.75.75 0 0 1 .703.49l.332.896a2.25 2.25 0 0 0 1.33 1.33l.895.33a.75.75 0 0 1 0 1.407l-.896.332a2.25 2.25 0 0 0-1.33 1.33l-.33.895a.75.75 0 0 1-1.407 0l-.332-.896a2.25 2.25 0 0 0-1.33-1.33l-.895-.33a.75.75 0 0 1 0-1.407l.896-.332a2.25 2.25 0 0 0 1.33-1.33l.33-.895A.75.75 0 0 1 6 3.25M17 1.25a.75.75 0 0 1 .703.49l.442 1.194a3.25 3.25 0 0 0 1.92 1.92l1.195.443a.75.75 0 0 1 0 1.406l-1.194.442a3.25 3.25 0 0 0-1.92 1.92l-.443 1.195a.75.75 0 0 1-1.406 0l-.443-1.194a3.25 3.25 0 0 0-1.92-1.92l-1.194-.443a.75.75 0 0 1 0-1.406l1.194-.442a3.25 3.25 0 0 0 1.92-1.92l.443-1.195A.75.75 0 0 1 17 1.25"
      />
    </svg>
  );
};
export default MagicWand_01;
