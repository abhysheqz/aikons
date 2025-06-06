import React from "react";
const PresentationPodium: React.FC<
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
        d="M9.294 14H7.16a2 2 0 0 1-1.966-1.631l-.972-5.185A1 1 0 0 1 5.205 6h13.59a1 1 0 0 1 .983 1.184l-.972 5.185A2 2 0 0 1 16.84 14h-2.134"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6 6 .621-2.485A2 2 0 0 1 8.561 2H9M18 6l-.621-2.485A2 2 0 0 0 15.439 2H15"
      />
      <path
        fill="currentColor"
        d="M9.742 11.894a.75.75 0 0 0-1.484.212zM10 19v.75a.75.75 0 0 0 .742-.856zm5.743-6.894a.75.75 0 0 0-1.485-.212zM14 19l-.742-.106a.75.75 0 0 0 .742.856zm-6.78 2.342-.712-.237zm9.56 0-.71.237zm-9.008-1.658-.711-.237zm.486-7.578 1 7 1.485-.212-1-7zM10 18.25H8.72v1.5H10zm-2.94 1.197-.552 1.658 1.423.474.553-1.658zm7.198-7.553-1 7 1.485.212 1-7zM14 19.75h1.28v-1.5H14zm1.516.17.553 1.66 1.423-.475-.553-1.658zm-7.822 2.83h8.612v-1.5H7.694zm7.585-3a.25.25 0 0 1 .237.17l1.423-.473a1.75 1.75 0 0 0-1.66-1.197zm-8.771 1.355a1.25 1.25 0 0 0 1.186 1.645v-1.5a.25.25 0 0 1 .237.33zm9.561.474a.25.25 0 0 1 .237-.329v1.5a1.25 1.25 0 0 0 1.186-1.645zM8.721 18.25a1.75 1.75 0 0 0-1.66 1.197l1.423.474a.25.25 0 0 1 .237-.171z"
      />
    </svg>
  );
};
export default PresentationPodium;
