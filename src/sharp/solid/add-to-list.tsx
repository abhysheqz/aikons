import React from "react";
const AddToList: React.FC<
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
        d="m4.152 8.707.772-.794H2.75v14.836h18.5v-21.5H9.097l4.291 4.414-6.01 6.181zM18.25 16.25h-5.5v1.5h5.5zm-3.5-10h3.5v1.5h-3.5zm3.5 5h-5.5v1.5h5.5zm-6.192 3.168-4.016 4.685-2.603-2.604L6.5 15.44l1.458 1.457 2.96-3.454zm-1.386-9.755L7.353 1.249 5.92 2.643l1.964 2.02H2.75v2h5.133L5.92 8.683l1.434 1.394 3.32-3.414h.077v-.08l.895-.92-.895-.92v-.08z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AddToList;
