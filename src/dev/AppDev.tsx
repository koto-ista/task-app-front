import React, { useState } from "react";
import {
  DndContext,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import type {
  DragOverEvent,
  DragStartEvent,
  UniqueIdentifier
} from "@dnd-kit/core";

import { Container } from "./Container";

//Genrate Uniqe Id
function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

//create fake data
function createData(
  length: number,
  initializer: (index: number) => any = (index: number) => index
) {
  return [...new Array(length)].map((_, index) => {
    return {
      id: uuid(),
      heading: `Heading ${initializer(index)}`,
      description: `This is a description for ${initializer(index)}, Drag me`
    };
  });
}

type Items = Record<UniqueIdentifier, ReturnType<typeof createData>>;

export default function App() {
  const [items, setItems] = useState<Items>({
    A: createData(4, (index) => `A${index + 1}`),
    B: createData(5, (index) => `B${index + 1}`),
    C: createData(4, (index) => `C${index + 1}`)
  });
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );
  function handleDragStart(event: DragStartEvent) {
    const activeId = event.active.id;
    setActiveId(activeId);
  }

  function findContainer(id: UniqueIdentifier) {
    if (id in items) {
      return id;
    }
    return Object.keys(items).find((key) => {
      return items[key].some((item) => item.id === id);
    });
  }

  function handleDragOver(event: DragOverEvent) {
    console.log('over', event);
  }

  function handleDragOverA(event: DragOverEvent) {
    const { active, over } = event;
    const activeId = active.id;
    const overId = over?.id;
    const activeContainer = findContainer(activeId);
    const overContainer = overId ? findContainer(overId) : undefined;

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    setItems((items) => {
      const activeItems = items[activeContainer];
      const overItems = items[overContainer];

      // Find the indexes for the items
      const activeIndex = activeItems?.findIndex(
        (item) => item.id === activeId
      );
      const overIndex = overItems?.findIndex((item) => item.id === overId);
      let newIndex: number;
      if (overId && overId in items) {
        newIndex = overItems.length + 1;
      } else {
        const isBelowOverItem =
          over &&
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height;
        const modifier = isBelowOverItem ? 1 : 0;
        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
      }
      return {
        ...items,
        [activeContainer]: items[activeContainer].filter(
          (item) => item.id !== active.id
        ),
        [overContainer]: [
          ...items[overContainer].slice(0, newIndex),
          items[activeContainer][activeIndex],
          ...items[overContainer].slice(newIndex, items[overContainer].length)
        ]
      };
    });
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    const activeId = active.id;
    const overId = over?.id;
    const activeContainer = findContainer(activeId);
    const overContainer = overId ? findContainer(overId) : undefined;

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      return;
    }

    const activeIndex = items[activeContainer]?.findIndex(
      (item) => item.id === activeId
    );
    const overIndex = items[overContainer].findIndex(
      (item) => item.id === overId
    );

    if (activeIndex !== overIndex) {
      setItems((items) => ({
        ...items,
        [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex)
      }));
    }
    setActiveId(null);
  }

  return (
    <div className="home-wrapper">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        {Object.keys(items).map((key) => (
          <Container key={key} containerId={key} items={items[key]} />
        ))}
      </DndContext>
    </div>
  );
}
