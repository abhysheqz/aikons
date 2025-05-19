import React from "react";
const Notebook_02: React.FC<
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
        d="M4.25 1.25H8v21.5H4.25A.75.75 0 0 1 3.5 22v-3h-2v-2h2v-4h-2v-2h2V7h-2V5h2V2a.75.75 0 0 1 .75-.75m17.5 21.5H9.5V1.25h12.25a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-.75.75M18.5 6.25h-5v1.5h5zm-2 4h-3v1.5h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Notebook_02;
