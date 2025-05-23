import React from "react";
const Fencing: React.FC<
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
        d="M20.707 3.707a1 1 0 0 0-1.414-1.414L12 9.585 4.707 2.293a1 1 0 0 0-1.414 1.414L10.586 11l-1.823 1.822c-1.373-.827-3.138-.803-4.293.353a.75.75 0 0 0 0 1.06l1.257 1.257-3.76 2.718-.035.027c-.51.418-.727.98-.674 1.547.05.528.325.992.664 1.322.338.33.806.59 1.327.636a1.74 1.74 0 0 0 1.564-.709l2.656-3.799 1.295 1.295a.75.75 0 0 0 1.06 0c1.156-1.155 1.18-2.92.353-4.292L12 12.414l1.823 1.823c-.827 1.373-.803 3.137.353 4.292a.75.75 0 0 0 1.06 0l1.296-1.295 2.655 3.8q.014.021.032.042c.413.51.976.715 1.532.666.52-.045.989-.306 1.327-.636.339-.33.615-.794.664-1.323.053-.566-.164-1.128-.674-1.546l-.036-.027-3.759-2.718 1.257-1.257a.75.75 0 0 0 0-1.06c-1.155-1.156-2.92-1.18-4.293-.353L13.414 11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Fencing;
