import React from "react";
const Triangle_02: React.FC<
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
        d="M4.186 9.419a1 1 0 0 1 1.395-.233l3.5 2.5a1 1 0 0 1-1.162 1.628l-3.5-2.5a1 1 0 0 1-.233-1.395M19.814 9.419a1 1 0 0 0-1.395-.233l-3.5 2.5a1 1 0 1 0 1.162 1.628l3.5-2.5a1 1 0 0 0 .233-1.395M10.274 2.977c.772-1.323 2.684-1.323 3.455 0l2.637 4.519a1 1 0 1 1-1.728 1.008l-2.636-4.52-2.636 4.52a1 1 0 0 1-1.728-1.008zM5.45 13.105a1 1 0 0 1 .447 1.342L3.62 19h4.882a1 1 0 0 1 0 2H3.62a2 2 0 0 1-1.79-2.895l2.277-4.552a1 1 0 0 1 1.342-.448m13.106 0a1 1 0 0 1 1.341.447l2.277 4.553A2 2 0 0 1 20.383 21h-4.881a1 1 0 1 1 0-2h4.882l-2.277-4.553a1 1 0 0 1 .448-1.342M12 17a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Triangle_02;
