import React from "react";
const AiVisionRecognition: React.FC<
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
        d="M22 12s-3 7-10 7-10-7-10-7 3-7 10-7c6.5 0 10 7 10 7Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.677 8.677a.383.383 0 0 1 .646 0l.436.685a6.1 6.1 0 0 0 1.88 1.88l.684.435a.383.383 0 0 1 0 .646l-.685.436a6.1 6.1 0 0 0-1.88 1.88l-.435.684a.383.383 0 0 1-.646 0l-.436-.685a6.1 6.1 0 0 0-1.88-1.88l-.684-.435a.383.383 0 0 1 0-.646l.685-.436a6.1 6.1 0 0 0 1.88-1.88z"
      />
    </svg>
  );
};
export default AiVisionRecognition;
