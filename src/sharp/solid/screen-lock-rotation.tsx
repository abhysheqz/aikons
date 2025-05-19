import React from "react";
const ScreenLockRotation: React.FC<
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
        d="M17.531 1.5a2.75 2.75 0 0 0-2.75 2.75V5h-1.5v7h8.5V5h-1.5v-.75a2.75 2.75 0 0 0-2.75-2.75m1.25 2.75V5h-2.5v-.75a1.25 1.25 0 0 1 2.5 0M1.781 12.759l.75-.001.75-.001v.013000000000000001l.002.06q.002.082.013.244c.015.216.045.53.106.909.123.761.367 1.771.85 2.785.895 1.88 2.609 3.8 6.033 4.174l-.425-.849 1.342-.67.71 1.42.013.026c.053.106.127.252.17.387a.95.95 0 0 1-.092.822.94.94 0 0 1-.713.414 3 3 0 0 1-.42 0l-.028-.002c-4.5-.228-6.806-2.684-7.944-5.077a12 12 0 0 1-.977-3.192 12 12 0 0 1-.137-1.343l-.002-.084v-.035"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M22.219 13.25H12.03v-9.5h1.36l-1.53-1.53a.75.75 0 0 0-1.06 0L4 9.02a.75.75 0 0 0 0 1.06l10.2 10.2a.75.75 0 0 0 1.06 0l6.8-6.8a.8.8 0 0 0 .158-.23"
      />
    </svg>
  );
};
export default ScreenLockRotation;
