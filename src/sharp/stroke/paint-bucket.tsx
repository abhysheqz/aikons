import React from "react";
const PaintBucket: React.FC<
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
        strokeWidth={1.5}
        d="M10.918 4.026 19 12.129l-6.061 6.078c-1.783 1.788-2.675 2.682-3.77 2.78q-.27.025-.543 0c-1.094-.098-1.986-.992-3.769-2.78l-2.02-2.026a2.87 2.87 0 0 1 0-4.052m8.081-8.103-8.081 8.103m8.081-8.103L8.898 2M2.837 12.13h15.428"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 20a2 2 0 1 1-4 0c0-1.105 2-3 2-3s2 1.895 2 3Z"
      />
    </svg>
  );
};
export default PaintBucket;
