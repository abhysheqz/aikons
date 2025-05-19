import React from "react";
const BabyBoyDress: React.FC<
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
        d="M18.494 2.436A.75.75 0 0 0 18 2.25h-3.75V3a2.25 2.25 0 0 1-4.5 0v-.75H6a.75.75 0 0 0-.494.186l-4 3.5a.75.75 0 0 0-.218.801l1.5 4.5a.75.75 0 0 0 1.098.406l1.364-.818v1.425h13.5v-1.425l1.364.818a.75.75 0 0 0 1.098-.406l1.5-4.5a.75.75 0 0 0-.218-.801zM18.75 13.75H5.25v8h13.5z"
      />
    </svg>
  );
};
export default BabyBoyDress;
