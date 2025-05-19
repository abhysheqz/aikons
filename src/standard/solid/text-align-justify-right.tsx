import React from "react";
const TextAlignJustifyRight: React.FC<
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
        d="M12.588 5a1 1 0 0 1 1-1H21a1 1 0 0 1 0 2h-7.412a1 1 0 0 1-1-1M12.588 10a1 1 0 0 1 1-1H21a1 1 0 0 1 0 2h-7.412a1 1 0 0 1-1-1M2 15a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M2 20a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextAlignJustifyRight;
