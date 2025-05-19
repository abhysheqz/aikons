import React from "react";
const Whistle: React.FC<
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
        d="M8 7.75a6.75 6.75 0 1 0 6.709 7.5H19a.75.75 0 0 0 .53-.22l3-3a.75.75 0 0 0 .22-.53v-3a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0-.624.334l-.777 1.166H12.9l-.777-1.166a.75.75 0 0 0-.624-.334zm0 4a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M14.25 2.75v2h-1.5v-2zm-4.22.97 1.5 1.5-1.061 1.06-1.5-1.5zm8 1.06-1.5 1.5-1.061-1.06 1.5-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Whistle;
