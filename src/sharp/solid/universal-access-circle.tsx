import React from "react";
const UniversalAccessCircle: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m9.25-5.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M8.515 8.143l-.857-.514-1.03 1.715.858.514c.72.433 1.578.755 2.515.946v3.074l-1.213 4.85 1.94.486L11.783 15h.438l1.053 4.213 1.94-.485-1.212-4.851v-3.074c.937-.19 1.794-.513 2.515-.946l.857-.514-1.03-1.715-.857.514c-.852.512-2.08.858-3.485.858s-2.633-.346-3.486-.858"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UniversalAccessCircle;
