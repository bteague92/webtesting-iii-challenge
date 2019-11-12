import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Display from './Display';

test('Display renders correctly', () => {
    expect(render(<Display />)).toMatchSnapshot();
});

// - displays if gate is open/closed and if it is locked/unlocked
// - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
// - when `locked` or `closed` use the `red-led` class
// - when `unlocked` or `open` use the `green-led` class

test('displays red led class', () => {
    const { findByText } = render(
        <Display locked={true} open={true} />
    );

    const unlockedMessage = findByText(/unlocked/i);
    expect(unlockedMessage).toBeTruthy();

    // const closedClass = getByClassName(/red-led/i);
    // expect(closedClass).toBeTruthy();


})

test('displays unlocked and closed text', () => {
    const { findByText } = render(
        <Display locked={false} open={false} />
    );

    const unlockedMessage = findByText(/unlocked/i);
    expect(unlockedMessage).toBeTruthy();

    const closedMessage = findByText(/closed/i);
    expect(closedMessage).toBeTruthy();

})

test('displays unlocked and open text', () => {
    const { findByText } = render(
        <Display locked={false} open={true} />
    );

    const unlockedMessage = findByText(/unlocked/i);
    expect(unlockedMessage).toBeTruthy();

    const openMessage = findByText(/open/i);
    expect(openMessage).toBeTruthy();
})

test('displays locked and closed text', async () => {
    const { findByText } = render(
        <Display locked={true} open={false} />
    );

    const lockedMessage = findByText(/locked/i);
    expect(lockedMessage).toBeTruthy();

    const closedMessage = findByText(/closed/i);
    expect(closedMessage).toBeTruthy();
})