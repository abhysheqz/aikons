import React from "react";
const UserCircle_02: React.FC<
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
        d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.41 17.647a5.75 5.75 0 0 1 4.992-2.897h3.196a5.75 5.75 0 0 1 4.993 2.897l.003.005.778 1.388a.75.75 0 0 1-.15.922A10.71 10.71 0 0 1 12 22.75c-2.78 0-5.315-1.056-7.223-2.788a.75.75 0 0 1-.15-.922z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.5 10a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
      />
    </svg>
  );
};
export default UserCircle_02;
