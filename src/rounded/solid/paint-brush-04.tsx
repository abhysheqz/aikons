import React from "react";
const PaintBrush_04: React.FC<
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
        d="M12 1.25A2.75 2.75 0 0 0 9.25 4v2.553a2.25 2.25 0 0 1-1.58 2.148l-.787.246a3.75 3.75 0 0 0-2.633 3.58c0 .966.784 1.75 1.75 1.75h13a1.75 1.75 0 0 0 1.75-1.75 3.75 3.75 0 0 0-2.633-3.58L17.33 8.7a2.25 2.25 0 0 1-1.58-2.148V4A2.75 2.75 0 0 0 13 1.25zM6 15.776h13q.192 0 .38-.022c.297-.034.446-.052.537.009.091.06.127.18.197.419.369 1.248.526 2.575.595 3.642l.004.047c.027.413.052.802.025 1.126-.03.367-.134.745-.438 1.068-.306.326-.772.475-1.133.555a6.2 6.2 0 0 1-1.3.13c-.442 0-.897-.04-1.296-.123-.356-.076-.817-.216-1.122-.521-.31-.309-.423-.684-.47-1.04-.031-.23-.31-.354-.498-.218a7 7 0 0 1-.861.53c-1.273.667-2.79 1.014-4.207 1.19a25 25 0 0 1-3.807.155 26 26 0 0 1-1.22-.067c-.506-.088-.952-.233-1.063-.466a.75.75 0 0 1 .044-.725c.697-1.096 1.21-2.41 1.528-3.616.14-.528.238-1.018.3-1.446.046-.323.069-.484.154-.558.085-.073.265-.072.625-.07z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PaintBrush_04;
