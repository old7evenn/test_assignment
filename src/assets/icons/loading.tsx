export const Loading = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      <path
        d="M24 2.4C24 1.07 25.08 -0.01 26.4 0.12C30.3 0.51 34.05 1.85 37.33 4.04C41.28 6.68 44.36 10.43 46.17 14.82C47.99 19.2 48.46 24.03 47.54 28.68C46.61 33.34 44.33 37.61 40.97 40.97C37.61 44.33 33.34 46.61 28.68 47.54C24.03 48.46 19.2 47.99 14.82 46.17C10.43 44.36 6.68 41.28 4.04 37.33C1.85 34.05 0.51 30.3 0.12 26.4C-0.01 25.08 1.07 24 2.4 24C3.73 24 4.78 25.08 4.95 26.39C5.32 29.34 6.37 32.18 8.04 34.67C10.15 37.82 13.14 40.29 16.65 41.74C20.16 43.19 24.02 43.57 27.75 42.83C31.47 42.09 34.89 40.26 37.58 37.58C40.26 34.89 42.09 31.47 42.83 27.75C43.57 24.02 43.19 20.16 41.74 16.65C40.29 13.14 37.82 10.15 34.67 8.04C32.18 6.37 29.34 5.32 26.39 4.95C25.08 4.78 24 3.73 24 2.4Z"
        fill="#00BDD3"
      />
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 0 0"
        to="360"
        dur="1s"
        repeatCount="indefinite"
      />
    </svg>
  )
}
