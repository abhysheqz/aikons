import React from "react";
const BubbleChatCancel: React.FC<
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
        d="m17.629 4.957-2.293-2.293L16.75 1.25l2.293 2.293 2.293-2.293 1.414 1.414-2.293 2.293L22.75 7.25l-1.414 1.414-2.293-2.293-2.293 2.293-1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25c.918 0 1.811.11 2.664.318l-1.096 1.096 2.293 2.293-2.293 2.293 3.182 3.182 2.293-2.293 2.293 2.293 1.16-1.16c.166.716.254 1.462.254 2.228 0 5.696-4.85 10.25-10.75 10.25-1.405 0-2.75-.258-3.983-.727L3.25 22.75l.911-4.236C2.361 16.686 1.25 14.22 1.25 11.5 1.25 5.804 6.1 1.25 12 1.25M9.009 11H7v2h2.009zm3.996 2v-2h-2.01v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BubbleChatCancel;
