import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';

test('Dashboard renders correctly', () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
});

test('is displaying controls component', async () => {
    const { queryByTestId } = render(
        <Dashboard />
    );

    const element = queryByTestId('controlsTest');

    expect(element).toBeTruthy();

});

test('is displaying display component', async () => {
    const { queryByTestId } = render(
        <Dashboard />
    );

    const element = queryByTestId('displayTest');

    expect(element).toBeTruthy();

});