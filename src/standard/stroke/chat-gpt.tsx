import React from "react";
const ChatGpt: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 10.5 15 7l5.33 3.028c1.139.647 1.686 2.026 1.67 3.472-.024 2.236-1.5 4.5-4 4.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 8.5 6 3.5v6c0 2.127-2.57 3.987-5 4-1.374.008-2.704-.643-3.5-2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 10.5v6.53l-5.446 3.087c-2.912 1.654-8.123-2.361-6.098-6.101"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 13.5 9 17l-5.326-3.028C2.474 13.29 2 12 2 10.5c0-2.5 2-5 4.5-5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 15.5 6 12V6c0-2.117 2.5-4 5-4 1.5 0 2.697.63 3.5 2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 13.5V6.997l5.43-3.114C16.808 2.533 21 4.956 21 7.953c0 1-.174 1.415-.59 2.124"
      />
    </svg>
  );
};
export default ChatGpt;
