// Test away!
import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';

test('Controls renders correctly', () => {
    render(<Controls />);
});

test('able to close gate when gate is set to open', async () => {
    const toggleClosedMock = jest.fn();

    const { getByText } = render(
        <Controls toggleClosed={toggleClosedMock} closed={false} />
    );

    await fireEvent.click(getByText(/close gate/i));

    expect(toggleClosedMock).toHaveBeenCalled();
});

test('able to open gate when gate is set to closed', async () => {
    const toggleClosedMock = jest.fn();

    const { getByText } = render(
        <Controls toggleClosed={toggleClosedMock} closed={true} />
    );

    await fireEvent.click(getByText(/open gate/i));

    expect(toggleClosedMock).toHaveBeenCalled();
});

test('able to lock gate when gate is closed and unlocked', async () => {
    const toggleLockedMock = jest.fn();

    const { getByText } = render(
        <Controls toggleLocked={toggleLockedMock} closed={true} />
    );

    await fireEvent.click(getByText(/lock gate/i));

    expect(toggleLockedMock).toHaveBeenCalled();

});

test('able to unlock gate when gate is closed and locked', async () => {
    const toggleUnlockedMock = jest.fn();

    const { getByText } = render(
        <Controls toggleLocked={toggleUnlockedMock} closed={true} locked={true} />
    );

    await fireEvent.click(getByText(/unlock gate/i));

    expect(toggleUnlockedMock).toHaveBeenCalled();

});
