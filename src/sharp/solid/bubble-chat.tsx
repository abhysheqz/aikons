import React from "react";
const BubbleChat: React.FC<
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
        d="M12 1.25C6.1 1.25 1.25 5.804 1.25 11.5c0 2.719 1.11 5.186 2.911 7.014L3.25 22.75l4.767-1.727c1.233.47 2.578.727 3.983.727 5.9 0 10.75-4.554 10.75-10.25S17.9 1.25 12 1.25M9.009 11H7v2h2.009zm3.996 2v-2h-2.01v2zM17 11h-2.009v2H17z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BubbleChat;
