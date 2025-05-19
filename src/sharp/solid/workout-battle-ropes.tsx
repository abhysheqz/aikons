import React from "react";
const WorkoutBattleRopes: React.FC<
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
        d="M5.75 5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.175 7.598a1.125 1.125 0 0 0-1.33-.223l-.689-1.332a2.625 2.625 0 0 1 3.11.526c.094.1.185.219.299.369l.022.03-.596.454.596-.455 1.027 1.348c.207.272.534.435.886.435v1.5a2.61 2.61 0 0 1-2.08-1.026l.597-.454-.596.454-1.027-1.348a4 4 0 0 0-.22-.278"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m13.165 6.828-2.806 1.403-4.784-.478a.75.75 0 0 0-.771.467l-2 5a.75.75 0 0 0 .166.81l3.28 3.28v3.939h1.5v-4.25a.75.75 0 0 0-.22-.53l-.967-.968 1.496-3.904 1.921 1.85a.75.75 0 0 0 .52.21H12v-1.5h-1.197l-2.16-2.081.187-.49 1.595.16a.75.75 0 0 0 .41-.076l3-1.5zM13.598 13.8a6 6 0 0 1 3.3 1.91l.678.767c.995 1.127 2.173 1.772 3.674 1.772v-1.5c-1.07 0-1.839-.46-2.55-1.265l-.679-.767A7.5 7.5 0 0 0 13.9 12.33z"
      />
    </svg>
  );
};
export default WorkoutBattleRopes;
