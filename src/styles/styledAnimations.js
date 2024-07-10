// -------------------------------------------------

// CLICK

// -------------------------------------------------

export const click = {
	show: {
		scale: 0.5,
		transition: {duration: 1.25},
	},
}

// -------------------------------------------------

// FADE

// -------------------------------------------------

export const fadeUp = {
	initial: {
		y: 100,
		opacity: 0,
	},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.5,
		},
	},
	exit: {
		y: -100,
		opacity: 0,
		transition: {
			duration: 0.75,
		},
	},
}

export const fadeDown = {
	initial: {
		y: -100,
		opacity: 0,
	},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			stiffness: 300,
			damping: 20,
			duration: 0.25,
		},
	},
	exit: {
		y: -100,
		opacity: 0,
		transition: {
			type: 'spring',
			stiffness: 300,
			damping: 20,
			duration: 0.25,
		},
	},
}

export const fadeConDown = {
	initial: {
		y: -100,
		opacity: 0,
	},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.75,
		},
	},
	exit: {
		y: -100,
		opacity: 0,
		transition: {
			duration: 0.75,
		},
	},
}

export const fadeConUp = {
	initial: {
		y: -100,
		opacity: 0,
	},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			stiffness: 300,
			damping: 20,
			duration: 0.25,
		},
	},
	exit: {
		y: -100,
		opacity: 0,
		transition: {
			type: 'spring',
			stiffness: 200,
			damping: 20,
			duration: 0.75,
		},
	},
}

export const fadeLeft = {
	initial: {
		x: 100,
	},
	show: {
		x: 0,
		transition: {
			type: 'spring',
			stiffness: 300,
			damping: 20,
			duration: 0.25,
		},
	},
	exit: {
		x: 100,
		transition: {
			type: 'spring',
			stiffness: 200,
			damping: 20,
			duration: 0.75,
		},
	},
}

export const fadeLeftToRight = {
	initial: {
		x: 100,
		opacity: 0,
	},
	show: {
		x: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			stiffness: 300,
			damping: 20,
			duration: 0.25,
		},
	},
	exit: {
		x: -100,
		opacity: 0,
		transition: {
			type: 'spring',
			stiffness: 200,
			damping: 20,
			duration: 0.75,
		},
	},
}


export const fadeRight = {
	initial: {
		x: -100,
		opacity: 0,
	},
	show: {
		x: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			stiffness: 300,
			damping: 20,
			duration: 0.25,
		},
	},
	exit: {
		x: -100,
		opacity: 0,
		transition: {
			type: 'spring',
			stiffness: 200,
			damping: 20,
			duration: 0.75,
		},
	},
}

// -------------------------------------------------

// SCALE

// -------------------------------------------------

export const scaleUp = {
	initial: {
		scale: 0.5,
	},
	show: {
		scale: 1,
		type: 'spring',
		stiffness: 300,
		damping: 20,
		duration: 0.25,
	},
	exit: {
		scale: 0.5,
		opacity: 0,
		transition: {
			duration: 0.75,
		},
	},
}

export const scaleUpCard = {
	initial: {
		scale: 0.5,
		opacity: 0,
	},
	show: {
		scale: 1,
		opacity: 1,
		transition: {
			duration: 0.25,
			staggerChildren: 0.25,
		},
	},
	exit: {
		scale: 0.5,
		opacity: 0,
		transition: {
			duration: 0.75,
		},
	},
}

export const child = {
	initial: {
		scale: 0.5,
		opacity: 0,
	},
	show: {
		scale: 1,
		opacity: 1,
		transition: {
			duration: 10.25,
		},
	},
	exit: {
		scale: 0.5,
		opacity: 0,
		transition: {
			duration: 0.75,
		},
	},
}

// -------------------------------------------------

// DIAGONALS

// -------------------------------------------------

export const fadeTopRight = {
	initial: {
		x: -50,
		y: 50,
		opacity: 0,
	},
	show: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.75,
		},
	},
	exit: {
		x: -50,
		y: -50,
		opacity: 0,
		transition: {
			duration: 0.75,
		},
	},
}

export const fadeBottomLeft = {
	initial: {
		x: 50,
		y: -50,
		opacity: 0,
	},
	show: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.75,
		},
	},
	exit: {
		x: 50,
		y: 50,
		opacity: 0,
		transition: {
			duration: 0.75,
		},
	},
}

export const fadeBottomRight = {
	initial: {
		x: -50,
		y: -50,
		opacity: 0,
	},
	show: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.75,
		},
	},
	exit: {
		x: -50,
		y: -50,
		opacity: 0,
		transition: {
			duration: 0.75,
		},
	},
}

export const fadeTopLeft = {
	initial: {
		x: 50,
		y: 50,
		opacity: 0,
	},
	show: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.75,
		},
	},
	exit: {
		x: 50,
		y: 50,
		opacity: 0,
		transition: {
			duration: 0.75,
		},
	},
}

// -------------------------------------------------

// MISC

// -------------------------------------------------

export const accountSwipeIn = {
	initial: {
		x: -100,
		opacity: 0,
	},
	show: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
	exit: {
		x: -100,
		opacity: 0,
		transition: {
			duration: 0.75,
		},
	},
}

export const shake = {
	hover: {
		x: [0, -10, 10, -10, 10, -5, 5, -5, 5, 0],
		transition: {
			duration: 0.5,
			ease: "easeInOut"
		}
	}
}
