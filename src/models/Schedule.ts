import Show from './Show';

export default interface Schedule {
  id: number
	url: string
	name: string
	season: number
	number: number
	type: string
	airdate: string
	airtime: string
	airstamp: string
	runtime: number
	image: string | null
	summary: string | null
	_links: {
    self: {
      href: string
		}
	}

  show: Show
}
