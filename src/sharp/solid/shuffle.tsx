import React from "react";
const Shuffle: React.FC<
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
        d="M2 5h6a1 1 0 0 1 .832.445L16.535 17H21a1 1 0 0 1 .776 1.631L19.5 21.5l-1.551-1.263.947-1.237H16a1 1 0 0 1-.832-.445L7.465 7H2zM2 19h6a1 1 0 0 0 .832-.445l2-3-1.664-1.11L7.465 17H2zM15.168 5.445l-2 3 1.664 1.11L16.535 7H21a1 1 0 0 0 .776-1.631L19.5 2.5l-1.551 1.263L18.896 5H16a1 1 0 0 0-.832.445"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Shuffle;
