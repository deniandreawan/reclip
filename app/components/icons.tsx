type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
	logo: (props: IconProps) => (
		<svg
			width="400"
			height="400"
			viewBox="0 0 400 400"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<circle cx="100" cy="100" r="100" fill="white" />
			<circle cx="300" cy="100" r="100" fill="white" />
			<circle cx="100" cy="300" r="100" fill="white" />
		</svg>
	),
};
