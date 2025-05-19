import React from "react";
const SortingUp: React.FC<
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
        d="M18 10H6V8h12zM21 14H3v-2h18z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m12 2 3.207 3.207-1.414 1.414L13 5.828V9h-2V5.828l-.793.793-1.414-1.414zM8 14.586l3.207 3.207-1.414 1.414L9 18.414V22H7v-3.586l-.793.793-1.414-1.414zM16 14.586l3.207 3.207-1.414 1.414-.793-.793V22h-2v-3.586l-.793.793-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SortingUp;
