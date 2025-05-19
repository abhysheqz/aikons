import React from "react";
const CircleArrowUpDown: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-.47 8.72L8.997 7.44l-2.53 2.53 1.062 1.06.718-.719V15.5h1.5v-5.19l.721.72zm4.22 3.72V8.5h-1.5v5.19l-.72-.72-1.061 1.06 2.53 2.53 2.53-2.53-1.06-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowUpDown;
