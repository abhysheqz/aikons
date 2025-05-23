import React from "react";
const Carrot: React.FC<
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
        d="M15.455 8.545c-1.703-1.702-3.097-2.478-4.482-2.259-.674.107-1.25.437-1.768.838-.504.39-1.005.891-1.513 1.4l-.022.021c-.277.278-.603.657-.959 1.11l2.32 2.314a.75.75 0 0 1-1.06 1.062l-2.16-2.154a43 43 0 0 0-2.634 4.31c-.72 1.359-1.338 2.74-1.668 3.91-.164.583-.268 1.153-.258 1.662.009.501.13 1.05.535 1.455s.954.527 1.455.536c.51.01 1.08-.095 1.662-.259 1.171-.33 2.552-.948 3.91-1.668q.306-.161.612-.33L7.47 18.53a.75.75 0 0 1 1.063-1.06l2.231 2.24.006.005c1.613-.972 3.105-2.013 4.073-2.829l-2.37-2.353a.75.75 0 0 1 1.057-1.065l2.4 2.385c.347-.354.675-.705.948-1.058.4-.517.73-1.094.837-1.767.219-1.386-.556-2.78-2.26-4.483"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.293 1.293a1 1 0 0 1 1.414 0c.897.897 1.197 2.525.159 4.319a1 1 0 1 1-1.731-1.002c.672-1.162.298-1.763.158-1.903a1 1 0 0 1 0-1.414m5.692 2.722a1 1 0 0 1 0 1.414l-1.944 1.944a1 1 0 0 1-1.414-1.414l1.944-1.944a1 1 0 0 1 1.414 0m-1.597 4.12c1.794-1.039 3.422-.74 4.32.158a1 1 0 0 1-1.415 1.414c-.14-.14-.741-.514-1.903.158a1 1 0 0 1-1.002-1.73"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Carrot;
