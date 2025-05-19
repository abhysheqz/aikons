import React from "react";
const FireSecurity: React.FC<
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
        d="M17.5 12.25A2.75 2.75 0 0 0 14.75 15v.75h-1.5v7h8.5v-7h-1.5V15a2.75 2.75 0 0 0-2.75-2.75M16.25 15v.75h2.5V15a1.25 1.25 0 1 0-2.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m11.69 1.908-.003-.016a.75.75 0 0 0-1.266-.429s-.54.597-.75.868a11.8 11.8 0 0 0-1.386 2.296c-.766 1.684-1.282 3.961-.48 6.49-.338-.167-.636-.454-.905-.836-.524-.744-.835-1.729-.952-2.408a.75.75 0 0 0-1.358-.296C3.303 9.463 2.25 11.697 2.25 14c0 4.828 3.888 8.75 8.695 8.75h.805v-8.5h1.566a4.25 4.25 0 0 1 5.43-3.314c-.59-.886-1.367-1.74-2.373-2.526-2.147-1.682-3.32-3.347-3.956-4.569a8.6 8.6 0 0 1-.607-1.458 5 5 0 0 1-.12-.475"
      />
    </svg>
  );
};
export default FireSecurity;
