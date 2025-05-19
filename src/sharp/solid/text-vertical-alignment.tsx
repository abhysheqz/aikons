import React from "react";
const TextVerticalAlignment: React.FC<
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
        d="M12 3h11v2H12zM12 7h11v2H12zM1 11h22v2H1zM12 19h11v2H12zM12 15h11v2H12zM3.747 2H6.12l2.747 7.141L7 9.859 6.477 8.5H3.39l-.522 1.359L1 9.141zm.412 4.5h1.55l-.776-2.014zM3.813 14.141h2.374l2.746 7.141L7.066 22l-.522-1.359H3.456L2.933 22l-1.867-.718zm.412 4.5h1.55L5 16.627z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextVerticalAlignment;
