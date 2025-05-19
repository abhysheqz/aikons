import React from "react";
const AddCircleHalfDot: React.FC<
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
        d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12 3.205a8.795 8.795 0 1 1-8.688 7.417L1.38 10.32q-.13.823-.131 1.681c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12 17.937 1.25 12 1.25q-.858.001-1.681.13l.303 1.932A9 9 0 0 1 12 3.205"
      />
      <path
        fill="currentColor"
        d="M6.465 5.164a8.8 8.8 0 0 1 2.382-1.378l-.7-1.824a10.7 10.7 0 0 0-2.913 1.684zM3.786 8.847a8.8 8.8 0 0 1 1.378-2.382l-1.518-1.23a10.7 10.7 0 0 0-1.684 2.911z"
      />
    </svg>
  );
};
export default AddCircleHalfDot;
