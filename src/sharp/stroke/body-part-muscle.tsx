import React from "react";
const BodyPartMuscle: React.FC<
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
        d="M2 12.665c2.306-2.22 6.466-2.051 8.503-.313m-2.308 2.092c1.972-2.5 4.97-2.582 7.206-1.164-.84-1.105-.728-2.512-1.038-4.522l-1.83-2.57c-2.468.486-3.404.411-4.521-.393-.693-.546-.457-1.343.155-2.002.894-.984 1.463-1.773 2.221-2.017.268-.086.556-.055.832-.002 1.335.256 2.325.633 3.784.949 2.325 3.984 3.858 6.42 5.919 10.06.736 1.3 1.348 2.817.954 4.26-.161.588-.55 1.039-1.069 1.358-4.07 2.507-7.725 2.959-10.595 1.733-2.53 2.536-6.748 1.67-8.2-.053"
      />
    </svg>
  );
};
export default BodyPartMuscle;
