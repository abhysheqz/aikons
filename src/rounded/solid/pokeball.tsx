import React from "react";
const Pokeball: React.FC<
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
        d="M12 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m1.954 0a8.796 8.796 0 0 0 17.591 0c0-.105 0-.158-.01-.196a.3.3 0 0 0-.312-.222c-.04.003-.09.02-.191.056-1.635.569-3.144.985-4.595 1.248-.295.054-.443.08-.543.015-.1-.066-.141-.241-.224-.592a3.001 3.001 0 0 0-5.84-.006c-.084.35-.126.525-.226.59-.1.066-.248.04-.543-.015-1.443-.264-2.946-.678-4.576-1.241-.122-.042-.182-.063-.234-.062a.31.31 0 0 0-.28.198c-.017.05-.017.109-.017.227"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pokeball;
