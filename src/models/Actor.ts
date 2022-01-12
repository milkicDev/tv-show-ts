export default interface Actor {
	person: {
		id: number
		url: string
		name: string
		country: {
			name: string
			code: string
			timezone: string
		}
		birthday: string
		deathday: string
		gender: string
		image: {
			medium: string
			original: string
		}
		_links: {
			self: {
				href: string
			}
		}
	}
	character: {
		id: number
		url: string
		name: string
		image: string
		_links: {
			self: {
				href: string
			}
		}
	}
	self: boolean
	voice: boolean
}
