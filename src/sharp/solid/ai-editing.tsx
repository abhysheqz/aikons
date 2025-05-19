import React from "react";
const AiEditing: React.FC<
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
        d="M6.525 1.25h.45l.99 3.285 3.285.99v.45l-3.285.99-.99 3.285h-.45l-.99-3.285-3.285-.99v-.45l3.285-.99z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m21.75 10.455-5.015-5.016-3.141 3.141 2.92 2.92-1.06 1.06-2.92-2.92-8.095 8.095v5.015h5.016z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiEditing;
