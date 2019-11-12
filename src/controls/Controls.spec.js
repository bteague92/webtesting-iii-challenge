// Test away!
import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';

test('Controls renders correctly', () => {
    expect(render(<Controls />)).toMatchSnapshot();
});

// - provide buttons to toggle the `closed` and `locked` states.
// - buttons' text changes to reflect the state the door will be in if clicked
// - the closed toggle button is disabled if the gate is locked
// - the locked toggle button is disabled if the gate is open

test('open button is disabled when gate is locked', () => {
    const toggleOpenMock = jest.fn();

    const { getByText } = render(
        <Controls toggleClosed={toggleOpenMock} disabled={"locked"} closed={true} locked={true} />
    );

    fireEvent.click(getByText(/open gate/i));

    expect(toggleOpenMock).toHaveBeenCalledTimes(0);
});

test('lock button is disabled if gate is open', () => {
    const toggleLockMock = jest.fn();

    const { getByText } = render(
        <Controls toggleClosed={toggleLockMock} disabled={"open"} closed={false} locked={false} />
    );

    fireEvent.click(getByText(/lock gate/i));

    expect(toggleLockMock).toHaveBeenCalledTimes(0);
});

test('able to close gate when gate is set to open', () => {
    const toggleClosedMock = jest.fn();

    const { getByText } = render(
        <Controls toggleClosed={toggleClosedMock} closed={false} />
    );

    const closeButton = getByText(/close gate/i);
    expect(closeButton).toBeTruthy();

    fireEvent.click(getByText(/close gate/i));

    expect(toggleClosedMock).toHaveBeenCalled();
});

test('able to open gate when gate is set to closed', () => {
    const toggleClosedMock = jest.fn();

    const { getByText } = render(
        <Controls toggleClosed={toggleClosedMock} closed={true} />
    );

    const openButton = getByText(/open gate/i);
    expect(openButton).toBeTruthy();

    fireEvent.click(getByText(/open gate/i));

    expect(toggleClosedMock).toHaveBeenCalled();
});

test('able to lock gate when gate is closed and unlocked', () => {
    const toggleLockedMock = jest.fn();

    const { getByText } = render(
        <Controls toggleLocked={toggleLockedMock} closed={true} />
    );

    const lockButton = getByText(/lock gate/i);
    expect(lockButton).toBeTruthy();

    fireEvent.click(getByText(/lock gate/i));

    expect(toggleLockedMock).toHaveBeenCalled();

});

test('able to unlock gate when gate is closed and locked', () => {
    const toggleUnlockedMock = jest.fn();

    const { getByText } = render(
        <Controls toggleLocked={toggleUnlockedMock} closed={true} locked={true} />
    );

    const unlockButton = getByText(/unlock gate/i);
    expect(unlockButton).toBeTruthy();

    fireEvent.click(getByText(/unlock gate/i));

    expect(toggleUnlockedMock).toHaveBeenCalled();

});
