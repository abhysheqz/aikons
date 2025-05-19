import React from "react";
const WorkoutGymnastics: React.FC<
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
        d="M3.25 9.355a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
      />
      <path
        fill="currentColor"
        d="m8.904 7.488-.646-4.526 1.484-.212.648 4.532.077.547 5.961 2.477a2.75 2.75 0 0 1 1.567 1.712l2.754 8.777-1.43.451-2.635-8.399-1.413 1.423-2.569 6.98-1.404-.527 2.367-6.443-4.2-1.677-1.794 3.589-1.342-.671 1.883-3.765.218-.439c.416-.839.578-1.223.642-1.612.05-.308.04-.644-.036-1.257-.033-.27-.078-.581-.132-.96"
      />
    </svg>
  );
};
export default WorkoutGymnastics;
