import React from 'react';

interface MenuItem {
    name: string;
    description: string;
    price: string;
}

const menuItems: MenuItem[] = [
    { name: 'Espresso', description: 'Strong and bold coffee.', price: '$3.00' },
    { name: 'Cappuccino', description: 'Espresso with steamed milk and foam.', price: '$4.00' },
    { name: 'Latte', description: 'Espresso with steamed milk and a light layer of foam.', price: '$4.50' },
    { name: 'Mocha', description: 'Chocolate and espresso combined with steamed milk.', price: '$5.00' },
    { name: 'Cold Brew', description: 'Smooth and refreshing cold coffee.', price: '$3.50' },
];

const Menu: React.FC = () => {
    return (
        <div className="menu">
            <h2 className="text-2xl font-bold mb-4">Our Menu</h2>
            <ul className="space-y-4">
                {menuItems.map((item, index) => (
                    <li key={index} className="flex justify-between">
                        <div>
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                        <span className="font-bold">{item.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;