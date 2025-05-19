import React from "react";
const Css_3: React.FC<
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
        d="M3.5 1.75a.75.75 0 0 0-.745.838l2 17a.75.75 0 0 0 .508.624l6 2a.75.75 0 0 0 .443.01l7-2a.75.75 0 0 0 .539-.634l2-17a.75.75 0 0 0-.745-.838zm4 4a.75.75 0 0 0 0 1.5h5.98l-5.83 3.087A.75.75 0 0 0 8 11.75h7.171l-.367 3.669L12 16.22l-2.804-.801-.15-1.494a.75.75 0 0 0-1.492.15l.2 2a.75.75 0 0 0 .54.646l3.5 1a.75.75 0 0 0 .412 0l3.5-1a.75.75 0 0 0 .54-.646l.5-5A.75.75 0 0 0 16 10.25h-4.98l5.83-3.087a.75.75 0 0 0-.35-1.413z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Css_3;
