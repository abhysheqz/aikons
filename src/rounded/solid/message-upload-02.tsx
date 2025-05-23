import React from "react";
const MessageUpload_02: React.FC<
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
        d="M20.506 10.125a1 1 0 1 1-2 0v-4.5h-.594c-.176 0-.392 0-.568-.022h-.004c-.126-.016-.702-.088-.976-.653-.275-.567.027-1.067.092-1.176l.002-.004c.093-.153.227-.324.337-.464l.024-.03c.294-.376.676-.86 1.057-1.251.19-.195.407-.397.638-.556.205-.14.555-.344.986-.344s.78.203.986.344c.231.16.448.36.638.556.38.39.763.875 1.057 1.25l.024.03c.11.141.244.312.337.465l.002.004c.065.109.367.609.092 1.176-.274.565-.85.637-.977.653h-.003a5 5 0 0 1-.568.022h-.582z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.014 5.604a2.6 2.6 0 0 0 1.503 1.337c.253.09.38.136.434.214.055.078.055.192.055.421v2.549a2.5 2.5 0 0 0 5 0c0-.033 0-.05.05-.125.096-.148.347-.17.468-.04.062.065.062.069.064.077q.087.497.12 1.01c.056.863.056 1.755 0 2.617-.298 4.61-3.921 8.296-8.488 8.6a34 34 0 0 1-4.44 0 5.6 5.6 0 0 1-1.722-.394l-.23-.095c-.136-.055-.204-.083-.282-.073s-.137.053-.257.141l-.095.07c-.793.585-1.793.994-3.213.96l-.046-.001c-.274-.007-.565-.014-.804-.06-.286-.055-.641-.194-.863-.573-.242-.412-.145-.828-.051-1.09.088-.248.242-.539.398-.836l.022-.04c.466-.884.596-1.606.347-2.088-.833-1.256-1.581-2.804-1.692-4.52a21 21 0 0 1 0-2.618c.298-4.61 3.92-8.296 8.488-8.6a34 34 0 0 1 4.44 0q.177.014.351.03c.361.039.541.058.62.18.077.123.005.329-.14.74-.336.96-.189 1.83-.037 2.207M8 11.625a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2zm3.996 0a1 1 0 1 0 0 2h.008a1 1 0 1 0 0-2zm3.995 0a1 1 0 1 0 0 2H16a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MessageUpload_02;
