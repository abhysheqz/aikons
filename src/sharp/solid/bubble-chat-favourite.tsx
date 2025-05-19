import React from "react";
const BubbleChatFavourite: React.FC<
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
        d="M17.517 1.481c.185.077.347.165.484.25.137-.085.299-.173.484-.25.653-.27 1.576-.393 2.606.141 1.332.691 1.932 2.308 1.541 3.897-.4 1.625-1.794 3.204-4.375 4.138l-.256.093-.257-.093c-2.58-.934-3.975-2.513-4.374-4.138-.391-1.589.209-3.206 1.54-3.897 1.031-.534 1.954-.411 2.607-.14"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25q.635 0 1.252.07c-1.12 1.16-1.489 2.901-1.096 4.498.523 2.13 2.297 3.977 5.163 5.015l.682.246.682-.247c1.524-.551 2.74-1.332 3.622-2.263.29.927.445 1.91.445 2.931 0 5.696-4.85 10.25-10.75 10.25-1.405 0-2.75-.258-3.983-.727L3.25 22.75l.911-4.236C2.361 16.686 1.25 14.22 1.25 11.5 1.25 5.804 6.1 1.25 12 1.25M9.009 11H7v2h2.009zm3.996 2v-2h-2.01v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BubbleChatFavourite;
