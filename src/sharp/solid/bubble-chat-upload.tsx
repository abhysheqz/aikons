import React from "react";
const BubbleChatUpload: React.FC<
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
        d="m19.043 1.25 3.707 3.707-1.414 1.414-1.293-1.293v5.586h-2V5.078L16.75 6.371l-1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25c1.558 0 3.043.318 4.385.89l-2.817 2.817 3.182 3.182.043-.043v3.818h4.5V8.096l.043.043.588-.588a9.8 9.8 0 0 1 .826 3.949c0 5.696-4.85 10.25-10.75 10.25-1.405 0-2.75-.258-3.983-.727L3.25 22.75l.911-4.236C2.361 16.686 1.25 14.22 1.25 11.5 1.25 5.804 6.1 1.25 12 1.25M9.009 11H7v2h2.009zm3.996 2v-2h-2.01v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BubbleChatUpload;
