import React from "react";
const CallInternal: React.FC<
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
        d="M5.877 1.553a1 1 0 0 0-1.602-.26L1.861 3.707a2.88 2.88 0 0 0-.858 2.17c.444 9.244 7.859 16.658 17.103 17.102a2.88 2.88 0 0 0 2.17-.858l2.413-2.414a1 1 0 0 0-.26-1.601l-6-3a1 1 0 0 0-1.154.187l-3.826 3.826a16.08 16.08 0 0 1-6.586-6.586l3.826-3.826a1 1 0 0 0 .188-1.154zm14.313.74a1 1 0 0 0-.871-.28c-.392.065-.544.503-.544.901V4.5H15.19V2.914c0-.398-.152-.836-.544-.9a1 1 0 0 0-.87.279l-2.5 2.5a1 1 0 0 0 0 1.414l2.5 2.5c.236.237.563.33.87.28.392-.065.543-.503.543-.901V6.5h3.586v1.586c0 .398.152.836.544.9a1 1 0 0 0 .87-.279l2.5-2.5a1 1 0 0 0 0-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CallInternal;
