import React from 'react';

// Assuming TableCard is imported from somewhere
// import TableCard from './TableCard';

const TableCardGrid = ({ cards = [] }) => {
  return (
    <main className="grid h-96 p-4 bg-gray-50 overflow-y-auto grid-cols-[repeat(auto-fit,minmax(250px,auto))] gap-4 rounded-s rounded-t-none border-t-0">
      {cards.map((card, idx) => (
        <TableCard key={idx} {...card} />
      ))}
    </main>
  );
};

export default TableCardGrid;