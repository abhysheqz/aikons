import React from "react";
const MessageUpload_01: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.46 15h9.927M7.46 10h5.957"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m15.898 5 2.978-3 2.979 3m-2.979 5V2.493M21.877 12.247c.115 5.315-2.879 7.422-4.854 8.49-2.171 1.172-8.254 1.281-10.565-.207L2.06 21.99c-.076.03-.066.006-.037-.069l1.615-3.872C.309 13.447 1.415 4.344 9.389 2.995h4.266"
      />
    </svg>
  );
};
export default MessageUpload_01;
