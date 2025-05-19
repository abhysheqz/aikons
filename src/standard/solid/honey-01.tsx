import React from "react";
const Honey_01: React.FC<
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
        d="M5.25 3c0-.966.784-1.75 1.75-1.75h10c.966 0 1.75.784 1.75 1.75v1A1.75 1.75 0 0 1 17 5.75H7A1.75 1.75 0 0 1 5.25 4zM7 2.75a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25h10a.25.25 0 0 0 .25-.25V3a.25.25 0 0 0-.25-.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.5 4.25a.75.75 0 0 0-.636.353l-2.5 4A.75.75 0 0 0 4.25 9v11A2.75 2.75 0 0 0 7 22.75h10A2.75 2.75 0 0 0 19.75 20V9a.75.75 0 0 0-.114-.398l-2.5-4a.75.75 0 0 0-.636-.352zm4.835 5.08a.75.75 0 0 0-.67 0l-2 1a.75.75 0 0 0-.415.67v2.037l-1.585.792a.75.75 0 0 0-.415.671V17c0 .284.16.544.415.67l2 1a.75.75 0 0 0 .67 0L12 17.839l1.665.833a.75.75 0 0 0 .67 0l2-1A.75.75 0 0 0 16.75 17v-2.5a.75.75 0 0 0-.415-.67l-1.585-.793V11a.75.75 0 0 0-.415-.67zM8.75 14.963l1.25-.626 1.25.626v1.572l-1.25.625-1.25-.625zm4 1.572v-1.573L14 14.34l1.25.624v1.574l-1.25.625zm.5-5.073v1.574L12 13.66l-1.25-.624v-1.574L12 10.84z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Honey_01;
