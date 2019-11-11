import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';

test('Dashboard renders correctly', () => {
    render(<Dashboard />);
});
