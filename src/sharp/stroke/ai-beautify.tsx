import React from "react";
const AiBeautify: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 10.5 2 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m3 19.5 2 2 12-12-2-2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="m19.5 2.5-.11.299c-.146.391-.218.587-.36.73-.144.143-.34.216-.731.36L18 4l.299.11c.391.145.587.218.73.36.143.144.215.34.36.731l.111.299.11-.299c.146-.391.218-.587.36-.73.144-.143.34-.216.731-.36L21 4l-.299-.11c-.391-.145-.587-.218-.73-.36-.143-.144-.215-.34-.36-.731zM19.5 12.5l-.11.299c-.146.391-.218.587-.36.73-.144.143-.34.216-.731.36L18 14l.299.11c.391.146.587.218.73.36.143.144.215.34.36.731l.111.299.11-.299c.146-.391.218-.587.36-.73.144-.143.34-.216.731-.36L21 14l-.299-.11c-.391-.146-.587-.218-.73-.36-.143-.144-.215-.34-.36-.731zM10.5 2.5l-.11.299c-.146.391-.218.587-.36.73-.144.143-.34.216-.731.36L9 4l.299.11c.391.145.587.218.73.36.143.144.216.34.36.731l.111.299.11-.299c.146-.391.218-.587.36-.73.144-.143.34-.216.731-.36L12 4l-.299-.11c-.391-.145-.587-.218-.73-.36-.143-.144-.216-.34-.36-.731z"
      />
    </svg>
  );
};
export default AiBeautify;
