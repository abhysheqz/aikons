import React from "react";
const Sleeveless: React.FC<
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
        d="M9.059 2.107c.044 4.378 2.012 5.224 2.943 5.224s2.895-.846 2.94-5.224c0-.07.072-.122.138-.095l2.396.984c-.082 1.371.257 4.747 2.524 5.982V22H4V8.978c2.267-1.235 2.606-4.61 2.524-5.982l2.396-.984c.066-.027.138.024.139.095Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.996 2.016A4.87 4.87 0 0 1 12 3.026 4.94 4.94 0 0 1 8.985 2"
      />
    </svg>
  );
};
export default Sleeveless;
