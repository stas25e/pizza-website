'use client'

import React from 'react'
import { Title } from './title'
import { Input } from '../ui'
import { FilterCheckbox } from './filter-checkbox'
import { RangeSlider } from './range-slider'
import { CheckboxFiltersGroup } from './checkbox-filters-group'

interface Props {
	className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

			<div className='flex flex-col gap-4'>
				<FilterCheckbox text='Можно собирать' value='1' />
				<FilterCheckbox text='Новинки' value='2' />
			</div>

			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-5'>
					<Input
						type='number'
						placeholder='0'
						min={0}
						max={2000}
						defaultValue={0}
					/>
					<Input
						type='number'
						min={100}
						max={2000}
						defaultValue={2000}
						placeholder='2000'
					/>
				</div>
				<RangeSlider
					className='m-auto'
					min={0}
					max={2000}
					step={100}
					value={[0, 2000]}
				/>

				<CheckboxFiltersGroup
					title='Ингредиенты'
					className='mt-10 border-y border-y-neutral-100 pt-6 pb-7'
					limit={6}
					items={[
						{
							text: 'Моцарелла',
							value: '1',
						},
						{
							text: 'Цыпленок',
							value: '2',
						},
						{
							text: 'Ветчина',
							value: '3',
						},
						{
							text: 'Томаты',
							value: '4',
						},
						{
							text: 'Пепперони',
							value: '5',
						},
						{
							text: 'Пармезан',
							value: '6',
						},
						{
							text: 'Ананасы',
							value: '7',
						},
						{
							text: 'Лук',
							value: '8',
						},
						{
							text: 'Лук',
							value: '9',
						},
						{
							text: 'Лук',
							value: '10',
						},
					]}
					defaultItems={[
						{
							text: 'Моцарелла',
							value: '1',
						},
						{
							text: 'Цыпленок',
							value: '2',
						},
						{
							text: 'Ветчина',
							value: '3',
						},
						{
							text: 'Томаты',
							value: '4',
						},
						{
							text: 'Пепперони',
							value: '5',
						},
						{
							text: 'Пармезан',
							value: '6',
						},
					]}
				/>
			</div>
		</div>
	)
}
