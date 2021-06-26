import React from 'react'
import Article from "./Article";
import renderer from 'react-test-renderer'
import { render, cleanup, fireEvent } from '@testing-library/react-native'

afterEach(cleanup);

it("should change text color to the input color prop: red", () => {
    const { getByTestId } = render(<Article color={'red'} />)
    const el = getByTestId('article1')
    expect(el.props.style.color).toBe('red')
})

it("should change text color to the input color prop: #643791", () => {
    const { getByTestId } = render(<Article color={'#643791'} />)
    const el = getByTestId('article1')
    expect(el.props.style.color).toBe('#643791')
})