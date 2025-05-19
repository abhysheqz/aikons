import React from "react";
const TShirt: React.FC<
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
        d="M9.539 1.214A11 11 0 0 1 11.549 1c.465 0 1.214.054 2.01.214.787.159 1.689.433 2.406.912a.75.75 0 0 1 .227.238l1.5 2.5-1.286.772L15 3.289c-.47-.277-1.093-.475-1.735-.604a9.4 9.4 0 0 0-1.715-.185 9.4 9.4 0 0 0-1.714.185c-.642.13-1.264.327-1.735.604L6.692 5.636l-1.286-.772 1.5-2.5a.75.75 0 0 1 .227-.238c.718-.479 1.62-.753 2.406-.912"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.608 4.644a.75.75 0 0 1 .778-.065l3 1.5a.75.75 0 0 1 .383.455l1.258 4.195a1.75 1.75 0 0 1-.893 2.068L18.3 14.213v5.537a2.75 2.75 0 0 1-2.75 2.75h-8a2.75 2.75 0 0 1-2.75-2.75v-5.537l-2.833-1.416a1.75 1.75 0 0 1-.894-2.068l1.258-4.195a.75.75 0 0 1 .383-.455l3-1.5a.75.75 0 0 1 .777.064l4.332 3.151a1.25 1.25 0 0 0 1.472 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.917 1.512a.75.75 0 0 1 .872.604l1 5.5a.75.75 0 1 1-1.476.268l-1-5.5a.75.75 0 0 1 .604-.872m5.268 0a.75.75 0 0 1 .604.872l-1 5.5a.75.75 0 1 1-1.476-.268l1-5.5a.75.75 0 0 1 .872-.604"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TShirt;
