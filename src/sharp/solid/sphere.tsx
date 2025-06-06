import React from "react";
const Sphere: React.FC<
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
        d="M14.25 11A2.25 2.25 0 0 0 13 8.984V2h-2v6.984A2.25 2.25 0 1 0 14.25 11"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.257 11.596C1.47 5.846 6.198 1.25 12 1.25s10.53 4.596 10.743 10.347a3 3 0 0 1 .006.268l.001.135c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12a11 11 0 0 1 .007-.404M12 3.204a8.8 8.8 0 0 0-8.028 5.197c1.323-.666 3.05-1.146 4.972-1.394l.249 1.94c-1.905.246-3.487.727-4.562 1.317-1.058.581-1.383 1.12-1.422 1.463l-.003.114c.013.202.122.476.469.813.376.364.97.736 1.785 1.07 1.625.666 3.936 1.1 6.54 1.1s4.916-.434 6.54-1.1c.815-.334 1.41-.706 1.785-1.07.348-.337.456-.61.47-.813l-.004-.114c-.039-.342-.364-.882-1.422-1.463-1.075-.59-2.657-1.071-4.562-1.316l.25-1.94c1.92.247 3.649.727 4.971 1.393A8.8 8.8 0 0 0 12 3.204"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sphere;
