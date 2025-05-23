import React from "react";
const TimeQuarterPass: React.FC<
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
        d="M13 9.984V6h-2v3.984A2.25 2.25 0 1 0 14.016 13H16v-2h-1.984A2.26 2.26 0 0 0 13 9.984"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25h-.977v1.955h.978A8.795 8.795 0 0 1 20.796 12v.977h1.955V12c0-5.937-4.813-10.75-10.75-10.75M8.8 4.12l.916-.342-.685-1.831-.915.342q-.345.129-.68.282l-.89.405.812 1.779.889-.406q.271-.123.553-.229M5.93 5.903l.712-.668-1.336-1.427-.713.668q-.249.234-.483.483l-.669.712L4.866 7.01l.67-.713q.19-.203.393-.393M3.961 8.649l.402-.89-1.781-.805-.402.891q-.138.306-.257.622l-.345.915 1.83.688.344-.914q.097-.257.21-.507m-.753 3.264.03-.977-1.953-.06-.03.976q-.012.337 0 .672l.03.977 1.953-.06-.03-.978a9 9 0 0 1 0-.55m18.502 3.971.342-.915-1.831-.684-.342.915q-.113.303-.248.594l-.41.887 1.775.82.41-.888q.165-.357.304-.729m-17.952-.649-.346-.914-1.828.693.347.913q.12.32.261.63l.405.889 1.78-.81-.405-.889a9 9 0 0 1-.214-.512m15.794 4.14.665-.716-1.431-1.33-.666.716q-.21.227-.437.438l-.714.666 1.333 1.43.715-.667q.277-.258.535-.537M5.55 18.093l-.67-.71-1.423 1.34.671.711q.22.235.455.454l.713.67 1.338-1.425-.713-.67a9 9 0 0 1-.371-.37m10.607 3.725.89-.402-.804-1.781-.89.402a9 9 0 0 1-.503.208l-.915.345.69 1.829.914-.345q.314-.118.618-.256m-7.873-1.776-.891-.402-.802 1.783.89.4q.294.133.594.247l.915.345.691-1.828-.914-.346a9 9 0 0 1-.483-.2m3.223.748-.976-.034-.068 1.954.977.034q.373.012.746 0l.977-.034-.068-1.954-.976.034a9 9 0 0 1-.612 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TimeQuarterPass;
