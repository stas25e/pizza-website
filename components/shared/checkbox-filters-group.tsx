'use client'

import React from 'react'
import { useSet } from 'react-use'

import { FilterCheckbox, FilterChecboxProps } from './filter-checkbox'
import { Input } from '../ui/input'

type Item = FilterChecboxProps

interface Props {
	title: string
	items: Item[]
	defaultItems: Item[]
	limit?: number
	searchInputPlaceholder?: string
	className?: string
	onChange?: (values: string[]) => void
	defaultValue?: string[]
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
	title,
	items,
	defaultItems,
	limit = 5,
	searchInputPlaceholder = 'Поиск...',
	className,
	onChange,
	defaultValue,
}) => {
	const [showAll, setShowAll] = React.useState(false)
	// const [selected, { add, toggle }] = useSet<string>(new Set([]))
	const [searchValue, setSearchValue] = React.useState('')

	const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	// const onCheckedChange = (value: string) => {
	// 	toggle(value)
	// }

	const list = showAll
		? items.filter(item =>
				item.text.toLowerCase().includes(searchValue.toLowerCase())
		  )
		: defaultItems.slice(0, limit)

	// React.useEffect(() => {
	// 	if (defaultValue) {
	// 		defaultValue.forEach(add)
	// 	}
	// }, [defaultValue?.length])

	// React.useEffect(() => {
	// 	onChange?.(Array.from(selected))
	// }, [selected])

	return (
		<div className={className}>
			<p className='font-bold mb-3'>{title}</p>

			{showAll && (
				<div className='mb-5'>
					<Input
						onChange={onChangeSearchInput}
						placeholder={searchInputPlaceholder}
						className='bg-gray-50 border-none'
					/>
				</div>
			)}

			<div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
				{list.map((item, index) => (
					<FilterCheckbox
						key={index}
						text={item.text}
						value={item.value}
						endAdornment={item.endAdornment}
						// checked={selected?.has(item.value)}
					/>
				))}
			</div>

			{items.length > limit && (
				<div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
					<button
						onClick={() => setShowAll(!showAll)}
						className='text-primary mt-3'
					>
						{showAll ? 'Скрыть' : '+ Показать все'}
					</button>
				</div>
			)}
		</div>
	)
}
