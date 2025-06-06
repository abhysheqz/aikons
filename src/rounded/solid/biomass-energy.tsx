import React from "react";
const BiomassEnergy: React.FC<
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
        d="M21 14.499C21 19.253 16.909 23 12 23s-9-3.747-9-8.501v-.276c0-.317 0-.662.044-.943.05-.319.2-.833.74-1.12.54-.286 1.079-.126 1.347-.018.307.123.589.31.802.47.221.166.416.338.553.466.066.061.184.178.23.224l.006.006a1 1 0 0 1-.03 1.414l-1.455 1.455C6.03 18.922 8.715 21 12 21c3.928 0 7-2.97 7-6.501a1 1 0 1 1 2 0M3 9.501C3 4.747 7.091 1 12 1c4.91 0 9 3.747 9 8.501v.276c0 .317 0 .662-.044.943-.05.319-.2.833-.74 1.12-.539.286-1.078.126-1.347.018a3.7 3.7 0 0 1-.801-.47 7 7 0 0 1-.783-.69l-.006-.006a1 1 0 0 1 .03-1.414l1.454-1.455C17.972 5.078 15.285 3 12 3 8.073 3 5 5.97 5 9.501a1 1 0 1 1-2 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.656 5.861c.208-.09.473-.154.78-.076.307.079.51.264.65.446.107.141.202.32.28.466l.016.029c.792 1.478 1.543 3.5 1.332 5.293-.11.924-.479 1.812-1.246 2.502-.625.562-1.466.95-2.53 1.15.056.514.164 1.05.34 1.602a.75.75 0 0 1-1.43.454 9.7 9.7 0 0 1-.438-2.309q.144.111.299.221a.75.75 0 0 0 .511.135q.375-.038.717-.103c-.187-1.717.216-3.19.712-4.172a.75.75 0 0 0-1.339-.677c-.569 1.126-1.02 2.735-.9 4.596-.977-.756-1.613-1.577-1.928-2.451-.35-.97-.278-1.927.044-2.798.626-1.692 2.205-3.11 3.63-4.02l.028-.019c.14-.09.31-.198.472-.269"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BiomassEnergy;
