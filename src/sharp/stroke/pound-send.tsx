import React from "react";
const PoundSend: React.FC<
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
        strokeWidth={1.5}
        d="M14.41 13h7.199m-2.138-2.5 2.53 2.5-2.53 2.5M13.458 8.848c0-3.365-2.8-5.422-5.672-4.708-3.572 1.057-3.66 5.148-2.952 6.797 1.084 2.3 2.713 2.707 3.782 2.82-2.37-.355-1.56 3.725-5.766 6.21-.016.01-.01.035.007.035h9.72c1.006 0 2.242-.675 2.55-1M1.999 13.759H10.8"
      />
    </svg>
  );
};
export default PoundSend;
