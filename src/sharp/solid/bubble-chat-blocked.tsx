import React from "react";
const BubbleChatBlocked: React.FC<
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
        d="M21.336 22.75 1.25 2.664 2.664 1.25 22.75 21.336zM12 1.25c5.9 0 10.75 4.554 10.75 10.25a9.87 9.87 0 0 1-1.897 5.818L6.328 2.793A11.1 11.1 0 0 1 12 1.25"
      />
      <path
        fill="currentColor"
        d="M12 21.75c-1.405 0-2.75-.258-3.983-.727L3.25 22.75l.911-4.236C2.361 16.686 1.25 14.22 1.25 11.5c0-2.805 1.176-5.332 3.074-7.176l14.828 14.828C17.246 20.771 14.736 21.75 12 21.75"
      />
    </svg>
  );
};
export default BubbleChatBlocked;
