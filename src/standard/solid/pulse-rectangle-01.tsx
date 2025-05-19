import React from "react";
const PulseRectangle_01: React.FC<
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
        d="M4.5 1.75a2.75 2.75 0 0 0-2.75 2.752l.009 15a2.75 2.75 0 0 0 2.75 2.748h14.988a2.75 2.75 0 0 0 2.75-2.75l.002-15a2.75 2.75 0 0 0-2.75-2.75zm8.728 6.068a.75.75 0 0 0-1.44-.055L10.5 11.628l-.788-2.365a.75.75 0 0 0-1.355-.149L7.075 11.25H5.5a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 .643-.364l.661-1.102.984 2.953a.75.75 0 0 0 1.423 0l1.186-3.556 1.375 5.5a.75.75 0 0 0 1.399.154l1.793-3.585H18.5a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0-.67.415l-1.094 2.186z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PulseRectangle_01;
