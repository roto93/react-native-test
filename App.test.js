import React from 'react'
import App from "./App";
import { render, cleanup, fireEvent } from '@testing-library/react-native'
import renderer from 'react-test-renderer'

afterEach(cleanup);

test("snapshot", () => {
    const app = renderer.create(<App />).toJSON()
    expect(app).toMatchSnapshot()
})

test("can button1 change text color in Article?", () => {
    const { getByTestId } = render(<App />)
    const el = getByTestId('btn-blue')

    fireEvent.press(el)
    const article1 = getByTestId('article1')

    expect(article1.props.style.color).toBe('lightblue')
})

test("can button2 change text color in Article?", () => {
    const { getByTestId } = render(<App />)
    const el = getByTestId('btn-tomato')

    fireEvent.press(el)
    const article1 = getByTestId('article1')

    expect(article1.props.style.color).toBe('tomato')
})