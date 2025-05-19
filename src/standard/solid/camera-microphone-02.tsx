import React from "react";
const CameraMicrophone_02: React.FC<
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
        d="M9.22 2.25a1.75 1.75 0 0 0-1.66 1.197l-.6 1.803H4A2.75 2.75 0 0 0 1.25 8v11A2.75 2.75 0 0 0 4 21.75h16A2.75 2.75 0 0 0 22.75 19V8A2.75 2.75 0 0 0 20 5.25h-2.96l-.6-1.803a1.75 1.75 0 0 0-1.66-1.197zm2.78 6a2.25 2.25 0 0 0-2.25 2.25V12a2.25 2.25 0 0 0 4.5 0v-1.5A2.25 2.25 0 0 0 12 8.25m-2.829 5.415a.75.75 0 1 0-1.342.67c.337.673.992 1.267 1.705 1.687a5.4 5.4 0 0 0 1.716.656V18a.75.75 0 0 0 1.5 0v-1.322a5.4 5.4 0 0 0 1.716-.656c.713-.42 1.368-1.014 1.705-1.687a.75.75 0 1 0-1.342-.67c-.163.327-.56.733-1.123 1.063-.554.326-1.174.522-1.706.522s-1.151-.196-1.706-.522c-.563-.33-.96-.736-1.123-1.063"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CameraMicrophone_02;
