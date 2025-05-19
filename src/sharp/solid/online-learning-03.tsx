import React from "react";
const OnlineLearning_03: React.FC<
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
        d="M1.25 6.222c0-.537.432-.972.964-.972h3.893v1.944H3.18v13.612h9.642v-2.834h1.929v3.806a.97.97 0 0 1-.964.972H2.214a.97.97 0 0 1-.964-.972z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.992 18h2v2h-2zM8 1.25a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h3.75V16a.75.75 0 0 0 1.186.61l3.304-2.36h5.761a.75.75 0 0 0 .75-.75V2a.75.75 0 0 0-.75-.75zm8.009 3.5h-2.016l-2.188 5.472 1.392.556.412-1.028h2.784l.412 1.028 1.392-.556zM15 6.27l.792 1.98H14.21z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default OnlineLearning_03;
