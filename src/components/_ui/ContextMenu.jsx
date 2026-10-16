"use client"

import styled from 'styled-components';

const CustomContextMenu = ({visible, x, y, onOptionClick}) => {
	if (!visible) return null;

	return (
		<ContextMenuWrapper style={{top: y, left: x}}>
			<MenuList>
				<MenuItem onClick={() => onOptionClick('Option 1')}>Option 1</MenuItem>
				<MenuItem onClick={() => onOptionClick('Option 2')}>Option 2</MenuItem>
				<MenuItem onClick={() => onOptionClick('Option 3')}>Option 3</MenuItem>
			</MenuList>
		</ContextMenuWrapper>
	);
};

const ContextMenuWrapper = styled.div`
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
`;

const MenuList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 10px 0;
`;

const MenuItem = styled.li`
    padding: 8px 16px;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }
`;

export default CustomContextMenu;
