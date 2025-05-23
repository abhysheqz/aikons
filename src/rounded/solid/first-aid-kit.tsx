import React from "react";
const FirstAidKit: React.FC<
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
        d="M15.053 5.375H8.947c-1.605 0-2.881 0-3.881.126-1.028.13-1.877.404-2.554 1.038-.683.64-.985 1.456-1.126 2.442-.136.946-.136 2.15-.136 3.648v1.992c0 1.497 0 2.702.136 3.648.141.986.443 1.801 1.126 2.442.677.634 1.526.908 2.554 1.038 1 .126 2.276.126 3.881.126h6.106c1.605 0 2.881 0 3.881-.126 1.028-.13 1.877-.404 2.554-1.038.683-.64.985-1.456 1.126-2.442.136-.946.136-2.15.136-3.648V12.63c0-1.497 0-2.702-.136-3.648-.141-.986-.443-1.801-1.126-2.442-.677-.634-1.526-.908-2.554-1.038-1-.126-2.276-.126-3.881-.126M13 10.625a1 1 0 1 0-2 0v2H9a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.096 4.824C8.033 5.114 8 5.526 8 6.125a1 1 0 0 1-2 0c0-.642.032-1.226.143-1.73.113-.516.322-1.01.72-1.408.396-.397.89-.606 1.407-.719.504-.11 1.088-.143 1.73-.143h4c.642 0 1.226.032 1.73.143.516.113 1.01.322 1.408.72.397.396.606.89.719 1.407.11.504.143 1.088.143 1.73a1 1 0 1 1-2 0c0-.599-.033-1.01-.096-1.301-.062-.28-.138-.38-.18-.423-.043-.042-.143-.118-.423-.18-.29-.063-.702-.096-1.301-.096h-4c-.599 0-1.01.033-1.301.096-.28.062-.38.138-.423.18-.042.043-.118.143-.18.423"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FirstAidKit;
