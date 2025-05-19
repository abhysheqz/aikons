import React from "react";
const CustomField: React.FC<
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
        d="M1.25 7A2.75 2.75 0 0 1 4 4.25h16A2.75 2.75 0 0 1 22.75 7v10A2.75 2.75 0 0 1 20 19.75H4A2.75 2.75 0 0 1 1.25 17zm14.043.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414L16 9.414l-1.293 1.293a1 1 0 0 1-1.414-1.414zm-2 6a1 1 0 0 1 1.414 0L16 14.586l1.293-1.293a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 0-1.414M6 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CustomField;
