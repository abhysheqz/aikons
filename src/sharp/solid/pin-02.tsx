import React from "react";
const Pin_02: React.FC<
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
        d="M10 2.25A2.75 2.75 0 0 0 7.25 5v1.464l1.902.95-.767 3.836H8A2.75 2.75 0 0 0 5.25 14v2.75H11v5h2v-5h5.75V14A2.75 2.75 0 0 0 16 11.25h-.385l-.767-3.835 1.902-.951V5A2.75 2.75 0 0 0 14 2.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pin_02;
