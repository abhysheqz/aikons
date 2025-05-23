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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 12.946c2.306-2.219 6.466-2.05 8.503-.312m-2.308 2.09c1.972-2.5 4.97-2.58 7.206-1.162-.84-1.106-.728-2.513-1.038-4.523l-1.83-2.57c-2.468.486-3.404.412-4.521-.392-.693-.547-.457-1.343.155-2.003C9.06 3.09 9.63 2.3 10.388 2.057c.268-.085.556-.054.832-.002 1.057.203 1.898.482 2.927.746a2.1 2.1 0 0 1 1.302.963c2.082 3.547 3.547 5.898 5.474 9.3.736 1.3 1.348 2.817.954 4.26-.161.588-.55 1.039-1.069 1.358-4.07 2.507-7.725 2.959-10.595 1.733-2.53 2.536-6.748 1.67-8.2-.053"
      />
    </svg>
  );
};
export default BodyPartMuscle;
