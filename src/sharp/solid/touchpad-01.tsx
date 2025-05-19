import React from "react";
const Touchpad_01: React.FC<
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
        d="M21.186 18.801c.575-1.181 1.361-3.493.262-4.582-1.732-1.716-4.06-2.05-5.448-1.99V7.75a1.5 1.5 0 0 0-3 0v7.759l-1.739-1.521a1.356 1.356 0 0 0-1.96.187c-.403.511-.4 1.239.006 1.747l3.635 4.329v2h7.345v-2s.588-.81.9-1.449"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.536 2.035a.98.98 0 0 1 .691-.285h19.546c.54 0 .977.435.977.972v7.78h-1.954V3.694H3.204v13.61h3.909v1.945H2.227a.975.975 0 0 1-.977-.972V2.722a.97.97 0 0 1 .286-.687"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Touchpad_01;
