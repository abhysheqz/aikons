import React from "react";
const CameraMicrophone_01: React.FC<
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
        d="m17.04 5.25-.6-1.803a1.75 1.75 0 0 0-1.66-1.197H9.22a1.75 1.75 0 0 0-1.66 1.197l-.6 1.803H4.433a2.75 2.75 0 0 0-2.748 2.658l-.367 11a2.75 2.75 0 0 0 2.749 2.842h15.864a2.75 2.75 0 0 0 2.749-2.842l-.367-11a2.75 2.75 0 0 0-2.748-2.658zM9.748 10.5a2.25 2.25 0 1 1 4.5 0V12a2.25 2.25 0 1 1-4.5 0zm-.579 3.165a.75.75 0 1 0-1.341.67c.336.674.991 1.267 1.704 1.687a5.4 5.4 0 0 0 1.717.656V18a.75.75 0 0 0 1.5 0v-1.322a5.4 5.4 0 0 0 1.716-.656c.713-.42 1.368-1.013 1.704-1.686a.75.75 0 1 0-1.341-.671c-.164.327-.56.733-1.123 1.064-.555.326-1.175.521-1.707.521-.531 0-1.15-.195-1.706-.521-.562-.331-.96-.737-1.123-1.064"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CameraMicrophone_01;
