import React from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";

type SortableItemProps = ItemType;

export function Item({ heading, description }: ItemType) {
  return (
    <div className="w-full flex flex-col gap-4 rounded-md bg-white p-4 shadow-md">
      <p className="font-bold text-2xl">{heading}</p>
      <p className="text-gra7-700 font-thin">{description}</p>
    </div>
  );
}

function SortableItem(props: SortableItemProps) {
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

type ItemType = {
  id: string;
  heading: string;
  description: string;
};

type ContainerProps = {
  containerId: string;
  items: Array<ItemType>;
};

export function Container(props: ContainerProps) {
  const { containerId, items } = props;

  const { setNodeRef } = useDroppable({
    id: containerId
  });

  return (
    <SortableContext
      id={containerId}
      items={items}
      strategy={verticalListSortingStrategy}
    >
      <div ref={setNodeRef} className="flex flex-col gap-4 bg-gray-200 p-4">
        <h1 className="text-center font-black text-4xl text-gray-700">
          {containerId}
        </h1>
        {items.map((item) => (
          <SortableItem key={item.id} {...item} />
        ))}
      </div>
    </SortableContext>
  );
}
