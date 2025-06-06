import React from "react";
const CoffeeBeans: React.FC<
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
        d="M20.021 8.408c-1.237-1.04-2.904-1.337-4.576-1.059-1.812.302-3.695 1.285-5.254 2.843s-2.54 3.442-2.842 5.253c-.226 1.354-.073 2.705.544 3.827.484-.078.88-.155 1.12-.207q.236-.077.48-.15c.699-.213 1.442-.439 2.198-.978.906-.645 1.855-1.78 2.464-4.012.995-3.648 3.996-5.14 5.462-5.444q.154-.04.404-.073"
      />
      <path
        fill="currentColor"
        d="M21.175 9.86c-.685-.017-1.085.046-1.182.073l-.056.014c-1.062.212-3.522 1.394-4.335 4.373-.686 2.517-1.814 3.965-3.04 4.839-.978.697-2.006 1.006-2.711 1.217q-.226.067-.402.125l-.074.02q-.155.035-.387.08c1.236 1.032 2.9 1.328 4.566 1.05 1.812-.302 3.695-1.284 5.254-2.843s2.54-3.441 2.842-5.253c.217-1.302.085-2.6-.475-3.696M4.934 4.006c-.028-.097-.09-.497-.075-1.182 1.096-.56 2.395-.692 3.696-.475 1.812.302 3.695 1.284 5.254 2.843q.392.392.736.81c-1.677.404-3.331 1.275-4.769 2.527q-.222-.068-.456-.132c-2.979-.813-4.16-3.273-4.373-4.334zM8.564 9.737c-3.386-1.089-4.79-3.938-5.083-5.355a3 3 0 0 1-.073-.404C2.37 5.215 2.071 6.883 2.35 8.555c.302 1.811 1.284 3.695 2.842 5.253q.394.392.811.736c.407-1.692 1.29-3.36 2.561-4.807"
      />
    </svg>
  );
};
export default CoffeeBeans;
