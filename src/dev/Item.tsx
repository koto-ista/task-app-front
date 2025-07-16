import { useSortable } from '@dnd-kit/sortable';
import React from 'react';

type SortableItemProps = ItemType;

export type ItemType = {
  id: string;
  heading: string;
  description: string;
};

export function Item({ heading, description }: ItemType) {
    return (
      <div className="w-full flex flex-col gap-4 rounded-md bg-white p-4 shadow-md">
        <p className="font-bold text-2xl">{heading}</p>
        <p className="text-gra7-700 font-thin">{description}</p>
      </div>
    );
  }
  
export function SortableItem(props: SortableItemProps) {
  const { id, heading, description } = props;
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${Math.round(
          transform.y
        )}px, 0) scaleX(${transform.scaleX})`
      : "",
    transition
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Item id={id} heading={heading} description={description} />
    </div>
  );
}