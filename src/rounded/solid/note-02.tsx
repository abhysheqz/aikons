import React from "react";
const Note_02: React.FC<
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
        d="M7 1.125a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.555 2.375c1.367 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v7.11c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116H12.02l-1.85-3.48-.043-.068c-.49-.78-.899-1.432-1.292-1.9-.414-.494-.89-.882-1.542-1-.924-.167-1.96.215-2.777.633-.607.31-1.185.688-1.652 1.035a4 4 0 0 1-.073-.451c-.041-.4-.041-.884-.041-1.454V9.07c0-1.368 0-2.47.117-3.337.12-.9.38-1.658.981-2.26.602-.602 1.36-.86 2.26-.981.867-.117 1.97-.117 3.337-.117zM8.872 20.148l1.4 2.636c-.287-.078-.559-.214-.896-.383l-.056-.027-3.977-1.99c-.51-.254-.943-.47-1.282-.686a4 4 0 0 1-.422-.31c.427-.326.983-.698 1.56-.992.774-.396 1.423-.566 1.828-.493.164.03.354.125.66.488.315.376.666.93 1.185 1.757M8 8.375a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Note_02;
