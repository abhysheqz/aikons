import React from "react";
const BubbleChatEdit: React.FC<
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
      <path fill="currentColor" d="M14.75 6.75v2.5h2.5l5.5-5.5-2.5-2.5z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25c1.882 0 3.658.463 5.203 1.28L13.5 6.232V10.5h4.268l3.758-3.758A9.8 9.8 0 0 1 22.75 11.5c0 5.696-4.85 10.25-10.75 10.25-1.405 0-2.75-.258-3.983-.727L3.25 22.75l.911-4.236C2.361 16.686 1.25 14.22 1.25 11.5 1.25 5.804 6.1 1.25 12 1.25M9.009 11H7v2h2.009zm3.996 2v-2h-2.01v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BubbleChatEdit;
