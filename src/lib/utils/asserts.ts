// Simple type asserter to ensure an element is a node
export function assertEventTargetIsNode(
  e: EventTarget | null,
): asserts e is Node {
  if (!e || !("nodeType" in e)) {
    throw new Error(`Node expected`);
  }
}
